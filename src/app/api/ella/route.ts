import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from 'ai'
import { z } from 'zod'
import { ellaInstructions } from '@/lib/ella/instructions'

export const runtime = 'nodejs'
export const maxDuration = 30

// The model runs through Vercel AI Gateway. On Vercel it signs in by itself (OIDC),
// so there is no AI key to store. Spend shows up on the team's AI Gateway page.
const MODEL = 'anthropic/claude-sonnet-5.5'

// Limits that keep a stranger from using Ella Rae as a free general chatbot.
const MAX_USER_TURNS = 30
const MAX_HISTORY = 24
const MAX_CHARS = 1500

// Best effort per-IP limit. Each server instance keeps its own count, so this
// slows a flood down rather than stopping a determined one.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 40
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

function allowedOrigin(origin: string | null) {
  if (!origin) return false
  try {
    const host = new URL(origin).hostname
    return (
      host === 'miskwakimiwan.com' ||
      host.endsWith('.miskwakimiwan.com') ||
      (host.startsWith('miskwa-site') && host.endsWith('.vercel.app')) ||
      host === 'localhost'
    )
  } catch {
    return false
  }
}

function textOf(m: UIMessage) {
  return m.parts.map((p) => (p.type === 'text' ? p.text : '')).join('')
}

export async function POST(req: Request) {
  if (!allowedOrigin(req.headers.get('origin'))) {
    return new Response('Forbidden', { status: 403 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return new Response('Too many messages. Please rest a while and come back.', {
      status: 429,
    })
  }

  let messages: UIMessage[]
  let locale: string | undefined
  try {
    ;({ messages, locale } = await req.json())
    if (!Array.isArray(messages) || messages.length === 0) throw new Error()
  } catch {
    return new Response('Invalid request.', { status: 400 })
  }

  const userTurns = messages.filter((m) => m.role === 'user')
  if (userTurns.length > MAX_USER_TURNS) {
    return new Response('This conversation has reached its length. Please start a new one.', {
      status: 413,
    })
  }
  if (userTurns.some((m) => textOf(m).length > MAX_CHARS)) {
    return new Response('That message is too long for this small window.', { status: 413 })
  }

  const result = streamText({
    model: MODEL,
    instructions: ellaInstructions(locale === 'es' || locale === 'fr' || locale === 'de' ? locale : 'en'),
    messages: await convertToModelMessages(messages.slice(-MAX_HISTORY)),
    // The model thinks before it answers, and that thinking counts against this
    // limit. Low reasoning suits a short chat; the limit is a safety net, and the
    // replies stay short by instruction. At 600 with default reasoning, heavy
    // questions were cut off mid-sentence.
    reasoning: 'low',
    maxOutputTokens: 2000,
    tools: {
      offerReleaseAlert: {
        description:
          'Show the reader a small form to leave their email and be told when Forgiveness as Freedom is released.',
        inputSchema: z.object({}),
        execute: async () => ({ book: 'Forgiveness as Freedom', release: '2026-12-21' }),
      },
    },
  })

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  })
}

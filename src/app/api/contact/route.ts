import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type Body = {
  name?: string
  email?: string
  subject?: string
  message?: string
  website?: string
}

const SUBJECTS: Record<string, string> = {
  general: 'General Inquiry',
  books: 'About the Books',
  ltl: 'Living The Light Program',
  sessions: 'Private Healing Sessions',
  media: 'Media / Speaking',
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: silently accept and drop anything that fills the hidden field.
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill in your name, email, and message.' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.INQUIRY_EMAIL_TO ?? 'miskwa@miskwakimiwan.com'
  const from =
    process.env.INQUIRY_EMAIL_FROM ?? 'Miskwa Kimiwan <miskwa@miskwakimiwan.com>'

  // Fail loudly rather than pretending. A confirmation the reader can trust is
  // the whole point of this route; a silent drop is the bug it replaces.
  if (!apiKey) {
    console.error('[miskwa contact] RESEND_API_KEY is not set; message not sent.')
    return NextResponse.json(
      { error: 'The contact form is not accepting messages right now.' },
      { status: 503 }
    )
  }

  const topic = body.subject ? SUBJECTS[body.subject] ?? body.subject : undefined

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: topic
          ? `[miskwakimiwan.com] ${topic} — ${name}`
          : `[miskwakimiwan.com] New message — ${name}`,
        html: `
          <h2 style="font-family: Georgia, serif;">New message from miskwakimiwan.com</h2>
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic ?? '(none selected)')}</p>
          <hr />
          <pre style="font-family: Georgia, serif; white-space: pre-wrap;">${escapeHtml(message)}</pre>
        `,
      }),
    })

    if (!res.ok) {
      console.error('[miskwa contact] Resend error:', res.status, await res.text())
      return NextResponse.json(
        { error: 'Mail service is temporarily unavailable.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[miskwa contact] Unexpected error:', err)
    return NextResponse.json(
      { error: 'Unexpected error sending your message.' },
      { status: 500 }
    )
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

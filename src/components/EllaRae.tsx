'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'

// Shown in the window only. The model never sees it, so the instructions file stays
// on the server and out of the browser.
const ELLA_GREETING =
  "Hello. I'm Ella Rae, an AI chatbot and the reading guide for this site. I can help you find the book that fits what you're carrying, tell you where to get it, or offer a question to sit with. I'm not a person, and I'm not Miskwa Kimiwan."

const STARTERS = [
  'Which book should I start with?',
  'Offer me a question to sit with',
  'When does Forgiveness as Freedom come out?',
]

// Turns bare site paths (/red-rain) and full URLs into links.
const LINK = /(https?:\/\/[^\s)]+[^\s).,;:!?'"]|(?<![\w/])\/[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)*)/g

function linkify(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0
    if (i > last) out.push(text.slice(last, i))
    const href = m[0]
    const external = href.startsWith('http')
    out.push(
      <a
        key={i}
        href={href}
        className="underline decoration-glow/50 underline-offset-2 text-glow hover:text-sun break-words"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {external ? href.replace(/^https?:\/\/(www\.)?/, '') : href}
      </a>
    )
    last = i + href.length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

function ReleaseAlertForm() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')

  async function submit(e: FormEvent) {
    e.preventDefault()
    setState('sending')
    setError('')
    try {
      const res = await fetch('/api/ella/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent, website }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? 'That did not go through.')
      setState('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'That did not go through.')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <p className="mt-3 border border-glow/30 px-4 py-3 text-caption text-bone/80">
        Thank you. One email will come to you when Forgiveness as Freedom is released on
        December 21.
      </p>
    )
  }

  return (
    <form onSubmit={submit} className="mt-3 border border-glow/30 px-4 py-4 space-y-3">
      <label className="block text-caption text-bone/80" htmlFor="ella-email">
        Your email, for one note when Forgiveness as Freedom is released
      </label>
      <input
        id="ella-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-night border border-ash px-3 py-2 text-bone font-body text-base focus:outline-none focus:border-glow"
      />
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
      />
      <label className="flex gap-3 items-start text-caption text-bone/70">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1.5 accent-glow"
        />
        <span>
          Yes, Miskwa Kimiwan may email me once about this release. My address is not added
          to any list. See the <a href="/privacy" className="underline text-glow">privacy policy</a>.
        </span>
      </label>
      {error && <p className="text-caption text-heartfire">{error}</p>}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="font-display text-xs tracking-[0.2em] uppercase border border-glow text-glow px-5 py-2 hover:bg-glow/10 disabled:opacity-50"
      >
        {state === 'sending' ? 'Sending' : 'Tell me'}
      </button>
    </form>
  )
}

export default function EllaRae() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage, status, error, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: '/api/ella' }),
  })
  const scroller = useRef<HTMLDivElement>(null)
  const field = useRef<HTMLTextAreaElement>(null)
  const launcher = useRef<HTMLButtonElement>(null)
  const busy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight })
  }, [messages, status])

  useEffect(() => {
    if (!open) return
    field.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        launcher.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function send(text: string) {
    const t = text.trim()
    if (!t || busy) return
    sendMessage({ text: t })
    setInput('')
  }

  return (
    <>
      {!open && (
        <button
          ref={launcher}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-3 bg-charcoal/95 border border-glow/60 px-4 py-3 text-left shadow-lg shadow-black/50 hover:border-glow transition-colors"
        >
          <span aria-hidden className="text-glow text-lg leading-none">&#10022;</span>
          <span className="flex flex-col">
            <span className="font-display text-sm tracking-[0.18em] uppercase text-bone">Ella Rae</span>
            <span className="font-body text-xs text-bone/60">AI reading guide</span>
          </span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="ella-title"
          className="fixed z-50 inset-x-2 bottom-2 top-20 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[24rem] sm:h-[min(36rem,calc(100vh-7rem))] flex flex-col bg-charcoal border border-glow/40 shadow-2xl shadow-black/70 text-bone"
        >
          <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-ash">
            <div>
              <p id="ella-title" className="font-display text-base tracking-[0.18em] uppercase text-bone">
                Ella Rae
              </p>
              <p className="font-body text-xs text-bone/60">
                An AI chatbot, not a person. It can make mistakes.
              </p>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={() => setMessages([])}
                  className="font-display text-[10px] tracking-[0.2em] uppercase text-bone/50 hover:text-glow px-2 py-1"
                >
                  New
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  setTimeout(() => launcher.current?.focus(), 0)
                }}
                aria-label="Close Ella Rae"
                className="text-bone/60 hover:text-glow text-2xl leading-none px-2"
              >
                &times;
              </button>
            </div>
          </div>

          <div ref={scroller} className="flex-1 overflow-y-auto px-5 py-4 space-y-4 font-body text-base leading-relaxed" aria-live="polite">
            <p className="text-bone/85">{ELLA_GREETING}</p>

            {messages.length === 0 && (
              <div className="flex flex-col gap-2 pt-1">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="text-left border border-ash hover:border-glow/60 px-3 py-2 text-caption text-bone/75 hover:text-bone transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : ''}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] bg-ash/70 px-4 py-2 text-bone whitespace-pre-wrap break-words'
                      : 'text-bone/90 whitespace-pre-wrap break-words'
                  }
                >
                  {m.role === 'assistant' && <span className="sr-only">Ella Rae: </span>}
                  {m.parts.map((p, i) => {
                    if (p.type === 'text') {
                      return <span key={i}>{m.role === 'assistant' ? linkify(p.text) : p.text}</span>
                    }
                    if (p.type === 'tool-offerReleaseAlert' && 'state' in p && p.state === 'output-available') {
                      return <ReleaseAlertForm key={i} />
                    }
                    return null
                  })}
                </div>
              </div>
            ))}

            {status === 'submitted' && <p className="text-bone/50 italic">Ella Rae is writing&hellip;</p>}
            {error && (
              <p className="text-caption text-heartfire">
                Something went wrong reaching Ella Rae. Please try again in a moment.
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="border-t border-ash px-3 py-3 flex gap-2 items-end"
          >
            <label htmlFor="ella-input" className="sr-only">
              Message Ella Rae
            </label>
            <textarea
              id="ella-input"
              ref={field}
              rows={1}
              maxLength={1500}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send(input)
                }
              }}
              placeholder="Ask about the books"
              className="flex-1 resize-none bg-night border border-ash px-3 py-2 text-bone font-body text-base placeholder:text-bone/50 focus:outline-none focus:border-glow max-h-32"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="font-display text-xs tracking-[0.2em] uppercase border border-glow text-glow px-4 py-2.5 hover:bg-glow/10 disabled:opacity-40"
            >
              Send
            </button>
          </form>
          <p className="px-5 pb-3 font-body text-[11px] text-bone/60">
            Not for crisis support. In Canada or the US, call or text 988. Chats are not saved
            here. <a href="/privacy#ella-rae" className="underline">Privacy</a>
          </p>
        </div>
      )}
    </>
  )
}

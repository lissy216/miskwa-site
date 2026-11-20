import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

// A reader asked Ella Rae to be told when Forgiveness as Freedom is released.
// The request is emailed to the author's inbox through Resend, the same way the
// contact form works. Nothing is stored on this site. On release day, write to
// the people in those emails, then delete them.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: { email?: string; consent?: boolean; website?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (body.website) return NextResponse.json({ ok: true }) // honeypot

  const email = body.email?.trim() ?? ''
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Please check the email address.' }, { status: 400 })
  }
  if (body.consent !== true) {
    return NextResponse.json(
      { error: 'Please tick the box so we have your permission to write.' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.INQUIRY_EMAIL_TO ?? 'miskwa@miskwakimiwan.com'
  const from = process.env.INQUIRY_EMAIL_FROM ?? 'Miskwa Kimiwan <miskwa@miskwakimiwan.com>'

  if (!apiKey) {
    console.error('[ella notify] RESEND_API_KEY is not set; request not sent.')
    return NextResponse.json(
      { error: 'Sign-ups are not working right now. The Rainfall Newsletter on Substack will announce the release.' },
      { status: 503 }
    )
  }

  const when = new Date().toISOString()
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: '[Ella Rae] Tell me when Forgiveness as Freedom is released',
      text: [
        'A reader asked Ella Rae, the website chatbot, to be told when Forgiveness as Freedom is released.',
        '',
        `Email: ${email}`,
        `Permission given: yes, they ticked the consent box at ${when}`,
        '',
        'They agreed to one email about the release. Do not add them to a newsletter unless they ask.',
      ].join('\n'),
    }),
  })

  if (!res.ok) {
    console.error('[ella notify] Resend error:', res.status, await res.text())
    return NextResponse.json({ error: 'That did not go through. Please try again later.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

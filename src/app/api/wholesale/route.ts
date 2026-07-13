import { NextResponse } from 'next/server'
import { sendEmail, wholesaleInquiryEmail, WholesaleInquiryFields } from '@/lib/email'

export const runtime = 'nodejs'

const asNumber = (v: unknown): number => {
  const n = typeof v === 'number' ? v : parseInt(String(v || ''), 10)
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0
}
const asString = (v: unknown): string =>
  typeof v === 'string' ? v.trim() : ''

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Simple honeypot: if a hidden "website" field is filled, silently discard
  if (asString(body.website)) {
    return NextResponse.json({ ok: true })
  }

  const fields: WholesaleInquiryFields = {
    contactName: asString(body.contactName),
    business: asString(body.business) || undefined,
    email: asString(body.email).toLowerCase(),
    phone: asString(body.phone) || undefined,
    shippingAddress: asString(body.shippingAddress),
    qtySignal: asNumber(body.qtySignal),
    qtyRedRain: asNumber(body.qtyRedRain),
    qtyBookOfQuestions: asNumber(body.qtyBookOfQuestions),
    timing: asString(body.timing) || undefined,
    notes: asString(body.notes) || undefined,
  }

  if (!fields.contactName) {
    return NextResponse.json({ error: 'Contact name is required' }, { status: 400 })
  }
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
  }
  if (!fields.shippingAddress) {
    return NextResponse.json({ error: 'Shipping address is required' }, { status: 400 })
  }
  const totalCopies =
    fields.qtySignal + fields.qtyRedRain + fields.qtyBookOfQuestions
  if (totalCopies < 1) {
    return NextResponse.json(
      { error: 'Please indicate at least one book and quantity' },
      { status: 400 }
    )
  }

  try {
    const payload = wholesaleInquiryEmail(fields)
    await sendEmail({ ...payload, replyTo: fields.email })
    return NextResponse.json({ ok: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Send failed'
    console.error('[wholesale] send failed:', msg)
    return NextResponse.json({ error: 'Could not send inquiry' }, { status: 500 })
  }
}

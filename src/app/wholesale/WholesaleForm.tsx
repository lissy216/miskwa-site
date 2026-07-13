'use client'

import { useState } from 'react'

interface FormState {
  contactName: string
  business: string
  email: string
  phone: string
  shippingAddress: string
  qtySignal: string
  qtyRedRain: string
  qtyBookOfQuestions: string
  timing: string
  notes: string
  website: string // honeypot
}

const empty: FormState = {
  contactName: '',
  business: '',
  email: '',
  phone: '',
  shippingAddress: '',
  qtySignal: '',
  qtyRedRain: '',
  qtyBookOfQuestions: '',
  timing: '',
  notes: '',
  website: '',
}

const inputCls =
  'w-full px-4 py-3 bg-charcoal border border-bone/20 text-bone placeholder-bone/30 focus:outline-none focus:border-glow rounded-sm font-body'
const labelCls =
  'block font-display text-xs tracking-[0.2em] uppercase text-bone/70 mb-2'

export default function WholesaleForm() {
  const [data, setData] = useState<FormState>(empty)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setStatus('submitting')
    try {
      const res = await fetch('/api/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(json.error || 'Could not send inquiry')
      }
      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Send failed')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-glow/40 bg-glow/5 px-6 py-8 rounded-sm">
        <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-3">Received</p>
        <p className="font-serif italic text-body-lg text-bone/80 leading-relaxed">
          Thank you. Your inquiry has been sent to miskwa@miskwakimiwan.com. You will
          receive a quote by email within a few business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={data.website}
        onChange={set('website')}
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="contactName">Contact name *</label>
          <input id="contactName" required value={data.contactName} onChange={set('contactName')} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="business">Business or organisation</label>
          <input id="business" value={data.business} onChange={set('business')} className={inputCls} placeholder="Optional" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email *</label>
          <input id="email" type="email" required value={data.email} onChange={set('email')} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" value={data.phone} onChange={set('phone')} className={inputCls} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="shippingAddress">Shipping address *</label>
        <textarea
          id="shippingAddress"
          required
          rows={4}
          value={data.shippingAddress}
          onChange={set('shippingAddress')}
          className={inputCls}
          placeholder="Street, city, province or state, postal code, country"
        />
      </div>

      <div>
        <p className={labelCls}>Books and quantities *</p>
        <p className="font-serif italic text-caption text-bone/50 mb-4">
          Minimum five copies total preferred. Leave blank or enter zero for titles you do not need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-serif text-body text-bone/70 mb-2" htmlFor="qtySignal">
              The Signal
            </label>
            <input id="qtySignal" type="number" min="0" value={data.qtySignal} onChange={set('qtySignal')} className={inputCls} placeholder="0" />
          </div>
          <div>
            <label className="block font-serif text-body text-bone/70 mb-2" htmlFor="qtyRedRain">
              Red Rain
            </label>
            <input id="qtyRedRain" type="number" min="0" value={data.qtyRedRain} onChange={set('qtyRedRain')} className={inputCls} placeholder="0" />
          </div>
          <div>
            <label className="block font-serif text-body text-bone/70 mb-2" htmlFor="qtyBookOfQuestions">
              The Book of Questions
            </label>
            <input id="qtyBookOfQuestions" type="number" min="0" value={data.qtyBookOfQuestions} onChange={set('qtyBookOfQuestions')} className={inputCls} placeholder="0" />
          </div>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="timing">Timing or when needed</label>
        <input id="timing" value={data.timing} onChange={set('timing')} className={inputCls} placeholder="Optional — e.g. by end of month, no rush" />
      </div>

      <div>
        <label className={labelCls} htmlFor="notes">Notes</label>
        <textarea id="notes" rows={3} value={data.notes} onChange={set('notes')} className={inputCls} placeholder="Optional — anything else we should know" />
      </div>

      {error && (
        <p className="text-heartfire font-body text-body" role="alert">
          {error}
        </p>
      )}

      <div className="pt-2">
        <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
          {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
        </button>
        <p className="font-serif italic text-caption text-bone/45 mt-4">
          A copy of your inquiry is sent to miskwa@miskwakimiwan.com. We reply within a few business days.
        </p>
      </div>
    </form>
  )
}

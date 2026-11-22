'use client'

import { useEffect, useState } from 'react'

// Client component: no metadata here (it lives in layout.tsx). The German error
// and success messages are written in this page; the English error text the API
// returns is not shown.

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [website, setWebsite] = useState('') // honeypot
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  // /de/contact?topic=speaking (from the About page) opens with that topic chosen.
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get('topic')
    if (topic === 'speaking') setFormData((f) => ({ ...f, subject: 'media' }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website }),
      })
      if (!res.ok) {
        setError(
          res.status === 400
            ? 'Ihre Nachricht konnte nicht gesendet werden. Bitte prüfen Sie, ob Name, E-Mail-Adresse und Nachricht vollständig sind.'
            : 'Ihre Nachricht konnte im Moment nicht gesendet werden.'
        )
        setStatus('error')
        return
      }
      setStatus('sent')
    } catch {
      setError('Ihre Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* ============================================
          CONTACT HERO
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              Kontakt aufnehmen
            </p>
            <h1 className="font-serif text-display-sm text-night mb-4">
              Kontakt
            </h1>
            <p className="font-body text-body text-night/75 mb-10">
              Ob Sie eine Frage zur Arbeit oder zu den Büchern haben oder bereit sind zu beginnen: Hier fängt es an.
            </p>

            {status === 'sent' ? (
              <div className="bg-white/30 border border-glow/30 rounded-sm p-8">
                <p className="font-serif text-subheading text-night mb-2">
                  Danke.
                </p>
                <p className="font-body text-body text-night/75">
                  Ihre Nachricht ist angekommen. Sie hören von uns.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-display text-xs tracking-[0.15em] uppercase text-night/75 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:border-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow transition-colors
                             font-body text-body placeholder-night/40"
                    placeholder=" "
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-display text-xs tracking-[0.15em] uppercase text-night/75 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:border-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow transition-colors
                             font-body text-body placeholder-night/40"
                    placeholder=" "
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-display text-xs tracking-[0.15em] uppercase text-night/75 mb-2">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:border-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow transition-colors
                             font-body text-body"
                  >
                    <option value="">Thema wählen</option>
                    <option value="general">Allgemeine Anfrage</option>
                    <option value="books">Zu den Büchern</option>
                    <option value="media">Vorträge, Lesungen und Medien</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-display text-xs tracking-[0.15em] uppercase text-night/75 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:border-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow transition-colors
                             font-body text-body resize-none placeholder-night/40"
                    placeholder=" "
                  />
                </div>

                <div className="hidden" aria-hidden>
                  <label htmlFor="website">Dieses Feld leer lassen</label>
                  <input
                    type="text"
                    id="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="font-body text-body text-ember">
                    {error} Sie können auch direkt schreiben an{' '}
                    <a href="mailto:miskwa@miskwakimiwan.com" className="underline">
                      miskwa@miskwakimiwan.com
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-light disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:pt-24">
            {/* Newsletter */}
            <div className="bg-night rounded-sm p-8 mb-8">
              <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
                The Rainfall Newsletter
              </p>
              <h3 className="font-serif text-subheading text-bone mb-4">
                Gehen Sie mit mir durch den Wald
              </h3>
              <p className="font-body text-caption text-bone/70 mb-6">
                Texte über Erlösung, den Körper und die Praxis, mehr zu werden als das, was geschehen ist. Auf Englisch erschienen.
              </p>
              <a
                href="https://substack.com/@miskwakimiwan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center block"
              >
                Auf Substack abonnieren
              </a>
            </div>

            {/* Social */}
            <div className="bg-white/10 border border-bridge rounded-sm p-8">
              <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/85 mb-4">
                Folgen
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/MiskwaKimiwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body text-night/75 hover:text-night transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/miskwakimiwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body text-night/75 hover:text-night transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

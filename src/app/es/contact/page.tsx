'use client'

import { useEffect, useState } from 'react'

// Client component: no metadata here. The Spanish error and success messages
// are written in this page; the English error text the API returns is not shown.

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

  // /es/contact?topic=speaking (from the About page) opens with that topic chosen.
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
            ? 'No se pudo enviar tu mensaje. Revisa que tu nombre, tu correo y tu mensaje estén completos.'
            : 'No se pudo enviar tu mensaje en este momento.'
        )
        setStatus('error')
        return
      }
      setStatus('sent')
    } catch {
      setError('No se pudo enviar tu mensaje. Revisa tu conexión.')
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
              Escríbenos
            </p>
            <h1 className="font-serif text-display-sm text-night mb-4">
              Contacto
            </h1>
            <p className="font-body text-body text-night/75 mb-10">
              Si tienes una pregunta sobre la obra o los libros, o si quieres empezar, este es el lugar.
            </p>

            {status === 'sent' ? (
              <div className="bg-white/30 border border-glow/30 rounded-sm p-8">
                <p className="font-serif text-subheading text-night mb-2">
                  Gracias.
                </p>
                <p className="font-body text-body text-night/75">
                  Recibimos tu mensaje. Te responderemos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-display text-xs tracking-[0.15em] uppercase text-night/75 mb-2">
                    Nombre
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
                    Correo electrónico
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
                    Asunto
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:border-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow transition-colors
                             font-body text-body"
                  >
                    <option value="">Elige un tema</option>
                    <option value="general">Consulta general</option>
                    <option value="books">Sobre los libros</option>
                    <option value="media">Charlas, lecturas y medios</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-display text-xs tracking-[0.15em] uppercase text-night/75 mb-2">
                    Mensaje
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
                  <label htmlFor="website">Deja este campo vacío</label>
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
                    {error} También puedes escribir directamente a{' '}
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
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:pt-24">
            {/* Newsletter */}
            <div className="bg-night rounded-sm p-8 mb-8">
              <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
                El boletín Rainfall
              </p>
              <h3 className="font-serif text-subheading text-bone mb-4">
                Camina conmigo por el bosque
              </h3>
              <p className="font-body text-caption text-bone/70 mb-6">
                Escritos sobre la redención, el cuerpo y la práctica de llegar a ser más que lo que pasó.
              </p>
              <a
                href="https://substack.com/@miskwakimiwan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center block"
              >
                Suscríbete en Substack
              </a>
            </div>

            {/* Social */}
            <div className="bg-white/10 border border-bridge rounded-sm p-8">
              <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/85 mb-4">
                Conecta
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

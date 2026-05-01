'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata must be in a separate file for client components
// Move to contact/layout.tsx if needed

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to form handler (Formspree, Netlify Forms, or custom API route)
    // For now, this is a placeholder
    console.log('Form submitted:', formData)
    setSubmitted(true)
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
              Get in Touch
            </p>
            <h1 className="font-serif text-display-sm text-night mb-4">
              Contact
            </h1>
            <p className="font-body text-body text-night/60 mb-10">
              Whether you have a question about the work, the books, or the programs, or you are ready to begin, this is the place to start.
            </p>

            {submitted ? (
              <div className="bg-white/30 border border-glow/30 rounded-sm p-8">
                <p className="font-serif text-subheading text-night mb-2">
                  Thank you.
                </p>
                <p className="font-body text-body text-night/60">
                  Your message has been received. We will be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-display text-xs tracking-[0.15em] uppercase text-night/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:outline-none focus:border-glow transition-colors
                             font-body text-body placeholder-night/40"
                    placeholder=" "
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-display text-xs tracking-[0.15em] uppercase text-night/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:outline-none focus:border-glow transition-colors
                             font-body text-body placeholder-night/40"
                    placeholder=" "
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-display text-xs tracking-[0.15em] uppercase text-night/60 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:outline-none focus:border-glow transition-colors
                             font-body text-body"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="books">About the Books</option>
                    <option value="ltl">Living The Light Program</option>
                    <option value="sessions">Private Healing Sessions</option>
                    <option value="media">Media / Speaking</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-display text-xs tracking-[0.15em] uppercase text-night/60 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-night border border-bridge rounded-sm text-bone
                             focus:outline-none focus:border-glow transition-colors
                             font-body text-body resize-none placeholder-night/40"
                    placeholder=" "
                  />
                </div>

                <button type="submit" className="btn-light">
                  Send Message
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
                Walk with me through the forest
              </h3>
              <p className="font-body text-caption text-bone/50 mb-6">
                Writing on redemption, the body, and the practice of becoming more than what happened.
              </p>
              <a
                href="https://substack.com/@miskwakimiwan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center block"
              >
                Subscribe on Substack
              </a>
            </div>

            {/* Book a Session */}
            <div className="bg-white/10 border border-bridge rounded-sm p-8 mb-8">
              <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
                Private Sessions
              </p>
              <h3 className="font-serif text-subheading text-night mb-4">
                Book a healing session
              </h3>
              <p className="font-body text-caption text-night/60 mb-6">
                One-on-one, present, and honest. The work meets you wherever you are.
              </p>
              <a
                href="https://calendly.com/the8thfire"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light text-center block"
              >
                View Availability
              </a>
            </div>

            {/* Social */}
            <div className="bg-white/10 border border-bridge rounded-sm p-8">
              <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/60 mb-4">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/MiskwaKimiwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body text-night/60 hover:text-night transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/miskwakimiwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body text-night/60 hover:text-night transition-colors"
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

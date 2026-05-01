import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Living The Light Sacred Alchemy Training Program and private healing sessions. Structured, honest, body-centered training and healing that creates sovereignty, not dependency.',
}

export default function Programs() {
  const modules = [
    { module: '1', partA: 'February 27 - March 1, 2026', partB: 'March 27 - 29, 2026' },
    { module: '2', partA: 'June 26 - 28, 2026', partB: 'July 24 - 26, 2026' },
    { module: '3', partA: 'October 23 - 25, 2026', partB: 'November 27 - 29, 2026' },
    { module: '4', partA: 'February 26 - 28, 2027', partB: 'March 19 - 21, 2027' },
    { module: '5', partA: 'June 25 - 27, 2027', partB: 'July 23 - 25, 2027' },
    { module: '6', partA: 'October 22 - 24, 2027', partB: 'November 19 - 21, 2027' },
    { module: '7', partA: 'February 18 - 20, 2028', partB: 'March 24 - 26, 2028' },
    { module: '8', partA: 'June 23 - 25, 2028', partB: 'July 21 - 23, 2028' },
  ]

  return (
    <>
      {/* ============================================
          LTL HERO
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
              Training Program
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-4">
              Living The Light
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              Sacred Alchemy Training Program
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              You have felt the pull toward healing work. Toward something deeper than what the surface offers. Maybe you have tried other trainings and sensed that something essential was missing. Or maybe you have never trained at all, but the call will not leave you alone.
            </p>
            <p className="font-body text-body text-bone/50 leading-relaxed">
              Living The Light is a two-year, eight-module program that teaches spiritual healing, energy medicine, and the ceremonies to heal your life and dream your world into being. It does not require prior experience. It requires honesty.
            </p>
          </div>
          <div className="relative aspect-square bg-charcoal/50 rounded-sm overflow-hidden">
            <Image
              src="/images/ltl-program.png"
              alt="Living The Light Sacred Alchemy Training"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT YOU WILL LEARN
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="font-serif text-heading text-bone mb-10">
              What you will learn
            </h2>
            <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
              <p>
                From the fundamentals through advanced practice, you will develop your intuition and energy healing abilities. Breath work. Energy scanning, chakras, and the aura. Working with and influencing time for healing and manifestation.
              </p>
              <p>
                Journey work: animal totems, power and soul retrieval, past life work, spirit guides. Energetic protection, shifting toxic energies, and space work. Astral projection, Akashic Records, stepping into destiny, readings.
              </p>
              <p>
                Over the course of the program, you will receive medicine rites and healing attunements. You will learn how to combine these teachings to create sessions for yourself and for others. And you will do your own work while you train, because a healer who has not faced their own wound cannot hold space for someone else&rsquo;s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">
            How it works
          </h2>
          <div className="space-y-6 font-body text-body text-night/60 leading-relaxed">
            <p>
              The program is interactive and built for your learning. Each topic is introduced with teaching and notes, followed by a live demonstration. Then live questions and answers, so that when you go into a student exchange to practice, you feel grounded in what you are doing. After that, you practice with other students in class. Between weekends, you work on yourself and practice with others.
            </p>
            <p>
              Teaching assistants are available during exchanges and between classes. Online forums stay open for questions, direction, and community between modules.
            </p>
            <p>
              You do not need prior experience. You do not need to be healed to begin. LTL is a self-healing program. You learn to hold space for yourself first, and by learning that, you learn to hold space for others.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PROGRAM DETAILS: DATES + PRICING
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Dates */}
            <div>
              <h2 className="font-serif text-heading text-bone mb-10">
                Program Dates
              </h2>
              <p className="text-caption text-bone/40 mb-6">
                16 weekends over 2 years &middot; Fridays 5&ndash;9 PM &middot; Saturdays &amp; Sundays 9 AM&ndash;6 PM
              </p>
              <div className="space-y-4">
                {modules.map((m) => (
                  <div key={m.module} className="border border-bridge/50 rounded-sm p-5">
                    <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/60 mb-2">
                      Module {m.module}
                    </p>
                    <p className="font-body text-caption text-bone/60">
                      Part A: {m.partA}
                    </p>
                    <p className="font-body text-caption text-bone/60">
                      Part B: {m.partB}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="font-serif text-heading text-bone mb-10">
                Investment
              </h2>
              <p className="font-body text-body text-bone/60 mb-8 leading-relaxed">
                Eight modules comprising over 320 hours of medicine work. Two payment options are available.
              </p>

              <div className="space-y-6">
                <div className="border border-bridge/50 rounded-sm p-8">
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-glow mb-3">
                    Prepay &amp; Save
                  </p>
                  <p className="font-serif text-display-sm text-bone mb-2">$7,693</p>
                  <p className="font-body text-caption text-bone/50">
                    Save $1,099. Includes one module free. Regular price $8,792.
                  </p>
                </div>

                <div className="border border-bridge/30 rounded-sm p-8">
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/60 mb-3">
                    Monthly Payment Plan
                  </p>
                  <p className="font-serif text-display-sm text-bone mb-2">$389.63<span className="font-body text-body text-bone/40">/month</span></p>
                  <p className="font-body text-caption text-bone/50">
                    24 equal monthly payments. 5.99% finance charge. Taxes extra.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Register Now
                </Link>
                <p className="font-body text-caption text-bone/30 mt-4">
                  Registration opens a conversation. We will be in touch to walk through next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PRIVATE SESSIONS
          ============================================ */}
      <section id="sessions" className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              One-on-One
            </p>
            <h2 className="font-serif text-heading text-night mb-8">
              Private Healing Sessions
            </h2>
            <div className="space-y-6 font-body text-body-lg text-night/60 leading-relaxed">
              <p>
                Spiritual alchemy is a way of life. It is the practice of transforming what is into what it needs to become. Taking hurt, pain, trauma, the feeling of being stuck, the limiting beliefs you carry about yourself, and shifting them into something that makes you stronger, more awake, and more alive than before.
              </p>
              <p>
                A private session is a space held for you. One-on-one, present, and honest. No performance. No script. The work meets you wherever you are.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://calendly.com/the8thfire"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                Book a Session
              </a>
            </div>
          </div>
          <div className="relative aspect-square bg-parchment/50 rounded-sm overflow-hidden">
            <Image
              src="/images/all-healed.png"
              alt="Healing presence and light"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  )
}

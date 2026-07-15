import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wholesale for Retailers',
  description:
    'Wholesale pricing on Miskwa Kimiwan books for bookstores, wellness centres, healers, therapists, and community spaces. 55 percent discount off retail, quoted per order.',
}

const books = [
  { title: 'The Signal', subtitle: 'Why Life and People Keep Happening to You', retail: 22.99, wholesale: 10.35 },
  { title: 'Red Rain', subtitle: 'A Soul Shattered', retail: 19.99, wholesale: 9.0 },
  { title: 'The Book of Questions', subtitle: 'The Socratic Year of the Soul', retail: 24.99, wholesale: 11.25 },
]

const fmt = (n: number) => `$${n.toFixed(2)}`

// Pre-filled mailto template for the wholesale inquiry button. Opens the
// visitor's default mail client with subject and body ready to fill in.
const mailtoBody = `Hello Miskwa,

I would like to inquire about wholesale ordering. Please quote me for the following.

Contact name:
Business or organisation:
Email:
Phone (optional):

Books and quantities:
    The Signal:
    Red Rain:
    The Book of Questions:

Shipping address:

Timing (when needed):

Notes:

Thank you.`

const mailtoUrl = `mailto:miskwa@miskwakimiwan.com?subject=${encodeURIComponent('Wholesale inquiry')}&body=${encodeURIComponent(mailtoBody)}`

export default function Wholesale() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
            For Bookstores and Community Spaces
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-bone mb-6">
            Wholesale
          </h1>
          <div className="divider-warm mx-auto mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed max-w-2xl mx-auto">
            For bookstores, wellness centres, healers, therapists, and community spaces
            that want to carry these books in their shops or offer them to their clients
            and communities.
          </p>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">How it works</h2>
          <div className="space-y-5 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Wholesale pricing follows the standard Ingram trade discount of 55 percent
              off retail. Books are fulfilled through Amazon KDP author copies or
              IngramSpark and shipped directly to your address.
            </p>
            <p>
              A minimum of five copies per order is preferred, in any combination of the
              three titles. Shipping is calculated per order based on destination and
              quantity, and is billed on top of the wholesale price. Larger orders may
              be eligible for further discount, quoted on request.
            </p>
            <p>
              Once we receive your inquiry, we will confirm availability, quote the
              final total including shipping, and arrange payment by email invoice or
              e-transfer. Books ship as soon as payment clears.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING TABLE
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-3">Pricing</h2>
          <p className="font-serif italic text-body-lg text-night/60 mb-10">
            Per copy, before shipping. All prices in CAD.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-night/20">
                  <th className="text-left py-4 pr-4 font-display text-xs tracking-[0.15em] uppercase text-night/60">
                    Title
                  </th>
                  <th className="text-right py-4 px-4 font-display text-xs tracking-[0.15em] uppercase text-night/60">
                    Retail
                  </th>
                  <th className="text-right py-4 pl-4 font-display text-xs tracking-[0.15em] uppercase text-night/60">
                    Wholesale
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((b) => (
                  <tr key={b.title} className="border-b border-night/10">
                    <td className="py-5 pr-4">
                      <p className="font-serif text-body-lg text-night">{b.title}</p>
                      <p className="font-serif italic text-body text-night/60">{b.subtitle}</p>
                    </td>
                    <td className="py-5 px-4 text-right font-body text-body text-night/60">
                      {fmt(b.retail)}
                    </td>
                    <td className="py-5 pl-4 text-right font-body text-body-lg text-night font-semibold">
                      {fmt(b.wholesale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-serif italic text-body text-night/60">
            Prices reflect the standard 55 percent trade discount off retail. Shipping
            and handling are quoted separately per order.
          </p>
        </div>
      </section>

      {/* ============================================
          INQUIRY (mailto — no backend, opens your email app)
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Request a Quote
          </p>
          <h2 className="font-serif text-heading text-bone mb-4">Send your inquiry</h2>
          <div className="divider-warm mx-auto mb-10" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-10 max-w-xl mx-auto">
            The button below opens your email app with a message ready to fill in.
            Add your details and hit send. We reply with a quote including shipping
            within a few business days.
          </p>
          <a href={mailtoUrl} className="btn-primary inline-flex items-center gap-3">
            Email Your Wholesale Inquiry
          </a>
          <p className="font-serif italic text-caption text-bone/50 mt-6">
            Or write to <a href="mailto:miskwa@miskwakimiwan.com?subject=Wholesale%20inquiry" className="text-glow hover:text-sun underline decoration-glow/40 underline-offset-4">miskwa@miskwakimiwan.com</a> directly.
          </p>
        </div>
      </section>

      {/* ============================================
          BACK LINKS
          ============================================ */}
      <section className="bg-night py-16">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.2em] uppercase text-bone/60 mb-6">
            Explore the books
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/the-signal" className="btn-primary">The Signal</Link>
            <Link href="/red-rain" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">Red Rain</Link>
            <Link href="/book-of-questions" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">The Book of Questions</Link>
          </div>
        </div>
      </section>
    </>
  )
}

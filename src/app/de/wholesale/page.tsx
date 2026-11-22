import type { Metadata } from 'next'
import Link from 'next/link'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('de', '/wholesale'),
  title: 'Großhandel für Buchhandlungen und Geschäfte',
  description:
    'Großhandelspreise für die Bücher von Miskwa Kimiwan, für Buchhandlungen, Wellnesszentren, Heil- und Therapiepraxen und Gemeinschaftsräume. 55 Prozent Rabatt auf den Ladenpreis, Angebot für jede Bestellung einzeln.',
}

const books = [
  { title: 'The Re-Membering', subtitle: 'Six Turns Back to the Part of You That Never Forgot', retail: 13.99, wholesale: 6.3 },
  { title: 'The Signal', subtitle: 'Why Life and People Keep Happening to You', retail: 22.99, wholesale: 10.35 },
  { title: 'Red Rain', subtitle: 'A Soul Shattered', retail: 19.99, wholesale: 9.0 },
  { title: 'The Book of Questions', subtitle: 'The Socratic Year of the Soul', retail: 24.99, wholesale: 11.25 },
]

const fmt = (n: number) => `$${n.toFixed(2)}`

// Pre-filled mailto template for the wholesale inquiry button. Opens the
// visitor's default mail client with subject and body ready to fill in.
// The subject stays in English so it matches the English inquiries in the inbox.
const mailtoBody = `Hallo Miskwa,

ich möchte mich nach einer Großhandelsbestellung erkundigen. Bitte senden Sie mir ein Angebot für Folgendes.

Name der Kontaktperson:
Unternehmen oder Organisation:
E-Mail:
Telefon (optional):

Bücher und Mengen:
    The Re-Membering:
    The Signal:
    Red Rain:
    The Book of Questions:

Lieferadresse:

Zeitrahmen (wann benötigt):

Anmerkungen:

Vielen Dank.`

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
            Für Buchhandlungen und Gemeinschaftsräume
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-bone mb-6">
            Großhandel
          </h1>
          <div className="divider-warm mx-auto mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed max-w-2xl mx-auto">
            Für Buchhandlungen, Wellnesszentren, Heil- und Therapiepraxen und
            Gemeinschaftsräume, die diese Bücher in ihren Läden führen oder ihrer Kundschaft
            und ihren Gemeinschaften anbieten möchten.
          </p>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">So funktioniert es</h2>
          <div className="space-y-5 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Die Großhandelspreise folgen dem üblichen Handelsrabatt von Ingram: 55 Prozent
              auf den Ladenpreis. Die Bücher werden über Amazon KDP oder IngramSpark gedruckt
              und direkt an Ihre Adresse versandt.
            </p>
            <p>
              Bevorzugt wird eine Mindestmenge von fünf Exemplaren pro Bestellung, in
              beliebiger Kombination der vier Titel. Die Versandkosten werden für jede
              Bestellung nach Zielort und Menge berechnet und zusätzlich zum Großhandelspreis
              in Rechnung gestellt. Für größere Bestellungen ist auf Anfrage ein weiterer
              Rabatt möglich.
            </p>
            <p>
              Nach Eingang Ihrer Anfrage bestätigen wir die Verfügbarkeit, nennen den
              Endbetrag einschließlich Versand und vereinbaren die Zahlung per Rechnung per
              E-Mail oder per elektronischer Überweisung (E-Transfer). Die Bücher gehen auf
              den Weg, sobald die Zahlung eingegangen ist.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING TABLE
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-3">Preise</h2>
          <p className="font-serif italic text-body-lg text-night/75 mb-10">
            Pro Exemplar, zuzüglich Versand. Alle Preise in kanadischen Dollar (CAD).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-night/20">
                  <th className="text-left py-4 pr-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Titel
                  </th>
                  <th className="text-right py-4 px-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Ladenpreis
                  </th>
                  <th className="text-right py-4 pl-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Großhandel
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((b) => (
                  <tr key={b.title} className="border-b border-night/10">
                    <td className="py-5 pr-4">
                      <p className="font-serif text-body-lg text-night">{b.title}</p>
                      <p className="font-serif italic text-body text-night/75">{b.subtitle}</p>
                    </td>
                    <td className="py-5 px-4 text-right font-body text-body text-night/75">
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
          <p className="mt-6 font-serif italic text-body text-night/75">
            Die Preise entsprechen dem üblichen Handelsrabatt von 55 Prozent auf den
            Ladenpreis. Versand und Bearbeitung werden für jede Bestellung gesondert berechnet.
          </p>
        </div>
      </section>

      {/* ============================================
          INQUIRY (mailto, no backend, opens your email app)
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Angebot anfordern
          </p>
          <h2 className="font-serif text-heading text-bone mb-4">Senden Sie Ihre Anfrage</h2>
          <div className="divider-warm mx-auto mb-10" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Die Schaltfläche unten öffnet Ihr E-Mail-Programm mit einer vorbereiteten
            Nachricht. Ergänzen Sie Ihre Angaben und senden Sie sie ab. Wir antworten
            innerhalb weniger Werktage mit einem Angebot einschließlich Versand.
          </p>
          <a href={mailtoUrl} className="btn-primary inline-flex items-center gap-3">
            Großhandelsanfrage per E-Mail senden
          </a>
          <p className="font-serif italic text-caption text-bone/70 mt-6">
            Oder schreiben Sie direkt an <a href="mailto:miskwa@miskwakimiwan.com?subject=Wholesale%20inquiry" className="text-glow hover:text-sun underline decoration-glow/40 underline-offset-4">miskwa@miskwakimiwan.com</a>.
          </p>
        </div>
      </section>

      {/* ============================================
          BACK LINKS
          ============================================ */}
      <section className="bg-night py-16">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.2em] uppercase text-bone/60 mb-6">
            Die Bücher entdecken
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/de/the-signal" className="btn-primary">The Signal</Link>
            <Link href="/de/red-rain" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">Red Rain</Link>
            <Link href="/de/book-of-questions" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">The Book of Questions</Link>
          </div>
        </div>
      </section>
    </>
  )
}

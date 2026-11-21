import type { Locale } from '@/lib/i18n'

// One place for the newsletter invitation used at the foot of the book pages and the
// bookstore. The wording is the home page's own. If the newsletter ever moves off
// Substack, change NEWSLETTER_URL here and every page follows.
export const NEWSLETTER_URL = 'https://substack.com/@miskwakimiwan'

const COPY = {
  en: {
    heading: 'Walk with me through the forest',
    body: 'Writing on redemption, the body, and the practice of becoming more than what happened. Published on Substack as The Rainfall Newsletter.',
    button: 'Subscribe on Substack',
  },
  es: {
    heading: 'Camina conmigo por el bosque',
    body: 'Escritura sobre la redención, el cuerpo y la práctica de llegar a ser más que lo que te pasó. Se publica en inglés en Substack como The Rainfall Newsletter.',
    button: 'Suscribirse en Substack',
  },
}

export default function NewsletterSignup({ locale = 'en' }: { locale?: Locale }) {
  const t = COPY[locale]
  return (
    <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
      <div className="section-narrow text-center">
        <h2 className="font-serif text-heading text-bone mb-4">{t.heading}</h2>
        <p className="font-body text-body text-bone/60 mb-10 max-w-lg mx-auto">{t.body}</p>
        <a
          href={NEWSLETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 font-display text-sm md:text-base tracking-[0.25em] uppercase border border-glow text-glow transition-colors duration-300 hover:bg-glow/10 hover:text-sun"
        >
          {t.button}
        </a>
      </div>
    </section>
  )
}

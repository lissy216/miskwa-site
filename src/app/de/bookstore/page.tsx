import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Buchhandlung',
  description:
    'Alle Bücher von Miskwa Kimiwan und wo es sie gibt: Amazon, Chapters Indigo, Apple, Kobo, Barnes and Noble und Singing Pebble Books in Ottawa.',
  alternates: alternates('de', '/bookstore'),
  openGraph: {
    url: 'https://www.miskwakimiwan.com/de/bookstore',
    siteName: 'Miskwa Kimiwan',
    title: 'Buchhandlung | Miskwa Kimiwan',
    description:
      'Alle Bücher von Miskwa Kimiwan und wo es sie gibt.',
  },
}

type Retailer = { label: string; href: string; primary?: boolean }

type Book = {
  slug: string
  title: string
  subtitle: string
  cover: string
  blurb: string
  retailers: Retailer[]
  comingSoon?: boolean
  // Shown in place of the buying links until the book is out.
  release?: string
}

// Every link here is carried over from the individual book pages. If a retailer
// changes, change it there and here together (English, Spanish, French and German).
const books: Book[] = [
  {
    slug: '/de/the-re-membering',
    title: 'The Re-Membering',
    subtitle: 'Six Turns Back to the Part of You That Never Forgot',
    cover: '/images/the-re-membering-cover.jpg',
    blurb:
      'Für den Teil von Ihnen, der ahnt, dass er einmal etwas wusste, und es jetzt nicht mehr findet. Sechs Wendungen durch die Orte, an denen das Vergessen wohnt.',
    retailers: [
      { label: 'Amazon, Taschenbuch und E-Book', href: 'https://www.amazon.ca/dp/1777747872', primary: true },
      { label: 'Audible, Hörbuch', href: 'https://www.audible.ca/pd/B0HNC297KK' },
    ],
  },
  {
    slug: '/de/forgiveness-as-freedom',
    title: 'Forgiveness as Freedom',
    subtitle: 'A Self Process for Release, Boundary, and Return',
    cover: '/images/forgiveness-as-freedom-cover.jpg',
    blurb:
      'Die Wahrheit sagen über das, was geschehen ist. Die Grenze ziehen. Das Seil ablegen. In das eigene Leben zurückkehren. Nichts davon braucht sie.',
    retailers: [],
    comingSoon: true,
    release: 'Wintersonnenwende · 21. Dezember 2026',
  },
  {
    slug: '/de/the-signal',
    title: 'The Signal',
    subtitle: 'Why Life and People Keep Happening to You',
    cover: '/images/the-signal-cover.jpg',
    blurb:
      'Sie senden gerade jetzt etwas aus, und es hat still Ihr Leben um Sie herum zusammengefügt.',
    retailers: [
      { label: 'Amazon, Taschenbuch und E-Book', href: 'https://a.co/d/020dzwrJ', primary: true },
      { label: 'Books.by', href: 'https://books.by/miskwa-kimiwan/the-signal' },
      { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/4NMJaz' },
    ],
  },
  {
    slug: '/de/red-rain',
    title: 'Red Rain',
    subtitle: 'A Soul Shattered',
    cover: '/images/red-rain-cover.png',
    blurb:
      'Ein Junge überlebt die Traumata, die ihn hätten zerbrechen sollen. Keine Geschichte leichter Erlösung. Ein Wegweiser, um mit Würde durch die Dunkelheit zu gehen.',
    retailers: [
      { label: 'Amazon', href: 'https://a.co/d/6qsyT4d', primary: true },
      {
        label: 'Chapters Indigo',
        href: 'https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338',
      },
      {
        label: 'Singing Pebble Books, Ottawa',
        href: 'https://www.singingpebblebooks.ca/item/IqkeFrEQxd9jYdLHR2ZMUA',
      },
      { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/b5AEQG' },
    ],
  },
  {
    slug: '/de/book-of-questions',
    title: 'The Book of Questions',
    subtitle: 'The Socratic Year of the Soul',
    cover: '/images/book-of-questions-cover.png',
    blurb:
      'Die meisten Bücher geben Ihnen Antworten. Dieses gibt Sie sich selbst zurück. 365 Fragen über zwölf Monate Seelenlandschaft.',
    retailers: [
      { label: 'Amazon, Kindle-Ausgabe', href: 'https://a.co/d/04ofbHp4', primary: true },
      {
        label: 'Chapters Indigo, Taschenbuch',
        href: 'https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666',
      },
      { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/mBWDNA' },
    ],
  },
]

// A hyphen in a title is deliberate (The Re-Membering). Never let the browser
// break a line on it: hold each hyphenated word together and let the spaces wrap.
function BookTitle({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          {word.includes('-') ? <span className="whitespace-nowrap">{word}</span> : word}
        </Fragment>
      ))}
    </>
  )
}

export default function Bookstore() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="text-label mb-4">Wo es die Bücher gibt</p>
          <h1 className="font-serif text-[2.25rem] sm:text-display-sm md:text-display text-bone mb-6">
            Buchhandlung
          </h1>
          <div className="divider-warm mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed">
            Jedes Buch, und jeder Ort, an dem es erhältlich ist. Hier wird nichts verkauft.
            Jeder Link unten führt Sie zu einer Buchhandlung, die die Bestellung selbst
            abwickelt. Die Bücher sind auf Englisch erhältlich.
          </p>
        </div>
      </section>

      {/* ============================================
          THE BOOKS
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-container flex flex-col gap-20 md:gap-24 max-w-5xl mx-auto">
          {books.map((book) => (
            <article
              key={book.slug}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start"
            >
              {/* Cover */}
              <Link href={book.slug} className="group block mx-auto md:mx-0 w-48 md:w-full">
                <div className="relative aspect-2/3 rounded-sm overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src={book.cover}
                    alt={`${book.title}, Cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 220px"
                  />
                </div>
              </Link>

              {/* Details */}
              <div className="text-center md:text-left">
                {book.comingSoon && (
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                    {book.release
                      ? book.release.split(' · ').map((part, i) => (
                          <Fragment key={i}>
                            {i > 0 && ' · '}
                            <span className="whitespace-nowrap">{part}</span>
                          </Fragment>
                        ))
                      : 'Demnächst'}
                  </p>
                )}
                <h2 className="font-serif text-[1.875rem] md:text-heading text-bone mb-2">
                  <Link href={book.slug} className="hover:text-glow transition-colors">
                    <BookTitle text={book.title} />
                  </Link>
                </h2>
                <p className="font-serif italic text-body-lg text-bone/60 mb-5">
                  {book.subtitle}
                </p>
                <p className="font-body text-body text-bone/60 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                  {book.blurb}
                </p>

                {book.comingSoon ? (
                  <p className="font-serif italic text-caption text-bone/70">
                    Noch nicht erschienen. Die Kauflinks erscheinen hier am Tag der
                    Veröffentlichung.
                  </p>
                ) : (
                  <div className="flex flex-col gap-3 items-center md:items-start">
                    {book.retailers.map((r) => (
                      <a
                        key={r.href}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          r.primary
                            ? 'btn-primary inline-flex items-center gap-3 w-fit'
                            : 'btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit'
                        }
                      >
                        {r.label}
                      </a>
                    ))}
                  </div>
                )}

                <p className="mt-6">
                  <Link
                    href={book.slug}
                    className="font-display text-xs tracking-[0.2em] uppercase text-bridge hover:text-glow transition-colors"
                  >
                    Über dieses Buch &rarr;
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================
          OTHER WAYS TO GET THE BOOKS
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Andere Wege zu den Büchern</h2>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Fragen Sie Ihre Buchhandlung vor Ort
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-10">
            Steht ein Buch nicht im Regal, fragen Sie nach. Unabhängige Buchhandlungen
            können jeden dieser Titel über IngramSpark bestellen, und wer dort bestellt,
            hält das Geld näher am eigenen Ort als mit einer Bestellung im Netz.
          </p>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Fünf Exemplare oder mehr
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-6">
            Für Lesekreise, Praxen, Retreats und Läden, die zum Weiterverkauf einkaufen,
            gibt es einen Großhandelspreis.
          </p>
          <Link href="/de/wholesale" className="btn-light inline-flex items-center gap-3 w-fit">
            Großhandel
          </Link>
        </div>
      </section>
      <NewsletterSignup locale="de" />
    </>
  )
}

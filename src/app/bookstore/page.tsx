import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bookstore',
  description:
    'Every book by Miskwa Kimiwan and where to buy it: Amazon, Chapters Indigo, Apple, Kobo, Barnes and Noble, and Singing Pebble Books in Ottawa.',
  alternates: { canonical: '/bookstore' },
  openGraph: {
    url: 'https://www.miskwakimiwan.com/bookstore',
    siteName: 'Miskwa Kimiwan',
    title: 'Bookstore | Miskwa Kimiwan',
    description:
      'Every book by Miskwa Kimiwan and where to buy it.',
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
}

// Every link here is carried over from the individual book pages. If a retailer
// changes, change it there and here together.
const books: Book[] = [
  {
    slug: '/the-re-membering',
    title: 'The Re-Membering',
    subtitle: 'Six Turns Back to the Part of You That Never Forgot',
    cover: '/images/the-re-membering-cover.jpg',
    blurb:
      'For the part of you that suspects it used to know something, and cannot find it now. Six turns through the places where the Forgetting lives.',
    retailers: [],
    comingSoon: true,
  },
  {
    slug: '/the-signal',
    title: 'The Signal',
    subtitle: 'Why Life and People Keep Happening to You',
    cover: '/images/the-signal-cover.jpg',
    blurb:
      'You are broadcasting something right now, and it has been quietly assembling your life around you.',
    retailers: [
      { label: 'Amazon, paperback and ebook', href: 'https://a.co/d/020dzwrJ', primary: true },
      { label: 'Books.by', href: 'https://books.by/miskwa-kimiwan/the-signal' },
      { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/4NMJaz' },
    ],
  },
  {
    slug: '/red-rain',
    title: 'Red Rain',
    subtitle: 'A Soul Shattered',
    cover: '/images/red-rain-cover.png',
    blurb:
      'A boy survives the traumas that should have broken him. Not a tale of easy redemption. A field guide for walking through darkness with dignity.',
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
    slug: '/book-of-questions',
    title: 'The Book of Questions',
    subtitle: 'The Socratic Year of the Soul',
    cover: '/images/book-of-questions-cover.png',
    blurb:
      'Most books hand you answers. This one hands you back to yourself. 365 questions across twelve months of soul territory.',
    retailers: [
      { label: 'Amazon, Kindle edition', href: 'https://a.co/d/04ofbHp4', primary: true },
      {
        label: 'Chapters Indigo, paperback',
        href: 'https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666',
      },
      { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/mBWDNA' },
    ],
  },
]

export default function Bookstore() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="text-label mb-4">Where to Buy</p>
          <h1 className="font-serif text-display-sm md:text-display text-bone mb-6">
            Bookstore
          </h1>
          <div className="divider-warm mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed">
            Every book, and every place it can be bought. Nothing is sold here. Each link
            below takes you to a bookseller who handles the order themselves.
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
                    alt={`${book.title} - Front Cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 220px"
                  />
                </div>
              </Link>

              {/* Details */}
              <div className="text-center md:text-left">
                {book.comingSoon && (
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/70 mb-3">
                    Coming Soon
                  </p>
                )}
                <h2 className="font-serif text-heading text-bone mb-2">
                  <Link href={book.slug} className="hover:text-glow transition-colors">
                    {book.title}
                  </Link>
                </h2>
                <p className="font-serif italic text-body-lg text-bone/60 mb-5">
                  {book.subtitle}
                </p>
                <p className="font-body text-body text-bone/60 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                  {book.blurb}
                </p>

                {book.comingSoon ? (
                  <p className="font-serif italic text-caption text-bone/50">
                    Not yet released. The buying links will appear here the day it is
                    available.
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
                    About this book &rarr;
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
          <h2 className="font-serif text-heading text-night mb-10">Other ways to get them</h2>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Ask your local bookseller
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-10">
            If a book is not on the shelf, ask. Independent shops can order any of these
            titles through IngramSpark, and ordering through them keeps the money closer to
            home than ordering online.
          </p>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Five copies or more
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-6">
            For book clubs, practitioners, retreats, and shops buying to resell, there is a
            wholesale rate.
          </p>
          <Link href="/wholesale" className="btn-light inline-flex items-center gap-3 w-fit">
            Wholesale ordering
          </Link>
        </div>
      </section>
    </>
  )
}

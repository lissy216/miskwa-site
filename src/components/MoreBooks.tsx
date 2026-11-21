import Image from 'next/image'
import Link from 'next/link'
import { href, UI, type Locale } from '@/lib/i18n'

// The other titles, shown at the foot of each book page so a reader always has a
// next book to walk toward. Titles and subtitles match the bookstore page. When a
// book is added or released, change it here and there together.
type Book = {
  slug: string
  title: string
  subtitle: string
  cover: string
  // Shown above the title until the book is out.
  release?: string
}

const books: Book[] = [
  {
    slug: '/the-re-membering',
    title: 'The Re-Membering',
    subtitle: 'Six Turns Back to the Part of You That Never Forgot',
    cover: '/images/the-re-membering-cover.jpg',
  },
  {
    slug: '/forgiveness-as-freedom',
    title: 'Forgiveness as Freedom',
    subtitle: 'A Self Process for Release, Boundary, and Return',
    cover: '/images/forgiveness-as-freedom-cover.jpg',
    release: 'faf',
  },
  {
    slug: '/the-signal',
    title: 'The Signal',
    subtitle: 'Why Life and People Keep Happening to You',
    cover: '/images/the-signal-cover.jpg',
  },
  {
    slug: '/red-rain',
    title: 'Red Rain',
    subtitle: 'A Soul Shattered',
    cover: '/images/red-rain-cover.png',
  },
  {
    slug: '/book-of-questions',
    title: 'The Book of Questions',
    subtitle: 'The Socratic Year of the Soul',
    cover: '/images/book-of-questions-cover.png',
  },
]

export default function MoreBooks({ current, locale = 'en' }: { current: string; locale?: Locale }) {
  const t = UI[locale]
  const others = books.filter((b) => b.slug !== current)

  return (
    <section className="bg-night py-section-sm md:py-section border-t border-ash/20">
      <div className="section-container">
        <h2 className="font-serif text-heading text-bone text-center mb-14">
          {t.moreBooks}
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto *:w-[calc(50%-1rem)] lg:*:w-[calc(25%-1.5rem)]">
          {others.map((book) => (
            <Link
              key={book.slug}
              href={href(locale, book.slug)}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative aspect-2/3 w-full max-w-[200px] mb-5 rounded-sm overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src={book.cover}
                  alt={`${book.title}: ${book.subtitle} - ${t.frontCover}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 200px"
                />
              </div>
              {book.release && (
                <p className="font-display text-[11px] tracking-[0.2em] uppercase text-glow/85 mb-2">
                  <span className="whitespace-nowrap">{t.fafDateLong}</span>
                </p>
              )}
              {/* A hyphen in a title is deliberate (The Re-Membering) and must never
                  become a line break. */}
              <h3 className="font-serif text-body-lg text-bone mb-1 group-hover:text-glow transition-colors">
                {book.title.split(' ').map((word, i) => (
                  <span key={i} className={word.includes('-') ? 'whitespace-nowrap' : undefined}>
                    {i > 0 && ' '}
                    {word}
                  </span>
                ))}
              </h3>
              <p className="font-serif italic text-caption text-bone/60">{book.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

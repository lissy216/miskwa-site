import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Masthead from './Masthead'
import Colophon from './Colophon'

export type Retailer = { label: string; href: string }

export type BookSection = {
  heading: string
  lead?: ReactNode
  body: ReactNode
}

export type BookLayoutProps = {
  /** Each title prints in its own spot ink, so the four pages read as a series. */
  ink: 'madder' | 'plum' | 'prussian' | 'forest'
  title: string
  subtitle: string
  /** e.g. "Now available in paperback and ebook" — a fact, never a marketing kicker. */
  state: string
  cover: { src: string; alt: string }
  /** The opening of the book, at reading size, in the first screen. */
  opening: ReactNode
  retailers?: Retailer[]
  localNote?: ReactNode
  wholesale?: boolean
  sections?: BookSection[]
  quote?: { text: string; source: ReactNode }
  order?: { note: ReactNode }
  children?: ReactNode
}

// Static strings: Tailwind cannot see class names assembled at runtime.
const FIELD: Record<BookLayoutProps['ink'], string> = {
  madder: 'bg-madder text-stock-hi',
  plum: 'bg-plum text-stock-hi',
  prussian: 'bg-prussian text-stock-prussian',
  forest: 'bg-forest text-stock-hi',
}

const ON_FIELD_BUTTON: Record<BookLayoutProps['ink'], string> = {
  madder: 'bg-stock-hi text-madder hover:bg-stock',
  plum: 'bg-stock-hi text-plum hover:bg-stock',
  prussian: 'bg-stock-prussian text-prussian hover:bg-stock',
  forest: 'bg-stock-hi text-forest hover:bg-stock',
}

const TITLE_INK: Record<BookLayoutProps['ink'], string> = {
  madder: 'text-madder',
  plum: 'text-plum',
  prussian: 'text-prussian',
  forest: 'text-forest',
}

function Retailers({
  retailers,
  ink,
  onField,
}: {
  retailers: Retailer[]
  ink: BookLayoutProps['ink']
  onField: boolean
}) {
  const primary = onField
    ? ON_FIELD_BUTTON[ink]
    : 'bg-ink text-stock hover:bg-ink-soft'
  const secondary = onField
    ? 'border border-current hover:underline'
    : 'border border-ink hover:bg-ink hover:text-stock'

  return (
    <ul className="flex flex-col items-start gap-3">
      {retailers.map((r, i) => (
        <li key={r.href}>
          <a
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-wood text-base font-bold uppercase tracking-wide px-6 py-3 transition-colors ${
              i === 0 ? primary : secondary
            }`}
          >
            {r.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function BookLayout({
  ink,
  title,
  subtitle,
  state,
  cover,
  opening,
  retailers = [],
  localNote,
  wholesale = false,
  sections = [],
  quote,
  order,
  children,
}: BookLayoutProps) {
  return (
    <div className="press min-h-screen bg-stock text-ink font-text">
      <Masthead />

      {/* First viewport: the book's own ink field, its opening, and how to get it. */}
      <section className={FIELD[ink]}>
        <div className="mx-auto max-w-5xl px-6 pb-16 md:pb-24">
          <div className="press-strike h-px bg-current/40 mb-12" />
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <div className="max-w-[36rem]">
              <h1 className="font-wood text-5xl md:text-7xl font-extrabold uppercase leading-[0.9] tracking-tight">
                {title}
              </h1>
              <p className="mt-4 font-text italic text-xl md:text-2xl">{subtitle}</p>
              <p className="mt-2 font-wood text-base font-semibold tracking-wide">
                A book by Miskwa Kimiwan · {state}
              </p>

              <div className="mt-9 font-text text-lg md:text-xl leading-[1.7] space-y-5">
                {opening}
              </div>

              {retailers.length > 0 && (
                <div className="mt-9">
                  <Retailers retailers={retailers} ink={ink} onField />
                </div>
              )}

              {localNote && (
                <p className="mt-6 font-text italic text-[1.0625rem] leading-[1.6] max-w-[46ch]">
                  {localNote}
                </p>
              )}

              {wholesale && (
                <p className="mt-4">
                  <Link
                    href="/bookstore"
                    className="font-wood text-sm font-semibold uppercase tracking-wide underline underline-offset-4 inline-block py-2"
                  >
                    Wholesale for 5+ copies
                  </Link>
                </p>
              )}
            </div>

            <div className="w-44 md:w-56 shrink-0">
              <div className="relative aspect-2/3 bg-ink">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 176px, 224px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body: running heads on stock, one measure, no cards. */}
      {sections.length > 0 && (
        <div className="mx-auto max-w-5xl px-6">
          {sections.map((s) => (
            <section key={s.heading} className="rule-press py-14 md:py-20">
              <h2
                className={`font-wood text-3xl md:text-4xl font-bold uppercase leading-none tracking-tight ${TITLE_INK[ink]}`}
              >
                {s.heading}
              </h2>
              {s.lead && (
                <p className="mt-4 font-text italic text-xl text-ink-soft max-w-[46ch]">
                  {s.lead}
                </p>
              )}
              <div className="mt-7 font-text text-[1.0625rem] md:text-lg leading-[1.7] space-y-5 max-w-[68ch]">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      )}

      {quote && (
        <section className={FIELD[ink]}>
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <p className="font-text text-2xl md:text-3xl leading-[1.55] max-w-[28ch]">
              {quote.text}
            </p>
            <p className="mt-6 font-wood text-base font-semibold tracking-wide">
              {quote.source}
            </p>
          </div>
        </section>
      )}

      {children}

      {order && retailers.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <h2 className="font-wood text-4xl md:text-5xl font-extrabold uppercase leading-none tracking-tight">
            Get {title}
          </h2>
          <p className="mt-4 font-text text-lg leading-[1.7] max-w-[52ch]">{order.note}</p>
          <div className="mt-8">
            <Retailers retailers={retailers} ink={ink} onField={false} />
          </div>
          {localNote && (
            <p className="mt-6 font-text italic text-[1.0625rem] leading-[1.6] max-w-[46ch] text-ink-soft">
              {localNote}
            </p>
          )}
        </section>
      )}

      <Colophon />
    </div>
  )
}

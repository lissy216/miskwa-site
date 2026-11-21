import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Librairie',
  description:
    'Tous les livres de Miskwa Kimiwan et où les acheter : Amazon, Chapters Indigo, Apple, Kobo, Barnes and Noble, et Singing Pebble Books à Ottawa.',
  alternates: alternates('fr', '/bookstore'),
  openGraph: {
    url: 'https://www.miskwakimiwan.com/fr/bookstore',
    siteName: 'Miskwa Kimiwan',
    title: 'Librairie | Miskwa Kimiwan',
    description:
      'Tous les livres de Miskwa Kimiwan et où les acheter.',
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
// changes, change it there and here together (English, Spanish and French).
const books: Book[] = [
  {
    slug: '/fr/the-re-membering',
    title: 'The Re-Membering',
    subtitle: 'Six Turns Back to the Part of You That Never Forgot',
    cover: '/images/the-re-membering-cover.jpg',
    blurb:
      'Pour la part de vous qui soupçonne avoir su quelque chose autrefois, et ne le retrouve plus. Six tournants à travers les lieux où vit l’Oubli.',
    retailers: [
      { label: 'Amazon, broché et numérique', href: 'https://www.amazon.ca/dp/1777747872', primary: true },
      { label: 'Audible, livre audio', href: 'https://www.audible.ca/pd/B0HNC297KK' },
    ],
  },
  {
    slug: '/fr/forgiveness-as-freedom',
    title: 'Forgiveness as Freedom',
    subtitle: 'A Self Process for Release, Boundary, and Return',
    cover: '/images/forgiveness-as-freedom-cover.jpg',
    blurb:
      'Dire la vérité sur ce qui s’est passé. Tracer la limite. Poser la corde. Revenir à sa propre vie. Rien de tout cela n’a besoin d’eux.',
    retailers: [],
    comingSoon: true,
    release: 'Solstice d’hiver · 21 décembre 2026',
  },
  {
    slug: '/fr/the-signal',
    title: 'The Signal',
    subtitle: 'Why Life and People Keep Happening to You',
    cover: '/images/the-signal-cover.jpg',
    blurb:
      'Vous émettez quelque chose en ce moment même, et cela assemble en silence votre vie autour de vous.',
    retailers: [
      { label: 'Amazon, broché et numérique', href: 'https://a.co/d/020dzwrJ', primary: true },
      { label: 'Books.by', href: 'https://books.by/miskwa-kimiwan/the-signal' },
      { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/4NMJaz' },
    ],
  },
  {
    slug: '/fr/red-rain',
    title: 'Red Rain',
    subtitle: 'A Soul Shattered',
    cover: '/images/red-rain-cover.png',
    blurb:
      'Un garçon survit aux traumatismes qui auraient dû le briser. Pas un récit de rédemption facile. Un guide de terrain pour traverser l’obscurité avec dignité.',
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
    slug: '/fr/book-of-questions',
    title: 'The Book of Questions',
    subtitle: 'The Socratic Year of the Soul',
    cover: '/images/book-of-questions-cover.png',
    blurb:
      'La plupart des livres vous donnent des réponses. Celui-ci vous rend à vous-même. 365 questions sur douze mois de territoire de l’âme.',
    retailers: [
      { label: 'Amazon, édition Kindle', href: 'https://a.co/d/04ofbHp4', primary: true },
      {
        label: 'Chapters Indigo, broché',
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
          <p className="text-label mb-4">Où acheter</p>
          <h1 className="font-serif text-[2.25rem] sm:text-display-sm md:text-display text-bone mb-6">
            Librairie
          </h1>
          <div className="divider-warm mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed">
            Chaque livre, et chaque endroit où l’acheter. Rien n’est vendu ici. Chaque lien
            ci-dessous vous mène à un libraire qui se charge lui-même de la commande. Les
            livres sont disponibles en anglais.
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
                    alt={`${book.title}, couverture`}
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
                      : 'Bientôt disponible'}
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
                    Pas encore paru. Les liens d’achat apparaîtront ici le jour de sa
                    sortie.
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
                    À propos de ce livre &rarr;
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
          <h2 className="font-serif text-heading text-night mb-10">Autres façons de se les procurer</h2>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Demandez à votre libraire
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-10">
            Si un livre n’est pas en rayon, demandez. Les librairies indépendantes peuvent
            commander n’importe lequel de ces titres par IngramSpark, et commander chez elles
            garde l’argent plus près de chez vous qu’une commande en ligne.
          </p>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Cinq exemplaires ou plus
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-6">
            Pour les clubs de lecture, les thérapeutes, les retraites et les boutiques qui
            achètent pour revendre, il existe un tarif de gros.
          </p>
          <Link href="/fr/wholesale" className="btn-light inline-flex items-center gap-3 w-fit">
            Vente en gros
          </Link>
        </div>
      </section>
      <NewsletterSignup locale="fr" />
    </>
  )
}

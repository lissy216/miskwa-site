import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Librería',
  description:
    'Todos los libros de Miskwa Kimiwan y dónde comprarlos: Amazon, Chapters Indigo, Apple, Kobo, Barnes and Noble y Singing Pebble Books en Ottawa.',
  alternates: alternates('es', '/bookstore'),
  openGraph: {
    url: 'https://www.miskwakimiwan.com/es/bookstore',
    siteName: 'Miskwa Kimiwan',
    title: 'Librería | Miskwa Kimiwan',
    description:
      'Todos los libros de Miskwa Kimiwan y dónde comprarlos.',
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
// changes, change it there and here together (English and Spanish).
const books: Book[] = [
  {
    slug: '/es/the-re-membering',
    title: 'The Re-Membering',
    subtitle: 'Six Turns Back to the Part of You That Never Forgot',
    cover: '/images/the-re-membering-cover.jpg',
    blurb:
      'Para la parte de ti que sospecha que antes sabía algo y ahora no lo encuentra. Seis vueltas por los lugares donde vive el Olvido.',
    retailers: [
      { label: 'Amazon, tapa blanda y libro electrónico', href: 'https://www.amazon.ca/dp/1777747872', primary: true },
      { label: 'Audible, audiolibro', href: 'https://www.audible.ca/pd/B0HNC297KK' },
    ],
  },
  {
    slug: '/es/forgiveness-as-freedom',
    title: 'Forgiveness as Freedom',
    subtitle: 'A Self Process for Release, Boundary, and Return',
    cover: '/images/forgiveness-as-freedom-cover.jpg',
    blurb:
      'Decir la verdad sobre lo que pasó. Trazar la línea. Soltar la cuerda. Volver a tu propia vida. Nada de eso los necesita.',
    retailers: [],
    comingSoon: true,
    release: 'Solsticio de invierno · 21 de diciembre de 2026',
  },
  {
    slug: '/es/the-signal',
    title: 'The Signal',
    subtitle: 'Why Life and People Keep Happening to You',
    cover: '/images/the-signal-cover.jpg',
    blurb:
      'Ahora mismo estás transmitiendo algo, y en silencio ha ido armando tu vida a tu alrededor.',
    retailers: [
      { label: 'Amazon, tapa blanda y libro electrónico', href: 'https://a.co/d/020dzwrJ', primary: true },
      { label: 'Books.by', href: 'https://books.by/miskwa-kimiwan/the-signal' },
      { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/4NMJaz' },
    ],
  },
  {
    slug: '/es/red-rain',
    title: 'Red Rain',
    subtitle: 'A Soul Shattered',
    cover: '/images/red-rain-cover.png',
    blurb:
      'Un niño sobrevive a los traumas que debieron romperlo. No es una historia de redención fácil. Es una guía de campo para atravesar la oscuridad con dignidad.',
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
    slug: '/es/book-of-questions',
    title: 'The Book of Questions',
    subtitle: 'The Socratic Year of the Soul',
    cover: '/images/book-of-questions-cover.png',
    blurb:
      'La mayoría de los libros te dan respuestas. Este te devuelve a ti. 365 preguntas a lo largo de doce meses de territorio del alma.',
    retailers: [
      { label: 'Amazon, edición Kindle', href: 'https://a.co/d/04ofbHp4', primary: true },
      {
        label: 'Chapters Indigo, tapa blanda',
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
          <p className="text-label mb-4">Dónde comprar</p>
          <h1 className="font-serif text-[2.25rem] sm:text-display-sm md:text-display text-bone mb-6">
            Librería
          </h1>
          <div className="divider-warm mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed">
            Cada libro, y cada lugar donde se puede comprar. Aquí no se vende nada. Cada
            enlace te lleva a una librería que se encarga del pedido por su cuenta. Los
            libros están disponibles en inglés.
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
                    alt={`${book.title}, portada`}
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
                      : 'Próximamente'}
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
                    Aún no se ha publicado. Los enlaces de compra aparecerán aquí el día en
                    que esté disponible.
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
                    Sobre este libro &rarr;
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
          <h2 className="font-serif text-heading text-night mb-10">Otras formas de conseguirlos</h2>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Pregunta en tu librería local
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-10">
            Si un libro no está en el estante, pregunta. Las librerías independientes pueden
            pedir cualquiera de estos títulos a través de IngramSpark, y pedirlos por medio
            de ellas mantiene el dinero más cerca de casa que comprar en línea.
          </p>

          <h3 className="font-serif text-subheading text-night/90 mb-3">
            Cinco ejemplares o más
          </h3>
          <p className="font-body text-body text-night/70 leading-relaxed mb-6">
            Para clubes de lectura, terapeutas, retiros y tiendas que compran para revender,
            hay una tarifa mayorista.
          </p>
          <Link href="/es/wholesale" className="btn-light inline-flex items-center gap-3 w-fit">
            Pedidos al por mayor
          </Link>
        </div>
      </section>
      <NewsletterSignup locale="es" />
    </>
  )
}

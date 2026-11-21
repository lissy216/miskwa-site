import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'The Re-Membering',
  description:
    'No te han roto. Has estado viviendo. Seis vueltas hacia la parte de ti que nunca olvidó. En tapa blanda, ebook y audiolibro narrado por Omar Abou.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/es/the-re-membering',
    siteName: 'Miskwa Kimiwan',
    title: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot',
    description:
      'No te han roto. Has estado viviendo. Seis vueltas hacia la parte de ti que nunca olvidó. Un nuevo libro de Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-re-membering-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Re-Membering, portada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot',
    description:
      'No te han roto. Has estado viviendo. Un nuevo libro de Miskwa Kimiwan.',
    images: ['/images/the-re-membering-cover.jpg'],
  },
  alternates: alternates('es', '/the-re-membering'),
}

const places = [
  'el cuerpo',
  'la historia que te entregaron',
  'quienes vinieron antes que tú',
  'la tierra',
  'lo sagrado',
  'quien en ti ha estado mirando todo este tiempo',
]

export default function TheReMembering() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Ya disponible en tapa blanda, ebook y audiolibro</p>
            {/* The hyphen is the point of the title, so it must not become a line
                break. Re-Membering is held on one line and "The" wraps instead.

                That makes the word unbreakable, so it has to fit the column at every
                width. It needs about 8.84px per pixel of font size, and the measured
                columns are 324px at 375, 305px at 768, 374px at 1024 and 502px at
                1280. The tightest point is 768, where the two column split starts
                while the viewport is still narrow, which is why md steps down rather
                than up. This title is longer than the other books, so it does not use
                the full display size they do. */}
            <h1 className="font-serif text-[2rem] md:text-[1.875rem] lg:text-[2.25rem] xl:text-display-sm text-bone mb-2">
              The <span className="whitespace-nowrap">Re-Membering</span>
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              Six Turns Back to the Part of You That Never Forgot
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-serif text-body-lg text-glow/80 leading-relaxed mb-8">
              No te han roto. Has estado viviendo.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Este libro se escribió para la parte de ti que sospecha que alguna vez supo
              algo, y ahora no logra encontrarlo. No la versión dramática. La común. Una
              vida que funciona bien y se siente un poco lejana. Que te amen personas que
              parecen estar describiendo a alguien más.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Casi todo lo que se le ofrece a esa parte de ti es un sistema. Pasos. Prácticas.
              Una mañana mejor. <em>The Re-Membering</em> no lo es.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.amazon.ca/dp/1777747872"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Comprar en Amazon: tapa blanda y ebook
              </a>
              <a
                href="https://www.audible.ca/pd/B0HNC297KK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-3 w-fit"
              >
                Escuchar en Audible: audiolibro
              </a>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Narrado por Omar Abou. Dos horas y treinta minutos, versión íntegra.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Este libro está disponible en inglés.
              </p>
              <p className="font-serif italic text-caption text-bone/70 mt-3 max-w-md">
                ¿No está en los estantes de tu librería? Pide que lo encarguen. Pueden conseguirlo a través de IngramSpark.
              </p>
              <a
                href="/es/wholesale"
                className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 hover:text-glow transition-colors mt-2 inline-block"
              >
                Venta al por mayor desde 5 ejemplares &rarr;
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/the-re-membering-cover.jpg"
                alt="The Re-Membering: Six Turns Back to the Part of You That Never Forgot, portada"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          THE SIX PLACES
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Donde vive el Olvido
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            Te acompaña por los seis lugares donde vive el Olvido. En cada uno, la
            pregunta es la misma. Después, preguntar hace lo que preguntar hace.
          </p>
          <ol className="flex flex-col gap-5">
            {places.map((place, i) => (
              <li key={place} className="flex items-baseline gap-5">
                <span className="font-display text-caption text-glow/85 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-subheading text-bone/80">{place}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-threshold py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <p className="pull-quote">Puedes beber el agua sin deberme el pozo.</p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Escrito desde adentro</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            Miskwa Kimiwan escribe desde dentro del trabajo: una cama de hospital, el
            mostrador de una farmacia, un puente sin terminar en una granja, el turno de
            noche junto a la cama de su madre. Nunca desde arriba de ti.
          </p>
          <p className="font-body text-body text-night/75 leading-relaxed mb-10">
            Nada aquí pide que lo creas. Compruébalo con tu propia respiración.
          </p>
          <Link
            href="/es/about"
            className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
          >
            Sobre Miskwa Kimiwan &rarr;
          </Link>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
          Translated from reader reviews on Amazon.ca. The English page quotes
          them word for word. An ellipsis marks where a review was shortened.
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section border-t border-night/10">
        <div className="section-container">
          <h2 className="font-serif text-heading text-night mb-12 text-center">
            Lo que dicen quienes lo han leído
          </h2>
          <p className="font-serif italic text-caption text-night/70 text-center -mt-8 mb-12">
            Reseñas traducidas del inglés.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;Este librito, hecho con tanto cuidado, te deja con ganas de más. La sabiduría que transmite te lleva a cerrar el círculo, al lugar donde empezaste a olvidar, y de vuelta a recordar quién eres y las muchas facetas de tu humanidad.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                P.A.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;Otro libro de Miskwa con una medicina realmente poderosa. Lo recibí y lo leí despacio, de una sentada. Gracias por las semillas.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;Este libro es una guía activa para recordar el camino de vuelta a ti, a la relación, a la presencia. Le pone palabras a lo que quizás has estado sintiendo bajo la superficie. &hellip; Este libro es un regalo hermoso.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://www.amazon.ca/dp/1777747872"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Lee todas las reseñas en Amazon &rarr;
            </a>
          </p>
        </div>
      </section>

      <MoreBooks current="/the-re-membering" locale="es" />
      <NewsletterSignup locale="es" />

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-serif italic text-subheading text-bone/60">Ve con suavidad.</p>
        </div>
      </section>
    </>
  )
}

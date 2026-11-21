import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup, { NEWSLETTER_URL } from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Forgiveness as Freedom',
  description:
    'Un proceso personal de liberación, límite y regreso. El nuevo libro de Miskwa Kimiwan se publicará en el Solsticio de invierno, el 21 de diciembre de 2026.',
  alternates: alternates('es', '/forgiveness-as-freedom'),
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/es/forgiveness-as-freedom',
    siteName: 'Miskwa Kimiwan',
    title: 'Forgiveness as Freedom: A Self Process for Release, Boundary, and Return',
    description:
      'Un proceso personal de liberación, límite y regreso. El nuevo libro de Miskwa Kimiwan se publicará en el Solsticio de invierno, el 21 de diciembre de 2026.',
    images: [
      {
        url: '/images/forgiveness-as-freedom-cover.jpg',
        width: 1650,
        height: 2550,
        alt: 'Forgiveness as Freedom, portada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgiveness as Freedom: A Self Process for Release, Boundary, and Return',
    description:
      'Un proceso personal de liberación, límite y regreso. El nuevo libro de Miskwa Kimiwan se publicará en el Solsticio de invierno, el 21 de diciembre de 2026.',
    images: ['/images/forgiveness-as-freedom-cover.jpg'],
  },
}

// All reader-facing copy on this page is translated from the book's own back
// cover. Only the section headings are lifted from lines within it.

const frees = [
  'Decir la verdad sobre lo que pasó.',
  'Trazar el límite.',
  'Soltar la cuerda.',
  'Volver a tu propia vida.',
]

const rooms = [
  'La disculpa que nunca va a llegar.',
  'La persona que murió antes de que se resolviera nada.',
  'La mesa a la que todavía tienes que sentarte en cada fecha festiva.',
  'La madre o el padre cuyas manos no fueron suaves, y que ahora necesita tus manos para levantarse.',
  'El daño que te hiciste a ti, que suele ser la última cuenta que alguien cierra.',
]

export default function ForgivenessAsFreedom() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Solsticio de invierno &middot; <span className="whitespace-nowrap">21 de diciembre de 2026</span></p>
            {/* "Forgiveness" is one long unbreakable word, so it must fit the column at every
                width. It needs about 7.7px per pixel of font size. Measured columns: 263px at
                320, 318px at 375, 305px at 768 (where the two column split starts, so md steps
                down), 374px at 1024 and 502px at 1280. Sized the way The Re-Membering is. */}
            <h1 className="font-serif text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-display-sm text-bone mb-2">
              Forgiveness as Freedom
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              A Self Process for Release, Boundary, and Return
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-serif text-body-lg text-glow/80 leading-relaxed mb-8">
              Cargas un cansancio. No del que se arregla durmiendo.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Alguien dice su nombre y tu pecho hace lo de siempre. Le has dicho a la gente
              que ya lo superaste. Has dicho lo correcto en la cena, has mantenido la voz
              firme, has cambiado de tema. Luego te acuestas y el caso entero se vuelve a
              abrir, y lo vuelves a argumentar, y vuelves a ganar, y nada cambia.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Quizás te han dicho que perdones. Quizás te lo dijeron con cariño, y algo en
              ti igual se enfrió. Ese frío era información. Significaba que la definición
              que te entregaron no coincidía con lo que de verdad cargas.
            </p>

            <div className="flex flex-col gap-3">
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Aún no se ha publicado. Esta página tendrá los enlaces de compra el día en
                que esté disponible.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Este libro se publicará en inglés.
              </p>
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit mt-2"
              >
                Entérate el día que salga
              </a>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                El lanzamiento se anunciará en The Rainfall Newsletter, en Substack.
              </p>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/forgiveness-as-freedom-cover.jpg"
                alt="Forgiveness as Freedom: A Self Process for Release, Boundary, and Return, portada"
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
          WHAT ACTUALLY FREES A PERSON
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Lo que de verdad libera a una persona
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            Así que no voy a apresurarte. No voy a darte un plazo. No voy a decirte que lo
            sueltes, ni a pedirte que llames a nada de esto un regalo.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            Lo que sí haré es caminar a tu lado por lo que de verdad libera a una persona.
          </p>
          <ol className="flex flex-col gap-5">
            {frees.map((line, i) => (
              <li key={line} className="flex items-baseline gap-5">
                <span className="font-display text-caption text-glow/85 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-subheading text-bone/80">{line}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          THE ROOMS
          ============================================ */}
      <section className="mood-threshold py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Los cuartos donde esto vive de verdad
          </h2>
          <ul className="flex flex-col gap-4 mb-12">
            {rooms.map((room) => (
              <li key={room} className="font-serif text-body-lg text-bone/75 leading-relaxed">
                {room}
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            Veintitrés capítulos. Prácticas que puedes hacer esta noche. Páginas para
            escribir. Palabras para los días en que no tienes ninguna propia.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed">
            Nada de esto los necesita. Ni disculpa. Ni conversación. Ni un cambio de
            corazón de su parte. Ni siquiera tienen que estar vivos.
          </p>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <p className="pull-quote">
            Ya cargaste esto lo suficiente. La vida que te espera del otro lado sigue
            siendo tuya.
          </p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Conozco ese cuarto</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            He estado donde tú estás ahora, cargando algo que no se dejaba soltar. También
            he sido la razón por la que otra persona estuvo ahí. Las dos cosas están en
            este libro, porque las dos están en mí.
          </p>
          <p className="font-body text-body text-night/75 leading-relaxed mb-10">
            Todos vivimos en casas de cristal.
          </p>
          <Link
            href="/es/about"
            className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
          >
            Sobre Miskwa Kimiwan &rarr;
          </Link>
        </div>
      </section>

      <MoreBooks current="/forgiveness-as-freedom" locale="es" />
      <NewsletterSignup locale="es" />

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-serif italic text-subheading text-bone/60">
            Tú eres quien regresa. Empieza aquí.
          </p>
        </div>
      </section>
    </>
  )
}

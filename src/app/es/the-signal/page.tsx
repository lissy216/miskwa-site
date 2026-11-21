import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'The Signal',
  description:
    'Estás emitiendo algo ahora mismo, y en silencio ha ido armando tu vida a tu alrededor. Un nuevo libro de Miskwa Kimiwan.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/es/the-signal',
    siteName: 'Miskwa Kimiwan',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'Estás emitiendo algo ahora mismo, y en silencio ha ido armando tu vida a tu alrededor. Un nuevo libro de Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-signal-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Signal, portada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'Un nuevo libro de Miskwa Kimiwan sobre la frecuencia que el cuerpo lleva consigo, y la vida que esa frecuencia arma.',
    images: ['/images/the-signal-cover.jpg'],
  },
  alternates: alternates('es', '/the-signal'),
}

export default function TheSignal() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
              Ya disponible en tapa blanda y ebook
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              The Signal
            </h1>
            <p className="font-serif italic text-subheading text-bone/70 mb-2">
              Why Life and People Keep Happening to You
            </p>
            <p className="font-display text-caption text-bone/70 mb-8 tracking-[0.15em] uppercase">
              Un libro de Miskwa Kimiwan
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Estás emitiendo algo ahora mismo.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
              No las palabras que usas para describirte. No la versión que llevas a las cenas, a las entrevistas de trabajo, a los tres primeros meses de una relación nueva. Algo debajo de todo eso. Una frecuencia que tu cuerpo lleva desde antes de que tuvieras una palabra para ella. Eso que las personas que están contigo en una habitación pueden percibir sin poder nombrarlo.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
              Este libro trata de esa señal, y de la vida que ha ido armando a tu alrededor en silencio.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/020dzwrJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Comprar en Amazon: tapa blanda y ebook
              </a>
              <a
                href="https://books.by/miskwa-kimiwan/the-signal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Comprar en Books.by
              </a>
              <a
                href="https://books2read.com/u/4NMJaz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Ebook en Apple, Kobo, B&amp;N y más
              </a>
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
            <div className="relative w-64 md:w-72 lg:w-80 aspect-2/3 bg-black rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/the-signal-cover.jpg"
                alt="The Signal: Why Life and People Keep Happening to You, portada"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          THE QUESTION UNDERNEATH
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            La pregunta de fondo
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Quizás llevas años haciendo el trabajo.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Quizás llevas años haciendo el trabajo y algo sigue sin decirse. Quizás has leído la literatura popular sobre sanación y has notado que algo falta por debajo del lenguaje, incluso cuando el lenguaje es bueno.
            </p>
            <p>
              O quizás no has hecho años de trabajo. Quizás llegaste aquí porque el mismo tipo de persona sigue apareciendo en tu vida con distintos nombres. O el mismo tipo de dolor sigue encontrándote con distintas formas. O la misma dinámica se repite en tus relaciones y en tu trabajo, por mucho que te hayas jurado que la última vez era la última.
            </p>
            <p>
              No tienes palabras para explicar por qué. Solo sabes que sigue pasando, y ya te cansaste.
            </p>
            <p className="font-serif italic text-bone/80">
              Este libro es para ti.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-threshold py-16 md:py-20">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-8" />
          <p className="pull-quote text-bone/90 max-w-2xl mx-auto">
            &laquo;Estás emitiendo algo ahora mismo. Este libro trata de la vida que ha ido armando a tu alrededor en silencio.&raquo;
          </p>
          <p className="font-display text-caption text-glow/85 mt-6 tracking-[0.2em] uppercase">
            De <em>The Signal</em>
          </p>
        </div>
      </section>

      {/* ============================================
          WHAT THE SIGNAL TEACHES
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Lo que enseña The Signal
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Una frecuencia que el cuerpo lleva consigo.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              La señal es una frecuencia que el cuerpo lleva consigo. No es algo místico. Es medible. Y es la razón por la que las mismas personas, las mismas situaciones y los mismos patrones siguen llegando a tu vida, sin importar lo que cambies por fuera.
            </p>
            <p>
              El libro te enseña a reconocer la señal que has estado emitiendo, a nombrar lo que te ha estado moviendo por debajo de tus intenciones, y a cambiar la frecuencia para que lo que llega pueda llegar de otra manera.
            </p>
            <p>
              Con raíces en la cosmología indígena y el marco de Miskwa Kimiwan, en diálogo con la neurociencia revisada por pares, la epigenética y la investigación sobre el corazón y el cerebro, <em>The Signal</em> ofrece dieciocho capítulos de enseñanza recorrida paso a paso, práctica de la sensación sentida y un reconocimiento honesto de lo que cuesta este trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHO THIS IS FOR
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-4">
            Para quién es
          </h2>
          <p className="font-serif italic text-body-lg text-night/75 mb-10">
            Para quien lleva patrones que se han negado a quedarse atrás.
          </p>
          <div className="space-y-5 font-body text-body text-night/75 leading-relaxed">
            <p>
              Para quien ha hecho años de trabajo interior y sabe que algo todavía no se ha nombrado.
            </p>
            <p>
              Para quien nunca ha hecho el trabajo y se hace la pregunta por primera vez.
            </p>
            <p>
              Para quien ha visto sus patrones mudarse con su vida, de ciudad en ciudad, de relación en relación, de un capítulo de la vida a otro, negándose a quedarse atrás.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
          Translated from verified-purchase reader reviews on Amazon.ca. The
          English page quotes them word for word. An ellipsis marks where a
          review was shortened.
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
                &laquo;Este libro es excepcional. &hellip; Hace falta una honestidad radical contigo para reconocerlo. Tener la guía deja menos espacio para mentirte.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;Un impulso de empezar a sintonizar esa estación o ese canal que te llama desde dentro. Este libro te ayudará a ganar perspectiva, porque tienes la disposición de escucharte.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                Reseña en Amazon
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;Es un libro increíblemente importante. &hellip; Creo que es uno de los libros más fascinantes que he leído.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.D.
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://www.amazon.ca/gp/product-reviews/B0H8KZ73L9/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Lee todas las reseñas en Amazon &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ============================================
          ORDER
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-10" />
          <h2 className="font-serif text-heading text-bone mb-6">
            The Signal
          </h2>
          <p className="font-body text-body-lg text-bone/70 mb-10">
            Disponible ahora en tapa blanda y ebook.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://a.co/d/020dzwrJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 w-fit"
            >
              Comprar en Amazon: tapa blanda y ebook
            </a>
            <a
              href="https://books.by/miskwa-kimiwan/the-signal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
            >
              Comprar en Books.by
            </a>
            <a
              href="https://books2read.com/u/4NMJaz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
            >
              Ebook en Apple, Kobo, B&amp;N y más
            </a>
            <p className="font-serif italic text-caption text-bone/70 mt-4 max-w-md">
              ¿No está en los estantes de tu librería? Pide que lo encarguen. Pueden conseguirlo a través de IngramSpark.
            </p>
          </div>
        </div>
      </section>
      <MoreBooks current="/the-signal" locale="es" />
      <NewsletterSignup locale="es" />
    </>
  )
}

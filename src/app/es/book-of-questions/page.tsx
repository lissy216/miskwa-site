import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'The Book of Questions: The Socratic Year of the Soul',
  description: '372 preguntas. Doce meses de territorio. Un año entero aprendiendo a confiar en lo que ya está vivo en ti. En tapa blanda, libro electrónico y ahora como app para iPhone: la Temporada uno es gratis.',
  alternates: alternates('es', '/book-of-questions'),
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/es/book-of-questions',
    siteName: 'Miskwa Kimiwan',
    title: 'The Book of Questions: The Socratic Year of the Soul',
    description:
      '372 preguntas. Doce meses de territorio. Un año entero aprendiendo a confiar en lo que ya está vivo en ti.',
    images: [
      {
        url: '/images/book-of-questions-cover.png',
        width: 1024,
        height: 1536,
        alt: 'The Book of Questions: The Socratic Year of the Soul, portada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Book of Questions: The Socratic Year of the Soul',
    description:
      '372 preguntas. Doce meses de territorio. Un año entero aprendiendo a confiar en lo que ya está vivo en ti.',
    images: ['/images/book-of-questions-cover.png'],
  },
}

export default function BookOfQuestions() {
  const months = [
    { number: 'Uno', title: 'Quién eras antes de que te nombraran' },
    { number: 'Dos', title: 'Lo que cargas sin saberlo' },
    { number: 'Tres', title: 'El cuerpo recuerda' },
    { number: 'Cuatro', title: 'Lo que el duelo ha intentado decir' },
    { number: 'Cinco', title: 'Donde te abandonaste' },
    { number: 'Seis', title: 'Los rostros de tu poder' },
    { number: 'Siete', title: 'Lo que el perdón nunca ha significado' },
    { number: 'Ocho', title: 'La pertenencia y sus costos' },
    { number: 'Nueve', title: 'Las historias que te gobiernan' },
    { number: 'Diez', title: 'Lo que harías si nadie te mirara' },
    { number: 'Once', title: 'El linaje que no elegiste' },
    { number: 'Doce', title: 'El regreso' },
  ]

  return (
    <>
      {/* ============================================
          HERO - Light mood
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              Ya disponible
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-2">
              The Book of Questions
            </h1>
            <p className="font-serif italic text-subheading text-night/75 mb-2">
              The Socratic Year of the Soul
            </p>
            <p className="font-serif italic text-body-lg text-night/70 mb-8">
              Un viaje de un año hacia ti
            </p>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/75 leading-relaxed mb-6">
              La mayoría de los libros te dan respuestas. Este te devuelve a ti.
            </p>
            <p className="font-body text-body text-night/70 leading-relaxed mb-10">
              372 preguntas. Doce meses de territorio. Un año entero aprendiendo a confiar en lo que ya está vivo en ti. No es un programa. No es un plan de estudios. Es una conversación entre tú y la parte de ti que ha estado esperando que alguien le pregunte.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://apps.apple.com/app/the-book-of-questions/id6799315120"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                La app para iPhone: Temporada uno gratis
              </a>
              <a
                href="https://a.co/d/04ofbHp4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Edición Kindle: pedir en Amazon
              </a>
              <a
                href="https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Tapa blanda: pedir en Chapters Indigo
              </a>
              <a
                href="https://books2read.com/u/mBWDNA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Libro electrónico en Apple, Kobo, B&amp;N y más
              </a>
              <p className="font-serif italic text-caption text-night/70 mt-3 max-w-md">
                Este libro está disponible en inglés.
              </p>
              <p className="font-serif italic text-caption text-night/70 max-w-md">
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
          <div className="flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/book-of-questions-cover.png"
                alt="The Book of Questions: The Socratic Year of the Soul, portada"
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
          THE APP
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Ahora en iPhone
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            El año, en tu bolsillo
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              El año completo ahora vive en una app. Cada amanecer, la pregunta del día te espera: en tu pantalla de inicio, en tu pantalla de bloqueo, antes de que abras cualquier otra cosa. Léela por la mañana. Deja que camine contigo. Por la noche, escribe. Una sola frase honesta cuenta, y se guarda sola.
            </p>
            <p>
              Cuando una temporada se cierra, el Espejo te devuelve tus propias palabras. Ninguna IA lee tu diario. Ninguna máquina escribe un resumen. Todo lo que escribes vive en tu teléfono y en tu propio iCloud, nunca en un servidor nuestro, porque no tenemos ninguno. Sin cuentas, sin analíticas, sin anuncios.
            </p>
            <p>
              La Temporada uno, treinta y un días y tu primer Espejo, es gratis. Sin tarjeta, sin reloj. El libro impreso y la app son dos puertas al mismo año.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://apps.apple.com/app/the-book-of-questions/id6799315120"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Descargar en la App Store
            </a>
            <p className="font-serif italic text-caption text-bone/60 mt-4">
              Gratis para empezar &middot; Para iPhone
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE BEGINNING
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            El comienzo
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Has estado buscando las respuestas correctas. ¿Y si has estado haciendo las preguntas equivocadas?
            </p>
            <p>
              Hay algo en ti que ya sabe cómo atravesarlo. No rodearlo. <em>Atravesarlo.</em> El problema no es que te falten respuestas. El problema es que las preguntas que hace la mayoría, las que ofrecen libros, maestros y programas bien intencionados, ponen el destino fuera de ti. Te vuelven estudiante del saber de otra persona.
            </p>
            <p>
              Sócrates nunca le dijo a nadie qué pensar. Preguntaba hasta que la verdad que ya vivía en la persona no tenía más remedio que salir a la superficie. Lo llamaba el arte de la partera. No entregaba información. Entregaba a cada persona a sí misma.
            </p>
            <p>
              <em>The Book of Questions</em> sigue esa tradición. Una pregunta por día, durante un año entero, organizada a lo largo de doce meses de territorio del alma. Una conversación entre tú y la parte de ti que ha estado esperando que alguien le pregunte.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="bg-parchment py-16">
        <div className="section-narrow text-center">
          <div className="divider-cool mx-auto mb-10" />
          <p className="pull-quote text-night max-w-2xl mx-auto">
            «La pregunta que te asusta casi siempre es la que intenta liberar algo.»
          </p>
        </div>
      </section>

      {/* ============================================
          INSIDE THE BOOK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Dentro del libro
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Un año no es mucho tiempo. A menos que lo vivas con honestidad.
            </p>
            <p>
              Cada mes tiene su propio tema. Su propio territorio. Los doce meses no siguen el calendario sino el alma, y avanzan por la indagación, la identidad, el duelo, la pertenencia, el poder, el perdón y el regreso.
            </p>
            <p>
              Cada día, una pregunta. A veces parecerá sencilla. Escribirás unas pocas palabras y la dejarás. Otro día, una pregunta del mismo tipo abrirá algo que has cargado durante veinte años y que no sabías que todavía pesaba.
            </p>
            <p>
              No hay una forma correcta de usar este libro. No hay calificación. No hay llegada. Solo está la práctica de sentarte y permitir que te pregunten.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE TWELVE MONTHS
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
              El territorio de un año
            </p>
            <h2 className="font-serif text-heading text-bone">
              Los doce meses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {months.map((month) => (
              <div key={month.number} className="border border-bridge/50 rounded-sm p-6 hover:border-glow/30 transition-colors">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-2">
                  Mes {month.number}
                </p>
                <p className="font-serif text-body-lg text-bone">
                  {month.title}
                </p>
              </div>
            ))}
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
            No tienes que estar en pedazos para necesitar esto. Solo tienes que decir la verdad.
          </p>
          <div className="space-y-5 font-body text-body text-night/70 leading-relaxed">
            <p>
              Este libro se escribió para las personas que se cansaron de que les digan cómo se supone que debe verse su sanación.
            </p>
            <p>
              Para quien ha leído todos los libros de autoayuda y aún siente que algo esencial sigue sin tocar. Para quien sana, acompaña en terapia o guía a otras personas y necesita una práctica que le pertenezca por completo, no a su trabajo.
            </p>
            <p>
              Para quien carga un duelo que no cabe con prolijidad en una etapa ni en un calendario. Para quien se ve bien por fuera y lleva un agotamiento en algún lugar mucho más hondo.
            </p>
            <p>
              Para quien conoce las respuestas que se supone que debe dar, y sospecha que hay otras más verdaderas que nunca ha dicho en voz alta. Para quien sobrevivió a algo y todavía está descubriendo qué le pide esa supervivencia.
            </p>
            <p>
              Para quien se cansó de buscar y por fin quiere, simplemente, escuchar.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          ORDER
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-10" />
          <h2 className="font-serif text-heading text-bone mb-6">
            Comienza
          </h2>
          <p className="font-body text-body-lg text-bone/70 mb-10">
            El año te está esperando.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://a.co/d/04ofbHp4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Edición Kindle: pedir en Amazon
            </a>
            <a
              href="https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night"
            >
              Tapa blanda: pedir en Chapters Indigo
            </a>
            <a
              href="https://books2read.com/u/mBWDNA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night"
            >
              Libro electrónico en Apple, Kobo, B&amp;N y más
            </a>
            <p className="font-serif italic text-caption text-bone/70 mt-4 max-w-md">
              ¿No está en los estantes de tu librería? Pide que lo encarguen. Pueden conseguirlo a través de IngramSpark.
            </p>
          </div>
        </div>
      </section>
      {/* ============================================
          READER REFLECTIONS
          Translated from reader reviews on Amazon.ca.
          An ellipsis marks where a review was shortened.
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container">
          <h2 className="font-serif text-heading text-night mb-4 text-center">
            Reflexiones de quienes leen
          </h2>
          <p className="font-serif italic text-caption text-night/70 mb-12 text-center">
            Reseñas traducidas del inglés.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Nunca había vivido una apertura así con un libro. Nunca. Y apenas estoy llegando a la primera pregunta. Este libro te invita a sentir las palabras con el cuerpo en lugar de relacionarte con él desde la mente que piensa, y está escrito de una manera que permite que eso suceda.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «&hellip; este libro es una herramienta valiosa para seguir tu progreso. Te ayuda a hacerte responsable y a seguir impulsándote para tomar el rumbo que quieres.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                Reseña en Amazon
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://a.co/d/04ofbHp4"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Lee todas las reseñas en Amazon &rarr;
            </a>
          </p>
        </div>
      </section>

      <MoreBooks current="/book-of-questions" locale="es" />
      <NewsletterSignup locale="es" />
    </>
  )
}

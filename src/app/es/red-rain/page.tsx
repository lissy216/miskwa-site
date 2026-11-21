import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Red Rain: A Soul Shattered',
  description: 'La historia de una caída en desgracia, de un alma joven hecha pedazos y del viaje para encontrar humanidad en los lugares oscuros. No es una historia de redención fácil. Es una guía de campo para atravesar la oscuridad con dignidad.',
  alternates: alternates('es', '/red-rain'),
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/es/red-rain',
    siteName: 'Miskwa Kimiwan',
    title: 'Red Rain: A Soul Shattered',
    description:
      'No es una historia de redención fácil. Es una guía de campo para atravesar la oscuridad con dignidad.',
    images: [
      {
        url: '/images/red-rain-cover.png',
        width: 430,
        height: 645,
        alt: 'Red Rain: A Soul Shattered, portada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Rain: A Soul Shattered',
    description:
      'No es una historia de redención fácil. Es una guía de campo para atravesar la oscuridad con dignidad.',
    images: ['/images/red-rain-cover.png'],
  },
}

export default function RedRain() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Ya disponible</p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              Red Rain
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              A Soul Shattered
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Un niño sobrevive a los traumas que debieron haberlo quebrado: una cama de hospital encendida como un horno, la piel abriéndose como corteza. Una historia familiar cargada de silencio. Noches visitadas por sueños que se sienten como advertencias. Crece a la sombra del trauma intergeneracional y de las preguntas dolorosas que deja atrás.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-6">
              ¿Qué es real? ¿Adónde va el dolor cuando nadie lo sostiene? ¿En quiénes nos convertimos cuando el mundo se olvida de vernos?
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              En los largos pasillos de la memoria perdida, aprende la medicina más feroz que tiene: la presencia. El valor de quedarse con lo que duele el tiempo suficiente para dejar que cambie.
            </p>

            {/* Purchase Links */}
            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/6qsyT4d"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Comprar en Amazon
              </a>
              <a
                href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Comprar en Chapters Indigo
              </a>
              <a
                href="https://www.singingpebblebooks.ca/item/IqkeFrEQxd9jYdLHR2ZMUA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Comprar en Singing Pebble Books (Ottawa)
              </a>
              <a
                href="https://books2read.com/u/b5AEQG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Libro electrónico en Apple, Kobo, B&amp;N y más
              </a>
              <p className="font-serif italic text-caption text-bone/70 mt-3 max-w-md">
                Este libro está disponible en inglés.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
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
                src="/images/red-rain-cover.png"
                alt="Red Rain: A Soul Shattered, portada"
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
          ABOUT THE BOOK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Sobre el libro
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              En el camino hay momentos que queman y santifican: la bondad de un desconocido en un hospital, el peso de los amigos caídos, un padre que busca el Cielo y el voto silencioso de terminar con lo que ha perseguido a su linaje.
            </p>
            <p>
              Si alguna vez nadie te vio, si fuerzas más grandes que tú te dispersaron, este libro te ofrece una mano en el hombro y un sendero a través del bosque. No para borrar el pasado, sino para transmutarlo en elección, en compasión y en un fuego que por fin enciende tu nombre.
            </p>
            <p className="text-bone/70">
              <em>Red Rain: A Soul Shattered</em> no es una historia de redención fácil. Es una guía de campo para atravesar la oscuridad con dignidad.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-10" />
          <p className="pull-quote text-bone max-w-2xl mx-auto">
            «Sanar no es escapar de lo que te está hiriendo. Es volverte consciente de ello.»
          </p>
          <p className="font-display text-caption text-bone/70 mt-6 tracking-wide">
            De <em>Red Rain: A Soul Shattered</em>
          </p>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
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
                «Al principio, este libro parece la historia de los sucesos en la vida de un niño mientras crece hasta hacerse hombre. Lo que no notas de entrada es que la historia va entrando en silencio a distintas partes de ti. Algunos capítulos son difíciles de leer, no solo por su contenido, sino porque hacen aflorar tus propias heridas sin resolver. Al final, te das cuenta de que te han vuelto a dar forma, de que te han cambiado y sanado. Este libro no se limita a mostrar el poder de la interconexión y de la conciencia colectiva: usa ese poder, de forma activa, para sanarte.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Nunca había querido simplemente abrazar con tanta fuerza a quien escribió un libro y decirle que todo va a estar bien. Me rompió, me sanó, y quiero vivir y amar con todo lo que soy.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Este libro me cambió. Lo sentí suceder con cada página que leía. Hay una medicina tejida en él: la medicina del sentido. Desgarrador, crudo, honesto, con una elegancia poética, me dio esperanza e inspiración, una guía. Una lectura realmente notable. Es un enfoque muy arraigado de la alquimia espiritual que hace falta para salvar una vida dándole sentido a todo el dolor y el sufrimiento que vivimos aquí.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.R.D.
              </footer>
            </blockquote>

            {/* The five below are translated from verified-purchase reader reviews
                on Amazon.ca. An ellipsis marks where a review was shortened. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Este libro es de una belleza devastadora. &hellip; Estas páginas te van a romper, pero también te van a volver a armar. Este libro es un verdadero regalo.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Este libro expresa con arte lo que significa transmutar el dolor y convertir la oscuridad en algo hermoso, de la manera más cruda y humana.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Una lectura hermosa, llena de profundidad, introspección y una narración sentida. Red Rain invita a quien lee a sostener el dolor de una manera sagrada.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.F.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Red Rain nos recuerda lo importante que es sostener un espacio para nosotros y para los demás, y que sanar es posible incluso en nuestros momentos más oscuros.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                T.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Desgarrador, hermoso e inspirador: este libro te va a cambiar.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                I.
              </footer>
            </blockquote>

            {/* Translated from a verified reviewer on Chapters Indigo. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                «Sin duda, una lectura increíble. No pude soltarlo.»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://a.co/d/6qsyT4d"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Lee todas las reseñas en Amazon &rarr;
            </a>
          </p>
          <p className="text-center mt-4">
            <a
              href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Reseñas en Chapters Indigo &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ============================================
          ABOUT THE AUTHOR
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/85 mb-4">
            Sobre Miskwa Kimiwan
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed max-w-xl mx-auto">
            Miskwa Kimiwan escribe, sana y enseña sanación espiritual y medicina energética. La obra de Miskwa Kimiwan lleva consigo memoria y medicina intergeneracional, y tiende puentes entre el trauma, la presencia y el mundo invisible. Su trabajo ayuda a otras personas a recordar quiénes son debajo del dolor.
          </p>
        </div>
      </section>
      <MoreBooks current="/red-rain" locale="es" />
      <NewsletterSignup locale="es" />
    </>
  )
}

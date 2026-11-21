import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Glyph from '@/components/Glyph'
import ShadowArt from '@/components/hero-art/ShadowArt'
import LightArt from '@/components/hero-art/LightArt'
import { alternates } from '@/lib/i18n'

// Title, description and Open Graph come from the Spanish layout defaults.
export const metadata: Metadata = {
  alternates: alternates('es', '/'),
}

const pillars = [
  { glyph: 'branch', label: 'Trauma y sombra', tagline: 'Honrar las heridas' },
  { glyph: 'eye', label: 'La pregunta', tagline: 'Abrirse a la sabiduría' },
  { glyph: 'spiral', label: 'Transformación', tagline: 'La alquimia interior' },
  { glyph: 'sun', label: 'Sabiduría y claridad', tagline: 'Caminar con el alma' },
  { glyph: 'wholeness', label: 'Plenitud', tagline: 'Vivir la respuesta' },
] as const

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO: Split Panel, Shadow / Light, with per-book SVG atmospheres and a soft seam blend
          ============================================ */}
      <section className="relative min-h-[90vh] grid grid-cols-1 xl:grid-cols-2 overflow-hidden">
        {/* Shadow Side: Red Rain atmosphere (meditating figure + ember heart + ancestral silhouettes) */}
        <div className="hero-field-shadow flex items-center justify-center p-8 md:p-12 xl:p-20 min-h-[60vh] xl:min-h-[90vh]">
          <ShadowArt className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" />
          <div className="relative z-10 max-w-md">
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-glow mb-3">
              Miskwa Kimiwan
            </p>
            <p className="font-display text-xs md:text-sm tracking-[0.22em] uppercase text-glow/90 mb-10">
              Escritura para el camino del alma
            </p>
            <h1 className="font-serif text-[2.25rem] md:text-[2.75rem] xl:text-[3rem] leading-[1.15] text-bone mb-6">
              Una casa para la obra que sostiene juntas la sombra y la luz.
            </h1>
            <p className="font-body text-body-lg text-bone/80 mb-10 leading-relaxed">
              Libros que atraviesan la oscuridad con dignidad. Un trabajo de sanación que se queda con lo que duele el tiempo suficiente para dejar que cambie.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#books" className="btn-primary backdrop-blur-sm bg-night/30">
                Explorar
              </Link>
              <Link href="/es/about" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night backdrop-blur-sm bg-night/30">
                Empieza aquí
              </Link>
            </div>
          </div>
        </div>

        {/* Light Side: The Re-Membering (new release) atmosphere */}
        <div className="hero-field-light flex items-center justify-center p-8 md:p-10 xl:p-16 min-h-[50vh] xl:min-h-[90vh]">
          <LightArt className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />
          <div className="relative z-10 w-full max-w-md min-[1440px]:max-w-2xl">
            <div className="flex flex-col min-[1440px]:flex-row items-center gap-8 min-[1440px]:gap-10 text-center min-[1440px]:text-left">
              {/* Book cover */}
              <div className="relative w-40 md:w-48 min-[1440px]:w-56 shrink-0 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/the-re-membering-cover.jpg"
                  alt="The Re-Membering, portada del libro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, (max-width: 1440px) 192px, 224px"
                  priority
                />
              </div>

              {/* Text. The hyphen in Re-Membering is the point of the title and must
                  not break, so the word is held together and 'The' wraps instead. The
                  title is longer than Signal, so it steps down from display-sm on md. */}
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-[2rem] md:text-[1.875rem] lg:text-[2.25rem] xl:text-display-sm text-night mb-3 leading-tight">
                  The <span className="whitespace-nowrap">Re-Membering</span>
                </h2>
                <p className="font-serif italic text-subheading text-night/80 mb-5">
                  Six Turns Back to the Part of You That Never Forgot
                </p>
                <p className="font-body text-body text-night/75 mb-7">
                  No te han roto. Has estado viviendo. Para la parte de ti que sospecha que alguna vez supo algo, y ahora no logra encontrarlo.
                </p>
                <p className="font-body text-caption text-ash mb-7">
                  Nuevo lanzamiento. Tapa blanda, libro electrónico y audiolibro.
                </p>
                <Link href="/es/the-re-membering" className="btn-light backdrop-blur-sm bg-parchment/40">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Seam blend layer 1: soft vertical gradient bridges the two atmospheres */}
        <div
          className="hidden xl:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[38%] pointer-events-none z-2"
          aria-hidden
          style={{
            background:
              'linear-gradient(to right, transparent 0%, rgba(139, 37, 0, 0.18) 22%, rgba(196, 58, 26, 0.22) 42%, rgba(212, 168, 83, 0.28) 58%, rgba(184, 134, 78, 0.20) 78%, transparent 100%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Seam blend layer 2: central ember/amber glow at the meeting point */}
        <div
          className="hidden xl:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[22%] pointer-events-none z-2"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 60% 75% at center, rgba(245, 214, 107, 0.18) 0%, rgba(196, 58, 26, 0.15) 40%, transparent 85%)',
            mixBlendMode: 'screen',
          }}
        />
      </section>

      {/* ============================================
          PHILOSOPHY STRIP
          ============================================ */}
      <section className="mood-threshold py-16 md:py-20">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-8" />
          <p className="pull-quote text-bone/90 max-w-2xl mx-auto">
            &laquo;Sanar no es escapar de aquello que te está hiriendo. Es volverte consciente de ello.&raquo;
          </p>
          <p className="font-display text-caption text-glow/85 mt-6 tracking-[0.2em] uppercase">
            De <em>Red Rain: A Soul Shattered</em>
          </p>
        </div>
      </section>

      {/* ============================================
          THE JOURNEY: Five Pillars (icon glyphs per mood board)
          ============================================ */}
      <section className="bg-night relative py-section-sm md:py-section overflow-hidden">
        <div className="section-container relative">
          <div className="text-center mb-14">
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-bridge font-semibold mb-4">
              El territorio
            </p>
            <h2 className="font-serif text-display-sm md:text-heading text-bone">Cinco umbrales</h2>
            <div className="divider-bridge max-w-sm mx-auto mt-8 opacity-70" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-6 max-w-6xl mx-auto">
            {pillars.map((p) => (
              <div key={p.label} className="flex flex-col items-center text-center px-2">
                <div className="w-20 h-20 rounded-full border border-glow/40 flex items-center justify-center text-glow mb-6 transition-colors hover:border-glow hover:text-sun">
                  <Glyph name={p.glyph} className="w-10 h-10" />
                </div>
                <p className="pillar-label text-bone mb-3">{p.label}</p>
                <p className="font-serif italic text-body text-bone/75">{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT PREVIEW
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-heading text-night mb-6">
              Aquí no hay maestros. Ni pedestales. Ni gurús.
            </h2>
            <p className="font-body text-body-lg text-night/75 mb-6 leading-relaxed">
              Hay un espacio entre la evasión espiritual y la distancia clínica donde vive el trabajo real. Ahí encontrarás esta práctica. Arraigada en el cuerpo. Honesta con la oscuridad. Construida por alguien que ha estado donde tú estás y no finge lo contrario.
            </p>
            <p className="font-body text-body text-night/70 mb-8">
              Miskwa Kimiwan escribe, sana y enseña sanación espiritual y medicina energética. Su obra carga memoria y medicina intergeneracionales, y tiende un puente entre el trauma, la presencia y el mundo invisible. El trabajo es simple en lo que exige y difícil en su honestidad: quédate con lo que cargas, siéntelo en el cuerpo y descubre que eres más que lo que te pasó.
            </p>
            <Link href="/es/about" className="btn-light">
              Sobre la obra
            </Link>
          </div>
          <div className="relative aspect-3/2 bg-charcoal rounded-sm overflow-hidden">
            <Image
              src="/images/author-portrait.jpg"
              alt="Miskwa Kimiwan, un puente entre mundos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          BOOKS
          ============================================ */}
      <section id="books" className="bg-night py-section-sm md:py-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-heading text-bone">
              Libros publicados y por venir
            </h2>
          </div>

          {/* Flex rather than grid so an incomplete last row sits centred instead of hanging left.
              Widths are the column share minus that share of the 2.5rem gap. */}
          <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto *:w-full sm:*:w-[calc(50%-1.25rem)] lg:*:w-[calc(33.333%-1.667rem)]">
            {/* The Re-Membering (newest release) */}
            <Link href="/es/the-re-membering" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/the-re-membering-cover.jpg"
                  alt="The Re-Membering: Six Turns Back to the Part of You That Never Forgot, portada del libro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
              </div>
              {/* The hyphen is the point of the title and must never become a line break. */}
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible ahora
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The <span className="whitespace-nowrap">Re-Membering</span></h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">Six Turns Back to the Part of You That Never Forgot</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Este libro fue escrito para la parte de ti que sospecha que alguna vez supo algo, y ahora no logra encontrarlo. Casi todo lo que se le ofrece a esa parte de ti es un sistema. The Re-Membering no lo es.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Leer más &rarr;
              </p>
            </Link>

            {/* Forgiveness as Freedom (forthcoming) */}
            <Link href="/es/forgiveness-as-freedom" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.2)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/forgiveness-as-freedom-cover.jpg"
                  alt="Forgiveness as Freedom: A Self Process for Release, Boundary, and Return, portada del libro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Solsticio de invierno &middot; <span className="whitespace-nowrap">21 de diciembre de 2026</span>
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">Forgiveness as Freedom</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">A Self Process for Release, Boundary, and Return</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Llevas un cansancio encima. No del que se cura durmiendo. Decir la verdad sobre lo que pasó. Trazar el límite. Soltar la cuerda. Volver a tu propia vida.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-bridge group-hover:text-glow transition-colors">
                Leer más &rarr;
              </p>
            </Link>

            {/* The Signal (newest) */}
            <Link href="/es/the-signal" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 bg-black rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/the-signal-cover.jpg"
                  alt="The Signal: Why Life and People Keep Happening to You, portada del libro"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible ahora
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The Signal</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">Why Life and People Keep Happening to You</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Ahora mismo estás emitiendo algo. Una frecuencia que tu cuerpo lleva desde antes de que tuvieras una palabra para nombrarla. Este libro trata de esa señal, y de la vida que ha ido armando en silencio a tu alrededor.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Leer más &rarr;
              </p>
            </Link>

            {/* Red Rain */}
            <Link href="/es/red-rain" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(196,58,26,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/red-rain-cover.png"
                  alt="Red Rain: A Soul Shattered, portada del libro"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible ahora
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">Red Rain</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">A Soul Shattered</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                La historia de una caída en desgracia, de un alma joven hecha pedazos, y del camino para encontrar humanidad en los lugares oscuros. No un relato de redención fácil. Una guía de campo para atravesar la oscuridad con dignidad.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Leer más &rarr;
              </p>
            </Link>

            {/* Book of Questions */}
            <Link href="/es/book-of-questions" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(212,168,83,0.2)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/book-of-questions-cover.png"
                  alt="The Book of Questions: The Socratic Year of the Soul, portada del libro"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible ahora
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The Book of Questions</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">The Socratic Year of the Soul</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                La mayoría de los libros te entregan respuestas. Este te devuelve a ti. 365 preguntas a lo largo de doce meses de territorio del alma. Una conversación entre tú y la parte de ti que ha estado esperando que le pregunten.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-bridge group-hover:text-glow transition-colors">
                Leer más &rarr;
              </p>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link href="/es/bookstore" className="btn-primary">
              Dónde comprar cada libro
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-heading text-night">
              Lo que la obra deja, según quienes la leen
            </h2>
            <p className="font-body text-caption text-night/60 mt-4">
              Reseñas traducidas del inglés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                &laquo;Este libro no se limita a ilustrar el poder de la interconexión y de la conciencia colectiva: usa ese poder, activamente, para sanarte.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                &laquo;Me rompió, me sanó, y quiero vivir y amar con todo lo que soy.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                &laquo;Lleva una medicina tejida por dentro. La medicina del sentido. Una lectura verdaderamente extraordinaria. Mi nueva voz favorita.&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.R.D.
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============================================
          NEWSLETTER
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <h2 className="font-serif text-heading text-bone mb-4">
            Camina conmigo por el bosque
          </h2>
          <p className="font-body text-body text-bone/60 mb-10 max-w-lg mx-auto">
            Escritura sobre la redención, el cuerpo y la práctica de volverse más que lo que pasó. Se publica en inglés en Substack como The Rainfall Newsletter.
          </p>
          <a
            href="https://substack.com/@miskwakimiwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-display text-sm md:text-base tracking-[0.25em] uppercase border border-glow text-glow transition-colors duration-300 hover:bg-glow/10 hover:text-sun"
          >
            Suscríbete en Substack
          </a>
        </div>
      </section>
    </>
  )
}

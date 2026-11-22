import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Glyph from '@/components/Glyph'
import ShadowArt from '@/components/hero-art/ShadowArt'
import LightArt from '@/components/hero-art/LightArt'
import { alternates } from '@/lib/i18n'

// Title, description and Open Graph come from the German layout defaults.
export const metadata: Metadata = {
  alternates: alternates('de', '/'),
}

const pillars = [
  { glyph: 'branch', label: 'Trauma und Schatten', tagline: 'Die Wunden ehren' },
  { glyph: 'eye', label: 'Die Frage', tagline: 'Sich der Weisheit öffnen' },
  { glyph: 'spiral', label: 'Wandlung', tagline: 'Die innere Alchemie' },
  { glyph: 'sun', label: 'Weisheit und Klarheit', tagline: 'Mit der Seele gehen' },
  { glyph: 'wholeness', label: 'Ganzheit', tagline: 'Die Antwort leben' },
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
              Schreiben für den Weg der Seele
            </p>
            <h1 className="font-serif text-[2.25rem] md:text-[2.75rem] xl:text-[3rem] leading-[1.15] text-bone mb-6">
              Ein Haus für ein Werk, das Schatten und Licht zusammenhält.
            </h1>
            <p className="font-body text-body-lg text-bone/80 mb-10 leading-relaxed">
              Bücher, die mit Würde durch die Dunkelheit gehen. Heilarbeit, die lange genug bei dem bleibt, was wehtut, damit es sich wandeln kann.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#books" className="btn-primary backdrop-blur-sm bg-night/30">
                Entdecken
              </Link>
              <Link href="/de/about" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night backdrop-blur-sm bg-night/30">
                Hier beginnen
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
                  alt="The Re-Membering, Buchcover"
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
                  Sie sind nicht zerbrochen. Sie haben gelebt. Für den Teil von Ihnen, der ahnt, dass er einmal etwas wusste, und es jetzt nicht mehr findet.
                </p>
                <p className="font-body text-caption text-ash mb-7">
                  Neuerscheinung. Taschenbuch, E-Book und Hörbuch.
                </p>
                <Link href="/de/the-re-membering" className="btn-light backdrop-blur-sm bg-parchment/40">
                  Mehr erfahren
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
            „Heilung heißt nicht, dem zu entkommen, was Ihnen wehtut. Heilung heißt, sich dessen bewusst zu werden.“
          </p>
          <p className="font-display text-caption text-glow/85 mt-6 tracking-[0.2em] uppercase">
            Aus <em>Red Rain: A Soul Shattered</em>
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
              Das Gelände
            </p>
            <h2 className="font-serif text-display-sm md:text-heading text-bone">Fünf Schwellen</h2>
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
              Keine Meister hier. Keine Podeste. Keine Gurus.
            </h2>
            <p className="font-body text-body-lg text-night/75 mb-6 leading-relaxed">
              Zwischen spiritueller Umgehung und klinischer Distanz gibt es einen Raum, in dem die eigentliche Arbeit lebt. Dort finden Sie diese Praxis. Im Körper verankert. Ehrlich über das Dunkle. Aufgebaut von jemandem, der dort war, wo Sie jetzt sind, und nichts anderes vorgibt.
            </p>
            <p className="font-body text-body text-night/70 mb-8">
              Miskwa Kimiwan schreibt, heilt und lehrt spirituelle Heilung und Energiemedizin. Ein Werk, das generationenübergreifende Erinnerung und Medizin trägt und Brücken schlägt zwischen Trauma, Präsenz und der unsichtbaren Welt. Die Arbeit ist einfach in dem, was sie verlangt, und schwer in ihrer Ehrlichkeit: bei dem bleiben, was Sie tragen, es im Körper spüren und entdecken, dass Sie mehr sind als das, was Ihnen geschehen ist.
            </p>
            <Link href="/de/about" className="btn-light">
              Über das Werk
            </Link>
          </div>
          <div className="relative aspect-3/2 bg-charcoal rounded-sm overflow-hidden">
            <Image
              src="/images/author-portrait.jpg"
              alt="Miskwa Kimiwan, eine Brücke zwischen den Welten"
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
              Bücher, erschienen und kommend
            </h2>
          </div>

          {/* Flex rather than grid so an incomplete last row sits centred instead of hanging left.
              Widths are the column share minus that share of the 2.5rem gap. */}
          <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto *:w-full sm:*:w-[calc(50%-1.25rem)] lg:*:w-[calc(33.333%-1.667rem)]">
            {/* The Re-Membering (newest release) */}
            <Link href="/de/the-re-membering" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/the-re-membering-cover.jpg"
                  alt="The Re-Membering: Six Turns Back to the Part of You That Never Forgot, Buchcover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
              </div>
              {/* The hyphen is the point of the title and must never become a line break. */}
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Jetzt erhältlich
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The <span className="whitespace-nowrap">Re-Membering</span></h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">Six Turns Back to the Part of You That Never Forgot</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Dieses Buch wurde für den Teil von Ihnen geschrieben, der ahnt, dass er einmal etwas wusste, und es jetzt nicht mehr findet. Fast alles, was diesem Teil von Ihnen angeboten wird, ist ein System. The Re-Membering ist keines.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Mehr erfahren &rarr;
              </p>
            </Link>

            {/* Forgiveness as Freedom (forthcoming) */}
            <Link href="/de/forgiveness-as-freedom" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.2)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/forgiveness-as-freedom-cover.jpg"
                  alt="Forgiveness as Freedom: A Self Process for Release, Boundary, and Return, Buchcover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Wintersonnenwende &middot; <span className="whitespace-nowrap">21. Dezember 2026</span>
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">Forgiveness as Freedom</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">A Self Process for Release, Boundary, and Return</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Sie sind müde. Nicht die Müdigkeit, die Schlaf behebt. Die Wahrheit sagen über das, was geschehen ist. Die Grenze ziehen. Das Seil ablegen. In das eigene Leben zurückkehren.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-bridge group-hover:text-glow transition-colors">
                Mehr erfahren &rarr;
              </p>
            </Link>

            {/* The Signal (newest) */}
            <Link href="/de/the-signal" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 bg-black rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/the-signal-cover.jpg"
                  alt="The Signal: Why Life and People Keep Happening to You, Buchcover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Jetzt erhältlich
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The Signal</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">Why Life and People Keep Happening to You</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Sie senden gerade etwas aus. Eine Frequenz, die Ihr Körper trägt, seit bevor Sie ein Wort dafür hatten. Dieses Buch handelt von diesem Signal und von dem Leben, das es still um Sie herum zusammengefügt hat.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Mehr erfahren &rarr;
              </p>
            </Link>

            {/* Red Rain */}
            <Link href="/de/red-rain" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(196,58,26,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/red-rain-cover.png"
                  alt="Red Rain: A Soul Shattered, Buchcover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Jetzt erhältlich
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">Red Rain</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">A Soul Shattered</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Die Geschichte eines Falls, einer jungen Seele, die in Stücke zerbricht, und des Weges, an dunklen Orten Menschlichkeit zu finden. Keine Erzählung von leichter Erlösung. Ein Feldführer, um mit Würde durch die Dunkelheit zu gehen.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Mehr erfahren &rarr;
              </p>
            </Link>

            {/* Book of Questions */}
            <Link href="/de/book-of-questions" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(212,168,83,0.2)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/book-of-questions-cover.png"
                  alt="The Book of Questions: The Socratic Year of the Soul, Buchcover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Jetzt erhältlich
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The Book of Questions</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">The Socratic Year of the Soul</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Die meisten Bücher reichen Ihnen Antworten. Dieses reicht Sie sich selbst zurück. 365 Fragen über zwölf Monate Seelengelände. Ein Gespräch zwischen Ihnen und dem Teil von Ihnen, der darauf wartet, gefragt zu werden.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-bridge group-hover:text-glow transition-colors">
                Mehr erfahren &rarr;
              </p>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link href="/de/bookstore" className="btn-primary">
              Wo es jedes Buch gibt
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
              Was das Werk zurücklässt, sagen die, die es lesen
            </h2>
            <p className="font-body text-caption text-night/60 mt-4">
              Rezensionen aus dem Englischen übersetzt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                „Dieses Buch zeigt nicht nur die Kraft der Verbundenheit und des kollektiven Bewusstseins. Es nutzt diese Kraft, um Sie zu heilen.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                „Es hat mich zerbrochen, es hat mich geheilt, und ich will leben und lieben mit allem, was ich bin.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                „Eine Medizin ist darin eingewoben. Die Medizin der Bedeutung. Eine wirklich bemerkenswerte Lektüre. Meine neue Lieblingsstimme.“
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
            Gehen Sie mit mir durch den Wald
          </h2>
          <p className="font-body text-body text-bone/60 mb-10 max-w-lg mx-auto">
            Texte über Erlösung, den Körper und die Praxis, mehr zu werden als das, was geschehen ist. Auf Englisch erschienen auf Substack als The Rainfall Newsletter.
          </p>
          <a
            href="https://substack.com/@miskwakimiwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-display text-sm md:text-base tracking-[0.25em] uppercase border border-glow text-glow transition-colors duration-300 hover:bg-glow/10 hover:text-sun"
          >
            Auf Substack abonnieren
          </a>
        </div>
      </section>
    </>
  )
}

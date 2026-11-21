import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Glyph from '@/components/Glyph'
import ShadowArt from '@/components/hero-art/ShadowArt'
import LightArt from '@/components/hero-art/LightArt'
import { alternates } from '@/lib/i18n'

// Title, description and Open Graph come from the French layout defaults.
export const metadata: Metadata = {
  alternates: alternates('fr', '/'),
}

const pillars = [
  { glyph: 'branch', label: 'Trauma et ombre', tagline: 'Honorer les blessures' },
  { glyph: 'eye', label: 'La question', tagline: 'S’ouvrir à la sagesse' },
  { glyph: 'spiral', label: 'Transformation', tagline: 'L’alchimie intérieure' },
  { glyph: 'sun', label: 'Sagesse et clarté', tagline: 'Marcher avec l’âme' },
  { glyph: 'wholeness', label: 'Plénitude', tagline: 'Vivre la réponse' },
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
              Écrire pour le chemin de l’âme
            </p>
            <h1 className="font-serif text-[2.25rem] md:text-[2.75rem] xl:text-[3rem] leading-[1.15] text-bone mb-6">
              Une maison pour une œuvre qui tient ensemble l’ombre et la lumière.
            </h1>
            <p className="font-body text-body-lg text-bone/80 mb-10 leading-relaxed">
              Des livres qui traversent l’obscurité avec dignité. Un travail de guérison qui reste auprès de ce qui fait mal assez longtemps pour que cela change.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#books" className="btn-primary backdrop-blur-sm bg-night/30">
                Explorer
              </Link>
              <Link href="/fr/about" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night backdrop-blur-sm bg-night/30">
                Commencer ici
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
                  alt="The Re-Membering, couverture du livre"
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
                  Rien en vous n’est brisé. Vous avez vécu. Pour la part de vous qui soupçonne avoir su quelque chose autrefois, et ne le retrouve plus.
                </p>
                <p className="font-body text-caption text-ash mb-7">
                  Nouvelle parution. Broché, numérique et audio.
                </p>
                <Link href="/fr/the-re-membering" className="btn-light backdrop-blur-sm bg-parchment/40">
                  En savoir plus
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
            «&nbsp;Guérir, ce n’est pas fuir ce qui vous fait mal. C’est en prendre conscience.&nbsp;»
          </p>
          <p className="font-display text-caption text-glow/85 mt-6 tracking-[0.2em] uppercase">
            Extrait de <em>Red Rain: A Soul Shattered</em>
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
              Le territoire
            </p>
            <h2 className="font-serif text-display-sm md:text-heading text-bone">Cinq seuils</h2>
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
              Ici, pas de maîtres. Pas de piédestaux. Pas de gourous.
            </h2>
            <p className="font-body text-body-lg text-night/75 mb-6 leading-relaxed">
              Entre le contournement spirituel et la distance clinique, il existe un espace où vit le vrai travail. C’est là que se trouve cette pratique. Ancrée dans le corps. Honnête face à l’obscurité. Construite par une personne qui a connu ce que vous traversez, et qui ne prétend pas le contraire.
            </p>
            <p className="font-body text-body text-night/70 mb-8">
              Miskwa Kimiwan écrit, guérit et enseigne la guérison spirituelle et la médecine énergétique. Une œuvre porteuse de mémoire et de médecine intergénérationnelles, qui jette un pont entre le trauma, la présence et le monde invisible. Ce travail est simple dans ce qu’il exige et difficile dans son honnêteté : rester avec ce que vous portez, le sentir dans le corps, et découvrir que vous êtes plus que ce qui vous est arrivé.
            </p>
            <Link href="/fr/about" className="btn-light">
              Découvrir l’œuvre
            </Link>
          </div>
          <div className="relative aspect-3/2 bg-charcoal rounded-sm overflow-hidden">
            <Image
              src="/images/author-portrait.jpg"
              alt="Miskwa Kimiwan, un pont entre les mondes"
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
              Livres parus et à paraître
            </h2>
          </div>

          {/* Flex rather than grid so an incomplete last row sits centred instead of hanging left.
              Widths are the column share minus that share of the 2.5rem gap. */}
          <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto *:w-full sm:*:w-[calc(50%-1.25rem)] lg:*:w-[calc(33.333%-1.667rem)]">
            {/* The Re-Membering (newest release) */}
            <Link href="/fr/the-re-membering" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/the-re-membering-cover.jpg"
                  alt="The Re-Membering: Six Turns Back to the Part of You That Never Forgot, couverture du livre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
              </div>
              {/* The hyphen is the point of the title and must never become a line break. */}
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible maintenant
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The <span className="whitespace-nowrap">Re-Membering</span></h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">Six Turns Back to the Part of You That Never Forgot</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Ce livre a été écrit pour la part de vous qui soupçonne avoir su quelque chose autrefois, et ne le retrouve plus. Presque tout ce qu’on offre à cette part de vous est un système. The Re-Membering n’en est pas un.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                En savoir plus &rarr;
              </p>
            </Link>

            {/* Forgiveness as Freedom (forthcoming) */}
            <Link href="/fr/forgiveness-as-freedom" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.2)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/forgiveness-as-freedom-cover.jpg"
                  alt="Forgiveness as Freedom: A Self Process for Release, Boundary, and Return, couverture du livre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Solstice d’hiver &middot; <span className="whitespace-nowrap">21 décembre 2026</span>
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">Forgiveness as Freedom</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">A Self Process for Release, Boundary, and Return</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Vous portez une fatigue. Pas celle que le sommeil répare. Dire la vérité sur ce qui s’est passé. Tracer la limite. Poser la corde. Revenir à votre propre vie.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-bridge group-hover:text-glow transition-colors">
                En savoir plus &rarr;
              </p>
            </Link>

            {/* The Signal (newest) */}
            <Link href="/fr/the-signal" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 bg-black rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/the-signal-cover.jpg"
                  alt="The Signal: Why Life and People Keep Happening to You, couverture du livre"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible maintenant
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The Signal</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">Why Life and People Keep Happening to You</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                En ce moment même, vous émettez quelque chose. Une fréquence que votre corps porte depuis avant que vous ayez un mot pour la dire. Ce livre parle de ce signal, et de la vie qu’il assemble en silence autour de vous.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                En savoir plus &rarr;
              </p>
            </Link>

            {/* Red Rain */}
            <Link href="/fr/red-rain" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(196,58,26,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/red-rain-cover.png"
                  alt="Red Rain: A Soul Shattered, couverture du livre"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible maintenant
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">Red Rain</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">A Soul Shattered</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                L’histoire d’une chute, d’une jeune âme volée en éclats, et du chemin pour retrouver l’humanité dans les lieux obscurs. Pas un récit de rédemption facile. Un guide de terrain pour traverser l’obscurité avec dignité.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                En savoir plus &rarr;
              </p>
            </Link>

            {/* Book of Questions */}
            <Link href="/fr/book-of-questions" className="group flex flex-col items-center text-center">
              <div className="relative aspect-2/3 w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(212,168,83,0.2)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/book-of-questions-cover.png"
                  alt="The Book of Questions: The Socratic Year of the Soul, couverture du livre"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-3">
                Disponible maintenant
              </p>
              <h3 className="font-serif text-subheading text-bone mb-2">The Book of Questions</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">The Socratic Year of the Soul</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                La plupart des livres vous tendent des réponses. Celui-ci vous rend à vous-même. 365 questions sur douze mois de territoire de l’âme. Une conversation entre vous et la part de vous qui attend qu’on lui pose la question.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-bridge group-hover:text-glow transition-colors">
                En savoir plus &rarr;
              </p>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link href="/fr/bookstore" className="btn-primary">
              Où acheter chaque livre
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
              Ce que l’œuvre laisse, selon celles et ceux qui la lisent
            </h2>
            <p className="font-body text-caption text-night/60 mt-4">
              Avis traduits de l’anglais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                «&nbsp;Ce livre ne se contente pas d’illustrer le pouvoir de l’interconnexion et de la conscience collective : il se sert de ce pouvoir pour vous guérir.&nbsp;»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                «&nbsp;Il a tout brisé en moi, il a tout guéri, et je veux vivre et aimer avec tout ce que je suis.&nbsp;»
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                «&nbsp;Une médecine y est tissée. La médecine du sens. Une lecture vraiment remarquable. Ma nouvelle plume préférée.&nbsp;»
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
            Marchez avec moi dans la forêt
          </h2>
          <p className="font-body text-body text-bone/60 mb-10 max-w-lg mx-auto">
            Des textes sur la rédemption, le corps et la pratique de devenir plus que ce qui est arrivé. Publiés en anglais sur Substack sous le nom The Rainfall Newsletter.
          </p>
          <a
            href="https://substack.com/@miskwakimiwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-display text-sm md:text-base tracking-[0.25em] uppercase border border-glow text-glow transition-colors duration-300 hover:bg-glow/10 hover:text-sun"
          >
            S’abonner sur Substack
          </a>
        </div>
      </section>
    </>
  )
}

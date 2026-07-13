import Link from 'next/link'
import Image from 'next/image'
import Glyph from '@/components/Glyph'
import ShadowArt from '@/components/hero-art/ShadowArt'
import LightArt from '@/components/hero-art/LightArt'

const pillars = [
  { glyph: 'branch', label: 'Trauma & Shadow', tagline: 'Honoring the wounds' },
  { glyph: 'eye', label: 'The Question', tagline: 'Opening to wisdom' },
  { glyph: 'spiral', label: 'Transformation', tagline: 'The alchemy within' },
  { glyph: 'sun', label: 'Wisdom & Clarity', tagline: 'Walking with the soul' },
  { glyph: 'wholeness', label: 'Wholeness', tagline: 'Living the answer' },
] as const

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO: Split Panel — Shadow / Light, with per-book SVG atmospheres and a soft seam blend
          ============================================ */}
      <section className="relative min-h-[90vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Shadow Side — Red Rain atmosphere (meditating figure + ember heart + ancestral silhouettes) */}
        <div className="hero-field-shadow flex items-center justify-center p-8 md:p-16 lg:p-20 min-h-[60vh] md:min-h-[90vh]">
          <ShadowArt className="absolute inset-0 w-full h-full opacity-55 pointer-events-none" />
          <div className="relative z-10 max-w-md">
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-glow mb-3">
              Miskwa Kimiwan
            </p>
            <p className="font-display text-xs md:text-sm tracking-[0.22em] uppercase text-glow/90 mb-10">
              Writing for the Soul&rsquo;s Journey
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-6 leading-tight [text-shadow:0_0_28px_rgba(10,5,2,0.85)]">
              A house for work that holds shadow and light together.
            </h1>
            <p className="font-body text-body-lg text-bone/80 mb-10 leading-relaxed [text-shadow:0_0_22px_rgba(10,5,2,0.8)]">
              Books that walk through darkness with dignity. Healing work that sits with what hurts long enough to let it change.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#books" className="btn-primary backdrop-blur-sm bg-night/30">
                Explore
              </Link>
              <Link href="/about" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night backdrop-blur-sm bg-night/30">
                Begin Here
              </Link>
            </div>
          </div>
        </div>

        {/* Light Side — The Signal (new release) atmosphere */}
        <div className="hero-field-light flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[50vh] md:min-h-[90vh]">
          <LightArt className="absolute inset-0 w-full h-full opacity-65 pointer-events-none" />
          <div className="relative z-10 w-full max-w-md md:max-w-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10 text-center md:text-left">
              {/* Book cover */}
              <div className="relative w-40 md:w-52 lg:w-56 flex-shrink-0 aspect-[2/3] bg-black rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/the-signal-cover.jpg"
                  alt="The Signal — book cover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 224px"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-4">
                  New Release
                </p>
                <h2 className="font-serif text-display-sm md:text-heading text-night mb-3 leading-tight [text-shadow:0_0_22px_rgba(245,240,230,0.9)]">
                  The Signal
                </h2>
                <p className="font-serif italic text-subheading text-night/80 mb-5 [text-shadow:0_0_18px_rgba(245,240,230,0.9)]">
                  Why Life and People Keep Happening to You
                </p>
                <p className="font-body text-body text-night/75 mb-7 [text-shadow:0_0_18px_rgba(245,240,230,0.9)]">
                  You are broadcasting something right now. A frequency your body has been carrying since before you had a word for it. This book is about that signal.
                </p>
                <Link href="/the-signal" className="btn-light backdrop-blur-sm bg-parchment/40">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Seam blend layer 1 — soft vertical gradient bridges the two atmospheres */}
        <div
          className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[38%] pointer-events-none z-[2]"
          aria-hidden
          style={{
            background:
              'linear-gradient(to right, transparent 0%, rgba(139, 37, 0, 0.18) 22%, rgba(196, 58, 26, 0.22) 42%, rgba(212, 168, 83, 0.28) 58%, rgba(184, 134, 78, 0.20) 78%, transparent 100%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Seam blend layer 2 — central ember/amber glow at the meeting point */}
        <div
          className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[22%] pointer-events-none z-[2]"
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
            &ldquo;Healing is not about escaping the thing that is hurting you. It is about becoming conscious of it.&rdquo;
          </p>
          <p className="font-display text-caption text-glow/70 mt-6 tracking-[0.2em] uppercase">
            &mdash; from <em>Red Rain: A Soul Shattered</em>
          </p>
        </div>
      </section>

      {/* ============================================
          THE JOURNEY — Five Pillars (icon glyphs per mood board)
          ============================================ */}
      <section className="bg-night relative py-section-sm md:py-section overflow-hidden">
        <div className="section-container relative">
          <div className="text-center mb-14">
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-bridge font-semibold mb-4">
              The Territory
            </p>
            <h2 className="font-serif text-display-sm md:text-heading text-bone">Five Thresholds</h2>
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
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              The Work
            </p>
            <h2 className="font-serif text-heading text-night mb-6">
              No masters here. No pedestals. No gurus.
            </h2>
            <p className="font-body text-body-lg text-night/60 mb-6 leading-relaxed">
              There is a space between spiritual bypassing and clinical distance where the real work lives. That is where you will find this practice. Grounded in the body. Honest about the dark. Built by someone who has been where you are and does not pretend otherwise.
            </p>
            <p className="font-body text-body text-night/50 mb-8">
              Miskwa Kimiwan is an author, healer, and teacher of spiritual healing and energy medicine. A carrier of intergenerational memory and medicine whose work bridges trauma, presence, and the unseen world. The work is simple in its demand and difficult in its honesty: sit with what you carry, feel it in the body, and discover that you are more than what happened to you.
            </p>
            <Link href="/about" className="btn-secondary">
              About the Work
            </Link>
          </div>
          <div className="relative aspect-[3/2] bg-charcoal rounded-sm overflow-hidden">
            <Image
              src="/images/author-portrait.jpg"
              alt="Miskwa Kimiwan — a bridge between worlds"
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
            <p className="font-display text-xs tracking-[0.25em] uppercase text-glow mb-4">
              Published Works
            </p>
            <h2 className="font-serif text-heading text-bone">
              Books
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* The Signal (newest) */}
            <Link href="/the-signal" className="group flex flex-col items-center text-center">
              <div className="relative aspect-[2/3] w-full max-w-[300px] mb-8 bg-black rounded-sm overflow-hidden drop-shadow-[0_20px_40px_rgba(212,168,83,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/the-signal-cover.jpg"
                  alt="The Signal: Why Life and People Keep Happening to You - Book Cover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="font-serif text-subheading text-bone mb-2">The Signal</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">Why Life and People Keep Happening to You</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                You are broadcasting something right now. A frequency your body has been carrying since before you had a word for it. This book is about that signal, and about the life it has been quietly assembling around you.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Read More &rarr;
              </p>
            </Link>

            {/* Red Rain */}
            <Link href="/red-rain" className="group flex flex-col items-center text-center">
              <div className="relative aspect-[2/3] w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(196,58,26,0.25)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/red-rain-cover.png"
                  alt="Red Rain: A Soul Shattered - Book Cover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="font-serif text-subheading text-bone mb-2">Red Rain</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">A Soul Shattered</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                A story of a fall from grace, the shattering to pieces of a young soul, and the journey to find humanity in the dark places. Not a tale of easy redemption. A field guide for walking through darkness with dignity.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-glow group-hover:text-sun transition-colors">
                Read More &rarr;
              </p>
            </Link>

            {/* Book of Questions */}
            <Link href="/book-of-questions" className="group flex flex-col items-center text-center">
              <div className="relative aspect-[2/3] w-full max-w-[300px] mb-8 drop-shadow-[0_20px_40px_rgba(212,168,83,0.2)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/images/book-of-questions-cover.png"
                  alt="The Book of Questions: The Socratic Year of the Soul - Book Cover"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="font-serif text-subheading text-bone mb-2">The Book of Questions</h3>
              <p className="font-serif italic text-body text-bone/60 mb-4">The Socratic Year of the Soul</p>
              <p className="font-body text-caption text-bone/60 leading-relaxed max-w-sm">
                Most books hand you answers. This one hands you back to yourself. 365 questions across twelve months of soul territory. A conversation between you and the part of you that has been waiting to be asked.
              </p>
              <p className="mt-6 font-display text-xs tracking-[0.2em] uppercase text-bridge group-hover:text-glow transition-colors">
                Read More &rarr;
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          PROGRAMS PREVIEW
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
                Programs
              </p>
              <h2 className="font-serif text-heading text-bone mb-6">
                Living The Light Sacred Alchemy Training
              </h2>
              <p className="font-body text-body-lg text-bone/70 mb-4 leading-relaxed">
                A two-year program for anyone who has felt the pull toward healing work but did not know where to begin. Or for the practitioner who has trained elsewhere and senses that something essential was left out.
              </p>
              <p className="font-body text-body text-bone/50 mb-8">
                Eight modules. Over 320 hours of medicine work. Energy healing, journey work, ceremony, readings, space healings, and the inner discipline required to hold space for another human being. You will learn by doing. You will heal as you train.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/programs" className="btn-primary">
                  Learn More
                </Link>
                <Link href="/programs#sessions" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">
                  Private Sessions
                </Link>
              </div>
            </div>
            <div className="relative aspect-square bg-charcoal/50 rounded-sm overflow-hidden">
              <Image
                src="/images/all-healed.png"
                alt="Healing light and ancestral presence"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-4">
              Readers Reflections
            </p>
            <h2 className="font-serif text-heading text-night">
              What the work leaves behind
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                &ldquo;This book doesn&rsquo;t simply illustrate the power of interconnectedness and collective consciousness; it actively uses that power to heal you.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/60 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                &ldquo;It broke me, it healed me, and I want to live and love with all that I am.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/60 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-6">
                &ldquo;There&rsquo;s a medicine woven into it. The medicine of meaning. A truly remarkable read. My new favourite author.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/60 tracking-wide">
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
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
            The Rainfall Newsletter
          </p>
          <h2 className="font-serif text-heading text-bone mb-4">
            Walk with me through the forest
          </h2>
          <p className="font-body text-body text-bone/60 mb-10 max-w-lg mx-auto">
            Writing on redemption, the body, and the practice of becoming more than what happened. Published on Substack.
          </p>
          <a
            href="https://substack.com/@miskwakimiwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-display text-sm md:text-base tracking-[0.25em] uppercase border border-glow text-glow transition-colors duration-300 hover:bg-glow/10 hover:text-sun"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </>
  )
}

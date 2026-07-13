import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Signal: Why Life and People Keep Happening to You',
  description:
    'You are broadcasting something right now. Something underneath the version you bring to dinner parties. A frequency your body has been carrying since before you had a word for it. This book is about that signal, and the life it has been quietly assembling around you.',
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
              Now Available in Paperback and Ebook
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              The Signal
            </h1>
            <p className="font-serif italic text-subheading text-bone/70 mb-2">
              Why Life and People Keep Happening to You
            </p>
            <p className="font-display text-caption text-bone/50 mb-8 tracking-[0.15em] uppercase">
              A book by Miskwa Kimiwan
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              You are broadcasting something right now.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
              Not the words you use to describe yourself. Not the version you bring to dinner parties, to job interviews, to the first three months of a new relationship. Something underneath all of that. A frequency your body has been carrying since before you had a word for it. The thing that people in the room with you can sense without being able to name.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
              This book is about that signal, and about the life it has been quietly assembling around you.
            </p>

            <div className="flex flex-col gap-3">
              <span className="btn-primary inline-flex items-center gap-3 w-fit cursor-default opacity-70">
                Order the Book &mdash; Coming Soon
              </span>
              <p className="font-display text-caption text-bone/40 tracking-[0.15em] uppercase">
                Paperback and Ebook editions arriving soon
              </p>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 md:w-72 lg:w-80 aspect-[2/3] bg-black rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/the-signal-cover.jpg"
                alt="The Signal: Why Life and People Keep Happening to You - Front Cover"
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
            The Question Underneath
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Maybe you have been doing the work for years.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Maybe you have been doing the work for years and something keeps not being said. Maybe you have been reading the popular healing literature and finding that something underneath the language is missing, even when the language is good.
            </p>
            <p>
              Or maybe you have not done years of work at all. Maybe you arrived here because the same kind of person keeps showing up in your life under different names. Or the same kind of pain keeps finding you in different shapes. Or the same dynamic keeps repeating in your relationships and your work no matter how much you swore the last time was the last time.
            </p>
            <p>
              You do not have language for why. You just know it keeps happening, and you are tired of it.
            </p>
            <p className="font-serif italic text-bone/80">
              This book is for you.
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
            &ldquo;You are broadcasting something right now. This book is about the life it has been quietly assembling around you.&rdquo;
          </p>
          <p className="font-display text-caption text-glow/70 mt-6 tracking-[0.2em] uppercase">
            &mdash; from <em>The Signal</em>
          </p>
        </div>
      </section>

      {/* ============================================
          WHAT THE SIGNAL TEACHES
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            What The Signal Teaches
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            A frequency the body carries.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              The Signal is a frequency the body carries. It is not mystical. It is measurable. And it is the reason the same people, the same situations, and the same patterns keep arriving in your life no matter what you change on the outside.
            </p>
            <p>
              The book teaches you to recognize the signal you have been broadcasting, to name what has been running you underneath your intentions, and to shift the frequency so what arrives can arrive differently.
            </p>
            <p>
              Grounded in Indigenous cosmology and the Miskwa Kimiwan framework, in conversation with peer-reviewed neuroscience, epigenetics, and heart-brain research, <em>The Signal</em> offers eighteen chapters of walked-through teaching, felt-sense practice, and honest recognition of the cost of the work.
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
            Who This Is For
          </h2>
          <p className="font-serif italic text-body-lg text-night/60 mb-10">
            For the reader whose patterns have refused to be left behind.
          </p>
          <div className="space-y-5 font-body text-body text-night/60 leading-relaxed">
            <p>
              For the reader who has done years of inner work and knows something has still not been named.
            </p>
            <p>
              For the reader who has never done the work and is asking the question for the first time.
            </p>
            <p>
              For the reader whose patterns have moved with them across cities, across relationships, across chapters of life, and refuse to be left behind.
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
            The Signal
          </h2>
          <p className="font-body text-body-lg text-bone/70 mb-10">
            Paperback and ebook editions arriving soon.
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="btn-primary cursor-default opacity-70">
              Order the Book &mdash; Coming Soon
            </span>
            <p className="font-display text-caption text-bone/50 tracking-[0.15em] uppercase">
              Purchase links will appear here when available
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

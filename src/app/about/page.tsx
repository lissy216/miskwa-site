import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'Miskwa Kimiwan is an author, healer, and teacher of spiritual healing and energy medicine. A carrier of intergenerational memory whose work bridges trauma, presence, and the unseen world.',
}

export default function About() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              About
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-8">
              The guide has bled too.
            </h1>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/60 leading-relaxed mb-6">
              Something shattered early. A hospital bed lit like a furnace. Skin splitting like bark. A family history heavy with silence and the kind of wounds that travel through bloodlines without anyone naming them.
            </p>
            <p className="font-body text-body text-night/50 leading-relaxed">
              What followed was not a straight line toward healing. It was years of sitting in the dark, learning that the dark is not the enemy. That the body already knows what the mind is still arguing about. That no pre-packaged spiritual path matched what was actually happening, and the only honest option was to build something from the raw material of lived experience.
            </p>
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
          THE WORK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-8">
            What emerged from that
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Miskwa Kimiwan is an author, healer, and teacher of spiritual healing and energy medicine. A carrier of intergenerational memory and medicine whose work bridges trauma, presence, and the unseen world.
            </p>
            <p>
              The published work began with <em>Red Rain: A Soul Shattered</em>, a memoir that readers describe not as something they read but as something that reads them. <em>The Book of Questions: The Socratic Year of the Soul</em> followed, 365 questions organized across twelve months of soul territory. Both books operate on the same principle: that the person holding the book already carries what they need. The work is never to install something new. The work is to sit with what is already there long enough for it to be heard.
            </p>
            <p>
              The teaching side offers structured programs in spiritual healing, energy medicine, and ceremony for practitioners who are grounded, honest, and capable of holding what walks through the door. Living The Light Sacred Alchemy is a two-year training program. The Quiet Fire is an ICBCH-aligned hypnosis certification. Private healing sessions are available for those who need to do the work one-on-one.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          RUMI PULL QUOTE — bridging "The Work" and "Philosophy"
          ============================================ */}
      <section className="bg-ash py-section-sm">
        <div className="section-narrow text-center">
          <div className="divider-bridge max-w-xs mx-auto mb-10 opacity-60" />
          <p className="pull-quote-lg text-bone/85">
            &ldquo;The wound is where the light enters you.&rdquo;
          </p>
          <p className="font-display text-caption text-glow/70 mt-6 tracking-[0.2em] uppercase">
            &mdash; Rumi
          </p>
        </div>
      </section>

      {/* ============================================
          PHILOSOPHY
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
            Philosophy
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            No masters here
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Most healing and spiritual work is built on performance. Perform wellness. Perform transformation. Perform being healed. Stand on a stage and tell people you have the answer. Build a pedestal and let them worship what they think you know.
            </p>
            <p>
              That model produces dependency, not sovereignty. It teaches people to seek outside themselves what has been living inside them all along. And it produces practitioners who are undertrained, overclaiming, and unable to hold what actually walks through the door when the performance drops.
            </p>
            <p>
              This work operates on a different premise. The guide has done the work, is still doing the work, and does not claim a finished position. No one else is required for the work of coming home to yourself. What is offered here is a space honest enough and safe enough for you to stop performing, face what you have been carrying, feel it in the body, and discover that you are more than what happened to you.
            </p>
            <p className="text-bone/50">
              Redemption is not a single event. It is a daily practice of choosing to become more than what happened. Everything written, taught, and offered here exists to hold space for that truth.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT THIS WORK IS FOR
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">
            Who finds this work
          </h2>
          <div className="space-y-6 font-body text-body-lg text-night/60 leading-relaxed">
            <p>
              People who carry weight nobody sees. Who have been hurt and have hurt others. Who are done pretending and ready for a space where the work is real, redemption is possible, and the guide has bled too.
            </p>
            <p>
              People who have been through the conventional healing and self-help space and found it hollow. The love-and-light frameworks left them unseen. Positive-thinking practices felt performative. What they need is something that does not flinch at the dark and does not rush them toward resolution.
            </p>
            <p>
              Therapists and practitioners who encounter this work and recognize it as something that fills a gap in their own clinical toolkit. Healers who are tired of the industry&rsquo;s performance and want to train in a space that requires honesty first.
            </p>
            <p>
              If you are looking for a quick fix, this is not the place. If you want a guru to follow, you will not find one here. But if you are willing to sit with what you carry and let it teach you something, there is room at the fire.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/red-rain" className="btn-secondary">
              Start with Red Rain
            </Link>
            <Link href="/programs" className="btn-secondary">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

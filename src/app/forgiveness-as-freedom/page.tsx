import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Forgiveness as Freedom',
  description:
    'A self process for release, boundary, and return. Forthcoming from Miskwa Kimiwan on the Winter Solstice, December 21, 2026.',
  alternates: { canonical: '/forgiveness-as-freedom' },
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/forgiveness-as-freedom',
    siteName: 'Miskwa Kimiwan',
    title: 'Forgiveness as Freedom: A Self Process for Release, Boundary, and Return',
    description:
      'A self process for release, boundary, and return. Forthcoming from Miskwa Kimiwan on the Winter Solstice, December 21, 2026.',
    images: [
      {
        url: '/images/forgiveness-as-freedom-cover.jpg',
        width: 1650,
        height: 2550,
        alt: 'Forgiveness as Freedom, Front Cover',
      },
    ],
  },
}

// All reader-facing copy on this page is the book's own back cover, verbatim.
// Only the section headings are lifted from lines within it.

const frees = [
  'Telling the truth about what happened.',
  'Drawing the line.',
  'Setting down the rope.',
  'Coming back to your own life.',
]

const rooms = [
  'The apology that is never coming.',
  'The person who died before anything was resolved.',
  'The table you still have to sit at every holiday.',
  'The parent whose hands were not gentle, who now needs you to lift them.',
  'The harm you did yourself, which is usually the last account anyone closes.',
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
            <p className="text-label mb-4">Winter Solstice &middot; <span className="whitespace-nowrap">December 21, 2026</span></p>
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
              You are tired. Not the kind sleep fixes.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Someone says their name and your chest does the old thing. You have told
              people you are over it. You have said the right things at dinner, kept your
              voice level, changed the subject. Then you lie down and the whole case
              reopens, and you argue it again, and you win again, and nothing changes.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Maybe you have been told to forgive. Maybe it was said kindly, and something
              in you still went cold. That cold was information. It meant the definition
              you were handed did not match what you are actually carrying.
            </p>

            <div className="flex flex-col gap-3">
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Not yet released. This page will carry the buying links the day it is
                available.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-3 w-fit mt-2"
              >
                Ask to be told when it lands
              </Link>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/forgiveness-as-freedom-cover.jpg"
                alt="Forgiveness as Freedom: A Self Process for Release, Boundary, and Return - Front Cover"
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
            What actually frees a person
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            So I am not going to rush you. I am not going to hand you a timeline. I am not
            going to tell you to let it go, or ask you to call any of this a gift.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            What I will do is walk beside you through what actually frees a person.
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
            The rooms this actually lives in
          </h2>
          <ul className="flex flex-col gap-4 mb-12">
            {rooms.map((room) => (
              <li key={room} className="font-serif text-body-lg text-bone/75 leading-relaxed">
                {room}
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            Twenty-three chapters. Practices you can do tonight. Pages to write on. Words
            for the days you have none of your own.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed">
            None of it needs them. No apology. No conversation. No change of heart on their
            end. They do not even have to be alive.
          </p>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <p className="pull-quote">
            You have carried this long enough. The life waiting on the other side of it is
            still yours.
          </p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">I know that room</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            I have sat where you are sitting, holding something that would not put itself
            down. I have also been the reason someone else sat there. Both of those are in
            this book, because both of them are in me.
          </p>
          <p className="font-body text-body text-night/75 leading-relaxed mb-10">
            We all live in glass houses.
          </p>
          <Link
            href="/about"
            className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
          >
            About the Author &rarr;
          </Link>
        </div>
      </section>

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-serif italic text-subheading text-bone/60">
            You are the one who returns. Start here.
          </p>
        </div>
      </section>
    </>
  )
}

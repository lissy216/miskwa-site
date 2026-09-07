import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Re-Membering',
  description:
    'Six turns back to the part of you that never forgot. A forthcoming book by Miskwa Kimiwan.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/the-re-membering',
    siteName: 'Miskwa Kimiwan',
    title: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot',
    description:
      'Six turns back to the part of you that never forgot. A forthcoming book by Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-re-membering-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Re-Membering — Front Cover',
      },
    ],
  },
}

const places = [
  'the body',
  'the story you were handed',
  'the people who came before you',
  'the land',
  'the sacred',
  'the one in you who has been watching the whole time',
]

export default function TheReMembering() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Coming Soon</p>
            {/* The hyphen is the point of the title, so it must not become a line
                break. Re-Membering is held on one line and "The" wraps instead.

                That makes the word unbreakable, so it has to fit the column at every
                width. It needs about 8.84px per pixel of font size, and the measured
                columns are 324px at 375, 305px at 768, 374px at 1024 and 502px at
                1280. The tightest point is 768, where the two column split starts
                while the viewport is still narrow, which is why md steps down rather
                than up. This title is longer than the other books, so it does not use
                the full display size they do. */}
            <h1 className="font-serif text-[2rem] md:text-[1.875rem] lg:text-[2.25rem] xl:text-display-sm text-bone mb-2">
              The <span className="whitespace-nowrap">Re-Membering</span>
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              Six Turns Back to the Part of You That Never Forgot
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-serif text-body-lg text-glow/80 leading-relaxed mb-8">
              You have not been broken. You have been living.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              This book was written for the part of you that suspects it used to know
              something, and cannot find it now. Not the dramatic version. The ordinary
              one. A life that runs well and feels slightly far away. Being loved by
              people who seem to be describing somebody else.
            </p>
            <p className="font-body text-body text-bone/50 leading-relaxed mb-10">
              Most of what gets offered to that part of you is a system. Steps. Practices.
              A better morning. <em>The Re-Membering</em> is not one.
            </p>

            <div className="flex flex-col gap-3">
              <p className="font-serif italic text-caption text-bone/50 max-w-md">
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
                src="/images/the-re-membering-cover.jpg"
                alt="The Re-Membering: Six Turns Back to the Part of You That Never Forgot - Front Cover"
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
          THE SIX PLACES
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Where the Forgetting lives
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            It walks with you through the six places where the Forgetting lives. In each
            of them the question is the same. Then the asking does what asking does.
          </p>
          <ol className="flex flex-col gap-5">
            {places.map((place, i) => (
              <li key={place} className="flex items-baseline gap-5">
                <span className="font-display text-caption text-glow/60 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-subheading text-bone/80">{place}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-threshold py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <p className="pull-quote">You can drink the water without owing me the well.</p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Written from inside it</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            Miskwa Kimiwan writes from inside the work: a hospital bed, a pharmacy counter,
            an unfinished bridge on a farm, the night shift beside their mother&rsquo;s bed.
            Never from above you.
          </p>
          <p className="font-body text-body text-night/60 leading-relaxed mb-10">
            Nothing here asks to be believed. Check it against your own breath.
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
          <p className="font-serif italic text-subheading text-bone/60">Go gently.</p>
        </div>
      </section>
    </>
  )
}

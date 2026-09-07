import type { Metadata } from 'next'
import Link from 'next/link'
import BookLayout from '@/components/press/BookLayout'

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
    <BookLayout
      ink="forest"
      title="The Re-Membering"
      subtitle="Six Turns Back to the Part of You That Never Forgot"
      state="Forthcoming"
      cover={{
        src: '/images/the-re-membering-cover.jpg',
        alt: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot — front cover',
      }}
      opening={
        <>
          <p className="font-text italic">
            You have not been broken. You have been living.
          </p>
          <p>
            This book was written for the part of you that suspects it used to know
            something, and cannot find it now. Not the dramatic version. The
            ordinary one. A life that runs well and feels slightly far away. Being
            loved by people who seem to be describing somebody else.
          </p>
          <p>
            Most of what gets offered to that part of you is a system. Steps.
            Practices. A better morning. <em>The Re-Membering</em> is not one.
          </p>
          <p className="font-text italic text-base">
            Not yet released. This page will carry the buying links the day it is
            available.
          </p>
        </>
      }
      quote={{
        text: '“You can drink the water without owing me the well.”',
        source: (
          <>
            from <em>The Re-Membering</em>
          </>
        ),
      }}
      sections={[
        {
          heading: 'Written from inside it',
          body: (
            <>
              <p>
                Miskwa Kimiwan writes from inside the work: a hospital bed, a
                pharmacy counter, an unfinished bridge on a farm, the night shift
                beside their mother&rsquo;s bed. Never from above you.
              </p>
              <p>Nothing here asks to be believed. Check it against your own breath.</p>
              <p>
                <Link href="/about" className="underline underline-offset-4">
                  About the author
                </Link>
              </p>
            </>
          ),
        },
      ]}
    >
      {/* Numbered on purpose: the six turns are a sequence the book walks in order. */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="font-wood text-3xl md:text-4xl font-bold uppercase leading-none tracking-tight text-forest">
          Where the Forgetting lives
        </h2>
        <p className="mt-6 font-text text-[1.0625rem] md:text-lg leading-[1.7] max-w-[62ch]">
          It walks with you through the six places where the Forgetting lives. In
          each of them the question is the same. Then the asking does what asking
          does.
        </p>
        <ol className="mt-10 max-w-[62ch]">
          {places.map((place, i) => (
            <li key={place} className="rule-press flex items-baseline gap-6 py-5">
              <span className="font-wood text-sm font-semibold text-ink-soft tabular-nums shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-text text-xl md:text-2xl">{place}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-10">
        <p className="rule-press pt-10 font-text italic text-xl text-ink-soft">
          Go gently.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <Link
          href="/contact"
          className="inline-block font-wood text-base font-bold uppercase tracking-wide bg-ink text-stock px-6 py-3 hover:bg-forest transition-colors"
        >
          Ask to be told when it lands
        </Link>
      </section>
    </BookLayout>
  )
}

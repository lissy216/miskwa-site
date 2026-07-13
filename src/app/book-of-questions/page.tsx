import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Book of Questions: The Socratic Year of the Soul',
  description: '365 questions. Twelve months of territory. One full year of learning to trust what is already alive in you. A conversation between you and the part of you that has been waiting to be asked.',
}

export default function BookOfQuestions() {
  const months = [
    { number: 'One', title: 'Who Were You Before They Named You' },
    { number: 'Two', title: 'What You Carry Without Knowing' },
    { number: 'Three', title: 'The Body Remembers' },
    { number: 'Four', title: 'What Grief Has Been Trying to Say' },
    { number: 'Five', title: 'Where You Abandoned Yourself' },
    { number: 'Six', title: 'The Faces of Your Power' },
    { number: 'Seven', title: 'What Forgiveness Has Never Meant' },
    { number: 'Eight', title: 'Belonging and Its Costs' },
    { number: 'Nine', title: 'The Stories That Run You' },
    { number: 'Ten', title: 'What You Would Do If No One Was Watching' },
    { number: 'Eleven', title: 'The Lineage You Did Not Choose' },
    { number: 'Twelve', title: 'The Return' },
  ]

  return (
    <>
      {/* ============================================
          HERO - Light mood
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              Available Now
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-2">
              The Book of Questions
            </h1>
            <p className="font-serif italic text-subheading text-night/60 mb-2">
              The Socratic Year of the Soul
            </p>
            <p className="font-serif italic text-body-lg text-night/50 mb-8">
              A Year-Long Journey Into You
            </p>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/60 leading-relaxed mb-6">
              Most books hand you answers. This one hands you back to yourself.
            </p>
            <p className="font-body text-body text-night/50 leading-relaxed mb-10">
              365 questions. Twelve months of territory. One full year of learning to trust what is already alive in you. Not a program. Not a curriculum. A conversation between you and the part of you that has been waiting to be asked.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/04ofbHp4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Kindle Edition &mdash; Order on Amazon
              </a>
              <p className="font-display text-caption text-night/40 tracking-wide">
                Paperback Edition &mdash; Coming Soon
              </p>
              <a
                href="/wholesale"
                className="font-display text-xs tracking-[0.2em] uppercase text-grass hover:text-glow transition-colors mt-2 inline-block"
              >
                Wholesale for 5+ copies &rarr;
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-[2/3] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/book-of-questions-cover.png"
                alt="The Book of Questions: The Socratic Year of the Soul - Front Cover"
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
          THE BEGINNING
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            The Beginning
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              You have been looking for the right answers. What if you have been asking the wrong questions?
            </p>
            <p>
              There is something in you that already knows the way through. Not past. <em>Through.</em> The problem is not that you lack answers. The problem is that the questions most people ask, the ones offered by well-meaning books, teachers, programs, put the destination outside of you. They make you a student of someone else&rsquo;s knowing.
            </p>
            <p>
              Socrates never told anyone what to think. He asked until the truth already living in the person had no choice but to surface. He called it midwifery. He was not delivering information. He was delivering a person to themselves.
            </p>
            <p>
              <em>The Book of Questions</em> follows that tradition. One question per day, for one full year, organized across twelve months of soul territory. A conversation between you and the part of you that has been waiting to be asked.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="bg-parchment py-16">
        <div className="section-narrow text-center">
          <div className="divider-cool mx-auto mb-10" />
          <p className="pull-quote text-night max-w-2xl mx-auto">
            &ldquo;The question that frightens you is almost always the one that is trying to set something free.&rdquo;
          </p>
        </div>
      </section>

      {/* ============================================
          INSIDE THE BOOK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Inside the Book
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              A year is not a long time. Unless you spend it honestly.
            </p>
            <p>
              Each month carries its own theme. Its own territory. The twelve months are not arranged to follow the calendar but to follow the soul, moving through inquiry, identity, grief, belonging, power, forgiveness, and return.
            </p>
            <p>
              Each day, one question. Sometimes it will feel simple. You will write a few words and set it down. On another day, that same style of question will open something you have carried for twenty years and did not know still had weight.
            </p>
            <p>
              There is no right way to use this book. There is no grade. There is no arriving. There is only the practice of sitting down and allowing yourself to be asked.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE TWELVE MONTHS
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
              The Territory of a Year
            </p>
            <h2 className="font-serif text-heading text-bone">
              The Twelve Months
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {months.map((month) => (
              <div key={month.number} className="border border-bridge/50 rounded-sm p-6 hover:border-glow/30 transition-colors">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/60 mb-2">
                  Month {month.number}
                </p>
                <p className="font-serif text-body-lg text-bone">
                  {month.title}
                </p>
              </div>
            ))}
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
            You do not have to be broken to need this. You only have to be honest.
          </p>
          <div className="space-y-5 font-body text-body text-night/50 leading-relaxed">
            <p>
              This book was written for people who have grown tired of being told what their healing is supposed to look like.
            </p>
            <p>
              For the person who has read every self-help book and still feels like something essential remains untouched. For the healer, the therapist, the guide who needs a practice that belongs entirely to them, not their work.
            </p>
            <p>
              For anyone sitting with grief that does not fit neatly into a stage or a timeline. For the one who is doing well on the outside and exhausted somewhere much deeper.
            </p>
            <p>
              For the person who knows the answers they are supposed to give, and suspects there are truer ones they have never said aloud. For anyone who has survived something and is still figuring out what that survival is asking of them.
            </p>
            <p>
              For the seeker who is tired of seeking and ready, finally, to simply listen.
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
            Begin
          </h2>
          <p className="font-body text-body-lg text-bone/70 mb-10">
            The year is waiting for you.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://a.co/d/04ofbHp4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Kindle Edition &mdash; Order on Amazon
            </a>
            <p className="font-display text-caption text-bone/50 tracking-wide">
              Paperback Edition &mdash; Coming Soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

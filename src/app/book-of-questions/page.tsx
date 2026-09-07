import type { Metadata } from 'next'
import BookLayout from '@/components/press/BookLayout'

export const metadata: Metadata = {
  title: 'The Book of Questions: The Socratic Year of the Soul',
  description:
    '372 questions. Twelve months of territory. One full year of learning to trust what is already alive in you. A conversation between you and the part of you that has been waiting to be asked.',
}

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

const retailers = [
  { label: 'Amazon, Kindle edition', href: 'https://a.co/d/04ofbHp4' },
  {
    label: 'Chapters Indigo, paperback',
    href: 'https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666',
  },
  { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/mBWDNA' },
]

const localNote = (
  <>
    Not on your local bookstore&rsquo;s shelf? Ask them to order it. They can
    source it through IngramSpark.
  </>
)

export default function BookOfQuestions() {
  return (
    <BookLayout
      ink="prussian"
      title="The Book of Questions"
      subtitle="The Socratic Year of the Soul"
      state="Available now"
      cover={{
        src: '/images/book-of-questions-cover.png',
        alt: 'The Book of Questions: The Socratic Year of the Soul — front cover',
      }}
      retailers={retailers}
      localNote={localNote}
      wholesale
      opening={
        <>
          <p>Most books hand you answers. This one hands you back to yourself.</p>
          <p>
            372 questions. Twelve months of territory. One full year of learning to
            trust what is already alive in you. Not a program. Not a curriculum. A
            conversation between you and the part of you that has been waiting to be
            asked.
          </p>
        </>
      }
      quote={{
        text: '“The question that frightens you is almost always the one that is trying to set something free.”',
        source: (
          <>
            from <em>The Book of Questions</em>
          </>
        ),
      }}
      sections={[
        {
          heading: 'The beginning',
          body: (
            <>
              <p>
                You have been looking for the right answers. What if you have been
                asking the wrong questions?
              </p>
              <p>
                There is something in you that already knows the way through. Not
                past. <em>Through.</em> The problem is not that you lack answers. The
                problem is that the questions most people ask, the ones offered by
                well-meaning books, teachers, programs, put the destination outside
                of you. They make you a student of someone else&rsquo;s knowing.
              </p>
              <p>
                Socrates never told anyone what to think. He asked until the truth
                already living in the person had no choice but to surface. He called
                it midwifery. He was not delivering information. He was delivering a
                person to themselves.
              </p>
              <p>
                <em>The Book of Questions</em> follows that tradition. One question
                per day, for one full year, organized across twelve months of soul
                territory. A conversation between you and the part of you that has
                been waiting to be asked.
              </p>
            </>
          ),
        },
        {
          heading: 'Inside the book',
          lead: 'A year is not a long time. Unless you spend it honestly.',
          body: (
            <>
              <p>
                Each month carries its own theme. Its own territory. The twelve
                months are not arranged to follow the calendar but to follow the
                soul, moving through inquiry, identity, grief, belonging, power,
                forgiveness, and return.
              </p>
              <p>
                Each day, one question. Sometimes it will feel simple. You will write
                a few words and set it down. On another day, that same style of
                question will open something you have carried for twenty years and
                did not know still had weight.
              </p>
              <p>
                There is no right way to use this book. There is no grade. There is
                no arriving. There is only the practice of sitting down and allowing
                yourself to be asked.
              </p>
            </>
          ),
        },
        {
          heading: 'Who this is for',
          lead: 'You do not have to be broken to need this. You only have to be honest.',
          body: (
            <>
              <p>
                This book was written for people who have grown tired of being told
                what their healing is supposed to look like.
              </p>
              <p>
                For the person who has read every self-help book and still feels like
                something essential remains untouched. For the healer, the therapist,
                the guide who needs a practice that belongs entirely to them, not
                their work.
              </p>
              <p>
                For anyone sitting with grief that does not fit neatly into a stage
                or a timeline. For the one who is doing well on the outside and
                exhausted somewhere much deeper.
              </p>
              <p>
                For the person who knows the answers they are supposed to give, and
                suspects there are truer ones they have never said aloud. For anyone
                who has survived something and is still figuring out what that
                survival is asking of them.
              </p>
              <p>
                For the seeker who is tired of seeking and ready, finally, to simply
                listen.
              </p>
            </>
          ),
        },
      ]}
      order={{ note: 'The year is waiting for you.' }}
    >
      {/* Numbered on purpose: the twelve months are a sequence the book moves through. */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="font-wood text-3xl md:text-4xl font-bold uppercase leading-none tracking-tight text-prussian">
          The twelve months
        </h2>
        <ol className="mt-10 max-w-[62ch]">
          {months.map((m) => (
            <li key={m.number} className="rule-press flex items-baseline gap-6 py-4">
              <span className="font-wood text-sm font-semibold uppercase tracking-wide text-ink-soft shrink-0 w-20">
                {m.number}
              </span>
              <span className="font-text text-lg md:text-xl">{m.title}</span>
            </li>
          ))}
        </ol>
      </section>
    </BookLayout>
  )
}

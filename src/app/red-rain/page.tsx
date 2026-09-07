import type { Metadata } from 'next'
import BookLayout from '@/components/press/BookLayout'

export const metadata: Metadata = {
  title: 'Red Rain: A Soul Shattered',
  description:
    'A story of a fall from grace, the shattering to pieces of a young soul, and the journey to find humanity in the dark places. Not a tale of easy redemption. A field guide for walking through darkness with dignity.',
}

const retailers = [
  { label: 'Amazon', href: 'https://a.co/d/6qsyT4d' },
  {
    label: 'Chapters Indigo',
    href: 'https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338',
  },
  {
    label: 'Singing Pebble Books, Ottawa',
    href: 'https://www.singingpebblebooks.ca/item/IqkeFrEQxd9jYdLHR2ZMUA',
  },
  { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/b5AEQG' },
]

const localNote = (
  <>
    Not on your local bookstore&rsquo;s shelf? Ask them to order it. They can
    source it through IngramSpark.
  </>
)

const reflections = [
  {
    initials: 'C.V.D.Z.',
    text: '“At first, this book appears to be a story about a boy’s life events as he grows into a man. What you don’t initially realize is that the story is quietly accessing different parts of you. Some chapters are difficult to read, not only because of their content, but because they are surfacing your own unresolved wounds. By the end, you realize you have been re-patterned, changed, and healed. This book doesn’t simply illustrate the power of interconnectedness and collective consciousness; it actively uses that power to heal you.”',
  },
  {
    initials: 'B.T.S.',
    text: '“I have never wanted to simply hold an author so tightly and just tell them everything is going to be ok. It broke me, it healed me, and I want to live and love with all that I am.”',
  },
  {
    initials: 'C.R.D.',
    text: '“This book changed me. I felt it happening with each page I read. There’s a medicine woven into it: the medicine of meaning. Heart breaking, raw, honest, with a poetic elegance, it gave me hope and inspiration, a guidance. A truly remarkable read. It’s a very grounded approach to the spiritual alchemy required to save a life by giving meaning to all the pain and suffering we experience here.”',
  },
]

export default function RedRain() {
  return (
    <BookLayout
      ink="plum"
      title="Red Rain"
      subtitle="A Soul Shattered"
      state="Out now"
      cover={{
        src: '/images/red-rain-cover.png',
        alt: 'Red Rain: A Soul Shattered — front cover',
      }}
      retailers={retailers}
      localNote={localNote}
      wholesale
      opening={
        <>
          <p className="font-text italic text-base">
            This book describes childhood injury, intergenerational trauma, and
            loss, in detail and from the inside.
          </p>
          <p>
            A boy survives the traumas that should have broken him: a hospital bed
            lit like a furnace, skin splitting like bark. A family history heavy
            with silence. Nights visited by dreams that feel like warnings. He
            grows up in the shadow of intergenerational trauma and the aching
            questions it leaves behind.
          </p>
          <p>
            What is real? Where does pain go when no one will hold it? Who do we
            become when the world forgets to see us?
          </p>
          <p>
            From the long corridors of missing memory, he learns the fiercest
            medicine he has: presence. The courage to stay with what hurts long
            enough to let it change.
          </p>
        </>
      }
      quote={{
        text: '“Healing is not about escaping the thing that is hurting you. It is about becoming conscious of it.”',
        source: (
          <>
            from <em>Red Rain: A Soul Shattered</em>
          </>
        ),
      }}
      sections={[
        {
          heading: 'About the book',
          body: (
            <>
              <p>
                Along the way are moments that sear and sanctify: a stranger&rsquo;s
                kindness in a hospital, the weight of fallen friends, a father
                searching for Heaven, and the quiet vow to end what has hunted his
                bloodline.
              </p>
              <p>
                If you have ever felt unseen, scattered by forces larger than you,
                this book offers a hand on your shoulder and a path through the
                forest. Not to erase the past, but to alchemize it into choice,
                compassion, and a fire that finally ignites your name.
              </p>
              <p>
                <em>Red Rain: A Soul Shattered</em> is not a tale of easy
                redemption. It is a field guide for walking through darkness with
                dignity.
              </p>
            </>
          ),
        },
      ]}
      order={{ note: 'Out now in paperback and ebook.' }}
    >
      {/* Reader reflections: real, and quoted as they were given. */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="font-wood text-3xl md:text-4xl font-bold uppercase leading-none tracking-tight text-plum">
          What readers said
        </h2>
        <div className="mt-10 space-y-10">
          {reflections.map((r) => (
            <figure key={r.initials} className="rule-press pt-8 max-w-[68ch]">
              <blockquote className="font-text text-lg md:text-xl leading-[1.7]">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 font-wood text-sm font-semibold uppercase tracking-wide text-ink-soft">
                {r.initials}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-4">
        <div className="rule-press pt-10 max-w-[68ch]">
          <h2 className="font-wood text-2xl font-bold uppercase tracking-tight leading-none">
            About the author
          </h2>
          <p className="mt-4 font-text text-[1.0625rem] leading-[1.7]">
            Miskwa Kimiwan is an author, healer, and teacher of spiritual healing
            and energy medicine. As a carrier of intergenerational memory and
            medicine, their work bridges trauma, presence, and the unseen world.
            They help others remember who they are beneath the pain.
          </p>
        </div>
      </section>
    </BookLayout>
  )
}

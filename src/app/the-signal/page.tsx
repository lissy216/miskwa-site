import type { Metadata } from 'next'
import BookLayout from '@/components/press/BookLayout'

export const metadata: Metadata = {
  title: 'The Signal',
  description:
    'You are broadcasting something right now, and it has been quietly assembling your life around you. A new book by Miskwa Kimiwan.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/the-signal',
    siteName: 'Miskwa Kimiwan',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'You are broadcasting something right now, and it has been quietly assembling your life around you. A new book by Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-signal-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Signal — Front Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'A new book by Miskwa Kimiwan on the frequency the body carries, and the life it assembles.',
    images: ['/images/the-signal-cover.jpg'],
  },
  alternates: {
    canonical: 'https://www.miskwakimiwan.com/the-signal',
  },
}

const bookJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'The Signal: Why Life and People Keep Happening to You',
  author: { '@type': 'Person', name: 'Miskwa Kimiwan' },
  publisher: { '@type': 'Organization', name: 'Red Rain Press' },
  inLanguage: 'en-CA',
  bookFormat: 'https://schema.org/Paperback',
  image: 'https://www.miskwakimiwan.com/images/the-signal-cover.jpg',
  description:
    'You are broadcasting something right now, and it has been quietly assembling your life around you. A new book by Miskwa Kimiwan.',
  url: 'https://www.miskwakimiwan.com/the-signal',
  offers: {
    '@type': 'Offer',
    url: 'https://a.co/d/020dzwrJ',
    priceCurrency: 'CAD',
    price: '22.99',
    availability: 'https://schema.org/InStock',
  },
}

const retailers = [
  { label: 'Amazon, paperback and ebook', href: 'https://a.co/d/020dzwrJ' },
  { label: 'Books.by', href: 'https://books.by/miskwa-kimiwan/the-signal' },
  { label: 'Apple, Kobo, Barnes and Noble', href: 'https://books2read.com/u/4NMJaz' },
]

const localNote = (
  <>
    Not on your local bookstore&rsquo;s shelf? Ask them to order it. They can
    source it through IngramSpark.
  </>
)

export default function TheSignal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />

      <BookLayout
        ink="madder"
        title="The Signal"
        subtitle="Why Life and People Keep Happening to You"
        state="Now available in paperback and ebook"
        cover={{
          src: '/images/the-signal-cover.jpg',
          alt: 'The Signal: Why Life and People Keep Happening to You — front cover',
        }}
        retailers={retailers}
        localNote={localNote}
        wholesale
        opening={
          <>
            <p>You are broadcasting something right now.</p>
            <p>
              Not the words you use to describe yourself. Not the version you bring
              to dinner parties, to job interviews, to the first three months of a
              new relationship. Something underneath all of that. A frequency your
              body has been carrying since before you had a word for it. The thing
              that people in the room with you can sense without being able to name.
            </p>
            <p>
              This book is about that signal, and about the life it has been quietly
              assembling around you.
            </p>
          </>
        }
        quote={{
          text: '“You are broadcasting something right now. This book is about the life it has been quietly assembling around you.”',
          source: (
            <>
              from <em>The Signal</em>
            </>
          ),
        }}
        sections={[
          {
            heading: 'The question underneath',
            lead: 'Maybe you have been doing the work for years.',
            body: (
              <>
                <p>
                  Maybe you have been doing the work for years and something keeps
                  not being said. Maybe you have been reading the popular healing
                  literature and finding that something underneath the language is
                  missing, even when the language is good.
                </p>
                <p>
                  Or maybe you have not done years of work at all. Maybe you arrived
                  here because the same kind of person keeps showing up in your life
                  under different names. Or the same kind of pain keeps finding you
                  in different shapes. Or the same dynamic keeps repeating in your
                  relationships and your work no matter how much you swore the last
                  time was the last time.
                </p>
                <p>
                  You do not have language for why. You just know it keeps happening,
                  and you are tired of it.
                </p>
                <p className="font-text italic">This book is for you.</p>
              </>
            ),
          },
          {
            heading: 'What The Signal teaches',
            lead: 'A frequency the body carries.',
            body: (
              <>
                <p>
                  The Signal is a frequency the body carries. It is not mystical. It
                  is measurable. And it is the reason the same people, the same
                  situations, and the same patterns keep arriving in your life no
                  matter what you change on the outside.
                </p>
                <p>
                  The book teaches you to recognize the signal you have been
                  broadcasting, to name what has been running you underneath your
                  intentions, and to shift the frequency so what arrives can arrive
                  differently.
                </p>
                <p>
                  Grounded in Indigenous cosmology and the Miskwa Kimiwan framework,
                  in conversation with peer-reviewed neuroscience, epigenetics, and
                  heart-brain research, <em>The Signal</em> offers eighteen chapters
                  of walked-through teaching, felt-sense practice, and honest
                  recognition of the cost of the work.
                </p>
              </>
            ),
          },
          {
            heading: 'Who this is for',
            lead: 'For the reader whose patterns have refused to be left behind.',
            body: (
              <>
                <p>
                  For the reader who has done years of inner work and knows something
                  has still not been named.
                </p>
                <p>
                  For the reader who has never done the work and is asking the
                  question for the first time.
                </p>
                <p>
                  For the reader whose patterns have moved with them across cities,
                  across relationships, across chapters of life, and refuse to be
                  left behind.
                </p>
              </>
            ),
          },
        ]}
        order={{ note: 'Available now in paperback and ebook.' }}
      />
    </>
  )
}

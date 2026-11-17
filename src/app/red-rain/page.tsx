import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Red Rain: A Soul Shattered',
  description: 'A story of a fall from grace, the shattering to pieces of a young soul, and the journey to find humanity in the dark places. Not a tale of easy redemption. A field guide for walking through darkness with dignity.',
  alternates: { canonical: '/red-rain' },
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/red-rain',
    siteName: 'Miskwa Kimiwan',
    title: 'Red Rain: A Soul Shattered',
    description:
      'Not a tale of easy redemption. A field guide for walking through darkness with dignity.',
    images: [
      {
        url: '/images/red-rain-cover.png',
        width: 430,
        height: 645,
        alt: 'Red Rain: A Soul Shattered, Front Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Rain: A Soul Shattered',
    description:
      'Not a tale of easy redemption. A field guide for walking through darkness with dignity.',
    images: ['/images/red-rain-cover.png'],
  },
}

export default function RedRain() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Available Now</p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              Red Rain
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              A Soul Shattered
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              A boy survives the traumas that should have broken him: a hospital bed lit like a furnace, skin splitting like bark. A family history heavy with silence. Nights visited by dreams that feel like warnings. He grows up in the shadow of intergenerational trauma and the aching questions it leaves behind.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-6">
              What is real? Where does pain go when no one will hold it? Who do we become when the world forgets to see us?
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              From the long corridors of missing memory, he learns the fiercest medicine he has: presence. The courage to stay with what hurts long enough to let it change.
            </p>

            {/* Purchase Links */}
            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/6qsyT4d"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Buy on Amazon
              </a>
              <a
                href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Buy on Chapters Indigo
              </a>
              <a
                href="https://www.singingpebblebooks.ca/item/IqkeFrEQxd9jYdLHR2ZMUA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Buy at Singing Pebble Books (Ottawa)
              </a>
              <a
                href="https://books2read.com/u/b5AEQG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Ebook at Apple, Kobo, B&amp;N &amp; More
              </a>
              <p className="font-serif italic text-caption text-bone/70 mt-3 max-w-md">
                Not on your local bookstore&rsquo;s shelf? Ask them to order it. They can source it through IngramSpark.
              </p>
              <a
                href="/wholesale"
                className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 hover:text-glow transition-colors mt-2 inline-block"
              >
                Wholesale for 5+ copies &rarr;
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/red-rain-cover.png"
                alt="Red Rain: A Soul Shattered - Front Cover"
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
          ABOUT THE BOOK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            About the Book
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Along the way are moments that sear and sanctify: a stranger&rsquo;s kindness in a hospital, the weight of fallen friends, a father searching for Heaven, and the quiet vow to end what has hunted his bloodline.
            </p>
            <p>
              If you have ever felt unseen, scattered by forces larger than you, this book offers a hand on your shoulder and a path through the forest. Not to erase the past, but to alchemize it into choice, compassion, and a fire that finally ignites your name.
            </p>
            <p className="text-bone/70">
              <em>Red Rain: A Soul Shattered</em> is not a tale of easy redemption. It is a field guide for walking through darkness with dignity.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-10" />
          <p className="pull-quote text-bone max-w-2xl mx-auto">
            &ldquo;Healing is not about escaping the thing that is hurting you. It is about becoming conscious of it.&rdquo;
          </p>
          <p className="font-display text-caption text-bone/70 mt-6 tracking-wide">
            &mdash; from <em>Red Rain: A Soul Shattered</em>
          </p>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container">
          <h2 className="font-serif text-heading text-night mb-12 text-center">
            Readers Reflections
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;At first, this book appears to be a story about a boy&rsquo;s life events as he grows into a man. What you don&rsquo;t initially realize is that the story is quietly accessing different parts of you. Some chapters are difficult to read, not only because of their content, but because they are surfacing your own unresolved wounds. By the end, you realize you have been re-patterned, changed, and healed. This book doesn&rsquo;t simply illustrate the power of interconnectedness and collective consciousness; it actively uses that power to heal you.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;I have never wanted to simply hold an author so tightly and just tell them everything is going to be ok. It broke me, it healed me, and I want to live and love with all that I am.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;This book changed me. I felt it happening with each page I read. There&rsquo;s a medicine woven into it: the medicine of meaning. Heart breaking, raw, honest, with a poetic elegance, it gave me hope and inspiration, a guidance. A truly remarkable read. It&rsquo;s a very grounded approach to the spiritual alchemy required to save a life by giving meaning to all the pain and suffering we experience here.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.R.D.
              </footer>
            </blockquote>

            {/* The five below are excerpts from verified-purchase reader reviews on
                Amazon.ca, quoted word for word. An ellipsis marks where a review
                was shortened. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;This book is devastatingly beautiful. &hellip; These pages will break you, but they will also build you back together again. This book is such a gift!&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;This book artfully expresses what it means to alchemize pain and turn darkness into something beautiful in the most raw and human way.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;A beautiful read filled with depth, introspection and heartfelt storytelling. Red Rain invites the reader to hold pain in a sacred way.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.F.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;Red Rain reminds us of the importance of holding space for ourselves and others, and that healing is possible even in our darkest moments.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                T.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;Heartbreaking, beautiful and inspiring, this book will change you.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                I.
              </footer>
            </blockquote>

            {/* From a verified reviewer on Chapters Indigo, quoted word for word. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &ldquo;Definitely an awesome read. I could not put it down.&rdquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://a.co/d/6qsyT4d"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Read every review on Amazon &rarr;
            </a>
          </p>
          <p className="text-center mt-4">
            <a
              href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Reviews on Chapters Indigo &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ============================================
          ABOUT THE AUTHOR
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/85 mb-4">
            About the Author
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed max-w-xl mx-auto">
            Miskwa Kimiwan is an author, healer, and teacher of spiritual healing and energy medicine. As a carrier of intergenerational memory and medicine, their work bridges trauma, presence, and the unseen world. They help others remember who they are beneath the pain.
          </p>
        </div>
      </section>
      <MoreBooks current="/red-rain" />
      <NewsletterSignup />
    </>
  )
}

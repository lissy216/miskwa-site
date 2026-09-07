import Link from 'next/link'
import Image from 'next/image'

// Every fact on this page is carried over from the book pages and the bookstore.
// Nothing here is invented: no press, no awards, no sales figures, no testimonials.
const titles = [
  {
    slug: '/the-signal',
    title: 'The Signal',
    subtitle: 'Why Life and People Keep Happening to You',
    line: 'You are broadcasting something right now, and it has been quietly assembling your life around you.',
    ink: 'text-madder',
    state: 'Out now',
  },
  {
    slug: '/red-rain',
    title: 'Red Rain',
    subtitle: 'A Soul Shattered',
    line: 'A boy survives the traumas that should have broken him. A field guide for walking through darkness with dignity.',
    ink: 'text-plum',
    state: 'Out now',
  },
  {
    slug: '/book-of-questions',
    title: 'The Book of Questions',
    subtitle: 'The Socratic Year of the Soul',
    line: 'Most books hand you answers. This one hands you back to yourself. 365 questions across twelve months of soul territory.',
    ink: 'text-prussian',
    state: 'Out now',
  },
  {
    slug: '/the-re-membering',
    title: 'The Re-Membering',
    subtitle: 'Six Turns Back to the Part of You That Never Forgot',
    line: 'For the part of you that suspects it used to know something, and cannot find it now.',
    ink: 'text-forest',
    state: 'Forthcoming',
  },
]

export default function Home() {
  return (
    <div className="press min-h-screen bg-stock text-ink font-text">
      {/* Masthead — the series line at the head of the sheet */}
      <header className="bg-madder text-stock-hi">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-baseline justify-between gap-6">
          <h1 className="font-wood text-2xl font-bold uppercase tracking-tight leading-none">
            <Link href="/" className="inline-block py-2">
              Miskwa Kimiwan
            </Link>
          </h1>
          <nav className="flex items-baseline gap-6 font-wood text-sm font-semibold uppercase tracking-wide">
            <Link href="/bookstore" className="inline-block py-3 hover:underline underline-offset-4">
              Books
            </Link>
            <Link href="/about" className="inline-block py-3 hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="inline-block py-3 hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* First viewport — the reader begins reading here, not below the fold */}
      <section className="bg-madder text-stock-hi">
        <div className="mx-auto max-w-5xl px-6 pb-16 md:pb-24">
          <div className="press-strike h-px bg-stock-hi/40 mb-12" />
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[34rem]">
              <p className="font-text text-xl md:text-2xl leading-[1.7]">
                You are broadcasting something right now. A frequency your body has
                been carrying since before you had a word for it. This book is about
                that signal.
              </p>
              <p className="mt-6 font-wood text-base font-semibold tracking-wide text-stock-hi">
                From The Signal — Miskwa Kimiwan
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/the-signal"
                  className="font-wood text-base font-bold uppercase tracking-wide bg-stock-hi text-madder px-6 py-3 hover:bg-stock transition-colors"
                >
                  Keep reading
                </Link>
                <Link
                  href="/bookstore"
                  className="font-wood text-base font-bold uppercase tracking-wide border border-stock-hi px-6 py-3 hover:bg-stock-hi hover:text-madder transition-colors"
                >
                  All four books
                </Link>
              </div>
            </div>

            <div className="w-36 md:w-40 shrink-0">
              <div className="relative aspect-2/3 bg-ink">
                <Image
                  src="/images/the-signal-cover.jpg"
                  alt="The Signal, by Miskwa Kimiwan — book cover"
                  fill
                  className="object-contain"
                  sizes="160px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contents — a table of contents, not a card grid */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="font-wood text-5xl md:text-7xl font-extrabold uppercase leading-[0.9] tracking-tight">
          Four books
        </h2>

        {/* Unordered on purpose: these four carry no reading or publication
            sequence, so numbering them would assert one that does not exist. */}
        <ul className="mt-12">
          {titles.map((b) => (
            <li key={b.slug} className="rule-press">
              <Link
                href={b.slug}
                className="group grid md:grid-cols-[1fr_auto] gap-x-6 gap-y-2 items-baseline py-7"
              >
                <span>
                  <span
                    className={`font-wood text-3xl md:text-4xl font-bold uppercase leading-none tracking-tight ${b.ink} group-hover:underline underline-offset-[6px] decoration-2`}
                  >
                    {b.title}
                  </span>
                  <span className="block mt-2 font-text italic text-lg text-ink-soft">
                    {b.subtitle}
                  </span>
                  <span className="block mt-3 font-text text-[1.0625rem] leading-[1.65] max-w-[52ch]">
                    {b.line}
                  </span>
                  {/* Phone readers need the publication state too. */}
                  <span className="md:hidden block mt-3 font-wood text-sm font-semibold uppercase tracking-wide text-ink-soft">
                    {b.state}
                  </span>
                </span>
                <span className="hidden md:block font-wood text-sm font-semibold uppercase tracking-wide text-ink-soft self-start pt-2">
                  {b.state}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* The position, stated plainly on its own ground */}
      <section className="bg-prussian text-stock-prussian">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="font-wood text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight max-w-[22ch]">
            No masters here. No pedestals. No gurus.
          </p>
          <p className="mt-8 font-text text-xl leading-[1.7] max-w-[54ch]">
            The guide has bled too. If you are looking for a quick fix, this is not
            the place. The work sits with what hurts long enough to let it change.
          </p>
          <Link
            href="/about"
            className="inline-block mt-9 font-wood text-base font-bold uppercase tracking-wide border border-stock-prussian px-6 py-3 hover:bg-stock-prussian hover:text-prussian transition-colors"
          >
            About the work
          </Link>
        </div>
      </section>

      {/* Colophon — a real chapbook says what it was made of */}
      <footer className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="rule-press pt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-[46ch]">
            <h2 className="font-wood text-3xl font-bold uppercase tracking-tight leading-none">
              The Rainfall Newsletter
            </h2>
            <p className="mt-4 font-text text-[1.0625rem] leading-[1.65]">
              Writing on redemption, the body, and the practice of becoming more
              than what happened.
            </p>
            <a
              href="https://substack.com/@miskwakimiwan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 font-wood text-base font-bold uppercase tracking-wide bg-ink text-stock px-6 py-3 hover:bg-madder transition-colors"
            >
              Subscribe on Substack
            </a>
          </div>

          <div className="font-text text-[0.9375rem] leading-[1.7] text-ink-soft md:text-right md:max-w-[26ch]">
            <p>
              Set in Big Shoulders and Source Serif. Miskwa Kimiwan is the pen name
              of Peter Bernard.
            </p>
            <p className="mt-4 flex flex-col md:items-end">
              <Link href="/bookstore" className="inline-block py-2 underline underline-offset-4">
                Booksellers and wholesale
              </Link>
              <Link href="/privacy" className="inline-block py-2 underline underline-offset-4">
                Privacy
              </Link>
              <a href="mailto:miskwa@miskwakimiwan.com" className="inline-block py-2 underline underline-offset-4">
                miskwa@miskwakimiwan.com
              </a>
            </p>
            <p className="mt-4">© {new Date().getFullYear()} Miskwa Kimiwan</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

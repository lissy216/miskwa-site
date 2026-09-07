import Link from 'next/link'

// A real chapbook says what it was made of. This is the site's footer.
export default function Colophon() {
  return (
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
            <a
              href="mailto:miskwa@miskwakimiwan.com"
              className="inline-block py-2 underline underline-offset-4"
            >
              miskwa@miskwakimiwan.com
            </a>
          </p>
          <p className="mt-4">© {new Date().getFullYear()} Miskwa Kimiwan</p>
        </div>
      </div>
    </footer>
  )
}

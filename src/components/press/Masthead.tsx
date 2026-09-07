import Link from 'next/link'

// The series line at the head of every sheet in the letterpress world.
// `as` lets the homepage carry the h1 while interior pages leave it to the title.
export default function Masthead({ as = 'div' }: { as?: 'h1' | 'div' }) {
  const Wordmark = as

  return (
    <header className="bg-madder text-stock-hi">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-baseline justify-between gap-6">
        <Wordmark className="font-wood text-2xl font-bold uppercase tracking-tight leading-none">
          <Link href="/" className="inline-block py-2">
            Miskwa Kimiwan
          </Link>
        </Wordmark>
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
  )
}

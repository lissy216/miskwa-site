'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { href, LANGUAGE_NAMES, LOCALES, localeOf, switchPath, UI } from '@/lib/i18n'

const BOOKS = [
  { path: '/the-re-membering', title: 'The Re-Membering' },
  { path: '/forgiveness-as-freedom', title: 'Forgiveness as Freedom', soon: true },
  { path: '/the-signal', title: 'The Signal' },
  { path: '/red-rain', title: 'Red Rain' },
  { path: '/book-of-questions', title: 'The Book of Questions' },
]

// The language switch: a small button showing the current language that opens
// a list of all four. Each entry goes to the same page in that language. The
// entries are plain <a>, not <Link>: each language has its own page frame (with
// its own <html lang>), so switching is a full page load by design.
function LanguageSwitch({ pathname, small }: { pathname: string; small?: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const locale = localeOf(pathname)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${UI[locale].languages}: ${LANGUAGE_NAMES[locale].name}`}
        className={`flex items-center gap-1 border border-glow/50 text-glow hover:border-glow hover:bg-glow/10 transition-colors font-display uppercase ${
          small ? 'text-xs tracking-[0.12em] px-1.5 py-1' : 'text-sm tracking-[0.2em] px-2.5 py-1'
        }`}
      >
        {LANGUAGE_NAMES[locale].short}
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div hidden={!open} className="absolute right-0 top-full pt-2 z-50">
        <ul className="bg-charcoal border border-ash/30 rounded-sm shadow-xl min-w-40 py-1">
          {LOCALES.map((l) => (
            <li key={l}>
              {l === locale ? (
                <span
                  aria-current="true"
                  className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-sm font-serif text-glow"
                >
                  {LANGUAGE_NAMES[l].name}
                  <span className="font-display text-xs tracking-[0.15em]">{LANGUAGE_NAMES[l].short}</span>
                </span>
              ) : (
                <a
                  href={switchPath(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  title={LANGUAGE_NAMES[l].read}
                  className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-sm font-serif text-bone/80 hover:text-glow hover:bg-night/40 transition-colors"
                >
                  {LANGUAGE_NAMES[l].name}
                  <span className="font-display text-xs tracking-[0.15em] text-bone/50">{LANGUAGE_NAMES[l].short}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [booksOpen, setBooksOpen] = useState(false)
  const pathname = usePathname() ?? '/'
  const booksRef = useRef<HTMLDivElement>(null)
  const locale = localeOf(pathname)
  const t = UI[locale]
  const to = (path: string) => href(locale, path)

  const isActive = (path: string) => pathname === to(path)

  // The dropdown was hover-only: no onClick, no aria, so at >=1280px the four
  // book pages were unreachable by keyboard and by touch.
  useEffect(() => {
    if (!booksOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBooksOpen(false)
    }
    // A click or tap anywhere outside the menu closes it.
    const onPointer = (e: PointerEvent) => {
      if (booksRef.current && !booksRef.current.contains(e.target as Node)) {
        setBooksOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [booksOpen])

  // Choosing a book closes the menu.
  useEffect(() => {
    setBooksOpen(false)
  }, [pathname])

  const topLink = (path: string, label: string) => (
    <Link
      href={to(path)}
      className={`font-display text-sm tracking-[0.2em] uppercase transition-colors ${
        isActive(path) ? 'text-glow' : 'text-bone/70 hover:text-bone'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-night border-b border-ash/20">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Wordmark with Subtitle */}
        {/* shrink-0 keeps the tagline on one line beside the desktop menu. Only on the
            narrowest phones may it wrap, so the language switch and menu button fit. */}
        <div className="shrink-0 max-[419px]:shrink max-[419px]:min-w-0">
          <Link href={to('/')} className="font-serif max-[359px]:text-lg text-xl md:text-2xl text-bone tracking-wide block leading-tight whitespace-nowrap">
            Miskwa Kimiwan
          </Link>
          <p className="font-display text-[10px] tracking-[0.1em] min-[420px]:text-[11px] min-[420px]:tracking-[0.22em] md:text-sm uppercase text-glow mt-0.5">
            {t.tagline}
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {topLink('/', t.home)}
          {topLink('/about', t.about)}

          {/* Books Dropdown */}
          {/* Hover belongs to the whole wrapper, button and panel together, so the
              pointer can travel from one to the other without the menu closing.
              A click only ever opens: on touch screens a tap fires hover and click
              together, which used to open the menu and shut it in the same instant. */}
          <div
            ref={booksRef}
            className="relative group"
            onMouseEnter={() => setBooksOpen(true)}
            onMouseLeave={() => setBooksOpen(false)}
          >
            <button
              type="button"
              className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone transition-colors flex items-center gap-1 py-3"
              aria-haspopup="true"
              aria-expanded={booksOpen}
              onClick={() => setBooksOpen(true)}
            >
              {t.books}
              <svg className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* The gap under the button is padding inside this box, not a margin
                outside it, so there is no dead strip for the pointer to fall into. */}
            <div hidden={!booksOpen} className="absolute top-full left-0 pt-2 w-56">
              <div className="bg-charcoal border border-ash/30 rounded-sm shadow-xl">
                {BOOKS.map((b) => (
                  <Link
                    key={b.path}
                    href={to(b.path)}
                    className="block px-5 py-3 text-sm tracking-[0.18em] uppercase font-display text-bone/70 hover:text-glow hover:bg-night/40 transition-colors"
                  >
                    {b.title}
                    {b.soon && (
                      <span className="block mt-1 text-[0.625rem] tracking-[0.15em] text-glow/85">
                        {t.fafDate}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {topLink('/bookstore', t.bookstore)}
          {topLink('/contact', t.contact)}
          <LanguageSwitch pathname={pathname} />
        </div>

        {/* Mobile: language switch and menu toggle */}
        <div className="xl:hidden flex items-center gap-1 shrink-0">
          <LanguageSwitch pathname={pathname} small />
          <button
            className="text-bone p-2.5 -mr-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t.toggleMenu}
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-bone transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-bone transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-bone transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-[-7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={`xl:hidden bg-night border-t border-ash/20 transition-all duration-300 ${
          isOpen ? 'max-h-[80vh] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="section-container py-6 flex flex-col gap-5">
          {[
            { path: '/', label: t.home },
            { path: '/about', label: t.about },
          ].map((l) => (
            <Link key={l.path} href={to(l.path)} onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">
              {l.label}
            </Link>
          ))}
          {BOOKS.map((b) => (
            <Link key={b.path} href={to(b.path)} onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">
              {b.title}
              {b.soon && <span className="text-[0.625rem] tracking-[0.15em] text-glow/85"> {t.fafDate}</span>}
            </Link>
          ))}
          {[
            { path: '/bookstore', label: t.bookstore },
            { path: '/contact', label: t.contact },
          ].map((l) => (
            <Link key={l.path} href={to(l.path)} onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

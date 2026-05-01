'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [booksOpen, setBooksOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-night/95 backdrop-blur-sm border-b border-ash/20">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Wordmark with Subtitle */}
        <div>
          <Link href="/" className="font-serif text-xl md:text-2xl text-bone tracking-wide block leading-tight">
            Miskwa Kimiwan
          </Link>
          <p className="font-display text-[11px] md:text-sm tracking-[0.22em] uppercase text-glow mt-0.5">
            Writing for the Soul&rsquo;s Journey
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-display text-sm tracking-[0.2em] uppercase transition-colors ${
              isActive('/') ? 'text-glow' : 'text-bone/70 hover:text-bone'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-display text-sm tracking-[0.2em] uppercase transition-colors ${
              isActive('/about') ? 'text-glow' : 'text-bone/70 hover:text-bone'
            }`}
          >
            About
          </Link>

          {/* Books Dropdown */}
          <div className="relative group">
            <button
              className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone transition-colors flex items-center gap-1"
              onMouseEnter={() => setBooksOpen(true)}
              onMouseLeave={() => setBooksOpen(false)}
            >
              Books
              <svg className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-charcoal border border-ash/30 rounded-sm shadow-xl transition-all duration-200 ${
                booksOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              onMouseEnter={() => setBooksOpen(true)}
              onMouseLeave={() => setBooksOpen(false)}
            >
              <Link
                href="/red-rain"
                className="block px-5 py-3 text-sm tracking-[0.18em] uppercase font-display text-bone/70 hover:text-glow hover:bg-night/40 transition-colors"
              >
                Red Rain
              </Link>
              <Link
                href="/book-of-questions"
                className="block px-5 py-3 text-sm tracking-[0.18em] uppercase font-display text-bone/70 hover:text-glow hover:bg-night/40 transition-colors"
              >
                The Book of Questions
              </Link>
            </div>
          </div>

          <Link
            href="/programs"
            className={`font-display text-sm tracking-[0.2em] uppercase transition-colors ${
              isActive('/programs') ? 'text-glow' : 'text-bone/70 hover:text-bone'
            }`}
          >
            Programs
          </Link>
          <Link
            href="/contact"
            className={`font-display text-sm tracking-[0.2em] uppercase transition-colors ${
              isActive('/contact') ? 'text-glow' : 'text-bone/70 hover:text-bone'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-bone p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-bone transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px bg-bone transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-bone transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-night border-t border-ash/20 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="section-container py-6 flex flex-col gap-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">About</Link>
          <Link href="/red-rain" onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">Red Rain</Link>
          <Link href="/book-of-questions" onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">The Book of Questions</Link>
          <Link href="/programs" onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">Programs</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="font-display text-sm tracking-[0.2em] uppercase text-bone/70 hover:text-bone">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

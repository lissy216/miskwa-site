import Link from 'next/link'

const themes = [
  'Shadow & Light',
  'Wound & Wisdom',
  'Question & Transformation',
  'Journey & Return',
  'Soul & Story',
]

export default function Footer() {
  return (
    <footer className="bg-night text-bone/60 border-t border-ash/20">
      {/* Thematic strip from the brand mood board */}
      <div className="border-b border-ash/20">
        <div className="section-container py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
            {themes.map((t, i) => (
              <span key={t} className="flex items-center gap-x-6">
                <span className="font-display text-[11px] tracking-[0.3em] uppercase text-glow/75">
                  {t}
                </span>
                {i < themes.length - 1 && (
                  <span className="text-glow/40 text-xs select-none" aria-hidden>
                    &#10022;
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-bone mb-4">Miskwa Kimiwan</p>
            <p className="text-caption leading-relaxed">
              Author, healer, and teacher of spiritual healing and energy medicine.
              Carrier of intergenerational memory and medicine.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/60 mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-caption text-bone/70 hover:text-bone transition-colors">About</Link>
              <Link href="/red-rain" className="text-caption text-bone/70 hover:text-bone transition-colors">Red Rain</Link>
              <Link href="/book-of-questions" className="text-caption text-bone/70 hover:text-bone transition-colors">The Book of Questions</Link>
              <Link href="/programs" className="text-caption text-bone/70 hover:text-bone transition-colors">Programs</Link>
              <Link href="/contact" className="text-caption text-bone/70 hover:text-bone transition-colors">Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/60 mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.facebook.com/MiskwaKimiwan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-bone/70 hover:text-bone transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/miskwakimiwan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-bone/70 hover:text-bone transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://calendly.com/the8thfire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-bone/70 hover:text-bone transition-colors"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ash/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bone/50">
            &copy; 2025&ndash;2026 Miskwa Kimiwan &middot; Red Rain Press &middot; All Rights Reserved
          </p>
          <p className="text-xs text-bone/50">
            We all live in glass houses.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import { href, UI, type Locale } from '@/lib/i18n'

const linkClass = 'text-caption text-bone/70 hover:text-bone transition-colors'

export default function Footer({ locale = 'en' }: { locale?: Locale }) {
  const t = UI[locale]
  const to = (path: string) => href(locale, path)

  return (
    <footer className="bg-night text-bone/60 border-t border-ash/20">
      {/* Thematic strip from the brand mood board */}
      <div className="border-b border-ash/20">
        <div className="section-container py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
            {t.themes.map((theme, i) => (
              <span key={theme} className="flex items-center gap-x-6">
                <span className="font-display text-[11px] tracking-[0.3em] uppercase text-glow/85">
                  {theme}
                </span>
                {i < t.themes.length - 1 && (
                  <span className="text-glow/85 text-xs select-none" aria-hidden>
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
            <p className="text-caption leading-relaxed">{t.footerBio}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-5">{t.navigate}</p>
            <div className="flex flex-col gap-3">
              <Link href={to('/about')} className={linkClass}>{t.about}</Link>
              <Link href={to('/the-re-membering')} className={linkClass}>The Re-Membering</Link>
              <Link href={to('/forgiveness-as-freedom')} className={linkClass}>Forgiveness as Freedom</Link>
              <Link href={to('/the-signal')} className={linkClass}>The Signal</Link>
              <Link href={to('/red-rain')} className={linkClass}>Red Rain</Link>
              <Link href={to('/book-of-questions')} className={linkClass}>The Book of Questions</Link>
              <Link href={to('/bookstore')} className={linkClass}>{t.bookstore}</Link>
              <Link href={to('/wholesale')} className={linkClass}>{t.wholesale}</Link>
              <Link href={to('/contact')} className={linkClass}>{t.contact}</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-5">{t.connect}</p>
            <div className="flex flex-col gap-3">
              <a href="https://www.facebook.com/MiskwaKimiwan" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Facebook
              </a>
              <a href="https://www.instagram.com/miskwakimiwan" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram
              </a>
              {/* The same page in the other language. Plain <a> because the two
                  languages have separate page frames. */}
              <a href={locale === 'es' ? '/' : '/es'} hrefLang={locale === 'es' ? 'en' : 'es'} className={linkClass}>
                {locale === 'es' ? 'English' : 'Español'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ash/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bone/70">
            &copy; 2025&ndash;2026 Miskwa Kimiwan &middot; {t.rights}
          </p>
          <p className="text-xs text-bone/70">{t.glass}</p>
        </div>
      </div>
    </footer>
  )
}

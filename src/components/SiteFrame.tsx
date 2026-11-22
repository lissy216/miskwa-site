import { Cinzel, Lora, Crimson_Pro } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EllaRae from '@/components/EllaRae'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Locale } from '@/lib/i18n'
import '@/app/globals.css'

// The page frame both languages share: fonts, menu, footer, Ella Rae. The
// English layout lives in app/(en)/layout.tsx and the Spanish one in
// app/es/layout.tsx; each passes its language here.

// Self-hosted at build time by next/font. No render-blocking request to Google,
// no layout shift, no visitor IPs sent to Google.
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
})

export default function SiteFrame({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <html lang={locale} className={`${cinzel.variable} ${lora.variable} ${crimsonPro.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link font-display text-sm tracking-[0.2em] uppercase">
          {{ en: 'Skip to content', es: 'Ir al contenido', fr: 'Aller au contenu', de: 'Zum Inhalt springen' }[locale]}
        </a>
        <Navigation />
        <main id="main" className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer locale={locale} />
        <EllaRae locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

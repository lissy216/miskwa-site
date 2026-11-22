import type { MetadataRoute } from 'next'
import { SITE_URL, href } from '@/lib/i18n'

// Every page in English, with its twins at /es, /fr and /de.
const PAGES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/bookstore', priority: 0.9 },
  { path: '/the-re-membering', priority: 0.9 },
  { path: '/forgiveness-as-freedom', priority: 0.9 },
  { path: '/the-signal', priority: 0.9 },
  { path: '/red-rain', priority: 0.8 },
  { path: '/book-of-questions', priority: 0.8 },
  { path: '/wholesale', priority: 0.6 },
  { path: '/about', priority: 0.5 },
  { path: '/contact', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return PAGES.flatMap(({ path, priority }) => {
    const languages = {
      en: `${SITE_URL}${path}`,
      es: `${SITE_URL}${href('es', path)}`,
      fr: `${SITE_URL}${href('fr', path)}`,
      de: `${SITE_URL}${href('de', path)}`,
    }
    return [
      { url: languages.en, lastModified: now, changeFrequency: 'monthly' as const, priority, alternates: { languages } },
      { url: languages.es, lastModified: now, changeFrequency: 'monthly' as const, priority: Math.round(priority * 8) / 10, alternates: { languages } },
      { url: languages.fr, lastModified: now, changeFrequency: 'monthly' as const, priority: Math.round(priority * 8) / 10, alternates: { languages } },
      { url: languages.de, lastModified: now, changeFrequency: 'monthly' as const, priority: Math.round(priority * 8) / 10, alternates: { languages } },
    ]
  })
}

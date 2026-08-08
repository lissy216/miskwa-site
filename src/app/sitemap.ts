import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.miskwakimiwan.com'
  const now = new Date()

  return [
    { url: `${base}/`,                   lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/the-signal`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/red-rain`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/book-of-questions`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/wholesale`,          lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/programs`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,              lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`,            lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}

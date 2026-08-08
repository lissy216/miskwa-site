import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.miskwakimiwan.com/sitemap.xml',
    host: 'https://www.miskwakimiwan.com',
  }
}

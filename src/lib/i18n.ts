// English and Spanish. English pages live at their usual addresses; every Spanish
// page lives at the same address with /es in front (/about -> /es/about). The two
// sites mirror each other page for page, so the language switch always has a
// matching page to go to. When you add or change a page, do both.

export type Locale = 'en' | 'es'

export const SITE_URL = 'https://www.miskwakimiwan.com'

export function localeOf(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en'
}

// The address of a page in the given language. path is the English path.
export function href(locale: Locale, path: string): string {
  if (locale === 'en') return path
  return path === '/' ? '/es' : `/es${path}`
}

// The same page in the other language.
export function switchPath(pathname: string): string {
  if (localeOf(pathname) === 'es') {
    const rest = pathname.slice(3)
    return rest === '' ? '/' : rest
  }
  return href('es', pathname)
}

// For page metadata: canonical address plus the language alternates search
// engines use to send Spanish speakers to the Spanish page. path is English.
export function alternates(locale: Locale, path: string) {
  return {
    canonical: `${SITE_URL}${href(locale, path)}`,
    languages: {
      en: `${SITE_URL}${path}`,
      es: `${SITE_URL}${href('es', path)}`,
      'x-default': `${SITE_URL}${path}`,
    },
  }
}

export const UI = {
  en: {
    tagline: 'Writing for the Soul’s Journey',
    home: 'Home',
    about: 'About',
    books: 'Books',
    bookstore: 'Bookstore',
    contact: 'Contact',
    wholesale: 'Wholesale for Retailers',
    toggleMenu: 'Toggle menu',
    fafDate: 'December 21',
    fafDateLong: 'December 21, 2026',
    navigate: 'Navigate',
    connect: 'Connect',
    footerBio:
      'Author, healer, and teacher of spiritual healing and energy medicine. Carrier of intergenerational memory and medicine.',
    rights: 'Red Rain Publishing · All Rights Reserved',
    glass: 'We all live in glass houses.',
    privacy: 'Privacy',
    themes: [
      'Shadow & Light',
      'Wound & Wisdom',
      'Question & Transformation',
      'Journey & Return',
      'Soul & Story',
    ],
    moreBooks: 'More books by Miskwa Kimiwan',
    frontCover: 'Front Cover',
    langLabel: 'Leer en español',
    langShort: 'ES',
  },
  es: {
    tagline: 'Escritura para el camino del alma',
    home: 'Inicio',
    about: 'Biografía',
    books: 'Libros',
    bookstore: 'Librería',
    contact: 'Contacto',
    wholesale: 'Venta al por mayor',
    toggleMenu: 'Abrir o cerrar el menú',
    fafDate: '21 de diciembre',
    fafDateLong: '21 de diciembre de 2026',
    navigate: 'Navegar',
    connect: 'Redes',
    footerBio:
      'Escribe, sana y enseña sanación espiritual y medicina energética. Lleva consigo memoria y medicina intergeneracional.',
    rights: 'Red Rain Publishing · Todos los derechos reservados',
    glass: 'Todos vivimos en casas de cristal.',
    privacy: 'Privacidad',
    themes: [
      'Sombra y luz',
      'Herida y sabiduría',
      'Pregunta y transformación',
      'Camino y regreso',
      'Alma e historia',
    ],
    moreBooks: 'Más libros de Miskwa Kimiwan',
    frontCover: 'Portada',
    langLabel: 'Read in English',
    langShort: 'EN',
  },
} as const

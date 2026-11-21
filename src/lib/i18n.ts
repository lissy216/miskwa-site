// English, Spanish and French. English pages live at their usual addresses;
// every Spanish page lives at the same address with /es in front and every French
// page with /fr in front (/about -> /es/about, /fr/about). The three sites mirror
// each other page for page, so the language switch always has a matching page to
// go to. When you add or change a page, do all three.

export type Locale = 'en' | 'es' | 'fr'

export const LOCALES: Locale[] = ['en', 'es', 'fr']

export const SITE_URL = 'https://www.miskwakimiwan.com'

export function localeOf(pathname: string): Locale {
  for (const l of ['es', 'fr'] as const) {
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) return l
  }
  return 'en'
}

// The address of a page in the given language. path is the English path.
export function href(locale: Locale, path: string): string {
  if (locale === 'en') return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

// The English path of whatever page this is.
export function englishPath(pathname: string): string {
  if (localeOf(pathname) === 'en') return pathname
  const rest = pathname.slice(3)
  return rest === '' ? '/' : rest
}

// The same page in another language.
export function switchPath(pathname: string, to: Locale): string {
  return href(to, englishPath(pathname))
}

// For page metadata: canonical address plus the language alternates search
// engines use to send each reader to their own language. path is English.
export function alternates(locale: Locale, path: string) {
  return {
    canonical: `${SITE_URL}${href(locale, path)}`,
    languages: {
      en: `${SITE_URL}${path}`,
      es: `${SITE_URL}${href('es', path)}`,
      fr: `${SITE_URL}${href('fr', path)}`,
      'x-default': `${SITE_URL}${path}`,
    },
  }
}

// Each language's name in its own language, for the switch.
export const LANGUAGE_NAMES: Record<Locale, { short: string; name: string; read: string }> = {
  en: { short: 'EN', name: 'English', read: 'Read in English' },
  es: { short: 'ES', name: 'Español', read: 'Leer en español' },
  fr: { short: 'FR', name: 'Français', read: 'Lire en français' },
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
    languages: 'Languages',
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
    languages: 'Idiomas',
  },
  fr: {
    tagline: 'Écrire pour le chemin de l’âme',
    home: 'Accueil',
    about: 'Biographie',
    books: 'Livres',
    bookstore: 'Librairie',
    contact: 'Contact',
    wholesale: 'Vente en gros',
    toggleMenu: 'Ouvrir ou fermer le menu',
    fafDate: '21 décembre',
    fafDateLong: '21 décembre 2026',
    navigate: 'Naviguer',
    connect: 'Réseaux',
    footerBio:
      'Écrit, guérit et enseigne la guérison spirituelle et la médecine énergétique. Porte une mémoire et une médecine intergénérationnelles.',
    rights: 'Red Rain Publishing · Tous droits réservés',
    glass: 'Nous vivons tous dans des maisons de verre.',
    privacy: 'Confidentialité',
    themes: [
      'Ombre et lumière',
      'Blessure et sagesse',
      'Question et transformation',
      'Chemin et retour',
      'Âme et récit',
    ],
    moreBooks: 'Autres livres de Miskwa Kimiwan',
    frontCover: 'Couverture',
    languages: 'Langues',
  },
} as const

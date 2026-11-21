import type { Metadata } from 'next'
import { alternates } from '@/lib/i18n'

// La page de contact est un composant client : son titre vit ici.
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Écrire à Miskwa Kimiwan au sujet des livres, des conférences, des lectures ou des médias.',
  alternates: alternates('fr', '/contact'),
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

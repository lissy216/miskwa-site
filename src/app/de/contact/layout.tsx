import type { Metadata } from 'next'
import { alternates } from '@/lib/i18n'

// Die Kontaktseite ist eine Client-Komponente, darum steht ihr Titel hier.
export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Schreiben Sie an Miskwa Kimiwan zu den Büchern, zu Vorträgen, Lesungen oder Medienanfragen.',
  alternates: alternates('de', '/contact'),
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

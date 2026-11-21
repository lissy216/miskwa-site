import type { Metadata } from 'next'
import { alternates } from '@/lib/i18n'

// La página de contacto es un componente de cliente; su título vive aquí.
export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escribe a Miskwa Kimiwan sobre los libros, charlas, lecturas o prensa.',
  alternates: alternates('es', '/contact'),
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

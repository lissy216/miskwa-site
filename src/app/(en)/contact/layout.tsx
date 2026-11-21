import type { Metadata } from 'next'
import { alternates } from '@/lib/i18n'

// The contact page is a client component, so its title lives here.
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Write to Miskwa Kimiwan about the books, speaking, readings or media.',
  alternates: alternates('en', '/contact'),
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

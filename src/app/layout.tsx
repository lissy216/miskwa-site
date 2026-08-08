import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.miskwakimiwan.com'),
  title: {
    default: 'Miskwa Kimiwan | Author, Healer, Teacher',
    template: '%s | Miskwa Kimiwan',
  },
  description: 'Books that walk through darkness with dignity. Healing work that does not bypass the dark. Author of The Signal, Red Rain: A Soul Shattered, and The Book of Questions.',
  keywords: ['Miskwa Kimiwan', 'The Signal', 'Red Rain', 'Book of Questions', 'spiritual healing', 'energy medicine', 'Indigenous healing'],
  authors: [{ name: 'Miskwa Kimiwan' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.miskwakimiwan.com',
    siteName: 'Miskwa Kimiwan',
    title: 'Miskwa Kimiwan | Author, Healer, Teacher',
    description: 'Books that walk through darkness with dignity. Healing work that does not bypass the dark.',
    images: [
      {
        url: '/images/the-signal-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Signal — a new book by Miskwa Kimiwan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miskwa Kimiwan | Author, Healer, Teacher',
    description: 'Books that walk through darkness with dignity. Healing work that does not bypass the dark.',
    images: ['/images/the-signal-cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

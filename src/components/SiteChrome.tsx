'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './Footer'

// The letterpress world is rolling out surface by surface. The homepage carries
// its own masthead and colophon in the new vocabulary, so the incumbent chrome
// steps aside there and keeps serving every route still in the old world.
const REDESIGNED = new Set(['/'])

export function SiteNav() {
  return REDESIGNED.has(usePathname()) ? null : <Navigation />
}

export function SiteFooter() {
  return REDESIGNED.has(usePathname()) ? null : <Footer />
}

// The incumbent nav is fixed, so every old route needs a top offset to clear it.
// Redesigned surfaces carry their own masthead in normal flow and must sit flush.
export function SiteMain({ children }: { children: React.ReactNode }) {
  // Redesigned surfaces sit flush and carry the stock ground all the way down,
  // so dark ink never composites against the incumbent near-black body colour.
  const redesigned = REDESIGNED.has(usePathname())
  const cls = redesigned ? 'flex-1 bg-stock' : 'flex-1 pt-16 md:pt-20'
  return <main className={cls}>{children}</main>
}

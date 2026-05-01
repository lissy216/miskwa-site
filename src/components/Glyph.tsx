type GlyphName = 'sun' | 'branch' | 'triquetra' | 'eye' | 'spiral' | 'wholeness'

interface GlyphProps {
  name: GlyphName
  className?: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export default function Glyph({ name, className = 'w-7 h-7' }: GlyphProps) {
  switch (name) {
    case 'sun':
      return (
        <svg viewBox="0 0 40 40" className={className} {...stroke}>
          <circle cx="20" cy="20" r="6" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI * 2) / 8
            const x1 = 20 + Math.cos(angle) * 10
            const y1 = 20 + Math.sin(angle) * 10
            const x2 = 20 + Math.cos(angle) * 15
            const y2 = 20 + Math.sin(angle) * 15
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </svg>
      )
    case 'branch':
      return (
        <svg viewBox="0 0 40 40" className={className} {...stroke}>
          <path d="M20 33 L20 7" />
          <path d="M20 24 L13 17" />
          <path d="M20 24 L27 17" />
          <path d="M20 17 L15 12" />
          <path d="M20 17 L25 12" />
          <path d="M20 11 L17 8" />
          <path d="M20 11 L23 8" />
        </svg>
      )
    case 'triquetra':
      return (
        <svg viewBox="0 0 40 40" className={className} {...stroke}>
          <circle cx="20" cy="14" r="7" />
          <circle cx="13.5" cy="25" r="7" />
          <circle cx="26.5" cy="25" r="7" />
        </svg>
      )
    case 'eye':
      return (
        <svg viewBox="0 0 40 40" className={className} {...stroke}>
          <path d="M5 20 Q20 7 35 20 Q20 33 5 20 Z" />
          <circle cx="20" cy="20" r="3.5" />
          <circle cx="20" cy="20" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'spiral':
      return (
        <svg viewBox="0 0 40 40" className={className} {...stroke}>
          <path d="M20 20 m0 0 a1.5 1.5 0 1 1 3 0 a4 4 0 1 1 -7 0 a7 7 0 1 1 13 0 a10 10 0 1 1 -19 0 a13 13 0 1 1 24 0" />
        </svg>
      )
    case 'wholeness':
      return (
        <svg viewBox="0 0 40 40" className={className} {...stroke}>
          <circle cx="20" cy="20" r="14" />
          <circle cx="20" cy="20" r="8" />
          <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

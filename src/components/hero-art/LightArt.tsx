export default function LightArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 700"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="20%" stopColor="#F5D66B" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#D4A853" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#B8864E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sun-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5D66B" stopOpacity="0.3" />
          <stop offset="55%" stopColor="#D4A853" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Large outer halo */}
      <circle cx="260" cy="260" r="320" fill="url(#sun-halo)" />

      {/* Sun core glow */}
      <circle cx="260" cy="260" r="140" fill="url(#sun-core)" />

      {/* Outer rays (12 spokes) */}
      <g stroke="#C49A3C" strokeWidth="0.8" fill="none" opacity="0.5" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12
          const x1 = 260 + Math.cos(angle) * 150
          const y1 = 260 + Math.sin(angle) * 150
          const x2 = 260 + Math.cos(angle) * 215
          const y2 = 260 + Math.sin(angle) * 215
          return <line key={`ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}
      </g>

      {/* Sun disc with mandala inner pattern */}
      <circle cx="260" cy="260" r="75" fill="#D4A853" opacity="0.35" />

      {/* Mandala rings */}
      <g stroke="#A07828" fill="none" opacity="0.6">
        <circle cx="260" cy="260" r="64" strokeWidth="0.8" />
        <circle cx="260" cy="260" r="48" strokeWidth="0.7" />
        <circle cx="260" cy="260" r="32" strokeWidth="0.6" />
        <circle cx="260" cy="260" r="18" strokeWidth="0.6" />
      </g>

      {/* Inner mandala petals (8) */}
      <g stroke="#A07828" strokeWidth="0.9" fill="none" opacity="0.55">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 8
          const x1 = 260 + Math.cos(angle) * 18
          const y1 = 260 + Math.sin(angle) * 18
          const x2 = 260 + Math.cos(angle) * 64
          const y2 = 260 + Math.sin(angle) * 64
          return <line key={`petal-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}
      </g>

      {/* Tiny diamond petals between spokes */}
      <g fill="#C49A3C" opacity="0.4">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 8 + Math.PI / 8
          const r = 40
          const cx = 260 + Math.cos(angle) * r
          const cy = 260 + Math.sin(angle) * r
          return <circle key={`dot-${i}`} cx={cx} cy={cy} r="1.5" />
        })}
      </g>

      {/* Centre point */}
      <circle cx="260" cy="260" r="4" fill="#8B5A1E" opacity="0.8" />

      {/* Distant soft mountains */}
      <path
        d="M-20 470 L60 425 L130 450 L200 415 L270 445 L340 410 L420 440 L500 418 L600 435 L620 500 L-20 500 Z"
        fill="#B8864E"
        opacity="0.2"
      />
      <path
        d="M-20 490 L80 455 L170 475 L260 445 L340 465 L440 438 L540 458 L620 445 L620 505 L-20 505 Z"
        fill="#A07828"
        opacity="0.18"
      />

      {/* River — flowing horizontally, 3 layered curves */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M-50 540 Q80 515 180 540 Q280 570 380 530 Q480 495 600 520 Q680 535 720 520"
          stroke="#3A6A70"
          strokeWidth="14"
          opacity="0.55"
        />
        <path
          d="M-50 565 Q80 540 180 562 Q280 590 380 552 Q480 518 600 542 Q680 558 720 542"
          stroke="#5A8A8F"
          strokeWidth="9"
          opacity="0.45"
        />
        <path
          d="M-50 588 Q80 565 180 584 Q280 610 380 575 Q480 542 600 564 Q680 580 720 566"
          stroke="#68C6CF"
          strokeWidth="5"
          opacity="0.35"
        />
        {/* Gentle ripple highlight */}
        <path
          d="M40 555 Q110 548 180 554 M220 568 Q280 572 340 558 M400 548 Q460 540 520 547"
          stroke="#FFFFFF"
          strokeWidth="1"
          opacity="0.35"
        />
      </g>
    </svg>
  )
}

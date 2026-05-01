export default function ShadowArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 700"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="ember-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5D66B" stopOpacity="0.85" />
          <stop offset="25%" stopColor="#E04A20" stopOpacity="0.75" />
          <stop offset="55%" stopColor="#8B2500" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8B2500" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ember-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C43A1A" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#8B2500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#8B2500" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer ember halo */}
      <circle cx="300" cy="400" r="290" fill="url(#ember-halo)" />

      {/* Radiating energy / lightning lines from heart */}
      <g stroke="#8B2500" strokeWidth="0.9" fill="none" opacity="0.55" strokeLinecap="round">
        <path d="M300 400 L140 240 L90 180" />
        <path d="M300 400 L90 320 L40 300" />
        <path d="M300 400 L110 440 L50 480" />
        <path d="M300 400 L460 240 L510 180" />
        <path d="M300 400 L510 320 L560 300" />
        <path d="M300 400 L490 440 L550 480" />
        <path d="M300 400 L220 170 L190 110" />
        <path d="M300 400 L380 170 L410 110" />
        <path d="M300 400 L300 210 L300 140" />
      </g>

      {/* Secondary finer lines */}
      <g stroke="#C43A1A" strokeWidth="0.5" fill="none" opacity="0.35" strokeLinecap="round">
        <path d="M300 400 L250 310 L210 270" />
        <path d="M300 400 L350 310 L390 270" />
        <path d="M300 400 L270 230 L240 190" />
        <path d="M300 400 L330 230 L360 190" />
        <path d="M300 400 L170 340 L100 360" />
        <path d="M300 400 L430 340 L500 360" />
      </g>

      {/* Ancestral silhouettes at the edges */}
      <g fill="#1A0E08" opacity="0.7">
        {/* left pair */}
        <circle cx="90" cy="170" r="16" />
        <path d="M74 188 Q74 240 82 280 L98 280 Q106 240 106 188 Z" />
        <circle cx="55" cy="215" r="13" />
        <path d="M42 232 Q42 275 48 310 L62 310 Q68 275 68 232 Z" />
        {/* right pair */}
        <circle cx="510" cy="170" r="16" />
        <path d="M494 188 Q494 240 502 280 L518 280 Q526 240 526 188 Z" />
        <circle cx="545" cy="215" r="13" />
        <path d="M532 232 Q532 275 538 310 L552 310 Q558 275 558 232 Z" />
      </g>

      {/* Central meditating figure silhouette */}
      <g fill="#050302">
        {/* Head */}
        <circle cx="300" cy="330" r="30" />
        {/* Neck */}
        <rect x="289" y="358" width="22" height="12" />
        {/* Torso (tapered) */}
        <path d="M268 370 Q260 430 250 490 L350 490 Q340 430 332 370 Z" />
        {/* Arms resting on knees */}
        <path
          d="M270 418 Q246 445 228 480"
          stroke="#050302"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M330 418 Q354 445 372 480"
          stroke="#050302"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lotus legs */}
        <ellipse cx="300" cy="510" rx="92" ry="24" />
        <ellipse cx="250" cy="518" rx="22" ry="12" />
        <ellipse cx="350" cy="518" rx="22" ry="12" />
      </g>

      {/* Ember heart glow — sits in the chest */}
      <circle cx="300" cy="420" r="95" fill="url(#ember-core)" />
      <circle cx="300" cy="420" r="22" fill="#F5D66B" opacity="0.9" />
      <circle cx="300" cy="420" r="10" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

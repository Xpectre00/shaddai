export default function CrownIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Crown"
    >
      <defs>
        <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c0c0c0" />
          <stop offset="40%" stopColor="#e6e6e6" />
          <stop offset="60%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <linearGradient id="crownRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b0000" />
          <stop offset="100%" stopColor="#660014" />
        </linearGradient>
        <filter id="crownShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#crownShadow)">
        <path
          d="M10 90 L30 20 L60 50 L100 10 L140 50 L170 20 L190 90 Z"
          fill="url(#crownGold)"
          stroke="#999"
          strokeWidth="1.5"
        />
        <path
          d="M10 90 L10 100 L190 100 L190 90 Z"
          fill="url(#crownRed)"
        />
        <circle cx="100" cy="85" r="12" fill="url(#crownGold)" stroke="#999" strokeWidth="1" />
        <circle cx="100" cy="85" r="6" fill="url(#crownRed)" />
        <circle cx="50" cy="75" r="5" fill="url(#crownGold)" />
        <circle cx="150" cy="75" r="5" fill="url(#crownGold)" />
        <circle cx="25" cy="60" r="3" fill="url(#crownGold)" />
        <circle cx="175" cy="60" r="3" fill="url(#crownGold)" />
        <rect x="60" y="100" width="80" height="6" rx="2" fill="url(#crownGold)" />
      </g>
    </svg>
  )
}
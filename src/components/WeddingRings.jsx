export default function WeddingRings() {
  return (
    <div className="couple-rings" aria-hidden="true">
      <svg className="wedding-ring wedding-ring-groom" viewBox="0 0 72 72">
        <defs>
          <linearGradient id="groom-ring-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a87932" />
            <stop offset=".3" stopColor="#f4df9b" />
            <stop offset=".55" stopColor="#bd8c38" />
            <stop offset=".78" stopColor="#fff0b8" />
            <stop offset="1" stopColor="#9e722b" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="25" fill="none" stroke="url(#groom-ring-gold)" strokeWidth="4" />
        <circle cx="36" cy="36" r="19" fill="none" stroke="#c89d4d" strokeWidth="1.5" />
        <path d="M16.7 44.5a21 21 0 0 0 38.6 0" fill="none" stroke="#8e6527" strokeWidth="1.15" />
        <path d="M19.5 24a21 21 0 0 1 17-9.7" fill="none" stroke="#fff4c8" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      <svg className="wedding-ring wedding-ring-bride" viewBox="0 0 72 72">
        <defs>
          <linearGradient id="bride-ring-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a87932" />
            <stop offset=".3" stopColor="#f4df9b" />
            <stop offset=".55" stopColor="#bd8c38" />
            <stop offset=".78" stopColor="#fff0b8" />
            <stop offset="1" stopColor="#9e722b" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="25" fill="none" stroke="url(#bride-ring-gold)" strokeWidth="4" />
        <circle cx="36" cy="36" r="19" fill="none" stroke="#c89d4d" strokeWidth="1.5" />
        <path d="M18 28a21 21 0 0 1 36 0" fill="none" stroke="#fff4c8" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M36 4.5 44 13l-8 9-8-9z" fill="#fff9df" stroke="#b88a39" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M36 7.5v11" fill="none" stroke="#e3c675" strokeWidth="1" />
      </svg>

      <span className="ring-sparkle" />
    </div>
  );
}

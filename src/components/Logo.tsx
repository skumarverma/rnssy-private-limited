import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 48, textColor = 'text-[#800A2C]' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer Circle */}
        <circle cx="80" cy="74" r="62" stroke="#800A2C" strokeWidth="3.5" fill="#FFFFFF" />
        <circle cx="80" cy="74" r="56" stroke="#800A2C" strokeWidth="1" strokeDasharray="3 3" />

        {/* Skyscrapers & House */}
        {/* House (Left) */}
        <path d="M35 68 L48 56 L61 68 Z" fill="#800A2C" />
        <rect x="40" y="68" width="16" height="12" fill="#800A2C" />
        <rect x="46" y="72" width="4" height="8" fill="#FFFFFF" />
        <rect x="52" y="61" width="3" height="3" fill="#FFFFFF" />

        {/* Tall Skyscraper 1 */}
        <rect x="62" y="32" width="16" height="48" fill="#800A2C" />
        {/* Windows */}
        <rect x="66" y="36" width="3" height="4" fill="#FFFFFF" />
        <rect x="71" y="36" width="3" height="4" fill="#FFFFFF" />
        <rect x="66" y="44" width="3" height="4" fill="#FFFFFF" />
        <rect x="71" y="44" width="3" height="4" fill="#FFFFFF" />
        <rect x="66" y="52" width="3" height="4" fill="#FFFFFF" />
        <rect x="71" y="52" width="3" height="4" fill="#FFFFFF" />
        <rect x="66" y="60" width="3" height="4" fill="#FFFFFF" />
        <rect x="71" y="60" width="3" height="4" fill="#FFFFFF" />
        <rect x="66" y="68" width="3" height="4" fill="#FFFFFF" />
        <rect x="71" y="68" width="3" height="4" fill="#FFFFFF" />

        {/* Tall Skyscraper 2 (Center highest) */}
        <rect x="80" y="24" width="20" height="56" fill="#800A2C" />
        <path d="M80 24 L90 14 L100 24 Z" fill="#800A2C" />
        {/* Windows */}
        <rect x="84" y="28" width="4" height="4" fill="#FFFFFF" />
        <rect x="92" y="28" width="4" height="4" fill="#FFFFFF" />
        <rect x="84" y="36" width="4" height="4" fill="#FFFFFF" />
        <rect x="92" y="36" width="4" height="4" fill="#FFFFFF" />
        <rect x="84" y="44" width="4" height="4" fill="#FFFFFF" />
        <rect x="92" y="44" width="4" height="4" fill="#FFFFFF" />
        <rect x="84" y="52" width="4" height="4" fill="#FFFFFF" />
        <rect x="92" y="52" width="4" height="4" fill="#FFFFFF" />
        <rect x="84" y="60" width="4" height="4" fill="#FFFFFF" />
        <rect x="92" y="60" width="4" height="4" fill="#FFFFFF" />
        <rect x="84" y="68" width="4" height="4" fill="#FFFFFF" />
        <rect x="92" y="68" width="4" height="4" fill="#FFFFFF" />

        {/* Medium Building 3 (Right) */}
        <rect x="103" y="38" width="16" height="42" fill="#800A2C" />
        {/* Slanted windows */}
        <line x1="107" y1="44" x2="115" y2="44" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="107" y1="50" x2="115" y2="50" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="107" y1="56" x2="115" y2="56" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="107" y1="62" x2="115" y2="62" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="107" y1="68" x2="115" y2="68" stroke="#FFFFFF" strokeWidth="2" />

        {/* Baseline / Bridge Deck */}
        <line x1="22" y1="80" x2="138" y2="80" stroke="#800A2C" strokeWidth="3" />

        {/* "EST 2026" Text */}
        <text
          x="80"
          y="93"
          fill="#800A2C"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="4"
          textAnchor="middle"
          fontFamily="'Outfit', sans-serif"
        >
          EST 2026
        </text>

        {/* Bridge Suspension Towers & Cables (Below baseline) */}
        {/* Left tower */}
        <line x1="45" y1="80" x2="45" y2="105" stroke="#800A2C" strokeWidth="2" />
        {/* Right tower */}
        <line x1="115" y1="80" x2="115" y2="105" stroke="#800A2C" strokeWidth="2" />
        {/* Suspension Cable */}
        <path d="M25 80 Q45 102 80 102 Q115 102 135 80" stroke="#800A2C" strokeWidth="2" fill="none" />
        {/* Vertical cables hanger */}
        <line x1="60" y1="88" x2="60" y2="101" stroke="#800A2C" strokeWidth="0.75" />
        <line x1="80" y1="96" x2="80" y2="102" stroke="#800A2C" strokeWidth="0.75" />
        <line x1="100" y1="88" x2="100" y2="101" stroke="#800A2C" strokeWidth="0.75" />

        {/* Bottom Banner / Ribbon */}
        <path
          d="M 12 114 L 30 106 L 22 126 Z"
          fill="#60051E"
        />
        <path
          d="M 148 114 L 130 106 L 138 126 Z"
          fill="#60051E"
        />
        <path
          d="M 20 114 Q 80 126 140 114 L 130 134 Q 80 144 30 134 Z"
          fill="#800A2C"
        />

        {/* Ribbon Text */}
        <text
          x="80"
          y="127"
          fill="#FFFFFF"
          fontSize="7.5"
          fontWeight="800"
          letterSpacing="0.5"
          textAnchor="middle"
          fontFamily="'Outfit', sans-serif"
        >
          RNSSY PRIVATE LIMITED
        </text>
      </svg>

      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold tracking-tight text-xl ${textColor}`}>
          RNSSY
        </span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
          Private Limited
        </span>
      </div>
    </div>
  );
};

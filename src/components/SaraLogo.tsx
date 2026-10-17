import React from 'react';

interface SaraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'brand' | 'light' | 'dark' | 'blue';
  showSubtitle?: boolean;
}

export const SaraLogo: React.FC<SaraLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'brand',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-6',
    md: 'w-9 h-8',
    lg: 'w-11 h-9',
    xl: 'w-14 h-12',
    '2xl': 'w-16 h-14',
  }[size];

  const brandTextSize = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
  }[size];

  const subtitleSize = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
    xl: 'text-sm tracking-[0.4em]',
    '2xl': 'text-base tracking-[0.45em]',
  }[size];

  // Dynamic color configuration
  const isLight = variant === 'light';
  // Blue color: #0047AB (Cobalt Blue) and #0055D4 (Vibrant Royal Blue)
  const logoFill = isLight ? '#FFFFFF' : '#0047AB';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Monogram Emblem in Blue */}
      <div className={`shrink-0 ${iconDimensions}`}>
        <svg
          viewBox="0 0 380 320"
          className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
          fill={logoFill}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Sara Infra Logo"
        >
          <g>
            {/* Top Inverted L */}
            <path d="M 30 0 H 370 V 150 H 310 V 36 H 30 Z" />
            
            {/* S-R Monogram Continuous Geometry */}
            <path d="
              M 30 62
              H 258
              V 150
              H 310
              L 367 300
              H 307
              L 250 150
              V 98
              H 104
              L 181 300
              H 0
              V 200
              H 68
              V 264
              H 105
              L 30 62
              Z
            " />
          </g>
        </svg>
      </div>

      {/* Typography: Company Name in Blue */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight font-['Outfit'] ${brandTextSize} ${
              isLight ? 'text-white' : 'text-[#0047AB]'
            }`}
          >
            SARA <span className={isLight ? 'text-[#C5A059]' : 'text-[#0055D4]'}>INFRA</span>
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`font-bold uppercase mt-1 ${subtitleSize} ${
              isLight ? 'text-slate-300' : 'text-[#0047AB]/85 font-semibold'
            }`}
          >
            CONSTRUCTION
          </span>
        )}
      </div>
    </div>
  );
};

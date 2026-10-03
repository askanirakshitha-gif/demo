import React from 'react';

/**
 * Hero3DTitle - Acharya Tech Habba 2026 Official Heavy Poster Typography
 * - Line 1: "ACHARYA" in Pure Ultra-Bright White (#FFFFFF)
 * - Line 2: "TECH" in Solid Light Platinum Silver (#C5CCD6)
 * - Line 3: "HABBA 2026" in Solid Steel Slate Gray (#788597)
 * - Tight, heavy geometric typography matching official poster lockup
 */
const Hero3DTitle = ({
  line1 = 'ACHARYA',
  line2 = 'TECH',
  line3 = 'HABBA 2026',
  className = '',
}) => {
  return (
    <div className={`relative select-none flex flex-col items-center justify-center ${className}`}>
      {/* Soft Ambient White Backlight Glow Behind ACHARYA */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] sm:w-[500px] md:w-[650px] h-[160px] sm:h-[220px] bg-white/[0.08] rounded-full blur-[70px]" />
      </div>

      {/* Main 3-Tier Typography Stack */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center leading-none tracking-[-0.02em]">
        {/* LINE 1: ACHARYA (Pure Bold White) */}
        <h1
          style={{
            fontFamily: "'Outfit', 'Plus Jakarta Sans', 'Inter', sans-serif",
            fontWeight: 900,
          }}
          className="
            text-white uppercase select-none leading-[0.92]
            text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]
            filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]
          "
        >
          {line1}
        </h1>

        {/* LINE 2: TECH (Light Platinum Silver) */}
        <h2
          style={{
            fontFamily: "'Outfit', 'Plus Jakarta Sans', 'Inter', sans-serif",
            fontWeight: 900,
            color: '#C5CCD6',
          }}
          className="
            uppercase select-none leading-[0.92] mt-1 sm:mt-1.5
            text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]
            filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]
          "
        >
          {line2}
        </h2>

        {/* LINE 3: HABBA 2026 (Steel Slate Gray) */}
        <h3
          style={{
            fontFamily: "'Outfit', 'Plus Jakarta Sans', 'Inter', sans-serif",
            fontWeight: 900,
            color: '#788597',
          }}
          className="
            uppercase select-none leading-[0.92] mt-1 sm:mt-1.5
            text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]
            filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.95)]
          "
        >
          {line3}
        </h3>

        {/* Subtle Ground Horizon Shadow */}
        <div className="w-3/4 h-2 mt-4 sm:mt-6 bg-white/10 rounded-full blur-md opacity-25 mx-auto pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero3DTitle;

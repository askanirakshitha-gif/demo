import React from 'react';

/**
 * Hero3DTitle - Clean, Standard Sans-Serif 3D Typography
 * - Standard modern sans-serif typography ('Plus Jakarta Sans', 'Inter', -apple-system, sans-serif)
 * - Razor-sharp, high-contrast, directional vertical 3D relief extrusion
 * - Rock-solid stability on mobile and desktop (no floating or blurring motion)
 * - Crystal-clear readability in all viewports
 */
const Hero3DTitle = ({
  line1 = 'TECH HABBA',
  line2 = '2K26',
  className = '',
}) => {
  const get3DShadow = () => `
    0 1px 0 #ffffff,
    0 2px 0 #f8fafc,
    0 3px 0 #e2e8f0,
    0 4px 0 #cbd5e1,
    0 5px 0 #94a3b8,
    0 6px 0 #64748b,
    0 7px 0 #475569,
    0 8px 0 #334155,
    0 9px 0 #1e293b,
    0 10px 0 #0f172a,
    0 11px 0 #000000,
    0 16px 28px rgba(0, 0, 0, 0.98),
    0 28px 50px rgba(0, 0, 0, 0.92)
  `;

  return (
    <div className={`relative select-none flex flex-col items-center justify-center ${className}`}>
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[280px] sm:w-[450px] md:w-[600px] h-[180px] sm:h-[280px] bg-white/[0.04] rounded-full blur-[80px]" />
      </div>

      {/* Main 3D Title Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* LINE 1: TECH HABBA */}
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
            fontWeight: 900,
            textShadow: get3DShadow(),
          }}
          className="
            text-white uppercase tracking-[-0.02em] leading-none select-none
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
            px-2 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)]
          "
        >
          {line1}
        </h1>

        {/* LINE 2: 2K26 */}
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
            fontWeight: 900,
            textShadow: get3DShadow(),
          }}
          className="
            text-white uppercase tracking-[0.04em] leading-none select-none
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
            mt-2 sm:mt-3 px-2 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]
          "
        >
          {line2}
        </h2>

        {/* Ground Depth Horizon */}
        <div className="w-3/5 h-2 mt-4 sm:mt-6 bg-white/10 rounded-full blur-md opacity-35 mx-auto pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero3DTitle;

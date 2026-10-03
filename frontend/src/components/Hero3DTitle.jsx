import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero3DTitle - Crystal-Clear, High-Definition 3D Metal Typography
 * - Rock-solid, static crisp rendering on mobile (no floating or blurring motion)
 * - Pure silver, steel, and white metallic bevels matching official poster
 * - Razor-sharp typography and crisp specular glints
 */
const Hero3DTitle = ({
  line1 = 'TECH HABBA',
  line2 = '2K26',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    let animId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // Subtle desktop mouse parallax only (passive, non-intrusive)
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const loop = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      setRot({
        rx: -currentY * 5,
        ry: currentX * 6,
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Sharp, clean, stepped 3D metallic extrusion (fixed, crisp, zero motion blur)
  const getSilverMetallicShadow = () => {
    return `
      0 1px 0 #ffffff,
      0.4px 1.2px 0 #ffffff,
      0.8px 2.2px 0 #f1f5f9,
      1.2px 3.2px 0 #e2e8f0,
      1.6px 4.2px 0 #cbd5e1,
      2.0px 5.2px 0 #94a3b8,
      2.4px 6.2px 0 #64748b,
      2.8px 7.2px 0 #475569,
      3.2px 8.2px 0 #334155,
      3.5px 9.0px 0 #cbd5e1,
      3.8px 9.8px 0 #f8fafc,
      4.1px 10.6px 0 #334155,
      4.4px 11.4px 0 #1e293b,
      4.8px 12.2px 0 #0f172a,
      5.2px 13.2px 0 #000000,
      0 16px 28px rgba(0, 0, 0, 0.98),
      0 28px 55px rgba(0, 0, 0, 0.95),
      0 0 20px rgba(255, 255, 255, 0.3)
    `;
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none flex flex-col items-center justify-center ${className}`}
    >
      {/* 1. Cybernetic Tech Dial & Concentric Gauge Rings Background */}
      <div className="absolute inset-0 -z-20 pointer-events-none flex items-center justify-center">
        <div className="relative w-[320px] sm:w-[480px] md:w-[580px] h-[320px] sm:h-[480px] md:h-[580px] flex items-center justify-center opacity-30">
          <div className="absolute inset-0 rounded-full border border-white/20 border-dashed" />
          <div className="absolute inset-6 rounded-full border-2 border-white/10" />
          <div className="absolute inset-14 rounded-full border border-white/20 animate-[spin_50s_linear_infinite_reverse]" />
          <div className="absolute inset-24 rounded-full border border-white/15" />
          <div className="absolute w-[85%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45" />
          <div className="absolute w-[85%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45" />
        </div>
      </div>

      {/* 2. Main Crisp 3D Title Stage */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center font-cyber"
      >
        {/* LINE 1: TECH HABBA */}
        <div className="relative inline-block px-1">
          {/* 3D Extrusion Backing */}
          <div
            style={{
              textShadow: getSilverMetallicShadow(),
              fontFamily: "'Orbitron', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
            }}
            className="
              tracking-[0.02em] leading-none select-none text-white uppercase
              text-3xl sm:text-5xl md:text-6xl lg:text-[6.5rem] xl:text-[7.5rem]
              filter drop-shadow-[0_12px_25px_rgba(0,0,0,0.95)]
            "
          >
            {line1}
          </div>

          {/* Brushed Platinum & Steel Front Face Overlay */}
          <div
            style={{
              fontFamily: "'Orbitron', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 22%, #F1F5F9 35%, #CBD5E1 48%, #64748B 62%, #334155 76%, #94A3B8 88%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 1px 0px rgba(255, 255, 255, 0.95)) drop-shadow(0 -1px 0px rgba(255, 255, 255, 0.4))',
            }}
            className="
              absolute inset-0 tracking-[0.02em] leading-none select-none uppercase pointer-events-none px-1
              text-3xl sm:text-5xl md:text-6xl lg:text-[6.5rem] xl:text-[7.5rem]
            "
          >
            {line1}
          </div>

          {/* Corner Diamond Sparkles (From Image) */}
          <div className="absolute -top-1.5 left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white rounded-full blur-[0.8px] opacity-90 shadow-[0_0_8px_#ffffff]" />
          <div className="absolute top-1 right-2 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-white rounded-full blur-[0.8px] opacity-90 shadow-[0_0_10px_#ffffff]" />
        </div>

        {/* LINE 2: 2K26 */}
        <div className="relative inline-block mt-2 sm:mt-4 px-1">
          {/* 3D Extrusion Backing */}
          <div
            style={{
              textShadow: getSilverMetallicShadow(),
              fontFamily: "'Orbitron', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
            }}
            className="
              tracking-[0.08em] leading-none select-none text-white uppercase
              text-3xl sm:text-5xl md:text-6xl lg:text-[6.5rem] xl:text-[7.5rem]
              filter drop-shadow-[0_14px_30px_rgba(0,0,0,0.98)]
            "
          >
            {line2}
          </div>

          {/* Brushed Platinum & Steel Front Face Overlay */}
          <div
            style={{
              fontFamily: "'Orbitron', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 22%, #F1F5F9 35%, #CBD5E1 48%, #64748B 62%, #334155 76%, #94A3B8 88%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 1px 0px rgba(255, 255, 255, 0.95)) drop-shadow(0 -1px 0px rgba(255, 255, 255, 0.4))',
            }}
            className="
              absolute inset-0 tracking-[0.08em] leading-none select-none uppercase pointer-events-none px-1
              text-3xl sm:text-5xl md:text-6xl lg:text-[6.5rem] xl:text-[7.5rem]
            "
          >
            {line2}
          </div>

          {/* Bottom Corner Sparkles (From Image) */}
          <div className="absolute -bottom-1 left-2 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white rounded-full blur-[0.8px] opacity-90 shadow-[0_0_8px_#ffffff]" />
          <div className="absolute -bottom-1 right-8 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-white rounded-full blur-[0.8px] opacity-95 shadow-[0_0_10px_#ffffff]" />
          <div className="absolute top-1/2 left-[48%] w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white rounded-full blur-[0.8px] opacity-85 shadow-[0_0_8px_#ffffff]" />
        </div>

        {/* Realistic Ground Contact Shadow */}
        <div className="w-3/4 h-3.5 mt-5 bg-white/10 rounded-full blur-md opacity-35 mx-auto pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero3DTitle;







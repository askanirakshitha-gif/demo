import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero3DTitle - Official Heavy 3D Extruded Sculpture for TECH HABBA 2K26
 * - Heavy, ultra-bold sculpted 3D letterforms matching the official banner reference
 * - Multi-slice depth extrusion gradient from pure white to polished chrome and deep black
 * - Crisp directional bevels and deep cast shadow
 * - Pure code & typography (NO static picture)
 */
const Hero3DTitle = ({
  line1 = 'TECH HABBA',
  line2 = '2K26',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 4 });

  useEffect(() => {
    let animId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const { innerWidth, innerHeight } = window;
        targetX = (e.touches[0].clientX / innerWidth - 0.5) * 2;
        targetY = (e.touches[0].clientY / innerHeight - 0.5) * 2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const loop = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setRot({
        rx: -currentY * 10,
        ry: currentX * 12,
      });

      // Subtle directional extrusion shift while keeping solid base
      setShadowOffset({
        x: -currentX * 4,
        y: Math.max(3, -currentY * 3 + 4),
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Generates official thick, stepped 3D text extrusion matching reference image
  const getOfficial3DShadow = () => {
    const sx = shadowOffset.x * 0.3;
    const sy = shadowOffset.y * 0.3;

    return `
      0 1px 0 #ffffff,
      ${sx * 0.1 + 0.4}px ${sy * 0.1 + 1.2}px 0 #ffffff,
      ${sx * 0.2 + 0.8}px ${sy * 0.2 + 2.2}px 0 #f8fafc,
      ${sx * 0.3 + 1.2}px ${sy * 0.3 + 3.2}px 0 #f1f5f9,
      ${sx * 0.4 + 1.6}px ${sy * 0.4 + 4.2}px 0 #e2e8f0,
      ${sx * 0.5 + 2.0}px ${sy * 0.5 + 5.2}px 0 #cbd5e1,
      ${sx * 0.6 + 2.4}px ${sy * 0.6 + 6.2}px 0 #94a3b8,
      ${sx * 0.7 + 2.8}px ${sy * 0.7 + 7.2}px 0 #64748b,
      ${sx * 0.8 + 3.2}px ${sy * 0.8 + 8.2}px 0 #475569,
      ${sx * 0.9 + 3.6}px ${sy * 0.9 + 9.2}px 0 #334155,
      ${sx * 1.0 + 4.0}px ${sy * 1.0 + 10.2}px 0 #1e293b,
      ${sx * 1.1 + 4.4}px ${sy * 1.1 + 11.2}px 0 #0f172a,
      ${sx * 1.2 + 4.8}px ${sy * 1.2 + 12.2}px 0 #050b14,
      ${sx * 1.3 + 5.2}px ${sy * 1.3 + 13.2}px 0 #000000,
      ${sx * 1.4 + 5.6}px ${sy * 1.4 + 14.2}px 0 #000000,
      ${sx * 1.5 + 6.0}px ${sy * 1.5 + 15.2}px 0 #000000,
      0 18px 32px rgba(0, 0, 0, 0.98),
      0 32px 65px rgba(0, 0, 0, 0.92),
      0 0 35px rgba(255, 255, 255, 0.25)
    `;
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none perspective-[1200px] flex flex-col items-center justify-center ${className}`}
    >
      {/* Subtle depth ambient backlight directly behind typography */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
        style={{
          transform: `rotateX(${rot.rx * 0.2}deg) rotateY(${rot.ry * 0.2}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="w-[85%] h-[75%] bg-radial from-white/[0.10] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main 3D Title Stage */}
      <motion.div
        style={{
          transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center"
      >
        {/* LINE 1: TECH HABBA (Official Bold 3D Extruded Block Typography) */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transformStyle: 'preserve-3d',
            textShadow: getOfficial3DShadow(),
            fontFamily: "'Outfit', 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
            fontWeight: 900,
          }}
          className="
            tracking-[-0.02em] leading-none select-none text-white uppercase
            text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem]
            filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)]
          "
        >
          {line1}
        </motion.div>

        {/* LINE 2: 2K26 (Official Bold 3D Extruded Block Typography) */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.15,
          }}
          style={{
            transformStyle: 'preserve-3d',
            textShadow: getOfficial3DShadow(),
            fontFamily: "'Outfit', 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
            fontWeight: 900,
          }}
          className="
            tracking-[0.04em] leading-none select-none text-white uppercase
            text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem]
            mt-2 sm:mt-4
            filter drop-shadow-[0_14px_32px_rgba(0,0,0,0.98)]
          "
        >
          {line2}
        </motion.div>

        {/* Realistic 3D Ground Contact Shadow */}
        <div
          className="w-2/3 h-4 mt-6 bg-white/10 rounded-full blur-md opacity-30 mx-auto pointer-events-none"
          style={{
            transform: `rotateX(85deg) translateZ(-30px) scale(${1 + Math.abs(rot.ry) * 0.02})`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero3DTitle;


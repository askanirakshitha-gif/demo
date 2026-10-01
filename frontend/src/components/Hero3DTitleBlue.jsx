import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero3DTitleBlue - Premium Futuristic 3D Extruded Chrome/Silver Typography with Electric Blue Rim Lighting
 * - Main Face: Pure Bright White (#FFFFFF) & Metallic Silver (#E5E7EB)
 * - Beveled Extrusion: Layered Silver-Blue (#B8C7DC) with Electric Blue (#3B82F6) and Neon Blue (#60A5FA) edge reflections
 * - Deep Extrusion Shadows: Shading into deep navy (#0D1630) and contact occlusion (#050B18)
 * - Real-time 3D parallax on mouse & touch movements with dynamic directional lighting
 * - Ambient blue neon backlight and realistic 3D floor reflection
 */
const Hero3DTitleBlue = ({
  line1 = 'TECH HABBA',
  line2 = '2026',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 5 });

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
        rx: -currentY * 14,
        ry: currentX * 18,
      });

      setShadowOffset({
        x: -currentX * 6,
        y: Math.max(3, -currentY * 5 + 4),
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

  // 12-Layer Chrome Extrusion with Electric Blue Rim Bevels
  const getChrome3DShadow = (isAccent = false) => {
    const sx = shadowOffset.x;
    const sy = shadowOffset.y;

    if (isAccent) {
      return `
        ${sx * 0.08}px ${sy * 0.08 + 1}px 0 #ffffff,
        ${sx * 0.16}px ${sy * 0.16 + 2}px 0 #60a5fa,
        ${sx * 0.25}px ${sy * 0.25 + 3}px 0 #3b82f6,
        ${sx * 0.36}px ${sy * 0.36 + 4}px 0 #e5e7eb,
        ${sx * 0.48}px ${sy * 0.48 + 5}px 0 #b8c7dc,
        ${sx * 0.62}px ${sy * 0.62 + 6}px 0 #93c5fd,
        ${sx * 0.78}px ${sy * 0.78 + 7}px 0 #2563eb,
        ${sx * 0.95}px ${sy * 0.95 + 8}px 0 #1d4ed8,
        ${sx * 1.15}px ${sy * 1.15 + 9}px 0 #1e3a8a,
        ${sx * 1.35}px ${sy * 1.35 + 10}px 0 #0f172a,
        ${sx * 1.55}px ${sy * 1.55 + 11}px 0 #0d1630,
        ${sx * 1.75}px ${sy * 1.75 + 12}px 0 #050b18,
        0 18px 36px rgba(5, 11, 24, 0.98),
        0 30px 65px rgba(59, 130, 246, 0.35),
        0 0 45px rgba(96, 165, 250, 0.45)
      `;
    }

    return `
      ${sx * 0.08}px ${sy * 0.08 + 1}px 0 #ffffff,
      ${sx * 0.16}px ${sy * 0.16 + 2}px 0 #f3f4f6,
      ${sx * 0.25}px ${sy * 0.25 + 3}px 0 #e5e7eb,
      ${sx * 0.36}px ${sy * 0.36 + 4}px 0 #93c5fd,
      ${sx * 0.48}px ${sy * 0.48 + 5}px 0 #60a5fa,
      ${sx * 0.62}px ${sy * 0.62 + 6}px 0 #3b82f6,
      ${sx * 0.78}px ${sy * 0.78 + 7}px 0 #b8c7dc,
      ${sx * 0.95}px ${sy * 0.95 + 8}px 0 #64748b,
      ${sx * 1.15}px ${sy * 1.15 + 9}px 0 #334155,
      ${sx * 1.35}px ${sy * 1.35 + 10}px 0 #1e293b,
      ${sx * 1.55}px ${sy * 1.55 + 11}px 0 #0d1630,
      ${sx * 1.75}px ${sy * 1.75 + 12}px 0 #050b18,
      0 18px 36px rgba(5, 11, 24, 0.98),
      0 32px 64px rgba(5, 11, 24, 0.92),
      0 0 45px rgba(96, 165, 250, 0.35)
    `;
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none perspective-[1200px] flex flex-col items-center justify-center ${className}`}
    >
      {/* Ambient Blue Neon Backlight Aura */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
        style={{
          transform: `rotateX(${rot.rx * 0.3}deg) rotateY(${rot.ry * 0.3}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="w-[85%] h-[75%] bg-radial from-blue-500/[0.18] via-blue-600/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main 3D Chrome Title Stage */}
      <motion.div
        style={{
          transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center font-display"
      >
        {/* LINE 1: TECH HABBA (Extruded Chrome with Electric Blue Rim Bevels) */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transformStyle: 'preserve-3d',
            textShadow: getChrome3DShadow(false),
          }}
          className="
            font-black tracking-tighter leading-none select-none text-white
            text-5xl sm:text-7xl md:text-8xl lg:text-9xl
            filter drop-shadow-[0_12px_28px_rgba(5,11,24,0.95)]
          "
        >
          {line1}
        </motion.div>

        {/* LINE 2: 2026 (Extruded Highlight with Bright Blue Neon Edge Flare) */}
        <motion.div
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          style={{
            transformStyle: 'preserve-3d',
            textShadow: getChrome3DShadow(true),
          }}
          className="
            font-black tracking-tight leading-none select-none text-white
            text-5xl sm:text-7xl md:text-8xl lg:text-9xl
            mt-1 sm:mt-2
            filter drop-shadow-[0_14px_32px_rgba(5,11,24,0.95)]
          "
        >
          {line2}
        </motion.div>

        {/* Realistic Floor Reflection & Soft Blue Shadow */}
        <div
          className="w-3/5 h-3 mt-4 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent rounded-full blur-sm opacity-60 mx-auto pointer-events-none"
          style={{
            transform: `rotateX(85deg) translateZ(-25px) scale(${1 + Math.abs(rot.ry) * 0.02})`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero3DTitleBlue;

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero3DTitle - Pure Code Thick Layered 3D Typography for TECH HABBA 2K26
 * - Heavy, thick sculpted 3D layered letterforms (Pure text, NO picture/image)
 * - Multi-slice depth extrusion gradient from chrome/white to deep obsidian
 * - Dynamic mouse & gyro parallax with responsive directional light offset
 * - Zero square boxes, pure continuous 3D typographic sculpture
 * - 100% Black & White / Monochromatic theme preservation
 */
const Hero3DTitle = ({
  line1 = 'TECH HABBA',
  line2 = '2K26',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 8 });

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
        rx: -currentY * 15,
        ry: currentX * 18,
      });

      // Directional extrusion depth & light offset
      setShadowOffset({
        x: -currentX * 8,
        y: Math.max(5, -currentY * 6 + 6),
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

  // Generates rich, thick, multi-layered 3D text extrusion
  const getThickLayered3DShadow = (isAccent = false) => {
    const sx = shadowOffset.x;
    const sy = shadowOffset.y;

    if (isAccent) {
      // Bold highlight extrusion for 2K26
      return `
        0 1px 0 #ffffff,
        ${sx * 0.05}px ${sy * 0.05 + 1}px 0 #f8fafc,
        ${sx * 0.10}px ${sy * 0.10 + 2}px 0 #f1f5f9,
        ${sx * 0.16}px ${sy * 0.16 + 3}px 0 #e2e8f0,
        ${sx * 0.23}px ${sy * 0.23 + 4}px 0 #cbd5e1,
        ${sx * 0.31}px ${sy * 0.31 + 5}px 0 #94a3b8,
        ${sx * 0.40}px ${sy * 0.40 + 6}px 0 #64748b,
        ${sx * 0.50}px ${sy * 0.50 + 7}px 0 #475569,
        ${sx * 0.62}px ${sy * 0.62 + 8}px 0 #334155,
        ${sx * 0.75}px ${sy * 0.75 + 9}px 0 #1e293b,
        ${sx * 0.90}px ${sy * 0.90 + 10}px 0 #0f172a,
        ${sx * 1.06}px ${sy * 1.06 + 12}px 0 #020617,
        ${sx * 1.25}px ${sy * 1.25 + 14}px 0 #000000,
        ${sx * 1.45}px ${sy * 1.45 + 16}px 0 #000000,
        0 20px 40px rgba(0, 0, 0, 0.98),
        0 35px 70px rgba(0, 0, 0, 0.95),
        0 0 50px rgba(255, 255, 255, 0.35)
      `;
    }

    // Heavy layered extrusion for TECH HABBA
    return `
      0 1px 0 #ffffff,
      ${sx * 0.05}px ${sy * 0.05 + 1}px 0 #fafafa,
      ${sx * 0.10}px ${sy * 0.10 + 2}px 0 #f4f4f5,
      ${sx * 0.16}px ${sy * 0.16 + 3}px 0 #e4e4e7,
      ${sx * 0.23}px ${sy * 0.23 + 4}px 0 #d4d4d8,
      ${sx * 0.31}px ${sy * 0.31 + 5}px 0 #a1a1aa,
      ${sx * 0.40}px ${sy * 0.40 + 6}px 0 #71717a,
      ${sx * 0.50}px ${sy * 0.50 + 7}px 0 #52525b,
      ${sx * 0.62}px ${sy * 0.62 + 8}px 0 #3f3f46,
      ${sx * 0.75}px ${sy * 0.75 + 9}px 0 #27272a,
      ${sx * 0.90}px ${sy * 0.90 + 10}px 0 #18181b,
      ${sx * 1.06}px ${sy * 1.06 + 12}px 0 #09090b,
      ${sx * 1.25}px ${sy * 1.25 + 14}px 0 #000000,
      ${sx * 1.45}px ${sy * 1.45 + 16}px 0 #000000,
      0 20px 40px rgba(0, 0, 0, 0.98),
      0 35px 70px rgba(0, 0, 0, 0.95),
      0 0 45px rgba(255, 255, 255, 0.25)
    `;
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none perspective-[1200px] flex flex-col items-center justify-center ${className}`}
    >
      {/* Ambient Depth Glow directly behind typography */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
        style={{
          transform: `rotateX(${rot.rx * 0.3}deg) rotateY(${rot.ry * 0.3}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="w-[90%] h-[80%] bg-radial from-white/[0.12] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main 3D Title Stage */}
      <motion.div
        style={{
          transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center font-display"
      >
        {/* LINE 1: TECH HABBA (Thick Layered 3D Extruded Typography) */}
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
            textShadow: getThickLayered3DShadow(false),
          }}
          className="
            font-black tracking-tight leading-none select-none text-white
            text-5xl sm:text-7xl md:text-8xl lg:text-9xl
            filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]
          "
        >
          {line1}
        </motion.div>

        {/* LINE 2: 2K26 (Thick Layered 3D Extruded Typography) */}
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
            textShadow: getThickLayered3DShadow(true),
          }}
          className="
            font-black tracking-wider leading-none select-none text-white
            text-5xl sm:text-7xl md:text-8xl lg:text-9xl
            mt-2 sm:mt-3
            filter drop-shadow-[0_14px_35px_rgba(0,0,0,0.95)]
          "
        >
          {line2}
        </motion.div>

        {/* Thick 3D Floor Contact Shadow */}
        <div
          className="w-3/4 h-4 mt-6 bg-white/10 rounded-full blur-md opacity-35 mx-auto pointer-events-none"
          style={{
            transform: `rotateX(85deg) translateZ(-35px) scale(${1 + Math.abs(rot.ry) * 0.03})`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero3DTitle;

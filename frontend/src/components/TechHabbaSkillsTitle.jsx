import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * TechHabbaSkillsTitle - Recreates the exact retro-futuristic "SKILLS" design from Photo 2:
 * 1. Stepped 5-band horizontal grayscale gradient fill (0-20% #dedede, 20-40% #b8b8b8, 40-60% #8e8e8e, 60-80% #6c6c6c, 80-100% #484848)
 * 2. Dual parallel wireframe chassis offsets (dx=4px/dy=8px & dx=8px/dy=16px) trailing behind letters
 * 3. Dropping schematic wireframe traces below each letter baseline
 * 4. Interactive 3D tilt & parallax on mouse and finger touch
 * 5. Full responsiveness with crisp geometric Silkscreen / Orbitron monospace typography
 */
const TechHabbaSkillsTitle = ({
  line1 = 'TECH HABBA',
  line2 = '2K26',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const [wireOffset, setWireOffset] = useState({ x: 5, y: 10 });
  const [isHovered, setIsHovered] = useState(false);

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
        rx: -currentY * 12,
        ry: currentX * 16,
      });

      // Parallax offset for the trailing wireframe chassis
      setWireOffset({
        x: Math.max(2, 5 + currentX * 6),
        y: Math.max(4, 10 + currentY * 6),
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

  const ox1 = wireOffset.x * 0.5;
  const oy1 = wireOffset.y * 0.5;
  const ox2 = wireOffset.x;
  const oy2 = wireOffset.y;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className={`relative select-none perspective-[1200px] flex flex-col items-center justify-center cursor-default ${className}`}
    >
      {/* Subtle ambient blueprint grid glow behind the letters */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
        style={{
          transform: `rotateX(${rot.rx * 0.3}deg) rotateY(${rot.ry * 0.3}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-[85%] h-[75%] bg-radial from-white/[0.08] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 3D Stage Container */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center font-pixel"
      >
        {/* ==============================================================
            LINE 1: TECH HABBA
           ============================================================== */}
        <div className="relative inline-block leading-none py-2 px-3">
          {/* Wireframe Layer 2 (Deepest offset, darker wire) */}
          <span
            aria-hidden="true"
            style={{
              transform: `translate3d(${ox2}px, ${oy2}px, -15px)`,
              WebkitTextStroke: isHovered ? '2px #52525b' : '1.75px #3f3f46',
              transition: 'transform 0.1s ease-out, -webkit-text-stroke 0.25s ease',
            }}
            className="
              absolute inset-0 select-none text-transparent pointer-events-none font-bold tracking-wider
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]
              opacity-85
            "
          >
            {line1}
          </span>

          {/* Wireframe Layer 1 (Middle offset, brighter wire) */}
          <span
            aria-hidden="true"
            style={{
              transform: `translate3d(${ox1}px, ${oy1}px, -8px)`,
              WebkitTextStroke: isHovered ? '2px #a1a1aa' : '1.75px #71717a',
              transition: 'transform 0.1s ease-out, -webkit-text-stroke 0.25s ease',
            }}
            className="
              absolute inset-0 select-none text-transparent pointer-events-none font-bold tracking-wider
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]
              opacity-95
            "
          >
            {line1}
          </span>

          {/* Stepped 5-Band Grayscale Main Face (Foreground) */}
          <h1
            className="
              relative z-10 font-bold tracking-wider select-none skills-banded-text
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]
            "
          >
            {line1}
          </h1>

          {/* Schematic Blueprint Drop Wires Below Line 1 */}
          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-6 right-6 h-3 pointer-events-none opacity-40 overflow-hidden flex justify-between"
            style={{
              transform: `translate3d(${ox1 * 0.8}px, ${oy1 * 0.8}px, -10px)`,
            }}
          >
            <div className="w-[1.5px] h-full bg-zinc-500" />
            <div className="w-[1.5px] h-full bg-zinc-600" />
            <div className="w-[1.5px] h-full bg-zinc-500" />
            <div className="w-[1.5px] h-full bg-zinc-600" />
            <div className="w-[1.5px] h-full bg-zinc-500" />
          </div>
        </div>

        {/* ==============================================================
            LINE 2: 2K26
           ============================================================== */}
        <div className="relative inline-block leading-none mt-1 sm:mt-3 py-2 px-3">
          {/* Wireframe Layer 2 (Deepest offset) */}
          <span
            aria-hidden="true"
            style={{
              transform: `translate3d(${ox2 * 1.1}px, ${oy2 * 1.1}px, -18px)`,
              WebkitTextStroke: isHovered ? '2.2px #52525b' : '1.85px #3f3f46',
              transition: 'transform 0.1s ease-out, -webkit-text-stroke 0.25s ease',
            }}
            className="
              absolute inset-0 select-none text-transparent pointer-events-none font-bold tracking-widest
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]
              opacity-85
            "
          >
            {line2}
          </span>

          {/* Wireframe Layer 1 (Middle offset) */}
          <span
            aria-hidden="true"
            style={{
              transform: `translate3d(${ox1 * 1.1}px, ${oy1 * 1.1}px, -9px)`,
              WebkitTextStroke: isHovered ? '2.2px #a1a1aa' : '1.85px #71717a',
              transition: 'transform 0.1s ease-out, -webkit-text-stroke 0.25s ease',
            }}
            className="
              absolute inset-0 select-none text-transparent pointer-events-none font-bold tracking-widest
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]
              opacity-95
            "
          >
            {line2}
          </span>

          {/* Stepped 5-Band Grayscale Main Face (Foreground) */}
          <div
            className="
              relative z-10 font-bold tracking-widest select-none skills-banded-text
              text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]
              drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]
            "
          >
            {line2}
          </div>

          {/* Schematic Blueprint Drop Rails Below Line 2 */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 left-4 right-4 h-4 pointer-events-none opacity-50 flex flex-col justify-end"
            style={{
              transform: `translate3d(${ox1}px, ${oy1}px, -12px)`,
            }}
          >
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-zinc-500/60 to-transparent" />
            <div className="w-4/5 mx-auto h-[1px] mt-1 bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
          </div>
        </div>

        {/* Soft Technical Floor Grid Glow */}
        <div
          className="w-3/5 h-3 mt-6 bg-white/[0.08] rounded-full blur-md opacity-40 mx-auto pointer-events-none"
          style={{
            transform: `rotateX(80deg) translateZ(-25px) scale(${1 + Math.abs(rot.ry) * 0.02})`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default TechHabbaSkillsTitle;

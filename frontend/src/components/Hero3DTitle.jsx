import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero3DTitle - Sharp Futuristic Geometric Techno 3D Metallic Typography
 * - Line 1: "ACHARYA" in sharp angular geometric sci-fi font with solid metallic silver finish
 * - Line 2: "TECH" in wide bold techno font with crisp 3D beveled extrusion
 * - Line 3: "HABBA 2026" in solid chrome/silver with sharp edges
 * - Crisp, solid, sharp metallic gradients with bright white upper edge highlights and dark steel lower shading
 * - Subtle thin futuristic HUD-style angular line accents (45° chamfers & side ticks)
 * - NO blur, NO cloudy halo, NO excessive glow - Razor-sharp contrast against black
 */
const Hero3DTitle = ({
  line1 = 'ACHARYA',
  line2 = 'TECH',
  line3 = 'HABBA 2026',
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
        rx: -currentY * 5,
        ry: currentX * 7,
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

  return (
    <div
      ref={containerRef}
      className={`relative select-none flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-2 cursor-default ${className}`}
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D Tilted Main HUD Vector & Typography Card */}
      <motion.div
        style={{
          transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative w-full flex flex-col items-center justify-center py-4 px-2"
      >
        {/* ==============================================================
            1. THIN FUTURISTIC HUD-STYLE ANGULAR LINE ACCENTS (SVG OVERLAY)
            ============================================================== */}
        <svg
          viewBox="0 0 760 330"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="thinHudGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="15%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="85%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
            </linearGradient>

            {/* Sharp Diamond Glint */}
            <g id="sharpGlint">
              <polygon points="0,-7 1.8,-1.8 7,0 1.8,1.8 0,7 -1.8,1.8 -7,0 -1.8,-1.8" fill="#ffffff" />
              <circle cx="0" cy="0" r="1.2" fill="#ffffff" />
            </g>
          </defs>

          {/* Top HUD Mecha Bracket */}
          <path
            d="
              M 40 45
              H 95
              L 125 15
              H 340
              L 350 22
              H 410
              L 420 15
              H 635
              L 665 45
              H 720
            "
            fill="none"
            stroke="url(#thinHudGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Left Vertical HUD Bracket */}
          <path
            d="
              M 95 45
              V 115
              L 82 127
              V 145
            "
            fill="none"
            stroke="url(#thinHudGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Right Vertical HUD Bracket */}
          <path
            d="
              M 665 45
              V 115
              L 678 127
              V 145
            "
            fill="none"
            stroke="url(#thinHudGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Middle Left Flanking Wings */}
          <path
            d="
              M 35 160 H 105
              M 50 153 H 95
              M 65 167 H 115
            "
            fill="none"
            stroke="url(#thinHudGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <polygon points="118,160 124,155 124,165" fill="#ffffff" />

          {/* Middle Right Flanking Wings */}
          <path
            d="
              M 655 160 H 725
              M 665 153 H 710
              M 645 167 H 695
            "
            fill="none"
            stroke="url(#thinHudGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <polygon points="642,160 636,155 636,165" fill="#ffffff" />

          {/* Bottom HUD Mecha Bracket */}
          <path
            d="
              M 82 175
              V 192
              L 95 205
              V 270
              L 125 300
              H 635
              L 665 270
              V 205
              L 678 192
              V 175
            "
            fill="none"
            stroke="url(#thinHudGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bottom Outer Antenna Extensions */}
          <path
            d="
              M 40 270 H 95
              M 665 270 H 720
            "
            fill="none"
            stroke="url(#thinHudGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Subtle Chamfer Vertex Glints */}
          <use href="#sharpGlint" x="125" y="15" />
          <use href="#sharpGlint" x="635" y="15" />
          <use href="#sharpGlint" x="125" y="300" />
          <use href="#sharpGlint" x="635" y="300" />
        </svg>

        {/* ==============================================================
            2. SOLID 3D METALLIC CHROME TYPOGRAPHY (3-TIER ARRANGEMENT)
            ============================================================== */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-2 px-6 leading-none">
          
          {/* LINE 1: ACHARYA (Sharp Techno Font + Solid Chrome Bevel) */}
          <h1
            style={{
              fontFamily: "'Chakra Petch', 'Orbitron', 'Oxanium', sans-serif",
              fontWeight: 800,
              background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 16%, #cbd5e1 32%, #ffffff 48%, #94a3b8 52%, #64748b 70%, #334155 86%, #1e293b 94%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.55)',
              textShadow: '0 1px 0 #ffffff, 0 2px 0 #cbd5e1, 0 3px 0 #94a3b8, 0 4px 0 #64748b, 0 5px 0 #475569, 0 6px 0 #334155, 0 7px 0 #1e293b, 0 8px 0 #0f172a, 0 12px 24px rgba(0, 0, 0, 0.98)',
            }}
            className="
              uppercase select-none leading-[0.92] tracking-[0.08em]
              text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem]
              transition-transform duration-150
            "
          >
            {line1}
          </h1>

          {/* LINE 2: TECH (Wide Bold 3D Metallic Chrome) */}
          <h2
            style={{
              fontFamily: "'Chakra Petch', 'Orbitron', 'Oxanium', sans-serif",
              fontWeight: 800,
              background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 16%, #e2e8f0 32%, #ffffff 48%, #94a3b8 52%, #64748b 70%, #334155 86%, #1e293b 94%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '1.2px rgba(255, 255, 255, 0.6)',
              textShadow: '0 1px 0 #ffffff, 0 2px 0 #cbd5e1, 0 3px 0 #94a3b8, 0 4px 0 #64748b, 0 5px 0 #475569, 0 6px 0 #334155, 0 7px 0 #1e293b, 0 8px 0 #0f172a, 0 14px 28px rgba(0, 0, 0, 0.98)',
            }}
            className="
              uppercase select-none leading-[0.92] tracking-[0.14em] mt-1 sm:mt-1.5
              text-4xl sm:text-6xl md:text-7xl lg:text-[5.6rem]
              transition-transform duration-150
            "
          >
            {line2}
          </h2>

          {/* LINE 3: HABBA 2026 (Sharp Techno Chrome) */}
          <h3
            style={{
              fontFamily: "'Chakra Petch', 'Orbitron', 'Oxanium', sans-serif",
              fontWeight: 800,
              background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 16%, #cbd5e1 32%, #ffffff 48%, #94a3b8 52%, #64748b 70%, #334155 86%, #1e293b 94%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.55)',
              textShadow: '0 1px 0 #ffffff, 0 2px 0 #cbd5e1, 0 3px 0 #94a3b8, 0 4px 0 #64748b, 0 5px 0 #475569, 0 6px 0 #334155, 0 7px 0 #1e293b, 0 8px 0 #0f172a, 0 12px 24px rgba(0, 0, 0, 0.98)',
            }}
            className="
              uppercase select-none leading-[0.92] tracking-[0.08em] mt-1 sm:mt-1.5
              text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem]
              transition-transform duration-150
            "
          >
            {line3}
          </h3>

        </div>
      </motion.div>
    </div>
  );
};

export default Hero3DTitle;

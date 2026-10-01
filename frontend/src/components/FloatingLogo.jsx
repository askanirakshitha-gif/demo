import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * 3D Bloated Material Floating Logo
 * - Razor Sharp (Zero Blurriness)
 * - Puffy Volumetric Bloated Cushion Curves
 * - Dynamic Mouse Tilt & Specular Light Physics
 */
const FloatingLogo = ({ size = 64, className = '' }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.4);
    setRotateY(x * 0.4);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none perspective-[900px] ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{
          y: [0, -7, 0],
          scale: isHovered ? 1.12 : [1, 1.05, 1], // Bloating / breathing inflation
        }}
        transition={{
          y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
          scale: isHovered
            ? { duration: 0.25 }
            : { duration: 3.6, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s ease-out',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Crisp Volumetric 3D Emblem Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* 3D Bloated Cushion Radial Gradient */}
              <radialGradient id="bloatGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#f4f4f5" />
                <stop offset="75%" stopColor="#d4d4d8" />
                <stop offset="100%" stopColor="#71717a" />
              </radialGradient>

              {/* Top Specular Rim Lighting */}
              <linearGradient id="sharpRim" x1="20%" y1="10%" x2="80%" y2="90%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="60%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#71717a" stopOpacity="0.2" />
              </linearGradient>

              {/* Crisp Embossed Bevel */}
              <linearGradient id="metalBevel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#a1a1aa" />
                <stop offset="100%" stopColor="#27272a" />
              </linearGradient>
            </defs>

            {/* 1. Main Bloated Outer Torus Ring with Slit Openings */}
            <path
              d="
                M 50 11
                A 39 39 0 1 1 50 89
                A 39 39 0 0 1 11 50
                C 11 48.8 11 48.2 11.05 47.5
                L 26.5 47.5
                C 26.5 48.3 26.5 49.1 26.5 50
                A 23.5 23.5 0 1 0 50 26.5
                A 23.5 23.5 0 0 0 26.5 50
                C 26.5 50.9 26.5 51.7 26.5 52.5
                L 11.05 52.5
                C 11 51.8 11 51.2 11 50
                A 39 39 0 0 1 50 11
                Z
              "
              fill="url(#bloatGrad)"
              stroke="url(#sharpRim)"
              strokeWidth="0.8"
            />

            {/* Bloated Tubular Crest Highlight along the center ring */}
            <path
              d="
                M 50 18
                A 32 32 0 1 1 50 82
                A 32 32 0 0 1 18 50
              "
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />

            {/* Left Horizontal Slit Separation Crisp Trims */}
            <path
              d="M 11 42.5 L 26.5 42.5 M 11 57.5 L 26.5 57.5"
              stroke="#000000"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M 11 42.5 L 26.5 42.5 M 11 57.5 L 26.5 57.5"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            {/* 2. Bloated Slanted Parallel Bars (45-degree angle Inflated Capsules) */}
            <path
              d="M 36 64 L 62 38"
              stroke="url(#metalBevel)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 36 64 L 62 38"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M 44 72 L 70 46"
              stroke="url(#metalBevel)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 44 72 L 70 46"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* 3. Top-Right Outer Speed Lines */}
            <path
              d="M 75 25 L 89 11"
              stroke="url(#bloatGrad)"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <path
              d="M 75 25 L 89 11"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <path
              d="M 81 31 L 93 19"
              stroke="url(#bloatGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M 81 31 L 93 19"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* 4. Bottom-Left Outer Speed Lines */}
            <path
              d="M 25 75 L 11 89"
              stroke="url(#bloatGrad)"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <path
              d="M 25 75 L 11 89"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <path
              d="M 19 81 L 7 93"
              stroke="url(#bloatGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M 19 81 L 7 93"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* 5. 3D Bloated Satellite Spheres with Crisp Glints */}
            <circle cx="15" cy="23" r="3.6" fill="url(#bloatGrad)" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="14" cy="22" r="1.2" fill="#ffffff" />

            <circle cx="87" cy="75" r="3.2" fill="url(#bloatGrad)" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="86" cy="74" r="1" fill="#ffffff" />

            <circle cx="28" cy="86" r="2.2" fill="url(#bloatGrad)" stroke="#ffffff" strokeWidth="0.6" />
            <circle cx="79" cy="19" r="1.8" fill="#ffffff" />
          </svg>

        </div>
      </motion.div>
    </div>
  );
};

export default FloatingLogo;

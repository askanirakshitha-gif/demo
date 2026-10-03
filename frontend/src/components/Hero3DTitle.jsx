import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero3DTitle - Acharya Tech Habba 2026 Cyber HUD Chrome Metallic Typography & 3D Gyroscope
 * Recreates the complete central visual masterpiece matching the reference screenshot:
 * 1. Futuristic Cyberpunk Metallic Chrome Text (ACHARYA / TECH / HABBA 2026)
 * 2. Precision HUD Mecha Frame / Brackets with 45° Chamfers, Notches, and Antenna Wings
 * 3. 3D Dark Metallic Gyroscope Planetary Ring & Floating Satellite Cyber Emblems
 * 4. Specular Diamond Star Flares & Anamorphic Horizontal Laser Glints
 * 5. Cyan-Ice Glowing Outlines and Ambient Tech Lighting
 * 6. Interactive 3D Parallax Tilt on Mouse & Touch
 */
const Hero3DTitle = ({
  line1 = 'ACHARYA',
  line2 = 'TECH',
  line3 = 'HABBA 2026',
  className = '',
}) => {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
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
        rx: -currentY * 6,
        ry: currentX * 9,
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative select-none flex flex-col items-center justify-center w-full max-w-[840px] mx-auto px-2 sm:px-4 cursor-default ${className}`}
      style={{
        perspective: '1200px',
      }}
    >
      {/* Soft Ambient Radial Backlight Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[90%] h-[80%] bg-gradient-to-r from-cyan-500/[0.08] via-white/[0.12] to-cyan-500/[0.08] rounded-full blur-3xl transform scale-110" />
      </div>

      {/* 3D Tilted Main HUD Vector Card */}
      <motion.div
        style={{
          transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative w-full flex flex-col items-center justify-center"
      >
        {/* SVG Cyber HUD Chassis, Chrome Typography & 3D Gyroscope Container */}
        <svg
          viewBox="0 0 860 520"
          className="w-full h-auto max-w-full overflow-visible drop-shadow-[0_16px_50px_rgba(0,0,0,0.98)]"
          style={{ filter: 'drop-shadow(0 0 35px rgba(0,0,0,0.9))' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* 1. Master Metallic Chrome Fill Gradient */}
            <linearGradient id="cyberChromeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="12%" stopColor="#f8fafc" stopOpacity="1" />
              <stop offset="28%" stopColor="#cbd5e1" stopOpacity="1" />
              <stop offset="46%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#e2e8f0" stopOpacity="1" />
              <stop offset="53%" stopColor="#94a3b8" stopOpacity="1" />
              <stop offset="68%" stopColor="#475569" stopOpacity="1" />
              <stop offset="84%" stopColor="#1e293b" stopOpacity="1" />
              <stop offset="94%" stopColor="#334155" stopOpacity="1" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="1" />
            </linearGradient>

            {/* 2. Chrome Bevel Stroke Gradient */}
            <linearGradient id="cyberStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#cbd5e1" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="70%" stopColor="#475569" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.95" />
            </linearGradient>

            {/* 3. Cyan/Ice-White HUD Frame Glowing Gradient */}
            <linearGradient id="cyberHudLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="15%" stopColor="#e0f2fe" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="85%" stopColor="#e0f2fe" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>

            {/* 4. Horizontal Anamorphic Flare Streak Gradient */}
            <linearGradient id="cyberFlareStreakGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>

            {/* 5. 3D Dark Metallic Gyroscope Ring Gradients */}
            <radialGradient id="gyroRingGrad" cx="50%" cy="50%" r="50%">
              <stop offset="40%" stopColor="#090d16" stopOpacity="0.95" />
              <stop offset="68%" stopColor="#1e293b" stopOpacity="0.9" />
              <stop offset="82%" stopColor="#334155" stopOpacity="0.8" />
              <stop offset="92%" stopColor="#64748b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.9" />
            </radialGradient>

            <linearGradient id="gyroBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            {/* 6. Radial Glow for Star Flares */}
            <radialGradient id="cyberStarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>

            {/* 7. High-Tech Glow Filters */}
            <filter id="cyberHudGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="cyberFlareBloom" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Reusable 4-Point Specular Star Flare */}
            <g id="cyberStarFlare">
              {/* Radial Center Halo */}
              <circle cx="0" cy="0" r="15" fill="url(#cyberStarGlow)" />
              {/* Horizontal Laser Flare Streak */}
              <rect x="-50" y="-1.5" width="100" height="3" fill="url(#cyberFlareStreakGrad)" />
              {/* Vertical Flare Streak */}
              <rect x="-1" y="-24" width="2" height="48" fill="url(#cyberFlareStreakGrad)" />
              {/* 4-Point Diamond Spark */}
              <polygon points="0,-18 3.5,-3.5 18,0 3.5,3.5 0,18 -3.5,3.5 -18,0 -3.5,-3.5" fill="#ffffff" />
              {/* Core Hotspot */}
              <circle cx="0" cy="0" r="2.8" fill="#ffffff" />
            </g>
          </defs>

          {/* ==============================================================
              LAYER 1: BACKGROUND AMBIENT HUD ACCENTS & SCAN BEAMS
              ============================================================== */}
          <g opacity="0.65">
            {/* Center horizontal tech guideline passing behind TECH */}
            <line x1="50" y1="200" x2="810" y2="200" stroke="url(#cyberHudLineGrad)" strokeWidth="1" strokeDasharray="6 4" opacity="0.35" />
            {/* Subtle matrix dots aligned with HUD vertices */}
            <circle cx="85" cy="50" r="1.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="775" cy="50" r="1.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="85" cy="355" r="1.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="775" cy="355" r="1.5" fill="#38bdf8" opacity="0.6" />
          </g>

          {/* ==============================================================
              LAYER 2: TOP HUD MECHA BRACKET (CHAMFERED CORNERS + NOTCH TICKS)
              ============================================================== */}
          <g filter="url(#cyberHudGlow)">
            {/* Top Frame Path:
                Left antenna -> 45 deg chamfer down to left border -> top horizontal border with center notch -> 45 deg chamfer -> right antenna */}
            <path
              d="
                M 70 72
                H 120
                L 158 35
                H 390
                L 400 44
                H 460
                L 470 35
                H 702
                L 740 72
                H 790
              "
              fill="none"
              stroke="url(#cyberHudLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner Parallel Thin Accent Line */}
            <path
              d="
                M 135 72
                L 168 43
                H 380
                M 480 43
                H 692
                L 725 72
              "
              fill="none"
              stroke="#e0f2fe"
              strokeWidth="1"
              strokeOpacity="0.4"
            />

            {/* Left Vertical HUD Bracket */}
            <path
              d="
                M 120 72
                V 148
                L 106 160
                V 180
              "
              fill="none"
              stroke="url(#cyberHudLineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Right Vertical HUD Bracket */}
            <path
              d="
                M 740 72
                V 148
                L 754 160
                V 180
              "
              fill="none"
              stroke="url(#cyberHudLineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Top Chamfer Corner Vertex Glow Dots */}
            <circle cx="158" cy="35" r="2.5" fill="#ffffff" />
            <circle cx="702" cy="35" r="2.5" fill="#ffffff" />
            <circle cx="120" cy="72" r="2" fill="#38bdf8" />
            <circle cx="740" cy="72" r="2" fill="#38bdf8" />
          </g>

          {/* ==============================================================
              LAYER 3: MIDDLE MECHA FLANKING WINGS (BESIDE "TECH")
              ============================================================== */}
          <g filter="url(#cyberHudGlow)">
            {/* Left Flanking Tech Accents */}
            <path
              d="
                M 65 200 H 140
                M 80 192 H 130
                M 95 208 H 150
              "
              fill="none"
              stroke="url(#cyberHudLineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Left Bracket Tick */}
            <polygon points="152,200 160,194 160,206" fill="#ffffff" />

            {/* Right Flanking Tech Accents */}
            <path
              d="
                M 720 200 H 795
                M 730 192 H 780
                M 710 208 H 765
              "
              fill="none"
              stroke="url(#cyberHudLineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Right Bracket Tick */}
            <polygon points="708,200 700,194 700,206" fill="#ffffff" />
          </g>

          {/* ==============================================================
              LAYER 4: BOTTOM HUD MECHA BRACKET (WRAPPING "HABBA 2026")
              ============================================================== */}
          <g filter="url(#cyberHudGlow)">
            {/* Left Lower Segment & Bottom Box */}
            <path
              d="
                M 106 220
                V 240
                L 120 254
                V 320
                L 158 358
                H 702
                L 740 320
                V 254
                L 754 240
                V 220
              "
              fill="none"
              stroke="url(#cyberHudLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Bottom Outer Antenna Extensions */}
            <path
              d="
                M 70 320 H 120
                M 740 320 H 790
              "
              fill="none"
              stroke="url(#cyberHudLineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Inner Bottom Thin Accent Line */}
            <path
              d="
                M 168 350
                H 692
              "
              fill="none"
              stroke="#e0f2fe"
              strokeWidth="1"
              strokeOpacity="0.35"
            />

            {/* Bottom Chamfer Corner Vertex Glow Dots */}
            <circle cx="158" cy="358" r="2.5" fill="#ffffff" />
            <circle cx="702" cy="358" r="2.5" fill="#ffffff" />
            <circle cx="120" cy="320" r="2" fill="#38bdf8" />
            <circle cx="740" cy="320" r="2" fill="#38bdf8" />
          </g>

          {/* ==============================================================
              LAYER 5: MAIN 3-TIER METALLIC CHROME TYPOGRAPHY
              ============================================================== */}

          {/* 3D Deep Occlusion Extrusion Layer (Cast Shadow) */}
          <g
            style={{
              fontFamily: "'Orbitron', 'Chakra Petch', 'Michroma', sans-serif",
              fontWeight: 900,
              textAnchor: 'middle',
              letterSpacing: '0.04em',
            }}
            fill="#030712"
            opacity="0.96"
            transform="translate(0, 6)"
          >
            {/* Line 1 Shadow */}
            <text x="430" y="120" fontSize="88">
              {line1}
            </text>
            {/* Line 2 Shadow */}
            <text x="430" y="222" fontSize="112" letterSpacing="0.08em">
              {line2}
            </text>
            {/* Line 3 Shadow */}
            <text x="430" y="322" fontSize="84" letterSpacing="0.06em">
              {line3}
            </text>
          </g>

          {/* Chrome Metallic Bevel Stroke Backing Layer */}
          <g
            style={{
              fontFamily: "'Orbitron', 'Chakra Petch', 'Michroma', sans-serif",
              fontWeight: 900,
              textAnchor: 'middle',
              letterSpacing: '0.04em',
            }}
            fill="none"
            stroke="url(#cyberStrokeGrad)"
            strokeWidth="3.5"
            strokeLinejoin="bevel"
            opacity="0.9"
          >
            {/* Line 1 Stroke */}
            <text x="430" y="117" fontSize="88">
              {line1}
            </text>
            {/* Line 2 Stroke */}
            <text x="430" y="219" fontSize="112" letterSpacing="0.08em">
              {line2}
            </text>
            {/* Line 3 Stroke */}
            <text x="430" y="319" fontSize="84" letterSpacing="0.06em">
              {line3}
            </text>
          </g>

          {/* Chrome Metallic Foreground Master Face */}
          <g
            style={{
              fontFamily: "'Orbitron', 'Chakra Petch', 'Michroma', sans-serif",
              fontWeight: 900,
              textAnchor: 'middle',
              letterSpacing: '0.04em',
            }}
            fill="url(#cyberChromeGrad)"
          >
            {/* LINE 1: ACHARYA */}
            <text
              x="430"
              y="117"
              fontSize="88"
              className="transition-all duration-300"
            >
              {line1}
            </text>

            {/* LINE 2: TECH */}
            <text
              x="430"
              y="219"
              fontSize="112"
              letterSpacing="0.08em"
              className="transition-all duration-300"
            >
              {line2}
            </text>

            {/* LINE 3: HABBA 2026 */}
            <text
              x="430"
              y="319"
              fontSize="84"
              letterSpacing="0.06em"
              className="transition-all duration-300"
            >
              {line3}
            </text>
          </g>

          {/* ==============================================================
              LAYER 6: SPECULAR LENS FLARES & DIAMOND STAR GLINTS
              ============================================================== */}
          <g filter="url(#cyberFlareBloom)">
            {/* Flare 1: Top left apex of first 'A' in ACHARYA */}
            <use href="#cyberStarFlare" x="195" y="72" transform="scale(0.85)" />

            {/* Flare 2: Top right apex of last 'A' in ACHARYA */}
            <use href="#cyberStarFlare" x="665" y="72" transform="scale(0.85)" />

            {/* Flare 3: Left corner of 'T' in TECH */}
            <use href="#cyberStarFlare" x="235" y="168" transform="scale(0.95)" />

            {/* Flare 4: Specular center-right ridge of 'TECH' (between E and C) */}
            <use href="#cyberStarFlare" x="510" y="190" transform="scale(1.15)" />

            {/* Flare 5: Left bottom corner of 'HABBA' */}
            <use href="#cyberStarFlare" x="210" y="280" transform="scale(0.8)" />

            {/* Flare 6: Specular vertex on '2026' */}
            <use href="#cyberStarFlare" x="650" y="280" transform="scale(0.9)" />

            {/* HUD Bracket Corner Glints */}
            <use href="#cyberStarFlare" x="158" y="35" transform="scale(0.55)" />
            <use href="#cyberStarFlare" x="702" y="35" transform="scale(0.55)" />
            <use href="#cyberStarFlare" x="158" y="358" transform="scale(0.55)" />
            <use href="#cyberStarFlare" x="702" y="358" transform="scale(0.55)" />
          </g>

          {/* ==============================================================
              LAYER 7: 3D DARK METALLIC GYROSCOPE RING & SATELLITE EMBLEMS (MATCHING SCREENSHOT)
              ============================================================== */}
          <g transform="translate(430, 440)">
            {/* Ambient Cyan Halo behind Gyroscope Ring */}
            <ellipse cx="0" cy="0" rx="140" ry="40" fill="#38bdf8" opacity="0.08" filter="url(#cyberFlareBloom)" />

            {/* 3D Outer Metallic Gyro Ring */}
            <ellipse
              cx="0"
              cy="0"
              rx="125"
              ry="36"
              fill="none"
              stroke="#1e293b"
              strokeWidth="14"
              opacity="0.9"
            />
            {/* Outer Specular Ridge */}
            <ellipse
              cx="0"
              cy="0"
              rx="132"
              ry="38"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="118"
              ry="34"
              fill="none"
              stroke="#475569"
              strokeWidth="1.5"
              opacity="0.7"
            />

            {/* Inner Dark Void Core */}
            <ellipse
              cx="0"
              cy="0"
              rx="112"
              ry="30"
              fill="#030712"
              stroke="#0f172a"
              strokeWidth="2"
            />

            {/* Inner Horizontal Parallel Metallic Bars */}
            <line x1="-55" y1="-5" x2="55" y2="-5" stroke="url(#gyroBarGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
            <line x1="-35" y1="6" x2="35" y2="6" stroke="url(#gyroBarGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />

            {/* Specular Glints on Gyroscope Rim */}
            <circle cx="-125" cy="0" r="2.5" fill="#ffffff" />
            <circle cx="125" cy="0" r="2.5" fill="#ffffff" />
            <circle cx="0" cy="-36" r="2" fill="#38bdf8" />
            <circle cx="0" cy="36" r="2" fill="#38bdf8" />

            {/* Left Floating Satellite Emblem [O] */}
            <g transform="translate(-290, -10)">
              <ellipse cx="0" cy="0" rx="16" ry="10" fill="#090d16" stroke="#475569" strokeWidth="1.8" />
              <ellipse cx="0" cy="0" rx="9" ry="5.5" fill="#030712" stroke="#64748b" strokeWidth="1.2" />
              <line x1="-28" y1="0" x2="-18" y2="0" stroke="#64748b" strokeWidth="1.5" />
              <line x1="18" y1="0" x2="28" y2="0" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="-16" cy="0" r="1.5" fill="#ffffff" />
            </g>

            {/* Right Floating Satellite Emblem [O] */}
            <g transform="translate(290, -10)">
              <ellipse cx="0" cy="0" rx="16" ry="10" fill="#090d16" stroke="#475569" strokeWidth="1.8" />
              <ellipse cx="0" cy="0" rx="9" ry="5.5" fill="#030712" stroke="#64748b" strokeWidth="1.2" />
              <line x1="-28" y1="0" x2="-18" y2="0" stroke="#64748b" strokeWidth="1.5" />
              <line x1="18" y1="0" x2="28" y2="0" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="16" cy="0" r="1.5" fill="#ffffff" />
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero3DTitle;

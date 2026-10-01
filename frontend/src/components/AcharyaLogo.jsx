import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * AcharyaLogo - Interactive Counter-Reactive 3D Emblem
 * - Synchronized in opposite phase with the background Big-O logo:
 *   When Big-O pops up, Acharya pops back (recedes/shrinks in Z-space), and vice-versa.
 * - Parallax movement in the opposite direction of mouse and Big-O.
 * - Interactive hover/proximity pop that pushes Big-O back in the background.
 */
const AcharyaLogo = ({
  size = 80,
  className = '',
}) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [transZ, setTransZ] = useState(0);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [bigOPopping, setBigOPopping] = useState(false);

  useEffect(() => {
    let animId;
    let time = 0;
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };

    // Listen to Big-O pop status from background
    const handleBigOPop = (e) => {
      setBigOPopping(e.detail?.popping || false);
    };
    window.addEventListener('bigo-pop-event', handleBigOPop);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouse.targetX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      mouse.targetY = (e.clientY / innerHeight - 0.5) * 2;
      mouse.active = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const { innerWidth, innerHeight } = window;
        mouse.targetX = (e.touches[0].clientX / innerWidth - 0.5) * 2;
        mouse.targetY = (e.touches[0].clientY / innerHeight - 0.5) * 2;
        mouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const loop = () => {
      time += 0.024;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. OPPOSITE PARALLAX & TILT:
      // When Big-O moves +X/+Y, Acharya moves -X/-Y
      const oppX = -mouse.x * 24; // opposite lateral float
      const oppY = -mouse.y * 18;
      const oppRotX = mouse.y * 16; // opposite 3D pitch
      const oppRotY = -mouse.x * 20; // opposite 3D yaw

      setOffset({ x: oppX, y: oppY });
      setRot({ rx: oppRotX, ry: oppRotY });

      // 2. COUNTER-PHASE OSCILLATION (Opposite of Big-O breathing):
      // Big-O uses Math.sin(time * 1.5). Acharya uses -Math.sin(time * 1.5)
      const counterPhase = -Math.sin(time * 1.5);
      
      // Base counter-pop scale and Z displacement
      let targetScale = 1 + counterPhase * 0.12; // shrinks when Big-O swells, swells when Big-O shrinks
      let targetZ = counterPhase * 25; // pushes back (-Z) when Big-O comes forward, pops up (+Z) when Big-O recedes

      // 3. REACTIVE OVERRIDE:
      // If Big-O is currently popped up by cursor proximity, Acharya pops back!
      if (bigOPopping) {
        targetScale *= 0.82; // pops back!
        targetZ -= 35;
      }

      // If user hovers over Acharya directly, Acharya pops up forward!
      if (isHovered) {
        targetScale = 1.25;
        targetZ = 45;
      }

      setScale((prev) => prev + (targetScale - prev) * 0.1);
      setTransZ((prev) => prev + (targetZ - prev) * 0.1);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('bigo-pop-event', handleBigOPop);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [bigOPopping, isHovered]);

  // When user hovers on Acharya, notify Big-O to pop back
  const handleMouseEnter = () => {
    setIsHovered(true);
    window.dispatchEvent(
      new CustomEvent('acharya-pop-event', { detail: { popping: true } })
    );
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    window.dispatchEvent(
      new CustomEvent('acharya-pop-event', { detail: { popping: false } })
    );
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none perspective-[800px] mb-4 ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <motion.div
        style={{
          transform: `scale(${scale}) translateZ(${transZ}px) rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex items-center justify-center"
      >
        {/* Dynamic Specular Floor Glow (brightens when popped up, fades when popped back) */}
        <div
          className="absolute -bottom-3 w-4/5 h-3 bg-white/20 rounded-full blur-md pointer-events-none transition-opacity duration-200"
          style={{
            opacity: Math.max(0.15, Math.min(0.65, (scale - 0.7) * 0.9)),
            transform: `scale(${scale * 0.9})`,
          }}
        />

        {/* Acharya Official Logo on Black Background */}
        <img
          src="/acharya-logo.png"
          alt="Acharya Institute of Technology Logo"
          className="h-20 w-auto object-contain transition-all duration-150"
          style={{
            filter: `drop-shadow(0 ${Math.max(6, 12 * scale)}px ${Math.max(12, 24 * scale)}px rgba(255,255,255,${
              isHovered ? 0.45 : scale > 1 ? 0.35 : 0.18
            }))`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default AcharyaLogo;

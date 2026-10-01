import React, { useEffect, useRef } from 'react';

/**
 * ParticleBackgroundBlue - Futuristic Deep Navy (#050B18) & Electric Blue Interactive Background
 * - Deep Navy Background (#050B18 -> #0D1630)
 * - 32px Precision Matrix Grid with subtle electric blue glow
 * - Interactive Elastic Physics Dot Gravity Matrix Canvas in silver-blue (#B8C7DC) & neon blue (#60A5FA)
 * - 3D Bloated Floating Chrome/Silver Logos with electric blue rim shaders drifting in true 3D space
 * - High-tech subtle scanlines overlay
 */
const ParticleBackgroundBlue = ({
  gridStepX = 24,
  gridStepY = 24,
  baseRadius = 1.25,
  gravityRadius = 240,
  maxPull = 12,
  damping = 0.82,
  stiffness = 0.08,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2.5);

    // Mouse Tracking with smooth spring easing
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
    };

    // Elastic Grid Points
    let gridPoints = [];

    // 3D Bloated Floating Logos
    const numLogos = Math.min(window.innerWidth < 768 ? 20 : 36, 42);
    const logos = [];

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Initialize Elastic Dot Matrix
      gridPoints = [];
      const cols = Math.ceil(width / gridStepX) + 2;
      const rows = Math.ceil(height / gridStepY) + 2;
      const offsetX = (width % gridStepX) / 2;
      const offsetY = (height % gridStepY) / 2;

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const posX = col * gridStepX + offsetX;
          const posY = row * gridStepY + offsetY;
          gridPoints.push({
            baseX: posX,
            baseY: posY,
            x: posX,
            y: posY,
            vx: 0,
            vy: 0,
            mass: 0.9 + ((col + row) % 3) * 0.15,
          });
        }
      }
    };

    setup();

    // Initialize 3D Floating Bloated Logos
    for (let i = 0; i < numLogos; i++) {
      logos.push({
        x: (Math.random() - 0.5) * width * 2.2,
        y: (Math.random() - 0.5) * height * 2.2,
        z: Math.random() * 850 + 100,
        baseSize: Math.random() * 13 + 8,
        rx: Math.random() * Math.PI * 2,
        ry: Math.random() * Math.PI * 2,
        rz: Math.random() * Math.PI * 2,
        vrx: (Math.random() - 0.5) * 0.016,
        vry: (Math.random() - 0.5) * 0.02,
        vrz: (Math.random() - 0.5) * 0.012,
        driftX: (Math.random() - 0.5) * 0.35,
        driftY: (Math.random() - 0.5) * 0.35,
        speedZ: Math.random() * 0.5 + 0.3,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 1.5 + 1.2,
        floatPhase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      setup();
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Acharya pop tracking for counter-reaction
    let acharyaPopping = false;
    const handleAcharyaPop = (e) => {
      acharyaPopping = !!e.detail?.popping;
    };
    window.addEventListener('acharya-pop-event', handleAcharyaPop);

    // =========================================================================
    // 3D CHROME / ELECTRIC BLUE LOGO SHADER
    // =========================================================================
    const renderBloatedLogo = (
      ctx,
      x,
      y,
      size,
      rx,
      ry,
      rz,
      opacity,
      bloatScale = 1.0,
      screenLightX = 0,
      screenLightY = 0
    ) => {
      if (size <= 0 || opacity <= 0.01) return;

      ctx.save();
      ctx.translate(x, y);

      const scaleX = Math.cos(ry);
      const scaleY = Math.cos(rx);
      if (Math.abs(scaleX) < 0.05 || Math.abs(scaleY) < 0.05) {
        ctx.restore();
        return;
      }

      ctx.scale(scaleX, scaleY);
      ctx.rotate(rz);
      ctx.globalAlpha = Math.max(0.12, Math.min(0.95, opacity));

      const dx = screenLightX - x;
      const dy = screenLightY - y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const lightDir = { x: dx / dist, y: dy / dist };

      const R = size;
      const r = size * 0.54;
      const tubeRadius = (R - r) / 2;
      const midRadius = (R + r) / 2;

      // 1. Inflated Torus Ring Body (Chrome with Blue Ambient Core)
      ctx.lineWidth = tubeRadius * 2 * bloatScale;
      ctx.lineCap = 'round';

      const ringGrad = ctx.createLinearGradient(
        -R * lightDir.x,
        -R * lightDir.y,
        R * lightDir.x,
        R * lightDir.y
      );
      ringGrad.addColorStop(0, '#ffffff');
      ringGrad.addColorStop(0.25, '#e5e7eb');
      ringGrad.addColorStop(0.55, '#60a5fa');
      ringGrad.addColorStop(0.8, '#1e3a8a');
      ringGrad.addColorStop(1, '#0d1630');

      ctx.strokeStyle = ringGrad;
      ctx.beginPath();
      ctx.arc(0, 0, midRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Specular Crest Ridge
      ctx.lineWidth = Math.max(0.9, tubeRadius * 0.35 * bloatScale);
      ctx.strokeStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, midRadius + tubeRadius * 0.2, 0, Math.PI * 2);
      ctx.stroke();

      // Electric Blue Rim Bevel
      ctx.lineWidth = 0.9;
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.55)';
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.stroke();

      // 2. Left Horizontal Slits (Cutouts)
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      const cutWidth = (R - r) * 1.4;
      const cutThickness = Math.max(1.6, size * 0.095 * bloatScale);
      ctx.fillRect(-R * 1.2, -size * 0.17, cutWidth, cutThickness);
      ctx.fillRect(-R * 1.2, size * 0.06, cutWidth, cutThickness);
      ctx.restore();

      // 3. Inner Slanted Parallel Bars
      const angle = -Math.PI / 4;
      const barOffset = size * 0.19;
      const barThickness = Math.max(2, size * 0.12 * bloatScale);

      const drawBar = (startRatio, endRatio, offset) => {
        const x1 = startRatio * Math.cos(angle) - offset * Math.sin(angle);
        const y1 = startRatio * Math.sin(angle) + offset * Math.cos(angle);
        const x2 = endRatio * Math.cos(angle) - offset * Math.sin(angle);
        const y2 = endRatio * Math.sin(angle) + offset * Math.cos(angle);

        ctx.lineWidth = barThickness;
        ctx.lineCap = 'round';
        ctx.strokeStyle = ringGrad;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        ctx.lineWidth = Math.max(0.8, barThickness * 0.3);
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      };

      drawBar(-size * 0.35, size * 0.45, barOffset);
      drawBar(-size * 0.15, size * 0.65, -barOffset);

      // 4. Outer Speed Lines
      ctx.lineWidth = Math.max(1.2, size * 0.08 * bloatScale);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(R * 1.15 * Math.cos(-Math.PI / 4), R * 1.15 * Math.sin(-Math.PI / 4));
      ctx.lineTo(R * 1.58 * Math.cos(-Math.PI / 4), R * 1.58 * Math.sin(-Math.PI / 4));
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-R * 1.12 * Math.cos(-Math.PI / 4), -R * 1.12 * Math.sin(-Math.PI / 4));
      ctx.lineTo(-R * 1.48 * Math.cos(-Math.PI / 4), -R * 1.48 * Math.sin(-Math.PI / 4));
      ctx.stroke();

      // 5. Bloated Satellite Orbs
      const drawOrb = (ox, oy, rad) => {
        const sphereRad = rad * bloatScale;
        const sphereGrad = ctx.createRadialGradient(
          ox - sphereRad * 0.3 * lightDir.x,
          oy - sphereRad * 0.3 * lightDir.y,
          sphereRad * 0.1,
          ox,
          oy,
          sphereRad
        );
        sphereGrad.addColorStop(0, '#ffffff');
        sphereGrad.addColorStop(0.5, '#60a5fa');
        sphereGrad.addColorStop(1, '#0d1630');

        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(ox, oy, sphereRad, 0, Math.PI * 2);
        ctx.fill();
      };

      drawOrb(-R * 1.35, -R * 0.8, Math.max(1.6, size * 0.09));
      drawOrb(R * 1.45, R * 0.75, Math.max(1.4, size * 0.08));

      ctx.restore();
    };

    // =========================================================================
    // MAIN ANIMATION LOOP
    // =========================================================================
    let time = 0;

    const render = () => {
      time += 0.016;

      if (mouse.active) {
        if (mouse.x === -9999) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.22;
          mouse.y += (mouse.targetY - mouse.y) * 0.22;
        }
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      ctx.clearRect(0, 0, width, height);

      // -----------------------------------------------------------------------
      // 1. ELASTIC DOT GRAVITY GRID (Electric Blue & Silver-Blue Bloom)
      // -----------------------------------------------------------------------
      for (let i = 0; i < gridPoints.length; i++) {
        const pt = gridPoints[i];
        let targetX = pt.baseX;
        let targetY = pt.baseY;
        let dist = 9999;

        if (mouse.active) {
          const dx = mouse.x - pt.baseX;
          const dy = mouse.y - pt.baseY;
          dist = Math.hypot(dx, dy);

          if (dist < gravityRadius && dist > 0.1) {
            const pull = Math.pow(1 - dist / gravityRadius, 2) * maxPull;
            targetX = pt.baseX + (dx / dist) * pull;
            targetY = pt.baseY + (dy / dist) * pull;
          }
        }

        const diffX = targetX - pt.x;
        const diffY = targetY - pt.y;
        pt.vx += (diffX * stiffness) / pt.mass;
        pt.vy += (diffY * stiffness) / pt.mass;
        pt.vx *= damping;
        pt.vy *= damping;
        pt.x += pt.vx;
        pt.y += pt.vy;

        let alpha = 0.16;
        let radius = baseRadius;
        let fillStyle = `rgba(184, 199, 220, ${alpha})`;

        if (dist < gravityRadius) {
          const bloom = Math.pow(1 - dist / gravityRadius, 1.2);
          alpha = 0.25 + bloom * 0.75;
          radius = baseRadius + bloom * 1.8;
          fillStyle = `rgba(96, 165, 250, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }

      // -----------------------------------------------------------------------
      // 2. 3D FLOATING BLOATED LOGO INSTANCES (WITH PARALLAX)
      // -----------------------------------------------------------------------
      const normX = mouse.active ? (mouse.x / width - 0.5) * 2 : 0;
      const normY = mouse.active ? (mouse.y / height - 0.5) * 2 : 0;

      const camTiltY = normX * 0.45;
      const camTiltX = -normY * 0.35;
      const camShiftX = normX * 120;
      const camShiftY = normY * 80;

      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = 520;

      const transformedLogos = logos.map((item) => {
        const floatBob = Math.sin(time * item.pulseSpeed + item.floatPhase) * 12;

        item.rx += item.vrx;
        item.ry += item.vry;
        item.rz += item.vrz;
        item.x += item.driftX;
        item.y += item.driftY + Math.cos(time + item.pulseOffset) * 0.2;
        item.z -= item.speedZ;

        if (item.z <= 40) {
          item.z = 950;
          item.x = (Math.random() - 0.5) * width * 2.2;
          item.y = (Math.random() - 0.5) * height * 2.2;
        }

        if (item.x < -width * 1.2) item.x = width * 1.2;
        if (item.x > width * 1.2) item.x = -width * 1.2;
        if (item.y < -height * 1.2) item.y = height * 1.2;
        if (item.y > height * 1.2) item.y = -height * 1.2;

        let relX = item.x;
        let relY = item.y + floatBob;
        let relZ = item.z;

        let rotX1 = relX * Math.cos(camTiltY) + (relZ - 500) * Math.sin(camTiltY);
        let rotZ1 = -relX * Math.sin(camTiltY) + (relZ - 500) * Math.cos(camTiltY) + 500;

        let rotY2 = relY * Math.cos(camTiltX) - (rotZ1 - 500) * Math.sin(camTiltX);
        let rotZ2 = relY * Math.sin(camTiltX) + (rotZ1 - 500) * Math.cos(camTiltX) + 500;

        rotX1 += -camShiftX;
        rotY2 += -camShiftY;

        return {
          item,
          projX: rotX1,
          projY: rotY2,
          projZ: Math.max(30, rotZ2),
        };
      });

      // -----------------------------------------------------------------------
      // 3. BACKGROUND "THE BIG O" EMBLEM (COUNTER-REACTIVE 3D POP DYNAMICS)
      // -----------------------------------------------------------------------
      const masterSize = Math.min(width, height) * (width < 768 ? 0.22 : 0.24);
      const masterCenterX = centerX - camShiftX * 0.42;
      const masterCenterY = centerY - 20 - camShiftY * 0.42;

      let bigOPopping = false;
      let cursorPop = 0;
      if (mouse.active) {
        const distToCenter = Math.hypot(mouse.x - masterCenterX, mouse.y - masterCenterY);
        if (distToCenter < 230) {
          const prox = Math.pow(1 - distToCenter / 230, 2);
          cursorPop = prox * 0.42;
          bigOPopping = true;
        }
      }

      window.dispatchEvent(
        new CustomEvent('bigo-pop-event', { detail: { popping: bigOPopping } })
      );

      const naturalBloat = 1 + 0.12 * Math.sin(time * 1.5);
      const acharyaRecede = acharyaPopping ? 0.25 : 0;

      const totalBloat = Math.max(0.65, naturalBloat + cursorPop - acharyaRecede);
      const masterOpacity = Math.max(0.14, Math.min(0.7, 0.38 + cursorPop * 0.35 - (acharyaPopping ? 0.14 : 0)));

      const masterRx = Math.sin(time * 0.3) * 0.16 + camTiltX * 1.15;
      const masterRy = Math.cos(time * 0.25) * 0.22 + camTiltY * 1.15;
      const masterRz = time * 0.035;

      renderBloatedLogo(
        ctx,
        masterCenterX,
        masterCenterY,
        masterSize,
        masterRx,
        masterRy,
        masterRz,
        masterOpacity,
        totalBloat,
        mouse.active ? mouse.x : centerX,
        mouse.active ? mouse.y : centerY
      );

      transformedLogos.forEach(({ item, projX, projY, projZ }) => {
        const k = focalLength / projZ;
        const screenX = projX * k + centerX;
        const screenY = projY * k + centerY;

        if (screenX > -120 && screenX < width + 120 && screenY > -120 && screenY < height + 120) {
          const renderedSize = Math.max(4, item.baseSize * k);
          const depthAlpha = Math.min(0.8, ((950 - projZ) / 950) * 0.8);

          const naturalBloat = 1 + 0.18 * Math.sin(time * item.pulseSpeed + item.pulseOffset);

          let cursorBloat = 1;
          if (mouse.active) {
            const distToCursor = Math.hypot(screenX - mouse.x, screenY - mouse.y);
            if (distToCursor < 180) {
              const prox = Math.pow(1 - distToCursor / 180, 2);
              cursorBloat = 1 + prox * 0.6;
            }
          }

          const totalBloat = naturalBloat * cursorBloat;
          const finalOpacity = Math.min(0.95, depthAlpha * (cursorBloat > 1 ? 1.3 : 1));

          const currentRx = item.rx + camTiltX * 0.9;
          const currentRy = item.ry + camTiltY * 0.9;
          const currentRz = item.rz;

          renderBloatedLogo(
            ctx,
            screenX,
            screenY,
            renderedSize,
            currentRx,
            currentRy,
            currentRz,
            finalOpacity,
            totalBloat,
            mouse.x,
            mouse.y
          );
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('acharya-pop-event', handleAcharyaPop);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [gridStepX, gridStepY, baseRadius, gravityRadius, maxPull, damping, stiffness]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050B18]">
      {/* 1. Deep Navy to Dark Blue-Navy Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-[#0D1630] to-[#050B18]" />

      {/* 2. Precision Matrix Grid Overlay with subtle blue ambient tint */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(180deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 3. Interactive Elastic Physics Dot Gravity Matrix + 3D Bloated Emblems */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* 4. Subtle Scanline Overlay */}
      <div className="absolute inset-0 z-10 scanline-overlay opacity-20" />
    </div>
  );
};

export default ParticleBackgroundBlue;

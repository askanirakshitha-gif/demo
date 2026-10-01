import React from 'react';

/**
 * High-definition Cyberpunk SVG QR Code visualization
 */
export const QRCodeGenerator = ({ value = 'TH26-DEMO', size = 180 }) => {
  // Deterministic pattern generator based on hash
  const getHashMatrix = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    
    const matrix = [];
    const gridSize = 21; // standard QR size
    for (let r = 0; r < gridSize; r++) {
      const row = [];
      for (let c = 0; c < gridSize; c++) {
        // Corner alignment squares (standard QR corners)
        if (
          (r < 7 && c < 7) ||
          (r < 7 && c >= gridSize - 7) ||
          (r >= gridSize - 7 && c < 7)
        ) {
          const inCornerBorder = (r === 0 || r === 6 || c === 0 || c === 6) && (r < 7 && c < 7);
          const inCornerBorderTR = (r === 0 || r === 6 || c === gridSize - 7 || c === gridSize - 1) && (r < 7 && c >= gridSize - 7);
          const inCornerBorderBL = (r === gridSize - 7 || r === gridSize - 1 || c === 0 || c === 6) && (r >= gridSize - 7 && c < 7);
          const inCornerCenter = (r >= 2 && r <= 4 && c >= 2 && c <= 4);
          const inCornerCenterTR = (r >= 2 && r <= 4 && c >= gridSize - 5 && c <= gridSize - 3);
          const inCornerCenterBL = (r >= gridSize - 5 && r <= gridSize - 3 && c >= 2 && c <= 4);
          
          if (inCornerBorder || inCornerBorderTR || inCornerBorderBL || inCornerCenter || inCornerCenterTR || inCornerCenterBL) {
            row.push(true);
          } else {
            row.push(false);
          }
        } else {
          // Pseudorandom pseudo-data bits seeded by value
          const bit = Math.abs(Math.sin((r * 31 + c * 17 + hash) % 1000)) > 0.45;
          row.push(bit);
        }
      }
      matrix.push(row);
    }
    return matrix;
  };

  const matrix = getHashMatrix(value);
  const cellSize = size / matrix.length;

  return (
    <div className="relative p-3 rounded-xl bg-white/95 border border-pink-500/50 shadow-[0_0_25px_rgba(255,42,109,0.3)] inline-block">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="qrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7928ca" />
            <stop offset="50%" stopColor="#0a0a14" />
            <stop offset="100%" stopColor="#ff2a6d" />
          </linearGradient>
        </defs>
        
        {matrix.map((row, r) =>
          row.map((cell, c) =>
            cell ? (
              <rect
                key={`${r}-${c}`}
                x={c * cellSize}
                y={r * cellSize}
                width={cellSize - 0.5}
                height={cellSize - 0.5}
                rx={1}
                fill="url(#qrGrad)"
              />
            ) : null
          )
        )}
      </svg>
      <div className="mt-2 text-center">
        <span className="text-[10px] font-mono font-bold tracking-widest text-dark-900 bg-cyan-100 px-2 py-0.5 rounded border border-cyan-300">
          {value}
        </span>
      </div>
    </div>
  );
};

export default QRCodeGenerator;

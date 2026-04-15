"use client";

import React, { useEffect, useRef, useState } from 'react';

interface CubeMatrixProps {
  size?: number;
  gridSize?: number;
  gap?: number;
  accent?: string;
}

/**
 * CORE — a 3×3×3 matrix of mini cubes forming a living structure.
 * The whole assembly auto-rotates on Y and responds to pointer X/Y
 * with smooth lerp. Each mini cube rotates on its own axis at a
 * phase-shifted cadence. A light wave sweeps through periodically.
 *
 * Pure CSS 3D transforms — no Three.js, no physics.
 */
export default function CubeMatrix({
  size = 420,
  gridSize = 3,
  gap = 0.4,
  accent = '#A3D1FF',
}: CubeMatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -22, y: -30 });
  const [time, setTime] = useState(0);
  const targetRef = useRef({ x: -22, y: -30 });
  const currentRef = useRef({ x: -22, y: -30 });
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let lastT = performance.now();
    const loop = (now: number) => {
      const dt = (now - lastT) / 1000;
      lastT = now;

      // Auto-rotate when pointer not active
      if (!pointerRef.current.active) {
        targetRef.current.y += dt * 10;
      }

      // Smooth lerp
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;
      setRotation({ ...currentRef.current });
      setTime((t) => t + dt);

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onPointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    pointerRef.current = { x, y, active: true };
    targetRef.current.x = -22 + y * 40;
    targetRef.current.y = -30 + x * 60;
  };

  const onPointerLeave = () => {
    pointerRef.current.active = false;
  };

  const cubeSize = size / (gridSize + (gridSize - 1) * gap);
  const step = cubeSize * (1 + gap);
  const offset = (step * (gridSize - 1)) / 2;

  const cubes: { x: number; y: number; z: number; phase: number; key: string }[] = [];
  for (let ix = 0; ix < gridSize; ix++) {
    for (let iy = 0; iy < gridSize; iy++) {
      for (let iz = 0; iz < gridSize; iz++) {
        const dx = ix * step - offset;
        const dy = iy * step - offset;
        const dz = iz * step - offset;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy + dz * dz);
        cubes.push({
          x: dx,
          y: dy,
          z: dz,
          phase: distFromCenter / (step * gridSize),
          key: `${ix}-${iy}-${iz}`,
        });
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{
        width: size,
        height: size,
        perspective: 1400,
        touchAction: 'none',
      }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {/* Ambient glow behind the matrix */}
      <div
        className="absolute inset-0 rounded-full blur-[90px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent}22 0%, transparent 60%)` }}
      />

      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {cubes.map((c) => {
          // Wave of light sweeping outward from center
          const wave = Math.sin(time * 1.8 - c.phase * 4);
          const glowStrength = Math.max(0, wave) * 0.6;

          // Individual cube self-rotation
          const selfRotate = time * 20 + c.phase * 90;

          return (
            <div
              key={c.key}
              className="absolute left-1/2 top-1/2"
              style={{
                width: cubeSize,
                height: cubeSize,
                marginLeft: -cubeSize / 2,
                marginTop: -cubeSize / 2,
                transformStyle: 'preserve-3d',
                transform: `translate3d(${c.x}px, ${c.y}px, ${c.z}px) rotateX(${selfRotate * 0.5}deg) rotateY(${selfRotate}deg)`,
              }}
            >
              {buildFaces(cubeSize, accent, glowStrength)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function buildFaces(cubeSize: number, accent: string, glow: number) {
  const half = cubeSize / 2;
  const faces: { transform: string }[] = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return faces.map((f, i) => (
    <div
      key={i}
      className="absolute inset-0"
      style={{
        transform: f.transform,
        background: `linear-gradient(135deg, rgba(18,22,28,0.96) 0%, rgba(10,12,15,0.96) 100%)`,
        border: `1px solid ${accent}${Math.round((0.25 + glow * 0.75) * 255)
          .toString(16)
          .padStart(2, '0')}`,
        boxShadow: glow > 0.3 ? `inset 0 0 20px ${accent}40, 0 0 25px ${accent}30` : 'none',
        backfaceVisibility: 'hidden',
      }}
    />
  ));
}

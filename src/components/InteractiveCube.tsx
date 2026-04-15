"use client";

import { useRef, useEffect, useState, useCallback } from 'react';

type CubeFace = {
  image: string;
  category?: string;
  title?: string;
};

interface InteractiveCubeProps {
  faces: CubeFace[];
  activeIndex?: number;
  size?: number;
  accent?: string;
  autoRotate?: boolean;
}

const faceRotations = [
  { x: 0, y: 0 },
  { x: 0, y: 180 },
  { x: 0, y: -90 },
  { x: 0, y: 90 },
  { x: -90, y: 0 },
  { x: 90, y: 0 },
];

export default function InteractiveCube({
  faces,
  activeIndex = 0,
  size,
  accent = '#A3D1FF',
  autoRotate = true,
}: InteractiveCubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -15, y: -25 });
  const [isDragging, setIsDragging] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const autoRotateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const targetRotation = useRef({ x: -15, y: -25 });
  const currentRotation = useRef({ x: -15, y: -25 });

  useEffect(() => {
    const animate = () => {
      const lerp = 0.08;
      currentRotation.current.x +=
        (targetRotation.current.x - currentRotation.current.x) * lerp;
      currentRotation.current.y +=
        (targetRotation.current.y - currentRotation.current.y) * lerp;
      setRotation({ ...currentRotation.current });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isDragging && !isUserInteracting) {
      const target = faceRotations[activeIndex % 6];
      const currentY = targetRotation.current.y;
      const targetY = target.y;
      const diff = (((targetY - currentY) % 360) + 540) % 360 - 180;
      targetRotation.current = {
        x: target.x,
        y: currentY + diff,
      };
    }
  }, [activeIndex, isDragging, isUserInteracting]);

  useEffect(() => {
    if (autoRotate && !isDragging && !isUserInteracting) {
      const interval = setInterval(() => {
        targetRotation.current = {
          x: targetRotation.current.x,
          y: targetRotation.current.y + 0.3,
        };
      }, 50);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isDragging, isUserInteracting]);

  const resetInteractionTimer = useCallback(() => {
    if (autoRotateTimer.current) clearTimeout(autoRotateTimer.current);
    autoRotateTimer.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 4000);
  }, []);

  useEffect(() => {
    return () => {
      if (autoRotateTimer.current) clearTimeout(autoRotateTimer.current);
    };
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    setIsUserInteracting(true);
    lastPointer.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastPointer.current.x;
      const deltaY = e.clientY - lastPointer.current.y;
      targetRotation.current = {
        x: targetRotation.current.x - deltaY * 0.4,
        y: targetRotation.current.y + deltaX * 0.4,
      };
      lastPointer.current = { x: e.clientX, y: e.clientY };
    },
    [isDragging],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    resetInteractionTimer();
  }, [resetInteractionTimer]);

  const [cubeSize, setCubeSize] = useState(size || 320);
  useEffect(() => {
    if (size) {
      setCubeSize(size);
      return;
    }
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 640) setCubeSize(Math.min(260, Math.floor(w * 0.7)));
      else if (w < 1024) setCubeSize(300);
      else setCubeSize(360);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [size]);

  const faceDistance = cubeSize / 2;

  const padded = [...faces];
  while (padded.length < 6) {
    padded.push(faces[padded.length % Math.max(faces.length, 1)] ?? { image: '' });
  }

  const faceConfigs = [
    { transform: `translateZ(${faceDistance}px)`, face: padded[0] },
    {
      transform: `rotateY(180deg) translateZ(${faceDistance}px)`,
      face: padded[1],
    },
    {
      transform: `rotateY(90deg) translateZ(${faceDistance}px)`,
      face: padded[2],
    },
    {
      transform: `rotateY(-90deg) translateZ(${faceDistance}px)`,
      face: padded[3],
    },
    {
      transform: `rotateX(90deg) translateZ(${faceDistance}px)`,
      face: padded[4],
    },
    {
      transform: `rotateX(-90deg) translateZ(${faceDistance}px)`,
      face: padded[5],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center select-none"
      style={{
        perspective: '1200px',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        style={{
          width: `${cubeSize}px`,
          height: `${cubeSize}px`,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          position: 'relative',
        }}
      >
        {faceConfigs.map((cfg, i) => (
          <div
            key={i}
            className="absolute inset-0 overflow-hidden"
            style={{
              transform: cfg.transform,
              backfaceVisibility: 'hidden',
              border: `1px solid ${accent}30`,
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: cfg.face.image ? `url("${cfg.face.image}")` : undefined,
                backgroundColor: cfg.face.image ? undefined : '#0f131a',
                filter: 'brightness(0.75) contrast(1.1)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 100%)',
              }}
            />
            {(cfg.face.category || cfg.face.title) && (
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                {cfg.face.category && (
                  <div
                    className="text-[10px] font-mono tracking-[0.25em] uppercase mb-1"
                    style={{ color: accent }}
                  >
                    {cfg.face.category}
                  </div>
                )}
                {cfg.face.title && (
                  <div
                    className="text-white text-sm sm:text-base leading-[1.1]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 500 }}
                  >
                    {cfg.face.title}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
  markers?: { location: [number, number]; size: number }[];
  size?: number;
}

const defaultMarkers: { location: [number, number]; size: number }[] = [
  { location: [32.0853, 34.7818], size: 0.07 }, // Tel Aviv
  { location: [40.7128, -74.006], size: 0.08 }, // New York
  { location: [38.9072, -77.0369], size: 0.06 }, // Washington DC (Annapolis-ish)
  { location: [-33.9249, 18.4241], size: 0.08 }, // Cape Town
  { location: [-1.2921, 36.8219], size: 0.06 }, // Nairobi
  { location: [48.8566, 2.3522], size: 0.06 }, // Paris
  { location: [51.5074, -0.1278], size: 0.06 }, // London
  { location: [25.7617, -80.1918], size: 0.06 }, // Miami
  { location: [34.0522, -118.2437], size: 0.06 }, // LA
];

export default function Globe({ markers = defaultMarkers, size = 600 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef(0);

  useEffect(() => {
    let width = 0;
    let phi = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.15, 0.17, 0.22],
      markerColor: [0.64, 0.82, 1],
      glowColor: [0.64, 0.82, 1],
      markers,
      onRender: (state) => {
        phi += 0.004;
        state.phi = phi + pointerRef.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    const canvas = canvasRef.current;
    let pointerStartX: number | null = null;
    let pointerStartPhi = 0;

    const onPointerDown = (e: PointerEvent) => {
      pointerStartX = e.clientX;
      pointerStartPhi = pointerRef.current;
      canvas.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (pointerStartX !== null) {
        const delta = e.clientX - pointerStartX;
        pointerRef.current = pointerStartPhi + delta / 150;
      }
    };

    const onPointerUp = () => {
      pointerStartX = null;
      canvas.style.cursor = 'grab';
    };

    canvas.style.cursor = 'grab';
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [markers]);

  return (
    <div
      className="relative mx-auto w-full"
      style={{ aspectRatio: '1', maxWidth: size }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full touch-none"
        style={{ contain: 'layout paint size' }}
      />
    </div>
  );
}

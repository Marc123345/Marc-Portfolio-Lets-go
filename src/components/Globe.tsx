"use client";

import { useEffect, useRef } from 'react';

interface GlobeProps {
  size?: number;
  className?: string;
}

// Marc's client cities — drives arcs + points.
const CITIES = [
  { lat: 40.7128, lng: -74.006, name: 'New York', pop: 1 },
  { lat: 38.9072, lng: -77.0369, name: 'Washington D.C.', pop: 0.9 },
  { lat: 25.7617, lng: -80.1918, name: 'Miami', pop: 0.8 },
  { lat: 34.0522, lng: -118.2437, name: 'Los Angeles', pop: 0.85 },
  { lat: 32.0853, lng: 34.7818, name: 'Tel Aviv', pop: 1 },
  { lat: 51.5074, lng: -0.1278, name: 'London', pop: 0.9 },
  { lat: 48.8566, lng: 2.3522, name: 'Paris', pop: 0.8 },
  { lat: -33.9249, lng: 18.4241, name: 'Cape Town', pop: 1 },
  { lat: -1.2921, lng: 36.8219, name: 'Nairobi', pop: 0.75 },
];

// Connecting arcs — routes between Marc's clients.
const ARC_COLORS: [string, string][] = [
  ['rgba(163,209,255,0.95)', 'rgba(99,168,244,0.5)'],
  ['rgba(192,221,255,0.75)', 'rgba(99,168,244,0.35)'],
  ['rgba(216,232,255,0.55)', 'rgba(163,209,255,0.2)'],
];

const ROUTES = [
  // Primary — tier A
  [0, 4, 0],
  [0, 5, 0],
  [4, 7, 0],
  [5, 6, 0],
  // Secondary — tier B
  [0, 2, 1],
  [2, 3, 1],
  [3, 4, 1],
  [7, 8, 1],
  // Whisper — tier C
  [1, 0, 2],
  [4, 8, 2],
  [5, 7, 2],
  [3, 7, 2],
];

function buildArcs() {
  return ROUTES.map(([from, to, tier]) => ({
    startLat: CITIES[from].lat,
    startLng: CITIES[from].lng,
    endLat: CITIES[to].lat,
    endLng: CITIES[to].lng,
    color: ARC_COLORS[tier],
  }));
}

function buildPoints() {
  return CITIES.map((c, i) => ({
    lat: c.lat,
    lng: c.lng,
    size: c.pop > 0.85 ? 0.5 : 0.32,
    color:
      c.pop > 0.85
        ? 'rgba(216,232,255,0.95)'
        : 'rgba(163,209,255,0.7)',
  }));
}

function disposeGlobe(globe: any) {
  try {
    const renderer = globe?.renderer?.();
    if (renderer) {
      renderer.setAnimationLoop(null);
      renderer.dispose();
      renderer.forceContextLoss();
      const canvas = renderer.domElement;
      if (canvas?.parentNode) canvas.parentNode.removeChild(canvas);
    }
    const scene = globe?.scene?.();
    if (scene) {
      scene.traverse((obj: any) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
          materials.forEach((m: any) => {
            m.map?.dispose?.();
            m.dispose?.();
          });
        }
      });
      scene.clear();
    }
    globe?._destructor?.();
  } catch {
    // no-op
  }
}

export default function Globe({ size = 600, className = '' }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const destroyedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    destroyedRef.current = false;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    Promise.all([import('globe.gl'), import('three')]).then(
      ([GlobeModule, THREE]) => {
        if (destroyedRef.current || !containerRef.current) return;
        const GlobeGL = GlobeModule.default;

        const globe = GlobeGL({ animateIn: false })(containerRef.current!);
        globeRef.current = globe;

        const w = containerRef.current!.clientWidth || 600;
        const h = containerRef.current!.clientHeight || 600;

        globe
          .backgroundColor('rgba(0,0,0,0)')
          .width(w)
          .height(h)
          .showAtmosphere(true)
          .atmosphereColor('rgba(163,209,255,0.55)')
          .atmosphereAltitude(isMobile ? 0.18 : 0.25)
          .globeImageUrl(
            '//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg',
          );

        globe
          .pointLat('lat')
          .pointLng('lng')
          .pointColor('color')
          .pointAltitude(0.01)
          .pointRadius('size')
          .pointsMerge(false)
          .pointsTransitionDuration(400);

        globe
          .arcColor('color')
          .arcDashLength(0.7)
          .arcDashGap(0.15)
          .arcDashAnimateTime(2200)
          .arcStroke(isMobile ? 0.7 : 1.1)
          .arcAltitudeAutoScale(0.45)
          .arcsTransitionDuration(800);

        globe.pointsData(buildPoints());
        globe.arcsData(buildArcs());

        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = isMobile ? 0.45 : 0.65;
        controls.enableZoom = false;
        controls.enablePan = false;

        globe.pointOfView({
          lat: 20,
          lng: 10,
          altitude: isMobile ? 2.6 : 2.1,
        });

        const renderer = globe.renderer?.();
        if (renderer) {
          renderer.setPixelRatio(
            isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5),
          );
        }

        const scene = globe.scene();
        if (scene) {
          const sun = new THREE.DirectionalLight(0xbfdaff, 1.8);
          sun.position.set(5, 2, 4);
          scene.add(sun);

          const rim = new THREE.PointLight(0x3b7bce, 0.8, 50);
          rim.position.set(-4, 1, -3);
          scene.add(rim);

          const fill = new THREE.AmbientLight(0x101528, 0.45);
          scene.add(fill);
        }
      },
    );

    return () => {
      destroyedRef.current = true;
      if (globeRef.current) {
        disposeGlobe(globeRef.current);
        globeRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (globeRef.current && containerRef.current) {
        globeRef.current
          .width(containerRef.current.clientWidth)
          .height(containerRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      className={`relative mx-auto w-full ${className}`}
      style={{ aspectRatio: '1', maxWidth: size }}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{ contain: 'strict', background: 'transparent' }}
      />
    </div>
  );
}

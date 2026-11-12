"use client";

import { motion, useReducedMotion } from 'framer-motion';

/*
 * Fanned 3D guide covers, after the RoofCoat Leads /guides hero
 * (.rc-book: rotateY cover, spine shading, soft glow, rise-in).
 * Recoloured to #A3D1FF. Front cover bobs gently.
 */
export default function BookStack({
  covers,
  className = '',
}: {
  covers: { src: string; alt: string }[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const fan = covers.slice(0, 3);
  // back → front
  const poses = [
    { left: '46%', top: '2%', rotateY: 22, rotateZ: 6, delay: 0.55 },
    { left: '26%', top: '8%', rotateY: 20, rotateZ: 2, delay: 0.4 },
    { left: '6%', top: '14%', rotateY: 18, rotateZ: -2, delay: 0.25 },
  ].slice(3 - fan.length);

  return (
    <div className={`relative h-[360px] sm:h-[460px] lg:h-[520px] ${className}`} style={{ perspective: 1600 }} aria-hidden>
      <div className="absolute inset-[12%_6%] rounded-full bg-[radial-gradient(closest-side,rgba(163,209,255,0.32),transparent)] blur-[30px]" />
      {fan.map((c, i) => {
        const p = poses[i];
        const front = i === fan.length - 1;
        return (
          <motion.div
            key={c.src}
            className="absolute w-[48%]"
            style={{ left: p.left, top: p.top, transformStyle: 'preserve-3d', rotateY: p.rotateY, rotateZ: p.rotateZ, zIndex: i }}
            initial={{ opacity: 0, y: 40 }}
            animate={
              reduce || !front
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [0, -12, 0] }
            }
            transition={
              reduce || !front
                ? { duration: 1, delay: p.delay, ease: [0.22, 1, 0.36, 1] }
                : { opacity: { duration: 1, delay: p.delay }, y: { duration: 5, delay: p.delay + 1, repeat: Infinity, ease: 'easeInOut' } }
            }
          >
            <div className="relative shadow-[30px_40px_60px_rgba(0,0,0,0.6)]" style={{ filter: front ? undefined : `brightness(${0.55 + i * 0.15})` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.alt} className="block w-full h-auto aspect-[3/4] object-cover rounded-[2px_6px_6px_2px]" />
              <span className="absolute inset-y-0 left-0 w-[22px] rounded-l-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,0.55),rgba(255,255,255,0.12)_45%,rgba(0,0,0,0.25))]" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

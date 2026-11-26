"use client";

/**
 * Service cards in the FlyStudio "services inertia" style: square cards with an
 * icon tab notched into the top-left corner, alternating frame colours, tilted
 * at fixed angles on desktop. When the cursor enters a card, the card is
 * thrown in the direction the mouse was travelling, wobbles, and springs back.
 *
 * Desktop (>=1200px, fine pointer, motion allowed): tilted overlapping rows.
 * Below that: a plain 2/3-column grid, no tilt, no inertia (same as FlyStudio).
 */

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { animate, motion, useMotionValue } from 'framer-motion';
import {
  ArrowUpRight, Briefcase, Code2, PenTool, Layers, Rocket, Sparkles,
  ShieldCheck, FileSearch, MessageSquareQuote, BrainCircuit, MapPin, Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { ArcCard } from '@/components/ArcSlider';

const SERIF = 'var(--font-heading)';

/* Each service is shown with a real project of Marc's (ImageKit / Vimeo assets used elsewhere on the site). */
const IK = 'https://ik.imagekit.io/qcvroy8xpd';
const VIMEO = 'https://i.vimeocdn.com/video';
const VISUALS: Record<string, { icon: LucideIcon; image: string; project: string }> = {
  'b2b-web-design':      { icon: Briefcase,          project: 'Binns Media Group', image: `${IK}/Mockup%201%20-%201x1.png?updatedAt=1767538712766&tr=w-640` },
  'web-development':     { icon: Code2,              project: 'True Bilt Roofing', image: `${IK}/True-Bilt-Roofing-Homepage-Image-Only.jpg?updatedAt=1794496683148&tr=w-640` },
  'design':              { icon: PenTool,            project: 'Videoleap',         image: `${VIMEO}/1725294113-420903a21824db245b69d45b8cdf9e617abde67e6a9cfe4189233518a69e7471-d_640?region=us` },
  'design-systems':      { icon: Layers,             project: 'Videoleap',         image: `${VIMEO}/1725299147-e7ee777ef41af59a9586f356fb324b2f196242d92db451c5a44f760574320553-d_640?region=us` },
  'startup-mvp':         { icon: Rocket,             project: 'AutoMarginX',       image: `${VIMEO}/1724812001-475740b8780333068bb9ad10a9c161ad1c322af042c3f26e7e5364580bb26826-d_640?region=us` },
  'ai-integration':      { icon: Sparkles,           project: 'AutoMarginX',       image: `${VIMEO}/1724843119-2a9387a63e4a7b87a847e72081f11e16e759d8afdee12eaaa8d0076d0007c75a-d_640?region=us` },
  'cybersecurity':       { icon: ShieldCheck,        project: 'Ask Africa',        image: `${IK}/Ask-Africa-Detail-Image-Only.jpg?tr=w-640` },
  'seo-content-layout':  { icon: FileSearch,         project: 'H2H Marketing',     image: `${IK}/H2H-Social-Homepage-Image-Only.jpg?tr=w-640` },
  'aeo':                 { icon: MessageSquareQuote, project: 'Ask Africa',        image: `${IK}/Ask-Africa-Homepage-Image-Only.jpg?tr=w-640` },
  'geo':                 { icon: BrainCircuit,       project: 'H2H Marketing',     image: `${IK}/H2H-Social-Detail-Image-Only.jpg?tr=w-640` },
  'local-seo':           { icon: MapPin,             project: 'Thomas & Sons',     image: `${IK}/Thomas-and-Sons-Homepage-Image-Only.jpg?updatedAt=1794496683166&tr=w-640` },
  'maintenance-hosting': { icon: Wrench,             project: 'ProGrade Roofing',  image: `${IK}/ProGrade-Roof-Coatings-Homepage-Image-Only.jpg?updatedAt=1794496683211&tr=w-640` },
};

/* FlyStudio's colour rhythm (tint, purple, tint, lime, tint) mapped to this site. */
const DARK = { frame: 'bg-[#161616]', ink: '#ffffff', meta: 'rgba(255,255,255,0.5)' };
const TONES = [
  DARK,
  { frame: 'bg-[#A3D1FF]', ink: '#000000', meta: 'rgba(0,0,0,0.55)' },
  DARK,
  { frame: 'bg-[#EDEDED]', ink: '#000000', meta: 'rgba(0,0,0,0.55)' },
  DARK,
];
/* FlyStudio tilts: 15°, 0°, -15°, 15°, -15°, repeating. */
const TILTS = [15, 0, -15, 15, -15];

function useDesktopInertia() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1200px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const set = () => setOn(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);
  return on;
}

function Card({
  card, index, inertia, delta, current,
}: {
  card: ArcCard; index: number; inertia: boolean;
  delta: React.MutableRefObject<{ x: number; y: number }>; current?: boolean;
}) {
  const v = VISUALS[card.id];
  const tone = TONES[index % TONES.length];
  const Icon = v?.icon ?? Sparkles;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  const throwCard = () => {
    if (!inertia) return;
    const { x: dx, y: dy } = delta.current;
    // GSAP InertiaPlugin in the original (velocity = delta * 30, end: 0) → a spring
    // that starts with the same velocity and settles back to 0.
    animate(x, 0, { type: 'spring', velocity: dx * 30, stiffness: 110, damping: 13 });
    animate(y, 0, { type: 'spring', velocity: dy * 30, stiffness: 110, damping: 13 });
    const r = (Math.random() - 0.5) * 30;
    animate(rotate, [0, r, 0], { duration: 0.8 / 1.2, ease: 'easeInOut' });
  };

  return (
    <div
      className="ic-item"
      style={{ ['--tilt' as string]: `${TILTS[index % TILTS.length]}deg` }}
      onMouseEnter={throwCard}
    >
      <motion.div style={{ x, y, rotate }} className="h-full will-change-transform">
        <Link
          href={card.href}
          aria-label={`${card.title}: ${card.blurb}`}
          style={{ color: tone.ink }}
          className={`group relative flex h-full flex-col gap-3 rounded-[16px] p-2 md:gap-4 md:rounded-[20px] md:p-3 ${tone.frame} ${current ? 'ring-2 ring-[#A3D1FF] ring-offset-4 ring-offset-black' : ''}`}
        >
          {/* image */}
          <div className="relative overflow-hidden rounded-[11px] bg-[#1b1b1b] md:rounded-[14px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v?.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="block w-full h-auto transition-transform duration-[900ms] group-hover:scale-[1.06]"
            />
            <span className="absolute bottom-2 right-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-black/60 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-white/80 backdrop-blur-sm md:px-2.5 md:py-1 md:text-[10px] md:tracking-[0.18em]">
              {v?.project}
            </span>
          </div>

          {/* icon tab notched into the corner (same fill as the frame) */}
          <span
            className={`absolute left-0 top-0 grid h-11 w-11 md:h-14 md:w-14 place-items-center rounded-br-[16px] rounded-tl-[16px] md:rounded-br-[20px] md:rounded-tl-[20px] xl:h-[70px] xl:w-[70px] ${tone.frame}`}
            aria-hidden="true"
          >
            <Icon color={tone.ink} className="h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7" strokeWidth={2} />
          </span>

          {/* text */}
          <div className="mt-auto flex items-end justify-between gap-3 px-1 pb-1">
            <div className="min-w-0">
              <p className="m-0 mb-1.5 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: tone.meta }}>
                {current ? 'You are here' : card.category}
              </p>
              <h3 className="m-0 leading-[1.05] tracking-[-0.01em]" style={{ color: tone.ink, fontFamily: SERIF, fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)', fontWeight: 400 }}>
                {card.title}
              </h3>
            </div>
            <ArrowUpRight color={tone.ink} className="h-5 w-5 flex-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function InertiaServiceCards({ cards, currentId }: { cards: ArcCard[]; currentId?: string }) {
  const inertia = useDesktopInertia();
  const delta = useRef({ x: 0, y: 0 });
  const last = useRef<{ x: number; y: number } | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (last.current) delta.current = { x: e.clientX - last.current.x, y: e.clientY - last.current.y };
    last.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <>
      <div className="ic-grid" onMouseMove={inertia ? onMove : undefined}>
        {cards.map((c, i) => (
          <Card key={c.id} card={c} index={i} inertia={inertia} delta={delta} current={c.id === currentId} />
        ))}
      </div>

      <style jsx>{`
        .ic-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .ic-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
        }
        /* Desktop: FlyStudio layout. Overlapping, tilted, rows of 6 then 5. */
        @media (min-width: 1200px) {
          .ic-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            row-gap: 4.5rem;
            column-gap: 0;
            position: relative;
            left: -3rem;
            width: calc(100% + 6rem);
            padding: 4rem 0 3rem;
          }
          .ic-grid :global(.ic-item) {
            flex: 0 0 calc((100% + 2rem) / 6);
            margin: 0 -0.2rem;
            transform: rotate(var(--tilt));
          }
          .ic-grid :global(.ic-item:hover) { z-index: 5; }
        }
      `}</style>
    </>
  );
}

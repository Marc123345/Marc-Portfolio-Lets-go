"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type StackItem = {
  image: string;
  category?: string;
  title?: string;
};

interface WorkStackProps {
  items: StackItem[];
  /** Controlled index. Leave undefined to let the stack manage itself. */
  activeIndex?: number;
  onChange?: (index: number) => void;
  /** Advance on a timer until the visitor interacts. */
  autoPlay?: boolean;
  interval?: number;
  accent?: string;
}

const VISIBLE = 4; // cards drawn behind the front one
const EASE = [0.22, 1, 0.36, 1] as const;

function slug(title?: string) {
  return (title ?? 'project').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/**
 * Work shown as a deck of browser windows receding into depth.
 * The front window tilts toward the pointer; swipe / drag sideways,
 * use the arrow keys, or click a window behind to bring it forward.
 * The window you leave slides to the back of the deck.
 */
export default function WorkStack({
  items,
  activeIndex,
  onChange,
  autoPlay = false,
  interval = 4200,
  accent = '#A3D1FF',
}: WorkStackProps) {
  const n = items.length;
  const reduce = useReducedMotion();
  const [inner, setInner] = useState(0);
  const active = ((activeIndex ?? inner) % n + n) % n;
  const [paused, setPaused] = useState(false);
  const drag = useRef<{ x: number } | null>(null);
  const swiped = useRef(false);

  const go = useCallback(
    (i: number) => {
      const next = ((i % n) + n) % n;
      if (activeIndex === undefined) setInner(next);
      onChange?.(next);
    },
    [n, activeIndex, onChange],
  );

  // auto-advance until the visitor touches the stack
  useEffect(() => {
    if (!autoPlay || paused || reduce || n < 2) return;
    const id = setInterval(() => go(active + 1), interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, reduce, n, interval, active, go]);

  // pointer tilt on the front window
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 10);
  };
  const resetTilt = () => {
    rx.set(0);
    ry.set(0);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX };
    swiped.current = false;
    setPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 40) {
      swiped.current = true;
      go(active + (dx < 0 ? 1 : -1));
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPaused(true);
      go(active + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPaused(true);
      go(active - 1);
    }
  };

  const current = items[active];

  return (
    <div className="w-full flex flex-col items-center select-none">
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Project windows. Use left and right arrow keys to browse."
        tabIndex={0}
        onKeyDown={onKey}
        onPointerMove={onPointerMove}
        onPointerLeave={resetTilt}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current = null)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative w-full max-w-[460px] aspect-[16/12] outline-none focus-visible:ring-1 focus-visible:ring-[#A3D1FF]/60 cursor-grab active:cursor-grabbing"
        style={{ perspective: 1600, touchAction: 'pan-y' }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d', rotateX: srx, rotateY: sry }}
        >
          {items.map((item, i) => {
            const depth = (i - active + n) % n; // 0 = front
            const shown = depth <= VISIBLE;
            return (
              <motion.button
                type="button"
                key={`${item.title}-${i}`}
                tabIndex={-1}
                aria-hidden={depth !== 0}
                aria-label={depth === 0 ? undefined : `Show ${item.title}`}
                onClick={() => {
                  if (depth !== 0 && !swiped.current) {
                    setPaused(true);
                    go(i);
                  }
                }}
                className="absolute left-[2%] top-[16%] w-[82%] text-left"
                style={{ transformStyle: 'preserve-3d', zIndex: n - depth, pointerEvents: shown ? 'auto' : 'none' }}
                initial={false}
                animate={{
                  x: depth * 38,
                  y: depth * -34,
                  z: depth * -90,
                  rotateY: depth === 0 ? 0 : -10,
                  rotateZ: depth === 0 ? 0 : depth * 1.2,
                  opacity: shown ? 1 - depth * 0.17 : 0,
                  filter: `brightness(${1 - depth * 0.16})`,
                }}
                transition={reduce ? { duration: 0 } : { duration: 0.75, ease: EASE }}
              >
                <div
                  className="overflow-hidden bg-[#0f1115] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]"
                  style={{ border: `1px solid ${depth === 0 ? `${accent}55` : 'rgba(255,255,255,0.1)'}` }}
                >
                  {/* browser chrome */}
                  <div className="flex items-center gap-2 px-3 h-7 bg-[#16191f] border-b border-white/10">
                    <span className="flex gap-1.5" aria-hidden>
                      <i className="w-2 h-2 rounded-full bg-white/20" />
                      <i className="w-2 h-2 rounded-full bg-white/20" />
                      <i className="w-2 h-2 rounded-full bg-white/20" />
                    </span>
                    <span className="flex-1 mx-2 truncate text-center text-[9px] font-mono tracking-[0.15em] text-white/40">
                      {slug(item.title)}.site
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] bg-[#1b1b1b]">
                    {item.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={depth === 0 ? `${item.title} website` : ''}
                        draggable={false}
                        loading={depth <= 1 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    {/* glare that follows the deck */}
                    <span
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.10) 0%, transparent 38%)' }}
                    />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* caption + progress */}
      <div className="w-full max-w-[400px] mt-4 flex items-center gap-4" aria-live="polite">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#A3D1FF]" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </span>
        <span className="h-[1px] flex-1 bg-white/10 relative overflow-hidden">
          <motion.span
            className="absolute inset-y-0 left-0 bg-[#A3D1FF]"
            animate={{ width: `${((active + 1) / n) * 100}%` }}
            transition={{ duration: 0.6, ease: EASE }}
          />
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 truncate max-w-[45%]">
          {current?.category}
        </span>
      </div>
    </div>
  );
}

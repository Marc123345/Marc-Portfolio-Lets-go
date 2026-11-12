"use client";

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SERIF = "var(--font-heading)";

/*
 * Awards list, after the Digitaal template's team-awards-section-two:
 * hover a row and it lights up while a preview floats beside the cursor.
 * Only recognitions that the linked pages actually show (checked 12 Nov 2026).
 */
type AwardRow = {
  source: string;
  title: string;
  project: string;
  date?: string;
  href: string;
  image: string;
};

const AWARDS: AwardRow[] = [
  {
    source: 'CSS Design Awards',
    title: 'Special Kudos',
    project: 'Marc Friedman portfolio',
    date: 'May 2026',
    href: 'https://www.cssdesignawards.com/sites/marc-friedman-web-design-agency/49357/',
    image: '/images/motion/chrome-spiral.webp',
  },
  {
    source: 'DesignRush',
    title: 'Best Designs feature',
    project: 'Untapped Africa',
    href: 'https://www.designrush.com/best-designs/websites/untapped-africa-website-design',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
  },
  {
    source: 'Awwwards',
    title: 'Nominated work',
    project: 'Untapped Africa · Binns Media · Portfolio',
    href: 'https://www.awwwards.com/marc-friedman/',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
  },
  {
    source: 'DesignRush',
    title: 'Design Awards nominee',
    project: 'Marc Friedman Design Agency',
    href: 'https://www.designrush.com/agency/profile/marc-friedman-design-agency',
    image: 'https://ik.imagekit.io/qcvroy8xpd/Screenshot.png?updatedAt=1754018965491',
  },
];

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">{number}</span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">{label}</span>
    </div>
  );
}

export default function AwardsSection() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  // floating preview follows the cursor inside the list
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22 });
  const y = useSpring(my, { stiffness: 180, damping: 22 });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    const r = listRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      {/* giant outline word, Digitaal's title-stroke-text */}
      <div
        aria-hidden
        className="absolute -top-4 left-0 right-0 text-center whitespace-nowrap pointer-events-none select-none leading-none tracking-[-0.04em] uppercase"
        style={{ fontFamily: SERIF, fontSize: 'clamp(5rem, 17vw, 16rem)', fontWeight: 500 }}
      >
        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}>
          Press{' '}
        </span>
        <span className="text-white/[0.06]">Awards</span>
      </div>
      <div className="absolute bottom-0 left-[-10%] w-[700px] h-[500px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pt-16 md:pt-28">
          <div className="lg:col-span-5">
            <ChapterMarker number="Chapter · Recognition" label={`${AWARDS.length} Mentions`} />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[0.95] tracking-[-0.03em] mb-6"
              style={{ fontFamily: SERIF, fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 400 }}
            >
              Awards &amp; <em className="italic text-[#A3D1FF]">press.</em>
            </motion.h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Juries and editors who looked at the work and wrote it up. Every row links to the
              original page.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul
              ref={listRef}
              className="relative border-t border-white/10"
              onPointerMove={onMove}
              onPointerEnter={() => setHovering(true)}
              onPointerLeave={() => setHovering(false)}
            >
              {AWARDS.map((a, i) => {
                const on = i === active;
                return (
                  <motion.li
                    key={a.href}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onPointerEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-7 md:py-8"
                    >
                      {/* sweep fill on the active row */}
                      <span
                        aria-hidden
                        className="absolute inset-0 origin-left bg-gradient-to-r from-[#A3D1FF]/[0.07] to-transparent transition-transform duration-500"
                        style={{ transform: `scaleX(${on ? 1 : 0})` }}
                      />
                      <span
                        className={`relative text-[10px] font-mono tracking-[0.2em] transition-colors ${on ? 'text-[#A3D1FF]' : 'text-white/30'}`}
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="relative min-w-0">
                        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 mb-2">
                          {a.source}
                        </span>
                        <span
                          className={`block leading-[1.05] transition-colors duration-300 ${on ? 'text-white' : 'text-white/60'}`}
                          style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem, 2.6vw, 2.4rem)', fontWeight: 400 }}
                        >
                          {a.title}
                        </span>
                        <span className="block text-sm text-white/50 mt-2 truncate">{a.project}</span>
                      </span>
                      <span className="relative flex items-center gap-4">
                        {a.date && (
                          <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
                            {a.date}
                          </span>
                        )}
                        <span
                          className={`w-10 h-10 grid place-items-center border transition-all duration-500 ${
                            on ? 'border-[#A3D1FF] bg-[#A3D1FF] text-black rotate-45' : 'border-white/20 text-white/60'
                          }`}
                        >
                          <ArrowUpRight className={`w-4 h-4 transition-transform duration-500 ${on ? '-rotate-45' : ''}`} />
                        </span>
                      </span>
                    </a>
                  </motion.li>
                );
              })}

              {/* floating preview (mouse only) */}
              <AnimatePresence>
                {hovering && !reduce && (
                  <motion.div
                    aria-hidden
                    className="hidden lg:block absolute top-0 left-0 z-10 pointer-events-none"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="-translate-x-1/2 -translate-y-[115%] w-[220px] aspect-[4/3] overflow-hidden bg-[#1b1b1b] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] rotate-[-4deg]">
                      <AnimatePresence mode="popLayout">
                        <motion.img
                          key={AWARDS[active].image}
                          src={AWARDS[active].image}
                          alt=""
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.15 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        />
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

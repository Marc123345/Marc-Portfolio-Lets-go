"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';

const SERIF = "Georgia, 'Times New Roman', serif";
const ACCENT = '#A3D1FF';

export type ArcCard = {
  id: string;
  title: string;
  category: string;
  blurb: string;
  href: string;
  bullets?: string[];
};

interface ArcSliderProps {
  cards: ArcCard[];
  initialIndex?: number;
}

export default function ArcSlider({ cards, initialIndex = 0 }: ArcSliderProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isMobile, setIsMobile] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeCardRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({ startX: 0, hasMoved: false, isDragging: false });

  // Magnetic cursor follower
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 250, damping: 30, mass: 0.6 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 250, damping: 30, mass: 0.6 });

  // Pointer-driven tilt for the active card (subtle 3D parallax)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 150, damping: 18, mass: 0.4 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 150, damping: 18, mass: 0.4 });
  const tiltRotateX = useTransform(smoothTiltY, [-1, 1], [6, -6]);
  const tiltRotateY = useTransform(smoothTiltX, [-1, 1], [-8, 8]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const navigateTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= cards.length) return;
      setActiveIndex(idx);
    },
    [cards.length],
  );

  const positionCards = useCallback(
    (index: number, animate: boolean) => {
      const containerWidth = containerRef.current?.offsetWidth ?? 900;
      const cardWidth = Math.min(380, Math.max(260, containerWidth * 0.55));
      const spreadStep1 = cardWidth * 0.82;
      const spreadStep2 = cardWidth * 1.3;
      const spreadStep3 = cardWidth * 1.75;

      cards.forEach((_, i) => {
        const card = cardsRef.current[i];
        if (!card) return;

        const offset = i - index;
        const absOffset = Math.abs(offset);

        let translateX = 0;
        let rotateY = 0;
        let translateZ = 0;
        let scale = 1;
        let opacity = 1;
        let zIndex = 10;
        let blur = 0;

        if (absOffset === 0) {
          translateX = 0; rotateY = 0; translateZ = 0; scale = 1; opacity = 1; zIndex = 10; blur = 0;
        } else if (absOffset === 1) {
          translateX = offset * spreadStep1; rotateY = offset < 0 ? 32 : -32; translateZ = -120; scale = 0.82; opacity = 0.55; zIndex = 5; blur = 1.5;
        } else if (absOffset === 2) {
          translateX = offset * spreadStep2; rotateY = offset < 0 ? 48 : -48; translateZ = -240; scale = 0.64; opacity = 0.18; zIndex = 2; blur = 4;
        } else {
          translateX = offset * spreadStep3; rotateY = offset < 0 ? 55 : -55; translateZ = -350; scale = 0.5; opacity = 0; zIndex = 1; blur = 8;
        }

        const transform = `translateX(${translateX}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;

        card.style.zIndex = String(zIndex);
        card.style.transition = animate
          ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, filter 0.6s ease, box-shadow 0.6s ease'
          : 'none';
        card.style.transform = transform;
        card.style.opacity = String(opacity);
        card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
        card.style.boxShadow =
          absOffset === 0
            ? `0 0 0 1px ${ACCENT}40, 0 30px 80px -20px ${ACCENT}20, 0 10px 30px rgba(0,0,0,0.5)`
            : absOffset === 1
            ? '0 8px 30px rgba(0,0,0,0.4)'
            : 'none';
        card.style.pointerEvents = absOffset > 1 ? 'none' : 'auto';
      });
    },
    [cards],
  );

  useEffect(() => {
    positionCards(activeIndex, true);
  }, [activeIndex, positionCards]);

  // Re-position on resize
  useEffect(() => {
    const onResize = () => positionCards(activeIndex, false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeIndex, positionCards]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateTo(activeIndex - 1);
      if (e.key === 'ArrowRight') navigateTo(activeIndex + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, navigateTo]);

  // Pointer drag + cursor + tilt
  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, hasMoved: false, isDragging: true };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    // Cursor follower position (relative to stage)
    const stage = containerRef.current?.getBoundingClientRect();
    if (stage) {
      cursorX.set(e.clientX - stage.left);
      cursorY.set(e.clientY - stage.top);
    }
    // Tilt — only when over the active card
    if (activeCardRef.current) {
      const rect = activeCardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);
      const inside =
        Math.abs(e.clientX - cx) < rect.width / 2 + 40 &&
        Math.abs(e.clientY - cy) < rect.height / 2 + 40;
      if (inside) {
        tiltX.set(Math.max(-1, Math.min(1, nx)));
        tiltY.set(Math.max(-1, Math.min(1, ny)));
      } else {
        tiltX.set(0);
        tiltY.set(0);
      }
    }
    // Drag
    if (!dragRef.current.isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 8) dragRef.current.hasMoved = true;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragRef.current.isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.isDragging = false;
    if (Math.abs(dx) > 50) {
      navigateTo(activeIndex + (dx < 0 ? 1 : -1));
    }
  };

  const active = cards[activeIndex];

  /* ------------- Mobile fallback (horizontal scroll) ------------- */
  if (isMobile) {
    return (
      <div className="relative">
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 pb-4">
            {cards.map((c, i) => (
              <Link
                key={c.id}
                href={c.href}
                onClick={() => setActiveIndex(i)}
                className="snap-center shrink-0 w-[80vw] max-w-[340px] aspect-[3/4] border border-white/15 bg-[#0f1116] p-6 flex flex-col"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-3">
                  {String(i + 1).padStart(2, '0')} · {c.category}
                </div>
                <h3
                  className="text-white leading-[1.0] tracking-tight mb-4 mt-auto"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(2rem, 6vw, 2.75rem)',
                    fontWeight: 500,
                  }}
                >
                  {c.title}
                </h3>
                <p className="text-white/65 text-sm mb-4">{c.blurb}</p>
                <div className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/30 pb-1 self-start">
                  Open service <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ------------- Desktop arc ------------- */
  return (
    <div className="relative w-full">
      {/* Arc stage */}
      <div
        ref={containerRef}
        className="relative w-full select-none"
        style={{
          perspective: '1600px',
          height: 540,
          cursor: 'none',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={(e) => {
          setHovering(false);
          tiltX.set(0);
          tiltY.set(0);
          if (dragRef.current.isDragging) onPointerUp(e);
        }}
      >
        {/* Magnetic cursor follower */}
        <motion.div
          className="absolute z-40 pointer-events-none"
          style={{
            left: 0,
            top: 0,
            x: smoothCursorX,
            y: smoothCursorY,
            translateX: '-50%',
            translateY: '-50%',
            opacity: hovering ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        >
          <div className="w-20 h-20 rounded-full border border-[#A3D1FF]/60 bg-[#A3D1FF]/10 backdrop-blur-md flex items-center justify-center text-[10px] font-mono uppercase tracking-[0.2em] text-white">
            <span className="flex items-center gap-1">
              Open <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </motion.div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {cards.map((c, i) => {
            const isActive = i === activeIndex;
            return (
            <div
              key={c.id}
              ref={(el) => {
                cardsRef.current[i] = el;
                if (isActive) activeCardRef.current = el;
              }}
              className="absolute"
              style={{
                transformStyle: 'preserve-3d',
                width: 'min(380px, 55vw)',
                height: 480,
              }}
              onClick={() => {
                if (dragRef.current.hasMoved) return;
                if (i !== activeIndex) navigateTo(i);
              }}
            >
              <motion.div
                className="relative w-full h-full border border-white/12 bg-[#0e1116] flex flex-col p-7 overflow-hidden"
                style={{
                  background: isActive
                    ? `linear-gradient(140deg, #14181f 0%, #0a0c10 100%)`
                    : '#0e1116',
                  transformStyle: 'preserve-3d',
                  rotateX: isActive ? tiltRotateX : 0,
                  rotateY: isActive ? tiltRotateY : 0,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left transition-transform duration-500"
                  style={{
                    background: ACCENT,
                    transform:
                      i === activeIndex ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />

                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-mono uppercase tracking-[0.3em]"
                    style={{ color: ACCENT }}
                  >
                    {String(i + 1).padStart(2, '0')} · {c.category}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                    Service
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <h3
                    className="text-white leading-[0.95] tracking-tight mb-5"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(2rem, 3vw, 3rem)',
                      fontWeight: 500,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">
                    {c.blurb}
                  </p>

                  {c.bullets && (
                    <ul className="space-y-1.5 mb-6">
                      {c.bullets.slice(0, 3).map((b) => (
                        <li
                          key={b}
                          className="text-white/70 text-xs flex gap-2 items-start"
                        >
                          <span style={{ color: ACCENT }}>—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={c.href}
                    onClick={(e) => {
                      // Block link if it was a drag, not a click
                      if (dragRef.current.hasMoved) {
                        e.preventDefault();
                      }
                    }}
                    className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] pb-1 self-start transition-colors relative z-10"
                    style={{ cursor: 'pointer' }}
                  >
                    Open service
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
            );
          })}
        </div>

        {/* Side arrows */}
        <button
          onClick={() => navigateTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous service"
          style={{ cursor: activeIndex === 0 ? 'not-allowed' : 'pointer' }}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center border border-white/15 bg-black/40 backdrop-blur-sm text-white hover:border-white/40 transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => navigateTo(activeIndex + 1)}
          disabled={activeIndex === cards.length - 1}
          aria-label="Next service"
          style={{ cursor: activeIndex === cards.length - 1 ? 'not-allowed' : 'pointer' }}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center border border-white/15 bg-black/40 backdrop-blur-sm text-white hover:border-white/40 transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Caption + dots */}
      <div className="mt-10 flex flex-col items-center gap-5">
        <div className="text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-2">
            — {String(activeIndex + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
          </p>
          <p
            className="text-white/80 italic text-lg"
            style={{ fontFamily: SERIF }}
          >
            {active.title}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => navigateTo(i)}
              aria-label={`Service ${i + 1}`}
              className="h-[2px] transition-all"
              style={{
                width: i === activeIndex ? 32 : 16,
                background:
                  i === activeIndex ? ACCENT : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

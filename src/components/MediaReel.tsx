"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const SERIF = "var(--font-heading)";

/*
 * "Work in motion": product-flow videos (Vimeo, from the AutoMarginX and
 * Videoleap case studies) over a slower, dimmer strip of site mockups that
 * drifts the other way, so the two rows read as separate depth layers.
 * Play buttons use RoofCoat Leads' pulsing ad ring (.mx-pulse).
 * Videos only load when clicked (lightbox), so the strip stays light.
 */

type Clip = { id: string; project: string; title: string; poster: string; secs: number; href: string };

const CLIPS: Clip[] = [
  { id: '865081155', project: 'AutoMarginX', title: 'Alert flow', secs: 20, href: '/work/case-studies/automarginx/',
    poster: 'https://i.vimeocdn.com/video/1724812001-475740b8780333068bb9ad10a9c161ad1c322af042c3f26e7e5364580bb26826-d_1280?region=us' },
  { id: '865404066', project: 'Videoleap', title: 'Onboarding flow', secs: 14, href: '/work/case-studies/videoleap/',
    poster: 'https://i.vimeocdn.com/video/1725294113-420903a21824db245b69d45b8cdf9e617abde67e6a9cfe4189233518a69e7471-d_1280?region=us' },
  { id: '865100622', project: 'AutoMarginX', title: 'Inventory', secs: 36, href: '/work/case-studies/automarginx/',
    poster: 'https://i.vimeocdn.com/video/1724843119-2a9387a63e4a7b87a847e72081f11e16e759d8afdee12eaaa8d0076d0007c75a-d_1280?region=us' },
  { id: '865405799', project: 'Videoleap', title: 'Video editor', secs: 14, href: '/work/case-studies/videoleap/',
    poster: 'https://i.vimeocdn.com/video/1725296269-b20880a53499eb949d82d3067ae3b6942822bb60a0434712d2433e7622227bac-d_1280?region=us' },
  { id: '865409674', project: 'Videoleap', title: 'Gamification flow', secs: 34, href: '/work/case-studies/videoleap/',
    poster: 'https://i.vimeocdn.com/video/1725300353-c0b27f2d26dda0aa6f4108f3832ecf77a36c15e3563bb259308508d21df5297d-d_1280?region=us' },
  { id: '865408838', project: 'Videoleap', title: 'Editor, timeline', secs: 22, href: '/work/case-studies/videoleap/',
    poster: 'https://i.vimeocdn.com/video/1725299147-e7ee777ef41af59a9586f356fb324b2f196242d92db451c5a44f760574320553-d_1280?region=us' },
];

const SHOTS: { src: string; title: string }[] = [
  { title: 'Paving Leads', src: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010' },
  { title: 'Binns Media Group', src: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710' },
  { title: 'Untapped Africa', src: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782' },
  { title: 'H2H Marketing', src: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png' },
  { title: 'iLight Care', src: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818' },
  { title: 'Ask Africa', src: 'https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png' },
  { title: 'Friedman & Cohen', src: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776' },
  { title: 'Tar & Chip Paving', src: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933' },
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

export default function MediaReel({
  chapter = 'Reel',
  title = 'Work in',
  italic = 'motion.',
  lead = 'Real product flows from shipped builds, plus a few of the sites behind them. Click any clip to play it.',
  bg = 'bg-black',
}: {
  chapter?: string;
  title?: string;
  italic?: string;
  lead?: string;
  bg?: string;
}) {
  const [open, setOpen] = useState<Clip | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section className={`relative ${bg} py-24 md:py-32 border-t border-white/10 overflow-hidden`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative px-6 lg:px-12 mb-14">
        <ChapterMarker number={chapter} label={`${CLIPS.length} clips · ${SHOTS.length} sites`} />
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 400 }}
          >
            {title} <em className="italic text-[#A3D1FF]">{italic}</em>
          </motion.h2>
          <p className="text-white/60 text-lg leading-relaxed">{lead}</p>
        </div>
      </div>

      {/* Front layer: video clips */}
      <div className="mx-reel relative z-10" style={{ ['--mx-reel-dur' as string]: '55s' }}>
        <div className="mx-reel__track">
          {[...CLIPS, ...CLIPS].map((c, i) => (
            <button
              key={`${c.id}-${i}`}
              type="button"
              onClick={() => setOpen(c)}
              aria-hidden={i >= CLIPS.length}
              tabIndex={i >= CLIPS.length ? -1 : 0}
              aria-label={`Play ${c.project}: ${c.title}`}
              className="group relative shrink-0 w-[300px] md:w-[420px] aspect-[16/10] overflow-hidden bg-[#111] border border-white/10 hover:border-[#A3D1FF]/50 transition-colors text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.poster} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[900ms]" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <span className="mx-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#A3D1FF] text-black grid place-items-center transition-transform duration-500 group-hover:scale-110">
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              </span>
              <span className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
                <span>
                  <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-[#A3D1FF] mb-1">{c.project}</span>
                  <span className="block text-white leading-tight" style={{ fontFamily: SERIF, fontSize: '1.35rem', fontWeight: 500 }}>
                    {c.title}
                  </span>
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/60">0:{String(c.secs).padStart(2, '0')}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Back layer: site mockups, smaller, dimmer, drifting the other way */}
      <div className="mx-reel mx-reel--rev relative mt-6 opacity-60" style={{ ['--mx-reel-dur' as string]: '80s' }}>
        <div className="mx-reel__track">
          {[...SHOTS, ...SHOTS].map((s, i) => (
            <div key={`${s.title}-${i}`} aria-hidden={i >= SHOTS.length} className="relative shrink-0 w-[220px] md:w-[300px] aspect-[16/10] overflow-hidden bg-[#1b1b1b]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={i >= SHOTS.length ? '' : `${s.title} website`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute left-3 bottom-2 text-[9px] font-mono uppercase tracking-[0.25em] text-white/80 drop-shadow">{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${open.project}: ${open.title}`}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">
                  <span className="text-[#A3D1FF]">{open.project}</span> · {open.title}
                </span>
                <div className="flex items-center gap-4">
                  <a href={open.href} className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/70 hover:text-[#A3D1FF] border-b border-white/30 hover:border-[#A3D1FF]">
                    Read the case study
                  </a>
                  <button type="button" onClick={() => setOpen(null)} aria-label="Close video" className="w-9 h-9 grid place-items-center border border-white/20 text-white hover:border-white/60">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="relative aspect-[1920/984] bg-black border border-white/10">
                <iframe
                  src={`https://player.vimeo.com/video/${open.id}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&badge=0`}
                  title={`${open.project}: ${open.title}`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

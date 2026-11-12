"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ChapterMarker, SERIF } from '@/components/ServiceEditorial';
import { ScrollSpiral } from '@/components/MotionAccents';

/*
 * Roofing and roof-coating contractor sites. Homepage shot in front, a
 * detail shot floating behind it at a different scroll speed for depth.
 * Company names only: clients asked to keep personal names off.
 */

type Site = {
  name: string;
  where: string;
  url: string;
  host: string;
  home: string;
  detail?: string;
  summary: string;
  built: string[];
};

const SITES: Site[] = [
  {
    name: 'True Bilt Roofing',
    where: 'Lancaster, York & Delaware counties, PA',
    url: 'https://www.truebiltroofing.com',
    host: 'truebiltroofing.com',
    home: 'https://ik.imagekit.io/qcvroy8xpd/True-Bilt-Roofing-Homepage-Image-Only.jpg?updatedAt=1794496683148',
    detail: 'https://ik.imagekit.io/qcvroy8xpd/True-Bilt-Roofing-Detail-Image-Only.jpg?updatedAt=1794496683604',
    summary:
      'Residential and commercial roofing, from GAF shingles to roof coatings. A page of its own explains what a coating does, the question customers ask most.',
    built: ['Brand recolour', 'Roof coatings page', 'Sitemap + Search Console'],
  },
  {
    name: 'Thomas & Sons',
    where: 'Painting & roof coating · Indianapolis',
    url: 'https://thomas-sons-roofing.vercel.app',
    host: 'thomas-sons-roofing.vercel.app',
    home: 'https://ik.imagekit.io/qcvroy8xpd/Thomas-and-Sons-Homepage-Image-Only.jpg?updatedAt=1794496683166',
    detail: 'https://ik.imagekit.io/qcvroy8xpd/Thomas-and-Sons-Detail-Image-Only.jpg?updatedAt=1794496683296',
    summary:
      'A three-generation family firm. Before-and-after sliders built from their own job photos, and a text-first contact bar on phones.',
    built: ['Before / after sliders', 'Text-first mobile bar', 'Next.js'],
  },
  {
    name: 'ProGrade Roof Coatings',
    where: 'Barn, metal & flat roof coatings',
    url: 'https://www.prograderoofcoating.com',
    host: 'prograderoofcoating.com',
    home: 'https://ik.imagekit.io/qcvroy8xpd/ProGrade-Roof-Coatings-Homepage-Image-Only.jpg?updatedAt=1794496683211',
    summary:
      'Barn and metal roof coatings, with a free-inspection form on every page. Mobile Lighthouse went from about 70 to 90–100 after a performance pass.',
    built: ['Inspection lead form', 'Lighthouse 90–100', 'Next.js'],
  },
];

function SiteRow({ s, i }: { s: Site; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBack = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -80]);
  const yFront = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  const flip = i % 2 === 1;

  return (
    <div ref={ref} className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center border-t border-white/10 pt-14 md:pt-20">
      {/* images */}
      <div className={`lg:col-span-7 relative ${flip ? 'lg:order-2' : ''}`}>
        <div className="relative pb-[12%]">
          {s.detail && (
            <motion.div
              style={{ y: yBack }}
              className={`absolute top-[-6%] w-[46%] aspect-[4/3] overflow-hidden border border-white/10 bg-[#1b1b1b] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ${
                flip ? 'left-[-4%] rotate-[-4deg]' : 'right-[-4%] rotate-[4deg]'
              } hidden sm:block z-0`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.detail} alt={`${s.name} website detail`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top" />
              <span className="absolute inset-0 bg-black/25" />
            </motion.div>
          )}
          <motion.a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ y: yFront }}
            className={`group relative z-10 block ${s.detail ? (flip ? 'ml-[10%]' : 'mr-[10%]') : ''}`}
          >
            <div className="overflow-hidden border border-white/15 bg-[#0f1115] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)] group-hover:border-[#A3D1FF]/50 transition-colors">
              <div className="flex items-center gap-2 px-3 h-7 bg-[#16191f] border-b border-white/10">
                <span className="flex gap-1.5" aria-hidden>
                  <i className="w-2 h-2 rounded-full bg-white/20" />
                  <i className="w-2 h-2 rounded-full bg-white/20" />
                  <i className="w-2 h-2 rounded-full bg-white/20" />
                </span>
                <span className="flex-1 mx-2 truncate text-center text-[9px] font-mono tracking-[0.15em] text-white/45">{s.host}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.home}
                  alt={`${s.name} homepage`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10),transparent_38%)]" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>

      {/* copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}
      >
        <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-4">
          {String(i + 1).padStart(2, '0')} · {s.where}
        </span>
        <h3 className="text-white leading-[1] tracking-[-0.02em] mb-5" style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 3.6vw, 3.25rem)', fontWeight: 400 }}>
          {s.name}
        </h3>
        <p className="text-white/65 text-lg leading-relaxed mb-6">{s.summary}</p>
        <ul className="flex flex-wrap gap-2 mb-8 list-none p-0">
          {s.built.map((b) => (
            <li key={b} className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-white/15 text-white/60">
              {b}
            </li>
          ))}
        </ul>
        <a
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 hover:bg-[#A3D1FF] transition-colors group"
        >
          Visit the live site
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
}

export default function RoofingSites() {
  return (
    <section id="roofing" className="relative bg-black border-t border-white/10 py-24 md:py-32 px-6 lg:px-12 overflow-hidden scroll-mt-20">
      <ScrollSpiral className="absolute top-24 -left-20 hidden xl:block opacity-60" size={260} />
      <div className="absolute bottom-0 right-[-10%] w-[700px] h-[600px] bg-[#A3D1FF]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Industry" label={`Roofing · ${SITES.length} live sites`} />
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 text-white leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 400 }}
          >
            Roofing websites, <em className="italic text-[#A3D1FF]">built to get the call.</em>
          </motion.h2>
          <p className="lg:col-span-5 text-white/60 text-lg leading-relaxed">
            Sites for roofers and roof-coating contractors. Each one shows the company&apos;s
            real jobs and puts an estimate or inspection request one tap away.
          </p>
        </div>
        <div className="space-y-20 md:space-y-28">
          {SITES.map((s, i) => (
            <SiteRow key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Play, Trophy, Linkedin, Building2 } from 'lucide-react';

const SERIF = 'var(--font-heading)';
const CHANNEL_URL = 'https://www.youtube.com/@MarcFriedmanWebDesign';
const LINKEDIN_PERSONAL = 'https://www.linkedin.com/in/portfolio2/';
const LINKEDIN_COMPANY = 'https://www.linkedin.com/company/105745552/';
const AWWWARDS_URL = 'https://www.awwwards.com/marc-friedman/';
const FEATURED_EMBED = 'https://www.youtube.com/embed/SSPvyg-vv0Y?si=qVOr7nBBYBGV286p';

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function YouTubeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const typeY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none"
      />
      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Broadcast" label="YouTube · @MarcFriedmanWebDesign" />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* LEFT — copy */}
          <motion.div style={{ y: typeY }} className="lg:sticky lg:top-32">
            <h2
              className="text-white leading-[0.92] tracking-[-0.035em] mb-6"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 400,
              }}
            >
              Now on{' '}
              <em className="italic text-[#A3D1FF]">YouTube.</em>
            </h2>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-md">
              Teardowns, build-alongs, and behind-the-scenes from the studio.{' '}
              <em className="text-white not-italic font-medium" style={{ fontFamily: SERIF }}>
                New videos weekly.
              </em>
            </p>

            <div className="space-y-3">
              {/* Primary CTA */}
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black font-medium px-6 py-3 hover:bg-[#A3D1FF] transition-colors group"
              >
                <Play className="w-4 h-4 fill-current" />
                Subscribe on YouTube
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary socials row */}
              <div className="pt-2">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
                  — Also find me on
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={LINKEDIN_PERSONAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn — Marc Friedman"
                    className="inline-flex items-center gap-2 text-sm text-white/80 font-medium border border-white/20 px-4 py-2 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors group"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={LINKEDIN_COMPANY}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn — Marc Friedman Web Design company page"
                    className="inline-flex items-center gap-2 text-sm text-white/80 font-medium border border-white/20 px-4 py-2 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors group"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    Company page
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={AWWWARDS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Awwwards profile"
                    className="inline-flex items-center gap-2 text-sm text-white/80 font-medium border border-white/20 px-4 py-2 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors group"
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    Awwwards
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — video embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-[#111418] border border-white/10 p-2 md:p-3">
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  src={FEATURED_EMBED}
                  title="Marc Friedman Web Design — featured video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

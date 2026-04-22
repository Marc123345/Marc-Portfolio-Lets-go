"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const SERIF = "Georgia, 'Times New Roman', serif";
const CALENDLY_LINK = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';
const PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';

const ROLES = ['designer', 'developer', 'strategist', 'operator'];

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
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

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['-5%', '6%']);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.06]);

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 -right-40 w-[640px] h-[640px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · The Operator" label="About · One Person" />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          {/* Left — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                src={PORTRAIT}
                alt="Marc Friedman"
                className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
                style={{ y: portraitY, scale: portraitScale }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Film marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />

              {/* Top meta */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.3em] text-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF]" />
                  Profile · 01
                </span>
                <span>Est. 2018</span>
              </div>

              {/* Bottom caption + signature */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/55 mb-2">
                    The Operator
                  </div>
                  <div
                    className="text-white italic leading-[0.9]"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                      fontWeight: 400,
                    }}
                  >
                    Marc Friedman
                  </div>
                </div>
                <div
                  className="text-white/80 italic leading-none hidden sm:block"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                    fontWeight: 400,
                  }}
                >
                  M.F.
                </div>
              </div>
            </div>

            {/* Vertical ticker */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute -left-8 top-6 text-[10px] font-mono uppercase tracking-[0.35em] text-white/40"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Portrait · Vol. 01 · b&w
            </motion.div>
          </motion.div>

          {/* Right — editorial composition */}
          <div>
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8 text-[10px] font-mono uppercase tracking-[0.35em] text-[#A3D1FF]"
            >
              <span>— In one sentence</span>
              <span className="h-[1px] w-8 bg-[#A3D1FF]/50" />
            </motion.div>

            {/* Headline with kinetic word */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-white leading-[0.95] tracking-[-0.03em] mb-10"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.25rem, 5.5vw, 5rem)',
                fontWeight: 400,
              }}
            >
              I&apos;m the{' '}
              <span className="relative inline-block align-baseline overflow-hidden">
                {/* Ghost-size spacer so layout doesn't jump */}
                <span className="invisible italic">strategist.</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 italic text-[#A3D1FF] whitespace-nowrap"
                  >
                    {ROLES[roleIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              One person.
            </motion.h2>

            {/* Role pills — subtly indicate the cycle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-10"
            >
              {ROLES.map((r, i) => (
                <span
                  key={r}
                  className={`text-[10px] font-mono uppercase tracking-[0.25em] px-2.5 py-1 border transition-colors duration-400 ${
                    i === roleIndex
                      ? 'border-[#A3D1FF] text-[#A3D1FF]'
                      : 'border-white/15 text-white/45'
                  }`}
                >
                  {r}
                </span>
              ))}
            </motion.div>

            {/* Supporting copy — two tight paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-xl"
            >
              <p>
                At an agency, your project gets passed between a designer, a developer, a
                PM, and{' '}
                <em className="text-white/90" style={{ fontFamily: SERIF }}>
                  whoever&apos;s available on Tuesday
                </em>
                .
              </p>
              <p>
                With me, the person who designs your site is the same person who codes it.
                Fewer misunderstandings, faster turnarounds, a website that actually matches
                the vision.
              </p>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-stretch divide-x divide-white/10 border-y border-white/10 py-6 mb-10"
            >
              {[
                { n: '01', l: 'Contact' },
                { n: '00', l: 'Handoffs' },
                { n: '50+', l: 'Shipped' },
              ].map((s) => (
                <div key={s.l} className="flex-1 px-4 first:pl-0">
                  <div
                    className="text-white italic leading-none mb-2"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                      fontWeight: 400,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/50">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
              >
                <MessageSquare className="w-4 h-4" />
                Let&apos;s talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
              >
                Full profile
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

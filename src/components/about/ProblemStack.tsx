"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SERIF = 'var(--font-heading)';

/*
 * "In their words": each thing clients say, paired with the fix and a
 * shipped project that shows it. Cards pin and pile up as you scroll;
 * the ones underneath shrink and dim so the stack reads as depth.
 * Proof figures are the same ones the case studies use.
 */

type Problem = {
  quote: string;
  fix: string;
  proof?: { title: string; href: string; image: string; stat: string; label: string };
  cta?: { text: string; href: string };
};

const PROBLEMS: Problem[] = [
  {
    quote: "Our website looks like it was built in 2018 and we're embarrassed to send people there.",
    fix: 'A custom redesign around how your buyers decide, not a new theme on the old structure.',
    proof: {
      title: 'Friedman & Cohen',
      href: '/work/case-studies/friedman-cohen/',
      image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776',
      stat: '100+',
      label: 'year-old brand, rebuilt',
    },
  },
  {
    quote: "We're getting traffic but nobody's filling out the contact form.",
    fix: 'Pages rebuilt around one clear next step, with calls and forms placed where people decide.',
    proof: {
      title: 'A Secure Annapolis',
      href: '/work/case-studies/secure-annapolis/',
      image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
      stat: '+150%',
      label: 'leads',
    },
  },
  {
    quote: "Our site takes forever to load and we're losing people before they even see what we do.",
    fix: 'Hand-coded in Next.js, images and scripts trimmed, so pages load in under two seconds.',
    proof: {
      title: 'Paving Leads',
      href: '/work/case-studies/paving-leads/',
      image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
      stat: '98',
      label: 'Lighthouse, up from failing',
    },
  },
  {
    quote: "We're copy-pasting data between 4 different tools and it's eating our week.",
    fix: 'One dashboard that pulls the data together, so the numbers update themselves.',
    proof: {
      title: 'AutoMarginX',
      href: '/work/case-studies/automarginx/',
      image: 'https://ik.imagekit.io/qcvroy8xpd/1732717492455.jpeg',
      stat: '35%',
      label: 'faster decisions',
    },
  },
  {
    quote: "I know what I want but I can't explain it to a developer.",
    fix: 'You explain it to me. I design it, build it and ship it, so nothing gets lost in a handoff.',
    proof: {
      title: 'iLight Care',
      href: '/work/case-studies/ilight/',
      image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
      stat: '6 wk',
      label: 'vision to MVP',
    },
  },
  {
    quote: "We've spent money on marketing but have no idea what's working.",
    fix: 'Analytics and lead tracking set up on every build, so you can see which channel sent each enquiry.',
    cta: { text: 'Run the free website analyzer', href: '/tools/website-analyzer/' },
  },
];

function Card({
  p,
  i,
  n,
  progress,
  reduce,
}: {
  p: Problem;
  i: number;
  n: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  // shrink + dim once later cards slide over this one
  const start = i / n;
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : 1 - (n - 1 - i) * 0.035]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1.6 / n)], [0, i === n - 1 || reduce ? 0 : 0.55]);

  return (
    <div className="md:sticky md:h-[78vh] md:flex md:items-start" style={{ top: `calc(6.5rem + ${i * 18}px)` }}>
      <motion.article
        style={{ scale, transformOrigin: 'top center' }}
        className="relative w-full overflow-hidden border border-white/10 bg-[#0f1115] shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.9)]"
      >
        {/* glow + grain */}
        <span aria-hidden className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-[#A3D1FF]/10 blur-[110px] pointer-events-none" />
        <span
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 p-7 sm:p-10 lg:p-14">
          {/* the quote */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#A3D1FF]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
              </span>
              <span className="h-[1px] w-10 bg-white/15" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">What clients say</span>
            </div>
            <blockquote className="relative">
              <span
                aria-hidden
                className="absolute -top-10 -left-2 text-transparent select-none"
                style={{ fontFamily: SERIF, fontSize: '9rem', lineHeight: 1, fontStyle: 'italic', WebkitTextStroke: '1px rgba(163,209,255,0.45)' }}
              >
                &ldquo;
              </span>
              <p
                className="relative italic text-white leading-[1.15] tracking-[-0.01em]"
                style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem, 3.2vw, 3rem)', fontWeight: 400 }}
              >
                {p.quote}
              </p>
            </blockquote>
            <div className="mt-auto pt-10 border-t border-white/10">
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-3">The fix</span>
              <p className="text-white/75 text-lg leading-relaxed max-w-xl">{p.fix}</p>
            </div>
          </div>

          {/* the proof */}
          <div className="lg:col-span-5">
            {p.proof ? (
              <Link href={p.proof.href} className="group block" style={{ perspective: 1200 }}>
                <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">Proof · shipped</span>
                <span
                  className="relative block aspect-[4/3] overflow-hidden border border-white/10 bg-[#1b1b1b] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] transition-transform duration-700 [transform:rotateY(-8deg)_rotateX(4deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.proof.image} alt={`${p.proof.title} website`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12),transparent_40%)]" />
                  <span className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                    <span>
                      <span className="block text-white leading-none" style={{ fontFamily: SERIF, fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontVariantNumeric: 'tabular-nums' }}>
                        {p.proof.stat}
                      </span>
                      <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 mt-2">{p.proof.label}</span>
                    </span>
                    <span className="w-10 h-10 shrink-0 grid place-items-center bg-white text-black group-hover:bg-[#A3D1FF] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </span>
                </span>
                <span className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-white" style={{ fontFamily: SERIF, fontSize: '1.25rem' }}>{p.proof.title}</span>
                  <span className="text-white/50 group-hover:text-[#A3D1FF] transition-colors">Read the case study</span>
                </span>
              </Link>
            ) : p.cta ? (
              <div className="h-full flex flex-col justify-end">
                <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">Start here · free</span>
                <Link
                  href={p.cta.href}
                  className="group relative block border border-[#A3D1FF]/40 bg-[#A3D1FF]/[0.06] hover:bg-[#A3D1FF]/[0.12] p-7 transition-colors"
                >
                  <span className="block text-white leading-tight mb-6" style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem, 2.6vw, 2.25rem)' }}>
                    {p.cta.text}
                  </span>
                  <span className="flex items-center justify-between text-sm text-white/60">
                    See what your site is missing in about a minute.
                    <span className="mx-pulse w-11 h-11 shrink-0 ml-4 rounded-full bg-[#A3D1FF] text-black grid place-items-center">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </span>
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        {/* dims as the next card covers it */}
        <motion.span aria-hidden className="absolute inset-0 bg-black pointer-events-none" style={{ opacity: dim }} />
      </motion.article>
    </div>
  );
}

export default function ProblemStack() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const n = PROBLEMS.length;

  return (
    <div ref={ref} className="relative space-y-6 md:space-y-0">
      {PROBLEMS.map((p, i) => (
        <Card key={p.quote} p={p} i={i} n={n} progress={scrollYProgress} reduce={reduce} />
      ))}
    </div>
  );
}

"use client";

/**
 * Case study page in the FlyStudio "project details" layout (project-details.html):
 * breadcrumb, centred pills + giant uppercase title, a Client / Industry /
 * Engagement / Project-page row, an arched hero image, then two-column sections
 * (label left, content right) broken up by image rows, a "Next project" card and
 * an accent CTA panel. Every case study passes a CaseStudyConfig; the shape of
 * that config is unchanged so the 15 case files did not need editing.
 */

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

const HEAD = 'var(--font-heading)';

export type ProcessSection = {
  label: string;
  narrative?: React.ReactNode;
  /** Small mono caption above the rows, like "What wasn't working". */
  rowsLabel?: string;
  rows?: { title: string; description?: string }[];
};

export type CaseStudyConfig = {
  // Masthead
  kicker: string;
  pkg?: string;
  title: string;
  italicWord: string;
  tagline: React.ReactNode;
  heroImage: string;
  /** Muted, looping Vimeo clip played inside the hero; heroImage stays as its poster. */
  heroVideo?: { vimeoId: string; width: number; height: number };
  metaStats: { label: string; value: string }[];
  liveUrl?: string;
  purchaseLabel?: string;
  fullImages?: boolean;

  // Marquee tags
  marquee: string[];

  // Challenge
  challenge: {
    narrative: React.ReactNode;
    bullets?: string[];
  };

  // Solution
  solution: {
    narrative: React.ReactNode;
    items: { title: string; description: string }[];
    tech: string[];
  };

  // Results
  results: {
    stats: { value: string; label: string }[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };

  // Process: strategy-first blocks shown after Overview (goals, market, scope),
  // and a validation block shown after "What I built". Same Block + Rows styling.
  strategy?: ProcessSection[];
  validation?: ProcessSection;

  // Gallery
  gallery: { image: string; caption?: string; wide?: boolean }[];
  // Product flows recorded on Vimeo, shown full width.
  // width/height are the recording's size, used for the aspect ratio.
  videos?: { vimeoId: string; title: string; width: number; height: number }[];

  // Next case
  next: {
    title: string;
    url: string;
    image: string;
  };
};

/* ------------------------------------------------------------------ */
/* small parts                                                         */
/* ------------------------------------------------------------------ */
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Pill({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${
        accent ? 'bg-[#A3D1FF] text-black' : 'bg-[#1a1a1a] text-white/80'
      }`}
    >
      {children}
    </span>
  );
}

function Img({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [broken, setBroken] = useState(false);
  if (!src || broken) return <div className={`bg-[#161616] ${className}`} aria-hidden="true" />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setBroken(true)} className={className} />;
}

/** FlyStudio's two-column block: uppercase label left, content right. */
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.section {...reveal} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-14 md:py-20 border-t border-white/10 first:border-t-0">
      <h2
        className="lg:col-span-4 m-0 uppercase text-white leading-[1] lg:sticky lg:top-28 self-start"
        style={{ fontFamily: HEAD, fontSize: 'clamp(1.9rem, 3.2vw, 2.9rem)', fontWeight: 500 }}
      >
        {label}
      </h2>
      <div className="lg:col-span-8">{children}</div>
    </motion.section>
  );
}

/** Numbered rows divided by rules, like FlyStudio's service / tech lists. */
function Rows({ items }: { items: { title: string; description?: string }[] }) {
  return (
    <ul className="mt-10 border-t border-white/10">
      {items.map((it, i) => (
        <li key={it.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-6 border-b border-white/10">
          <span className="font-mono text-xs text-[#A3D1FF] pt-1.5" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="m-0 uppercase text-white leading-tight" style={{ fontFamily: HEAD, fontSize: 'clamp(1.15rem, 1.6vw, 1.4rem)', fontWeight: 500 }}>
              {it.title}
            </h3>
            {it.description && <p className="mt-2 text-white/60 leading-relaxed">{it.description}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

/** A strategy / validation step, drawn exactly like the Overview block. */
function ProcessBlock({ section }: { section: ProcessSection }) {
  return (
    <Block label={section.label}>
      {section.narrative && (
        <div className="text-lg md:text-xl text-white/75 leading-relaxed space-y-5 [&>p:first-child]:text-white">
          {section.narrative}
        </div>
      )}
      {section.rows && section.rows.length > 0 && (
        <>
          {section.rowsLabel && (
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{section.rowsLabel}</p>
          )}
          <Rows items={section.rows} />
        </>
      )}
    </Block>
  );
}

/** Gallery: every image shows whole, at its own proportions, stacked full width. */
function ImageRow({ items, fullImages }: { items: CaseStudyConfig['gallery']; fullImages?: boolean }) {
  if (!items.length) return null;
  return (
    <div className="my-8 space-y-10">
      {items.map((item) => (
        <motion.figure key={item.image} {...reveal}>
          <Img src={item.image} alt={item.caption || ''} className={fullImages ? "block h-auto w-full" : "block h-auto w-full rounded-[20px] bg-[#111]"} />
          {item.caption && <figcaption className="mt-3 text-sm text-white/70">{item.caption}</figcaption>}
        </motion.figure>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */
export default function CaseStudyLayout({ config }: { config: CaseStudyConfig }) {
  const {
    kicker, pkg, title, italicWord, tagline, heroImage, heroVideo, metaStats, liveUrl,
    marquee, challenge, solution, results, gallery, videos = [], next, strategy = [], validation,
  } = config;
  const buyButton = liveUrl && config.purchaseLabel ? (
    <a className="ui-btn ui-btn-primary mt-6" href={liveUrl}>
      {config.purchaseLabel} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  ) : null;
  const reduceMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  // "Case File · 01 · Media Platform" → number "01", industry "Media Platform"
  const kParts = kicker.split('·').map((s) => s.trim());
  const fileNo = kParts.find((s) => /^\d+$/.test(s));
  const industry = kParts[kParts.length - 1];
  const clientName = `${title} ${italicWord}`.replace(/\.$/, '');
  const host = liveUrl ? liveUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : '';

  // Gallery split around the text, FlyStudio style; skip images that only repeat the hero.
  const shots = gallery.filter((g) => g.image && g.image !== heroImage);
  const firstRow = shots.slice(0, 3);
  const laterRow = shots.slice(3);

  const nextP = PROJECTS.find((p) => p.caseStudyUrl === next.url);
  const ratio = heroVideo ? heroVideo.width / heroVideo.height : 1;

  return (
    <div className="bg-black text-white">
      {/* ============== HEADER ============== */}
      <header className="relative px-6 lg:px-12 pt-28 md:pt-32 overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[460px] bg-[#A3D1FF]/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/work/case-studies/" className="hover:text-white">Case studies</Link>
            <span className="mx-2">/</span>
            <span className="text-white underline underline-offset-4">{clientName}</span>
          </nav>

          <div className="text-center mt-16 md:mt-20">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-1.5 mb-7">
              {marquee.slice(0, 2).map((m) => <Pill key={m}>{m}</Pill>)}
              {fileNo && <Pill accent>Case file {fileNo}</Pill>}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="m-0 uppercase text-white leading-[0.9] tracking-[-0.01em] mx-auto max-w-6xl"
              style={{ fontFamily: HEAD, fontSize: 'clamp(3rem, 9.5vw, 9rem)', fontWeight: 500 }}
            >
              {title} <span className="text-[#A3D1FF]">{italicWord}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mt-7 leading-snug"
            >
              {tagline}
            </motion.p>
            {buyButton}
          </div>

          {/* Client / Industry / Engagement / Project page */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 md:mt-24 grid grid-cols-2 md:flex md:justify-between gap-x-6 gap-y-6"
          >
            {[
              { k: 'Client', v: clientName },
              { k: 'Industry', v: industry },
              ...(pkg ? [{ k: 'Engagement', v: pkg }] : []),
            ].map((m) => (
              <div key={m.k}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mb-1.5">{m.k}</dt>
                <dd className="m-0 uppercase text-white" style={{ fontFamily: HEAD, fontSize: 'clamp(1rem, 1.4vw, 1.3rem)' }}>{m.v}</dd>
              </div>
            ))}
            <div className="md:text-right">
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mb-1.5">Project page</dt>
              <dd className="m-0 uppercase" style={{ fontFamily: HEAD, fontSize: 'clamp(1rem, 1.4vw, 1.3rem)' }}>
                {liveUrl ? (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white hover:text-[#A3D1FF] transition-colors">
                    {host} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-white/70">Private build</span>
                )}
              </dd>
            </div>
          </motion.dl>
        </div>
      </header>

      {/* ============== ARCHED HERO IMAGE ============== */}
      <div className="px-6 lg:px-12 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={config.fullImages ? "relative max-w-7xl mx-auto" : heroVideo ? "relative max-w-7xl mx-auto aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-[#111] rounded-b-[20px] rounded-t-[120px] md:rounded-t-[min(22vw,300px)]" : "relative max-w-7xl mx-auto overflow-hidden bg-[#111] rounded-[20px]"}
          style={heroVideo && !config.fullImages ? { containerType: 'size' } : undefined}
        >
          {/* Images are never cropped; only a hero with a video keeps the fixed arched frame the video fills. */}
          <Img src={heroImage} alt={config.fullImages ? title + " product cover" : `${clientName} website`} className={heroVideo && !config.fullImages ? "absolute inset-0 h-full w-full object-cover object-top" : "block h-auto w-full"} />
          {heroVideo && !reduceMotion && (
            <iframe
              src={`https://player.vimeo.com/video/${heroVideo.vimeoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1`}
              title=""
              aria-hidden="true"
              tabIndex={-1}
              allow="autoplay; fullscreen; picture-in-picture"
              onLoad={() => setVideoReady(true)}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
              style={{
                width: `max(100cqw, ${(100 * ratio).toFixed(2)}cqh)`,
                height: `max(100cqh, ${(100 / ratio).toFixed(2)}cqw)`,
                border: 0,
              }}
            />
          )}
        </motion.div>
      </div>

      {/* headline numbers from the brief */}
      {metaStats.length > 0 && (
        <div className="px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-[20px] overflow-hidden mt-6">
            {metaStats.map((s) => (
              <div key={s.label} className="bg-[#0d0d0d] px-5 py-6 md:px-7 md:py-8">
                <div className="text-white leading-none" style={{ fontFamily: HEAD, fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============== BODY ============== */}
      <main className="px-6 lg:px-12 pt-10 md:pt-16">
        <div className="max-w-6xl mx-auto">
          <Block label="Overview">
            <div className="text-lg md:text-xl text-white/75 leading-relaxed space-y-5 [&>p:first-child]:text-white">
              {challenge.narrative}
            </div>
            {challenge.bullets && challenge.bullets.length > 0 && (
              <>
                <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">What wasn&apos;t working</p>
                <Rows items={challenge.bullets.map((b) => ({ title: b }))} />
              </>
            )}
          </Block>

          {strategy.map((s) => <ProcessBlock key={s.label} section={s} />)}

          <ImageRow items={firstRow} fullImages={config.fullImages} />

          <Block label="What I built">
            <div className="text-lg md:text-xl text-white/75 leading-relaxed space-y-5 [&>p:first-child]:text-white">
              {solution.narrative}
            </div>
            <Rows items={solution.items} />
          </Block>

          {validation && <ProcessBlock section={validation} />}

          {videos.length > 0 && (
            <div className="my-6 space-y-6">
              {videos.map((v) => (
                <motion.figure key={v.vimeoId} {...reveal} className="overflow-hidden rounded-[20px] bg-[#111]">
                  <div className="relative w-full" style={{ aspectRatio: `${v.width} / ${v.height}` }}>
                    <iframe
                      src={`https://player.vimeo.com/video/${v.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                      title={v.title}
                      loading="lazy"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <figcaption className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">{v.title}</figcaption>
                </motion.figure>
              ))}
            </div>
          )}

          {solution.tech.length > 0 && (
            <Block label="Tech stack">
              <div className="flex flex-wrap gap-2">
                {solution.tech.map((t, i) => <Pill key={t} accent={i === 0}>{t}</Pill>)}
              </div>
            </Block>
          )}

          <ImageRow items={laterRow} fullImages={config.fullImages} />
          {buyButton}

          {results.stats.length > 0 && (
            <Block label="Results">
              <div className="grid grid-cols-2 gap-px bg-white/10 rounded-[20px] overflow-hidden">
                {results.stats.map((s) => (
                  <div key={s.label} className="bg-black px-6 py-8">
                    <div className="text-[#A3D1FF] leading-none" style={{ fontFamily: HEAD, fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
                      {s.value}
                    </div>
                    <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/55">{s.label}</div>
                  </div>
                ))}
              </div>
            </Block>
          )}

          {results.testimonial && (
            <Block label="Client's feedback">
              <blockquote className="m-0">
                <p className="m-0 text-white text-xl md:text-2xl leading-snug">&ldquo;{results.testimonial.quote}&rdquo;</p>
                <footer className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="text-[#A3D1FF] text-lg" style={{ fontFamily: HEAD }}>{results.testimonial.author}</span>
                  {results.testimonial.role.split(',').map((r) => <Pill key={r}>{r.trim()}</Pill>)}
                </footer>
              </blockquote>
            </Block>
          )}
        </div>
      </main>

      {/* ============== NEXT PROJECT ============== */}
      <section className="px-6 lg:px-12 pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <h2 className="m-0 uppercase text-white leading-none" style={{ fontFamily: HEAD, fontSize: 'clamp(1.9rem, 3.2vw, 2.9rem)', fontWeight: 500 }}>
              Next project
            </h2>
            <Link href="/work/case-studies/" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 hover:text-white">
              All case studies
            </Link>
          </div>
          <Link href={next.url} className="group grid md:grid-cols-2 gap-3 md:gap-4 rounded-[24px] bg-[#141414] p-3 md:p-4 hover:bg-[#1a1a1a] transition-colors">
            <div className="flex flex-col justify-between p-4 md:p-6 order-2 md:order-1">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {(nextP ? [nextP.category, ...nextP.tags.slice(0, 2)] : ['Case file']).map((t, i) => <Pill key={t} accent={i === 0}>{t}</Pill>)}
                </div>
                <h3 className="m-0 uppercase text-white leading-[0.95] group-hover:text-[#A3D1FF] transition-colors" style={{ fontFamily: HEAD, fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', fontWeight: 500 }}>
                  {next.title}
                </h3>
              </div>
              <div className="mt-10">
                {nextP && <p className="text-white/60 leading-relaxed max-w-md mb-6">{nextP.blurb}</p>}
                <span className="ui-btn ui-btn-primary">
                  See project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
            <div className="relative order-1 md:order-2 overflow-hidden rounded-[18px] bg-[#1d1d1d]">
              <Img src={nextP?.image || next.image} alt={`${next.title} website`} className="block h-auto w-full transition-transform duration-[900ms] group-hover:scale-[1.04]" />
            </div>
          </Link>
        </div>
      </section>

      {/* ============== CTA (FlyStudio "Let's talk about your project") ============== */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <motion.div {...reveal} className="relative max-w-7xl mx-auto overflow-hidden rounded-[28px] bg-[#A3D1FF] px-6 py-20 md:py-28 text-center text-black">
          <div className="flex flex-wrap justify-center gap-1.5 mb-6">
            <span className="rounded-full bg-black/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em]">Taking bookings</span>
            <span className="rounded-full bg-black/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em]">2026</span>
          </div>
          <h2 className="m-0 uppercase leading-[0.92] mx-auto max-w-4xl" style={{ color: '#000', fontFamily: HEAD, fontSize: 'clamp(2.5rem, 7vw, 6rem)', fontWeight: 500 }}>
            Want to be the next case file?
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact/" className="ui-btn ui-btn-ink">
              Book a strategy call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/work/" className="ui-btn bg-black/10 text-black hover:bg-black/15">
              See all work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

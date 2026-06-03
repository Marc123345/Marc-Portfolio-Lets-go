'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CALENDLY_LINK } from '@/lib/constants';

const SERIF = 'var(--font-heading)';
const CTA_LABEL = "Show Me What's Broken";

const GRAIN_BG = {
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
};

function scrollToBook(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function CTAButton({ size = 'md' }: { size?: 'md' | 'lg' | 'xl' }) {
  const pad =
    size === 'xl' ? 'px-12 py-7' : size === 'lg' ? 'px-8 py-4' : 'px-6 py-3';
  const text =
    size === 'xl' ? 'text-xl md:text-2xl' : size === 'lg' ? 'text-base' : 'text-sm';
  const iconSize = size === 'xl' ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <a
      href="#book"
      onClick={scrollToBook}
      className={`inline-flex items-center gap-4 bg-white text-black font-semibold ${pad} ${text} hover:bg-[#A3D1FF] transition-colors group cursor-pointer tracking-tight shadow-[0_20px_60px_-15px_rgba(163,209,255,0.45)]`}
    >
      {CTA_LABEL}
      <ArrowUpRight className={`${iconSize} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
    </a>
  );
}

export default function DentalLandingPage() {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#0a0a0a';
    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  // Load Calendly's widget assets and let widget.js auto-init the inline
  // .calendly-inline-widget div via its built-in DOM scan (matches the
  // official embed snippet). UTM/gclid params from the landing URL are
  // appended to the div's data-url *before* the script loads so paid-traffic
  // attribution carries into the Calendly booking record.
  useEffect(() => {
    // 1. Append UTM/gclid passthrough to the widget's data-url
    const passthrough = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'];
    const pageParams = new URLSearchParams(window.location.search);
    const utm = passthrough
      .filter((k) => pageParams.has(k))
      .map((k) => `${k}=${encodeURIComponent(pageParams.get(k) || '')}`)
      .join('&');
    if (utm) {
      document.querySelectorAll<HTMLElement>('.calendly-inline-widget').forEach((el) => {
        const current = el.getAttribute('data-url') || '';
        const sep = current.includes('?') ? '&' : '?';
        el.setAttribute('data-url', current + sep + utm);
      });
    }

    // 2. Inject Calendly CSS (head)
    if (!document.getElementById('calendly-widget-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-widget-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // 3. Inject Calendly widget.js — auto-detects .calendly-inline-widget
    if (!document.getElementById('calendly-widget-js')) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-js';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Fire a GA4 conversion event when a Calendly booking completes.
  // Calendly posts a `calendly.event_scheduled` message on the confirmation
  // step; we forward it to GA4 as `calendly_booking` for import into Google
  // Ads as a conversion. Only fires on completion, never on widget load.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data && e.data.event === 'calendly.event_scheduled') {
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
        if (typeof gtag === 'function') {
          gtag('event', 'calendly_booking', {
            event_category: 'conversion',
            event_label: 'dental_audit_booking',
            send_to: 'G-CV8EEZJLCW',
          });
        }
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      {/* Note: floating Calendly badge intentionally NOT mounted on this page
          to preserve a 1:1 attention ratio with the hero CTA. */}

      {/* ═══════════════ HERO — 2-column on desktop: copy + inline Calendly ═══════════════ */}
      <section
        id="book"
        className="relative px-6 lg:px-12 pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden border-b border-white/10 scroll-mt-6"
      >
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[#A3D1FF]/10 rounded-full blur-[160px] pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div aria-hidden className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" style={GRAIN_BG} />

        <div className="max-w-[1280px] mx-auto relative grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy + CTA */}
          <div className="text-center lg:text-left">
            <p className="text-white/60 text-xs md:text-sm font-mono tracking-[0.32em] uppercase mb-8">
              Free 30-Minute Site Audit — For US Dental Practices
            </p>

            <h1
              className="text-white leading-[0.92] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
                fontWeight: 500,
              }}
            >
              I&apos;ll show you exactly why your dental website{' '}
              <em className="italic text-[#A3D1FF]">isn&apos;t booking patients</em>{' '}
              — in 30 minutes, live, free.
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0">
              A 30-minute working session with the designer and developer who&apos;d actually rebuild your site. You leave with a written fix list.
            </p>

            {/* Curly arrow with loop — points right on desktop, down on mobile */}
            <div className="flex justify-center lg:justify-end lg:pr-4">
              <svg
                viewBox="0 0 220 130"
                fill="none"
                stroke="#A3D1FF"
                strokeWidth={2.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-44 h-28 md:w-56 md:h-32 rotate-90 lg:rotate-0"
                aria-hidden
              >
                <path d="M 15 25 Q 55 10, 85 35 Q 105 55, 90 75 Q 75 100, 50 92 Q 25 80, 55 60 Q 95 40, 145 60 L 200 60" />
                <polyline points="190,48 205,60 190,72" />
              </svg>
            </div>
          </div>

          {/* RIGHT — inline Calendly widget */}
          <div>
            <div
              id="dental-calendly-inline"
              className="calendly-inline-widget"
              data-url={CALENDLY_LINK}
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 02 — COST OF INACTION (now with image) ═══════════════ */}
      <section className="relative px-6 lg:px-12 py-24 md:py-36 border-b border-white/10 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <h2
            className="text-white leading-[0.95] tracking-[-0.035em] max-w-5xl mb-16"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4.5vw, 4.25rem)',
              fontWeight: 400,
            }}
          >
            Your website is losing you <em className="italic text-[#A3D1FF]">$4,300 a month.</em> Conservatively.
          </h2>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center mb-16">
            {/* Image — anchored bottom, no card chrome */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[560px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/image%201%20(11).png?tr=w-900,q-90,f-webp"
                alt="Marc Friedman with a laptop showing a dental practice website mockup"
                className="absolute inset-x-0 bottom-0 w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Math copy */}
            <div className="space-y-5">
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Math: the average dental practice gets 1,200 monthly visits to its site. Industry conversion rate for booking forms is 3.2%.<sup className="text-[#A3D1FF]/70">¹</sup> Most practice sites I audit convert at 0.8% — a 2.4% gap.
              </p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                On a $400 average patient value, that&apos;s 28 lost patients per month.{' '}
                <em className="text-white not-italic font-medium" style={{ fontFamily: SERIF }}>
                  $11,200/month if they become recurring.
                </em>{' '}
                Your competitor down the street with the better site? They&apos;re capturing those patients.
              </p>
              <p className="text-xs text-white/40 leading-relaxed pt-4">
                ¹ Based on Smile Marketing 2024 dental industry benchmarks (3.2% booking conversion, median $400 lifetime patient value).
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 bg-[#111418]">
            {[
              { stat: '5.8s → 1.7s', label: 'Avg load time of sites I audit, vs the ones I ship.' },
              { stat: '0.8% vs 3.2%', label: 'Practice mobile conversion rate vs industry standard.' },
              { stat: '53%', label: 'Of mobile users abandon sites taking longer than 3s.' },
            ].map((item, i) => (
              <div
                key={item.stat}
                className={`px-8 py-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-white/10' : ''}`}
              >
                <div
                  className="text-[#A3D1FF] tabular-nums leading-none mb-3"
                  style={{ fontFamily: SERIF, fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)', fontWeight: 500 }}
                >
                  {item.stat}
                </div>
                <div className="text-sm text-white/60 leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 03 — DELIVERABLE ═══════════════ */}
      <section className="relative px-6 lg:px-12 py-24 md:py-36 border-b border-white/10 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start mb-14">
            <div>
              <h2
                className="text-white leading-[0.92] tracking-[-0.035em]"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                  fontWeight: 400,
                }}
              >
                What you&apos;ll have in your inbox <em className="italic text-[#A3D1FF]">30 minutes</em> after we hang up.
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                A written audit. Not a sales deck. Five specific findings, each with a fix and a difficulty rating.
              </p>
            </div>
          </div>

          <ol className="border-t border-white/10">
            {[
              { num: '01', title: 'PageSpeed Audit', body: 'Your current Lighthouse score (mobile + desktop), the 3 biggest bottlenecks, and which to fix first.' },
              { num: '02', title: 'Mobile Booking Path', body: "I screen-record myself trying to book an appointment from your homepage. You see exactly where you'd lose a real patient." },
              { num: '03', title: 'Local SEO Position', body: 'Where you rank for "[your city] dentist" today, who\'s beating you, and the 2 changes that move the needle.' },
              { num: '04', title: 'Conversion Path Map', body: 'The 7 steps from "googled you" to "booked appointment" — and where patients drop off.' },
              { num: '05', title: 'Competitive Audit', body: 'I pull up 2 nearby practices and show you a side-by-side. Brutal but useful.' },
            ].map((row) => (
              <li
                key={row.num}
                className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-12 items-baseline py-8 border-b border-white/10"
              >
                <div className="text-[#A3D1FF]/70 font-mono tracking-[0.2em] tabular-nums text-sm pt-2">
                  {row.num}
                </div>
                <div>
                  <h3
                    className="text-white text-2xl md:text-3xl leading-tight mb-2"
                    style={{ fontFamily: SERIF, fontWeight: 500 }}
                  >
                    {row.title}
                  </h3>
                  <p className="text-base text-white/65 leading-relaxed max-w-2xl">{row.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-wrap items-center gap-6">
            <CTAButton size="lg" />
            <p className="text-sm text-white/50">Calendar opens instantly. No form before booking.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 04 — CREDIBILITY ═══════════════ */}
      <section className="relative px-6 lg:px-12 py-20 md:py-28 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Client names — single inline list with dot separators */}
          <p className="text-center text-white/45 text-xs md:text-sm font-mono tracking-[0.25em] uppercase mb-16 leading-relaxed">
            {['Binns Media', 'AutoMarginX', 'Untapped Africa', 'iLight Care', 'Chad Le Clos'].map((name, i, arr) => (
              <span key={name}>
                {name}
                {i < arr.length - 1 && <span className="text-white/15 mx-3 md:mx-5">·</span>}
              </span>
            ))}
          </p>

          {/* Quote — single weight, no mid-sentence emphasis */}
          <blockquote
            className="text-white leading-[1.15] tracking-[-0.02em] mb-6 max-w-4xl mx-auto text-center"
            style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 400 }}
          >
            &ldquo;Marc is that rare creative that excels at design AND wordsmithing. He&apos;s the real deal, a true professional.&rdquo;
          </blockquote>
          <p className="text-center text-sm text-white/60 mb-12">
            — Bradley Thompson, Marketing Director
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-white/60 font-mono tracking-[0.15em] uppercase">
            <span>★ 5.0 Google · 25 reviews</span>
            <span className="text-white/20">/</span>
            <span>★ 4.8 Clutch</span>
            <span className="text-white/20">/</span>
            <span>50+ projects shipped</span>
            <span className="text-white/20">/</span>
            <span>Featured · Awwwards</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 05 — OBJECTIONS ═══════════════ */}
      <section className="relative px-6 lg:px-12 py-24 md:py-36 border-b border-white/10 overflow-hidden bg-black">
        <div className="max-w-5xl mx-auto relative">
          <h2
            className="text-white leading-[0.95] tracking-[-0.035em] mb-16 max-w-3xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
            }}
          >
            Three things you&apos;re <em className="italic text-[#A3D1FF]">probably thinking</em> right now.
          </h2>

          <div className="space-y-14">
            {[
              {
                n: '01',
                q: 'This is going to be a sales pitch.',
                a: "It isn't. I audit 6–8 sites a month. Half hire me, half don't. Either way you get the audit. Worst case you waste 30 minutes and gain a list of fixes.",
              },
              {
                n: '02',
                q: "You're in Tel Aviv. I'm in the US.",
                a: "Calls happen in your time zone. Communication via Slack + Loom. Same-day replies during US business hours. I've shipped 50+ sites across 3 continents. Geography hasn't been a problem since 2018.",
              },
              {
                n: '03',
                q: "I'm not ready to redesign yet.",
                a: "Then book the audit anyway. You'll get a roadmap. We talk in 6 months when you are. No follow-up emails between now and then unless you ask.",
              },
            ].map((o) => (
              <div key={o.n} className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-12 border-t border-white/10 pt-10">
                <div className="text-[#A3D1FF]/70 font-mono tracking-[0.2em] tabular-nums text-sm">
                  {o.n}
                </div>
                <div>
                  <p
                    className="text-white text-2xl md:text-3xl leading-tight mb-4"
                    style={{ fontFamily: SERIF, fontWeight: 500 }}
                  >
                    &ldquo;{o.q}&rdquo;
                  </p>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                    {o.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MINIMAL FOOTER ═══════════════ */}
      <footer className="px-6 lg:px-12 py-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-[0.2em] uppercase text-white/40">
          <span>© {new Date().getFullYear()} Marc Friedman Web Design</span>
          <div className="flex gap-8">
            <Link href="/privacy-policy/" className="hover:text-[#A3D1FF] transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-[#A3D1FF] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

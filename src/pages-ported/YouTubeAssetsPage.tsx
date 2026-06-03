'use client';

import { useEffect } from 'react';

const SERIF = 'var(--font-heading)';
const BODY = 'var(--font-body)';
const ACCENT = '#A3D1FF';
const PAPER = '#0a0a0a';
const INK = '#FCFCFB';

const GRAIN_BG = {
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 text-xs font-mono tracking-[0.25em] uppercase text-white/50">
      {children}
    </div>
  );
}

export default function YouTubeAssetsPage() {
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#1b1b1b';
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white antialiased px-8 py-12">
      <div className="max-w-[2100px] mx-auto">
        <h1
          className="text-3xl mb-2"
          style={{ fontFamily: SERIF, fontWeight: 500, letterSpacing: '-0.02em' }}
        >
          YouTube Assets <span className="italic text-[#A3D1FF]">— internal</span>
        </h1>
        <p className="text-sm text-white/50 font-mono tracking-[0.15em] uppercase mb-12">
          Right-click any composition → Inspect → Capture node screenshot · pixel-perfect PNG export
        </p>

        {/* ════════════ 1. YOUTUBE BANNER (2048×1152) ════════════ */}
        <SectionLabel>01 · Channel Banner · 2048 × 1152</SectionLabel>
        <div className="mb-16 inline-block">
          <BannerComposition />
        </div>

        {/* ════════════ 2. PROFILE PICTURE (800×800) ════════════ */}
        <SectionLabel>02 · Profile Picture · 800 × 800</SectionLabel>
        <div className="mb-16 inline-block">
          <ProfileComposition />
        </div>

        {/* ════════════ 3. WATERMARK (300×300) ════════════ */}
        <SectionLabel>03 · Video Watermark · 300 × 300 · Transparent</SectionLabel>
        <div
          className="mb-16 inline-block"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #2a2a2a 25%, transparent 25%), linear-gradient(-45deg, #2a2a2a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #2a2a2a 75%), linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, 10px 0',
          }}
        >
          <WatermarkComposition />
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   BANNER · 2048 × 1152
   ════════════════════════════════════════════════════════════════════ */
function BannerComposition() {
  return (
    <div
      id="yt-banner"
      style={{
        width: 2048,
        height: 1152,
        background: PAPER,
        color: INK,
        fontFamily: BODY,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient accent glows */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1600,
          height: 900,
          background: 'rgba(163, 209, 255, 0.10)',
          borderRadius: '50%',
          filter: 'blur(180px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -200,
          right: -100,
          width: 800,
          height: 600,
          background: 'rgba(163, 209, 255, 0.06)',
          borderRadius: '50%',
          filter: 'blur(140px)',
          pointerEvents: 'none',
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          mixBlendMode: 'overlay',
          ...GRAIN_BG,
          pointerEvents: 'none',
        }}
      />

      {/* YouTube safe zone overlay (visual reference only — hidden when exporting) */}
      {/* SAFE ZONE: 1546 × 423 centered */}

      {/* Top-left sigil */}
      <div
        style={{
          position: 'absolute',
          top: 380,
          left: 251,
          color: 'rgba(255,255,255,0.55)',
          fontFamily: BODY,
          fontSize: 18,
          fontWeight: 500,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
        }}
      >
        Chapter · The Studio · Est. 2018
      </div>
      <div
        style={{
          position: 'absolute',
          top: 415,
          left: 251,
          width: 220,
          height: 1,
          background: 'rgba(255,255,255,0.25)',
        }}
      />

      {/* Massive headline */}
      <h1
        style={{
          position: 'absolute',
          top: 450,
          left: 244,
          margin: 0,
          fontFamily: SERIF,
          fontWeight: 500,
          fontSize: 200,
          lineHeight: 0.9,
          letterSpacing: '-0.035em',
          color: INK,
        }}
      >
        Marc <em style={{ fontStyle: 'italic', color: ACCENT, fontWeight: 500 }}>Friedman</em>
      </h1>

      {/* Subhead */}
      <p
        style={{
          position: 'absolute',
          top: 690,
          left: 251,
          margin: 0,
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 52,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'rgba(255,255,255,0.85)',
          maxWidth: 1200,
        }}
      >
        Websites that{' '}
        <em style={{ fontStyle: 'italic', color: ACCENT }}>print B2B leads.</em>
      </p>

      {/* Bottom-left tag */}
      <div
        style={{
          position: 'absolute',
          top: 765,
          left: 251,
          color: 'rgba(255,255,255,0.5)',
          fontFamily: BODY,
          fontSize: 16,
          fontWeight: 500,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
        }}
      >
        Tel Aviv · New Videos Weekly · @MarcFriedmanWebDesign
      </div>

      {/* Right-side volume marker */}
      <div
        style={{
          position: 'absolute',
          top: 380,
          right: 280,
          textAlign: 'right',
          color: 'rgba(255,255,255,0.55)',
          fontFamily: BODY,
          fontSize: 18,
          fontWeight: 500,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}
      >
        Vol. 01
        <br />
        2026
      </div>
      <div
        style={{
          position: 'absolute',
          top: 450,
          right: 280,
          fontFamily: SERIF,
          fontWeight: 500,
          fontSize: 88,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: ACCENT,
        }}
      >
        <em style={{ fontStyle: 'italic' }}>M.</em>F.
      </div>

      {/* Right hairline */}
      <div
        style={{
          position: 'absolute',
          top: 350,
          right: 250,
          width: 1,
          height: 470,
          background: 'rgba(255,255,255,0.2)',
        }}
      />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   PROFILE PICTURE · 800 × 800
   ════════════════════════════════════════════════════════════════════ */
function ProfileComposition() {
  return (
    <div
      id="yt-profile"
      style={{
        width: 800,
        height: 800,
        background: PAPER,
        color: INK,
        fontFamily: BODY,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      {/* Radial accent glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(163,209,255,0.18) 0%, rgba(163,209,255,0.06) 35%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          mixBlendMode: 'overlay',
          ...GRAIN_BG,
          pointerEvents: 'none',
        }}
      />

      {/* Massive M monogram */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: SERIF,
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 540,
            lineHeight: 0.9,
            letterSpacing: '-0.06em',
            color: INK,
            textShadow: '0 0 60px rgba(163,209,255,0.35)',
            marginTop: -30,
          }}
        >
          M
        </span>
      </div>

      {/* Bottom signature line + EST */}
      <div
        style={{
          position: 'absolute',
          bottom: 130,
          left: 0,
          right: 0,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            background: 'rgba(255,255,255,0.35)',
            margin: '0 auto 12px',
          }}
        />
        <div
          style={{
            fontFamily: BODY,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Est. 2018
        </div>
      </div>

      {/* Inner hairline ring */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 14,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   WATERMARK · 300 × 300 · Transparent background
   ════════════════════════════════════════════════════════════════════ */
function WatermarkComposition() {
  return (
    <div
      id="yt-watermark"
      style={{
        width: 300,
        height: 300,
        background: 'transparent',
        position: 'relative',
      }}
    >
      <svg width={300} height={300} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        {/* outer ring */}
        <circle
          cx="150"
          cy="150"
          r="138"
          fill="none"
          stroke={ACCENT}
          strokeWidth="3"
        />
        {/* M monogram */}
        <text
          x="150"
          y="200"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight="500"
          fontStyle="italic"
          fontSize="220"
          letterSpacing="-6"
          fill={ACCENT}
        >
          M
        </text>
      </svg>
    </div>
  );
}

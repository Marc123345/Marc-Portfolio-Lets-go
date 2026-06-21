"use client";

/* ─────────────────────────────────────────────────────────────────────────────
 * THRIVE GLOBAL — BRAND & WEBSITE PROPOSAL (presentation edition)
 * 16:9 send-ready deck. Copy drawn from the full 14-section proposal.
 * Built in THRIVE's own creative direction — "The Approach": a deep-ink night
 * sky that resolves into a dawn horizon (violet → rose → amber) at the moment
 * you land. Fraunces (editorial serif) + Hanken Grotesk (sans) + JetBrains Mono.
 *
 * Drive with ← / → / Space, click zones, or the rail. F toggles fullscreen.
 * Structure mirrors the Gramercy deck (same shell + atoms), re-skinned to brand.
 * ───────────────────────────────────────────────────────────────────────────── */

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Home,
  Landmark,
  Sparkles,
  ShieldCheck,
  Globe2,
  Gauge,
  Layers,
  PenLine,
  Database,
  Accessibility,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ── Tokens ──────────────────────────────────────────────────────────────────
 * Marc Friedman portfolio design system — identical to the Gramercy deck.
 * Oswald display + Poppins body; neutral-dark palette; one reserved blue accent.
 * THRIVE's dawn-horizon appears only as demonstrated concept art (DAWN / DAWN_AMBER),
 * the way the Gramercy deck used real building photography as content. */
const PAGE = "#0A0A0B";
const CARD = "#141417";
const ALT = "#1C1C21";
const INK = "#FCFCFB";
const SOFT = "#C9C9D0"; // readable secondary body
const MUTED = "#9A9AA2"; // labels / captions
const ACCENT = "#A3D1FF"; // the one reserved accent — house blue
const AMBER = ACCENT; // legacy alias: all deck chrome uses the house accent
const ACCENT_FILL = "rgba(163,209,255,0.12)";
const ACCENT_LINE = "rgba(163,209,255,0.45)";
const HAIRLINE = "rgba(255,255,255,0.08)";
const LINE = HAIRLINE;
const DAWN_AMBER = "#EBA56A"; // THRIVE mockup only (the live signature slide)

const DISPLAY = "var(--font-heading)"; // Oswald
const BODY = "var(--font-body)"; // Poppins
const SERIF = DISPLAY; // headings → Oswald
const SANS = BODY; // body → Poppins
const MONO = BODY; // labels / numerals → Poppins (tabular)
const TNUM: React.CSSProperties = { fontVariantNumeric: "tabular-nums" };

/* ── Motion ──────────────────────────────────────────────────────────────── */
const EASE = [0.2, 0.7, 0.2, 1] as const;
const stage = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const R: React.FC<React.PropsWithChildren<{ style?: React.CSSProperties }>> = ({ children, style }) => (
  <motion.div variants={item} style={style}>
    {children}
  </motion.div>
);

/* ── Atoms ───────────────────────────────────────────────────────────────── */
const Kicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <R
    style={{
      fontFamily: BODY,
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: MUTED,
    }}
  >
    {children}
  </R>
);

const h: React.CSSProperties = {
  fontFamily: SERIF,
  fontWeight: 600,
  fontSize: 52,
  lineHeight: 1.08,
  letterSpacing: "-0.01em",
  color: INK,
  margin: 0,
};
const lead: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 400,
  fontSize: 22,
  lineHeight: 1.55,
  color: SOFT,
  margin: 0,
};
const caption: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 400,
  fontSize: 15,
  color: MUTED,
  margin: 0,
};
const cardBase: React.CSSProperties = {
  background: CARD,
  border: `1px solid ${LINE}`,
  borderRadius: 16,
};
const em: React.CSSProperties = { color: ACCENT };

const Frame: React.FC<React.PropsWithChildren<{ center?: boolean }>> = ({ children, center }) => (
  <motion.div
    variants={stage}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, transition: { duration: 0.32 } }}
    style={{
      position: "absolute",
      inset: 0,
      padding: 104,
      display: "flex",
      flexDirection: "column",
      justifyContent: center ? "center" : "flex-start",
      alignItems: center ? "center" : "stretch",
      textAlign: center ? "center" : "left",
    }}
  >
    {children}
  </motion.div>
);

const Bullets: React.FC<{ items: React.ReactNode[]; size?: number; gap?: number }> = ({
  items,
  size = 17,
  gap = 10,
}) => (
  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap }}>
    {items.map((t, i) => (
      <li
        key={i}
        style={{ display: "flex", gap: 12, fontFamily: SANS, fontSize: size, lineHeight: 1.45, color: SOFT }}
      >
        <span style={{ color: AMBER, flexShrink: 0, marginTop: size * 0.55, width: 5, height: 5, borderRadius: "50%", background: AMBER }} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const DetailCard: React.FC<{
  n?: string;
  title: string;
  items: React.ReactNode[];
  highlight?: boolean;
  size?: number;
}> = ({ n, title, items, highlight, size }) => (
  <div
    style={{
      ...cardBase,
      flex: 1,
      padding: 30,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      background: highlight ? ACCENT_FILL : CARD,
      borderColor: highlight ? ACCENT_LINE : LINE,
      overflow: "hidden",
    }}
  >
    <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
      {n && (
        <span style={{ ...TNUM, fontFamily: MONO, fontWeight: 500, fontSize: 16, color: AMBER }}>{n}</span>
      )}
      <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 25, color: INK, lineHeight: 1.12 }}>
        {title}
      </span>
    </div>
    <Bullets items={items} size={size} />
  </div>
);

const Figure: React.FC<{ value: string; label: string; accent?: boolean }> = ({ value, label, accent }) => (
  <div
    style={{
      ...cardBase,
      padding: "24px 28px",
      flex: 1,
      background: accent ? ACCENT_FILL : CARD,
      borderColor: accent ? ACCENT_LINE : LINE,
    }}
  >
    <div style={{ ...TNUM, fontFamily: SERIF, fontWeight: 600, fontSize: 40, color: accent ? AMBER : INK, lineHeight: 1 }}>
      {value}
    </div>
    <div style={{ ...caption, marginTop: 10 }}>{label}</div>
  </div>
);

const Price: React.FC<{ children: React.ReactNode; big?: boolean; accent?: boolean }> = ({ children, big, accent }) => (
  <span style={{ ...TNUM, fontFamily: SANS, fontWeight: 600, fontSize: big ? 26 : 22, color: accent ? AMBER : INK, whiteSpace: "nowrap" }}>
    {children}
  </span>
);

/* Shared dawn-sky art — used on cover, the interactive, and the close. */
const STARS = Array.from({ length: 78 }, (_, i) => ({
  x: (i * 96.7 + 7) % 100,
  y: ((i * 41.3 + 3) % 62),
  r: (((i * 17) % 10) / 10) * 1.1 + 0.3,
  o: (((i * 7) % 10) / 10) * 0.5 + 0.15,
}));

const Skyline: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden style={style}>
    <g fill="#070A12" opacity="0.95">
      {[
        [60, 120, 46, 100], [120, 80, 34, 140], [168, 140, 58, 80], [240, 60, 30, 160],
        [284, 110, 50, 110], [350, 150, 40, 70], [410, 90, 36, 130], [470, 40, 26, 180],
        [512, 130, 60, 90], [590, 100, 34, 120], [640, 150, 48, 70], [700, 70, 30, 150],
        [744, 118, 54, 102], [812, 50, 24, 170], [852, 140, 44, 80], [910, 96, 38, 124],
        [966, 150, 52, 70], [1032, 84, 30, 136], [1078, 124, 58, 96], [1150, 60, 28, 160],
        [1192, 138, 46, 82], [1252, 104, 36, 116], [1306, 150, 50, 70], [1372, 92, 32, 128],
      ].map(([x, y, w, hh], i) => (
        <rect key={i} x={x} y={y} width={w} height={hh} />
      ))}
    </g>
  </svg>
);

const DawnSky: React.FC<{ intensity?: number }> = ({ intensity = 1 }) => (
  <>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(180deg,#070A12 0%,#0A0E17 55%,#0c1322 100%)",
      }}
    />
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.7 }}>
      {STARS.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r * 0.18} fill="#F4F2EC" opacity={s.o * (1 - intensity * 0.5)} />
      ))}
    </svg>
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: intensity,
        transition: "opacity 0.6s ease",
        background:
          "radial-gradient(120% 80% at 50% 118%, rgba(235,165,106,0.85) 0%, rgba(235,165,106,0) 42%)," +
          "radial-gradient(130% 90% at 50% 122%, rgba(181,99,138,0.8) 0%, rgba(181,99,138,0) 50%)," +
          "radial-gradient(150% 110% at 50% 128%, rgba(58,44,92,0.85) 0%, rgba(58,44,92,0) 58%)",
      }}
    />
    <Skyline style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", height: 180 }} />
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        background: "linear-gradient(90deg,transparent,#EBA56A,#B5638A,transparent)",
        filter: "blur(1px)",
        opacity: 0.4 + intensity * 0.6,
        boxShadow: `0 0 ${20 + intensity * 30}px ${4 + intensity * 6}px rgba(235,165,106,${0.2 + intensity * 0.25})`,
      }}
    />
  </>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 1 — COVER
 * ══════════════════════════════════════════════════════════════════════════ */
const S1 = () => (
  <>
    <DawnSky intensity={0.5} />
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,11,0.78) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.8) 100%)" }} />
    <Frame center>
      <Kicker>Brand &amp; Website Proposal · Vol. 01 · Confidential</Kicker>
      <div style={{ height: 44 }} />
      <R>
        <h1
          style={{
            fontFamily: SERIF,
            fontWeight: 700,
            fontSize: 104,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: INK,
            margin: 0,
          }}
        >
          THRIVE Global
        </h1>
      </R>
      <div style={{ height: 24 }} />
      <R>
        <p style={{ fontFamily: BODY, fontWeight: 400, fontSize: 30, color: SOFT, margin: 0 }}>
          Brand identity &amp; an eight-page website
        </p>
      </R>
      <div style={{ height: 26 }} />
      <R>
        <p
          style={{
            fontFamily: BODY,
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: ACCENT,
            margin: 0,
          }}
        >
          The Global Landing System — Land · Settle · Thrive
        </p>
      </R>
      <div style={{ height: 70 }} />
      <R>
        <p style={caption}>
          Marc Friedman Web Design · June 2026 · marcfriedmanportfolio.com · marcfriedmancm@gmail.com
        </p>
      </R>
    </Frame>
  </>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 2 — EXECUTIVE SUMMARY
 * ══════════════════════════════════════════════════════════════════════════ */
const S2 = () => (
  <Frame>
    <Kicker>01 · Executive Summary</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1560 }}>
        Investors, partners and early members will <span style={em}>judge THRIVE by this website</span>{" "}
        before they meet the team.
      </h2>
    </R>
    <R style={{ marginTop: 22, maxWidth: 1500 }}>
      <p style={lead}>
        THRIVE is raising and launching at the same time, so the site has two jobs: show a Tier-1 investor
        the company is real, and show a newcomer it can be trusted with their financial life. Both decide
        in seconds, on a phone. This proposal splits the work into two priced components.
      </p>
    </R>
    <R style={{ marginTop: 28 }}>
      <div style={{ display: "flex", gap: 24 }}>
        <DetailCard
          title="The Website — $4,000"
          items={[
            "Custom eight-page Next.js build",
            "The Land, Settle, Thrive narrative, carried by the home page",
            "Headless CMS, i18n / RTL, analytics and schema, built to scale from three cities to eight",
            "Accessible, fast (~1.2s), ready the day it ships",
            "Hosting and maintenance included free for the first year",
          ]}
          size={17}
        />
        <DetailCard
          title="Brand & Design System — $1,000 (optional)"
          highlight
          items={[
            "“The Approach”: the dawn-horizon visual language",
            "Logo, colour, type, motion and a documented component system",
            "Skipped if THRIVE already has a locked identity",
            "Built around one line: your credit history moves with you",
          ]}
          size={17}
        />
      </div>
    </R>
    <div style={{ flex: 1 }} />
    <R>
      <div style={{ display: "flex", gap: 20 }}>
        <Figure value="$4,000" label="Website — core engagement" />
        <Figure value="$1,000" label="Brand & design system — optional" />
        <Figure value="$5,000" label="Together — brand + website" accent />
        <Figure value="50 / 40 / 10" label="Billed in three milestones" />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 3 — ABOUT
 * ══════════════════════════════════════════════════════════════════════════ */
const S3 = () => (
  <Frame>
    <Kicker>02 · About Marc Friedman Web Design</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1540 }}>
        One senior practitioner, <span style={em}>end to end.</span>
      </h2>
    </R>
    <R style={{ marginTop: 18, maxWidth: 1520 }}>
      <p style={{ ...lead, fontSize: 20 }}>
        An independent studio in Tel Aviv, building custom React &amp; Next.js sites for clients across
        three continents. The same person handles discovery through launch, so there are no account
        managers, handoffs, or junior work shipped under a senior name. The design is built to move the
        business, and the work shows it.
      </p>
    </R>
    <R style={{ marginTop: 30 }}>
      <div style={{ display: "flex", gap: 20 }}>
        <Figure value="50+" label="Projects shipped" />
        <Figure value="5.0" label="Client rating" />
        <Figure value="Awwwards" label="& CSS Design Awards recognised" accent />
        <Figure value="Tel Aviv" label="Studio · clients on 3 continents" />
      </div>
    </R>
    <div style={{ flex: 1 }} />
    <R>
      <p style={{ ...caption, fontSize: 16, color: SOFT }}>
        The point of every build is to earn trust, start qualified conversations, and show results you can
        measure.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 4 — UNDERSTANDING THRIVE
 * ══════════════════════════════════════════════════════════════════════════ */
const DISCOVERY: [string, string][] = [
  ["Audience: hi-tech relocators", "Premium, frictionless, design-literate. Stripe / Apple-grade polish."],
  ["Primary job of the site", "Walk through the offering as Land, Settle, Thrive: a showcase, not a product demo."],
  ["Top three offerings", "Apartment rentals, banking, lifestyle, in that order, mapped to the first 90 days."],
  ["What customers compliment", "“Keep your credit history wherever you move.” The headline writes itself."],
  ["Reference: point-az.com", "Calm, cinematic, single-flow. POINT is by Azrieli, already a THRIVE partner."],
];
const S4 = () => (
  <Frame>
    <Kicker>03 · Understanding THRIVE</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1560 }}>
        A strong salary and a spotless record, treated as if <span style={em}>neither exists.</span>
      </h2>
    </R>
    <R style={{ marginTop: 16, maxWidth: 1540 }}>
      <p style={{ ...lead, fontSize: 19 }}>
        The primary user is a hi-tech professional relocating for work: high income, design-literate,
        short on time, and hitting one specific wall. With no local credit history, renting means a brutal
        deposit, a card is hard to get, and nobody extends trust. Day one becomes day zero. The discovery
        pointed in one direction:
      </p>
    </R>
    <R style={{ marginTop: 26, flex: 1 }}>
      <div style={{ ...cardBase, overflow: "hidden" }}>
        {DISCOVERY.map(([k, v], idx) => (
          <div
            key={k}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 28,
              alignItems: "center",
              padding: "16px 30px",
              background: idx % 2 === 1 ? ALT : "transparent",
              borderTop: idx === 0 ? "none" : `1px solid ${HAIRLINE}`,
            }}
          >
            <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 18, color: INK }}>{k}</span>
            <span style={{ fontFamily: SANS, fontSize: 17, color: SOFT, lineHeight: 1.4 }}>{v}</span>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 5 — CREATIVE CONCEPT · THE APPROACH
 * ══════════════════════════════════════════════════════════════════════════ */
const S5 = () => (
  <Frame>
    <Kicker>04 · Creative Concept &amp; Direction</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1560 }}>
        “The Approach”: a landing system brings a plane down safely, in <span style={em}>any conditions.</span>
      </h2>
    </R>
    <R style={{ marginTop: 16, maxWidth: 1560 }}>
      <p style={{ ...lead, fontSize: 19 }}>
        THRIVE&rsquo;s name already contains the idea. That is what the company does for someone&rsquo;s financial
        identity when they move. The metaphor is true to the product, and it hands the whole site a visual
        language to work with.
      </p>
    </R>
    <R style={{ marginTop: 28, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "1fr 1fr", gap: 22, height: "100%" }}>
        <DetailCard
          title="The signature: a dawn horizon"
          items={["A deep-ink night sky that resolves into a dawn of violet, rose and amber", "You don’t scroll a page; you come in to land, into a new day"]}
          size={17}
        />
        <DetailCard
          title="The headline"
          items={["“Your credit history moves with you” is the rational hook", "“Land already trusted” is the emotional one. One explains, the other sells"]}
          size={17}
        />
        <DetailCard
          title="The Thrive Score motif"
          items={["A recurring score readout that threads through the pages", "Shown as proof the member carries with them, not a widget to play with"]}
          size={17}
        />
        <DetailCard
          title="Alternate direction: “Borderless”"
          highlight
          items={["A single continuous line that never breaks as it crosses cities", "Included to show range, though The Approach is the recommendation"]}
          size={17}
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 6 — THE SIGNATURE MOMENT (interactive dawn horizon + Thrive Score)
 * ══════════════════════════════════════════════════════════════════════════ */
const CITIES: { name: string; benefit: string }[] = [
  { name: "New York", benefit: "Pre-approved leases across Manhattan & Brooklyn" },
  { name: "Tel Aviv", benefit: "Banking from week one, in Hebrew & English" },
  { name: "Miami", benefit: "Reduced deposits across Brickell & Wynwood" },
];

const DawnHorizon: React.FC = () => {
  const [descent, setDescent] = useState(0); // 0 night → 1 dawn
  const [city, setCity] = useState(0);
  const score = useMemo(() => Math.round(700 + 82 * descent), [descent]);
  const landed = descent > 0.6;

  // gentle auto-arrival on mount so the slide breathes even before interaction
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 2200;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setDescent(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const id = setTimeout(() => { raf = requestAnimationFrame(tick); }, 350);
    return () => { clearTimeout(id); cancelAnimationFrame(raf); };
  }, []);

  const s = String(score);

  return (
    <div style={{ ...cardBase, padding: 0, overflow: "hidden", height: "100%", position: "relative" }}>
      <DawnSky intensity={descent} />

      {/* score readout — quiet, top-right */}
      <div style={{ position: "absolute", top: 26, right: 30, textAlign: "right", borderRight: `1px solid ${LINE}`, paddingRight: 18 }}>
        <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.24em", color: MUTED, textTransform: "uppercase" }}>
          Thrive Score · Verified
        </div>
        <div style={{ ...TNUM, fontFamily: MONO, fontWeight: 500, fontSize: 56, color: INK, lineHeight: 1, marginTop: 6 }}>
          {s.charAt(0)}
          <span style={{ color: DAWN_AMBER }}>{s.slice(1)}</span>
        </div>
        <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.18em", color: DAWN_AMBER, marginTop: 8, textTransform: "uppercase" }}>
          ↳ Travels with you
        </div>
      </div>

      {/* headline */}
      <div style={{ position: "absolute", left: 36, top: 130, maxWidth: "62%" }}>
        <AnimatePresence mode="wait">
          <motion.h3
            key={landed ? "b" : "a"}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 40, lineHeight: 1.05, color: INK, margin: 0 }}
          >
            {landed ? (
              <>Land already <span style={{ color: DAWN_AMBER }}>trusted.</span></>
            ) : (
              <>Your credit history <span style={{ color: DAWN_AMBER }}>moves with you.</span></>
            )}
          </motion.h3>
        </AnimatePresence>
        <p style={{ fontFamily: SANS, fontSize: 15, color: SOFT, marginTop: 14, maxWidth: 460, lineHeight: 1.5 }}>
          {CITIES[city].benefit}
        </p>
      </div>

      {/* controls */}
      <div style={{ position: "absolute", left: 36, right: 36, bottom: 28, display: "flex", flexDirection: "column", gap: 16, zIndex: 5 }}>
        <div style={{ display: "flex", gap: 10 }}>
          {CITIES.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setCity(i)}
              style={{
                flex: 1,
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "9px 12px",
                borderRadius: 999,
                cursor: "pointer",
                color: i === city ? "#0A0A0B" : INK,
                background: i === city ? DAWN_AMBER : "rgba(10,10,11,0.5)",
                border: `1px solid ${i === city ? DAWN_AMBER : "rgba(255,255,255,0.18)"}`,
                transition: "all 0.2s",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED, whiteSpace: "nowrap" }}>
            Bring it in to land
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(descent * 100)}
            onChange={(e) => setDescent(Number(e.target.value) / 100)}
            aria-label="Descent — night to dawn"
            style={{ flex: 1, accentColor: DAWN_AMBER, cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

const S6 = () => (
  <Frame>
    <Kicker>The Signature Moment · Live Concept</Kicker>
    <R style={{ marginTop: 16 }}>
      <h2 style={{ ...h, fontSize: 46, maxWidth: 1560 }}>
        Scrolling the home page should feel like coming in to <span style={em}>land.</span>
      </h2>
    </R>
    <div style={{ display: "flex", gap: 40, marginTop: 24, flex: 1 }}>
      <R style={{ width: "34%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, height: "100%", justifyContent: "center" }}>
          <p style={{ ...lead, fontSize: 19 }}>
            The dawn horizon, the Thrive Score and the city switcher, in one live moment.{" "}
            <span style={{ color: AMBER }}>Drag the slider to bring it in to land, then switch the city.</span>
          </p>
          <Bullets
            size={18}
            gap={15}
            items={[
              "The deep-ink night sky resolves into a dawn as you descend",
              "The score counts up to a verified number you can watch land",
              "A city switcher re-renders benefits: a score that moves with you",
              "Motion is eased and weighty, so things settle into place",
            ]}
          />
        </div>
      </R>
      <R style={{ width: "66%" }}>
        <DawnHorizon />
      </R>
    </div>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 7 — BRAND FOUNDATION (purpose / vision / mission)
 * ══════════════════════════════════════════════════════════════════════════ */
const FOUNDATION: [string, string][] = [
  ["Purpose", "So that the trust you’ve earned never gets left behind at a border. No one should start from zero just because they started over."],
  ["Vision", "A world where opportunity follows the person, not the postcode, where financial reputation is borderless, and moving never costs you the trust you spent years building."],
  ["Mission", "Turn the trust a member has already earned into a single portable score, and use it to unlock the things they need first in a new city: a home, a bank, a life."],
];
const S7 = () => (
  <Frame>
    <Kicker>05 · Brand Foundation</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={h}>The layer beneath the visuals.</h2>
    </R>
    <R style={{ marginTop: 16, maxWidth: 1520 }}>
      <p style={{ ...lead, fontSize: 19 }}>
        What keeps the message, tone and value proposition consistent across the website, the deck, and
        every member touchpoint. Included in the Brand &amp; Design System component.
      </p>
    </R>
    <R style={{ marginTop: 30, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%", maxHeight: 420 }}>
        {FOUNDATION.map(([t, d], i) => (
          <div
            key={t}
            style={{ ...cardBase, flex: 1, padding: 36, display: "flex", flexDirection: "column", gap: 18, background: i === 2 ? ACCENT_FILL : CARD, borderColor: i === 2 ? ACCENT_LINE : LINE }}
          >
            <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 30, color: i === 2 ? AMBER : INK }}>{t}</span>
            <span style={{ fontFamily: SANS, fontSize: 19, color: SOFT, lineHeight: 1.5 }}>{d}</span>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 8 — CORE VALUES
 * ══════════════════════════════════════════════════════════════════════════ */
const VALUES: [string, string][] = [
  ["Trust is the asset", "It is the product; we protect it like a financial instrument and never trade it away."],
  ["The member owns the data", "Value in, value out. We work for the person, never sell them out to flatter the numbers."],
  ["Portable by default", "If it doesn’t travel with the member, it doesn’t ship."],
  ["Proven, not promised", "Verified behaviour over vanity, with credit-grade rigour. We stand next to TransUnion and JPMorgan on the page."],
  ["Built for everyone who lands", "Members navigate a new system, often in a second language. Clarity, accessibility and multilingual support are core."],
];
const S8 = () => (
  <Frame>
    <Kicker>05 · Brand Foundation — Core Values</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={h}>Five values the platform is built on.</h2>
    </R>
    <R style={{ marginTop: 30, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 22, height: "100%" }}>
        {VALUES.map(([t, d], i) => (
          <div key={t} style={{ ...cardBase, padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ ...TNUM, fontFamily: MONO, fontWeight: 500, fontSize: 14, color: AMBER }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 24, color: INK, lineHeight: 1.12 }}>{t}</span>
            <span style={{ fontFamily: SANS, fontSize: 16, color: SOFT, lineHeight: 1.5 }}>{d}</span>
          </div>
        ))}
        <div style={{ ...cardBase, padding: 28, display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, background: ACCENT_FILL, borderColor: ACCENT_LINE }}>
          <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 26, color: INK, lineHeight: 1.2 }}>
            Land. Settle. Thrive.
          </span>
          <span style={{ ...caption, fontSize: 14 }}>The promise the values protect.</span>
        </div>
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 9 — POSITIONING · PROMISE / PERSONALITY / VOICE
 * ══════════════════════════════════════════════════════════════════════════ */
const S9 = () => (
  <Frame>
    <Kicker>05 · Brand Foundation — Positioning &amp; Voice</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, fontSize: 44, maxWidth: 1620 }}>
        For hi-tech professionals who move countries for work, THRIVE is the global landing system that
        lets your financial identity <span style={em}>arrive with you</span>, unlike the local banks and
        bureaus that forget you the moment you cross a border.
      </h2>
    </R>
    <R style={{ marginTop: 36, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%", maxHeight: 320 }}>
        <DetailCard title="Promise" items={["Your credit history moves with you. Land already trusted."]} size={18} />
        <DetailCard title="Personality" items={["Assured, precise, premium, human and borderless: the calm voice that lands the plane"]} size={18} />
        <DetailCard title="Voice" items={["Plain about money, warm about the human stakes, proof-led and globally fluent, with no hype or jargon"]} size={18} highlight />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 10 — BRAND STORY
 * ══════════════════════════════════════════════════════════════════════════ */
const S10 = () => (
  <>
    <DawnSky intensity={0.45} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,11,0.7)" }} />
    <Frame>
      <Kicker>05 · Brand Foundation — The Story</Kicker>
      <div style={{ flex: 1 }} />
      <R>
        <p style={{ fontFamily: BODY, fontWeight: 400, fontSize: 36, lineHeight: 1.4, color: INK, maxWidth: 1640 }}>
          Every year, millions of skilled people move countries for work. They arrive with a strong income
          and a flawless record, and the new country acts as if none of it happened. But{" "}
          <span style={em}>trust is just verified data, and data can travel.</span> THRIVE is a portable
          score, built on real history, that arrives already vouching for you and unlocks the home, the
          bank and the life you need first. You land somewhere new and you&rsquo;re not starting over.
          You&rsquo;re already trusted.
        </p>
      </R>
      <div style={{ flex: 1 }} />
      <R>
        <p style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.22em", textTransform: "uppercase", color: AMBER }}>
          Land · Settle · Thrive
        </p>
      </R>
    </Frame>
  </>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 11 — BRAND & DESIGN SYSTEM ($1,000)
 * ══════════════════════════════════════════════════════════════════════════ */
const SYSTEM: { icon: React.ElementType; title: string; body: string }[] = [
  { icon: Plane, title: "Logo / mark", body: "An approach path meeting a horizon: a descent that also reads as an ascent. Wordmark, app icon, partner badge." },
  { icon: Sparkles, title: "Colour", body: "Deep ink base, off-white text, one warm amber accent; the dawn gradient reserved for the hero and Premium tier." },
  { icon: PenLine, title: "Typography", body: "A warm editorial display face for journey headlines, a clean neutral sans for body, tabular numerals for the score." },
  { icon: Layers, title: "Motion", body: "Eased and weighty, so things settle into place. One signature transition, used consistently." },
  { icon: Database, title: "Components", body: "Documented system: colour & type tokens, spacing, buttons, inputs, cards, nav, tier badges, the score component." },
  { icon: Accessibility, title: "Accessibility", body: "AA+ contrast, visible focus, keyboard & screen-reader support, reduced-motion, RTL / Hebrew, built in from the start." },
];
const S11 = () => (
  <Frame>
    <Kicker>06 · Brand &amp; Design System — $1,000 (optional)</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>The brand the platform will live inside for years.</h2>
    </R>
    <R style={{ marginTop: 26, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 20, height: "100%" }}>
        {SYSTEM.map(({ icon: Icon, title, body }) => (
          <div key={title} style={{ ...cardBase, padding: 26, display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ width: 46, height: 46, borderRadius: "50%", background: ACCENT_FILL, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={22} color={AMBER} strokeWidth={1.6} />
            </span>
            <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 23, color: INK }}>{title}</span>
            <span style={{ fontFamily: SANS, fontSize: 15.5, color: SOFT, lineHeight: 1.46 }}>{body}</span>
          </div>
        ))}
      </div>
    </R>
    <R style={{ marginTop: 20 }}>
      <p style={{ ...caption, fontSize: 16, color: SOFT }}>
        <strong style={{ color: AMBER }}>Deliverable:</strong> a documented brand system in Figma plus a
        short brand-guidelines reference, so the identity survives past launch and across new cities.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 12 — WEBSITE LAYOUT & DIRECTION (the cinematic narrative)
 * ══════════════════════════════════════════════════════════════════════════ */
const NARRATIVE: [string, string, string][] = [
  ["Hero", "Night sky, dawn horizon", "The headline “Your credit history moves with you.” One CTA. The score readout counts up to a verified number."],
  ["The problem", "Day one becomes day zero", "A short, calm beat: new country, no history, and your record, standing and trust reset to zero."],
  ["01", "Land", "Your score arrives before you do. The portable Thrive Score crosses the border and speaks for you on arrival."],
  ["02", "Settle", "The first two essentials, in order: apartment rentals (pre-approved, reduced deposits) and banking (account, card, real credit from week one)."],
  ["03", "Thrive", "Lifestyle across health, travel and living, plus the Premium tier, marked with the dawn gradient so the top tier reads as earned."],
  ["The Vault", "Value in, value out", "How the score compounds: value in from members, value out from partners. Calm, network-effect framing."],
  ["Traction", "Partners & cities", "Partner names as muted wordmarks, then the rollout: New York, Tel Aviv and Miami in 2026, five more in 2027."],
  ["Close", "Land already trusted", "Full dawn horizon. One CTA to join."],
];
const S12 = () => (
  <Frame>
    <Kicker>07 · Website Layout &amp; Direction</Kicker>
    <R style={{ marginTop: 16 }}>
      <h2 style={{ ...h, fontSize: 46, maxWidth: 1600 }}>
        One home page that carries the <span style={em}>whole narrative.</span>
      </h2>
    </R>
    <R style={{ marginTop: 12, maxWidth: 1560 }}>
      <p style={{ ...lead, fontSize: 17 }}>
        It sells a feeling, then the facts. Scrolling moves the visitor from a dark sky through the dawn
        and into the offering. An interactive concept of this direction accompanies the proposal as a live page.
      </p>
    </R>
    <R style={{ marginTop: 22, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {NARRATIVE.map(([n, title, desc], i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 18,
              alignItems: "center",
              padding: "13px 22px",
              ...cardBase,
              background: i === NARRATIVE.length - 1 ? ACCENT_FILL : CARD,
              borderColor: i === NARRATIVE.length - 1 ? ACCENT_LINE : LINE,
            }}
          >
            <span style={{ ...TNUM, minWidth: 56, fontFamily: MONO, fontWeight: 500, fontSize: 13, color: AMBER, textTransform: "uppercase" }}>{n}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 20, color: INK }}>{title}</span>
              <span style={{ fontFamily: SANS, fontSize: 14.5, color: SOFT, lineHeight: 1.38 }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 13 — WEBSITE ARCHITECTURE (8 pages)
 * ══════════════════════════════════════════════════════════════════════════ */
const PAGES: [string, string, string][] = [
  ["1", "Home / The Approach", "The full Land–Settle–Thrive journey; the headline; the primary waitlist CTA"],
  ["2", "The Thrive Score", "How the score is built, with the inputs explained through the score motif"],
  ["3", "The Vault", "The data-to-value engine: members in, partners out, the network effect"],
  ["4", "The Ecosystem", "The basket of benefits, city-aware, plus the Premium tier"],
  ["5", "For Partners", "The B2B pitch: pricing, approvals, placement, access to verified movers"],
  ["6", "Traction & Cities", "The trust wall and the 2026 / 2027 rollout map"],
  ["7", "About / Team", "Operators with credibility, to build investor and member confidence"],
  ["8", "Get Started", "Waitlist with progressive profiling; gated partner / investor inquiry"],
];
const S13 = () => (
  <Frame>
    <Kicker>08 · Website Architecture</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Eight pages, with a home for the member story and the partner story.</h2>
    </R>
    <R style={{ marginTop: 26, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {PAGES.map(([n, page, job]) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 18, alignItems: "center", padding: "14px 22px", ...cardBase }}>
            <span
              style={{
                ...TNUM,
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: `1px solid ${ACCENT_LINE}`,
                color: AMBER,
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {n}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 21, color: INK }}>{page}</span>
              <span style={{ fontFamily: SANS, fontSize: 14.5, color: SOFT, lineHeight: 1.38 }}>{job}</span>
            </div>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 13b — SITEMAP (the architecture as a tree)
 * ══════════════════════════════════════════════════════════════════════════ */
const SITEMAP: { label: string; pages: [string, string][] }[] = [
  { label: "The story — for members", pages: [["02", "The Thrive Score"], ["03", "The Vault"], ["04", "The Ecosystem"]] },
  { label: "The business — for partners", pages: [["05", "For Partners"], ["06", "Traction & Cities"]] },
  { label: "Company & convert", pages: [["07", "About / Team"], ["08", "Get Started"]] },
];
const NumberBadge: React.FC<{ n: string; solid?: boolean }> = ({ n, solid }) => (
  <span
    style={{
      ...TNUM,
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: "50%",
      border: `1px solid ${ACCENT_LINE}`,
      background: solid ? ACCENT_FILL : "transparent",
      color: ACCENT,
      fontFamily: BODY,
      fontWeight: 600,
      fontSize: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {n}
  </span>
);
const PageChip: React.FC<{ n: string; name: string; highlight?: boolean }> = ({ n, name, highlight }) => (
  <div
    style={{
      ...cardBase,
      padding: "13px 18px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: highlight ? ACCENT_FILL : CARD,
      borderColor: highlight ? ACCENT_LINE : LINE,
    }}
  >
    <NumberBadge n={n} solid={highlight} />
    <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 19, color: INK }}>{name}</span>
  </div>
);
const SSitemap = () => (
  <Frame>
    <Kicker>08 · Website Architecture — Sitemap</Kicker>
    <R style={{ marginTop: 18 }}>
      <h2 style={{ ...h, fontSize: 46 }}>The eight pages, as a sitemap.</h2>
    </R>
    <R style={{ marginTop: 8, maxWidth: 1520 }}>
      <p style={{ ...lead, fontSize: 17 }}>
        One home that carries the whole journey, branching into the member story, the partner story, and
        the pages that build confidence and convert.
      </p>
    </R>
    <R style={{ flex: 1 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "center", gap: 0 }}>
        {/* root */}
        <div
          style={{
            ...cardBase,
            background: ACCENT_FILL,
            borderColor: ACCENT_LINE,
            padding: "20px 30px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            minWidth: 540,
            justifyContent: "center",
          }}
        >
          <NumberBadge n="01" solid />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 24, color: INK }}>Home / The Approach</span>
            <span style={{ ...caption, fontSize: 14 }}>The full Land → Settle → Thrive journey · primary waitlist CTA</span>
          </div>
        </div>
        {/* trunk + branch bar */}
        <div style={{ width: 2, height: 26, background: ACCENT_LINE }} />
        <div style={{ width: "84%", height: 2, background: ACCENT_LINE }} />
        {/* columns */}
        <div style={{ display: "flex", gap: 28, width: "100%", marginTop: 0 }}>
          {SITEMAP.map((col) => (
            <div key={col.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 14 }}>
              <div style={{ width: 2, height: 18, background: ACCENT_LINE, alignSelf: "center" }} />
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 2 }}>
                {col.label}
              </span>
              {col.pages.map(([n, name]) => (
                <PageChip key={n} n={n} name={name} highlight={name === "Get Started"} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 14 — ADVANCED FEATURES & TECHNICAL APPROACH (outcomes)
 * ══════════════════════════════════════════════════════════════════════════ */
const FEATURES: { icon: React.ElementType; title: string; body: string }[] = [
  { icon: Globe2, title: "Add a city without a developer", body: "A headless CMS drives cities, partners, benefits and tiers, which a rollout from three cities to eight depends on." },
  { icon: Layers, title: "Launch-ready in Tel Aviv", body: "Internationalisation and right-to-left / Hebrew support designed in from day one, not retrofitted." },
  { icon: Gauge, title: "Credible in ~1.2s", body: "Next.js on the edge, 90+ Lighthouse, Core Web Vitals green, fast on a Tier-1 investor’s phone." },
  { icon: Sparkles, title: "The signature score moment", body: "An animated score readout and an optional city switcher that re-renders benefits per city." },
  { icon: PenLine, title: "Capture intent, not just emails", body: "Waitlist with progressive profiling (city, segment, intent) into THRIVE’s CRM, plus a gated investor / partner path." },
  { icon: ShieldCheck, title: "Found by AI and search", body: "Schema, metadata and an answer-engine-ready foundation, with full analytics and conversion tracking." },
];
const S14 = () => (
  <Frame>
    <Kicker>09 · Advanced Features &amp; Technical Approach</Kicker>
    <R style={{ marginTop: 18 }}>
      <h2 style={{ ...h, fontSize: 48 }}>What THRIVE gets, written as outcomes.</h2>
    </R>
    <R style={{ marginTop: 24, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 20, height: "100%" }}>
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <div key={title} style={{ ...cardBase, padding: 26, display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ width: 44, height: 44, borderRadius: "50%", background: ACCENT_FILL, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={21} color={AMBER} strokeWidth={1.6} />
            </span>
            <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 22, color: INK, lineHeight: 1.12 }}>{title}</span>
            <span style={{ fontFamily: SANS, fontSize: 15, color: SOFT, lineHeight: 1.46 }}>{body}</span>
          </div>
        ))}
      </div>
    </R>
    <R style={{ marginTop: 18 }}>
      <p style={{ ...caption, fontSize: 15, color: SOFT }}>
        <strong style={{ color: AMBER }}>Accessible by default:</strong> WCAG AA, keyboard &amp;
        screen-reader support, reduced-motion respected.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 14b — SEARCH, SEO & AI VISIBILITY
 * ══════════════════════════════════════════════════════════════════════════ */
const SEO_CARDS: { n: string; title: string; items: string[]; highlight?: boolean }[] = [
  {
    n: "01",
    title: "Technical SEO & speed",
    items: ["Clean semantic markup, server-rendered on the edge (~1.2s)", "Core Web Vitals green; XML sitemap + robots", "Healthy indexation, with nothing blocking Google or AI crawlers"],
  },
  {
    n: "02",
    title: "On-page & content",
    items: ["Titles, metadata & headings tuned to real intent", "Built around relocation, city & offering searches", "The eight-page structure is shaped to capture it"],
  },
  {
    n: "03",
    title: "Structured data (schema.org)",
    items: ["Organization, FinancialService and FAQ, all city-aware", "Machine-readable, so Google & AI represent THRIVE correctly", "The same data that grounds the site and the score"],
  },
  {
    n: "04",
    title: "AEO / GEO: AI visibility",
    items: ["An answer-engine-ready foundation", "Be in the answer when people ask an AI assistant first", "Surfaces THRIVE accurately as discovery shifts to AI"],
    highlight: true,
  },
];
const SSEO = () => (
  <Frame>
    <Kicker>09 · Search, SEO &amp; AI Visibility</Kicker>
    <R style={{ marginTop: 18 }}>
      <h2 style={{ ...h, fontSize: 46, maxWidth: 1620 }}>
        Found by Google, and inside the AI answers people <span style={em}>ask first.</span>
      </h2>
    </R>
    <R style={{ marginTop: 14, maxWidth: 1560 }}>
      <p style={{ ...lead, fontSize: 18 }}>
        Search isn&rsquo;t bolted on after launch. Schema, metadata and an answer-engine-ready foundation are
        built into the eight pages from day one, across every city and language.
      </p>
    </R>
    <R style={{ marginTop: 24, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {SEO_CARDS.map((c) => (
          <DetailCard key={c.n} n={c.n} title={c.title} items={c.items} highlight={c.highlight} size={15} />
        ))}
      </div>
    </R>
    <R style={{ marginTop: 18 }}>
      <div style={{ ...cardBase, background: ALT, padding: "16px 26px" }}>
        <p style={{ ...caption, fontSize: 16, color: SOFT }}>
          <strong style={{ color: AMBER }}>Built in:</strong> international SEO (hreflang for each city,
          RTL / Hebrew), plus analytics &amp; conversion tracking, so every search visit and waitlist
          signup is measured from launch.
        </p>
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 15 — TRACTION (partners + cities)
 * ══════════════════════════════════════════════════════════════════════════ */
const PARTNERS = ["Brookfield", "AvalonBay", "Azrieli", "JPMorgan", "John Hancock", "Vitality", "Bilt", "TransUnion"];
const S15 = () => (
  <>
    <DawnSky intensity={0.35} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,11,0.74)" }} />
    <Frame center>
      <Kicker>Traction · Contracted with the best in the world</Kicker>
      <div style={{ height: 40 }} />
      <R>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 56px", maxWidth: 1500 }}>
          {PARTNERS.map((p) => (
            <span key={p} style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 38, color: "#8A93A6", letterSpacing: "0.01em" }}>
              {p}
            </span>
          ))}
        </div>
      </R>
      <div style={{ height: 64 }} />
      <R>
        <p style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.12em", color: SOFT, textTransform: "uppercase", lineHeight: 2 }}>
          Launching 2026: <span style={{ color: AMBER }}>New York · Tel Aviv · Miami</span>
          <br />
          2027: Seattle · Boston · Houston · Los Angeles · London
        </p>
      </R>
    </Frame>
  </>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 16 — PROJECT TIMELINE & PHASES
 * ══════════════════════════════════════════════════════════════════════════ */
const PHASES: [string, string, string][] = [
  ["P1", "Discovery & strategy", "Positioning, audience, competitor & reference review, content + SEO foundation. Much already complete → written discovery summary."],
  ["P2", "Brand foundation & identity", "Purpose through story, plus logo, colour, type & motion → approval of the identity direction. Skipped if THRIVE supplies a locked brand."],
  ["P3", "Architecture & content", "Sitemap, the eight-page structure, and the Land–Settle–Thrive copy → written approval of the copy."],
  ["P4", "UX design", "Wireframes and prototypes for all eight pages → approval of the wireframes."],
  ["P5", "UI design", "High-fidelity design across every template applying the dawn-horizon system, with accessibility review → approval of the prototype."],
  ["P6", "Development & integration", "The Next.js build, the CMS, score interactions, i18n / RTL, analytics & schema, full cross-device QA → functional sign-off."],
  ["→", "Launch", "Publication to the live domain, performance & accessibility pass, and handoff."],
];
const S16 = () => (
  <Frame>
    <Kicker>10 · Project Timeline &amp; Phases</Kicker>
    <R style={{ marginTop: 16 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Each phase closes on your written approval.</h2>
    </R>
    <R style={{ marginTop: 22, flex: 1 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {PHASES.map(([n, title, desc], i) => (
          <div
            key={title}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1.1fr 3fr",
              alignItems: "center",
              gap: 26,
              padding: "14px 26px",
              ...cardBase,
              background: i === PHASES.length - 1 ? ACCENT_FILL : CARD,
              borderColor: i === PHASES.length - 1 ? ACCENT_LINE : LINE,
            }}
          >
            <span
              style={{
                ...TNUM,
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: `1px solid ${ACCENT_LINE}`,
                color: AMBER,
                fontFamily: MONO,
                fontWeight: 500,
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {n}
            </span>
            <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 23, color: INK }}>{title}</span>
            <span style={{ fontFamily: SANS, fontSize: 15.5, color: SOFT, lineHeight: 1.4 }}>{desc}</span>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 17 — WAYS OF WORKING
 * ══════════════════════════════════════════════════════════════════════════ */
const S17 = () => (
  <Frame>
    <Kicker>11 · Ways of Working</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={h}>How we keep the project moving and honest.</h2>
    </R>
    <R style={{ marginTop: 32, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%", maxHeight: 460 }}>
        <DetailCard
          title="Communication"
          items={[
            "A single point of contact on each side",
            "A regular check-in through the project",
            "Email on business days, one-business-day response target",
            "Approvals & feedback in writing are binding, which removes ambiguity",
          ]}
          size={18}
        />
        <DetailCard
          title="Revisions"
          items={[
            "Each design & content phase includes a defined number of revision rounds before approval",
            "Revisions to approved items, or changes that reopen a closed phase, are new work, quoted separately",
            "Keeps scope honest and the timeline predictable",
          ]}
          size={18}
          highlight
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 18 — INVESTMENT
 * ══════════════════════════════════════════════════════════════════════════ */
const COMPONENTS: [string, string, string][] = [
  ["Website", "Custom 8-page Next.js site, the Land–Settle–Thrive experience, CMS, i18n / RTL, accessibility, analytics, performance, deployment & handoff.", "$4,000"],
  ["Brand & Design System", "Brand foundation, logo & identity direction, full visual system, component library and brand guidelines.", "$1,000"],
];
const MILES: [string, string, string, string][] = [
  ["On start", "$2,000", "$2,500", "50%"],
  ["At staging", "$1,600", "$2,000", "40%"],
  ["At launch", "$400", "$500", "10%"],
];
const S18 = () => (
  <Frame>
    <Kicker>12 · Investment</Kicker>
    <R style={{ marginTop: 18 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Two modular components. Take the website alone, or add the brand.</h2>
    </R>
    <R style={{ marginTop: 26 }}>
      <div style={{ ...cardBase, overflow: "hidden" }}>
        {COMPONENTS.map(([name, desc, price], idx) => (
          <div key={name} style={{ display: "grid", gridTemplateColumns: "1.3fr 2.9fr auto", alignItems: "center", gap: 28, padding: "16px 30px", background: idx % 2 === 1 ? ALT : "transparent" }}>
            <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 19, color: INK }}>{name}</span>
            <span style={{ fontFamily: SANS, fontSize: 15.5, color: SOFT, lineHeight: 1.4 }}>{desc}</span>
            <Price>{price}</Price>
          </div>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 2.9fr auto", alignItems: "center", gap: 28, padding: "18px 30px", borderTop: `1px solid ${ACCENT_LINE}`, background: ACCENT_FILL }}>
          <span style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 26, color: INK }}>Together</span>
          <span style={{ ...caption, fontSize: 15 }}>Brand + website</span>
          <Price big accent>$5,000</Price>
        </div>
      </div>
    </R>
    <R style={{ marginTop: 24, flex: 1 }}>
      <div style={{ ...cardBase, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 0.7fr", gap: 20, padding: "12px 30px", background: ALT }}>
          {["Milestone", "Website", "Both", "Share"].map((hd) => (
            <span key={hd} style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED }}>{hd}</span>
          ))}
        </div>
        {MILES.map(([when, web, both, share], i) => (
          <div key={when} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 0.7fr", gap: 20, padding: "13px 30px", borderTop: `1px solid ${HAIRLINE}`, alignItems: "center" }}>
            <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 17, color: INK }}>{when}</span>
            <span style={{ ...TNUM, fontFamily: SANS, fontSize: 17, color: SOFT }}>{web}</span>
            <span style={{ ...TNUM, fontFamily: SANS, fontSize: 17, color: SOFT }}>{both}</span>
            <span style={{ ...TNUM, fontFamily: SANS, fontWeight: 600, fontSize: 17, color: i === 0 ? AMBER : INK }}>{share}</span>
          </div>
        ))}
      </div>
    </R>
    <R style={{ marginTop: 18 }}>
      <div style={{ ...cardBase, background: ACCENT_FILL, borderColor: ACCENT_LINE, padding: "16px 26px" }}>
        <p style={{ ...caption, fontSize: 16, color: SOFT }}>
          <strong style={{ color: AMBER }}>Hosting &amp; maintenance: included free for the first year</strong>{" "}
          (uptime, security, backups and minor edits). After year one it continues on an optional retainer,
          or moves to THRIVE&rsquo;s own accounts.
        </p>
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 19 — PRICING · SUMMARY OF FIGURES
 * ══════════════════════════════════════════════════════════════════════════ */
const SUMROWS: [string, string, "head" | "row" | "accent"][] = [
  ["Website — custom 8-page Next.js build", "$4,000", "row"],
  ["Brand & Design System — optional add-on", "$1,000", "row"],
  ["Together — brand + website", "$5,000", "head"],
  ["Milestone 1 — on start (50%)", "$2,000 · $2,500", "row"],
  ["Milestone 2 — at staging (40%)", "$1,600 · $2,000", "row"],
  ["Milestone 3 — at launch (10%)", "$400 · $500", "row"],
  ["Hosting & maintenance — first year", "Included free", "row"],
  ["Third-party CMS & integration fees", "THRIVE’s own accounts", "row"],
  ["Recommended", "Brand + website — “The Approach”", "accent"],
];
const S19 = () => (
  <Frame>
    <Kicker>12 · Investment — Summary of Figures</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Every number, in one place.</h2>
    </R>
    <R style={{ marginTop: 24, flex: 1 }}>
      <div style={{ ...cardBase, overflow: "hidden" }}>
        {SUMROWS.map(([label, amount, kind], idx) => {
          const head = kind === "head";
          const acc = kind === "accent";
          return (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr",
                alignItems: "center",
                gap: 24,
                padding: "15px 30px",
                background: acc ? ACCENT_FILL : head ? "rgba(235,165,106,0.06)" : "transparent",
                borderTop: idx === 0 ? "none" : `1px solid ${HAIRLINE}`,
              }}
            >
              <span style={{ fontFamily: head || acc ? SERIF : SANS, fontWeight: 600, fontSize: head ? 24 : 18, color: INK }}>
                {label}
              </span>
              <span style={{ ...TNUM, textAlign: "right", fontFamily: SANS, fontWeight: 600, fontSize: head || acc ? 22 : 18, color: acc || head ? AMBER : INK }}>
                {amount}
              </span>
            </div>
          );
        })}
      </div>
    </R>
    <R>
      <p style={{ ...caption, fontSize: 15, marginTop: 14 }}>
        All amounts in USD. Billed in three milestones: 50% to begin, 40% at staging, 10% at launch.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 20 — SCOPE · INCLUDED & EXCLUDED
 * ══════════════════════════════════════════════════════════════════════════ */
const S20 = () => (
  <Frame>
    <Kicker>13 · Scope — Included &amp; Excluded</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1480 }}>Clear boundaries, no surprise costs.</h2>
    </R>
    <R style={{ marginTop: 30, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%" }}>
        <DetailCard
          title="Included"
          items={[
            "Design & build of all eight pages, responsive across devices",
            "Copywriting for all eight pages, to the agreed direction",
            "Photography, video and media production for the site",
            "Headless CMS setup for cities, partners, benefits and tiers",
            "Internationalisation / RTL readiness; accessibility to WCAG AA",
            "Analytics, conversion tracking, SEO / AEO foundation, deployment",
            "Hosting & maintenance free for the first year (uptime, security, backups, minor edits)",
            "Defined revision rounds per phase; launch support and handoff",
          ]}
          size={16}
        />
        <DetailCard
          title="Excluded (available separately)"
          items={[
            "Ongoing content, iteration or growth after launch, recommended as a monthly retainer since the platform compounds",
            "Hosting & maintenance after the first year, on a retainer or THRIVE’s own accounts",
            "Legal, privacy & compliance copy",
            "Third-party CMS & integration fees, on THRIVE’s own accounts",
          ]}
          size={16}
          highlight
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 21 — ASSUMPTIONS, ROLES & NEXT STEPS (close)
 * ══════════════════════════════════════════════════════════════════════════ */
const STEPS: [string, string][] = [
  ["Confirm the components", "Website only, or website plus brand. For a launch this big, the brand system is the recommendation."],
  ["Approve & settle the start milestone", "Approve this proposal and settle the 50% start milestone to lock the slot and start date."],
  ["Book the discovery kickoff", "The project clock starts there: strategy, then brand, architecture, design, build and launch."],
];
const S21 = () => (
  <>
    <DawnSky intensity={0.55} />
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,11,0.74) 0%, rgba(10,10,11,0.5) 50%, rgba(10,10,11,0.78) 100%)" }} />
    <Frame>
      <Kicker>14 · Assumptions, Roles &amp; Next Steps</Kicker>
      <R style={{ marginTop: 18 }}>
        <h2 style={{ ...h, fontSize: 50 }}>
          Land already <span style={em}>trusted.</span>
        </h2>
      </R>
      <R style={{ marginTop: 28, flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {STEPS.map(([title, desc], i) => (
            <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 22 }}>
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  border: `1px solid ${ACCENT_LINE}`,
                  background: ACCENT_FILL,
                  color: AMBER,
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: 21,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <div style={{ paddingTop: 2 }}>
                <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 27, color: INK }}>{title}</span>
                <span style={{ ...lead, fontSize: 18, display: "block", marginTop: 4, maxWidth: 1320 }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </R>
      <R>
        <p style={{ fontFamily: BODY, fontWeight: 600, fontSize: 24, color: ACCENT, maxWidth: 1440 }}>
          Confirm a direction and I&rsquo;ll have the agreement and a detailed project plan to you within the week.
        </p>
      </R>
      <R>
        <p style={{ ...caption, marginTop: 18 }}>
          Marc Friedman Web Design · marcfriedmanportfolio.com · marcfriedmancm@gmail.com
        </p>
      </R>
    </Frame>
  </>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * DECK SHELL
 * ══════════════════════════════════════════════════════════════════════════ */
const SLIDES = [
  S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12,
  S13, SSitemap, S14, SSEO, S15, S16, S17, S18, S19, S20, S21,
];

export default function ThriveDeck() {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(1);

  const next = useCallback(() => setI((p) => Math.min(p + 1, SLIDES.length - 1)), []);
  const prev = useCallback(() => setI((p) => Math.max(p - 1, 0)), []);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(SLIDES.length - 1);
      else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const Slide = SLIDES[i];
  const interactive = SLIDES[i] === S6;

  return (
    <div style={{ position: "fixed", inset: 0, background: PAGE, overflow: "hidden", fontFamily: SANS }}>
      {/* click-to-advance zones — disabled on the interactive slide */}
      <div
        onClick={prev}
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "26%", zIndex: 30, cursor: i > 0 ? "w-resize" : "default", pointerEvents: interactive ? "none" : "auto" }}
      />
      <div
        onClick={next}
        style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", zIndex: 30, cursor: i < SLIDES.length - 1 ? "e-resize" : "default", pointerEvents: interactive ? "none" : "auto" }}
      />

      {i > 0 && (
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{ position: "absolute", left: 22, top: "50%", transform: "translateY(-50%)", zIndex: 50, width: 46, height: 46, borderRadius: "50%", background: "rgba(18,26,43,0.65)", border: `1px solid ${LINE}`, color: INK, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronLeft size={22} />
        </button>
      )}
      {i < SLIDES.length - 1 && (
        <button
          onClick={next}
          aria-label="Next slide"
          style={{ position: "absolute", right: 22, top: "50%", transform: "translateY(-50%)", zIndex: 50, width: 46, height: 46, borderRadius: "50%", background: "rgba(18,26,43,0.65)", border: `1px solid ${LINE}`, color: INK, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronRight size={22} />
        </button>
      )}

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 1920,
          height: 1080,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
          background: PAGE,
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={i} style={{ position: "absolute", inset: 0 }}>
            <Slide />
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: "rgba(255,255,255,0.06)", zIndex: 40 }}>
        <motion.div
          animate={{ width: `${((i + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ height: "100%", background: ACCENT }}
        />
      </div>

      <div style={{ position: "absolute", right: 34, bottom: 24, zIndex: 40, fontFamily: MONO, fontSize: 14, color: MUTED, letterSpacing: "0.08em", ...TNUM }}>
        <span style={{ color: AMBER }}>{String(i + 1).padStart(2, "0")}</span>
        <span> / {String(SLIDES.length).padStart(2, "0")}</span>
      </div>
      <div style={{ position: "absolute", left: 34, bottom: 24, zIndex: 40, fontFamily: MONO, fontSize: 12, color: "rgba(151,160,178,0.6)", letterSpacing: "0.06em" }}>
        ← → to navigate · F for fullscreen
      </div>
    </div>
  );
}

"use client";

/* ─────────────────────────────────────────────────────────────────────────────
 * RFC GROUP — PITCH DECK
 * 12 slides, 16:9. Built on the Marc Friedman design system (Oswald / Poppins,
 * accent #A3D1FF, black surfaces). Steve-Jobs cadence: one idea per slide,
 * huge type, generous negative space, calm reveals.
 *
 * A fixed 1920×1080 stage is scaled to fit any viewport so on-slide measurements
 * match the spec exactly. Drive it with ← / → / Space, click zones, or the rail.
 * ───────────────────────────────────────────────────────────────────────────── */

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Tokens (mirror globals.css; spec overrides for card surface + hairline) ── */
const ACCENT = "#A3D1FF";
const ACCENT_FILL = "rgba(163,209,255,0.12)";
const INK = "#F2F1EC";
const MUTED = "#9A9A94";
const SURFACE = "#101010";
const HAIRLINE = "#2A2A2A";
const DISPLAY = "var(--font-heading)"; // Oswald
const BODY = "var(--font-body)"; // Poppins

/* ── Motion ──────────────────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;
const stage = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const R: React.FC<React.PropsWithChildren<{ style?: React.CSSProperties }>> = ({
  children,
  style,
}) => (
  <motion.div variants={item} style={style}>
    {children}
  </motion.div>
);

/* ── Shared atoms ────────────────────────────────────────────────────────── */
const Kicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <R
    style={{
      fontFamily: BODY,
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: ACCENT,
    }}
  >
    {children}
  </R>
);

const h1: React.CSSProperties = {
  fontFamily: DISPLAY,
  fontWeight: 700,
  fontSize: 88,
  lineHeight: 1.04,
  letterSpacing: "-0.02em",
  color: INK,
  margin: 0,
};
const h2: React.CSSProperties = {
  fontFamily: DISPLAY,
  fontWeight: 600,
  fontSize: 52,
  lineHeight: 1.08,
  letterSpacing: "-0.01em",
  color: INK,
  margin: 0,
};
const body: React.CSSProperties = {
  fontFamily: BODY,
  fontWeight: 400,
  fontSize: 22,
  lineHeight: 1.5,
  color: MUTED,
  margin: 0,
};
const caption: React.CSSProperties = {
  fontFamily: BODY,
  fontWeight: 400,
  fontSize: 15,
  color: MUTED,
  margin: 0,
};

/* Stage frame: every slide renders inside the 1920×1080 canvas with 120px margins */
const Frame: React.FC<React.PropsWithChildren<{ center?: boolean }>> = ({
  children,
  center,
}) => (
  <motion.div
    variants={stage}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, transition: { duration: 0.35 } }}
    style={{
      position: "absolute",
      inset: 0,
      padding: 120,
      display: "flex",
      flexDirection: "column",
      justifyContent: center ? "center" : "flex-start",
    }}
  >
    {children}
  </motion.div>
);

const card: React.CSSProperties = {
  background: SURFACE,
  border: `1px solid ${HAIRLINE}`,
  borderRadius: 16,
};

/* ── Work proof strip (real portfolio mockups) ───────────────────────────── */
const WORK = [
  {
    src: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710",
    label: "Binns Media — streaming platform",
  },
  {
    src: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010",
    label: "Paving Leads — SEO lead-gen",
  },
  {
    src: "https://ik.imagekit.io/qcvroy8xpd/1732717492455.jpeg",
    label: "AutoMarginX — SaaS analytics",
  },
  {
    src: "https://ik.imagekit.io/qcvroy8xpd/image%201%20(10).png",
    label: "Sentinel DS — design system",
  },
];

/* ── Real client reviews (verbatim from the live portfolio) ──────────────── */
const REVIEWS = [
  {
    name: "Benny Even Ari",
    role: "Investment Banker · Real Estate",
    image: "/images/clients/s3S0EXG.jpg",
    quote:
      "Exceptional skill creating a sophisticated platform that perfectly aligns with our investment and real-estate needs.",
  },
  {
    name: "Shalom Landman",
    role: "Real Estate Developer · Florida",
    image: "/images/clients/N6MTFbh.jpeg",
    quote:
      "The site looks amazing, runs smoothly, and perfectly captures exactly what I was looking for.",
  },
];

const Stars = () => (
  <div aria-label="5 out of 5" style={{ color: ACCENT, fontSize: 15, letterSpacing: 2 }}>
    {"★★★★★"}
  </div>
);

const ReviewCard: React.FC<{ r: (typeof REVIEWS)[number] }> = ({ r }) => (
  <div
    style={{ ...card, padding: 26, flex: 1, display: "flex", flexDirection: "column", gap: 14 }}
  >
    <Stars />
    <p style={{ fontFamily: BODY, fontSize: 17, lineHeight: 1.5, color: INK, margin: 0 }}>
      {"“"}
      {r.quote}
      {"”"}
    </p>
    <div style={{ flex: 1 }} />
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={r.image}
        alt={r.name}
        style={{
          width: 46,
          height: 46,
          borderRadius: "50%",
          objectFit: "cover",
          border: `1px solid ${HAIRLINE}`,
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: 16, color: INK }}>{r.name}</div>
        <div style={{ ...caption, fontSize: 13 }}>{r.role}</div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * SLIDES
 * ══════════════════════════════════════════════════════════════════════════ */

/* 1 — COVER */
const S1 = () => (
  <Frame center>
    <R style={{ width: 80, height: 2, background: ACCENT, marginBottom: 28 }}>
      <span />
    </R>
    <Kicker>Marc Friedman × The RFC Group</Kicker>
    <div style={{ height: 64 }} />
    <R>
      <h1 style={h1}>Where you are.</h1>
    </R>
    <R>
      <h1 style={{ ...h1, color: ACCENT }}>Where Bienstock is.</h1>
    </R>
    <R>
      <h1 style={h1}>How we close the gap.</h1>
    </R>
    <div style={{ height: 72 }} />
    <R>
      <p style={caption}>A diagnosis and a plan — June 17, 2026</p>
    </R>
  </Frame>
);

/* 2 — WHO I AM */
const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div style={{ ...card, padding: 32, display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <div
      style={{
        fontFamily: DISPLAY,
        fontWeight: 700,
        fontSize: 76,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        color: ACCENT,
      }}
    >
      {value}
    </div>
    <div style={{ ...caption, marginTop: 12 }}>{label}</div>
  </div>
);

const S2 = () => (
  <Frame>
    <Kicker>Who you{"’"}re working with</Kicker>
    <div style={{ display: "flex", gap: 56, marginTop: 36, flex: 1 }}>
      {/* left: positioning + real client reviews */}
      <div style={{ width: "55%", display: "flex", flexDirection: "column" }}>
        <R>
          <h2 style={h2}>
            I design and build for one thing:
            <br />
            turning visitors into business.
          </h2>
        </R>
        <R style={{ marginTop: 22, maxWidth: 680 }}>
          <p style={{ ...body, fontSize: 21 }}>
            React / Next.js developer and designer — and a marketer first. Every page earns
            its place by moving someone closer to becoming a lead.
          </p>
        </R>
        <div style={{ flex: 1 }} />
        <R>
          <div style={{ display: "flex", gap: 24 }}>
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} r={r} />
            ))}
          </div>
        </R>
      </div>
      {/* right: 2×2 stat grid */}
      <R style={{ width: "45%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 22,
            height: "100%",
          }}
        >
          <Stat value="50+" label="Projects shipped" />
          <Stat value="5.0" label="Client rating" />
          <Stat value="3" label="Continents served" />
          <Stat value="98/100" label="PageSpeed, sub-2s loads" />
        </div>
      </R>
    </div>
    {/* bottom: selected real work */}
    <R>
      <div style={{ marginTop: 32 }}>
        <p
          style={{
            ...caption,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Selected work · CSS Design Awards · Awwwards
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {WORK.map((w) => (
            <div key={w.src} style={{ flex: 1 }}>
              <div style={{ ...card, overflow: "hidden", height: 150 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.src}
                  alt={w.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ ...caption, marginTop: 8, fontSize: 12 }}>{w.label}</div>
            </div>
          ))}
        </div>
      </div>
    </R>
  </Frame>
);

/* 3 — HOW I THINK · THREE PILLARS */
const PILLARS = [
  {
    n: "01",
    title: "Get found",
    body: "SEO + GEO so the right people find you the moment they’re searching — on Google and inside AI.",
  },
  {
    n: "02",
    title: "Earn trust",
    body: "Design, speed, and proof that make a stranger believe you’re the firm to call — in seconds.",
  },
  {
    n: "03",
    title: "Convert",
    body: "Funnels built to turn that attention into booked calls and closed deals. Traffic isn’t the goal — revenue is.",
  },
];
const S3 = () => (
  <Frame>
    <Kicker>How I think about this</Kicker>
    <R style={{ marginTop: 26 }}>
      <h2 style={{ ...h2, maxWidth: 1500 }}>
        I don’t build websites. I build conversion engines.
      </h2>
    </R>
    <R style={{ marginTop: 22, maxWidth: 1240 }}>
      <p style={{ ...body, fontSize: 24 }}>
        A site that looks beautiful but doesn’t generate business is a failure. Done right,
        your website is the hardest-working salesperson you have — and the highest-leverage
        investment you can make. It compounds. That conviction runs through everything on
        three pillars:
      </p>
    </R>
    <R style={{ flex: 1 }}>
      <div
        style={{
          display: "flex",
          gap: 28,
          marginTop: 44,
          height: "100%",
          maxHeight: 360,
          alignItems: "stretch",
        }}
      >
        {PILLARS.map((p) => (
          <div
            key={p.n}
            style={{ ...card, padding: 40, flex: 1, display: "flex", flexDirection: "column" }}
          >
            <span
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: 56,
                color: ACCENT,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {p.n}
            </span>
            <p style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 38, color: INK, margin: "22px 0 0" }}>
              {p.title}
            </p>
            <p style={{ ...body, fontSize: 20, marginTop: 16 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* 4 — WHAT YOU TOLD ME YOU NEED */
const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      background: SURFACE,
      border: `1px solid ${HAIRLINE}`,
      borderRadius: 12,
      padding: "22px 34px",
      fontFamily: BODY,
      fontWeight: 600,
      fontSize: 22,
      color: INK,
    }}
  >
    {children}
  </div>
);
const S4 = () => (
  <Frame>
    <Kicker>What you asked for</Kicker>
    <R style={{ marginTop: 56 }}>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <Chip>New website</Chip>
        <Chip>Hosting &amp; maintenance</Chip>
        <Chip>SEO &amp; GEO</Chip>
        <Chip>A lead funnel</Chip>
      </div>
    </R>
    <div style={{ flex: 1 }} />
    <R>
      <h2 style={{ ...h2, fontSize: 64, maxWidth: 1280 }}>
        Before we solve any of it — here’s honestly where you stand today.
      </h2>
    </R>
    <div style={{ height: 40 }} />
  </Frame>
);

/* 5 — THE DIAGNOSIS: YOU'RE INVISIBLE */
const Row: React.FC<{ num: string; children: React.ReactNode }> = ({ num, children }) => (
  <p style={{ ...body, display: "flex", gap: 16 }}>
    <span style={{ color: ACCENT, fontWeight: 600, minWidth: 64 }}>{num}</span>
    <span>{children}</span>
  </p>
);
const S5 = () => (
  <Frame>
    <Kicker>Where you stand</Kicker>
    <div style={{ display: "flex", gap: 72, marginTop: 24, flex: 1, alignItems: "center" }}>
      <R style={{ flexShrink: 0 }}>
        <div
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: 460,
            lineHeight: 0.8,
            letterSpacing: "-0.04em",
            color: ACCENT,
          }}
        >
          0
        </div>
      </R>
      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <R>
          <h2 style={{ ...h2, fontSize: 46 }}>organic visitors a month from Google.</h2>
        </R>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <R>
            <Row num="21">
              keywords ranked — almost all accidental (“the rife group,” “rcf group”)
            </Row>
          </R>
          <R>
            <Row num="#19–25">
              brand term “RFC Group Los Angeles” sits on page 2–3 — for your own name
            </Row>
          </R>
          <R>
            <Row num="~15.4M">domain rank — effectively nowhere</Row>
          </R>
        </div>
      </div>
    </div>
  </Frame>
);

/* 6 — THE RUGBY SLIDE */
const S6 = () => (
  <Frame>
    <Kicker>How thin the footprint is</Kicker>
    <div style={{ display: "flex", gap: 80, marginTop: 56, flex: 1, alignItems: "center" }}>
      <div style={{ width: "48%", display: "flex", flexDirection: "column", gap: 36 }}>
        <R>
          <h2 style={h2}>I ran the competitor tool. It returned rugby clubs.</h2>
        </R>
        <R>
          <p style={{ ...body, fontSize: 26 }}>
            With almost no presence to match against, the software assumed “RFC” meant{" "}
            <span style={{ color: ACCENT, fontWeight: 600 }}>Rugby Football Club.</span>
          </p>
        </R>
      </div>
      <R style={{ width: "52%" }}>
        <div
          style={{
            ...card,
            padding: 28,
            boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
          }}
        >
          {/* simulated competitor-tool result */}
          <p style={{ ...caption, marginBottom: 18, letterSpacing: "0.04em" }}>
            ORGANIC COMPETITORS · rfcgroup.com
          </p>
          {[
            ["Glasgow Rugby Football Club", "rfc"],
            ["Leinster RFC", "rfc"],
            ["Saracens RFC", "rfc"],
            ["Bath Rugby Football Club", "rfc"],
            ["Harlequin F.C.", "rfc"],
          ].map(([name], i) => (
            <div
              key={name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                borderTop: i === 0 ? "none" : `1px solid ${HAIRLINE}`,
              }}
            >
              <span style={{ fontFamily: BODY, fontSize: 19, color: INK }}>🏉 {name}</span>
              <span style={{ ...caption }}>Common kw: RFC</span>
            </div>
          ))}
        </div>
      </R>
    </div>
  </Frame>
);

/* 7 — YOUR OWN SITE SAYS IT ISN'T REAL */
const S7 = () => (
  <Frame center>
    <Kicker>From your current site</Kicker>
    <R style={{ marginTop: 48 }}>
      <div style={{ display: "flex", gap: 40 }}>
        <div style={{ width: 4, background: ACCENT, alignSelf: "stretch", borderRadius: 2 }} />
        <h1 style={{ ...h1, fontSize: 72, maxWidth: 1320 }}>
          “This is a static showcase build — please reach us directly.”
        </h1>
      </div>
    </R>
    <R style={{ marginTop: 44, paddingLeft: 44 }}>
      <p style={{ ...body, fontSize: 26, maxWidth: 1000 }}>
        Your website tells visitors it isn’t real. The business isn’t the problem —
        none of it shows up where people now look.
      </p>
    </R>
  </Frame>
);

/* 8 — THE GAP (climax) */
const TABLE: { firm: string; kw: string; vis: string; note: string; rfc?: boolean; bien?: boolean }[] = [
  { firm: "The RFC Group", kw: "21", vis: "0", note: "Where you are now", rfc: true },
  { firm: "The Bienstock Group", kw: "1,835", vis: "~2,874", note: "Same neighborhoods, same community", bien: true },
  { firm: "Carolwood Estates", kw: "3,943", vis: "~11,818", note: "Boutique Beverly Hills" },
  { firm: "The Agency", kw: "29,670", vis: "~42,544", note: "The ceiling — what scale looks like" },
];
const S8 = () => {
  const cols = "1.4fr 0.8fr 1.1fr 1.6fr";
  return (
    <Frame>
      <Kicker>What it’s costing you</Kicker>
      <R style={{ marginTop: 28 }}>
        <h2 style={{ ...h2, fontSize: 44, maxWidth: 1500 }}>
          A firm targeting your exact neighborhoods pulls{" "}
          <span style={{ color: ACCENT }}>~2,900 people a month</span>. You pull zero.
        </h2>
      </R>
      <R style={{ marginTop: 40 }}>
        {/* header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cols,
            padding: "0 28px 16px",
            ...caption,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <span>Firm</span>
          <span>Keywords</span>
          <span>Visitors / mo</span>
          <span>Note</span>
        </div>
        {TABLE.map((r) => (
          <div
            key={r.firm}
            style={{
              display: "grid",
              gridTemplateColumns: cols,
              alignItems: "center",
              padding: "26px 28px",
              borderTop: `1px solid ${HAIRLINE}`,
              background: r.rfc ? ACCENT_FILL : "transparent",
              borderLeft: r.rfc ? `3px solid ${ACCENT}` : "3px solid transparent",
            }}
          >
            <span
              style={{
                fontFamily: DISPLAY,
                fontWeight: 600,
                fontSize: 30,
                color: INK,
              }}
            >
              {r.firm}
            </span>
            <span style={{ fontFamily: BODY, fontSize: 24, color: r.bien ? ACCENT : INK }}>
              {r.kw}
            </span>
            <span
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: 34,
                color: r.bien ? ACCENT : r.rfc ? INK : INK,
              }}
            >
              {r.vis}
            </span>
            <span style={{ ...caption, fontSize: 18, color: r.bien ? "#cfe4ff" : MUTED }}>
              {r.note}
            </span>
          </div>
        ))}
      </R>
      <R style={{ marginTop: 36 }}>
        <p style={{ fontFamily: BODY, fontWeight: 600, fontSize: 30, color: INK }}>
          One extra deal a year from search pays for this several times over.
        </p>
      </R>
    </Frame>
  );
};

/* 9 — THE ZILLOW REFRAME */
const S9 = () => (
  <Frame center>
    <Kicker>The Zillow question</Kicker>
    <R style={{ marginTop: 40 }}>
      <p
        style={{
          fontFamily: DISPLAY,
          fontWeight: 600,
          fontSize: 40,
          color: MUTED,
          textDecoration: "line-through",
          textDecorationColor: "rgba(154,154,148,0.6)",
          margin: 0,
        }}
      >
        Bolt the Zillow API onto the site
      </p>
    </R>
    <R style={{ marginTop: 20 }}>
      <p style={{ ...body, maxWidth: 1180 }}>
        Zillow retired its public API in 2021. It’s gone. Anyone selling “Zillow
        integration” today is scraping it (breaks constantly, violates their terms) — or
        selling something that doesn’t exist.
      </p>
    </R>
    <R style={{ marginTop: 52 }}>
      <h2 style={{ ...h2, color: ACCENT, fontSize: 56, maxWidth: 1400 }}>
        What you actually want: live listings, fed straight from the MLS via IDX.
      </h2>
    </R>
    <R style={{ marginTop: 28 }}>
      <p style={{ ...body, maxWidth: 1180 }}>
        That’s where Zillow gets its data anyway. You’re DRE-licensed — you already have
        the access. Real listings, auto-updating, no Zillow dependency.
      </p>
    </R>
  </Frame>
);

/* 10 — THE SOLUTION */
const PANELS = [
  {
    n: "01",
    title: "Rebuild",
    word: "the foundation.",
    body: "Fast Next.js, live MLS listings, schema markup so Google and AI can read who you are.",
  },
  {
    n: "02",
    title: "SEO + GEO",
    word: "the engine.",
    body: "Neighborhood pages: Pico-Robertson, Beverlywood, Koreatown.",
  },
  {
    n: "03",
    title: "Funnel",
    word: "the conversion.",
    body: "Routes buy / sell / finance / develop into actual leads.",
  },
  {
    n: "04",
    title: "Hosting + maintenance",
    word: "the upkeep.",
    body: "Keeps it live and improving.",
    recurring: true,
  },
];
const S10 = () => (
  <Frame>
    <Kicker>The plan</Kicker>
    <R style={{ marginTop: 28 }}>
      <h2 style={h2}>One system. The pieces don’t work apart.</h2>
    </R>
    <R style={{ marginTop: 48, flex: 1 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 28,
          height: "100%",
        }}
      >
        {PANELS.map((p) => (
          <div
            key={p.n}
            style={{
              ...card,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              background: p.recurring ? ACCENT_FILL : SURFACE,
              borderColor: p.recurring ? "rgba(163,209,255,0.35)" : HAIRLINE,
            }}
          >
            <span style={{ ...caption, color: "rgba(154,154,148,0.6)", fontSize: 18 }}>{p.n}</span>
            <div style={{ flex: 1 }} />
            <p style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 34, color: INK, margin: 0 }}>
              {p.title} — <span style={{ color: ACCENT }}>{p.word}</span>
            </p>
            <p style={{ ...body, fontSize: 20, marginTop: 14 }}>
              {p.body}
              {p.recurring && (
                <span style={{ color: ACCENT, fontWeight: 600 }}> (The recurring piece.)</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* 11 — THE GEO ANGLE */
const S11 = () => (
  <Frame center>
    <Kicker>Why this matters now</Kicker>
    <R style={{ marginTop: 44 }}>
      <div style={{ position: "relative", maxWidth: 980 }}>
        <div
          style={{
            ...card,
            background: SURFACE,
            borderRadius: 20,
            padding: "30px 36px",
            fontFamily: BODY,
            fontWeight: 600,
            fontSize: 26,
            color: INK,
            lineHeight: 1.45,
          }}
        >
          “Who’s a good realtor in Beverly Hills who can also handle financing?”
        </div>
        {/* accent caret */}
        <div
          style={{
            position: "absolute",
            left: 56,
            bottom: -13,
            width: 26,
            height: 26,
            background: SURFACE,
            borderRight: `1px solid ${HAIRLINE}`,
            borderBottom: `1px solid ${HAIRLINE}`,
            transform: "rotate(45deg)",
          }}
        />
      </div>
    </R>
    <R style={{ marginTop: 64 }}>
      <h2 style={{ ...h2, maxWidth: 1400 }}>
        Your full-service, one-team model is exactly what AI loves to recommend.
      </h2>
    </R>
    <R style={{ marginTop: 28 }}>
      <p style={{ ...body, fontSize: 26, maxWidth: 1200 }}>
        But only if it can read your site. Right now it can’t see you at all — your biggest
        differentiator, <span style={{ color: INK, fontWeight: 600 }}>completely wasted.</span>
      </p>
    </R>
  </Frame>
);

/* 12 — NEXT STEP */
const STEPS = [
  ["01", "Rebuild + MLS integration"],
  ["02", "SEO + GEO neighborhood pages"],
  ["03", "Funnel + lead capture"],
];
const S12 = () => (
  <Frame>
    <Kicker>Where we go from here</Kicker>
    <R style={{ marginTop: 28 }}>
      <h2 style={h2}>Start with the foundation. Layer the rest on top.</h2>
    </R>
    <R style={{ marginTop: 72 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {STEPS.map(([n, label], i) => (
          <React.Fragment key={n}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 700,
                  fontSize: 48,
                  color: ACCENT,
                  letterSpacing: "-0.02em",
                }}
              >
                {n}
              </span>
              <span style={{ ...body, fontSize: 24, color: INK }}>{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background: `linear-gradient(90deg, ${ACCENT}, rgba(163,209,255,0.2))`,
                  margin: "0 40px",
                  alignSelf: "flex-start",
                  marginTop: 24,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </R>
    <div style={{ flex: 1 }} />
    <R>
      <p style={{ fontFamily: BODY, fontWeight: 600, fontSize: 30, color: INK, maxWidth: 1300 }}>
        Proposal to you by Friday. Tonight, I just need a yes on direction so I can scope it
        properly.
      </p>
    </R>
    <R>
      <p style={{ ...caption, marginTop: 28 }}>
        Marc Friedman · marcfriedmancm@gmail.com · marcfriedmanportfolio.com
      </p>
    </R>
  </Frame>
);

const SLIDES = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12];

/* ═══════════════════════════════════════════════════════════════════════════
 * DECK SHELL — scaled stage + navigation
 * ══════════════════════════════════════════════════════════════════════════ */
export default function RfcDeck() {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(1);

  const next = useCallback(() => setI((p) => Math.min(p + 1, SLIDES.length - 1)), []);
  const prev = useCallback(() => setI((p) => Math.max(p - 1, 0)), []);

  useEffect(() => {
    const fit = () =>
      setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
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

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* click zones */}
      <div
        onClick={prev}
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "28%", zIndex: 30, cursor: i > 0 ? "w-resize" : "default" }}
      />
      <div
        onClick={next}
        style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", zIndex: 30, cursor: i < SLIDES.length - 1 ? "e-resize" : "default" }}
      />

      {/* scaled 16:9 stage */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 1920,
          height: 1080,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
          background: "#000",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={i} style={{ position: "absolute", inset: 0 }}>
            <Slide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* progress bar */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: "rgba(255,255,255,0.06)", zIndex: 40 }}>
        <motion.div
          animate={{ width: `${((i + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ height: "100%", background: ACCENT }}
        />
      </div>

      {/* counter + hint */}
      <div
        style={{
          position: "absolute",
          right: 36,
          bottom: 26,
          zIndex: 40,
          fontFamily: BODY,
          fontSize: 14,
          color: MUTED,
          letterSpacing: "0.08em",
        }}
      >
        <span style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</span>
        <span> / {String(SLIDES.length).padStart(2, "0")}</span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 36,
          bottom: 26,
          zIndex: 40,
          fontFamily: BODY,
          fontSize: 13,
          color: "rgba(154,154,148,0.6)",
          letterSpacing: "0.04em",
        }}
      >
        ← → to navigate · F for fullscreen
      </div>
    </div>
  );
}

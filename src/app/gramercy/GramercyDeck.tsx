"use client";
/* eslint-disable @next/next/no-img-element -- design-deck art direction; next/image adds nothing on a static-export slide */

/* ─────────────────────────────────────────────────────────────────────────────
 * THE GRAMERCY — PROPOSAL PRESENTATION (detailed edition)
 * 18 slides, 16:9. Send-ready / leave-behind. Copy drawn from the full 19-section
 * proposal. Oswald display + Poppins body for continuity with the RFC deck.
 *
 * Tokens: #0A0A0B page · #141417 cards · #1C1C21 alt rows · off-white #FCFCFB ·
 * readable #C9C9D0 secondary · muted #9A9AA2 labels · accent #A3D1FF (used
 * sparingly). Tabular figures on every price. Whitespace + tinted cards only —
 * no rules under titles, no side stripes.
 *
 * Drive with ← / → / Space, click zones, or the rail. F toggles fullscreen.
 * ───────────────────────────────────────────────────────────────────────────── */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutTemplate,
  CalendarCheck,
  LayoutGrid,
  Bot,
  Search,
  PenLine,
  ShieldCheck,
  RotateCw,
  Info,
  Maximize,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ── Tokens ──────────────────────────────────────────────────────────────── */
const PAGE = "#0A0A0B";
const CARD = "#141417";
const ALT = "#1C1C21";
const INK = "#FCFCFB";
const SOFT = "#C9C9D0"; // readable secondary body
const MUTED = "#9A9AA2"; // labels / captions
const ACCENT = "#A3D1FF";
const ACCENT_FILL = "rgba(163,209,255,0.12)";
const ACCENT_LINE = "rgba(163,209,255,0.45)";
const HAIRLINE = "rgba(255,255,255,0.08)";
const DISPLAY = "var(--font-heading)"; // Oswald
const BODY = "var(--font-body)"; // Poppins
const TNUM: React.CSSProperties = { fontVariantNumeric: "tabular-nums" };

/* ── Motion ──────────────────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;
const stage = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const R: React.FC<React.PropsWithChildren<{ style?: React.CSSProperties }>> = ({
  children,
  style,
}) => (
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
  fontFamily: DISPLAY,
  fontWeight: 600,
  fontSize: 52,
  lineHeight: 1.08,
  letterSpacing: "-0.01em",
  color: INK,
  margin: 0,
};
const lead: React.CSSProperties = {
  fontFamily: BODY,
  fontWeight: 400,
  fontSize: 22,
  lineHeight: 1.55,
  color: SOFT,
  margin: 0,
};
const caption: React.CSSProperties = {
  fontFamily: BODY,
  fontWeight: 400,
  fontSize: 15,
  color: MUTED,
  margin: 0,
};
const cardBase: React.CSSProperties = {
  background: CARD,
  border: `1px solid ${HAIRLINE}`,
  borderRadius: 16,
};

const Frame: React.FC<React.PropsWithChildren<{ center?: boolean }>> = ({
  children,
  center,
}) => (
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

const Price: React.FC<{ children: React.ReactNode; big?: boolean; accent?: boolean }> = ({
  children,
  big,
  accent,
}) => (
  <span
    style={{
      ...TNUM,
      fontFamily: BODY,
      fontWeight: 600,
      fontSize: big ? 26 : 22,
      color: accent ? ACCENT : INK,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);

/* Bullet list — neutral dash markers so the blue stays reserved for one moment */
const Bullets: React.FC<{ items: string[]; size?: number; gap?: number }> = ({
  items,
  size = 17,
  gap = 10,
}) => (
  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap }}>
    {items.map((t) => (
      <li
        key={t}
        style={{ display: "flex", gap: 12, fontFamily: BODY, fontSize: size, lineHeight: 1.42, color: SOFT }}
      >
        <span style={{ color: MUTED, flexShrink: 0 }}>–</span>
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

/* Detail card — title + bullets, used across scope & growth slides */
const DetailCard: React.FC<{
  n?: string;
  title: string;
  items: string[];
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
      borderColor: highlight ? ACCENT_LINE : HAIRLINE,
    }}
  >
    <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
      {n && (
        <span style={{ ...TNUM, fontFamily: DISPLAY, fontWeight: 700, fontSize: 22, color: ACCENT }}>
          {n}
        </span>
      )}
      <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 25, color: INK, lineHeight: 1.1 }}>
        {title}
      </span>
    </div>
    <Bullets items={items} size={size} />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 1 — COVER
 * ══════════════════════════════════════════════════════════════════════════ */
const PHOTO = (n: string) => `https://ik.imagekit.io/qcvroy8xpd/Copy%20of%20DSC_${n}.jpg`;

const S1 = () => (
  <>
    <img
      src={PHOTO("7016")}
      alt="The Gramercy interior"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,10,11,0.72) 0%, rgba(10,10,11,0.9) 100%)",
      }}
    />
    <Frame center>
      <Kicker>Proposal · Prepared for The RFC Group</Kicker>
    <div style={{ height: 48 }} />
    <R>
      <h1
        style={{
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: 100,
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          color: INK,
          margin: 0,
        }}
      >
        The Gramercy
        <br />
        Website Rebuild
        <br />
        <span style={{ color: ACCENT }}>&amp; Growth Engine</span>
      </h1>
    </R>
    <div style={{ height: 36 }} />
    <R>
      <p style={{ ...lead, fontSize: 23, maxWidth: 1120 }}>
        A complete rebuild, an AI-assisted leasing experience, and the search &amp; marketing
        engine to fill the building — and keep it full.
      </p>
    </R>
    <R>
      <p style={{ ...caption, fontSize: 18, marginTop: 18 }}>
        856 South Gramercy Drive · Koreatown, Los Angeles, CA 90005
      </p>
    </R>
    <div style={{ height: 64 }} />
      <R>
        <p style={caption}>
          Marc Friedman · June 18, 2026 · marcfriedmanportfolio.com · Confidential
        </p>
      </R>
    </Frame>
  </>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 2 — EXECUTIVE SUMMARY
 * ══════════════════════════════════════════════════════════════════════════ */
const Figure: React.FC<{ value: string; label: string; accent?: boolean }> = ({
  value,
  label,
  accent,
}) => (
  <div style={{ ...cardBase, padding: "24px 28px", flex: 1 }}>
    <div
      style={{
        ...TNUM,
        fontFamily: DISPLAY,
        fontWeight: 700,
        fontSize: 40,
        color: accent ? ACCENT : INK,
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <div style={{ ...caption, marginTop: 10 }}>{label}</div>
  </div>
);
const S2 = () => (
  <Frame>
    <Kicker>01 · Executive Summary</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1560 }}>
        A 60-home lease-up in Koreatown — and a site that should be doing the heavy lifting.
      </h2>
    </R>
    <R style={{ marginTop: 22, maxWidth: 1480 }}>
      <p style={lead}>
        The Gramercy has solid technical bones but isn’t yet built to convert the renters who
        land on it — or to be found by the much larger group still searching. This is one
        integrated engagement that fixes both, deliberately itemized so you see where every
        dollar goes.
      </p>
    </R>
    <R style={{ marginTop: 28 }}>
      <div style={{ display: "flex", gap: 24 }}>
        <DetailCard
          title="The Rebuild"
          items={[
            "Ground-up Next.js build worthy of the address",
            "24/7 tour booking + online application journey",
            "Interactive floor-plan system + custom AI leasing assistant",
            "Search & structured data engineered in from line one",
          ]}
          size={17}
        />
        <DetailCard
          title="The Growth Engine"
          items={[
            "Gets the building found on Google and inside AI answers",
            "Publishes content that compounds month over month",
            "Keeps the site fast, secure, and current",
            "Me on call as the lease-up demands",
          ]}
          size={17}
        />
      </div>
    </R>
    <div style={{ flex: 1 }} />
    <R>
      <div style={{ display: "flex", gap: 20 }}>
        <Figure value="$8,500" label="Rebuild — one-time, 50/40/10" />
        <Figure value="$2,000–3,500" label="Growth engine — per month" />
        <Figure value="$32,500" label="Route A — year one + add-ons" />
        <Figure value="$50,500" label="Route B — year one, all-in" accent />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 3 — UNDERSTANDING THE LEASE-UP
 * ══════════════════════════════════════════════════════════════════════════ */
const FACTS = [
  {
    n: "01",
    title: "Demand is time-sensitive",
    items: ["Empty units are the most expensive thing a new building owns", "The site and marketing must work hardest early"],
  },
  {
    n: "02",
    title: "Renters browse off-hours",
    items: ["Much serious enquiry happens evenings & weekends", "If the site can’t book a tour at 11pm, that lead is at risk"],
  },
  {
    n: "03",
    title: "The decision is visual & fast",
    items: ["Renters shortlist in minutes on photos, plans, price, trust", "The site has seconds to earn a tour"],
  },
  {
    n: "04",
    title: "Discovery is shifting",
    items: ["Renters start in Maps, local search — and AI assistants", "Invisible there = invisible to a growing share of the market"],
  },
];
const S3 = () => (
  <Frame>
    <Kicker>02 · Understanding The Gramercy</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1520 }}>
        Sixty homes to fill, where renters have real choice and decide fast.
      </h2>
    </R>
    <R style={{ marginTop: 18, maxWidth: 1520 }}>
      <p style={{ ...lead, fontSize: 20 }}>
        Six storeys · 60 residences · 16 layouts · rooftop deck, fitness center, secured EV
        parking, in-unit laundry, smart-home features. A strong product — the commercial
        reality of a lease-up shapes everything that follows:
      </p>
    </R>
    <R style={{ marginTop: 30, flex: 1 }}>
      <div style={{ display: "flex", gap: 22, height: "100%", maxHeight: 360 }}>
        {FACTS.map((f) => (
          <DetailCard key={f.n} n={f.n} title={f.title} items={f.items} size={16} />
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 4 — CURRENT SITE ASSESSMENT
 * ══════════════════════════════════════════════════════════════════════════ */
const S4 = () => (
  <Frame>
    <Kicker>03 · Current Site Assessment</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1540 }}>
        Strong bones. What’s missing is conversion and findability.
      </h2>
    </R>
    <R style={{ marginTop: 16, maxWidth: 1520 }}>
      <p style={{ ...lead, fontSize: 20 }}>
        Already on Next.js / Vercel with the right page types — this is a rebuild and
        elevation, not a start-from-nothing. Four things the rebuild addresses:
      </p>
    </R>
    <R style={{ marginTop: 28, flex: 1 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 22,
        }}
      >
        <DetailCard
          title="Design & experience"
          items={["Functional, but doesn’t signal a premium Koreatown address", "Rebuild treats every template as a path to one action — a tour"]}
          size={16}
        />
        <DetailCard
          title="Conversion architecture"
          items={["Booking & applications exist but aren’t a measured funnel", "Floor-plan tool loads as a slow, separate embed"]}
          size={16}
        />
        <DetailCard
          title="Findability — SEO, local & AI"
          items={["New domain: no organic footprint, limited structured data", "No local-search or AI-answer presence for the searches that matter"]}
          size={16}
        />
        <DetailCard
          title="Measurement"
          items={["No analytics/conversion baseline tying behavior to tours", "Instrumenting it is the first task of the engagement"]}
          size={16}
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 5 — STRATEGIC APPROACH
 * ══════════════════════════════════════════════════════════════════════════ */
const S5 = () => (
  <Frame>
    <Kicker>04 · Strategic Approach</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={h}>One system. The pieces don’t work apart.</h2>
    </R>
    <R style={{ marginTop: 16, maxWidth: 1520 }}>
      <p style={{ ...lead, fontSize: 20 }}>
        A beautiful site no one finds is a brochure no one reads. Traffic with nowhere to
        convert is wasted spend. Findability, trust, and conversion are treated as one
        connected system — built and run together.
      </p>
    </R>
    <R style={{ marginTop: 32, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%", maxHeight: 380 }}>
        <DetailCard
          n="01"
          title="Get found"
          items={["Search & AI-answer visibility for the right renters", "Google, Maps & local results — and the AI assistants people ask first", "Own the specific, high-intent searches large operators ignore"]}
        />
        <DetailCard
          n="02"
          title="Earn trust"
          items={["Design, speed & proof that convince in seconds", "For a luxury lease-up the site itself is a trust signal", "Premium + instant load = the building feels the same"]}
        />
        <DetailCard
          n="03"
          title="Convert"
          items={["Every page engineered toward a booked tour or application", "An AI assistant answers, qualifies & books around the clock", "Working the hours the leasing office can’t"]}
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 6 — THE SYSTEM (chips)
 * ══════════════════════════════════════════════════════════════════════════ */
const CHIPS = [
  { icon: LayoutTemplate, label: "Complete rebuild", note: "Ground-up Next.js" },
  { icon: CalendarCheck, label: "Tour booking", note: "24/7 scheduling" },
  { icon: LayoutGrid, label: "Floor-plan system", note: "60 homes · 16 layouts" },
  { icon: Bot, label: "AI leasing chatbot", note: "Books & qualifies" },
  { icon: Search, label: "SEO + Local + GEO", note: "Found on Google & AI" },
  { icon: PenLine, label: "Content engine", note: "2–4 posts / month" },
  { icon: ShieldCheck, label: "Hosting & care", note: "Fast, secure, on-call" },
];
const S6 = () => (
  <Frame>
    <Kicker>The System</Kicker>
    <R style={{ marginTop: 24 }}>
      <h2 style={{ ...h, maxWidth: 1440 }}>Everything The Gramercy needs to lease, in one place.</h2>
    </R>
    <R style={{ marginTop: 50, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
        {CHIPS.map(({ icon: Icon, label, note }) => (
          <div key={label} style={{ ...cardBase, padding: "26px 26px", display: "flex", alignItems: "center", gap: 18 }}>
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: ACCENT_FILL,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={24} color={ACCENT} strokeWidth={1.75} />
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 19, color: INK }}>{label}</span>
              <span style={{ ...caption, fontSize: 14, marginTop: 2 }}>{note}</span>
            </span>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 7 — THE REBUILD (6 components)
 * ══════════════════════════════════════════════════════════════════════════ */
const REBUILD_CARDS = [
  { n: "01", title: "Design (UI/UX)", items: ["Refined editorial system, homepage + all templates", "Mobile-first, accessibility considered from the start"] },
  { n: "02", title: "Web development", items: ["Server-rendered Next.js, reusable components", "Performance budget, on-page SEO + schema throughout"] },
  { n: "03", title: "Tour booking", items: ["24/7 scheduling mapped to leasing availability", "Confirmations & reminders, tracked as a conversion"] },
  { n: "04", title: "Floor-plan system", items: ["60 residences / 16 layouts, filter by beds, price, availability", "Photos + 3D/360°, one structured availability source of truth"] },
  { n: "05", title: "Application flow", items: ["Low-friction Apply Now from any entry point", "Handoff into the leasing pipeline, tracked"] },
  { n: "06", title: "AI leasing chatbot", items: ["Custom assistant grounded in live availability data", "Answers, books tours, qualifies leads — detail next"] },
];
const S7 = () => (
  <Frame>
    <Kicker>Scope · The Rebuild</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>A custom leasing site, built to convert.</h2>
    </R>
    <R style={{ marginTop: 14, maxWidth: 1480 }}>
      <p style={{ ...lead, fontSize: 19 }}>
        A ground-up rebuild on Next.js — fast, secure, designed for a luxury Koreatown
        address, with search and structured data baked in from day one.
      </p>
    </R>
    <R style={{ marginTop: 26, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 22, height: "100%" }}>
        {REBUILD_CARDS.map((c) => (
          <DetailCard key={c.n} n={c.n} title={c.title} items={c.items} size={16} />
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 8 — THE AI LEASING CHATBOT (deep dive)
 * ══════════════════════════════════════════════════════════════════════════ */
const Bubble: React.FC<{ who: "renter" | "ai"; children: React.ReactNode }> = ({ who, children }) => {
  const ai = who === "ai";
  return (
    <div
      style={{
        alignSelf: ai ? "flex-start" : "flex-end",
        maxWidth: "82%",
        background: ai ? ACCENT_FILL : ALT,
        border: `1px solid ${ai ? ACCENT_LINE : HAIRLINE}`,
        borderRadius: 16,
        padding: "16px 20px",
        fontFamily: BODY,
        fontSize: 17,
        lineHeight: 1.45,
        color: ai ? INK : SOFT,
      }}
    >
      <div style={{ ...caption, fontSize: 12, color: ai ? ACCENT : MUTED, marginBottom: 6 }}>
        {ai ? "Gramercy assistant" : "Renter"}
      </div>
      {children}
    </div>
  );
};
const S8 = () => (
  <Frame>
    <Kicker>Scope · The AI Leasing Assistant</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48, maxWidth: 1520 }}>
        It works the 11pm and weekend traffic the leasing office can’t.
      </h2>
    </R>
    <div style={{ display: "flex", gap: 40, marginTop: 32, flex: 1 }}>
      <R style={{ width: "50%" }}>
        <div style={{ ...cardBase, padding: 34, height: "100%" }}>
          <Bullets
            size={18}
            gap={16}
            items={[
              "Grounded in the building’s own live data — never quotes a home that’s gone",
              "Answers pricing, availability, pet & parking policy, amenities, neighborhood",
              "Books tours and starts applications inside the conversation",
              "Qualifies beds / budget / move-in date and routes the strongest leads to leasing",
              "Guardrailed to stay on-topic with Fair-Housing-conscious language",
            ]}
          />
        </div>
      </R>
      <R style={{ width: "50%" }}>
        <div style={{ ...cardBase, padding: 30, height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ ...caption, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            A typical exchange
          </div>
          <Bubble who="renter">“Do you have a 2-bed under $3,200 for a July move-in?”</Bubble>
          <Bubble who="ai">
            Checks live availability, replies with matching homes (or the closest), surfaces the
            floor plan, photos &amp; a 3D tour — then offers the next open tour slot.
          </Bubble>
          <Bubble who="renter">“Yes, book me in.”</Bubble>
          <Bubble who="ai">
            Captures move-in date, budget &amp; bedroom need, books the tour, and routes a
            qualified lead to the leasing team.
          </Bubble>
        </div>
      </R>
    </div>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 9 — SEO & STRUCTURED DATA, BUILT IN
 * ══════════════════════════════════════════════════════════════════════════ */
const S9 = () => (
  <Frame>
    <Kicker>Scope · Search, Built In</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1520 }}>
        Search isn’t a phase after launch. It’s built into the rebuild.
      </h2>
    </R>
    <R style={{ marginTop: 16, maxWidth: 1520 }}>
      <p style={{ ...lead, fontSize: 20 }}>
        So Google and AI systems can read and represent The Gramercy correctly from day one —
        not bolted on months later.
      </p>
    </R>
    <R style={{ marginTop: 30, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%", maxHeight: 380 }}>
        <DetailCard
          title="Foundations"
          items={["Clean semantic markup", "Fast server-rendered pages", "Complete metadata + Open Graph layer", "XML sitemap + robots configuration"]}
        />
        <DetailCard
          title="Structured data (schema.org)"
          items={["Organization — who the building is", "ApartmentComplex — the property itself", "FloorPlan — each individual layout", "FAQ — the questions renters ask"]}
        />
        <DetailCard
          title="Why it matters"
          items={["Machine-readable = legible to Google & AI", "Eligible for rich results and map presence", "The same data grounds the AI assistant", "The foundation the growth engine builds on"]}
          highlight
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 10 — GROWTH ENGINE · SEARCH & VISIBILITY (the SEO work, itemized)
 * ══════════════════════════════════════════════════════════════════════════ */
const S10 = () => (
  <Frame>
    <Kicker>Scope · The Growth Engine — Search &amp; Visibility</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48, maxWidth: 1540 }}>
        The monthly SEO work that gets the building found — and keeps it found.
      </h2>
    </R>
    <R style={{ marginTop: 14, maxWidth: 1500 }}>
      <p style={{ ...lead, fontSize: 18 }}>
        For a single building the strategy is precise: don’t outspend portals on broad terms —
        own the specific, high-intent searches by layout, amenity, and exact neighborhood.
      </p>
    </R>
    <R style={{ marginTop: 24, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        <DetailCard
          n="7.1"
          title="Technical SEO"
          items={["Core Web Vitals & speed", "Indexation health & crawl paths", "Structured-data integrity", "Internal linking", "Remove anything blocking Google/AI crawlers"]}
          size={15}
        />
        <DetailCard
          n="7.2"
          title="On-Page SEO"
          items={["Titles, metadata & headings", "Content tuned to neighborhood, bed-count, price & amenity intent", "Build the pages that capture that intent"]}
          size={15}
        />
        <DetailCard
          n="7.3"
          title="Local SEO + GBP"
          items={["Google Business Profile management", "Local citations & NAP consistency", "Map-pack visibility for K-town rentals", "Review signals"]}
          size={15}
        />
        <DetailCard
          n="7.4"
          title="GEO — AI visibility"
          items={["Make the building visible & accurate inside AI assistants", "Build on structured data + content", "Be in the answer when renters ask AI first"]}
          size={15}
          highlight
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 11 — GROWTH ENGINE · CONTENT, CARE & OVERSIGHT
 * ══════════════════════════════════════════════════════════════════════════ */
const S11 = () => (
  <Frame>
    <Kicker>Scope · The Growth Engine — Content, Care &amp; Oversight</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>The work that compounds, and keeps the site honest.</h2>
    </R>
    <R style={{ marginTop: 26, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 22 }}>
        <DetailCard
          n="7.5"
          title="Content engine"
          items={["2–4 SEO posts / month", "Neighborhood guides, amenity & building features, renter resources", "Researched with pro tooling — compounds & feeds GEO"]}
          size={15}
        />
        <DetailCard
          n="7.6"
          title="Site care"
          items={["Edits, updates, security & dependencies", "Uptime & backups", "Availability & pricing swaps — defined allowance, no per-task invoicing"]}
          size={15}
        />
        <DetailCard
          n="7.7"
          title="Chatbot tuning"
          items={["Monitor conversations", "Refine answers, keep aligned to live data", "Adapt as common renter questions emerge"]}
          size={15}
        />
        <DetailCard
          n="7.8"
          title="Marketing oversight"
          items={["Organic social direction", "Listing consistency", "Oversight of any paid campaigns so channels pull together"]}
          size={15}
        />
      </div>
    </R>
    <R>
      <div style={{ ...cardBase, background: ALT, padding: "18px 26px" }}>
        <p style={{ ...caption, fontSize: 16, color: SOFT }}>
          <strong style={{ color: ACCENT }}>The first 90 days are front-loaded.</strong> The
          opening quarter concentrates on the fastest wins — Local + Google Business Profile,
          the highest-intent neighborhood &amp; floor-plan pages, the schema that makes the
          building legible to AI, and the first wave of content.
        </p>
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 12 — PRICING · THE REBUILD
 * ══════════════════════════════════════════════════════════════════════════ */
const REBUILD: [string, string, string][] = [
  ["Design (UI/UX)", "Full-site design in a refined dark-editorial system; homepage and all key templates, high-fidelity", "$2,500"],
  ["Web development — base", "Next.js rebuild of all standard pages; responsive, performance-tuned, on-page SEO + schema throughout", "$2,500"],
  ["Tour booking integration", "24/7 scheduling flow with handoff to the leasing calendar; tracked as a conversion", "$700"],
  ["Floor-plan system", "60 residences / 16 layouts; interactive viewer, photos, 3D/360° tours, structured availability data", "$1,400"],
  ["Online application flow", "Streamlined Apply Now journey wired into the leasing pipeline", "$500"],
  ["AI leasing chatbot", "Custom assistant on live availability data; answers, books tours, qualifies leads", "$900"],
];
const S12 = () => (
  <Frame>
    <Kicker>Pricing · The Rebuild — one-time</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Every line itemized, so the investment is transparent.</h2>
    </R>
    <R style={{ marginTop: 26 }}>
      <div style={{ ...cardBase, overflow: "hidden" }}>
        {REBUILD.map(([name, desc, price], idx) => (
          <div
            key={name}
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 2.8fr auto",
              alignItems: "center",
              gap: 28,
              padding: "17px 30px",
              background: idx % 2 === 1 ? ALT : "transparent",
            }}
          >
            <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 19, color: INK }}>{name}</span>
            <span style={{ fontFamily: BODY, fontSize: 16, color: SOFT, lineHeight: 1.4 }}>{desc}</span>
            <Price>{price}</Price>
          </div>
        ))}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 2.8fr auto",
            alignItems: "center",
            gap: 28,
            padding: "20px 30px",
            borderTop: `1px solid ${ACCENT_LINE}`,
            background: ACCENT_FILL,
          }}
        >
          <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 27, color: INK }}>Total rebuild</span>
          <span />
          <Price big accent>$8,500</Price>
        </div>
      </div>
    </R>
    <R style={{ marginTop: 22 }}>
      <p style={{ ...caption, fontSize: 16, color: SOFT }}>
        Billed in milestones — <strong style={{ color: INK }}>50% to begin · 40% at staging · 10% at launch.</strong>{" "}
        Hosting sits on RFC’s own account, so no infrastructure cost is carried into the build.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 13 — PRICING · THE GROWTH ENGINE
 * ══════════════════════════════════════════════════════════════════════════ */
const LineItem: React.FC<{ children: React.ReactNode; note?: string }> = ({ children, note }) => (
  <li
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 16,
      padding: "12px 0",
      borderTop: `1px solid ${HAIRLINE}`,
      fontFamily: BODY,
      fontSize: 18,
      color: INK,
    }}
  >
    <span>{children}</span>
    {note && <span style={{ ...TNUM, color: MUTED, fontSize: 15, whiteSpace: "nowrap" }}>{note}</span>}
  </li>
);
const PlanCard: React.FC<{
  tag: string;
  price: string;
  per: string;
  recommended?: boolean;
  children: React.ReactNode;
}> = ({ tag, price, per, recommended, children }) => (
  <div
    style={{
      ...cardBase,
      flex: 1,
      padding: 38,
      display: "flex",
      flexDirection: "column",
      background: recommended ? ACCENT_FILL : CARD,
      borderColor: recommended ? ACCENT_LINE : HAIRLINE,
      position: "relative",
    }}
  >
    {recommended && (
      <span
        style={{
          position: "absolute",
          top: 26,
          right: 30,
          fontFamily: BODY,
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: PAGE,
          background: ACCENT,
          padding: "5px 12px",
          borderRadius: 999,
        }}
      >
        Recommended
      </span>
    )}
    <div
      style={{
        fontFamily: BODY,
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: recommended ? ACCENT : MUTED,
      }}
    >
      {tag}
    </div>
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, margin: "14px 0 16px" }}>
      <span style={{ ...TNUM, fontFamily: DISPLAY, fontWeight: 700, fontSize: 60, color: INK }}>{price}</span>
      <span style={{ ...caption, fontSize: 18 }}>{per}</span>
    </div>
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>{children}</ul>
  </div>
);
const S13 = () => (
  <Frame>
    <Kicker>Pricing · The Growth Engine — monthly</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, fontSize: 50 }}>Two levels — Core, or the full partner.</h2>
    </R>
    <R style={{ marginTop: 36, flex: 1 }}>
      <div style={{ display: "flex", gap: 28, height: "100%" }}>
        <PlanCard tag="Core" price="$2,000" per="/ month">
          <LineItem>Technical &amp; on-page SEO</LineItem>
          <LineItem>Local SEO + Google Business Profile management</LineItem>
          <LineItem>GEO — visibility inside AI answers</LineItem>
          <LineItem>Monthly reporting + live dashboard</LineItem>
        </PlanCard>
        <PlanCard tag="Full Partner" price="$3,500" per="/ month" recommended>
          <LineItem note="$2,000">Everything in Core</LineItem>
          <LineItem note="$800">Content engine — 2–4 SEO posts / month</LineItem>
          <LineItem note="$400">Site care &amp; maintenance — edits, security, uptime, backups</LineItem>
          <LineItem note="$300">AI chatbot hosting &amp; tuning</LineItem>
          <LineItem note="included">On-call priority + lease-up marketing oversight</LineItem>
        </PlanCard>
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 14 — ENGAGEMENT OPTIONS
 * ══════════════════════════════════════════════════════════════════════════ */
const RouteCard: React.FC<{
  tag: string;
  name: string;
  blurb: string;
  rows: string[];
  total: string;
  recommended?: boolean;
}> = ({ tag, name, blurb, rows, total, recommended }) => (
  <div
    style={{
      ...cardBase,
      flex: 1,
      padding: 36,
      display: "flex",
      flexDirection: "column",
      background: recommended ? ACCENT_FILL : CARD,
      borderColor: recommended ? ACCENT_LINE : HAIRLINE,
      position: "relative",
    }}
  >
    {recommended && (
      <span
        style={{
          position: "absolute",
          top: 24,
          right: 28,
          fontFamily: BODY,
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: PAGE,
          background: ACCENT,
          padding: "5px 12px",
          borderRadius: 999,
        }}
      >
        Recommended
      </span>
    )}
    <div
      style={{
        fontFamily: BODY,
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: recommended ? ACCENT : MUTED,
      }}
    >
      {tag}
    </div>
    <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 40, color: INK, margin: "8px 0 12px" }}>{name}</div>
    <p style={{ ...caption, fontSize: 16, marginBottom: 16, color: SOFT, lineHeight: 1.45 }}>{blurb}</p>
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {rows.map((r) => (
        <li
          key={r}
          style={{ ...TNUM, padding: "9px 0", borderTop: `1px solid ${HAIRLINE}`, fontFamily: BODY, fontSize: 17, color: INK }}
        >
          {r}
        </li>
      ))}
    </ul>
    <div style={{ flex: 1 }} />
    <div style={{ ...TNUM, marginTop: 20, fontFamily: DISPLAY, fontWeight: 700, fontSize: 23, lineHeight: 1.25, color: recommended ? ACCENT : INK }}>
      {total}
    </div>
  </div>
);
const S14 = () => (
  <Frame>
    <Kicker>Engagement Options</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Same quality of work — different commitment.</h2>
    </R>
    <R style={{ marginTop: 28, flex: 1 }}>
      <div style={{ display: "flex", gap: 28, height: "100%" }}>
        <RouteCard
          tag="Route A"
          name="Build + Core"
          blurb="À la carte. The rebuild as a fixed-fee project, plus the Core monthly. Month-to-month (3-month minimum)."
          rows={[
            "$8,500 rebuild · billed 50 / 40 / 10",
            "$2,000 / month — Core SEO, Local & GEO",
            "Add-ons at set rates: content $800 · care $400 · chatbot $300 / mo",
            "Hosting on RFC’s own Cloudflare account",
          ]}
          total="$8,500 + (12 × $2,000) = $32,500 yr 1 + add-ons"
        />
        <RouteCard
          tag="Route B"
          name="Partner"
          blurb="Everything handled, one number. Rebuild plus Full monthly on a 12-month term — content, care, chatbot & oversight included, priority on-call. Built for the lease-up."
          rows={[
            "$8,500 rebuild · billed 50 / 40 / 10",
            "$3,500 / month — all-in (nothing billed as-used)",
            "12-month term · priority on-call",
            "Hosting on RFC’s own Cloudflare account",
          ]}
          total="$8,500 + (12 × $3,500) = $50,500 yr 1 · all-in"
          recommended
        />
      </div>
    </R>
    <R style={{ marginTop: 20 }}>
      <p style={{ ...caption, fontSize: 16, color: SOFT, maxWidth: 1660, lineHeight: 1.5 }}>
        The honest comparison: Route A looks lighter, but it’s bare-bones — add the content,
        maintenance, chatbot upkeep and lease-up marketing a 60-unit fill actually needs and the
        à-la-carte total climbs past the Full rate. Route B bundles all of it at a better
        effective rate and puts one person accountable for the whole growth picture.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 15 — WHAT'S INCLUDED & WHAT'S NOT
 * ══════════════════════════════════════════════════════════════════════════ */
const S15 = () => (
  <Frame>
    <Kicker>Boundaries · What’s Included &amp; What’s Not</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={{ ...h, maxWidth: 1480 }}>No surprise costs. Nothing out of your pocket on my end.</h2>
    </R>
    <R style={{ marginTop: 30, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%" }}>
        <DetailCard
          title="Included"
          items={[
            "Everything in the Rebuild & Growth scope for your route",
            "On-page SEO, schema, analytics & conversion tracking in the build",
            "SEO / content tooling (Semrush, Surfer) — inside the retainer",
            "Monthly reporting and a live dashboard",
          ]}
          size={17}
        />
        <DetailCard
          title="Handled separately"
          items={[
            "Media production — photo / video / 3D capture (existing assets integrated; new work quoted)",
            "Hosting & infrastructure — RFC’s own Cloudflare account, billed direct",
            "Paid ad spend — RFC’s own ad accounts, separate from fees",
            "Active paid-ads management — scoped add-on, not unlimited",
            "Third-party licenses & placements — passed through at cost, pre-approved",
          ]}
          size={17}
        />
      </div>
    </R>
    <R>
      <p style={{ ...caption, fontSize: 16, color: SOFT, marginTop: 22 }}>
        <strong style={{ color: ACCENT }}>Net effect:</strong> tooling sits inside the retainer;
        hosting and ad spend sit on RFC’s own accounts. No hidden pass-through costs — every
        named item is approved before it’s incurred.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 16 — SUCCESS METRICS & KPIS
 * ══════════════════════════════════════════════════════════════════════════ */
const TIERS = [
  {
    tag: "Own it",
    sub: "Committed",
    items: ["Launch on the agreed date", "90+ mobile PageSpeed & strong Core Web Vitals", "Healthy technical SEO: indexation, schema, no crawl blockers", "Agreed content cadence each month"],
  },
  {
    tag: "Move it",
    sub: "Shared targets",
    items: ["Organic traffic growth from a near-zero baseline", "Local + GEO visibility for Koreatown rental searches", "Qualified tour bookings & application starts"],
    kpi: "Primary shared KPI → qualified tour bookings / month.",
  },
  {
    tag: "Report it",
    sub: "Business outcome",
    items: ["Leads → tours → applications → signed leases", "Lease-up velocity (pace of units filled)", "Cost per lease where paid media runs"],
  },
];
const S16 = () => (
  <Frame>
    <Kicker>Success Metrics &amp; KPIs</Kicker>
    <R style={{ marginTop: 22 }}>
      <h2 style={h}>Accountable for what we control; transparent about the rest.</h2>
    </R>
    <R style={{ marginTop: 14, maxWidth: 1540 }}>
      <p style={{ ...lead, fontSize: 19 }}>
        Tracking is instrumented in week one, so every number has a baseline. Signed leases are
        reported, not owned solely by me — your leasing team closes those.
      </p>
    </R>
    <R style={{ marginTop: 28, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%", maxHeight: 420 }}>
        {TIERS.map((t) => (
          <div
            key={t.tag}
            style={{
              ...cardBase,
              flex: 1,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              background: t.kpi ? ACCENT_FILL : CARD,
              borderColor: t.kpi ? ACCENT_LINE : HAIRLINE,
            }}
          >
            <div>
              <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 34, color: INK }}>{t.tag}</div>
              <div
                style={{
                  ...caption,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: t.kpi ? ACCENT : MUTED,
                  marginTop: 4,
                }}
              >
                {t.sub}
              </div>
            </div>
            <Bullets items={t.items} size={16} />
            <div style={{ flex: 1 }} />
            {t.kpi && (
              <p style={{ fontFamily: BODY, fontWeight: 600, fontSize: 16, color: ACCENT }}>{t.kpi}</p>
            )}
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 17 — PROJECT TIMELINE & PHASES
 * ══════════════════════════════════════════════════════════════════════════ */
const PHASES: [string, string, string][] = [
  ["P1", "Discovery & instrumentation", "Research, technical & content review, analytics + conversion tracking live → discovery summary"],
  ["P2", "Architecture", "Sitemap, the availability data model behind floor plans & chatbot, SEO/content structure → architecture doc"],
  ["P3", "Content & copy", "Copy for all pages to the agreed SEO strategy → written copy approval"],
  ["P4", "UX design", "Wireframes & prototypes for all pages → wireframe approval"],
  ["P5", "UI design", "High-fidelity templates, visual & accessibility review → prototype approval"],
  ["P6", "Development & integration", "Build, floor-plan system, booking & apps, AI assistant, schema, full QA → functional sign-off"],
  ["→", "Launch & growth", "Publish to the live domain; the monthly growth engine begins at launch"],
];
const S17 = () => (
  <Frame>
    <Kicker>Project Timeline &amp; Phases</Kicker>
    <R style={{ marginTop: 18 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Each phase closes on your written approval.</h2>
    </R>
    <R style={{ marginTop: 24, flex: 1 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {PHASES.map(([n, title, desc], i) => (
          <div
            key={title}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1.1fr 3fr",
              alignItems: "center",
              gap: 26,
              padding: "16px 26px",
              ...cardBase,
              background: i === PHASES.length - 1 ? ACCENT_FILL : CARD,
              borderColor: i === PHASES.length - 1 ? ACCENT_LINE : HAIRLINE,
            }}
          >
            <span
              style={{
                ...TNUM,
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: `1px solid ${ACCENT_LINE}`,
                color: ACCENT,
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {n}
            </span>
            <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 25, color: INK }}>{title}</span>
            <span style={{ fontFamily: BODY, fontSize: 16, color: SOFT, lineHeight: 1.4 }}>{desc}</span>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * 18 — NEXT STEPS
 * ══════════════════════════════════════════════════════════════════════════ */
const STEPS: [string, string][] = [
  ["Choose a route", "Route A (Build + Core) or Route B (Partner). For a lease-up, Route B is the recommendation."],
  ["Sign off + deposit", "The agreement and 50% deposit lock the build slot and the start date."],
  ["Week one — instrument & discover", "Analytics + conversion tracking go live, the baseline is set, discovery begins on units, availability data and brand direction."],
  ["Design → build → launch → grow", "The rebuild ships in milestones; the growth engine begins at launch."],
];
const S18 = () => (
  <Frame>
    <Kicker>Next Steps</Kicker>
    <R style={{ marginTop: 24 }}>
      <h2 style={h}>Start with the foundation. Layer the rest on top.</h2>
    </R>
    <R style={{ marginTop: 40, flex: 1 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {STEPS.map(([title, desc], i) => (
          <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: `1px solid ${ACCENT_LINE}`,
                background: ACCENT_FILL,
                color: ACCENT,
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <div style={{ paddingTop: 2 }}>
              <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 28, color: INK }}>{title}</span>
              <span style={{ ...lead, fontSize: 18, display: "block", marginTop: 4, maxWidth: 1320 }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </R>
    <R>
      <p style={{ fontFamily: BODY, fontWeight: 600, fontSize: 26, color: ACCENT, maxWidth: 1440 }}>
        Confirm a direction and I’ll have the agreement and a detailed project plan to you within
        the week.
      </p>
    </R>
    <R>
      <p style={{ ...caption, marginTop: 22 }}>
        Marc Friedman · marcfriedmanportfolio.com · marcf@marcfriedmanwebdesign.com
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * SUM — PRICING · SUMMARY OF FIGURES (every number in one place)
 * ══════════════════════════════════════════════════════════════════════════ */
const SUMROWS: [string, string, "head" | "sub" | "row" | "accent"][] = [
  ["Rebuild — total (one-time)", "$8,500", "head"],
  ["Design (UI/UX)", "$2,500", "sub"],
  ["Web development — base", "$2,500", "sub"],
  ["Tour booking integration", "$700", "sub"],
  ["Floor-plan system", "$1,400", "sub"],
  ["Online application flow", "$500", "sub"],
  ["AI leasing chatbot", "$900", "sub"],
  ["Growth — Core (monthly)", "$2,000 / mo", "row"],
  ["Growth — Full Partner (monthly)", "$3,500 / mo", "row"],
  ["Route A — year one", "$8,500 + (12 × $2,000) = $32,500 + add-ons", "row"],
  ["Route B — year one", "$8,500 + (12 × $3,500) = $50,500 all-in", "accent"],
  ["Build payment schedule", "50% begin · 40% staging · 10% launch", "row"],
  ["RFC out of pocket beyond fees", "Hosting + ad spend (own accounts)", "row"],
];
const SSUM = () => (
  <Frame>
    <Kicker>Pricing · Summary of Figures</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Every number, in one place.</h2>
    </R>
    <R style={{ marginTop: 22, flex: 1 }}>
      <div style={{ ...cardBase, overflow: "hidden" }}>
        {SUMROWS.map(([label, amount, kind], idx) => {
          const head = kind === "head";
          const sub = kind === "sub";
          const acc = kind === "accent";
          return (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 1.7fr",
                alignItems: "center",
                gap: 24,
                padding: sub ? "9px 30px 9px 58px" : "13px 30px",
                background: acc ? ACCENT_FILL : "transparent",
                borderTop: idx === 0 || sub ? "none" : `1px solid ${HAIRLINE}`,
              }}
            >
              <span
                style={{
                  fontFamily: head || acc ? DISPLAY : BODY,
                  fontWeight: sub ? 400 : 600,
                  fontSize: head ? 25 : sub ? 16 : 19,
                  color: sub ? SOFT : INK,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  ...TNUM,
                  textAlign: "right",
                  fontFamily: BODY,
                  fontWeight: sub ? 500 : 600,
                  fontSize: sub ? 16 : acc ? 20 : 19,
                  color: acc || head ? ACCENT : INK,
                }}
              >
                {amount}
              </span>
            </div>
          );
        })}
      </div>
    </R>
    <R>
      <p style={{ ...caption, fontSize: 15, marginTop: 14 }}>
        All amounts in USD. Figures valid for 30 days from June 18, 2026.
      </p>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * PAY — PAYMENT TERMS & SCHEDULE
 * ══════════════════════════════════════════════════════════════════════════ */
const MILESTONES: [string, string, string][] = [
  ["50%", "To begin", "Due on signature; work commences on receipt."],
  ["40%", "At staging", "Due when the rebuilt site is delivered to staging for review."],
  ["10%", "At launch", "Due on go-live."],
];
const SPAY = () => (
  <Frame>
    <Kicker>Payment Terms &amp; Schedule</Kicker>
    <R style={{ marginTop: 20 }}>
      <h2 style={{ ...h, fontSize: 48 }}>Clear terms — no ambiguity on billing.</h2>
    </R>
    <R style={{ marginTop: 28 }}>
      <div style={{ display: "flex", gap: 24 }}>
        {MILESTONES.map(([pct, when, desc]) => (
          <div key={pct} style={{ ...cardBase, flex: 1, padding: 30 }}>
            <div style={{ ...TNUM, fontFamily: DISPLAY, fontWeight: 700, fontSize: 54, color: ACCENT, lineHeight: 1 }}>
              {pct}
            </div>
            <div style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 24, color: INK, marginTop: 8 }}>{when}</div>
            <p style={{ ...caption, fontSize: 16, color: SOFT, marginTop: 8 }}>{desc}</p>
          </div>
        ))}
      </div>
    </R>
    <R style={{ marginTop: 26, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        <DetailCard
          title="Retainer"
          items={["Billed monthly in advance; begins at launch", "Route B: the 12-month term runs from the first retainer month"]}
          size={17}
        />
        <DetailCard
          title="Scope changes"
          items={["Anything outside agreed scope is quoted separately", "Approved in writing before it begins, then billed"]}
          size={17}
        />
        <DetailCard
          title="Invoicing & late payment"
          items={["Invoices due within 7 days", "Hosting / security / maintenance invoices due within 2 business days", "Standard late-payment terms set out in the agreement"]}
          size={17}
        />
        <DetailCard
          title="Currency & method"
          items={["All amounts in USD", "Payable by electronic bank transfer to the account in the agreement"]}
          size={17}
        />
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * Q1 — THE PLAN · ILLUSTRATIVE FIRST QUARTER
 * ══════════════════════════════════════════════════════════════════════════ */
const Q1: [string, string, string[]][] = [
  [
    "Month 1",
    "Launch & foundation",
    ["Instrument tracking & set the baseline", "Launch the rebuilt site", "Stand up & verify the Google Business Profile", "Ship core neighborhood & floor-plan pages with full schema", "Tune the AI assistant on live data"],
  ],
  [
    "Month 2",
    "Content & local",
    ["First 2–4 content pieces (neighborhood & amenity guides)", "Local citations & review signals", "On-page optimization for high-intent bed / price / amenity searches", "First monthly report against the baseline"],
  ],
  [
    "Month 3",
    "Expand & refine",
    ["Expand content & internal linking", "Deepen GEO / AI-answer coverage", "Refine the assistant from real renter questions", "Review the funnel — traffic → tours → applications — and adjust"],
  ],
];
const SQ1 = () => (
  <Frame>
    <Kicker>The Plan · Illustrative First Quarter</Kicker>
    <R style={{ marginTop: 18 }}>
      <h2 style={{ ...h, fontSize: 48 }}>The first 90 days, where effort fills units fastest.</h2>
    </R>
    <R style={{ marginTop: 12, maxWidth: 1500 }}>
      <p style={{ ...lead, fontSize: 18 }}>
        Lease-up marketing is front-loaded. Indicative — finalized in discovery.
      </p>
    </R>
    <R style={{ marginTop: 26, flex: 1 }}>
      <div style={{ display: "flex", gap: 24, height: "100%", maxHeight: 520 }}>
        {Q1.map(([m, sub, items]) => (
          <div key={m} style={{ ...cardBase, flex: 1, padding: 30, display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 32, color: INK }}>{m}</div>
              <div style={{ ...caption, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, marginTop: 4 }}>
                {sub}
              </div>
            </div>
            <Bullets items={items} size={16} />
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * BLD — THE BUILDING (real photography gallery)
 * ══════════════════════════════════════════════════════════════════════════ */
const GALLERY: [string, string][] = [
  ["7022", "Chef’s kitchens · stainless + quartz"],
  ["7016", "Light-filled living, private balconies"],
  ["7037", "Outdoor space with city views"],
  ["6983", "In-unit laundry"],
  ["7028", "Wide-plank floors, open layouts"],
  ["7004", "Floor-to-ceiling glass"],
];
const SBLD = () => (
  <Frame>
    <Kicker>The Building · 856 S Gramercy Dr</Kicker>
    <R style={{ marginTop: 16 }}>
      <h2 style={{ ...h, fontSize: 48, maxWidth: 1500 }}>
        A genuinely premium product. The site should feel the same.
      </h2>
    </R>
    <R style={{ marginTop: 24, flex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr 1fr", gap: 18, height: "100%" }}>
        {GALLERY.map(([n, label]) => (
          <div key={n} style={{ position: "relative", borderRadius: 14, overflow: "hidden", border: `1px solid ${HAIRLINE}` }}>
            <img src={PHOTO(n)} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "28px 18px 13px",
                background: "linear-gradient(180deg, transparent, rgba(10,10,11,0.85))",
              }}
            >
              <span style={{ fontFamily: BODY, fontWeight: 600, fontSize: 16, color: INK }}>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * SOTA — A STATE-OF-THE-ART REBUILD
 * Virtual 3D walkthrough viewer — concept mockup styled after
 * github.com/mindfiredigital/Virtual-Home-Tour-3D-Web (React · Three.js · WebGL)
 * ══════════════════════════════════════════════════════════════════════════ */
type Hsp = { t: string; l: string; label: string; to?: number };
const SCENES: { photo: string; name: string; hotspots: Hsp[] }[] = [
  { photo: "7016", name: "Living Room", hotspots: [{ t: "44%", l: "74%", label: "→ Kitchen", to: 1 }, { t: "37%", l: "27%", label: "9-ft ceilings" }] },
  { photo: "7022", name: "Kitchen", hotspots: [{ t: "52%", l: "22%", label: "→ Living Room", to: 0 }, { t: "42%", l: "72%", label: "Stainless + quartz" }] },
  { photo: "7037", name: "Balcony", hotspots: [{ t: "54%", l: "30%", label: "→ Living Room", to: 0 }, { t: "33%", l: "62%", label: "City views" }] },
  { photo: "7004", name: "Bedroom", hotspots: [{ t: "50%", l: "72%", label: "→ Living Room", to: 0 }, { t: "40%", l: "28%", label: "Walk-in closet" }] },
  { photo: "6983", name: "Laundry", hotspots: [{ t: "48%", l: "62%", label: "→ Bedroom", to: 3 }, { t: "40%", l: "30%", label: "In-unit W/D" }] },
];

const Hotspot: React.FC<{ top: string; left: string; label: string; onClick?: () => void }> = ({ top, left, label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      top,
      left,
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      zIndex: 6,
      background: "transparent",
      border: "none",
      padding: 0,
      cursor: onClick ? "pointer" : "default",
    }}
  >
    <span style={{ position: "relative", width: 16, height: 16 }}>
      <motion.span
        animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0, borderRadius: "50%", background: ACCENT }}
      />
      <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: ACCENT, border: "2px solid rgba(255,255,255,0.85)" }} />
    </span>
    <span style={{ fontFamily: BODY, fontSize: 12, color: INK, background: "rgba(10,10,11,0.72)", padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>
      {label}
    </span>
  </button>
);

const TourControl: React.FC<{ icon: React.ReactNode; onClick?: () => void; title?: string }> = ({ icon, onClick, title }) => (
  <button
    onClick={onClick}
    title={title}
    style={{
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "rgba(10,10,11,0.55)",
      border: "1px solid rgba(255,255,255,0.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: INK,
      cursor: "pointer",
      padding: 0,
    }}
  >
    {icon}
  </button>
);

/* Real interactive walkthrough: drag to look, click rooms/hotspots, W A S D to move */
const InteractiveTour: React.FC = () => {
  const [scene, setScene] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const cur = SCENES[scene];

  const go = (to: number) => {
    setScene(((to % SCENES.length) + SCENES.length) % SCENES.length);
    setOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "w" || k === "d") go(scene + 1);
      else if (k === "s" || k === "a") go(scene - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scene]);

  const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
  const onMove = (e: React.PointerEvent) => {
    if (drag) {
      setOffset((o) => ({ x: clamp(o.x + e.movementX, 130), y: clamp(o.y + e.movementY, 75) }));
    } else {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      setOffset({ x: clamp(-dx * 28, 130), y: clamp(-dy * 16, 75) });
    }
  };

  return (
    <div
      ref={ref}
      onPointerDown={() => setDrag(true)}
      onPointerMove={onMove}
      onPointerUp={() => setDrag(false)}
      onPointerLeave={() => { setDrag(false); setOffset({ x: 0, y: 0 }); }}
      style={{ ...cardBase, padding: 0, overflow: "hidden", height: "100%", position: "relative", cursor: "grab", userSelect: "none", touchAction: "none" }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={cur.photo}
          src={PHOTO(cur.photo)}
          alt={cur.name}
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(1.2) translate(${offset.x}px, ${offset.y}px)`,
            transition: drag ? "none" : "transform 0.3s ease-out",
          }}
        />
      </AnimatePresence>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(10,10,11,0.45) 0%, transparent 22%, transparent 56%, rgba(10,10,11,0.92) 100%)" }} />

      {/* scene label */}
      <div style={{ position: "absolute", top: 20, left: 22, display: "flex", alignItems: "center", gap: 12, zIndex: 5, pointerEvents: "none" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: BODY, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: INK, background: "rgba(10,10,11,0.55)", border: "1px solid rgba(255,255,255,0.18)", padding: "7px 14px", borderRadius: 999 }}>
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT }} />
          Live 3D tour · WebGL
        </span>
        <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 22, color: INK }}>{cur.name}</span>
      </div>

      {/* controls */}
      <div style={{ position: "absolute", top: 18, right: 20, display: "flex", gap: 10, zIndex: 6 }}>
        <TourControl title="Recenter" onClick={() => setOffset({ x: 0, y: 0 })} icon={<RotateCw size={17} strokeWidth={1.9} />} />
        <TourControl title="Info" icon={<Info size={17} strokeWidth={1.9} />} />
        <TourControl title="Fullscreen" onClick={() => ref.current?.requestFullscreen?.()} icon={<Maximize size={17} strokeWidth={1.9} />} />
      </div>

      {/* navigable hotspots */}
      {cur.hotspots.map((hsp) => (
        <Hotspot key={hsp.label} top={hsp.t} left={hsp.l} label={hsp.label} onClick={hsp.to !== undefined ? () => go(hsp.to as number) : undefined} />
      ))}

      {/* forward navigation */}
      <button
        onClick={() => go(scene + 1)}
        style={{ position: "absolute", bottom: 156, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 6, background: "transparent", border: "none", cursor: "pointer" }}
      >
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(163,209,255,0.2)", border: `1px solid ${ACCENT_LINE}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT }}
        >
          <ChevronUp size={28} strokeWidth={2} />
        </motion.span>
        <span style={{ fontFamily: BODY, fontSize: 11, color: INK, background: "rgba(10,10,11,0.6)", padding: "3px 9px", borderRadius: 999 }}>move forward</span>
      </button>

      {/* control hint + room strip */}
      <div style={{ position: "absolute", left: 22, right: 22, bottom: 18, display: "flex", flexDirection: "column", gap: 12, zIndex: 6 }}>
        <span style={{ alignSelf: "flex-start", fontFamily: BODY, fontSize: 12, color: SOFT, background: "rgba(10,10,11,0.55)", border: "1px solid rgba(255,255,255,0.14)", padding: "6px 12px", borderRadius: 999, pointerEvents: "none" }}>
          W A S D to move · drag to look around · click a room
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          {SCENES.map((s, idx) => (
            <button
              key={s.photo}
              onClick={() => go(idx)}
              style={{
                flex: 1,
                position: "relative",
                height: 62,
                borderRadius: 10,
                overflow: "hidden",
                border: `1px solid ${idx === scene ? ACCENT : "rgba(255,255,255,0.18)"}`,
                boxShadow: idx === scene ? `0 0 0 2px ${ACCENT_LINE}` : "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img src={PHOTO(s.photo)} alt={s.name} draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span style={{ position: "absolute", inset: 0, background: idx === scene ? "rgba(10,10,11,0.1)" : "rgba(10,10,11,0.5)" }} />
              <span style={{ position: "absolute", left: 8, bottom: 6, fontFamily: BODY, fontWeight: 600, fontSize: 12, color: INK }}>{s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SSOTA = () => (
  <Frame>
    <Kicker>Scope · A State-of-the-Art Rebuild</Kicker>
    <R style={{ marginTop: 16 }}>
      <h2 style={{ ...h, fontSize: 46, maxWidth: 1580 }}>
        Walk every home in 3D — an immersive tour no listing portal can match.
      </h2>
    </R>
    <div style={{ display: "flex", gap: 40, marginTop: 24, flex: 1 }}>
      <R style={{ width: "34%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, height: "100%", justifyContent: "center" }}>
          <p style={{ ...lead, fontSize: 19 }}>
            Renters tour the building the way they actually decide — moving room to room, looking
            anywhere, on any device.{" "}
            <span style={{ color: ACCENT }}>Try it — drag to look, click a room, press W.</span>
          </p>
          <Bullets
            size={18}
            gap={15}
            items={[
              "A real 3D walkthrough — move with W A S D, drag to look around",
              "Jump between rooms; hotspots reveal finishes, specs & views",
              "Built on WebGL / Three.js — the engine behind the best tours",
              "Wired to live availability and the AI assistant — one source of truth",
            ]}
          />
        </div>
      </R>
      <R style={{ width: "66%" }}>
        <InteractiveTour />
      </R>
    </div>
  </Frame>
);

/* ═══════════════════════════════════════════════════════════════════════════
 * EX — THE STANDARD TO HIT (benchmark references + proof of work)
 * ══════════════════════════════════════════════════════════════════════════ */
const BENCH: [string, string, string][] = [
  [
    "Interactive stacking & floor plans",
    "Click a floor, filter homes by beds, price & availability — the explorer renters expect from a premium address.",
    "Benchmark: One Manhattan Square · The Spiral",
  ],
  [
    "Immersive 3D / 360° tours",
    "Walk every layout from the phone, day or night — with view-from-floor simulation per unit.",
    "Benchmark: Central Park Tower · Matterport",
  ],
  [
    "Cinematic, scroll-driven design",
    "Motion and storytelling worthy of the building — restrained, weighty, premium.",
    "Benchmark: Active Theory · Resn calibre",
  ],
];
const PROOF: [string, string][] = [
  ["https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710", "Binns Media — streaming platform"],
  ["https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010", "Paving Leads — SEO lead-gen"],
  ["https://ik.imagekit.io/qcvroy8xpd/1732717492455.jpeg", "AutoMarginX — SaaS analytics"],
  ["https://ik.imagekit.io/qcvroy8xpd/image%201%20(10).png", "Sentinel DS — design system"],
];
const SEX = () => (
  <Frame>
    <Kicker>The Standard to Hit</Kicker>
    <R style={{ marginTop: 16 }}>
      <h2 style={{ ...h, fontSize: 48, maxWidth: 1540 }}>
        Built to the standard of the best — and proof I deliver it.
      </h2>
    </R>
    <R style={{ marginTop: 24 }}>
      <div style={{ display: "flex", gap: 22 }}>
        {BENCH.map(([t, d, b]) => (
          <div key={t} style={{ ...cardBase, flex: 1, padding: 28, display: "flex", flexDirection: "column", gap: 12, minHeight: 230 }}>
            <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 23, color: INK, lineHeight: 1.1 }}>{t}</span>
            <span style={{ ...lead, fontSize: 16 }}>{d}</span>
            <div style={{ flex: 1 }} />
            <span style={{ ...caption, fontSize: 13, color: ACCENT }}>{b}</span>
          </div>
        ))}
      </div>
    </R>
    <R style={{ marginTop: 26 }}>
      <p style={{ ...caption, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
        Proof — selected work I’ve designed &amp; built
      </p>
      <div style={{ display: "flex", gap: 18 }}>
        {PROOF.map(([src, label]) => (
          <div key={src} style={{ flex: 1 }}>
            <div style={{ ...cardBase, overflow: "hidden", height: 144 }}>
              <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ ...caption, fontSize: 12, marginTop: 8 }}>{label}</div>
          </div>
        ))}
      </div>
    </R>
  </Frame>
);

const SLIDES = [
  S1, S2, S3, SBLD, S4, S5, S6, S7, SSOTA, SEX, S8, S9, S10, S11,
  S12, S13, S14, SSUM, SPAY, S15, S16, S17, SQ1, S18,
];

/* ═══════════════════════════════════════════════════════════════════════════
 * DECK SHELL
 * ══════════════════════════════════════════════════════════════════════════ */
export default function GramercyDeck() {
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
  const interactive = SLIDES[i] === SSOTA;

  return (
    <div style={{ position: "fixed", inset: 0, background: PAGE, overflow: "hidden" }}>
      {/* click-to-advance zones — disabled on interactive slides so the content gets the mouse */}
      <div
        onClick={prev}
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "26%", zIndex: 30, cursor: i > 0 ? "w-resize" : "default", pointerEvents: interactive ? "none" : "auto" }}
      />
      <div
        onClick={next}
        style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", zIndex: 30, cursor: i < SLIDES.length - 1 ? "e-resize" : "default", pointerEvents: interactive ? "none" : "auto" }}
      />

      {/* always-available arrow buttons (the reliable nav, esp. on interactive slides) */}
      {i > 0 && (
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{ position: "absolute", left: 22, top: "50%", transform: "translateY(-50%)", zIndex: 50, width: 46, height: 46, borderRadius: "50%", background: "rgba(20,20,23,0.6)", border: `1px solid ${HAIRLINE}`, color: INK, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronLeft size={22} />
        </button>
      )}
      {i < SLIDES.length - 1 && (
        <button
          onClick={next}
          aria-label="Next slide"
          style={{ position: "absolute", right: 22, top: "50%", transform: "translateY(-50%)", zIndex: 50, width: 46, height: 46, borderRadius: "50%", background: "rgba(20,20,23,0.6)", border: `1px solid ${HAIRLINE}`, color: INK, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
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

      <div
        style={{
          position: "absolute",
          right: 34,
          bottom: 24,
          zIndex: 40,
          fontFamily: BODY,
          fontSize: 14,
          color: MUTED,
          letterSpacing: "0.08em",
          ...TNUM,
        }}
      >
        <span style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</span>
        <span> / {String(SLIDES.length).padStart(2, "0")}</span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 34,
          bottom: 24,
          zIndex: 40,
          fontFamily: BODY,
          fontSize: 13,
          color: "rgba(154,154,162,0.55)",
          letterSpacing: "0.04em",
        }}
      >
        ← → to navigate · F for fullscreen
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const TIERS = [
  {
    name: "The Build",
    tag: "Phase 01",
    timeline: "One-time",
    price: "$5,000",
    priceNote: "Design · Dev · Copy · SEO",
    items: [
      "Custom React / Next.js build",
      "Conversion-focused design",
      "All copywriting",
      "On-page SEO + schema",
      "Technical SEO setup",
      "Indexing + GA4 + Search Console",
      "QA, testing, launch",
    ],
  },
  {
    name: "Growth Engine",
    tag: "Phase 02",
    timeline: "Ongoing · monthly",
    price: "$1,000",
    priceUnit: "/ month",
    priceNote: "SEO + AEO retainer",
    recommended: true,
    items: [
      "Monthly SEO + AEO program",
      "Content production · 2–4 pieces / mo",
      "Schema + entity work for AI engines",
      "Backlink outreach",
      "Monthly performance report",
      "Quarterly CRO sprints",
      "Cancel anytime · 6-mo recommended",
    ],
  },
];

export default function Slide15Tiers() {
  return (
    <SlideShell>
      <Glow
        className="top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
        color="rgba(163,209,255,0.14)"
      />

      <Eyebrow number="ACT IV · 15">Investment · Engagement</Eyebrow>
      <SlideTitle>
        One build. <span className="text-[#A3D1FF]">One growth engine.</span>
      </SlideTitle>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {TIERS.map((t, i) => (
          <motion.div
            key={t.tag}
            variants={FADE_UP}
            className={`relative flex flex-col p-7 border transition-colors ${
              t.recommended
                ? "border-[#A3D1FF] bg-[#A3D1FF]/[0.04]"
                : "border-white/10 hover:border-white/25 bg-white/[0.015]"
            }`}
            style={
              t.recommended
                ? {
                    boxShadow:
                      "0 30px 80px -20px rgba(163,209,255,0.25), 0 0 0 1px rgba(163,209,255,0.15)",
                    transform: "translateY(-12px)",
                  }
                : undefined
            }
          >
            {t.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#A3D1FF] text-black text-[9px] tracking-[0.3em] uppercase font-medium"
                style={{ fontFamily: "var(--font-body)" }}>
                Recommended
              </div>
            )}

            <div className="flex items-baseline justify-between mb-1">
              <span
                className="text-[10px] tracking-[0.3em] font-mono text-[#A3D1FF]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t.tag}
              </span>
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-white/45"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.timeline}
              </span>
            </div>

            <h3
              className="m-0 mt-3 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.9rem",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                lineHeight: 1.05,
              }}
            >
              {t.name}
            </h3>

            <div
              className={`mt-4 flex items-baseline gap-2 ${
                t.recommended ? "text-[#A3D1FF]" : "text-white"
              }`}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.2rem, 3.4vw, 3rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {t.price}
              </span>
              {t.priceUnit && (
                <span
                  className="text-white/50"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  {t.priceUnit}
                </span>
              )}
            </div>
            {t.priceNote && (
              <div
                className="mt-2 text-[10px] tracking-[0.25em] uppercase text-white/40"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.priceNote}
              </div>
            )}

            <div className="h-px w-full bg-white/10 my-5" />

            <ul className="space-y-2 list-none p-0 flex-1">
              {t.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-white/70"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    className={`mt-2 block w-1.5 h-1.5 rounded-full shrink-0 ${
                      t.recommended ? "bg-[#A3D1FF]" : "bg-white/40"
                    }`}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

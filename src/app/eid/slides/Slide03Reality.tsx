"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

/* ──────────────────────────────────────────────────────────────────
 * Authority Score gauge — 9 / 100, arc fills from 0 → 9%.
 * ────────────────────────────────────────────────────────────────── */
function AuthorityGauge() {
  const size = 220;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const score = 9;
  const offset = c - (score / 100) * c;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#EF4444"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: "drop-shadow(0 0 12px rgba(239,68,68,0.4))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className="text-white leading-none tabular-nums"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "3.5rem",
            fontWeight: 500,
            letterSpacing: "-0.04em",
          }}
        >
          9
          <span className="text-white/30 text-2xl align-top ml-1">/100</span>
        </div>
        <div
          className="mt-2 text-[10px] tracking-[0.3em] uppercase text-white/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Authority Score
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
 * Today vs target — bars with absolute values + ratio.
 * ────────────────────────────────────────────────────────────────── */
function VisitsChart() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div
        className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-6"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Monthly organic visits
      </div>

      {/* Today */}
      <div className="mb-7">
        <div className="flex items-baseline justify-between mb-2">
          <span
            className="text-white/80"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem" }}
          >
            Today
          </span>
          <span
            className="text-white tabular-nums"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.4rem",
              letterSpacing: "-0.01em",
            }}
          >
            23
          </span>
        </div>
        <div className="h-2 w-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4.6%" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-red-400/70"
            style={{ boxShadow: "0 0 10px rgba(239,68,68,0.4)" }}
          />
        </div>
      </div>

      {/* Realistic Year-1 target */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <span
            className="text-[#A3D1FF]/90"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem" }}
          >
            Realistic Year-1 target
          </span>
          <span
            className="text-[#A3D1FF] tabular-nums"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.4rem",
              letterSpacing: "-0.01em",
              textShadow: "0 0 12px rgba(163,209,255,0.5)",
            }}
          >
            500
          </span>
        </div>
        <div className="h-2 w-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-[#A3D1FF]"
          />
        </div>
      </div>

      <div
        className="mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-white/45 self-start"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span className="font-mono text-[#A3D1FF]">↑ 21×</span>
        <span>reachable expansion</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
 * Keyword footprint — 14 ranking keywords visualized as filled grid cells.
 * ────────────────────────────────────────────────────────────────── */
function KeywordGrid() {
  const total = 100;
  const filled = 14;

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div
        className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-5"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Ranking keywords · share of opportunity
      </div>

      <div className="grid grid-cols-20 gap-1 w-full" style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}>
        {Array.from({ length: total }).map((_, i) => {
          const active = i < filled;
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4 + i * 0.012,
                duration: 0.3,
              }}
              className={`block aspect-square ${
                active
                  ? "bg-[#A3D1FF]"
                  : "bg-white/[0.06]"
              }`}
              style={
                active
                  ? { boxShadow: "0 0 8px rgba(163,209,255,0.4)" }
                  : undefined
              }
            />
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span
          className="text-[#A3D1FF] tabular-nums"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.8rem",
            letterSpacing: "-0.02em",
          }}
        >
          14
          <span className="text-white/30 text-base align-top ml-1">/ ~100</span>
        </span>
        <span
          className="text-[10px] tracking-[0.25em] uppercase text-white/45"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Visible coverage
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
 * Site-staleness timeline — last meaningful signal 2020.
 * ────────────────────────────────────────────────────────────────── */
function StalenessTimeline() {
  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div
        className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-6"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Time since last meaningful update
      </div>

      <div className="relative pt-2">
        {/* Rail */}
        <div className="absolute top-[18px] left-0 right-0 h-px bg-white/10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-red-400/40 origin-left"
          />
        </div>

        <div className="flex justify-between relative">
          {years.map((y, i) => {
            const isStart = i === 0;
            const isNow = i === years.length - 1;
            return (
              <div key={y} className="flex flex-col items-center gap-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                  className={`block ${
                    isStart
                      ? "w-4 h-4 rounded-full bg-red-400"
                      : isNow
                        ? "w-4 h-4 rounded-full bg-[#A3D1FF]"
                        : "w-2 h-2 rounded-full bg-white/25 mt-1"
                  }`}
                  style={
                    isStart
                      ? { boxShadow: "0 0 12px rgba(239,68,68,0.5)" }
                      : isNow
                        ? { boxShadow: "0 0 12px rgba(163,209,255,0.5)" }
                        : undefined
                  }
                />
                <span
                  className={`text-[10px] tabular-nums tracking-[0.1em] ${
                    isStart
                      ? "text-red-300"
                      : isNow
                        ? "text-[#A3D1FF]"
                        : "text-white/35"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {y}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-baseline justify-between">
        <div>
          <span
            className="text-red-300 tabular-nums"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.2rem",
              letterSpacing: "-0.02em",
            }}
          >
            6 yrs
          </span>
          <div
            className="mt-1 text-[10px] tracking-[0.25em] uppercase text-white/45"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Footer copyright frozen at 2020
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-red-400/40 text-[10px] tracking-[0.25em] uppercase text-red-300"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          Stack · Wix
        </div>
      </div>
    </div>
  );
}

export default function Slide03Reality() {
  return (
    <SlideShell>
      <Glow
        className="top-[10%] right-[5%] w-[500px] h-[500px]"
        color="rgba(239,68,68,0.07)"
      />
      <Glow className="bottom-[10%] left-[10%] w-[400px] h-[400px]" />

      <Eyebrow number="ACT I · 03">Problem · Current Reality</Eyebrow>
      <SlideTitle>
        Technical depth — <span className="text-[#A3D1FF]">no visibility.</span>
      </SlideTitle>

      <motion.div
        variants={FADE_UP}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-6xl"
      >
        {/* Quadrant 1 — Authority Score */}
        <div className="bg-[#0a0a0a] p-8 flex items-center justify-center min-h-[280px]">
          <AuthorityGauge />
        </div>

        {/* Quadrant 2 — Visits comparison */}
        <div className="bg-[#0a0a0a] p-8 min-h-[280px]">
          <VisitsChart />
        </div>

        {/* Quadrant 3 — Keyword footprint */}
        <div className="bg-[#0a0a0a] p-8 min-h-[280px]">
          <KeywordGrid />
        </div>

        {/* Quadrant 4 — Staleness timeline */}
        <div className="bg-[#0a0a0a] p-8 min-h-[280px]">
          <StalenessTimeline />
        </div>
      </motion.div>
    </SlideShell>
  );
}

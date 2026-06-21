"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

export default function Slide06Competitive() {
  return (
    <SlideShell>
      <Glow className="top-[10%] left-[10%] w-[500px] h-[500px]" />
      <Glow
        className="bottom-[10%] right-[10%] w-[500px] h-[500px]"
        color="rgba(239,68,68,0.06)"
      />

      <Eyebrow number="ACT I · 06">Your competition</Eyebrow>
      <SlideTitle>
        Strauss looks stronger.{" "}
        <span className="text-[#A3D1FF]">The market is still open.</span>
      </SlideTitle>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl">
        {/* Strauss column */}
        <motion.div variants={FADE_UP} className="border border-white/10 p-8 bg-white/[0.015]">
          <div className="flex items-baseline justify-between mb-6">
            <div
              className="text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Strauss Diamond
            </div>
            <div
              className="text-white/40 font-mono text-[11px] tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              76 keywords
            </div>
          </div>

          {/* Stacked bar: branded vs non-branded */}
          <div className="mb-2 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-white/50"
            style={{ fontFamily: "var(--font-body)" }}>
            <span>What they rank for</span>
            <span>100%</span>
          </div>
          <div className="h-10 w-full flex border border-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/15 flex items-center px-3"
            >
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-white/70"
                style={{ fontFamily: "var(--font-body)" }}
              >
Own brand · 90%
              </span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "10%" }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#A3D1FF]"
              style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)" }}
            />
          </div>
          <div className="flex items-center gap-2 mt-3 text-[10px] tracking-[0.2em] uppercase text-white/40"
            style={{ fontFamily: "var(--font-body)" }}>
            <span className="block w-2 h-2 bg-[#A3D1FF]" /> Real buyer terms · 10%
          </div>

          <ul className="mt-8 space-y-3 list-none p-0">
            <li className="flex items-start gap-3">
              <span className="mt-2 block w-3 h-px bg-white/30 shrink-0" />
              <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                Take out people Googling their name, Strauss ranks for almost nothing useful.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block w-3 h-px bg-white/30 shrink-0" />
              <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                30+ dental pages, zero ranking in the top 10.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* EID column */}
        <motion.div
          variants={FADE_UP}
          className="border border-[#A3D1FF]/30 p-8 bg-[#A3D1FF]/[0.03] relative"
          style={{ boxShadow: "0 0 0 1px rgba(163,209,255,0.08), 0 20px 60px -20px rgba(163,209,255,0.15)" }}
        >
          <div className="absolute -top-2 left-6 px-2 py-0.5 bg-[#A3D1FF] text-black text-[9px] tracking-[0.25em] uppercase font-medium"
            style={{ fontFamily: "var(--font-body)" }}>
            Where EID stands
          </div>
          <div className="flex items-baseline justify-between mb-6 mt-2">
            <div
              className="text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              EID Ltd.
            </div>
            <div
              className="text-white/40 font-mono text-[11px] tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              14 keywords
            </div>
          </div>

          <div className="mb-2 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-white/50"
            style={{ fontFamily: "var(--font-body)" }}>
            <span>What they rank for</span>
            <span>100%</span>
          </div>
          <div className="h-10 w-full flex border border-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "15%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/15"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ delay: 1.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#A3D1FF] flex items-center px-3"
            >
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-black/70"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
Real buyer terms · 85%
              </span>
            </motion.div>
          </div>
          <div className="flex items-center gap-2 mt-3 text-[10px] tracking-[0.2em] uppercase text-white/40"
            style={{ fontFamily: "var(--font-body)" }}>
            <span className="block w-2 h-2 bg-white/15" /> Own brand · 15%
          </div>

          <ul className="mt-8 space-y-3 list-none p-0">
            <li className="flex items-start gap-3">
              <span className="mt-2 block w-3 h-px bg-[#A3D1FF] shrink-0" />
              <span className="text-white text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                Ranking on real buyer searches, not just people Googling the brand.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 block w-3 h-px bg-[#A3D1FF] shrink-0" />
              <span className="text-white text-sm" style={{ fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                Few pages, narrow content, but Google already trusts the domain.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </SlideShell>
  );
}

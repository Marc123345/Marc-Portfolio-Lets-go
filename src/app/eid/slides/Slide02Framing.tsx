"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideLede,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const STEPS = [
  { num: "01", title: "Where EID stands today", note: "Diagnosis" },
  { num: "02", title: "Where the growth opportunity is", note: "Opportunity" },
  { num: "03", title: "What I would build", note: "Solution" },
  { num: "04", title: "Investment & expected return", note: "Economics" },
];

export default function Slide02Framing() {
  return (
    <SlideShell>
      <Glow className="top-[20%] right-[10%] w-[500px] h-[500px]" />

      <Eyebrow number="02">Executive Framing</Eyebrow>
      <SlideTitle>What this presentation will show</SlideTitle>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-white/10 max-w-6xl">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.num}
            variants={FADE_UP}
            className="relative py-8 px-6 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 group hover:bg-white/[0.02] transition-colors"
          >
            <div
              className="absolute top-0 left-0 h-px bg-[#A3D1FF] origin-left"
              style={{ width: "100%", transform: `scaleX(${0})` }}
            />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className="absolute top-0 left-0 h-px bg-[#A3D1FF]"
            />
            <span
              className="text-[10px] tracking-[0.3em] text-[#A3D1FF] font-mono block mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ACT · {s.num}
            </span>
            <h3
              className="text-white m-0"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              {s.title}
            </h3>
            <span
              className="text-[10px] tracking-[0.25em] uppercase text-white/40 mt-3 block"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {s.note}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <SlideLede>
          This isn’t a design critique. It’s a commercial strategy —
          problem, opportunity, solution, investment, and return — built around
          what your website already proves the market is asking for.
        </SlideLede>
      </div>
    </SlideShell>
  );
}

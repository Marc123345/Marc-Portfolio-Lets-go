"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const STAGES = [
  {
    stage: "Discover",
    width: 100,
    proof: "50+ years · ISO 9001 · Customers on every continent",
  },
  {
    stage: "Compare",
    width: 80,
    proof: "Datasheets · QC process · Comparisons · Team bios",
  },
  {
    stage: "Decide",
    width: 56,
    proof: "Sample policy · Lead times · Response guarantee · Regional contacts",
  },
  {
    stage: "Reorder",
    width: 36,
    proof: "Customer portal · Datasheet library · Quarterly updates",
  },
];

export default function Slide11Funnel() {
  return (
    <SlideShell>
      <Glow className="top-[20%] right-[20%] w-[500px] h-[500px]" color="rgba(163,209,255,0.16)" />

      <Eyebrow number="ACT III · 11">How it should work</Eyebrow>
      <SlideTitle>
        Proof <span className="text-[#A3D1FF]">before</span> pitch.
      </SlideTitle>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">
        {/* Funnel */}
        <div className="lg:col-span-7 flex flex-col items-center gap-px">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, scaleX: 0.3, y: 20 }}
              animate={{ opacity: 1, scaleX: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.18,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-20 flex items-center justify-between px-8"
              style={{
                width: `${s.width}%`,
                background: `linear-gradient(90deg, rgba(163,209,255,${0.08 + i * 0.05}) 0%, rgba(163,209,255,${0.04 + i * 0.04}) 100%)`,
                border: "1px solid rgba(163,209,255,0.18)",
                clipPath:
                  "polygon(8% 0, 92% 0, 100% 100%, 0 100%)",
              }}
            >
              <span
                className="text-white"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                }}
              >
                {s.stage}
              </span>
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-white/50 hidden md:block"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Stage 0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Proof list */}
        <motion.div variants={FADE_UP} className="lg:col-span-5">
          <ul className="space-y-5 list-none p-0">
            {STAGES.map((s, i) => (
              <motion.li
                key={s.stage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.18, duration: 0.6 }}
                className="border-l-2 border-[#A3D1FF]/40 pl-5"
              >
                <div
                  className="text-[10px] tracking-[0.3em] uppercase text-[#A3D1FF]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.stage}
                </div>
                <div
                  className="mt-1 text-white/75"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                  }}
                >
                  {s.proof}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SlideShell>
  );
}

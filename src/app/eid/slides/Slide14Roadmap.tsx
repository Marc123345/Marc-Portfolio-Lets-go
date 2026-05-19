"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const WAVES = [
  {
    label: "Phase 01",
    range: "Weeks 1–8",
    title: "Build the site",
    items: [
      "Homepage redesign",
      "About + trust pages",
      "Product page rebuilds",
      "QC page improvements",
      "Quote + sample forms",
    ],
  },
  {
    label: "Phase 02",
    range: "Weeks 9–14",
    title: "Add growth content",
    items: [
      "Use-case pages",
      "Dental section pages",
      "Case studies",
      "Comparison articles",
      "Resource library",
    ],
  },
  {
    label: "Phase 03",
    range: "Month 4+",
    title: "Grow and retain",
    items: [
      "Ongoing search work",
      "Conversion testing",
      "Email capture by audience",
      "Better customer support",
      "Quarterly reviews",
    ],
  },
];

export default function Slide14Roadmap() {
  return (
    <SlideShell>
      <Glow className="top-[10%] right-[10%] w-[500px] h-[500px]" />

      <Eyebrow number="ACT III · 14">Project plan</Eyebrow>
      <SlideTitle>
        Three phases. <span className="text-[#A3D1FF]">Results that build.</span>
      </SlideTitle>

      <div className="mt-12 relative">
        {/* Timeline rail */}
        <div className="absolute top-[60px] left-0 right-0 h-px bg-white/10 hidden md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-[#A3D1FF] origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WAVES.map((w, i) => (
            <motion.div
              key={w.label}
              variants={FADE_UP}
              className="relative pt-16"
            >
              {/* Marker */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
                className="absolute top-[52px] left-0 w-4 h-4 rounded-full bg-[#A3D1FF]"
                style={{ boxShadow: "0 0 16px rgba(163,209,255,0.6)" }}
              />
              <span
                className="text-[10px] tracking-[0.3em] font-mono text-[#A3D1FF] absolute top-0 left-0"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {w.label} · {w.range}
              </span>

              <h3
                className="m-0 text-white"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                }}
              >
                {w.title}
              </h3>

              <ul className="mt-6 space-y-2 list-none p-0">
                {w.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-white/65"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      lineHeight: 1.55,
                    }}
                  >
                    <span className="mt-2 block w-3 h-px bg-white/30 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

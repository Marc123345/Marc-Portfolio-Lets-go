"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const ISSUES = [
  {
    tag: "Path",
    title: "No path from visit to inquiry",
    detail: "One generic contact form for every audience.",
  },
  {
    tag: "Trust",
    title: "Heritage buried on page 2",
    detail: "50+ years, ISO 9001, not shown where buyers look first.",
  },
  {
    tag: "Audience",
    title: "No industrial vs. dental split",
    detail: "Dental buyers can’t find themselves on the homepage.",
  },
  {
    tag: "Story",
    title: "Spec lists without a story",
    detail: "Specs only, no uses, no comparisons, no help deciding.",
  },
  {
    tag: "Signals",
    title: "Footer says © 2020",
    detail: "Looks abandoned to procurement. And to Google.",
  },
  {
    tag: "Tech",
    title: "Wix is the wrong tool",
    detail: "Caps speed, limits modern search features.",
  },
];

export default function Slide04Website() {
  return (
    <SlideShell>
      <Glow className="bottom-[5%] left-[10%] w-[500px] h-[500px]" />

      <Eyebrow number="ACT I · 04">Problems with the site</Eyebrow>
      <SlideTitle>
        Not built for{" "}
        <span className="text-[#A3D1FF]">how customers actually buy.</span>
      </SlideTitle>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-6xl">
        {ISSUES.map((it) => (
          <motion.div
            key={it.title}
            variants={FADE_UP}
            className="bg-[#0a0a0a] p-6 hover:bg-[#111418] transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF]" />
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#A3D1FF]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {it.tag}
              </span>
            </div>
            <h3
              className="m-0 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {it.title}
            </h3>
            <p
              className="mt-3 mb-0 text-white/55"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                lineHeight: 1.55,
              }}
            >
              {it.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

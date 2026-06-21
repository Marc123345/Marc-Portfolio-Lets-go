"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const BUILD = [
  {
    n: "01",
    title: "Industrial vs. dental from the start",
    text: "Each buyer sees what they need on the homepage.",
  },
  {
    n: "02",
    title: "Trust at the top",
    text: "50 years, ISO 9001, product range, factories, visible first.",
  },
  {
    n: "03",
    title: "Rebuilt product pages",
    text: "Spec tables, use-cases, FAQs, datasheets, everything they need to decide.",
  },
  {
    n: "04",
    title: "Dental section",
    text: "Built for bur and instrument makers.",
  },
  {
    n: "05",
    title: "Quote + sample forms",
    text: "Smart forms by buyer type, with response promises.",
  },
  {
    n: "06",
    title: "Custom-coded site",
    text: "Loads in under 2 seconds. Built for Google and AI search.",
  },
];

export default function Slide12WebsiteStrategy() {
  return (
    <SlideShell>
      <Glow className="top-[10%] left-[10%] w-[500px] h-[500px]" />

      <Eyebrow number="ACT III · 12">What I’d build</Eyebrow>
      <SlideTitle>The website.</SlideTitle>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-6xl">
        {BUILD.map((b) => (
          <motion.div
            key={b.n}
            variants={FADE_UP}
            className="bg-[#0a0a0a] p-6 hover:bg-[#111418] transition-colors flex flex-col gap-3"
          >
            <span
              className="text-[10px] tracking-[0.3em] font-mono text-[#A3D1FF]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {b.n}
            </span>
            <h3
              className="m-0 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.3rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
              }}
            >
              {b.title}
            </h3>
            <p
              className="m-0 text-white/55"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                lineHeight: 1.55,
              }}
            >
              {b.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

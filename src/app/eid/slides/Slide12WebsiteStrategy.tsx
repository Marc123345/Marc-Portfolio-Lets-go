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
    title: "Audience split on first scroll",
    text: "Industrial vs Dental — buyers route themselves into the right proof path.",
  },
  {
    n: "02",
    title: "Proof above the fold",
    text: "Heritage, ISO, taxonomy, manufacturing footprint — surfaced before the pitch.",
  },
  {
    n: "03",
    title: "Rebuilt product pages",
    text: "Spec tables, applications, technical FAQs, datasheets — decision-ready content.",
  },
  {
    n: "04",
    title: "Dedicated dental vertical",
    text: "A landing experience matched to bur and instrument manufacturers.",
  },
  {
    n: "05",
    title: "RFQ + sample flows",
    text: "Multiple intent paths, segmented forms, response SLAs.",
  },
  {
    n: "06",
    title: "Custom React / Next.js",
    text: "Under 2s load. Lighthouse 95+. Schema-rich. AEO-ready.",
  },
];

export default function Slide12WebsiteStrategy() {
  return (
    <SlideShell>
      <Glow className="top-[10%] left-[10%] w-[500px] h-[500px]" />

      <Eyebrow number="ACT III · 12">Solution · Website Strategy</Eyebrow>
      <SlideTitle>What I would build.</SlideTitle>

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

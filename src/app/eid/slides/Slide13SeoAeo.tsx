"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const LAYERS = [
  {
    n: "L1",
    name: "Awareness",
    detail: "Category · Glossary · Comparison · Educational content",
  },
  {
    n: "L2",
    name: "Consideration",
    detail: "Product comparisons · QC methodology · Application guides",
  },
  {
    n: "L3",
    name: "Decision",
    detail: "Supplier pages · RFQ-focused product pages · Trust pages",
  },
  {
    n: "L4",
    name: "Retention",
    detail: "Datasheets · MSDS · Technical hub · Reordering support",
  },
];

export default function Slide13SeoAeo() {
  return (
    <SlideShell>
      <Glow className="bottom-[10%] left-[5%] w-[600px] h-[600px]" />

      <Eyebrow number="ACT III · 13">Solution · SEO / AEO System</Eyebrow>
      <SlideTitle>
        Growth comes from <span className="text-[#A3D1FF]">architecture</span> —
        not blogging.
      </SlideTitle>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Layered stack visual */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {LAYERS.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative grid grid-cols-12 items-center border border-white/10 hover:border-[#A3D1FF]/40 transition-colors group"
              style={{
                background:
                  "linear-gradient(90deg, rgba(163,209,255,0.04) 0%, rgba(163,209,255,0) 100%)",
              }}
            >
              <div className="col-span-2 p-5 border-r border-white/10">
                <div
                  className="font-mono text-[#A3D1FF] text-sm tracking-[0.15em]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {l.n}
                </div>
              </div>
              <div className="col-span-4 p-5 border-r border-white/10">
                <div
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {l.name}
                </div>
              </div>
              <div className="col-span-6 p-5">
                <div
                  className="text-white/60"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    lineHeight: 1.5,
                  }}
                >
                  {l.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AEO/GEO sidebar */}
        <motion.div
          variants={FADE_UP}
          className="lg:col-span-5 border border-[#A3D1FF]/30 bg-[#A3D1FF]/[0.04] p-7"
        >
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-[#A3D1FF]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            + AEO / GEO Layer
          </div>
          <h3
            className="mt-3 text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              letterSpacing: "-0.01em",
              fontWeight: 500,
            }}
          >
            Win the AI answer engines.
          </h3>
          <p
            className="mt-3 text-white/65"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            FAQ schema · Structured Q&amp;A · Entity-rich author bios — so EID
            gets cited inside ChatGPT and Google AI Overview answers.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="border border-white/10 p-4 text-center">
              <div
                className="text-white/40 font-mono text-[10px] tracking-[0.25em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                CITATIONS TODAY
              </div>
              <div
                className="text-white mt-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.8rem",
                  letterSpacing: "-0.02em",
                }}
              >
                0
              </div>
              <div
                className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ChatGPT · AI Overview
              </div>
            </div>
            <div className="border border-[#A3D1FF]/40 p-4 text-center">
              <div
                className="text-[#A3D1FF]/70 font-mono text-[10px] tracking-[0.25em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                CITATIONS · TARGET
              </div>
              <div
                className="text-[#A3D1FF] mt-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.8rem",
                  letterSpacing: "-0.02em",
                  textShadow: "0 0 16px rgba(163,209,255,0.5)",
                }}
              >
                The cited supplier
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

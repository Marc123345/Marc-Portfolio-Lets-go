"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const PERSONAS = [
  {
    num: "01",
    name: "Tooling Engineer",
    role: "Technical evaluator",
    detail:
      "R&D / applications lead. Specs grade by application. Reads datasheets. Already finds EID via technical terms.",
    state: "Reachable today",
    accent: true,
  },
  {
    num: "02",
    name: "Procurement Manager",
    role: "Commercial validator",
    detail:
      "Shortlists 2–3 suppliers. Validates ISO 9001, lead times, reliability. Wants fast reasons to trust or eliminate.",
    state: "Half-served",
  },
  {
    num: "03",
    name: "Dental Bur Manufacturer",
    role: "Underserved growth",
    detail:
      "B2B maker of dental burs & instruments. Today cannot find EID. Largest blind spot in the strategy.",
    state: "Blind spot",
    danger: true,
  },
  {
    num: "04",
    name: "Distributor / Partner",
    role: "Channel buyer",
    detail:
      "Worldwide partner adding brands to catalogue. Evaluates brand before product. Needs polish and collateral.",
    state: "Under-equipped",
  },
];

export default function Slide10BuyerMap() {
  return (
    <SlideShell>
      <Glow className="top-[15%] left-[15%] w-[500px] h-[500px]" />
      <Glow
        className="bottom-[15%] right-[15%] w-[500px] h-[500px]"
        color="rgba(163,209,255,0.08)"
      />

      <Eyebrow number="ACT II · 10">Opportunity · Buyer Map</Eyebrow>
      <SlideTitle>
        Four buyers.{" "}
        <span className="text-[#A3D1FF]">Four proof paths.</span>
      </SlideTitle>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-6xl">
        {PERSONAS.map((p) => (
          <motion.div
            key={p.num}
            variants={FADE_UP}
            className={`relative p-7 transition-colors group ${
              p.accent
                ? "bg-[#A3D1FF]/[0.04] hover:bg-[#A3D1FF]/[0.07]"
                : p.danger
                  ? "bg-[#0a0a0a] hover:bg-[#14181d]"
                  : "bg-[#0a0a0a] hover:bg-[#111418]"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-xs tracking-[0.2em] ${
                    p.accent
                      ? "text-[#A3D1FF]"
                      : p.danger
                        ? "text-red-300/80"
                        : "text-white/50"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  PERSONA · {p.num}
                </span>
              </div>
              <span
                className={`text-[9px] tracking-[0.3em] uppercase px-2 py-1 ${
                  p.accent
                    ? "border border-[#A3D1FF]/40 text-[#A3D1FF]"
                    : p.danger
                      ? "border border-red-400/40 text-red-300/90"
                      : "border border-white/15 text-white/55"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {p.state}
              </span>
            </div>

            <h3
              className="m-0 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.75rem",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
              }}
            >
              {p.name}
            </h3>
            <div
              className="mt-1 text-[#A3D1FF]/80"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {p.role}
            </div>

            <p
              className="mt-4 mb-0 text-white/60"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: 1.55,
              }}
            >
              {p.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

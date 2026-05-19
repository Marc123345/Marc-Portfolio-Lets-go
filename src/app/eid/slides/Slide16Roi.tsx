"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const STEPS = [
  {
    op: "",
    metric: "Year-1 organic visits / month",
    value: "500",
    basis: "vs 23 today · proven via #2 rankings",
  },
  {
    op: "×",
    metric: "RFQ conversion rate",
    value: "2%",
    basis: "Industrial B2B benchmark",
  },
  {
    op: "=",
    metric: "Monthly RFQs",
    value: "10",
    basis: "From organic alone",
    accent: true,
  },
  {
    op: "×",
    metric: "Close rate",
    value: "15%",
    basis: "Industrial warm-inbound average",
  },
  {
    op: "=",
    metric: "New customers / year",
    value: "~18",
    basis: "From search alone",
    accent: true,
  },
  {
    op: "×",
    metric: "Avg. customer value",
    value: "$10,000",
    basis: "Conservative — industrial",
  },
];

export default function Slide16Roi() {
  return (
    <SlideShell>
      <Glow
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px]"
        color="rgba(163,209,255,0.18)"
      />

      <Eyebrow number="ACT V · 16">Return · Why this makes commercial sense</Eyebrow>
      <SlideTitle>
        Not vanity traffic.{" "}
        <span className="text-[#A3D1FF]">Pipeline math.</span>
      </SlideTitle>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Step-by-step ledger */}
        <div className="lg:col-span-7 border border-white/10">
          <div
            className="grid grid-cols-12 px-5 py-3 text-[10px] tracking-[0.25em] uppercase text-white/40 border-b border-white/10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="col-span-1">Op</span>
            <span className="col-span-6">Metric</span>
            <span className="col-span-2 text-right">Value</span>
            <span className="col-span-3 text-right">Basis</span>
          </div>

          {STEPS.map((s, i) => (
            <motion.div
              key={s.metric}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.6 }}
              className={`grid grid-cols-12 items-center px-5 py-4 border-b border-white/10 last:border-b-0 ${
                s.accent ? "bg-[#A3D1FF]/[0.04]" : ""
              }`}
            >
              <span
                className={`col-span-1 font-mono text-base ${
                  s.accent ? "text-[#A3D1FF]" : "text-white/50"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.op || "—"}
              </span>
              <span
                className="col-span-6 text-white/85"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                }}
              >
                {s.metric}
              </span>
              <span
                className={`col-span-2 text-right tabular-nums ${
                  s.accent ? "text-[#A3D1FF]" : "text-white"
                }`}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem",
                  letterSpacing: "-0.01em",
                  fontWeight: 500,
                }}
              >
                {s.value}
              </span>
              <span
                className="col-span-3 text-right text-white/45 text-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s.basis}
              </span>
            </motion.div>
          ))}

          {/* Total */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + STEPS.length * 0.18,
              duration: 0.7,
            }}
            className="grid grid-cols-12 items-center px-5 py-6 bg-[#A3D1FF] text-black"
          >
            <span
              className="col-span-1 font-mono text-base"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              =
            </span>
            <span
              className="col-span-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              Net new revenue · Year 1
            </span>
            <span
              className="col-span-2 text-right tabular-nums"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.7rem",
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              $180,000
            </span>
            <span
              className="col-span-3 text-right text-black/70 text-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From search alone
            </span>
          </motion.div>
        </div>

        {/* ROI panels */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="border border-[#A3D1FF]/30 bg-[#A3D1FF]/[0.04] p-7"
          >
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-[#A3D1FF]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ROI · Year 1 · Industrial baseline
            </div>
            <div
              className="mt-3 text-white leading-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                textShadow: "0 0 40px rgba(163,209,255,0.4)",
              }}
            >
              10.6×
            </div>
            <div
              className="mt-2 text-white/55 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              On $17,000 total · $5K build + $12K retainer
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="border border-white/10 p-7"
          >
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-white/45"
              style={{ fontFamily: "var(--font-body)" }}
            >
              If avg. customer · $25K (dental)
            </div>
            <div
              className="mt-3 text-white leading-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
            >
              26.5×
            </div>
            <div
              className="mt-2 text-white/45 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ROI · realistic for dental accounts
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="text-[10px] tracking-[0.25em] uppercase text-white/40 mt-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The build pays for itself with 1 customer.
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

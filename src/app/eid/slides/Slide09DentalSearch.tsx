"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

const DENTAL_TERMS = [
  "dental burs manufacturer",
  "implant uncovering instruments",
  "restorative dental tools",
  "dental diamond burs",
  "dental instrument supplier",
  "cvd dental burs",
  "dental cutting tools b2b",
  "orthodontic instruments",
];

export default function Slide09DentalSearch() {
  return (
    <SlideShell>
      <Glow className="top-[10%] right-[5%] w-[600px] h-[600px]" color="rgba(163,209,255,0.15)" />

      <Eyebrow number="ACT II · 09">Opportunity · Dental Search</Eyebrow>
      <SlideTitle>
        Under-owned territory.{" "}
        <span className="text-[#A3D1FF]">No credible supplier wins it.</span>
      </SlideTitle>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Terms cloud */}
        <motion.div variants={FADE_UP} className="lg:col-span-7">
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Uncontested dental queries
          </div>
          <div className="flex flex-wrap gap-3 max-w-2xl">
            {DENTAL_TERMS.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 text-white/75 hover:border-[#A3D1FF]/60 hover:text-[#A3D1FF] transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-[#A3D1FF]/60" />
                {t}
              </motion.span>
            ))}
          </div>

          <p
            className="mt-8 max-w-xl text-white/65"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.55,
            }}
          >
            EID makes the raw material that goes into these products — but is
            largely absent from this entire search universe.
          </p>
        </motion.div>

        {/* Status panel */}
        <motion.div variants={FADE_UP} className="lg:col-span-5 flex flex-col gap-4">
          <div className="border border-white/10 p-6">
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-white/45"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Strauss in dental
            </div>
            <div
              className="text-white mt-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Ranks poorly. 30+ pages — none in top 10.
            </div>
          </div>

          <div className="border border-white/10 p-6">
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-white/45"
              style={{ fontFamily: "var(--font-body)" }}
            >
              EID in dental
            </div>
            <div
              className="text-white mt-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Effectively absent.
            </div>
          </div>

          <div className="border border-[#A3D1FF]/40 bg-[#A3D1FF]/[0.04] p-6">
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-[#A3D1FF]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Verdict
            </div>
            <div
              className="text-white mt-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Uncontested territory — worth searching for, worth owning.
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

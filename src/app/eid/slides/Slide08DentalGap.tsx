"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

export default function Slide08DentalGap() {
  return (
    <SlideShell>
      <Glow className="bottom-[10%] right-[15%] w-[600px] h-[600px]" color="rgba(163,209,255,0.18)" />

      <Eyebrow number="ACT II · 08">The biggest gap</Eyebrow>
      <SlideTitle>
        Dental is the clearest{" "}
        <span className="text-[#A3D1FF]">growth opportunity.</span>
      </SlideTitle>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Industrial vs Dental coverage diagram */}
        <motion.div
          variants={FADE_UP}
          className="lg:col-span-7 border border-white/10 p-8"
        >
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
Who the site speaks to today
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Industrial tool makers
                </span>
                <span
                  className="font-mono text-xs text-white/50 tabular-nums"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  ~90% of site
                </span>
              </div>
              <div className="h-3 w-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="h-full bg-white/60"
                />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span
                  className="text-[#A3D1FF]"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Dental tool makers
                </span>
                <span
                  className="font-mono text-xs text-[#A3D1FF] tabular-nums"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  0 pages · 0 rank
                </span>
              </div>
              <div className="h-3 w-full bg-white/5 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "1%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-full bg-[#A3D1FF]"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(163,209,255,0.06) 0 6px, transparent 6px 12px)",
                  }}
                />
              </div>
              <p
                className="mt-3 text-white/55 text-sm"
                style={{ fontFamily: "var(--font-body)", lineHeight: 1.6 }}
              >
                Half your target market is invisible to you online.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Findings list */}
        <motion.div variants={FADE_UP} className="lg:col-span-5 flex flex-col justify-between">
          <ul className="space-y-5 list-none p-0">
            {[
              "EID sells to industrial AND dental tool makers.",
              "Site is built almost entirely around the industrial side.",
              "No dental homepage. No dental section. No dental story.",
              "Zero dental pages exist today.",
            ].map((t) => (
              <motion.li
                key={t}
                variants={FADE_UP}
                className="flex items-start gap-4"
              >
                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-[#A3D1FF] shrink-0" />
                <span
                  className="text-white/75"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.55,
                  }}
                >
                  {t}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            variants={FADE_UP}
            className="mt-8 p-6 border-l-2 border-[#A3D1FF] bg-[#A3D1FF]/5"
          >
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[#A3D1FF]"
              style={{ fontFamily: "var(--font-body)" }}
            >
The biggest gap in the business online
            </span>
            <p
              className="mt-2 mb-0 text-white"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.55,
              }}
            >
Half the market, invisible online.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

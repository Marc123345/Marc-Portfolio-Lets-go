"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

export default function Slide07Opportunity() {
  return (
    <SlideShell>
      <Glow className="top-[10%] left-[20%] w-[600px] h-[600px]" color="rgba(163,209,255,0.16)" />

      <Eyebrow number="ACT II · 07">Opportunity · Core Insight</Eyebrow>

      <SlideTitle>
        Google already trusts EID.{" "}
        <span className="text-[#A3D1FF]">There aren&rsquo;t enough pages.</span>
      </SlideTitle>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <ul className="space-y-6 list-none p-0">
            {[
              {
                num: "01",
                t: "Existing rankings are proof of concept",
                d: "A 2020-style Wix site ranks #2 for buyer-intent technical phrases. The model works.",
              },
              {
                num: "02",
                t: "Authority is real — coverage is thin",
                d: "Structured content can multiply current opportunities by 10–20×.",
              },
              {
                num: "03",
                t: "Market accepts EID as relevant",
                d: "Technical sourcing queries are already surfacing EID — without help.",
              },
            ].map((p, i) => (
              <motion.li
                key={p.num}
                variants={FADE_UP}
                className="flex items-start gap-6 group"
              >
                <span
                  className="text-[#A3D1FF]/70 font-mono text-xs tracking-[0.2em] pt-1.5 shrink-0 w-8"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {p.num}
                </span>
                <div>
                  <h3
                    className="m-0 text-white"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                    }}
                  >
                    {p.t}
                  </h3>
                  <p
                    className="mt-2 mb-0 text-white/55"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.d}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Multiplier visual */}
        <motion.div variants={FADE_UP} className="lg:col-span-5 flex flex-col items-center">
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Multiplier potential
          </div>
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {[1, 2, 3, 4].map((ring, i) => (
              <motion.div
                key={ring}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                className="absolute inset-0 rounded-full border border-[#A3D1FF]/20"
                style={{
                  inset: `${i * 10}%`,
                  borderColor: `rgba(163,209,255,${0.35 - i * 0.07})`,
                }}
              />
            ))}
            <div className="relative text-center">
              <div
                className="text-[#A3D1FF]"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(4rem, 9vw, 7rem)",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  textShadow: "0 0 40px rgba(163,209,255,0.4)",
                }}
              >
                10–20×
              </div>
              <div
                className="mt-2 text-[10px] tracking-[0.3em] uppercase text-white/55"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Discovery surface — Year 1
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, FADE_UP, Glow, SlideShell } from "./_primitives";

const POINTS = [
  "You already have the product depth.",
  "The market is still wide open.",
  "The website isn’t built to win it yet.",
];

export default function Slide17Closing() {
  return (
    <SlideShell>
      <Glow
        className="top-[5%] left-1/2 -translate-x-1/2 w-[900px] h-[700px]"
        color="rgba(163,209,255,0.22)"
      />
      <Glow
        className="bottom-[-10%] right-[-5%] w-[500px] h-[500px]"
        color="rgba(163,209,255,0.08)"
      />

      <Eyebrow number="ACT V · 17">The ask</Eyebrow>

      <motion.h2
        variants={FADE_UP}
        className="m-0 font-heading uppercase text-white"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 500,
          fontSize: "clamp(2.8rem, 7vw, 6rem)",
          lineHeight: 0.98,
          letterSpacing: "-0.025em",
          textWrap: "balance",
        }}
      >
Stay a brochure —
        <br />
        <span className="text-[#A3D1FF]">or build a site that wins business.</span>
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <ul className="space-y-4 list-none p-0">
            {POINTS.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <span
                  className="mt-2 block w-8 h-px bg-[#A3D1FF]"
                  style={{ boxShadow: "0 0 8px rgba(163,209,255,0.5)" }}
                />
                <span
                  className="text-white/80"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
                    lineHeight: 1.55,
                  }}
                >
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-10 pl-6 border-l-2 border-[#A3D1FF] max-w-2xl"
          >
            <p
              className="m-0 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
“You already have the trust. We turn it into{" "}
              <span className="text-[#A3D1FF]">
                more visits, more inquiries, more orders.
              </span>
              ”
            </p>
          </motion.figure>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="lg:col-span-5 lg:pl-10 lg:border-l border-white/10"
        >
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-white/45 mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Next step
          </div>
          <h3
            className="m-0 text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.6rem, 2.2vw, 2.1rem)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Greenlight the build.
            <br />
            Kick off in 2 weeks.
          </h3>
          <p
            className="mt-4 text-white/60"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            Week 1: interviews and discovery. Week 2: wireframes and content.
            Site live within 8 weeks.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="mailto:marcfriedmancm@gmail.com?subject=EID%20%E2%80%94%20Greenlight%20the%20Build"
              className="mr_btn mr_btn_primary hero-cta-btn justify-between w-full"
            >
              <span>Greenlight the build</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.marcfriedmanportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr_btn mr_btn_outline justify-between w-full"
            >
              <span>See related case work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

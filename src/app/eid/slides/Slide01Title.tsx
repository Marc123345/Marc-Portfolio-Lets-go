"use client";

import { motion } from "framer-motion";
import { Glow, SlideShell } from "./_primitives";

export default function Slide01Title() {
  return (
    <SlideShell pad={false}>
      <div className="relative w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <Glow className="top-[10%] left-[20%] w-[700px] h-[700px]" color="rgba(163,209,255,0.18)" />
        <Glow className="bottom-[-10%] right-[-5%] w-[600px] h-[600px]" color="rgba(163,209,255,0.06)" />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span
            className="text-[11px] tracking-[0.35em] uppercase text-[#A3D1FF]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Prepared for Uri, EID Ltd.
          </span>
          <span className="block w-12 h-px bg-white/30" />
          <span
            className="text-[11px] tracking-[0.35em] uppercase text-white/50 font-mono"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            20 · 05 · 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="m-0 font-heading uppercase text-white"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(3.5rem, 11vw, 11rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            textWrap: "balance",
          }}
        >
          EID
          <br />
          <span className="text-[#A3D1FF]">Growth</span>{" "}
          Opportunity
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left mt-10 h-px bg-gradient-to-r from-[#A3D1FF] via-white/20 to-transparent w-2/3"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 max-w-2xl text-white/65"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.05rem, 1.4vw, 1.4rem)",
            lineHeight: 1.55,
          }}
        >
          From a brochure site to a{" "}
          <span className="text-white">site that wins business</span>. The
          credibility already exists. The system to turn it into more visits,
          more inquiries, and more orders does not.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute right-8 md:right-16 lg:right-24 bottom-32 flex flex-col items-end gap-1"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-white/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Presented by
          </span>
          <span
            className="text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              letterSpacing: "-0.01em",
              fontWeight: 500,
            }}
          >
            Marc Friedman
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}

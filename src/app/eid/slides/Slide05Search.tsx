"use client";

import { motion } from "framer-motion";
import {
  Eyebrow,
  FADE_UP,
  Glow,
  SlideShell,
  SlideTitle,
} from "./_primitives";

type Row = {
  keyword: string;
  position: number;
  volume: number;
  reachable?: boolean;
};

const ROWS: Row[] = [
  { keyword: "monocrystalline diamond", position: 2, volume: 30 },
  { keyword: "mcd diamond", position: 3, volume: 50 },
  { keyword: "cvd dressers manufacturers", position: 4, volume: 90 },
  { keyword: "tti diamond powder toughness index", position: 2, volume: 40 },
  { keyword: "industrial diamonds for sale", position: 5, volume: 40 },
  { keyword: "industrial diamonds", position: 24, volume: 320, reachable: true },
  { keyword: "pcbn", position: 77, volume: 110, reachable: true },
];

const MAX_VOL = 320;

function PositionDot({ pos }: { pos: number }) {
  // Map position 1-100 to color: green near top, red far
  const isTop = pos <= 10;
  const isReachable = pos > 10;
  return (
    <div
      className={`relative h-7 w-7 flex items-center justify-center border ${
        isTop
          ? "border-[#A3D1FF] bg-[#A3D1FF]/15 text-[#A3D1FF]"
          : "border-white/20 bg-white/5 text-white/60"
      }`}
      style={
        isTop
          ? { boxShadow: "0 0 12px rgba(163,209,255,0.4)" }
          : undefined
      }
    >
      <span
        className="font-mono text-[10px] tabular-nums"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        #{pos}
      </span>
    </div>
  );
}

export default function Slide05Search() {
  return (
    <SlideShell>
      <Glow className="top-[20%] right-[5%] w-[500px] h-[500px]" />

      <Eyebrow number="ACT I · 05">Problem · Search Diagnosis</Eyebrow>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <SlideTitle size="lg">
            Visible for valuable terms.{" "}
            <span className="text-[#A3D1FF]">At tiny scale.</span>
          </SlideTitle>
          <p
            className="mt-6 text-white/65 max-w-md"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            Google already trusts EID on technical phrases. Where a real page
            exists, it ranks <span className="text-white">#2 or #3</span>. The
            problem isn&rsquo;t authority — it&rsquo;s that there aren&rsquo;t
            enough pages.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 border border-[#A3D1FF] bg-[#A3D1FF]/20" />
              <span
                className="text-[11px] tracking-[0.2em] uppercase text-white/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Top 10 — already ranking
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 border border-white/20 bg-white/5" />
              <span
                className="text-[11px] tracking-[0.2em] uppercase text-white/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Reachable — within striking distance
              </span>
            </div>
          </div>
        </div>

        <motion.div variants={FADE_UP} className="lg:col-span-7">
          <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-white/40 pb-3 border-b border-white/10"
            style={{ fontFamily: "var(--font-body)" }}>
            <span>Keyword · Rank</span>
            <span>Monthly volume →</span>
          </div>

          <div className="divide-y divide-white/10">
            {ROWS.map((r, i) => {
              const widthPct = (r.volume / MAX_VOL) * 100;
              return (
                <motion.div
                  key={r.keyword}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                  className="py-3 flex items-center gap-4"
                >
                  <PositionDot pos={r.position} />
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-white text-[0.95rem] truncate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {r.keyword}
                      {r.reachable && (
                        <span
                          className="ml-2 text-[9px] tracking-[0.2em] uppercase text-[#A3D1FF]/80"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          · reachable
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 h-[3px] w-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${widthPct}%` }}
                        transition={{
                          delay: 0.5 + i * 0.07,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={
                          r.position <= 10
                            ? "h-full bg-[#A3D1FF]"
                            : "h-full bg-white/40"
                        }
                      />
                    </div>
                  </div>
                  <div
                    className="font-mono text-[11px] text-white/60 tabular-nums w-12 text-right"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {r.volume}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

export const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const FADE_RIGHT: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SlideShell({
  children,
  pad = true,
}: {
  children: ReactNode;
  pad?: boolean;
}) {
  return (
    <div
      className={`w-full h-full ${pad ? "px-8 md:px-16 lg:px-24 pt-20 pb-20" : ""} flex flex-col`}
    >
      <motion.div
        variants={STAGGER}
        initial="hidden"
        animate="show"
        className="w-full h-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Eyebrow({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <motion.div
      variants={FADE_RIGHT}
      className="flex items-center gap-3 mb-6"
    >
      {number && (
        <span
          className="text-[11px] tracking-[0.3em] text-[#A3D1FF] font-mono"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {number}
        </span>
      )}
      <span className="block w-8 h-px bg-white/30" />
      <span
        className="text-[11px] tracking-[0.3em] uppercase text-white/55"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </span>
    </motion.div>
  );
}

export function SlideTitle({
  children,
  size = "lg",
}: {
  children: ReactNode;
  size?: "md" | "lg" | "xl";
}) {
  const sizes = {
    md: "clamp(2rem, 4vw, 3rem)",
    lg: "clamp(2.5rem, 5.5vw, 4.5rem)",
    xl: "clamp(3rem, 7vw, 6rem)",
  };
  return (
    <motion.h2
      variants={FADE_UP}
      className="m-0 font-heading uppercase text-white"
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 500,
        fontSize: sizes[size],
        lineHeight: 1.02,
        letterSpacing: "-0.02em",
        textWrap: "balance",
      }}
    >
      {children}
    </motion.h2>
  );
}

export function SlideLede({ children }: { children: ReactNode }) {
  return (
    <motion.p
      variants={FADE_UP}
      className="text-white/70 max-w-3xl"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
        lineHeight: 1.55,
        fontWeight: 400,
      }}
    >
      {children}
    </motion.p>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <motion.figure
      variants={FADE_UP}
      className="relative pl-6 border-l-2 border-[#A3D1FF]/60 max-w-3xl"
    >
      <p
        className="text-white/80 italic"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
          lineHeight: 1.65,
        }}
      >
        {children}
      </p>
    </motion.figure>
  );
}

export function Glow({
  className = "",
  color = "rgba(163,209,255,0.10)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{
        background: color,
        filter: "blur(160px)",
      }}
    />
  );
}

export function GridLines() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 30%, transparent 75%)",
      }}
    />
  );
}

export function Stat({
  value,
  label,
  accent = false,
}: {
  value: ReactNode;
  label: ReactNode;
  accent?: boolean;
}) {
  return (
    <motion.div variants={FADE_UP} className="flex flex-col gap-1">
      <div
        className={`font-heading leading-none ${accent ? "text-[#A3D1FF]" : "text-white"}`}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
          fontWeight: 500,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase text-white/50"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function SpeakerNote({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={FADE_UP}
      className="flex items-start gap-3 max-w-2xl border-t border-white/10 pt-4 mt-auto"
    >
      <span
        className="text-[10px] tracking-[0.3em] uppercase text-[#A3D1FF] shrink-0 pt-0.5"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Speaker
      </span>
      <p
        className="text-white/55 italic m-0"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          lineHeight: 1.6,
        }}
      >
        {children}
      </p>
    </motion.div>
  );
}

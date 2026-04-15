"use client";

import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const SERIF = "Georgia, 'Times New Roman', serif";
const CALENDLY_LINK = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['-6%', '8%']);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · The Operator" label="About · One Person" />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          {/* Left — portrait with parallax */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                style={{ y: portraitY, scale: portraitScale }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Corner film marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />

              {/* Bottom overlay meta */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-white/80">
                <span>Marc Friedman</span>
                <span>Est. 2018</span>
              </div>
            </div>

            {/* Side ticker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute -left-8 top-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Profile · Portrait · No. 01
            </motion.div>
          </motion.div>

          {/* Right — editorial content */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-6"
            >
              — The pitch, in one sentence
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[0.95] tracking-[-0.03em] mb-10"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                fontWeight: 400,
              }}
            >
              One designer.{' '}
              <span className="block">One developer.</span>
              <em className="italic text-[#A3D1FF]">Zero handoffs.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6 text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl"
            >
              <p>
                At an agency, your project gets passed between a designer, a developer, a
                PM, and{' '}
                <em className="text-white/90" style={{ fontFamily: SERIF }}>
                  whoever&apos;s available on Tuesday
                </em>
                .
              </p>
              <p>
                With me, the person who designs your site is the same person who codes it.
                Fewer misunderstandings, faster turnarounds, a website that actually
                matches the vision.
              </p>
            </motion.div>

            {/* Decorative stat row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 md:gap-6 py-8 border-y border-white/10 mb-10"
            >
              {[
                { n: '01', l: 'Point of contact' },
                { n: '00', l: 'Handoffs' },
                { n: '50+', l: 'Shipped' },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-white leading-none mb-2"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 500,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
              >
                <MessageSquare className="w-4 h-4" />
                Let&apos;s talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
              >
                Full profile
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

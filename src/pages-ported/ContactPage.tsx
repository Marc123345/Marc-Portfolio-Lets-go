"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import InteractiveCube from '@/components/InteractiveCube';

const SERIF = "Georgia, 'Times New Roman', serif";

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Marc Friedman — Full Stack Designer & Developer',
  description:
    'Get in touch for a free strategy call or quote on a high-performance custom website.',
  url: 'https://www.marcfriedmanportfolio.com/contact',
  provider: {
    '@type': 'Person',
    name: 'Marc Friedman',
    jobTitle: 'Full Stack Designer & Developer',
    url: 'https://www.marcfriedmanportfolio.com',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['English'],
  },
};

const projectFaces = [
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710', title: 'Binns Media Group' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782', title: 'Untapped Africa' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png', title: 'H2H Marketing' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010', title: 'Paving Leads' },
  { image: 'https://i.imgur.com/PiKh199.png', title: 'AutoMarginX' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818', title: 'iLight Care' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png', title: 'Ask Africa' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776', title: 'Friedman & Cohen' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194', title: 'A Secure Annapolis' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933', title: 'Tar & Chip Paving' },
  { image: 'https://i.imgur.com/ApfYPlH.jpg', title: 'Chad Le Clos' },
  { image: 'https://i.imgur.com/EwgHAuK.png', title: 'Fleet Management' },
  { image: 'https://i.imgur.com/QNHXpzT.jpeg', title: 'MyTube' },
  { image: 'https://i.imgur.com/SubVB9A.jpeg', title: 'Videoleap' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010', title: 'Sentinel DS' },
].map((p, i) => ({
  ...p,
  category: `Case File ${String(i + 1).padStart(2, '0')}`,
}));

const PAGE_SIZE = 6;

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = Math.ceil(projectFaces.length / PAGE_SIZE);
  const currentPage = Math.floor(activeIndex / PAGE_SIZE);
  const pageStart = currentPage * PAGE_SIZE;
  const pageFaces = useMemo(
    () => projectFaces.slice(pageStart, pageStart + PAGE_SIZE),
    [pageStart],
  );
  const faceIndex = activeIndex - pageStart;
  const active = projectFaces[activeIndex];

  const goPrev = () =>
    setActiveIndex((i) =>
      i - PAGE_SIZE >= 0 ? i - PAGE_SIZE : (totalPages - 1) * PAGE_SIZE,
    );
  const goNext = () =>
    setActiveIndex((i) =>
      i + PAGE_SIZE < projectFaces.length ? i + PAGE_SIZE : 0,
    );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="relative min-h-screen bg-black overflow-hidden pt-28 pb-16 px-6 lg:px-12">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#111418] border border-white/10 p-8 md:p-10"
            >
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/20" />

              <div className="flex items-center justify-between mb-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                <span>Contact · 2026</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Accepting inquiries
                </span>
              </div>

              <h1
                className="text-white leading-[0.95] tracking-[-0.03em] mb-3"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                }}
              >
                Let&apos;s make{' '}
                <em className="italic text-[#A3D1FF]">something real.</em>
              </h1>
              <p className="text-white/65 leading-relaxed mb-8 text-sm md:text-base">
                Tell me what you&apos;re building. I reply within 24 hours.
              </p>

              <ContactForm />
            </motion.div>

            {/* Cube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center"
            >
              <div className="relative w-full flex items-center justify-center">
                <div className="absolute w-[420px] h-[420px] bg-[#A3D1FF]/10 rounded-full blur-[100px] pointer-events-none" />
                <InteractiveCube faces={pageFaces} activeIndex={faceIndex} />
              </div>

              <div className="mt-10 w-full max-w-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                    — Drag, or cycle the deck
                  </p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={goPrev}
                      aria-label="Previous set"
                      className="w-7 h-7 flex items-center justify-center border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span
                      className="px-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {String(currentPage + 1).padStart(2, '0')} /{' '}
                      {String(totalPages).padStart(2, '0')}
                    </span>
                    <button
                      onClick={goNext}
                      aria-label="Next set"
                      className="w-7 h-7 flex items-center justify-center border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {projectFaces.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] border transition-all ${
                        activeIndex === i
                          ? 'bg-white text-black border-white'
                          : 'text-white/70 border-white/15 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </button>
                  ))}
                </div>
                <p
                  className="text-center mt-4 text-white/70 text-sm"
                  style={{ fontFamily: SERIF, fontStyle: 'italic' }}
                >
                  {active.title}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

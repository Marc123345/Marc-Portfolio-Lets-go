"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Calendar, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import InteractiveCube from '@/components/InteractiveCube';

const SERIF = "Georgia, 'Times New Roman', serif";
const CALENDLY = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';

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
  {
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
    category: 'Case File 01',
    title: 'Binns Media Group',
  },
  {
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
    category: 'Case File 02',
    title: 'Untapped Africa',
  },
  {
    image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png',
    category: 'Case File 03',
    title: 'H2H Marketing',
  },
  {
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
    category: 'Case File 04',
    title: 'iLight Care',
  },
  {
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
    category: 'Case File 05',
    title: 'Paving Leads',
  },
  {
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776',
    category: 'Case File 06',
    title: 'Friedman & Cohen',
  },
];

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

export default function ContactPage() {
  const [activeFace, setActiveFace] = useState(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ===================== MASTHEAD ===================== */}
      <section className="relative min-h-screen bg-black overflow-hidden pt-28 pb-20">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative">
          <ChapterMarker number="Chapter · Inbox" label="Contact · 2026" />

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left — headline + contact ways */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-6"
              >
                — Say hi, ask anything
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-white leading-[0.9] tracking-[-0.04em] mb-10"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.75rem, 7vw, 6rem)',
                  fontWeight: 400,
                }}
              >
                Let&apos;s make{' '}
                <em className="italic text-[#A3D1FF]">something real.</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-xl md:text-2xl text-white/75 leading-snug mb-10 max-w-xl"
              >
                Book a free 30-minute strategy call. I&apos;ll audit your current site{' '}
                <em className="text-white" style={{ fontFamily: SERIF }}>
                  live on the call
                </em>{' '}
                and show you exactly what&apos;s costing you customers.
              </motion.p>

              {/* Channels list */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="space-y-0 border-t border-white/10"
              >
                {[
                  {
                    icon: Calendar,
                    label: 'Book a call',
                    sub: 'Calendly · 30 min · free audit',
                    href: CALENDLY,
                    external: true,
                  },
                  {
                    icon: Mail,
                    label: 'marcf@marcfriedmanwebdesign.com',
                    sub: '24-hour response time',
                    href: 'mailto:marcf@marcfriedmanwebdesign.com',
                    external: false,
                  },
                  {
                    icon: Linkedin,
                    label: 'Connect on LinkedIn',
                    sub: '/in/portfolio2',
                    href: 'https://www.linkedin.com/in/portfolio2/',
                    external: true,
                  },
                ].map(({ icon: Icon, label, sub, href, external }) => (
                  <li key={label} className="border-b border-white/10">
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between py-5 gap-4"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <Icon className="w-4 h-4 text-[#A3D1FF] shrink-0" />
                        <div className="min-w-0">
                          <div
                            className="text-white text-lg md:text-xl leading-tight truncate group-hover:text-[#A3D1FF] transition-colors"
                            style={{ fontFamily: SERIF, fontWeight: 500 }}
                          >
                            {label}
                          </div>
                          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mt-1">
                            {sub}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-white/60"
              >
                <span className="flex items-center gap-2 text-white">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                    <span className="relative w-2 h-2 rounded-full bg-green-400" />
                  </span>
                  Available — Q2 2026
                </span>
                <span>Avg. reply 24h</span>
                <span>No sales pitch</span>
              </motion.div>
            </div>

            {/* Right — cube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center min-h-[450px]"
            >
              <div className="relative w-full flex items-center justify-center">
                <div className="absolute w-[420px] h-[420px] bg-[#A3D1FF]/10 rounded-full blur-[100px] pointer-events-none" />
                <InteractiveCube faces={projectFaces} activeIndex={activeFace} />
              </div>
              {/* Cube controls — face picker */}
              <div className="mt-10 w-full">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4 text-center">
                  — Drag, or cycle the deck
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {projectFaces.map((f, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFace(i)}
                      className={`px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] border transition-all ${
                        activeFace === i
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
                  {projectFaces[activeFace].title}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER 01 — THE FORM ===================== */}
      <section className="relative bg-[#0a0a0a] border-t border-white/10 py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="01" label="Start a Project" />

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9 }}
                className="text-white leading-[1.0] tracking-[-0.03em] mb-8"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 400,
                }}
              >
                Prefer to write it out?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl"
              >
                Tell me what you&apos;re building and what&apos;s not working. I&apos;ll
                reply within 24 hours with honest thoughts and a proposed next step.
              </motion.p>

              <ol className="space-y-5 max-w-xl">
                {[
                  { n: '01', t: 'You fill the form.', d: 'Takes about 90 seconds.' },
                  {
                    n: '02',
                    t: 'I reply within 24 hours.',
                    d: 'With honest thoughts and a next step.',
                  },
                  {
                    n: '03',
                    t: 'We talk for 30 minutes.',
                    d: 'I audit your site live. You walk away with a plan.',
                  },
                ].map((s) => (
                  <li
                    key={s.n}
                    className="flex gap-5 items-baseline border-b border-white/10 pb-5"
                  >
                    <span
                      className="text-[#A3D1FF]/70 text-xs font-mono tracking-[0.2em] shrink-0"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <p
                        className="text-white text-xl md:text-2xl leading-tight mb-1"
                        style={{ fontFamily: SERIF, fontWeight: 500 }}
                      >
                        {s.t}
                      </p>
                      <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative bg-[#111418] border border-white/10 p-8 md:p-10"
            >
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/20" />

              <div className="flex items-center justify-between mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                <span>Form · 01</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Accepting inquiries
                </span>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== COLOPHON ===================== */}
      <section className="relative bg-black border-t border-white/10 py-16 md:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
          <span>Thanks for reading this far.</span>
          <span>Marc Friedman · Contact · 2026</span>
        </div>
      </section>
    </>
  );
}

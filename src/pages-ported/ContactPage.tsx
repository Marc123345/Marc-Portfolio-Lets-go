"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import ContactTestimonials from '@/components/ContactTestimonials';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Marc Friedman, Full Stack Designer & Developer',
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

export default function ContactPage() {
  const [tab, setTab] = useState<'message' | 'meeting'>('message');

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
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
            {/* Form / Booking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-white leading-[0.95] tracking-[-0.03em] mb-3"
                style={{
                  fontFamily: 'var(--font-heading)',
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

              <div className="flex gap-2 mb-6" role="tablist" aria-label="Contact options">
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === 'message'}
                  onClick={() => setTab('message')}
                  className={`flex-1 px-4 py-3 text-xs font-mono uppercase tracking-[0.2em] border transition-colors ${
                    tab === 'message'
                      ? 'bg-[#A3D1FF] text-black border-[#A3D1FF]'
                      : 'bg-transparent text-white/60 border-white/15 hover:text-white hover:border-white/30'
                  }`}
                >
                  Send a message
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === 'meeting'}
                  onClick={() => setTab('meeting')}
                  className={`flex-1 px-4 py-3 text-xs font-mono uppercase tracking-[0.2em] border transition-colors ${
                    tab === 'meeting'
                      ? 'bg-[#A3D1FF] text-black border-[#A3D1FF]'
                      : 'bg-transparent text-white/60 border-white/15 hover:text-white hover:border-white/30'
                  }`}
                >
                  Book a meeting
                </button>
              </div>

              <div hidden={tab !== 'message'}>
                <ContactForm />
              </div>
              {tab === 'meeting' && <CalendlyEmbed />}
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <ContactTestimonials />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

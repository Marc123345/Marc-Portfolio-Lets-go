"use client";

import React, { useMemo } from 'react';
import { Quote, Star, Linkedin, User, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { reviews, clientInfo, type Review } from '@/data/testimonials';

const SERIF = "var(--font-heading)";

const FEATURED_NAME = 'Omar Turner';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
      ))}
    </div>
  );
}

function MarqueeCard({ review }: { review: Review }) {
  const client = clientInfo[review.name] ?? { role: 'Client', image: '' };
  return (
    /* 4/12/32 vertical rhythm:
       - 4px: within a label (name → role tiny gap)
       - 12px: within a tight group (avatar + name+role cluster)
       - 32px: between distinct content groups (meta row | quote | footer) */
    <div className="w-[340px] sm:w-[380px] shrink-0 bg-[#111418] border border-white/10 p-8 hover:border-[#A3D1FF]/60 hover:bg-[#14181d] transition-all group">
      <div className="flex items-start justify-between mb-8">
        <Stars />
        <Quote className="w-5 h-5 text-[#A3D1FF]/40 -scale-x-100 group-hover:text-[#A3D1FF] transition-colors" />
      </div>
      <p className="text-white/85 text-[15px] leading-relaxed mb-8 line-clamp-4">
        {review.content}
      </p>
      <div className="flex items-center justify-between pt-8 border-t border-white/10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5 flex-shrink-0 ring-1 ring-white/10">
            {client.image ? (
              <img
                src={client.image}
                alt={review.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/40">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <div className="text-white text-sm font-semibold truncate mb-1">{review.name}</div>
            <div className="text-[#A3D1FF]/80 text-[11px] truncate">{client.role}</div>
          </div>
        </div>
        {client.linkedin && (
          <a
            href={client.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${review.name} on LinkedIn`}
            className="p-3 rounded-full hover:bg-[#0077B5]/10 text-white/50 hover:text-[#0077B5] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = 'left',
  speed = 60,
}: {
  items: Review[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  const loopId = useMemo(
    () => `testimonial-${direction}-${Math.random().toString(36).slice(2, 8)}`,
    [direction],
  );

  return (
    <div className="relative overflow-hidden testimonial-marquee-mask">
      <style>{`
        @keyframes ${loopId} {
          from { transform: translateX(${direction === 'left' ? '0' : '-50%'}); }
          to { transform: translateX(${direction === 'left' ? '-50%' : '0'}); }
        }
        .${loopId} {
          animation: ${loopId} ${speed}s linear infinite;
          will-change: transform;
        }
        .${loopId}:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .${loopId} { animation: none; }
        }
      `}</style>
      <div className={`${loopId} flex gap-3 py-2`} style={{ width: 'max-content' }}>
        {[...items, ...items].map((r, i) => (
          <MarqueeCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const featured = reviews.find((r) => r.name === FEATURED_NAME)!;
  const featuredClient = clientInfo[featured.name];
  const rest = reviews.filter((r) => r.name !== FEATURED_NAME);
  const half = Math.ceil(rest.length / 2);
  const rowA = rest.slice(0, half);
  const rowB = rest.slice(half);

  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#A3D1FF]/5 rounded-full blur-[120px]" />
      </div>

      <style>{`
        .testimonial-marquee-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 80px,
            black calc(100% - 80px),
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 80px,
            black calc(100% - 80px),
            transparent 100%
          );
        }
        @keyframes scroll-logos-tb {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-scroll-tb {
          animation: scroll-logos-tb 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .logo-scroll-tb:hover { animation-play-state: paused; }
      `}</style>

      {/* Logo Marquee */}
      <div className="relative w-full py-8 mb-8 overflow-hidden testimonial-marquee-mask">
        <div className="flex items-center gap-8 logo-scroll-tb">
          {[
            { src: '/images/clients/uliFOja.png', alt: 'Binns Media Group', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/GOLD%20TEXT%20LOGO%20NO%20GLOW%20EFFECT%20ADDED%201.png?updatedAt=1748753342858', alt: 'Untapped Africa' },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/logo%20(1).svg?updatedAt=1763381682176', alt: 'Chad LeClos', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(7).png', alt: 'Secure Annapolis', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/9uafCUp%201%20(1).png?updatedAt=1755247790037', alt: 'Auto Margin', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/White%20logo%20-%20no%20background.svg?updatedAt=1749030562412', alt: 'iLight' },
          ]
            .concat([
              { src: '/images/clients/uliFOja.png', alt: 'Binns Media Group', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/GOLD%20TEXT%20LOGO%20NO%20GLOW%20EFFECT%20ADDED%201.png?updatedAt=1748753342858', alt: 'Untapped Africa' },
                { src: 'https://ik.imagekit.io/qcvroy8xpd/logo%20(1).svg?updatedAt=1763381682176', alt: 'Chad LeClos', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(7).png', alt: 'Secure Annapolis', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/9uafCUp%201%20(1).png?updatedAt=1755247790037', alt: 'Auto Margin', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/White%20logo%20-%20no%20background.svg?updatedAt=1749030562412', alt: 'iLight' },
            ])
            .map((logo, i) => (
              <div
                key={i}
                className="transition-all duration-300 hover:scale-110 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity ${
                    logo.invert ? 'filter brightness-0 invert' : ''
                  }`}
                />
              </div>
            ))}
        </div>
      </div>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-white leading-[0.95] tracking-[-0.03em] mb-8 max-w-5xl"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(2.75rem, 7vw, 6.5rem)',
            fontWeight: 400,
          }}
        >
          Don&apos;t take my word{' '}
          <em className="italic text-[#A3D1FF]">for it.</em>
        </motion.h2>

        {/* Featured spotlight */}
        <motion.div
          className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Portrait card */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#A3D1FF]/10 via-transparent to-[#A3D1FF]/5 blur-3xl" />
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden border border-white/10">
              {featuredClient?.image ? (
                <img
                  src={featuredClient.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#1b1b1b] flex items-center justify-center">
                  <User className="w-24 h-24 text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Corner film marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Stars />
                <div className="mt-3">
                  <div
                    className="text-white leading-none"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                      fontWeight: 500,
                    }}
                  >
                    {featured.name}
                  </div>
                  <div className="text-[#A3D1FF]/80 text-xs mt-1 font-mono uppercase tracking-[0.2em]">
                    {featuredClient?.role}
                  </div>
                </div>
                {featuredClient?.linkedin && (
                  <a
                    href={featuredClient.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[10px] font-mono uppercase tracking-[0.2em] backdrop-blur-sm transition-colors"
                  >
                    <Linkedin className="w-3 h-3" /> Verify on LinkedIn
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Pull quote */}
          <div className="relative">
            <Quote
              className="absolute -top-4 -left-2 w-20 h-20 text-[#A3D1FF]/15 -scale-x-100"
              aria-hidden
            />
            <blockquote
              className="relative text-white/95 leading-[1.2]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              &ldquo;Marc was able to execute the vision perfectly. He dedicates his time
              to the client, ensuring the client is completely satisfied at each step of
              the process.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/50 font-mono uppercase tracking-[0.25em]">
              <span>Case study</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <Link
                href="/work/case-studies/binns-media/"
                className="text-white hover:text-[#A3D1FF] transition-colors flex items-center gap-1"
              >
                Binns Media Group <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Aggregate stats strip */}
        <div className="mb-8 py-8 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: '5.0', label: 'Google Rating' },
            { value: '4.8', label: 'Clutch Rating' },
            { value: '25', label: 'Verified Reviews' },
            { value: '50+', label: 'Projects Shipped' },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div
                className="text-white leading-none mb-1"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.value}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite marquee rows */}
      <div className="space-y-3">
        <MarqueeRow items={rowA} direction="left" speed={80} />
        <MarqueeRow items={rowB} direction="right" speed={90} />
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <p className="text-white/70 mb-3 text-lg">Ready to add your story to the list?</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact/" className="mr_btn mr_btn_primary">
            <span>Book a Call</span>
          </Link>
          <Link href="/work/" className="mr_btn mr_btn_outline">
            <span>View My Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

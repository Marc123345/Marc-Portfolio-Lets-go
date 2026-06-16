"use client";

import React, { useMemo } from 'react';
import { Quote, Star, Linkedin, User } from 'lucide-react';
import { reviews, clientInfo, type Review } from '@/data/testimonials';

const SERIF = "var(--font-heading)";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
      ))}
    </div>
  );
}

function TestimonialCard({ review }: { review: Review }) {
  const client = clientInfo[review.name] ?? { role: 'Client', image: '' };
  return (
    <div className="bg-[#111418] border border-white/10 p-6 hover:border-[#A3D1FF]/60 hover:bg-[#14181d] transition-all group">
      <div className="flex items-start justify-between mb-5">
        <Stars />
        <Quote className="w-5 h-5 text-[#A3D1FF]/40 -scale-x-100 group-hover:text-[#A3D1FF] transition-colors" />
      </div>
      <p className="text-white/85 text-[14px] leading-relaxed mb-5">{review.content}</p>
      <div className="flex items-center justify-between pt-5 border-t border-white/10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-white/5 flex-shrink-0 ring-1 ring-white/10">
            {client.image ? (
              <img
                src={client.image}
                alt={review.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/40">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <div className="text-white text-sm font-semibold truncate">{review.name}</div>
            <div className="text-[#A3D1FF]/80 text-[11px] truncate">{client.role}</div>
          </div>
        </div>
        {client.linkedin && (
          <a
            href={client.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${review.name} on LinkedIn`}
            className="p-2.5 rounded-full hover:bg-[#0077B5]/10 text-white/50 hover:text-[#0077B5] transition-colors flex-shrink-0"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ContactTestimonials() {
  // Lead with the strongest, most detailed reviews.
  const ordered = useMemo(() => {
    const lead = ['Omar Turner', 'Bradley Thompson', 'Darren Youngleson'];
    const head = lead
      .map((n) => reviews.find((r) => r.name === n))
      .filter(Boolean) as Review[];
    const tail = reviews.filter((r) => !lead.includes(r.name));
    return [...head, ...tail];
  }, []);

  return (
    <div className="relative flex flex-col">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-2">
            — In their words
          </p>
          <h2
            className="text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', fontWeight: 400 }}
          >
            Don&apos;t take my word{' '}
            <em className="italic text-[#A3D1FF]">for it.</em>
          </h2>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="flex items-center gap-1 justify-end">
            <Stars />
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mt-1.5">
            5.0 · 25 reviews
          </p>
        </div>
      </div>

      {/* Vertical auto-scrolling testimonials */}
      <div className="contact-testimonials-mask relative h-[420px] lg:h-[560px] overflow-hidden">
        <style>{`
          @keyframes contact-testimonials-scroll {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          .contact-testimonials-track {
            animation: contact-testimonials-scroll 60s linear infinite;
            will-change: transform;
          }
          .contact-testimonials-track:hover {
            animation-play-state: paused;
          }
          .contact-testimonials-mask {
            mask-image: linear-gradient(to bottom, transparent 0, black 48px, black calc(100% - 48px), transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 48px, black calc(100% - 48px), transparent 100%);
          }
          @media (prefers-reduced-motion: reduce) {
            .contact-testimonials-track { animation: none; }
          }
        `}</style>
        <div className="contact-testimonials-track flex flex-col gap-4">
          {[...ordered, ...ordered].map((r, i) => (
            <TestimonialCard key={`${r.name}-${i}`} review={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

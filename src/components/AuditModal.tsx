"use client";

import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';

const JOTFORM_ID = '261032780539053';

type AuditModalProps = {
  open: boolean;
  onClose: () => void;
  url: string;
  toolLabel: string;
  variant: 'website' | 'geo';
};

function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export default function AuditModal({ open, onClose, url, toolLabel, variant }: AuditModalProps) {
  const normalized = useMemo(() => normalizeUrl(url), [url]);

  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams({
      q5_q5_textbox3: `${toolLabel}, ${normalized}`,
      q9_linkedinUrl: normalized,
    });
    return `https://form.jotform.com/${JOTFORM_ID}?${params.toString()}`;
  }, [normalized, toolLabel]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const accent = variant === 'geo' ? '#A3D1FF' : '#A3D1FF';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-[#0b0b0b] border border-white/10 max-h-[92vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/20" />

            <button
              aria-label="Close audit form"
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Step 2 of 2, Enter your details
              </div>

              <h2
                className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Almost there. Where should we send your{' '}
                <em className="italic" style={{ color: accent }}>{toolLabel}</em>?
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Drop your details below and we&apos;ll deliver your audit within 24–48 hours.
              </p>

              <div
                className="flex items-center gap-3 p-4 mb-6 border"
                style={{ borderColor: `${accent}40`, background: `${accent}0d` }}
              >
                <Globe className="w-5 h-5 flex-shrink-0" style={{ color: accent }} />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 mb-1">
                    Auditing
                  </p>
                  <p className="text-white text-sm font-medium truncate" title={normalized}>
                    {normalized || '–'}
                  </p>
                </div>
              </div>

              <iframe
                key={iframeSrc}
                title={`${toolLabel}, request form`}
                src={iframeSrc}
                allow="geolocation; microphone; camera; fullscreen; payment"
                loading="lazy"
                className="w-full border-0 bg-transparent min-h-[820px] md:min-h-[540px]"
                scrolling="auto"
              />

              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mt-4">
                We use your details only to deliver your audit. No spam.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

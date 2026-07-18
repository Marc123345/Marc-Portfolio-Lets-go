"use client";

import { useEffect, useRef, useState } from 'react';

const ACCENT = '#A3D1FF';

/**
 * Post-submit landing for the resource lead magnets. Each Jotform is configured
 * to redirect here (inside its embed iframe) after a successful submission, e.g.
 * /resources/thank-you/?r=b2b-website-mastery. On load we kick off the PDF
 * download automatically and also show a manual button, since some browsers
 * block programmatic downloads that run without a fresh user gesture.
 *
 * Rendered inside the Jotform iframe, so /resources/thank-you/ gets the same CSP
 * carve-out as /thank-you/ in public/_headers (frame-ancestors relaxed).
 */
const RESOURCES: Record<string, { title: string; file: string }> = {
  'b2b-website-mastery': {
    title: 'B2B Website Mastery',
    file: '/b2b-website-mastery.pdf',
  },
  'b2b-checklist': {
    title: 'The B2B Website Checklist',
    file: '/b2b-checklist.pdf',
  },
  'landing-page-lead-magnet': {
    title: 'The Landing Page Lead Magnet',
    file: '/landing-page-lead-magnet.pdf',
  },
};

const FALLBACK = RESOURCES['landing-page-lead-magnet'];

export default function DownloadThankYou() {
  const [resource, setResource] = useState<{ title: string; file: string } | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('r') ?? '';
    const match = RESOURCES[slug] ?? FALLBACK;
    setResource(match);

    // Best-effort auto-download. If the browser blocks it (no user gesture
    // carried through the redirect), the visible button below still works.
    const t = window.setTimeout(() => linkRef.current?.click(), 400);
    return () => window.clearTimeout(t);
  }, []);

  const active = resource ?? FALLBACK;
  const fileName = active.file.replace(/^\//, '');

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: `${ACCENT}33` }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ color: ACCENT }} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">You&apos;re in.</h1>
        <p className="text-white/70 mb-8">
          Your download of <span className="text-white">{active.title}</span> is starting.
          A copy is also on its way to your inbox. If the download doesn&apos;t begin, use the
          button below.
        </p>

        <a
          ref={linkRef}
          href={active.file}
          download={fileName}
          className="inline-flex items-center gap-2 px-6 py-3 font-medium text-black transition-colors"
          style={{ background: ACCENT }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z" clipRule="evenodd" />
            <path d="M4 15a1 1 0 100 2h12a1 1 0 100-2H4z" />
          </svg>
          Download the PDF
        </a>
      </div>
    </div>
  );
}

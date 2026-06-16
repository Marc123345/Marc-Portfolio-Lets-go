"use client";

import React, { useEffect, useRef } from 'react';

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
  };
};

const CALENDLY_URL =
  'https://calendly.com/marc-friedman-web-design--meeting-link/30min';

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = () => {
      const w = window as CalendlyWindow;
      if (w.Calendly && containerRef.current) {
        containerRef.current.innerHTML = '';
        w.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
        });
      }
    };

    const w = window as CalendlyWindow;
    if (w.Calendly) {
      init();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) {
      existing.addEventListener('load', init);
      return () => existing.removeEventListener('load', init);
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

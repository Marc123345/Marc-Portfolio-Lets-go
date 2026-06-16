"use client";

import React, { useEffect, useRef } from 'react';

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
  };
};

const CALENDLY_URL =
  'https://calendly.com/marc-friedman-web-design--meeting-link/30min';
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as CalendlyWindow;
    const el = containerRef.current;

    // Switching back to this tab: widget.js only auto-initialises once, on
    // script load. If it's already loaded we must initialise manually.
    if (w.Calendly?.initInlineWidget && el) {
      el.innerHTML = '';
      w.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
      return;
    }

    // First time: inject the script. On load Calendly auto-initialises any
    // .calendly-inline-widget element that carries a data-url (the div below).
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

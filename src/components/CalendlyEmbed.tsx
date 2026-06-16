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
const CSS_SRC = 'https://assets.calendly.com/assets/external/widget.css';

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const render = () => {
      const w = window as CalendlyWindow;
      const el = containerRef.current;
      if (cancelled || !el) return;
      // Already initialised (Calendly injects an <iframe>) — don't double-render.
      if (el.querySelector('iframe')) return;
      if (w.Calendly?.initInlineWidget) {
        el.innerHTML = '';
        w.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
      }
    };

    // Calendly defines window.Calendly when widget.js finishes executing.
    // Poll for it so we work whether the script is loading fresh or was
    // already cached from a previous mount (tab switching).
    const waitForCalendly = () => {
      if ((window as CalendlyWindow).Calendly?.initInlineWidget) {
        render();
        return;
      }
      const interval = window.setInterval(() => {
        if (cancelled) {
          window.clearInterval(interval);
          return;
        }
        if ((window as CalendlyWindow).Calendly?.initInlineWidget) {
          window.clearInterval(interval);
          render();
        }
      }, 100);
      window.setTimeout(() => window.clearInterval(interval), 10000);
    };

    if (!document.querySelector(`link[href="${CSS_SRC}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CSS_SRC;
      document.head.appendChild(link);
    }

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    waitForCalendly();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

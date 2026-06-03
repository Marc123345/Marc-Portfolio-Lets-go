"use client";

import { useEffect, useRef } from 'react';

/**
 * Embeds the "Get the Free Landing Page Guide" Jotform (email opt-in).
 * On submit, Jotform shows a thank-you page with a PDF download button and
 * emails the visitor the download link via autoresponder.
 */
export default function LeadMagnetFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/261536844219058';
    el.appendChild(script);
    return () => { el.innerHTML = ''; };
  }, []);

  return <div ref={containerRef} />;
}

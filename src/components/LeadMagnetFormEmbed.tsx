"use client";

import { useEffect, useRef, useState } from 'react';

const FORM_ID = '261536844219058';

/**
 * Embeds the "Get the Free Landing Page Guide" Jotform via a direct iframe
 * + Jotform's embed handler (auto-resize). The jsform/document.write approach
 * silently no-ops when injected after page load, so we use the iframe pattern.
 * On submit, Jotform shows a thank-you page with a PDF download button and
 * emails the visitor the download link via autoresponder.
 */
export default function LeadMagnetFormEmbed() {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // The iframe often fires its `load` event from the server-rendered HTML
  // before React hydrates and attaches the JSX `onLoad` handler, leaving the
  // "Loading form" overlay stuck on top of an already-loaded form. Attach the
  // listener imperatively here, and add a fallback timeout in case the event
  // has already fired by the time this effect runs.
  useEffect(() => {
    const iframe = iframeRef.current;
    const reveal = () => setLoaded(true);

    iframe?.addEventListener('load', reveal);
    const fallback = window.setTimeout(reveal, 4000);

    return () => {
      iframe?.removeEventListener('load', reveal);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      (
        window as unknown as Record<string, unknown> & {
          jotformEmbedHandler?: (sel: string, base: string) => void;
        }
      ).jotformEmbedHandler?.(
        `iframe[id='JotFormIFrame-${FORM_ID}']`,
        'https://form.jotform.com/',
      );
    };
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-[700px] md:min-h-[560px]">
      {!loaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'rgba(163,209,255,0.15)', borderTopColor: '#A3D1FF' }}
          />
          <span className="text-xs uppercase tracking-[0.12em] text-[#A3D1FF]/50">
            Loading form
          </span>
        </div>
      )}
      <iframe
        ref={iframeRef}
        id={`JotFormIFrame-${FORM_ID}`}
        title="Get the Free Landing Page Guide"
        src={`https://form.jotform.com/${FORM_ID}`}
        onLoad={() => setLoaded(true)}
        allow="geolocation; microphone; camera; fullscreen; payment"
        allowTransparency
        loading="lazy"
        scrolling="no"
        className="w-full border-0 bg-transparent"
        style={{ minHeight: 560, height: '100%' }}
      />
    </div>
  );
}

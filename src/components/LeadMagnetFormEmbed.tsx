"use client";

import { useEffect, useRef, useState } from 'react';

const DEFAULT_FORM_ID = '261536844219058';

/**
 * Embeds a lead-magnet Jotform via a direct iframe + Jotform's embed handler
 * (auto-resize). The jsform/document.write approach silently no-ops when
 * injected after page load, so we use the iframe pattern.
 *
 * When `pdfUrl` is provided, the visitor's PDF downloads automatically the
 * moment they submit. Jotform's embed handler exposes no "submitted" event, so
 * we detect the `scrollIntoView` message it posts to the parent on submit (it
 * scrolls the page to the thank-you view). We ignore any such message in the
 * first few seconds after mount so a scroll fired during initial layout can't
 * be mistaken for a submission, and download only once.
 */
export default function LeadMagnetFormEmbed({
  formId = DEFAULT_FORM_ID,
  title = 'Lead magnet opt-in form',
  pdfUrl,
}: { formId?: string; title?: string; pdfUrl?: string } = {}) {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!pdfUrl) return;

    const armedAt = Date.now() + 2500;
    let downloaded = false;

    const onMessage = (e: MessageEvent) => {
      if (downloaded) return;
      if (!e.origin.includes('jotform') && !e.origin.includes('jotfor.ms')) return;

      const data = typeof e.data === 'string' ? e.data : '';
      const isSubmit = data.startsWith('scrollIntoView');
      if (!isSubmit || Date.now() < armedAt) return;

      downloaded = true;
      downloadRef.current?.click();
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [pdfUrl]);

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
        `iframe[id='JotFormIFrame-${formId}']`,
        'https://form.jotform.com/',
      );
    };
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [formId]);

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
        id={`JotFormIFrame-${formId}`}
        title={title}
        src={`https://form.jotform.com/${formId}`}
        onLoad={() => setLoaded(true)}
        allow="geolocation; microphone; camera; fullscreen; payment"
        allowTransparency
        loading="eager"
        scrolling="no"
        className="w-full border-0 bg-transparent"
        style={{ minHeight: 560, height: '100%' }}
      />
      {pdfUrl && (
        <a
          ref={downloadRef}
          href={pdfUrl}
          download={pdfUrl.replace(/^.*\//, '')}
          className="sr-only"
          aria-hidden
          tabIndex={-1}
        >
          Download
        </a>
      )}
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from 'react';

type JotformWindow = Window & {
  jotformEmbedHandler?: (sel: string, url: string) => void;
  plausible?: (event: string, options?: object) => void;
};

function trackFormSubmit() {
  const w = window as JotformWindow;
  if (w.plausible) {
    w.plausible('Contact Form Submitted');
  }
}

export default function ContactForm() {
  const hasLoadedOnce = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      const w = window as JotformWindow;
      if (w.jotformEmbedHandler) {
        w.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261231977107053']",
          "https://form.jotform.com/"
        );
      }
    };
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!String(event.origin).includes('jotform')) return;
      let data = event.data;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch { /* not JSON */ }
      }
      if (
        data?.action === 'submission' ||
        data?.type === 'form:submitCompleted' ||
        (typeof event.data === 'string' && event.data === 'reloadPage')
      ) {
        trackFormSubmit();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleLoad = () => {
    if (hasLoadedOnce.current) {
      trackFormSubmit();
    }
    hasLoadedOnce.current = true;
    setLoaded(true);
  };

  return (
    /* Mobile fields stack vertically — needs ~900px to fit before
       Jotform's auto-resize handler shrinks the iframe to the
       reported content height. Desktop fits in ~540px. Using
       responsive min-height + responsive iframe height prevents
       the brief clipping flash on slow mobile networks. */
    <div className="relative min-h-[900px] md:min-h-[540px]">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="w-8 h-8 rounded-full border-2 border-t-[#A3D1FF] animate-spin"
            style={{ borderColor: 'rgba(163,209,255,0.15)', borderTopColor: '#A3D1FF' }} />
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(163,209,255,0.5)' }}>
            Loading form
          </span>
        </div>
      )}
      <iframe
        id="JotFormIFrame-261231977107053"
        title="Contact Inquiry Form for Web Design & Development"
        onLoad={handleLoad}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/261231977107053"
        className="w-full block border-0 h-[900px] md:h-[540px]"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        scrolling="no"
      />
    </div>
  );
}

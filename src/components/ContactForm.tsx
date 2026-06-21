"use client";

import React, { useEffect, useRef } from 'react';

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
  };

  return (
    // Height is driven by the iframe itself, Jotform's embed handler resizes
    // the iframe to match its content, so the wrapper must NOT pin a fixed
    // height (that clipped the form and bled it into the footer). The skeleton
    // sits behind the iframe and is covered by Jotform's white background once
    // it loads.
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute inset-0 z-0 p-6 flex flex-col gap-4 bg-white"
        style={{ pointerEvents: 'none' }}
      >
        <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
        <div className="h-10 w-full bg-gray-100 rounded" />
        <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
        <div className="h-10 w-full bg-gray-100 rounded" />
        <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
        <div className="h-24 w-full bg-gray-100 rounded" />
        <div className="h-10 w-32 bg-gray-300 rounded mt-2" />
      </div>
      <iframe
        id="JotFormIFrame-261231977107053"
        title="Contact Inquiry Form for Web Design & Development"
        onLoad={handleLoad}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/261231977107053"
        loading="eager"
        fetchPriority="high"
        className="relative z-10 w-full block border-0"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          border: 'none',
          height: '900px',
        }}
        scrolling="no"
      />
    </div>
  );
}

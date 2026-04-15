"use client";

import React, { useEffect } from 'react';

type JotformWindow = Window & { jotformEmbedHandler?: (sel: string, url: string) => void };

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      const w = window as JotformWindow;
      if (w.jotformEmbedHandler) {
        w.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-261032780539053']",
          "https://form.jotform.com/"
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="JotFormIFrame-261032780539053"
      title="Marc Friedman Contact Form"
      onLoad={() => { try { window.parent.scrollTo(0, 0); } catch { /* cross-origin safe */ } }}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/261032780539053"
      style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      scrolling="no"
    />
  );
}

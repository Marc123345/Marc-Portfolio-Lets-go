"use client";

import { useEffect, useRef } from 'react';

export default function AuditFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/261294575681063';
    el.appendChild(script);
    return () => { el.innerHTML = ''; };
  }, []);

  return <div ref={containerRef} />;
}

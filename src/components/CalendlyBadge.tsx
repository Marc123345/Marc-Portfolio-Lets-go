'use client';

import { useEffect } from 'react';
import { CALENDLY_LINK } from '@/lib/constants';

type CalendlyGlobal = {
  initBadgeWidget: (opts: Record<string, unknown>) => void;
  initPopupWidget: (opts: { url: string }) => void;
};

export function openCalendlyPopup(e?: React.MouseEvent) {
  const Calendly = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
  if (Calendly?.initPopupWidget) {
    e?.preventDefault();
    Calendly.initPopupWidget({ url: CALENDLY_LINK });
    return;
  }
  // Calendly widget hasn't loaded, let the anchor's href take over (opens in new tab).
}

export default function CalendlyBadge() {
  useEffect(() => {
    const linkId = 'calendly-widget-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const initBadge = () => {
      const Calendly = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
      if (document.querySelector('.calendly-badge-widget')) return;
      Calendly?.initBadgeWidget({
        url: CALENDLY_LINK,
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: false,
      });
    };

    const scriptId = 'calendly-widget-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initBadge;
      document.body.appendChild(script);
    } else {
      initBadge();
    }
  }, []);

  return null;
}

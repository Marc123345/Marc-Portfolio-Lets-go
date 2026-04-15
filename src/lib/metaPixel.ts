const META_PIXEL_ID = '1612974989906035';
const SCRIPT_ID = 'meta-pixel-script';
const NOSCRIPT_ID = 'meta-pixel-noscript';

let initialized = false;

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function initMetaPixel() {
  if (initialized || typeof window === 'undefined') return;

  const f = window;
  const b = document;

  if (f.fbq) return;

  const n: any = (f.fbq = function (...args: any[]) {
    if (n.callMethod) {
      n.callMethod.apply(n, args);
    } else {
      n.queue.push(args);
    }
  });

  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];

  const t = b.createElement('script');
  t.async = true;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  t.id = SCRIPT_ID;
  const s = b.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(t, s);

  const img = b.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
  img.id = NOSCRIPT_ID;
  b.body.appendChild(img);

  f.fbq('init', META_PIXEL_ID);
  f.fbq('track', 'PageView');

  initialized = true;
}

export function removeMetaPixel() {
  if (typeof window === 'undefined') return;

  const script = document.getElementById(SCRIPT_ID);
  if (script) script.remove();

  const noscript = document.getElementById(NOSCRIPT_ID);
  if (noscript) noscript.remove();

  delete window.fbq;
  delete window._fbq;

  initialized = false;
}

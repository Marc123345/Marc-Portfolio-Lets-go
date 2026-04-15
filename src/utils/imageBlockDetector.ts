export function detectImageBlocking() {
  if (typeof window === 'undefined') return;

  setTimeout(() => {
    const images = document.querySelectorAll('img');
    const blockedImages: HTMLImageElement[] = [];
    const suspiciousAttributes = ['data-autoblocked', 'data-src'];

    images.forEach((img) => {
      const isBlocked = suspiciousAttributes.some(attr => img.hasAttribute(attr));

      if (isBlocked || (img.src && img.complete && img.naturalHeight === 0)) {
        blockedImages.push(img);
      }
    });

    if (blockedImages.length > 0) {
      console.warn(
        `%c⚠️ Image Blocking Detected`,
        'color: #ff6b6b; font-size: 16px; font-weight: bold;',
        `\n\n${blockedImages.length} image(s) appear to be blocked by a browser extension or content blocker.\n\n` +
        `Common causes:\n` +
        `• uBlock Origin, AdBlock Plus, or similar ad blockers\n` +
        `• Privacy Badger or privacy-focused browser extensions\n` +
        `• Brave browser shields\n` +
        `• Corporate firewall or network filtering\n\n` +
        `Solutions:\n` +
        `1. Disable ad/content blockers for this site\n` +
        `2. Whitelist ik.imagekit.io in your blocker settings\n` +
        `3. Try a different browser or incognito mode\n\n` +
        `Affected images:`,
        blockedImages.map(img => ({
          src: img.getAttribute('src') || img.getAttribute('data-src'),
          alt: img.alt,
          blocked: img.hasAttribute('data-autoblocked')
        }))
      );
    }
  }, 2000);
}

export function setupImageErrorHandling() {
  if (typeof window === 'undefined') return;

  document.addEventListener('error', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const img = target as HTMLImageElement;
      console.error('Image failed to load:', {
        src: img.src,
        alt: img.alt,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight
      });
    }
  }, true);
}

import Script from 'next/script';

/**
 * DesignRush agency reviews widget. The external script hydrates the
 * [data-designrush-widget] div. Loaded afterInteractive (below the fold) so it
 * doesn't affect LCP. designrush.com is allowlisted in public/_headers CSP.
 */
export default function DesignRushReviews() {
  return (
    <section
      aria-label="DesignRush reviews"
      className="bg-black border-t border-white/10 py-24 md:py-32 px-6 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-8 text-center">
, Verified Reviews
        </p>
        {/* overflow-x-auto so the third-party widget scrolls instead of
            getting cut off / forcing horizontal page scroll on mobile. */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            data-designrush-widget=""
            data-agency-id="93754"
            data-style="dark"
            aria-label="DesignRush agency reviews section"
          />
        </div>
        <noscript>
          <p className="text-center">
            <a
              href="https://www.designrush.com/agency/profile/marc-friedman-design-agency#reviews"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Marc Friedman Design Agency reviews on DesignRush"
              className="text-[#A3D1FF] hover:underline"
            >
              REVIEW US ON DESIGNRUSH
            </a>
          </p>
        </noscript>
      </div>
      <Script
        src="https://www.designrush.com/topbest/js/widgets/agency-reviews.js"
        strategy="afterInteractive"
      />
    </section>
  );
}

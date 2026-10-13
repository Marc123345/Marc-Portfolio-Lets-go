"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, MousePointer2 } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function AntiDesignTextureNostalgiaPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Anti-Design, Texture and Nostalgia: The Expressive End of Web Design in 2026",
    "description":
      "Why the expressive end of web design is pushing back against clean templates: anti-design, grain and paper textures, a warmer kind of nostalgia, and the return of custom cursors. Plus where these belong, and where they really don't.",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-14T09:00:00+00:00",
    "dateModified": "2026-10-14T09:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": "Marc Friedman",
      "url": "https://www.marcfriedmanportfolio.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marc Friedman Design & Development",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.marcfriedmanportfolio.com/apple-touch-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.marcfriedmanportfolio.com/blog/anti-design-texture-nostalgia-2026"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is anti-design in web design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anti-design is a deliberate rejection of the tidy, grid-locked look of template websites. It uses broken grids, clashing type, off-kilter spacing, raw textures and visible imperfection to make a site feel made by a person rather than assembled from a kit."
        }
      },
      {
        "@type": "Question",
        "name": "Are custom cursors bad for usability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They can be. A custom cursor is safe when it keeps the hotspot where the user expects it, falls back to the system cursor on touch devices and text fields, and respects reduced-motion settings. Cursors that lag behind the pointer or hide the native one entirely tend to frustrate people."
        }
      },
      {
        "@type": "Question",
        "name": "Should a business website use anti-design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually not wholesale. Anti-design suits portfolios, studios, fashion, music and culture brands where personality is the product. A contractor, clinic or B2B service site is better off borrowing one element, such as a texture or a typeface, while keeping navigation, contact details and forms completely conventional."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[#A3D1FF] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Anti-Design, Texture and Nostalgia: The Expressive End of Web Design in 2026
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>October 14, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80"
              alt="A desk of vintage computers, a handheld games console and cassette tapes lit in pink and blue."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>Spend an evening on Awwwards and then an evening clicking through small business sites, and the two halves of the web barely look related. One half is grain, odd crops, type set far too large and cursors that turn into little blobs. The other half is a hero photo, a centered headline, three icon cards and a blue button. Both are deliberate. They are built for different jobs.</p>

            <p>This post is about the first half, the expressive end, and why it is pushing back so hard against the second. It covers anti-design, the return of texture, a softer kind of nostalgia, and custom cursors. It also covers where I would use each one and where I would leave them out, because I build for both halves: portfolio and studio work on one side, <a href="/blog/paving-contractor-website-design-guide">paving</a> and roofing contractors on the other.</p>

            <h2>Why the pushback is happening now</h2>

            <p>Templates got good. Page builders, UI kits and now AI site generators all produce something competent in minutes, and competent looks the same everywhere. When every site has the same rounded cards and the same gradient blob behind the same sans-serif headline, looking competent stops telling a visitor anything about who made the site.</p>

            <p>So designers who need to be remembered, rather than merely trusted, have started breaking things on purpose. The <a href="https://wannathis.one/blog/web-design-trends-2026" target="_blank" rel="noopener noreferrer">Wannathis 2026 trends roundup</a> calls anti-design a major movement, built on unusual proportions, off-kilter spacing, raw textures and broken grid lines. <a href="https://www.ionos.com/digitalguide/websites/web-design/webdesign-trends/" target="_blank" rel="noopener noreferrer">IONOS</a> puts nostalgic design and custom cursors on its 2026 list too. Neither source thinks this is the whole web. It is the end of the spectrum where personality is the product.</p>

            <h2>Anti-design, done on purpose</h2>

            <p>Anti-design gets mistaken for &ldquo;no design.&rdquo; It is closer to the opposite. To break a grid convincingly you need to know exactly where the grid is, because the break only reads as intentional when everything around it is under control.</p>

            <p>The moves that show up most:</p>

            <ul>
              <li><strong>Broken grids.</strong> An image that bleeds past its column, a headline that overlaps the photo below it, a section that starts at an odd offset.</li>
              <li><strong>Type that fights.</strong> A heavy grotesk next to a fine serif, mixed sizes inside one sentence, words rotated or stacked.</li>
              <li><strong>Unbalanced space.</strong> Huge gaps in one place, cramped clusters in another, so the eye is pushed around rather than guided gently.</li>
              <li><strong>Visible construction.</strong> Exposed borders, raw HTML-looking links, default system fonts used as a choice rather than a fallback.</li>
            </ul>

            <p>I wrote about the harder-edged version of this in <a href="/blog/brutalism-anti-design-web-trends">Brutalism &amp; Anti-Design</a>, and about its blockier, high-contrast cousin in the <a href="/blog/neo-brutalism-design-guide">neo brutalism guide</a>. What has changed in 2026 is the mood. The raw, confrontational look of a few years ago has softened. The rule-breaking is still there, but it is warmer, more handmade, less shouty.</p>

            <p>One rule I hold myself to: break the layout, never the interaction. A headline can overlap a photo. A navigation menu cannot be hard to find. Links still need to look clickable, focus states still need to be visible, and body text still needs to hit WCAG contrast. The chaos is for the eye, not for the hand.</p>

            <h2>Texture is back</h2>

            <p>Flat design scrubbed the web clean. Ten years on, a lot of designers miss the surface. Grain, paper, halftone dots, risograph-style misregistration, scanned scraps and photocopied edges are all back, and they do something flat color can&rsquo;t: they make a screen feel like it has material to it.</p>

            <p>My own site does this in a small way. The hero sections sit on an SVG noise layer that you mostly feel rather than see. It costs almost nothing, because it is generated in the browser rather than shipped as an image:</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">A grain overlay in a few lines</h4>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`.grain::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;          /* never block clicks */
  opacity: 0.08;                 /* felt, not seen */
  background-image: url("data:image/svg+xml,\\
    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>\\
      <filter id='n'><feTurbulence type='fractalNoise'\\
        baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter>\\
      <rect width='100%' height='100%' filter='url(%23n)'/>\\
    </svg>");
}`}
              </pre>
              <p className="text-gray-300 mt-4">No image request, a tile that repeats seamlessly, and an opacity low enough that text contrast is unaffected. Animating the grain looks lovely and costs real battery on phones, so I leave it static.</p>
            </div>

            <p>Two cautions. Texture sitting behind body copy lowers effective contrast even when a checker says the colors pass, so keep it out from under paragraphs or keep it very faint. And big photographic textures are heavy. A 2MB paper scan on every section will undo whatever goodwill the texture bought you. I wrote more about that trade in <a href="/blog/ui-polish-visual-realism">UI Polish: Mastering Visual Realism</a>.</p>

            <h2>Nostalgia, warm rather than literal</h2>

            <p>IONOS describes the current nostalgia wave as reviving 90s and Y2K styles. In practice, the best of it doesn&rsquo;t revive anything literally. Nobody serious is bringing back spacer GIFs, visitor counters and table layouts. What comes back is the feeling: the warmth of an old operating system, the chunky confidence of a bitmap font, the slightly faded color of a printed photo, the pleasure of a site that feels like a place rather than a funnel.</p>

            <p>The useful version borrows texture and attitude and keeps modern behavior underneath. A window-chrome frame around a case study, built with real responsive CSS. A pixel font for labels, with a readable face for everything you actually need to read. A dithered image treatment applied to photos that still load as optimized WebP or AVIF. Retro on the surface, current under the hood.</p>

            <p>That distinction matters because nostalgia ages quickly when it is copied rather than interpreted. A pastiche of a 2003 site looks like a joke within a year. A site that feels warm and slightly old-fashioned, without quoting any particular year, can last.</p>

            <h2>Custom cursors are returning</h2>

            <p>IONOS notes that custom cursors, both static icons and animated effects, are making a comeback. On portfolio sites they never really left. A dot that grows over links, a cursor that turns into a &ldquo;View&rdquo; label over project thumbnails, a small trail: it is one of the cheapest ways to make a site feel handled with care.</p>

            <p>It is also the easiest of these trends to get wrong. Some designers would happily see gimmicky cursors disappear, and I understand why. A cursor that lags behind the real pointer, hides the native one, or sticks around on a phone where there is no cursor at all is just friction with a nice animation.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <MousePointer2 className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Rules I use for custom cursors
              </h4>
              <ul className="text-gray-300 space-y-2 list-disc pl-5">
                <li>Only enable it on <code>(hover: hover) and (pointer: fine)</code>. Touch devices get nothing.</li>
                <li>Keep the hotspot exactly where the real pointer is. Easing and trails go on a decorative follower, never on the thing that clicks.</li>
                <li>Hand back the system cursor over text inputs, selectable text and anything inside a form.</li>
                <li>Under <code>prefers-reduced-motion: reduce</code>, drop the trail and the morphing. A static custom shape is fine.</li>
                <li>Update position with <code>transform</code> inside <code>requestAnimationFrame</code>, not by setting <code>top</code> and <code>left</code> on every mouse event.</li>
              </ul>
            </div>

            <h2>Where this belongs, and where it doesn&rsquo;t</h2>

            <p>This is the Awwwards end of the spectrum. It fits portfolios, studios, agencies, fashion, music, galleries, restaurants with a strong point of view, and personal projects. In all of those, the site is part of the product, and being remembered is worth some friction.</p>

            <p>It does not fit a roofing contractor. Someone with water coming through the ceiling wants a phone number, proof the company is licensed and local, photos of real jobs and a form that works on their phone. A broken grid between them and the call button costs the business money. The same goes for most clinics, law firms, trades and B2B service companies. Their visitors are trying to get a task done, and the site&rsquo;s job is to get out of the way.</p>

            <p>That doesn&rsquo;t mean those sites have to be bland. A conventional business site can borrow one element: a faint paper texture behind the testimonials, a characterful display face for headings, a warmer palette. One borrowed element gives it personality. Five turns it into a portfolio piece the owner never asked for.</p>

            <p>A quick test I use before reaching for any of this: if a first-time visitor needed to do one thing on this page within ten seconds, would the expressive choice help or slow them down? On a portfolio, &ldquo;remember who made this&rdquo; is often that one thing. On a contractor site, it is &ldquo;call now.&rdquo;</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>What is anti-design in web design?</strong><br />A deliberate rejection of the tidy, grid-locked template look. It uses broken grids, clashing type, off-kilter spacing, raw textures and visible imperfection so the site feels made by a person.</p>

            <p><strong>Are custom cursors bad for usability?</strong><br />They can be. Keep the hotspot where users expect it, fall back to the system cursor on touch devices and in text fields, and respect reduced-motion settings. Laggy cursors and hidden native pointers are the usual problems.</p>

            <p><strong>Should a business website use anti-design?</strong><br />Usually not wholesale. Borrow one element, like a texture or a typeface, and keep navigation, contact details and forms conventional.</p>

            <p><strong>Is the 2026 nostalgia trend about copying old websites?</strong><br />No. The version that works borrows warmth and texture from older interfaces and keeps modern, responsive, fast code underneath.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Want a site with more personality?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Tell me what you&rsquo;re building and who it&rsquo;s for. I&rsquo;ll tell you honestly how far toward the expressive end it can go before it starts costing you leads.
            </p>
            <ContactForm />
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=2000&q=80"
                    alt="Microinteractions, Motion and 3D"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Microinteractions, Motion and 3D</h4>
                  <p className="text-white text-sm mb-4">How to use motion and depth without making visitors wait for them.</p>
                  <button
                    onClick={() => router.push('/blog/microinteractions-motion-3d-2026')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80"
                    alt="Brutalism & Anti-Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Brutalism &amp; Anti-Design</h4>
                  <p className="text-white text-sm mb-4">The raw, unpolished side of web design and where it came from.</p>
                  <button
                    onClick={() => router.push('/blog/brutalism-anti-design-web-trends')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

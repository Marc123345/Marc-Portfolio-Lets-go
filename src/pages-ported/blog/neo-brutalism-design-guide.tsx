"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function NeoBrutalismGuidePage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Neo Brutalism in Modern Design: A Complete Guide for Bold, High-Contrast Interfaces",
    "description":
      "What neo brutalism is, where it came from, its core visual traits (color, contrast, shapes, hard shadows, thick borders), typography, accessibility, practical UI guidelines, real-world examples, and when to use it.",
    "image": "https://images.surferseo.art/b10bf764-d10c-46ca-8e7a-5d5e4680d88b.png",
    "datePublished": "2026-07-16T12:00:00+00:00",
    "dateModified": "2026-07-16T12:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/neo-brutalism-design-guide"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

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
            Neo Brutalism in Modern Design: A Complete Guide for Bold, High-Contrast Interfaces
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>July 16, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.surferseo.art/b10bf764-d10c-46ca-8e7a-5d5e4680d88b.png"
              alt="An abstract composition of colorful geometric blocks with hard shadows against a bright background, embodying the neobrutalist aesthetic of bold shapes and high-contrast color"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>Neo brutalism is reshaping how designers create interfaces, landing pages, and brand experiences. Here&rsquo;s what the style is, where it came from, and how to use it well.</p>

            <h2>Neo brutalism explained in 5 minutes</h2>
            <p>Neo brutalism is a contemporary architectural and design movement that has grown popular in web design and branding over the last few years. At its core, the UI style leans on high contrast and bold colors, thick borders and solid outlines, and hard, offset drop shadows instead of soft ones. It often folds in retro, deliberately &ldquo;unpolished&rdquo; touches drawn from 90s interfaces and pixel-art aesthetics.</p>
            <p>It&rsquo;s a modern evolution of 1950s&ndash;1970s brutalist architecture, now applied to digital design, landing pages, and product interfaces. The neobrutalist aesthetic stands apart from the polished, gradient-heavy SaaS interfaces that dominate the market.</p>
            <p><strong>What it looks like at a glance:</strong></p>
            <ul>
              <li><strong>Gumroad (2021+):</strong> bright accent colors, thick black outlines, flat card layouts.</li>
              <li><strong>Figma marketing pages:</strong> illustration-heavy hero sections with bold geometric shapes and high-contrast color.</li>
              <li><strong>Feastables:</strong> playful product blocks with oversized typography and vivid fills.</li>
            </ul>
            <p>Why now? Neobrutalist sites load fast thanks to lightweight design (flat CSS, minimal imagery), and the raw look cuts through visual noise. Designers fatigued by uniform minimalism are reaching for neo brutalism for creative freedom and bold expression.</p>

            <h2>From brutalism to neo brutalism: origins and evolution</h2>
            <p>Traditional <a href="https://en.wikipedia.org/wiki/Brutalist_architecture">Brutalism is synonymous with béton brut, or raw concrete</a>. Born in post-war Europe during the 1950s&ndash;70s, brutalist architecture focused on quick, functional public infrastructure. Le Corbusier and the Smithsons used exposed structure and massive form to make buildings honest about their materials. Both neo-brutalism and traditional Brutalism share that commitment to massive form and structural integrity.</p>
            <p>In the mid-2000s to early 2010s, web designers brought the philosophy online. Early brutalist sites used plain HTML, minimal CSS, system fonts, and intentionally harsh layouts, think the Drudge Report or raw artist portfolios with almost no polish. Both styles put function ahead of ornament.</p>
            <p>Neo brutalism updates that mid-century Brutalism with modern technology. Where brutalism reads raw and unfinished, neobrutalism combines it with colorful, structured, playful elements. It uses selective honesty, concealing the technology behind raw materials while keeping the interface usable.</p>
            <p><strong>Brutalism vs. neo brutalism:</strong></p>
            <ul>
              <li><strong>Color:</strong> brutalism is monochrome or severely limited; neo brutalism uses bright, saturated accents.</li>
              <li><strong>Typography:</strong> brutalism leans on system fonts; neo brutalism uses bold type with intentional weight and hierarchy.</li>
              <li><strong>Usability:</strong> brutalism often ignores UX conventions; neo brutalism preserves clear search, navigation, and structure.</li>
              <li><strong>Mood:</strong> brutalism feels austere; neo brutalism feels energetic and playful.</li>
            </ul>
            <p>Nostalgia for Windows 98 dialogs, early web banners, and default browser chrome feeds straight into today&rsquo;s neobrutalist style.</p>

            <h2>Core visual characteristics: color, contrast, shapes, shadows</h2>
            <p>The visual language is built from a small set of elements used aggressively. Neobrutalism pairs saturated primaries, neon green (#39FF14), electric blue (#0066FF), hot pink (#FF69B4), against black or white, with flat fills and zero gradients.</p>
            <p>Bold geometric shapes define the layout. Big rectangles, circles, and angular panels feel like construction blocks stacked on the page, giving the style its graphic, poster-like energy. Sharp edges and solid lines reinforce the structural feel.</p>
            <p>Drop shadows create depth through stark contrast rather than realism: typically offset 4&ndash;12px with zero blur, producing a sticker-like, cut-out effect in pure black. That&rsquo;s what separates these stark shadows from the soft, ambient effects in other styles.</p>
            <p>Thick borders (2&ndash;6px solid outlines) wrap cards, buttons, and images so every element feels like a distinct piece on the canvas, replacing the subtle dividers of minimalist UI.</p>
            <p>In its architectural form, neo-brutalist buildings feature smoother finishes and warmer tones than traditional brutalism, materials like corten steel and high-performance glass, warm interior surfaces, extensive glazing, and energy-efficient, eco-friendly construction.</p>

            <img
              src="https://images.surferseo.art/43000322-bee1-414c-95e7-048bbd85a901.png"
              alt="A grid of bold colored rectangular blocks, each casting a hard black drop shadow, exemplifying neobrutalism's bold geometric shapes and high-contrast color"
            />

            <h2>Typography and layout</h2>
            <p>Neobrutalism uses oversized, expressive typography as a primary tool for hierarchy. Headings usually run 700&ndash;900 weight at 2&ndash;3× the body size, creating a clear focal point on every screen. Monospace fonts and quirky grotesks are common for display.</p>
            <p><strong>Font pairings for a neo brutalist landing page:</strong></p>
            <ul>
              <li><strong>Display:</strong> Space Grotesk, Satoshi, or Space Mono.</li>
              <li><strong>Body:</strong> Inter, Roboto, or IBM Plex Sans.</li>
            </ul>
            <p>Pair bold headlines with clean, neutral body fonts to keep long-form content legible. Hold body text to 60&ndash;80 characters per line with generous line spacing to offset the visual weight of thick borders.</p>
            <p>Layout is grid-based but deliberately imperfect, elements may break the grid, overlap, or sit slightly misaligned for intentional tension. Despite the raw look, keep 24&ndash;32px margins so components have room to breathe and pages stay scannable.</p>
            <p><strong>Hierarchy guidelines:</strong></p>
            <ul>
              <li>Headings: 36&ndash;48px for H1, 24&ndash;32px for H2.</li>
              <li>Body: 16&ndash;18px.</li>
              <li>Consistent alignment for primary buttons and clear calls to action.</li>
              <li>An 8px spacing scale to keep the raw look intentional.</li>
            </ul>

            <h2>Neo brutalism vs. other modern styles</h2>
            <p><strong>vs. classic brutalism:</strong> classic brutalism uses monochrome palettes, unstyled elements, and often sacrifices usability. Neo-brutalism blends that raw aesthetic with polish, adding color, hierarchy, and structure, contrasting traditional aesthetics with contemporary expectations.</p>
            <p><strong>vs. minimalism:</strong> minimalism chases simplicity; neobrutalism chases boldness. Where minimalism retreats into negative space and muted tones, neo brutalism fills the canvas with hard shadows, thick borders, and striking color contrast.</p>
            <p><strong>vs. neumorphism:</strong> neumorphism relies on soft inner shadows and subtle depth, and often fails accessibility due to low contrast. Neo brutalism&rsquo;s high contrast and visible controls make interactive elements far easier to recognize.</p>
            <p><strong>vs. glassmorphism:</strong> <a href="https://neubrutalism.com/">glassmorphism</a> aims for translucent elegance; neo brutalism aims for flat, graphic, poster-like impact. One whispers, the other shouts.</p>
            <p>Neo-brutalism favors artistic expression, which makes it ideal for brands that want their personality to come through immediately, with visual impact calmer approaches can&rsquo;t match.</p>

            <h2>Accessibility, contrast, and usability</h2>
            <p>High contrast is the point, but it still has to meet WCAG 2.2. Keep a contrast ratio of at least <strong>4.5:1 for body text</strong> and <strong>3:1 for large text and UI elements</strong>. Research shows roughly <a href="https://arxiv.org/abs/2602.24067">40.9% of foreground/background color pairs across popular sites fail WCAG AA</a>, so test deliberately rather than assuming bright equals readable.</p>
            <p><strong>Color pairs to avoid:</strong></p>
            <ul>
              <li>Neon yellow (#FFFF00) on white → fails contrast badly.</li>
              <li>Cyan on bright green → nearly invisible for color-blind users.</li>
            </ul>
            <p><strong>Accessible alternatives:</strong></p>
            <ul>
              <li>Yellow on near-black (#1A1A00) → contrast ratio ~18:1.</li>
              <li>Cyan on deep navy (#001F3F) → strong readability.</li>
            </ul>
            <p>Use <a href="https://webaim.org/resources/contrastchecker/">WebAIM&rsquo;s contrast checker</a> during handoff, and run automated accessibility checks and color-blind simulations before launch.</p>
            <p><strong>Readability checklist:</strong></p>
            <ul>
              <li>Avoid decorative fonts for body text; use readable typefaces.</li>
              <li>Keep line length at 60&ndash;80 characters.</li>
              <li>Use 1.5&ndash;1.75× line spacing to offset heavy borders.</li>
              <li>Test interactive elements for recognizability on hover and focus.</li>
              <li>Make button shapes and outlines clearly communicate clickability, even inside a heavily bordered layout.</li>
            </ul>
            <p>These principles apply on desktop and on smaller mobile screens alike.</p>

            <h2>Designing with neo brutalism: practical UI guidelines</h2>
            <p><strong>Step 1 &mdash; Color palette.</strong> Use 2&ndash;3 bold colors plus black and white for structure. Test every accent against its background for contrast before committing, and limit where accents appear so they don&rsquo;t overwhelm.</p>
            <p><strong>Step 2 &mdash; Borders and shadows.</strong> Apply thick borders consistently: 3&ndash;4px for primary components, 2px for secondary. Use drop shadows at 6&ndash;8px offset with zero blur. Document them as CSS tokens:</p>
            <ul>
              <li><code>border: 3px solid #000</code></li>
              <li><code>box-shadow: 6px 6px 0px #000</code></li>
              <li><code>border-radius: 0</code></li>
            </ul>
            <p><strong>Step 3 &mdash; Spacing.</strong> Use an 8px scale. Cards get 24&ndash;32px padding; sections get 48&ndash;64px vertical margins, so elements breathe despite their visual weight.</p>
            <p><strong>Step 4 &mdash; Geometric illustration.</strong> Use simple shapes as decoration: flat circles, squares, and thick lines for icons, charts, or accent blocks. Skip complex 3D artwork.</p>
            <p><strong>Step 5 &mdash; Interactive states.</strong> Shift a button&rsquo;s shadow on hover (say, from 6px to 2px offset) to simulate a &ldquo;press&rdquo; while keeping the neobrutalist look.</p>
            <p>Neo-brutalism, in architecture, leans toward bespoke residential and high-end commercial work, and the same bespoke thinking fits digital design: every component should feel intentionally crafted, not templated.</p>
            <blockquote>
              <p>For a pricing card: 3px black border, 24px padding, 6px hard shadow, and one vivid accent color for the CTA button.</p>
            </blockquote>

            <img
              src="https://images.surferseo.art/07b86851-0577-4edb-b984-95c6402f8b1a.png"
              alt="A colorful arrangement of bold geometric shapes, circles and rectangles with thick black outlines on a white background, showing neobrutalism's solid lines and high-contrast color"
            />

            <h2>Real-world examples and use cases</h2>
            <p>Gumroad uses neobrutalism, bold colors and thick outlines, across its marketing and product pages. The layout is simple and scannable, relying on flat card blocks with hard shadows for impact.</p>
            <p>Feastables runs bright colors and big type in playful product blocks that grab attention instantly. Figma&rsquo;s brand refresh shows the principles at work through illustration-heavy sections with high contrast and strong hierarchy.</p>
            <p>Halo Lab&rsquo;s &ldquo;Look Beyond Limits&rdquo; pushes display type to extreme sizes for drama. The style is popular for portfolios and creative agencies, where independent makers use thick borders, hand-drawn icons, and raw type to signal creative freedom.</p>
            <p>Because it builds a strong, striking brand identity, most adoption happens on marketing pages, campaign microsites, hero sections, and onboarding, rather than dense data dashboards. It works best where memorable, high-impact experiences matter most.</p>

            <h2>When neo brutalism is the right choice (and when it isn&rsquo;t)</h2>
            <p>It works best for early-stage startups, creative tools, design-led brands, and campaigns where standing out matters, especially for audiences that value bold visuals and personality.</p>
            <p>But bold visuals can overwhelm if overused, and the style can feel too aggressive for elegant brands. Financial dashboards, medical interfaces, and products for broad or sensitive audiences usually need calmer, more familiar treatments, the cognitive load of heavy borders and bright color on every screen adds up.</p>
            <p><strong>Partial adoption:</strong> use neo brutalist panels, hero sections, or illustrations on marketing pages while keeping core workflows closer to minimalism. You capture attention where it counts without raising cognitive load in dense flows.</p>
            <p><strong>Decision checklist:</strong></p>
            <ul>
              <li>Does your audience expect boldness or calm?</li>
              <li>Is the information density low enough to handle heavy visual treatment?</li>
              <li>Do your accessibility standards still hold with this palette?</li>
              <li>Does the brand&rsquo;s personality align with raw, graphic energy?</li>
            </ul>
            <p>Success comes down to matching the style to context. Try it on a single landing page before rolling it out across a whole product.</p>

            <h2>Summary and implementation checklist</h2>
            <p>Neo brutalism draws on mid-century brutalist architecture and applies it to modern UI/UX and graphic design, defined by high contrast, bright colors, bold geometric shapes, oversized typography, and stark drop shadows.</p>
            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-3">Quick-start checklist</h4>
              <ul className="text-gray-300 space-y-1 mb-0">
                <li>☐ Set palette: 2&ndash;3 vivid accents + black + white</li>
                <li>☐ Choose fonts: bold display + clean body</li>
                <li>☐ Define borders: 3&ndash;4px solid, radius 0</li>
                <li>☐ Set shadows: 6&ndash;8px offset, 0 blur</li>
                <li>☐ Test all contrast ratios (4.5:1 minimum for text)</li>
                <li>☐ Verify hover/focus states on every interactive element</li>
                <li>☐ Document tokens in a reusable neo brutalist style guide</li>
              </ul>
            </div>
            <p>Start small. Apply the style to one landing page or marketing banner, measure how your audience responds, and iterate from there.</p>
          </div>

          {/* Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Want a bold, on-brand site that still converts?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Neo brutalist or minimal, custom-built in React &amp; Next.js, fast, accessible, and designed around your goals. Tell me what you&rsquo;re building.
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
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80"
                    alt="Brutalism & Anti-Design Web Trends"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Brutalism &amp; Anti-Design Web Trends</h4>
                  <p className="text-white text-sm mb-4">Where the raw, anti-polish web movement came from and how to use it without breaking UX.</p>
                  <button
                    onClick={() => router.push('/blog/brutalism-anti-design-web-trends')}
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
                    src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=2000&q=80"
                    alt="Contrast & Balance in UI Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Contrast &amp; Balance in UI Design</h4>
                  <p className="text-white text-sm mb-4">How to wield contrast for hierarchy and impact without wrecking readability.</p>
                  <button
                    onClick={() => router.push('/blog/contrast-balance-ui-design')}
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

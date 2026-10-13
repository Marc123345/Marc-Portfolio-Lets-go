"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Palette } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function BoldTypographyEarthyPalettesPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Bold Typography and Earthy Palettes: The Visual Throughline of 2026 Web Design",
    "description":
      "Oversized type and earth-toned color palettes are the common thread across 2026 web design. How to set display type that scales, build a clay, stone and sage palette that passes contrast, and pick a font that actually says something.",
    "image": "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-14T11:00:00+00:00",
    "dateModified": "2026-10-14T11:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/bold-typography-earthy-palettes-2026"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are earthy color palettes in web design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Palettes built from natural, mineral colors: terracotta and clay reds, ochre and mustard yellows, sage and olive greens, stone greys and warm off-whites like unbleached paper. They feel calmer and warmer than the saturated tech blues and purples of the last decade."
        }
      },
      {
        "@type": "Question",
        "name": "How big should headline text be on a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no fixed size, but oversized display type in 2026 often reaches 6 to 10rem on large screens. Use CSS clamp() so it scales down smoothly on phones, tighten line height and letter spacing as size increases, and keep body text at a comfortable 16 to 20px."
        }
      },
      {
        "@type": "Question",
        "name": "Do earthy colors pass accessibility contrast checks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some do and some don't. Deep clay, olive and stone shades usually pass WCAG AA against a cream background. Lighter ochres and sages often fail for body text, so reserve them for large display type, backgrounds and decorative surfaces."
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
            Bold Typography and Earthy Palettes: The Visual Throughline of 2026 Web Design
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>October 14, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=2000&q=80"
              alt="Clay-covered hands shaping a dark earthenware pot on a spinning potter's wheel."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>Read enough 2026 trend roundups and the specific trends start to blur, but two things come up in nearly all of them. Type got much bigger, and color got much browner. <a href="https://www.wearetg.com/?p=14146" target="_blank" rel="noopener noreferrer">TG&rsquo;s 2026 guide</a> puts earth-toned palettes and oversized typography at the top of the year&rsquo;s leading trends. <a href="https://www.ionos.com/digitalguide/websites/web-design/webdesign-trends/" target="_blank" rel="noopener noreferrer">IONOS</a> has bold typography on its list as well. Whether a site leans expressive or corporate, those two choices are the common visual thread.</p>

            <p>They also happen to be the two trends I would most happily recommend to almost any client. Unlike a custom cursor or a 3D hero, a good typeface and a warm palette cost nothing in load time and don&rsquo;t get between a visitor and the phone number.</p>

            <h2>Why type got so big</h2>

            <p>Part of it is reaction. For years the default hero was a modest sans-serif headline sitting on a stock photo. Make the headline five times bigger, drop the photo, and suddenly the words are the image. That is cheaper, faster and more distinctive than any stock photo, and it forces you to write a headline worth looking at.</p>

            <p>Part of it is that browsers made it easy. Variable fonts give you every weight in one file, <code>clamp()</code> lets a headline scale smoothly from phone to desktop without a stack of breakpoints, and screens are sharp enough that huge, thin serifs actually look good.</p>

            <p>The headings on this site are a fair example: a serif set at weight 400, scaling with <code>clamp(2.75rem, 7.5vw, 6.5rem)</code>, with tight leading and slightly negative tracking. Nothing about it is clever. It is just big, and set carefully.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Oversized display type that survives a phone</h4>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`h1 {
  font-size: clamp(2.75rem, 7.5vw, 6.5rem); /* 44px floor, 104px ceiling */
  line-height: 0.9;          /* big type needs less leading */
  letter-spacing: -0.04em;   /* and tighter tracking */
  text-wrap: balance;        /* no lonely last word */
  overflow-wrap: anywhere;   /* long words can't push the page sideways */
}

p {
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.25rem);
  line-height: 1.6;
  max-width: 65ch;           /* readable measure */
}`}
              </pre>
              <p className="text-gray-300 mt-4">The floor in <code>clamp()</code> matters more than the ceiling. A headline that looks perfect at 1440px and wraps one word per line at 375px is the most common oversized-type bug I fix.</p>
            </div>

            <h2>Picking a font that says something</h2>

            <p>Bold, distinctive fonts are the other half of this trend, and &ldquo;distinctive&rdquo; is the important word. The goal is a typeface someone would recognize as yours if the logo were cropped off. A few directions are popular right now:</p>

            <ul>
              <li><strong>High-contrast serifs</strong> for display, which read as editorial and confident. Works well for studios, hospitality, professional services that want to feel considered.</li>
              <li><strong>Heavy, wide grotesks</strong> that fill the screen edge to edge. Good for product launches, sports and anything that wants to feel loud.</li>
              <li><strong>Soft, rounded or slightly quirky faces</strong> that feel friendly without being childish. Good for consumer brands and anything aimed at families.</li>
              <li><strong>Monospace</strong> for labels and metadata, which adds a technical, handmade feel in small doses.</li>
            </ul>

            <p>Pairing is simpler than it sounds: one display face with character, one quiet text face that is easy to read for long stretches. Two families is usually plenty. Self-host them, subset them to the characters you actually use, and set <code>font-display: swap</code> so text never waits on a font download.</p>

            <h2>Why color went earthy</h2>

            <p>The last decade of web color was heavily synthetic: electric blues, purple gradients, neon accents, the same SaaS palette on every startup site. Earth tones are the correction. <a href="https://fairwindcreative.com/blog/neo-naturalism-the-down-to-earth-graphic-design-trend-defining-2026/" target="_blank" rel="noopener noreferrer">Fairwind Creative</a> describes saturated synthetic colors fading in favor of mineral tones like terracotta, sage, ochre and unbleached paper white. Even Pantone&rsquo;s color of the year for 2026, Cloud Dancer, is a soft off-white rather than anything bright.</p>

            <p>Those colors feel calm and slightly analog. They suggest materials, like clay, stone, linen and wood, and they sit very naturally next to the texture and nostalgia trends I covered in <a href="/blog/anti-design-texture-nostalgia-2026">Anti-Design, Texture and Nostalgia</a>.</p>

            <p>They also suit businesses that work with real materials. Paving, landscaping, roofing, building, furniture, food: an earthy palette fits these trades in a way a neon gradient never will. It is one of the rare design trends I can apply directly to a contractor site without any hesitation.</p>

            <h2>Earth tones and contrast</h2>

            <p>The risk with an earthy palette is that a lot of earth colors sit in the middle of the brightness range, which is exactly where contrast fails. Beautiful sage text on a cream background is often unreadable. Here is a sample palette with real WCAG ratios against a warm off-white:</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 overflow-x-auto not-prose">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Palette className="w-5 h-5 text-[#A3D1FF] mr-2" />
                A sample earthy palette, checked against #F4EFE6
              </h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[#A3D1FF] pb-3 pr-4 font-semibold">Color</th>
                    <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Hex</th>
                    <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Contrast</th>
                    <th className="text-left text-gray-300 pb-3 font-semibold">Use it for</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white"><span className="inline-block w-3 h-3 mr-2 align-middle" style={{ background: '#2B2620' }} />Ink</td>
                    <td className="py-3 pr-4 font-mono">#2B2620</td>
                    <td className="py-3 pr-4">13.1:1</td>
                    <td className="py-3">Body text</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white"><span className="inline-block w-3 h-3 mr-2 align-middle" style={{ background: '#A8482F' }} />Clay</td>
                    <td className="py-3 pr-4 font-mono">#A8482F</td>
                    <td className="py-3 pr-4">5.1:1</td>
                    <td className="py-3">Buttons and links (white on clay is 5.8:1)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white"><span className="inline-block w-3 h-3 mr-2 align-middle" style={{ background: '#55603F' }} />Olive</td>
                    <td className="py-3 pr-4 font-mono">#55603F</td>
                    <td className="py-3 pr-4">5.9:1</td>
                    <td className="py-3">Secondary text, labels</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white"><span className="inline-block w-3 h-3 mr-2 align-middle" style={{ background: '#6B645A' }} />Stone</td>
                    <td className="py-3 pr-4 font-mono">#6B645A</td>
                    <td className="py-3 pr-4">5.1:1</td>
                    <td className="py-3">Captions, metadata</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white"><span className="inline-block w-3 h-3 mr-2 align-middle" style={{ background: '#7F8C6A' }} />Sage</td>
                    <td className="py-3 pr-4 font-mono">#7F8C6A</td>
                    <td className="py-3 pr-4">3.1:1</td>
                    <td className="py-3">Large display type and surfaces only</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white"><span className="inline-block w-3 h-3 mr-2 align-middle" style={{ background: '#C08A2E' }} />Ochre</td>
                    <td className="py-3 pr-4 font-mono">#C08A2E</td>
                    <td className="py-3 pr-4">2.7:1</td>
                    <td className="py-3">Backgrounds and accents, never text</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>WCAG AA needs 4.5:1 for body text and 3:1 for large text, so ink, clay, olive and stone can carry words, sage can carry a big headline, and ochre should never carry text at all. The fix for a failing earth tone is almost always to take it darker rather than to abandon it. A deeper ochre around <code>#8A5F14</code> gets to 4.9:1 and still reads as ochre.</p>

            <p>One more thing I&rsquo;d steal from the better 2026 sites: keep the base calm and earthy, then reserve a single stronger accent for the things people click. When everything is muted, the one saturated button is impossible to miss. That restraint does more for conversion than any shade choice. I go further into this balance in <a href="/blog/contrast-balance-ui-design">Contrast &amp; Balance</a>.</p>

            <h2>Putting the two together</h2>

            <p>Big type and earth tones reinforce each other. Oversized type gives a muted palette the energy it would otherwise lack, and a calm palette stops oversized type from feeling aggressive. A cream page, an ink-colored serif headline at 100px, one clay button: that is a complete, current look built from three decisions, with no images required above the fold.</p>

            <p>It is also a look that will age gently. Trends built on effects date fast. Trends built on type and color mostly just look like good taste a few years later.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>What are earthy color palettes in web design?</strong><br />Palettes built from natural, mineral colors: terracotta, ochre, sage, olive, stone and warm off-whites. They read calmer and warmer than the saturated tech palettes of the last decade.</p>

            <p><strong>How big should headline text be on a website?</strong><br />Oversized display type often reaches 6 to 10rem on large screens in 2026. Use <code>clamp()</code> so it scales down on phones, tighten leading and tracking as size goes up, and keep body text around 16 to 20px.</p>

            <p><strong>Do earthy colors pass accessibility contrast checks?</strong><br />Darker clay, olive and stone shades usually pass AA against cream. Lighter ochres and sages often fail for body text, so use them for large type and surfaces.</p>

            <p><strong>Do these trends work for small business websites?</strong><br />Yes, better than most trends. Type and color cost nothing in performance, and earth tones suit trades and service businesses that work with physical materials.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Thinking about a refresh?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              New type and a new palette can change how a site feels without a full rebuild. Tell me about your site and I&rsquo;ll tell you whether a visual refresh is enough, or whether the problems go deeper.
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
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80"
                    alt="Anti-Design, Texture and Nostalgia"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Anti-Design, Texture and Nostalgia</h4>
                  <p className="text-white text-sm mb-4">The expressive end of web design, and where it belongs.</p>
                  <button
                    onClick={() => router.push('/blog/anti-design-texture-nostalgia-2026')}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

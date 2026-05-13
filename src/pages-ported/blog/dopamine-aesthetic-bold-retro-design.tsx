"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Link, ArrowRight, Zap, Eye, Layers, Type } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import { useRouter } from 'next/navigation';

export default function DopamineAestheticPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The New 'Dopamine' Aesthetic: How Bold, Retro, Tactile Design Beats Samey Minimal SaaS",
    "description": "In 2026, bold color, retro nostalgia, and tactile UI is overtaking minimal SaaS design. Here's what the dopamine aesthetic is, why it works, and how to use it for service brands.",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-05-04T08:00:00+00:00",
    "dateModified": "2026-05-04T08:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": "Marc Friedman",
      "url": "https://marcfriedmanportfolio.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marc Friedman Design & Development",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marcfriedmanportfolio.com/apple-touch-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marcfriedmanportfolio.com/blog/dopamine-aesthetic-bold-retro-design"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[#A3D1FF] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <div className="flex flex-wrap gap-2 mb-4">
            {['Design', 'Branding', 'Web Design'].map((cat) => (
              <span key={cat} className="text-xs font-medium uppercase tracking-widest text-[#A3D1FF] border border-[#A3D1FF]/30 px-3 py-1">
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The New &ldquo;Dopamine&rdquo; Aesthetic: How Bold, Retro, Tactile Design Beats Samey Minimal SaaS
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>May 4, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80"
              alt="Bold, retro, dopamine aesthetic in web design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p className="text-xl text-gray-300 leading-relaxed">
              For years, the web has been dominated by the same look: pale backgrounds, soft gradients, rounded cards, polite blues, and the same hero layout you've seen a thousand times. It's clean and safe — but it's also invisible. In 2026, a new aesthetic is taking over. Think bold color, retro nostalgia, playful typography, and tactile interfaces that feel more like products than PDFs. If your site launched before 2022, you're probably missing at least three of these shifts — and your competitors are quietly using them to be remembered while you get scrolled past.
            </p>

            <h2>What Is the &ldquo;Dopamine&rdquo; Aesthetic?</h2>

            <p>The dopamine aesthetic is about creating tiny hits of delight and emotional engagement through design choices that feel vivid, human, and memorable. It's not about being loud for the sake of it. It's about building a branded emotional experience that hooks users in the first five seconds.</p>

            <p>Instead of the standard toolkit:</p>

            <ul>
              <li>Muted, pastel color palettes</li>
              <li>Safe sans-serif typography at polite sizes</li>
              <li>Generic icon sets everyone licenses from the same library</li>
              <li>Endless white cards with soft drop shadows</li>
            </ul>

            <p>You'll see:</p>

            <ul>
              <li><strong>Strong, saturated colors</strong> — and unexpected combinations that create visual energy</li>
              <li><strong>Retro and nostalgic references</strong> — 90s web, Y2K, 80s arcade, early print ads</li>
              <li><strong>Chunky, expressive typography</strong> — mixed with script or display faces at scale</li>
              <li><strong>Tactile textures and details</strong> — bevels, glossy buttons, stickers, scribbles, playful badges</li>
              <li><strong>Motion that feels physical</strong> — bounce, snap, &ldquo;springy&rdquo; transitions that reward interaction</li>
            </ul>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Zap className="w-5 h-5 text-[#A3D1FF] mr-2" />
                The Core Idea
              </h4>
              <p className="text-gray-300 mb-0">
                The dopamine aesthetic isn't a style. It's a strategic decision to create an emotional response in the first few seconds. When a user sees your site and thinks &ldquo;wait, that's interesting&rdquo; instead of &ldquo;looks fine,&rdquo; you've already won something most of your competitors haven't.
              </p>
            </div>

            <h2>Why Minimal SaaS Design Is Losing Its Edge</h2>

            <p>Minimal SaaS-style design became popular for real reasons. It communicates simplicity, professionalism, and focus. It converts well for products people already understand. But for service brands in 2026, it has three critical problems.</p>

            <h3>1. Everyone Looks the Same</h3>

            <p>When every agency, SaaS, and consultant uses the same layout, the same illustration style, and the same color palette, users forget who is who. If you stripped the logos off the five top competitors in your space, could anyone tell the sites apart? If not, you're competing purely on price and small copy differences — the most brutal possible battleground.</p>

            <p>The irony is that minimal design, designed to reduce cognitive load, has created a new cognitive load: the exhausting sameness of everything. Users now have to work <em>harder</em> to differentiate between options because the visual signals that used to do that work have been sanded away.</p>

            <h3>2. Emotion Is Missing</h3>

            <p>Service businesses sell trust, expertise, and transformation. These are deeply emotional purchases. Minimal layouts often strip away personality so aggressively that nothing emotional remains. The result: users &ldquo;understand&rdquo; what you do but don't feel anything about it. They leave with information but no impression.</p>

            <p>Compare that to a site that uses bold color, unexpected typography, and micro-interactions that feel playful and confident. The user walks away with a feeling — &ldquo;these people know what they're doing and they're not boring about it.&rdquo; That's the conversion engine minimal design ignores.</p>

            <h3>3. It Doesn't Match How People Actually Consume Content</h3>

            <p>Your users spend their time in apps full of motion, bold visuals, and highly stimulating feeds. TikTok, Instagram, YouTube Shorts — all of it. A flat, polite hero with one small CTA doesn't compete for attention against that training, especially on mobile. The dopamine aesthetic attempts to meet users where their visual expectations actually are, not where we'd like them to be.</p>

            <h2>Principles of the Dopamine Aesthetic (Without Killing UX)</h2>

            <p>You don't need to turn your site into a neon circus. The best dopamine-driven sites follow a handful of principles that keep them bold without becoming chaotic.</p>

            <h3>Anchor with a Strong Core Palette</h3>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Eye className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Color Rules That Work
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>Choose <strong>1–2 bold primary colors</strong> and 1–2 supporting neutrals — not five competing colors</li>
                <li>Use <strong>high contrast</strong> for CTAs, headings, and key sections; save the wild combinations for accents</li>
                <li>Reserve your most unexpected color combinations for small components: badges, pills, hover states</li>
                <li>Test your palette at full brightness on both dark and light backgrounds before committing</li>
              </ul>
            </div>

            <h3>Use Nostalgia with Intent</h3>

            <p>Pick a specific era or vibe — 90s web, 80s arcade, Y2K, early print ads — and let it influence your typography, shapes, and micro details. The mistake most brands make is being vaguely retro, which reads as a trend rather than a brand identity. The ones that work choose an era and commit: a specific typeface family, a specific set of decorative shapes, a consistent reference that ties everything together.</p>

            <p>Tie the nostalgia to your brand story where possible. An agency that talks about &ldquo;old-school craftsmanship with modern execution&rdquo; can lean into print-inspired layouts credibly. A tech consultancy can lean into early computer terminal aesthetics without it feeling arbitrary.</p>

            <h3>Make Interfaces Feel Touchable</h3>

            <p>This is the detail most brands miss when trying to apply the dopamine aesthetic. It's not just about color or typography — it's about tactility. Interfaces that feel physical create a subconscious sense that the product is real, solid, and worth trusting.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Layers className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Tactile CSS Techniques
              </h4>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`/* Pressable button — feels like it exists in physical space */
.button-tactile {
  background: #FF5733;
  border: 2px solid #CC3D1F;
  box-shadow:
    0 4px 0 #CC3D1F,        /* bottom edge for depth */
    inset 0 1px 0 rgba(255,255,255,0.2); /* top highlight */
  transition: transform 80ms, box-shadow 80ms;
}

.button-tactile:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 0 #CC3D1F,
    inset 0 1px 0 rgba(255,255,255,0.2);
}

.button-tactile:active {
  transform: translateY(3px);
  box-shadow:
    0 1px 0 #CC3D1F,
    inset 0 1px 0 rgba(255,255,255,0.2);
}

/* Subtle grain texture for backgrounds */
.textured-bg {
  background-color: #0A0A0A;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
}

/* Sticker / badge element */
.sticker-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  background: #FFD700;
  color: #000;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.35em 0.9em;
  border-radius: 999px;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #000;
  rotate: -1.5deg;
}`}
              </pre>
            </div>

            <h3>Hierarchy and Clarity First, Personality Second</h3>

            <p>This is the principle that separates dopamine design that converts from dopamine design that just looks nice in a screenshot. Your headline, subhead, and primary CTA must still be instantly scannable before anything else. The bold color, the chunky type, the textured background — these are in service of the message, not competing with it.</p>

            <p>Practical rules: limit yourself to 2–3 typefaces. Keep body copy clean and accessible even if your display type is expressive. Use whitespace strategically <em>between</em> bold elements to let them breathe. The goal is punch without fatigue.</p>

            <h2>Before/After: Generic B2B Service Site</h2>

            <p>Let's run through a concrete transformation. Imagine a typical B2B service brand — a market research consultancy, an IT support company, or a logistics firm. Most of them look like this:</p>

            <div className="bg-[#0f0f0f] border border-white/10 p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Before — The Samey Minimal SaaS Look</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>White background, pale gray cards, corporate blue primary color</li>
                <li>Hero: logo top-left, nav right, large headline, small paragraph, single &ldquo;Book a Call&rdquo; button</li>
                <li>Stock illustration of people around a chart or dashboard</li>
                <li>Three feature columns with rounded icons and light gray dividers</li>
                <li>A testimonial slider nobody reads at the bottom of the page</li>
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">This is &ldquo;fine.&rdquo; It's also identical to dozens of competitors.</p>
            </div>

            <div className="bg-[#0f1a0f] border border-[#A3D1FF]/20 p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A3D1FF] mb-4">After — Dopamine-Driven, Still Conversion-Focused</p>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <p className="font-semibold text-white mb-1">Color and background</p>
                  <p>Use a bold brand-specific color (deep electric blue or rich coral) for the hero background with a soft grain texture overlaid — so it feels tactile and physical, not flat. The brand instantly reads as &ldquo;confident.&rdquo;</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Typography</p>
                  <p>Replace the generic geometric sans heading with a chunky, characterful typeface at large scale. Pair it with a clean readable sans-serif for body text. The headline does the heavy lifting; the body stays legible.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Imagery</p>
                  <p>Swap the stock illustration for a collage-style hero: screenshots of reports and interfaces layered like physical papers on a desk, with sticker labels like &ldquo;Real-time insights,&rdquo; &ldquo;Global panels,&rdquo; &ldquo;B2B specialists.&rdquo; Feels like a desk, not a template.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Micro details</p>
                  <ul className="space-y-1 mt-1">
                    <li>A pill-shaped badge above the headline: <em>&ldquo;Trusted by 120+ research-heavy B2B brands&rdquo;</em></li>
                    <li>CTAs that gently lift on hover with a slight drop shadow — feel pressable</li>
                    <li>Section dividers use wavy or angled shapes instead of straight rules</li>
                    <li>Subtle -2deg rotation on a testimonial card so it looks placed, not stamped</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>The result: the site still explains what they do, but now <em>feels</em> like a brand with a personality and point of view. Users are more likely to remember it, associate the visual energy with momentum and innovation, and feel something positive before they've read a word of copy.</p>

            <h2>Before/After: Creative Agency or Freelance Designer</h2>

            <p>A second example, because agencies and freelancers have even less excuse for minimal sameness — and yet it's rampant.</p>

            <div className="bg-[#0f0f0f] border border-white/10 p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Before — The Generic Portfolio</p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Dark background, white text, one accent color (usually purple or teal)</li>
                <li>Hero: name, &ldquo;I design digital experiences,&rdquo; two CTAs</li>
                <li>Case study grid with flat card previews and consistent hover opacity effect</li>
                <li>Identical layout to 40,000 other portfolio sites built from the same Next.js/Tailwind starter</li>
              </ul>
            </div>

            <div className="bg-[#0f1a0f] border border-[#A3D1FF]/20 p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A3D1FF] mb-4">After — Specific, Tactile, Memorable</p>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <p className="font-semibold text-white mb-1">Hero as editorial spread</p>
                  <p>Treat the hero like the opening spread of a design magazine: your name large and expressive in a display typeface, a small editorial-style photo, and a running annotation in a contrasting color that names your specific specialty — not &ldquo;digital experiences&rdquo; but &ldquo;conversion-focused websites for agencies.&rdquo;</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Work as artifacts, not screenshots</p>
                  <p>Show case study previews at angles, with overlapping device mockups and handwritten-style labels. Make the work look like it lives in the real world, not inside a white card.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Motion that earns its keep</p>
                  <p>On hover over a case study, a sticker appears from off-screen with a one-line outcome: &ldquo;+47% conversion rate.&rdquo; That's a dopamine hit. It rewards curiosity and delivers proof at the exact moment interest peaks.</p>
                </div>
              </div>
            </div>

            <h2>Common Mistakes When Applying the Dopamine Aesthetic</h2>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Type className="w-5 h-5 text-[#A3D1FF] mr-2" />
                What Goes Wrong
              </h4>
              <ul className="text-gray-300 space-y-3">
                <li><strong className="text-white">Using every bold element at once.</strong> Bold typography + bold color + grain texture + loud badges + animated everything = visual fatigue. Each bold element should have room to breathe. One hero moment per section.</li>
                <li><strong className="text-white">Nostalgia without context.</strong> Y2K chrome buttons on a B2B logistics site look like a mistake, not a brand decision. Nostalgia only works when there's a thread connecting the reference to what you actually do.</li>
                <li><strong className="text-white">Sacrificing readability for personality.</strong> If the body copy uses a display typeface at 14px on a textured background, you've prioritized aesthetics over communication. Users who can't comfortably read your content don't convert.</li>
                <li><strong className="text-white">Applying it inconsistently.</strong> A bold homepage followed by plain white service pages signals that the homepage was a cosmetic exercise, not a real brand system. The aesthetic needs to carry through — scaled down where appropriate, not abandoned.</li>
              </ul>
            </div>

            <h2>Is the Dopamine Aesthetic Right for Your Brand?</h2>

            <p>Not every brand should chase this direction. High-trust, conservative sectors — legal, finance, certain areas of healthcare — have audiences whose first instinct toward bold design is skepticism, not delight. The dopamine aesthetic works when your audience is already visually literate and your brand promise includes energy, creativity, or innovation.</p>

            <p>The better question isn't &ldquo;should we do this?&rdquo; It's &ldquo;what version of this is true to what we actually offer?&rdquo; A law firm probably doesn't need neon stickers. But it might benefit from strong typographic hierarchy, a confident primary color, and micro-interactions that feel precise and intentional rather than lifeless.</p>

            <p>The dopamine aesthetic isn't a single look. It's a philosophy: design should create emotional responses, not just organize information. Applied with intent, that philosophy can work for almost any brand willing to have a point of view.</p>

            <h2>Where to Start</h2>

            <p>If you're looking at your current site and wondering where to begin, here's the sequence that creates the most impact for the least disruption:</p>

            <ol>
              <li><strong>Typography first.</strong> A distinctive display typeface in your hero costs nothing to change and creates immediate differentiation. It's the highest-leverage visual decision on any page.</li>
              <li><strong>One bold color, used with conviction.</strong> Most minimal sites have a primary color they're barely using. Push it. Use it at full saturation on the section that matters most. See what it does.</li>
              <li><strong>Add tactility to buttons.</strong> The CSS for a pressable, beveled button takes ten minutes. The perception shift — &ldquo;this site feels real&rdquo; — is instant.</li>
              <li><strong>Introduce one piece of texture.</strong> A subtle grain overlay on a hero background breaks the sterile flatness that marks every template site. It's a 3KB SVG pattern.</li>
              <li><strong>Audit your motion.</strong> Remove the generic fade-ins. Replace one key interaction — a CTA hover, a case study reveal — with something that has physical character. Bounce, spring, or snap.</li>
            </ol>

            <p>You don't need to redesign everything. You need to make five targeted decisions that collectively signal: this brand has a perspective, and it's not afraid to show it. That's what the dopamine aesthetic is really about.</p>

          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">Marc Friedman</h3>
                <p className="text-white">Full Stack Designer & Developer</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1877F2]/20 text-[#1877F2] transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#0077B5]/20 text-[#0077B5] transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#A3D1FF]/20 text-[#A3D1FF] transition-colors">
                <Link className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80"
                    alt="Brutalism and Anti-Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Brutalism & Anti-Design: The Raw, Unpolished Web Design Revolution</h4>
                  <p className="text-white text-sm mb-4">Explore the rise of brutalist web design and anti-design movements — raw grids, minimal imagery, and imperfect layouts.</p>
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
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80"
                    alt="UI Polish: Mastering Visual Realism"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">UI Polish: Mastering Visual Realism in Modern Interface Design</h4>
                  <p className="text-white text-sm mb-4">Explore the art of UI polish through visual realism, lighting metaphors, and design choices inspired by physical materials.</p>
                  <button
                    onClick={() => router.push('/blog/ui-polish-visual-realism')}
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build a Site People Actually Remember?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Bold design isn't a risk. Playing it safe is. Let's build something with a point of view.
          </p>
          <MagneticButton>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}

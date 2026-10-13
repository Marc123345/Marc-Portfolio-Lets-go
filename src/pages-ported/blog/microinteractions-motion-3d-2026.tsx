"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Gauge } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function MicrointeractionsMotion3DPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Microinteractions, Motion and 3D: Making Websites Feel Physical in 2026",
    "description":
      "How microinteractions, motion design and immersive 3D are giving websites a tangible feel in 2026, and how to use them without slowing pages down, distracting visitors or ignoring reduced-motion users.",
    "image": "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-14T10:00:00+00:00",
    "dateModified": "2026-10-14T10:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/microinteractions-motion-3d-2026"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are microinteractions in web design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microinteractions are small, single-purpose responses to something a user does: a button that presses in when clicked, a form field that flags a mistake as you type, a heart that fills when you like something. They confirm that an action worked and show what will happen next."
        }
      },
      {
        "@type": "Question",
        "name": "Does animation hurt website performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can. Animating transform and opacity is cheap because the browser can hand it to the GPU. Animating width, height, top or left forces layout work on every frame. Large animation libraries and 3D scenes also add JavaScript weight, so load them only on the pages and sections that need them."
        }
      },
      {
        "@type": "Question",
        "name": "Should every website use 3D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. 3D earns its place when it shows something a photo can't, like a product you can rotate, a space you can walk through, or a mechanism you need to see from several angles. As decoration it mostly adds load time."
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
            Microinteractions, Motion and 3D: Making Websites Feel Physical in 2026
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
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=2000&q=80"
              alt="Smooth white curved lines flowing across a pale background, suggesting movement."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>Press a good physical button and you feel it give. It clicks, it moves a millimeter, it comes back. Most of what makes a website feel solid or flimsy comes down to whether it gives you that same kind of answer when you touch it.</p>

            <p>That is what the 2026 interest in motion is really about. <a href="https://www.ionos.com/digitalguide/websites/web-design/webdesign-trends/" target="_blank" rel="noopener noreferrer">IONOS</a> lists microinteractions alongside immersive 3D, which it describes as making experiences feel tangible and realistic. <a href="https://firebrandagency.com/articles/web-design-trends-2026" target="_blank" rel="noopener noreferrer">Firebrand</a> expects 3D, AR and VR to become more built into sites, from AR try-ons in ecommerce to virtual tours for property and museums. The common thread is a web that responds and has depth, instead of a stack of flat panels.</p>

            <p>The catch is in the phrasing most trend lists use: motion &ldquo;without overwhelming visitors.&rdquo; That part is harder than the animation itself.</p>

            <h2>Microinteractions: small answers to small actions</h2>

            <p>A microinteraction does one job. It tells the user that something happened, or that something is about to. A button that dips slightly on press. A copy-link icon that turns into a tick for a second. A password field that tells you which rule you just satisfied. A form that shakes the field you missed, rather than dumping a red list at the top of the page.</p>

            <p>The test I use is whether the motion carries information. If you removed it, would the user know less? A save button that changes to &ldquo;Saved&rdquo; with a short fade passes. A card that wobbles every time it scrolls into view, for no reason, fails. The first is feedback. The second is decoration that costs attention every time someone scrolls.</p>

            <p>Good microinteractions are also fast. Most UI feedback should land between about 100 and 300 milliseconds. Slower than that and the interface starts to feel like it is making you wait for its performance. A hover state that takes 600ms to finish feels broken, even if it looks beautiful in a screen recording.</p>

            <h2>Motion that explains rather than performs</h2>

            <p>Larger motion, like page transitions, scroll-linked reveals and shared-element transitions, works best when it shows where things came from and where they went. Click a project thumbnail and watch it expand into the case study header, and you understand the relationship between the two pages without reading anything. That is motion doing explanatory work.</p>

            <p>Browsers have made this much cheaper. The View Transitions API handles a lot of what used to need a heavy animation library, and CSS scroll-driven animations can run reveal effects without any JavaScript listening to scroll events. I still use Framer Motion on this site for component-level animation, but I reach for the platform first now. I wrote about that broader shift in <a href="/blog/css-eating-javascript-lunch">CSS Is Eating JavaScript&rsquo;s Lunch</a>.</p>

            <p>Where motion goes wrong is scroll-jacking: taking over the scroll wheel so a page moves at the speed the designer wanted rather than the speed the reader wanted. Smooth scrolling that adds a little inertia is fine. Pinning a section for six screens of scroll while an animation plays is a reliable way to lose people on mobile.</p>

            <h2>3D that earns its weight</h2>

            <p>3D on the web is far more practical than it was a few years ago. Tools like Spline let a designer build a small interactive scene without writing shader code, Three.js is mature, and phones handle WebGL without much trouble. Realistic depth is also turning up in subtler forms: layered parallax, soft shadows, materials that react to the cursor.</p>

            <p>None of that changes the basic question: what does the 3D show that a photo can&rsquo;t?</p>

            <ul>
              <li><strong>Good reasons:</strong> a product someone needs to inspect from several angles, a configurator, a room or venue you can move through, a mechanism that is hard to understand flat, a data set with a real third dimension.</li>
              <li><strong>Weak reasons:</strong> a floating abstract blob in the hero, a rotating logo, a globe that exists because globes look impressive.</li>
            </ul>

            <p>I&rsquo;ll admit this site has a globe on it. It earns its place, barely, by showing where clients are. But it is loaded lazily, it isn&rsquo;t in the critical path, and the page works fine before it arrives. That is the bar for any 3D on a page that has to perform.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Gauge className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Keeping motion and 3D off the critical path
              </h4>
              <pre className="text-xs text-gray-300 overflow-x-auto">
{`// Load the 3D scene only when it is about to be seen
const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <img src="/scene-poster.webp" alt="" />,
});

// Animate the cheap properties
.card:hover { transform: translateY(-2px); }   /* GPU, no layout */
.card:hover { margin-top: -2px; }              /* layout on every frame */

// Respect the OS setting
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
              </pre>
              <p className="text-gray-300 mt-4">A static poster image means the hero is never empty while the scene loads, and Largest Contentful Paint is measured on the poster rather than on WebGL.</p>
            </div>

            <h2>&ldquo;Without overwhelming visitors&rdquo;</h2>

            <p>Some people get motion sickness from parallax and large movement. Some have vestibular disorders. Some are on a five-year-old Android phone on a train. All of them deserve a site that works.</p>

            <p>The practical rules I follow:</p>

            <ul>
              <li><strong>Honor <code>prefers-reduced-motion</code></strong> everywhere, including in JavaScript animation libraries, which do not respect it automatically unless you tell them to.</li>
              <li><strong>Never animate content into existence that the user needs to read straight away.</strong> If the headline fades in over 800ms, everybody waits 800ms.</li>
              <li><strong>Give anything that loops or autoplays for more than five seconds a pause control.</strong> That is a WCAG requirement, not a nicety.</li>
              <li><strong>Test with motion on, on a real phone, while scrolling.</strong> Animated elements that start off-screen cause sideways scroll on mobile more often than anything else I see in audits, and the bug disappears if you only test with reduced motion turned on.</li>
            </ul>

            <p>Accessibility and motion are not enemies. The <a href="/blog/electronic-accessibility">accessibility</a> work just has to be part of the motion design from the start instead of a patch at the end.</p>

            <h2>Where it fits</h2>

            <p>Microinteractions belong on almost every site. Button feedback, form validation, loading states and confirmation messages make a plain contractor site feel trustworthy as much as they make a SaaS dashboard feel polished. There is no business case against a submit button that clearly tells you it worked.</p>

            <p>Larger motion and 3D are more selective. They suit product companies, portfolios, launches, ecommerce with products worth inspecting, and property or venues where space is the thing being sold. For a lead generation site, the job is speed and clarity, and the motion budget should be spent on feedback rather than spectacle. I go deeper into why speed comes first in <a href="/blog/minimal-fast-sustainable-ux">Minimal, Fast, Sustainable UX</a>.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>What are microinteractions in web design?</strong><br />Small, single-purpose responses to a user action, like a button that presses in, a field that flags a mistake as you type, or an icon that confirms a link was copied.</p>

            <p><strong>Does animation hurt website performance?</strong><br />It can. Animate <code>transform</code> and <code>opacity</code>, avoid animating layout properties, and load heavy libraries and 3D scenes only where they are needed.</p>

            <p><strong>Should every website use 3D?</strong><br />No. Use it when it shows something a photo can&rsquo;t, like a product you can rotate or a space you can explore.</p>

            <p><strong>How do I make animations accessible?</strong><br />Respect <code>prefers-reduced-motion</code>, keep feedback quick, avoid scroll-jacking, and give anything that loops a pause control.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Want your site to feel more alive without getting slower?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Send me the URL. I&rsquo;ll look at where motion would help your visitors, where it&rsquo;s already getting in their way, and what it&rsquo;s costing you in load time.
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
                    src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=2000&q=80"
                    alt="Bold Typography and Earthy Palettes"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Bold Typography and Earthy Palettes</h4>
                  <p className="text-white text-sm mb-4">Oversized type, clay and stone colors, and how to keep them readable.</p>
                  <button
                    onClick={() => router.push('/blog/bold-typography-earthy-palettes-2026')}
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

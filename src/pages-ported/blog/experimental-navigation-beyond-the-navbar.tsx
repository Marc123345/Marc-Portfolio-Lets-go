"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Info } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function ExperimentalNavigationPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Experimental Navigation: Canvases, Folding Pages and Sites Without a Navbar",
    "description":
      "Zoomable canvases, folding-page layouts and other alternatives to the top navbar: when they work, where they fail, and how to build one that people, search engines and screen readers can still use.",
    "image": "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-29T09:00:00+00:00",
    "dateModified": "2026-10-29T09:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/experimental-navigation-beyond-the-navbar"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is experimental navigation in web design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any way of moving around a site that replaces the usual row of links at the top of the page. Common examples are zoomable canvases you pan and zoom across, pages that fold or slide over each other, scroll-driven journeys and spatial layouts where sections sit next to each other like rooms."
        }
      },
      {
        "@type": "Question",
        "name": "Is a site without a navbar bad for SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if the content stops being reachable through normal links. If every section has its own URL and is linked with a real anchor tag somewhere in the HTML, search engines can crawl it the same as any other site. Trouble starts when content only appears after a drag, zoom or JavaScript event."
        }
      },
      {
        "@type": "Question",
        "name": "Can an unconventional navigation pattern be accessible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if keyboard users can reach every destination, screen readers get a list of real links, focus stays visible, motion respects the reduced-motion setting and there is a plain index of the site somewhere. Most of that comes from keeping a conventional fallback alongside the experimental layer."
        }
      },
      {
        "@type": "Question",
        "name": "When should a business site avoid experimental navigation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When visitors arrive with a task, such as finding a price, a phone number or a product spec. Experimental navigation suits portfolios, launches, campaign sites and brand stories, where exploring is part of the point."
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
            Experimental Navigation: Canvases, Folding Pages and Sites Without a Navbar
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>October 29, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80"
              alt="An old printed world map with countries in muted greens, yellows and reds."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>For about twenty years most websites have opened the same way: logo top left, five or six links across the top, a button on the right. It works, and nobody has to learn it. That is exactly why a growing number of studios, launches and portfolios are throwing it out.</p>

            <p>The replacements vary. Some sites drop you onto a huge canvas you pan around and zoom into. Some stack pages like sheets of paper that fold away as you move. Others turn scrolling itself into the route through the site. I&rsquo;ve built a few of these and talked clients out of a few more, so this is my take on when they earn their place and how to build one without locking people out.</p>

            <h2>What the new formats look like</h2>

            <ul>
              <li><strong>Zoomable canvases.</strong> The whole site is one big surface, a bit like a Figma file or a map. Projects or sections sit at different points. You zoom out to see everything, then zoom in to read one thing.</li>
              <li><strong>Folding and stacked pages.</strong> Pages sit on top of each other and fold, slide or peel back as you go deeper. Going back reverses the motion, so you keep a sense of where you came from.</li>
              <li><strong>Scroll-driven journeys.</strong> There is no menu at all. The page is a sequence, and scrolling moves you through it. Progress markers stand in for the navbar.</li>
              <li><strong>Spatial or room-based layouts.</strong> Sections sit side by side, and you move between them with arrows, keys or drags, the way you&rsquo;d move between rooms.</li>
              <li><strong>Command-style navigation.</strong> A search or command bar (often opened with <code>/</code> or <code>Cmd+K</code>) replaces the list of links. Developers love it. Most other visitors never find it.</li>
            </ul>

            <h2>Why designers are moving away from the navbar</h2>

            <p>Part of it is fatigue. When every template ships the same header, a site that opens differently gets remembered. For a design studio or a creative portfolio, being remembered is the brief.</p>

            <p>The other part is that the browser can now do much more of this natively. CSS scroll-driven animations, view transitions between pages, <code>:has()</code> and container queries let you build motion and state changes that used to need a heavy JavaScript library. That makes experimental navigation cheaper to build and lighter to load than it was five years ago. I wrote about that shift in <a href="/blog/css-eating-javascript-lunch">CSS is eating JavaScript&rsquo;s lunch</a>.</p>

            <h2>Where it goes wrong</h2>

            <p>Most of the experimental sites I audit share the same handful of problems.</p>

            <ul>
              <li><strong>People can&rsquo;t find things.</strong> A canvas is fun for the first thirty seconds. After that, someone looking for your contact details is hunting across a map with no labels.</li>
              <li><strong>The back button breaks.</strong> If moving around the canvas doesn&rsquo;t change the URL, pressing back throws the visitor off the site entirely.</li>
              <li><strong>Nothing has its own address.</strong> You can&rsquo;t share a link to one project, and search engines see a single page instead of twenty.</li>
              <li><strong>Keyboards and screen readers get stuck.</strong> Drag-to-pan and pinch-to-zoom mean nothing to someone using Tab and Enter, and a screen reader announces a wall of unlabelled shapes.</li>
              <li><strong>Motion makes people feel ill.</strong> Large zooms and folds can trigger vestibular symptoms. That&rsquo;s why operating systems have a reduce-motion setting.</li>
              <li><strong>Crawlers see nothing.</strong> If the content only renders after a WebGL scene loads or a gesture fires, many crawlers, including most AI crawlers, get an empty page.</li>
            </ul>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 not-prose">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Info className="w-5 h-5 text-[#A3D1FF] mr-2" />
                A quick test
              </h4>
              <p className="text-gray-300">Turn off JavaScript and load the site. Then unplug the mouse and use only the keyboard. If you can still read the content and reach every section, the experimental layer is sitting on a solid base. If either test leaves you stuck, the navigation is decoration covering a gap.</p>
            </div>

            <h2>How to build it so it still works</h2>

            <p>The approach I use is to build a plain, boring site first and put the experiment on top of it. In practice that means:</p>

            <ul>
              <li><strong>One URL per destination.</strong> Every project, section or &ldquo;room&rdquo; gets its own path. Zooming into a project updates the address bar, and loading that address opens the canvas already zoomed in. The back button then works for free.</li>
              <li><strong>Real links in the HTML.</strong> Each destination is an <code>&lt;a href&gt;</code> somewhere in the markup, even if the visual design hides the list. Crawlers follow links, not drag gestures.</li>
              <li><strong>A visible way out.</strong> Keep a small, always-available index, a &ldquo;Menu&rdquo; or &ldquo;All work&rdquo; button that opens a plain list. Visitors who just want the phone number get it in one click.</li>
              <li><strong>Keyboard paths.</strong> Arrow keys pan, <code>+</code> and <code>-</code> zoom, Tab moves between destinations in a sensible order, and focus is always visible.</li>
              <li><strong>Reduced motion.</strong> Under <code>prefers-reduced-motion: reduce</code>, swap zooms and folds for a simple fade or an instant cut.</li>
              <li><strong>Server-rendered content.</strong> Render the text and images in HTML first, then let the canvas or the folds pick them up. If the fancy layer fails, the page still reads.</li>
            </ul>

            <p>None of this kills the effect. A visitor who never touches the menu still gets the canvas. It just means the canvas isn&rsquo;t the only way in.</p>

            <h2>When it&rsquo;s worth doing, and when it isn&rsquo;t</h2>

            <p>Good fits:</p>

            <ul>
              <li>Portfolios and studio sites, where the navigation is part of the work being shown</li>
              <li>Product launches and campaign microsites with one story to tell</li>
              <li>Brand storytelling, annual reports and editorial features</li>
              <li>Galleries and archives where browsing is the main activity</li>
            </ul>

            <p>Poor fits:</p>

            <ul>
              <li>Service businesses whose visitors want a quote, a price or a phone number</li>
              <li>Ecommerce category pages and checkout</li>
              <li>Documentation, support and anything people search for in a hurry</li>
              <li>Sites where most traffic lands deep from Google rather than on the home page</li>
            </ul>

            <p>A middle path works well for many businesses: keep the standard header on the working pages, and save the experimental format for one place, such as the home page, a case study or a launch page. You get the memorable first impression without asking someone to learn a new interface just to find your opening hours.</p>

            <h2>Measuring whether it works</h2>

            <p>Opinions about experimental navigation tend to run hot, so measure it. Before launch, decide what a visitor should be able to do, such as reaching a case study or the contact form. Then watch:</p>

            <ul>
              <li>How many visitors reach those pages, compared with the old site</li>
              <li>How often the fallback menu gets opened (a lot means the main navigation isn&rsquo;t doing its job)</li>
              <li>Time to first meaningful click, from session recordings</li>
              <li>Interaction to Next Paint (INP) on mobile, since heavy canvases often hurt it</li>
            </ul>

            <p>If people reach the pages that matter and stay longer, keep it. If the fallback menu is doing all the work, the experiment is costing you.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>What is experimental navigation?</strong><br />Any way of moving around a site that replaces the standard top navbar, such as zoomable canvases, folding pages, scroll-driven journeys or spatial layouts.</p>

            <p><strong>Is a site without a navbar bad for SEO?</strong><br />Not if every section has its own URL and a real link in the HTML. Content that only appears after a gesture or a script is the problem.</p>

            <p><strong>Can it be accessible?</strong><br />Yes, with keyboard controls, real links for screen readers, visible focus, reduced-motion support and a plain fallback menu.</p>

            <p><strong>When should a business avoid it?</strong><br />When visitors arrive with a task to complete quickly. Keep experiments for portfolios, launches and brand stories.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Want navigation people remember?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Tell me about the site and who uses it. I&rsquo;ll tell you whether an experimental layout suits it, and how to build one that still works with a keyboard and on Google.
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
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
                    alt="Machine Experience (MX) and lightweight front ends"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Machine Experience (MX)</h4>
                  <p className="text-white text-sm mb-4">Why lighter front ends work better for people and crawlers.</p>
                  <button
                    onClick={() => router.push('/blog/machine-experience-mx-lightweight-frontends')}
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
                    alt="Microinteractions, motion and 3D in 2026"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Microinteractions, Motion &amp; 3D</h4>
                  <p className="text-white text-sm mb-4">Using motion with a purpose, and knowing when to switch it off.</p>
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

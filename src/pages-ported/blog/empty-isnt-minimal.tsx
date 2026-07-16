"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Linkedin, Facebook, Link, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function EmptyIsntMinimalPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Empty Isn't Minimal",
    "description":
      "Minimalism is the most faked skill in web design. Why empty pages aren't minimal, why hierarchy is the real product, and the only test that actually counts.",
    "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-06-08T08:00:00+00:00",
    "dateModified": "2026-06-08T08:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/empty-isnt-minimal"
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
            Empty Isn&rsquo;t Minimal
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>June 8, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2000&q=80"
              alt="A near-empty white workspace, the look most people mistake for minimalism"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>Open three &ldquo;minimalist&rdquo; portfolio sites right now. You&rsquo;ll see the same thing every time. Acres of whitespace. One typeface, probably Inter. A greyed-out palette that&rsquo;s allergic to color. A hairline divider being quietly elegant in the corner.</p>

            <p>Looks clean. Looks expensive. Looks like nobody made a single decision.</p>

            <p>That&rsquo;s the whole problem with minimalism. It&rsquo;s the most faked skill in web design, because the fake version photographs beautifully and the real version is basically invisible, it just works, and nobody notices the work that went in. So everyone copies the symptoms (space, restraint, one font) and skips the cause (deciding what actually matters and killing everything else).</p>

            <p><strong>Empty is easy. Minimal is hard. They are not the same thing.</strong></p>

            <h2>The screenshot trap</h2>
            <p>Here&rsquo;s why bad minimalism spreads so fast: it wins in a screenshot.</p>
            <p>A static frame on Dribbble rewards space and silence. No interaction, no scroll, no real person trying to actually do something. Just a pretty composition sitting still. So designers optimize for the frame, they remove and remove until it looks calm, and then ship a product where you genuinely cannot find the button.</p>
            <p>Real minimalism isn&rsquo;t optimized for the screenshot. It&rsquo;s optimized for the person scrolling at 11pm trying to work out if your thing solves their problem. Different goal. Completely different design.</p>
            <p>If your minimalism falls apart the second someone tries to use it, you didn&rsquo;t design a minimal product. You designed a poster.</p>

            <h2>Minimal means you decided</h2>
            <p>Strip a page down to nothing and you don&rsquo;t get minimalism. You get a blank page. Minimalism is what&rsquo;s left after you&rsquo;ve made the hard calls about what stays.</p>
            <p>Three CTAs on the page? That&rsquo;s not a design decision, that&rsquo;s an argument nobody won. Real minimalism is having the spine to say &ldquo;this one button is the only thing that matters on this screen,&rdquo; and then defending it when marketing wants to bolt on four more by Friday.</p>
            <p>The whitespace people obsess over is a side effect. You don&rsquo;t add space to look minimal. You remove the stuff that wasn&rsquo;t earning its place, and space is what&rsquo;s left when you&rsquo;re done. Space is the receipt for decisions you already made.</p>

            <h2>Hierarchy is the actual product</h2>
            <p>Here&rsquo;s the part everyone skips.</p>
            <p>When you take away decoration, color, borders, boxes, all the stuff weaker designs lean on to fake structure, something still has to do that job. Something has to tell the eye where to go first, second, third.</p>
            <p>That something is hierarchy. Type scale, weight, and spacing. That&rsquo;s the toolkit. That&rsquo;s all of it.</p>
            <p>In a busy design you can hide weak hierarchy behind a colored card and a drop shadow and nobody&rsquo;s the wiser. In a minimal one, there&rsquo;s nowhere to hide. If your headline and your body copy are too close in size, the page reads flat and the user has no idea where to look. If your spacing is inconsistent by a few pixels here and there, the whole thing feels cheap in a way people can feel but can&rsquo;t name.</p>
            <p>This is why minimalism is hard. You took away every crutch, and now the bones have to be perfect. Most &ldquo;minimal&rdquo; sites just have terrible bones wearing a nice outfit.</p>

            <h2>Constraints aren&rsquo;t the sacrifice. They&rsquo;re the point.</h2>
            <p>One typeface. Two weights. A palette you can count on one hand. People treat these like limitations they&rsquo;re heroically working within.</p>
            <p>They&rsquo;re not limitations. They&rsquo;re the engine.</p>
            <p>When you only get two type weights, you have to actually think about which words deserve the bold one. When you can&rsquo;t reach for a new color every time you want to grab attention, you&rsquo;re forced to use position and size and space like an adult. Constraints manufacture the decisions that make work good. Remove them and you&rsquo;ll fill the space. Every time. Everyone does, it&rsquo;s not a willpower thing, it&rsquo;s gravity.</p>

            <h2>Where it quietly dies</h2>
            <p>Minimal aesthetics have a body count, and it&rsquo;s almost always the same three deaths.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Affordances</h4>
              <p className="text-gray-300 mb-0">You stripped the button down until it&rsquo;s just text, no background, no border, nothing that says &ldquo;click me.&rdquo; Looks slick. Nobody clicks it. A button that doesn&rsquo;t look like a button isn&rsquo;t minimal, it&rsquo;s broken.</p>
            </div>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Contrast</h4>
              <p className="text-gray-300 mb-0">Light grey text on white is the official typeface of fake minimalism. It looks soft and sophisticated and a meaningful chunk of your users physically cannot read it. Minimalism is not a license to fail contrast checks. Calm is not the same as illegible.</p>
            </div>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Mystery-meat navigation</h4>
              <p className="text-gray-300 mb-0">You buried the nav behind a hamburger on a wide desktop screen because the menu &ldquo;cluttered the hero.&rdquo; Now people can&rsquo;t find your pricing page. Congratulations, you made the single most important link on the site invisible, to look tidy.</p>
            </div>

            <p>Every one of these comes from the same mistake: treating minimalism as fewer things instead of less noise. The goal was never to own fewer elements. It was to have nothing on the page competing with the thing that matters.</p>

            <h2>The only test that counts</h2>
            <p>Forget how it looks parked in a frame. Ask the real question instead:</p>
            <p>Stripped down like this, does it still work? Can a stranger land on it cold and instantly know what it is, what to do, and where to click? Does the one action you want them to take feel inevitable?</p>
            <p>If yes, you nailed it, and almost nobody will ever compliment you on it, because good minimalism is invisible by design. If no, you don&rsquo;t have a minimal design. You have an empty one with good lighting.</p>
            <p>Minimalism isn&rsquo;t restraint for the vibes. It&rsquo;s confidence, the confidence that the few things you left on the page are the right things, and you don&rsquo;t need to hide behind anything else.</p>
            <p>Most people aren&rsquo;t confident. They&rsquo;re just removing stuff and hoping it reads as taste.</p>
            <p><strong>Don&rsquo;t be most people.</strong></p>
          </div>

{/* Contact form */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Start your project</h3>
            <ContactForm />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=80"
                    alt="Contrast & Balance: The Foundation of Accessible UI Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Contrast &amp; Balance: The Foundation of Accessible UI Design</h4>
                  <p className="text-white text-sm mb-4">Foreground vs. background clarity, WCAG-compliant ratios, and managing contrast across light and dark themes.</p>
                  <button
                    onClick={() => router.push('/blog/contrast-balance-ui-design')}
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
                    alt="UI Polish: Mastering Visual Realism in Modern Interface Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">UI Polish: Mastering Visual Realism in Modern Interface Design</h4>
                  <p className="text-white text-sm mb-4">The art of UI polish through visual realism, lighting metaphors, and material-inspired design choices.</p>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want a site that&rsquo;s actually minimal?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Not empty, minimal. Clear hierarchy, one obvious action, and nothing on the page competing with it. Let&rsquo;s build it.
          </p>
          <MagneticButton>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start Your Design Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}

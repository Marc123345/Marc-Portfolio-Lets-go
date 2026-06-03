"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Linkedin, Facebook, Link, ArrowRight, Code2, Eye, GitBranch, Sparkles, Zap } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import { useRouter } from 'next/navigation';

const HERO_IMAGE = 'https://ik.imagekit.io/qcvroy8xpd/8ce5c50b-8af1-4e99-b2b0-f7f29cd0abd3.avif';

export default function CssEatingJavascriptLunchPage() {
  const router = useRouter();

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "CSS Is Eating JavaScript's Lunch",
    description:
      "Scroll-driven animations, @starting-style, and :has() have quietly made huge chunks of UI JavaScript obsolete. A field guide to what's shippable in CSS today and what it replaces.",
    image: HERO_IMAGE,
    datePublished: '2026-06-02T08:00:00+00:00',
    dateModified: '2026-06-02T08:00:00+00:00',
    author: {
      '@type': 'Person',
      name: 'Marc Friedman',
      url: 'https://www.marcfriedmanportfolio.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Marc Friedman Design & Development',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.marcfriedmanportfolio.com/apple-touch-icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.marcfriedmanportfolio.com/blog/css-eating-javascript-lunch',
    },
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            CSS Is Eating JavaScript&apos;s Lunch
          </h1>
          <p className="text-xl text-white/70 mb-6">And most developers haven&apos;t noticed yet.</p>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>June 2, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src={HERO_IMAGE}
              alt="CSS code on a dark editor background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>For the last decade, JavaScript has been the answer to everything. Want an animation? JavaScript. Want to detect when an element enters the viewport? JavaScript. Want to style a parent element based on what&apos;s inside it? Sorry, can&apos;t do that — write some JavaScript.</p>

            <p>That era is ending.</p>

            <p>CSS in 2026 is not the CSS you learned five years ago. The browser has quietly shipped feature after feature that used to require a library, a package, a build step, and 47 dependencies. And most people are still reaching for <code>npm install</code> out of habit.</p>

            <p>Let&apos;s talk about what&apos;s actually here, what it replaces, and why you should care.</p>

            <h2>Scroll-Driven Animations</h2>

            <p>Remember Intersection Observer? You&apos;d set up an observer, listen for when elements crossed a threshold, toggle a class, write the corresponding CSS, and then debug why it fired twice. Every. Single. Time.</p>

            <p>Scroll-driven animations make that whole pattern obsolete.</p>

            <pre className="bg-[#0a0a0a] border border-white/10 p-5 overflow-x-auto text-sm leading-relaxed"><code>{`@keyframes fade-in {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 40%;
}`}</code></pre>

            <p>That&apos;s it. No JavaScript. No observer. No class toggling. The browser handles it natively, on the compositor thread, which means it&apos;s smoother than anything you were doing with JS anyway.</p>

            <p><code>animation-timeline: scroll()</code> ties an animation to the page scroll position. <code>animation-timeline: view()</code> ties it to when an element enters the viewport. <code>animation-range</code> lets you control exactly which part of the scroll triggers which part of the animation.</p>

            <p>You can build the entire &quot;elements fade in as you scroll&quot; pattern that&apos;s on literally every marketing site — the one people install Framer Motion for — in pure CSS.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Eye className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Shippable today?
              </h4>
              <p className="text-gray-300">Chrome and Edge: since 2023. Firefox: 2024. Safari: in preview. For most projects with a Safari fallback (graceful: elements just appear instantly), this is a ship-it-today feature.</p>
            </div>

            <h2>@starting-style</h2>

            <p>This one is small but it&apos;s been a long time coming.</p>

            <p>Animating elements in has always been awkward. You can animate something from one state to another once it&apos;s in the DOM. But the moment it&apos;s added — that first render frame — the browser doesn&apos;t know what to transition from. So nothing animates. Developers have hacked around this forever: add the element, then add a class on the next frame, then animate. It&apos;s a mess.</p>

            <p><code>@starting-style</code> fixes it.</p>

            <pre className="bg-[#0a0a0a] border border-white/10 p-5 overflow-x-auto text-sm leading-relaxed"><code>{`dialog {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.3s, transform 0.3s;
}

@starting-style {
  dialog {
    opacity: 0;
    transform: scale(0.95);
  }
}`}</code></pre>

            <p>Now when the <code>&lt;dialog&gt;</code> enters the DOM, the browser knows where to start the transition. It fades and scales in automatically. No JavaScript, no <code>setTimeout</code> hack, no <code>requestAnimationFrame</code> gymnastics.</p>

            <p>Combine this with <code>display: none</code> transitions (also newly possible) and you can build fully animated show/hide interactions — modals, drawers, tooltips — without touching JS at all.</p>

            <h2>:has()</h2>

            <p>This is the big one. The one people said would never be possible in CSS.</p>

            <p><code>:has()</code> is a parent selector. It lets you style an element based on what&apos;s inside it, or what comes after it. This was the fundamental limitation of CSS selectors for 20 years. JavaScript filled the gap.</p>

            <pre className="bg-[#0a0a0a] border border-white/10 p-5 overflow-x-auto text-sm leading-relaxed"><code>{`/* Style a card differently when it contains an image */
.card:has(img) {
  padding: 0;
}

/* Style a label when its input is checked */
.field:has(input:checked) {
  background: #f0fdf4;
  border-color: green;
}

/* Style a section when it has no children */
.list:not(:has(*)) {
  display: none;
}`}</code></pre>

            <p>Think about how much conditional styling logic you&apos;ve written in JavaScript just because CSS couldn&apos;t select upward through the DOM. State management for UI patterns — checked, focused, filled, empty — most of that can now live in CSS where it belongs.</p>

            <p><code>:has()</code> also works as a general conditional. You can write things like &quot;if any input in this form is invalid, style the submit button differently.&quot; That&apos;s not a hack. That&apos;s just how it works now.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <GitBranch className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Browser support
              </h4>
              <p className="text-gray-300">Every major browser. Fully supported. No fallback story to write. Use it.</p>
            </div>

            <h2>What This Actually Means</h2>

            <p>Here&apos;s the honest take: a lot of the JavaScript you&apos;re writing for UI interactions is technical debt you&apos;re accumulating for no reason.</p>

            <p>Not all of it. JavaScript still owns real interactivity — data fetching, state, user input handling, anything that requires logic. That&apos;s not going anywhere.</p>

            <p>But the layer between &quot;the design&quot; and &quot;the behavior&quot; — the stuff that makes things move, appear, respond, and feel alive — CSS is claiming that territory back. The browser vendors have clearly decided that the answer to &quot;I can&apos;t do this in CSS&quot; should eventually become &quot;yes you can.&quot;</p>

            <p>The developers winning right now are the ones who know both sides deeply. They&apos;re not picking a side, they&apos;re just using the right tool. And increasingly, the right tool for animation, transitions, and responsive state is CSS.</p>

            <h2>The Practical Takeaway</h2>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Zap className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Three swaps to make this week
              </h4>
              <ul className="text-gray-300 space-y-3">
                <li><strong>Scroll animations.</strong> Before reaching for a scroll-animation library, check if <code>animation-timeline: view()</code> covers your use case. It probably does.</li>
                <li><strong>Mount transitions.</strong> Before writing JavaScript to add a class on element mount for a fade-in, use <code>@starting-style</code> instead.</li>
                <li><strong>Conditional styles.</strong> Before writing a JS function that toggles a parent class based on a child&apos;s state, try <code>:has()</code> first.</li>
              </ul>
            </div>

            <p>You&apos;ll ship less JavaScript, get better performance, and write code that&apos;s genuinely easier to maintain. That&apos;s the whole game.</p>

            <p>CSS caught up. Most people just haven&apos;t adjusted yet.</p>
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
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
                    alt="Minimal, fast, sustainable UX"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Minimal, Fast, and Sustainable UX</h4>
                  <p className="text-white text-sm mb-4">Leaner layouts and fewer heavy scripts create calmer, faster, more sustainable experiences.</p>
                  <button
                    onClick={() => router.push('/blog/minimal-fast-sustainable-ux')}
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
                    src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=2000&q=80"
                    alt="Data-driven design systems"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Building Data-Driven Design Systems for Scale</h4>
                  <p className="text-white text-sm mb-4">How to create and maintain scalable design systems that evolve with your product needs.</p>
                  <button
                    onClick={() => router.push('/blog/building-data-driven-design-systems')}
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
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Code2 className="w-8 h-8 text-[#A3D1FF]" />
            Need a Front End That Ships Less JavaScript?
            <Sparkles className="w-8 h-8 text-[#A3D1FF]" />
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            I build modern web apps that lean on the platform first — fast, accessible, and easy to maintain. Let&apos;s talk.
          </p>
          <MagneticButton>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}

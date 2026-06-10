"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Linkedin, Facebook, Link, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import { useRouter } from 'next/navigation';

export default function WhatIsEEATPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "What Is E-E-A-T? Experience, Expertise, Authoritativeness & Trustworthiness Explained",
    "description":
      "A plain-English guide to Google's E-E-A-T framework — what the four pillars mean, why Trust matters most, how it relates to YMYL, and how to build it into a website.",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-06-10T08:00:00+00:00",
    "dateModified": "2026-06-10T08:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/what-is-eeat"
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
            What Is E-E-A-T? Experience, Expertise, Authoritativeness &amp; Trustworthiness Explained
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>June 10, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
              alt="A person writing by hand — the human judgment of experience and expertise behind E-E-A-T"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>E-E-A-T is the framework Google uses to judge whether online content is credible, reliable, and actually worth showing to a searcher. It stands for <strong>Experience, Expertise, Authoritativeness, and Trustworthiness</strong> — four lenses for asking one underlying question: <em>should a real person believe this page?</em></p>

            <p>If you&rsquo;ve heard of &ldquo;E-A-T,&rdquo; the original three-letter version, the extra <strong>E</strong> for <strong>Experience</strong> was added in December 2022. It was a pointed addition: in an era where anyone (or any model) can generate fluent, confident-sounding text in seconds, Google wanted a way to reward content that comes from someone who has actually <em>done the thing</em>.</p>

            <h2>The four pillars, one at a time</h2>

            <h3>Experience</h3>
            <p>First-hand involvement with the topic. Did the author actually use the product, visit the place, run the procedure, or live through the situation they&rsquo;re writing about? A review written by someone who tested the device — with their own photos, specifics, and honest annoyances — signals experience. A spec sheet reworded into paragraphs does not.</p>

            <h3>Expertise</h3>
            <p>The skill, knowledge, and credentials to discuss the subject accurately. Expertise is about <em>correctness</em>: does the author know enough to get the details right? For some topics that means formal qualifications (a doctor on a medical page); for others it&rsquo;s demonstrated, hard-won knowledge (a developer explaining a framework they ship with daily).</p>

            <h3>Authoritativeness</h3>
            <p>Recognition by others in your field as a go-to source. Authority is reputational — it lives largely <em>off</em> your page. Are you cited, linked, reviewed, mentioned, and referenced by other credible people and sites? You can claim expertise yourself; authority is something the wider web grants you.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Trustworthiness — the pillar that holds up the rest</h4>
              <p className="text-gray-300 mb-0">Google has been explicit that <strong>Trust is the most important member of the E-E-A-T family</strong>. The other three exist to support it. A page can be written by an experienced, expert, authoritative author and still fail if it&rsquo;s inaccurate, deceptive, unsafe, or hides who&rsquo;s behind it. Trust is about whether the content is honest, accurate, safe, and transparent — clear authorship, real citations, secure pages, and no dark patterns.</p>
            </div>

            <h2>E-E-A-T is not a ranking factor — and that trips people up</h2>
            <p>Here&rsquo;s the part that confuses most people: there is <strong>no E-E-A-T score</strong> in Google&rsquo;s algorithm. You cannot optimize a number, because there isn&rsquo;t one. E-E-A-T is a concept in Google&rsquo;s <em>Search Quality Rater Guidelines</em> — the manual given to thousands of human raters who evaluate sample search results.</p>
            <p>Those raters don&rsquo;t change rankings directly. Their judgments are aggregated and used to <em>train and validate</em> Google&rsquo;s automated systems. So E-E-A-T influences ranking indirectly but powerfully: it&rsquo;s the human definition of &ldquo;quality&rdquo; that the algorithms are built to approximate. Chasing a fake metric is the wrong move; building genuine experience, expertise, authority, and trust is the right one.</p>

            <h2>Why YMYL raises the stakes</h2>
            <p>E-E-A-T matters everywhere, but it becomes critical for <strong>YMYL — &ldquo;Your Money or Your Life&rdquo;</strong> topics: health, finance, legal advice, safety, major life decisions. These are subjects where inaccurate or deceptive content can cause real-world harm — physical, financial, or otherwise.</p>
            <p>For YMYL queries, Google sets a much higher bar. It would rather surface a cautious, well-sourced, clearly-credentialed page than a slick one of uncertain provenance. If you operate in a YMYL space, weak E-E-A-T isn&rsquo;t a missed opportunity — it&rsquo;s a hard ceiling on your visibility.</p>

            <h2>How to build E-E-A-T into a website (not just the words)</h2>
            <p>E-E-A-T is usually discussed as a content problem, but a lot of it is a <em>site</em> problem — design, structure, and signals that live outside the article body. This is where a well-built website earns trust before a visitor reads a single sentence:</p>

            <ul>
              <li><strong>Real, visible authorship.</strong> Named authors with genuine bios, photos, and credentials — linked to a detailed About page and their professional profiles. Anonymous content struggles on E-E-A-T.</li>
              <li><strong>Transparent identity and contact.</strong> Who runs this site? A clear About, real contact details, and an honest business presence all signal Trust.</li>
              <li><strong>Citations and evidence.</strong> Link claims to credible sources. Show your work — data, screenshots, first-hand examples — to demonstrate Experience.</li>
              <li><strong>Third-party proof.</strong> Reviews, testimonials, awards, press, and profiles on recognized platforms build Authoritativeness. Mark them up with structured data so machines can read them too.</li>
              <li><strong>Technical trust.</strong> HTTPS, fast load times, accessible markup, no intrusive interstitials or dark patterns. A page that feels broken or manipulative erodes trust no matter how good the writing is.</li>
              <li><strong>Accuracy and freshness.</strong> Keep content correct and current. Stale dates and broken facts read as neglect.</li>
            </ul>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">The AI-era angle</h4>
              <p className="text-gray-300 mb-0">As generative AI floods the web with competent-but-anonymous text, the signals that <em>can&rsquo;t</em> be faked at scale — first-hand experience, verifiable credentials, real reputation, transparent identity — become the differentiators. E-E-A-T is increasingly how both Google and AI answer engines decide whose content to trust and cite. The same fundamentals that win Search now also win <a href="/blog/what-is-aeo">Answer Engine Optimization</a> and <a href="/blog/what-is-geo">Generative Engine Optimization</a>.</p>
            </div>

            <h2>The takeaway</h2>
            <p>E-E-A-T isn&rsquo;t a checkbox or a dial you turn up. It&rsquo;s a description of what credible content looks like to a careful human reader — and Google&rsquo;s systems are built to find more of it. Demonstrate that you&rsquo;ve actually done the work (Experience), that you know your subject (Expertise), that others vouch for you (Authoritativeness), and that everything about your site is honest and verifiable (Trustworthiness). Do that consistently and you&rsquo;re not gaming an algorithm — you&rsquo;re becoming the result it&rsquo;s trying to reward.</p>
          </div>

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">Marc Friedman</h3>
                <p className="text-white">Full Stack Designer &amp; Developer</p>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1877F2]/20 text-[#1877F2] transition-colors" aria-label="Share on Facebook">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors" aria-label="Share on X">
                <TwitterIcon className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#0077B5]/20 text-[#0077B5] transition-colors" aria-label="Share on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#A3D1FF]/20 text-[#A3D1FF] transition-colors" aria-label="Copy link">
                <Link className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
                    alt="What Is AEO? Answer Engine Optimization Explained"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What Is AEO? Answer Engine Optimization Explained</h4>
                  <p className="text-white text-sm mb-4">How to structure content so ChatGPT, Perplexity, and Google AI can extract and cite it.</p>
                  <button
                    onClick={() => router.push('/blog/what-is-aeo')}
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
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
                    alt="What Is GEO? Generative Engine Optimization Explained"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What Is GEO? Generative Engine Optimization Explained</h4>
                  <p className="text-white text-sm mb-4">Showing up inside AI-generated answers across LLMs — the new SEO playbook.</p>
                  <button
                    onClick={() => router.push('/blog/what-is-geo')}
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
          <h2 className="text-3xl font-bold text-white mb-4">Want a site that earns trust by design?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Clear authorship, fast and secure pages, structured proof, and content that demonstrates real expertise — built in from the ground up. Let&rsquo;s build it.
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

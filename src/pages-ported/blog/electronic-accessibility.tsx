"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Linkedin, Facebook, Link, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function ElectronicAccessibilityPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Electronic Accessibility: Making Digital Content Work for Everyone",
    "description":
      "A practical guide to electronic (digital) accessibility, what it is, why it matters legally and commercially, the POUR and WCAG standards, and how to remove the barriers in websites, documents, video, email, and social media.",
    "image": "https://images.surferseo.art/cb035972-4d77-4a5c-aa7d-abe70c2165fd.png",
    "datePublished": "2026-07-16T08:00:00+00:00",
    "dateModified": "2026-07-16T08:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/electronic-accessibility"
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
            Electronic Accessibility: Making Digital Content Work for Everyone
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
              src="https://images.surferseo.art/cb035972-4d77-4a5c-aa7d-abe70c2165fd.png"
              alt="A person working at a laptop alongside a refreshable Braille display, one of the assistive technologies that depend on accessible digital design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>Electronic accessibility is the practice of designing digital technology so that people with disabilities can perceive, navigate, and interact with it, no barriers, no separate second-class version. If your organization ships websites, sends email, or publishes documents, this is the working knowledge you need, and the short list of things to actually do about it.</p>

            <h2>What electronic accessibility actually means</h2>
            <p>At its simplest, electronic accessibility, often called digital accessibility, means your digital touchpoints are usable by people with disabilities. That covers web pages and mobile apps, but it does not stop there. It reaches software, document formats like PDFs and slide decks, audio, video, email, and anything else delivered through a screen. The goal is equal access to the same information, services, and experiences everyone else gets, in the same place, not a stripped-down side door.</p>
            <p>Physical accessibility is the useful analogy. Ramps stand in for stairs, elevators serve people who cannot climb, Braille signage aids navigation, captioned announcements reach people with hearing loss. Electronic accessibility runs the same logic in software: alt text stands in for visual-only images, keyboard operation stands in for mouse-only interfaces, captions stand in for audio-only messages.</p>
            <p>None of this is optional. It is a legal requirement under the UK Equality Act 2010 and the Americans with Disabilities Act, and the European Accessibility Act took effect across EU member states in June 2025. Section 508 of the Rehabilitation Act covers US federal agencies; the Public Sector Bodies Accessibility Regulations cover UK public sector sites. The people affected are a wide group: visual, hearing, motor, cognitive, and neurological disabilities, plus older adults and anyone with a temporary or situational limitation, a broken arm, a noisy train, a sun-washed screen. Assistive technology, from screen readers to speech recognition to switch devices, only works when the underlying design gives it something to work with.</p>

            <h2>Why it matters</h2>
            <p>Start with one number: about <a href="https://www.cdc.gov/disability-and-health/articles-documents/disabilities-health-care-access.html">one in four US adults</a> reports having a disability. Shutting that group out of your digital services is both a rights failure and a commercial one. Accessible content supports independence and spares people the friction of design that quietly excludes them.</p>
            <p>The money is just as concrete. The UK&rsquo;s <a href="https://www.clickawaypound.com/cap16finalreport.html">Click-Away Pound research</a> put lost revenue at £17.1 billion in 2019, spending that walked away because shoppers with access needs hit an unusable site and left. On the compliance side, the <a href="https://www.ada.gov/assets/pdfs/web-rule.pdf">2024 DOJ final rule</a> under ADA Title II now explicitly requires WCAG 2.1 AA for state and local government web content and mobile apps.</p>
            <p>And accessibility features tend to help everyone, not only the people they were written for. Captions let commuters watch video on mute. Transcripts give search engines text to index. Keyboard shortcuts make power users faster. Designing for a genuine range of abilities produces products that are simply better built.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">The cost of ignoring it</h4>
              <p className="text-gray-300 mb-0">Skipping accessibility stacks up three risks at once: legal complaints and lawsuits, reputational damage when the exclusion becomes public, and the quiet loss of audiences you needed, students, customers, community members, and employees whose needs went unmet.</p>
            </div>

            <h2>The standards: POUR and WCAG</h2>
            <p>Modern web accessibility rests on the <strong>POUR</strong> framework, four properties every interface should have:</p>
            <ul>
              <li><strong>Perceivable.</strong> Users can detect the content, for example captions on a training video.</li>
              <li><strong>Operable.</strong> Users can work every feature, which means keyboard navigation has to do everything a mouse can.</li>
              <li><strong>Understandable.</strong> Content is clear and predictable; consistent navigation lowers the cognitive load for everyone.</li>
              <li><strong>Robust.</strong> Content holds up across browsers and assistive technologies, now and as they change. Semantic HTML is how you get there, because it hands real structure to a screen reader instead of a wall of undifferentiated markup.</li>
            </ul>
            <p>The <strong>Web Content Accessibility Guidelines (WCAG)</strong> turn those principles into testable criteria, and nearly every accessibility law on earth points back to them. <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/">WCAG 2.1 became a W3C recommendation in June 2018</a>, and WCAG 2.2 followed in October 2023, adding criteria for target size, accessible authentication, and more. WCAG 2.2 AA is the usual compliance target, and its criteria apply across web pages, forms, learning platforms, and documents alike.</p>
            <p>Regional standards mostly wrap WCAG rather than replace it. In the EU, <a href="https://en.wikipedia.org/wiki/EN_301_549">EN 301 549</a> harmonizes accessibility requirements for ICT procurement and references WCAG directly; US Section 508 maps to it too. For most organizations, an accessibility policy is really just a commitment to meet WCAG on every platform you run.</p>

            <div className="aspect-[21/9] overflow-hidden my-8">
              <img
                src="https://images.surferseo.art/c61de429-e661-4dcb-af34-419f2e9bbbab.png"
                alt="A diverse group of people using tablets, phones, and laptops around a table, illustrating equal access to digital content across abilities"
                className="w-full h-full object-cover"
              />
            </div>

            <h2>It applies to every content type, not just the website</h2>
            <p>Accessibility covers everything your organization publishes. Here is how the requirements break down by format.</p>

            <h3>Websites</h3>
            <p>The fundamentals carry most of the weight: a meaningful heading structure, contrast ratios that clear WCAG&rsquo;s ≥ 4.5:1 for normal text, alt text on images, keyboard-operable forms, and interactive elements that are properly labeled. Users should be able to zoom without losing content or being forced into horizontal scrolling. Most barriers on corporate and university sites trace straight back to these basics.</p>

            <h3>Social media</h3>
            <p>X, Facebook, LinkedIn, Instagram, and TikTok all offer alt-text fields and automatic captioning, but someone has to turn them on and check them. Write hashtags in CamelCase (#AccessibilityMatters) so screen readers can parse the words, add real image descriptions, and never lock essential text inside an image.</p>

            <h3>Video and audio</h3>
            <p>Closed captions carry the audio for people who cannot hear it; audio descriptions narrate the visuals for people who cannot see them. Transcripts turn spoken content into text, which is what makes recorded lectures, webinars, and podcasts usable and, as a bonus, indexable. Podcasts get skipped here more than anything else, so start there if you are behind.</p>

            <h3>Electronic documents</h3>
            <p>A PDF is accessible only when assistive technology can read it. Use true text rather than scanned images, tag headings and tables, write descriptive link text, and build from accessible templates in Word and PowerPoint. Screen readers navigate by structure, so an untagged document is effectively invisible no matter how clean it looks. Every document you publish, from a one-page flyer to a 200-page report, should clear that bar.</p>

            <h3>Email and newsletters</h3>
            <p>Use semantic structure, meaningful subject lines, descriptive call-to-action buttons, and adequate contrast. Avoid image-only layouts, which collapse the moment images are blocked or the client renders them differently.</p>

            <h2>Common barriers, and how to remove them</h2>
            <p>A barrier is any design or technical choice that stops someone from finishing a task, applying for a service, buying something, reaching a resource. Here are the usual ones, with the fix.</p>

            <div className="aspect-[21/9] overflow-hidden my-8">
              <img
                src="https://images.surferseo.art/5df7481e-91ca-4212-9ef2-c7773ffd498f.png"
                alt="Someone navigating a website by keyboard, with a visible focus indicator highlighting the active element"
                className="w-full h-full object-cover"
              />
            </div>

            <h3>Visual barriers</h3>
            <p>Poor contrast, missing alt text, and text baked into images are the most common failures. A campus event flyer posted only as a low-resolution image in early 2024 was unreadable to any student relying on a screen reader. <strong>Fix:</strong> hold WCAG contrast ratios, always ship alt text, and keep text as live, scalable content.</p>

            <h3>Hearing barriers</h3>
            <p>Uncaptioned video, untranscribed podcasts, and audio-only alerts shut out people who are deaf or hard of hearing. A 2025 policy-update video with no captions left staff unable to follow information they were accountable for. <strong>Fix:</strong> caption every video, transcribe every audio file, and pair audio alerts with an on-screen cue.</p>

            <h3>Motor and keyboard barriers</h3>
            <p>Drag-and-drop-only interactions, tiny click targets, and mouse-dependent forms exclude people with limited motor control. An HR onboarding portal that accepts uploads only by drag-and-drop blocks anyone who cannot use a mouse. <strong>Fix:</strong> make every interactive element keyboard-operable, give targets enough size, and offer an alternative input path.</p>

            <h3>Cognitive and neurological barriers</h3>
            <p>Dense text, inconsistent navigation, autoplaying media, and gnarly CAPTCHAs create confusion and fatigue, and they hit people with cognitive disabilities hardest. <strong>Fix:</strong> clear headings, plain language, predictable layouts, and accessible verification such as email-based authentication. Test both ways, too: automated tools catch contrast and missing labels, but only human review catches the rest.</p>

            <h2>Whose job is this? Everyone&rsquo;s</h2>
            <p>Accessibility is shared across every role that touches a digital product. Developers write semantic markup. Designers pick usable palettes and visible focus styles. Content creators add alt text and descriptive headings. Faculty tag their PDFs and slide decks and caption their lecture video. Communications teams check that social posts meet the guidelines. IT selects platforms that support accessibility, and administrators set procurement standards so third-party tools clear the same bar.</p>
            <p>The most useful habit is to <strong>shift left</strong>: plan for accessibility at the start of a project, a redesign, a new document template, a one-page form, instead of retrofitting it later at several times the cost. You can start today with small moves, run the built-in checkers in Microsoft 365 and Google Workspace, keyboard-test your most-visited page, invite people with disabilities to review a key service. Equal access is not a one-time project; it is an ongoing practice you build into publishing workflows and checklists, and treat exactly like security or brand compliance, something everyone owns.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Start here</h4>
              <p className="text-gray-300 mb-0">Pick one thing, a single page, one document, or one video. Test it, fix what you find, and move to the next. Momentum beats a perfect plan you never start.</p>
            </div>
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
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2000&q=80"
                    alt="Mobile-First Design Principles"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Mobile-First Design Principles</h4>
                  <p className="text-white text-sm mb-4">Designing for the smallest screen and the widest range of contexts first, then scaling up.</p>
                  <button
                    onClick={() => router.push('/blog/mobile-first-design-principles')}
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
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
                    alt="Minimal, Fast, and Sustainable UX"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Minimal, Fast, and Sustainable UX</h4>
                  <p className="text-white text-sm mb-4">Leaner layouts and fewer heavy scripts make experiences calmer, faster, and easier to use for everyone.</p>
                  <button
                    onClick={() => router.push('/blog/minimal-fast-sustainable-ux')}
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
          <h2 className="text-3xl font-bold text-white mb-4">Want a site that works for everyone?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Accessible markup, real keyboard support, sufficient contrast, and content assistive tech can actually read, built in from the first commit, not bolted on later. Let&rsquo;s build it.
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

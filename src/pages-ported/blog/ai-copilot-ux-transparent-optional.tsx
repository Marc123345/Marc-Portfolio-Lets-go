"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Info } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function AiCopilotUxPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "AI Copilots in Web Design: Transparent, Optional and Easy to Ignore",
    "description":
      "How to add an AI assistant to a website or product without it taking over: clear labelling, sources, easy dismissal, a working non-AI path and honest limits. Patterns to use and patterns to avoid.",
    "image": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2000&q=80",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/ai-copilot-ux-transparent-optional"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI copilot on a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI assistant built into a website or app that helps with a task the person is already doing, such as summarising a document, drafting a reply, finding the right product or filling in a form. The person stays in control and decides whether to use the suggestion."
        }
      },
      {
        "@type": "Question",
        "name": "How should AI features be labelled in a user interface?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clearly and at the point of use. Mark AI-generated text as AI-generated, say what the assistant can and cannot do, link to the sources it used where possible, and make it obvious when someone is talking to software rather than a person. In the EU, the AI Act's transparency rules add a legal reason to do this."
        }
      },
      {
        "@type": "Question",
        "name": "Should an AI chat widget open automatically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually not. Pop-up chat bubbles that open on page load interrupt people, cover content on mobile and train visitors to close them without reading. A visible but closed entry point, placed where help is likely to be needed, works better."
        }
      },
      {
        "@type": "Question",
        "name": "Does every website need an AI assistant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. If visitors can find what they need with good navigation, search and clear content, an assistant adds cost and risk without much benefit. AI help earns its place on sites with large catalogues, complex documentation, long forms or repetitive tasks."
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
            AI Copilots in Web Design: Transparent, Optional and Easy to Ignore
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
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2000&q=80"
              alt="A person in a mustard sweater typing on a laptop at a wooden table."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>Two years ago, adding AI to a website usually meant a chat bubble in the bottom-right corner that popped open, waved, and offered to &ldquo;help with anything.&rdquo; Most people closed it. Some asked it a real question and got a confident wrong answer.</p>

            <p>The better products have moved on. The AI is still there, but it behaves like a capable colleague sitting nearby: it offers help where it&rsquo;s relevant, shows its working, and gets out of the way when you don&rsquo;t need it. That&rsquo;s the copilot pattern, and it&rsquo;s the one I now recommend to clients who want AI in their product or site.</p>

            <h2>Copilot versus widget</h2>

            <p>The difference is less about the model and more about who&rsquo;s in charge.</p>

            <ul>
              <li><strong>A widget</strong> sits on top of the page, interrupts on its own schedule, and presents its answers as final.</li>
              <li><strong>A copilot</strong> sits inside the task. It appears next to the form field, the document or the search results, offers a suggestion, and leaves the decision to the person.</li>
            </ul>

            <p>Good examples are quiet: a &ldquo;Summarise&rdquo; button above a long report, suggested replies under a support ticket that the agent edits before sending, a search box that understands plain-language questions and still returns normal results underneath. In each case you could ignore the AI completely and the page would still work.</p>

            <h2>Principle 1: make it obvious what&rsquo;s AI</h2>

            <p>People should never have to wonder whether text was written by a person or generated. Label AI output where it appears, not in a policy page. A small &ldquo;AI-generated&rdquo; or &ldquo;Suggested by AI&rdquo; tag next to the content is enough.</p>

            <p>The same goes for conversations. If a visitor is chatting with software, tell them up front, and make it easy to reach a human when the stakes are high. In the EU this is becoming a legal requirement as well: the AI Act&rsquo;s transparency rules, which start to apply from August 2026, require that people are told when they&rsquo;re interacting with an AI system, with some exceptions. Check the details for your situation with a lawyer, but the design direction is clear.</p>

            <h2>Principle 2: show the sources</h2>

            <p>An answer with no source asks for blind trust. An answer that links to the help article, product page or policy it came from lets the person check it in a click.</p>

            <ul>
              <li>Link each claim to the page it was drawn from.</li>
              <li>Quote short passages so people can see the original wording.</li>
              <li>When the assistant doesn&rsquo;t know, have it say so and point to search or a human, rather than guessing.</li>
            </ul>

            <p>Sources also protect you. When an answer is wrong, the link shows whether the problem is the AI or the content it read, and that tells you what to fix.</p>

            <h2>Principle 3: keep it optional</h2>

            <p>Every task the AI helps with should still be possible without it. That means:</p>

            <ul>
              <li>Search still returns normal results, with the AI summary as an extra on top.</li>
              <li>Forms can be filled in by hand, with AI autofill as a button rather than a default.</li>
              <li>Navigation and content stay complete. The assistant is never the only route to information.</li>
              <li>Users can switch the feature off, and the setting sticks.</li>
            </ul>

            <p>This matters for trust, for accessibility (not everyone can or wants to work through a chat interface), and for reliability. When the AI provider has an outage or rate-limits you, the site keeps working.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 not-prose">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Info className="w-5 h-5 text-[#A3D1FF] mr-2" />
                The unplug test
              </h4>
              <p className="text-gray-300">Imagine the AI feature is switched off tomorrow. Can every visitor still do what they came to do? If the answer is no, the AI has become a dependency instead of an assistant, and the design needs a non-AI path.</p>
            </div>

            <h2>Principle 4: let people edit and undo</h2>

            <p>AI output should arrive as a draft. Put suggestions into editable fields, show a clear &ldquo;Accept&rdquo; and &ldquo;Discard&rdquo;, and keep an undo for anything the assistant changes. Never let it send, buy, book or delete on its own without a confirmation step that names exactly what will happen.</p>

            <h2>Principle 5: be honest about limits and data</h2>

            <ul>
              <li>Say in one line what the assistant is for (&ldquo;Answers questions about our products and orders&rdquo;) so people don&rsquo;t ask it for things it can&rsquo;t do.</li>
              <li>Say what happens to what they type: whether it&rsquo;s stored, for how long, and whether it&rsquo;s used to train anything.</li>
              <li>Don&rsquo;t give it a human name and a stock-photo face. A friendly tone is fine, but pretending to be a person backfires the first time it gets something wrong.</li>
            </ul>

            <h2>Patterns to avoid</h2>

            <ul>
              <li>Chat bubbles that open by themselves on page load, especially on mobile where they cover the content</li>
              <li>Greeting messages that pretend to be a named sales rep</li>
              <li>AI answers with no sources and no &ldquo;I&rsquo;m not sure&rdquo; option</li>
              <li>Replacing site search entirely with a chat box</li>
              <li>Sparkle icons on every button, so nobody can tell which features actually use AI</li>
              <li>Hiding the human contact route to push people through the bot</li>
            </ul>

            <h2>Where AI help is worth adding</h2>

            <p>Not every site needs an assistant. A ten-page service site with clear content is better served by good navigation and a visible phone number. AI help starts paying off when:</p>

            <ul>
              <li>The catalogue or documentation is too big to browse comfortably</li>
              <li>Visitors ask the same questions in many different ways</li>
              <li>Forms are long and the data already exists somewhere (a PDF, a previous order, a company register)</li>
              <li>Staff repeat the same drafting or summarising work every day</li>
            </ul>

            <p>I covered the interface side of chat in more depth in <a href="/blog/conversational-ui-chat-interfaces">conversational UI and chat interfaces</a>, and the personalisation side in <a href="/blog/ai-native-ux-personalization">AI-native UX and personalisation</a>.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>What is an AI copilot on a website?</strong><br />An assistant built into the task a person is already doing, offering suggestions they can accept, edit or ignore.</p>

            <p><strong>How should AI features be labelled?</strong><br />At the point of use: mark AI-generated content, say what the assistant does, show sources and make it clear when someone is talking to software.</p>

            <p><strong>Should an AI chat widget open automatically?</strong><br />Usually not. A visible, closed entry point near where help is needed works better.</p>

            <p><strong>Does every website need an AI assistant?</strong><br />No. It earns its place on sites with large catalogues, complex content, long forms or repetitive tasks.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Thinking about adding AI to your site?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Tell me what your visitors or team are trying to get done. I&rsquo;ll tell you where an assistant would help, where it would get in the way, and how to design it so people trust it.
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
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2000&q=80"
                    alt="Conversational UI and chat interfaces"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Conversational UI &amp; Chat Interfaces</h4>
                  <p className="text-white text-sm mb-4">When chat is the right interface, and when a form is better.</p>
                  <button
                    onClick={() => router.push('/blog/conversational-ui-chat-interfaces')}
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
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80"
                    alt="Experimental navigation beyond the navbar"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Experimental Navigation</h4>
                  <p className="text-white text-sm mb-4">Canvases, folding pages and sites without a navbar, built so they still work.</p>
                  <button
                    onClick={() => router.push('/blog/experimental-navigation-beyond-the-navbar')}
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

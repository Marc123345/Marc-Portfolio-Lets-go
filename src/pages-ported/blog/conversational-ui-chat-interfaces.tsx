"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Linkedin, Facebook, Link, ArrowRight, MessageSquare, Zap, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Circle as XCircle, Users, Brain, Target, TrendingUp, Layers, Eye } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import { useRouter } from 'next/navigation';
export default function ConversationalUIChatInterfaces() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Conversational UI: When Chat Interfaces Help — and When They Hurt — Your UX",
    "description": "A deep dive into conversational UI design: how chat-style interfaces and AI assistants work, when they genuinely improve user experience, and the critical patterns that make them fail. Includes practical frameworks for deciding when to use conversational UI.",
    "image": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-04-13T10:00:00+00:00",
    "dateModified": "2026-04-13T10:00:00+00:00",
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
      "@id": "https://marcfriedmanportfolio.com/blog/conversational-ui-chat-interfaces"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is conversational UI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conversational UI (CUI) is any interface where users interact through natural language — text or voice — rather than menus, buttons, and forms. It includes rule-based chatbots, AI-powered assistants, voice interfaces, and LLM-driven copilots embedded in products."
        }
      },
      {
        "@type": "Question",
        "name": "When does conversational UI improve user experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conversational UI works best for high-variance open-ended queries, guided onboarding, hands-free and accessibility contexts, multi-step data collection, and ambiguity resolution. In these scenarios, natural language interaction reduces friction and improves completion rates."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most common conversational UI failure patterns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common failures are: replacing faster direct navigation with chat, getting stuck in misunderstanding loops, producing confidently wrong AI responses, having no memory or context between messages, and deploying chat without a clear use case."
        }
      },
      {
        "@type": "Question",
        "name": "What is a hybrid conversational interface?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A hybrid interface combines structured UI for predictable interactions with a conversational AI layer for open-ended, exploratory queries. Examples include Notion's AI sidebar and GitHub Copilot. This approach respects user preference and de-risks AI integration."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure conversational UI effectiveness?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key metrics include task completion rate, escalation rate, abandonment at step, repeat query rate, CSAT post-conversation, and deflection vs. resolution rate. Task completion rate is the primary success metric — below 60% for well-defined task types warrants redesign."
        }
      }
    ]
  };

  return (
    <>
      

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
            Conversational UI: When Chat Interfaces Help — and When They Hurt — Your UX
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>April 13, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>17 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden rounded-xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2000&q=80"
              alt="Conversational UI chat interface design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p className="text-xl text-gray-300 leading-relaxed">Chat interfaces are everywhere. AI assistants are being bolted onto products at an unprecedented pace. But more conversational UI doesn't automatically mean better UX — it often means slower, more frustrating, and more confusing interactions. <strong className="text-white">This is a practical, honest look at when conversational design genuinely helps users, when it gets in the way, and how to make the call.</strong></p>

            <h2>What Conversational UI Actually Is</h2>

            <p>Conversational UI (CUI) is any interface where users interact through natural language — text or voice — rather than menus, buttons, and forms. It encompasses a wide spectrum:</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Rule-Based Bots', desc: 'Fixed decision trees, keyword matching, scripted responses', color: 'border-gray-700' },
                  { label: 'AI Assistants', desc: 'Intent recognition, context memory, dynamic generation', color: 'border-[#A3D1FF]/30' },
                  { label: 'Copilot Interfaces', desc: 'Embedded in apps, contextually aware, action-capable', color: 'border-[#A3D1FF]/50' },
                ].map((item) => (
                  <div key={item.label} className={`bg-black/30 border ${item.color} rounded-lg p-4`}>
                    <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p>The appeal is intuitive. Conversation is the most natural form of human communication. If your interface can talk to users the way another person would, it should be effortless to use — no learning curve, no manual required.</p>

            <p>But that logic contains a subtle trap. Natural language is expressive and flexible, but it's also ambiguous, slow to parse, and cognitively expensive for the system to interpret correctly. When the interface fails to understand what a user meant — which happens constantly — the breakdown is more jarring than clicking the wrong button. Users don't just get a wrong result; they feel misunderstood.</p>

            <h2>When Conversational UI Genuinely Helps</h2>

            <p>Chat interfaces aren't inherently good or bad — they're appropriate or inappropriate for a given context. There are several situations where conversational design delivers real, measurable UX improvement.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <div className="space-y-4">
                {[
                  {
                    title: 'High-variance, open-ended queries',
                    detail: "When users need to ask questions that don't map neatly to a finite set of menu options — think customer support for a complex product, or exploratory research — natural language lets them express exactly what they need without forcing them to guess which category their problem falls under.",
                    icon: <Brain className="w-4 h-4 text-[#A3D1FF]" />,
                  },
                  {
                    title: 'Guided onboarding and discovery',
                    detail: "For complex products with a large feature surface, a conversational flow can walk new users through setup in a way that feels approachable. Instead of presenting a dashboard full of unfamiliar controls, the assistant asks a few targeted questions and configures the experience accordingly.",
                    icon: <Target className="w-4 h-4 text-[#A3D1FF]" />,
                  },
                  {
                    title: 'Hands-free and accessibility contexts',
                    detail: "Voice-based conversational interfaces are often the only viable option for users who can't interact with a screen — while driving, cooking, or for users with motor impairments. In these contexts, conversation isn't a design trend; it's a functional necessity.",
                    icon: <Users className="w-4 h-4 text-[#A3D1FF]" />,
                  },
                  {
                    title: 'Multi-step data collection',
                    detail: "Long forms have completion problems. Breaking the same information gathering into a conversational flow — one question at a time, with context-aware follow-ups — consistently improves completion rates. The perceived effort is lower even when the total input required is identical.",
                    icon: <Layers className="w-4 h-4 text-[#A3D1FF]" />,
                  },
                  {
                    title: 'Ambiguity resolution',
                    detail: 'When users arrive with intent that could mean several different things, a brief clarifying conversation is often faster than presenting a sprawling results page. A bot that asks "Are you looking to buy or rent?" saves everyone time.',
                    icon: <Eye className="w-4 h-4 text-[#A3D1FF]" />,
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-black/30 border border-white/5 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <p className="text-white font-semibold">{item.title}</p>
                    </div>
                    <p className="text-white text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <p className="text-[#A3D1FF] font-semibold text-sm mb-2">Real-world benchmark</p>
              <p className="text-white text-sm leading-relaxed">
                Intercom's data on conversational lead qualification flows found 35–40% higher completion rates compared to traditional multi-field forms. The difference wasn't the amount of information collected — it was the perceived effort and the sense of being guided rather than tested.
              </p>
            </div>

            <h2>When Conversational UI Hurts UX</h2>

            <p>The honest truth is that most deployed chatbots make the user experience worse, not better. Here are the failure patterns that show up most consistently.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <div className="space-y-6">
                <div className="border-l-2 border-red-500/40 pl-5">
                  <p className="text-white font-semibold mb-2">1. Replacing faster direct navigation</p>
                  <p className="text-white text-sm leading-relaxed mb-3">
                    If a user can find what they need in two clicks, making them type a query and wait for a response is a regression — not progress. Chat UI adds latency: the user has to articulate a request, the system has to interpret it, and they have to evaluate whether the response matches what they actually wanted.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 text-sm">
                    <p className="text-red-400 font-medium mb-1">The trap:</p>
                    <p className="text-white">A SaaS app replaces its "Settings → Notifications" page with an AI assistant. Now users have to type "How do I turn off email notifications?" instead of clicking a toggle. Every interaction is now two steps slower with a chance of misinterpretation.</p>
                  </div>
                </div>

                <div className="border-l-2 border-red-500/40 pl-5">
                  <p className="text-white font-semibold mb-2">2. The "I didn't understand that" loop</p>
                  <p className="text-white text-sm leading-relaxed mb-3">
                    Rule-based bots have a notoriously narrow vocabulary. When users phrase a request in a way the bot doesn't recognize, they get a fallback response and have to try again. Each failed attempt increases frustration exponentially. After two failures, most users abandon the bot entirely — and often the task.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 text-sm">
                    <p className="text-[#A3D1FF] font-medium mb-1">The fix:</p>
                    <p className="text-white">Design escalation paths. If the bot can't resolve an intent after two attempts, proactively offer human escalation, a direct link, or a structured fallback menu. Never leave users in a loop.</p>
                  </div>
                </div>

                <div className="border-l-2 border-red-500/40 pl-5">
                  <p className="text-white font-semibold mb-2">3. Confidently wrong AI responses</p>
                  <p className="text-white text-sm leading-relaxed mb-3">
                    LLM-powered assistants have the opposite problem from rule-based bots: they always produce a response, regardless of whether they actually know the answer. Hallucinated information presented with confidence — especially in customer support, legal, or financial contexts — is worse than "I don't know." It erodes trust irreversibly.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 text-sm">
                    <p className="text-[#A3D1FF] font-medium mb-1">The fix:</p>
                    <p className="text-white">Constrain the assistant's knowledge domain. Use retrieval-augmented generation (RAG) to ground responses in verified content. Build in explicit uncertainty signals when confidence is low.</p>
                  </div>
                </div>

                <div className="border-l-2 border-red-500/40 pl-5">
                  <p className="text-white font-semibold mb-2">4. No memory, no context</p>
                  <p className="text-white text-sm leading-relaxed">
                    Many chat implementations treat each message as isolated. Users are forced to repeat context they already provided — their account type, their problem history, what they already tried. Having to do so in a "conversational" interface is intensely frustrating precisely because it breaks the conversational contract.
                  </p>
                </div>

                <div className="border-l-2 border-red-500/40 pl-5">
                  <p className="text-white font-semibold mb-2">5. Novelty deployed without purpose</p>
                  <p className="text-white text-sm leading-relaxed">
                    The most common chatbot failure isn't technical — it's strategic. Teams add a chat widget because it seems modern, because competitors have one, or because an AI product demo looked compelling. Without a defined use case, the bot answers a set of questions no real user is actually asking, while genuine user needs go unaddressed.
                  </p>
                </div>
              </div>
            </div>

            <h2>The Spectrum of Conversational Interfaces</h2>

            <p>Not all conversational interfaces are alike. Understanding where a given implementation falls on this spectrum shapes every design decision.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 overflow-x-auto not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[#A3D1FF] pb-3 pr-4 font-semibold">Type</th>
                    <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Strengths</th>
                    <th className="text-left text-gray-300 pb-3 font-semibold">Failure modes</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {[
                    { type: 'Scripted chatbot', strengths: 'Predictable, fast, cheap to maintain', failures: 'Breaks on unexpected phrasing, feels robotic' },
                    { type: 'Intent-based NLP bot', strengths: 'Handles phrasing variations, scalable', failures: 'Still bounded by training data, struggles with edge cases' },
                    { type: 'LLM assistant (generic)', strengths: 'Broad knowledge, natural conversation', failures: 'Hallucination risk, hard to control scope' },
                    { type: 'RAG-grounded LLM', strengths: 'Accurate within domain, cites sources', failures: 'Only as good as the knowledge base' },
                    { type: 'Copilot (in-app agent)', strengths: 'Action-capable, contextually aware, highest utility', failures: 'Complex to build, catastrophic failure potential' },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-white/5">
                      <td className="py-3 pr-4 text-white font-medium">{row.type}</td>
                      <td className="py-3 pr-4 text-white">{row.strengths}</td>
                      <td className="py-3 text-white">{row.failures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Design Principles That Make or Break Conversational Interfaces</h2>

            <p>When you've established that a chat interface is genuinely the right tool, these principles determine whether it will be a quality experience or a liability.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Show, don't ask", detail: "Where possible, surface relevant options rather than making users describe what they want from scratch. Quick reply chips, smart suggestions, and contextual prompts reduce the blank-slate problem dramatically." },
                  { title: 'Set honest expectations', detail: "Tell users up front what the bot can and cannot do. Unexpectedly narrow scope destroys trust. Declared scope manages it." },
                  { title: 'Design for failure first', detail: "Every conversational interface will fail. Design the failure states before you design the success states. These flows determine your real user experience." },
                  { title: 'Preserve conversation state', detail: "Implement session memory and, where appropriate, cross-session history. Users should never have to repeat themselves." },
                  { title: 'Give users an exit', detail: "Always provide a visible, frictionless path to human support or direct navigation. The bot is a layer on top of the product — not a wall between the user and what they need." },
                  { title: 'Match the conversation register', detail: "The tone of the bot should match the product context. Overly casual language in a high-stakes context (medical, financial, legal) signals untrustworthiness." },
                ].map((item) => (
                  <div key={item.title} className="bg-black/30 border border-white/5 rounded-lg p-5">
                    <p className="text-[#A3D1FF] font-semibold text-sm mb-2">{item.title}</p>
                    <p className="text-white text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2>A Decision Framework: Should This Be a Chat?</h2>

            <p>Before committing to conversational UI, run through this evaluation honestly. The goal isn't to avoid chat interfaces — it's to use them where they provide genuine value.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <div className="space-y-3">
                {[
                  { question: 'Can users accomplish this task faster with direct navigation?', ifYes: 'Build or improve the direct path. Add chat as a supplement, not a replacement.', signal: 'warning' },
                  { question: 'Does the task involve high variance in user intent?', ifYes: 'Conversational UI is a strong fit. The flexibility of natural language is an actual advantage here.', signal: 'good' },
                  { question: 'Does success depend on users providing multi-step information?', ifYes: 'Conversational flows typically outperform forms for complex data collection.', signal: 'good' },
                  { question: "Will the bot need to handle edge cases it wasn't trained on?", ifYes: 'Design explicit escalation before launch. An LLM without domain grounding will hallucinate.', signal: 'warning' },
                  { question: 'Is the task high-stakes (financial, medical, legal)?', ifYes: 'Extra investment in accuracy, citation, and human escalation is non-negotiable.', signal: 'warning' },
                  { question: 'Will you actually measure success metrics?', ifYes: "Deploy with clear KPIs: task completion rate, escalation rate, satisfaction score. Without measurement, you can't improve.", signal: 'good' },
                ].map((item) => (
                  <div
                    key={item.question}
                    className={`rounded-lg p-4 border ${item.signal === 'good' ? 'bg-emerald-900/20 border-emerald-700/30' : 'bg-yellow-900/20 border-yellow-700/30'}`}
                  >
                    <p className={`font-semibold text-sm mb-1 ${item.signal === 'good' ? 'text-emerald-400' : 'text-yellow-400'}`}>
                      {item.question}
                    </p>
                    <p className="text-white text-sm leading-relaxed">{item.ifYes}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2>The Emerging Model: Hybrid Interfaces</h2>

            <p>The most sophisticated conversational UI implementations in 2026 aren't choosing between chat and traditional interface — they're combining both deliberately. The result is a hybrid model where structured UI handles known, predictable interactions, and conversational AI handles open-ended, exploratory, or high-complexity queries.</p>

            <p>Notion's AI sidebar, Linear's command palette, and GitHub Copilot's inline suggestions all follow this pattern. They don't replace the core interface with chat — they add a conversational layer on top of a well-structured product. Users who prefer direct navigation continue to use it. Users who prefer to ask are accommodated. Power users learn to use both modes fluidly.</p>

            <p>This is the right model for most products. It respects user expertise and preference while extending the interface's capabilities. It also de-risks AI integration: if the conversational layer fails or produces a bad response, the underlying product still works.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <p className="text-[#A3D1FF] font-semibold mb-4 text-sm uppercase tracking-wide">Hybrid architecture pattern</p>
              <div className="space-y-3 text-sm">
                {[
                  { layer: 'Core product UI', role: 'Structured navigation, direct task paths, power user workflows' },
                  { layer: 'Conversational layer', role: 'Open-ended queries, onboarding, multi-step flows, disambiguation' },
                  { layer: 'Proactive AI', role: 'Contextual suggestions, anomaly detection, personalized nudges' },
                  { layer: 'Human escalation', role: 'High-stakes decisions, edge cases, trust-critical moments' },
                ].map((item) => (
                  <div key={item.layer} className="flex items-start gap-3">
                    <span className="text-[#A3D1FF] font-medium w-40 flex-shrink-0">{item.layer}</span>
                    <span className="text-white">{item.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2>Measuring Conversational UI Effectiveness</h2>

            <p>Conversational interfaces have historically been under-measured. Teams ship a bot, monitor sentiment anecdotally, and declare success. This is how bad bots survive for years — no one is tracking whether they're actually helping.</p>

            <p>The metrics that actually matter:</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8 not-prose">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { metric: 'Task completion rate', desc: 'Did the user accomplish what they came to do via the conversational interface? This is the primary success metric. Anything below 60% for well-defined task types warrants redesign.' },
                  { metric: 'Escalation rate', desc: "What percentage of conversations require human escalation or fallback to direct navigation? High rates indicate the bot's scope is too broad or its responses are insufficient." },
                  { metric: 'Abandonment at step', desc: 'In multi-step flows, where do users drop off? Conversation analytics tools can attribute abandonment to specific bot turns, enabling targeted fixes.' },
                  { metric: 'Repeat query rate', desc: "Are users asking the same question multiple ways? This signals ambiguous or insufficient bot responses — the user didn't trust the first answer." },
                  { metric: 'CSAT post-conversation', desc: 'A simple post-conversation rating surfaces qualitative signal. Track it by intent category to identify which use cases the bot handles well vs. poorly.' },
                  { metric: 'Deflection vs. resolution', desc: "Deflection (chat closed without escalation) isn't the same as resolution (user actually got what they needed). Many teams conflate these, dramatically overcounting success." },
                ].map((item) => (
                  <div key={item.metric} className="bg-black/30 border border-white/5 rounded-lg p-4">
                    <p className="text-white font-semibold text-sm mb-1">{item.metric}</p>
                    <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2>The Honest Bottom Line</h2>

            <p>Conversational UI is a powerful design pattern in specific contexts. It is not a universal upgrade. The impulse to add chat — driven by AI product momentum and competitive pressure — is producing a wave of interfaces that are slower, more opaque, and more error-prone than the simpler interfaces they replaced.</p>

            <p>The best conversational experiences are purposefully scoped, rigorously measured, and designed with failure as a first-class concern. They respect the user's time and intelligence. They escalate gracefully when they reach their limits. And critically — they coexist with, rather than replace, the structured interfaces that users have learned to navigate efficiently.</p>

            <p><strong className="text-white">The question to ask before adding any chat interface is not "Can we build this?" — it's "Is this faster, clearer, and more reliable than what users can do today?" If the honest answer is no, the conversational interface is a feature for the product team's roadmap, not a service to the user.</strong></p>

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
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
                    alt="What Is GEO? Generative Engine Optimization Explained"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What Is GEO? Generative Engine Optimization Explained for Modern Search</h4>
                  <p className="text-white text-sm mb-4">Learn what Generative Engine Optimization (GEO) is and how to optimize your content to appear in AI-generated search results.</p>
                  <button
                    onClick={() => router.push('/blog/what-is-geo')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
                    alt="What Is AEO? Answer Engine Optimization Explained"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What Is AEO? Answer Engine Optimization Explained for 2026 and Beyond</h4>
                  <p className="text-white text-sm mb-4">Learn what Answer Engine Optimization (AEO) is, how it differs from traditional SEO, and why it matters for modern visibility.</p>
                  <button
                    onClick={() => router.push('/blog/what-is-aeo')}
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
          <h2 className="text-3xl font-bold text-white mb-4">Thinking About Adding a Conversational Interface?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            I help teams design conversational and AI-powered experiences that solve real user problems — not just add surface-level AI features. Let's talk about what would actually move the needle for your product.
          </p>
          <MagneticButton>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}

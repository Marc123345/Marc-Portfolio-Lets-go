"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Globe, Megaphone, Users, ChartBar as BarChart3, Target, Sparkles, Palette, Search, Share2, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
const LIVE_URL = "https://www.h2hsocialmarketing.com/";
const HERO_IMAGE = "https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png";

export default function H2HMarketingPage() {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans overflow-x-hidden">
      

      <div
        className="fixed top-0 left-0 h-1 bg-[#0ea5e9] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#0ea5e9]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 border-b border-white/5">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#0ea5e9] opacity-[0.06] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center pb-20">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-bold tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
                </span>
                Featured Project
              </div>
              <span className="text-gray-500 text-sm font-mono border-l border-white/10 pl-4">Social Marketing Agency</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              H2H <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc]">
                Marketing.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-xl leading-relaxed border-l-4 border-[#0ea5e9] pl-8 mb-12">
              A bold digital presence for a social marketing agency that connects brands with their audiences through authentic, human-to-human strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative px-8 py-4 bg-[#0ea5e9] text-white font-bold rounded-full overflow-hidden flex items-center gap-3 transition-all hover:pr-12"
              >
                <span className="relative z-10">View Website</span>
                <ExternalLink size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-[#0284c7] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-3 hover:border-[#0ea5e9]/50 transition-colors">
              <img
                src={HERO_IMAGE}
                alt="H2H Social Marketing website showcase"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-[#0ea5e9] text-white font-bold text-sm">01</span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">The Client</h2>
            </div>
            <h3 className="text-3xl font-bold mb-6">Who is H2H Marketing?</h3>
            <p className="text-white text-lg leading-relaxed">
              <strong className="text-white">H2H Social Marketing</strong> is a forward-thinking digital marketing agency that believes in human-to-human connection. They help brands cut through digital noise by creating authentic, results-driven marketing campaigns that resonate with real people.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-white/10 text-white font-bold text-sm">02</span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">The Objective</h2>
            </div>
            <h3 className="text-3xl font-bold mb-6">A Website That Practices What It Preaches</h3>
            <p className="text-white text-lg leading-relaxed">
              H2H needed a website that embodied their philosophy -- professional yet approachable, data-driven yet human. The site had to establish credibility, showcase their services, and convert visitors into clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold text-[#0ea5e9] uppercase tracking-widest mb-4">03 -- What I Delivered</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Built for Engagement</h3>
            <p className="text-xl text-white">
              A high-converting marketing agency website designed to inspire confidence and drive action.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Palette, title: "Brand-First Design", desc: "Clean, modern aesthetics that reflect H2H's professional yet approachable identity." },
              { icon: Target, title: "Conversion Focused", desc: "Strategic page layouts and CTAs designed to guide visitors toward taking action." },
              { icon: Search, title: "SEO Optimized", desc: "Built with search engine visibility in mind from the ground up." },
              { icon: Globe, title: "Fully Responsive", desc: "Seamless experience across all devices, from desktop to mobile." }
            ].map((card, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#0ea5e9] transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9] mb-6 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                  <card.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{card.title}</h4>
                <p className="text-sm text-white leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <h2 className="text-sm font-bold text-[#0ea5e9] uppercase tracking-widest mb-8">04 -- Visual Showcase</h2>
        <div className="bg-[#111] border border-white/10 rounded-3xl p-3 hover:border-[#0ea5e9]/50 transition-colors">
          <img
            src={HERO_IMAGE}
            alt="H2H Social Marketing full website view"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </section>

      <section className="py-20 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Sparkles className="text-[#0ea5e9]" /> Services Delivered
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {['UI/UX Design', 'Frontend Development', 'Responsive Design', 'Brand Integration', 'SEO Setup', 'Performance Tuning'].map(item => (
                <li key={item} className="flex items-center gap-2 text-white text-sm">
                  <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Share2 className="text-[#0ea5e9]" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Netlify'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-gray-300 text-xs font-mono hover:border-[#0ea5e9] hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#0ea5e9]/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0ea5e9] blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Ready to <span className="text-[#0ea5e9]">Elevate</span> Your Brand?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
            Let's build a digital presence that connects with your audience on a human level.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
            >
              View Website <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, TrendingUp, Search, Target, CircleCheck as CheckCircle2, ArrowUpRight, ChartBar as BarChart3, Zap, LayoutGrid as Layout, Smartphone, MousePointer2, Hammer, MapPin, Trophy } from 'lucide-react';
import { useRouter } from 'next/navigation';
// --- ASSET CONFIGURATION ---
const ASSETS = {
  // Provided High-Res Mockups
  HERO_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010",
  MOBILE_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(4).png?updatedAt=1767539578842",
  DETAIL_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(4).png?updatedAt=1767539579396",
  SECONDARY_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(4).png?updatedAt=1767539579462",
};

const LIVE_URL = "https://pavinglead.com/";

export default function PavingLeadsPage() {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-white selection:bg-[#F97316] selection:text-black min-h-screen font-sans overflow-x-hidden">
      

      {/* Scroll Progress - Safety Orange */}
      <div className="fixed top-0 left-0 h-1 bg-[#F97316] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#F97316]" style={{ width: `${scrollProgress * 100}%` }} />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        
        {/* Ambient Orange Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#F97316] opacity-[0.05] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16 relative z-10">
          <div className="max-w-3xl">
            {/* Meta Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-bold tracking-widest uppercase">
                <Trophy size={12} /> Ranked #1 on Google
              </div>
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase">
                Package: The Niche Closer Site
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Paving <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-red-500 italic">Leads.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed border-l-4 border-[#F97316] pl-8">
              A high-velocity SEO engine. <br/>
              <span className="text-white font-bold">Dominated the search results and turned a dream concept into a lead generation machine.</span>
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className="mr_btn mr_btn_primary inline-flex items-center gap-2"
              >
                <span>Visit Live Site</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Stats - Clutch Verified */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm font-mono border-l border-white/10 pl-8">
            <div>
              <p className="text-gray-500 mb-1">SEO Rank</p>
              <p className="font-bold text-[#F97316]">#1 on Google</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Speed</p>
              <p className="font-bold">Quick Delivery</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Service</p>
              <p className="font-bold">Web + SEO</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Client</p>
              <p className="font-bold">Ezra Rubinson</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. VISUAL SHOWCASE (BENTO GRID) --- */}
      <section className="px-6 max-w-[1400px] mx-auto py-12">
        <h2 className="text-sm font-bold text-[#F97316] uppercase tracking-widest mb-8">Lead Gen Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(300px,auto)]">
          
          {/* Main Hero Shot (Wide) */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.HERO_DESKTOP} 
              alt="Paving Leads Homepage"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#F97316]">
              <Search size={14} /> SEO Optimized Structure
            </div>
          </div>

          {/* Mobile Shot (Tall) */}
          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.MOBILE_VIEW} 
              alt="Mobile Lead Form"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#F97316]">
              <Smartphone size={14} /> Mobile Conversion
            </div>
          </div>

          {/* Typography/Detail Shot (Square) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.DETAIL_VIEW} 
              alt="Brand Details"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold mb-1">Industrial Design</h3>
              <p className="text-white text-sm">Bold, High-Contrast UI</p>
            </div>
          </div>

          {/* Secondary Wide Shot */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.SECONDARY_DESKTOP} 
              alt="Service Pages"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="bg-[#F97316] text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                 View Live Strategy <ArrowRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE "NICHE CLOSER" STRATEGY --- */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-xs font-bold uppercase mb-6">
                <Target size={14} className="text-[#F97316]" /> For Lead Gen Agencies
              </div>
              <h2 className="text-4xl font-bold mb-6">The "Niche Closer" Site</h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                Ezra came to me with a clear goal: <strong className="text-white">"Make me a professional website and get me ranked."</strong>
              </p>
              <p className="text-white text-lg leading-relaxed mb-8">
                I deployed the <span className="text-white font-bold">Niche Closer Package</span>. This isn&apos;t just a brochure; it&apos;s a funnel. I focused purely on speed, SEO hierarchy, and aggressive call-to-actions to dominate the paving niche.
              </p>

              <div className="space-y-4">
                 {[
                   "Custom SEO-First Architecture",
                   "High-Velocity Lead Capture Forms",
                   "Mobile-First 'Click-to-Call' Design",
                   "Professional Brand Identity from Scratch"
                 ].map((feature, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="text-[#F97316] w-5 h-5" />
                     <span className="text-gray-300">{feature}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Impact Card */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#F97316]/30 transition-colors">
               <div className="absolute top-0 right-0 bg-[#F97316] text-black text-xs font-bold px-4 py-2 rounded-bl-xl">
                 VERIFIED OUTCOME
               </div>
               
               <div className="mb-6">
                 <h3 className="text-2xl font-bold text-white mb-2">#1 Google Ranking</h3>
                 <p className="text-white text-sm">The ultimate validation.</p>
               </div>

               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#F97316]"><Search /></div>
                   <div>
                     <h4 className="font-bold text-white">Technical SEO</h4>
                     <p className="text-sm text-white">Clean code structure and schema markup that Google loves to crawl.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#F97316]"><Zap /></div>
                   <div>
                     <h4 className="font-bold text-white">Dream to Reality</h4>
                     <p className="text-sm text-white">"Helped me bring my dream website to life in a quick timeframe."</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. EXECUTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-[#F97316] uppercase tracking-widest mb-6">The Execution</h2>
            <h3 className="text-3xl font-bold mb-6">Attentive & Accurate.</h3>
            <p className="text-white mb-8">
              In the world of lead generation, accuracy is money. A broken form or a slow page means lost revenue.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F97316]"></div>
                 <p className="text-sm text-gray-300">Immediate Professional Response</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F97316]"></div>
                 <p className="text-sm text-gray-300">Ranked #1 on Google</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F97316]"></div>
                 <p className="text-sm text-gray-300">Beautiful Customized Design</p>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
             {[
               {
                 icon: MousePointer2,
                 title: "Conversion Design",
                 desc: "Every pixel is placed to push the user toward the 'Get Quote' button. No distractions, just results."
               },
               {
                 icon: Hammer,
                 title: "Niche Authority",
                 desc: "The design language speaks directly to the paving industry—rugged, professional, and reliable."
               },
               {
                 icon: BarChart3,
                 title: "SEO Foundation",
                 desc: "I didn't just bolt SEO on; I baked it into the URL structure and page hierarchy."
               },
               {
                 icon: Zap,
                 title: "Rapid Deployment",
                 desc: "Launched quickly without sacrificing quality, allowing the client to start generating ROI immediately."
               }
             ].map((card, i) => (
               <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#F97316]/30 transition-colors">
                 <card.icon className="text-[#F97316] w-8 h-8 mb-6" />
                 <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                 <p className="text-white text-sm leading-relaxed">{card.desc}</p>
               </div>
             ))}
          </div>

        </div>
      </section>

      {/* --- 5. RESULTS & TESTIMONIAL --- */}
      <section className="py-24 bg-[#111] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Verified Results</h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-20 text-center">
              <div className="p-6 border border-white/5 rounded-2xl">
                 <div className="text-4xl font-bold text-white mb-2">#1</div>
                 <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest">Google Ranking</div>
              </div>
              <div className="p-6 border border-white/5 rounded-2xl">
                 <div className="text-4xl font-bold text-white mb-2">5.0</div>
                 <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest">Service & Speed</div>
              </div>
              <div className="p-6 border border-white/5 rounded-2xl">
                 <div className="text-4xl font-bold text-white mb-2">100%</div>
                 <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest">Client Satisfaction</div>
              </div>
              <div className="p-6 border border-white/5 rounded-2xl">
                 <div className="text-4xl font-bold text-white mb-2">Fast</div>
                 <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest">Turnaround Time</div>
              </div>
            </div>

            <div className="bg-[#1b1b1b] rounded-3xl p-10 max-w-4xl mx-auto border border-white/10 relative">
               <div className="flex gap-1 mb-6 justify-center md:justify-start">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-[#F97316] text-[#F97316]" />)}
               </div>
               <blockquote className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed text-center md:text-left">
                 "It was perfect! He made me a beautiful customized website with SEO and I am ranked #1 on Google! Attentive, accurate, and helped me bring my dream website to life."
               </blockquote>
               <div className="flex items-center gap-4 justify-center md:justify-start">
                 <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center text-black font-bold text-lg">
                   ER
                 </div>
                 <div>
                   <div className="font-bold text-white text-lg">Ezra Rubinson</div>
                   <div className="text-[#F97316] text-sm uppercase tracking-widest font-bold">Owner, Paving Leads</div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Need to rank #1?</h2>
        <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
          The <span className="text-white font-bold">Niche Closer Package</span> is built for one purpose: To dominate your local market and generate leads.
        </p>
        <button
          onClick={() => router.push('/contact')}
          className="mr_btn mr_btn_primary inline-flex items-center gap-2"
        >
          <span>Start Your Project</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

    </div>
  );
}
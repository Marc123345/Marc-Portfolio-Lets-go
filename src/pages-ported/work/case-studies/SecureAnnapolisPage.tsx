"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, MapPin, Phone, CircleCheck as CheckCircle2, ArrowUpRight, Search, Zap, LayoutGrid as Layout, Smartphone, MousePointer2, Key, Lock, ChartBar as BarChart3 } from 'lucide-react';
import { useRouter } from 'next/navigation';
// --- ASSET CONFIGURATION ---
const ASSETS = {
  // New High-Res Mockups
  HERO_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(2).png?updatedAt=1767539579038",
  MOBILE_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(2).png?updatedAt=1767539577859",
  DETAIL_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194",
  SECONDARY_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(2).png?updatedAt=1767539579940",
};

const LIVE_URL = "https://www.asecureannapolislocksmith.com";

export default function SecureAnnapolisCaseStudy() {
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
    <div className="bg-[#050505] text-white selection:bg-[#00e5ff] selection:text-black min-h-screen font-sans overflow-x-hidden">
      

      {/* Scroll Progress - Cyber Blue */}
      <div className="fixed top-0 left-0 h-1 bg-[#00e5ff] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#00e5ff]" style={{ width: `${scrollProgress * 100}%` }} />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        
        {/* Ambient Blue Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#00e5ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16 relative z-10">
          <div className="max-w-3xl">
            {/* Meta Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold tracking-widest uppercase">
                <MapPin size={12} /> Local SEO Dominance
              </div>
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase">
                Package: The Niche Closer Site
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              A Secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-600 italic">Annapolis.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed border-l-4 border-[#00e5ff] pl-8">
              A hyper-local lead generation engine. <br/>
              <span className="text-white font-bold">Turning "emergency searches" into immediate phone calls.</span>
            </p>

            <div className="flex gap-4 mt-10">
              <a 
                href={LIVE_URL} 
                target="_blank" 
                rel="noreferrer"
                className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#00e5ff] transition-all"
              >
                Visit Live Site <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm font-mono border-l border-white/10 pl-8">
            <div>
              <p className="text-gray-500 mb-1">Growth</p>
              <p className="font-bold">+150% Leads</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Rank</p>
              <p className="font-bold">Top 3 Local</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Conversion</p>
              <p className="font-bold">85% Mobile</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Rating</p>
              <p className="font-bold text-[#00e5ff]">4.8/5.0 Stars</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. VISUAL SHOWCASE (BENTO GRID) --- */}
      <section className="px-6 max-w-[1400px] mx-auto py-12">
        <h2 className="text-sm font-bold text-[#00e5ff] uppercase tracking-widest mb-8">Conversion-Focused Interface</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(300px,auto)]">
          
          {/* Main Hero Shot (Wide) */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.HERO_DESKTOP} 
              alt="Homepage Desktop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#00e5ff]">
              <Lock size={14} /> Trust Signals
            </div>
          </div>

          {/* Mobile Shot (Tall) */}
          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.MOBILE_VIEW} 
              alt="Mobile Emergency View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#00e5ff]">
              <Phone size={14} /> Click-to-Call First
            </div>
          </div>

          {/* Typography/Detail Shot (Square) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.DETAIL_VIEW} 
              alt="Service Cards"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold mb-1">Service Clarity</h3>
              <p className="text-white text-sm">Residential • Commercial • Auto</p>
            </div>
          </div>

          {/* Secondary Wide Shot */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.SECONDARY_DESKTOP} 
              alt="Contact Page"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="bg-[#00e5ff] text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                 View Lead Form <ArrowRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE "NICHE CLOSER" PACKAGE --- */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-xs font-bold uppercase mb-6">
                <Shield size={14} className="text-[#00e5ff]" /> For Local Service Pros
              </div>
              <h2 className="text-4xl font-bold mb-6">The "Niche Closer" Site</h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                Local businesses like locksmiths die on page 2 of Google. A Secure Annapolis needed immediate trust and zero friction.
              </p>
              <p className="text-white text-lg leading-relaxed mb-8">
                I deployed the <span className="text-white font-bold">Niche Closer Package</span>—a premium site structure designed specifically to rank high in local maps and convert &ldquo;emergency&rdquo; traffic into revenue.
              </p>

              <div className="space-y-4">
                 {[
                   "Bold homepage design with trust badges",
                   "High-contrast Click-to-Call (Sticky Buttons)",
                   "Local SEO framework (Schema + Meta)",
                   "Client results showcase & review integration"
                 ].map((feature, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="text-[#00e5ff] w-5 h-5" />
                     <span className="text-gray-300">{feature}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Strategy Card */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#00e5ff]/30 transition-colors">
               <div className="absolute top-0 right-0 bg-[#00e5ff] text-black text-xs font-bold px-4 py-2 rounded-bl-xl">
                 SEO STRATEGY
               </div>
               
               <div className="mb-6">
                 <h3 className="text-2xl font-bold text-white mb-2">The "Emergency" Funnel</h3>
                 <p className="text-white text-sm">How we win the click.</p>
               </div>

               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#00e5ff]"><Zap /></div>
                   <div>
                     <h4 className="font-bold text-white">Speed is Security</h4>
                     <p className="text-sm text-white">Locksmith clients are in panic mode. The site loads in 0.8s on 4G.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#00e5ff]"><MapPin /></div>
                   <div>
                     <h4 className="font-bold text-white">Hyper-Local Signals</h4>
                     <p className="text-sm text-white">Pages specifically optimized for "Annapolis", "Parole", and "Edgewater".</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#00e5ff]"><Key /></div>
                   <div>
                     <h4 className="font-bold text-white">Service Silos</h4>
                     <p className="text-sm text-white">Distinct landing pages for Auto vs. Residential to match Google intent.</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. CHALLENGE & EXECUTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-[#00e5ff] uppercase tracking-widest mb-6">The Challenge</h2>
            <h3 className="text-3xl font-bold mb-6">The "Page 1" War.</h3>
            <p className="text-white mb-8">
              Locksmithing is one of the most competitive SEO niches in existence. Generic templates don't cut it.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></div>
                 <p className="text-sm text-gray-300">High Cost-Per-Click (CPC) for Ads</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></div>
                 <p className="text-sm text-gray-300">Need for instant credibility</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></div>
                 <p className="text-sm text-gray-300">70% Mobile Traffic</p>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
             {[
               {
                 icon: MousePointer2,
                 title: "Sticky Call Buttons",
                 desc: "The 'Call Now' button is never more than a thumb-tap away, hovering at the bottom of mobile screens."
               },
               {
                 icon: Shield,
                 title: "Trust Stacking",
                 desc: "I placed licenses, insurance badges, and review stars above the fold to instantly de-risk the service."
               },
               {
                 icon: Search,
                 title: "Schema Markup",
                 desc: "Backend coding that tells Google exactly where they serve, triggering 'Local Pack' map rankings."
               },
               {
                 icon: BarChart3,
                 title: "Conversion Analytics",
                 desc: "Full tracking setup to know exactly which keywords are driving the high-value commercial contracts."
               }
             ].map((card, i) => (
               <div key={i} className="bg-[#111] p-8 border border-white/5 hover:border-[#00e5ff]/30 transition-colors">
                 <card.icon className="text-[#00e5ff] w-8 h-8 mb-6" />
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
            <h2 className="text-3xl font-bold text-center mb-16">Results & Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-20 text-center">
              <div className="p-6 border border-white/5">
                <div className="text-4xl font-bold text-white mb-2">150%</div>
                <div className="text-[#00e5ff] text-xs font-bold uppercase tracking-widest">Lead Increase</div>
              </div>
              <div className="p-6 border border-white/5">
                <div className="text-4xl font-bold text-white mb-2">Top 3</div>
                <div className="text-[#00e5ff] text-xs font-bold uppercase tracking-widest">Map Rankings</div>
              </div>
              <div className="p-6 border border-white/5">
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-[#00e5ff] text-xs font-bold uppercase tracking-widest">Mobile Conversion</div>
              </div>
              <div className="p-6 border border-white/5">
                <div className="text-4xl font-bold text-white mb-2">4.8</div>
                <div className="text-[#00e5ff] text-xs font-bold uppercase tracking-widest">Customer Rating</div>
              </div>
            </div>

            <div className="bg-[#1b1b1b] rounded-3xl p-10 max-w-4xl mx-auto border border-white/10 relative">
               <div className="flex gap-1 mb-6 justify-center md:justify-start">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-[#00e5ff] text-[#00e5ff]" />)}
               </div>
               <blockquote className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed text-center md:text-left">
                 "Very professional, wonderful customer service! Thank you Marc for all the work you put in. The lead flow has been consistent and the design is exactly what we needed to stand out."
               </blockquote>
               <div className="flex items-center gap-4 justify-center md:justify-start">
                 <div className="w-12 h-12 rounded-full bg-[#00e5ff] flex items-center justify-center text-black font-bold text-lg">
                   RM
                 </div>
                 <div>
                   <div className="font-bold text-white text-lg">Royi Mazor</div>
                   <div className="text-[#00e5ff] text-sm uppercase tracking-widest font-bold">Owner, A Secure Annapolis</div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Dominate your local market.</h2>
        <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
          Stop losing leads to competitors. The <span className="text-white font-bold">Niche Closer Package</span> is built to rank and convert.
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
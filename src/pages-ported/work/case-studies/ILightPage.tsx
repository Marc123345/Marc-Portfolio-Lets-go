"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Activity, Brain, Shield, CircleCheck as CheckCircle2, ArrowUpRight, Cpu, Layers, LayoutGrid as Layout, Smartphone, MousePointer2, Zap, MessageSquare, FileText, Database, Lock, Stethoscope, Globe, ChevronDown, MonitorPlay } from 'lucide-react';
import { useRouter } from 'next/navigation';
// --- ASSET CONFIGURATION ---
const ASSETS = {
  // Marketing Website Mockups (Bento Grid)
  HERO_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(4).png?updatedAt=1767539579763",
  MOBILE_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(5).png?updatedAt=1767539578236",
  DETAIL_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818",
  SECONDARY_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(5).png?updatedAt=1767539579921",
  
  // SaaS Platform / MVP Screenshots
  SAAS_DASHBOARD: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/download%20(60).png",
  SAAS_ANALYTICS: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/download%20(58).png",
  SAAS_USER_PROFILE: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/download%20(59).png",

  // Video Background
  HERO_VIDEO: "https://ik.imagekit.io/qcvroy8xpd/original-5d90c3fbc38922b17ff20f48dfcfe9f7.mp4?updatedAt=1754940891023"
};

const LIVE_URL = "https://www.ilight.care";

// --- COMPONENTS ---
function MetricCard({ value, label, subtext }: { value: string, label: string, subtext?: string }) {
  return (
    <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#00E0FF]/30 transition-all group">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#00E0FF] transition-colors">{value}</div>
      <div className="text-[#00E0FF] text-xs font-bold uppercase tracking-widest mb-2">{label}</div>
      {subtext && <div className="text-gray-500 text-sm">{subtext}</div>}
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-mono hover:bg-[#00E0FF]/10 hover:border-[#00E0FF]/30 hover:text-white transition-all cursor-default">
      {name}
    </span>
  );
}

export default function ILightCaseStudy() {
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
    <div className="bg-[#050505] text-white selection:bg-[#00E0FF] selection:text-black min-h-screen font-sans overflow-x-hidden">
      

      {/* Scroll Progress - Tech Teal */}
      <div className="fixed top-0 left-0 h-1 bg-[#00E0FF] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#00E0FF]" style={{ width: `${scrollProgress * 100}%` }} />

      {/* --- 1. HERO SECTION (VIDEO BACKGROUND) --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 border-b border-white/5 overflow-hidden">
        
        {/* Video BG */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src={ASSETS.HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-end pb-20">
          <div className="lg:col-span-8">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E0FF]/10 border border-[#00E0FF]/20 text-[#00E0FF] text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                <Brain size={12} /> AI Healthcare
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                Package: Vision To MVP
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85]">
              iLight <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-blue-600 italic pr-4">
                Care.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed border-l-4 border-[#00E0FF] pl-8 mb-12">
              Human and AI Powered Mental Health & Resilience. <br/>
              <span className="text-white font-bold">We took a founder's vision and built the entire digital ecosystem: Brand, Website, MVP Platform, and Pitch Deck.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-3 transition-all hover:pr-12"
              >
                <span className="relative z-10">Visit Live Site</span>
                <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-[#00E0FF] text-black transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-4 flex flex-col justify-end">
             <div className="bg-black/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Deliverables</h3>
                <ul className="space-y-4">
                   <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                      <span className="text-white">Marketing Website</span>
                      <CheckCircle2 size={16} className="text-[#00E0FF]" />
                   </li>
                   <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                      <span className="text-white">SaaS MVP Platform</span>
                      <CheckCircle2 size={16} className="text-[#00E0FF]" />
                   </li>
                   <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                      <span className="text-white">Pitch Presentations</span>
                      <CheckCircle2 size={16} className="text-[#00E0FF]" />
                   </li>
                   <li className="flex justify-between items-center text-sm">
                      <span className="text-white">Brand Identity</span>
                      <CheckCircle2 size={16} className="text-[#00E0FF]" />
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* --- 2. CONTEXT & PROBLEM --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-[#00E0FF] text-black font-bold text-sm">01</span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#00E0FF]">The Founder's Context</h2>
            </div>
            <h3 className="text-3xl font-bold mb-6">A Bold Vision for Mental Health</h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              <strong className="text-white">iLight X Corporation</strong> is a Miami-based startup focused on human and AI-powered mental health resilience. 
            </p>
            <p className="text-white text-lg leading-relaxed">
              The director came to us with a powerful mission but needed the technical execution to match. They didn't just need a brochure website; they needed a functioning product to show investors and early adopters.
            </p>
          </div>

          <div>
             <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-white/10 text-white font-bold text-sm">02</span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">The Challenge</h2>
            </div>
            <h3 className="text-3xl font-bold mb-6">No Tech Team? No Problem.</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 min-w-[24px]"><Shield className="text-red-500" size={24} /></div>
                <div>
                  <h4 className="text-white font-bold mb-1">Zero Infrastructure</h4>
                  <p className="text-white text-sm">The client had the industry expertise but lacked the technical team to build a HIPAA-compliant SaaS platform.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 min-w-[24px]"><Activity className="text-red-500" size={24} /></div>
                <div>
                  <h4 className="text-white font-bold mb-1">Investor Readiness</h4>
                  <p className="text-white text-sm">They needed more than ideas to raise capital. They needed a working MVP and a polished pitch deck.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 3. STRATEGY: VISION TO MVP --- */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold text-[#00E0FF] uppercase tracking-widest mb-4">03 • The Solution</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">The "Vision to MVP" Package</h3>
            <p className="text-xl text-white">
              We acted as the interim CTO and Product Team. We took the project from messy notes to a fully clickable product and investor-ready presentation in under 6 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-[#111] p-8 rounded-2xl border border-white/5 group hover:border-[#00E0FF] transition-all">
                <Layout className="w-10 h-10 text-[#00E0FF] mb-6" />
                <h4 className="text-xl font-bold mb-3">Marketing Site</h4>
                <p className="text-white">A high-trust public face for the brand to capture leads and explain the methodology.</p>
             </div>
             <div className="bg-[#111] p-8 rounded-2xl border border-white/5 group hover:border-[#00E0FF] transition-all">
                <Database className="w-10 h-10 text-[#00E0FF] mb-6" />
                <h4 className="text-xl font-bold mb-3">SaaS MVP</h4>
                <p className="text-white">A functional React-based dashboard for users to track resilience scores and access AI tools.</p>
             </div>
             <div className="bg-[#111] p-8 rounded-2xl border border-white/5 group hover:border-[#00E0FF] transition-all">
                <FileText className="w-10 h-10 text-[#00E0FF] mb-6" />
                <h4 className="text-xl font-bold mb-3">Pitch Assets</h4>
                <p className="text-white">Professionally designed presentations to communicate the business model to stakeholders.</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- 4. VISUAL SHOWCASE: MARKETING SITE --- */}
      <section className="px-6 max-w-[1400px] mx-auto py-24">
        <div className="flex items-center gap-4 mb-12">
           <Globe className="text-[#00E0FF]" />
           <h2 className="text-2xl font-bold">Phase 1: The Public Interface</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(300px,auto)]">
          {/* Main Hero Shot (Wide) */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.HERO_DESKTOP} 
              alt="Homepage Desktop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#00E0FF]">
              <MonitorPlay size={14} /> Brand Experience
            </div>
          </div>

          {/* Mobile Shot (Tall) */}
          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.MOBILE_VIEW} 
              alt="Mobile View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#00E0FF]">
              <Smartphone size={14} /> Mobile First
            </div>
          </div>

          {/* Detail Shot (Square) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.DETAIL_VIEW} 
              alt="UI Details"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold mb-1">Trust Design</h3>
              <p className="text-white text-sm">Clean, Medical-Grade UI</p>
            </div>
          </div>

          {/* Secondary Wide Shot */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.SECONDARY_DESKTOP} 
              alt="Inner Pages"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* --- 5. THE MVP BUILD (SAAS PLATFORM) --- */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
         <div className="absolute inset-0 bg-[#00E0FF]/5 pointer-events-none"></div>
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E0FF]/10 text-[#00E0FF] text-xs font-bold uppercase mb-4">
                     <Cpu size={14} /> Phase 2: The Product
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">The SaaS MVP</h2>
                  <p className="text-white mt-4 max-w-xl">
                     We built the actual functioning platform. A secure environment where patients interact with AI tools and track their mental health journey.
                  </p>
               </div>
               <div className="flex gap-2 mt-6 md:mt-0">
                  <TechBadge name="React Dashboard" />
                  <TechBadge name="Data Viz" />
                  <TechBadge name="Secure Auth" />
               </div>
            </div>

            {/* SaaS Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* 1. Main Dashboard */}
               <div className="md:col-span-2 relative group rounded-2xl border border-[#00E0FF]/20 overflow-hidden shadow-2xl shadow-[#00E0FF]/10">
                  <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/10 flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     <div className="ml-4 text-xs text-gray-500 font-mono">dashboard.ilight.care</div>
                  </div>
                  <img src={ASSETS.SAAS_DASHBOARD} alt="SaaS Dashboard" className="w-full h-auto" />
               </div>

               {/* 2. Analytics View */}
               <div className="relative group rounded-2xl border border-white/10 overflow-hidden bg-[#111]">
                  <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-gray-300">
                     Data Visualization
                  </div>
                  <img src={ASSETS.SAAS_ANALYTICS} alt="Analytics" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               </div>

               {/* 3. User Profile */}
               <div className="relative group rounded-2xl border border-white/10 overflow-hidden bg-[#111]">
                  <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-gray-300">
                     Patient Profile
                  </div>
                  <img src={ASSETS.SAAS_USER_PROFILE} alt="User Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               </div>

            </div>
         </div>
      </section>

      {/* --- 6. RESULTS & TESTIMONIAL --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Review Data */}
            <div className="lg:col-span-5">
               <h2 className="text-sm font-bold text-[#00E0FF] uppercase tracking-widest mb-6">04 • Results</h2>
               <h3 className="text-4xl font-bold mb-8">Client Satisfaction</h3>
               <div className="space-y-6">
                  <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                     <div className="flex gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#00E0FF] text-[#00E0FF]" />)}
                     </div>
                     <h4 className="font-bold text-lg mb-1">Above Expectations</h4>
                     <p className="text-white text-sm">"Delivered on time, within budget, and above the client's expectations."</p>
                  </div>
                  <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                     <div className="flex gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#00E0FF] text-[#00E0FF]" />)}
                     </div>
                     <h4 className="font-bold text-lg mb-1">Full Scope Delivery</h4>
                     <p className="text-white text-sm">"Successfully developed the website, platform MVP, and created presentations."</p>
                  </div>
               </div>
            </div>

            {/* The Quote */}
            <div className="lg:col-span-7">
               <div className="bg-[#161616] p-12 rounded-3xl border border-white/10 relative h-full flex flex-col justify-center">
                  <div className="flex gap-1 mb-8">
                     {[1,2,3,4,5].map(i => <Star key={i} size={24} className="fill-[#00E0FF] text-[#00E0FF]" />)}
                  </div>
                  <p className="text-3xl font-medium leading-tight text-white mb-10 relative z-10">
                     "Their willingness to go above and beyond to ensure our satisfaction was impressive."
                  </p>
                  <div className="border-t border-white/10 pt-8">
                     <div className="font-bold text-white text-lg">Director</div>
                     <div className="text-sm text-[#00E0FF] font-bold uppercase tracking-widest">iLight X Corporation</div>
                     <div className="text-xs text-gray-500 mt-1">Verified Review • Dec 2025</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 7. TECHNICAL STACK --- */}
      <section className="py-20 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Layers className="text-[#00E0FF]" /> Scope of Work
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {['Platform Architecture', 'UI/UX Design', 'Full-Stack Dev', 'Investor Presentations', 'Marketing Strategy', 'Deployment'].map(item => (
                <li key={item} className="flex items-center gap-2 text-white text-sm">
                  <div className="w-1.5 h-1.5 bg-[#00E0FF] rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Cpu className="text-[#00E0FF]" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Tailwind', 'AWS', 'Figma', 'PowerPoint'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-gray-300 text-xs font-mono hover:border-[#00E0FF] hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. CTA --- */}
      <section className="relative py-40 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#00E0FF]/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00E0FF] blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Have a vision? <br/>
            <span className="text-[#00E0FF]">Let's build the MVP.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
            Stop waiting for a "technical co-founder". The <span className="text-white font-bold">Vision to MVP</span> package gets you investor-ready in 6 weeks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Book Your Workshop</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href={LIVE_URL}
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
            >
              See It Live <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
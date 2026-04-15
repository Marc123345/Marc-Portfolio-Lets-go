"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Layers, Zap, CircleCheck as CheckCircle2, Globe, LayoutGrid as Layout, MonitorPlay, Smartphone, Palette, ExternalLink, Quote, Rocket, Type, Droplet, Maximize2, Grid2x2 as Grid, ChevronDown, Code as Code2, Cpu, ChartBar as BarChart3, ShieldCheck, Menu, X, MousePointer2, Play, Calendar, MessageSquare, Kanban } from 'lucide-react';
import { useRouter } from 'next/navigation';
// --- ASSET CONSTANTS (STRICTLY FROM PROMPT) ---
const ASSETS = {
  PEOPLE: {
    OMAR: "https://ik.imagekit.io/qcvroy8xpd/67eb0c3957638498868399.jpeg?updatedAt=1766490776332",
    // Only Omar provided in this specific update request
  },
  MOCKUPS: {
    // 16x9 Wide Shots
    HERO_MAIN: "https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061",
    DARK_MODE: "https://ik.imagekit.io/qcvroy8xpd/Mockup%203%20-%2016x9.png?updatedAt=1767538713124",
    PLATFORM_OVERVIEW: "https://ik.imagekit.io/qcvroy8xpd/67eb0d66be3ae182020253.png?updatedAt=1766490774693",
    
    // 1x1 Square Shots
    SQUARE_DETAIL_1: "https://ik.imagekit.io/qcvroy8xpd/Mockup%201%20-%201x1.png?updatedAt=1767538712766",
    SQUARE_DETAIL_2: "https://ik.imagekit.io/qcvroy8xpd/Mockup%202%20-%201x1.png?updatedAt=1767538712531",

    // Mobile Specific
    MOBILE_VIEW: "https://ik.imagekit.io/qcvroy8xpd/67eb0d66b12c7394660719%20(1).jpeg?updatedAt=1766490775632"
  }
};

const LIVE_URL = "https://www.binnsmediagroup.com/";

const BinnsMediaMasterStudy = () => {
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
    <div className="bg-[#050505] text-white selection:bg-[#cc000a] selection:text-white min-h-screen font-sans overflow-x-hidden">
      

      {/* --- FLOATING PROGRESS BAR --- */}
      <div className="fixed top-0 left-0 h-1 bg-[#cc000a] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#cc000a]" style={{ width: `${scrollProgress * 100}%` }} />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 border-b border-white/5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        
        {/* Ambient Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#cc000a] opacity-[0.08] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-end pb-20">
          
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cc000a]/10 border border-[#cc000a]/20 text-[#cc000a] text-xs font-bold tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cc000a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cc000a]"></span>
                </span>
                Live Case Study
              </div>
              <span className="text-gray-500 text-sm font-mono border-l border-white/10 pl-4">Media Production • Atlanta, GA</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85]">
              BINNS MEDIA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 italic pr-4">
                GROUP.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed border-l-4 border-[#cc000a] pl-8 mb-12">
              <span className="text-white font-bold block mb-2">From "Production House" to "Media Ecosystem".</span>
              We re-engineered the digital home for authentic voices, turning a content library into a scalable, Netflix-style streaming platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-3 transition-all hover:pr-12"
              >
                <span className="relative z-10">Visit Live Platform</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-[#cc000a] text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-[#111] border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Verified Clutch Review</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <span className="text-3xl font-bold text-white">5.0</span>
                  <span className="text-sm text-white text-right">Quality &<br/>Schedule</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <span className="text-3xl font-bold text-white">5.0</span>
                  <span className="text-sm text-white text-right">Cost &<br/>Value</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-3xl font-bold text-[#cc000a]">5.0</span>
                  <span className="text-sm text-white text-right">Willing to<br/>Refer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. CONTEXT & PROBLEM --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-[#cc000a] text-black font-bold text-sm">01</span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#cc000a]">The Client Context</h2>
            </div>
            
            <h3 className="text-3xl font-bold mb-6">Who is Binns Media Group?</h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              Based in Atlanta, <strong className="text-white">Binns Media Group (BMG)</strong> develops and produces culture-shaping content by turning authentic voices into scalable media brands across comedy, audio albums, podcasts, and storytelling.
            </p>
          </div>

          <div>
             <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-white/10 text-white font-bold text-sm">02</span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">The Challenge</h2>
            </div>

            <h3 className="text-3xl font-bold mb-6">Needed a Cutting-Edge Design</h3>
            <p className="text-white text-lg leading-relaxed">
              The client needed a website that matched the high fidelity of their content. The goal was to build the site from scratch, providing both design and co-development services to launch a "cutting-edge website design" that serves as a media hub.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. STRATEGY: MEDIA EMPIRE LAUNCHPAD --- */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold text-[#cc000a] uppercase tracking-widest mb-4">03 • Strategic Approach</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">The "Media Empire" Package</h3>
            <p className="text-xl text-white">
              We deployed a custom React architecture designed to handle high-volume media assets while maintaining blazing fast load times.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Layout, title: "Structure", desc: "Built from scratch using React for a fully custom, non-template architecture." },
              { icon: ShieldCheck, title: "Co-Development", desc: "Worked alongside the client's vision to ensure technical feasibility met creative goals." },
              { icon: Zap, title: "Phased Launch", desc: "Successfully launched the landing page first to secure immediate presence while building the core platform." },
              { icon: Kanban, title: " Agile Workflow", desc: "Utilized Trello for transparent project tracking and sprint management." }
            ].map((card, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#cc000a] transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#cc000a]/10 flex items-center justify-center text-[#cc000a] mb-6 group-hover:bg-[#cc000a] group-hover:text-white transition-colors">
                  <card.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{card.title}</h4>
                <p className="text-sm text-white leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. VISUAL GALLERY (NO CUTTING OFF) --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <h2 className="text-sm font-bold text-[#cc000a] uppercase tracking-widest mb-8">04 • Visual Execution</h2>
        
        {/* We use aspect-ratio utilities to ensure images fit perfectly without cropping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. HERO WIDE */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-2 aspect-video group hover:border-[#cc000a]/50 transition-colors">
            <img 
              src={ASSETS.MOCKUPS.HERO_MAIN} 
              alt="Main Hero Interface" 
              className="w-full h-full object-contain rounded-2xl" 
            />
          </div>

          {/* 2. DARK MODE WIDE */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-2 aspect-video group hover:border-[#cc000a]/50 transition-colors">
            <img 
              src={ASSETS.MOCKUPS.DARK_MODE} 
              alt="Dark Mode Interface" 
              className="w-full h-full object-contain rounded-2xl" 
            />
          </div>

          {/* 3. SQUARE DETAIL 1 */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-2 aspect-square group hover:border-[#cc000a]/50 transition-colors">
            <img 
              src={ASSETS.MOCKUPS.SQUARE_DETAIL_1} 
              alt="Typography Detail" 
              className="w-full h-full object-contain rounded-2xl" 
            />
          </div>

           {/* 4. SQUARE DETAIL 2 */}
           <div className="bg-[#111] border border-white/10 rounded-3xl p-2 aspect-square group hover:border-[#cc000a]/50 transition-colors">
            <img 
              src={ASSETS.MOCKUPS.SQUARE_DETAIL_2} 
              alt="Interface Detail" 
              className="w-full h-full object-contain rounded-2xl" 
            />
          </div>

        </div>

        {/* FULL WIDTH PLATFORM OVERVIEW */}
        <div className="mt-8 bg-[#111] border border-white/10 rounded-3xl p-2 group hover:border-[#cc000a]/50 transition-colors">
           <img 
              src={ASSETS.MOCKUPS.PLATFORM_OVERVIEW} 
              alt="Full Platform Overview" 
              className="w-full h-auto object-contain rounded-2xl" 
            />
        </div>

        {/* MOBILE SPECIFIC SECTION */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 md:p-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cc000a]/10 text-[#cc000a] text-xs font-bold uppercase mb-6">
              <Smartphone size={14} /> Mobile Experience
            </div>
            <h3 className="text-3xl font-bold mb-4">Optimized for On-The-Go</h3>
            <p className="text-white text-lg">
              With 70% of traffic coming from social media, the mobile experience was prioritized to ensure fast loading and intuitive navigation.
            </p>
          </div>
          <div className="flex justify-center">
            {/* The ONLY image labeled as mobile per instructions */}
            <div className="max-w-[300px]">
              <img 
                src={ASSETS.MOCKUPS.MOBILE_VIEW} 
                alt="Mobile Interface" 
                className="w-full h-auto rounded-xl border border-white/10 shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. DESIGN SYSTEM SECTION --- */}
      <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cc000a] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#cc000a] font-mono text-sm tracking-widest uppercase mb-2">tailwind.config.js</h2>
              <h3 className="text-4xl font-bold">Visual Language</h3>
            </div>
            <p className="text-white max-w-md text-right">
              A high-contrast identity system built for impact. 
              <br/>Designed to feel like a premium streaming platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Typography Stack */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Type className="text-[#cc000a]" />
                <span className="font-bold">Typography Stack</span>
              </div>
              
              <div className="group">
                <span className="block text-gray-500 text-xs font-mono mb-2">fontFamily: 'display'</span>
                <div className="text-6xl md:text-8xl font-bold uppercase tracking-tight font-['Bebas_Neue'] leading-none">
                  Bebas Neue
                </div>
              </div>

              <div className="group">
                <span className="block text-gray-500 text-xs font-mono mb-2">fontFamily: 'sans'</span>
                <div className="text-4xl md:text-5xl font-bold text-gray-300 font-['Plus_Jakarta_Sans']">
                  Plus Jakarta Sans
                </div>
              </div>
            </div>

            {/* Color & Shadow Palette */}
            <div>
               <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Droplet className="text-[#cc000a]" />
                <span className="font-bold">Color & Effects</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Primary Red */}
                <div className="p-6 bg-[#cc000a] rounded-2xl flex flex-col justify-between h-40 shadow-[0_0_25px_rgba(204,0,10,0.3)]">
                  <span className="text-white/50 text-xs font-mono">primary.DEFAULT</span>
                  <span className="text-white font-bold text-xl">#cc000a</span>
                </div>
                
                {/* Dark & Light Variants */}
                <div className="space-y-4">
                  <div className="p-4 bg-[#990007] rounded-xl flex items-center justify-between">
                     <span className="text-white/50 text-xs font-mono">primary.dark</span>
                     <span className="text-white font-mono">#990007</span>
                  </div>
                  <div className="p-4 bg-[#ff000d] rounded-xl flex items-center justify-between text-black">
                     <span className="opacity-50 text-xs font-mono">primary.light</span>
                     <span className="font-bold font-mono">#ff000d</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 6. RESULTS (STRICT CLUTCH DATA) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Results Column */}
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold text-[#cc000a] uppercase tracking-widest mb-6">05 • The Results</h2>
            <h3 className="text-4xl font-bold mb-8">Verified Impact</h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#cc000a] text-[#cc000a]" />)}
                </div>
                <h4 className="font-bold text-lg mb-1">Delivered On Time</h4>
                <p className="text-white text-sm">"The team has successfully completed specific parts of the website, including the landing page, by the agreed-upon deadlines."</p>
              </div>
              
              <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                 <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#cc000a] text-[#cc000a]" />)}
                </div>
                <h4 className="font-bold text-lg mb-1">Project Management</h4>
                <p className="text-white text-sm">"Communicated effectively through virtual meetings and emails. Used Trello to track progress."</p>
              </div>
            </div>
          </div>

          {/* Testimonial Column */}
          <div className="lg:col-span-7">
             <h2 className="text-sm font-bold text-[#cc000a] uppercase tracking-widest mb-6">06 • Client Feedback</h2>
            
            <div className="bg-[#161616] p-12 rounded-3xl border border-white/10 relative h-full flex flex-col justify-center">
              <Quote className="absolute top-10 right-10 text-white/5" size={80} />
              
              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map(i => <Star key={i} size={24} className="fill-[#cc000a] text-[#cc000a]" />)}
              </div>
              
              <p className="text-3xl md:text-4xl font-medium leading-tight text-white mb-10 relative z-10">
                "Marc Friedman Design Agency has the skills and talents to bring my ideas to life."
              </p>
              
              <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                <img 
                  src={ASSETS.PEOPLE.OMAR} 
                  alt="Omar Ace Turner" 
                  className="w-16 h-16 rounded-full border-2 border-[#cc000a] object-cover" 
                />
                <div>
                  <div className="font-bold text-white text-lg">Omar "Ace" Turner</div>
                  <div className="text-sm text-[#cc000a] font-bold uppercase tracking-widest">CEO, Binns Media Group</div>
                  <div className="text-xs text-gray-500 mt-1">Review Date: Jan 2, 2026</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 7. ROLE & STACK --- */}
      <section className="py-20 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-[#cc000a]" /> My Role
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {['UX Strategy', 'UI Design', 'Frontend Dev', 'Project Mgmt', 'SEO Technical', 'Deployment'].map(item => (
                <li key={item} className="flex items-center gap-2 text-white text-sm">
                  <div className="w-1.5 h-1.5 bg-[#cc000a] rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Cpu className="text-[#cc000a]" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React 18', 'Tailwind CSS', 'Vite', 'Framer Motion', 'ImageKit', 'Netlify', 'Cloudflare'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-md text-gray-300 text-xs font-mono hover:border-[#cc000a] hover:text-white transition-colors cursor-default">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#cc000a]/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#cc000a] blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Building a <span className="text-[#cc000a]">Media Empire?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
            The infrastructure we built for Binns Media is available as a specialized package.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Book A Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href={LIVE_URL}
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
            >
              See It Live <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BinnsMediaMasterStudy;
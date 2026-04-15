"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, TrendingUp, Search, Target, CircleCheck as CheckCircle2, ArrowUpRight, ChartBar as BarChart3, Zap, LayoutGrid as Layout, Smartphone, MousePointer2, Hammer, MapPin, Trophy, Layers } from 'lucide-react';
import { useRouter } from 'next/navigation';
const ASSETS = {
  HERO_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933",
  MOBILE_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(6).png?updatedAt=1767539577975",
  DETAIL_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(6).png?updatedAt=1767539579420",
  SECONDARY_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(6).png?updatedAt=1767539579791",
};

const LIVE_URL = "https://pavingtarchip.com/";

export default function TarChipPage() {
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
    <div className="bg-[#050505] text-white selection:bg-[#EA580C] selection:text-black min-h-screen font-sans overflow-x-hidden">
      

      <div className="fixed top-0 left-0 h-1 bg-[#EA580C] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#EA580C]" style={{ width: `${scrollProgress * 100}%` }} />

      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">

        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#EA580C] opacity-[0.05] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-[#EA580C] text-xs font-bold tracking-widest uppercase">
                <Hammer size={12} /> Specialty Paving
              </div>
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase">
                Package: Professional Web Presence
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Tar & Chip <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-amber-600 italic">Paving.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed border-l-4 border-[#EA580C] pl-8">
              A specialized showcase for premium surface solutions. <br/>
              <span className="text-white font-bold">Crafted a professional digital presence that highlights expertise in tar and chip paving applications.</span>
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#EA580C] transition-all"
              >
                Visit Live Site <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm font-mono border-l border-white/10 pl-8">
            <div>
              <p className="text-gray-500 mb-1">Industry</p>
              <p className="font-bold text-[#EA580C]">Specialty Paving</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Focus</p>
              <p className="font-bold">Tar & Chip</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Service</p>
              <p className="font-bold">Web Design</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Type</p>
              <p className="font-bold">Portfolio Site</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-[1400px] mx-auto py-12">
        <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-8">Visual Showcase</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(300px,auto)]">

          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img
              src={ASSETS.HERO_DESKTOP}
              alt="Tar & Chip Paving Homepage"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#EA580C]">
              <Layers size={14} /> Professional Layout
            </div>
          </div>

          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img
              src={ASSETS.MOBILE_VIEW}
              alt="Mobile Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#EA580C]">
              <Smartphone size={14} /> Mobile Optimized
            </div>
          </div>

          <div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img
              src={ASSETS.DETAIL_VIEW}
              alt="Design Details"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold mb-1">Authentic Design</h3>
              <p className="text-white text-sm">Industry-Focused Aesthetic</p>
            </div>
          </div>

          <div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img
              src={ASSETS.SECONDARY_DESKTOP}
              alt="Service Showcase"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="bg-[#EA580C] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
                 Explore Features <ArrowRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-xs font-bold uppercase mb-6">
                <Target size={14} className="text-[#EA580C]" /> Niche Expertise
              </div>
              <h2 className="text-4xl font-bold mb-6">Specialized Surface Solutions</h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                The client needed a professional web presence to showcase their expertise in <strong className="text-white">tar and chip paving</strong>, a specialized application in the asphalt industry.
              </p>
              <p className="text-white text-lg leading-relaxed mb-8">
                I developed a clean, professional website that highlights their unique capabilities while maintaining an authentic connection to the paving industry. The design balances professionalism with approachability.
              </p>

              <div className="space-y-4">
                 {[
                   "Clear Service Presentation",
                   "Industry-Appropriate Visual Design",
                   "Mobile-Responsive Architecture",
                   "Professional Portfolio Display"
                 ].map((feature, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="text-[#EA580C] w-5 h-5" />
                     <span className="text-gray-300">{feature}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#EA580C]/30 transition-colors">
               <div className="absolute top-0 right-0 bg-[#EA580C] text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                 PROJECT HIGHLIGHT
               </div>

               <div className="mb-6">
                 <h3 className="text-2xl font-bold text-white mb-2">Professional Showcase</h3>
                 <p className="text-white text-sm">Built for industry credibility.</p>
               </div>

               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#EA580C]"><Layout /></div>
                   <div>
                     <h4 className="font-bold text-white">Clean Structure</h4>
                     <p className="text-sm text-white">Intuitive navigation that guides visitors through services and portfolio work.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#EA580C]"><Smartphone /></div>
                   <div>
                     <h4 className="font-bold text-white">Mobile Experience</h4>
                     <p className="text-sm text-white">Fully responsive design ensures perfect display on all devices.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 min-w-[24px] text-[#EA580C]"><Hammer /></div>
                   <div>
                     <h4 className="font-bold text-white">Industry Focus</h4>
                     <p className="text-sm text-white">Design elements that resonate with the specialty paving sector.</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-6">Technical Approach</h2>
            <h3 className="text-3xl font-bold mb-6">Built for Performance.</h3>
            <p className="text-white mb-8">
              Every element was crafted with attention to detail, from the visual hierarchy to the performance optimization.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EA580C]"></div>
                 <p className="text-sm text-gray-300">Fast Load Times</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EA580C]"></div>
                 <p className="text-sm text-gray-300">SEO-Friendly Structure</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EA580C]"></div>
                 <p className="text-sm text-gray-300">Professional Typography</p>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

            <div className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-[#EA580C]/30 transition-colors">
              <div className="mb-4 w-12 h-12 bg-[#EA580C]/10 flex items-center justify-center">
                <Layout className="text-[#EA580C]" />
              </div>
              <h4 className="text-lg font-bold mb-3">Responsive Design</h4>
              <p className="text-white text-sm leading-relaxed">
                Fully optimized for desktop, tablet, and mobile viewing experiences.
              </p>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-[#EA580C]/30 transition-colors">
              <div className="mb-4 w-12 h-12 bg-[#EA580C]/10 flex items-center justify-center">
                <Search className="text-[#EA580C]" />
              </div>
              <h4 className="text-lg font-bold mb-3">SEO Foundation</h4>
              <p className="text-white text-sm leading-relaxed">
                Clean code structure and proper meta tags for search visibility.
              </p>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-[#EA580C]/30 transition-colors">
              <div className="mb-4 w-12 h-12 bg-[#EA580C]/10 flex items-center justify-center">
                <Zap className="text-[#EA580C]" />
              </div>
              <h4 className="text-lg font-bold mb-3">Fast Performance</h4>
              <p className="text-white text-sm leading-relaxed">
                Optimized images and code for lightning-fast page loads.
              </p>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-8 hover:border-[#EA580C]/30 transition-colors">
              <div className="mb-4 w-12 h-12 bg-[#EA580C]/10 flex items-center justify-center">
                <MousePointer2 className="text-[#EA580C]" />
              </div>
              <h4 className="text-lg font-bold mb-3">User Experience</h4>
              <p className="text-white text-sm leading-relaxed">
                Intuitive navigation and clear calls-to-action throughout.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Professional Presence?</h2>
          <p className="text-white text-lg mb-10">
            Let's create a website that showcases your expertise and drives results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => router.push('/work')}
              className="mr_btn mr_btn_outline inline-flex items-center gap-2"
            >
              <span>View More Work</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

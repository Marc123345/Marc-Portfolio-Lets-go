"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, Globe, Droplets, CircleCheck as CheckCircle2, ArrowUpRight, Award, MapPin, Zap, LayoutGrid as Layout, Smartphone, MousePointer2, Feather, Quote, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';
// --- ASSET CONFIGURATION ---
const ASSETS = {
  // Provided High-Res Mockups
  HERO_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(1).png?updatedAt=1767539578544",
  MOBILE_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(1).png?updatedAt=1767539578180",
  DETAIL_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782",
  DARK_MODE: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(1).png?updatedAt=1767539580388",
  
  // Context Images
  AWARD_BADGE: "https://ik.imagekit.io/qcvroy8xpd/Screenshot.png?updatedAt=1754018965491", // Using previous screenshot as context bg
  CLIENT_PHOTO: "https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073"
};

const LIVE_URL = "https://untappedafrica.co.za";

export default function UntappedAfricaCaseStudy() {
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
    <div className="bg-[#050505] text-white selection:bg-[#FFD700] selection:text-black min-h-screen font-sans overflow-x-hidden">
      

      {/* Scroll Progress - Gold for this Client */}
      <div className="fixed top-0 left-0 h-1 bg-[#FFD700] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#FFD700]" style={{ width: `${scrollProgress * 100}%` }} />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        
        {/* Ambient Gold Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FFD700] opacity-[0.05] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16 relative z-10">
          <div className="max-w-3xl">
            {/* Meta Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-xs font-bold tracking-widest uppercase">
                <Award size={12} /> DesignRush Winner 2025
              </div>
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase">
                Package: The Impact Story Site
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Untapped <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-700 italic">Africa.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed border-l-4 border-[#FFD700] pl-8">
              A digital experience that feels as grounded and powerful as the mission it represents. 
              <br/><span className="text-white font-bold">Moving hearts to open wallets.</span>
            </p>

            <div className="flex gap-4 mt-10">
              <a 
                href={LIVE_URL} 
                target="_blank" 
                rel="noreferrer"
                className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#FFD700] transition-all"
              >
                Visit Live Site <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Stats - DesignRush Data */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm font-mono border-l border-white/10 pl-8">
            <div>
              <p className="text-gray-500 mb-1">Impact</p>
              <p className="font-bold">500,000+ Served</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Growth</p>
              <p className="font-bold">12 New Partners</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Award</p>
              <p className="font-bold">Best Web Design</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Package</p>
              <p className="font-bold text-[#FFD700]">Impact Story Site</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. VISUAL SHOWCASE (BENTO GRID) --- */}
      <section className="px-6 max-w-[1400px] mx-auto py-12">
        <h2 className="text-sm font-bold text-[#FFD700] uppercase tracking-widest mb-8">Award-Winning Interface</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(300px,auto)]">
          
          {/* Main Hero Shot (Wide) */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.HERO_DESKTOP} 
              alt="Untapped Africa Homepage"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#FFD700]">
              <Globe size={14} /> Mission Control
            </div>
          </div>

          {/* Mobile Shot (Tall) */}
          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.MOBILE_VIEW} 
              alt="Mobile Donor Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-[#FFD700]">
              <Smartphone size={14} /> Mobile Impact
            </div>
          </div>

          {/* Typography/Detail Shot (Square) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.DETAIL_VIEW} 
              alt="Typography and Palette"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold mb-1">Black & Gold</h3>
              <p className="text-white text-sm">Rich Contrast Palette</p>
            </div>
          </div>

          {/* Secondary Wide Shot */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.DARK_MODE} 
              alt="Impact Dashboard"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                 View Impact Map <ArrowRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE "IMPACT STORY" PACKAGE --- */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-xs font-bold uppercase mb-6">
                <Heart size={14} className="text-[#FFD700]" /> For NGOs & Non-Profits
              </div>
              <h2 className="text-4xl font-bold mb-6">The "Impact Story" Site</h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                Untapped Africa had a powerful mission, but their website wasn't doing it justice. It was costing them donors and global attention.
              </p>
              <p className="text-white text-lg leading-relaxed mb-8">
                I deployed the <span className="text-white font-bold">Impact Story Package</span>—a mission-first storytelling engine designed to build trust, inspire belief, and drive donation action.
              </p>

              <div className="space-y-4">
                 {[
                   "Emotional, story-driven layout w/ custom visuals",
                   "Water-inspired GSAP animations",
                   "Impact-focused hero section + mission content",
                   "Donation integration (Stripe/PayPal)"
                 ].map((feature, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="text-[#FFD700] w-5 h-5" />
                     <span className="text-gray-300">{feature}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* DesignRush Review Card */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#FFD700]/30 transition-colors">
               <div className="absolute top-0 right-0 bg-[#FFD700] text-black text-xs font-bold px-4 py-2 rounded-bl-xl">
                 DESIGNRUSH REVIEW
               </div>
               
               <div className="mb-6">
                 <h3 className="text-2xl font-bold text-white mb-2">"Beautifully Human"</h3>
                 <div className="flex gap-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />)}
                 </div>
               </div>

               <blockquote className="text-white italic leading-relaxed mb-6 border-l-2 border-[#FFD700]/50 pl-4">
                 "Marc Friedman Design Agency created more than a website... It built a digital experience that feels as grounded and powerful as the mission it represents. The deep black backdrop adds weight, while glowing gold typography delivers a message that hits home: Water is Life."
               </blockquote>

               <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/5">
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                   Lensey Etcubañas <br/> DesignRush Editor
                 </div>
                 <Award className="text-[#FFD700] w-8 h-8" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. CHALLENGE & EXECUTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-[#FFD700] uppercase tracking-widest mb-6">The Challenge</h2>
            <h3 className="text-3xl font-bold mb-6">400 Million People.</h3>
            <p className="text-white mb-8">
              That's how many people lack access to clean water. Untapped Africa needed to communicate the scale of this crisis without overwhelming the user.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                 <p className="text-sm text-gray-300">Fragmented infrastructure data</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                 <p className="text-sm text-gray-300">40% drop-off rate on old site</p>
              </li>
              <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                 <p className="text-sm text-gray-300">Disconnect between donors & impact</p>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
             {[
               {
                 icon: Droplets,
                 title: "Water-Inspired Motion",
                 desc: "I implemented custom hover effects that resemble water rippling across the screen. It's a small touch, but it makes the site feel alive."
               },
               {
                 icon: Layout,
                 title: "Modular Layouts",
                 desc: "Clear card layouts make it easy to move between sections, whether learning about the mission or exploring infrastructure solutions."
               },
               {
                 icon: Feather,
                 title: "Emotive Photography",
                 desc: "I balanced the dark UI with warm, real-world photography to ensure the platform remained human-centric."
               },
               {
                 icon: Activity,
                 title: "Impact Data Viz",
                 desc: "Interactive maps and live data counters show exactly where donations are going, building radical transparency."
               }
             ].map((card, i) => (
               <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#FFD700]/30 transition-colors">
                 <card.icon className="text-[#FFD700] w-8 h-8 mb-6" />
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
            <h2 className="text-3xl font-bold text-center mb-16">Real World Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
              <div>
                <div className="text-5xl font-bold text-white mb-2">500k+</div>
                <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">People Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">12</div>
                <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">New Partnerships</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">8</div>
                <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">Countries Impacted</div>
              </div>
            </div>

            <div className="bg-[#1b1b1b] rounded-3xl p-10 max-w-4xl mx-auto border border-white/10 relative">
               <Quote className="absolute top-10 left-10 text-white/5 w-20 h-20" />
               <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                 <img 
                   src={ASSETS.CLIENT_PHOTO} 
                   alt="Gabriel Sher" 
                   className="w-32 h-32 rounded-full border-4 border-[#FFD700]/20 object-cover"
                 />
                 <div>
                   <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                     "Working with Marc was a fantastic experience. He delivered a stunning, user-friendly site that exceeded our expectations. His professionalism and creativity made the process smooth."
                   </blockquote>
                   <div>
                     <div className="font-bold text-white text-lg">Gabriel Sher</div>
                     <div className="text-[#FFD700] text-sm uppercase tracking-widest font-bold">CEO, Untapped Africa</div>
                   </div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to create social impact?</h2>
        <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
          Let's build a platform that drives meaningful change. <br/>
          The <span className="text-white font-bold">Impact Story Package</span> is ready for deployment.
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
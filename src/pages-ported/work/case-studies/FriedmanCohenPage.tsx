"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Timer, Users, Target, Zap, CircleCheck as CheckCircle2, ArrowUpRight, Calendar, MapPin, Mail, ShoppingBag, Package, Truck, LayoutGrid as Layout, Smartphone, MonitorPlay, MousePointer2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
// --- ASSET CONFIGURATION ---
const ASSETS = {
  // New High-Res Mockups
  HERO_DESKTOP: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(3).png?updatedAt=1767539578460",
  DARK_MODE: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(3).png?updatedAt=1767539580203",
  MOBILE_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(3).png?updatedAt=1767539578244",
  DETAIL_VIEW: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776",
  
  // Legacy Asset (Keep for context/history section)
  STOREFRONT: "https://i.imgur.com/6kjURhx.jpeg" 
};

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#A3D1FF]/50 transition-all group hover:-translate-y-1 duration-300">
      <div className="w-12 h-12 rounded-lg bg-[#A3D1FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#A3D1FF] transition-colors">
        <Icon className="w-6 h-6 text-[#A3D1FF] group-hover:text-black transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#A3D1FF]/30 transition-all text-center group">
      <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">{value}</div>
      <div className="text-gray-500 text-sm uppercase tracking-wider font-bold">{label}</div>
    </div>
  );
}

export default function FriedmanCohenPage() {
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
    <div className="bg-[#050505] text-white selection:bg-[#A3D1FF] selection:text-black min-h-screen font-sans overflow-x-hidden">
      

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 h-1 bg-[#A3D1FF] z-50 transition-all duration-100 ease-out shadow-[0_0_10px_#A3D1FF]" style={{ width: `${scrollProgress * 100}%` }} />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
          <div className="max-w-3xl">
            {/* Meta Badge */}
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#A3D1FF]/10 border border-[#A3D1FF]/20 text-[#A3D1FF] text-xs font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3D1FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A3D1FF]"></span>
              </span>
              Digital Transformation • 2025
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Friedman <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">& Cohen.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed border-l-4 border-[#A3D1FF] pl-8">
              A century-old legacy of retail excellence, <br/>
              <span className="text-white">re-engineered for the digital procurement age.</span>
            </p>

            <div className="flex gap-4 mt-10">
              <a 
                href="https://fandc.co.za" 
                target="_blank" 
                rel="noreferrer"
                className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#A3D1FF] transition-all"
              >
                Visit Live Site <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm font-mono border-l border-white/10 pl-8">
            <div>
              <p className="text-gray-500 mb-1">Industry</p>
              <p className="font-bold">Retail & Procurement</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Legacy</p>
              <p className="font-bold">100+ Years</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Role</p>
              <p className="font-bold">Lead Product Designer</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Outcome</p>
              <p className="font-bold text-[#A3D1FF]">B2B Digital Scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. VISUAL SHOWCASE (BENTO GRID) --- */}
      <section className="px-6 max-w-[1400px] mx-auto py-12">
        <h2 className="text-sm font-bold text-[#A3D1FF] uppercase tracking-widest mb-8">Visual System & Interface</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(300px,auto)]">
          
          {/* Main Hero Shot (Wide) */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.HERO_DESKTOP} 
              alt="Desktop Homepage View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <MonitorPlay size={14} className="text-[#A3D1FF]" /> Commerce Interface
            </div>
          </div>

          {/* Mobile Shot (Tall) */}
          <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img 
              src={ASSETS.MOBILE_VIEW} 
              alt="Mobile Detail View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Smartphone size={14} className="text-[#A3D1FF]" /> Mobile Responsive
            </div>
          </div>

          {/* Typography/Detail Shot (Square) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.DETAIL_VIEW} 
              alt="Typography Detail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold mb-1">Clean Typography</h3>
              <p className="text-white text-sm">Design System</p>
            </div>
          </div>

          {/* Secondary Wide Shot */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-white/10 bg-[#111] min-h-[300px]">
            <img 
              src={ASSETS.DARK_MODE} 
              alt="Procurement Dashboard"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="bg-[#A3D1FF] text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                 View Catalogue <ArrowRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CONTEXT & LEGACY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-xs font-bold uppercase mb-6">
              <Timer size={14} className="text-[#A3D1FF]" /> Since 1900s
            </div>
            <h2 className="text-4xl font-bold mb-6">From Strand Main Road to Nationwide Logistics.</h2>
            <p className="text-white text-lg leading-relaxed mb-6">
              Friedman & Cohen is a cornerstone of the Western Cape community. But as the retail landscape shifted, they needed to evolve from a traditional department store into a digital-first procurement powerhouse.
            </p>
            <p className="text-white text-lg leading-relaxed mb-8">
              Our mission was to build <span className="text-white font-bold">F&C Procurement</span>: A digital platform specializing in furnishing solutions for property developers, student accommodations, and the hospitality sector.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="border-l border-[#A3D1FF] pl-4">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Years Active</div>
              </div>
              <div className="border-l border-[#A3D1FF] pl-4">
                <div className="text-2xl font-bold text-white">4.4<span className="text-sm text-[#A3D1FF]">/5</span></div>
                <div className="text-xs text-gray-500 uppercase font-bold">Google Rating</div>
              </div>
              <div className="border-l border-[#A3D1FF] pl-4">
                <div className="text-2xl font-bold text-white">1,350+</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Reviews</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A3D1FF] to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src={ASSETS.STOREFRONT} 
              alt="Historic Storefront" 
              className="relative rounded-2xl w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-4 py-2 rounded-lg text-xs font-mono text-white">
              The Original Storefront
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES & TECH --- */}
      <section className="py-24 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Digital Procurement</h2>
            <p className="text-white text-lg">
              We abstracted the complexity of supply chain logistics into a clean, approachable user interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Package}
              title="Student Housing"
              description="Dedicated catalog views for bulk furnishing. From beds to study spaces, optimized for quick BOQ creation."
            />
            <FeatureCard
              icon={Layout}
              title="Property Development"
              description="Comprehensive procurement dashboards for residential and commercial developers to track large-scale orders."
            />
            <FeatureCard
              icon={Truck}
              title="Logistics Integration"
              description="End-to-end digital tracking of delivery and installation services nationwide."
            />
          </div>
        </div>
      </section>

      {/* --- 5. PROCESS & IMPACT --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-[#A3D1FF] uppercase tracking-widest mb-8">The Workflow</h2>
            <div className="space-y-12">
               {[
                 { step: "01", title: "Quotation & Planning", desc: "Digital request forms trigger automated workflows for rapid quoting." },
                 { step: "02", title: "Sample Presentation", desc: "High-fidelity digital catalog presentation for stakeholder approval." },
                 { step: "03", title: "Procurement & Logistics", desc: "Real-time status updates on manufacturing and shipping." },
                 { step: "04", title: "Installation Support", desc: "Post-delivery support tickets integrated directly into the user account." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="text-4xl font-bold text-[#333] group-hover:text-[#A3D1FF] transition-colors">{item.step}</div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                     <p className="text-white">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-[#1b1b1b] rounded-3xl p-10 border border-white/10 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3D1FF] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
             
             <h3 className="text-2xl font-bold mb-10 relative z-10">Client Impact</h3>
             
             <div className="space-y-8 relative z-10">
               <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#A3D1FF] text-[#A3D1FF]" />)}
                 </div>
                 <p className="text-gray-300 italic mb-4">
                   "You can buy everything under one roof. Friendly service and helpful staff. Their procurement team is exceptional."
                 </p>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#A3D1FF] flex items-center justify-center text-black font-bold">M</div>
                   <div className="text-sm">
                     <span className="block text-white font-bold">Marita Sabatier</span>
                     <span className="block text-gray-500">Property Developer</span>
                   </div>
                 </div>
               </div>

               <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#A3D1FF] text-[#A3D1FF]" />)}
                 </div>
                 <p className="text-gray-300 italic mb-4">
                   "Everything under one roof, even specialized furniture for student accommodations. The quality and service are outstanding."
                 </p>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-white font-bold">A</div>
                   <div className="text-sm">
                     <span className="block text-white font-bold">Annmarie Kruger</span>
                     <span className="block text-gray-500">Student Housing Manager</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a digital transformation?</h2>
          <p className="text-white text-lg mb-10">
            We help legacy brands build modern digital infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span>Request a Quote</span>
            </button>
            <div className="flex items-center justify-center gap-2 px-8 py-4 text-white">
               <MapPin size={18} /> Strand, Cape Town
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
"use client";

import { useRef } from 'react';
import { ArrowRight, Shield, Star, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import SplitTextReveal from '@/components/SplitTextReveal';
import Link from 'next/link';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20" style={{ backgroundColor: '#1a2332' }}>
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y, scale }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            poster="https://ik.imagekit.io/qcvroy8xpd/Container.png"
          >
            <source
              src="https://cdn.pixabay.com/video/2023/12/15/192827-895963123_large.mp4"
              type="video/mp4"
            />
            <img
              src="https://ik.imagekit.io/qcvroy8xpd/Container.png"
              alt="Marc Friedman Portfolio Websites"
              className="w-full h-full object-cover"
            />
          </video>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#A3D1FF]/20 via-transparent to-transparent"
          style={{ y: y2 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-[#1a2332]/60 via-transparent to-[#A3D1FF]/10"
          style={{ y: y3 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A3D1FF]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A3D1FF]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, -80, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/60 via-transparent to-[#1a2332]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/80 via-transparent to-[#1a2332]/40" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            className="text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden mb-6">
              <h1 className="font-heading text-[clamp(3rem,6vw,4.5rem)] font-semibold tracking-[-0.01em] text-white leading-[1.15]">
                <SplitTextReveal
                  text="Award Winning Websites That Turn Attention Into Revenue"
                  delay={0.2}
                  staggerDelay={0.05}
                />
              </h1>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MagneticButton strength={20}>
                <Link
                  href="/contact"
                  className="mr_btn mr_btn_primary inline-flex items-center gap-2"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={20}>
                <Link
                  href="/contact"
                  className="mr_btn mr_btn_outline inline-flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Free Website Analysis</span>
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div
              className="max-w-md bg-black/60 backdrop-blur-sm px-6 py-5 rounded-lg border border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-[#A3D1FF]" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">25 Total Verified Reviews</span>
              </div>

              <div className="space-y-3">
                <a
                  href="https://share.google/eF48yRJKqiZppBvfN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center p-1">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Google Business</div>
                      <div className="text-white text-xs">10 reviews</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                    <span className="text-white font-bold text-sm ml-2">5.0</span>
                  </div>
                </a>

                <a
                  href="https://clutch.co/profile/marc-friedman-design-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden p-1">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="#FF3D2E"/>
                        <circle cx="100" cy="100" r="60" fill="white"/>
                        <circle cx="100" cy="100" r="35" fill="#FF3D2E"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Clutch</div>
                      <div className="text-white text-xs">5 reviews</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 || (i === 4) ? 'fill-[#FFD700] text-[#FFD700]' : 'fill-[#FFD700]/50 text-[#FFD700]/50'}`} />
                    ))}
                    <span className="text-white font-bold text-sm ml-2">4.8</span>
                  </div>
                </a>

                <a
                  href="https://www.designrush.com/agency/profile/marc-friedman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden">
                      <img src="https://ik.imagekit.io/qcvroy8xpd/download%20(4).jpeg" alt="DesignRush" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">DesignRush</div>
                      <div className="text-white text-xs">3 reviews</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 || (i === 4) ? 'fill-[#FFD700] text-[#FFD700]' : 'fill-[#FFD700]/50 text-[#FFD700]/50'}`} />
                    ))}
                    <span className="text-white font-bold text-sm ml-2">4.5</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/portfolio2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">LinkedIn</div>
                      <div className="text-white text-xs">8 reviews</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-[#FFD700] text-[#FFD700]' : 'fill-[#FFD700]/50 text-[#FFD700]/50'}`} />
                    ))}
                    <span className="text-white font-bold text-sm ml-2">4.9</span>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="text-white text-xs">Trusted by:</span>
                <div className="flex items-center -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-[#1a2332] overflow-hidden">
                    <img src="https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-[#1a2332] overflow-hidden">
                    <img src="https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-[#1a2332] overflow-hidden">
                    <img src="https://ik.imagekit.io/qcvroy8xpd/1732338426448%20(1).jpeg?updatedAt=1749337717019" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#A3D1FF] to-blue-500 border-2 border-[#1a2332] flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">20+</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}

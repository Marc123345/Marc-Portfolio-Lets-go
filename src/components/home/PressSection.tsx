"use client";

import { ArrowRight, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const springTransition = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
};

const hoverTransition = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 20,
};

export default function PressSection() {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#A3D1FF] shadow-lg">
            <img
              src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
              alt="Marc Friedman"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer-when-downgrade"
              crossOrigin="anonymous"
              loading="eager"
            />
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black mb-6 leading-tight text-white">
            Press & <span className="text-[#A3D1FF]">Recognition</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Featured in leading design publications and recognized for excellence in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12" style={{ perspective: '1000px' }}>
          <motion.a
            href="https://www.designrush.com/best-designs/websites/untapped-africa-website-design"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, rotateX: 15 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ...springTransition }}
            whileHover={{ y: -10, scale: 1.02, rotateX: -2, transition: hoverTransition }}
            viewport={{ once: true }}
            className="bg-[#1b1b1b] border border-white/10 rounded-2xl overflow-hidden hover:border-[#A3D1FF] transition-all group relative"
          >
            <div className="absolute top-4 right-4 bg-[#A3D1FF] text-black px-3 py-1 rounded-full text-xs font-bold z-10">
              Featured
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#A3D1FF]/10 to-transparent">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/Screenshot.png?updatedAt=1754018965491"
                alt="Untapped Africa Featured on DesignRush"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-[#FFD700]" />
                <span className="text-xs text-[#FFD700] font-semibold uppercase">Feature</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">
                Untapped Africa Website Design Featured
              </h3>
              <p className="text-white text-sm mb-4">
                Featured by DesignRush for exceptional user experience and social impact focus.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm">DesignRush</span>
                <ArrowRight className="w-5 h-5 text-[#A3D1FF] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.designrush.com/agency/profile/marc-friedman-design-agency"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, rotateX: 15 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ...springTransition }}
            whileHover={{ y: -10, scale: 1.02, rotateX: -2, transition: hoverTransition }}
            viewport={{ once: true }}
            className="bg-[#1b1b1b] border border-white/10 rounded-2xl overflow-hidden hover:border-[#A3D1FF] transition-all group"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-[#A3D1FF]/5 to-transparent flex items-center justify-center">
              <div className="text-center p-8">
                <Award className="w-16 h-16 text-[#A3D1FF] mx-auto mb-4" />
                <h4 className="text-white font-bold text-lg">Agency Profile</h4>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-[#FFD700]" />
                <span className="text-xs text-[#FFD700] font-semibold uppercase">Profile</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">
                Marc Friedman Design Agency
              </h3>
              <p className="text-white text-sm mb-4">
                Comprehensive profile showcasing design expertise and client success stories.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm">DesignRush</span>
                <ArrowRight className="w-5 h-5 text-[#A3D1FF] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.awwwards.com/marc-friedman/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, rotateX: 15 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ...springTransition }}
            whileHover={{ y: -10, scale: 1.02, rotateX: -2, transition: hoverTransition }}
            viewport={{ once: true }}
            className="bg-[#1b1b1b] border border-white/10 rounded-2xl overflow-hidden hover:border-[#A3D1FF] transition-all group"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-[#FFB800]/5 to-transparent flex items-center justify-center">
              <div className="text-center p-8">
                <Award className="w-16 h-16 text-[#FFB800] mx-auto mb-4" />
                <h4 className="text-white font-bold text-lg">Recognition</h4>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#FFB800]" />
                <span className="text-xs text-[#FFB800] font-semibold uppercase">Award</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">
                Award Recognition
              </h3>
              <p className="text-white text-sm mb-4">
                Recognition for excellence in digital design and user experience.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm">Awwwards</span>
                <ArrowRight className="w-5 h-5 text-[#A3D1FF] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>
        </div>

        <div className="text-center">
          <Link
            href="/press"
            className="mr_btn mr_btn_outline inline-flex items-center gap-2 text-xl"
          >
            <span>View All Press Coverage</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

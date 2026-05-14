"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

const MARC_PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';

const CLIENT_AVATARS = [
  'https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073',
  'https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922',
  'https://ik.imagekit.io/qcvroy8xpd/1732338426448%20(1).jpeg?updatedAt=1749337717019',
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0a0a0a]"
      style={{ paddingTop: '140px', paddingBottom: '80px' }}
    >
      {/* Soft accent glow — matches other sections */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[#A3D1FF]/10 rounded-full blur-[160px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Row 1 — giant centered name */}
        <motion.div
          className="text-center"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-heading uppercase leading-[0.9] m-0"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              fontSize: 'clamp(4rem, 18vw, 230px)',
              color: '#FCFCFB',
              letterSpacing: '-0.025em',
              fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
              fontKerning: 'normal',
              textWrap: 'balance',
            }}
          >
            Marc Friedman
          </h1>
        </motion.div>

        {/* Row 2 — 3 columns: reviews · photo · tagline+CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Left — client reviews */}
          <motion.div
            className="lg:col-span-3 pt-8"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex p-0 m-0 list-none">
              {CLIENT_AVATARS.map((src, i) => (
                <li
                  key={src}
                  className="rounded-full overflow-hidden border-2 border-[#0a0a0a]"
                  style={{
                    flex: '0 0 60px',
                    width: 60,
                    height: 60,
                    marginLeft: i === 0 ? 0 : -15,
                  }}
                >
                  <img
                    src={src}
                    alt="Happy client"
                    className="w-full h-full object-cover rounded-full"
                  />
                </li>
              ))}
            </ul>
            <div
              className="mt-3 block"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 20,
                fontWeight: 500,
                color: '#FCFCFB',
              }}
            >
              25+ reviews <span className="text-white/50">(4.9 of 5)</span>
              <p
                className="mt-3 text-white/70"
                style={{
                  fontSize: 15,
                  lineHeight: '26px',
                  fontWeight: 400,
                }}
              >
                Five-star reviews on Google, Clutch &amp; LinkedIn from clients across 3 continents.
              </p>
            </div>
          </motion.div>

          {/* Center — tilted portrait */}
          <motion.div
            className="lg:col-span-6 flex justify-center"
            initial={{ opacity: 0, y: 60, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 10 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, transition: { duration: 0.4 } }}
          >
            <div className="relative text-center">
              <Image
                src={MARC_PORTRAIT}
                alt="Marc Friedman — Web Designer Tel Aviv"
                width={400}
                height={500}
                priority
                className="block mx-auto"
                style={{
                  width: 'min(400px, 80vw)',
                  height: 'auto',
                  borderRadius: 20,
                  border: '3px solid rgba(255,255,255,0.12)',
                  marginTop: '-40px',
                  boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)',
                }}
              />
            </div>
          </motion.div>

          {/* Right — tagline + CTA */}
          <motion.div
            className="lg:col-span-3 pt-8"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/80"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                lineHeight: '28px',
                fontWeight: 400,
                marginBottom: 32,
              }}
            >
              Hi, I&rsquo;m Marc — a web designer in Tel Aviv building custom
              React &amp; Next.js sites that load in under 2 seconds and turn
              visitors into customers.
            </p>
            <MagneticButton strength={20}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black font-medium px-6 py-3 hover:bg-[#A3D1FF] transition-colors group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

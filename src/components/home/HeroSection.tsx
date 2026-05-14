"use client";

import Image from 'next/image';
import Link from 'next/link';
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
      className="main-hero-area relative w-full overflow-hidden"
      style={{ backgroundColor: '#F4F3ED', paddingTop: '115px' }}
    >
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Row 1 — giant centered name */}
        <div className="w-full">
          <motion.div
            className="text-center"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="font-heading uppercase leading-[0.9] m-0"
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(4rem, 18vw, 230px)',
                color: '#070707',
                letterSpacing: '-0.01em',
              }}
            >
              Marc Friedman
            </h2>
          </motion.div>
        </div>

        {/* Row 2 — 3 columns: reviews · photo · tagline+CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start mt-4">
          {/* Left — client reviews */}
          <motion.div
            className="lg:col-span-3 pt-8"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="clienti-reviews">
              <ul className="flex p-0 m-0 list-none">
                {CLIENT_AVATARS.map((src, i) => (
                  <li
                    key={src}
                    className="rounded-full overflow-hidden"
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
                className="mt-5 block"
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontSize: 20,
                  fontWeight: 500,
                  color: '#070707',
                }}
              >
                25+ reviews <span style={{ color: '#969696' }}>(4.9 of 5)</span>
                <p
                  className="mt-5"
                  style={{
                    fontSize: 16,
                    color: '#070707',
                    lineHeight: '28px',
                    fontWeight: 400,
                  }}
                >
                  Five-star reviews on Google, Clutch &amp; LinkedIn from clients across 3 continents.
                </p>
              </div>
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
            <div className="hero-image relative text-center">
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
                  border: '3px solid #fff',
                  marginTop: '-40px',
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
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#070707',
                fontSize: 16,
                lineHeight: '28px',
                fontWeight: 400,
                marginBottom: 24,
              }}
            >
              Hi, I&rsquo;m Marc — a web designer in Tel Aviv building custom
              React &amp; Next.js sites that load in under 2 seconds and turn
              visitors into customers.
            </p>
            <MagneticButton strength={20}>
              <Link
                href="/contact"
                className="inline-block text-center"
                style={{
                  background: '#070707',
                  color: '#F4F3ED',
                  border: '1px solid rgba(119,119,125,.2)',
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  borderRadius: 2,
                  padding: '20px 34px',
                  textDecoration: 'none',
                  transition: '.3s',
                }}
              >
                Get In Touch
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

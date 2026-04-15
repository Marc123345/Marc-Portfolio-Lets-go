"use client";

import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';

const CALENDLY_LINK = "https://calendly.com/marc-friedman-web-design--meeting-link/30min";

export default function AboutSection() {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 1.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
              viewport={{ once: true }}
            >
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman"
                className="w-full h-auto shadow-2xl"
              />
            </motion.div>
          </div>

          <div>
            <Reveal direction="right" delay={0.2}>
              <h2 className="text-5xl font-black mb-6 text-white">
                One Designer. One Developer. <span className="text-[#A3D1FF]">Zero Handoffs.</span>
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <div className="space-y-6 text-xl text-gray-300 mb-8">
                <p>
                  At an agency, your project gets passed between a designer, a developer, a PM, and whoever's available on Tuesday.
                </p>
                <p>
                  With me, the person who designs your site is the same person who codes it. That means fewer misunderstandings, faster turnarounds, and a website that actually matches the vision.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <MagneticButton>
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr_btn mr_btn_primary inline-flex items-center gap-2 text-xl"
                >
                  <span>Let's Talk</span>
                  <MessageSquare className="w-6 h-6" />
                </a>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

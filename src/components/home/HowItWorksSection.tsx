"use client";

import { motion } from 'framer-motion';
import ConnectedSteps from '@/components/ConnectedSteps';

const steps = [
  {
    number: "01",
    title: "Book a Call",
    description: "We'll chat about your business, goals, and what's not working with your current site. No pressure, no sales pitch."
  },
  {
    number: "02",
    title: "I Build It",
    description: "Custom design and development. Modern tech stack (React/Node). Weekly updates so you're never in the dark."
  },
  {
    number: "03",
    title: "You Launch & Grow",
    description: "I deploy, test, and hand over a website that actually brings you customers. Plus 30 days of support to make sure everything runs smooth."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
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
            How It <span className="text-[#A3D1FF]">Works</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Simple. No surprises. Just results.
          </p>
        </motion.div>

        <ConnectedSteps steps={steps} />
      </div>
    </section>
  );
}

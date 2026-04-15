"use client";

import { motion } from 'framer-motion';
import AnimatedFAQ from '@/components/AnimatedFAQ';

const faqItems = [
  {
    q: "How long does it take?",
    a: "Most projects: 4-8 weeks. Complex apps: 12-16 weeks. I'll give you a clear timeline on our first call."
  },
  {
    q: "What's included?",
    a: "Everything. Custom design, React/Node dev, mobile responsive, SEO, analytics, CRM integration, hosting setup, and 30 days of post-launch support."
  },
  {
    q: "Do you work internationally?",
    a: "Yes! I work with clients across three continents. Time zones are never an issue."
  },
  {
    q: "What if I already have a website?",
    a: "Perfect. I can redesign and rebuild it to be faster, better-looking, and higher-converting."
  },
  {
    q: "How do I pay?",
    a: "50% to start, 25% at design approval, 25% at launch. Payment plans available—just ask."
  }
];

export default function FAQSection() {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black mb-6 leading-tight text-white">
            Got <span className="text-[#A3D1FF]">Questions?</span>
          </h2>
        </motion.div>

        <AnimatedFAQ items={faqItems} />
      </div>
    </section>
  );
}

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
                Work With Me,<br />Not a <span className="text-[#A3D1FF]">Team of Interns</span>
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <div className="space-y-6 text-xl text-gray-300 mb-8">
                <p>
                  Hey, I'm Marc. I've been building websites for agencies, local businesses, and jewellery brands across three continents.
                </p>
                <p>
                  Unlike big agencies that hand your project off to junior devs, you work directly with me from start to finish. That means faster turnaround, better communication, and no surprises.
                </p>
                <p>
                  I care about your success because your results are my reputation. When your website brings in leads and grows your business, we both win.
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

"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ConnectedStepsProps {
  steps: Step[];
  className?: string;
}

export default function ConnectedSteps({ steps, className = '' }: ConnectedStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
            viewport={{ once: true }}
            className="flex items-start gap-8 bg-[#1b1b1b] border border-white/10 p-10 rounded-3xl hover:border-[#A3D1FF] transition-all duration-300 relative"
          >
            <motion.div
              className="text-6xl font-black text-[#A3D1FF] opacity-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
                delay: index * 0.1 + 0.2,
              }}
              viewport={{ once: true }}
            >
              {step.number}
            </motion.div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-xl text-white">{step.description}</p>
            </div>
            {step.icon && (
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                  delay: index * 0.1 + 0.3,
                }}
                viewport={{ once: true }}
              >
                {step.icon}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <svg
        className="absolute left-12 top-0 h-full w-1 pointer-events-none hidden md:block"
        viewBox="0 0 20 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 10 0 L 10 1000"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A3D1FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A3D1FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading } from './TextScramble';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  description,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <motion.span 
          className="inline-block px-4 py-2 rounded-full bg-[#A3D1FF]/10 text-[#A3D1FF] text-sm mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {badge}
        </motion.span>
      )}
      
      <AnimatedHeading 
        text={title}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
        element="h2"
      />
      
      {subtitle && (
        <motion.h3 
          className="text-xl sm:text-2xl text-[#A3D1FF] mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {subtitle}
        </motion.h3>
      )}
      
      {description && (
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
"use client";

import { motion, useReducedMotion, Variants } from 'framer-motion';

interface SplitTextRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  splitBy?: 'words' | 'characters';
}

export default function SplitTextReveal({
  text,
  delay = 0,
  staggerDelay = 0.05,
  className = '',
  splitBy = 'words',
}: SplitTextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'tween',
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      };

  const splitText = (text: string) => {
    if (splitBy === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span variants={itemVariants} className="inline-block">
            {word}
            {index < text.split(' ').length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ));
    } else {
      return text.split('').map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span variants={itemVariants} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ));
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={className}
    >
      {splitText(text)}
    </motion.div>
  );
}

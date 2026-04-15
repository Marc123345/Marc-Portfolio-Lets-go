"use client";

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  triggerOnce?: boolean;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'blur-in';
  delay?: number;
  stagger?: number;
  className?: string;
}

export default function Reveal({
  children,
  triggerOnce = true,
  threshold = 0.2,
  direction = 'up',
  delay = 0,
  className = '',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = (): Variants => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    const baseConfig = {
      hidden: {},
      visible: {},
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
          },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -40 },
          visible: {
            opacity: 1,
            y: 0,
          },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: {
            opacity: 1,
            x: 0,
          },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
          },
        };
      case 'blur-in':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
          },
        };
      default:
        return baseConfig;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={getVariants()}
      transition={{
        type: 'tween',
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

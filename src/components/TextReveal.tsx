"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.2,
  direction = 'up'
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, threshold });

  // Set initial and animate values based on direction
  const getVariants = () => {
    const distance = 50;
    
    let initial = {};
    switch (direction) {
      case 'up':
        initial = { y: distance, opacity: 0 };
        break;
      case 'down':
        initial = { y: -distance, opacity: 0 };
        break;
      case 'left':
        initial = { x: distance, opacity: 0 };
        break;
      case 'right':
        initial = { x: -distance, opacity: 0 };
        break;
    }
    
    return {
      hidden: initial,
      visible: { 
        y: 0, 
        x: 0, 
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    };
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}
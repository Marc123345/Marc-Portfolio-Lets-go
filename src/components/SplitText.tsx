"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
  type?: 'words' | 'chars';
  animation?: 'fade' | 'slide' | 'scale' | 'wave';
  staggerChildren?: number;
  delayChildren?: number;
}

export default function SplitText({
  children,
  className = '',
  wordClassName = '',
  charClassName = '',
  type = 'words',
  animation = 'fade',
  staggerChildren = 0.03,
  delayChildren = 0
}: SplitTextProps) {
  // Get animation variants based on animation type
  const getVariants = (): Variants => {
    switch (animation) {
      case 'slide':
        return {
          hidden: { y: 20, opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delayChildren + (i * staggerChildren),
              duration: 0.4, // Reduced duration
              ease: [0.22, 1, 0.36, 1] as const
            }
          })
        };
      case 'scale':
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
              delay: delayChildren + (i * staggerChildren),
              duration: 0.4, // Reduced duration
              ease: [0.22, 1, 0.36, 1] as const
            }
          })
        };
      case 'wave':
        return {
          hidden: { y: 20, opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delayChildren + (i * staggerChildren),
              type: "spring",
              damping: 12,
              stiffness: 200
            }
          })
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: {
              delay: delayChildren + (i * staggerChildren),
              duration: 0.4 // Reduced duration
            }
          })
        };
    }
  };

  const variants = getVariants();

  // For better performance, limit the number of animated elements
  const maxAnimatedElements = 20;

  if (type === 'chars') {
    // Split text into characters
    const chars = children.split('');
    const limitedChars = chars.length > maxAnimatedElements ? 
      [...chars.slice(0, maxAnimatedElements), ...chars.slice(maxAnimatedElements).map(() => '')] : 
      chars;
    
    return (
      <motion.span
        className={className}
        initial="hidden"
        animate="visible"
        aria-label={children}
      >
        {limitedChars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className={`inline-block ${charClassName}`}
            custom={i}
            variants={i < maxAnimatedElements ? variants : undefined}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Split text into words
  const words = children.split(' ');
  const limitedWords = words.length > maxAnimatedElements/2 ? 
    [...words.slice(0, maxAnimatedElements/2), ...words.slice(maxAnimatedElements/2).map(() => '')] : 
    words;
  
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      aria-label={children}
    >
      {limitedWords.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block ${wordClassName}`}
          custom={i}
          variants={i < maxAnimatedElements/2 ? variants : undefined}
          aria-hidden="true"
        >
          {word}
          {i !== words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}
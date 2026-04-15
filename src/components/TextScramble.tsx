"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  scrambleSpeed?: number;
  characters?: string;
  onComplete?: () => void;
}

// Enhanced text scramble effect with more sophisticated animation
const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  duration = 2,
  delay = 0,
  scrambleSpeed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const charsRef = useRef<{ from: string; to: string; start: number; end: number }[]>([]);
  const prefersReducedMotion = useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    // If reduced motion is preferred, show final text immediately
    if (prefersReducedMotion.current) {
      setDisplayText(text);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    // Initialize character transitions
    charsRef.current = Array.from(text).map((to, i) => ({
      from: getRandomChar(characters),
      to,
      start: delay * 1000 + (i * scrambleSpeed),
      end: delay * 1000 + (i * scrambleSpeed) + (duration * 1000 / text.length)
    }));
    
    // Start animation
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      
      // Calculate current text state
      const currentText = charsRef.current.map(char => {
        if (elapsed < char.start) return char.from;
        if (elapsed >= char.end) return char.to;
        
        // During transition, randomly switch between original and target
        const progress = (elapsed - char.start) / (char.end - char.start);
        return Math.random() > progress ? getRandomChar(characters) : char.to;
      }).join('');
      
      setDisplayText(currentText);
      
      // Check if animation is complete
      if (elapsed < delay * 1000 + duration * 1000 + text.length * scrambleSpeed) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, duration, delay, scrambleSpeed, characters, onComplete]);
  
  // Get random character from character set
  const getRandomChar = (chars: string) => {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  return (
    <span className={`font-mono ${className}`} aria-label={text}>
      {displayText}
    </span>
  );
};

// Wave animation component that applies animation to each character
export const WaveTextScramble: React.FC<TextScrambleProps & { waveDelay?: number }> = ({
  text,
  className = '',
  waveDelay = 0.08,
  ...props
}) => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <span className={className}>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={prefersReducedMotion ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: prefersReducedMotion ? 0 : i * waveDelay + (props.delay || 0),
            type: "spring",
            stiffness: 800,
            damping: 20
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

// Animated heading with sophisticated reveal effect
export const AnimatedHeading: React.FC<{
  text: string;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  color?: string;
}> = ({
  text,
  className = '',
  element = 'h1',
  color = 'text-white'
}) => {
  const Element = element;
  const words = text.split(' ');
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Element className={`${className} ${color} overflow-hidden`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={prefersReducedMotion ? { y: 0 } : { y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : i * 0.1,
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Element>
  );
};

export default TextScramble;
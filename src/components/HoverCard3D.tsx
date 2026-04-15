"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HoverCard3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  backgroundGradient?: boolean;
  glareEffect?: boolean;
  borderEffect?: boolean;
}

export default function HoverCard3D({
  children,
  className = '',
  depth = 10,
  backgroundGradient = true,
  glareEffect = true,
  borderEffect = true
}: HoverCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  
  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smoother movement
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [depth, -depth]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-depth, depth]), springConfig);
  
  // For glare effect
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']), springConfig);
  const glareOpacity = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 0.2]), springConfig);
  
  // For gradient background
  const gradientX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']), springConfig);
  const gradientY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']), springConfig);
  
  // For border effect
  const borderOpacity = useSpring(isHovering ? 1 : 0, { damping: 20, stiffness: 300 });
  
  // Disable effect on mobile
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches || 
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsEnabled(!isMobile);
    };
    
    checkDevice();
    
    // Use a more efficient event listener with debounce
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(checkDevice, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isEnabled) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };
  
  // Reset on mouse leave
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  // Skip rendering effects when disabled
  if (!isEnabled) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background gradient effect */}
      {backgroundGradient && isHovering && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#A3D1FF]/20 to-transparent z-0"
          style={{
            background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(163, 209, 255, 0.3), transparent 50%)`,
          }}
        />
      )}
      
      {/* Glare effect */}
      {glareEffect && isHovering && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.8), transparent 50%)`,
            opacity: glareOpacity,
            mixBlendMode: 'overlay'
          }}
        />
      )}
      
      {/* Border effect */}
      {borderEffect && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            border: '1px solid rgba(163, 209, 255, 0.5)',
            opacity: borderOpacity,
            zIndex: 20
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-1">
        {children}
      </div>
    </motion.div>
  );
}
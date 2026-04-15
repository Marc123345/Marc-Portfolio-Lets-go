"use client";

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CircleCheck as CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  impact: string[];
  technologies: string[];
  index: number;
}

export default function ProjectCard3D({
  title,
  description,
  image,
  liveUrl,
  caseStudyUrl,
  impact,
  technologies,
  index
}: ProjectCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(true);
  
  // Check if mobile on mount
  React.useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    setIsEnabled(!isMobile);
    
    // Add resize listener with debounce
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        setIsEnabled(window.innerWidth >= 768);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  
  // Add spring physics for smoother animation
  const springConfig = { damping: 15, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  // For image parallax effect
  const imgX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const imgY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);
  const imgSpringX = useSpring(imgX, springConfig);
  const imgSpringY = useSpring(imgY, springConfig);
  
  // For content parallax effect (opposite direction)
  const contentX = useTransform(mouseX, [-0.5, 0.5], [5, -5]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const contentSpringX = useSpring(contentX, springConfig);
  const contentSpringY = useSpring(contentY, springConfig);
  
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
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={isEnabled ? handleMouseMove : undefined}
      onMouseEnter={() => isEnabled && setIsHovered(true)}
      onMouseLeave={isEnabled ? handleMouseLeave : undefined}
      style={isEnabled ? {
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      } : undefined}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <div className={`absolute inset-0 bg-gray-800 animate-pulse ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
        <motion.img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={isEnabled ? {
            x: imgSpringX,
            y: imgSpringY,
            scale: isHovered ? 1.1 : 1,
          } : undefined}
          transition={{ duration: 0.4 }}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <motion.div 
        className="p-4 sm:p-6"
        style={isEnabled ? {
          x: contentSpringX,
          y: contentSpringY,
          transformStyle: 'preserve-3d',
          zIndex: 1
        } : undefined}
      >
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-white mb-3 sm:mb-4">{description}</p>
        
        <div className="space-y-2 mb-3 sm:mb-4">
          {impact.slice(0, 2).map((item, index) => (
            <div key={index} className="flex items-start text-xs">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mt-0.5 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs">
              +{technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="mr_btn mr_btn_outline inline-flex items-center gap-2">
              <span>View Live</span>
            </a>
          )}

          {caseStudyUrl && (
            <button onClick={() => router.push(caseStudyUrl)} className="mr_btn mr_btn_primary inline-flex items-center gap-2">
              <span>Case Study</span>
            </button>
          )}
        </div>
      </motion.div>
      
      {/* Glare effect */}
      {isEnabled && (
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            transform: `rotate(${isHovered ? 30 : 0}deg) scale(${isHovered ? 1.5 : 1})`,
            transformOrigin: 'center',
            transition: 'transform 0.5s ease, opacity 0.5s ease'
          }}
        ></div>
      )}
    </motion.div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  minDuration?: number; // Minimum time to show loader in ms
}

export default function LoadingScreen({ minDuration = 1500 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  
  // Track loading progress
  useEffect(() => {
    // Skip loader if this isn't the first load in this session
    try {
      const initialLoadComplete = sessionStorage.getItem('initial-load-complete');
      if (initialLoadComplete === 'true') {
        setProgress(100);
        setMinTimeElapsed(true);
        setAssetsLoaded(true);
        setIsVisible(false);
        return;
      }
    } catch (e) {
      console.error('Failed to read from sessionStorage:', e);
    }
    
    // Ensure minimum display time
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minDuration);
    
    // Simulate loading progress with smoother acceleration
    const interval = setInterval(() => {
      setProgress(prev => {
        // Slow down progress as it approaches 95%
        const remaining = 95 - prev;
        const increment = Math.max(0.5, remaining * 0.05);
        const nextProgress = Math.min(95, prev + increment);
        return nextProgress;
      });
    }, 100);
    
    // Check when page is fully loaded
    const handleLoad = () => {
      setAssetsLoaded(true);
      clearInterval(interval);
      
      // Wait a bit to ensure all chunks are loaded
      setTimeout(() => {
        setProgress(100);
      }, 300);
    };
    
    // Listen for page load event
    window.addEventListener('load', handleLoad);
    
    // Custom event for when React app is fully mounted
    document.addEventListener('app-loaded', handleLoad);
    
    return () => {
      clearTimeout(minTimer);
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('app-loaded', handleLoad);
    };
  }, [minDuration]);
  
  // Hide loader when conditions are met
  useEffect(() => {
    if (progress === 100 && minTimeElapsed && assetsLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        
        // Notify the app that loading is complete
        window.dispatchEvent(new Event('loading-complete'));
        
        // Store in session storage that initial load is complete
        try {
          sessionStorage.setItem('initial-load-complete', 'true');
        } catch (e) {
          console.error('Failed to write to sessionStorage:', e);
        }
      }, 300); // Short delay after reaching 100%
      
      return () => clearTimeout(timer);
    }
  }, [progress, minTimeElapsed, assetsLoaded]);
  
  // Skip loader if this isn't the first load in this session
  useEffect(() => {
    try {
      const initialLoadComplete = sessionStorage.getItem('initial-load-complete');
      if (initialLoadComplete === 'true') {
        setProgress(100);
        setMinTimeElapsed(true);
        setAssetsLoaded(true);
      }
    } catch (e) {
      console.error('Failed to read from sessionStorage:', e);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-32 h-32 mb-8 relative">
            {/* Logo with glow effect */}
            <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full animate-pulse"></div>
            <motion.div 
              className="w-full h-full flex items-center justify-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src="/images/marc-friedman-primary.svg" 
                alt="Marc" 
                className="h-20 w-auto object-contain pt-3"
                width="80"
                height="32"
              />
            </motion.div>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-[#1b1b1b] rounded-full overflow-hidden mb-4">
            <motion.div 
              className="h-full bg-[#A3D1FF]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Percentage text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#A3D1FF] font-mono text-sm"
          >
            {Math.round(progress)}%
          </motion.div>
          
          {/* Loading message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: progress < 90 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-white text-sm"
          >
            {progress < 30 ? "Initializing..." : 
             progress < 60 ? "Loading assets..." : 
             progress < 90 ? "Almost there..." : ""}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function useMobileHover() {
  const [isMobileHover, setIsMobileHover] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => setIsMobileHover(true);
    const handleMouseLeave = () => setIsMobileHover(false);
    const handleTouchStart = () => setIsMobileHover(true);
    const handleTouchEnd = () => {
      // Delay to allow for tap recognition
      setTimeout(() => setIsMobileHover(false), 100);
    };

    // Add event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    // Cleanup
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return { isMobileHover, elementRef };
} 
'use client';

import React from 'react';
import { Link } from 'react-router-dom';

interface LogoType {
  logoUrl: string;
  altText: string;
  link: string;
}

interface InfiniteLogoMarqueeProps {
  logos: LogoType[];
  direction?: 'rtl' | 'ltr';
  speed?: number; // in seconds
  pauseOnHover?: boolean;
}

const InfiniteLogoMarquee = ({
  logos,
  direction = 'rtl',
  speed = 60,
  pauseOnHover = true
}: InfiniteLogoMarqueeProps) => {
  // Ensure we have enough logos to make the animation smooth by duplicating the array
  const duplicatedLogos = [...logos, ...logos];
  const animationClass = direction === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee-ltr';
  const duration = `${speed}s`;
  
  // CSS to pause animation on hover if enabled
  const hoverStyles = pauseOnHover ? 'hover:pause-animation' : '';
  
  return (
    <div className="overflow-hidden py-4 hide-scrollbar w-full">
      <div 
        className={`flex flex-nowrap w-max ${animationClass} ${hoverStyles}`}
        style={{ '--duration': duration } as React.CSSProperties}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${direction}-${index}`}
            className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center w-36 h-20 md:w-40 md:h-24 mx-3 transition-all duration-300 hover:shadow-lg hover:border-[#88bf42] dark:hover:border-[#88bf42] hover:scale-105 transform"
          >
            <Link to={logo.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              {logo.logoUrl && (
                <img
                  src={logo.logoUrl}
                  alt={logo.altText}
                  width={120}
                  height={60}
                  className="object-contain max-w-full max-h-full transition-all duration-300 filter hover:brightness-110"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoMarquee; 
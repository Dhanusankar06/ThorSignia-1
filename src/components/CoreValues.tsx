'use client';

import {
  IconBulb,
  IconUsers,
  IconAward,
  IconChartArrows,
  IconRocket,
  IconWorld,
} from '@tabler/icons-react';
import { HoverEffect } from './layout/card-hover-effect';
import useMobileHover from './useMobileHover';
import { motion } from 'framer-motion';
import React from 'react';

interface ValueCard {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export function CoreValues() {
  const items = cards.map(card => {
    const { isMobileHover, elementRef } = useMobileHover();
    return {
      title: card.title,
      description: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <div ref={elementRef} className="group">
            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#88bf42]/5 via-[#88bf42]/2 to-[#0F0326]/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-xl" />

            {/* Card */}
            <div
              className={`relative p-6 rounded-2xl backdrop-blur-sm border border-[#0F0326]/[0.05] transition-all duration-700 bg-white/[0.01] ${
                isMobileHover
                  ? 'border-[#88bf42]/20 -translate-y-2 shadow-[0_20px_40px_-15px_rgba(136,191,66,0.1)]'
                  : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 text-[#88BF42] bg-gradient-to-br from-[#88BF42]/10 via-[#88BF42]/5 to-[#0F0326]/10 rounded-xl flex items-center justify-center transform transition-all duration-700 shadow-lg shadow-[#88bf42]/5 ${
                    isMobileHover ? 'scale-110 rotate-3' : ''
                  }`}
                >
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black transition-colors duration-300 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-black leading-relaxed">{card.content}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
      link: '#',
    };
  });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#88bf42]/[0.02] to-[#0F0326]/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0F0326] to-[#88BF42] inline-block mb-4">
            Our Core Values
          </h2>
        </div>
        <p className="text-base md:text-lg text-black max-w-2xl text-center mx-auto mb-16">
          Guiding principles that drive our innovation and shape our future
        </p>

        {/* Cards Grid */}
        <HoverEffect items={items} />

       
        </div>
      
    </section>
  );
}

const cards: ValueCard[] = [
  {
    title: 'Innovation',
    content:
      "We constantly push the boundaries of what's possible with AI technology.",
    icon: <IconBulb size={32} stroke={1.5} />,
  },
  {
    title: 'Collaboration',
    content:
      'We work closely with our clients to ensure solutions align perfectly with their needs.',
    icon: <IconUsers size={32} stroke={1.5} />,
  },
  {
    title: 'Excellence',
    content:
      'We hold ourselves to the highest standards in every aspect of our work.',
    icon: <IconAward size={32} stroke={1.5} />,
  },
  {
    title: 'Growth',
    content:
      "We're committed to continuous improvement and staying ahead of industry trends.",
    icon: <IconChartArrows size={32} stroke={1.5} />,
  },
  {
    title: 'Efficiency',
    content:
      'We optimize processes and deliver solutions that maximize value and minimize waste.',
    icon: <IconRocket size={32} stroke={1.5} />,
  },
  {
    title: 'Global Impact',
    content:
      'We create solutions that positively impact businesses and communities worldwide.',
    icon: <IconWorld size={32} stroke={1.5} />,
  },
];

export default CoreValues;

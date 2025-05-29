'use client';

import {
  IconBulb,
  IconUsers,
  IconAward,
  IconChartArrows,
  IconRocket,
  IconWorld,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import React from 'react';

interface ValueCard {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export function CoreValues() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 py-16">
      <div className="w-full relative z-10">
        {/* Text Block - Centered and limited width */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Tag - Adjusted mb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto mb-4"
          >
            <span className="text-[#88BF42] text-sm md:text-base font-semibold">
              Our Core Values
            </span>
          </motion.div>

          {/* Heading - Increased size and weight, adjusted mb */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] leading-tight mb-4"
          >
            Built on <span className="text-[#88BF42]">Integrity and Innovation</span>
          </motion.h2>

          {/* Paragraph - Added leading-relaxed for better readability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-base md:text-lg text-gray-700 mx-auto leading-relaxed"
          >
            Guiding principles that drive our innovation and shape our future
          </motion.p>
        </div>

        {/* Cards Grid - Directly rendering cards */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            // Apply motion animation to each card item
            <motion.div
              key={index} // Use index as key if order is stable and items aren't reordered/filtered
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // Stagger animation
              viewport={{ once: true, amount: 0.3 }} // Adjust amount as needed
              className="relative overflow-hidden h-full" // h-full ensures cards in a row are same height if content varies slightly
            >
              {/* Card Structure - Removed hover effects */}
              <div
                className="relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 bg-white shadow-lg border-[#88bf42]/20 h-full flex flex-col" // Added shadow, static border, background, and flex-col for layout
              >
                <div className="flex items-start gap-4">
                  {/* Icon container - Removed hover transform */}
                  <div
                    className="flex-shrink-0 w-12 h-12 text-[#88BF42] bg-gradient-to-br from-[#88BF42]/10 via-[#88BF42]/5 to-[#0F0326]/10 rounded-xl flex items-center justify-center transform transition-all duration-300 shadow-md shadow-[#88bf42]/5" // Kept static shadow and bg
                  >
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0F0326] transition-colors duration-300 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{card.content}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cards: ValueCard[] = [
  {
    title: 'Innovation',
    content:
      "Pushing boundaries with AI",
    icon: <IconBulb size={32} stroke={1.5} />,
  },
  {
    title: 'Collaboration',
    content:
      'Building with our clients.',
    icon: <IconUsers size={32} stroke={1.5} />,
  },
  {
    title: 'Excellence',
    content:
      'Committed to quality',
    icon: <IconAward size={32} stroke={1.5} />,
  },
  {
    title: 'Growth',
    content:
      "Constantly evolving.",
    icon: <IconChartArrows size={32} stroke={1.5} />,
  },
  {
    title: 'Efficiency',
    content:
      'Smart, lean processes.',
    icon: <IconRocket size={32} stroke={1.5} />,
  },
  {
    title: 'Global Impact',
    content:
      'Meaningful solutions at scale.',
    icon: <IconWorld size={32} stroke={1.5} />,
  },
];

export default CoreValues;
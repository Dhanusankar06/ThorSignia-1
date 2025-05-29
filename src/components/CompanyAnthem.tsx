'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Removed Link as it's not used in this component

const CompanyAnthem = () => {
  return (
    <section className="flex flex-col max-w-6xl mx-auto px-4 py-16">
      <div className="w-full relative z-10">

        {/* Text Block */}
        {/* Limited text block width slightly for better readability, but centered */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Tag - Adjusted mb */}
          <motion.div
            // Assuming itemVariants is defined elsewhere
            // variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto mb-4"
          >
            <span className="text-[#88BF42] text-sm md:text-base font-semibold">
              Company Anthem
            </span>
          </motion.div>
          {/* Heading - Increased size and weight, adjusted mb */}
          <motion.h2
            // Assuming itemVariants is defined elsewhere
            // variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
             viewport={{ once: true, amount: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] leading-tight mb-4" // Added mb-4 here
          >
             The Heart of <span className="text-[#88BF42]">Thor Signia</span>
          </motion.h2>
          {/* Paragraph - Added leading-relaxed for better readability */}
          <motion.p
            // Assuming itemVariants is defined elsewhere
            // variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-base md:text-lg text-gray-700 mx-auto leading-relaxed"
          >
           This original song captures our values: innovation, unity, and purpose.
          </motion.p>
        </div>

        {/* Video Placeholder - Wider area */}
        {/* Removed inner max-w-6xl so it expands closer to the screen-xl parent */}
        {/* Added some horizontal padding here */}
        <div className="w-full px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Slightly different animation start
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} // Adjusted delay
            viewport={{ once: true, amount: 0.4 }} // Added viewport for scroll animation
            className="relative group w-full"
          >
            {/* Inner Video Box - Changed background, enhanced shadow/border */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-[#696869]/20 transition-all duration-500 group-hover:shadow-3xl group-hover:border-[#88BF42]/80 bg-gray-900 flex items-center justify-center">
              <div className="text-center px-4"> {/* Added padding here to prevent text/icon from touching edges on smaller screens */}
                {/* Icon - Larger size, adjusted mb */}
                <div className="text-[#88BF42] mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {/* Text - Light color for dark background, larger font, bolder */}
                <p className="text-gray-300 text-xl font-semibold">Video Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CompanyAnthem;
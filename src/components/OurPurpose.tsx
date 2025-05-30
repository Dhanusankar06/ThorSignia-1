'use client';

import React from 'react';

import { Button } from "./layout/moving-border";
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OurPurpose() {
  return (
    <div id="our-purpose" className="flex flex-col max-w-6xl mx-auto px-4 py-16">
      <div className="w-full relative z-10">
      <div className="text-center mb-8">
       {/* Tag - Added mb-3 for space below it */}
       <motion.div
                   // Assuming itemVariants is defined elsewhere
                   // variants={itemVariants}
                   className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto md:mx-0 mb-3" // Added mb-3 here
                 >
                   <span className="text-[#88BF42] text-sm md:text-base font-semibold">
                     Our Purpose
                   </span>
                 </motion.div>
                 {/* Heading - Added mb-4 for space below it */}
                 <motion.h2
                   // Assuming itemVariants is defined elsewhere
                   // variants={itemVariants}
                   className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] leading-tight mb-4" // Added mb-4 here
                 >
                   Shaping a <span className="text-[#88BF42]">Smarter Future</span>
                 </motion.h2>
          {/* Paragraph - No extra margin needed as the above H2 has mb-4 */}
          <p className="text-base md:text-lg text-[#696869] max-w-2xl text-center mx-auto">
           Driving transformative AI solutions for enterprise excellence
          </p>
        </div>
        <MovingBorderDemo />
      </div>
    </div>
  );
}

export function MovingBorderDemo() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex-1 min-h-[280px] md:min-h-[320px]">
          <Button
            borderRadius="1.75rem"
            containerClassName="h-full w-full group/vision"
            className="h-full w-full bg-white/95 hover:bg-white/100 hover:shadow-md dark:bg-slate-900/95 dark:hover:bg-slate-900/100 text-black dark:text-white border-neutral-200 dark:border-slate-800">
            <div className="flex flex-col h-full p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">
                Our Vision
              </h3>
              <p className="text-sm md:text-lg text-[18px] leading-relaxed text-[#696869] dark:text-neutral-300 flex-grow text-left">
                In this rapidly evolving technical era, we focus on bringing a permanent end to all your challenges by creating the most effective solutions. We provide reliable solutions for the accomplishment of your desired goals. We offer security to our clients by maintaining customer-loyalty. Our long-term endurance and positive influence ensure safety to our customers.
              </p>
            </div>
          </Button>
        </div>

        <div className="flex-1 min-h-[280px] md:min-h-[320px]">
          <Button
            borderRadius="1.75rem"
            containerClassName="h-full w-full group/mission"
            className="h-full w-full bg-white/95 hover:bg-white/100 hover:shadow-md dark:bg-slate-900/95 dark:hover:bg-slate-900/100 text-black dark:text-white border-neutral-200 dark:border-slate-800">
            <div className="flex flex-col h-full p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">
                Our Mission
              </h3>
              <p className="text-sm md:text-lg text-[18px] leading-relaxed text-[#696869] dark:text-neutral-300 flex-grow text-left">
                We intend to innovate customer-centric programs which helps your services transform to greatest heights. Our technological excellence aims at integrating the loose ends of your enterprise and thereby providing competitive advantage. We aspire to empower our clients with the upgrading media and technological solutions, which reinforces the goodwill of our company.
              </p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

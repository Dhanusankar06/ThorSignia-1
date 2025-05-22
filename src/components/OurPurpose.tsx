'use client';

import React from 'react';

import { Button } from "./layout/moving-border";

export default function OurPurpose() {
  return (
    <div id="our-purpose" className="py-16 lg:py-8 w-full rounded-md flex flex-col items-center justify-start antialiased bg-grid-white/[0.02] relative overflow-hidden">
   
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0F0326] to-[#88BF42] inline-block text-center mb-4">
            Our Purpose
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl text-center mx-auto">
            Driving transformative AI solutions that redefine the boundaries of
            enterprise innovation and technological potential.
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
              <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 flex-grow text-left">
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
              <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 flex-grow text-left">
                We intend to innovate customer-centric programs which helps your services transform to greatest heights. Our technological excellence aims at integrating the loose ends of your enterprise and thereby providing competitive advantage. We aspire to empower our clients with the upgrading media and technological solutions, which reinforces the goodwill of our company.
              </p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

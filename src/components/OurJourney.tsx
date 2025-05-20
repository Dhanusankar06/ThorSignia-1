"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    category: "Global Growth",
    metric: "250+ Clients",
    description: "We started with a bold vision and quickly grew our global client base by delivering exceptional solutions.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  },
  {
    category: "Advanced R&D",
    metric: "15+ AI Solutions",
    description: "Our innovative research and development led to a portfolio of advanced AI solutions.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop",
  },
  {
    category: "Enterprise Trust",
    metric: "98% Satisfaction",
    description: "Our commitment to excellence has earned us a 98% client satisfaction rate.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop",
  },
  {
    category: "Industry Recognition",
    metric: "10+ Awards",
    description: "Our work has been recognized with multiple industry awards.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  },
];

export default function OurJourney() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-24 relative">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0F0326] to-[#88BF42] inline-block text-center mb-4">Our Journey</h2>
        <p className="text-lg text-[#696869] text-center mt-2">
          A story of growth, innovation, and impact
        </p>
      </div>

      {/* Milestones Container */}
      <div className="relative pl-8 md:pl-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.metric}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
              relative flex flex-col md:flex-row items-center gap-8 mt-16
              ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}
            `}
          >
            {/* Timeline Segment */}
            <div 
              className="
                absolute left-[-2rem] md:left-[-4rem] top-0 bottom-0 w-[3px] 
                bg-[#88BF42]/40
              "
            />

            {/* Timeline Dot */}
            <div 
              className="
                absolute left-[-2rem] md:left-[-4rem] -top-2
                w-4 h-4 rounded-full bg-[#88BF42] z-10
              "
            />

            {/* Image */}
            <img 
              src={milestone.imageUrl} 
              alt={milestone.metric}
              className="w-[280px] h-[200px] object-cover rounded-xl shadow-md"
            />

            {/* Text Content */}
            <div className="max-w-md space-y-2 text-center md:text-left">
              <span 
                className="
                  text-sm uppercase text-[#88BF42] 
                  font-medium tracking-wider
                "
              >
                {milestone.category}
              </span>
              <h3 className="text-2xl font-bold text-[#0F0326]">
                {milestone.metric}
              </h3>
              <p className="text-[#696869] text-base">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
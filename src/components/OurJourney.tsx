"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    category: "Global Growth",
    metric: "250+ Clients",
    description:
      "Delivered value-driven solutions worldwide.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  },
  {
    category: "Advanced R&D",
    metric: "15+ AI Solutions",
    description:
      "Created from our innovation lab and custom client cases.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop",
  },
  {
    category: "Enterprise Trust",
    metric: "99.9% Satisfaction",
    description:
      "Trusted partners for scalable, practical delivery.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop",
  },
  {
    category: "Industry Recognition",
    metric: "10+ Awards",
    description:
      "Honored for excellence and innovation in AI-driven growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  },
];

export default function OurJourney() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 py-16">
      {/* Section Heading */}
      <div className="text-center mb-8">
  {/* Tag - Added mb-3 for space below it */}
  <motion.div
    // Assuming itemVariants is defined elsewhere
    // variants={itemVariants}
    className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto md:mx-0 mb-3"
  >
    <span className="text-[#88BF42] text-sm md:text-base font-semibold">
      Our Journey
    </span>
  </motion.div>
  {/* Heading - Added mb-4 for space below it */}
  <motion.h2
    // Assuming itemVariants is defined elsewhere
    // variants={itemVariants}
    className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] leading-tight mb-4"
  >
     The Evolution of <span className="text-[#88BF42]">Innovation</span>
  </motion.h2>
  {/* Paragraph - No extra margin needed as the above H2 has mb-4 */}
  <p className="text-base md:text-lg text-gray-700 max-w-2xl text-center mx-auto">
    A story of growth, innovation, and impact.
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
            className={`relative flex flex-col md:flex-row items-center gap-8 mt-16 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Line */}
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
              className="w-[500px] h-[300px] object-cover rounded-xl shadow-md"
            />

            {/* Text Content */}
            <div className="max-w-md space-y-2 text-center md:text-left">
              <span className="text-sm uppercase text-[#88BF42] font-medium tracking-wider">
                {milestone.category}
              </span>
              <h3 className="text-2xl font-bold text-black">
                {milestone.metric}
              </h3>
              <p className="text-[18px] text-black text-center md:text-left">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

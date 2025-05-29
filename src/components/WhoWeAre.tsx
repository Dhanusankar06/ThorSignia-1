"use client";

import React from "react";
import { motion } from "framer-motion";
import { RocketIcon, LayersIcon } from "lucide-react";
import useMobileHover from "./useMobileHover";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Card = ({ icon, title, content }: CardProps) => {
  const { isMobileHover, elementRef } = useMobileHover();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <div ref={elementRef} className="group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#88bf42]/5 via-[#88bf42]/2 to-[#0F0326]/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-xl" />
        <div
          className={`relative p-8 rounded-2xl backdrop-blur-sm border border-[#0F0326]/[0.05] transition-all duration-700 bg-white/[0.01] ${
            isMobileHover
              ? "border-[#88bf42]/20 -translate-y-2 shadow-[0_20px_40px_-15px_rgba(136,191,66,0.1)]"
              : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div
              className={`p-3 w-14 h-14 rounded-xl bg-gradient-to-br from-[#88bf42]/10 via-[#88bf42]/5 to-[#0F0326]/10 flex items-center justify-center transition-all duration-700 shadow-lg shadow-[#88bf42]/5 ${
                isMobileHover ? "scale-110 rotate-3" : ""
              }`}
            >
              {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black ml-4">
              {title}
            </h3>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-[#696869] font-light text-left">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhoWeAre() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 py-16">
      <div className="w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
  {/* Tag - Added mb-3 for space below it */}
  <motion.div
    // Assuming itemVariants is defined elsewhere
    // variants={itemVariants}
    className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto md:mx-0 mb-3"
  >
    <span className="text-[#88BF42] text-sm md:text-base font-semibold">
      Who We Are
    </span>
  </motion.div>
  {/* Heading - Added mb-4 for space below it */}
  <motion.h2
    // Assuming itemVariants is defined elsewhere
    // variants={itemVariants}
    className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] leading-tight mb-4"
  >
   Empowering Change <span className="text-[#88BF42]">Through Innovation</span>
  </motion.h2>
  {/* Paragraph - No extra margin needed as the above H2 has mb-4 */}
  <p className="text-base md:text-lg text-[#696869] max-w-2xl text-center mx-auto">
  Pioneering the future of technology through innovation and expertise  </p>


        </div>

        {/* Cards */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 text-left">
  <Card
    icon={<RocketIcon className="w-8 h-8 text-[#88bf42]" />}
    title="Innovation Expertise"
    content="Our teams craft multimedia and AI solutions rooted in deep domain expertise and
creativity"
  />
  <Card
    icon={<LayersIcon className="w-8 h-8 text-[#88bf42]" />}
    title="Operational Excellence"
    content="We deliver streamlined, high-performance solutions to help enterprises adapt and
scale"
  />
</div>

      </div>
    </div>
  );
}

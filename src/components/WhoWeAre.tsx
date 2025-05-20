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
        <div className={`relative p-8 rounded-2xl backdrop-blur-sm border border-[#0F0326]/[0.05] transition-all duration-700 bg-white/[0.01] ${isMobileHover ? 'border-[#88bf42]/20 -translate-y-2 shadow-[0_20px_40px_-15px_rgba(136,191,66,0.1)]' : ''}`}>
          <div className={`mb-6 p-3 w-14 h-14 rounded-xl bg-gradient-to-br from-[#88bf42]/10 via-[#88bf42]/5 to-[#0F0326]/10 flex items-center justify-center transition-all duration-700 shadow-lg shadow-[#88bf42]/5 ${isMobileHover ? 'scale-110 rotate-3' : ''}`}>
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#0F0326]/90 mb-4">{title}</h3>
          <p className="text-base md:text-lg leading-relaxed text-[#696869]/80 font-light">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhoWeAre() {
  return (
    <div className="min-h-[600px] w-full rounded-md flex flex-col items-center justify-start antialiased relative overflow-hidden py-16 md:py-20 lg:py-12">
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0F0326] to-[#88BF42] inline-block text-center mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-[#696869]/70 text-center mb-16 max-w-2xl mx-auto font-dm-sans">
            Pioneering the future of technology with innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          <Card
            icon={<RocketIcon className="w-8 h-8 text-[#88bf42]"/>}
            title="Innovation & Expertise"
            content="Thorsignia is a leading IT and Multimedia company that provides an integrated range of services. We render optimum quality outputs to our clients through our domain expertise. We offer extensive media, web and software based solutions, thereby catering best to our clients requirements. Our unparalleled experience in these spheres drive your firms to the path of success."
          />
          <Card
            icon={<LayersIcon className="w-8 h-8 text-[#88bf42]"/>}
            title="Operational Excellence"
            content="Innovatively managing technical issues in your business process has fetched us the tag of world-class service provider. Through our operational efficiency, we work towards handling complexities which in turn upgrades enterprise value. We offer a plethora of digital services which has consistently reinforced the goodwill of our company."
          />
        </div>
      </div>
    </div>
  );
}
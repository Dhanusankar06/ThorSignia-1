'use client'

import * as React from 'react'
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function AnimatedCaseStudiesHeader() {
  const scrollToNextSection = (e: any) => {
    e.preventDefault()
    const nextSection = document.querySelector('#featured-case-study')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <div className="relative w-full">
      <div className="h-[70vh] max-h-[800px] relative overflow-hidden w-full flex flex-col justify-center items-center px-0 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E]">
        {/* Minimal background: SVG grid + floating dots (like AI Services hero) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* SVG grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="case-studies-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#88bf42" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#case-studies-grid)" />
            </svg>
          </div>
          {/* Soft floating dots for accent */}
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: i % 2 === 0 ? '#88bf42' : '#009898',
                opacity: 0.16 + Math.random() * 0.16
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.16, 0.32, 0.16],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
        
        {/* Background gradient effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-transparent via-white to-transparent opacity-70"
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-4xl text-center z-10 relative">
          {/* Intro Text */}
          {/* Section Container */}
<div className="w-full max-w-5xl mx-auto px-4 text-center md:text-center">

{/* Tagline Label */}
<motion.div 
  className="inline-block bg-[#0F0326] px-4 py-1 rounded-full mb-4 mx-auto text-center"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <span className="text-sm uppercase tracking-wide text-white font-medium">
    Client Success Stories
  </span>
</motion.div>


{/* Heading + Underline */}
<div className="relative mx-auto text-center md:text-center">
  <motion.h1
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <motion.span
      className="text-white drop-shadow-lg block"
      initial={{ rotateX: 45, y: -20, opacity: 0 }}
      animate={{ rotateX: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      Transforming Industries
    </motion.span>
    <motion.span
      className="text-[#88BF42] block mt-2"
      initial={{ rotateX: -45, y: 20, opacity: 0 }}
      animate={{ rotateX: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      With AI Solutions
    </motion.span>
  </motion.h1>

  
</div>

{/* Subheading */}
<div className="overflow-hidden mt-6">
  <motion.p 
    className="text-white text-lg max-w-2xl mx-auto md:mx-0 text-center md:text-center "
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.9 }}
  >
    Real-world case studies showcasing how our AI solutions drive measurable business impact across diverse sectors.
  </motion.p>
</div>

{/* Call-to-Action Buttons */}
<motion.div 
  className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center sm:justify-start md:justify-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.6 }}
>
  {/* <motion.button
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(136, 191, 66, 0.4)" 
    }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#0F0326] text-white px-4 py-3 rounded-md hover:bg-[#88BF42] hover:text-white transition-colors block w-52 text-sm sm:text-base border border-[#88BF42] text-center"
  >
    <span className="flex items-center justify-center">
      <span>View Case Studies</span>
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="ml-2"
      >
        →
      </motion.span>
    </span>
  </motion.button> */}

  <motion.div
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(15, 3, 38, 0.2)" 
    }}
    whileTap={{ scale: 0.98 }}
  >
    <Link
      to="/contact"
      className="bg-[#0F0326] text-white px-4 py-3 rounded-md hover:bg-[#88BF42] hover:text-white transition-colors block w-52 text-sm sm:text-base border border-[#88BF42] text-center"
    >
      Schedule a Consultation
    </Link>
  </motion.div>
</motion.div>
</div>


         
        </div>
      </div>
    </div>
  )
} 
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
          <motion.div 
            className="inline-block bg-[#0F0326] px-4 py-1 rounded-full mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm uppercase tracking-wide text-white font-medium">
              Client Success Stories
            </span>
          </motion.div>

          {/* Main Heading with 3D effect */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="relative inline-block text-white drop-shadow-lg"
              initial={{ 
                rotateX: 45,
                y: -20,
                opacity: 0
              }}
              animate={{ 
                rotateX: 0,
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
              }}
            >
              Transforming Industries
            </motion.span>
            <br />
            <motion.span
              className="relative inline-block text-[#88BF42] mt-2"
              initial={{ 
                rotateX: -45,
                y: 20,
                opacity: 0
              }}
              animate={{ 
                rotateX: 0,
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              With AI Solutions
            </motion.span>
            
            {/* Animated underline */}
            <motion.div 
              className="absolute -bottom-3 left-1/2 h-1 bg-[#009898] transform -translate-x-1/2"
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            />
          </motion.h1>

          {/* Subheading with reveal effect */}
          <div className="overflow-hidden mt-6">
            <motion.p 
              className="text-[#696869] text-lg max-w-2xl mx-auto"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Real-world case studies showcasing how our AI solutions drive measurable business impact across diverse sectors.
            </motion.p>
          </div>

          {/* Stats floating up */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[
              { value: '3x', label: 'Revenue Growth' },
              { value: '65%', label: 'Cost Reduction' },
              { value: '83%', label: 'Customer Retention' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-md"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 + index * 0.2, duration: 0.5 }}
              >
                <div className="text-xl font-bold text-[#0F0326]">{stat.value}</div>
                <div className="text-xs text-[#696869]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action Buttons with reveal and hover effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(136, 191, 66, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToNextSection}
              className="bg-[#0F0326] text-white px-6 py-3 rounded-md shadow-lg transition-all"
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
            </motion.button>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(15, 3, 38, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="border-2 border-[#88BF42] text-[#88BF42] px-6 py-3 rounded-md hover:bg-[#88BF42] hover:text-white transition-colors block"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 1.8, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >
              <ChevronDown className="text-[#88BF42] w-10 h-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
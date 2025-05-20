'use client'

import * as React from 'react'
import { Link } from "react-router-dom"
import { ChevronDown, CheckSquare, PieChart, TrendingUp, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

const caseIcons = [
  { icon: <CheckSquare className="w-6 h-6 text-white" />, color: '#88BF42' },
  { icon: <PieChart className="w-6 h-6 text-white" />, color: '#009898' },
  { icon: <TrendingUp className="w-6 h-6 text-white" />, color: '#0F0326' },
  { icon: <Users className="w-6 h-6 text-white" />, color: '#88BF42' },
  { icon: <Award className="w-6 h-6 text-white" />, color: '#009898' },
]

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
      <div className="h-[70vh] max-h-[800px] bg-gradient-to-br from-[#0F0326]/5 via-white to-[#009898]/5 flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden rounded-xl my-8 mx-4 md:mx-8 lg:mx-16 shadow-lg">
        {/* 3D card animations - background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Rotating case study cards */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                perspective: '1000px'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-lg shadow-lg p-4 absolute z-0"
                style={{
                  width: `${Math.random() * 100 + 100}px`,
                  height: `${Math.random() * 50 + 70}px`,
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                animate={{
                  rotateX: [0, 10, -5, 0],
                  rotateY: [0, -15, 10, 0],
                  z: [0, 30, -20, 0],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6
                }}
              >
                <div className="absolute top-2 left-2 rounded-full" style={{ 
                  width: '24px', 
                  height: '24px', 
                  backgroundColor: caseIcons[i % caseIcons.length].color 
                }}>
                  {caseIcons[i % caseIcons.length].icon}
                </div>
                <div className="w-full h-2 bg-gray-200 rounded mt-8">
                  <div className="h-full rounded" style={{ 
                    width: `${Math.random() * 60 + 40}%`,
                    backgroundColor: caseIcons[i % caseIcons.length].color 
                  }}></div>
                </div>
              </motion.div>
            </motion.div>
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
              className="relative inline-block text-[#0F0326]"
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
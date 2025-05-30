'use client'

import * as React from 'react'
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function AnimatedServiceHeader() {
  const [particles, setParticles] = React.useState<any[]>([])
  
  React.useEffect(() => {
    // Create particles for animation
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 2,
          color: i % 3 === 0 ? '#88BF42' : (i % 3 === 1 ? '#88BF42' : '#0F0326'),
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5
        })
      }
      setParticles(newParticles)
    }
    
    generateParticles()
  }, [])

  const scrollToNextSection = (e: any) => {
    e.preventDefault()
    const nextSection = document.querySelector('#service-tabs')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full">
      <div className="h-[70vh] max-h-[800px] bg-black flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden w-full shadow-lg">
        {/* Animated grid lines overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGQ9Ik0wIDIwaDIwVjBoLTIweiIvPjwvZz48L3N2Zz4=')] z-10 opacity-60">
          <motion.div 
            className="absolute inset-0 bg-[#88BF42]/10"
            animate={{ 
              opacity: [0.05, 0.1, 0.05], 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Glowing circle background */}
        <motion.div
          className="absolute rounded-full h-[300px] w-[300px] md:h-[500px] md:w-[500px] bg-gradient-to-r from-[#88BF42]/20 via-[#88BF42]/20 to-[#88BF42]/10 blur-3xl"
          style={{ 
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, rgba(136,191,66,0.2) 0%, rgba(136,191,66,0.1) 50%, rgba(0,0,0,0) 70%)'
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Animated wave overlay */}
        <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
          <motion.path
            d="M0,128 C100,90 200,96 300,128 C400,160 500,120 600,96 C700,72 800,112 900,128 L900,320 L0,320 Z"
            initial={{ d: "M0,128 C100,90 200,96 300,128 C400,160 500,120 600,96 C700,72 800,112 900,128 L900,320 L0,320 Z" }}
            animate={{ 
              d: [
                "M0,128 C100,90 200,96 300,128 C400,160 500,120 600,96 C700,72 800,112 900,128 L900,320 L0,320 Z",
                "M0,96 C100,128 200,160 300,128 C400,96 500,90 600,128 C700,160 800,144 900,96 L900,320 L0,320 Z",
                "M0,128 C100,90 200,96 300,128 C400,160 500,120 600,96 C700,72 800,112 900,128 L900,320 L0,320 Z"
              ]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            fill="rgba(136, 191, 66, 0.05)"
          />
          <motion.path
            d="M0,160 C100,180 200,140 300,120 C400,100 500,140 600,160 C700,180 800,140 900,120 L900,320 L0,320 Z"
            initial={{ d: "M0,160 C100,180 200,140 300,120 C400,100 500,140 600,160 C700,180 800,140 900,120 L900,320 L0,320 Z" }}
            animate={{ 
              d: [
                "M0,160 C100,180 200,140 300,120 C400,100 500,140 600,160 C700,180 800,140 900,120 L900,320 L0,320 Z",
                "M0,120 C100,100 200,180 300,160 C400,140 500,100 600,120 C700,140 800,180 900,160 L900,320 L0,320 Z",
                "M0,160 C100,180 200,140 300,120 C400,100 500,140 600,160 C700,180 800,140 900,120 L900,320 L0,320 Z"
              ]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            fill="rgba(136, 191, 66, 0.05)"
          />
        </svg>
        
        {/* Digital rain effect */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              className="absolute top-0 w-[1px] bg-gradient-to-b from-[#88BF42] via-[#88BF42]/50 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 30 + 10}%`,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{
                y: ['-100%', '100%'],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        {/* Floating particles with glow */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full z-0"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              opacity: 0.6,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}
        
        <div className="max-w-4xl text-center z-20">
          {/* Circular background for title */}
          <motion.div 
            className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-[#88BF42]/5 to-[#88BF42]/5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Intro Text */}
          <div className="text-sm uppercase tracking-wide text-[#88BF42] font-medium mb-4 relative">
            Our Enterprise AI Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-normal md:leading-tight"> {/* Increased leading for h1 */}
          AI Services That Drive <span className="text-[#88BF42]">Business Results</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
            Discover our range of AI-powered solutions designed to solve real business challenges and deliver measurable ROI.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link
              to="/contact"
              className="border-2 border-[#88BF42] text-[#88BF42]
                       px-4 py-2 text-sm w-40
                       sm:w-auto sm:px-6 sm:py-3 sm:text-base
                       rounded-md hover:bg-[#88BF42] hover:text-white
                       transition-colors block mx-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
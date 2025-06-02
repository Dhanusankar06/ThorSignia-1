'use client'

import * as React from 'react'
import { Link } from "react-router-dom" // Still imported but not used in logic
import { ChevronDown } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

export default function AnimatedHeader() {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 })
  const lastCall = React.useRef(0)
  const controls = useAnimation() // This still doesn't seem to be used

  // Throttled mouse move effect
  React.useEffect(() => {
    let animationFrameId: number
    
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now()
      // Throttle to roughly 60fps
      if (now - lastCall.current >= 16) { 
        lastCall.current = now
        setMousePosition({
          x: event.clientX,
          y: event.clientY
        })
      }
    }

    // Start animation loop (currently not doing anything with mouse position for Framer Motion)
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animationFrameId = requestAnimationFrame(animate) 
    window.addEventListener('mousemove', handleMouseMove)
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId) 
    }
  }, []) 

  // This function is kept for the down arrow if you still want it to scroll to a section
  const scrollToNextSection = (e: any) => {
    e.preventDefault()
    const nextSection = document.querySelector('#our-purpose') 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full">
      {/* Hero Section - Full width, dark background */}
      <section className="h-[70vh] max-h-[800px] bg-[#0f0326] flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
        {/* Background Blob */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, x: -200, y: -200 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.2], 
            scale: [0.5, 1.2, 1], 
            x: [-200, 50, -100],
            y: [-200, 100, -50]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="absolute bg-[#88BF42]/30 blur-[64px] rounded-full w-[700px] h-[700px] top-[10%] left-[-20%] md:left-[10%] z-[-1]"
        />

        {/* Cursor-Following Glow - UPDATED OPACITY */}
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{ 
            // Increased opacity from 0.2 to 0.4 for a brighter glow
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(136, 191, 66, 0.4) 0%, transparent 70%)` 
          }}
        />
        
        {/* Content Container */}
        <div className="max-w-4xl text-center z-10"> 
          

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-normal md:leading-tight"> {/* Increased leading for h1 */}
          Empowering Enterprises
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#88BF42] leading-tight">
          Through AI Innovation
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mt-4" 
        >
         Transform your business with intelligent, scalable AI
         solutions that drive efficiency and innovation.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mt-6 justify-center" 
        >
          {/* Link to Contact page with pulsing animation */}
          <div className="relative">
            {/* Pulsing animation circles */}
            <div className="absolute -inset-1 rounded-md bg-[#88BF42]/30 animate-pulse blur-md"></div>
            <div className="absolute -inset-2 rounded-md bg-[#88BF42]/20 animate-pulse blur-lg" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -inset-3 rounded-md bg-[#88BF42]/10 animate-pulse blur-xl" style={{ animationDelay: '1s' }}></div>
            
            {/* Actual button */}
            <Link
              to="/contact" 
              className="relative bg-[#88BF42] text-[#0F0326] px-6 py-3 rounded-md shadow hover:text-white transition-colors font-semibold z-10"
            >
              Get Started
            </Link>
          </div>

          {/* Learn More button removed */}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center animate-bounce"
        >
          
        </motion.div>
        </div>
      </section>
    </div>
  )
}
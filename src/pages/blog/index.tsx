// @/pages/blog/index.tsx (Example path for file-based routing)
// or src/components/BlogPage.tsx (If managing routes manually)

"use client"; // Indicates this is a client component

import React, { useEffect } from 'react';
// Link, cn, Icons (Facebook, etc.) are imported in the original but not used here.
// Keep them if they are used elsewhere in the file or in components imported by this file.
// import { Link } from "react-router-dom";
// import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // For hero animations
import { TextGenerateEffect } from "@/components/layout/text-generate-effect"; // Assuming this component exists
import CardHoverEffectDemo from "@/components/layout/card-hover-effect-demo"; // Component to display blog cards
import { blogPosts } from "@/data/blog-posts"; // Import your blog data
// import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react"; // Icons not used here
import Navbar from "@/components/Navbar"; // Assuming Navbar exists
import Footer from '@/components/Footer'; // Assuming Footer exists


const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | ThorSignia";
  }, []);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {/* Hero Section - Matches the provided structure */}
      {/* Negative margin moves it up under the fixed navbar */}
      <div className="relative w-full -mt-[64px]"> {/* Adjust -mt value based on Navbar height */}
        <div className="h-[45vh] max-h-[420px] relative overflow-hidden w-full flex flex-col justify-center items-center px-0 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E] pt-[64px]"> {/* Adjust pt value to account for navbar */}
          {/* Minimal background: SVG grid + floating dots */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* SVG grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="blog-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#88bf42" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blog-hero-grid)" />
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
          {/* Adjust opacity or colors if needed */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-transparent opacity-70" />
          <div className="max-w-4xl text-center z-10 relative">
            {/* Animated Main Heading */}
            <TextGenerateEffect
              words="Explore the Future with AI"
              className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg mb-2"
              filter={true} // Assuming filter prop controls some effect
              duration={0.7}
            />
            {/* Animated Subheading */}
            <TextGenerateEffect
              words="Ideas. Innovation. Intelligence"
              className="text-lg md:text-xl text-[#88BF42] max-w-2xl mx-auto mt-4 font-medium"
               filter={true} // Assuming filter prop controls some effect
              duration={1}
            />
          </div>
        </div>
      </div>

      {/* Blog Grid - This section displays the list of blog cards */}
      <div className="pb-16">
        {/* Pass the blogPosts data to the CardHoverEffectDemo component */}
        <CardHoverEffectDemo items={blogPosts} />
      </div>

      <Footer />
    </div>
  );
}

export default BlogPage;
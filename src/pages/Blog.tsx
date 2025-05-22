"use client";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/layout/text-generate-effect";
import CardHoverEffectDemo from "@/components/layout/card-hover-effect-demo";
import { blogPosts } from "@/data/blog-posts";
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full">
  <div className="h-[45vh] max-h-[420px] relative overflow-hidden w-full flex flex-col justify-center items-center px-0 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E]">
    {/* Minimal background: SVG grid + floating dots (like AI Services/Case Studies hero) */}
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
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-transparent opacity-70" />
    <div className="max-w-4xl text-center z-10 relative">
      {/* Animated Main Heading (matches home) */}
      <TextGenerateEffect
        words="Insights & Innovation"
        className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg mb-2"
        filter={true}
        duration={0.7}
      />
      {/* Animated Subheading */}
      <TextGenerateEffect
        words="Explore our latest thoughts on technology, innovation, and digital transformation."
        className="text-lg md:text-xl text-[#88BF42] max-w-2xl mx-auto mt-4 font-medium"
        filter={true}
        duration={1}
      />
    </div>
  </div>
</div>

      {/* Blog Grid */}
      <div className="pb-16">
        <CardHoverEffectDemo />
      </div>
            <Footer />

    </div>
  );
}

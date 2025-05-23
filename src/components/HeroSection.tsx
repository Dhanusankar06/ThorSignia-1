import React, { useEffect, useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import demovideo from './demovideo.tsx';
// Adjust the import path for your Button component
// This assumes your Button component is in src/components/ui/button.jsx or .tsx
import { Button } from "../components/ui/button";
import {
  Play,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  // MessageCircle, // Not used
  Cpu,
  MessageSquare,
  Eye,
  Brain,
  Bot,
  Cloud,
  Shield,
  Database,
  BarChart2,
  Trophy,
  Award,
  Star,
  Medal,
  Settings,
  Clock,
  LineChart
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // SwiperType removed if not strictly needed for props
// import type { Swiper as SwiperType } from 'swiper'; // If you need SwiperType for strict typing

// !!! IMPORTANT: Import Swiper CSS for it to work correctly !!!
// You can import them here or globally in your main app file (e.g., App.jsx or main.jsx)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; // Usually not needed for Autoplay module to work

import { clsx } from 'clsx';
import '../styles/globals.css';
import ProductDemoSection from './demovideo.tsx';


// Trusted By Logos Data
const trustedByLogos = [
  { logoUrl: "https://cdn.svgporn.com/logos/google.svg", altText: "Google Logo", link: "https://google.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/microsoft-icon.svg", altText: "Microsoft Logo", link: "https://microsoft.com" },
 
  { logoUrl: "https://cdn.svgporn.com/logos/meta.svg", altText: "Meta Logo", link: "https://meta.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/ibm.svg", altText: "IBM Logo", link: "https://ibm.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/salesforce.svg", altText: "Salesforce Logo", link: "https://salesforce.com" },
  
  { logoUrl: "https://cdn.svgporn.com/logos/oracle.svg", altText: "Oracle Logo", link: "https://oracle.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/sap.svg", altText: "SAP Logo", link: "https://sap.com" },
  // Duplicated for longer scroll effect, original list is 9 items
  { logoUrl: "https://cdn.svgporn.com/logos/google.svg", altText: "Google Logo", link: "https://google.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/microsoft-icon.svg", altText: "Microsoft Logo", link: "https://microsoft.com" },
 
  { logoUrl: "https://cdn.svgporn.com/logos/meta.svg", altText: "Meta Logo", link: "https://meta.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/ibm.svg", altText: "IBM Logo", link: "https://ibm.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/salesforce.svg", altText: "Salesforce Logo", link: "https://salesforce.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/oracle.svg", altText: "Oracle Logo", link: "https://oracle.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/sap.svg", altText: "SAP Logo", link: "https://sap.com" },
];

// Animation durations for marquee
const durationRtl = '60s'; // Increased duration for more items
const durationLtr = '70s'; // Increased duration for more items

// Add type for CSS custom properties
type CustomCSSProperties = React.CSSProperties & {
  '--duration': string;
};

// Create duplicated arrays for continuous scrolling
// The animation translates by -50%, so the content needs to be duplicated once.
const logosRtlDuplicated = [...trustedByLogos, ...trustedByLogos];
const logosLtrDuplicated = [...trustedByLogos, ...trustedByLogos];


// Testimonials data
const testimonials = [
  {
    name: "Jennifer Davis",
    position: "Customer Success Manager, TechCorp",
    quote: "Thorsignia's AI automation has completely transformed our customer service operations. Response times dropped by 80% and customer satisfaction is at an all-time high.",
    partner: "Google"
  },
  {
    name: "Michael Johnson",
    position: "VP of Sales, Growth Ventures",
    quote: "The ROI we've seen from implementing Thorsignia's AI lead qualification system has been incredible. We've doubled our sales team's productivity without adding headcount.",
    partner: "Microsoft"
  },
  {
    name: "Amanda Smith",
    position: "CMO, Innovate Solutions",
    quote: "Our marketing campaigns are now fully automated and continuously optimized by Thorsignia's AI. We've seen a 45% increase in conversion rates within the first month.",
    partner: "Amazon"
  },
  {
    name: "David Wilson",
    position: "CTO, Future Technologies",
    quote: "The integration with our existing systems was seamless. Thorsignia's team was professional and their AI solutions exceeded our expectations on every level.",
    partner: "IBM"
  },
   {
    name: "Sarah Lee",
    position: "Operations Director, Global Logistics",
    quote: "Integrating Thorsignia's voice automation streamlined our dispatch process, reducing errors and improving communication efficiency significantly.",
    partner: "Salesforce"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Advantages for Why Thor Signia section
const advantages = [
  {
    title: "Advanced Enterprise AI",
    icon: <Brain className="h-6 w-6" />,
    description: "Cutting-edge AI technology tailored for enterprise-grade reliability and performance."
  },
  {
    title: "Custom Solutions",
    icon: <Settings className="h-6 w-6" />,
    description: "Bespoke AI architectures designed specifically for your unique business challenges."
  },
  {
    title: "Rapid Implementation",
    icon: <Clock className="h-6 w-6" />,
    description: "Get your AI solution up and running in weeks, not months or years."
  },
  {
    title: "Business-Focused Results",
    icon: <LineChart className="h-6 w-6" />,
    description: "Solutions aligned with key business metrics and measurable ROI."
  }
];

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const swiperRef = useRef(null); // For SwiperType, import it if strict typing

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowStickyCTA(window.scrollY > (window.innerWidth < 768 ? 400 : 600));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed unused useEffect for currentLogoIndex, rotatedLogos, secondRowLogos
  // The marquee animation is handled by CSS using logosRtlDuplicated and logosLtrDuplicated

  return (
    <div className="flex flex-col max-w-20xl bg-white">
      <main className="flex-grow bg-white">
        {/* 1. Hero Section */}
        <section className="relative bg-[#0F0326] text-white overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Intro Text */}
                  {/* <div className="text-sm uppercase tracking-wide text-[#88BF42] font-medium mb-4 relative">
                    Our Enterprise AI Solutions
                  </div> */}

                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    AI Services That Drive <span className="text-[#88BF42]">Business </span>Results
                  </h1>

                  {/* Subheading */}
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
                    Discover our range of AI-powered solutions designed to solve real business challenges and deliver measurable ROI.
                  </p>

                  <div className="hidden sm:flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center lg:justify-start mt-8">
                    <Button
                      className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white h-12 text-base w-40 sm:w-auto px-3 sm:px-4"
                      asChild
                    >
                      <RouterLink to="/contact" className="flex items-center justify-center">
                        Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </RouterLink>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-[#88bf42] text-[#88bf42] text-base h-12 w-40 sm:w-auto px-3 sm:px-6 rounded-md hover:bg-[#eaf4d6]"
                    >
                      <RouterLink to="/services">
                        Our Solutions
                      </RouterLink>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 w-full relative h-[300px] md:h-[400px] lg:h-[450px] max-w-lg mx-auto lg:mx-0 -translate-x-4 sm:-translate-x-8 lg:translate-x-0 flex flex-col items-center justify-center gap-6">
                <img
                  src="/hero2.jpg"
                  alt="Hero"
                  className="w-full h-full rounded-xl shadow-lg border border-black/30 bg-black/80 object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Mobile buttons below the diagram */}
                     <div className="flex flex-col sm:hidden items-center gap-4 justify-center w-full mt-8 px-4">
              <Button
                className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full max-w-xs sm:max-w-sm h-12 text-base px-4 rounded-md shadow-lg " // Added max-w-xs or max-w-sm
                asChild
              >
                <RouterLink
                  to="/contact"
                  className="flex items-center justify-center" // w-full here is fine as Button's class takes precedence via asChild
                >
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </RouterLink>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#88bf42] text-[#88bf42] text-base w-full max-w-xs sm:max-w-sm h-12 px-4 rounded-md shadow hover:bg-[#eaf4d6]" // Added max-w-xs or max-w-sm
              >
                <RouterLink to="/services" className="flex items-center justify-center"> {/* Removed w-full from RouterLink to let Button control it */}
                  Our Solutions
                </RouterLink>
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Quick Company Intro */}
        <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left">
              <motion.div
                variants={itemVariants}
                className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto md:mx-0"
              >
                <span className="text-[#88BF42] text-sm md:text-base font-semibold">
                  About Us
                </span>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-2 md:mb-4 leading-tight"
              >
                Pioneering the Future of <span className="text-[#88BF42]">AI Solutions</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0 "
              >
                Thorsignia is dedicated to transforming how businesses operate, engage, and grow. With a deep focus on artificial intelligence and automation, we deliver cutting-edge, intelligent systems tailored to meet real-world challenges.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0"
              >
                Our expertise spans across AI-powered platforms, smart automation, and customer-centric technologies enabling organizations to save time, convert more leads, and elevate user experiences.
              </motion.p>

              {/* Feature items for mobile view only - REMAINS VERTICAL */}
              <motion.div
                variants={itemVariants}
                className="flex md:hidden flex-col items-center space-y-4 mt-6 mb-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#88BF42" d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01.3.6v1.8a.75.75 0 01-.3.6A60.462 60.462 0 0112.3 17.5a.75.75 0 01-.6 0A60.462 60.462 0 011.2 11.72a.75.75 0 01-.3-.6v-1.8a.75.75 0 01.3-.6A60.65 60.65 0 0111.7 2.805z"/>
                      <path fill="#88BF42" d="M11.7 15.75a.75.75 0 01.6 0A60.462 60.462 0 0022.83 21.53a.75.75 0 01.3.6v1.8a.75.75 0 01-.3.6A60.45 60.45 0 0012.3 30.25a.75.75 0 01-.6 0A60.45 60.45 0 001.2 24.53a.75.75 0 01-.3-.6v-1.8a.75.75 0 01.3-.6A60.462 60.462 0 0011.7 15.75z" opacity="0.4"/>
                    </svg>
                  </div>
                  <span className="text-[#0F0326] text-sm md:text-base text-[#696869] font-medium">Enterprise Grade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#88BF42" d="M6.25 6.375a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0zM12 17.75a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75z"/>
                      <path fill="#88BF42" d="M8.5 19.75a.75.75 0 01.75.75 2.25 2.25 0 004.5 0 .75.75 0 011.5 0 3.75 3.75 0 01-7.5 0 .75.75 0 01.75-.75z" opacity="0.6"/>
                      <path fill="#88BF42" d="M10.25 6.375a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z" opacity="0.8"/>
                    </svg>
                  </div>
                  <span className="text-[#0F0326] text-sm md:text-base text-[#696869] font-medium">AI-Technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                       <path fill="#88BF42" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                       <path fill="#88BF42" d="M12 17l5-5-5-5v10z" opacity="0.8"/>
                    </svg>
                  </div>
                  <span className="text-[#0F0326] text-sm md:text-base text-[#696869] font-medium">Smart Solutions</span>
                </div>
              </motion.div>

              <motion.a
                href="/about"
                variants={itemVariants}
                className="mt-6 md:mt-8 w-fit px-6 md:px-8 py-3 md:py-4 bg-[#0F0326] text-white font-semibold rounded-lg hover:bg-[#1A0645] transition-all duration-300 ease-in-out hover:shadow-lg flex items-center space-x-2 group mx-auto md:mx-0"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Right Column: Stats & Desktop Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 md:gap-6" // Parent grid for stats and desktop features
            >
              <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">98%</div>
                <div className="text-[#0F0326] text-sm md:text-base font-medium">Client Satisfaction</div>
              </div>
              <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">50+</div>
                <div className="text-[#0F0326] text-sm md:text-base font-medium">Enterprise Clients</div>
              </div>
              <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">24/7</div>
                <div className="text-[#0F0326] text-sm md:text-base font-medium">AI Support</div>
              </div>
              <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">10+</div>
                <div className="text-[#0F0326] text-sm md:text-base font-medium">Years Experience</div>
              </div>
              
              {/* Feature items for desktop view - NOW HORIZONTAL */}
              <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-8 md:mt-8 md:col-span-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#88BF42" d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01.3.6v1.8a.75.75 0 01-.3.6A60.462 60.462 0 0112.3 17.5a.75.75 0 01-.6 0A60.462 60.462 0 011.2 11.72a.75.75 0 01-.3-.6v-1.8a.75.75 0 01.3-.6A60.65 60.65 0 0111.7 2.805z"/>
                      <path fill="#88BF42" d="M11.7 15.75a.75.75 0 01.6 0A60.462 60.462 0 0022.83 21.53a.75.75 0 01.3.6v1.8a.75.75 0 01-.3.6A60.45 60.45 0 0012.3 30.25a.75.75 0 01-.6 0A60.45 60.45 0 001.2 24.53a.75.75 0 01-.3-.6v-1.8a.75.75 0 01.3-.6A60.462 60.462 0 0011.7 15.75z" opacity="0.4"/>
                    </svg>
                  </div>
                  <span className="text-[#0F0326] text-sm md:text-base text-[#696869] font-medium">Enterprise Grade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                       <path fill="#88BF42" d="M6.25 6.375a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0zM12 17.75a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75z"/>
                       <path fill="#88BF42" d="M8.5 19.75a.75.75 0 01.75.75 2.25 2.25 0 004.5 0 .75.75 0 011.5 0 3.75 3.75 0 01-7.5 0 .75.75 0 01.75-.75z" opacity="0.6"/>
                       <path fill="#88BF42" d="M10.25 6.375a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z" opacity="0.8"/>
                    </svg>
                  </div>
                  <span className="text-[#0F0326] text-sm md:text-base text-[#696869] font-medium">AI-Powered Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                       <path fill="#88BF42" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                       <path fill="#88BF42" d="M12 17l5-5-5-5v10z" opacity="0.8"/>
                    </svg>
                  </div>
                  <span className="text-[#0F0326] text-sm md:text-base text-[#696869] font-medium">Smart Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

        {/* 4. What We Offer Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren} className="text-center mb-12 md:mb-16"
            >
              <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
                <span className="text-[#88BF42] text-sm md:text-base font-semibold">What We Offer</span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-3 md:mb-4">
               Smart AI tools to automate, <span className="text-[#88BF42]">grow your business</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-[#696869] max-w-2xl mx-auto">
                Transform your business with AI-powered automation, chatbots, and campaign management.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {[
                { emoji: '🎙️', title: 'Intelligent Voice Automation', desc: 'Intelligent systems for making or receiving calls with natural conversations powered by AI.', link: '/services#intelligent-voice-automation' },
                { emoji: '💬', title: 'Social Engagement Automation', desc: 'Automate posting, replies, DMs, and performance analysis across all social channels.', link: '/services#social-engagement-automation' },
                { emoji: '🧠', title: 'AI-Powered Lead Intelligence', desc: 'Identify, qualify, and convert potential customers into hot leads with AI-driven insights.', link: '/services#ai-powered-lead-intelligence' },
                { emoji: '🤖', title: 'Conversational AI Chatbots', desc: 'Intelligent chatbots for instant assistance and engagement with your customers.', link: '/services#interactive-ai-chatbots' },
                { emoji: '📊', title: 'Automated Campaign Orchestration', desc: 'Automate advertising campaigns and optimize performance across multiple channels.', link: '/services#automated-campaign-orchestration' },
                { emoji: '🛡️', title: 'AI-Powered Threat Detection', desc: 'Leverage AI to constantly monitor for threats, identify anomalies, and protect your systems.', link: '/services#ai-powered-threat-detection' }
              ].map((service, index) => (
                 <motion.div
                    key={`service-${index}`} variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(136, 191, 66, 0.1)" }}
                    className="bg-white rounded-xl p-6 md:p-8 shadow-sm transition-all duration-300 flex flex-col h-full border border-transparent hover:border-[#88BF42]/20 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-[#88BF42]/5 rounded-full blur-xl transform translate-x-12 -translate-y-12"></div>
                     <div className="w-12 h-12 md:w-14 md:h-14 bg-[#88BF42]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 relative z-10 flex-shrink-0">
                       {service.title.includes('Voice') ? (
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path fill="#88BF42" d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/>
                           <path fill="#88BF42" d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" opacity="0.7"/>
                         </svg>
                       ) : service.title.includes('Social') ? (
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path fill="#88BF42" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                         </svg>
                       ) : service.title.includes('Lead') ? (
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path fill="#88BF42" d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01.3.6v1.8a.75.75 0 01-.3.6A60.462 60.462 0 0112.3 17.5a.75.75 0 01-.6 0A60.462 60.462 0 011.2 11.72a.75.75 0 01-.3-.6v-1.8a.75.75 0 01.3-.6A60.65 60.65 0 0111.7 2.805z"/>
                           <path fill="#88BF42" d="M11.7 15.75a.75.75 0 01.6 0A60.462 60.462 0 0022.83 21.53a.75.75 0 01.3.6v1.8a.75.75 0 01-.3.6A60.45 60.45 0 0012.3 30.25a.75.75 0 01-.6 0A60.45 60.45 0 001.2 24.53a.75.75 0 01-.3-.6v-1.8a.75.75 0 01.3-.6A60.462 60.462 0 0011.7 15.75z" opacity="0.4"/>
                         </svg>
                       ) : service.title.includes('Chatbot') ? (
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path fill="#88BF42" d="M6.25 6.375a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0zM12 17.75a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75z"/>
                           <path fill="#88BF42" d="M8.5 19.75a.75.75 0 01.75.75 2.25 2.25 0 004.5 0 .75.75 0 011.5 0 3.75 3.75 0 01-7.5 0 .75.75 0 01.75-.75z" opacity="0.6"/>
                           <path fill="#88BF42" d="M10.25 6.375a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z" opacity="0.8"/>
                         </svg>
                       ) : service.title.includes('Campaign') ? (
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path fill="#88BF42" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                         </svg>
                       ) : (
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path fill="#88BF42" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                           <path fill="#88BF42" d="M12 17l5-5-5-5v10z" opacity="0.8"/>
                         </svg>
                       )}
                     </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#0F0326] mb-2 md:mb-3 relative z-10">{service.title}</h3>
                    <p className="text-[#696869] text-sm md:text-base mb-4 flex-grow relative z-10">
                      {service.desc}
                    </p>
                    <div className="h-1 w-10 md:w-12 bg-[#88BF42] mb-4 transition-all duration-300 group-hover:w-16 md:group-hover:w-20"></div>
                    <RouterLink
                      to={service.link}
                      className="inline-flex items-center text-[#88BF42] font-medium hover:underline relative z-10 group text-sm md:text-base"
                    >
                      <span className="relative">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88BF42] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </RouterLink>
                  </motion.div>
              ))}
              
            </motion.div>
          </div>
        </section>
         {/* 2. Trusted By Logos Section */}
        <motion.section
            className="py-16 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.div variants={itemVariants} className="text-center mb-12">
                <motion.div
                  variants={fadeIn}
                  className="inline-block bg-[#88BF42]/10 rounded-full px-6 py-2 mb-6"
                >
                  <span className="text-[#88BF42] font-semibold">Trusted By</span>
                </motion.div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-4"> {/* Removed dark mode classes for simplicity if not used */ }
                        Powering Success <span className="text-[#88BF42]">Across Industries</span>
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                      Join thousands of companies using our AI technology to transform their business
                    </p>
                </motion.div>
            </div>

            <div className="overflow-hidden py-4 hide-scrollbar w-full px-4 md:px-6 lg:px-8">
                <div
                    className="flex flex-nowrap w-max animate-marquee-rtl"
                    style={{ '--duration': durationRtl } as CustomCSSProperties}
                  >
                    {logosRtlDuplicated.map((logo, index) => (
                        <div
                            key={`rtl-${index}`}
                            className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center w-36 h-20 md:w-40 md:h-24 mx-3 transition-all duration-300 hover:shadow-lg hover:border-[#88bf42] hover:scale-105 transform"
                        >
                            <a href={logo.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                {logo.logoUrl && (
                                    <img
                                        src={logo.logoUrl}
                                        alt={logo.altText}
                                        width={120} // Intrinsic width for aspect ratio
                                        height={60} // Intrinsic height for aspect ratio
                                        className="object-contain max-w-[100px] max-h-[40px] md:max-w-[120px] md:max-h-[50px] transition-all duration-300 filter hover:brightness-110" // Constrained display size
                                        loading="lazy"
                                    />
                                )}
                            </a>
                        </div>
                    ))}
                </div>
                <div
                    className="flex flex-nowrap w-max mt-8 animate-marquee-ltr"
                    style={{ '--duration': durationLtr } as CustomCSSProperties}
                >
                    {logosLtrDuplicated.map((logo, index) => (
                        <div
                            key={`ltr-${index}`}
                            className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center w-36 h-20 md:w-40 md:h-24 mx-3 transition-all duration-300 hover:shadow-lg hover:border-[#88bf42] hover:scale-105 transform"
                        >
                            <a href={logo.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                {logo.logoUrl && (
                                     <img
                                        src={logo.logoUrl}
                                        alt={logo.altText}
                                        width={120}
                                        height={60}
                                        className="object-contain max-w-[100px] max-h-[40px] md:max-w-[120px] md:max-h-[50px] transition-all duration-300 filter hover:brightness-110"
                                        loading="lazy"
                                    />
                                )}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>

        {/* Add the Why Thor Signia section after the main hero/diagram section */}
        <section className="py-16 md:py-24 bg-[#f8fcf8] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#9ac857]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#10b4b7]/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center items-stretch">
              {/* Left Side: Title and Content */}
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative text-center lg:text-left">
                  Why <span className="text-[#9ac857]">Thor</span> <span className="text-[#88BF42]">Signia</span>?
                  {/* Why <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span>  With COlor Skeme */}
                  <div className="absolute -bottom-3 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-28 h-1 bg-[#9ac857] rounded-full"></div>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center lg:text-left">
                  With our deep expertise in AI technologies and business process optimization, we deliver solutions that create immediate impact and long-term value for your organization.
                </p>
                <ul className="list-disc pl-6 text-gray-700 text-base mb-6">
                  <li>Trusted by leading enterprises across industries</li>
                  <li>Proven track record of successful AI deployments</li>
                  <li>Dedicated support and continuous optimization</li>
                </ul>
                <p className="text-base text-gray-600 text-center lg:text-left">
                  Partner with us to unlock the full potential of AI for your business and stay ahead in a rapidly evolving digital landscape.
                </p>
              </div>
              {/* Right Side: Cards */}
              <div className="h-full flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#88BF42]/10 to-[#9ac857]/10 flex items-center justify-center mb-4 text-[#88BF42]">
                        {advantage.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                      <p className="text-gray-700 text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductDemoSection />

        {/* <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <RouterLink to="/case-studies/sgf-fab-industries" className="block relative rounded-xl overflow-hidden shadow-xl group">
                  <div className="aspect-video bg-[#F5F8FF] relative">
                    <img
                      src="/assets/images.png"
                      alt="SGF FAB Industries quality control case study"
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0326]/80 to-transparent p-4 md:p-6">
                      <div className="text-white text-sm md:text-base font-medium">SGF FAB Industries</div>
                    </div>
                  </div>
                </RouterLink>
              </div>

              <div className="md:w-1/2 text-center md:text-left">
                <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
                  <span className="text-[#88BF42] text-sm md:text-base font-semibold">Case Study</span>
                </motion.div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-4">AI-Powered Quality <span className="text-[#88BF42]">Control System</span> </h2>

                <p className="text-base md:text-lg text-[#696869] mb-4 md:mb-6 max-w-prose text-center">
                  Developed a custom computer vision system for quality control in industrial fabrication, resulting in significant reduction in production defects and improved operational efficiency.
                </p>
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6 mb-6 text-center md:text-left">
  <div>
    <div className="text-2xl md:text-3xl font-bold  mb-1">285%</div>
    <div className="text-base md:text-lg font-medium">ROI</div>
  </div>

  <div>
    <div className="text-2xl md:text-3xl font-bold mb-1">8 months</div>
    <div className="text-base md:text-lg font-medium">Timeframe</div>
  </div>
  <div>
    <div className="text-2xl md:text-3xl font-bold mb-1">Improved</div>
    <div className="text-base md:text-lg font-medium">Defect Reduction</div>
  </div>
</div>
<Button asChild className="bg-[#0F0326] hover:bg-[#1A0645] text-white text-sm md:text-base px-6 md:px-8 py-3 md:py-4 h-auto w-52 rounded-md mx-auto md:mx-0">
  <RouterLink to="/case-studies/sgf-fab-industries">
  View Full Case Study <ArrowRight className="ml-2 h-3 w-3" />
  </RouterLink>
</Button>


</div>
</div>
</div>
</section> */}
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background blob/gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#88BF42]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F0326]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
              <span className="text-[#88BF42] text-sm md:text-base font-semibold">Industry Recognition</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-3 md:mb-4 leading-tight">
              Award-Winning <span className="text-[#88BF42]">Excellence in AI</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our commitment to innovation and excellence has been recognized by leading industry organizations worldwide.
            </motion.p>
          </div>

          {/* Awards Grid */}
          <motion.div variants={staggerChildren} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
               { featured: true, icon: Trophy, title: 'World Business Conclave Award', desc: 'Outstanding innovation in AI solutions and transformative impact on enterprise operations.', footer: '2025 Winner', linkText: 'View Details', link: '/awards' },
               { featured: false, icon: Award, title: 'AI Excellence Redefined', desc: 'Exceptional performance, scalability, and innovation in AI technology solutions.', footer: ' Innovation Awards', link: '/awards/best-ai-platform' },
               { featured: false, icon: Star, title: 'CX Innovation Award', desc: 'Revolutionizing experience through AI-powered automation solutions.', footer: 'CX Leaders Summit', link: '/awards/cx-innovation' },
               { featured: false, icon: Medal, title: 'Enterprise Tech Leader', desc: 'Leadership in enterprise AI solutions and technological advancement.', footer: 'Enterprise Awards', link: '/awards/enterprise-leader' },
            ].map((award, index) => (
               <motion.div
                  key={`award-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }} // Animation on hover
                  className={clsx(
                      "rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border relative overflow-hidden group",
                      award.featured
                          ? 'bg-gradient-to-br from-white to-[#88BF42]/5 border-2 border-[#88BF42] shadow-xl hover:shadow-2xl col-span-1 sm:col-span-2 lg:col-span-1' // Adjusted featured span for sm
                          : 'bg-white border-gray-100'
                  )}
                >
                  {/* Subtle background element */}
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#88BF42]/5 rounded-full blur-xl transform translate-x-12 -translate-y-12"></div>
               {/* Featured Label - Simple Rectangle in Top Right */}
               {award.featured && (
                      <div className="absolute top-2 right-2 bg-[#88BF42] text-white px-3 py-0.5 text-xs md:text-sm font-bold rounded-md z-10 uppercase">FEATURED</div>
                  )}
                  {/* Award Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#88BF42]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                      {/* Icon */}
                      <award.icon className="w-6 h-6 md:w-8 md:h-8 text-[#88BF42]" />
                    </div>
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-[#0F0326] mb-2 md:mb-3">{award.title}</h3>
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">{award.desc}</p>
                    {/* Footer and Link */}
                    <div className="flex items-center justify-between text-sm md:text-base">
                        <span className={clsx("font-medium", award.featured ? 'text-[#0F0326]/80' : 'text-[#88BF42]')}>{award.footer}</span>
                        {award.linkText && award.link && ( // Ensure link exists before rendering RouterLink
                            <RouterLink to={award.link} className="flex items-center text-[#88BF42] group-hover:translate-x-1 transition-transform">
                                <span className="text-sm font-medium mr-1">{award.linkText}</span>
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                            </RouterLink>
                        )}
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

        {/* 8. Testimonials Strip */}
        <section className="py-16 md:py-12 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerChildren} className="text-center mb-8 md:mb-10">
              <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
                  <span className="text-[#88BF42] text-sm md:text-base font-semibold">Testimonials</span>
                </motion.div>
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                What Our <span className="text-[#88BF42]">Clients Say</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Hear from businesses who have transformed their operations with Thorsignia AI.
              </motion.p>
            </motion.div>
            <div className="max-w-5xl mx-auto relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{ prevEl: '.testimonial-prev', nextEl: '.testimonial-next' }}
                pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className="testimonials-swiper mt-6 md:mt-8" // Removed pb, pagination handles spacing
                onSwiper={(swiper) => swiperRef.current = swiper}
              >
                {testimonials.map((testimonial, index) => (
                   <SwiperSlide key={`testimonial-${index}`} className="h-auto pb-8 md:pb-10"> {/* Added pb here for pagination space */}
                      <div className="bg-gray-50 rounded-xl p-6 md:p-8 relative shadow-md border border-gray-100 h-full flex flex-col">
                        <div className="text-2xl md:text-3xl text-[#88BF42] mb-3 md:mb-4">❝</div>
                        <p className="text-gray-700 italic text-sm md:text-base mb-6 md:mb-8 flex-grow">
                         {testimonial.quote}
                        </p>
                        <div className="flex items-center mt-auto">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 mr-3 md:mr-4 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm text-[#88BF42]">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                            <div className="text-[#88BF42] text-xs md:text-sm">{testimonial.position}</div>
                          </div>
                        </div>
                      </div>
                   </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination-custom text-center mt-6"></div> {/* Pagination element outside Swiper, but styled by Swiper */}
              <div className="mt-6 md:mt-8 flex flex-col items-center">
                
              </div>
            </div>
          </div>
        </section>

        {/* 9. Call-to-Action Section */}
        <motion.section
          className="py-10 md:py- bg-white relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`cta-circle-${i}`} className="absolute rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                style={{
                  width: `${Math.random() * 20 + 10}px`, height: `${Math.random() * 20 + 10}px`,
                  left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                  backgroundColor: i % 2 === 0 ? '#88BF42' : '#0F0326',
                  filter: 'blur(0.5px)', transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 text-center relative z-20">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#0F0326]">
              Ready to Transform Your Business with <span className="text-[#88BF42]">AI</span>?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-600">
              Join the AI revolution and stay ahead of the competition with our cutting-edge solutions.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Button asChild className="bg-[#88bf42] hover:bg-[#7aad3a] text-white text-base md:text-lg px-6 md:px-8 py-3 h-auto w-52 rounded-md">
                <RouterLink to="/contact">Get Started Today</RouterLink>
                </Button>
              {/* <Button asChild variant="outline" className="border-[#88bf42] text-[#88bf42] text-base md:text-lg px-6 md:px-8 py-3 h-auto w-70 rounded-md hover:bg-[#eaf4d6]">
                <RouterLink to="/contact#consultation">Schedule a Consultation</RouterLink>
                </Button> */}
            </motion.div>
          </div>
        </motion.section>
      </main>

      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }} className="fixed bottom-4 right-4 z-50"
          >
             <Button asChild size="lg" className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white rounded-full shadow-lg">
               <RouterLink to="/contact">Request Demo</RouterLink>
             </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  
  );
}

export default HomePage;
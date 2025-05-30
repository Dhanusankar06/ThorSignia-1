import React, { useEffect, useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from "../components/ui/button";
import {
  Play,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
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
  Mic,
  Network,
  Circle,
  Layers,
  CheckCircle,
  Share2,
  Megaphone,
  ShieldAlert,
  BarChart3
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { clsx } from 'clsx';
import '../styles/globals.css';
import ProductDemoSection from './demovideo.tsx';

// Trusted By Logos Data
const trustedByLogos = [
  // Logos commonly found in startup/scale-up tech stacks
  { logoUrl: "https://cdn.svgporn.com/logos/slack-icon.svg", altText: "Slack Logo", link: "https://slack.com" }, // Communication/Collaboration
  { logoUrl: "https://cdn.svgporn.com/logos/zoom.svg", altText: "Zoom Logo", link: "https://zoom.us" }, // Video Conferencing/Collaboration
  { logoUrl: "https://cdn.svgporn.com/logos/hubspot.svg", altText: "HubSpot Logo", link: "https://hubspot.com" }, // Marketing/CRM
  { logoUrl: "https://cdn.svgporn.com/logos/salesforce.svg", altText: "Salesforce Logo", link: "https://www.salesforce.com" }, // Database
  { logoUrl: "https://cdn.svgporn.com/logos/netlify.svg", altText: "Netlify Logo", link: "https://netlify.com" }, // Web Hosting/DevTools
  { logoUrl: "https://cdn.svgporn.com/logos/twilio.svg", altText: "Twilio Logo", link: "https://twilio.com" }, // Communication APIs
  { logoUrl: "https://cdn.svgporn.com/logos/snowflake.svg", altText: "Snowflake Logo", link: "https://snowflake.com" }, // Data Warehouse (widely used by growing tech companies)
  { logoUrl: "https://cdn.svgporn.com/logos/stripe.svg", altText: "Stripe Logo", link: "https://stripe.com" }, // Email Marketing (Icon version)
];

// Animation durations for marquee - Keeping them as they were in the original code, although the marquee itself seems removed
const durationRtl = '60s';
const durationLtr = '70s';

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


// Note: AnimatedDiagram and associated helper functions are included
// as they were in the original code, assuming they are used elsewhere or intended.
// If they are not used, they could be removed.
const generateCircularNodes = () => {
  const centerX = 50;
  const centerY = 50;
  const radius = 35;
  const totalNodes = 8;

  const nodes = [
    { id: 'center', label: 'AI Core', x: centerX, y: centerY, icon: <Cpu className="h-4 w-4 md:h-6 md:w-6" /> },
  ];

  for (let i = 0; i < totalNodes; i++) {
    const angle = (i * 2 * Math.PI) / totalNodes;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    nodes.push({
      id: `node-${i}`,
      label: getNodeLabel(i),
      x,
      y,
      icon: getNodeIcon(i),
    });
  }
  return nodes;
};

const getNodeLabel = (index) => {
  const labels = ['ChatBot', 'Vision', 'Lead Generation', 'Campaign', 'Cloud', 'Security', 'Social Media', 'Voice'];
  return labels[index];
};

const getNodeIcon = (index) => {
  const icons = [
    <MessageSquare className="h-3 w-3 md:h-5 md:w-5" />,
    <Eye className="h-3 w-3 md:h-5 md:w-5" />,
    <Brain className="h-3 w-3 md:h-5 md:w-5" />,
    <Bot className="h-3 w-3 md:h-5 md:w-5" />,
    <Cloud className="h-3 w-3 md:h-5 md:w-5" />,
    <Shield className="h-3 w-3 md:h-5 md:w-5" />,
    <Database className="h-3 w-3 md:h-5 md:w-5" />,
    <BarChart2 className="h-3 w-3 md:h-5 md:w-5" />,
  ];
  return icons[index];
};

const nodes = generateCircularNodes();

const AnimatedDiagram = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className={`absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full sparkle-animation`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: i % 2 === 0 ? '#88BF42' : '#ffffff',
              opacity: 0.6,
              boxShadow: i % 2 === 0
                ? '0 0 8px 1px rgba(136, 191, 66, 0.5)'
                : '0 0 8px 1px rgba(255, 255, 255, 0.5)'
            }}
          />
        ))}
      </div>
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 ${
            node.id === 'center' ? 'pulse-animation' : ''
          }`}
          style={{ top: `${node.y}%`, left: `${node.x}%` }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: node.id === 'center' ? 0.2 : (index * 0.1) + 0.3
          }}
        >
          <div className={`rounded-full flex items-center justify-center ${
            node.id === 'center'
              ? 'bg-[#88BF42] w-14 h-14 md:w-20 md:h-20 shadow-[0_0_20px_rgba(136,191,66,0.4)] md:shadow-[0_0_30px_rgba(136,191,66,0.4)]'
              : 'bg-white w-10 h-10 md:w-14 md:h-14 shadow-[0_0_15px_rgba(255,255,255,0.2)] md:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
          }`}>
            <div className={node.id === 'center' ? 'text-white' : 'text-[#0F0326]'}>
              {node.icon}
            </div>
          </div>
          <div className="absolute top-full mt-1 md:mt-2 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs font-medium text-white whitespace-nowrap">
            {node.label}
          </div>
        </motion.div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70%] h-[70%] border border-white/10 rounded-full rotate-animation"></div>
        <div className="absolute w-[85%] h-[85%] border border-white/5 rounded-full rotate-animation-reverse"></div>
      </div>
    </div>
  );
};


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


  return (
    <div className="flex flex-col max-w-20xl bg-white"> {/* Adjusted max-width to a more standard class */}
      <main className="flex-grow bg-white">



   {/* Hero Section */}
   

 {/* Hero Section */}
<section className="relative bg-[#0F0326] text-white overflow-hidden min-h-screen flex items-center">
  {/* Background images with gradient overlay */}
  <div className="absolute inset-0">
    {/* Neural network background */}
    <div className="absolute inset-0 bg-[url('/assets/glowing-neural.png')] bg-cover bg-center opacity-10 hidden lg:block"></div>


  </div>

  <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
    {/* Main Flex Container: Stacks vertically on small, horizontal on large */}
    {/* Corrected ordering for mobile using order-first and order-last */}
    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 h-full">

      {/* Images Column (DESKTOP ONLY) - This column is primarily for the desktop layout */}
      {/* Hide this column completely on mobile, show it on large screens */}
      <div className="lg:w-1/2 w-full relative h-full md:h-full lg:h-[800px] max-w-lg mx-auto lg:mx-0 order-first lg:order-2 mb-8 lg:mb-0 hidden lg:block"> {/* Added hidden lg:block */}
        {/* Container for the two images with improved alignment */}
        <div className="grid grid-rows-2 gap-4 h-full"> {/* Using grid-rows-2 to divide space evenly */}
          {/* First Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }} // Animates after text block starts
            className="rounded-lg overflow-hidden shadow-2xl h-full" // Using h-full to fill the grid cell completely
          >
            {/* First image */}
            <img
              src="/assets/heroai.png"
              alt="AI Interface Example 1"
              className="w-full h-full "
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }} // Animates shortly after the first image
            className="rounded-lg overflow-hidden shadow-2xl h-full" // Using h-full to fill the grid cell completely
          >
            {/* Second image */}
            <img
              src="/assets/award.png"
              alt="AI Interface Example 2"
              className="w-full h-[500px] "
            />
          </motion.div>
        </div>
      </div>

      {/* Text, Buttons, Logos, AND Images (MOBILE) Column - order-last on mobile, lg:order-1 on desktop */}
      {/* This column handles the combined layout on mobile and the text/button/logo part on desktop */}
      {/* Make this a flex container on mobile to control inner order */}
      <div className="flex flex-col lg:w-1/2 text-center lg:text-left order-last lg:order-1 lg:order-none"> {/* Added flex flex-col */}

        {/* Heading + Paragraph Block (Order 1 on mobile) */}
        {/* Removed the buttons from this motion.div as they are now a separate item 5for ordering */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="order-1 text-center lg:text-left"
>
  {/* Heading */}
  <h1 className="text-[36px] md:text-5xl lg:text-6xl font-extrabold text-white leading-snug md:leading-tight lg:leading-tight mb-4 md:mb-6">
    Transforming Business with
    <span className="text-[#88BF42]"> Intelligent Automation</span>
  </h1>

  {/* Paragraph Description */}
  <p className="text-base md:text-lg text-white/90 leading-relaxed md:leading-loose mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
    Harness the power of AI-driven platforms to automate operations, supercharge lead conversion, and deliver extraordinary user experiences—at scale and with precision.
  </p>
</motion.div>


        {/* Images Block (MOBILE ONLY) (Order 2 on mobile) */}
        {/* Duplicate the image structure from the desktop-only column */}
        {/* Show this block on mobile, hide on large screens */}
        <div className="w-full relative h-full md:h-[450px] max-w-lg mx-auto mb-8 block lg:hidden order-2"> {/* Added block lg:hidden and order-2, mb-8 for spacing */}
             {/* Flex container for the two stacked images */}
             <div className="flex flex-col gap-4 h-full"> {/* h-full makes it fill parent height */}
                {/* First Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }} // Animates shortly after text block
                  className="flex-1 rounded-lg overflow-hidden shadow-2xl h-full"
                >
                  {/* Replace with your first image URL */}
                  <img
                    src="/assets/heroai.png"
                    alt="AI Interface Example 1"
                    className="w-full h-full " // This already uses h-full object-cover
                  />
                </motion.div>

                {/* Second Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }} // Animates shortly after the first image
                  className="flex-1 rounded-lg overflow-hidden shadow-2xl h-full"
                >
                  {/* Replace with your second image URL */}
                  <img
                    src="/assets/award.png"
                    alt="AI Interface Example 2"
                    className="w-full h-full " // This already uses h-full object-cover
                  />
                </motion.div>
            </div>
        </div>


        {/* Buttons Block (Order 3 on mobile) */}
        {/* This div now contains only the buttons and is a separate flex item for ordering */}
        {/* Removed motion from this parent div, added order-3 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center lg:justify-start mt-6 order-3">
          <Button
            // Keep h-12 for height
            // Removed w-full sm:w-auto
            // Added a fixed width class (e.g., w-60 - adjust as needed)
            // Added mx-auto for centering on mobile (parent is items-center)
            // Keep reduced horizontal padding px-5 sm:px-6
            className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white h-12 text-base w-60 mx-auto sm:mx-0 px-4 sm:px-6 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"
            asChild
          >
            <RouterLink to="/services" className="flex items-center justify-center">
              Explore Our Solutions
            </RouterLink>
          </Button>

          <Button
            asChild
            variant="outline"
            // Keep h-12 for height
            // Removed w-full sm:w-auto
            // Added the same fixed width class (w-60)
            // Added mx-auto for centering on mobile, override with sm:mx-0
            // Keep reduced horizontal padding px-5 sm:px-6
            className="border-2 border-[#88bf42] text-[#88bf42] text-base h-12 w-60 mx-auto sm:mx-0 px-5 sm:px-6 rounded-md hover:bg-[#88bf42] hover:text-white transition-all duration-300"
          >
            <RouterLink to="/contact" className="flex items-center justify-center">
              Book a Free Demo
            </RouterLink>
          </Button>
        </div>

        {/* Trusted By Section (Order 4 on mobile) */}
        {/* This div is now a separate flex item for ordering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Keep whileInView for visibility-based animation
          viewport={{ once: true, amount: 0.1 }} // Added viewport options
          transition={{ duration: 0.5, delay: 0.8 }} // Animation after the main text block
          className="mt-12 text-center lg:text-left order-4" // Added order-4, removed lg:order-2
        >
          <p className="text-white/70 text-base mb-4">Trusted by forward-thinking companies across industries</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
            {/* Note: Logos also have individual whileInView animations with staggered delay */}
            {trustedByLogos.slice(0, 9).map((logo, index) => (
              <motion.a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} // Keep whileInView
                viewport={{ once: true, amount: 0.1 }} // Added viewport options
                transition={{ duration: 0.5, delay: index * 0.05 + 0.9 }} // Staggered animation after the main block
                className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.logoUrl}
                  alt={logo.altText}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>



      </div>


    </div>
  </div>
</section>
        {/* 2. Quick Company Intro */}
        <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
  {/* Potential Background Element here if needed */}
  {/* <div className="absolute inset-0 bg-pattern opacity-10"></div> */}

  <div className="container mx-auto px-4 relative z-10">
    {/* Outer motion div for overall section animation stagger */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Adjusted amount slightly
      variants={staggerChildren}
    >

      {/* --- DESKTOP LAYOUT (md and up) --- */}
      {/* This grid is visible only on medium screens and up */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Desktop Left Column: Text, Paragraphs, Button */}
        <motion.div
          variants={itemVariants} // Animate this block relative to parent stagger
          className="flex flex-col space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants} // Animate this item within the block
            className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto md:mx-0"
          >
            <span className="text-[#88BF42] text-sm md:text-base font-semibold">
              About Us
            </span>
          </motion.div>
          {/* Heading */}
          <motion.h2
            variants={itemVariants} // Animate this item within the block
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] leading-tight"
          >
            Pioneering the Future of <span className="text-[#88BF42]">AI Solutions</span>
          </motion.h2>
          {/* Paragraphs */}
          {/* Wrap paragraphs in a div if they should animate together */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4"> {/* Added wrapper div */}
            <p className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0">
              Thorsignia is dedicated to transforming how businesses operate, engage, and grow. With a deep focus on artificial intelligence and automation, we deliver cutting-edge, intelligent systems tailored to meet real-world challenges.
            </p>
            <p className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0">
              Our expertise spans across AI-powered platforms, smart automation, and customer-centric technologies enabling organizations to save time, convert more leads, and elevate user experiences.
            </p>
          </motion.div>
          {/* Learn More Button */}
          <motion.a
            href="/about"
            variants={itemVariants} // Animate this item within the block
            className="w-fit px-6 md:px-8 py-3 md:py-4 bg-[#0F0326] text-white font-semibold rounded-lg hover:bg-[#1A0645] transition-all duration-300 ease-in-out hover:shadow-lg flex items-center space-x-2 group mx-auto md:mx-0"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Desktop Right Column: Small Cards, Stats Cards */}
        <motion.div
           variants={itemVariants} // Animate this block relative to parent stagger
           className="flex flex-col gap-10 md:gap-16"
        >
           {/* Small Cards (Horizontal on Desktop) */}
           {/* These cards are handled by the main grid item's layout on desktop */}
           <motion.div
              variants={itemVariants} // Animate this block within the parent
              className="flex flex-col md:flex-row items-center md:items-start gap-y-6 md:gap-x-8 justify-center md:justify-start"
           >
               <div className="flex flex-col items-center md:items-start space-y-3 p-4 bg-white rounded-lg shadow-sm">
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                      {/* Using Lucide Icon */}
                      <Layers className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" />
                   </div>
                   <span className="text-[#0F0326] text-sm md:text-base font-semibold text-center md:text-left">Enterprise Grade</span>
               </div>
               <div className="flex flex-col items-center md:items-start space-y-3 p-4 bg-white rounded-lg shadow-sm">
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                       <Cpu className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" />
                   </div>
                   <span className="text-[#0F0326] text-sm md:text-base font-semibold text-center md:text-left">AI-Powered Solutions</span>
               </div>
                <div className="flex flex-col items-center md:items-start space-y-3 p-4 bg-white rounded-lg shadow-sm">
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                      {/* Using Lucide Icon */}
                       <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" />
                   </div>
                    <span className="text-[#0F0326] text-sm md:text-base font-semibold text-center md:text-left">Smart Solutions</span>
               </div>
           </motion.div>

           {/* Stats Cards (2x2 Grid on Desktop) */}
           <motion.div
             variants={itemVariants} // Animate this block within the parent
             className="grid grid-cols-2 gap-4 md:gap-6"
           >
               <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                 <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">99.9%</div>
                 <div className="text-[#0F0326] text-sm md:text-base font-medium">Client Satisfaction</div>
               </div>
               <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                 <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">250+</div>
                 <div className="text-[#0F0326] text-sm md:text-base font-medium">Enterprise Clients</div>
               </div>
               <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                 <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">24/7</div>
                 <div className="text-[#0F0326] text-sm md:text-base font-medium">AI Support</div>
               </div>
               <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center md:text-left">
                 <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">10+</div>
                 <div className="text-[#0F0326] text-sm md:text-base font-medium">Years Experience</div>
               </div>
           </motion.div>
        </motion.div>
      </div> {/* End Desktop Layout Grid */}


      {/* --- MOBILE LAYOUT (below md) --- */}
      {/* This flex container is visible only below medium screens */}
      {/* It uses flex-col and order classes to arrange items */}
      {/* Adjusted gap-y to potentially reduce overall vertical space on mobile */}
      <div className="flex flex-col gap-y-6 md:hidden text-center"> {/* Reduced gap-y from 8 to 6 */}

          {/* 1) About Us Tag */}
          <motion.div
            variants={itemVariants}
            className="order-1 inline-block bg-[#88BF42]/10 rounded-full px-4 py-1 w-fit mx-auto" // Removed mb-4
          >
            <span className="text-[#88BF42] text-sm font-semibold">
              About Us
            </span>
          </motion.div>

          {/* 2) Heading */}
          <motion.h2
            variants={itemVariants}
            className="order-2 text-2xl font-bold text-[#0F0326] leading-tight" // Removed mb-4
          >
            Pioneering the Future of <span className="text-[#88BF42]">AI Solutions</span>
          </motion.h2>

          {/* 3) Paragraphs */}
           {/* Wrap paragraphs in a div if they should animate together */}
          <motion.div variants={itemVariants} className="order-3 flex flex-col space-y-4 max-w-prose mx-auto"> {/* Removed mb-6 */}
            <p className="text-base text-[#696869] leading-relaxed mx-auto">
              Thorsignia is dedicated to transforming how businesses operate, engage, and grow. With a deep focus on artificial intelligence and automation, we deliver cutting-edge, intelligent systems tailored to meet real-world challenges.
            </p>
            <p className="text-base text-[#696869] leading-relaxed mx-auto">
              Our expertise spans across AI-powered platforms, smart automation, and customer-centric technologies enabling organizations to save time, convert more leads, and elevate user experiences.
            </p>
          </motion.div>

          {/* 4) Small Cards (Horizontal on Mobile) */}
          {/* Duplicated from desktop right column, adjusted layout for mobile */}
          <motion.div
             variants={itemVariants}
             className="order-4 flex flex-row flex-wrap justify-center gap-4" // order-4, horizontal wrapping, gap-4, Removed mb-8
          >
               {/* Each card now takes roughly 1/3 width on small screens if they wrap */}
               <div className="flex flex-col items-center space-y-3 p-4 bg-white rounded-lg shadow-sm min-w-[140px] flex-1"> {/* Added min-w and flex-1 for card sizing */}
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-[#88BF42]" />
                   </div>
                   <span className="text-[#0F0326] text-sm font-semibold text-center">Enterprise Grade</span>
               </div>
               <div className="flex flex-col items-center space-y-3 p-4 bg-white rounded-lg shadow-sm min-w-[140px] flex-1"> {/* Added min-w and flex-1 */}
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                       <Cpu className="w-5 h-5 text-[#88BF42]" />
                   </div>
                   <span className="text-[#0F0326] text-sm font-semibold text-center">AI-Powered Solutions</span>
               </div>
                <div className="flex flex-col items-center space-y-3 p-4 bg-white rounded-lg shadow-sm min-w-[140px] flex-1"> {/* Added min-w and flex-1 */}
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88BF42]/10 flex items-center justify-center">
                       <CheckCircle className="w-5 h-5 text-[#88BF42]" />
                   </div>
                    <span className="text-[#0F0326] text-sm font-semibold text-center">Smart Solutions</span>
               </div>
          </motion.div>


          {/* 6) Stats Cards (2x2 Grid on Mobile) - NOW Order 5 */}
          {/* Duplicated from desktop right column */}
          <motion.div
            variants={itemVariants}
            className="order-5 grid grid-cols-2 gap-4" // Changed order to 5, 2x2 grid on mobile
          >
               <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 text-center">
                 <div className="text-3xl font-bold text-[#88BF42] mb-1">99.9%</div>
                 <div className="text-[#0F0326] text-sm font-medium">Client Satisfaction</div>
               </div>
               <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 text-center">
                 <div className="text-3xl font-bold text-[#88BF42] mb-1">50+</div>
                 <div className="text-[#0F0326] text-sm font-medium">Enterprise Clients</div>
               </div>
               <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 text-center">
                 <div className="text-3xl font-bold text-[#88BF42] mb-1">24/7</div>
                 <div className="text-[#0F0326] text-sm font-medium">AI Support</div>
               </div>
               <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 text-center">
                 <div className="text-3xl font-bold text-[#88BF42] mb-1">10+</div>
                 <div className="text-[#0F0326] text-sm font-medium">Years Experience</div>
               </div>
          </motion.div>

          {/* 5) Learn More Button - NOW Order 6 */}
          {/* Duplicated from desktop left column */}
          <motion.a
            href="/about"
            variants={itemVariants}
            className="order-6 w-fit px-6 py-3 bg-[#0F0326] text-white font-semibold rounded-lg hover:bg-[#1A0645] transition-all duration-300 ease-in-out hover:shadow-lg flex items-center space-x-2 group mx-auto" // Changed order to 6, Removed mb-8
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>


      </div> {/* End Mobile Layout Flex Container */}

    </motion.div> {/* End outer motion div */}
  </div>
</section>


        {/* 4. What We Offer Section */}

  
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren} className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
            <span className="text-[#88BF42] text-sm md:text-base font-semibold">What We Offer</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-3 md:mb-4">
          Smart AI Solutions Designed to <span className="text-[#88BF42]">Scale Your Business</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-[#696869] max-w-2xl mx-auto">
          From automated voice assistants to intelligent lead conversion, explore how our AI-powered tools drive growth, engagement, and efficiency.
          </motion.p>
        </motion.div>

        {/* Services Grid - Modified for Hover Effect */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            { icon: Mic, title: 'Intelligent Voice Automation', desc: 'Enable seamless, human-like conversations with AI-powered voice bots for inbound and outbound calls. Reduce wait times, boost conversions, and handle high-volume interactions with ease.', link: '/services/intelligent-voice-automation' },
            { icon: Share2, title: 'Social Engagement Automation', desc: 'Automate responses, schedule posts, and analyze performance across platforms like Instagram, LinkedIn, WhatsApp, and more—so you stay engaged, even when offline.', link: '/services/social-engagement-automation' },
            { icon: BarChart3, title: 'AI-Powered Lead Intelligence', desc: 'Identify, nurture, and convert high-intent prospects using AI insights. Segment users, personalize touchpoints, and maximize ROI on every campaign.', link: '/services/lead-intelligence' },
            { icon: Bot, title: 'Conversational AI Chatbots', desc: 'Chatbots that handle FAQs, engage prospects, and support customers in real-time—without missing a beat.', link: '/services/interactive-ai-chatbots' },
            { icon: Megaphone, title: 'Automated Campaign Orchestration', desc: 'Automate advertising campaigns and optimize performance across multiple channels.Seamlessly launch and manage ads across platforms using smart automation and performance optimization.', link: '/services/automated-campaign-orchestration' },
            { icon: ShieldAlert, title: 'AI-Powered Threat Detection', desc: 'Real-time AI surveillance that flags security risks, detects anomalies, and protects your digital assets.', link: '/services/threat-detection' }
          ].map((service, index) => (
             <motion.div
                key={`service-${index}`} variants={itemVariants}
                // Keep the whileHover for subtle lift and shadow
                whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(136, 191, 66, 0.1)" }}
                // Add 'group' class to make group-hover work on children
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm transition-all duration-300 flex flex-col h-full border border-transparent hover:border-[#88BF42]/20 relative overflow-hidden group cursor-pointer" // Added cursor-pointer
              >
                {/* Icon - Always visible */}
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-[#88BF42]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 relative z-10 flex-shrink-0">
                   <service.icon size={32} color="#88BF42" />
                 </div>
                {/* Title - Always visible */}
                <h3 className="text-lg md:text-xl font-bold text-[#0F0326] mb-2 md:mb-3 relative z-10">{service.title}</h3>

                {/* Content that appears on hover */}
                {/* Use max-h-0 and opacity-0 by default, transition to max-h-96 and opacity-100 on group-hover */}
                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-96 group-hover:opacity-100">
                    {/* Description */}
                    <p className="text-[#696869] text-sm md:text-base mb-4">
                      {service.desc}
                    </p>
                    {/* Horizontal Line */}
                    {/* Line width transition remains, but its visibility is controlled by parent opacity */}
                    <div className="h-1 w-10 md:w-12 bg-[#88BF42] mb-4 transition-all duration-300 group-hover:w-16 md:group-hover:w-20"></div>
                    {/* Learn More Link */}
                    <RouterLink
                      to={service.link}
                      className="inline-flex items-center text-[#88BF42] font-medium hover:underline relative z-10 group text-sm md:text-base" // The inner 'group' class here is for the text underline effect specifically
                    >
                      <span className="relative">
                        Learn more
                        {/* Underline effect on text hover */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88BF42] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </RouterLink>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

        {/* Why Choose Thorsignia Section */}
        <section className="py-16 md:py-24 ">
  <div className="container mx-auto px-4">
    {/* Use a grid for the main content layout - Back to 2 columns on lg */}
    {/* Added gap-8 md:gap-12 items-center as before */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

      {/* Left Column (on Desktop): Features List */}
      {/* CHANGED: order-first lg:order-1 to order-last lg:order-1 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren} // Stagger animation for items within this column
        className="space-y-6 md:space-y-8 order-last lg:order-1" // order-last mobile, lg:order-1 desktop
      >
        {/* Features Grid (Still a grid *within* this column) */}
        {/* Added responsive grid classes back */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8"> {/* Keep as 1 column on md, not 2 */}
             {[
               { icon: Brain, title: 'Advanced Enterprise AI', desc: 'Cutting-edge AI tailored for enterprise-grade reliability and performance.' },
               { icon: Bot, title: 'Custom AI Integrations', desc: 'Bespoke architectures designed for your specific business needs.' },
               { icon: BarChart2, title: 'Rapid Implementation', desc: 'Deploy AI systems in weeks, not months.' },
               { icon: Trophy, title: 'Business-Focused Results', desc: 'Solutions aligned with KPIs and measurable ROI.' },
               { icon: Shield, title: 'Scalable & Secure Systems', desc: 'Future-proof infrastructure with enterprise-grade security.' },
               { icon: Award, title: 'Expert Support & Consulting', desc: 'End-to-end guidance from AI specialists.' }
             ].map((feature, index) => (
               
               <motion.div
                 key={`feature-${index}`}
                 variants={itemVariants} // Animate each item
                 className="flex items-start group text-left" // text-left for content alignment
               >
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-[#88BF42]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                   <feature.icon size={32} color="#88BF42" />
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-[#0F0326] mb-1">{feature.title}</h3>
                   <p className="text-[#696869] text-sm md:text-base leading-relaxed">{feature.desc}</p>
                 </div>
               </motion.div>
             ))}
        </div>
      </motion.div>


      {/* Right Column (on Desktop): Heading and Intro Text */}
      {/* CHANGED: order-last lg:order-2 to order-first lg:order-2 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren} // Stagger animation for items within this column
        className="text-center lg:text-left lg:pl-8 order-first lg:order-2 mb-4" // Center text mobile, left desktop, add left padding desktop, order-first mobile, lg:order-2 desktop
      >
        <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
          <span className="text-[#88BF42] text-sm md:text-base font-semibold">Why Choose Thorsignia</span>
        </motion.div>

        <motion.h2  variants={itemVariants} // Keep your animation variants
className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-3 md:mb-4 leading-relaxed">
          Enterprise AI That <span className="text-[#88BF42] block">Works for You</span>
        </motion.h2>

        {/* Restored original paragraph spacing */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-[#696869] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 md:mb-8">
          We specialize in building smart, scalable AI systems that solve real business problems—fast. From automation to analytics, Thorsignia delivers measurable results at enterprise scale.
        </motion.p>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-[#696869] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4 md:mb-6">
           Unlike generic solutions, our AI is designed to integrate deeply with your existing workflows, ensuring a smooth transition and maximum impact. We prioritize measurable outcomes that directly contribute to your bottom line.
        </motion.p>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-[#696869] leading-relaxed max-w-2xl mx-auto lg:mx-0">
           Our team of experts works closely with you from strategy to deployment, providing the support needed to harness the full power of AI.
        </motion.p>

      </motion.div>

    </div> {/* End grid */}
  </div> {/* End container */}
</section>


       {/* Assuming ProductDemoSection exists and you want to keep it */}
       <ProductDemoSection />


        {/* 8. Testimonials Strip */}
        {/* <section className="py-16 md:py-20 bg-white text-gray-900">
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
                className="testimonials-swiper mt-6 md:mt-8"
                onSwiper={(swiper) => swiperRef.current = swiper}
              >
                {testimonials.map((testimonial, index) => (
                   <SwiperSlide key={`testimonial-${index}`} className="h-auto pb-8 md:pb-10">
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
             
              <div className="swiper-pagination-custom text-center mt-6"></div>
           
            </div>
          </div>
        </section> */}

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
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-6 text-[#0F0326]">
              Ready to Transform Your Business with <span className="text-[#88BF42]">AI?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-600">
              Join the AI revolution and stay ahead of the competition with our cutting-edge solutions.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
              <Button asChild className="bg-[#88bf42] hover:bg-[#7aad3a] text-white text-base md:text-lg px-6 md:px-8 py-3 h-auto w-52 rounded-md">
                <RouterLink to="/contact">Get Started Today</RouterLink>
                </Button>
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
import React, { useEffect, useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import demovideo from './demovideo.tsx';
// Adjust the import path for your Button component
// This assumes your Button component is in src/components/ui/button.jsx or .tsx
import { Button } from "../components/ui/button";
import ChatbotDemo from '../components/ChatbotDemo';
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
  Medal
} from 'lucide-react';

// Import Swiper components and modules
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
  { logoUrl: "https://cdn.svgporn.com/logos/amazon.svg", altText: "Amazon Logo", link: "https://amazon.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/meta.svg", altText: "Meta Logo", link: "https://meta.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/ibm.svg", altText: "IBM Logo", link: "https://ibm.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/salesforce.svg", altText: "Salesforce Logo", link: "https://salesforce.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/apple-icon.svg", altText: "Apple Logo", link: "https://apple.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/oracle.svg", altText: "Oracle Logo", link: "https://oracle.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/sap.svg", altText: "SAP Logo", link: "https://sap.com" },
  // Duplicated for longer scroll effect, original list is 9 items
  { logoUrl: "https://cdn.svgporn.com/logos/google.svg", altText: "Google Logo", link: "https://google.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/microsoft-icon.svg", altText: "Microsoft Logo", link: "https://microsoft.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/amazon.svg", altText: "Amazon Logo", link: "https://amazon.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/meta.svg", altText: "Meta Logo", link: "https://meta.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/ibm.svg", altText: "IBM Logo", link: "https://ibm.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/salesforce.svg", altText: "Salesforce Logo", link: "https://salesforce.com" },
  { logoUrl: "https://cdn.svgporn.com/logos/apple-icon.svg", altText: "Apple Logo", link: "https://apple.com" },
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

// Animation variants
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

// Calculate node positions in a circle
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
  const labels = ['NLP', 'Vision', 'ML', 'Robotics', 'Cloud', 'Security', 'Data', 'Analytics'];
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

  // Removed unused useEffect for currentLogoIndex, rotatedLogos, secondRowLogos
  // The marquee animation is handled by CSS using logosRtlDuplicated and logosLtrDuplicated

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
    <h1 className="text-[36px] md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
  Automate 
  <span className="block md:inline"> Conversations.</span><br className="hidden md:block" />
  <span className="text-[#88BF42]">Accelerate Growth.</span>
</h1>

    <p className="text-base md:text-lg text-white mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
      Power your business with intelligent voice, chat, and campaign automation.
    </p>
  

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center lg:justify-start mt-8">
  <Button
    className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-52 sm:w-auto h-12 text-base px-4"
    asChild
  >
    <RouterLink
      to="/contact"
      className="flex items-center justify-center"
    >
      Request Demo <ArrowRight className="ml-2 h-4 w-4" />
    </RouterLink>
  </Button>

  <Button
    asChild
    variant="outline"
    className="border-[#88bf42] text-[#88bf42] text-base md:text-base px-4 md:px-6 py-2 h-12 w-52 sm:w-auto rounded-md hover:bg-[#eaf4d6]"
  >
    <RouterLink to="/services">
      Our Solutions
    </RouterLink>
  </Button>
</div>


                </motion.div>
              </div>
              <div className="lg:w-1/2 w-full relative h-[350px] md:h-[450px] lg:h-[500px] max-w-lg mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full h-full"
                >
                  <AnimatedDiagram />
                </motion.div>
              </div>
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
                <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left">
                  <motion.div
                    variants={itemVariants}
                    className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto md:mx-0"
                  >
                    <span className="text-[#88BF42] text-sm md:text-base font-semibold">About Us</span>
                  </motion.div>
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-2 md:mb-4 leading-tight"
                  >
                    Pioneering the Future of <span className="text-[#88BF42]">AI Solutions</span>
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0"
                  >
                    Thorsignia is dedicated to transforming how businesses operate, engage, and grow. With a deep focus on artificial intelligence and automation, we deliver cutting-edge, intelligent systems tailored to meet real-world challenges.
                  </motion.p>
                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0"
                  >
                    Our expertise spans across AI-powered platforms, smart automation, and customer-centric technologies enabling organizations to save time, convert more leads, and elevate user experiences.
                  </motion.p>
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-8"
                  >
                     <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" />
                      </div>
                      <span className="text-[#0F0326] text-sm md:text-base font-medium">Enterprise Grade</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" />
                      </div>
                      <span className="text-[#0F0326] text-sm md:text-base font-medium">AI-Powered</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" />
                      </div>
                      <span className="text-[#0F0326] text-sm md:text-base font-medium">Smart Solutions</span>
                    </div>
                  </motion.div>
                  <motion.a
                    href="/about" // Example internal link
                    variants={itemVariants}
                    className="mt-6 md:mt-8 w-fit px-6 md:px-8 py-3 md:py-4 bg-[#0F0326] text-white font-semibold rounded-lg hover:bg-[#1A0645] transition-all duration-300 ease-in-out hover:shadow-lg flex items-center space-x-2 group mx-auto md:mx-0"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4 md:gap-6"
                >
                  <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">98%</div>
                    <div className="text-[#0F0326] text-sm md:text-base font-medium">Client Satisfaction</div>
                  </div>
                   <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">50+</div>
                    <div className="text-[#0F0326] text-sm md:text-base font-medium">Enterprise Clients</div>
                  </div>
                  <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">24/7</div>
                    <div className="text-[#0F0326] text-sm md:text-base font-medium">AI Support</div>
                  </div>
                   <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">10+</div>
                    <div className="text-[#0F0326] text-sm md:text-base font-medium">Years Experience</div>
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
                { emoji: '🎙️', title: 'Intelligent Voice Automation', desc: 'Intelligent systems for making or receiving calls with natural conversations powered by AI.', link: '/services/voice-automation' },
                { emoji: '💬', title: 'Social Engagement Automation', desc: 'Automate posting, replies, DMs, and performance analysis across all social channels.', link: '/services/social-automation' },
                { emoji: '🧠', title: 'AI-Powered Lead Intelligence', desc: 'Identify, qualify, and convert potential customers into hot leads with AI-driven insights.', link: '/services/lead-intelligence' },
                { emoji: '🤖', title: 'Conversational AI Chatbots', desc: 'Intelligent chatbots for instant assistance and engagement with your customers.', link: '/services/ai-agents' },
                { emoji: '📊', title: 'Automated Campaign Orchestration', desc: 'Automate advertising campaigns and optimize performance across multiple channels.', link: '/services/campaign-orchestration' },
                { emoji: '🛡️', title: 'AI-Powered Threat Detection', desc: 'Leverage AI to constantly monitor for threats, identify anomalies, and protect your systems.', link: '/services/threat-detection' }
              ].map((service, index) => (
                 <motion.div
                    key={`service-${index}`} variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(136, 191, 66, 0.1)" }}
                    className="bg-white rounded-xl p-6 md:p-8 shadow-sm transition-all duration-300 flex flex-col h-full border border-transparent hover:border-[#88BF42]/20 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-[#88BF42]/5 rounded-bl-full z-0"></div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#88BF42]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 relative z-10 flex-shrink-0">
                      <span className="text-[#88BF42] text-xl md:text-2xl">{service.emoji}</span>
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

        {/* 5. Mini Product Demo Teasers */}
        <ProductDemoSection />

        {/* 6. Case Study Preview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Left side: Case Study Image Link */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                {/* Updated RouterLink path */}
                <RouterLink to="/case-studies/sgf-fab-industries" className="block relative rounded-xl overflow-hidden shadow-xl group">
                  <div className="aspect-video bg-[#F5F8FF] relative">
                    {/* Image src kept, updated alt text */}
                    <img
                      src="/assets/images.png"
                      alt="SGF FAB Industries quality control case study"
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0326]/80 to-transparent p-4 md:p-6">
                      {/* Updated Company Name */}
                      <div className="text-white text-sm md:text-base font-medium">SGF FAB Industries</div>
                    </div>
                  </div>
                </RouterLink>
              </div>

              {/* Right side: Case Study Details */}
              <div className="md:w-1/2 text-center md:text-left">
                {/* Label remains the same */}
                <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
                  <span className="text-[#88BF42] text-sm md:text-base font-semibold">Case Study</span>
                </motion.div>

                {/* Updated Case Study Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-4">AI-Powered Quality <span className="text-[#88BF42]">Control System</span> </h2>

                {/* Updated Description Paragraph */}
                <p className="text-base md:text-lg text-[#696869] mb-4 md:mb-6 max-w-prose mx-auto md:mx-0">
                  Developed a custom computer vision system for quality control in industrial fabrication, resulting in significant reduction in production defects and improved operational efficiency.
                </p>

                {/* Updated Metrics Grid */}
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6 mb-6 text-center md:text-left">
  {/* Metric 1: ROI */}
  <div>
    <div className="text-2xl md:text-3xl font-bold text-[#88BF42] mb-1">285%</div>
    <div className="text-base md:text-lg font-medium text-[#0F0326]">ROI</div>
  </div>

  {/* Metric 2: Timeframe */}
  <div>
    <div className="text-2xl md:text-3xl font-bold text-[#88BF42] mb-1">8 months</div>
    <div className="text-base md:text-lg font-medium text-[#0F0326]">Timeframe</div>
  </div>

  {/* Metric 3: Defect Reduction */}
  <div>
    <div className="text-2xl md:text-3xl font-bold text-[#88BF42] mb-1">Improved</div>
    <div className="text-base md:text-lg font-medium text-[#0F0326]">Defect Reduction</div>
  </div>
</div>


                {/* Updated Button Link */}
                <Button asChild className="bg-[#0F0326] hover:bg-[#1A0645] text-white text-sm md:text-base px-6 md:px-8 py-3 md:py-4 h-auto w-52 rounded-md mx-auto md:mx-0">
                  {/* Updated RouterLink path */}
                  <RouterLink to="/case-studies/sgf-fab-industries">
                  View Full Case Study <ArrowRight className="ml-2 h-3 w-3" /> {/* Assuming ArrowRight icon component exists */}
                  </RouterLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
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
               { featured: false, icon: Award, title: 'Best AI Platform', desc: 'Exceptional performance, scalability, and innovation in AI technology solutions.', footer: 'Tech Innovation Awards', link: '/awards/best-ai-platform' },
               { featured: false, icon: Star, title: 'CX Innovation Award', desc: 'Revolutionizing customer experience through AI-powered automation solutions.', footer: 'CX Leaders Summit', link: '/awards/cx-innovation' },
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
        <section className="py-16 md:py-20 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerChildren} className="text-center mb-12 md:mb-16">
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
          className="py-16 md:py-24 bg-white relative overflow-hidden"
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
      <ChatbotDemo />
    </div>
  
  );
}

export default HomePage;
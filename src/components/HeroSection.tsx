// src/HomePage.jsx (or wherever you put it)
import React, { useEffect, useState, useRef } from 'react';
// Removed next/image import - use <img> tag
// Removed next/link import - use <a> tag
import { motion, AnimatePresence } from 'framer-motion';
// Adjust the import path for your Button component
// This assumes your Button component is in src/components/ui/button
// You might need to adjust this path based on your project structure
import { Button } from "../components/ui/button";
import {
  Play,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
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
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Swiper CSS should be imported globally in your main CSS or entry file
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { clsx } from 'clsx';
// AuroraBackground was imported but not used, leaving it out for simplicity
// import { AuroraBackground } from '@/components/ui/aurora-background';


// Trusted By Logos Data with inline SVG components instead of image paths
const trustedByLogos = [
  { 
    logoUrl: null, 
    altText: "Google Logo", 
    link: "https://google.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Microsoft Logo", 
    link: "https://microsoft.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"/><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Amazon Logo", 
    link: "https://amazon.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.38 18.21a1 1 0 0 1-1.21-.3l-4.24-4.51a1 1 0 0 1 0-1.41l4.25-4.51a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.41L11 12l3.61 3.85a1 1 0 0 1-.23 1.36zm4.83-14.21H4.79A2.79 2.79 0 0 0 2 6.79v10.42A2.79 2.79 0 0 0 4.79 20h14.42A2.79 2.79 0 0 0 22 17.21V6.79A2.79 2.79 0 0 0 19.21 4z" fill="#FF9900"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Meta Logo", 
    link: "https://meta.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#0668E1"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "IBM Logo", 
    link: "https://ibm.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6H3V5h18v1zm0 2H3v1h18V8zm0 3H3v1h18v-1zm0 3H3v1h18v-1zm0 3H3v1h18v-1z" fill="#1F70C1"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Salesforce Logo", 
    link: "https://salesforce.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.3 3C17.1 3 18.6 4 19.3 5.5c.4-.2.8-.2 1.2-.2 1.9 0 3.5 1.6 3.5 3.5 0 1.9-1.6 3.5-3.5 3.5-.3 0-.7-.1-1-.1C18.9 14 17 15.5 14.8 15.5c-1 0-1.8-.3-2.5-.8-.7.7-1.7 1.1-2.7 1.1-1.6 0-2.9-.9-3.6-2.2-.3 0-.5.1-.8.1-2.2 0-4-1.8-4-4 0-1.5.8-2.9 2.1-3.6-.3-.6-.4-1.3-.4-2C2.8 2 4.8 0 7.2 0c1.6 0 3 .9 3.8 2.2.7-.4 1.5-.7 2.4-.7" fill="#00A1E0"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Apple Logo", 
    link: "https://apple.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Oracle Logo", 
    link: "https://oracle.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.05 3H7.95C4.17 3 1.1 6.07 1.1 9.86v4.29c0 3.78 3.07 6.86 6.85 6.86h8.09c3.78 0 6.85-3.07 6.85-6.86V9.86C22.9 6.07 19.83 3 16.05 3zm.15 11.93c0 .7-.57 1.27-1.27 1.27H9.07c-.7 0-1.27-.57-1.27-1.27v-5.4c0-.7.57-1.27 1.27-1.27h5.86c.7 0 1.27.57 1.27 1.27v5.4z" fill="#C74634"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "SAP Logo", 
    link: "https://sap.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.1 12.5H7c.7 0 1.3.1 1.3.9s-.7.9-1.3.9H5.1v-1.8zm0-3.1h1.6c.6 0 1.1.1 1.1.8s-.5.8-1.1.8H5.1v-1.6zm-2.3 6.4h4.5c1.5 0 3.1-.5 3.1-2.4 0-1.2-.7-1.8-1.8-2 .8-.3 1.5-.9 1.5-1.9 0-1.8-1.7-2.3-3.2-2.3H2.8v8.6zm9.5-8.6h2.3v6.3h3.9v2.3h-6.2V7.2zm7.2 0h2.3v8.6h-2.3V7.2z" fill="#0FAAFF"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Google Logo", 
    link: "https://google.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Microsoft Logo", 
    link: "https://microsoft.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"/><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Amazon Logo", 
    link: "https://amazon.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.38 18.21a1 1 0 0 1-1.21-.3l-4.24-4.51a1 1 0 0 1 0-1.41l4.25-4.51a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.41L11 12l3.61 3.85a1 1 0 0 1-.23 1.36zm4.83-14.21H4.79A2.79 2.79 0 0 0 2 6.79v10.42A2.79 2.79 0 0 0 4.79 20h14.42A2.79 2.79 0 0 0 22 17.21V6.79A2.79 2.79 0 0 0 19.21 4z" fill="#FF9900"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Meta Logo", 
    link: "https://meta.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#0668E1"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "IBM Logo", 
    link: "https://ibm.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6H3V5h18v1zm0 2H3v1h18V8zm0 3H3v1h18v-1zm0 3H3v1h18v-1zm0 3H3v1h18v-1z" fill="#1F70C1"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Salesforce Logo", 
    link: "https://salesforce.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.3 3C17.1 3 18.6 4 19.3 5.5c.4-.2.8-.2 1.2-.2 1.9 0 3.5 1.6 3.5 3.5 0 1.9-1.6 3.5-3.5 3.5-.3 0-.7-.1-1-.1C18.9 14 17 15.5 14.8 15.5c-1 0-1.8-.3-2.5-.8-.7.7-1.7 1.1-2.7 1.1-1.6 0-2.9-.9-3.6-2.2-.3 0-.5.1-.8.1-2.2 0-4-1.8-4-4 0-1.5.8-2.9 2.1-3.6-.3-.6-.4-1.3-.4-2C2.8 2 4.8 0 7.2 0c1.6 0 3 .9 3.8 2.2.7-.4 1.5-.7 2.4-.7" fill="#00A1E0"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Apple Logo", 
    link: "https://apple.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "Oracle Logo", 
    link: "https://oracle.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.05 3H7.95C4.17 3 1.1 6.07 1.1 9.86v4.29c0 3.78 3.07 6.86 6.85 6.86h8.09c3.78 0 6.85-3.07 6.85-6.86V9.86C22.9 6.07 19.83 3 16.05 3zm.15 11.93c0 .7-.57 1.27-1.27 1.27H9.07c-.7 0-1.27-.57-1.27-1.27v-5.4c0-.7.57-1.27 1.27-1.27h5.86c.7 0 1.27.57 1.27 1.27v5.4z" fill="#C74634"/></svg>
  },
  { 
    logoUrl: null, 
    altText: "SAP Logo", 
    link: "https://sap.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.1 12.5H7c.7 0 1.3.1 1.3.9s-.7.9-1.3.9H5.1v-1.8zm0-3.1h1.6c.6 0 1.1.1 1.1.8s-.5.8-1.1.8H5.1v-1.6zm-2.3 6.4h4.5c1.5 0 3.1-.5 3.1-2.4 0-1.2-.7-1.8-1.8-2 .8-.3 1.5-.9 1.5-1.9 0-1.8-1.7-2.3-3.2-2.3H2.8v8.6zm9.5-8.6h2.3v6.3h3.9v2.3h-6.2V7.2zm7.2 0h2.3v8.6h-2.3V7.2z" fill="#0FAAFF"/></svg>
  }
];


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

// Animation variants (Already look fine for general responsiveness)
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
      staggerChildren: 0.15, // Slightly reduced stagger for potentially faster reveal on mobile
      delayChildren: 0.1 // Reduced delay
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

// Calculate node positions in a circle (Percentage based is good for responsiveness)
const generateCircularNodes = () => {
  const centerX = 50;
  const centerY = 50;
  const radius = 35; // Radius in percentage
  const totalNodes = 8;

  const nodes = [
    { id: 'center', label: 'AI Core', x: centerX, y: centerY, icon: <Cpu className="h-4 w-4 md:h-6 md:w-6" /> }, // Responsive icon size
  ];

  // Add nodes in a circle
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

// Adjusted node labels and icons (keeping small size for mobile default)
const getNodeLabel = (index: number) => {
  const labels = ['NLP', 'Vision', 'ML', 'Robotics', 'Cloud', 'Security', 'Data', 'Analytics'];
  return labels[index];
};

const getNodeIcon = (index: number) => {
  const icons = [
    <MessageSquare className="h-3 w-3 md:h-5 md:w-5" />, // Responsive icon size
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

const nodes = generateCircularNodes(); // Recalculate nodes with potentially responsive icons

const AnimatedDiagram = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background sparkles (Sizes are already small, positions are random %) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => ( // Reduced sparkle count slightly for potentially better mobile performance
          <div
            key={`sparkle-${i}`}
            className={`absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full sparkle-animation`} // Responsive sparkle size
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: i % 2 === 0 ? '#88BF42' : '#ffffff',
              opacity: 0.6,
              boxShadow: i % 2 === 0
                ? '0 0 8px 1px rgba(136, 191, 66, 0.5)' // Slightly smaller blur/spread
                : '0 0 8px 1px rgba(255, 255, 255, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 ${
            node.id === 'center' ? 'pulse-animation' : ''
          }`}
          style={{
            top: `${node.y}%`,
            left: `${node.x}%`,
          }}
          initial={{ scale: 0.5, opacity: 0 }} // Start smaller
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: node.id === 'center' ? 0.2 : (index * 0.1) + 0.3 // Slightly adjusted delays
          }}
        >
          {/* Responsive Node Size */}
          <div className={`rounded-full flex items-center justify-center ${
            node.id === 'center'
              ? 'bg-[#88BF42] w-14 h-14 md:w-20 md:h-20 shadow-[0_0_20px_rgba(136,191,66,0.4)] md:shadow-[0_0_30px_rgba(136,191,66,0.4)]' // Responsive size and shadow
              : 'bg-white w-10 h-10 md:w-14 md:h-14 shadow-[0_0_15px_rgba(255,255,255,0.2)] md:shadow-[0_0_20px_rgba(255,255,255,0.2)]' // Responsive size and shadow
          }`}>
            <div className={node.id === 'center' ? 'text-white' : 'text-[#0F0326]'}>
              {node.icon} {/* Icon size is handled inside generateCircularNodes */}
            </div>
          </div>
          {/* Node Label - Small text size is fine */}
          <div className="absolute top-full mt-1 md:mt-2 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs font-medium text-white whitespace-nowrap"> {/* Slightly smaller font on mobile */}
            {node.label}
          </div>
        </motion.div>
      ))}

      {/* Rotating ring effect (Sizes are percentage based, will scale with parent) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70%] h-[70%] border border-white/10 rounded-full rotate-animation"></div>
        <div className="absolute w-[85%] h-[85%] border border-white/5 rounded-full rotate-animation-reverse"></div>
      </div>
    </div>
  );
};


const HomePage = () => {
  // State for sticky header (not implemented in provided code, keeping for completeness)
  const [isScrolled, setIsScrolled] = useState(false);
  // State for sticky CTA visibility (not implemented in provided code, keeping for completeness)
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  // Ref for Swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  // Handle scroll event for sticky header and CTA (not implemented in provided code)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show sticky CTA after scrolling past hero section (adjust scroll threshold for mobile)
      if (window.scrollY > (window.innerWidth < 768 ? 400 : 600)) { // Lower threshold on smaller screens
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Add cleanup for event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // State for logo carousel
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  
  // Set up automatic logo rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % trustedByLogos.length);
    }, 2000); // Move to next logo every 2 seconds
    
    return () => clearInterval(interval);
  }, [trustedByLogos.length]);
  
  // Create a rotated version of the logos array starting from currentLogoIndex
  const rotatedLogos = [...trustedByLogos.slice(currentLogoIndex), ...trustedByLogos.slice(0, currentLogoIndex)];
  
  // Create a second row with a different starting position
  const secondRowStartIndex = (currentLogoIndex + Math.floor(trustedByLogos.length / 2)) % trustedByLogos.length;
  const secondRowLogos = [...trustedByLogos.slice(secondRowStartIndex), ...trustedByLogos.slice(0, secondRowStartIndex)];


  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Moved global CSS styles to a separate file (e.g., src/style.css) */}

      {/* Header/Navigation - Sticky on scroll (Not included in snippet, assume responsive elsewhere) */}
      {/* <header className={clsx('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6')}>
         ... header content ...
      </header> */}

      <main className="flex-grow bg-white">
        {/* 1. Hero Section */}
        <section className="relative bg-[#0F0326] text-white overflow-hidden"> {/* Added overflow-hidden */}
          {/* Added Aurora background as per import, wrapped in a div to control its area */}
          {/* <div className="absolute inset-0 z-0">
             <AuroraBackground>

             </AuroraBackground>
          </div> */}

          <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10"> {/* Adjusted padding */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12"> {/* Adjusted gap */}
              {/* Left side - Content */}
              <div className="lg:w-1/2 text-center lg:text-left"> {/* Added text-center on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6"> {/* Adjusted mb */}
                    Automate <br className="hidden md:block"/>
                    Conversations. <br className="hidden md:block"/>
                    <span className="text-[#88BF42]">Accelerate Growth.</span>
                  </h1>

                  <p className="text-base md:text-lg text-white mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"> {/* Adjusted text size, mb, added mx-auto for center text */}
                    Power your business with intelligent voice, chat, and campaign automation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> {/* Centered buttons on mobile */}
                    <Button size="lg" className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto"> {/* Full width on mobile */}
                      Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-[#0F0326] text-[#0F0326] hover:bg-[#0F0326] hover:text-white w-full sm:w-auto"> {/* Full width on mobile */}
                      Our Solutions
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Animated Diagram */}
              {/* Responsive height for the diagram container */}
              <div className="lg:w-1/2 w-full relative h-[350px] md:h-[450px] lg:h-[500px] max-w-lg mx-auto lg:mx-0"> {/* Adjusted and made responsive height, added max-width and mx-auto */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full h-full"
                >
                  <AnimatedDiagram /> {/* AnimatedDiagram component handles its internal responsiveness */}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Trusted By Logos Strip - Moved to separate section below */}

        </section>



        {/* 3. Quick Company Intro (Now Section 2 visually) */}
        <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden"> {/* Changed background slightly */}
          {/* Background decoration (already % based or random, fine) */}
          <div className="absolute inset-0 overflow-hidden">

          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Adjusted amount
              variants={staggerChildren} // Use staggerChildren for the whole section
            >
              {/* Main grid container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Adjusted gap */}
                {/* LEFT COLUMN: About Us Content */}
                <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left"> {/* Adjusted space-y, added text alignment */}
                  <motion.div
                    variants={itemVariants} // Use itemVariants
                    className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 w-fit mx-auto md:mx-0" // Adjusted padding, added mx-auto
                  >
                    <span className="text-[#88BF42] text-sm md:text-base font-semibold">About Us</span> {/* Adjusted text size */}
                  </motion.div>

                  <motion.h2
                    variants={itemVariants} // Use itemVariants
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-2 md:mb-4 leading-tight" // Adjusted text size, mb, leading
                  >
                    Pioneering the Future of <span className="text-[#88BF42]">AI Solutions</span>
                  </motion.h2>

                  <motion.p
                    variants={itemVariants} // Use itemVariants
                    className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0" // Adjusted text size, added max-w-prose, mx-auto
                  >
                    Thorsignia is dedicated to transforming how businesses operate, engage, and grow. With a deep focus on artificial intelligence and automation, we deliver cutting-edge, intelligent systems tailored to meet real-world challenges.
                  </motion.p>

                  <motion.p
                    variants={itemVariants} // Use itemVariants
                    className="text-base md:text-lg text-[#696869] leading-relaxed max-w-prose mx-auto md:mx-0" // Adjusted text size, added max-w-prose, mx-auto
                  >
                    Our expertise spans across AI-powered platforms, smart automation, and customer-centric technologies enabling organizations to save time, convert more leads, and elevate user experiences.
                  </motion.p>

                  <motion.div
                    variants={itemVariants} // Use itemVariants
                    className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-8" // Adjusted justify, mt
                  >
                    {/* Feature points (already responsive) */}
                     <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 flex items-center justify-center flex-shrink-0"> {/* Responsive size, shrink-0 */}
                        <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" /> {/* Responsive icon size */}
                      </div>
                      <span className="text-[#0F0326] text-sm md:text-base font-medium">Enterprise Grade</span> {/* Responsive text size */}
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 flex items-center justify-center flex-shrink-0"> {/* Responsive size */}
                        <Bot className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" /> {/* Responsive icon size */}
                      </div>
                      <span className="text-[#0F0326] text-sm md:text-base font-medium">AI-Powered</span> {/* Responsive text size */}
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 flex items-center justify-center flex-shrink-0"> {/* Responsive size */}
                        <Brain className="w-5 h-5 md:w-6 md:h-6 text-[#88BF42]" /> {/* Responsive icon size */}
                      </div>
                      <span className="text-[#0F0326] text-sm md:text-base font-medium">Smart Solutions</span> {/* Responsive text size */}
                    </div>
                  </motion.div>

                  <motion.a // Changed from button to <a> for potential link functionality
                    href="#" // Replace with actual link
                    variants={itemVariants} // Use itemVariants
                    className="mt-6 md:mt-8 w-fit px-6 md:px-8 py-3 md:py-4 bg-[#0F0326] text-white font-semibold rounded-lg hover:bg-[#1A0645] transition-all duration-300 ease-in-out hover:shadow-lg flex items-center space-x-2 group mx-auto md:mx-0" // Adjusted padding, mt, added mx-auto
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" /> {/* Responsive icon size */}
                  </motion.a>
                </div>

                {/* RIGHT COLUMN: Stats and Features */}
                <motion.div
                  variants={itemVariants} // Use itemVariants
                  className="grid grid-cols-2 gap-4 md:gap-6" // Adjusted gap
                >
                  {/* Stat Cards (already responsive) */}
                  <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"> {/* Adjusted padding, rounded, shadow */}
                    <div className="text-3xl md:text-4xl font-bold text-[#88BF42] mb-1 md:mb-2">98%</div> {/* Adjusted text size, mb */}
                    <div className="text-[#0F0326] text-sm md:text-base font-medium">Client Satisfaction</div> {/* Adjusted text size */}
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

        {/* 4. What We Offer Section (Now Section 3 visually) */}
        <section className="py-16 md:py-20 bg-white"> {/* Adjusted padding */}
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="text-center mb-12 md:mb-16"
            >
              <motion.div
                variants={itemVariants} // Use itemVariants
                className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4" // Adjusted padding/mb
              >
                <span className="text-[#88BF42] text-sm md:text-base font-semibold">What We Offer</span> {/* Adjusted text size */}
              </motion.div>
              <motion.h2
                variants={itemVariants} // Use itemVariants
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-3 md:mb-4"
              >
               Smart AI tools to automate, <span className="text-[#88BF42]">grow your business</span>
              </motion.h2>

              <motion.p
                variants={itemVariants} // Use itemVariants
                className="text-base md:text-lg text-[#696869] max-w-2xl mx-auto"
              >
                Transform your business with AI-powered automation, chatbots, and campaign management.
              </motion.p>
            </motion.div>

            {/* Services Grid (already responsive grid) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {/* Service Card Template */}
              {[
                { emoji: '🎙️', title: 'Intelligent Voice Automation', desc: 'Intelligent systems for making or receiving calls with natural conversations powered by AI.' },
                { emoji: '💬', title: 'Social Engagement Automation', desc: 'Automate posting, replies, DMs, and performance analysis across all social channels.' },
                { emoji: '🧠', title: 'AI-Powered Lead Intelligence', desc: 'Identify, qualify, and convert potential customers into hot leads with AI-driven insights.' },
                { emoji: '🤖', title: 'Conversational AI Agents', desc: 'Intelligent chatbots for instant assistance and engagement with your customers.' },
                { emoji: '📊', title: 'Automated Campaign Orchestration', desc: 'Automate advertising campaigns and optimize performance across multiple channels.' },
              ].map((service, index) => (
                 <motion.div
                    key={`service-${index}`}
                    variants={itemVariants} // Use itemVariants
                    whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(136, 191, 66, 0.1)" }} // Slightly reduced hover effect
                    className="bg-white rounded-xl p-6 md:p-8 shadow-sm transition-all duration-300 flex flex-col h-full border border-transparent hover:border-[#88BF42]/20 relative overflow-hidden" // Adjusted padding, rounded, shadow
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-[#88BF42]/5 rounded-bl-full z-0"></div> {/* Responsive size */}
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#88BF42]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 relative z-10 flex-shrink-0"> {/* Responsive size, mb, shrink-0 */}
                      <span className="text-[#88BF42] text-xl md:text-2xl">{service.emoji}</span> {/* Responsive text size */}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#0F0326] mb-2 md:mb-3 relative z-10">{service.title}</h3> {/* Responsive text size, mb */}
                    <p className="text-[#696869] text-sm md:text-base mb-4 flex-grow relative z-10"> {/* Responsive text size */}
                      {service.desc}
                    </p>
                    <div className="h-1 w-10 md:w-12 bg-[#88BF42] mb-4 transition-all duration-300 group-hover:w-16 md:group-hover:w-20"></div> {/* Responsive width */}
                    <a // Changed from Link to <a>
                      href="/services" // Replace with actual link
                      className="inline-flex items-center text-[#88BF42] font-medium hover:underline relative z-10 group text-sm md:text-base" // Responsive text size
                    >
                      <span className="relative">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88BF42] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" /> {/* Responsive icon size */}
                    </a>
                  </motion.div>
              ))}

              {/* Service CTA */}
              <motion.div
                variants={itemVariants} // Use itemVariants
                whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(15, 3, 38, 0.2)" }} // Slightly reduced hover effect
                className="bg-gradient-to-br from-[#0F0326] to-[#1A0645] rounded-xl p-6 md:p-8 shadow-sm transition-all duration-300 flex flex-col h-full text-white relative overflow-hidden" // Adjusted padding, rounded, shadow
              >
                <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-[#88BF42]/10 rounded-bl-full z-0"></div> {/* Responsive size */}
                <div className="flex-grow flex flex-col items-center justify-center text-center p-4 md:p-6 relative z-10"> {/* Adjusted padding */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to see how it works?</h3> {/* Responsive text size, mb */}
                  <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6"> {/* Responsive text size, mb */}
                    Schedule a personalized demo to see our AI in action.
                  </p>
                  <a
  href="/contact"
  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#88BF42] hover:bg-[#88BF42]/90 text-white text-sm md:text-base px-6 md:px-8 py-3 md:py-4 h-auto rounded-md"
>
  Book a Demo
</a>
                </div>

                {/* Decorative elements (already small/fixed size, fine) */}
                <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#88BF42]/50"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-[#88BF42]/30"></div>
                <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-[#88BF42]/20"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* 2. Trusted By Logos Section - Now before Quick Intro */}
        <motion.section
            className="py-16 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {/* This div limits width for centered content like title/description */}
            <div className="container mx-auto px-4">
                <motion.div variants={itemVariants} className="text-center mb-12">
                <motion.div
                  variants={fadeIn}
                  className="inline-block bg-[#88BF42]/10 rounded-full px-6 py-2 mb-6"
                >
                  <span className="text-[#88BF42] font-semibold">Trusted By</span>
                </motion.div>


                    <h2 className="text-2xl md:text-3xl font-text-3xl md:text-4xl font-bold text-[#0F0326] mb-4 text-gray-900 dark:text-white">Powering Success <span className="text-[#88BF42]">Across Industries  </span></h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
                      Join thousands of companies using our AI technology to transform their business
                    </p>
                </motion.div>
            </div> {/* Close the container div here */}

            {/* This div will contain the logo carousel and span full width */}
            <div className="overflow-hidden py-4 w-full px-4 md:px-6 lg:px-8">
                {/* First row of logos */}
                <div className="flex justify-center gap-4 transition-all duration-500 ease-in-out">
                    {rotatedLogos.slice(0, 6).map((logo, index) => (
                        <div
                            key={`row1-${index}`}
                            className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center w-36 h-20 md:w-40 md:h-24 mx-1 transition-all duration-300 hover:shadow-lg hover:border-[#88bf42] dark:hover:border-[#88bf42] hover:scale-105 transform"
                        >
                            <a href={logo.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="transform scale-[2.5]">
                                        {logo.svg}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Second row of logos */}
                <div className="flex justify-center gap-4 mt-8 transition-all duration-500 ease-in-out">
                    {secondRowLogos.slice(0, 6).map((logo, index) => (
                        <div
                            key={`row2-${index}`}
                            className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm flex-shrink-0 flex items-center justify-center w-36 h-20 md:w-40 md:h-24 mx-1 transition-all duration-300 hover:shadow-lg hover:border-[#88bf42] dark:hover:border-[#88bf42] hover:scale-105 transform"
                        >
                            <a href={logo.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="transform scale-[2.5]">
                                        {logo.svg}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>


        </motion.section>


        {/* 5. Mini Product Demo Teasers (Now Section 4 visually) */}
        <section className="py-16 md:py-20 bg-white text-gray-900"> {/* Adjusted padding */}
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="text-center mb-12 md:mb-16"
            >
              <motion.div
                  variants={itemVariants} // Use itemVariants
                  className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4"
                >
                  <span className="text-[#88BF42] text-sm md:text-base font-semibold">Product Demos</span> {/* Adjusted text size */}
                </motion.div>

              <motion.h2
                variants={itemVariants} // Use itemVariants
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
              >
                See Our <span className="text-[#88BF42]">AI in Action</span>
              </motion.h2>

              <motion.p
                variants={itemVariants} // Use itemVariants
                className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Watch our product demos to see how our AI solutions work in real-world scenarios.
              </motion.p>
            </motion.div>

            {/* Video Demo Cards (already responsive grid) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {/* Demo Card Template */}
              {[
                { title: 'AI Voice Agent in Action', desc: 'See how our AI voice agents handle customer inquiries naturally and efficiently.', thumb: '/images/ai-voice-demo.jpg', time: '2:45' },
                { title: 'Lead Capture to Call Demo', desc: 'Watch our AI automatically qualify leads and initiate follow-up calls.', thumb: '/images/lead-capture-demo.jpg', time: '3:12' },
                { title: 'How Campaign Automation Works', desc: 'Learn how our AI optimizes ad campaigns for maximum performance.', thumb: '/images/campaign-automation-demo.jpg', time: '4:05' },
              ].map((demo, index) => (
                <motion.div
                    key={`demo-${index}`}
                    variants={itemVariants} // Use itemVariants
                    className="bg-white rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="relative group cursor-pointer">
                      <div className="h-40 md:h-48 relative overflow-hidden"> {/* Responsive height */}
                         {/* Changed from Image to <img> */}
                        <img
                          src={demo.thumb}
                          alt={demo.title}
                          style={{
                             position: 'absolute',
                             top: 0,
                             left: 0,
                             width: '100%',
                             height: '100%',
                             objectFit: 'cover',
                          }}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Play button overlay (size okay, scales visually with card) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#88BF42] flex items-center justify-center"> {/* Responsive size */}
                          <Play className="h-7 w-7 md:h-8 md:w-8 text-white ml-1" /> {/* Responsive icon size */}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:p-6"> {/* Adjusted padding */}
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{demo.title}</h3> {/* Responsive text size, mb */}
                      <p className="text-gray-700 text-sm mb-3 md:mb-4"> {/* Responsive text size, mb */}
                        {demo.desc}
                      </p>
                      <div className="flex items-center text-[#88BF42] mt-auto text-sm md:text-base"> {/* Responsive text size */}
                        <span className="font-medium">{demo.time}</span>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* 6. Case Study Preview (Now Section 5 visually) */}
        <section className="py-16 md:py-20 bg-white"> {/* Adjusted padding */}
          <div className="container mx-auto px-4">
            {/* No section header here in original, keeping it that way */}

            {/* Case Study Preview (already responsive flex/grid) */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"> {/* Adjusted gap */}
              {/* Left side - Image */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <div className="aspect-video bg-[#F5F8FF] relative">
                    {/* Changed from Image to <img> */}
                    <img
                        src="/case.jpeg"
                        alt="Skyline Real Estate Group case study"
                        style={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           objectFit: 'cover',
                        }}
                        // removed sizes and priority props
                    />
                    {/* Brand overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0326]/80 to-transparent p-4 md:p-6"> {/* Adjusted padding, gradient opacity */}
                      <div className="text-white text-sm md:text-base font-medium"> {/* Responsive text size */}
                        Skyline Real Estate Group
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="md:w-1/2 text-center md:text-left"> {/* Added text alignment */}
              <motion.div
                  variants={itemVariants} // Use itemVariants
                  className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4"
                >
                  <span className="text-[#88BF42] text-sm md:text-base font-semibold">Case Study</span>
                </motion.div>


                <h2 className="text-2xl md:text-3xl font-bold text-[#0F0326] mb-2 md:mb-3"> {/* Responsive text size, mb */}
                  Increasing qualified leads by 200% in 30 days
                </h2>

                <p className="text-base md:text-lg text-[#696869] mb-4 md:mb-6 max-w-prose mx-auto md:mx-0"> {/* Responsive text size, mb, max-width, mx-auto */}
                  Thorsignia helped a real estate firm automate their lead qualification process, resulting in a 3x increase in high-quality leads while reducing response time from hours to minutes.
                </p>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-4 md:mb-8 justify-items-center md:justify-items-start"> {/* Adjusted gap, added justify-items */}
                  <div className="text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-[#88BF42]">200%</div>
                    <div className="text-[10px] md:text-xs text-[#696869]">Increase in qualified leads</div> {/* Responsive text size */}
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-[#88BF42]">65%</div>
                    <div className="text-[10px] md:text-xs text-[#696869]">Reduction in response time</div> {/* Responsive text size */}
                  </div>

                  <div className="text-center sm:text-left col-span-3 sm:col-span-1"> {/* Ensure it wraps correctly on small screens */}
                    <div className="text-2xl md:text-3xl font-bold text-[#88BF42]">$2.1M</div>
                    <div className="text-[10px] md:text-xs text-[#696869]">Additional revenue</div> {/* Responsive text size */}
                  </div>
                </div>

                <Button className="bg-[#0F0326] hover:bg-[#1A0645] text-white text-sm md:text-base px-6 md:px-8 py-3 md:py-4 h-auto rounded-md mx-auto md:mx-0"> {/* Responsive text size, padding, height, added mx-auto */}
                  View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Awards Section (Now Section 6 visually) */}
        <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden"> {/* Adjusted padding, background */}
          {/* Animated background elements (already % based or random, fine) */}
          <div className="absolute inset-0 overflow-hidden">

          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="max-w-7xl mx-auto"
            >
              {/* Section Header */}
              <div className="text-center mb-10 md:mb-16"> {/* Adjusted mb */}
                <motion.div
                  variants={itemVariants} // Use itemVariants
                  className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4"
                >
                  <span className="text-[#88BF42] text-sm md:text-base font-semibold">Industry Recognition</span>
                </motion.div>
                <motion.h2
                  variants={itemVariants} // Use itemVariants
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] mb-3 md:mb-4 leading-tight"
                >
                  Award-Winning
                  <span className="text-[#88BF42]"> Excellence in AI</span>
                </motion.h2>
                <motion.p
                  variants={itemVariants} // Use itemVariants
                  className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4"
                >
                  Our commitment to innovation and excellence has been recognized by leading industry organizations worldwide.
                </motion.p>
              </div>

              {/* Awards Grid (already responsive grid) */}
              <motion.div
                variants={staggerChildren}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              >
                {/* Award Card Template */}
                {[
                   { featured: true, icon: Trophy, title: 'World Business Conclave Award', desc: 'Outstanding innovation in AI solutions and transformative impact on enterprise operations.', footer: '2025 Winner', linkText: 'View Details' },
                   { featured: false, icon: Award, title: 'Best AI Platform', desc: 'Exceptional performance, scalability, and innovation in AI technology solutions.', footer: 'Tech Innovation Awards' },
                   { featured: false, icon: Star, title: 'CX Innovation Award', desc: 'Revolutionizing customer experience through AI-powered automation solutions.', footer: 'CX Leaders Summit' },
                   { featured: false, icon: Medal, title: 'Enterprise Tech Leader', desc: 'Leadership in enterprise AI solutions and technological advancement.', footer: 'Enterprise Awards' },
                ].map((award, index) => (
                   <motion.div
                      key={`award-${index}`}
                      variants={itemVariants} // Use itemVariants
                      whileHover={{ y: -5 }} // Slightly reduced hover effect
                      className={clsx(
                          "rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border relative overflow-hidden", // Adjusted padding, rounded, shadow
                          award.featured
                              ? 'bg-gradient-to-br from-white to-[#88BF42]/5 border-2 border-[#88BF42] shadow-xl hover:shadow-2xl col-span-1 md:col-span-2 lg:col-span-1' // Responsive featured span
                              : 'bg-white border-gray-100 group'
                      )}
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#88BF42]/5 rounded-full blur-xl transform translate-x-12 -translate-y-12"></div> {/* Responsive size, blur, translate */}
                      {award.featured && (
                          <div className="absolute -top-2 -right-2 bg-[#88BF42] text-white px-3 py-0.5 text-xs md:text-sm font-medium rounded-bl-lg md:rounded-bl-xl z-10"> {/* Responsive padding, text size, rounded */}
                            Featured
                          </div>
                      )}

                      <div className="relative z-10">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#88BF42]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform flex-shrink-0"> {/* Responsive size, mb, shrink-0 */}
                          <award.icon className="w-6 h-6 md:w-8 md:h-8 text-[#88BF42]" /> {/* Responsive icon size */}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-[#0F0326] mb-2 md:mb-3">{award.title}</h3> {/* Responsive text size, mb */}
                        <p className="text-gray-600 text-sm mb-4"> {/* Responsive text size */}
                          {award.desc}
                        </p>
                        <div className="flex items-center justify-between text-sm md:text-base"> {/* Responsive text size */}
                            <span className={clsx("font-medium", award.featured ? 'text-[#0F0326]/80' : 'text-[#88BF42]')}>{award.footer}</span> {/* Adjusted text color */}
                            {award.linkText && (
                                <a href="#" className="flex items-center text-[#88BF42] group-hover:translate-x-1 transition-transform"> {/* Changed Link to <a>, removed passHref */}
                                    <span className="text-sm font-medium mr-1">{award.linkText}</span>
                                    <ArrowRight className="w-3 h-3 md:w-4 h-4" /> {/* Responsive icon size */}
                                </a>
                            )}
                        </div>
                      </div>
                    </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 8. Testimonials Strip (Now Section 7 visually) */}
        <section className="py-16 md:py-20 bg-white text-gray-900"> {/* Adjusted padding */}
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="text-center mb-12 md:mb-16"
            >
              <motion.div
                  variants={itemVariants} // Use itemVariants
                  className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4"
                >
                  <span className="text-[#88BF42] text-sm md:text-base font-semibold">Testimonials</span>
                </motion.div>

              <motion.h2
                variants={itemVariants} // Use itemVariants
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
              >
                What Our <span className="text-[#88BF42]">Clients Say</span>
              </motion.h2>

              <motion.p
                variants={itemVariants} // Use itemVariants
                className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Don't just take our word for it. Hear from businesses who have transformed their operations with Thorsignia AI.
              </motion.p>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="max-w-5xl mx-auto relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20} // Reduced space
                slidesPerView={1}
                navigation={{
                  prevEl: '.testimonial-prev',
                  nextEl: '.testimonial-next',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }} // Disable on interaction false
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30, // Restore space on larger screens
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="testimonials-swiper mt-6 md:mt-8 pb-10 md:pb-12" // Adjusted mt, pb
                onSwiper={(swiper) => swiperRef.current = swiper}
              >
                {testimonials.map((testimonial, index) => ( // Used testimonial data array
                   <SwiperSlide key={`testimonial-${index}`}>
                      <div className="bg-gray-50 rounded-xl p-6 md:p-8 relative shadow-md border border-gray-100 h-full flex flex-col"> {/* Adjusted padding, rounded, shadow, added flex-col */}
                        <div className="text-2xl md:text-3xl text-[#88BF42] mb-3 md:mb-4">❝</div> {/* Responsive text size, mb */}

                        <p className="text-gray-700 italic text-sm md:text-base mb-6 md:mb-8 flex-grow"> {/* Responsive text size, mb, flex-grow */}
                         {testimonial.quote}
                        </p>

                        <div className="flex items-center mt-auto"> {/* mt-auto pushes this to the bottom */}
                          {/* Placeholder for actual client image */}
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#88BF42]/10 mr-3 md:mr-4 flex items-center justify-center flex-shrink-0"> {/* Responsive size, mr, shrink-0 */}
                            <span className="text-sm text-[#88BF42]">{testimonial.name.split(' ').map(n => n[0]).join('')}</span> {/* Initials */}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm md:text-base">{testimonial.name}</div> {/* Responsive text size */}
                            <div className="text-[#88BF42] text-xs md:text-sm">{testimonial.position}</div> {/* Responsive text size */}
                          </div>
                        </div>
                      </div>
                   </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation buttons and CTA button */}
              <div className="mt-6 md:mt-8 flex flex-col items-center"> {/* Adjusted mt */}
                <div className="flex justify-center gap-3 md:gap-4 mb-4 md:mb-6"> {/* Adjusted gap, mb */}
                  <button
                    className="testimonial-prev w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#88BF42] hover:bg-[#88BF42] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" // Responsive size, added disabled styles
                    aria-label="Previous testimonial"
                    onClick={() => swiperRef.current?.slidePrev()} // Added click handler
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" /> {/* Responsive icon size */}
                  </button>
                  <button
                     className="testimonial-next w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#88BF42] hover:bg-[#88BF42] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" // Responsive size, added disabled styles
                     aria-label="Next testimonial"
                     onClick={() => swiperRef.current?.slideNext()} // Added click handler
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" /> {/* Responsive icon size */}
                  </button>
                </div>

                {/* CTA Button - Removed the duplicate from here, using the one in the CTA section */}

              </div>
            </div>
          </div>
        </section>

        {/* 9. Call-to-Action Section (Now Section 8 visually) */}
        <motion.section
          className="py-16 md:py-24 bg-white relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren} // Changed to staggerChildren as it applies to the whole section content
        >
          {/* Animated Background Circles (size and position already random/%) */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Reduced circle count slightly for potential performance */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`cta-circle-${i}`}
                className="absolute rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.1, 0.05], // Reduced max opacity
                  y: [0, -10, 0] // Reduced vertical movement
                }}
                transition={{
                  duration: 4, // Slightly longer duration
                  repeat: Infinity,
                  delay: i * 0.3, // Adjusted delay
                  ease: "easeInOut"
                }}
                style={{
                  width: `${Math.random() * 20 + 10}px`, // Smaller size range
                  height: `${Math.random() * 20 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: i % 2 === 0 ? '#88BF42' : '#0F0326',
                  filter: 'blur(0.5px)', // Slight blur
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 text-center relative z-20">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#0F0326]"
            >
              Ready to Transform Your Business with <span className="text-[#88BF42]">AI</span>?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-600"
            >
              Join the AI revolution and stay ahead of the competition with our cutting-edge solutions.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              <a href="/contact"> {/* Changed Link to <a>, removed passHref */}
                <Button className="bg-[#88bf42] hover:bg-[#7aad3a] text-white text-base md:text-lg px-6 md:px-8 py-3 h-auto rounded-md">
                  Get Started Today
                </Button>
              </a>
               <a href="/contact#consultation"> {/* Changed Link to <a>, removed passHref */}
                <Button
                  variant="outline"
                  className="border-[#88bf42] text-[#88bf42] text-base md:text-lg px-6 md:px-8 py-3 h-auto rounded-md hover:bg-[#eaf4d6]"
                >
                  Schedule a Consultation
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Sticky CTA Button (commented out in original, leaving it out) */}
      {/* <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50"
          >
             <Button size="lg" className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white rounded-full shadow-lg">
               Request Demo
             </Button>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}

export default HomePage;
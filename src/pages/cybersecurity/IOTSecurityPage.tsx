import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
const IOTSecurityPage = () => {
  useEffect(() => {
    document.title = "IoT Security | ThorSignia";
  }, []);
  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const deviceCount = 24;

  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-8 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-[10%] w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#88bf42]/5"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#0f0326]/5"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

             {/* Mobile-only tag line - Appears FIRST on mobile due to order-1, hidden on desktop */}
             <motion.div
               initial="initial"
               animate="animate"
               variants={fadeIn}
               className="lg:hidden order-1 w-full flex justify-center mb-8"
             >
               <div className="inline-block px-4 py-1.5 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
                 Smart Device Security
               </div>
             </motion.div>

            {/* IoT Security Dashboard Graphic - Appears SECOND on mobile (order-2) and SECOND on desktop (lg:order-2) */}
            {/* This single div will handle both mobile and desktop views */}
            {/* Removed the old "Mobile IoT Security Dashboard" div */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="order-2 lg:order-2 w-full lg:w-1/2 max-w-sm lg:max-w-none mx-auto lg:mx-0 mb-8 lg:mb-0"
            >
              <div className="relative">

                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#88bf42] to-[#0f0326] opacity-30 blur-md"></div>

                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 p-6 md:p-8">
                  <div className="flex items-center mb-6">

                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#88bf42]/10 rounded-full flex items-center justify-center mr-3 md:mr-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>

                    <h3 className="font-poppins font-bold text-lg md:text-xl text-[#0f0326]">IoT Security Dashboard</h3>
                  </div>

                  <div className="relative">
                    {/* Central hub with connected devices visualization */}

                    <div className="flex justify-center mb-6 md:mb-8">
                      <motion.div
                         // Adjusted size responsiveness
                        className="relative w-20 h-20 md:w-24 md:h-24 bg-[#0f0326] rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold z-10" // Adjusted text size responsiveness
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-center">SECURITY<br/>HUB</div>
                        <motion.div
                          className="absolute w-full h-full rounded-full border-4 border-[#88bf42]/30"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <motion.div
                        className="bg-gray-50 rounded-lg p-3 md:p-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center mb-2">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#88bf42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <span className="font-inter font-medium text-sm md:text-base">Devices Monitored</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="text-2xl md:text-3xl font-bold text-[#0f0326]">127</span>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Secure</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-gray-50 rounded-lg p-3 md:p-4"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center mb-2">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#88bf42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="font-inter font-medium text-sm md:text-base">Vulnerabilities</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="text-2xl md:text-3xl font-bold text-[#0f0326]">3</span>
                          <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Attention</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-gray-50 rounded-lg p-3 md:p-4" 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-center mb-2">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#88bf42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span className="font-inter font-medium text-sm md:text-base">Security Score</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="text-2xl md:text-3xl font-bold text-[#0f0326]">92%</span>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Excellent</span>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-gray-50 rounded-lg p-3 md:p-4" 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="flex items-center mb-2">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#88bf42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-inter font-medium text-sm md:text-base">Last Scan</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="text-sm md:text-lg font-bold text-[#0f0326]">2 hours ago</span>
                          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Active</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Main Text Content (Desktop Tagline, H1, P, Button) - Appears THIRD on mobile (order-3) and FIRST on desktop (lg:order-1) */}
            {/* Takes up half width on desktop */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="order-3 lg:order-1 w-full lg:w-1/2 text-center lg:text-left" // Corrected classes: order-3, lg:order-1, w-full, lg:w-1/2, mt-8 for mobile space, lg:mt-0 for no space on desktop
            >
              {/* Desktop-only tag line (hidden on mobile) - Moved inside this block */}
              <div className="hidden lg:inline-block px-3 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
                <span className="text-[#88bf42] font-medium text-sm">Smart Device Security</span>
              </div>

              <h1 className="font-poppins text-4xl md:text-6xl font-bold text-[#0f0326] mb-6 leading-tight">
                <span className="text-[#88bf42]">IoT/OT</span> Security Solutions
              </h1>
              <p className="font-inter text-[#696869] mb-8 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Comprehensive security for connected devices and operational technology in the age of Industry 4.0 and smart systems.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 justify-center lg:justify-start w-full">
                <Button
                  size="lg"
                  className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg"
                  asChild
                >
                  <RouterLink
                    to="/contact"
                    className="flex items-center justify-center"
                  >
                    Secure Your IoT Ecosystem <ArrowRight className="ml-2 h-5 w-5" />
                  </RouterLink>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f0326] mb-6">
              Comprehensive <span className="text-[#88bf42]">IoT Security</span> Services
            </h2>
            <p className="font-inter text-[#696869] max-w-2xl mx-auto text-pretty leading-relaxed">
              Our IoT/OT security solutions protect your connected devices and operational technology across various industries and environments.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "IoT Security Assessment",
                description: "Comprehensive evaluation of IoT devices, networks, and ecosystems to identify security vulnerabilities and risks.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "OT Network Security",
                description: "Secure operational technology networks with specialized solutions for industrial control systems and SCADA environments.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )
              },
              {
                title: "Device Security Testing",
                description: "In-depth security testing of individual IoT devices, including firmware analysis, communication protocols, and hardware security.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Smart Environment Security",
                description: "Specialized security solutions for smart homes, buildings, cities, and other connected environments.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                title: "Industrial IoT Security",
                description: "Specialized security solutions for industrial IoT deployments, manufacturing environments, and critical infrastructure.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Security Monitoring & Response",
                description: "24/7 monitoring of IoT environments with real-time threat detection and incident response capabilities.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 hover:border-[#88bf42]/30 group h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#88bf42]/20 to-[#88bf42]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[#88bf42]/30 group-hover:to-[#88bf42]/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-[#0f0326] mb-3 group-hover:text-[#88bf42] transition-colors duration-300 text-balance">{service.title}</h3>
                  <p className="font-inter text-sm text-[#696869] text-pretty leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f0326] mb-6">
              IoT Security <span className="text-[#88bf42]">By Industry</span>
            </h2>
            <p className="font-inter text-[#696869] max-w-3xl mx-auto text-base md:text-lg text-pretty leading-relaxed">
              We provide specialized IoT security solutions tailored to the unique requirements of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare IoT",
                description: "Secure medical devices, patient monitoring systems, and healthcare infrastructure with specialized IoT security solutions.",
                icon: "🏥"
              },
              {
                title: "Smart Manufacturing",
                description: "Protect industrial IoT devices, manufacturing control systems, and production environments against cyber threats.",
                icon: "🏭"
              },
              {
                title: "Energy & Utilities",
                description: "Secure critical infrastructure, grid systems, and utility networks with comprehensive IoT/OT security solutions.",
                icon: "⚡"
              },
              {
                title: "Smart Buildings",
                description: "Protect building automation systems, access controls, and connected infrastructure in commercial real estate.",
                icon: "🏢"
              },
              {
                title: "Smart Cities",
                description: "Secure urban IoT deployments including traffic systems, public safety networks, and municipal infrastructure.",
                icon: "🌆"
              },
              {
                title: "Connected Vehicles",
                description: "Protect vehicle communications, telematics systems, and autonomous vehicle technology with specialized security.",
                icon: "🚗"
              }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#88bf42]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#88bf42]/10 flex items-center justify-center text-3xl mr-4 group-hover:bg-[#88bf42]/20 transition-all duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0f0326] group-hover:text-[#88bf42] transition-colors duration-300">{industry.title}</h3>
                </div>
                <p className="text-[#696869] text-sm md:text-base text-pretty leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#0f0326] to-[#1a0845]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 overflow-hidden">
              <svg className="absolute h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.circle
                    key={`circle-${i}`}
                    cx="50"
                    cy="50"
                    r={10 + i * 10}
                    fill="none"
                    stroke="#88bf42"
                    strokeWidth="0.2"
                    strokeDasharray="0.5 0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  />
                ))}
              </svg>
            </div>

            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3 w-full">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-poppins text-xl md:text-2xl font-bold text-white mb-4 text-center md:text-left text-balance"
                  >
                    Ready to Secure Your <span className="text-[#88bf42]">IoT Ecosystem</span>?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-inter text-gray-300 text-sm sm:text-base text-center md:text-left text-pretty leading-relaxed"
                  >
                    Contact our IoT security experts today to learn how we can protect your connected devices and operational technology infrastructure.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:w-1/3 w-full flex justify-center md:justify-end"
                >
                   <Button
  size="lg" // This prop might also influence padding/font size depending on the Button component.
           // You might not even need it if you're overriding everything with utility classes.
  className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg" // Increased height to h-14, text to text-lg
  asChild
>
  <RouterLink
    to="/contact"
    className="flex items-center justify-center" // Add flex utilities to RouterLink for better icon alignment
  >
   Get a Security Assessment <ArrowRight className="ml-2 h-5 w-5" /> {/* Corrected icon height and width */}
  </RouterLink>
</Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default IOTSecurityPage;
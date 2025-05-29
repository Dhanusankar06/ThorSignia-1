import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

const OffensiveSecurityPage = () => {
  // Custom testimonials for Offensive Security (Keeping for completeness)
  const offensiveSecurityTestimonials = [
    {
      id: 1,
      quote: "Their offensive security team found vulnerabilities that our automated tools completely missed. The detailed remediation steps were incredibly valuable.",
      name: "Alex Reynolds",
      title: "CISO",
      company: "TechNova Industries",
      image: "/images/testimonials/alex.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "The ethical hacking assessment was eye-opening. They identified critical attack vectors we hadn't considered and helped us build a more robust security posture.",
      name: "Sophia Chen",
      title: "IT Security Director",
      company: "Datashield Corp",
      image: "/images/testimonials/sophia.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with their offensive security team gave us confidence in our defenses. They were thorough, professional, and truly understood our business needs.",
      name: "Marcus Johnson",
      title: "CTO",
      company: "SecureFinance",
      image: "/images/testimonials/marcus.jpg",
      rating: 5
    }
  ];

  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const features = [
    {
      title: "Ethical Hacking",
      description: "Our expert hackers identify vulnerabilities in your systems using the same techniques as malicious actors.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Advanced Persistent Threat Simulation",
      description: "Experience how a determined attacker would target your organization over an extended period.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Social Engineering Assessment",
      description: "Test your employees' security awareness with sophisticated social engineering attacks.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Source Code Review",
      description: "Identify security vulnerabilities in your application source code before deployment.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Physical Security Assessment",
      description: "Evaluate the physical security controls protecting your critical IT assets.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    {
      title: "Security Training",
      description: "Empower your development team with training to write more secure code.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  // Calculate animation range based on content height (rough estimate)
  const terminalLineHeight = 18; // Adjust based on font size and line spacing
  const numTerminalLines = 19; // Count of <p> tags in the terminal graphic
  const terminalContentHeight = numTerminalLines * terminalLineHeight; // Total height if not clipped

  // Mobile height and range (adjust if needed based on visual check)
  const mobileTerminalHeight = 160;
  const mobileAnimationRange = [0, -(terminalContentHeight - mobileTerminalHeight)]; // Scroll up by content height minus visible height

  // Desktop height and range (adjust if needed)
  const desktopTerminalHeight = 200;
  const desktopAnimationRange = [0, -(terminalContentHeight - desktopTerminalHeight)]; // Scroll up


  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-[#88bf42]/5"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#0f0326]/5"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Mobile-only Tagline - Appears FIRST on mobile due to order-1, hidden on desktop */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="lg:hidden order-1 w-full flex justify-center mb-8" // Added order-1, full width, center align, mb
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
                Advanced Security Testing
              </div>
            </motion.div>

            {/* Ethical Hacking Terminal Graphic - Appears SECOND on mobile (order-2) and SECOND on desktop (lg:order-2) */}
            {/* Now visible on desktop, takes up half width */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.2 }} // Add animation delay for appearing
              className="order-2 lg:order-2 w-full lg:w-1/2 max-w-sm lg:max-w-none mx-auto lg:mx-0 mb-8 lg:mb-0" // Corrected classes: order-2, lg:order-2, w-full, lg:w-1/2, max-w/mx-auto for mobile, removed lg overrides, mb-8 for mobile space, lg:mb-0 for no space on desktop
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#88bf42] to-[#0f0326] opacity-30 blur-md"></div>
                {/* Made aspect ratio responsive */}
                <div className="relative bg-[#0f0326] rounded-2xl overflow-hidden shadow-xl border border-[#0f0326]/10 p-6 md:p-8 aspect-video"> {/* Added md:p-8 for desktop padding */}
                  <div className="flex items-center justify-between mb-4 md:mb-6"> {/* Adjusted spacing */}
                    <div className="flex items-center">
                      {/* Adjusted icon size responsively */}
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#88bf42]/20 rounded-full flex items-center justify-center mr-3 md:mr-4"> {/* Adjusted size and margin */}
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Adjusted size */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                       {/* Adjusted text size */}
                      <h3 className="text-lg md:text-xl font-bold text-white">Ethical Hacking Terminal</h3> {/* Adjusted text size */}
                    </div>
                    {/* Dot size remains consistent */}
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                   {/* Made text size and container height responsive */}
                  <div className="font-mono text-xs md:text-sm text-green-500 h-[160px] md:h-[200px] overflow-hidden"> {/* Adjusted text size and height */}
                    <motion.div
                      initial={{ y: 0 }}
                       // Used ternary to apply different animation range based on screen size
                      animate={{ y: window.innerWidth < 768 ? mobileAnimationRange : desktopAnimationRange }} // Assuming md breakpoint is 768px
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "reverse"
                      }}
                    >
                      <p>$ initiating offensive security assessment...</p>
                      <p className="mt-1 md:mt-2">$ scanning target network: 192.168.1.0/24</p> {/* Adjusted spacing */}
                      <p>$ discovered hosts: 27</p>
                      <p className="mt-1 md:mt-2">$ running port scan on discovered hosts...</p> {/* Adjusted spacing */}
                      <p>$ scanning for common vulnerabilities...</p>
                      <p className="mt-1 md:mt-2 text-yellow-400">$ discovered: open ssh port on 192.168.1.45</p> {/* Adjusted spacing */}
                      <p className="text-yellow-400">$ discovered: outdated web server on 192.168.1.23</p>
                      <p className="text-red-400">$ discovered: vulnerable login form on http://target-app/login</p>
                      <p className="mt-1 md:mt-2">$ attempting login bypass on vulnerable form...</p> {/* Adjusted spacing */}
                      <p className="text-red-400">$ success! admin access achieved</p>
                      <p className="mt-1 md:mt-2">$ enumerating file permissions...</p> {/* Adjusted spacing */}
                      <p className="text-yellow-400">$ discovered: sensitive configuration files</p>
                      <p className="mt-1 md:mt-2">$ checking security controls...</p> {/* Adjusted spacing */}
                      <p className="text-red-400">$ discovered: missing WAF protection</p>
                      <p className="text-red-400">$ discovered: outdated SSL certificates</p>
                      <p className="mt-1 md:mt-2">$ generating report...</p> {/* Adjusted spacing */}
                      <p className="mt-1 md:mt-2 text-white">$ assessment summary:</p> {/* Adjusted spacing */}
                      <p className="text-red-400">$ critical vulnerabilities: 3</p>
                      <p className="text-yellow-400">$ high vulnerabilities: 7</p>
                      <p className="text-green-400">$ medium vulnerabilities: 12</p>
                      <p className="mt-1 md:mt-2">$ sending findings to security team...</p> {/* Adjusted spacing */}
                      {/* Add some buffer lines so the animation doesn't scroll past the end immediately */}
                       <p className="mt-2"></p>
                       <p></p>
                       <p></p>
                       <p></p>
                       <p></p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Main Text Content (Desktop Tagline, H1, P, Button) - Appears THIRD on mobile (order-3), FIRST on desktop (lg:order-1) */}
            {/* Takes up half width on desktop */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="order-3 lg:order-1 w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0" // Corrected classes: order-3, lg:order-1, w-full, lg:w-1/2, mt-8 for mobile space, lg:mt-0 for no space on desktop
            >
              {/* Desktop-only tag line (hidden on mobile) */}
              <div className="hidden lg:inline-block px-3 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
                <span className="text-[#88bf42] font-medium text-sm">Advanced Security Testing</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-[#0f0326] mb-6 leading-tight">
                <span className="text-[#88bf42]">Offensive</span> Security Services
              </h1>
              <p className="text-xl text-[#696869] mb-8 max-w-xl mx-auto lg:mx-0">
                Proactively identify and address security vulnerabilities through advanced ethical hacking techniques and comprehensive red team operations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg"
                  asChild
                >
                  <RouterLink
                    to="/contact"
                    className="flex items-center justify-center"
                  >
                    Schedule an Ethical Hacking Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </RouterLink>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
              <span className="text-[#88bf42] font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f0326] mb-6">
              Comprehensive <span className="text-[#88bf42]">Offensive Security</span> Services
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-xl">
              Our offensive security services help you identify and address vulnerabilities before malicious actors can exploit them.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#88bf42]/10 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f0326] mb-4">{feature.title}</h3>
                <p className="text-[#696869]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0326] to-[#1a0845]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Test Your Defenses?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl mb-10">
              Our offensive security experts are ready to help you identify and address vulnerabilities in your systems before malicious actors can exploit them.
            </p>
            <Button
              size="lg"
              className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg"
              asChild
            >
              <RouterLink
                to="/contact"
                className="flex items-center justify-center"
              >
                Schedule an Ethical Hacking Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </RouterLink>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OffensiveSecurityPage;
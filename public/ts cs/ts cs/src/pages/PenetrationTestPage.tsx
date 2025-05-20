import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSection from '../components/cybersecurity/TestimonialSection';

const PenetrationTestPage: React.FC = () => {
  // Custom testimonials for Penetration Testing
  const penetrationTestingTestimonials = [
    {
      id: 1,
      quote: "The penetration testing revealed critical vulnerabilities that could have compromised our entire system. Their remediation guidance was clear and effective.",
      name: "David Wilson",
      title: "Security Director",
      company: "GlobalTech Solutions",
      image: "/images/testimonials/david.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Their pen testing team found vulnerabilities that our previous security audits had missed. The detailed reporting helped us prioritize our security efforts effectively.",
      name: "Jennifer Lee",
      title: "CIO",
      company: "Fintech Innovations",
      image: "/images/testimonials/jennifer.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "We were impressed by the thoroughness of their penetration testing methodology. They simulated sophisticated attack scenarios that truly tested our defenses.",
      name: "Rajesh Patel",
      title: "Head of IT Security",
      company: "HealthNet Systems",
      image: "/images/testimonials/rajesh.jpg",
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
      title: "Web Application Testing",
      description: "Identify and exploit vulnerabilities in your web applications before attackers do.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      )
    },
    {
      title: "Network Infrastructure Testing",
      description: "Identify vulnerabilities in network devices, servers, and infrastructure components.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "API Security Testing",
      description: "Test API endpoints for security vulnerabilities, authorization flaws, and data leakage.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Mobile Application Testing",
      description: "Identify security vulnerabilities in iOS and Android applications.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "IoT Device Testing",
      description: "Identify security vulnerabilities in Internet of Things devices and applications.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Social Engineering Assessment",
      description: "Test employee awareness and susceptibility to social engineering attacks.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen">
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
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-block px-3 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
                <span className="text-[#88bf42] font-medium text-sm">Expert Security Testing</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0f0326] mb-6 leading-tight">
                Vulnerability Assessment & <span className="text-[#88bf42]">Penetration Testing</span>
              </h1>
              <p className="text-xl text-[#696869] mb-8 max-w-xl mx-auto lg:mx-0">
                Our comprehensive penetration testing services identify and address security vulnerabilities before they can be exploited by malicious actors.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-[#7aab3a] transition-all"
                >
                  Request a Penetration Test
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#0f0326] text-[#0f0326] font-semibold rounded-lg hover:bg-[#0f0326] hover:text-white transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#88bf42] to-[#0f0326] opacity-30 blur-md"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#88bf42]/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f0326]">Security Assessment Report</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#696869]">Critical Vulnerabilities</span>
                      <span className="text-red-500 font-semibold">2</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-red-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '20%' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      ></motion.div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[#696869]">High Vulnerabilities</span>
                      <span className="text-orange-500 font-semibold">6</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      ></motion.div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[#696869]">Medium Vulnerabilities</span>
                      <span className="text-yellow-500 font-semibold">9</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-yellow-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      ></motion.div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[#696869]">Low Vulnerabilities</span>
                      <span className="text-green-500 font-semibold">12</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-green-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
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
              <span className="text-[#88bf42] font-medium">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f0326] mb-6">
              Comprehensive <span className="text-[#88bf42]">Testing Services</span>
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-xl">
              Our penetration testing methodology combines automated scanning with manual testing to identify vulnerabilities that automated tools alone might miss.
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

      {/* Testimonials section */}
      <TestimonialSection testimonials={penetrationTestingTestimonials} />
      
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
              Ready to Secure Your Systems?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl mb-10">
              Our expert penetration testers are ready to identify and help remediate vulnerabilities in your systems before they can be exploited.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-lg"
            >
              Schedule Your Penetration Test
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PenetrationTestPage; 
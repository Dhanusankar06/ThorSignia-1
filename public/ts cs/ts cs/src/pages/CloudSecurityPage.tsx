import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSection from '../components/cybersecurity/TestimonialSection';

const CloudSecurityPage: React.FC = () => {
  // Custom testimonials for Cloud Security
  const cloudSecurityTestimonials = [
    {
      id: 1,
      quote: "Their cloud security assessment helped us identify critical misconfigurations that could have led to a major data breach. The remediation was straightforward and effective.",
      name: "Michael Torres",
      title: "Cloud Infrastructure Manager",
      company: "EnterpriseCloud Solutions",
      image: "/images/testimonials/michael-t.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Moving our workloads to the cloud was a security concern until we partnered with this team. Their cloud security assessment gave us confidence in our transition strategy.",
      name: "Sarah Zhang",
      title: "DevOps Director",
      company: "Innovate Systems",
      image: "/images/testimonials/sarah-z.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "The detailed cloud security report helped us achieve compliance with industry regulations while maintaining optimal performance of our cloud infrastructure.",
      name: "James Wilson",
      title: "Chief Security Officer",
      company: "FinTech Global",
      image: "/images/testimonials/james.jpg",
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
      title: "Cloud Configuration Assessment",
      description: "Identify misconfigurations in your cloud environment that could lead to security vulnerabilities.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Identity & Access Management",
      description: "Evaluate your cloud IAM configuration to ensure proper authentication and authorization controls.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    {
      title: "Data Security Assessment",
      description: "Ensure your cloud-stored data is properly encrypted, backed up, and protected against unauthorized access.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Container Security",
      description: "Assess the security of your containerized applications and orchestration platforms like Kubernetes.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Serverless Security",
      description: "Evaluate the security of your serverless functions and associated cloud services.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Cloud Network Security",
      description: "Assess your cloud network configuration for proper segmentation, encryption, and access controls.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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
                <span className="text-[#88bf42] font-medium text-sm">Secure Cloud Infrastructure</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0f0326] mb-6 leading-tight">
                Cloud <span className="text-[#88bf42]">Security</span> Assessment
              </h1>
              <p className="text-xl text-[#696869] mb-8 max-w-xl mx-auto lg:mx-0">
                Secure your cloud infrastructure with comprehensive security assessments and expert recommendations for AWS, Azure, Google Cloud, and more.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-[#7aab3a] transition-all"
                >
                  Request Assessment
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a6 6 0 006 6h7a5 5 0 001-9.9V9a3 3 0 00-5.91-.6" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 19h3a4 4 0 000-8h-1.38" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f0326]">Cloud Security Dashboard</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#696869]">Overall Security Score</span>
                        <span className="text-[#0f0326] font-semibold">72%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[#88bf42] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '72%' }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#0f0326] mb-3">AWS Security Status</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#696869]">S3 Buckets</span>
                            <span className="text-green-500">Secure</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-green-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '95%' }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                            ></motion.div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#696869]">IAM Policies</span>
                            <span className="text-yellow-500">Warning</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-yellow-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '75%' }}
                              transition={{ duration: 0.8, delay: 0.7 }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#0f0326] mb-3">Azure Security Status</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#696869]">Network Config</span>
                            <span className="text-red-500">At Risk</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-red-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '45%' }}
                              transition={{ duration: 0.8, delay: 0.8 }}
                            ></motion.div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#696869]">Active Directory</span>
                            <span className="text-green-500">Secure</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-green-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '90%' }}
                              transition={{ duration: 0.8, delay: 0.9 }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
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
              Comprehensive <span className="text-[#88bf42]">Cloud Security</span> Services
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-xl">
              Our cloud security assessment methodology identifies vulnerabilities, misconfigurations, and compliance gaps across your entire cloud infrastructure.
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
      <TestimonialSection testimonials={cloudSecurityTestimonials} />
      
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
              Ready to Secure Your Cloud?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl mb-10">
              Our cloud security experts are ready to help you identify and address vulnerabilities in your cloud infrastructure.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-lg"
            >
              Schedule Your Cloud Assessment
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudSecurityPage; 
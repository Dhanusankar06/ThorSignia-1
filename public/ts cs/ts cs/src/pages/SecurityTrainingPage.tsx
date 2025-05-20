import React from 'react';
import { motion } from 'framer-motion';

const SecurityTrainingPage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="lg:w-1/2 text-center lg:text-left w-full"
            >
              <div className="inline-block px-3 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
                <span className="text-[#88bf42] font-medium text-sm">Empower Your Team</span>
              </div>
              <h1 className="font-poppins font-bold text-3xl md:text-4xl leading-tight text-[#0f0326] mb-6 text-balance">
                Security <span className="text-[#88bf42]">Training</span> & Awareness
              </h1>
              <p className="font-inter text-[#696869] mb-8 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Build a security-conscious culture. Our training programs prepare your staff to recognize and respond to cyber threats effectively.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 justify-center lg:justify-start w-full">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-lg w-full sm:w-auto"
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 mt-10 lg:mt-0 w-full"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#88bf42] to-[#0f0326] opacity-30 blur-md"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-[#88bf42]/10 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-poppins font-bold text-[#0f0326]">Security Training Dashboard</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-5">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <span className="text-blue-600 text-sm font-semibold">01</span>
                          </div>
                          <span className="font-inter">Phishing Awareness</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">86%</span>
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <motion.div
                          className="h-full bg-[#88bf42] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "86%" }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                            <span className="text-purple-600 text-sm font-semibold">02</span>
                          </div>
                          <span className="font-inter">Password Security</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">92%</span>
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 }}
                          >
                            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <motion.div
                          className="h-full bg-[#88bf42] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                            <span className="text-orange-600 text-sm font-semibold">03</span>
                          </div>
                          <span className="font-inter">Social Engineering</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">78%</span>
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.9 }}
                          >
                            <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <motion.div
                          className="h-full bg-[#88bf42] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "78%" }}
                          transition={{ duration: 0.8, delay: 1.0 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Training Programs Section - Redesigned */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#0f0326] mb-4 text-balance">
              Our <span className="text-[#88bf42]">Training</span> Programs
            </h2>
            <p className="font-inter text-[#696869] max-w-2xl mx-auto text-pretty leading-relaxed">
              Comprehensive security awareness training tailored to your organization's needs and risk profile.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Security Awareness Foundations",
                description: "Essential security awareness training covering the fundamentals of cybersecurity for all employees.",
                features: ["Phishing awareness", "Password security", "Social engineering defense", "Data protection basics"],
                icon: "🔰"
              },
              {
                title: "Advanced Security Training",
                description: "Specialized security training for IT staff and others with elevated security responsibilities.",
                features: ["Threat hunting", "Incident response", "Secure development", "Advanced threat detection"],
                icon: "🚀"
              },
              {
                title: "Executive Security Briefings",
                description: "Focused security training for executives and board members to understand strategic security concerns.",
                features: ["Risk governance", "Security strategy", "Compliance overview", "Executive protection"],
                icon: "👔"
              },
              {
                title: "Phishing Simulation Campaigns",
                description: "Realistic phishing simulations to test and improve your organization's resilience against phishing attacks.",
                features: ["Custom phishing templates", "Targeted campaigns", "Immediate feedback", "Progress tracking"],
                icon: "🎣"
              },
              {
                title: "Role-Based Security Training",
                description: "Specialized security training tailored to specific job roles and responsibilities.",
                features: ["Developer security", "HR security protocols", "Finance security", "Customer service security"],
                icon: "👥"
              },
              {
                title: "Compliance-Focused Training",
                description: "Specialized training to ensure compliance with relevant regulations and standards.",
                features: ["GDPR compliance", "HIPAA security", "PCI DSS requirements", "Industry-specific regulations"],
                icon: "✅"
              }
            ].map((program, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#88bf42]/30 group h-full flex flex-col"
              >
                <div className="p-6 border-b border-gray-100 flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#88bf42]/10 flex items-center justify-center text-xl mr-3 flex-shrink-0">
                      {program.icon}
                    </div>
                    <h3 className="font-poppins font-bold text-[#0f0326] group-hover:text-[#88bf42] transition-colors duration-300 text-balance">
                      {program.title}
                    </h3>
                  </div>
                  <p className="font-inter text-sm text-[#696869] mb-4 text-pretty leading-relaxed">{program.description}</p>
                </div>
                <div className="p-6 bg-gray-50">
                  <h4 className="font-poppins font-semibold text-[#0f0326] mb-3">Key Components:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <svg className="w-4 h-4 text-[#88bf42] mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-inter text-sm text-[#696869]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Training Approach Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#0f0326] mb-4 text-balance">
              Our <span className="text-[#88bf42]">Training</span> Approach
            </h2>
            <p className="font-inter text-[#696869] max-w-2xl mx-auto text-pretty leading-relaxed">
              Our security training programs are designed to be engaging, effective, and tailored to your organization's specific needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f0326] to-[#1a0845] z-0"></div>
                
                {/* Learning Journey Animation */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Path */}
                    <motion.path
                      d="M20,100 C50,40 100,160 150,100 C200,40 250,160 300,100 C350,40 380,100 380,100"
                      fill="none"
                      stroke="#88bf42"
                      strokeWidth="4"
                      strokeDasharray="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                    
                    {/* Path stations */}
                    {[
                      { x: 20, y: 100, label: "Assessment" },
                      { x: 150, y: 100, label: "Learning" },
                      { x: 300, y: 100, label: "Practice" },
                      { x: 380, y: 100, label: "Mastery" }
                    ].map((station, i) => (
                      <g key={i}>
                        <motion.circle
                          cx={station.x}
                          cy={station.y}
                          r="12"
                          fill="#88bf42"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.5 }}
                        />
                        <motion.text
                          x={station.x}
                          y={station.y + 30}
                          textAnchor="middle"
                          fill="#88bf42"
                          fontSize="12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 + i * 0.5 }}
                        >
                          {station.label}
                        </motion.text>
                      </g>
                    ))}
                    
                    {/* Moving dot */}
                    <motion.circle
                      cx="20"
                      cy="100"
                      r="8"
                      fill="#ffffff"
                      filter="drop-shadow(0 0 8px rgba(255,255,255,0.7))"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ 
                        duration: 5, 
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1
                      }}
                      style={{ offsetPath: "path('M20,100 C50,40 100,160 150,100 C200,40 250,160 300,100 C350,40 380,100 380,100')" }}
                    />
                  </svg>
                </div>
                
                <div className="absolute top-4 left-4 bg-[#0f0326] px-3 py-1 rounded text-white text-sm font-medium">
                  Learning Journey
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-[#0f0326] mb-6 text-balance">Engaging and Effective Learning</h3>
              <div className="space-y-5">
                {[
                  {
                    title: "Microlearning",
                    description: "Short, focused training modules that fit into busy schedules and improve knowledge retention."
                  },
                  {
                    title: "Interactive Scenarios",
                    description: "Realistic scenarios that engage learners and provide practical, hands-on experience."
                  },
                  {
                    title: "Adaptive Learning",
                    description: "Personalized learning paths that adapt to each user's knowledge level and role requirements."
                  },
                  {
                    title: "Continuous Reinforcement",
                    description: "Regular reinforcement activities to ensure long-term knowledge retention and behavior change."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#88bf42]/10 flex items-center justify-center mr-3">
                      <span className="text-[#88bf42] font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-[#0f0326] mb-1">{item.title}</h4>
                      <p className="font-inter text-sm text-[#696869] text-pretty leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#0f0326] to-[#1a0845]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Animated elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute w-64 h-64 rounded-full bg-[#88bf42]/10 blur-3xl -top-32 -right-32"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-96 h-96 rounded-full bg-[#88bf42]/5 blur-3xl -bottom-48 -left-48"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3 w-full">
                  <h2 className="font-poppins text-xl md:text-2xl font-bold text-white mb-4 text-center md:text-left text-balance">
                    Empower Your Team with <span className="text-[#88bf42]">Security Knowledge</span>
                  </h2>
                  <p className="font-inter text-gray-300 text-sm sm:text-base text-center md:text-left text-pretty leading-relaxed">
                    Start building a security-aware culture today. Our training programs are designed to engage your team and protect your organization.
                  </p>
                </div>
                <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-base w-full sm:max-w-[220px]"
                  >
                    Request Training Demo
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityTrainingPage; 
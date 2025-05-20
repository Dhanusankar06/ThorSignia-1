import React from 'react';
import { motion } from 'framer-motion';

const RedTeamingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0326] to-[#1a0845] opacity-5 z-0"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[#88bf42]/5"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-[#0f0326]/5"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#0f0326] leading-tight mb-6">
                <span className="text-[#88bf42]">Red Teaming</span> Services
              </h1>
              <p className="text-xl text-[#696869] mb-8 max-w-xl">
                Simulate sophisticated cyber attacks to test your defense capabilities. Our red team identifies security gaps through real-world attack scenarios.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-[#7aab3a] transition-all"
                >
                  Get Started
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                {/* Main animation container */}
                <div className="aspect-video bg-gradient-to-br from-[#0f0326] to-[#0f0326]/80 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0f0326]/20 p-6 relative">
                  {/* Network nodes and connections animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Attack path animation */}
                      <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                          <motion.path 
                            d="M20,150 C50,50 150,50 180,150 C210,250 310,250 380,150" 
                            stroke="#88bf42" 
                            strokeWidth="3"
                            strokeDasharray="0 1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                          />
                        </svg>
                      </motion.div>
                      
                      {/* Network nodes */}
                      {[
                        { x: 20, y: 150, delay: 0 },
                        { x: 180, y: 150, delay: 0.5 },
                        { x: 380, y: 150, delay: 1 },
                        { x: 100, y: 80, delay: 1.5 },
                        { x: 300, y: 200, delay: 2 },
                        { x: 100, y: 220, delay: 2.5 },
                        { x: 300, y: 80, delay: 3 }
                      ].map((node, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-white rounded-full"
                          style={{ left: node.x, top: node.y }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: node.delay, duration: 0.5 }}
                        />
                      ))}
                      
                      {/* Attack indicator */}
                      <motion.div
                        className="absolute w-6 h-6 bg-red-500 rounded-full shadow-lg"
                        initial={{ x: 20, y: 150, scale: 1 }}
                        animate={{ 
                          x: [20, 180, 380], 
                          y: [150, 150, 150],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          ease: "easeInOut", 
                          repeat: Infinity, 
                          repeatType: "loop", 
                          repeatDelay: 1,
                          times: [0, 0.5, 1]
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#0f0326]/80 backdrop-blur-sm">
                    <p className="text-[#88bf42] font-medium">Red Team Operation in Progress</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#88bf42]/10 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0f0326]/10 rounded-full -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
              Our <span className="text-[#88bf42]">Red Team</span> Approach
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-lg">
              We simulate real-world attacks to test your organization's detection and response capabilities, providing actionable insights to improve your security posture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Objective-Based Testing",
                description: "We focus on specific objectives that align with your security concerns and business requirements.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                title: "Stealth Operations",
                description: "We operate under the radar to test your ability to detect and respond to sophisticated threats.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: "Multi-Vector Attacks",
                description: "We use a combination of technical and social engineering techniques to simulate realistic threat scenarios.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Advanced Persistence",
                description: "We simulate advanced persistent threats to test your long-term detection capabilities.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Scenario-Based Testing",
                description: "We create realistic attack scenarios based on current threat intelligence and your industry-specific risks.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: "Comprehensive Reporting",
                description: "We provide detailed reports with actionable recommendations to strengthen your security posture.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#88bf42]/30 group"
              >
                <div className="w-16 h-16 bg-[#88bf42]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#88bf42]/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f0326] mb-4 group-hover:text-[#88bf42] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#696869]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
              Red Team <span className="text-[#88bf42]">Engagement Process</span>
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-lg">
              Our structured approach ensures thorough assessment of your security defenses from the perspective of a motivated attacker.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Reconnaissance",
                description: "We gather information about your organization's digital footprint to identify potential entry points."
              },
              {
                number: "02",
                title: "Initial Access",
                description: "We attempt to gain access to your systems using various techniques, from phishing to exploiting vulnerabilities."
              },
              {
                number: "03",
                title: "Persistence",
                description: "Once inside, we establish persistent access to simulate how attackers maintain their presence undetected."
              },
              {
                number: "04",
                title: "Lateral Movement",
                description: "We move through your network to access sensitive systems and data, just as a real attacker would."
              },
              {
                number: "05",
                title: "Data Exfiltration Simulation",
                description: "We simulate the theft of sensitive data to test your data loss prevention capabilities."
              },
              {
                number: "06",
                title: "Comprehensive Reporting",
                description: "We provide detailed reports on our findings, including entry points, vulnerabilities, and recommendations."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#88bf42]/10 flex items-center justify-center text-[#88bf42] text-4xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#0f0326] mb-4">{step.title}</h3>
                  <p className="text-[#696869] text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#0f0326]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0f0326]/80 to-[#0f0326]/60 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl relative overflow-hidden">
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
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Ready to Test Your <span className="text-[#88bf42]">Security Defenses</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-300 text-lg mb-8"
              >
                Our red team exercises provide valuable insights into your security posture from an attacker's perspective, helping you identify and address vulnerabilities before they can be exploited.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#88bf42] text-white font-semibold rounded-lg shadow-lg hover:bg-[#7aab3a] transition-all"
              >
                Schedule a Red Team Exercise
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RedTeamingPage; 
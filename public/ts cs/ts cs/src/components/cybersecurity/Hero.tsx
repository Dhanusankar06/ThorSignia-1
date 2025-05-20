import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0B0F19] to-[#171E2E] min-h-screen">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0">
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5) rotate(0)">
                <path d="M25,3.4 L45,17.3 L45,43.4 L25,43.4 L5,43.4 L5,17.3 Z" stroke="#88bf42" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-[#88bf42]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                opacity: 0.4,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute right-[10%] top-[20%] w-[300px] h-[300px] rounded-full bg-[#88bf42]/20 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-[5%] bottom-[20%] w-[250px] h-[250px] rounded-full bg-[#3563E9]/20 blur-[70px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-8 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 mb-6 bg-gradient-to-r from-[#3563E9]/10 to-[#88bf42]/10 rounded-full">
              <span className="text-gradient bg-gradient-to-r from-[#3563E9] to-[#88bf42] font-medium text-sm">Advanced Cybersecurity Solutions</span>
            </div>
            
            <h1 className="font-poppins font-bold text-[30px] sm:text-[36px] md:text-[48px] leading-[1.2] text-white mb-6">
              Protect Your Digital World With <span className="text-gradient bg-gradient-to-r from-[#3563E9] to-[#88bf42]">Next-Gen Security</span>
            </h1>
            
            <p className="font-inter text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Our AI-powered cybersecurity platform provides real-time threat detection, 
              advanced encryption, and comprehensive protection for your critical digital assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 5px 20px rgba(136, 191, 66, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#88bf42] to-[#75a835] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg"
              >
                Start Free Assessment
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#ffffff10" }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all backdrop-blur-sm"
              >
                Watch Demo
              </motion.button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#3563E9]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3563E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-poppins text-[16px] md:text-[20px] lg:text-[22px] font-semibold text-white">99.9%</h4>
                </div>
                <p className="font-inter text-gray-400 text-sm pl-13">Threat detection accuracy with our AI-powered system</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#88bf42]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-poppins text-[16px] md:text-[20px] lg:text-[22px] font-semibold text-white">24/7/365</h4>
                </div>
                <p className="font-inter text-gray-400 text-sm pl-13">Continuous monitoring and security operations</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3563E9] to-[#88bf42] opacity-30 blur-lg rounded-2xl"></div>
              <div className="relative bg-[#171E2E] backdrop-filter backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Security Dashboard Header */}
                <div className="bg-[#0B0F19] border-b border-white/10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-poppins font-medium text-white">Security Command Center</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-5">
                  {/* Security Score */}
                  <div className="bg-[#0B0F19] rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-poppins text-[18px] md:text-[20px] lg:text-[22px] font-medium text-white">Security Score</h3>
                      <span className="px-3 py-1 bg-[#88bf42]/20 text-[#88bf42] rounded-full text-sm font-medium">Excellent</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative h-24 w-24">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="38" fill="none" stroke="#0B0F19" strokeWidth="12" />
                          <motion.circle 
                            cx="50" 
                            cy="50" 
                            r="38"
                            stroke="#88bf42"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray="239"
                            initial={{ strokeDashoffset: 239 }}
                            animate={{ strokeDashoffset: 48 }} // 20% of 239
                            transition={{ duration: 2, ease: "easeInOut" }}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                          />
                          <text
                            x="50"
                            y="53"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="22"
                            fontWeight="bold"
                            fontFamily="Inter, sans-serif"
                          >
                            80%
                          </text>
                        </svg>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Network</span>
                            <span className="text-white">92%</span>
                          </div>
                          <div className="h-1.5 bg-[#1a2236] rounded-full">
                            <motion.div 
                              className="h-full bg-[#3563E9] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "92%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                            ></motion.div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Endpoints</span>
                            <span className="text-white">78%</span>
                          </div>
                          <div className="h-1.5 bg-[#1a2236] rounded-full">
                            <motion.div 
                              className="h-full bg-[#88bf42] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "78%" }}
                              transition={{ duration: 1, delay: 0.7 }}
                            ></motion.div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Cloud</span>
                            <span className="text-white">85%</span>
                          </div>
                          <div className="h-1.5 bg-[#1a2236] rounded-full">
                            <motion.div 
                              className="h-full bg-[#7580df] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 1, delay: 0.9 }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Activity Log */}
                  <div className="bg-[#0B0F19] rounded-xl p-4">
                    <h3 className="font-poppins text-[18px] md:text-[20px] lg:text-[22px] font-medium text-white mb-4">Recent Activities</h3>
                    
                    <div className="space-y-3">
                      <motion.div 
                        className="flex items-center gap-3 p-2 rounded-lg bg-[#171E2E] border border-white/5"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white truncate">Malware attempt blocked</p>
                          <p className="text-xs text-gray-400">File: malicious-doc.pdf</p>
                        </div>
                        <span className="text-xs text-gray-400">Just now</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3 p-2 rounded-lg bg-[#171E2E] border border-white/5"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white truncate">Suspicious login attempt</p>
                          <p className="text-xs text-gray-400">IP: 185.143.XX.XX</p>
                        </div>
                        <span className="text-xs text-gray-400">2m ago</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3 p-2 rounded-lg bg-[#171E2E] border border-white/5"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white truncate">Firewall rules updated</p>
                          <p className="text-xs text-gray-400">23 rules applied successfully</p>
                        </div>
                        <span className="text-xs text-gray-400">5m ago</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Scanning animation */}
                <motion.div 
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3563E9] to-transparent opacity-70"
                  animate={{ 
                    y: [0, 350, 0],
                    opacity: [0.7, 0.2, 0.7]
                  }}
                  transition={{ 
                    duration: 5, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for text gradient */}
      <style>
        {`
          .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
          
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Hero; 
import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f0326] to-[#0f0326]/90 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute h-full w-full bg-[url('/images/cyber-pattern.svg')] bg-repeat" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Your Free <span className="text-[#88bf42]">Cybersecurity</span> Assessment
            </h2>
            <p className="text-lg text-[#696869] mb-8">
              Discover potential vulnerabilities in your AI systems and infrastructure. 
              Our experts will provide a comprehensive report with actionable recommendations.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white">Identify vulnerabilities in your AI systems</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white">Receive actionable security recommendations</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white">Consultation with security experts</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0f0326] rounded-xl border border-[#696869]/20 p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request Your Free Assessment</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#696869] mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#696869] mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-[#696869] mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#696869] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white resize-none"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#88bf42] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Submit Request
              </motion.button>
              <p className="text-[#696869] text-sm text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 
import React from 'react';
import { motion } from 'framer-motion';

const ServiceOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-white/95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
              Comprehensive <span className="text-[#88bf42]">Cybersecurity</span> Services
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-lg">
              Protect your AI infrastructure with our advanced cybersecurity solutions. We offer a comprehensive suite of services 
              designed to safeguard your digital assets from evolving threats.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Feature 1 */}
          <div className="bg-white/50 border border-[#696869]/20 p-8 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-[#88bf42]/30">
            <div className="w-14 h-14 bg-[#88bf42]/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0f0326] mb-3">Proactive Protection</h3>
            <p className="text-[#696869]">
              Stop threats before they impact your business with our advanced AI-driven threat detection.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white/50 border border-[#696869]/20 p-8 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-[#88bf42]/30">
            <div className="w-14 h-14 bg-[#88bf42]/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0f0326] mb-3">Expert Security Team</h3>
            <p className="text-[#696869]">
              Our certified security experts stay ahead of evolving threats to protect your AI systems.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white/50 border border-[#696869]/20 p-8 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-[#88bf42]/30">
            <div className="w-14 h-14 bg-[#88bf42]/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0f0326] mb-3">24/7 Monitoring</h3>
            <p className="text-[#696869]">
              Continuous surveillance of your systems ensures immediate response to security incidents.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview; 
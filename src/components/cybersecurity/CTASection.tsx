import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://www.thorsignia.in/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit assessment.');
      }
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'There was an error submitting the assessment. Please try again.');
    } finally {
      setIsLoading(false);
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 5000);
      }
    }
  };

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
            <p className="text-lg text-white/60 mb-8">
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
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mb-4 text-green-400 text-2xl font-semibold">Thank you!</div>
                <p className="text-white">Your assessment request has been submitted. We'll contact you soon.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-white/60 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white"
                    
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/60 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white"
                    
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white/60 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white"
                    
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/60 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0f0326]/50 border border-[#696869]/30 rounded-lg focus:outline-none focus:border-[#88bf42] text-white resize-none"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="w-full py-4 bg-[#88bf42] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-60"
                >
                  {isLoading ? 'Submitting...' : 'Submit Request'}
                </motion.button>
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                <p className="text-white text-sm text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 
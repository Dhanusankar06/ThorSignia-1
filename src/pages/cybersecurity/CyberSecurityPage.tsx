import React from 'react';
import { motion } from 'framer-motion';

// Components
import Hero from '../components/cybersecurity/Hero';
import ServiceOverview from '../components/cybersecurity/ServiceOverview';
import ServiceCards from '../components/cybersecurity/ServiceCards';
import BenefitsSection from '../components/cybersecurity/BenefitsSection';
import CTASection from '../components/cybersecurity/CTASection';
import TestimonialSection from '../components/cybersecurity/TestimonialSection';
import ContactSection from '../components/cybersecurity/ContactSection';

const CyberSecurityPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <ServiceOverview />
      <ServiceCards />
      <BenefitsSection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default CyberSecurityPage; 
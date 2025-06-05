'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


// Import cybersecurity components
import Hero from '@/components/cybersecurity/Hero';
import ServiceOverview from '@/components/cybersecurity/ServiceOverview';
import ServiceCards from '@/components/cybersecurity/ServiceCards';
import BenefitsSection from '@/components/cybersecurity/BenefitsSection';
import CTASection from '@/components/cybersecurity/CTASection';

export default function CyberSecurity() {
  useEffect(() => {
    document.title = "Cybersecurity | ThorSignia";
  }, []);
  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Add a wrapper div with proper spacing for all sections */}
      <div>
        {/* Cybersecurity sections */}
        <Hero />
        <ServiceOverview />
        <ServiceCards />
        <BenefitsSection />
        <CTASection />
      </div>
      
      <Footer />

    </div>
  );
} 
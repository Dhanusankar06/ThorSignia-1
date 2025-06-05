import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
// import CTASection from '@/components/CTASection';
import VoiceAgentDemo from '@/components/VoiceAgentDemo';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, CircleCheck } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = "ThorSignia | AI & Cybersecurity Solutions";
  }, []);
  const heroRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Handle initial page load and navigation
    if (location.hash === '') {
      // No specific hash in URL, scroll to top on page load
      window.scrollTo(0, 0);
    } else if (location.hash === '#hero') {
      // Explicitly scroll to hero section 
      const heroSection = document.getElementById('home-hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Check if we should scroll to hero section (coming from another page with flag)
    if (sessionStorage.getItem('scrollToHero') === 'true') {
      // Clear the flag
      sessionStorage.removeItem('scrollToHero');
      
      // Scroll to hero section
      const heroSection = document.getElementById('home-hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'auto' });
      }
      
      // Replace current history state to prevent unwanted scroll restoration
      const currentState = window.history.state;
      window.history.replaceState(
        { ...currentState, __forcedScroll: true },
        document.title
      );
    }
    
    // Prevent scroll restoration issues
    const handlePopState = (e) => {
      if (e.state && e.state.__forcedScroll) {
        setTimeout(() => {
          const heroSection = document.getElementById('home-hero-section');
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'auto' });
          }
        }, 0);
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Set up intersection observer for hero section
    const options = {
      threshold: 0.1,
      rootMargin: '0px',
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Hero is visible
          document.body.classList.add('hero-visible');
        } else {
          // Hero is not visible
          document.body.classList.remove('hero-visible');
        }
      });
    }, options);
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [location]);

  return (
    <div className="home-page">
      <Navbar />
      <div id="home-hero-section" ref={heroRef} className="scroll-mt-20 scroll-my-0 relative">
        <HeroSection />
      </div>
      
      <Footer />
    </div>
  );
}

export default Index;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#88bf42]' : 'text-[#0f0326]';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="Cybersecurity Logo" className="h-10" />
          <span className="ml-2 font-bold text-xl text-[#0f0326]">CyberSec</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`font-medium transition-colors ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/penetration-testing" className={`font-medium transition-colors ${isActive('/penetration-testing')}`}>
            Pen Testing
          </Link>
          <Link to="/cloud-security" className={`font-medium transition-colors ${isActive('/cloud-security')}`}>
            Cloud Security
          </Link>
          <Link to="/offensive-security" className={`font-medium transition-colors ${isActive('/offensive-security')}`}>
            Offensive Security
          </Link>
          <Link to="/red-teaming" className={`font-medium transition-colors ${isActive('/red-teaming')}`}>
            Red Teaming
          </Link>
          <Link to="/iot-security" className={`font-medium transition-colors ${isActive('/iot-security')}`}>
            IoT Security
          </Link>
          <Link to="/vciso-services" className={`font-medium transition-colors ${isActive('/vciso-services')}`}>
            vCISO
          </Link>
        </div>

        {/* Contact button */}
        <Link to="/contact" className="hidden md:block bg-[#88bf42] text-white px-5 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
          Contact Us
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#0f0326] focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className={`block font-medium ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/penetration-testing" className={`block font-medium ${isActive('/penetration-testing')}`}>
              Pen Testing
            </Link>
            <Link to="/cloud-security" className={`block font-medium ${isActive('/cloud-security')}`}>
              Cloud Security
            </Link>
            <Link to="/offensive-security" className={`block font-medium ${isActive('/offensive-security')}`}>
              Offensive Security
            </Link>
            <Link to="/red-teaming" className={`block font-medium ${isActive('/red-teaming')}`}>
              Red Teaming
            </Link>
            <Link to="/iot-security" className={`block font-medium ${isActive('/iot-security')}`}>
              IoT Security
            </Link>
            <Link to="/vciso-services" className={`block font-medium ${isActive('/vciso-services')}`}>
              vCISO
            </Link>
            <Link to="/contact" className="block bg-[#88bf42] text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all text-center mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 
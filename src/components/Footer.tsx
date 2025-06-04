'use client'; // Added if you need client-side features

import React from 'react';
import { Link } from 'react-router-dom';
// Import icons needed - Mail, Phone, MessageCircle, Globe for Contact/Explore
// Note: lucide-react icons are not directly used in the footer content shown,
// but kept in imports as they might be used elsewhere in the component or project.
import { Mail, Phone, MessageCircle, Globe } from 'lucide-react';
// Import the logo from assets folder - Ensure this path is correct relative to Footer.jsx
// const logoImage = '../assets/images/thor-signia-logo.png'; // This import is not used, the img src uses a public path.
import { cn } from "@/lib/utils"; // Assuming you have a utility for conditional classes

// Define social media icons with standard SVG paths and styling
const socialIcons = {
  facebook: {
    ariaLabel: "Facebook",
    url: "https://www.facebook.com/thorsignia/",
    // Modern Facebook icon SVG with gradient blue background
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="facebookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1877F2"/>
            <stop offset="100%" stopColor="#0C63D4"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#facebookGradient)"/>
        <path fill="white" d="M16.5 8H14c-.3 0-.5.2-.5.5v2h3v2.5h-3V20h-3v-7H8v-2.5h2.5V8c0-2.5 1.5-4 4-4h2V8z"/>
      </svg>
    ),
  },
  twitter: {
    ariaLabel: "Twitter",
    url: "https://twitter.com/Thorsignia",
    // Classic Twitter bird logo in white on blue background
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="6" fill="#1DA1F2"/>
        <path fill="white" d="M19.2 8.6c-.5.2-1.1.4-1.7.4.6-.4 1.1-.9 1.3-1.6-.6.3-1.2.6-1.9.7-.5-.6-1.3-.9-2.2-.9-1.7 0-3 1.3-3 3 0 .2 0 .4.1.7-2.5-.1-4.7-1.3-6.2-3.1-.3.4-.4 1-.4 1.5 0 1 .5 2 1.3 2.5-.5 0-1-.1-1.3-.4 0 1.4 1 2.6 2.4 2.9-.2.1-.5.1-.8.1-.2 0-.4 0-.6-.1.4 1.2 1.5 2 2.8 2-1 .8-2.3 1.3-3.7 1.3h-.7c1.3.8 2.9 1.3 4.5 1.3 5.4 0 8.4-4.5 8.4-8.4v-.4c.6-.4 1.1-.9 1.5-1.5z"/>
      </svg>
    ),
  },
  instagram: {
    ariaLabel: "Instagram",
    url: "https://www.instagram.com/thorsignia/",
    // Standard Instagram icon SVG with gradient background applied to the main path
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <radialGradient id="instagramGradient" cx="19%" cy="99%" r="108%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instagramGradient)"/>
        <g fill="#fff">
          <path d="M12 15.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8zm0-6.6a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4z"/>
          <circle cx="16.1" cy="7.9" r=".9"/>
          <path d="M17.5 5.3h-11a1.2 1.2 0 0 0-1.2 1.2v11c0 .6.6 1.2 1.2 1.2h11c.6 0 1.2-.6 1.2-1.2v-11c0-.6-.6-1.2-1.2-1.2zm0 12.2h-11v-11h11v11z"/>
        </g>
      </svg>
    ),
  },
  linkedin: {
    ariaLabel: "LinkedIn",
    url: "https://www.linkedin.com/company/thorsignia/?originalSubdomain=in",
    // Official LinkedIn logo with square design and rounded corners
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path fill="white" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-1.5 1.5h3v9h-3v-9zm4.5 0h3v1.3c.6-1 1.8-1.6 3-1.5 2.7 0 3.5 1.8 3.5 4.2v5h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.5 1.2-1.5 2.5v4.5h-3v-9z"/>
      </svg>
    ),
  },
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Reduced gap between grid columns on xl screens */}
        <div className="xl:grid xl:grid-cols-12 xl:gap-8 xl:items-start"> {/* Main grid: 12 cols, logo left, 3 sections right, top-aligned items */}
          <div className="space-y-6 xl:col-span-4 mb-4 xl:mb-0"> {/* Logo section takes 4 cols */}
            <img
              className="h-18 w-48"
              src="/thor-signia-logo.png"
              alt="Thor Signia"
            />
            <p className="text-gray-400 text-base leading-relaxed">
              "Empowering enterprises to achieve unprecedented growth through the power of AI and innovation."
            </p>

            <div className="flex space-x-4 items-center mt-6">
              {Object.entries(socialIcons).map(([key, social]) => (
                <a
                  key={key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className={cn(
                    "inline-flex items-center justify-center w-9 h-9",
                    "transition-transform duration-200 ease-out hover:scale-110",
                  )}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div> {/* End of logo section div */}

          {/* Wrapper for the three right-aligned sections */}
          <div className="xl:col-span-6 xl:col-start-7"> {/* This div takes up the remaining space for the right sections, aligned right */}
            {/* Grid for Services, Company, Contact Us. Controls inter-spacing and mobile stacking. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-4 lg:gap-x-6 xl:gap-x-4 mt-10 xl:mt-0">
              {/* Services Section */}
              <div> {/* Removed mt-10 xl:mt-0 from original div */}
                <h3 className="text-base font-bold text-[#88bf42] tracking-wider uppercase pb-3 mb-3">
                    Services
                </h3>
                <ul className="space-y-4">
                  <li><Link to="/services" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">AI Services</Link></li>
                   <li><Link to="/cyber-security" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">Cybersecurity</Link></li>
                   <li><Link to="/ai-engineers" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">Outsourcing AI </Link></li>
                </ul>
              </div>

              {/* Company Section */}
              <div> {/* Removed mt-10 xl:mt-0 from original div */}
                <h3 className="text-base font-bold text-[#88bf42] tracking-wider uppercase pb-3 mb-3">
                    Company
                </h3>
                <ul className="space-y-4">
                  <li><Link to="/about" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">About Us</Link></li>
                  <li><Link to="/case-studies" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">Case Studies</Link></li>
                  <li><Link to="/awards" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">Awards</Link></li>
                  <li><Link to="/blog" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">Blog</Link></li>
                  <li><Link to="/careers" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">Careers</Link></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div> {/* Removed mt-10 xl:mt-0 from original div */}
                <h3 className="text-base font-bold text-[#88bf42] tracking-wider uppercase pb-3 mb-3">
                    Contact Us
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:+919008097780" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">
                      Call Us: +91 9008097780 {/* Replace with actual phone number */}
                    </a>
                  </li>
                  <li>
                     <a href="mailto:info@thorsignia.online" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">
                      Mail Us: info@thorsignia.online {/* Replace with actual email */}
                     </a>
                  </li>
                  {/* Pricing link kept here if needed */}
                  {/* <li><Link to="/pricing" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200">Pricing</Link></li> */}
                </ul>
              </div>
            </div> {/* Closing div for the inner grid of 3 sections */}
          </div> {/* Closing div for the xl:col-span-6 wrapper */}
        </div>

        {/* --- BOTTOM SECTION: Copyright Left, Legal Links Right --- */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Left side: Copyright */}
          <p className="text-base text-gray-400 text-center md:text-left flex-shrink-0">
            &copy; {new Date().getFullYear()} Thor Signia. All rights reserved.
          </p>
          {/* Right side: Legal links - ADDED SITEMAP LINK HERE */}
          <ul className="flex space-x-4 flex-wrap justify-center md:justify-start">
              <li><Link to="/PrivacyPolicy" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200 text-sm">Privacy Policy</Link></li>
              <li><Link to="/TermsAndConditions" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200 text-sm">Terms & Conditions</Link></li>
              <li><Link to="/RefundPolicy" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200 text-sm">Refund Policy</Link></li>
              {/* --- New Sitemap Link Added Here --- */}
              <li><Link to="/sitemap" className="text-gray-300 hover:text-[#88bf42] transition-colors duration-200 text-sm">Sitemap</Link></li>
              {/* --- End New Sitemap Link --- */}
          </ul>
        </div>
        {/* --- END BOTTOM SECTION --- */}

      </div>
    </footer>
  );
};

export default Footer;
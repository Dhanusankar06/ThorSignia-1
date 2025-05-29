import React from 'react';
import { Link } from 'react-router-dom';
// Import icons needed - Mail, Phone, MessageCircle, Globe for Contact/Quick Links
// We are embedding SVGs for social icons, so they are not imported here
import { Mail, Phone, MessageCircle, Globe } from 'lucide-react';
// Import the logo from assets folder - Ensure this path is correct relative to Footer.jsx
import logoImage from '../assets/images/thor-signia-logo.png';


const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements similar to Services section (kept as is) */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#88bf42]/5 opacity-30 z-0"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-[#009898]/5 opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-10 w-24 h-24 rounded-full border-2 border-[#88bf42]/20 opacity-30"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-lg border-2 border-[#009898]/20 opacity-30 rotate-12"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Main content grid: 1 column on mobile, 2 columns on medium/large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> {/* Increased gap */}
          {/* Left Column: Brand (now logo), Description, Social */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col justify-start"> {/* Start items from top */}
            {/* Replaced text with logo image */}
            <Link to="/" className="mb-4 inline-block" aria-label="Thor Signia Home"> {/* Added Link wrapper for logo, increased bottom margin */}
               <img
                 src={logoImage}
                 alt="Thor Signia Logo"
                 // h-auto lets height adjust, max-h limits it, width scales proportionally
                 className="h-auto max-h-[100px]" // Adjusted size, removed fixed width/height
                 style={{ objectFit: 'contain' }} // Ensure image fits within its element
               />
            </Link>

            {/* Kept description and social links */}
            <p className="text-gray-300 mb-8 max-w-md text-base italic"> {/* Increased text size slightly */}
            "Empowers enterprises to achieve unprecedented growth through the power of AI and innovation."
            </p>
            <div className="flex space-x-4"> {/* Increased space between social icons */}
              {/* Social Icons - Embedded SVG with Hover Effects */}
              {/* Facebook Social Icon - Embedded SVG (Kept the same) */}
              <a href="https://www.facebook.com/thorsignia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white hover:text-[#88bf42]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition duration-200 group-hover:w-6 group-hover:h-6">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                 </svg>
              </a>
               {/* Twitter Social Icon - EMBEDDED CORRECTED SVG */}
              <a href="https://x.com/Thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)" className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white hover:text-[#88bf42]">
                 {/* Embedded CORRECTED X/Twitter SVG */}
                 {/* Uses stroke="currentColor" to inherit color */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition duration-200 group-hover:w-6 group-hover:h-6">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                 </svg>
              </a>
              {/* Instagram Social Icon - Embedded SVG (Kept the same) */}
              <a href="https://www.instagram.com/thorsignia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white hover:text-[#88bf42]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition duration-200 group-hover:w-6 group-hover:h-6">
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                 </svg>
              </a>
               {/* LinkedIn Social Icon - Embedded SVG (Kept the same) */}
              <a href="https://www.linkedin.com/company/thorsignia/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white hover:text-[#88bf42]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition duration-200 group-hover:w-6 group-hover:h-6">
                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                     <rect width="4" height="12" x="2" y="9"></rect>
                     <circle cx="4" cy="4" r="2"></circle>
                 </svg>
              </a>
            </div>
            {/* Add subtle line/fade below Thor Signia section */}
            <div className="w-full h-px bg-gray-700/40 my-6"></div>
            {/* <p className="text-gray-400 text-sm mt-4">
              © {new Date().getFullYear()} Thor Signia. All rights reserved.
            </p> */}
          </div>

          {/* Right Column CONTAINER: Now acts as a flex container for the next two items */}
          {/* Use flex-col on mobile, flex-row on md+ */}
          {/* Add gap-x for horizontal spacing on md+ */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col md:flex-row md:gap-12">

            {/* Quick Links SECTION: Becomes a flex item, takes equal space on md+ */}
            <div className="flex-1 mb-8 md:mb-0"> {/* Added mb-8 for spacing on mobile */}
              <h3 className="text-xl font-semibold mb-5 text-white flex items-center gap-2"> {/* Slightly larger title */}
                 {/* Optional Icon for section title */}
                 <Globe className="w-5 h-5 text-[#88bf42]" />
                 Quick Links
              </h3>
              {/* This list remains a simple vertical list */}
              <ul className="space-y-3 text-base"> {/* Added space-y for vertical spacing */}
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#88bf42] transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about#top" className="text-gray-300 hover:text-[#88bf42] transition-colors">About Us</Link>
                </li>
                <li>
                   {/* Example: Link with an optional icon (can be added to others) */}
                  <Link to="/services#top" className="text-gray-300 hover:text-[#88bf42] transition-colors flex items-center gap-1">
                      Services
                  </Link>
                </li>
                 <li>
                   <Link to="/cyber-security#top" className="text-gray-300 hover:text-[#88bf42] transition-colors flex items-center gap-1">
                       Cyber Security
                   </Link>
                 </li>
                <li>
                  <Link to="/case-studies#top" className="text-gray-300 hover:text-[#88bf42] transition-colors flex items-center gap-1">
                      Case Studies
                  </Link>
                </li>
                 <li>
                   <Link to="/ai-engineers#top" className="text-gray-300 hover:text-[#88bf42] transition-colors">AI Engineers</Link>
                 </li>
                <li>
                   <Link to="/awards#top" className="text-gray-300 hover:text-[#88bf42] transition-colors">Awards</Link>
                </li>
                <li>
                  <Link to="/blog#top" className="text-gray-300 hover:text-[#88bf42] transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/contact#top" className="text-gray-300 hover:text-[#88bf42] transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Contact SECTION - REMOVED LOCATION LIST ITEMS */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-5 text-white flex items-center gap-2"> {/* Slightly larger title */}
                 <MessageCircle className="w-5 h-5 text-[#88bf42]" />
                Contact
              </h3>
              {/* Contact list - Only Email and Phone */}
              <ul className="space-y-4 text-base"> {/* Increased space between contact items, slightly larger text */}

                {/* Location List Items were here - THEY ARE NOW REMOVED */}

                {/* Email Item */}
                <li className="flex items-start group"> {/* items-start aligns icon to top of text block */}
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mr-4 text-[#88bf42] group-hover:bg-white/20 transition-colors flex-shrink-0"> {/* Icon container size w-7 h-7 */}
                    <Mail className="w-5 h-5" /> {/* Icon size w-5 h-5 (20px) */}
                  </div>
                  <span className="text-gray-300">info@thorsignia.in</span>
                </li>
                {/* Phone Item */}
                <li className="flex items-start group"> {/* items-start aligns icon to top of text block */}
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mr-4 text-[#88bf42] group-hover:bg-white/20 transition-colors flex-shrink-0"> {/* Icon container size w-7 h-7 */}
                    <Phone className="w-5 h-5" /> {/* Icon size w-5 h-5 (20px) */}
                  </div>
                  <span className="text-gray-300">+91 90080 97780</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Policies (kept layout, adjusted styling) */}
        <div className="border-t border-gray-800 pt-8 mt-8"> {/* Added top margin */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0"> {/* Changed copyright color to a slightly darker gray */}
              © {new Date().getFullYear()} Thor Signia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/PrivacyPolicy#top" className="text-gray-500 hover:text-white text-sm transition-colors font-medium">Privacy Policy</Link> {/* Changed policy link color */}
              <Link to="/TermsAndConditions#top" className="text-gray-500 hover:text-white text-sm transition-colors font-medium">Terms and Conditions</Link>
              <Link to="/RefundPolicy#top" className="text-gray-500 hover:text-white text-sm transition-colors font-medium">Refund Policy</Link>
            </div>
          </div>
        </div>
        {/* Single full-width divider line below the grid */}
        <div className="w-full h-px bg-gray-700/40 my-6"></div>
      </div>
    </footer>
  );
};

export default Footer;
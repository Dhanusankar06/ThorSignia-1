import React from 'react';
import { Link } from 'react-router-dom';
// Import icons needed - Mail, Phone, MessageCircle, Globe for Contact/Quick Links
import { Mail, Phone, MessageCircle, Globe } from 'lucide-react';
// Import the logo from assets folder - Ensure this path is correct relative to Footer.jsx
import logoImage from '../assets/images/thor-signia-logo.png';

// Define social media icons with proper brand colors and simplified paths
const socialIcons = {
  facebook: {
    ariaLabel: "Facebook",
    url: "https://www.facebook.com/thorsignia/",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#1877F2">
        {/* Font Awesome Facebook F */}
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
      </svg>
    ),
  },
  twitter: {
    ariaLabel: "X (Twitter)",
    url: "https://x.com/Thorsignia",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        {/* X logo */}
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#FFFFFF"/>
      </svg>
    ),
  },
  instagram: {
    ariaLabel: "Instagram",
    url: "https://www.instagram.com/thorsignia/",
    svg: (
      // Instagram uses a gradient background with white icon
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
        {/* Font Awesome Instagram */}
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    ),
  },
  linkedin: {
    ariaLabel: "LinkedIn",
    url: "https://www.linkedin.com/company/thorsignia/?originalSubdomain=in",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#0A66C2">
        {/* Font Awesome LinkedIn */}
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
      </svg>
    ),
  },
};

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
            {/* Social media icons row */}
            <div className="flex space-x-6 items-center mt-2"> {/* Added margin-top for better spacing */}
              {/* Facebook */}
              <a href={socialIcons.facebook.url} target="_blank" rel="noopener noreferrer" aria-label={socialIcons.facebook.ariaLabel} className="group hover:scale-110 transition-transform">
                <div className="w-6 h-6 flex items-center justify-center"> {/* Increased size to 24px */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#1877F2" className="w-6 h-6">
                    {/* Font Awesome Facebook F */}
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </div>
              </a>

              {/* Twitter/X */}
              <a href={socialIcons.twitter.url} target="_blank" rel="noopener noreferrer" aria-label={socialIcons.twitter.ariaLabel} className="group hover:scale-110 transition-transform">
                <div className="w-6 h-6 flex items-center justify-center"> {/* Increased size to 24px */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#FFFFFF" className="w-6 h-6">
                    {/* X logo */}
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a href={socialIcons.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={socialIcons.instagram.ariaLabel} className="group hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-sm flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className="w-5 h-5"> {/* Slightly smaller to account for gradient background */}
                    {/* Instagram icon */}
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a href={socialIcons.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label={socialIcons.linkedin.ariaLabel} className="group hover:scale-110 transition-transform">
                <div className="w-6 h-6 flex items-center justify-center"> {/* Increased size to 24px */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#0A66C2" className="w-6 h-6">
                    {/* LinkedIn icon */}
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column CONTAINER: Now acts as a flex container for the next two items */}
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

        {/* Single full-width divider line below the grid */}
        <div className="w-full h-px bg-gray-700/40 my-6"></div>


        {/* Bottom Row: Copyright & Policies (kept layout, adjusted styling) */}
        <div className="pt-8 mt-8"> {/* Added top margin */}
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
      </div>
    </footer>
  );
};

export default Footer;
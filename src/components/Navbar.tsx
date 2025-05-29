// This component should be used within a React Router context (e.g., inside a <BrowserRouter>)

import React, { useState, useRef, useEffect } from "react";
// Using React.JSX.IntrinsicElements instead of ComponentPropsWithoutRef

// Import the logo from assets folder
import logoImage from "../assets/images/thor-signia-logo.png"; // Make sure this path is correct relative to this component

import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Keep icon imports and import LucideIcon
// Import Menu explicitly here so we can use typeof Menu to get the props type
import {
  Menu, // <-- Keep imports just in case they are used by iconMap or elsewhere
  X,    // <-- Keep imports just in case they are used by iconMap or elsewhere
  LucideIcon, // <--- Imported LucideIcon type
  // Service Icons
  Speech,
  Users,
  Cpu,
  Bot,
  ListTree,
  Shield, // For Threat Detection
  // New service icons
  Mic,
  MessageSquare,
  Share2,
  LineChart,
  BrainCircuit,
  Megaphone,
  BarChart3,
  ShieldAlert,
  // Case Study Icons
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Landmark,
  Sparkles, // This is a different Sparkles icon, used in data. Keep both if needed.
  Wrench, // Used for Predictive Maintenance
  // Cybersecurity Icons
  Bug,
  CloudAlert,
  Terminal,
  Swords,
  CircuitBoard,
  GraduationCap,
  // Other Icons used in data or component
  FlaskConical,
  Book,
  ShieldCheck,
  TrendingUp,
  ChevronDown, // Added for dropdown indicators
  // Icons potentially for the main section boxes (added for illustration)
  Settings, // Example icon for Services
  Database, // Example icon for Case Studies
  Icon, // Keep Icon if it's used elsewhere or potentially needed
  List, // Keep List imported if used elsewhere in iconMap/data
} from "lucide-react";

// Mapping from string name to icon component
const iconMap = {
  // Service Icons
  Speech,
  Users,
  Cpu,
  Bot,
  ListTree,
  Shield,
  Mic,
  MessageSquare,
  Share2,
  LineChart,
  BrainCircuit,
  Megaphone,
  BarChart3,
  ShieldAlert,
  // Case Study Icons
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Landmark,
  Sparkles,
  Wrench,
  // Cybersecurity Icons
  Bug,
  CloudAlert,
  Terminal,
  Swords,
  CircuitBoard,
  GraduationCap,
  // Other Mappings if needed for other parts of the app or main sections
  FlaskConical,
  Book,
  ShieldCheck,
  TrendingUp,
  Settings, // Added to map
  Database, // Added to map
  List, // Ensure List is mapped if used by IconComponent elsewhere
  X, // Ensure X is mapped if used by IconComponent elsewhere
  Menu, // Ensure Menu is mapped if used by IconComponent elsewhere
};

// Define type for the icon name keys
type IconName = keyof typeof iconMap;

// --- Type definition for IconComponent props ---
// Define the props type directly based on what LucideIcon components accept
type LucideIconComponentProps = {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // Allow any other props that might be passed
};

// Helper component to render icon by name
const IconComponent = ({
  name,
  // Use the derived props type
  ...props
}: { name: IconName } & LucideIconComponentProps) => { // Using the derived type here
  const Icon = iconMap[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    // Fallback div should also accept props like className and style
    // Added more distinct fallback color for visibility during development
    // Pass props to the fallback div as well
    return <div className={cn("w-4 h-4 inline-block bg-red-400 rounded-full", props.className)} style={props.style} {...props}></div>;
  }
  // Pass remaining props (like className, style, size, color etc.) to the Icon component
  // The Icon component (a LucideIcon) is typed to accept these props, so this is safe.
  return <Icon {...props} />;
};


// Define interface for navigation items
interface NavItem {
  title: string;
  href: string;
  dropdown: boolean;
  items?: {
    title: string;
    href: string;
    icon?: string; // icon name string
  }[];
  // Added optional property for the icon of the main dropdown section
  mainIcon?: IconName; // Use IconName type here
  mainDescription?: string; // Added optional description for the main section box
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    dropdown: false,
  },
  {
    title: "About",
    href: "/about#top",
    dropdown: false,
  },
  {
    title: "Services",
    href: "/services#top",
    dropdown: true,
    mainIcon: "Settings", // Using "Settings" from Lucide
    mainDescription: "Explore all our cutting-edge Enterprise AI Solutions.",
    items: [
      {
        title: "Intelligent Voice Automation",
        href: "/services/intelligent-voice-automation",
        icon: "Mic",
      },
      {
        title: "Social Engagement Automation",
        href: "/services/social-engagement-automation",
        icon: "Share2",
      },
      {
        title: "AI-Powered Lead Intelligence",
        href: "/services/lead-intelligence",
        icon: "BarChart3",
      },
      {
        title: "Interactive AI Chatbots",
        href: "/services/interactive-ai-chatbots",
        icon: "Bot",
      },
      {
        title: "Automated Campaign Orchestration",
        href: "/services/automated-campaign-orchestration",
        icon: "Megaphone",
      },
       {
        title: "AI-Powered Threat Detection",
       href: "/services/threat-detection",
       icon: "ShieldAlert",
       },
    ],
  },
{
  title: "Cybersecurity",
  href: "/cyber-security#top", // Assuming this is a general landing page
  dropdown: true,
  mainIcon: "ShieldCheck", // Using ShieldCheck for the main section icon
  mainDescription: "Explore our comprehensive cybersecurity services.",
  items: [
    {
      title: "Vulnerability Assessment & Pen Testing",
      href: "/cyber-security/vulnerability-assessment",
      icon: "Bug",
    },
    {
      title: "Cloud Security Assessments",
      href: "/cyber-security/cloud-security-assessments",
      icon: "CloudAlert",
    },
    {
      title: "Offensive Security",
      href: "/cyber-security/offensive-security",
      icon: "Terminal",
    },
    {
      title: "Red Teaming Services",
      href: "/cyber-security/red-teaming",
      icon: "Swords",
    },
    {
      title: "IOT/OT Security",
      href: "/cyber-security/iot-security",
      icon: "CircuitBoard",
    },
    {
      title: "vCISO Services",
      href: "/cyber-security/vciso-services",
      icon: "Briefcase",
    },
    {
      title: "Training & Awareness",
      href: "/cyber-security/security-training",
      icon: "GraduationCap",
    },
  ],

  },
  {
    title: "Case Studies",
    href: "/case-studies#top",
    dropdown: true,
    mainIcon: "Database", // Using "Database" from Lucide
    mainDescription: "Discover how our AI solutions deliver measurable results for clients.",
    items: [
      {
        title: "AI-Powered Quality Control System",
        href: "/case-studies/sgf-fab-ai-quality-control",
        icon: "ClipboardCheck",
      },
      {
        title: "AI Voice Assistant for Medical Education",
        href: "/case-studies/doctor-dreams-ai-voice-assistant",
        icon: "Stethoscope",
      },
      {
        title: "AI Chatbot for Workspace Management",
        href: "/case-studies/anthill-iq-smart-workspace",
        icon: "Briefcase",
      },
      {
        title: "AI-Powered Customer Service Revolution",
        href: "/case-studies/financial-services-ai-transformation",
        icon: "Landmark",
      },
      {
        title: "AI-Driven Retail Personalization Engine",
        href: "/case-studies/retail-personalization-engine",
        icon: "Sparkles", // Using the Sparkles icon mapped above
      },
      {
        title: "Healthcare AI Voice Assistant",
        href: "/case-studies/healthcare-voice-assistant",
        icon: "Stethoscope",
      },
      {
        title: "AI-Powered Predictive Maintenance",
        href: "/case-studies/manufacturing-predictive-maintenance",
        icon: "Wrench",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog#top",
    dropdown: false,

  },
  {
    title: "AI Engineers",
    href: "/ai-engineers#top",
    dropdown: false,
  },
  {
    title: "Awards",
    href: "/awards#top",
    dropdown: false,
  },
  {
    title: "Careers",
    href: "/careers#top",
    dropdown: false,
  },
  {
    title: "Contact",
    href: "/contact#top",
    dropdown: false,
  },

];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Use one state for both desktop and mobile dropdowns, managed by click logic
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const currentHash = location.hash;


  const desktopNavRef = useRef<HTMLDivElement>(null);

  // Effect to close desktop dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Only close desktop dropdown if it's open and click is outside the ref element
      if (window.innerWidth >= 768 && desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node) && openDropdown !== null) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]); // Only re-run if openDropdown changes

  // Effect to handle scrolling on route change (including hash changes)
   useEffect(() => {
        // Close mobile menu and desktop dropdown on route change
        setIsMenuOpen(false);
        setOpenDropdown(null); // Close any open dropdown

        // Scroll to element if hash exists
        if (currentHash) {
             // Find the element by ID (remove the '#' from the hash)
             const targetElement = document.getElementById(currentHash.substring(1));
             if (targetElement) {
                 // Use requestAnimationFrame for smoother scroll and to wait for potential layout shifts
                 requestAnimationFrame(() => {
                     targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                 });
             }
        } else {
             // Scroll to top on pathname change if no hash is present
             // Only scroll to top if the pathname actually changed
             // Check if we navigated, not just initial load
             if (location.key !== 'default') {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
             } else {
                 // On initial load with no hash, ensure it's at the top instantly
                  window.scrollTo({ top: 0, behavior: 'instant' });
             }
        }
   }, [location]); // Re-run effect whenever the location object changes


   // Determine if the dropdown trigger text should be highlighted (active)
   const isDropdownTriggerActiveByUrl = (item: NavItem) => {
      if (!item.dropdown) return false; // Only applies to dropdowns

      // Check if the current path *starts* with the base href (e.g., /services for /services#...)
       // and the base href is not just '/' (home page)
       if (item.href !== '/') {
           // Check if the current pathname matches the item's base href exactly (e.g., /services)
           // OR if any sub-item href (which includes hash) matches the current full URL.
           const currentFullUrl = pathname + (currentHash || '');
            const subItemMatch = item.items?.some(subItem => subItem.href === currentFullUrl);

            // Also check if the current pathname is a direct child path (e.g., /services/...)
            // This handles cases where the base href is just the section like /services
            const isBasePathOrChild = pathname.startsWith(item.href) && (pathname.length === item.href.length || pathname[item.href.length] === '/');


            return isBasePathOrChild || !!subItemMatch;
       }

       // Handle the case where the item's href is '/' (Home). Should only be active if it's exactly '/'
       // (This shouldn't happen for dropdowns in this structure, but defensively checks)
       if (item.href === '/' && pathname === '/' && currentHash === '') return true;

       return false;
   };

   // Toggle dropdown visibility (used by both desktop and mobile)
   const toggleDropdown = (itemTitle: string) => {
       setOpenDropdown(openDropdown === itemTitle ? null : itemTitle);
   };

  // Handle clicks on ANY navigation link originating from the menu/dropdowns
  const handleNavLinkClick = () => {
      // Close the desktop dropdown
      setOpenDropdown(null);
      // Close the mobile menu
      setIsMenuOpen(false);
      // Note: The useEffect listening to location handles the scrolling
  };

  // Function to determine if a mobile link is active based on URL
  const isMobileLinkActive = (href: string) => {
    const currentFullUrl = pathname + (currentHash || '');
    // For exact matches (including hash)
    if (currentFullUrl === href) return true;
    // For base path matches without hash (e.g., /services matches /services#something)
    // This check is simplified, considering main links might have hashes.
    // A more robust check could see if pathname starts with the href's path part.
     const hrefPath = href.split('#')[0];
     const currentPath = pathname.split('#')[0];
     if (hrefPath !== '/' && currentPath.startsWith(hrefPath) && (currentPath.length === hrefPath.length || (currentPath.length > hrefPath.length && currentPath[hrefPath.length] === '/'))) return true;

    // Special case for home page
    if (href === '/' && pathname === '/' && currentHash === '') return true;

    return false;
  };


  return (
    // Background is solid white with border-b
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Adjusted header height: md:h-24 for desktop, h-28 for mobile */}
      {/* These heights (96px and 112px) are what the logo will fill */}
      <div className="container flex h-28 md:h-24 items-center justify-between">
        {/* Logo Link with imported logo and increased size */}
        <Link to="/" className="flex items-center" onClick={handleNavLinkClick}>
          {/* Using the imported logo with responsive height */}
          {/* Height matches container: h-28 for mobile (112px), md:h-24 for desktop (96px) */}
          <img
            src={logoImage}
            alt="Thor Signia Logo"
            // Height classes match container height, width scales proportionally
            className="h-28 md:h-24 z-10 relative" // Removed drop-shadow-sm
            style={{ objectFit: 'contain' }} // Ensure image fits within its element maintaining aspect ratio
          />
        </Link>

        {/* Desktop Navigation - Font size md:text-base (16px), px-2 padding */}
        <div className="hidden md:flex items-center" ref={desktopNavRef}>
          {navItems.map((item) => (
            // Added flex-shrink-0 to prevent items from squeezing too much
            <div key={item.title} className="relative group h-full flex items-center flex-shrink-0">
              {item.dropdown ? (
                // Desktop Custom dropdown trigger (button)
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className={cn(
                    "md:text-base font-bold transition-colors h-full flex items-center px-2 whitespace-nowrap", // md:text-base, px-2
                    "hover:text-[#88bf42]",
                    // Active state based on URL match or if the dropdown is open
                    isDropdownTriggerActiveByUrl(item) || openDropdown === item.title ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
                     "flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.title}
                >
                   {/* Text style reflects URL activity or default */}
                   <span className={isDropdownTriggerActiveByUrl(item) || openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"}>
                       {item.title}
                   </span>
                   <ChevronDown className={cn(
                       "h-4 w-4 transition-transform duration-200",
                       openDropdown === item.title ? "rotate-180" : "rotate-0",
                       // Apply hover/active color to arrow as well
                        isDropdownTriggerActiveByUrl(item) || openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"
                   )} />
                </button>
              ) : (
                // Desktop Standard non-dropdown link
                <Link
                  to={item.href}
                  className={cn(
                    "md:text-base font-bold transition-colors hover:text-[#88bf42] h-full flex items-center px-2 whitespace-nowrap", // md:text-base, px-2
                    // Handle /home#top vs /
                    (item.href === '/' && pathname === '/' && currentHash === '') ? "text-[#88bf42] border-b-2 border-[#88bf42]" : // Exact home match
                    (item.href !== '/' && pathname === item.href && currentHash === '') ? "text-[#88bf42] border-b-2 border-[#88bf42]" : // Exact non-hash match
                    "text-foreground border-b-2 border-transparent",
                     "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                   onClick={handleNavLinkClick} // Close mobile menu if somehow open
                >
                  {item.title}
                </Link>
              )}

              {/* Desktop Custom Dropdown Content Panel */}
              {item.dropdown && openDropdown === item.title && item.items && ( // Ensure items exist
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-0", // Center the dropdown horizontally
                    "w-[700px] max-w-[calc(100vw-32px)]", // Reduced width from 800px to 700px, kept max-width
                    "bg-background border rounded-md shadow-lg p-6", // Increased padding
                    "z-50 animate-in slide-in-from-top-1 fade-in-0",
                    "flex gap-8" // Increased gap between columns
                  )}
                   role="menu" // ARIA role for accessibility
                   aria-orientation="vertical"
                >
                  {/* Left Column: Main Section Link/Box */}
                  <div className="w-64 flex-shrink-0"> {/* Increased fixed width for the main column */}
                      <Link
                        to={item.href} // Link to the main page (e.g., /services, /case-studies)
                        onClick={handleNavLinkClick} // Close dropdown and mobile menu on click
                        className={cn(
                          "flex flex-col h-full p-5 rounded-md", // Increased padding in the main box
                          // Green background with opacity for the main section box
                          "bg-[#88bf42]/10",
                          "hover:bg-[#88bf42]/20",
                          "transition-colors duration-200",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isDropdownTriggerActiveByUrl(item) ? "border border-[#88bf42]" : "border border-transparent" // Highlight border
                        )}
                         role="menuitem" // ARIA role
                      >
                        {/* Icon (if available) */}
                        {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                             <IconComponent
                                name={item.mainIcon} // Use IconName type directly
                                className="h-10 w-10 text-[#88bf42] mb-4" // Icon size and color
                              />
                          )}
                        {/* Title */}
                        <div className="text-xl font-semibold text-foreground leading-tight mb-2">{item.title} Overview</div>
                        {/* Description */}
                         {item.mainDescription && (
                             <p className="text-sm text-muted-foreground leading-snug">{item.mainDescription}</p>
                         )}
                      </Link>
                  </div>

                  {/* Right Column: List of Sub-Items - Now one by one */}
                  <div className="flex-1"> {/* Takes remaining space */}
                     <ul className="flex flex-col gap-y-3"> {/* Changed to flex column, kept vertical gap */}
                       {item.items.map((subItem) => {
                          // Ensure icon name exists
                           const subItemIconName = subItem.icon as IconName | undefined;
                           const hasValidIcon = subItemIconName && typeof iconMap[subItemIconName] !== 'undefined';

                          const currentFullUrl = pathname + (currentHash || '');
                          const isSubItemActive = currentFullUrl === subItem.href;

                         return (
                           <li key={subItem.title}>
                             <Link
                               to={subItem.href}
                               onClick={handleNavLinkClick} // Close dropdown and mobile menu on click
                               className={cn(
                                 "flex items-center gap-3 rounded-sm px-3 py-2 outline-none transition-colors", // Increased gap, slightly more padding
                                 "hover:bg-[#88bf42]/20 hover:text-[#88bf42] focus:bg-[#88bf42]/20 focus:text-[#88bf42]",
                                  // Font size text-base (16px), active is green and bold, inactive is text-foreground
                                  isSubItemActive ? "text-[#88bf42] font-semibold text-base" : "text-foreground text-base"
                               )}
                                role="menuitem" // ARIA role
                             >
                               {hasValidIcon && (
                                  <IconComponent
                                     name={subItemIconName} // Use IconName type directly
                                     className={cn("h-5 w-5 flex-shrink-0 text-muted-foreground")} // Icon size and color (gray)
                                   />
                               )}
                               <span className="leading-snug">{subItem.title}</span> {/* Adjusted leading */}
                             </Link>
                           </li>
                         );
                       })}
                     </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Toggle - Using inline SVG with explicit size */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            // Removed size="icon"
            // Button container size h-14 w-14 (56px)
            className="h-14 w-14 text-foreground hover:text-[#88bf42]" // Set button size here
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              // Close Icon (X) as SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" // Inherits color from button text
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // Apply size using inline style for higher specificity (40px)
                style={{ height: '40px', width: '40px' }}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Menu Icon (Hamburger) as SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" // Inherits color from button text
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                 // Apply size using inline style for higher specificity (40px)
                style={{ height: '40px', width: '40px' }}
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Text color is text-foreground for inactive items */}
      {/* Height calc(100vh - mobile header height h-28 = 112px) */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden h-[calc(100vh-112px)] overflow-y-auto"> {/* Height calc */}
          <nav className="flex flex-col space-y-4 mt-4"> {/* Spacing */}
            {navItems.map((item) => (
              <div key={item.title}>
                {/* Mobile links and dropdowns */}
                {!item.dropdown ? (
                  // Mobile Standard non-dropdown link
                  <Link
                    to={item.href}
                    className={cn(
                      "text-lg font-medium block py-2", // text-lg, py-2
                       // Default text-foreground, active is bold text-foreground, hover is green
                       "text-foreground",
                      isMobileLinkActive(item.href) && "font-bold",
                      "hover:text-[#88bf42]"
                    )}
                    onClick={handleNavLinkClick} // Close menu on click
                  >
                    {item.title}
                  </Link>
                ) : (
                   // Mobile Dropdown Trigger (clickable button)
                   <div>
                     <button
                        onClick={() => toggleDropdown(item.title)}
                        className={cn(
                          "text-lg font-medium w-full text-left py-2", // text-lg, py-2
                          "flex justify-between items-center", // Alignment
                          // Default text-foreground, active is bold text-foreground
                           "text-foreground",
                          isDropdownTriggerActiveByUrl(item) && "font-bold",
                           "hover:text-foreground" // Keep hover subtle on trigger
                        )}
                         aria-expanded={openDropdown === item.title}
                     >
                       <span>{item.title}</span>
                        {/* Chevron icon (always gray h-6 w-6) */}
                       <ChevronDown className={cn(
                           "h-6 w-6 transition-transform duration-200 text-muted-foreground",
                           openDropdown === item.title ? "rotate-180" : "rotate-0"
                       )} />
                     </button>

                    {/* Mobile Dropdown Content */}
                    {item.items && openDropdown === item.title && (
                      <div className="mt-2 ml-4 flex flex-col space-y-2"> {/* Indented sub-items */}
                        {/* Main Link for Mobile Dropdown Section */}
                         <Link
                            to={item.href} // Link to main page
                            onClick={handleNavLinkClick} // Close menu on click
                            className={cn(
                              "text-base font-semibold py-1", // text-base, py-1, font-semibold
                               // Default text-foreground, active is bold text-foreground, hover is green
                               "text-foreground", // text-foreground
                              isMobileLinkActive(item.href) && "font-bold",
                              "hover:text-[#88bf42]",
                              "flex items-center gap-2"
                            )}
                         >
                              {/* Optional Main Icon for Mobile (always gray h-4 w-4) */}
                               {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                                  <IconComponent
                                     name={item.mainIcon}
                                     className="h-4 w-4 text-muted-foreground" // Small gray icon
                                   />
                               )}
                               <span>{item.title} Overview</span> {/* Added Overview */}
                         </Link>
                        {/* Sub-Items for Mobile Dropdown */}
                        {item.items.map((subItem) => {
                            const subItemIconName = subItem.icon as IconName | undefined;
                            const hasValidIcon = subItemIconName && typeof iconMap[subItemIconName] !== 'undefined';

                           const currentFullUrl = pathname + (currentHash || '');
                           const isSubItemActive = currentFullUrl === subItem.href;

                          return (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className={cn(
                                "text-base py-1", // text-base, py-1
                                 // Default text-foreground, active is bold text-foreground, hover is green
                                isMobileLinkActive(subItem.href) ? "text-foreground font-semibold" : "text-foreground", // text-foreground
                                "hover:text-[#88bf42]",
                                "flex items-center gap-2"
                              )}
                              onClick={handleNavLinkClick} // Close menu on click
                            >
                              {hasValidIcon && (
                                <IconComponent
                                  name={subItemIconName}
                                  className={cn("h-5 w-5 flex-shrink-0 text-muted-foreground")} // Icon size and color (gray)
                                />
                              )}
                              <span>{subItem.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                   </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
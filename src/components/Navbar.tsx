'use client';

import logoImage from "../assets/images/thor-signia-logo.png"; // Make sure this path is correct relative to this component
import React, { useState, useRef, useEffect } from "react"; // Standard React import
import { Link as RouterLink, useLocation } from "react-router-dom"; // Renamed Link to RouterLink to avoid conflict with lucide-react/Icon
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
  // Include ChevronDown if it's ever used dynamically by name
  ChevronDown,
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
    title: "On Demand AI",
    href: "/ai-engineers#top",
    dropdown: false,
  },
  {
    title: "Case Studies",
    href: "/case-studies#top",
    dropdown: true,
    mainIcon: "Database", // Using "Database" from Lucide
    mainDescription: "Discover how our AI solutions deliver measurable results for clients.",
    items: [
      {
        title: "Digital Transformation for Industrial Growth",
        href: "/case-studies/sgf-fab-ai-quality-control",
        icon: "ClipboardCheck",
      },
      {
        title: "AI Automation for Student Engagement",
        href: "/case-studies/doctor-dreams-ai-voice-assistant",
        icon: "Stethoscope",
      },
      {
        title: "Scalable Web Infrastructure for a Growing Coworking Brand",
        href: "/case-studies/anthill-iq-smart-workspace",
        icon: "Briefcase",
      },
      {
        title: "AI Automation for Sales & Social Commerce",
        href: "/case-studies/financial-services-ai-transformation",
        icon: "Landmark",
      },

    ],
  },
  {
    title: "Blog",
    href: "/blog#top", // Link to the main blog listing page
    dropdown: true,
    mainIcon: "Book", // Icon for the main Blog link in the dropdown (already set)
    mainDescription: "Stay updated with our latest articles on Enterprise AI, Industry insights, and Tech.", // Description for the main Blog link (already set)
    items: [
      {
        title: "The Future of Enterprise AI: Trends to Watch in 2025",
        href: "/blog/future-of-enterprise-ai-trends-2025#top", // Added #top
        icon: "TrendingUp", // Changed from BookOpen to TrendingUp (Trends)
      },
      {
        title: "How Custom AI Solutions Are Transforming Manufacturing",
        href: "/blog/how-custom-ai-solutions-are-transforming-manufacturing#top", // Added #top
        icon: "Wrench", // Changed from Factory (not mapped) to Wrench (Industry/Building/Tooling)
      },
      {
        title: "Ethical Considerations in AI Development and Deployment",
        href: "/blog/ethical-considerations-in-ai-development-and-deployment#top", // Added #top
        icon: "ShieldCheck", // Changed from Briefcase to ShieldCheck (Responsibility/Trust/Security)
      },
      {
        title: "Building a Successful Enterprise AI Strategy From Scratch",
        href: "/blog/building-a-successful-enterprise-ai-strategy-from-scratch#top", // Added #top
        icon: "Settings", // Changed from Landmark to Settings (Strategy/Configuration)
      },
      {
        title: "Real-time Data Processing: How AI Is Enabling Faster Decision Making",
        href: "/blog/real-time-data-processing-how-ai-is-enabling-faster-decision-making#top", // Added #top
        icon: "Cpu", // Changed from Clock to Cpu (Processing/AI)
      },
      {
        title: "How to Build a High-Performing AI Development Team",
        href: "/blog/how-to-build-a-high-performing-ai-development-team#top", // Added #top
        icon: "Users", // Changed from Clock to Users (Team)
      },
    ],
  },

  {
    title: "Accolades",
    href: "/awards#top",
    dropdown: false,
  },
  {
    title: "Careers",
    href: "/careers#top",
    dropdown: false,
  },
  // === ADDED PRICING HERE ===
  // {
  //   title: "Pricing",
  //   href: "/pricing#top", // Assuming a pricing page exists
  //   dropdown: false,
  // },
  // === END ADDED PRICING ===
  {
    title: "Contact",
    href: "/contact#top",
    dropdown: false,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const currentHash = location.hash;


  const desktopNavRef = useRef<HTMLDivElement>(null);

  // Effect to close desktop dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Only close on outside click if screen width is >= 1024px (lg breakpoint) where desktop nav is visible
      if (window.innerWidth >= 1024 && desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node) && openDropdown !== null) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  // Effect to handle scrolling on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    if (currentHash) {
      const targetElement = document.getElementById(currentHash.substring(1));
      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    } else {
      // Only scroll to top on route changes initiated by React Router (not initial load unless necessary)
      // location.key changes on link clicks
      if (location.key !== 'default') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         // For initial page load or refresh without hash, just scroll to top instantly
         window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, [location, currentHash]);


  // Handle clicks on ANY navigation link originating from the menu/dropdowns
  const handleNavLinkClick = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  // Function to determine if a mobile link is active based on URL (mostly for mobile menu styling)
  // This function is primarily used for styling the mobile menu items, not desktop ones.
  const isMobileLinkActive = (href: string) => {
    const currentFullUrl = pathname + (currentHash || '');
    if (currentFullUrl === href) return true;
    // For base path matches without hash (e.g., /services matches /services#something)
     const hrefPath = href.split('#')[0];
     const currentPath = pathname.split('#')[0];
     if (hrefPath !== '/' && currentPath.startsWith(hrefPath) && (currentPath.length === hrefPath.length || (currentPath.length > hrefPath.length && currentPath[hrefPath.length] === '/'))) return true;

    // Special case for home page
    if (href === '/' && pathname === '/' && currentHash === '') return true;

    return false;
  };


  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b">
      {/* Increased the max-width of the container div */}
      {/* Using md:px-6 lg:px-8 for padding from tablets upwards */}
      <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* Logo width changes: w-48 (mobile), md:w-40 (tablet), lg:w-44 (desktop) */}
          <div className="w-48 md:w-40 lg:w-44 flex-shrink-0 mr-2 md:mr-4 lg:mr-6">
            <RouterLink to="/" onClick={handleNavLinkClick}>
              <img
                src="/thor-signia-logo.png"
                alt="Thor Signia Logo"
                className="h-auto w-auto" // Kept auto for better scaling
              />
            </RouterLink>
          </div>

          {/* Desktop Navigation - appears on lg+ screens */}
          {/* ⭐ MODIFIED: Changed space-x classes for tighter spacing ⭐ */}
          {/* Still uses justify-end for right alignment */}
          {/* From md:space-x-3 lg:space-x-4 xl:space-x-6 */}
          {/* To   md:space-x-2 lg:space-x-3 xl:space-x-4 */}
          <div className="hidden lg:flex md:space-x-2 lg:space-x-3 xl:space-x-4 flex-1 justify-end" ref={desktopNavRef}>
            {navItems.map((item) => (
            <div key={item.title} className="relative group h-full flex items-center">
              {item.dropdown ? (
                // Desktop Custom dropdown trigger (button)
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                  className={cn(
                    // Base styles for all desktop links (dropdown or not)
                    // Using consistent text-base size
                    // Using md:px-3 for internal padding from md upwards
                    "text-base font-semibold transition-colors h-full flex items-center px-1 md:px-3 whitespace-nowrap",
                    "hover:text-[#88bf42]",
                    // Active state based on URL match or if the dropdown is open
                    openDropdown === item.title ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
                     "flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.title}
                >
                   {/* Text style now only reflects URL activity or default */}
                   <span className={openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"}>
                       {item.title}
                   </span>
                   <ChevronDown className={cn(
                       "h-4 w-4 transition-transform duration-200",
                       openDropdown === item.title ? "rotate-180" : "rotate-0",
                       // Apply hover/active color to arrow as well
                        openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"
                   )} />
                </button>
              ) : (
                // Desktop Standard non-dropdown link
                <RouterLink
                  to={item.href}
                  className={cn(
                     // Base styles for all desktop links (dropdown or not)
                    // Using consistent text-base size
                    // Using md:px-3 for internal padding from md upwards
                    "text-base font-semibold transition-colors hover:text-[#88bf42] h-full flex items-center px-1 md:px-3 whitespace-nowrap",
                    // Handle /home#top vs /
                    (item.href === '/' && pathname === '/' && currentHash === '') ? "text-[#88bf42] border-b-2 border-[#88bf42]" : // Exact home match
                    // Check if the current path starts with the item's path, ignoring hash for the base check
                    (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "text-[#88bf42] border-b-2 border-[#88bf42]" : // Partial match for main sections
                    "text-foreground border-b-2 border-transparent",
                     "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                   onClick={handleNavLinkClick} // Close mobile menu if somehow open
                >
                  {item.title}
                </RouterLink>
              )}

              {/* Desktop Custom Dropdown Content Panel */}
              {item.dropdown && openDropdown === item.title && item.items && ( // Ensure items exist
                <div
                  className={cn(
                    // Positioning relative to the trigger button
                    // --- Updated positioning to center the dropdown ---
                     "absolute top-full left-1/2 -translate-x-1/2 mt-0", // Center relative to trigger
                    // --- End Updated Positioning ---

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
                      <RouterLink
                        to={item.href} // Link to the main page (e.g., /services, /case-studies)
                        onClick={handleNavLinkClick} // Close dropdown and mobile menu on click
                        className={cn(
                          "flex flex-col h-full p-5 rounded-md", // Increased padding in the main box
                          // Green background with opacity for the main section box
                          "bg-[#88bf42]/10",
                          "hover:bg-[#88bf42]/20",
                          "transition-colors duration-200",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          // Highlight border if any page within this section is active
                           (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "border border-[#88bf42]" : "border border-transparent" // Highlight border
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
                        {/* Title - Kept existing size scaling */}
                        <div className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-1">{item.title} Overview</div> {/* Added Overview */}
                        {/* Description */}
                         {item.mainDescription && (
                             <p className="text-sm text-muted-foreground leading-snug">{item.mainDescription}</p>
                         )}
                      </RouterLink>
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
                             <RouterLink
                               to={subItem.href}
                               onClick={handleNavLinkClick} // Close dropdown and mobile menu on click
                               className={cn(
                                 // Using consistent text-base size
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
                             </RouterLink>
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

        {/* Mobile menu button - positioned to the right of desktop nav, hidden on lg+ screens */}
        {/* Visible below lg (on mobile and tablet) */}
        <div className="lg:hidden ">
          <Button
            variant="ghost"
            className="h-14 w-14 text-foreground hover:text-[#88bf42]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ height: '40px', width: '40px' }}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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

      {/* Mobile Menu Panel - Full screen overlay, hidden on lg+ screens */}
      {/* Visible below lg (on mobile and tablet) */}
      {isMenuOpen && (
        <div className="container pb-4 lg:hidden h-[calc(100vh-112px)] overflow-y-auto">
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <div key={item.title}>
                {!item.dropdown ? (
                  <RouterLink
                    to={item.href}
                    className={cn(
                      // Mobile link styles - text-base font-medium
                      "text-base font-medium block py-2",
                      "text-foreground",
                       // Use startsWith for base path matching
                      (item.href === '/' && pathname === '/' && currentHash === '') ? "text-[#88bf42] font-bold" : // Exact home match
                      (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "text-[#88bf42] font-bold" : // Partial match for main sections
                      "text-foreground"
                    )}
                    onClick={handleNavLinkClick}
                  >
                    {item.title}
                  </RouterLink>
                ) : (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      className={cn(
                        // Mobile dropdown title styles - text-base font-medium
                        "text-base font-medium w-full text-left py-2",
                        "flex justify-between items-center",
                        "text-foreground",
                        openDropdown === item.title && "font-bold",
                        "hover:text-foreground"
                      )}
                      aria-expanded={openDropdown === item.title}
                    >
                      <span className={openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"}>
                        {item.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-6 w-6 transition-transform duration-200 text-muted-foreground",
                          openDropdown === item.title ? "rotate-180" : "rotate-0",
                          openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"
                        )}
                      />
                    </button>
                    {/* Mobile Dropdown Content */}
                    {item.items && openDropdown === item.title && (
                      <div className="mt-2 ml-4 flex flex-col space-y-2">
                        {/* Main Link for Mobile Dropdown Section - Kept text-base font-semibold */}
                        <RouterLink
                          to={item.href}
                          onClick={handleNavLinkClick}
                          className={cn(
                            "text-base font-semibold py-1", // Keep text-base font-semibold for overview link
                            "text-foreground",
                            // Use startsWith for base path matching
                            (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "text-[#88bf42]" : "text-foreground",
                            "hover:text-[#88bf42]",
                            "flex items-center gap-2"
                          )}
                        >
                          {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                            <IconComponent
                              name={item.mainIcon}
                              className="h-4 w-4 text-muted-foreground"
                            />
                          )}
                          <span>{item.title} Overview</span>
                        </RouterLink>

                        {/* Sub-Items for Mobile Dropdown */}
                        {item.items.map((subItem) => {
                          const subItemIconName = subItem.icon as IconName | undefined;
                          const hasValidIcon = subItemIconName && typeof iconMap[subItemIconName] !== 'undefined';

                          // Check if the current URL (pathname + hash) exactly matches the subItem href
                          const isSubItemActive = pathname + (currentHash || '') === subItem.href;

                          return (
                            <RouterLink
                              key={subItem.title}
                              to={subItem.href}
                              className={cn(
                                "text-base py-1", // text-base for sub-items, active is font-semibold
                                isSubItemActive ? "text-foreground font-semibold" : "text-muted-foreground", // Active state for sub-items (check exact match)
                                "hover:text-[#88bf42]",
                                "flex items-center gap-2"
                              )}
                              onClick={handleNavLinkClick}
                            >
                              {hasValidIcon && (
                                <IconComponent
                                  name={subItemIconName}
                                  className="h-5 w-5 flex-shrink-0 text-muted-foreground"
                                />
                              )}
                              <span>{subItem.title}</span>
                            </RouterLink>
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
      </div>
    </header>
  );
}
// This component should be used within a React Router context (e.g., inside a <BrowserRouter>)

import React, { useState, useRef, useEffect } from "react"; // Standard React import

import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Keep icon imports and import LucideIcon
import {
  Menu, // Keep Menu as we may still need its type in other contexts, but not strictly for IconComponent now
  X,
  LucideIcon, // <--- Imported LucideIcon type
  // Service Icons
  Speech,
  Users,
  Cpu,
  Bot,
  ListTree,
  Shield, // For Threat Detection
  // Case Study Icons
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Landmark,
  Sparkles,
  Wrench, // Used for Predictive Maintenance
  // Other Icons used in data or component
  FlaskConical,
  Book,
  ShieldCheck,
  TrendingUp,
  ChevronDown, // Added for dropdown indicators
  // Icons potentially for the main section boxes (added for illustration)
  Settings, // Example icon for Services
  Database, // Example icon for Case Studies
  Icon // Keep Icon if it's used elsewhere or potentially needed
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
  // Case Study Icons
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Landmark,
  Sparkles,
  Wrench,
  // Other Mappings if needed for other parts of the app or main sections
  FlaskConical,
  Book,
  ShieldCheck,
  TrendingUp,
  Settings, // Added to map
  Database // Added to map
};

// Define type for the icon name keys
type IconName = keyof typeof iconMap;

// Helper component to render icon by name
const IconComponent = ({
  name,
  ...props
}: { name: IconName } & LucideIcon) => { // <-- Using the imported LucideIcon type
  const Icon = iconMap[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    // Fallback div should also accept props like className and style
    return <div className={cn("w-4 h-4 inline-block bg-gray-200 rounded-full", props.className)} style={props.style}></div>;
  }
  // Pass remaining props (like className, style, etc.) to the Icon component
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
    mainIcon: "Settings",
    mainDescription: "Explore all our cutting-edge Enterprise AI Solutions.",
    items: [
      {
        title: "Intelligent Voice Automation",
        href: "/services#intelligent-voice-automation",
        icon: "Speech",
      },
      {
        title: "Social Engagement Automation",
        href: "/services#social-engagement-automation",
        icon: "Users",
      },
      {
        title: "AI-Powered Lead Intelligence",
        href: "/services#ai-powered-lead-intelligence",
        icon: "Cpu",
      },
      {
        title: "Interactive AI Chatbots",
        href: "/services#interactive-ai-chatbots",
        icon: "Bot",
      },
      {
        title: "Automated Campaign Orchestration",
        href: "/services#automated-campaign-orchestration",
        icon: "ListTree",
      },
       {
        title: "AI-Powered Threat Detection",
       href: "/services#ai-powered-threat-detection",
       icon: "Shield",
       },
    ],
  },
    {
    title: "Cybersecurity",
    href: "/cyber-security#top",
    dropdown: false,
  },
  {
    title: "Case Studies",
    href: "/case-studies#top",
    dropdown: true,
    mainIcon: "Database",
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
        icon: "Sparkles",
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

            return pathname === item.href || !!subItemMatch;
       }

       // Handle the case where the item's href is '/' (Home). Should only be active if it's exactly '/'
       // (This shouldn't happen for dropdowns in this structure, but defensively checks)
       if (item.href === '/' && pathname === '/') return true;

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
    if (href !== '/' && pathname === href && href.indexOf('#') === -1) return true;
    // Special case for home page
    if (href === '/' && pathname === '/') return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur">
      {/* Adjusted header height: md:h-16 for desktop, h-20 for mobile */}
      <div className="container flex h-20 md:h-16 items-center justify-between">
        {/* Logo Link */}
        <Link to="/" className="flex items-center space-x-2" onClick={handleNavLinkClick}>
          {/* Use your actual logo source and alt text */}
          {/* Adjusted logo size for better fit */}
          <img src="/ThorSignia Logo .png" alt="Thor Signia Logo" width={220} height={220} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2" ref={desktopNavRef}>
          {navItems.map((item) => (
            <div key={item.title} className="relative group h-full flex items-center">
              {item.dropdown ? (
                // Desktop Custom dropdown trigger (button)
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className={cn(
                    "text-sm font-medium transition-colors h-full flex items-center px-2 whitespace-nowrap", // Added whitespace-nowrap to prevent wrapping
                    "hover:text-[#88bf42]",
                    // Active state based on URL match
                    isDropdownTriggerActiveByUrl(item) ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
                     "flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.title}
                >
                   {/* Text style now only reflects URL activity or default */}
                   <span className={isDropdownTriggerActiveByUrl(item) ? "text-[#88bf42]" : "text-foreground"}>
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
                    "text-sm font-medium transition-colors hover:text-[#88bf42] h-full flex items-center px-2 whitespace-nowrap", // Added whitespace-nowrap to prevent wrapping
                    pathname === item.href && currentHash === '' ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
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
                    "absolute top-full left-0 mt-0",
                    "w-[600px] max-w-[calc(100vw-32px)]", // Increased width, added max-width for small viewports
                    "bg-background border rounded-md shadow-lg p-4", // Added more padding
                    "z-50 animate-in slide-in-from-top-1 fade-in-0",
                    "flex gap-6" // Flex container for two columns
                  )}
                   role="menu" // ARIA role for accessibility
                   aria-orientation="vertical"
                >
                  {/* Left Column: Main Section Link/Box */}
                  <div className="w-48 flex-shrink-0"> {/* Fixed width */}
                      <Link
                        to={item.href} // Link to the main page (e.g., /services, /case-studies)
                        onClick={handleNavLinkClick} // Close dropdown and mobile menu on click
                        className={cn(
                          "flex flex-col h-full p-4 rounded-md",
                          "bg-gradient-to-br from-[#10b4b7]/10 to-[#9ac857]/10", // Gradient background
                          "hover:bg-gradient-to-br hover:from-[#10b4b7]/20 hover:to-[#9ac257]/20", // Hover effect
                          "transition-colors duration-200",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          pathname === item.href && currentHash === '' ? "border border-[#88bf42]" : "border border-transparent" // Highlight border if on the main page
                        )}
                         role="menuitem" // ARIA role
                      >
                        {/* Icon (if available in navItems) */}
                        {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                             <IconComponent
                                name={item.mainIcon} // Use IconName type directly
                                className="h-8 w-8 text-[#10b4b7] mb-3" // Larger icon for prominence
                              />
                          )}
                        {/* Title */}
                        <div className="text-lg font-semibold text-foreground leading-tight mb-1">{item.title} Overview</div> {/* Added Overview */}
                        {/* Description */}
                         {item.mainDescription && (
                             <p className="text-sm text-muted-foreground leading-snug">{item.mainDescription}</p>
                         )}
                         {/* Optional Arrow */}
                          <div className="mt-auto pt-2 text-right"> {/* Push to bottom */}
                              {/* Add ArrowRight icon if you want one */}
                          </div>
                      </Link>
                  </div>

                  {/* Right Column: List of Sub-Items */}
                  <div className="flex-1"> {/* Takes remaining space */}
                     {/* The grid for the sub-items */}
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3"> {/* Can adjust grid columns here, e.g., sm:grid-cols-2 */}
                       {item.items.map((subItem) => {
                          // Ensure icon name exists in iconMap if provided
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
                                 "flex items-start gap-2 rounded-sm px-3 py-2 text-sm outline-none transition-colors",
                                 "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  isSubItemActive ? "text-[#88bf42] font-semibold" : "text-foreground" // Active state for sub-items
                               )}
                                role="menuitem" // ARIA role
                             >
                               {hasValidIcon && (
                                  <IconComponent
                                     name={subItemIconName} // Use IconName type directly
                                     className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" // Vertically align icon
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

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            // Increased the button size for a larger touch target
            className="w-[100px] h-[70px] text-foreground hover:text-[#88bf42]" // Added color for the toggle button itself
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {/* Increased the icon size */}
            {isMenuOpen ? <X className="h-20 w-20" /> : <Menu className="h-20 w-20" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Added `h-[calc(100vh-80px)]` to make the menu fill the screen height below the header (80px is the new mobile header height h-20 = 80px) */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden h-[calc(100vh-80px)] overflow-y-auto"> {/* Added overflow for long menus */}
          <nav className="flex flex-col space-y-4 mt-4"> {/* Added top margin for spacing */}
            {navItems.map((item) => (
              <div key={item.title}>
                {/* Mobile links and dropdowns */}
                {!item.dropdown ? (
                  // Mobile Standard non-dropdown link
                  <Link
                    to={item.href}
                    className={cn(
                      "text-lg font-medium block py-2", // Increased text size, added vertical padding
                       // Default is black (text-foreground)
                       "text-foreground",
                       // Active is black and bold
                      isMobileLinkActive(item.href) && "font-bold",
                       // Hover is green
                      "hover:text-[#88bf42]"
                    )}
                    onClick={handleNavLinkClick} // Close mobile menu on click
                  >
                    {item.title}
                  </Link>
                ) : (
                   // Mobile Dropdown Trigger (clickable button)
                   <div> {/* Use a div or button as wrapper for flex/items */}
                     <button
                        onClick={() => toggleDropdown(item.title)}
                        className={cn(
                          "text-lg font-medium w-full text-left py-2", // Increased text size, full width button, added padding
                          "flex justify-between items-center", // Align text and icon
                          // Default is black (text-foreground)
                           "text-foreground",
                           // Active is black and bold
                          isDropdownTriggerActiveByUrl(item) && "font-bold",
                           // Hover does not apply green to the trigger text itself, only the links within
                           "hover:text-foreground" // Keep hover effect subtle on the trigger button
                        )}
                         aria-expanded={openDropdown === item.title}
                     >
                       <span>{item.title}</span>
                        {/* Chevron icon for dropdown indicator (always gray) */}
                       <ChevronDown className={cn(
                           "h-6 w-6 transition-transform duration-200 text-muted-foreground", // Increased icon size slightly, always gray
                           openDropdown === item.title ? "rotate-180" : "rotate-0"
                       )} />
                     </button>

                    {/* Mobile Dropdown Content */}
                    {item.items && openDropdown === item.title && (
                      <div className="mt-2 ml-4 flex flex-col space-y-2"> {/* Indented sub-items */}
                        {/* Main Link for Mobile Dropdown Section */}
                         <Link
                            to={item.href} // Link to the main page
                            onClick={handleNavLinkClick} // Close menu on click
                            className={cn(
                              "text-base font-semibold py-1", // Style for main link, reduced padding
                               // Default is black (text-foreground)
                               "text-foreground",
                               // Active is black and bold
                              isMobileLinkActive(item.href) && "font-bold",
                               // Hover is green
                              "hover:text-[#88bf42]",
                              "flex items-center gap-2" // Hover and layout
                            )}
                         >
                              {/* Optional Main Icon for Mobile (always gray) */}
                               {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                                  <IconComponent
                                     name={item.mainIcon} // Use IconName type directly
                                     className="h-4 w-4 text-muted-foreground" // Small icon, always gray
                                   />
                               )}
                               <span>{item.title} Overview</span> {/* Added Overview */}
                         </Link>
                        {/* Separator (optional) */}
                        {/* <div className="border-t border-muted-foreground/20 pt-2 mt-2"></div> */} {/* Removed separator for cleaner list */}
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
                                "text-base py-1", // Slightly larger text, vertical padding
                                 // Default is gray (text-muted-foreground)
                                isMobileLinkActive(subItem.href) ? "text-foreground font-semibold" : "text-muted-foreground",
                                 // Hover is green
                                "hover:text-[#88bf42]",
                                "flex items-center gap-2"
                              )}
                              onClick={handleNavLinkClick} // Close mobile menu on click
                            >
                              {hasValidIcon && (
                                <IconComponent
                                  name={subItemIconName} // Use IconName type directly
                                  // Icon is always gray
                                  className={cn("h-5 w-5 flex-shrink-0 text-muted-foreground")} // Icon size and color
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
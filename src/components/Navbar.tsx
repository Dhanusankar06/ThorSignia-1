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
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node) && openDropdown !== null) {
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
             if (location.key !== 'default') { // Avoid initial load scroll to top
                 window.scrollTo({ top: 0, behavior: 'smooth' });
             } else {
                 // On initial load with no hash, ensure it's at the top
                  window.scrollTo({ top: 0, behavior: 'instant' });
             }
        }
   }, [location]); // Re-run effect whenever the location object changes


   // Determine if the dropdown trigger text should be highlighted (active)
   const isDropdownTriggerActiveByUrl = (item: NavItem) => {
      if (!item.dropdown) return false; // Only applies to dropdowns

      // Check if the current path *starts* with the base href (e.g., /services for /services#...)
       // and the base href is not just '/' (home page)
       if (item.href !== '/' && pathname.startsWith(item.href)) {
           // If we are on the base page or any page below it, the trigger is active
           // We need to be careful with hash. If we are on /services, it's active. If on /services#section, it's active.
            // If any sub-item href matches the current full URL, the trigger is active.
            const currentFullUrl = pathname + (currentHash || '');
            const subItemMatch = item.items?.some(subItem => subItem.href === currentFullUrl);

            // The trigger is active if:
            // 1. The current pathname is exactly the item's href (e.g., /services) OR
            // 2. Any of the sub-items' hrefs match the current full URL (e.g., /services#...)
           return pathname === item.href || !!subItemMatch;
       }

       // Handle the case where the item's href is '/' (though typically dropdowns aren't the home link)
       if (item.href === '/' && pathname === '/') return true; // Should not happen for dropdowns as structured

       return false;
   };

   // Toggle desktop dropdown visibility
   const toggleDropdown = (itemTitle: string) => {
       // If clicking the same item that's already open, close it.
       // Otherwise, open the clicked item's dropdown.
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


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Link */}
        <Link to="/" className="flex items-center space-x-2" onClick={handleNavLinkClick}>
          {/* Use your actual logo source and alt text */}
          <img src="/download.png" alt="Thor Signia Logo" width={190} height={190} />
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
                    pathname === item.href ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
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
                          "hover:bg-gradient-to-br hover:from-[#10b4b7]/20 hover:to-[#9ac857]/20", // Hover effect
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

          {/* Contact Us Button for Desktop */}
          <Button
            asChild
            className="bg-[#88bf42] hover:bg-[#7aad3a] text-white text-sm px-4 py-2 rounded-md"
          >
            {/* This link doesn't need handleNavLinkClick unless you want to close the mobile menu if it's open for some reason */}
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.title}>
                {/* Mobile links and dropdowns */}
                {!item.dropdown ? (
                  // Mobile Standard non-dropdown link
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm font-medium block",
                      pathname === item.href ? "text-[#88bf42]" : "text-foreground"
                    )}
                    onClick={handleNavLinkClick} // Close mobile menu on click
                  >
                    {item.title}
                  </Link>
                ) : (
                   // For mobile dropdown triggers, just render the title as text (not clickable trigger)
                  <div
                    className={cn(
                      "text-sm font-medium text-foreground",
                      isDropdownTriggerActiveByUrl(item) && "text-[#88bf42]" // Highlight if active by URL
                    )}
                  >
                    {item.title}
                  </div>
                )}

                {item.dropdown && item.items && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    {/* Main Link for Mobile Dropdown */}
                     <Link
                        to={item.href} // Link to the main page
                        onClick={handleNavLinkClick} // Close menu on click
                        className={cn(
                          "text-sm font-semibold", // Style for main link
                          pathname === item.href && currentHash === '' ? "text-[#88bf42]" : "text-foreground", // Highlight if on main page
                          "hover:text-[#88bf42] flex items-center gap-2" // Hover and layout
                        )}
                     >
                          {/* Optional Main Icon for Mobile */}
                           {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                              <IconComponent
                                 name={item.mainIcon} // Use IconName type directly
                                 className="h-4 w-4 text-muted-foreground"
                               />
                           )}
                           <span>{item.title} Overview</span> {/* Added Overview */}
                     </Link>
                    {/* Separator */}
                    <div className="border-t border-muted-foreground/20 pt-2 mt-2"></div>
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
                            "text-sm",
                            isSubItemActive ? "text-[#88bf42] font-semibold" : "text-muted-foreground",
                            "hover:text-foreground flex items-center gap-2"
                          )}
                          onClick={handleNavLinkClick} // Close mobile menu on click
                        >
                          {hasValidIcon && (
                            <IconComponent
                              name={subItemIconName} // Use IconName type directly
                              className="h-4 w-4 text-muted-foreground"
                            />
                          )}
                          <span>{subItem.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            {/* Contact Us Button for Mobile */}
            <Button
              asChild
              className="w-full bg-[#88bf42] hover:bg-[#7aad3a] text-white text-sm px-4 py-2 h-auto rounded-md justify-center mt-4"
            >
              <Link to="/contact" onClick={handleNavLinkClick}>Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
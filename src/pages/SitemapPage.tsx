'use client';

import React, { useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom"; // Assuming you are using react-router-dom
import { cn } from "@/lib/utils"; // Your utility function for conditional classes
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define interface for navigation items (matching Navbar's interface)
// We need this to reference the hrefs and titles
interface NavItem {
    title: string;
    href: string;
    dropdown: boolean;
    items?: {
      title: string;
      href: string;
      icon?: string;
    }[];
    mainIcon?: string;
    mainDescription?: string;
}

// --- START: navItems array copied directly from your latest Navbar.tsx ---
// IMPORTANT: Ideally, this array should be imported from a shared config/data file
// to avoid duplication and ensure consistency across components.
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
        href: "/services/intelligent-voice-automation#top", // Added #top for consistency
        icon: "Mic",
      },
      {
        title: "Social Engagement Automation",
        href: "/services/social-engagement-automation#top", // Added #top for consistency
        icon: "Share2",
      },
      {
        title: "AI-Powered Lead Intelligence",
        href: "/services/lead-intelligence#top", // Added #top for consistency
        icon: "BarChart3",
      },
      {
        title: "Interactive AI Chatbots",
        href: "/services/interactive-ai-chatbots#top", // Added #top for consistency
        icon: "Bot",
      },
      {
        title: "Automated Campaign Orchestration",
        href: "/services/automated-campaign-orchestration#top", // Added #top for consistency
        icon: "Megaphone",
      },
       {
        title: "AI-Powered Threat Detection",
       href: "/services/threat-detection#top", // Added #top for consistency
       icon: "ShieldAlert",
       },
    ],
  },
{
  title: "Cybersecurity",
  href: "/cyber-security#top",
  dropdown: true,
  mainIcon: "ShieldCheck",
  mainDescription: "Explore our comprehensive cybersecurity services.",
  items: [
    {
      title: "Vulnerability Assessment & Pen Testing",
      href: "/cyber-security/vulnerability-assessment#top", // Added #top for consistency
      icon: "Bug",
    },
    {
      title: "Cloud Security Assessments",
      href: "/cyber-security/cloud-security-assessments#top", // Added #top for consistency
      icon: "CloudAlert",
    },
    {
      title: "Offensive Security",
      href: "/cyber-security/offensive-security#top", // Added #top for consistency
      icon: "Terminal",
    },
    {
      title: "Red Teaming Services",
      href: "/cyber-security/red-teaming#top", // Added #top for consistency
      icon: "Swords",
    },
    {
      title: "IOT/OT Security",
    href: "/cyber-security/iot-security#top", // Added #top for consistency
    icon: "CircuitBoard",
  },
  {
    title: "vCISO Services",
      href: "/cyber-security/vciso-services#top", // Added #top for consistency
      icon: "Briefcase",
    },
    {
      title: "Training & Awareness",
      href: "/cyber-security/security-training#top", // Added #top for consistency
      icon: "GraduationCap",
    },
  ],

  },
  {
    title: "Case Studies",
    href: "/case-studies#top",
    dropdown: true,
    mainIcon: "Database",
    mainDescription: "Discover how our AI solutions deliver measurable results for clients.",
    items: [
      {
        title: "Digital Transformation for Industrial Growth",
        href: "/case-studies/sgf-fab-ai-quality-control#top", // Added #top for consistency
        icon: "ClipboardCheck",
      },
      {
        title: "Conversational Automation for Medical Education Enquiries",
        href: "/case-studies/doctor-dreams-ai-voice-assistant#top", // Added #top for consistency
        icon: "Stethoscope",
      },
      {
        title: "Scalable Web Infrastructure for a Growing Coworking Brand",
        href: "/case-studies/anthill-iq-smart-workspace#top", // Added #top for consistency
        icon: "Briefcase",
      },
      {
        title: "AI Automation for Sales & Social Commerce",
        href: "/case-studies/financial-services-ai-transformation#top", // Added #top for consistency
        icon: "Landmark",
      }
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
  // {
  //   title: "Pricing",
  //   href: "/pricing#top",
  //   dropdown: false,
  // },
  {
    title: "Contact",
    href: "/contact#top",
    dropdown: false,
  },
];
// --- END: navItems array copied directly from your latest Navbar.tsx ---


// Helper function to strip the hash from a URL
const cleanUrl = (href: string) => href.split('#')[0];

// Helper function to find a nav item by title
const findNavItem = (title: string) => navItems.find(item => item.title === title);

// Helper function to get sub-items for a dropdown nav item, using 'text' property
const getDropdownSubItems = (title: string) => {
    const item = findNavItem(title);
    if (!item || !item.dropdown || !item.items) {
        // Console log a warning if the item isn't found or isn't a dropdown with items
        if (!item) console.warn(`Nav item "${title}" not found for sitemap dropdown items.`);
        else if (!item.dropdown) console.warn(`Nav item "${title}" is not a dropdown.`);
        else if (!item.items) console.warn(`Nav item "${title}" dropdown has no items.`);

        return []; // Return empty array if not found or not a valid dropdown with items
    }
    // Use 'text' property for the overview link
    const mainLink = { text: `${item.title} Overview`, href: cleanUrl(item.href) };
    // Use 'text' property for the sub-items
    const subItems = item.items.map(sub => ({ text: sub.title, href: cleanUrl(sub.href) }));
    // Return main link + sub-items
    return [mainLink, ...subItems];
}

// Helper function to get a single link by title, ensuring it exists
const getSingleLink = (title: string) => {
    const item = findNavItem(title);
    if (!item) {
        console.warn(`Nav item "${title}" not found for sitemap single link.`);
        return null; // Return null if item not found
    }
    return { text: item.title, href: cleanUrl(item.href) };
}


// --- Define the Sitemap structure based on the image's columns ---
// Grouped into columns
const sitemapColumns = [
    {
        title: "Company",
        links: [
            getSingleLink("Home"),
            getSingleLink("About"),
            getSingleLink("AI Engineers"), // Changed title from "Outsourcing AI" to "AI Engineers" to match navItems
            getSingleLink("Awards"),
            getSingleLink("Careers"),
            getSingleLink("Contact"),
        ].filter(Boolean)
    },
     {
        title: "Our Solutions",
        links: [
            ...getDropdownSubItems("Services"),
            getSingleLink("Pricing"),
        ].filter(Boolean)
    },
    {
        title: "Cybersecurity",
        links: [
            ...getDropdownSubItems("Cybersecurity"),
        ].filter(Boolean)
    },
     {
        title: "Case Studies",
        links: [
             ...getDropdownSubItems("Case Studies"),
        ].filter(Boolean)
    },
    {
        title: "Resources",
        links: [
             // --- UPDATED THIS SECTION ---
             // Use getDropdownSubItems("Blog") to get both the main "Blog Overview" link
             // AND all the individual blog post links.
             ...getDropdownSubItems("Blog"),
             // You can add other resource links here if needed in the future
             // { text: "Downloads", href: "/resources/downloads" },
        ].filter(Boolean)
    },
    {
        title: "Legal",
        links: [
             { text: "Terms and Conditions", href: "/TermsAndConditions" }, // Example paths - ADJUST IF YOUR PATHS ARE DIFFERENT
             { text: "Refund Policy", href: "/RefundPolicy" },      // Example paths - ADJUST IF YOUR PATHS ARE DIFFERENT
             { text: "Privacy Policy", href: "/PrivacyPolicy" },    // Example paths - ADJUST IF YOUR PATHS ARE DIFFERENT
        ]
    },
    // Add more columns here if needed
];

// Helper to render a single column block
const renderColumn = (column: typeof sitemapColumns[number]) => (
    <div key={column.title} className="flex flex-col space-y-3">
      <h3 className="text-lg font-bold text-foreground border-b border-gray-200 pb-2 mb-1">
        {column.title}
      </h3>
      <ul className="list-none p-0 m-0 space-y-2">
        {column.links.map((link) => (
          <li key={link.href + link.text}>
            <RouterLink
              to={link.href}
              className="text-base md:text-lg text-muted-foreground hover:underline hover:text-[#88bf42] transition-colors duration-200 block"
            >
              {link.text}
            </RouterLink>
          </li>
        ))}
      </ul>
    </div>
);

export default function SitemapPage() {
  useEffect(() => {
    document.title = "Sitemap | ThorSignia";
  }, []);
  // Split the columns into two groups for the two rows
  const firstRowColumns = sitemapColumns.slice(0, 3);
  const secondRowColumns = sitemapColumns.slice(3, 6);

  // Log a warning if the number of columns isn't 6, as the slicing assumes this
  if (sitemapColumns.length !== 6) {
      console.warn(`Sitemap columns array contains ${sitemapColumns.length} columns, but the layout assumes 6 (2 rows of 3). Layout may not appear as intended.`);
  }

  return (
    <>
      <Navbar />
      {/* Main content container with padding and max-width */}
      <div className="container mx-auto px-4 py-10 max-w-screen-xl min-h-[70vh]">
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-foreground">
          Sitemap
        </h1>

        {/* Optional: Add a descriptive paragraph like in the image */}
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12">
          Navigate our entire website structure easily. Find links to all our key pages and resources below.
        </p>

        {/* --- First Row of Columns (3 columns) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {firstRowColumns.map(renderColumn)}
        </div>

        {/* --- Second Row of Columns (3 columns) --- */}
        {/* Add vertical spacing between the two rows */}
        {secondRowColumns.length > 0 && ( // Only render the second row if there are columns in it
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
               {secondRowColumns.map(renderColumn)}
             </div>
        )}

      </div>
      <Footer />
    </>
  );
}

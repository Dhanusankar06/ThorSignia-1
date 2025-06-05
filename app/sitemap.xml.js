// app/sitemap.xml.js

// Define the base URL for your website
const baseUrl = 'https://www.thorsignia.com';

// Replicate the data structure needed for the sitemap
// We'll manually list the paths here for clarity and control
// over priority and change frequency, rather than directly
// importing the large navItems array from the Navbar component,
// which might contain presentation details not needed for the sitemap.

const sitemapPaths = [
  { path: '/', priority: 1.0, changefreq: 'daily' }, // Home is high priority
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' }, // Main Services page
  { path: '/services/intelligent-voice-automation', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/social-engagement-automation', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/lead-intelligence', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/interactive-ai-chatbots', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/automated-campaign-orchestration', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/threat-detection', priority: 0.7, changefreq: 'monthly' },

  { path: '/cyber-security', priority: 0.9, changefreq: 'monthly' }, // Main Cybersecurity page
  { path: '/cyber-security/vulnerability-assessment', priority: 0.7, changefreq: 'monthly' },
  { path: '/cyber-security/cloud-security-assessments', priority: 0.7, changefreq: 'monthly' },
  { path: '/cyber-security/offensive-security', priority: 0.7, changefreq: 'monthly' },
  { path: '/cyber-security/red-teaming', priority: 0.7, changefreq: 'monthly' },
  { path: '/cyber-security/iot-security', priority: 0.7, changefreq: 'monthly' },
  { path: '/cyber-security/vciso-services', priority: 0.7, changefreq: 'monthly' },
  { path: '/cyber-security/security-training', priority: 0.7, changefreq: 'monthly' },

  { path: '/ai-engineers', priority: 0.7, changefreq: 'monthly' }, // Outsourcing AI

  { path: '/case-studies', priority: 0.8, changefreq: 'monthly' }, // Main Case Studies page
  { path: '/case-studies/sgf-fab-ai-quality-control', priority: 0.7, changefreq: 'monthly' },
  { path: '/case-studies/doctor-dreams-ai-voice-assistant', priority: 0.7, changefreq: 'monthly' },
  { path: '/case-studies/anthill-iq-smart-workspace', priority: 0.7, changefreq: 'monthly' },
  { path: '/case-studies/financial-services-ai-transformation', priority: 0.7, changefreq: 'monthly' },

  { path: '/blog', priority: 0.8, changefreq: 'weekly' }, // Main Blog page - might update more often
  { path: '/blog/future-of-enterprise-ai-trends-2025', priority: 0.6, changefreq: 'monthly' }, // Blog posts less frequent updates
  { path: '/blog/how-custom-ai-solutions-are-transforming-manufacturing', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/ethical-considerations-in-ai-development-and-deployment', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/building-a-successful-enterprise-ai-strategy-from-scratch', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/real-time-data-processing-how-ai-is-enabling-faster-decision-making', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/how-to-build-a-high-performing-ai-development-team', priority: 0.6, changefreq: 'monthly' },

  { path: '/awards', priority: 0.5, changefreq: 'yearly' }, // Awards page - less frequent updates
  { path: '/careers', priority: 0.6, changefreq: 'monthly' }, // Careers page

  // If you uncomment the pricing page later, add it here:
  // { path: '/pricing', priority: 0.7, changefreq: 'monthly' },

  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
];


// Export the function that generates the sitemap array
export default function sitemap() {
  const lastModified = new Date(); // Use current date for last modification timestamp

  return sitemapPaths.map(({ path, priority, changefreq }) => ({
    // Construct the absolute URL, removing any hash fragments like '#top'
    url: `${baseUrl}${path.split('#')[0]}`,
    lastModified: lastModified,
    changeFrequency: changefreq, // e.g., 'daily', 'weekly', 'monthly', 'yearly'
    priority: priority,       // e.g., 1.0, 0.8, 0.5
  }));
}
import { MessageCircle, MessageSquare, Globe, Database, LineChart, Settings } from "lucide-react";

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  company: string;
  logo: string;
  category: string;
  imageUrl: string;
  coverImage: string;
  summary: string;
  
  accentColor: string;
  challenge: string[];
  strategy: string[];
  execution: string[];
  results: string[];
  servicesUsed: {
    name: string;
    icon: string;
  }[];
 
  relatedCaseStudies: number[];
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    slug: "sgf-fab-ai-quality-control",
    title: "Digital Transformation for Industrial Growth",
    company: "SGF FAB Industries",
    logo: "/assets/sgf.jpeg",
    category: "Manufacturing",
    imageUrl: "/assets/ai-visual-inspection.jpg",
    coverImage: "/assets/crane-sgf.png",
    summary: "Since 2015, Thor Signia has led the digital transformation of SGF Fab Industries, helping elevate them into a digitally competitive brand. What began with a single website project evolved into a long-term strategic partnership covering SEO, branding, lead generation, and event support—positioning Thor Signia as their exclusive digital growth partner.   ",   
    accentColor: "#88bf42",
    challenge: [
      "Although SGF Fab had decades of experience and an impressive client portfolio, their digital presence did not reflect the scale or credibility of their work. Their website was outdated, search visibility was poor, and inbound inquiries were minimal—making it difficult for new clients to discover or assess the brand.",
      "They needed:A clean, modern website tailored to industrial buyersA content and SEO strategy that could generate qualified business leads for new product launches and industry eventsA long-term partner who could evolve with their needs across channels"
    ],
    strategy: [
      "Thor Signia proposed a phased digital growth model with a focus on strong fundamentals, scalable outreach, and consistent content presence:",
      "Redesign the Website to improve user experience, highlight technical capabilities, and support product discoveryImplement SEO to improve visibility for high-intent industrial search termsDevelop Content Assets that educate prospects and drive conversionsLaunch Targeted Campaigns for B2B buyers across Google and LinkedInSupport Product Launches & Events with media, messaging, and amplificationEach phase was designed to support SGF Fab’s reputation as a technically reliable and forward-thinking manufacturing partner."
    ],
    execution: [
      "Website Design & Development",
"We launched a new responsive website focused on cranes, hoists, and fabrication solutions. Technical details, certifications, and case use were structured to help procurement teams evaluate faster. The site footer continues to carry: “Powered by THORSIGNIA”.",

"Search Engine Optimization (SEO)",
"A targeted SEO plan was deployed to rank for relevant industry terms like “EOT crane manufacturer in Bangalore”. SGF Fab now consistently ranks on the first page for priority keywords.",

"Content & Lead Generation",
"We developed downloadable product specs, blog content, and lead forms integrated with analytics to track engagement and optimize lead quality.",

"Digital Marketing & Campaigns",
"We ran targeted ads across Google and LinkedIn to connect with buyers in logistics, construction, and heavy engineering sectors—opening doors to new industries and regions.",

"Event & Product Launch Support",
"In 2025, when SGF Fab launched the Yale BatteryStar Hoist in collaboration with Columbus McKinnon, Thor Signia supported the event with PR, visuals, and web updates to ensure maximum visibility."
    ],
    results: [
      "60% Increase in Organic Leads within the first year of launching the new website",
      "High Visibility in Search Results for key industrial terms, reducing reliance on paid ads",   
       "Successful Expansion into New Markets through targeted campaign outreach"
    ],
    servicesUsed: [
      {
        name: "Tailored AI Architectures",
        icon: "Settings"
      }
    ],
   
    relatedCaseStudies: [2,3,4]
  },
  {
    id: 2,
    slug: "doctor-dreams-ai-voice-assistant",
    title: "Conversational Automation for Medical Education Enquiries",
    company: "Doctor Dreams",
    logo: "/assets/case1.jpeg",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1770&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1770&auto=format&fit=crop",
    summary: "Thor Signia streamlined Doctor Dreams’ student engagement by deploying WhatsApp automation, revamping their website, and optimizing social media workflows—enabling faster responses, better lead conversion, and scalable communication during peak admission seasons.",   
    accentColor: "#88bf42",
    challenge: [
      "During peak admission periods, Doctor Dreams handled over 500 student inquiries daily. While most questions were routine—about eligibility, fees, course details, and admission timelines—they still required a human to respond.",
      "This manual process led to delays, inconsistent follow-ups, and counselor fatigue. As response times stretched to hours, the risk of losing interested students increased. Doctor Dreams needed a system that could handle repetitive queries instantly, maintain clarity and trust, and free up their team for more complex conversations."
    ],
    strategy: [
      "We focused on creating a lightweight but high-impact solution that could improve engagement across key touchpoints:",
      "Automate Repetitive Conversations through WhatsApp",
      "Enhance Online Discoverability and Trust through better social media presence",
      "Simplify the Student Journey through a redesigned, conversion-friendly website",
      "Our goal was to reduce human dependency for initial conversations, increase inquiry resolution speed, and support students across time zones—without compromising the personalized experience that Doctor Dreams is known for."
    ],
    execution: [
     "1. WhatsApp Chatbot Deployment",
     "We built and integrated a custom WhatsApp chatbot capable of answering frequently asked questions related to medical education across different countries. It provided instant replies 24/7 and passed complex queries to human counselors when needed.",
      
      "2. Social Media Management",
      "We took over Doctor Dreams’ social media channels, creating regular, relevant content that spoke directly to the needs and aspirations of prospective students. This helped increase organic reach and improve trust.",            
      
      "3. Website Revamp",
      "We redesigned the website to improve load time, mobile responsiveness, and clarity. The new structure made it easier for students to understand their options, submit inquiries, and get in touch with counselors.",
      
    ],
    results: [
      "Response time reduced from 4.5 hours to under 10 minutes",
      "Over 70% of student queries were handled without human intervention",
      "Lead conversion rate increased by 34%",
      "Student satisfaction scores rose by 28%",
      "Counselor productivity improved by focusing only on high-quality leads",
      "Enabled 24/7 inquiry handling without adding to the team size",
      "Achieved an ROI of 215% within six months"
    ],
    servicesUsed: [
      {
        name: "Conversational Voice Interfaces",
        icon: "MessageCircle"
      }
    ],
    
    relatedCaseStudies: [1, 3, 4]
  },
  {
    id: 3,
    slug: "anthill-iq-smart-workspace",
    title: "Scalable Web Infrastructure for a Growing Coworking Brand",
    company: "Anthill IQ",
    logo: "/assets/case2.png",
    category: "Workspaces / Real Estate",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1770&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1770&auto=format&fit=crop",
    summary: "Thor Signia built the digital foundation for Anthill IQ’s rapid expansion—designing a scalable website, streamlining lead generation, and supporting multi-location growth. What began as a web project evolved into a long-term strategic partnership focused on performance and adaptability.                                                                                                ",
    accentColor: "#88bf42",
    challenge: [
      "Anthill IQ had a clear vision for its physical spaces—well-designed, community-driven work environments—but lacked a digital presence to match. Their website needed to do more than just inform; it had to attract, convert, and support customers at every stage.",
      "Key challenges included:",
       "No central platform to showcase multiple workspace locations",
        "Lack of lead-generation tools and booking pathways",
        "Limited visibility on search engines for local coworking-related searches",
        "A need for flexible infrastructure to support rapid expansion",

    ],
    strategy: [
      "Thor Signia proposed a digital-first approach focused on:",
      "Scalable Web Architecture to support multiple locations and services",
      "Conversion-Centered UX Design with clear CTAs like “Book Now” and “Schedule a Tour”",
      "Location-Based SEO Optimization to improve visibility for hyperlocal searches",
      "Custom Content & Visual Strategy to align with Anthill IQ’s brand values and workspace experience",
      "The plan was built to serve not just the immediate needs, but the brand’s future growth as new locations came online."
    ],
    execution: [
      "1. Website Design & Development",
      "We built a clean, mobile-optimized site tailored to Anthill IQ’s brand identity. Each location received its own landing page, enabling both better user targeting and local SEO visibility.",
      
      "2. Lead-Generation Systems",
      "Strategic CTAs and direct inquiry forms were integrated throughout the site, streamlining the path from interest to contact. Friction in the booking process was minimized to encourage conversions.",
      
      "3. Content & Brand Support",
      "We collaborated closely with the Anthill IQ team to develop content that highlighted their core offerings, workspace designs, and member community. Visual assets and page layouts were customized to reflect the aesthetic and tone of each location.",
      
      "4. SEO-Ready Infrastructure",
      "The site was built with scalability and discoverability in mind—structured to grow as new branches were added and optimized to rank for high-intent local queries like “coworking space in Arekere” or “managed offices in Bangalore.”"
    ],
    results: [
      "A fully scalable website launched and expanded in sync with Anthill IQ’s physical growth",
      "Increased lead conversion through intuitive UX and direct booking pathways",
      "Strong SEO performance across multiple local search terms",
      "Higher engagement and trust from both new and existing clients",
      "Ongoing collaboration with Thor Signia for content updates, performance monitoring, and future digital features",
      "The site continues to be powered and maintained by Thor Signia as of 2025—serving as a central hub for customer engagement, sales inquiries, and brand storytelling."
    ],
    servicesUsed: [
      {
        name: "Smart Chat Interfaces",
        icon: "MessageSquare"
      }
    ],
    
    relatedCaseStudies: [1, 2, 4]
  },
  {
    id: 4,
    slug: "financial-services-ai-transformation",
    title: "AI Automation for Sales & Social Commerce",
    company: "KraftPoint",
    logo: "/assets/kraftpoint.png",
    category: "E-commerce / D2C",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1742&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop",
    summary: "Thor Signia partnered with KraftPoint to modernize their D2C operations—overhauling their e-commerce setup, automating Instagram workflows, and managing high-performing ad campaigns. The goal: streamline digital growth while preserving the brand’s unique, handcrafted appeal.",    
    accentColor: "#10b4b7",
    challenge: [
      "While KraftPoint had a strong product range and a loyal customer base, their online systems lacked scalability. Their website was slow and cluttered, the checkout process was losing potential buyers, and their digital ads weren’t delivering consistent returns.",
      "On social media, engagement was high but mostly manual—leading to missed opportunities for lead capture and follow-ups. With product demand increasing, the team needed a system that could keep up without burning out resources."
    ],
    strategy: [
      "We took a full-funnel approach—combining brand positioning with infrastructure upgrades and automated marketing:",
      "Website redevelopment to improve user experience, speed, and mobile checkout",
      "E-commerce enhancements to reduce drop-offs and improve product discovery",
      "Instagram automation to maintain high engagement without daily manual input",
      "Meta Ads Management to optimize ad spend, retarget visitors, and drive conversions",
      "The goal was simple: make every customer touchpoint—from discovery to purchase—as smooth and efficient as possible."
    ],
    execution: [
      "1. Website Development",
      "We redesigned KraftPoint’s website to be fast, intuitive, and visually aligned with their brand. Emphasis was placed on product categorization, seamless mobile navigation, and a simplified checkout experience.",
      
      "2. E-Commerce Optimization",
      "Product pages were restructured for clarity and faster loading. Cart abandonment tools and backend analytics were set up to track behavior and improve conversions.",
      
      "3. Instagram Automation",
      "We implemented automation for DMs, story replies, and comment handling. This allowed KraftPoint to stay responsive during peak seasons without manual effort, and also collect qualified leads directly from Instagram.",
      
      "4. Meta Ads Management",
      "Our team managed KraftPoint’s Facebook and Instagram ad campaigns, including A/B testing creatives, setting up retargeting funnels, and analyzing performance weekly to continuously refine spend."
    ],
    results: [
      "Website bounce rate dropped by 41% within the first month of relaunch",
      "Cart abandonment reduced by 33% through improved UX and automation",
      "Average ad ROAS (Return on Ad Spend) increased by 2.4x over three months",
      "Instagram engagement became fully automated for incoming DMs and story replies",
      "Online sales grew steadily month-on-month without increasing ad spend",
      "Customer support workload reduced, allowing the team to focus on fulfillment and product development"
    ],
    servicesUsed: [
      {
        name: "Conversational Voice Interfaces",
        icon: "MessageCircle"
      },
      {
        name: "Smart Chat Interfaces",
        icon: "MessageSquare"
      },
      {
        name: "Tailored AI Architectures",
        icon: "Settings"
      }
    ],
    
    relatedCaseStudies: [1, 2, 3]
  },
  
  
];

export default caseStudiesData; 
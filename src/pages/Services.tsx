import { useState, useEffect, useRef, useCallback, cloneElement } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import AnimatedServiceHeader from '@/components/AnimatedServiceHeader';
import { 
  MessageCircle, 
  Globe, 
  Database, 
  LineChart, 
  Settings, 
  Shield, 
  Award, 
  Check, 
  ArrowRight, 
  Building, 
  Brain,
  CheckCircle2,
  Layers,
  Briefcase,
  Mic,
  Waves,
  MessageSquare,
  Hash,
  Share2,
  Target,
  Filter,
  MoreHorizontal,
  Megaphone,
  Cpu,
  ChevronRight,
  Users,
  Boxes,
  Landmark,
  LucideIcon,
  ArrowUpRight,
  Sparkles,
  Lightbulb,
  Clock,
  BarChart3,
  ShieldAlert,
  GraduationCap,
  ShoppingBag,
  Factory,
  Bot
} from 'lucide-react';

// import VoiceAgentDemo from '@/components/VoiceAgentDemo';
import { PinContainer } from '@/components/ui/3d-pin';
import '../services-animations.css';
// Services data from ServicesSection.tsx
const servicesData = [
  {
    id: 1,
    title: "Intelligent Voice Automation",
    icon: <Mic className="h-16 w-16 text-[#88bf42]" />,
    description: "Experience revolutionary customer service with advanced conversational AI agents. These intelligent systems understand natural language, handle complex and multi-turn inquiries with human-like interactions, and provide 24/7 support, seamlessly integrating with your existing communication channels.",
    color: "bg-[#88bf42]",
    bgColor: "bg-[#88bf42]/50",
    iconColor: "text-[#88bf42]",
    hoverBgColor: "group-hover:bg-[#88bf42]/20",
    benefits: [ 
        "24/7 customer support without human limitations",
      "Handles complex, multi-turn conversations naturally",
      "Seamless integration with existing communication channels"
    ],

  },
  {
    id: 2,
    title: "Social Engagement Automation",
    icon: <Share2 className="h-8 w-8 text-[#0f0326]" />,
    description: "Boost your social media presence with AI-powered automation. This service leverages artificial intelligence to generate engaging content at scale, optimize posting schedules based on audience behavior, and automate interactions to drive growth and maximize engagement across all your platforms.",
    color: "bg-[#88bf42]",
    bgColor: "bg-[#88bf42]/50",
    iconColor: "text-[#88bf42]",
    hoverBgColor: "group-hover:bg-[#0f0326]/20",
    benefits: [
      "Content generation at scale across platforms",
      "Automated audience growth and engagement",
      "Data-driven performance optimization"
    ],


  },
  {
    id: 3,
    title: "AI-Powered Lead Intelligence",
    icon: <BarChart3 className="h-16 w-16 text-[#88bf42]" />,
    description: "Supercharge your sales funnel with AI-powered lead intelligence. Our system intelligently identifies and qualifies high-potential leads by analyzing vast data sets, automates personalized nurturing sequences to build relationships, and continuously optimizes strategies to fill your pipeline and drive higher conversion rates.",
    color: "bg-[#88bf42]",
    bgColor: "bg-[#88bf42]/50",
    iconColor: "text-[#88bf42]",
    hoverBgColor: "group-hover:bg-[#88bf42]/20",
    benefits: [
      "Hyper-targeted lead acquisition and qualification",
      "Personalized nurturing sequences at scale",
      "Higher conversion rates through AI optimization"
    ],


  },
  {
    id: 4,
    title: "Interactive AI Chatbots",
    icon: <Bot className="h-16 w-16 text-[#88bf42]" />,
    description: "Deploy interactive AI chatbots that go beyond simple FAQs. These intelligent bots understand conversation context, provide instant 24/7 support, deliver personalized experiences based on user data, and can seamlessly hand off complex queries to human agents when needed, enhancing overall customer satisfaction.",
    color: "bg-[#88bf42]",
    bgColor: "bg-[#88bf42]/50",
    iconColor: "text-[#88bf42]",
    hoverBgColor: "group-hover:bg-[#88bf42]/20",
    benefits: [
      "24/7 instant customer support and engagement",
      "Seamless handoff between AI and human agents",
      "Personalized experiences based on user data"
    ],

  },
  {
    id: 5,
    title: "Automated Campaign Orchestration",
    icon: <Megaphone className="h-16 w-16 text-[#0f0326]" />,
    description: "Streamline and maximize your marketing efforts with automated campaign orchestration. Our AI unifies messaging across all customer touchpoints, continuously learns and self-optimizes ad campaigns in real-time by adjusting targeting, bids, and creatives, ensuring superior ROI and performance without manual intervention.",
    color: "bg-[#88bf42]",
    bgColor: "bg-[#88bf42]/50",
    hoverBgColor: "group-hover:bg-[#0f0326]/20",
    benefits: [
      "Unified messaging across all customer touchpoints",
      "Self-optimizing campaigns that improve over time",
      "Superior ROI through AI-powered targeting"
    ],


  },
  {
    id: 6,
    title: "AI-Powered Threat Detection",
    icon:<ShieldAlert className="h-16 w-16 text-[#88bf42]" />,
    description: "Safeguard your digital assets with advanced AI-powered threat detection. Our system uses artificial intelligence to analyze vast amounts of data in real-time, identifying and responding to evolving cyber threats like malware, phishing attempts, and network intrusions. It also automates vulnerability assessments and provides continuous monitoring for proactive protection.",
    color: "bg-[#88bf42]",
    bgColor: "bg-[#88bf42]/50",
    hoverBgColor: "group-hover:bg-[#88bf42]/20",
    benefits: [
      "Real-time threat detection and response",
      "Automated vulnerability assessment",
      "Continuous monitoring and alerting"
    ],


  }
];

// Add these CSS declarations for TypeScript
declare module 'react' {
  interface CSSProperties {
    transformStyle?: 'preserve-3d' | 'flat';
  }
}

// Add proper types for the industry and implementation step objects
interface Industry {
  name: string;
  icon: JSX.Element;
  description: string;
}

interface ImplementationStep {
  title: string;
  icon: string;
  description: string;
}

const ServicesPage = () => {
  useEffect(() => {
    document.title = "AI Services | ThorSignia";
  }, []);
  const [activeTab, setActiveTab] = useState("ai-voice-agents");
  // Added state for the service grid component
  const [activeService, setActiveService] = useState(servicesData[0]);
  const [activeServiceTab, setActiveServiceTab] = useState("benefits");
  
  // CSS Animation classes
  const animations = {
    fadeIn: "animate-[fadeIn_1s_ease-in-out]",
    slideUp: "animate-[slideUp_0.5s_ease-in-out]",
    popUp: "animate-[popUp_0.5s_ease-in-out]",
    fadeInLeft: "animate-[fadeInLeft_0.8s_ease-in-out]",
    fadeInRight: "animate-[fadeInRight_0.8s_ease-in-out]",
    fadeInUp: "animate-[fadeInUp_0.8s_ease-in-out]",
    zoomIn: "animate-[zoomIn_0.8s_ease-in-out]",
  };
  
  // Refs for scroll animations
  const scrollElementsRef = useRef<HTMLElement[]>([]);
  
  // Get location for hash navigation
  const location = useLocation();
  
  // Setup scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Get all elements with reveal-on-scroll class
    const scrollElements = document.querySelectorAll('.reveal-on-scroll');
    scrollElements.forEach(el => {
      observer.observe(el);
      scrollElementsRef.current.push(el as HTMLElement);
    });
    
    return () => {
      if (scrollElementsRef.current) {
        scrollElementsRef.current.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
  
  // Handle URL hash navigation
  useEffect(() => {
    // Check if the URL contains a hash
    if (location.hash) {
      // Get the element with the ID from the hash (without the #)
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      
      // If the element exists, scroll to it after a short delay to ensure page is loaded
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]); // Re-run this effect when location changes
  
  // Service selection handler with navigation to individual service pages
  const handleServiceSelection = useCallback((service) => {
    // Map service IDs to their respective page routes
    const serviceRoutes = {
      1: "/services/intelligent-voice-automation",
      2: "/services/social-engagement-automation",
      3: "/services/lead-intelligence",
      4: "/services/interactive-ai-chatbots",
      5: "/services/automated-campaign-orchestration",
      6: "/services/threat-detection"
    };
    
    // Navigate to the corresponding service page
    window.location.href = serviceRoutes[service.id];
  }, []);
  
  
  // Industry data for the Industries Served section
  const industries = [
    {
      name: "Finance & Banking",
      icon: <Landmark className="h-10 w-10 text-[#88bf42]" />,
      description: "AI solutions for risk assessment, fraud detection, and customer service automation.",
      improvedResults : "25"
    },
    {
      name: "Healthcare",
      icon: <Shield className="h-10 w-10 text-[#88bf42]" />,
      description: "Streamline patient interactions, appointment scheduling, and medical information access.",
      improvedResults : "35"
    },
    {
      name: "E-commerce",
      icon: <ShoppingBag className="h-10 w-10 text-[#88bf42]" />,
      description: "Enhance customer experience with product recommendations, support, and omnichannel engagement.",
      improvedResults : "55"
    },
    {
      name: "Manufacturing",
      icon: <Factory className="h-10 w-10 text-[#88bf42]" />,
      description: "Optimize quality control processes and enhance operational efficiency.",
      improvedResults : "45"
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-10 w-10 text-[#88bf42]" />,
      description: "Improve student engagement and streamline administrative processes.",
      improvedResults : "75"
    },
    {
      name: "Technology",
      icon: <Cpu className="h-10 w-10 text-[#88bf42]" />,
      description: "Scale support operations and automate customer interactions.",
      improvedResults : "65"
    }
  ];

  // Advantages for Why Choose Thor Signia section
 

  // Determine which demo to show based on the active service
  const renderServiceDemo = () => {
    // Convert activeService.id to number if it's a string to ensure correct comparison
    const activeServiceId = typeof activeService.id === 'string' 
      ? parseInt(activeService.id) 
      : activeService.id;
      
    if (activeServiceId === 2) { // Autonomous Social Management
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#88bf42] to-[#0f0326] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Share2 className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Social Automation Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#88bf42]/20 to-[#0f0326]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 ' + activeService.iconColor })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#88bf42]">Thor Social Assistant</h4>
                <p className="text-sm text-gray-500">AI-Powered Social Media Manager</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#88bf42]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#0f0326]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Which platform would you like to manage today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#88bf42]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Let's start with Instagram and LinkedIn scheduling.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-[#88bf42] text-white py-6 px-8 rounded-lg transition-all duration-300 group  active:bg-[#88bf42]">
                  <Share2 className="w-5 h-5 mr-2" />
                  <span>Launch Social Manager</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 3) { // AI-Driven Lead Funnels
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#88bf42] to-[#0f0326] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Filter className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Lead Funnel Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#88bf42]/20 to-[#0f0326]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 ' + activeService.iconColor })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#88bf42]">Thor Lead Assistant</h4>
                <p className="text-sm text-gray-500">AI-Powered Lead Qualification Engine</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#88bf42]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#88bf42]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of leads are you looking to generate today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#0f0326]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">I need high-intent B2B contacts from the SaaS sector.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-[#88bf42] text-white py-6 px-8 rounded-lg transition-all duration-300 group  active:bg-[#88bf42]">
                  <Target className="w-5 h-5 mr-2" />
                  <span>Activate Lead Funnel</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 4) { // Smart Chat Interfaces
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#88bf42] to-[#0f0326] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <MessageSquare className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Chatbot Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#88bf42]/20 to-[#0f0326]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 ' + activeService.iconColor })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#88bf42]">ThorSignia Chat Assistant</h4>
                <p className="text-sm text-gray-500">Conversational AI Chat Interface</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#88bf42]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#88bf42]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of chat support would you like to enable?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#0f0326]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Let's explore multilingual chatbots with product FAQs.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-[#88bf42] text-white py-6 px-8 rounded-lg transition-all duration-300 group  active:bg-[#88bf42]">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  <span>Launch Chat Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 5) { // Omnichannel Engagement
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#88bf42] to-[#0f0326] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Megaphone className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Campaign Assistant Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#88bf42]/20 to-[#0f0326]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 ' + activeService.iconColor })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#88bf42]">Thor Campaign Assistant</h4>
                <p className="text-sm text-gray-500">AI-Driven Ad & Campaign Orchestration</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#88bf42]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#0f0326]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What type of campaign are you planning today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#88bf42]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">I need to launch a retargeting campaign across email and LinkedIn.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-[#88bf42] text-white py-6 px-8 rounded-lg transition-all duration-300 group  active:bg-[#88bf42]">
                  <Megaphone className="w-5 h-5 mr-2" />
                  <span>Start Campaign Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 6) { // Tailored AI Architectures
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#88bf42] to-[#0f0326] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Cpu className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Custom AI Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#88bf42]/20 to-[#0f0326]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 ' + activeService.iconColor })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#88bf42]">Thor AI Architect</h4>
                <p className="text-sm text-gray-500">Modular, Business-Aligned AI Solutions</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#88bf42]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#88bf42]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of AI solution would you like to build?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#0f0326]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">We need a workflow engine for legal document automation.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-[#88bf42] text-white py-6 px-8 rounded-lg transition-all duration-300 group  active:bg-[#88bf42]">
                  <Settings className="w-5 h-5 mr-2" />
                  <span>Design Your AI Stack</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Default Voice Agent Demo for other services
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#88bf42] to-[#0f0326] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Mic className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Voice Agent Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#88bf42]/20 to-[#0f0326]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 ' + activeService.iconColor })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#88bf42]">Thor AI Assistant</h4>
                <p className="text-sm text-gray-500">Conversational Voice Interface</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#88bf42]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#0f0326]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#88bf42]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">I'd like to learn about your voice agent solutions.</p>
                  </div>
                </div>
              </div>
              
              {/* Try voice agent button */}
              <div className="mt-auto">
                <Button className="w-full bg-[#88bf42] text-white py-6 px-8 rounded-lg transition-all duration-300 group  active:bg-[#88bf42]">
                  <Mic className="w-5 h-5 mr-2" />
                  <span>Try Voice Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // Add UseEffect for animations
  useEffect(() => {
    // Function to handle revealing elements on scroll
    const handleRevealOnScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Only reveal elements that are in the viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('visible');
          element.classList.add('animate-[fadeIn_0.6s_ease-in-out_forwards]');
        }
      });
    };
    
    // Initial check for elements in view on page load
    setTimeout(handleRevealOnScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleRevealOnScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleRevealOnScroll);
    };
  }, []);

  // Add this useEffect after component declaration
  useEffect(() => {
    // Initialize animations on page load
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => el.classList.add('visible'));
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedServiceHeader />
      
      {/* Service Tabs Section (Target for scroll) */}
      <section id="service-tabs">
        {/* Empty section for scroll target */}
      </section>
      
      {/* 1. Overview Statement Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Optional: Add more prominent decorative shapes or a subtle texture/pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-5">
          {/* Decorative elements content */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pb-12 sm:pb-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left Column: Text Content and Features */}
              <div className="reveal-on-scroll opacity-0 h-full flex flex-col justify-center text-center lg:text-left lg:w-1/2" data-animation="fadeInLeft">
                  {/* Label */}
                  <div className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4 sm:mb-6 w-fit mx-auto lg:mx-0">
                      <span className="text-[#88BF42] text-sm md:text-base font-semibold">Enterprise AI That Delivers</span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F0326] leading-tight mb-6 md:mb-6">
                  Smarter AI. Faster Results. <span className="text-[#88BF42]">Real Business Impact.</span>
                  </h2>

                  {/* Paragraph */}
                  <p className="text-base md:text-lg lg:text-[18px] text-[#696869] mb-6 sm:mb-10 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Thor Signia’s AI solutions are designed to do one thing: deliver results.
From rapid deployment to measurable ROI, we streamline your operations, boost efficiency, and
scale growth with intelligent automation.                  </p>

                                                 {/* Features Grid - Optimized for mobile display */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-0 max-w-md sm:max-w-none mx-auto lg:mx-0">
                      {/* Feature Item 1 */}
                      <div className="flex items-start bg-white border border-gray-100 rounded-lg p-3 sm:p-4 shadow-sm text-left">
                          <div className="mr-2 sm:mr-4 p-1 sm:p-2 rounded-full bg-[#88bf42] text-white flex-shrink-0">
                              {/* Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m8 15 2 2 6-6"/></svg>
                          </div>
                          <div>
                              {/* Feature Title - ⭐ MODIFIED: Added !important to font size classes ⭐ */}
                              {/* text-[16px] for mobile, sm:text-[18px] for sm+ */}
                              <h2 className="font-medium text-[#0F0326] mb-1 !text-[16px] sm:!text-[18px]">Custom Solutions</h2>
                              {/* Feature Description */}

                          </div>
                      </div>

                      {/* Feature Item 2 */}
                       <div className="flex items-start bg-white border border-gray-100 rounded-lg p-3 sm:p-4 shadow-sm text-left">
                          <div className="mr-2 sm:mr-4 p-1 sm:p-2 rounded-full bg-[#88bf42] text-white flex-shrink-0">
                              {/* Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m8 15 2 2 6-6"/></svg>
                          </div>
                          <div>
                              {/* Feature Title - ⭐ MODIFIED: Added !important to font size classes ⭐ */}
                              <h2 className="font-medium text-[#0F0326] mb-1 !text-[16px] sm:!text-[18px]">Rapid Deployment</h2>

                          </div>
                      </div>

                       {/* Feature Item 3 */}
                       <div className="flex items-start bg-white border border-gray-100 rounded-lg p-3 sm:p-4 shadow-sm text-left">
                          <div className="mr-2 sm:mr-4 p-1 sm:p-2 rounded-full bg-[#88bf42] text-white flex-shrink-0">
                              {/* Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m8 15 2 2 6-6"/></svg>
                          </div>
                          <div>
                              {/* Feature Title - ⭐ MODIFIED: Added !important to font size classes ⭐ */}
                              <h2 className="font-medium text-[#0F0326] mb-1 !text-[16px] sm:!text-[18px]">Measurable ROI</h2>

                          </div>
                      </div>

                      {/* Feature Item 4 */}
                       <div className="flex items-start bg-white border border-gray-100 rounded-lg p-3 sm:p-4 shadow-sm text-left">
                           <div className="mr-2 sm:mr-4 p-1 sm:p-2 rounded-full bg-[#88bf42] text-white flex-shrink-0">
                              {/* Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m8 15 2 2 6-6"/></svg>
                          </div>
                          <div>
                              {/* Feature Title - ⭐ MODIFIED: Added !important to font size classes ⭐ */}
                              <h2 className="font-medium text-[#0F0326] mb-1 !text-[16px] sm:!text-[18px]">Ongoing Support</h2>

                          </div>
                      </div>
                  </div>
              </div>

              {/* Stats and Award Section */}
              <div className="reveal-on-scroll opacity-0 h-full flex flex-col justify-center lg:w-1/2" data-animation="fadeInRight" style={{animationDelay: '0.2s'}}>
                  <div className="relative p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100">
                      {/* Decorative elements inside the card */}
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#88bf42]/5 rounded-full blur-xl z-0"></div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#0f0326]/5 rounded-full blur-xl z-0"></div>

                      <div className="relative z-10"> {/* Content needs to be above decorative elements */}
                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                              {/* Stat Item 1 */}
                              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#88bf42]/15 to-[#0f0326]/15 rounded-2xl backdrop-blur-sm shadow-inner">
                                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#0F0326]">+75%</h3>
                                  <p className="text-[#696869] text-sm">Revenue Growth</p>
                              </div>

                              {/* Stat Item 2 */}
                              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#0f0326]/15 to-[#88bf42]/15 rounded-2xl backdrop-blur-sm shadow-inner">
                                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#0F0326]">65%</h3>
                                  <p className="text-[#696869] text-sm">Cost Reduction</p>
                              </div>

                              {/* Stat Item 3 */}
                              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#0f0326]/15 to-[#88bf42]/15 rounded-2xl backdrop-blur-sm shadow-inner">
                                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#0F0326]">24/7</h3>
                                  <p className="text-[#696869] text-sm">Automated Support</p>
                              </div>

                              {/* Stat Item 4 */}
                               <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#88bf42]/15 to-[#0f0326]/15 rounded-2xl backdrop-blur-sm shadow-inner">
                                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#0F0326]">3.2x</h3>
                                  <p className="text-[#696869] text-sm">ROI Increase</p>
                              </div>
                          </div>

                          {/* Award Section */}
                          <div className="mt-8 bg-gray-50/60 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-100">
                              <div className="flex items-start">
                                  {/* Icon Container */}
                                  <div className="mr-4 p-3 rounded-full bg-[#0f0326]/10 text-[#88bf42] flex-shrink-0">
                                      {/* Icon */}
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11L3 8h18z"/></svg>
                                  </div>
                                  <div>
                                      <h3 className="text-lg font-semibold text-[#0F0326] mb-1">Award-Winning Solutions</h3>
                                      <p className="text-xs sm:text-sm text-[#696869]">Recognized for excellence in AI implementation and results</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

         
      </div>
  </section>

      {/* 2. Core Services Grid Section */}
      <section id="enterprise-ai-services" className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#0f0326]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 reveal-on-scroll opacity-0" data-animation="fadeInUp">
          <div className="flex justify-center">
          <div className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4 sm:mb-6 w-fit mx-auto lg:mx-0">
                      <span className="text-[#88BF42] text-sm md:text-base font-semibold">Solutions Portfolio</span>
                  </div>
            </div>
            {/* Heading - Centered consistently */}
            {/* Removed md:text-left */}
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-[#0F0326] text-center">
              Our Enterprise <span className="text-[#88BF42]">AI Services</span>
            </h2>
            {/* Paragraph - Centered consistently */}
            {/* Removed md:text-left and added mx-auto to center the paragraph block itself */}
            <p className="text-lg lg:text-[18px] text-[#696869] text-center max-w-3xl mx-auto"> {/* Added max-w-3xl and mx-auto for better control and centering */}
              Comprehensive range of AI solutions tailored for enterprise needs and business growth
            </p>

          </div>
          
          {/* Service Cards - Better mobile stacking */}
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12 md:mb-16">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white rounded-xl overflow-hidden group transition-all duration-500 reveal-on-scroll opacity-0"
                data-animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'}}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[350px] sm:min-h-[400px] h-full`}>
                  {/* Service Demo/Image - better mobile sizing */}
                  <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#88bf42]/5 to-[#0f0326]/5 flex items-center justify-center overflow-hidden">
                    <PinContainer title={service.title} className="text-base">
                      <div className={`relative w-full h-full min-h-[200px] sm:min-h-[260px] max-h-[300px] sm:max-h-[400px] aspect-square mx-auto rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center ${service.bgColor}`}> 
                        <div className="w-36 h-36 rounded-full flex items-center justify-center">
                          {cloneElement(service.icon, { className: "h-28 w-28 text-white drop-shadow-xl" })}
                </div>
                        {/* Animated particles in the background */}
                        <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
                          {[...Array(7)].map((_, i) => (
                            <div 
                              key={i}
                              className="absolute rounded-full bg-white w-4 h-4"
                              style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${3 + Math.random() * 4}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`
                              }}
                            ></div>
                          ))}
                </div>
                    </div>
                    </PinContainer>
                </div>
                
                
                  {/* Service Information - better padding for mobile */}
                  <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
                    <div className="h-full flex flex-col">
                      <div className="mb-6 flex items-start">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#88bf42] mr-4 flex-shrink-0 transform transition-transform group-hover:rotate-12">
                          {cloneElement(service.icon, { className: "h-6 w-6 text-white" })}
                </div>
                        <div>
                          <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#88bf42] transition-colors">{service.title}</h3>
                          
              </div>
            </div>
            
                      <p className="text-lg lg:text-[18px] text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3 flex items-center">
                          <span className="inline-block w-6 sm:w-8 h-0.5 bg-[#88bf42] mr-2"></span>
                          Key Benefits
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start group/item">
                              <div className="p-1 rounded-full bg-[#88bf42] mr-3 mt-1 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                                <Check className="h-3 w-3 text-white" />
                </div>
                              <span className="text-[16px] text-gray-700 group-hover/item:text-gray-900 transition-colors">{benefit}</span>
                            </li>
                          ))}
                        </ul>
              </div>
              
                      {/* Learn More Button */}
                      <div className="mt-auto">
                        <Button
                          className={`${service.color} text-white rounded-lg px-4 py-2 text-sm shadow-md transition-all duration-300 flex items-center`}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the parent onClick
                            handleServiceSelection(service);
                          }}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Case study with enhanced styling */}

                    </div>
                  </div>
                </div>
              </div>
            ))}
                </div>
                
          {/* Responsive button sizing */}
          <div className="text-center mt-8 sm:mt-12 reveal-on-scroll opacity-0" data-animation="fadeInUp">
            <Button
              asChild
              className="bg-[#88bf42] text-white rounded-lg px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base shadow-lg transition-all duration-300 group sm:w-auto"
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                Request a Service Enquiry
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
      </section>
      
      {/* 3. Industries Served Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0f0326]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-2 sm:mb-10 md:mb-12 lg:mb-16 reveal-on-scroll opacity-0" data-animation="fadeInUp">
            <div className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4 sm:mb-6 w-fit mx-auto"> {/* Removed lg:mx-0 if header is centered */}
              <span className="text-[#88BF42] text-sm md:text-base font-semibold">Specialized Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-[#0F0326] text-center">
              Industries <span className="text-[#88BF42]">We Serve</span>
            </h2>
            <p className="text-lg lg:text-[18px] text-[#696869] text-center">
              Tailored AI solutions designed for the unique challenges of your industry
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Map over industries - NOTE: 'industries' array must be defined and contain 'improvedResults' property */}
            {industries.map((industry, index) => (
              <div key={index} className="rounded-xl transition-all duration-500 transform hover:-translate-y-2 reveal-on-scroll opacity-0 overflow-hidden p-0 bg-white"
                data-animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                style={{animationDelay: `${index * 0.1}s`, boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'}}>
                {/* Card Content - Add relative for positioning the badge */}
                <div className="relative z-10 rounded-xl p-4 sm:p-6">

                  {/* Improved Results Percentage Badge */}
                  {industry.improvedResults && ( // Check if percentage data exists
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#88BF42]/20 text-[#0F0326] text-xs sm:text-sm font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                      +{industry.improvedResults}% Improved
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r from-[#88bf42]/10 to-[#0f0326]/10">
                    {industry.icon} {/* Ensure industry.icon is a valid React node (SVG component etc.) */}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-bold">{industry.name}</h3>

                  {/* Description */}
                  <p className="text-lg lg:text-[18px] text-[#696869] mb-0">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
      
     
     
      
      <Footer />

    </div>
  );
};

export default ServicesPage;

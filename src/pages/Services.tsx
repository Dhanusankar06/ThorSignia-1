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
  Clock
} from 'lucide-react';
import ChatbotDemo from '@/components/ChatbotDemo';
// import VoiceAgentDemo from '@/components/VoiceAgentDemo';
import { PinContainer } from '@/components/ui/3d-pin';
import '../services-animations.css';
// Services data from ServicesSection.tsx
const servicesData = [
  {
    id: 1,
    title: "Intelligent Voice Automation",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Experience revolutionary customer service with advanced conversational AI agents. These intelligent systems understand natural language, handle complex and multi-turn inquiries with human-like interactions, and provide 24/7 support, seamlessly integrating with your existing communication channels.",
    color: "bg-[#1c9f1e]",
    bgColor: "bg-[#1c9f1e]/10",
    hoverBgColor: "group-hover:bg-[#1c9f1e]/20",
    benefits: [
      "24/7 customer support without human limitations",
      "Handles complex, multi-turn conversations naturally",
      "Seamless integration with existing communication channels"
    ],

  },
  {
    id: 2,
    title: "Social Engagement Automation",
    icon: <Globe className="h-8 w-8" />,
    description: "Boost your social media presence with AI-powered automation. This service leverages artificial intelligence to generate engaging content at scale, optimize posting schedules based on audience behavior, and automate interactions to drive growth and maximize engagement across all your platforms.",
    color: "bg-[#10b4b7]",
    bgColor: "bg-[#10b4b7]/10",
    hoverBgColor: "group-hover:bg-[#10b4b7]/20",
    benefits: [
      "Content generation at scale across platforms",
      "Automated audience growth and engagement",
      "Data-driven performance optimization"
    ],


  },
  {
    id: 3,
    title: "AI-Powered Lead Intelligence",
    icon: <LineChart className="h-8 w-8" />,
    description: "Supercharge your sales funnel with AI-powered lead intelligence. Our system intelligently identifies and qualifies high-potential leads by analyzing vast data sets, automates personalized nurturing sequences to build relationships, and continuously optimizes strategies to fill your pipeline and drive higher conversion rates.",
    color: "bg-[#9ac857]",
    bgColor: "bg-[#9ac857]/10",
    hoverBgColor: "group-hover:bg-[#9ac857]/20",
    benefits: [
      "Hyper-targeted lead acquisition and qualification",
      "Personalized nurturing sequences at scale",
      "Higher conversion rates through AI optimization"
    ],


  },
  {
    id: 4,
    title: "Interactive AI Chatbots",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Deploy interactive AI chatbots that go beyond simple FAQs. These intelligent bots understand conversation context, provide instant 24/7 support, deliver personalized experiences based on user data, and can seamlessly hand off complex queries to human agents when needed, enhancing overall customer satisfaction.",
    color: "bg-[#1c9f1e]",
    bgColor: "bg-[#1c9f1e]/10",
    hoverBgColor: "group-hover:bg-[#1c9f1e]/20",
    benefits: [
      "24/7 instant customer support and engagement",
      "Seamless handoff between AI and human agents",
      "Personalized experiences based on user data"
    ],

  },
  {
    id: 5,
    title: "Automated Campaign Orchestration",
    icon: <Database className="h-8 w-8" />,
    description: "Streamline and maximize your marketing efforts with automated campaign orchestration. Our AI unifies messaging across all customer touchpoints, continuously learns and self-optimizes ad campaigns in real-time by adjusting targeting, bids, and creatives, ensuring superior ROI and performance without manual intervention.",
    color: "bg-[#10b4b7]",
    bgColor: "bg-[#10b4b7]/10",
    hoverBgColor: "group-hover:bg-[#10b4b7]/20",
    benefits: [
      "Unified messaging across all customer touchpoints",
      "Self-optimizing campaigns that improve over time",
      "Superior ROI through AI-powered targeting"
    ],


  },
  {
    id: 6,
    title: "AI-Powered Threat Detection",
    icon: <Shield className="h-8 w-8" />,
    description: "Safeguard your digital assets with advanced AI-powered threat detection. Our system uses artificial intelligence to analyze vast amounts of data in real-time, identifying and responding to evolving cyber threats like malware, phishing attempts, and network intrusions. It also automates vulnerability assessments and provides continuous monitoring for proactive protection.",
    color: "bg-[#9ac857]",
    bgColor: "bg-[#9ac857]/10",
    hoverBgColor: "group-hover:bg-[#9ac857]/20",
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
  icon: string;
  description: string;
}

interface ImplementationStep {
  title: string;
  icon: string;
  description: string;
}

const ServicesPage = () => {
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
  
  // Service selection handler with scroll prevention
  const handleServiceSelection = useCallback((service) => {
    // Prevent default scroll behavior
    window.history.pushState(null, '', window.location.href.split('#')[0]);
    setActiveService(service);
  }, []);
  
  
  // Industry data for the Industries Served section
  const industries = [
    {
      name: "Finance & Banking",
      icon: <Landmark className="h-10 w-10" />,
      description: "AI solutions for risk assessment, fraud detection, and customer service automation."
    },
    {
      name: "Healthcare",
      icon: <Shield className="h-10 w-10" />,
      description: "Streamline patient interactions, appointment scheduling, and medical information access."
    },
    {
      name: "E-commerce",
      icon: <Boxes className="h-10 w-10" />,
      description: "Enhance customer experience with product recommendations, support, and omnichannel engagement."
    },
    {
      name: "Manufacturing",
      icon: <Building className="h-10 w-10" />,
      description: "Optimize quality control processes and enhance operational efficiency."
    },
    {
      name: "Education",
      icon: <Users className="h-10 w-10" />,
      description: "Improve student engagement and streamline administrative processes."
    },
    {
      name: "Technology",
      icon: <Cpu className="h-10 w-10" />,
      description: "Scale support operations and automate customer interactions."
    }
  ];

  // Advantages for Why Choose Thor Signia section
  const advantages = [
    {
      title: "Advanced Enterprise AI",
      icon: <Brain className="h-6 w-6" />,
      description: "Cutting-edge AI technology tailored for enterprise-grade reliability and performance."
    },
    {
      title: "Custom Solutions",
      icon: <Settings className="h-6 w-6" />,
      description: "Bespoke AI architectures designed specifically for your unique business challenges."
    },
    {
      title: "Rapid Implementation",
      icon: <Clock className="h-6 w-6" />,
      description: "Get your AI solution up and running in weeks, not months or years."
    },
    {
      title: "Business-Focused Results",
      icon: <LineChart className="h-6 w-6" />,
      description: "Solutions aligned with key business metrics and measurable ROI."
    }
  ];

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
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
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
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 text-[#10b4b7]' })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor Social Assistant</h4>
                <p className="text-sm text-gray-500">AI-Powered Social Media Manager</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#10b4b7]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Which platform would you like to manage today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
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
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
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
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 text-[#10b4b7]' })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor Lead Assistant</h4>
                <p className="text-sm text-gray-500">AI-Powered Lead Qualification Engine</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#9ac857]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of leads are you looking to generate today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
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
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
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
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 text-[#10b4b7]' })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">ThorSignia Chat Assistant</h4>
                <p className="text-sm text-gray-500">Conversational AI Chat Interface</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#1c9f1e]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#1c9f1e]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of chat support would you like to enable?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
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
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
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
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 text-[#10b4b7]' })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor Campaign Assistant</h4>
                <p className="text-sm text-gray-500">AI-Driven Ad & Campaign Orchestration</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#10b4b7]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What type of campaign are you planning today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
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
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
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
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 text-[#10b4b7]' })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor AI Architect</h4>
                <p className="text-sm text-gray-500">Modular, Business-Aligned AI Solutions</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#9ac857]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of AI solution would you like to build?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
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
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
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
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 text-[#10b4b7]' })}
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor AI Assistant</h4>
                <p className="text-sm text-gray-500">Conversational Voice Interface</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#10b4b7]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
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
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Remove the existing blur circles since we have the animated background */}
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="reveal-on-scroll opacity-0 h-full flex flex-col" data-animation="fadeInLeft">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#10b4b7]/10 text-[#88bf42] text-sm font-medium backdrop-blur-sm mx-auto text-center">
                Enterprise AI Solutions
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 relative backdrop-blur-sm mx-auto text-center md:text-left">
  Transforming Business Operations <br className="hidden md:block" />
  Through Advanced AI
  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-gradient-to-r from-[#10b4b7] to-[#9ac857] rounded-full animate-[fadeIn_2s_ease-in-out_1s]"></div>
</h2>


              <p className="text-lg text-gray-700 mb-8 leading-relaxed backdrop-blur-sm bg-white/50 p-4 rounded-lg">
                Thor Signia delivers cutting-edge AI solutions that streamline operations, enhance customer engagement, and drive revenue growth. Our enterprise-grade technologies help your business achieve measurable results through intelligent automation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start backdrop-blur-sm bg-white/50 p-4 rounded-lg">
                   <div className="mr-4 p-2 rounded-full bg-[#9ac857]/10 text-[#9ac857]">
                    <CheckCircle2 className="h-6 w-6" />
                    </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Custom Solutions</h3>
                    <p className="text-sm text-gray-600">Tailored to your specific business challenges</p>
              </div>
            </div>
            
                <div className="flex items-start backdrop-blur-sm bg-white/50 p-4 rounded-lg">
                  <div className="mr-4 p-2 rounded-full bg-[#9ac857]/10 text-[#9ac857]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Rapid Deployment</h3>
                    <p className="text-sm text-gray-600">Get up and running in weeks, not months</p>
                </div>
              </div>
              
                <div className="flex items-start backdrop-blur-sm bg-white/50 p-4 rounded-lg">
                   <div className="mr-4 p-2 rounded-full bg-[#9ac857]/10 text-[#9ac857]">
                    <CheckCircle2 className="h-6 w-6" />
                </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Measurable ROI</h3>
                    <p className="text-sm text-gray-600">Solutions focused on business outcomes</p>
                            </div>
                    </div>
                
                <div className="flex items-start backdrop-blur-sm bg-white/50 p-4 rounded-lg">
                  <div className="mr-4 p-2 rounded-full bg-[#9ac857]/10 text-[#9ac857]">
                    <CheckCircle2 className="h-6 w-6" />
                              </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                    <p className="text-sm text-gray-600">Continuous optimization and assistance</p>
                            </div>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll opacity-0 h-full flex flex-col" data-animation="fadeInRight" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#10b4b7]/10 rounded-full blur-md"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#9ac857]/10 rounded-full blur-md"></div>
                
                {/* Stats grid */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8 relative z-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center p-4 bg-gradient-to-br from-[#10b4b7]/5 to-[#10b4b7]/10 rounded-xl backdrop-blur-sm">
                      <h3 className="text-4xl font-bold mb-2">98%</h3>
                      <p className="text-gray-700 text-sm">Customer Satisfaction</p>
            </div>
            
                    <div className="text-center p-4 bg-gradient-to-br from-[#9ac857]/5 to-[#9ac857]/10 rounded-xl backdrop-blur-sm">
                      <h3 className="text-4xl font-bold mb-2">65%</h3>
                      <p className="text-gray-700 text-sm">Cost Reduction</p>
                  </div>
                  
                    <div className="text-center p-4 bg-gradient-to-br from-[#9ac857]/5 to-[#9ac857]/10 rounded-xl backdrop-blur-sm">
                      <h3 className="text-4xl font-bold mb-2">24/7</h3>
                      <p className="text-gray-700 text-sm">Automated Support</p>
                      </div>
                      
                    <div className="text-center p-4 bg-gradient-to-br from-[#10b4b7]/5 to-[#10b4b7]/10 rounded-xl backdrop-blur-sm">
                      <h3 className="text-4xl font-bold mb-2">3.2x</h3>
                      <p className="text-gray-700 text-sm">ROI Increase</p>
                                    </div>
                            </div>
                  
                  <div className="mt-8 bg-gray-50/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 rounded-full bg-[#10b4b7]/10 text-[#10b4b7]">
                        <Award className="h-6 w-6" />
                                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Award-Winning Solutions</h3>
                        <p className="text-sm text-gray-600">Recognized for excellence in AI implementation and results</p>
                                    </div>
                            </div>
                                      </div>
                              </div><br></br>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Core Services Grid Section */}
      <section id="enterprise-ai-services" className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#10b4b7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#9ac857]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 reveal-on-scroll opacity-0" data-animation="fadeInUp">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#10b4b7]/10 text-[#88bf42] text-sm font-medium mx-auto text-center">
              Solutions Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 relative">
              Our Enterprise AI Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#10b4b7] to-[#9ac857] rounded-full animate-[fadeIn_2s_ease-in-out]"></div>
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive range of AI solutions tailored for enterprise needs and business growth
            </p>
          </div>
          
          {/* Service Cards - Better mobile stacking */}
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12 md:mb-16">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-500 reveal-on-scroll opacity-0"
                data-animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[350px] sm:min-h-[400px] h-full`}>
                  {/* Service Demo/Image - better mobile sizing */}
                  <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f8f9fa] to-[#f0f2f5] flex items-center justify-center overflow-hidden">
                    <PinContainer title={service.title}>
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
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.bgColor} mr-4 flex-shrink-0 transform transition-transform group-hover:rotate-12`}>
                          {cloneElement(service.icon, { className: "h-6 w-6 text-white" })}
                </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#10b4b7] transition-colors">{service.title}</h3>
                          
              </div>
            </div>
            
                      <p className="text-gray-700 mb-6 leading-relaxed">
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
                              <div className={`p-1 rounded-full ${service.bgColor} mr-3 mt-1 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110`}>
                                <Check className="h-3 w-3 text-white" />
                </div>
                              <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">{benefit}</span>
                            </li>
                          ))}
                        </ul>
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
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#10b4b7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#9ac857]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 reveal-on-scroll opacity-0" data-animation="fadeInUp">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#9ac857]/10 text-[#9ac857] text-sm font-medium mx-auto text-center">
              Specialized Solutions
                </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative">
              Industries We Serve
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#10b4b7] to-[#9ac857] rounded-full animate-[fadeIn_2s_ease-in-out_1s]"></div>
            </h2>
            <p className="text-lg text-gray-700">
              Tailored AI solutions designed for the unique challenges of your industry
            </p>
              </div>
              
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 reveal-on-scroll opacity-0 overflow-hidden p-0 border border-gray-200 bg-white">
                <div className="relative z-10 rounded-xl p-4 sm:p-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {cloneElement(activeService.icon, { className: 'h-8 w-8 text-[#10b4b7]' })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{industry.name}</h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-0">
                  {industry.description}
                </p>
                </div>
                  </div>
            ))}
                </div>
                </div>
      </section>
      
      {/* 4. Trusted by Industry Leaders Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#10b4b7]/10 text-[#88bf42] text-sm font-medium mx-auto text-center">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-700">See how our AI solutions have transformed businesses across diverse sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: SGF FAB INDUSTRIES */}
            <div className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col h-full relative">
              <div className="mb-4 rounded-lg overflow-hidden">
                <img src="/assets/ai-visual-inspection.jpg" alt="AI-Powered Quality Control System" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-lg font-bold text-[#10b4b7] mt-4 mb-1">SGF FAB INDUSTRIES</h3>
              <p className="text-xs text-gray-500 mb-4">THE PEOPLE OF QUALITY AND SAFETY</p>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#10b4b7]/10 flex items-center justify-center mr-3">
                  <Building className="h-5 w-5 text-[#10b4b7]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Manufacturing Industry</div>
                  <div className="text-xs text-gray-500">Material Handling Equipment</div>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-gray-900 mb-1">Challenge</div>
                <div className="text-sm text-gray-700">Needed to improve quality control in industrial fabrication processes while reducing production defects.</div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-gray-900 mb-1">Solution</div>
                <div className="text-sm text-gray-700">Custom computer vision system with AI-powered defect detection and predictive maintenance capabilities.</div>
              </div>
              <div className="mt-3 sm:mt-4 mb-4 sm:mb-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#10b4b7]/5 rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold">73%</div>
                  <div className="text-xs text-gray-500">Fewer Production Defects</div>
                </div>
                <div className="bg-[#9ac857]/5 rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold">62%</div>
                  <div className="text-xs text-gray-500">Improved Efficiency</div>
                </div>
              </div>
             
            </div>
            {/* Card 2: Doctor Dreams */}
            <div className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col h-full relative">
              <div className="mb-4 rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                <img src="/assets/Doctor-dreams.jpg" alt="Doctor Dreams" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-lg font-bold text-[#10b4b7] mt-4 mb-1">Doctor Dreams</h3>
              <p className="text-xs text-gray-500 mb-4">Medical Education Consultancy</p>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#10b4b7]/10 flex items-center justify-center mr-3">
                  <Landmark className="h-5 w-5 text-[#10b4b7]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Education Sector</div>
                  <div className="text-xs text-gray-500">International Medical Studies</div>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-gray-900 mb-1">Challenge</div>
                <div className="text-sm text-gray-700">Needed to handle high volume of student inquiries about medical education opportunities abroad.</div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-gray-900 mb-1">Solution</div>
                <div className="text-sm text-gray-700">AI voice agents with specialized knowledge of medical programs, universities, and admission requirements.</div>
              </div>
              <div className="mt-3 sm:mt-4 mb-4 sm:mb-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#10b4b7]/5 rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold">65%</div>
                  <div className="text-xs text-gray-500">Faster Response</div>
                </div>
                <div className="bg-[#9ac857]/5 rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold">28%</div>
                  <div className="text-xs text-gray-500">Higher Satisfaction</div>
                </div>
              </div>
             
            </div>
            {/* Card 3: Anthill IQ */}
            <div className="rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col h-full relative">
              <div className="mb-4 rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                <img src="/assets/Anthill.jpg" alt="Anthill IQ" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-lg font-bold text-[#10b4b7] mt-4 mb-1">Anthill IQ</h3>
              <p className="text-xs text-gray-500 mb-4">Collaborative Workspace Solutions</p>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#10b4b7]/10 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-[#10b4b7]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Premium Workspace Provider</div>
                  <div className="text-xs text-gray-500">Co-working Space Provider</div>
                </div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-gray-900 mb-1">Challenge</div>
                <div className="text-sm text-gray-700">Needed to streamline workspace inquiries and bookings while providing 24/7 customer service.</div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-gray-900 mb-1">Solution</div>
                <div className="text-sm text-gray-700">Smart chat interface with booking capabilities and real-time availability information for all workspace options.</div>
              </div>
              <div className="mt-3 sm:mt-4 mb-4 sm:mb-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#10b4b7]/5 rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold">70%</div>
                  <div className="text-xs text-gray-500">Faster Response</div>
                </div>
                <div className="bg-[#9ac857]/5 rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold">42%</div>
                  <div className="text-xs text-gray-500">Higher Conversion</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. Why Choose Thor Signia? Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-[#f8fcf8] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#9ac857]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#10b4b7]/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center items-stretch">
            <div className="reveal-on-scroll opacity-0 h-full flex flex-col" data-animation="fadeInLeft">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#9ac857]/10 rounded-full blur-md"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#10b4b7]/10 rounded-full blur-md"></div>
                
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative z-10">
                  <div className="p-6 mb-8 bg-gradient-to-br from-[#10b4b7]/5 to-[#9ac857]/5 rounded-xl border border-[#10b4b7]/10">
                    <div className="flex mb-4">
                      <div className="p-2 rounded-full bg-[#10b4b7]/10 mr-4">
                        <Sparkles className="h-6 w-6 text-[#10b4b7]" />
                    </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Innovation Partner</h3>
                        <p className="text-gray-700 text-sm">Pioneering AI solutions since 2019</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "Thor Signia's AI solutions transformed our customer service operations completely. We've seen a 42% reduction in call volume while improving satisfaction scores."
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#10b4b7] flex items-center justify-center text-white font-bold mr-3">
                        DD
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Director of Operations</p>
                        <p className="text-sm text-gray-500">Doctor Dreams</p>
                    </div>
                  </div>
                </div>
                
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-6 rounded-xl border border-gray-100 gap-4 sm:gap-0">
  <div className="flex items-center">
    <Award className="h-7 w-7 sm:h-8 sm:w-8 text-[#9ac857] mr-3 sm:mr-4" />
    <div>
      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Awards & Recognition</h3>
      <p className="text-xs sm:text-sm text-gray-600">Excellence in AI Implementation</p>
    </div>
  </div>
  <Button
    variant="ghost"
    className="text-[#88bf42] hover:text-[#9ac857] px-2 py-2 sm:p-0 group w-full sm:w-auto text-sm sm:text-base justify-center"
  >
    <RouterLink to="/awards" className="flex items-center w-full sm:w-auto justify-center">
      <span className="flex items-center">
        View All
        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </RouterLink>
  </Button>
</div>
          </div>
        </div>
          </div>
          
            <div className="reveal-on-scroll opacity-0 h-full flex flex-col" data-animation="fadeInRight" style={{animationDelay: '0.2s'}}>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#9ac857]/10 text-[#9ac857] text-sm font-medium mx-auto text-center">
                Our Difference
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative text-center">
  Why <span className="text-[#9ac857]">Thor</span> <span className="text-[#10b4b7]">Signia</span>?
  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#9ac857] rounded-full"></div>
</h2>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                With our deep expertise in AI technologies and business process optimization, we deliver solutions that create immediate impact and long-term value for your organization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {advantages.map((advantage, index) => (
                <div 
                  key={index}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10b4b7]/10 to-[#9ac857]/10 flex items-center justify-center mb-4">
                      {cloneElement(advantage.icon, { className: "h-6 w-6 text-[#10b4b7]" })}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-700 text-sm">
                      {advantage.description}
                    </p>
                </div>
              ))}
              </div>
              
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
          </div>
        </div>
      </section>
      
      {/* Floating Quote Button */}
      {/* <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
        <Button 
          asChild
          className="bg-[#88bf42] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 shadow-xl flex items-center justify-center group transform hover:scale-110 transition-all duration-300"
        >
          <Link to="/contact#contact-form" className="flex flex-col items-center">
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:hidden" />
            <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 hidden group-hover:block" />
            <span className="text-xs mt-0.5 sm:mt-1 font-medium">Quote</span>
          </Link>
        </Button>
      </div> */}
      
      <Footer />
      <ChatbotDemo />
    </div>
  );
};

export default ServicesPage;

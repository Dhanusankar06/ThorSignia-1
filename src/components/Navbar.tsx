import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Menu, X, UserRound, BookMarked, Shield, 
  MessageCircle, Globe, Database, LineChart, Briefcase,
  ChevronDown
} from 'lucide-react';

import { blogPosts } from '@/data/blog-posts';

// Define services data directly here
const servicesData = [
  {
    id: 1,
    title: "Conversational Voice Interfaces",
    icon: <MessageCircle className="h-4 w-4" />,
    description: "Advanced conversational AI agents that handle customer inquiries with human-like interactions"
  },
  {
    id: 2,
    title: "Smart Social Media Manager",
    icon: <Globe className="h-4 w-4" />,
    description: "AI-powered content creation and scheduling for optimal social media engagement"
  },
  {
    id: 3,
    title: "AI Lead Conversion Engine",
    icon: <LineChart className="h-4 w-4" />,
    description: "Intelligent lead identification, qualification, and nurturing to fill your sales pipeline"
  },
  {
    id: 4,
    title: "Interactive Ai Chat bots",
    icon: <MessageCircle className="h-4 w-4" />,
    description: "Conversational AI that understands context and provides personalized customer experiences"
  },
  {
    id: 5,
    title: "Smart Champaign Intelligence",
    icon: <Database className="h-4 w-4" />,
    description: "Self-optimizing ad campaigns that maximize ROI through continuous AI learning"
  },
  {
    id: 6,
    title: "Cyber Security",
    description: "Advanced AI-driven cyber security solutions to protect your business from evolving digital threats."
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 400);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 400);
    };

    // Close mobile menu whenever location changes
    setIsMobileMenuOpen(false);
    
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  // Helper function to handle navigation and scrolling
  const handleNavigation = (e, path, id = null) => {
    // Always scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu regardless
    setIsMobileMenuOpen(false);
  };

  // Function to scroll to top when clicking the logo/company name
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Services icons mapping
  const serviceIcons = {
    "Conversational Voice Interfaces": <MessageCircle className="h-4 w-4" />,
    "Smart Social Media Manager": <Globe className="h-4 w-4" />,
    "AI Lead Conversion Engine": <LineChart className="h-4 w-4" />,
    "Interactive Ai Chat bots": <MessageCircle className="h-4 w-4" />,
    "Smart Champaign Intelligence": <Database className="h-4 w-4" />,
    "Cyber Security": null
  };  

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f0f8f8] shadow-md py-2 md:py-2' : 'bg-[#f0f8f8] py-2 md:py-3'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-row items-center justify-between min-h-[64px] gap-2 md:gap-0">
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link 
              to="/" 
              className="flex items-center min-w-0" 
              onClick={(e) => {
                handleNavigation(e, '/', 'home-hero-section');
                scrollToTop();
              }}
              style={{ height: '48px' }}
            >
              <img 
                src="/ThorSignia Logo .png" 
                alt="Thor Signia Logo" 
                className="h-36 w-auto md:w-[170px] md:h-[170px] object-contain"
                style={{ display: 'block', margin: 0, padding: 0 }}
                onError={(e) => {
                  // Fallback if the public logo is missing
                  e.currentTarget.src = '/assets/logo.jpg';
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 ${location.pathname === '/' ? 'text-[#009898]' : ''}`}
              onClick={(e) => handleNavigation(e, '/', 'home-hero-section')}
            >
              Home
            </Link>
            <Link 
              to="/about#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 ${location.pathname === '/about' ? 'text-[#009898]' : ''}`}
              onClick={(e) => handleNavigation(e, '/about')}
            >
              About
            </Link>
            
            <Link 
              to="/services#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 whitespace-nowrap min-w-0 overflow-hidden text-ellipsis ${location.pathname.includes('/services') ? 'text-[#009898]' : ''}`}
              onClick={(e) => handleNavigation(e, '/services')}
            >
              Services
            </Link>
            
            {/* Add Cyber Security as main navigation item */}
            <Link 
              to="/cyber-security#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium flex items-center px-2 whitespace-nowrap min-w-0 overflow-hidden text-ellipsis ${location.pathname === '/cyber-security' ? 'text-[#009898]' : ''}`}
              style={{maxWidth: '160px'}}
              onClick={(e) => handleNavigation(e, '/services#cyber-security')}
            >
              <span className="truncate">Cyber Security</span>
            </Link>
            
            <Link 
              to="/case-studies#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 whitespace-nowrap min-w-0 overflow-hidden text-ellipsis ${location.pathname === '/case-studies' ? 'text-[#009898]' : ''}`}
              style={{maxWidth: '140px'}}
              onClick={(e) => handleNavigation(e, '/case-studies')}
            >
              <span className="truncate">Case Studies</span>
            </Link>
            <Link 
              to="/ai-engineers#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 whitespace-nowrap min-w-0 overflow-hidden text-ellipsis ${location.pathname === '/ai-engineers' ? 'text-[#009898]' : ''}`}
              style={{maxWidth: '140px'}}
              onClick={(e) => handleNavigation(e, '/ai-engineers')}
            >
              <span className="truncate">AI Engineers</span>
            </Link>
            <Link 
              to="/awards#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 ${location.pathname === '/awards' ? 'text-[#009898]' : ''}`}
              onClick={(e) => handleNavigation(e, '/awards')}
            >
              Awards
            </Link>

            <Link 
              to="/blog#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 ${location.pathname.includes('/blog') ? 'text-[#009898]' : ''}`}
              onClick={(e) => handleNavigation(e, '/blog')}
            >
              Blog
            </Link>
            
            <Link 
              to="/careers#top" 
              className={`text-primary-700 hover:text-[#009898] transition-colors font-medium px-2 ${location.pathname === '/careers' ? 'text-[#009898]' : ''}`}
              onClick={(e) => handleNavigation(e, '/careers')}
            >
              Careers
            </Link>
            
            <Button className="bg-[#009898] hover:bg-[#007b7b] text-white ml-2" asChild>
              <Link 
                to="/contact" 
                onClick={(e) => handleNavigation(e, '/contact')}
              >
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-700 p-2 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-4 space-y-3 bg-[#f0f8f8] rounded-lg mt-2 shadow-lg">
            <Link 
              to="/" 
              className="block text-primary-700 hover:text-[#009898] transition-colors font-medium py-2 px-4"
              onClick={(e) => handleNavigation(e, '/', 'home-hero-section')}
            >
              Home
            </Link>
            <Link 
              to="/about#top" 
              className="block text-primary-700 hover:text-[#009898] transition-colors font-medium py-2 px-4"
              onClick={(e) => handleNavigation(e, '/about')}
            >
              About
            </Link>
            
            {/* Services Section */}
            <div className="py-2 px-4">
              <Link 
                to="/services" 
                className="block text-primary-700 hover:text-[#009898] transition-colors font-medium"
                onClick={(e) => handleNavigation(e, '/services')}
              >
                Services
              </Link>
              <div className="pl-4 mt-2 space-y-2">
                {servicesData.map((service, index) => (
                  <Link 
                    key={index}
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="block text-primary-700 hover:text-[#009898] transition-colors py-1 flex items-center"
                    onClick={(e) => handleNavigation(e, `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    <span className="mr-2 text-[#88bf42]">
                      {service.icon}
                    </span>
                    <span className="text-sm">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/case-studies" 
              className="block text-primary-700 hover:text-[#009898] transition-colors font-medium py-2 px-4"
              onClick={(e) => handleNavigation(e, '/case-studies')}
            >
              Case Studies
            </Link>
            <Link 
              to="/ai-engineers" 
              className="block text-primary-700 hover:text-[#009898] transition-colors font-medium py-2 px-4"
              onClick={(e) => handleNavigation(e, '/ai-engineers')}
            >
              AI Engineers
            </Link>
            <Link 
              to="/services#cyber-security" 
              className="block text-primary-700 hover:text-[#009898] transition-colors font-medium py-2 px-4"
              onClick={(e) => handleNavigation(e, '/services#cyber-security')}
            >
              Cyber Security
            </Link>
            <Link 
              to="/awards" 
              className="block text-primary-700 hover:text-[#009898] transition-colors font-medium py-2 px-4"
              onClick={(e) => handleNavigation(e, '/awards')}
            >
              Awards
            </Link>
            
            {/* Blog Section */}
            <div className="py-2 px-4">
              <Link 
                to="/blog" 
                className="block text-primary-700 hover:text-[#009898] transition-colors font-medium"
                onClick={(e) => handleNavigation(e, '/blog')}
              >
                Blog
              </Link>
              <div className="pl-4 mt-2 space-y-2">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Link 
                    key={index}
                    to={`/blog/${post.slug}`}
                    className="block text-primary-700 hover:text-[#009898] transition-colors py-1 text-sm"
                    onClick={(e) => handleNavigation(e, `/blog/${post.slug}`)}
                  >
                    {post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/careers" 
              className="block text-primary-700 hover:text-[#009898] transition-colors font-medium py-2 px-4"
              onClick={(e) => handleNavigation(e, '/careers')}
            >
              Careers
            </Link>
            
            <div className="px-4 pt-3 pb-1">
              <Button className="w-full bg-[#009898] hover:bg-[#007b7b] text-white rounded-lg shadow-sm py-5" asChild>
                <Link to="/contact" onClick={(e) => handleNavigation(e, '/contact')}>Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotDemo from '@/components/ChatbotDemo';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, X } from "lucide-react";
// Import animation components
import { Fade, Slide } from 'react-awesome-reveal';
// Import useLocation from react-router-dom
import { Link, useLocation } from 'react-router-dom'; 

// Import Particles library components
// With these
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const AwardsPage = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [showAwardModal, setShowAwardModal] = useState(false);

  // Get the current location object from react-router-dom
  const location = useLocation(); 

  // --- Existing useEffect for body overflow ---
  useEffect(() => {
    if (showAwardModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAwardModal]);
  // ------------------------------------------

  // --- MODIFIED useEffect to scroll to top on location change ---
  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
    // Add 'location' to the dependency array
  }, [location]); 
  // ----------------------------------------------------------

  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#88bf42"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#88bf42",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  // Function to open award details modal
  const openAwardDetails = (award) => {
    const awardWithDefaults = {
      ...award,
      image: award.image || getDefaultAwardImage(award.organization)
    };
    
    setSelectedAward(awardWithDefaults);
    setShowAwardModal(true);
    // Overflow handled by useEffect
  };

  // Function to get default award image based on organization
  const getDefaultAwardImage = (organization) => {
    const imageMap = {
      "World Business Conclave": "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?w=800&auto=format&fit=crop",
      "Tech Excellence Awards": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      "Global Technology Awards": "https://media.istockphoto.com/id/2209208710/photo/deep-learning-ai-network-gpu-abstract-lines-background-futuristic-neon-led-fluorescent-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=cRyZyavn8yLSthySse2cotblSXb0gPASJndSwTZlk_M=",
      "Technology Leadership Awards": "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&auto=format&fit=crop",
      "Healthcare Technology Excellence": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      "World Economic Forum": "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&auto=format&fit=crop",
      "Financial Innovation Awards": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      "Fast Company": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      "AI Breakthrough Awards": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
      "Great Place to Work": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
    };
    
    return imageMap[organization] || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop";
  };


  // Function to close award details modal
  const closeAwardModal = () => {
    setShowAwardModal(false);
    setSelectedAward(null);
    // Overflow handled by useEffect
  };

  const awards = [
    {
      year: 2025,
      awards: [
        {
          name: "World Business Conclave India AI Award",
          organization: "World Business Conclave",
          date: "April 12th, 2025",
          description: "Recognized for our groundbreaking work in enterprise AI voice agents that achieved a 98% accuracy rate for a Fortune 100 financial institution.",
          featured: true
        },
        {
          name: "Enterprise AI Solution of the Year",
          organization: "Tech Excellence Awards",
          description: "Awarded for our innovative approach to AI implementation in the enterprise sector with measurable business results."
        }
      ]
    },
    {
      year: 2024,
      awards: [
        {
          name: "AI Innovator of the Year",
          organization: "Global Technology Awards",
          description: "Selected from over 500 nominees for our pioneering work in self-learning AI systems for enterprise applications."
        },
        {
          name: "CTO of the Year - Marcus Johnson",
          organization: "Technology Leadership Awards",
          description: "Our CTO was recognized for his visionary leadership in advancing enterprise AI technology."
        },
        {
          name: "Best AI Solution - Healthcare",
          organization: "Healthcare Technology Excellence",
          description: "Award for our predictive analytics platform that improved patient outcomes by 32% at MediCare Solutions."
        }
      ]
    }
    ,
    {
      year: 2023,
      awards: [
        {
          name: "Technology Pioneer Award",
          organization: "World Economic Forum",
          description: "Selected as one of the world's most promising technology pioneers for our work in ethical AI for enterprise use."
        },
        {
          name: "Best AI Implementation - Finance",
          organization: "Financial Innovation Awards",
          description: "Recognized for our AI-driven risk assessment platform that reduced fraud by 76% for a major banking institution."
        }
      ]
    },
    {
      year: 2022,
      awards: [
        {
          name: "Most Innovative AI Company",
          organization: "Fast Company",
          description: "Named the most innovative AI company in our annual ranking of businesses that are making the biggest impact."
        },
        {
          name: "Best in Enterprise AI",
          organization: "AI Breakthrough Awards",
          description: "Winner in the Enterprise AI category for our comprehensive suite of business intelligence solutions."
        },
        {
          name: "Best Workplace in Tech",
          organization: "Great Place to Work",
          description: "Recognized for our exceptional company culture and employee satisfaction ratings of 96%."
        }
      ]
    }
  ];

  const featuredAwards = [
    {
      name: "World Business Conclave India AI Award",
      organization: "World Business Conclave",
      year: 2025,
      date: "April 12th, 2025",
      image: "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWklMjBnZW5lcmF0ZWR8ZW58MHx8MHx8fDA%3Dhttps://media.istockphoto.com/id/2203742125/photo/futuristic-ai-generated-face-in-a-dreamlike-digital-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=FfM8Lyyag4psSSFIMxOCSzZbn7gqrv3nZHRQ84qwGtw=",
      icon: <Trophy className="h-8 w-8" />
    },
    {
      name: "AI Innovator of the Year",
      organization: "Global Technology Awards",
      year: 2024,
      image: "https://media.istockphoto.com/id/2209208710/photo/deep-learning-ai-network-gpu-abstract-lines-background-futuristic-neon-led-fluorescent-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=cRyZyavn8yLSthySse2cotblSXb0gPASJndSwTZlk_M=",
      icon: <Star className="h-8 w-8" />
    },
    {
      name: "Technology Pioneer Award",
      organization: "World Economic Forum",
      year: 2023,
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop",
      icon: <Award className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 sm:pt-38 md:pt-40 pb-10 sm:pb-12 md:pb-16 bg-[#0F0326] relative overflow-hidden">
        
        {/* --- Particles Background --- */}
        {/* Position absolute to cover the section, z-0 to be behind content */}
        <div className="absolute inset-0 z-0">
        <Particles
  id="tsparticles-awards-hero"
  init={particlesInit}
  options={particlesOptions}
/>
        </div>
        {/* -------------------------- */}

        {/* Existing background shapes - Ensure they are at z-0 or lower */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#88bf42] rounded-br-full opacity-50 z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88bf42] rounded-tl-full opacity-50 z-0"></div>
       
        {/* Content (Title, Paragraph) - Ensure it has a higher z-index */}
          <div className="max-w-3xl mx-auto text-center relative z-10"> {/* Added relative and z-10 */}
           
            <Fade triggerOnce direction="up" delay={150}>
              {/* Removed animate-slide-up as Fade handles animation */}
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
              <span className="text-transparent bg-clip-text bg-white">Our Award-Winning</span><span className="text-[#88bf42]"> Excellence</span>
            </h1>
            </Fade>
            <Fade triggerOnce direction="up" delay={250}>
               {/* Removed animate-slide-up as Fade handles animation */}
              <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 mx-2 md:mx-0">
            Celebrating innovation, leadership, and excellence in AI technology
            </p>
            </Fade>
          </div>
      
      </section>


      {/* Featured Awards Section - Includes the separator */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 hover:scale-[1.01] transition-transform duration-300">

          <Fade triggerOnce delay={350}>
            <div className="flex items-center justify-center my-8 md:my-12">
              <div className="flex-grow h-px bg-gray-300"></div>
              <Star className="h-5 w-5 md:h-6 md:w-6 text-[#88bf42] mx-3 md:mx-4" />
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </Fade>

          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
            <Fade triggerOnce direction="up" delay={450}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Featured Recognition</h2>
            </Fade>
            <Fade triggerOnce direction="up" delay={550}>
              <p className="text-base md:text-lg text-gray-700">
                Highlighting our most prestigious industry awards
              </p>
            </Fade>
          </div>

          <Fade triggerOnce cascade damping={0.1} direction="up" delay={650}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {featuredAwards.map((award, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#88bf42]/40 via-[#88bf42]/20 to-transparent z-10"></div>

                  <img
                    src={award.image}
                    alt={award.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-6 right-6 z-20 text-white">
                    <div className="bg-gradient-to-r from-[#88bf42] to-[#88bf42] p-3 rounded-full shadow-lg">
                      {award.icon}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center mb-2">
                      <span className="text-[#88bf42]/80 text-sm font-semibold">{award.date || award.year}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-300 text-sm">{award.organization}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{award.name}</h3>
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white/20 mt-2 group"
                      onClick={() => openAwardDetails(award)}
                    >
                      <span>
                        View Details
                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Fade triggerOnce direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">Awards Timeline</h2>
          </Fade>
          <Fade triggerOnce direction="up" delay={200}>
            <p className="text-lg text-gray-700 text-center mb-16">
              Our journey of recognition throughout the years
            </p>
          </Fade>

          <div className="space-y-16">
            {awards.map((yearGroup, index) => (
              <div key={index}>
                 <Fade triggerOnce direction="right" delay={100}>
                   <div className="flex items-center mb-8">
                     <div className="p-4 bg-[#88bf42] hover:bg-[#0f0326]/40 text-white text-xl font-bold rounded-lg">
                       {yearGroup.year}
                     </div>
                     <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-[#88bf42] to-[#88bf42]"></div>
                   </div>
                 </Fade>

                 <Fade triggerOnce cascade damping={0.1} direction="up" delay={200}>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                     {yearGroup.awards.map((award, awardIndex) => (
                       <Card key={awardIndex} className={`hover:shadow-lg transition-shadow overflow-hidden ${award.featured ? 'border-2 border-[#009898]' : ''}`}>
                         {award.featured && (
                           <div className="h-1.5 bg-gradient-to-r from-[#009898] to-[#88bf42]"></div>
                         )}
                         <CardContent className="pt-6">
                           <div className="flex items-start justify-between mb-4">
                             <div className={`p-3 rounded-lg ${award.featured ? 'bg-gradient-to-r from-[#009898] to-[#88bf42] text-white' : 'bg-[#009898]/10 text-[#009898]'}`}>
                               {award.featured ? <Trophy className="h-6 w-6" /> : <Award className="h-6 w-6" />}
                             </div>
                             <div>
                               <span className="text-gray-500 text-sm block text-right">{award.organization}</span>
                               {award.date && <span className="text-[#009898] font-medium text-sm">{award.date}</span>}
                             </div>
                           </div>
                           <h3 className={`text-xl font-bold mb-3 ${award.featured ? 'text-[#009898]' : 'text-gray-900'}`}>{award.name}</h3>
                           <p className="text-gray-700 text-sm mb-4">{award.description}</p>

                           <div className="mt-4">
                             <Button 
                               className={`w-full ${award.featured ? 'bg-[#88bf42]' : 'bg-[#0f0326]/90'} hover:bg-[#0f0326]/60  text-white`}
                               onClick={() => openAwardDetails({...award, year: yearGroup.year})}
                             >
                               <span>Read Full Story</span>
                             </Button>
                           </div>
                         </CardContent>
                       </Card>
                     ))}
                   </div>
                 </Fade>
               </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotDemo />
    </div>
  );
};

export default AwardsPage;
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Calendar } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const AwardsPage = () => {
  // Get the current location object from react-router-dom
  const location = useLocation(); 

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Awards data structure with detailed content
  const awardsData = [
    {
      year: "2025",
      awards: [
        {
          title: "World Business Conclave – Thor Signia, Most Innovative AI Company of the Year Award",
          description: "Recognized for our groundbreaking AI solutions that have transformed business operations across industries. This prestigious award acknowledges our commitment to pushing the boundaries of artificial intelligence."
        }
      ]
    },
    {
      year: "2024",
      awards: [
        {
          title: "IFB Pride of India Awards – Best Cyber Security & Web Technology",
          description: "Honored for excellence in developing cutting-edge cybersecurity solutions that protect businesses from emerging digital threats while ensuring seamless web experiences."
        },
        {
          title: "India Iconic Excellence Award – Best Cybersecurity and AI Company of the Year",
          description: "Recognized for our innovative approach to integrating AI with cybersecurity, creating intelligent systems that adapt to evolving threats and provide proactive protection."
        },
        {
          title: "India Business Awards",
          description: "Awarded for outstanding business performance, innovation in technology services, and significant contribution to India's growing tech ecosystem."
        }
      ]
    },
    {
      year: "2023",
      awards: [
        {
          title: "IIB Business Leadership Award",
          description: "Presented to our leadership team for exceptional vision, strategic growth initiatives, and fostering a culture of innovation that drives business excellence."
        }
      ]
    },
    {
      year: "2022",
      awards: [
        {
          title: "GTIF Startup Summit – Dynamic Entrepreneur of the Year",
          description: "Awarded to our founder for demonstrating exceptional entrepreneurial skills, visionary leadership, and creating significant impact in the technology sector."
        },
        {
          title: "GTIF Startup Summit – Innovation & Technology award",
          description: "Recognized for developing innovative technological solutions that address complex business challenges and create measurable value for clients."
        },
        {
          title: "India Brand Icon Awards & Conference – Times Cyber Media Pvt. Ltd.",
          description: "Honored for establishing a strong brand presence in the Indian market and setting new standards for excellence in the cybersecurity and AI domains."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 sm:pt-44 md:pt-48 pb-16 sm:pb-20 md:pb-24 bg-[#0F0326] relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#88BF42] rounded-br-full opacity-50 z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88BF42] rounded-tl-full opacity-50 z-0"></div>
       
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center relative z-10">           
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-white">🏆 </span>
            <span className="text-transparent bg-clip-text bg-white">Awards & </span>
            <span className="text-[#88BF42]">Recognitions</span>
          </h1>
        </div>
      </section>

      {/* Awards Content - Card Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {awardsData.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <div className="bg-[#88BF42] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Calendar className="h-6 w-6" />
                </div>
                <h2 className="text-4xl font-bold ml-4 text-[#0F0326]">{yearGroup.year}</h2>
                <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-[#88BF42] to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearGroup.awards.map((award, awardIndex) => (
                  <Card key={awardIndex} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="h-2 bg-[#88BF42]"></div>
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="bg-[#88BF42]/10 p-2 rounded-full">
                          <Trophy className="h-5 w-5 text-[#88BF42]" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-[#88BF42]">{yearGroup.year}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#0F0326] line-clamp-2">{award.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{award.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardsPage;
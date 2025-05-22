import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BarChart, 
  Clock, 
  Building, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  ArrowUpRight,
  MessageCircle,
  LineChart,
  Users,
  Lightbulb,
  Star
} from "lucide-react";
import { Link } from 'react-router-dom';
import caseStudiesData from '@/data/caseStudies';
import { Vortex } from '@/components/ui/vortex';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import AnimatedCaseStudiesHeader from '@/components/AnimatedCaseStudiesHeader';

const CaseStudiesPage = () => {
  // Function to render a case study card
  const renderCaseStudy = (study, index) => {
    return (
      <div 
        key={index} 
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={study.coverImage} 
            alt={study.title} 
            className="w-full h-full object-cover object-center scale-105 blur-[2px] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/10 rounded-b-xl" />
          <div className="absolute bottom-4 left-4 z-10">
            <span 
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-[#88bf42]"
            >
              {study.category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-3">
            <Building className="w-4 h-4 mr-2 text-[#10b4b7]" />
            <span className="text-gray-600 text-sm">{study.company}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {study.title}
          </h3>
          
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {study.summary}
          </p>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-xs text-gray-500">Key Metric</p>
                <p className="font-semibold text-[#88bf42]">{study.keyMetric}</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="border-[#88bf42] text-[#88bf42] hover:bg-[#88bf42] hover:text-white"
              asChild
            >
              <Link to={`/case-studies/${study.slug}`}>
                View Case <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedCaseStudiesHeader />
      
      {/* 2. Featured Case Study */}
      <section id="featured-case-study" className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 relative">
                  <img 
                    src={caseStudiesData[0].coverImage} 
                    alt={caseStudiesData[0].title} 
                    className="w-full h-full object-cover object-center min-h-[300px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-t"></div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-[#88bf42]">
                      Featured Case Study
                    </span>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col">
                  <div>
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#10b4b7]/10 text-[#10b4b7] text-sm font-medium">
                      {caseStudiesData[0].category}
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      {caseStudiesData[0].title}
                    </h2>
                    
                    <div className="flex items-center mb-4">
                      <Building className="w-4 h-4 mr-2 text-[#10b4b7]" />
                      <span className="text-gray-700">{caseStudiesData[0].company}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {caseStudiesData[0].summary}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">ROI</p>
                        <p className="text-xl font-semibold text-[#88bf42]">{caseStudiesData[0].roi}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Timeframe</p>
                        <p className="text-xl font-semibold text-[#10b4b7]">{caseStudiesData[0].timeframe}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex justify-center">
                    <Button
                      asChild
                      className="bg-[#88bf42] text-white px-6 py-3 w-72 rounded-md font-medium hover:bg-[#10b4b7]/10 transition"
                    >
                      <Link to={`/case-studies/${caseStudiesData[0].slug}`} className="flex items-center justify-center">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Case Study Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#10b4b7]/10 text-[#88bf42] text-sm font-medium">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Results Across Industries
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#10b4b7] to-[#9ac857] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our AI solutions have transformed businesses across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudiesData.slice(1, 7).map((study, index) => renderCaseStudy(study, index))}
          </div>
          
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-[#88bf42] text-[#88bf42] hover:bg-[#88bf42] hover:text-white px-8 py-6"
            >
              <Link to="/contact">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* 4. Metrics & Impact Panel */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#10b4b7]/10 text-[#88bf42] text-sm font-medium">
        Measurable Impact
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Results That Drive Growth
      </h2>
      <div className="w-12 h-1 bg-gradient-to-r from-[#10b4b7] to-[#9ac857] rounded-full mx-auto mb-4"></div>
      <p className="text-gray-600">
        Our AI solutions deliver consistent, significant results regardless of industry or challenge
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
      {[
        { value: "157%", label: "Average ROI", icon: <BarChart className="h-7 w-7 text-[#88bf42]" /> },
        { value: "42%", label: "Efficiency Gains", icon: <Clock className="h-7 w-7 text-[#88bf42]" /> },
        { value: "9.5mo", label: "Avg. Implementation", icon: <LineChart className="h-7 w-7 text-[#88bf42]" /> },
        { value: "95%", label: "Client Satisfaction", icon: <Users className="h-7 w-7 text-[#88bf42]" /> }
      ].map((stat, index) => (
        <div 
          key={index}
          className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 overflow-hidden text-center w-full h-full min-h-[240px] flex flex-col justify-between"
        >
          <div className="absolute inset-0">
            <CanvasRevealEffect
              animationSpeed={0.4}
              colors={[[16, 180, 183]]}
              dotSize={2}
              showGradient={false}
            />
          </div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="w-16 h-16 bg-[#10b4b7]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      
      {/* Call To Action */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    
   

    {/* CTA Card */}
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
      <div className="inline-block px-3 py-1 mb-3 rounded-full bg-[#10b4b7]/10 text-[#88bf42] text-sm font-medium">
        Ready to Transform?
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Let’s Build Your Success Story
      </h2>
      <p className="text-gray-600 mb-6 text-sm md:text-base text-left">
        Join the growing list of businesses achieving breakthrough results with our AI solutions.
        Schedule a consultation to discuss your unique challenges.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-[#88bf42] text-white px-6 py-3 w-72 rounded-md font-medium hover:bg-[#10b4b7]/10 transition">
        <Link to="/contact">
          Schedule Consultation
        </Link>
        </button>
        <button className="border border-[#10b4b7] text-[#10b4b7] px-6 py-3 w-72 rounded-md font-medium hover:bg-[#10b4b7]/10 transition">
        <Link to="/services">
          Explore Services
        </Link>
        </button>
      </div>
    </div>

  </div>
</section>



      
      <Footer />

    </div>
  );
};

export default CaseStudiesPage;
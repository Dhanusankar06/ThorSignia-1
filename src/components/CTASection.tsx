import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const CTASection = () => {
  return (
    <section className="w-full bg-transparent flex justify-center items-center">
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 py-20">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center max-w-3xl">
              Ready to Transform Your Business with AI?
            </h2>
          </Fade>
          
          <Fade direction="up" delay={100} triggerOnce>
            <p className="text-lg text-gray-600 max-w-xl mx-auto text-center">
              Join industry leaders leveraging Thor Signia's enterprise AI platform to gain competitive advantages and transform customer experiences.
            </p>
          </Fade>
          
          <Fade direction="up" delay={200} triggerOnce>
            <Button 
              asChild 
              className="mt-4 bg-[#88bf42] text-white px-8 py-4 rounded-md hover:bg-[#6fa234] transition-all duration-200 text-lg shadow-none"
            >
              <Link to="/contact">
                <span className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </Fade>
          
        </div>
      </div>
    </section>
  );
};

export default CTASection;

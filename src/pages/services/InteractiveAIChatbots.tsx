import React, { useEffect } from 'react';
import { ArrowRight, MessageSquare, Check, Bot } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const InteractiveAIChatbotsPage = () => {
  useEffect(() => {
    document.title = "Interactive AI Chatbots | ThorSignia";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#88bf42]/10 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Mobile-only tag line that appears first */}
          <div className="lg:hidden mb-8 flex justify-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
              Conversational AI Solutions
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Desktop-only tag line (hidden on mobile) */}
              <div className="hidden lg:inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
                Conversational AI Solutions
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0f0326] text-center lg:text-left">
                Interactive AI Chatbots
              </h1>
              <p className="text-lg text-[#0f0326]/80 mb-8 leading-relaxed text-center lg:text-left">
                Deploy interactive AI chatbots that go beyond simple FAQs. These intelligent bots understand conversation context, provide instant 24/7 support, deliver personalized experiences based on user data, and can seamlessly hand off complex queries to human agents when needed, enhancing overall customer satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    asChild
                    className="w-48 sm:w-32 md:w-48 mx-auto sm:mx-0 bg-[#88bf42] text-white rounded-lg px-6 py-3 text-base shadow-lg transition-all duration-300 hover:bg-[#88bf42]/90"
                  >
                    <Link to="/contact#contact-form" className="flex items-center">
                      Request a Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-48 sm:w-32 md:w-48 mx-auto sm:mx-0 border-[#88bf42] text-[#88bf42] rounded-lg px-6 py-3 text-base hover:bg-[#88bf42]/5"
                  >
                    <Link to="/services" className="flex items-center">
                      Back to Services
                    </Link>
                  </Button>
                    </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-[#88bf42]/10 rounded-full blur-xl"></div>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative z-10 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-[#88bf42]/10 flex items-center justify-center">
                    <Bot className="h-16 w-16 text-[#88bf42]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#0f0326]">
              Key Benefits
            </h2>
            <p className="text-lg text-[#0f0326]/80">
              Our Interactive AI Chatbots provide numerous advantages for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">24/7 Instant Support</h3>
              <p className="text-[#0f0326]/80">
                Provide round-the-clock customer support and engagement without human limitations or delays.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Seamless Handoff</h3>
              <p className="text-[#0f0326]/80">
                Intelligent transition between AI and human agents for complex issues, ensuring optimal customer experience.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Personalized Experiences</h3>
              <p className="text-[#0f0326]/80">
                Deliver customized interactions based on user data, preferences, and conversation history.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#0f0326]">
              How It Works
            </h2>
            <p className="text-lg text-[#0f0326]/80">
              Our interactive AI chatbots use advanced technology to transform customer interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Natural Language Understanding</h3>
                    <p className="text-[#0f0326]/80">Advanced AI comprehends user queries, including context and intent.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Personalized Response</h3>
                    <p className="text-[#0f0326]/80">The system generates contextually appropriate, personalized answers.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Intelligent Routing</h3>
                    <p className="text-[#0f0326]/80">Complex queries are identified and seamlessly routed to human agents when needed.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Continuous Learning</h3>
                    <p className="text-[#0f0326]/80">The chatbot improves over time by learning from each interaction.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-[#88bf42]/5 rounded-full blur-xl"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative">
                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-bold text-[#0f0326]">Thor Assistant</div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start justify-end">
                      <div className="bg-gray-100 rounded-2xl rounded-tr-none p-3 text-sm max-w-[80%]">
                        I need help finding the right product for my business needs.
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 ml-2 flex-shrink-0"></div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#88bf42]/20 mr-2 flex-shrink-0 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-[#88bf42]" />
                      </div>
                      <div className="bg-[#88bf42]/10 rounded-2xl rounded-tl-none p-3 text-sm max-w-[80%]">
                        I'd be happy to help you find the right product! Could you tell me a bit about your business size and what specific challenges you're looking to address?
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div className="bg-gray-100 rounded-2xl rounded-tr-none p-3 text-sm max-w-[80%]">
                        We're a mid-sized retail company with about 50 employees. We need help with customer service automation.
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 ml-2 flex-shrink-0"></div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#88bf42]/20 mr-2 flex-shrink-0 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-[#88bf42]" />
                      </div>
                      <div className="bg-[#88bf42]/10 rounded-2xl rounded-tl-none p-3 text-sm max-w-[80%]">
                        Based on your retail business size and customer service needs, I'd recommend our Retail Assistant Pro package. It includes automated order tracking, inventory queries, and return processing. Would you like to see a demo of how it works?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#88bf42]/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0f0326]">
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-lg text-[#0f0326]/80 mb-8">
              Contact us today to learn how our Interactive AI Chatbots can revolutionize your customer service experience.
            </p>
            
            <Button 
              asChild
              className="bg-[#88bf42] text-white rounded-lg px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:bg-[#88bf42]/90"
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InteractiveAIChatbotsPage;

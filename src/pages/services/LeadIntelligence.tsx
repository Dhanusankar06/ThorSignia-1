import React from 'react';
import { ArrowRight, BarChart3, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LeadIntelligencePage = () => {
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
              Lead Generation Solutions
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Desktop-only tag line (hidden on mobile) */}
              <div className="hidden lg:inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
                Lead Generation Solutions
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0f0326] text-center lg:text-left">
                AI-Powered Lead Intelligence
              </h1>
              <p className="text-lg text-[#0f0326]/80 mb-8 leading-relaxed text-center lg:text-left">
                Transform your lead generation with our AI-powered intelligence system. This service identifies high-value prospects, predicts buying intent through behavioral analysis, and delivers personalized engagement strategies to significantly increase conversion rates and optimize your sales pipeline.
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
                    <BarChart3 className="h-16 w-16 text-[#88bf42]" />
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
              Our AI-Powered Lead Intelligence solution provides numerous advantages for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Hyper-Targeted Acquisition</h3>
              <p className="text-gray-700">
                Identify and qualify high-potential leads with precision through advanced data analysis and pattern recognition.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Personalized Nurturing</h3>
              <p className="text-gray-700">
                Automate tailored nurturing sequences that respond to individual prospect behaviors and preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Higher Conversion Rates</h3>
              <p className="text-gray-700">
                Continuously optimize your sales strategies with AI-driven insights to improve conversion at every stage.
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
              Our lead intelligence system uses advanced AI to transform your sales process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Data Integration</h3>
                    <p className="text-gray-700">Connect your CRM, marketing platforms, and other data sources to our AI system.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Lead Scoring & Qualification</h3>
                    <p className="text-gray-700">AI analyzes behavioral patterns and engagement data to identify high-value prospects.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Personalized Engagement</h3>
                    <p className="text-gray-700">Automated, customized nurturing sequences are deployed based on prospect profiles.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Continuous Optimization</h3>
                    <p className="text-gray-700">The system learns from outcomes and refines strategies to improve conversion rates.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-[#88bf42]/5 rounded-full blur-xl"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative">
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-bold text-[#0f0326]">Thor Lead Intelligence Dashboard</div>
                      <div className="text-xs text-[#88bf42]">Live</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">New Leads</div>
                        <div className="text-lg font-bold text-[#0f0326]">347</div>
                        <div className="text-xs text-[#88bf42]">+12% this week</div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Qualified Leads</div>
                        <div className="text-lg font-bold text-[#0f0326]">183</div>
                        <div className="text-xs text-[#88bf42]">+18% this week</div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Conversion Rate</div>
                        <div className="text-lg font-bold text-[#0f0326]">32%</div>
                        <div className="text-xs text-[#88bf42]">+5% this week</div>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Lead Quality Score</div>
                      <div className="flex justify-between">
                        <div className="text-xs">Low</div>
                        <div className="text-sm font-bold text-[#0f0326]">78%</div>
                        <div className="text-xs">High</div>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                        <div className="h-2 bg-[#88bf42] rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-[#0f0326]">Lead Quality Score</div>
                    <div className="text-sm font-bold text-[#88bf42]">78%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#88bf42] rounded-full" style={{width: '78%'}}></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#88bf42]/5 rounded-lg p-4">
                      <div className="text-sm font-bold text-[#0f0326] mb-1">Qualified Leads</div>
                      <div className="text-xl font-bold text-[#88bf42]">247</div>
                      <div className="text-xs text-gray-500">+18% this month</div>
                    </div>
                    
                    <div className="bg-[#88bf42]/5 rounded-lg p-4">
                      <div className="text-sm font-bold text-[#0f0326] mb-1">Conversion Rate</div>
                      <div className="text-xl font-bold text-[#88bf42]">32%</div>
                      <div className="text-xs text-gray-500">+5% this month</div>
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
              Ready to Transform Your Sales Pipeline?
            </h2>
            <p className="text-lg text-[#0f0326]/80 mb-8">
              Contact us today to learn how our AI-Powered Lead Intelligence can revolutionize your lead generation and conversion process.
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

export default LeadIntelligencePage;

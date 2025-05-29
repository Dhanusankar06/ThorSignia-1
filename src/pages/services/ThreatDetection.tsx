import React from 'react';
import { ArrowRight, ShieldAlert, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ThreatDetectionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#88bf42]/10 to-[#f7f7f7] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88bf42]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Mobile-only tag line that appears first */}
          <div className="lg:hidden mb-8 flex justify-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
              Cybersecurity Solutions
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Desktop-only tag line (hidden on mobile) */}
              <div className="hidden lg:inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
                Cybersecurity Solutions
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0f0326] text-center lg:text-left">
                AI-Powered Threat Detection
              </h1>
              <p className="text-lg text-[#0f0326]/80 mb-8 leading-relaxed text-center lg:text-left">
                Safeguard your digital assets with advanced AI-powered threat detection. Our system uses artificial intelligence to analyze vast amounts of data in real-time, identifying and responding to evolving cyber threats like malware, phishing attempts, and network intrusions. It also automates vulnerability assessments and provides continuous monitoring for proactive protection.
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
                    <ShieldAlert className="h-16 w-16 text-[#88bf42]" />
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
              Our AI-Powered Threat Detection solution provides numerous advantages for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Real-Time Detection</h3>
              <p className="text-[#0f0326]/80">
                Identify and respond to threats as they happen with AI-powered monitoring and analysis.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Automated Assessment</h3>
              <p className="text-[#0f0326]/80">
                Continuously scan for vulnerabilities and assess your security posture with automated tools.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Proactive Monitoring</h3>
              <p className="text-[#0f0326]/80">
                Stay ahead of threats with 24/7 monitoring and alerting systems that notify you of potential issues.
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
              Our AI-powered threat detection system uses advanced technology to protect your digital assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">System Integration</h3>
                    <p className="text-[#0f0326]/80">
                      Our AI connects to your network and systems to monitor traffic and activities.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Threat Analysis</h3>
                    <p className="text-[#0f0326]/80">
                      Advanced algorithms analyze patterns to identify suspicious activities and potential threats.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Automated Response</h3>
                    <p className="text-[#0f0326]/80">
                      The system initiates predefined response protocols when threats are detected.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Continuous Learning</h3>
                    <p className="text-[#0f0326]/80">
                      The AI evolves by learning from new threat patterns and improving detection capabilities.
                    </p>
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
                      <div className="text-sm font-bold text-[#0f0326]">Thor Security Operations Dashboard</div>
                      <div className="text-xs text-[#88bf42]">Live</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Threats Detected</div>
                        <div className="text-lg font-bold text-[#0f0326]">147</div>
                        <div className="text-xs text-[#88bf42]">Last 24 hours</div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Threats Mitigated</div>
                        <div className="text-lg font-bold text-[#0f0326]">143</div>
                        <div className="text-xs text-[#88bf42]">97.3% success rate</div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500">Avg. Response Time</div>
                        <div className="text-lg font-bold text-[#0f0326]">1.2s</div>
                        <div className="text-xs text-[#88bf42]">-0.3s from last week</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Threat Types</div>
                        <div className="flex items-end h-12 space-x-1">
                          <div className="w-1/5 bg-[#88bf42]/30 h-[30%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/40 h-[60%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/50 h-[90%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/60 h-[40%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/70 h-[20%]"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>DDoS</span>
                          <span>Malware</span>
                          <span>Phishing</span>
                          <span>SQL</span>
                          <span>XSS</span>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">System Security Status</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-[#88bf42] mr-2"></div>
                            <div className="text-xs">Firewall</div>
                          </div>
                          <div className="text-xs font-bold text-[#0f0326]">Active</div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-[#88bf42] mr-2"></div>
                            <div className="text-xs">Intrusion </div>
                          </div>
                          <div className="text-xs font-bold text-[#0f0326]">Active</div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-[#88bf42] mr-2"></div>
                            <div className="text-xs">Endpoint </div>
                          </div>
                          <div className="text-xs font-bold text-[#0f0326]">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-[#0f0326]">System Security Status</div>
                    
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#88bf42]/5 rounded-lg p-4">
                      <div className="text-sm font-bold text-[#0f0326] mb-2">Threats Detected</div>
                      <div className="flex items-end">
                        <div className="text-2xl font-bold text-[#0f0326]">12</div>
                        <div className="text-xs text-gray-500 ml-2 mb-1">Last 24h</div>
                      </div>
                      <div className="text-xs text-green-500">All mitigated</div>
                    </div>
                    
                    <div className="bg-[#88bf42]/5 rounded-lg p-4">
                      <div className="text-sm font-bold text-[#0f0326] mb-2">Vulnerabilities</div>
                      <div className="flex items-end">
                        <div className="text-2xl font-bold text-[#0f0326]">3</div>
                        <div className="text-xs text-gray-500 ml-2 mb-1">Critical</div>
                      </div>
                      <div className="text-xs text-amber-500">Patching recommended</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#88bf42]/5 rounded-lg p-4">
                    <div className="text-sm font-bold text-[#0f0326] mb-2">Recent Activity</div>
                    <div className="space-y-2 text-xs text-[#0f0326]/80">
                      <div className="flex justify-between">
                        <div>Suspicious login attempt blocked</div>
                        <div className="text-gray-500">10:42 AM</div>
                      </div>
                      <div className="flex justify-between">
                        <div>Malware signature detected and quarantined</div>
                        <div className="text-gray-500">09:15 AM</div>
                      </div>
                      <div className="flex justify-between">
                        <div>System scan completed</div>
                        <div className="text-gray-500">08:00 AM</div>
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
      <section className="py-16 bg-gradient-to-br from-[#88bf42]/10 to-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0f0326]">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-lg text-[#0f0326]/80 mb-8">
              Contact us today to learn how our AI-Powered Threat Detection can protect your organization from evolving cyber threats.
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

export default ThreatDetectionPage;

import React, { useEffect } from 'react';
import { ArrowRight, ShieldAlert, Check } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Assuming Navbar is responsive
import Footer from '@/components/Footer'; // Assuming Footer is responsive
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ThreatDetectionPage = () => {
  useEffect(() => {
    document.title = "AI-Powered Threat Detection | ThorSignia";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar is assumed to be responsive */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#88bf42]/10 to-[#f7f7f7] relative overflow-hidden">
        {/* Background circles - keep as is */}
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
              {/* Text alignment responsive */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0f0326] text-center lg:text-left">
                AI-Powered Threat Detection
              </h1>
              {/* Text alignment responsive */}
              <p className="text-lg text-[#0f0326]/80 mb-8 leading-relaxed text-center lg:text-left">
                Safeguard your digital assets with advanced AI-powered threat detection. Our system uses artificial intelligence to analyze vast amounts of data in real-time, identifying and responding to evolving cyber threats like malware, phishing attempts, and network intrusions. It also automates vulnerability assessments and provides continuous monitoring for proactive protection.
              </p>

              {/* Button layout responsive */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"> {/* Centered buttons on mobile, left aligned on large */}
                <Button
                  asChild
                  // Adjusted width classes for better mobile/tablet consistency
                  className="w-full sm:w-48 md:w-48 mx-auto sm:mx-0 bg-[#88bf42] text-white rounded-lg px-6 py-3 text-base shadow-lg transition-all duration-300 hover:bg-[#88bf42]/90"
                >
                  <Link to="/contact#contact-form" className="flex items-center justify-center"> {/* Center button content */}
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  // Adjusted width classes for better mobile/tablet consistency
                  className="w-full sm:w-48 md:w-48 mx-auto sm:mx-0 border-[#88bf42] text-[#8fbf42] rounded-lg px-6 py-3 text-base hover:bg-[#88bf42]/5"
                >
                  <Link to="/services" className="flex items-center justify-center"> {/* Center button content */}
                    Back to Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image container responsive */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"> {/* Added responsive max-width */}
                <div className="absolute -inset-1 bg-[#88bf42]/10 rounded-full blur-xl"></div>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 relative z-10 flex items-center justify-center"> {/* Adjusted padding */}
                  {/* Inner circle size made slightly more relative */}
                  <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#88bf42]/10 flex items-center justify-center">
                    <ShieldAlert className="h-12 w-12 sm:h-16 sm:w-16 text-[#88bf42]" /> {/* Adjusted icon size */}
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

          {/* Grid layout responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card padding responsive */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              {/* Icon container and icon size */}
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Real-Time Detection</h3>
              <p className="text-[#0f0326]/80 text-sm sm:text-base"> {/* Adjusted text size */}
                Identify and respond to threats as they happen with AI-powered monitoring and analysis.
              </p>
            </div>

            {/* Card structure repeats - styling applied via classes */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Automated Assessment</h3>
              <p className="text-[#0f0326]/80 text-sm sm:text-base"> {/* Adjusted text size */}
                Continuously scan for vulnerabilities and assess your security posture with automated tools.
              </p>
            </div>

            {/* Card structure repeats */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Proactive Monitoring</h3>
              <p className="text-[#0f0326]/80 text-sm sm:text-base"> {/* Adjusted text size */}
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

          {/* Grid layout responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Steps list */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"> {/* Adjusted padding */}
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">System Integration</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base"> {/* Adjusted text size */}
                      Our AI connects to your network and systems to monitor traffic and activities.
                    </p>
                  </div>
                </li>

                {/* List items repeat - styling applied via classes */}
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Threat Analysis</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base"> {/* Adjusted text size */}
                      Advanced algorithms analyze patterns to identify suspicious activities and potential threats.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Automated Response</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base"> {/* Adjusted text size */}
                      The system initiates predefined response protocols when threats are detected.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Continuous Learning</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base"> {/* Adjusted text size */}
                      The AI evolves by learning from new threat patterns and improving detection capabilities.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Demo/Illustration section */}
            <div className="relative">
              {/* Background blur */}
              <div className="absolute -inset-4 bg-[#88bf42]/5 rounded-full blur-xl hidden md:block"></div> {/* Hide blur on small screens for less clutter */}
              {/* Content box */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 relative"> {/* Adjusted padding */}
                {/* Dashboard area */}
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 sm:mb-6 flex items-center justify-center overflow-hidden"> {/* Adjusted margin, overflow hidden */}
                  <div className="w-full h-full p-3 sm:p-4 text-xs sm:text-sm"> {/* Adjusted padding and text size */}
                    <div className="flex justify-between items-center mb-2 sm:mb-4"> {/* Adjusted margin */}
                      <div className="text-xs sm:text-sm font-bold text-[#0f0326]">Thor Security Operations Dashboard</div> {/* Adjusted text size */}
                      <div className="text-[10px] sm:text-xs text-[#88bf42]">Live</div> {/* Adjusted text size */}
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-4"> {/* Adjusted gap and margin */}
                      {/* Stat box 1 */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Threats Detected</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">147</div> {/* Adjusted text size */}
                        <div className="text-[8px] sm:text-xs text-[#88bf42]">Last 24 hours</div> {/* Adjusted text size */}
                      </div>
                       {/* Stat box 2 */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Threats Mitigated</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">143</div> {/* Adjusted text size */}
                        <div className="text-[8px] sm:text-xs text-[#88bf42]">97.3% success rate</div> {/* Adjusted text size */}
                      </div>
                      {/* Stat box 3 */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Avg. Response Time</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">1.2s</div> {/* Adjusted text size */}
                        <div className="text-[8px] sm:text-xs text-[#88bf42]">-0.3s from last week</div> {/* Adjusted text size */}
                      </div>
                    </div>
                    {/* Threat types and system status */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3"> {/* Adjusted gap */}
                      {/* Threat Types chart */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500 mb-1">Threat Types</div> {/* Adjusted text size */}
                        <div className="flex items-end h-10 sm:h-12 space-x-0.5 sm:space-x-1"> {/* Adjusted height and spacing */}
                          <div className="w-1/5 bg-[#88bf42]/30 h-[30%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/40 h-[60%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/50 h-[90%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/60 h-[40%]"></div>
                          <div className="w-1/5 bg-[#88bf42]/70 h-[20%]"></div>
                        </div>
                        <div className="flex justify-between text-[8px] sm:text-xs text-gray-500 mt-1"> {/* Adjusted text size */}
                          <span>DDoS</span>
                          <span>Mal...</span> {/* Abbreviate Malware */}
                          <span>Phish...</span> {/* Abbreviate Phishing */}
                          <span>SQLi</span> {/* Shorten SQL */}
                          <span>XSS</span>
                        </div>
                      </div>
                      {/* System Security Status list */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500 mb-1">System Security Status</div> {/* Adjusted text size */}
                        <div className="flex items-center justify-between mt-1 sm:mt-2"> {/* Adjusted margin */}
                          <div className="flex items-center">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#88bf42] mr-1 sm:mr-2"></div> {/* Adjusted size and margin */}
                            <div className="text-[10px] sm:text-xs">Firewall</div> {/* Adjusted text size */}
                          </div>
                          <div className="text-[10px] sm:text-xs font-bold text-[#0f0326]">Active</div> {/* Adjusted text size */}
                        </div>
                        <div className="flex items-center justify-between mt-0.5 sm:mt-1"> {/* Adjusted margin */}
                          <div className="flex items-center">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#88bf42] mr-1 sm:mr-2"></div> {/* Adjusted size and margin */}
                            <div className="text-[10px] sm:text-xs">Intrusion</div> {/* Adjusted text size */}
                          </div>
                          <div className="text-[10px] sm:text-xs font-bold text-[#0f0326]">Active</div> {/* Adjusted text size */}
                        </div>
                        <div className="flex items-center justify-between mt-0.5 sm:mt-1"> {/* Adjusted margin */}
                          <div className="flex items-center">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#88bf42] mr-1 sm:mr-2"></div> {/* Adjusted size and margin */}
                            <div className="text-[10px] sm:text-xs">Endpoint</div> {/* Adjusted text size */}
                          </div>
                          <div className="text-[10px] sm:text-xs font-bold text-[#0f0326]">Active</div> {/* Adjusted text size */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional stats/recommendations area below main dashboard */}
                <div className="space-y-3 sm:space-y-4 mt-4"> {/* Adjusted space and margin-top */}
                   {/* Hide the redundant header on smaller screens if desired */}
                  <div className="flex items-center justify-between hidden sm:flex"> {/* Hide on mobile */}
                    <div className="text-sm font-bold text-[#0f0326]">System Security Status</div>
                  </div>

                  {/* Grid for Threats Detected and Vulnerabilities */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4"> {/* Adjusted gap */}
                    {/* Threats Detected box */}
                    <div className="bg-[#88bf42]/5 rounded-lg p-3 sm:p-4"> {/* Adjusted padding */}
                      <div className="text-xs sm:text-sm font-bold text-[#0f0326] mb-1">Threats Detected</div> {/* Adjusted text size */}
                      <div className="flex items-end">
                        <div className="text-xl sm:text-2xl font-bold text-[#0f0326]">12</div> {/* Adjusted text size */}
                        <div className="text-[10px] text-gray-500 ml-1 sm:ml-2 mb-0.5 sm:mb-1">Last 24h</div> {/* Adjusted text size and margin */}
                      </div>
                      <div className="text-[10px] text-green-500">All mitigated</div> {/* Adjusted text size */}
                    </div>

                    {/* Vulnerabilities box */}
                    <div className="bg-[#88bf42]/5 rounded-lg p-3 sm:p-4"> {/* Adjusted padding */}
                      <div className="text-xs sm:text-sm font-bold text-[#0f0326] mb-1">Vulnerabilities</div> {/* Adjusted text size */}
                      <div className="flex items-end">
                        <div className="text-xl sm:text-2xl font-bold text-[#0f0326]">3</div> {/* Adjusted text size */}
                        <div className="text-[10px] text-gray-500 ml-1 sm:ml-2 mb-0.5 sm:mb-1">Critical</div> {/* Adjusted text size and margin */}
                      </div>
                      <div className="text-[10px] text-amber-500">Patching recommended</div> {/* Adjusted text size */}
                    </div>
                  </div>

                  {/* Recent Activity box */}
                  <div className="bg-[#88bf42]/5 rounded-lg p-3 sm:p-4"> {/* Adjusted padding */}
                    <div className="text-sm font-bold text-[#0f0326] mb-2">Recent Activity</div>
                    <div className="space-y-1 sm:space-y-2 text-[10px] sm:text-xs text-[#0f0326]/80"> {/* Adjusted space-y and text size */}
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

            {/* Button styling */}
            <Button
              asChild
              className="bg-[#88bf42] text-white rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg transition-all duration-300 hover:bg-[#88bf42]/90 w-full sm:w-auto" // Full width on mobile, auto on sm+
            >
              <Link to="/contact#contact-form" className="flex items-center justify-center"> {/* Center button content */}
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer is assumed to be responsive */}
      <Footer />
    </div>
  );
};

export default ThreatDetectionPage;
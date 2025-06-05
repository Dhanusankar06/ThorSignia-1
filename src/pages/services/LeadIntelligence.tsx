import React, { useEffect } from 'react';
import { ArrowRight, BarChart3, Check } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Assuming Navbar is responsive
import Footer from '@/components/Footer'; // Assuming Footer is responsive
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LeadIntelligencePage = () => {
  useEffect(() => {
    document.title = "Lead Intelligence | ThorSignia";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar is assumed to be responsive */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#88bf42]/10 to-white relative overflow-hidden">
        {/* Background circles - keep as is */}
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
              {/* Text alignment responsive */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0f0326] text-center lg:text-left">
                AI-Powered Lead Intelligence
              </h1>
              {/* Text alignment responsive */}
              <p className="text-lg text-[#0f0326]/80 mb-8 leading-relaxed text-center lg:text-left">
                Transform your lead generation with our AI-powered intelligence system. This service identifies high-value prospects, predicts buying intent through behavioral analysis, and delivers personalized engagement strategies to significantly increase conversion rates and optimize your sales pipeline.
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
                    <BarChart3 className="h-12 w-12 sm:h-16 sm:w-16 text-[#88bf42]" /> {/* Adjusted icon size */}
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

          {/* Grid layout responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card padding responsive */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              {/* Icon container and icon size */}
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Hyper-Targeted Acquisition</h3>
              <p className="text-gray-700 text-sm sm:text-base"> {/* Adjusted text size */}
                Identify and qualify high-potential leads with precision through advanced data analysis and pattern recognition.
              </p>
            </div>

            {/* Card structure repeats - styling applied via classes */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Personalized Nurturing</h3>
              <p className="text-gray-700 text-sm sm:text-base"> {/* Adjusted text size */}
                Automate tailored nurturing sequences that respond to individual prospect behaviors and preferences.
              </p>
            </div>

            {/* Card structure repeats */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Higher Conversion Rates</h3>
              <p className="text-gray-700 text-sm sm:text-base"> {/* Adjusted text size */}
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

          {/* Grid layout responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Steps list */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"> {/* Adjusted padding */}
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Data Integration</h3>
                    <p className="text-gray-700 text-sm sm:text-base"> {/* Adjusted text size */}
                      Connect your CRM, marketing platforms, and other data sources to our AI system.
                    </p>
                  </div>
                </li>

                {/* List items repeat - styling applied via classes */}
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Lead Scoring & Qualification</h3>
                    <p className="text-gray-700 text-sm sm:text-base"> {/* Adjusted text size */}
                      AI analyzes behavioral patterns and engagement data to identify high-value prospects.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Personalized Engagement</h3>
                    <p className="text-gray-700 text-sm sm:text-base"> {/* Adjusted text size */}
                      Automated, customized nurturing sequences are deployed based on prospect profiles.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Continuous Optimization</h3>
                    <p className="text-gray-700 text-sm sm:text-base"> {/* Adjusted text size */}
                      The system learns from outcomes and refines strategies to improve conversion rates.
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
                      <div className="text-xs sm:text-sm font-bold text-[#0f0326]">Thor Lead Intelligence Dashboard</div> {/* Adjusted text size */}
                      <div className="text-[10px] sm:text-xs text-[#88bf42]">Live</div> {/* Adjusted text size */}
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-4"> {/* Adjusted gap and margin */}
                      {/* Stat box 1 */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">New Leads</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">347</div> {/* Adjusted text size */}
                        <div className="text-[8px] sm:text-xs text-[#88bf42]">+12% this week</div> {/* Adjusted text size */}
                      </div>
                       {/* Stat box 2 */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Qualified Leads</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">183</div> {/* Adjusted text size */}
                        <div className="text-[8px] sm:text-xs text-[#88bf42]">+18% this week</div> {/* Adjusted text size */}
                      </div>
                      {/* Stat box 3 */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Conversion Rate</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">32%</div> {/* Adjusted text size */}
                        <div className="text-[8px] sm:text-xs text-[#88bf42]">+5% this week</div> {/* Adjusted text size */}
                      </div>
                    </div>
                    {/* Lead Quality Score bar */}
                    <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                      <div className="text-[10px] text-gray-500 mb-1">Lead Quality Score</div> {/* Adjusted text size */}
                      <div className="flex justify-between items-center text-[10px] sm:text-xs"> {/* Adjusted text size and added items-center */}
                        <div>Low</div>
                        <div className="text-sm font-bold text-[#0f0326]">78%</div>
                        <div>High</div>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 sm:h-2 rounded-full mt-1"> {/* Adjusted height */}
                        <div className="h-full bg-[#88bf42] rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional stats area below main dashboard */}
                <div className="space-y-3 sm:space-y-4 mt-4"> {/* Adjusted space and margin-top */}
                  {/* Lead Quality Score display (redundant but keeping for structure) */}
                   {/* Hide the redundant score display on smaller screens if desired */}
                  <div className="flex items-center justify-between hidden sm:flex"> {/* Hide on mobile */}
                    <div className="text-sm font-bold text-[#0f0326]">Lead Quality Score</div>
                    <div className="text-sm font-bold text-[#88bf42]">78%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full hidden sm:block"> {/* Hide on mobile */}
                    <div className="h-2 bg-[#88bf42] rounded-full" style={{width: '78%'}}></div>
                  </div>


                  {/* Grid for Qualified Leads and Conversion Rate */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4"> {/* Adjusted gap */}
                    {/* Qualified Leads box */}
                    <div className="bg-[#88bf42]/5 rounded-lg p-3 sm:p-4"> {/* Adjusted padding */}
                      <div className="text-xs sm:text-sm font-bold text-[#0f0326] mb-1">Qualified Leads</div> {/* Adjusted text size */}
                      <div className="text-lg sm:text-xl font-bold text-[#88bf42]">247</div> {/* Adjusted text size */}
                      <div className="text-[10px] text-gray-500">+18% this month</div> {/* Adjusted text size */}
                    </div>

                    {/* Conversion Rate box */}
                    <div className="bg-[#88bf42]/5 rounded-lg p-3 sm:p-4"> {/* Adjusted padding */}
                      <div className="text-xs sm:text-sm font-bold text-[#0f0326] mb-1">Conversion Rate</div> {/* Adjusted text size */}
                      <div className="text-lg sm:text-xl font-bold text-[#88bf42]">32%</div> {/* Adjusted text size */}
                      <div className="text-[10px] text-gray-500">+5% this month</div> {/* Adjusted text size */}
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

export default LeadIntelligencePage;
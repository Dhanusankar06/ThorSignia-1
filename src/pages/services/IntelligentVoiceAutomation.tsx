import React, { useEffect } from 'react';
import { ArrowRight, Mic, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const IntelligentVoiceAutomationPage = () => {
  useEffect(() => {
    document.title = "Intelligent Voice Automation | ThorSignia";
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
              AI Voice Solutions
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Desktop-only tag line (hidden on mobile) */}
              <div className="hidden lg:inline-block px-4 py-1.5 mb-6 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
                AI Voice Solutions
              </div>
              {/* Text alignment responsive */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0f0326] text-center lg:text-left">
                Intelligent Voice Automation
              </h1>
              {/* Text alignment responsive */}
              <p className="text-lg text-[#0f0326]/80 mb-8 leading-relaxed text-center lg:text-left">
                Experience revolutionary customer service with advanced conversational AI agents. These intelligent systems understand natural language, handle complex and multi-turn inquiries with human-like interactions, and provide 24/7 support, seamlessly integrating with your existing communication channels.
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
                    <Mic className="h-12 w-12 sm:h-16 sm:w-16 text-[#88bf42]" /> {/* Adjusted icon size */}
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
              Our Intelligent Voice Automation solution provides numerous advantages for your business
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
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">24/7 Customer Support</h3>
              <p className="text-[#0f0326]/80">
                Provide round-the-clock support without human limitations, ensuring your customers always receive assistance.
              </p>
            </div>

            {/* Card structure repeats - styling applied via classes */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Natural Conversations</h3>
              <p className="text-[#0f0326]/80">
                Handle complex, multi-turn conversations naturally, providing a human-like interaction experience.
              </p>
            </div>

            {/* Card structure repeats */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#88bf42]/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#88bf42]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f0326] mb-3">Seamless Integration</h3>
              <p className="text-[#0f0326]/80">
                Easily integrate with your existing communication channels, ensuring a consistent experience across platforms.
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
              Our intelligent voice automation system uses advanced AI to transform your customer interactions
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
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Voice Recognition</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base">Advanced speech recognition technology accurately captures customer inquiries.</p> {/* Adjusted text size */}
                  </div>
                </li>

                {/* List items repeat - styling applied via classes */}
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Natural Language Processing</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base">AI analyzes and understands the context and intent of the conversation.</p> {/* Adjusted text size */}
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Intelligent Response</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base">The system generates natural, contextually appropriate responses.</p> {/* Adjusted text size */}
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#88bf42] text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f0326] mb-2">Continuous Learning</h3>
                    <p className="text-[#0f0326]/80 text-sm sm:text-base">The AI improves over time by learning from each interaction.</p> {/* Adjusted text size */}
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
                      <div className="text-xs sm:text-sm font-bold text-[#0f0326]">Thor Voice Analytics Dashboard</div> {/* Adjusted text size */}
                      <div className="text-[10px] sm:text-xs text-[#88bf42]">Live</div> {/* Adjusted text size */}
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-4"> {/* Adjusted gap and margin */}
                      {/* Stat box */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Active Calls</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">124</div> {/* Adjusted text size */}
                      </div>
                      {/* Stat box */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Avg. Call Duration</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">3:42</div> {/* Adjusted text size */}
                      </div>
                      {/* Stat box */}
                      <div className="bg-white p-1 sm:p-2 rounded shadow-sm"> {/* Adjusted padding */}
                        <div className="text-[10px] text-gray-500">Resolution Rate</div> {/* Adjusted text size */}
                        <div className="text-base sm:text-lg font-bold text-[#0f0326]">91%</div> {/* Adjusted text size */}
                      </div>
                    </div>
                    {/* Sentiment bar */}
                    <div className="bg-white p-1 sm:p-2 rounded shadow-sm mb-2"> {/* Adjusted padding */}
                      <div className="text-[10px] text-gray-500 mb-1">Voice Sentiment Analysis</div> {/* Adjusted text size */}
                      <div className="flex justify-between text-[10px] sm:text-xs"> {/* Adjusted text size */}
                        <div>Negative</div>
                        <div>Positive</div>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 sm:h-2 rounded-full mt-1"> {/* Adjusted height */}
                        <div className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-[#88bf42] rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat message area */}
                <div className="space-y-3 sm:space-y-4"> {/* Adjusted space */}
                  {/* User message */}
                  <div className="flex items-start">
                    {/* Avatar size */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 mr-2 sm:mr-3 flex-shrink-0"></div> {/* Adjusted size and margin */}
                    {/* Bubble styling */}
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 sm:p-4 text-xs sm:text-sm max-w-[85%] sm:max-w-[80%]"> {/* Adjusted padding, text size, max-width */}
                      How can I check the status of my order?
                    </div>
                  </div>

                  {/* Agent message */}
                  <div className="flex items-start justify-end">
                     {/* Bubble styling */}
                    <div className="bg-[#88bf42]/10 rounded-2xl rounded-tr-none p-3 sm:p-4 text-xs sm:text-sm max-w-[85%] sm:max-w-[80%]"> {/* Adjusted padding, text size, max-width */}
                      I'd be happy to help you check your order status. Could you please provide your order number or the email address used for the purchase?
                    </div>
                    {/* Avatar/Icon size */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#88bf42]/20 ml-2 sm:ml-3 flex-shrink-0 flex items-center justify-center"> {/* Adjusted size and margin */}
                      <Mic className="h-3 w-3 sm:h-4 sm:w-4 text-[#88bf42]" /> {/* Adjusted icon size */}
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
              Contact us today to learn how our Intelligent Voice Automation can revolutionize your customer service experience.
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

export default IntelligentVoiceAutomationPage;
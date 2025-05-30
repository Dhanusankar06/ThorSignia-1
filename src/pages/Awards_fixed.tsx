import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Button } from "@/components/ui/button";
import { Award, Trophy, Star, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- Animation Variants ---

// Hero Text: Fade in and slight lift
const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Section Title: Fade in and slight lift
const sectionTitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};

// Year Header: Fade in and slide from left
const yearHeaderVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: i => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            delay: i * 0.2 + 0.4
        }
    }),
};

// Award Entry: Fade in and slide from left
const awardEntryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: i => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.1
        }
    }),
};

const AwardsPage = () => {
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
      if (location.pathname === '/awards' && !location.hash) {
         window.scrollTo(0, 0);
      }
  }, [location.pathname]);

  // Animation Controls
  const heroControls = useAnimation();

  // Awards section uses useInView for triggering animations when section visible
  const [awardsSectionRef, awardsSectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      delay: 300
   });

   // Trigger Hero animation immediately on mount
   useEffect(() => {
       heroControls.start('visible');
   }, [heroControls]);

  // Awards data structure with detailed content
  const awardsData = [
    {
      year: "2025",
      awards: [
        {
          title: "World Business Conclave – Thor Signia, Most Innovative AI Company of the Year Award",
          description: "Recognized for our groundbreaking AI solutions that have transformed business operations across industries. This prestigious award acknowledges our commitment to pushing the boundaries of artificial intelligence.",
          details: {
              fullDescription: "This award highlights our role as a leader in the AI landscape, recognizing our innovative platforms that drive efficiency, intelligence, and competitive advantage for our clients. Our submission demonstrated significant advancements in machine learning algorithms, natural language processing, and predictive analytics, deployed across various sectors including finance, healthcare, and retail.",
              criteriaMet: [
                  "Pioneering AI Technology Development",
                  "Demonstrated Market Adoption & Impact",
                  "Scalability and Robustness of Solutions",
                  "Contribution to Ethical AI Practices",
                  "Innovation in Specific Verticals (e.g., AI in Supply Chain, AI in Customer Experience)"
              ],
              keyImpactAreas: [
                  { label: "Efficiency Gains", value: "Up to 40% reduction in operational costs for pilot projects." },
                  { label: "Revenue Growth", value: "Supported clients in achieving up to 25% increase in revenue through AI-driven personalization." },
                  { label: "Productivity Boost", value: "Enhanced employee productivity by automating routine tasks." },
                  { label: "Risk Reduction", value: "Improved fraud detection and cybersecurity posture using AI." }
              ],
              ceremonyHighlight: "The award was presented at the grand World Business Conclave gala in London, a key gathering of global business leaders and innovators. Our CEO accepted the award, emphasizing the team's dedication to solving complex challenges with intelligent technology.",
              quotes: [
                  { label: "Conclave Judging Panel", text: "Thor Signia stood out for its clear vision and tangible results in applying AI to real-world business problems. Their solutions are not just innovative; they are delivering significant, measurable value." },
                  { label: "Our CEO", text: "This award is a testament to our team's relentless pursuit of innovation and our clients' trust in our technology. We are proud to be at the forefront of the AI revolution." }
              ]
          }
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

      {/* Hero Section with Animation */}
      <section className="pt-40 sm:pt-44 md:pt-48 pb-16 sm:pb-20 md:pb-24 bg-[#0F0326] relative overflow-hidden flex items-center justify-center text-center">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#88BF42] rounded-br-full opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88BF42] rounded-tl-full opacity-30 z-0"></div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate={heroControls}
          variants={heroTextVariants}
          className="relative z-10 max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-normal md:leading-tight">
            Award-Winning <span className="text-[#88BF42]">Excellence</span>
          </h1>
          <p className="font-light text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto">
            Recognized globally for our innovation, leadership, and significant impact in AI and Cybersecurity.
          </p>
        </motion.div>
      </section>

      {/* Awards Content - Timeline Style with Animations */}
      <section ref={awardsSectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Section Title with Animation */}
          <motion.div
            initial="hidden"
            animate={awardsSectionInView ? "visible" : "hidden"}
            variants={sectionTitleVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326]">Our Recognitions & Milestones</h2>
          </motion.div>

          {/* Timeline Container with Continuous Line */}
          <div className="relative pl-24 md:pl-32">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#88BF42] z-10"></div>

            {/* Awards & Years Content */}
            {awardsData.map((yearGroup, yearIndex) => (
              <div key={yearGroup.year} className="mb-16 last:mb-0">
                {/* Year Header & Marker */}
                <motion.div
                  initial="hidden"
                  animate={awardsSectionInView ? "visible" : "hidden"}
                  variants={yearHeaderVariants}
                  custom={yearIndex}
                  className="flex items-center mb-8 -ml-16 origin-left"
                >
                  {/* Year Marker Circle */}
                  <div className="flex-shrink-0 bg-[#88BF42] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-20 ring-4 ring-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                  {/* Year Text */}
                  <h2 className="text-3xl font-bold ml-4 text-[#0F0326] flex-shrink-0">{yearGroup.year}</h2>
                </motion.div>

                {/* Awards List for the Year */}
                <div className="flex flex-col space-y-8 pl-6 md:pl-12 pt-4">
                  {yearGroup.awards.map((award, awardIndex) => (
                    <motion.div
                      key={`${yearGroup.year}-${awardIndex}`}
                      className="relative"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, threshold: 0.1 }}
                      variants={awardEntryVariants}
                      custom={awardIndex}
                    >
                      {/* Award Marker Dot on the Timeline line */}
                      <div className="absolute -left-[calc(1.5rem+2px)] md:-left-[calc(3rem+2px)] top-4 w-4 h-4 bg-[#88BF42] rounded-full ring-4 ring-white z-20"></div>

                      {/* Award Content Block */}
                      <div className={cn(
                        "p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border",
                        "bg-gray-50 border-gray-100",
                        award.title.includes("World Business Conclave") ? "border-[#88BF42] bg-white shadow-lg ring-2 ring-[#88BF42]/50" : ""
                      )}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 p-3 bg-[#88BF42]/10 rounded-full">
                            <Trophy className="h-6 w-6 text-[#88BF42]" />
                          </div>
                          <div className="flex flex-col flex-1">
                            <h3 className={cn("text-xl md:text-2xl font-bold leading-snug text-[#0F0326]")}>
                              {award.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-[#696869] text-base leading-relaxed">{award.description}</p>
                        
                        {/* Conditional Detailed Content */}
                        {award.details && (
                          <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                            {award.details.fullDescription && (
                              <div>
                                <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Award Significance:</h4>
                                <p className="text-[#696869] text-base leading-relaxed">{award.details.fullDescription}</p>
                              </div>
                            )}

                            {award.details.criteriaMet && award.details.criteriaMet.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Key Criteria Met:</h4>
                                <ul className="space-y-2">
                                  {award.details.criteriaMet.map((criterion, criIndex) => (
                                    <li key={criIndex} className="flex items-start text-[#696869] text-base">
                                      <CheckCircle className="flex-shrink-0 h-4 w-4 text-[#88BF42] mr-2 mt-1" />
                                      {criterion}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {award.details.keyImpactAreas && award.details.keyImpactAreas.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Quantifiable Impact:</h4>
                                <ul className="space-y-2">
                                  {award.details.keyImpactAreas.map((impact, impactIndex) => (
                                    <li key={impactIndex} className="flex items-start text-[#696869] text-base">
                                      <Star className="flex-shrink-0 h-4 w-4 text-yellow-500 mr-2 mt-1" />
                                      <span className="font-medium mr-1">{impact.label}:</span> {impact.value}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {award.details.ceremonyHighlight && (
                              <div>
                                <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Ceremony & Recognition:</h4>
                                <p className="text-[#696869] text-base leading-relaxed">{award.details.ceremonyHighlight}</p>
                              </div>
                            )}

                            {award.details.quotes && award.details.quotes.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Voices of Recognition:</h4>
                                <div className="space-y-4 italic text-[#696869] text-base">
                                  {award.details.quotes.map((quote, quoteIndex) => (
                                    <p key={quoteIndex}>"{quote.text}" <span className="not-italic font-medium">- {quote.author || quote.label}</span></p>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* End marker */}
            <div className="absolute left-[-10px] md:left-[-14px] bottom-0 w-5 h-5 bg-[#88BF42] rounded-full ring-4 ring-white z-10"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardsPage;

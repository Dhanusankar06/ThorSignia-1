import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Button } from "@/components/ui/button";
import { Award, Trophy, Star, Calendar, ArrowRight, CheckCircle } from "lucide-react"; // Added CheckCircle and ArrowRight icons
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Use RouterLink for clarity
import { cn } from "@/lib/utils"; // Import cn for class conditional logic

import { motion, AnimatePresence, useAnimation } from 'framer-motion'; // Import framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView

// --- Animation Variants ---

// Hero Text: Fade in and slight lift
const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Section Title: Fade in and slight lift
const sectionTitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }, // Added slight delay
};

// Year Header: Fade in and subtle scale from left
const yearHeaderVariants = {
    hidden: { opacity: 0, scaleX: 0.9, originX: 0 }, // Scale from left
    visible: i => ({ // Use 'i' for custom stagger delay
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            delay: i * 0.2 // Stagger based on year index
        }
    }),
};

// Award Entry: Fade in and slide from left
const awardEntryVariants = {
    hidden: { opacity: 0, x: -30 }, // Smaller slide distance
    visible: i => ({ // Use 'i' for custom stagger delay
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.1 // Stagger based on award index within the year
        }
    }),
};


const AwardsPage = () => {
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
      // Simplified scroll to top on pathname change
      if (location.pathname === '/awards' && !location.hash) {
         window.scrollTo(0, 0);
      }
      // Note: Handling hash scrolling automatically by browser
  }, [location.pathname]); // Only trigger when the pathname changes

  // Animation Controls
  // Hero animation uses useAnimation for immediate start
  const heroControls = useAnimation();

  // Awards section uses useInView for triggering animations when section visible
  const [awardsSectionRef, awardsSectionInView] = useInView({
      triggerOnce: true, // Only trigger once
      threshold: 0.1, // Trigger when 10% of the section is visible
      delay: 300 // Add a small delay before triggering
   });

   // Trigger Hero animation immediately on mount
   useEffect(() => {
       heroControls.start('visible');
   }, [heroControls]);


  // Awards data structure with detailed content (re-added the detailed 2025 data)
  const awardsData = [
    {
      year: "2025",
      awards: [
        {
          title: "World Business Conclave – Thor Signia, Most Innovative AI Company of the Year Award",
          description: "Recognized for our groundbreaking AI solutions that have transformed business operations across industries. This prestigious award acknowledges our commitment to pushing the boundaries of artificial intelligence.",
          // --- Detailed Content for this specific award ---
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
                  { author: "Conclave Judging Panel", text: "Thor Signia stood out for its clear vision and tangible results in applying AI to real-world business problems. Their solutions are not just innovative; they are delivering significant, measurable value." },
                  { author: "Our CEO", text: "This award is a testament to our team's relentless pursuit of innovation and our clients' trust in our technology. We are proud to be at the forefront of the AI revolution." }
              ],
              
          }
          // --- End Detailed Content ---
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
       <section className="pt-40 sm:pt-44 md:pt-48 pb-16 sm:pb-20 md:pb-24 bg-[#0F0326] relative overflow-hidden flex items-center justify-center text-center"> {/* Removed min-h */}
         {/* Background shapes - kept from user's code*/}
         <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#88BF42] rounded-br-full opacity-30 z-0"></div> {/* Reduced opacity */}
         <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#88BF42] rounded-tl-full opacity-30 z-0"></div> {/* Reduced opacity */}

            {/* Content */}
            <motion.div
                initial="hidden"
                animate={heroControls} // Animate content in using useEffect start
                variants={heroTextVariants}
                 className="relative z-10 max-w-4xl mx-auto px-4" // Increased max-width slightly
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"> {/* Font-extrabold for more impact */}
                <span className="text-white">Award-Winning </span>
                <span className="text-[#88BF42]">Excellence</span>
              </h1>
              <p className="font-light text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto"> {/* Centered and slightly limited width */}
                Recognized globally for our innovation, leadership, and significant impact in AI and Cybersecurity.
              </p>
            </motion.div>
      </section>

      {/* Awards Content - Timeline Style with Animations */}
      {/* Attach the ref to the section container */}
      <section ref={awardsSectionRef} className="py-16 bg-white">
        {/* Use AnimatePresence if items could be added/removed, otherwise not strictly needed for a static list */}
        {/* <AnimatePresence> */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl"> {/* Increased max-width for a bit more space */}

             {/* Section Title with Animation */}
             {/* Trigger this animation when the awardsSectionRef is in view */}
            <motion.div
                 initial="hidden"
                 animate={awardsSectionInView ? "visible" : "hidden"} // Animate when ref is in view
                 variants={sectionTitleVariants}
                 className="text-center mb-12"
            >
                 <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326]">Our Recognitions & Milestones</h2> {/* Updated title */}
            </motion.div>


          {/* Timeline Container */}
          {/* The main vertical line for the timeline */}
          <div className="relative border-l-4 border-gray-200 ml-6 md:ml-12"> {/* Increased border width and left margin */}

          {awardsData.map((yearGroup, yearIndex) => (
            <div key={yearGroup.year} className="mb-16 last:mb-0"> {/* Use year as key, added bottom margin */}

              {/* Year Heading & Line with Animation */}
              {/* Animate this when the awardsSectionRef is in view, using custom index for stagger */}
              <motion.div
                 initial="hidden"
                 animate={awardsSectionInView ? "visible" : "hidden"} // Animate when ref is in view
                 variants={yearHeaderVariants}
                 custom={yearIndex} // Pass index for staggering
                 className="flex items-center mb-8 -ml-8 md:-ml-16 origin-left" // Adjusted negative margin to align left of the vertical line
              >
                 {/* Year Marker Circle */}
                <div className="flex-shrink-0 bg-[#88BF42] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-10 ring-4 ring-white"> {/* Increased size, added white ring */}
                  <Calendar className="h-6 w-6" />
                </div>
                 {/* Year Text */}
                <h2 className="text-3xl font-bold ml-4 text-[#0F0326] flex-shrink-0">{yearGroup.year}</h2>
                {/* Removed the inline line next to the year */}
              </motion.div>

              {/* Awards List for the Year */}
              <div className="flex flex-col space-y-8 pl-6 md:pl-12 pt-4"> {/* Added left padding to align content */}
                {/* No AnimatePresence needed here unless awards can be added/removed dynamically */}
                     {yearGroup.awards.map((award, awardIndex) => (
                      // Each award block with animation
                     
                      <motion.div
                          key={`${yearGroup.year}-${awardIndex}`} // More robust key
                          className="relative" // Added relative for positioning the award marker
                          initial="hidden"
                          whileInView="visible" // Trigger animation when this element is in view
                          viewport={{ once: true, threshold: 0.1 }} // Config for useInView internally by whileInView
                          variants={awardEntryVariants}
                          custom={awardIndex} // Pass index for staggering within the year
                      >
                        {/* Award Marker Dot on the Timeline line */}
                         <div className="absolute -left-[calc(1.5rem + 2px)] md:-left-[calc(3rem + 2px)] top-4 w-4 h-4 bg-[#88BF42] rounded-full ring-4 ring-white z-20"></div> {/* Marker position adjusted to sit on the line */}

                        {/* Award Content Block */}
                        <div className={cn(
                            "p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border", // Rounded corners, subtle shadow, border
                            "bg-gray-50 border-gray-100", // Default light background and border
                             // Highlight styling for the specific award
                             award.title.includes("World Business Conclave") ? "border-[#88BF42] bg-white shadow-lg ring-2 ring-[#88BF42]/50" : "" // Add highlight classes: green border, white bg, subtle ring
                        )}>
                          <div className="flex items-start gap-4 mb-4"> {/* Increased space below header */}
                            <div className="flex-shrink-0 p-3 bg-[#88BF42]/10 rounded-full"> {/* Larger icon container, softer background */}
                              <Trophy className="h-6 w-6 text-[#88BF42]" /> {/* Use Trophy icon */}
                            </div>
                             <div className="flex flex-col flex-1">
                                 {/* Year label */}
                                <div className="text-sm font-semibold text-gray-600 mb-1">{yearGroup.year}</div>
                                 {/* Title */}
                                 <h3 className={cn("text-xl md:text-2xl font-bold leading-snug text-[#0F0326]", award.title.includes("World Business Conclave") ? "text-[#0F0326]" : "text-[#0F0326]")}>{award.title}</h3>
                             </div>
                          </div>
                           {/* Description */}
                          <p className="text-[#696869] text-base leading-relaxed">{award.description}</p>

                           {/* --- Conditional Detailed Content for World Business Conclave Award --- */}
                           {/* Check if details exist and render if so */}
                           {award.details && (
                               <div className="mt-6 pt-6 border-t border-gray-200 space-y-6"> {/* Separator line, increased top padding and space */}
                                    {/* Full Description */}
                                    {award.details.fullDescription && (
                                         <div>
                                            <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Award Significance:</h4>
                                            <p className="text-[#696869] text-base leading-relaxed">{award.details.fullDescription}</p>
                                         </div>
                                    )}

                                    {/* Key Criteria */}
                                    {award.details.criteriaMet && award.details.criteriaMet.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Key Criteria Met:</h4>
                                            <ul className="space-y-2"> {/* Increased space */}
                                                {award.details.criteriaMet.map((criterion, criIndex) => (
                                                    <li key={criIndex} className="flex items-start text-[#696869] text-base">
                                                        <CheckCircle className="flex-shrink-0 h-4 w-4 text-[#88BF42] mr-2 mt-1" /> {/* Checkmark icon */}
                                                        {criterion}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                     {/* Impact Highlight */}
                                     {award.details.keyImpactAreas && award.details.keyImpactAreas.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Quantifiable Impact:</h4>
                                            <ul className="space-y-2">
                                                {award.details.keyImpactAreas.map((impact, impactIndex) => (
                                                     <li key={impactIndex} className="flex items-start text-[#696869] text-base">
                                                        <Star className="flex-shrink-0 h-4 w-4 text-yellow-500 mr-2 mt-1" /> {/* Star icon */}
                                                        <span className="font-medium mr-1">{impact.label}:</span> {impact.value}
                                                     </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                     {/* Ceremony Highlight */}
                                     {award.details.ceremonyHighlight && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Ceremony & Recognition:</h4>
                                            <p className="text-[#696869] text-base leading-relaxed">{award.details.ceremonyHighlight}</p>
                                        </div>
                                    )}

                                     {/* Quotes */}
                                     {award.details.quotes && award.details.quotes.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Voices of Recognition:</h4>
                                            <div className="space-y-4 italic text-[#696869] text-base">
                                                {award.details.quotes.map((quote, quoteIndex) => (
                                                     <p key={quoteIndex}>"{quote.text}" <span className="not-italic font-medium">- {quote.author}</span></p>
                                                ))}
                                            </div>
                                        </div>
                                     )}

                                     {/* Related Media/Links */}
                                     {award.details.relatedMedia && award.details.relatedMedia.length > 0 && (
                                         <div className="mt-4">
                                            <h4 className="text-lg font-semibold text-[#0F0326] mb-2">Further Reading:</h4>
                                            <div className="flex flex-wrap gap-4"> {/* Use flex-wrap for smaller screens */}
                                                {award.details.relatedMedia.map((media, mediaIndex) => (
                                                     <RouterLink
                                                        key={mediaIndex}
                                                        to={media.link}
                                                        className="inline-flex items-center text-[#88BF42] font-semibold text-base hover:underline transition-colors"
                                                        target={media.link.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
                                                        rel={media.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                                    >
                                                        {media.title} <ArrowRight className="ml-1 w-4 h-4" />
                                                    </RouterLink>
                                                ))}
                                            </div>
                                         </div>
                                     )}
                               </div>
                           )}
                           {/* --- End Conditional Detailed Content --- */}

                        </div>
                      </motion.div>
                    ))}
              </div>
            </div>
          ))}
    
           <div className="absolute left-[-10px] md:left-[-14px] bottom-0 w-5 h-5 bg-gray-400 rounded-full ring-4 ring-white z-10"></div> {/* End marker, adjusted position */}

           </div> {/* End of Timeline Container */}
        </div>
       
      </section>

      <Footer />
    </div>
  );
};

export default AwardsPage;
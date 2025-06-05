'use client'; // Keep this directive if using App Router
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Trophy, Star, Calendar, CheckCircle } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { motion, useAnimation } from 'framer-motion'; // AnimatePresence removed
import { useInView } from 'react-intersection-observer';
// --- Animation Variants ---
// Hero Text: Fade in and slight lift (Keep)
const heroTextVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
// Section Title: Fade in and slight lift (Keep)
const sectionTitleVariants = {
hidden: { opacity: 0, y: 50 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};
// Award Item Container Animation (Fade in, slight scale/slide up)
// This applies to the content block (text, details, etc.)
const awardContentVariants = {
hidden: { opacity: 0, y: 50, scale: 0.95 },
visible: {
opacity: 1,
y: 0,
scale: 1,
transition: {
duration: 0.8,
ease: "easeOut",
// delay will be handled by the parent ItemWrapper's inView
}
},
};
// Featured Award Content: More prominent animation
const featuredAwardContentVariants = {
hidden: { opacity: 0, y: 80, scale: 0.9 },
visible: {
opacity: 1,
y: 0,
scale: 1,
transition: {
duration: 1,
ease: "easeOut",
// delay will be handled by the parent ItemWrapper's inView
}
},
};
// Marker Dot Animation (Triggered by its parent ItemWrapper inView)
const markerDotVariants = {
hidden: { scale: 0, opacity: 0 },
visible: {
scale: 1,
opacity: 1,
transition: {
duration: 0.5,
ease: "easeOut",
delay: 0.3 // Slight delay after the item container is visible
}
}
};
// Year Text Animation (Triggered by its parent ItemWrapper inView)
const yearTextVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.5,
ease: "easeOut",
delay: 0.4 // Delay after marker
}
}
}
const AwardsPage = () => {
const pathname = usePathname();

  useEffect(() => {
    document.title = "Accolades | ThorSignia";
  }, []);
// Scroll to top on page load
useEffect(() => {
if (pathname === '/awards') {
window.scrollTo(0, 0);
}
}, [pathname]);
// Animation Controls for Hero (Keep)
const heroControls = useAnimation();
useEffect(() => {
heroControls.start('visible');
}, [heroControls]);
// Awards data structure (Keep)
const awardsData = [
{
year: "2025",
awards: [
{
title: "World Business Conclave – Most Innovative AI Company of the Year Award", // Simplified title slightly
description: "Recognized for our groundbreaking AI solutions that have transformed business operations across industries.",
details: { // This object indicates it's the featured award
fullDescription: "This award highlights our role as a leader in the AI landscape, recognizing our innovative platforms that drive efficiency, intelligence, and competitive advantage for our clients. Our submission demonstrated significant advancements in machine learning algorithms, natural language processing, and predictive analytics, deployed across various sectors including finance, healthcare, and retail.",
criteriaMet: [
"Pioneering AI Technology Development",
"Demonstrated Market Adoption & Impact",
"Scalability and Robustness of Solutions",
"Contribution to Ethical AI Practices",
"Innovation in Specific Verticals"
],
keyImpactAreas: [
{ label: "Efficiency Gains", value: "Up to 40% reduction in operational costs." },
{ label: "Revenue Growth", value: "Supported clients in achieving up to 25% increase in revenue." },
{ label: "Productivity Boost", value: "Enhanced employee productivity." },
{ label: "Risk Reduction", value: "Improved fraud detection and cybersecurity posture." }
],
ceremonyHighlight: "The award was presented at the grand World Business Conclave gala in London, a key gathering of global business leaders and innovators. Our CEO accepted the award, emphasizing the team's dedication.",
quotes: [
{ label: "Conclave Judging Panel", text: "Thor Signia stood out for its clear vision and tangible results in applying AI to real-world business problems. Their solutions are delivering significant, measurable value." },
{ label: "Our CEO", text: "This award is a testament to our team's relentless pursuit of innovation and our clients' trust. We are proud to be at the forefront of the AI revolution." }
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
},
{ // Added another award for better staggered effect example
title: "Tech Innovation Award",
description: "Recognized for pioneering advancements in a specific technology domain."
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
// Determine which award is featured
const featuredAwardTitle = awardsData[0]?.awards.find(award => award.details)?.title;
// Flatten the awards data for easier vertical iteration
const allAwards = awardsData.flatMap((yearGroup) =>
yearGroup.awards.map((award) => ({
...award,
year: yearGroup.year,
isFeatured: award.title === featuredAwardTitle
}))
);
// Calculate base left position for timeline elements on small screens
// This needs to align the central line correctly relative to padding
const getTimelineLeft = () => {
// Based on container padding: px-4 (16px)
// Half of the padding (8px) + half of the marker size (10px / 2 = 5px)
// Total offset from left edge: 8px + 5px = 13px
// Let's make it visually centered on the padding edge, maybe slightly outside.
// Trial and error suggests around 20px-25px offset from the container's LEFT edge works well with px-4 padding
return {
sm: '24px', // left value for small screens (adjust based on px-4 and marker size)
md: '32px'  // left value for medium and up screens (adjust based on md:px-6 and marker size)
};
}
return (
<div className="min-h-screen bg-white">
<Navbar />
{/* Hero Section */}
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
      <p className="font-light text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
        Recognized globally for our innovation, leadership, and significant impact in AI and Cybersecurity.
      </p>
    </motion.div>
  </section>

  {/* Awards Content - Outstanding Vertical Award-by-Award Timeline */}
  <section className="py-16 bg-white relative overflow-hidden">
     {/* Main container for timeline layout */}
     <div className="container mx-auto px-4 md:px-6 max-w-5xl">
       {/* Section Title with Animation */}
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, threshold: 0.1 }}
         variants={sectionTitleVariants}
         className="text-center mb-12 md:mb-20"
       >
         <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326]">Our Recognitions & Milestones</h2>
       </motion.div>

       {/* Timeline Container - Position the pillar path (dotted line) and content */}
       <div className="relative min-h-[600px]"> {/* Ensure enough height for all awards */}

            {/* --- Vertical Dotted Timeline PATH --- */}
            {/* Animated Green Dots Timeline spanning the full height */}
            <div
              className={cn(
                "pointer-events-none absolute top-0 bottom-0 flex flex-col items-center z-0 w-6",
                `left-[${getTimelineLeft().sm}] md:left-[${getTimelineLeft().md}]`
              )}
              style={{ height: '100%', justifyContent: 'space-between' }}
            >
              {Array.from({ length: 120 }).map((_, idx) => (
                <motion.div
                  key={`timeline-dot-${idx}`}
                  className="w-2 h-2 rounded-full bg-[#88BF42] my-0"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: idx * 0.08, // Slower delay for dramatic one-by-one effect
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>

            {/* Awards Content - Needs left padding to make space for the dotted line and markers */}
            {/* Padding adjusted based on the getTimelineLeft values */}
            <div className={cn(
                "pl-[60px] md:pl-[80px]" // Increased padding left to accommodate marker/year text beside the line
            )}>
                {allAwards.map((award, totalIndex) => {
                    // useInView for triggering animation on THIS individual award item wrapper
                    const [awardItemRef, awardItemInView] = useInView({
                        triggerOnce: true,
                        threshold: 0.05, // Trigger when 5% of the item is visible
                        delay: 100 // Optional delay before item-specific children start
                    });

                    return (
                        // Award Item Wrapper - This is the main block for each award
                        // Use a div here and apply motion to children for specific animations
                        <div
                            ref={awardItemRef} // Attach ref here
                            key={`award-${totalIndex}`}
                            className="relative mb-16 last:mb-0 pt-4" // Added vertical margin between items, pt-4 for space above marker
                        >
                            {/* Marker Dot - Positioned absolutely relative to ItemWrapper */}
                            {/* Positions the dot *on* the timeline line */}
                            <motion.div
                                 initial="hidden"
                                 animate={awardItemInView ? "visible" : "hidden"} // Animate when parent item is in view
                                 variants={markerDotVariants} // Apply dot animation
                                 className={cn(
                                    "absolute top-4 w-4 h-4 bg-[#88BF42] rounded-full ring-4 ring-white z-30 transform -translate-x-1/2", // Positioned at the timeline line, centered
                                    `left-[calc(${getTimelineLeft().sm} + 0.25rem)] md:left-[calc(${getTimelineLeft().md} + 0.25rem)]` // Align dot center with the line's left edge + half line width
                                 )}
                            ></motion.div>

                            {/* Year Text - Positioned absolutely relative to ItemWrapper */}
                            {/* Positions the year text just before the marker */}
                            <motion.div
                                initial="hidden"
                                animate={awardItemInView ? "visible" : "hidden"}
                                variants={yearTextVariants} // Apply year text animation
                                className={cn(
                                     "absolute text-right left-[-80px] top-2 w-[70px] text-lg font-bold text-[#0F0326] z-20", // Position to the left of content, fixed width
                                     `left-[calc(${getTimelineLeft().sm} - 80px)] md:left-[calc(${getTimelineLeft().md} - 80px)]` // Adjust left position based on timeline line
                                )}
                            >
                                {award.year}
                            </motion.div>

                            {/* Award Content Block - Animated in when ItemWrapper is in view */}
                            {/* This is what gets the fade/slide/scale animation */}
                            <motion.div
                                initial="hidden"
                                animate={awardItemInView ? "visible" : "hidden"} // Animate when parent item is in view
                                variants={award.isFeatured ? featuredAwardContentVariants : awardContentVariants} // Apply animation
                                className={cn(
                                    "p-6 rounded-lg shadow-lg transition-shadow duration-300 border w-full bg-white ring-2 border-[#88BF42] ring-[#88BF42]/50" // All awards get green border and highlight
                                )}
                            >
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

                                 {/* Conditional Detailed Content (Keep) */}
                                 
                             </motion.div>
                        </div>
                    ); // Close award item return
                })}

                
            </div>
       </div>
    </div>
  </section>

  <Footer />
</div>

);
};
export default AwardsPage;
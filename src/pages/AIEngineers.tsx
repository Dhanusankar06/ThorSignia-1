// No longer 'use client'; directive needed in standard React
import React, { useState } from 'react';
// Import framer-motion (same)
import { AnimatePresence, motion } from 'framer-motion';
// No longer import from 'next/image'; use standard <img> if needed (not used here)
// import Image from 'next/image'; // REMOVED

// Import Link and useNavigate from react-router-dom
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Import UI components from the correct paths
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import icons
import { ChevronDown } from 'lucide-react';
// Example icons (same)
import { CheckCircle, Rocket, Users, DollarSign, Briefcase, TrendingUp, Brain, Database, Code, GitBranch, Lightbulb } from 'lucide-react';


// --- Animation Variants (framer-motion, same) ---
// Variants defined at the top level are fine
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

// Item variant for elements within a staggered container (same)
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Data Placeholders (same) ---
const whyHireReasons = [
    { icon: CheckCircle, title: 'Vetted Expertise', description: 'Access top-tier AI engineers with proven skills and experience.' },
    { icon: Rocket, title: 'Accelerated Growth', description: 'Quickly scale your AI capabilities without lengthy hiring processes.' },
    { icon: Users, title: 'Flexible Engagement', description: 'Choose hiring models that perfectly fit your project needs and budget.' },
    { icon: DollarSign, title: 'Cost-Effective', description: 'Reduce overheads compared to traditional hiring and recruitment.' },
    { icon: Briefcase, title: 'Industry Focus', description: 'Engineers with specific experience in relevant industries.' },
    { icon: TrendingUp, title: 'Proven Success', description: 'Tap into a track record of successful AI project deliveries.' },
];

// Why Hire Section (mostly same, uses framer-motion)
const WhyHireSection = ({ reasons = whyHireReasons }) => {
  const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
          },
      },
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
  
      <section
          className="py-20 bg-white"
      >
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
              >
                  <h2 className="text-3xl font-bold text-black mb-4">Why Hire From Us?</h2>
                  <p className="text-lg text-black-400 max-w-3xl mx-auto">
                      Unlock unparalleled expertise and flexibility for your AI initiatives.
                  </p>
              </motion.div>

              <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
              >
                  {Array.isArray(reasons) && reasons.map((reason, index) => (
                      <motion.div
                          key={index}
                          className={`
                              bg-gray-800 p-6 rounded-lg shadow-lg h-full
                              transition-all duration-300 ease-in-out
                              hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-[#88bf42] hover:ring-opacity-50
                              flex flex-col
                          `}
                          variants={itemVariants}
                          layout
                      >
                           {reason.icon && (
                              <div className="mb-4">
                                  <reason.icon className="h-10 w-10 text-[#88bf42]" />
                              </div>
                          )}
                          <div className="flex-grow">
                              <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                              <p className="text-gray-400">{reason.description}</p>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};
const faqItems = [
    {
        question: "What types of AI engineers can I hire through your platform?",
        answer: "We offer a diverse pool of AI engineers specializing in machine learning, deep learning, computer vision, NLP, robotics, and more. All our engineers are thoroughly vetted for both technical expertise and communication skills."
    },
    {
        question: "How long does it take to hire an AI engineer?",
        answer: "Typically, you can start interviewing matched candidates within 48-72 hours of submitting your requirements. The entire process from submission to onboarding can be completed in 1-2 weeks."
    },
    {
        question: "What are your engagement models?",
        answer: "We offer flexible engagement models including full-time hiring, project-based contracts, and hourly arrangements. You can choose the model that best fits your project needs and budget."
    },
    {
        question: "How do you ensure the quality of AI engineers?",
        answer: "Our rigorous vetting process includes technical assessments, coding challenges, project portfolio reviews, and communication skills evaluation. Only the top 5% of applicants make it to our platform."
    },
    {
        question: "What if the engineer isn't a good fit?",
        answer: "We offer a replacement guarantee within the first two weeks of engagement. If you're not satisfied with the engineer's performance, we'll quickly provide alternative candidates at no additional cost."
    }
];

// FAQ Section Component
const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const answerVariants = {
        hidden: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            marginTop: '1rem', // Corresponds to mb-4
            marginBottom: '1rem', // Corresponds to mb-4
            paddingTop: '1rem', // Corresponds to py-4 in original AccordionContent
            paddingBottom: '1rem', // Corresponds to py-4 in original AccordionContent
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            transition: { duration: 0.2, ease: "easeInOut" }
        }
    };


    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible" // Use whileInView for scroll-triggered animation
                    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
                    variants={textVariants}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about hiring AI engineers through our platform
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto space-y-4" // Added space-y-4 here
                    initial="hidden"
                    whileInView="visible" // Use whileInView for scroll-triggered animation
                    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
                    variants={containerVariants}
                >
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" // Added overflow-hidden for cleaner animation
                        >
                            {/* This div acts as the AccordionItem */}
                            <button // Changed to button for accessibility and click handling
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-semibold text-gray-900">{item.question}</span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200`} />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        key="content"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={answerVariants}
                                        className="px-6" // Original AccordionContent had px-6 pb-4. pb-4 is handled by answerVariants margin/padding
                                        // overflow="hidden" // Ensure content doesn't spill during animation
                                    >
                                        <p className="text-gray-600">{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

WhyHireSection.defaultProps = {
  reasons: whyHireReasons
};

const roles = [
  'Machine Learning Engineers',
  'Data Scientists',
  'NLP Specialists',
  'Computer Vision Engineers',
  'AI/MLOps Engineers',
  'AI Researchers',
  'AI Product Managers',
  'Robotics Engineers',
];

// Roles Section component (mostly same, uses framer-motion)
const RolesSection = ({ roles }: { roles?: string[] }) => {
  const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.07,
              delayChildren: 0.2
          },
      },
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
  };

  const displayRoles = roles || [];

  return (
      <section
          className="py-20 "
      >
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
              >
                  <h2 className="text-3xl font-bold text-black mb-4">Roles You Can Hire</h2>
                  <p className="text-lg text-black max-w-3xl mx-auto">
                      Our network covers a wide range of specialized AI roles.
                  </p>
              </motion.div>

              <motion.div
                  className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto "
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
              >
                  {Array.isArray(displayRoles) && displayRoles.map((role, index) => (
                      <motion.div
                          key={index}
                          variants={itemVariants}
                      >
                          <div
                              className="transition-transform  duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-[1px]"
                          >
                              <div className="px-6 py-3 bg-white text-black rounded-full shadow-sm text-sm font-medium whitespace-nowrap relative z-10">
                                  {role}
                              </div>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};

RolesSection.defaultProps = {
  roles: [] as string[]
};

const hiringModels = [
  { title: "Full-Time Hire", description: "Integrate an AI expert directly into your team on a permanent basis for long-term projects." },
  { title: "Contract Project", description: "Hire an AI professional for a specific project duration or defined scope of work." },
  { title: "Staff Augmentation", description: "Quickly scale your team with skilled AI talent to complement your existing capabilities." },
];

// Flexible Hiring Models Section (mostly same, uses framer-motion)
const FlexibleHiringModelsSection = () => {
  const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
          },
      },
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
      <section
          className="py-20 bg-white"
      >
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
              >
                  <h2 className="text-3xl font-bold text-black mb-4">Flexible Hiring Models</h2>
                  <p className="text-lg text-black-400 max-w-3xl mx-auto">
                      Choose the engagement model that best aligns with your project timeline and budget.
                  </p>
              </motion.div>

              <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
              >
                  {hiringModels.map((model, index) => (
                      <motion.div
                          key={index}
                          className={`
                              bg-gray-800 p-6 rounded-lg shadow-lg h-full
                              transition-all duration-300 ease-in-out
                              hover:scale-105 hover:shadow-xl
                              hover:ring-2 hover:ring-[#88bf42]
                              flex flex-col
                          `}
                          variants={itemVariants}
                          layout
                      >
                           <div className="mb-4 text-[#88bf42] text-4xl font-bold leading-none">
                              {index + 1}
                          </div>
                          <div className="flex-grow">
                              <h3 className="text-xl font-semibold text-white mb-2">{model.title}</h3>
                              <p className="text-gray-400">{model.description}</p>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};

const howItWorksSteps = [
  { number: 1, title: "Submit Your Requirements", description: "Tell us about the AI role you need to fill, the required skills, and project details." },
  { number: 2, title: "Receive Curated Matches", description: "Our AI-powered platform identifies top candidates from our network that match your needs." },
  { number: 3, title: "Connect & Interview", description: "Easily connect with and interview potential candidates through our platform." },
  { number: 4, title: "Hire Your Expert", description: "Select the best fit for your team and begin your project quickly." },
  { number: 5, title: "Onboarding & Support", description: "We assist with the onboarding process and provide ongoing support." },
];

// How It Works Section (mostly same, uses framer-motion)
const HowItWorksSection = () => {
  const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
          },
      },
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
      <section
          className="py-20 bg-white"
      >
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
              >
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-4">How It Works</h2>
                  <p className="text-lg text-black dark:text-gray-400 max-w-3xl mx-auto">
                      Our streamlined process ensures a fast and efficient hiring experience.
                  </p>
              </motion.div>

              <motion.div
                  className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
              >
                  {howItWorksSteps.map((step, index) => {
                      const isLastOddItem = index === howItWorksSteps.length - 1 && howItWorksSteps.length % 2 !== 0;

                      return (
                          <motion.div
                              key={step.number}
                              className={`
                                  bg-white p-6 rounded-lg shadow-lg
                                  border-2 border-transparent
                                  transition-all duration-300
                                  hover:border-[#88BF42] hover:shadow-xl
                                  ${isLastOddItem ? 'md:col-span-2 md:mx-auto w-full md:max-w-md' : ''}
                              `}
                              variants={itemVariants}
                              layout
                          >
                              <div className="flex items-start">
                                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#88BF42]/10 rounded-full flex items-center justify-center mr-4">
                                      <span className="text-[#88BF42] font-bold text-xl">{step.number}</span>
                                  </div>
                                  <div className="flex-grow">
                                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                      <p className="text-gray-600">{step.description}</p>
                                  </div>
                              </div>
                          </motion.div>
                      );
                  })}
              </motion.div>
          </div>
      </section>
  )
};

const successes = [
  { id: 1, project: "Automated Image Recognition System", result: "Increased processing speed by 300% and reduced manual effort.", client: "Global Retailer" },
  { id: 2, project: "Predictive Maintenance Model", result: "Reduced equipment downtime by 40% through early anomaly detection.", client: "Industrial Manufacturer" },
  { id: 3, project: "Natural Language Processing for Customer Support", result: "Improved response time by 50% and increased customer satisfaction scores.", client: "Tech Startup" },
  { id: 4, project: "Reinforcement Learning for Supply Chain Optimization", result: "Optimized logistics routes, saving 15% on transportation costs.", client: "Logistics Company" },
];

// Success Stories Section (mostly same, uses framer-motion)
const SuccessStoriesSection = () => {
  const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
          },
      },
  };

  const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const CheckmarkIcon = ({ className = "w-6 h-6" }) => (
      <svg
          className={`text-green-500 ${className}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
      >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
  );

  return (
      <section
          className="py-20 bg-white"
      >
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
              >
                  <h2 className="text-3xl font-bold text-black mb-4">Success Stories</h2>
                  <p className="text-lg text-black-400 max-w-3xl mx-auto">
                      See how we've helped businesses achieve their AI goals.
                  </p>
              </motion.div>

              <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
              >
                  {successes.map((story) => (
                      <motion.div
                          key={story.id}
                          className={`
                              bg-gray-800 p-6 rounded-lg shadow-lg h-full
                              transition-all duration-300 ease-in-out
                              hover:scale-105 hover:shadow-xl
                              hover:ring-2 hover:ring-[#88bf42]
                              flex flex-col
                          `}
                          variants={itemVariants}
                          layout
                      >
                          <div className="mb-4">
                              <CheckmarkIcon className="w-10 h-10 text-green-500" />
                          </div>
                          <div className="flex-grow">
                              <p className="text-white font-semibold text-lg mb-2">{story.project}</p>
                              <p className="text-gray-400 mb-4">{story.result}</p>
                          </div>
                          <p className="text-sm text-gray-400 mt-auto">- {story.client}</p>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};

// CTA Section (uses framer-motion and react-router-dom Link)
const CTASection = () => {
    // Use itemVariants defined at the top level or redefine if specific to this section
    // Using the top-level ones for consistency
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    // For the buttons, we can use the same itemVariants or simple motion.div
    const buttonVariants = {
         hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }, // Add a slight delay
    };


    return (
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Circles (same) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`cta-circle-${i}`}
              className="absolute rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.15, 0.08],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 30 + 15}px`,
                height: `${Math.random() * 30 + 15}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? '#88BF42' : '#0F0326',
                filter: 'blur(1px)',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 text-center relative z-20">
          <motion.h2
            variants={textVariants} // Use textVariants
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold mb-6 text-[#0F0326]"
          >
            Ready to Build Your <span className="text-[#88BF42]">AI Team</span>?
          </motion.h2>
          <motion.p
            variants={textVariants} // Use textVariants
            initial="hidden"
            animate="visible"
            className="text-xl mb-8 max-w-3xl mx-auto text-gray-600"
            transition={{ duration: 0.6, delay: 0.2 }} // Add slight delay after h2
          >
            Join forces with world-class AI engineers and accelerate your innovation journey.
          </motion.p>
          <motion.div
            variants={buttonVariants} // Use buttonVariants or itemVariants
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {/* Replace Next/Link with react-router-dom/Link */}
            <RouterLink to="/contact"> {/* Remove passHref */}
              <Button className="bg-[#88bf42] hover:bg-[#7aad3a] text-white text-lg px-8 py-3 h-auto rounded-md">
                Hire AI Engineers
              </Button>
            </RouterLink>
            {/* Replace Next/Link with react-router-dom/Link */}
            <RouterLink to="/contact"> {/* Remove passHref */}
              <Button variant="outline" className="border-[#0F0326] text-[#0F0326] hover:bg-[#0F0326] hover:text-white text-lg px-8 py-3 h-auto rounded-md">
                Schedule a Consultation
              </Button>
            </RouterLink>
          </motion.div>
        </div>
      </section>
    );
  };


// Define types for our data (same)
interface Engineer {
    title: string;
    skills: string[];
    description: string;
}

// Main component for the page (uses react-router-dom useNavigate)
const HireEngineers = () => {
    const [showAll, setShowAll] = useState(false);
    // Replace Next.js useRouter with react-router-dom useNavigate
    const navigate = useNavigate();

    const handleHireClick = (engineerTitle: string) => {
        // Replace router.push with navigate
        navigate(`/contact?role=${encodeURIComponent(engineerTitle)}`);
    };

    // Engineers data (same)
    const engineers: Engineer[] = [
        {
            title: "NLP Engineer",
            skills: ["BERT", "Hugging Face", "spaCy", "RAG"],
            description: "Expert in natural language processing, specializing in building advanced text analysis systems, chatbots, and language models. Experienced in implementing retrieval-augmented generation (RAG) and fine-tuning large language models for specific use cases."
        },
        {
            title: "Machine Learning Engineer",
            skills: ["PyTorch", "Scikit-learn", "Docker", "AWS"],
            description: "Specialists in developing and deploying production-ready ML models. Proficient in building scalable machine learning pipelines, model optimization, and implementing end-to-end ML solutions using cloud infrastructure."
        },
        {
            title: "Data Scientist",
            skills: ["Python", "TensorFlow", "Statistical Analysis", "SQL"],
            description: "Expert in transforming complex data into actionable insights. Combines statistical analysis with machine learning to solve business problems, create predictive models, and develop data-driven solutions for decision making."
        },
        {
            title: "Computer Vision Engineer",
            skills: ["OpenCV", "TensorFlow", "CUDA", "YOLO"],
            description: "Specialized in developing real-time image and video processing systems. Experienced in object detection, image segmentation, and building computer vision solutions for industrial automation and quality control."
        },
        {
            title: "MLOps Engineer",
            skills: ["Kubernetes", "CI/CD", "MLflow", "GCP"],
            description: "Expert in building and maintaining ML infrastructure and deployment pipelines. Focuses on automating ML workflows, monitoring model performance, and ensuring reliable scaling of AI systems in production environments."
        },
        {
            title: "AI Research Scientist",
            skills: ["Reinforcement Learning", "JAX", "PyTorch"],
            description: "Conducts cutting-edge research in artificial intelligence and machine learning. Specializes in developing novel algorithms, improving existing models, and pushing the boundaries of AI capabilities in reinforcement learning and multi-agent systems."
        },
        {
            title: "Data Engineering Lead",
            skills: ["Spark", "Kafka", "Airflow", "Snowflake"],
            description: "Expert in designing and implementing robust data pipelines for AI systems. Specializes in building scalable data architectures, optimizing data workflows, and ensuring efficient data processing for machine learning applications."
        },
        {
            title: "Computer Vision Specialist",
            skills: ["OpenCV", "Deep Learning", "Image Processing"],
            description: "Advanced expertise in developing sophisticated computer vision solutions. Specializes in creating custom vision models for specific industry applications, including medical imaging, autonomous systems, and augmented reality."
        },
        {
            title: "AI Ethics Specialist",
            skills: ["Responsible AI", "Fairness", "Python"],
            description: "Focuses on ensuring ethical AI development and deployment. Specializes in developing fair and unbiased AI systems, implementing responsible AI practices, and creating governance frameworks for ethical AI implementation."
        }
    ];

    const displayedEngineers = showAll ? engineers : engineers.slice(0, 6);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section (uses framer-motion) */}
            <section className="bg-[#0F0326] flex-col h-[300px] md:h-[400px] min-h-[700px] relative overflow-hidden">
                {/* Sparkles Animation (same) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(40)].map((_, i) => {
                        const size = Math.random() * 4 + 2;
                        const startX = Math.random() * 100;
                        const startY = Math.random() * 100;
                        return (
                            <motion.div
                                key={`sparkle-${i}`}
                                className="absolute rounded-full"
                                initial={{
                                    x: `${startX}%`,
                                    y: `${startY}%`,
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    y: [`${startY}%`, `${startY - 50}%`, `${startY}%`],
                                    x: [`${startX}%`, `${startX + (Math.random() - 0.5) * 20}%`, `${startX}%`],
                                    scale: [0, 1, 0.5, 1, 0],
                                    opacity: [0, 1, 0.5, 1, 0]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    width: size + "px",
                                    height: size + "px",
                                    left: Math.random() * 100 + "%",
                                    top: Math.random() * 100 + "%",
                                    backgroundColor: i % 2 === 0 ? '#88BF42' : '#E5E7EB',
                                    boxShadow: `0 0 ${size * 2}px ${i % 2 === 0 ? '#88BF42' : '#E5E7EB'}`
                                }}
                            />
                        );
                    })}
                </div>

                {/* Additional floating particles (same) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => {
                        const size = Math.random() * 3 + 1;
                        const startX = Math.random() * 100;
                        const startY = Math.random() * 100;
                        return (
                            <motion.div
                                key={`particle-${i}`}
                                className="absolute rounded-full"
                                initial={{
                                    x: `${startX}%`,
                                    y: `${startY}%`,
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    x: [`${startX}%`, `${startX + (Math.random() - 0.5) * 30}%`, `${startX}%`],
                                    y: [`${startY}%`, `${startY + (Math.random() - 0.5) * 30}%`, `${startY}%`],
                                    scale: [0, 1, 0],
                                    opacity: [0, 0.3, 0]
                                }}
                                transition={{
                                    duration: 5 + Math.random() * 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                                style={{
                                    width: size + "px",
                                    height: size + "px",
                                    backgroundColor: i % 2 === 0 ? '#88BF42' : '#E5E7EB',
                                    filter: 'blur(1px)'
                                }}
                            />
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
               
                     className="relative flex flex-col gap-4 items-center justify-center px-4 text-center h-full"
  
                >
                    <div className="text-3xl md:text-5xl font-bold text-white text-center">
                        AI Engineering <span className='text-[#88BF42]'>Expertise</span>
                    </div>
                    <div className="font-extralight text-base md:text-2xl text-neutral-200">
                        Access top-tier AI engineers and data scientists
                    </div>
                </motion.div>
            </section>

            {/* Engineers Section (uses framer-motion and react-router-dom useNavigate) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">Our AI Engineers</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Specialized expertise for your AI initiatives
                        </p>
                    </motion.div>

                    {/* Use AnimatePresence to handle exit animations when engineers are hidden */}
                    <motion.div
                         layout // Add layout to the parent container for smooth transitions
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        <AnimatePresence>
                            {displayedEngineers.map((engineer, index) => (
                                <motion.div
                                    key={engineer.title} // Use a stable key like title
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:border-[#88bf42] hover:border-2 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }} // Add exit animation
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    layout // Add layout to each item for smooth grid changes
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-gray-900 mb-2 transition-colors">{engineer.title}</h4>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {engineer.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 text-sm font-medium rounded-full bg-[#88bf42]/10 text-[#88bf42] border border-[#88bf42]/20"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 mb-4">{engineer.description}</p>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <Button
                                                className="w-full bg-[#0F0326] hover:bg-[#0F0326]/80 text-white font-semibold transition-colors duration-300"
                                                onClick={() => handleHireClick(engineer.title)}
                                            >
                                                Hire Now
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                         </AnimatePresence>
                    </motion.div>


                    {!showAll && (
                        <motion.div
                            className="w-full flex justify-center mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Button
                                className="bg-[#88bf42] text-white font-semibold rounded-md hover:bg-[#7aad3a] px-8 py-3 text-lg transition-colors duration-300"
                                onClick={() => setShowAll(true)}
                            >
                                View All Engineers
                            </Button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Other sections remain largely the same, ensuring correct imports */}

            {/* Why Hire From Us? Section */}
            <WhyHireSection />

            {/* 3. Roles You Can Hire Section */}
            <RolesSection roles={roles} />

            {/* 4. Hiring Models Section */}
            <FlexibleHiringModelsSection />

            {/* 5. How It Works Section */}
            <HowItWorksSection />

            {/* 6. Previous Engagements / Successes Section */}
            <SuccessStoriesSection />

            {/* 7. FAQ Section */}
            <FAQSection />

            {/* 7. CTA Section */}
            <CTASection />

            <Footer />

        </div>
    );
};

export default HireEngineers;
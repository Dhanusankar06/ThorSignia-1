// No longer 'use client'; directive needed in standard React
import React, { useState, useEffect } from 'react';
// Import framer-motion (same)
import { AnimatePresence, motion, useAnimation } from 'framer-motion'; // Import useAnimation
import { useInView } from 'react-intersection-observer'; // Import useInView

// Import Link and useNavigate from react-router-dom
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation

// Import UI components from the correct paths (keep standard imports)
import { Button } from '@/components/ui/button';
// Removed unused Accordion imports as the FAQ section is now custom-rendered for better motion control
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Keep Accordion if used for FAQ
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import icons
import { ChevronDown } from 'lucide-react';
// Example icons (same)
import { CheckCircle, Rocket, Users, DollarSign, Briefcase, TrendingUp, Brain, Database, Code, GitBranch, Lightbulb, PlayCircle, ShieldCheck, Layers, Award, Star, BarChart2, Settings, MessageCircle, MapPin, Phone, Globe, Wrench, ArrowRight } from 'lucide-react'; // Added more potentially useful icons


// --- Animation Variants (framer-motion, adapted) ---
// Use variants that can be reused or slightly modified per section
const sectionTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1, // Slightly reduced delay
            staggerChildren: 0.08, // Slightly reduced stagger
        },
    },
};

const itemEntryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemFadeVariants = {
     hidden: { opacity: 0, scale: 0.95 },
     visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

// Removed previous specific background animation variants


// --- Data Placeholders (same) ---
const whyHireReasons = [
    { icon: ShieldCheck, title: 'Vetted Expertise', description: 'Access top-tier AI engineers with proven skills and experience.' },
    { icon: Rocket, title: 'Accelerated Growth', description: 'Quickly scale your AI capabilities without lengthy hiring processes.' },
    { icon: Users, title: 'Flexible Engagement', description: 'Choose hiring models that perfectly fit your project needs and budget.' },
    { icon: DollarSign, title: 'Cost-Effective', description: 'Reduce overheads compared to traditional hiring and recruitment.' },
    { icon: Layers, title: 'Industry Focus', description: 'Engineers with specific experience in relevant industries.' },
    { icon: TrendingUp, title: 'Proven Success', description: 'Tap into a track record of successful AI project deliveries.' },
];

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


const hiringModels = [
  { title: "Full-Time Hire", description: "Integrate an AI expert directly into your team on a permanent basis for long-term projects." },
  { title: "Contract Project", description: "Hire an AI professional for a specific project duration or defined scope of work." },
  { title: "Staff Augmentation", description: "Quickly scale your team with skilled AI talent to complement your existing capabilities." },
];

const howItWorksSteps = [
  { number: 1, title: "Submit Your Requirements", description: "Tell us about the AI role you need to fill, the required skills, and project details.", icon: Lightbulb },
  { number: 2, title: "Receive Curated Matches", description: "Our AI-powered platform identifies top candidates from our network that match your needs.", icon: Database },
  { number: 3, title: "Connect & Interview", description: "Easily connect with and interview potential candidates through our platform.", icon: Users },
  { number: 4, title: "Hire Your Expert", description: "Select the best fit for your team and begin your project quickly.", icon: CheckCircle },
  { number: 5, title: "Onboarding & Support", description: "We assist with the onboarding process and provide ongoing support.", icon: Award },
];

const successes = [
  { id: 1, project: "Automated Image Recognition System", result: "Increased processing speed by 300% and reduced manual effort.", client: "Global Retailer", icon: BarChart2 },
  { id: 2, project: "Predictive Maintenance Model", result: "Reduced equipment downtime by 40% through early anomaly detection.", client: "Industrial Manufacturer", icon: Wrench },
  { id: 3, project: "Natural Language Processing for Customer Support", result: "Improved response time by 50% and increased customer satisfaction scores.", client: "Tech Startup", icon: MessageCircle },
  { id: 4, project: "Reinforcement Learning for Supply Chain Optimization", result: "Optimized logistics routes, saving 15% on transportation costs.", client: "Logistics Company", icon: TrendingUp },
  { id: 5, project: "AI-Powered Chatbot for Lead Qualification", result: "Increased qualified leads by 25% and improved sales team efficiency.", client: "SaaS Company", icon: Users },
  { id: 6, project: "Custom ML Model for Financial Forecasting", result: "Enhanced forecasting accuracy by 20%, enabling better strategic planning.", client: "Financial Services", icon: DollarSign },
];


// --- Section Components (RE-STYLED) ---

// Why Hire Section (RE-STYLED - Blocks with prominent icon/title area)
const WhyHireSection = ({ reasons = whyHireReasons }) => {
   const controls = useAnimation();
   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
   useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);

  return (
      <section ref={ref} className="py-20 bg-white">
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate={controls}
                  variants={sectionTextVariants}
              >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">Why Hire From Us?</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Unlock unparalleled expertise and flexibility for your AI initiatives.
                  </p>
              </motion.div>

              <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                  initial="hidden"
                  animate={controls}
                  variants={containerStaggerVariants}
              >
                  {Array.isArray(reasons) && reasons.map((reason, index) => (
                      <motion.div
                          key={index}
                          className={`
                              bg-white rounded-lg shadow-lg h-full border border-gray-200
                              transition-all duration-300 ease-in-out
                              hover:shadow-xl hover:scale-[1.02] hover:border-[#88bf42]
                              overflow-hidden
                          `}
                          variants={itemEntryVariants}
                          layout
                      >
                          {/* Top section with Icon and Title */}
                          <div className="flex items-center p-6 bg-gray-50 border-b border-gray-200">
                               {reason.icon && (
                                  <div className={`flex-shrink-0 mr-4 p-3 rounded-full bg-[#88bf42]/10 text-[#88bf42]`}>
                                      <reason.icon className={`h-6 w-6`} />
                                  </div>
                              )}
                              <h3 className="text-xl font-semibold text-[#0F0326] leading-snug">{reason.title}</h3>
                          </div>

                          {/* Bottom section with Description */}
                          <div className="p-6">
                              <p className="text-gray-700 text-base">{reason.description}</p>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};
WhyHireSection.defaultProps = { reasons: whyHireReasons };


// Roles Section component (RE-STYLED - Simple badges with border)
const RolesSection = ({ roles }: { roles?: string[] }) => {
   const controls = useAnimation();
   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
   useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);

  const displayRoles = roles || [];

  return (
      <section ref={ref} className="py-20 bg-gray-100"> {/* Light gray background */}
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate={controls}
                  variants={sectionTextVariants}
              >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">Roles You Can Hire</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Our network covers a wide range of specialized AI roles.
                  </p>
              </motion.div>

              <motion.div
                  className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
                  initial="hidden"
                  animate={controls}
                  variants={containerStaggerVariants}
              >
                  {Array.isArray(displayRoles) && displayRoles.map((role, index) => (
                      <motion.div
                          key={index}
                          variants={itemFadeVariants}
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.2 }}
                      >
                          {/* Simple bordered badge */}
                           <div className="px-6 py-3 border-2 border-[#88bf42] text-[#0F0326] rounded-full shadow-sm text-base font-medium whitespace-nowrap hover:bg-[#88bf42] hover:text-white transition-colors">
                              {role}
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};
RolesSection.defaultProps = { roles: [] as string[] };


// Flexible Hiring Models Section (RE-STYLED - Numbered steps with border/shadow)
const FlexibleHiringModelsSection = () => {
    // Animation setup
   const controls = useAnimation();
   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
   useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);


  return (
      <section ref={ref} className="py-20 bg-[#0F0326] text-white"> {/* Dark background */}
          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial="hidden"
                  animate={controls}
                  variants={sectionTextVariants}
              >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Hiring Models</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Choose the engagement model that best aligns with your project timeline and budget.
                  </p>
              </motion.div>

              <motion.div
                  className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
                  initial="hidden"
                  animate={controls}
                  variants={containerStaggerVariants}
              >
                  {hiringModels.map((model, index) => (
                      <motion.div
                          key={index}
                          className={`
                              bg-gray-800 p-6 rounded-lg shadow-xl h-full border border-gray-700
                              transition-all duration-300 ease-in-out
                              hover:scale-[1.02] hover:bg-gray-700 hover:border-[#88bf42]
                              flex flex-col
                          `}
                          variants={itemEntryVariants}
                          layout
                      >
                           
                          <div className="flex-grow">
                              <h3 className="text-xl font-semibold text-white mb-2">{model.title}</h3>
                              <p className="text-gray-400 text-base">{model.description}</p>
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};


// How It Works Section (RE-STYLED - Simple numbered list with borders)
const HowItWorksSection = () => {
     // Animation setup
   const controls = useAnimation();
   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
   useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);


   const itemVariants = {
       hidden: { opacity: 0, x: -50 },
       visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
   };


  return (
      <section ref={ref} className="py-20 bg-gray-100"> {/* Light gray background */}

          <div className="container mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                   initial="hidden"
                   animate={controls}
                   variants={sectionTextVariants}
              >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">How It Works</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Our streamlined process ensures a fast and efficient hiring experience.
                  </p>
              </motion.div>

              {/* Simple Stacked List */}
              <div className="max-w-3xl mx-auto space-y-8"> {/* Increased space */}
                  {howItWorksSteps.map((step, index) => {
                      return (
                          <motion.div
                              key={step.number}
                              className="flex items-start bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                               initial="hidden"
                               animate={controls}
                               variants={itemVariants}
                               transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                          >
                              {/* Number Circle */}
                              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#88BF42] text-white shadow-md mr-4">
                                  <span className="font-bold text-lg">{step.number}</span>
                              </div>

                              {/* Step Content */}
                              <div className="flex-grow">
                                  <h3 className="text-lg font-semibold text-[#0F0326] mb-1 leading-snug">{step.title}</h3> {/* Adjusted title size */}
                                  <p className="text-gray-700 text-base">{step.description}</p>
                              </div>
                          </motion.div>
                      );
                  })}
              </div>
          </div>
      </section>
  )
};


// Success Stories Section (RE-STYLED - Blocks with corner accent & quote icon)


// FAQ Section (RE-STYLED - Accordion with colored border and rounded items)
const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => { setActiveIndex(activeIndex === index ? null : index); };

   const controls = useAnimation();
   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
   useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);

    const answerVariants = {
        hidden: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            marginTop: '0.5rem',
            marginBottom: '1rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
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
        <section ref={ref} className="py-20 bg-white"> {/* Light gray background */}
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate={controls}
                    variants={sectionTextVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about hiring AI engineers through our platform
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto space-y-4"
                    initial="hidden"
                    animate={controls}
                    variants={containerStaggerVariants}
                >
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemEntryVariants}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:border-[#88bf42] group" // Border hover
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none transition-colors duration-300 ${activeIndex === index ? 'text-[#88bf42] font-semibold' : 'text-[#0F0326]'}`} // Text color changes on active/hover
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-lg">{item.question}</span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${activeIndex === index ? '!text-[#88bf42]' : ''}`} /> {/* Arrow color based on active */}
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
                                        className="px-6 text-gray-600"
                                    >
                                        <p className="text-base">{item.answer}</p>
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

// CTA Section (RE-STYLED - Dark background, white text)
const CTASection = () => {
   const controls = useAnimation();
   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
   useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);

    return (
      <section ref={ref} className="py-20 bg-[#0F0326] text-white relative overflow-hidden"> {/* Dark background */}
         {/* No background animation in CTA for this version */}

        {/* Content Container */}
        <div className="container mx-auto px-4 text-center relative z-10"> {/* Ensure content is above */}
          <motion.h2
            variants={sectionTextVariants}
            initial="hidden"
            animate={controls}
            className="text-4xl md:text-5xl font-bold mb-6 text-white" // White text
          >
            Ready to Build Your <span className="text-[#88bf42]">AI Team?</span>
          </motion.h2>
          <motion.p
            variants={sectionTextVariants}
            initial="hidden"
            animate={controls}
            className="text-xl mb-8 max-w-3xl mx-auto text-gray-300" // Lighter gray text
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Join forces with world-class AI engineers and accelerate your innovation journey.
          </motion.p>
          <motion.div
            variants={containerStaggerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-wrap justify-center gap-4"
          >
            
            <motion.div variants={itemEntryVariants}>
                <RouterLink to="/contact">
                <Button variant="outline" className=" bg-[#88bf42] border-white text-white hover:bg-white hover:text-[#0F0326] text-lg px-8 py-3 h-auto rounded-md shadow-lg"> {/* White border, white text, dark hover */}
                    Schedule a Consultation
                </Button>
                </RouterLink>
            </motion.div>
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


// Main component for the page
const AIEngineersPage = () => {
  useEffect(() => {
    document.title = "OnDemand AI | ThorSignia";
  }, []);

    // State for "Load More" functionality
    const [visibleEngineersCount, setVisibleEngineersCount] = useState(6); // Start showing 6
    const ENGINEERS_TO_LOAD = 3; // How many engineers to load per click


    const navigate = useNavigate();
    const location = useLocation(); // Get location for scrolling

    // Scroll to top on page load
    useEffect(() => {
         window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleHireClick = (engineerTitle: string) => {
        navigate(`/contact?role=${encodeURIComponent(engineerTitle)}`);
    };

    // Engineers data (12 engineers)
    const engineers: Engineer[] = [
        {
            title: "NLP Engineer",
            skills: ["BERT", "Hugging Face", "spaCy", "RAG", "LLMs"],
            description: "Expert in natural language processing, specializing in building advanced text analysis systems, chatbots, and language models. Experienced in implementing retrieval-augmented generation (RAG) and fine-tuning large language models for specific use cases."
        },
        {
            title: "Machine Learning Engineer",
            skills: ["PyTorch", "Scikit-learn", "Docker", "AWS", "Deployment"],
            description: "Specialists in developing and deploying production-ready ML models. Proficient in building scalable machine learning pipelines, model optimization, and implementing end-to-end ML solutions using cloud infrastructure."
        },
        {
            title: "Data Scientist",
            skills: ["Python", "TensorFlow", "Statistical Analysis", "SQL", "Visualization"],
            description: "Expert in transforming complex data into actionable insights. Combines statistical analysis with machine learning to solve business problems, create predictive models, and develop data-driven solutions for decision making."
        },
        {
            title: "Computer Vision Engineer",
            skills: ["OpenCV", "TensorFlow", "CUDA", "YOLO", "Object Detection"],
            description: "Specialized in developing real-time image and video processing systems. Experienced in object detection, image segmentation, and building computer vision solutions for industrial automation and quality control."
        },
        {
            title: "MLOps Engineer",
            skills: ["Kubernetes", "CI/CD", "MLflow", "GCP", "Monitoring"],
            description: "Expert in building and maintaining ML infrastructure and deployment pipelines. Focuses on automating ML workflows, monitoring model performance, and ensuring reliable scaling of AI systems in production environments."
        },
        {
            title: "AI Research Scientist",
            skills: ["Reinforcement Learning", "JAX", "PyTorch", "Algorithms"],
            description: "Conducts cutting-edge research in artificial intelligence and machine learning. Specializes in developing novel algorithms, improving existing models, and pushing the boundaries of AI capabilities in reinforcement learning and multi-agent systems."
        },
        {
            title: "Data Engineering Lead",
            skills: ["Spark", "Kafka", "Airflow", "Snowflake", "ETL"],
            description: "Expert in designing and implementing robust data pipelines for AI systems. Specializes in building scalable data architectures, optimizing data workflows, and ensuring efficient data processing for machine learning applications."
        },
        {
            title: "Computer Vision Specialist",
            skills: ["OpenCV", "Deep Learning", "Image Processing", "Custom Models"],
            description: "Advanced expertise in developing sophisticated computer vision solutions. Specializes in creating custom vision models for specific industry applications, including medical imaging, autonomous systems, and augmented reality."
        },
        {
            title: "AI Ethics Specialist",
            skills: ["Responsible AI", "Fairness", "Python", "Compliance"],
            description: "Focuses on ensuring ethical AI development and deployment. Specializes in developing fair and unbiased AI systems, implementing responsible AI practices, and creating governance frameworks for ethical AI implementation."
        },
       
    ];

    // Display engineers based on visibleEngineersCount
    const displayedEngineers = engineers.slice(0, visibleEngineersCount);
    const hasMoreEngineers = visibleEngineersCount < engineers.length;

    const handleLoadMore = () => {
        setVisibleEngineersCount(prevCount =>
            Math.min(prevCount + ENGINEERS_TO_LOAD, engineers.length)
        );
    };


     // Animation setup for Engineers Section (Keep existing logic)
    const engineersSectionControls = useAnimation(); // Renamed controls for clarity
    const [engineersSectionRef, engineersSectionInView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Renamed ref/inView
    useEffect(() => { if (engineersSectionInView) engineersSectionControls.start('visible'); }, [engineersSectionControls, engineersSectionInView]);

    // Hero Section Animation Controls
    const heroControls = useAnimation();
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Optional: If you want Hero animation to trigger on scroll

     // Trigger Hero animation immediately on mount (or use auto)
     useEffect(() => {
        heroControls.start('visible');
     }, [heroControls]);


    // Define the number of particles for the new animation
    const numHeroParticles = 100; // Increased number of particles significantly


    return (
        <div className="min-h-screen flex flex-col bg-gray-100"> {/* Base background changed to light gray */}
            <Navbar />

            {/* Hero Section (Redesigned with Particle Animation) */}
             <section ref={heroRef} className="pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-[#0F0326] relative overflow-hidden min-h-[45vh] flex items-center justify-center text-center"> {/* Reduced height slightly */}
                {/* Particle Background Animation - Made More Visible */}
                 <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                    {[...Array(numHeroParticles)].map((_, i) => {
                        // Random initial positions slightly outside edges
                        const initialX = -10 + Math.random() * 120 + '%'; // -10% to 110%
                        const initialY = -10 + Math.random() * 120 + '%'; // -10% to 110%

                         // Random animation properties
                         const duration = 15 + Math.random() * 10; // 15-25 seconds (adjusted)
                         const delay = Math.random() * 5; // 0-5 seconds delay
                         const size = 2 + Math.random() * 4; // Particle size (2px to 6px - increased)
                         const opacity = 0.2 + Math.random() * 0.3; // Base opacity (0.2 to 0.5 - increased)
                         const endX = -10 + Math.random() * 120 + '%';
                         const endY = -10 + Math.random() * 120 + '%';


                        return (
                            <motion.div
                                key={`hero-particle-${i}`} // Unique key
                                className="absolute rounded-full bg-[#88bf42]" // Solid green dots
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    left: `${initialX}`,
                                    top: `${initialY}`,
                                    opacity: opacity, // Base opacity
                                }}
                                initial={{ opacity: 0 }} // Fade in initially
                                animate={{
                                    opacity: [opacity, opacity * 1.5, opacity], // Subtle pulse opacity
                                     x: [0, Math.random() * 30 - 15, 0], // Subtle horizontal drift (increased)
                                     y: [0, Math.random() * 30 - 15, 0], // Subtle vertical drift (increased)
                                }}
                                transition={{
                                    duration: duration, // Use random duration
                                    repeat: Infinity, // Keep animating indefinitely
                                    ease: "easeInOut", // Smooth animation
                                    delay: delay, // Use random start delay
                                }}
                            />
                        );
                    })}
                 </div>


                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                     className="relative z-10 max-w-4xl mx-auto px-4 py-2" // Added padding to content
                >
                       <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-normal md:leading-tight"> {/* Increased leading for h1 */}
                        Expert AI <span className='text-[#88BF42]'>Engineering</span> Teams, On Demand
                    </h1>
                    <p className="font-light text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed"> {/* Increased leading for paragraph */}                        Instantly scale your capabilities with vetted, world-class AI and Machine Learning talent.
                    </p>
                     {/* Added CTA Buttons to Hero */}
                    <motion.div
                         variants={containerStaggerVariants} // Use container stagger for buttons
                         initial="hidden"
                         animate="visible" // Ensure buttons animate in after text
                         transition={{ delay: 1.0 }} // Delay buttons until after text
                         className="flex flex-wrap justify-center gap-4"
                    >
                       <motion.div variants={itemEntryVariants}>
                            <RouterLink to="/contact">
                                <Button className="bg-[#88bf42] hover:bg-[#7aad3a] text-white text-lg px-8 py-3 h-auto rounded-md shadow-lg">
                                    Hire Your AI Team
                                </Button>
                            </RouterLink>
                       </motion.div>
                       
                    </motion.div>
                </motion.div>
            </section>

            {/* Engineers Section */}
            <section ref={engineersSectionRef} className="py-20 bg-gray-100"> {/* White background */}
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate={engineersSectionControls}
                        variants={sectionTextVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">Specialized Roles</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Find highly skilled AI engineers tailored to your specific project needs.
                        </p>
                    </motion.div>

                    {/* Use AnimatePresence to handle exit animations when engineers are hidden */}
                    <motion.div
                         layout // Added layout for smooth transitions when items are added/removed
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                         initial="hidden"
                         animate={engineersSectionControls} // Use correct controls
                         variants={containerStaggerVariants}
                    >
                        <AnimatePresence>
                            {displayedEngineers.map((engineer) => (
                                <motion.div
                                    key={engineer.title} // Using engineer.title as key is more stable
                                    className="bg-white rounded-lg shadow-md p-6 border border-[#88bf42] h-full hover:shadow-xl transition-all duration-300 relative flex flex-col group cursor-pointer"
                                    variants={itemEntryVariants} // Using itemEntryVariants for new items fading/sliding in
                                    layout // Added layout for smooth transitions
                                    exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }} // Keep exit animation
                                    onClick={() => handleHireClick(engineer.title)}
                                >
                                     {/* Bottom border on hover */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#88bf42] origin-bottom border-b-2 border-[#88bf42] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>

                                    <div className="flex flex-col h-full border-[#88bf42]">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-[#0F0326] mb-2 leading-snug">{engineer.title}</h4>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {engineer.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-800"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-gray-700 text-base mb-4 line-clamp-3">{engineer.description}</p>
                                        </div>
                                         <div className="mt-auto pt-4 text-right">
                                             <span className="inline-flex items-center text-[#88bf42] font-semibold text-sm group-hover:underline">
                                                 Hire Now <ArrowRight className="ml-1 w-4 h-4" />
                                             </span>
                                         </div>
                                    </div>
                                </motion.div>
                            ))}
                         </AnimatePresence>
                    </motion.div>


       
                </div>
            </section>


            {/* Why Hire From Us? Section */}
            <WhyHireSection reasons={whyHireReasons} />

            {/* 3. Roles You Can Hire Section */}
            <RolesSection roles={roles} />

            {/* 4. Flexible Hiring Models Section */}
            <FlexibleHiringModelsSection />

            {/* 5. How It Works Section */}
            <HowItWorksSection />

          
            {/* 7. FAQ Section */}
            <FAQSection />

            {/* 8. CTA Section */}
            <CTASection />


            <Footer />

        </div>
    );
};

export default AIEngineersPage;
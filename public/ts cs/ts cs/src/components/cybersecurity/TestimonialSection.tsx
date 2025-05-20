import React from 'react';
import { motion } from 'framer-motion';

// We'll implement our own version without AnimatePresence
interface TestimonialSectionProps {
  bgColor?: string;
  testimonialItems?: Testimonial[];
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Their AI cybersecurity expertise has been invaluable in protecting our machine learning models from potential data breaches and attacks.",
    name: "Sarah Johnson",
    title: "CTO",
    company: "IntelliTech Solutions",
    image: "/images/testimonials/sarah.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "The vulnerability assessment identified critical weaknesses in our AI platform that we weren't aware of. Their team helped us implement robust security measures.",
    name: "Michael Chen",
    title: "CISO",
    company: "DataFlow AI",
    image: "/images/testimonials/michael.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "Their cloud security assessment transformed how we approach security in our AI infrastructure. We've seen a 70% reduction in security incidents.",
    name: "Priya Sharma",
    title: "VP of Engineering",
    company: "NeuralSystems",
    image: "/images/testimonials/priya.jpg",
    rating: 5
  }
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ 
  bgColor = "bg-white", 
  testimonialItems = testimonials 
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialItems.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialItems.length) % testimonialItems.length);
  };

  React.useEffect(() => {
    // Reset animation lock after transition completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Variants for testimonial card animation
  const testimonialVariants = {
    initial: {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    }
  };

  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
            What Our <span className="text-[#88bf42]">Clients</span> Say
          </h2>
          <p className="text-[#696869] max-w-3xl mx-auto text-lg">
            Hear from organizations that have strengthened their security posture with our cybersecurity solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden py-6">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="initial"
              animate="animate"
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-10 shadow-xl border border-[#88bf42]/10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#88bf42] flex-shrink-0 shadow-lg relative">
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-[#88bf42]/20 animate-pulse"></div>
                    <img 
                      src={testimonialItems[activeIndex].image} 
                      alt={testimonialItems[activeIndex].name}
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                  
                  <div className="flex-1">
                    {/* Rating Stars */}
                    {testimonialItems[activeIndex].rating && (
                      <div className="flex mb-4 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <motion.svg 
                            key={i}
                            className={`w-5 h-5 ${i < testimonialItems[activeIndex].rating! ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    )}
                    
                    <div className="relative mb-6">
                      <svg className="w-12 h-12 text-[#88bf42]/20 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8v6a6 6 0 01-6 6H2v2c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6h-2zm20 0v6a6 6 0 01-6 6h-2v2c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6h-2z" />
                      </svg>
                      <p className="text-[#0f0326] text-lg md:text-xl mb-6 italic relative z-10 drop-shadow-sm">"{testimonialItems[activeIndex].quote}"</p>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h4 className="text-[#88bf42] font-bold text-xl">{testimonialItems[activeIndex].name}</h4>
                      <p className="text-[#696869]">
                        <span className="font-medium">{testimonialItems[activeIndex].title}</span>, {testimonialItems[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            {/* Pagination dots */}
            <div className="flex space-x-2 mb-6">
              {testimonialItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (isAnimating) return;
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                    setIsAnimating(true);
                  }}
                  className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-[#88bf42]' : 'bg-gray-300'} transition-all duration-300 hover:bg-[#88bf42]/70`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none px-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all pointer-events-auto border border-gray-100 hover:border-[#88bf42]/30"
              disabled={isAnimating}
            >
              <svg className="w-5 h-5 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all pointer-events-auto border border-gray-100 hover:border-[#88bf42]/30"
              disabled={isAnimating}
            >
              <svg className="w-5 h-5 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection; 
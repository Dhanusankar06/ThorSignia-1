import React, { useState } from 'react';
import styles from './TestimonialSection.module.css';

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

const TestimonialSection = ({ 
  bgColor = "bg-white", 
  testimonialItems = testimonials 
}: TestimonialSectionProps) => {
  return (
    <section className={`py-24 ${bgColor}`}>
      <div className={`max-w-6xl mx-auto px-4 ${styles.testimonialCenterContainer}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
            What Our <span className="text-[#88bf42]">Clients</span> Say
          </h2>
          <p className="text-[#696869] max-w-3xl mx-auto text-lg">
            Hear from organizations that have strengthened their security posture with our cybersecurity solutions.
          </p>
        </div>
        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {testimonialItems.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-10 shadow-xl border border-[#88bf42]/10 flex flex-col items-center text-center h-full w-full max-w-md"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#88bf42] flex-shrink-0 shadow-lg relative mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
              {testimonial.rating && (
                <div className="flex mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              <div className="relative mb-6">
                <svg className="w-12 h-12 text-[#88bf42]/20 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6a6 6 0 01-6 6H2v2c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6h-2zm20 0v6a6 6 0 01-6 6h-2v2c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6h-2z" />
                </svg>
                <p className="text-[#0f0326] text-lg md:text-xl mb-6 italic relative z-10 drop-shadow-sm">"{testimonial.quote}"</p>
              </div>
              <div className="text-center">
                <h4 className="text-[#88bf42] font-bold text-xl">{testimonial.name}</h4>
                <p className="text-[#696869]">
                  <span className="font-medium">{testimonial.title}</span>, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
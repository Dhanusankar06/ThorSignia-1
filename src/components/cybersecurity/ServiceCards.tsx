import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
  link: string;
  featured?: boolean;
}

const services = [
  {
    title: "Vulnerability Assessment & Pen Testing",
    description: "Identify and address security weaknesses before they can be exploited. Our team conducts thorough assessments and simulated attacks to find vulnerabilities.",
    icon: "/icons/vulnerability.svg",
    link: "/penetration-testing",
    featured: false
  },
  {
    title: "Cloud Security Assessments",
    description: "Evaluate and enhance the security of your cloud infrastructure. We ensure your cloud environment adheres to best practices and compliance requirements.",
    icon: "/icons/cloud-security.svg",
    link: "/cloud-security",
    featured: false
  },
  {
    title: "Offensive Security",
    description: "Proactively identify vulnerabilities through ethical hacking techniques. Our offensive security approach helps strengthen your overall security posture.",
    icon: "/icons/offensive-security.svg",
    link: "/offensive-security",
    featured: false
  },
  {
    title: "Red Teaming Services",
    description: "Simulate sophisticated cyber attacks to test your defense capabilities. Our red team identifies security gaps through real-world attack scenarios.",
    icon: "/icons/red-team.svg",
    link: "/red-teaming",
    featured: false
  },
  {
    title: "IOT/OT Security",
    description: "Protect your connected devices and operational technology. We secure your IoT ecosystem against emerging threats unique to connected systems.",
    icon: "/icons/iot-security.svg",
    link: "/iot-security",
    featured: false
  },
  {
    title: "vCISO",
    description: "Access expert security leadership without the full-time cost. Our virtual CISO services provide strategic security guidance tailored to your organization.",
    icon: "/icons/vciso.svg",
    link: "/vciso-services",
    featured: false
  },
  {
    title: "Training & Awareness",
    description: "Empower your team with cybersecurity knowledge. Our training programs build security awareness and prepare your staff to recognize and respond to threats.",
    icon: "/icons/training.svg",
    link: "/securitytraining",
    featured: true
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay, link, featured = false }) => {
  return (
    <Link to={link}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        className={`bg-white rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col border ${featured ? ' shadow-lg scale-105' : 'border-gray-200'} hover:border-[#88bf42]/50  transition-all duration-300`}
      >
        <div className="p-5 sm:p-6 lg:p-8 flex flex-col h-full">
          <div className="mb-5 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#88bf42]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#88bf42]/20 transition-all">
              <img src={icon} alt={title} className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0f0326] mb-2 sm:mb-3 group-hover:text-[#88bf42] transition-colors duration-300">{title}</h3>
            <p className="text-[#696869] text-sm sm:text-base leading-relaxed">{description}</p>
          </div>
          <div className="mt-auto pt-3 sm:pt-4 flex items-center text-[#88bf42] font-medium">
            <span className="mr-2">Learn more</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
        <div className="h-1 w-0 group-hover:w-full bg-[#88bf42] transition-all duration-500"></div>
      </motion.div>
    </Link>
  );
};

const ServiceCards: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
            <span className="text-[#88bf42] font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f0326] mb-6">
            Comprehensive <span className="text-[#88bf42]">Cybersecurity</span> Solutions
          </h2>
          <p className="text-[#696869] max-w-3xl mx-auto text-lg">
            Protecting your digital assets with advanced security services tailored to meet the challenges of today's threat landscape.
          </p>
        </motion.div>
        
        {/* First row of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
              link={service.link}
              featured={service.featured}
            />
          ))}
        </div>
        
     {/* Featured card centered in the second column of 3-column layout */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <div className="lg:col-start-2">
    {services
      .filter(service => service.featured)
      .map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          delay={6}
          link={service.link}
          featured={false} // ensure same style as others
        />
      ))}
  </div>
</div>



        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards; 
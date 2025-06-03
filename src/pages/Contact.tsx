'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Mail, Linkedin, Twitter, Instagram, Github, CheckCircle2, MapPin, Phone, Facebook, MessageCircle, TrendingUp, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// WorldMap import is not needed as we are using an image now

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Kept pulseAnimation, though it's not applied to the map div itself
const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    requestType: '', // This field is in the state but not used in the form currently
    message: '',
    authorizeContact: false
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // This handler is present but the select is commented out in the form. Kept for completeness.
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, requestType: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, authorizeContact: checked }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Ensure you have the /api/contacts endpoint set up correctly
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Pass all relevant data needed by your backend
        body: JSON.stringify({
          name: formData.firstName, // Use firstName as the name field for backend
          email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Not provided', // Ensure company is always provided
          // requestType: formData.requestType, // Include if select is added back
          message: formData.message,
          authorizeContact: formData.authorizeContact, // Include if backend needs confirmation
        })
      });
      if (!response.ok) {
         // Attempt to read error message from response body if available
        const errorBody = await response.json();
        throw new Error(errorBody.message || `Failed to submit contact form. Status: ${response.status}`);
      }
      setIsSubmitted(true);
      // Clear form data on successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        requestType: '',
        message: '',
        authorizeContact: false
      });
      // Hide success message after a delay
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error: any) {
      console.error('Submission error:', error);
      alert(`There was an error submitting the form: ${error.message}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Removed the gradient background from the main div
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Increased height slightly for better visual balance */}
        <div className="h-[50vh] max-h-[450px] relative overflow-hidden w-full flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E]">
          {/* SVG grid pattern overlay */}
          <div className="absolute inset-0 opacity-30 z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#88bf42" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-hero-grid)" />
            </svg>
          </div>
          {/* Animated floating dots */}
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: i % 2 === 0 ? '#88bf42' : '#009898',
                opacity: 0.1 + Math.random() * 0.1
              }}
              animate={{
                y: [0, Math.random() * 20 - 10, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[#171E2E] opacity-70 z-0" />
          <div className="max-w-2xl mx-auto text-center z-20 relative">
            <h1 className="text-3xl md::text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-white"> Get in </span>
              <span className="text-[#88BF42]">Touch</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
           We'd love to hear from you. Reach out to discuss how our intelligent voice, chat, and campaign automation solutions can help your business grow.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <Link
                to="/services"
                className="bg-white text-[#88BF42] border border-[#88BF42] px-6 py-3 rounded-md font-semibold shadow hover:bg-[#88BF42] hover:text-white transition-all text-base inline-block"
              >
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            >
              <motion.div
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F0326] mb-3">Reach Out</h2>
                <p className="text-[#696869] text-base md:text-lg">Ready to discuss how thorsignia can help your organization? Simply fill out this form to contact sales.</p>
              </motion.div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#88BF42]/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[#88BF42]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F0326] mb-3">Thank You!</h3>
                  <p className="text-[#696869] text-base md:text-lg mb-6">Your message has been sent successfully. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#0F0326]">First Name*</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#0F0326]">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                         // Removed required based on screenshot
                        className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#0F0326]">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                       // Removed required based on screenshot
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0F0326]">Email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0F0326]">Contact Number*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0F0326]">Any Questions?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      required // Message is required
                      className="min-h-[80px] border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox
                      id="authorizeContact"
                      checked={formData.authorizeContact}
                      onCheckedChange={handleCheckboxChange}
                      className="border-gray-300 text-[#88BF42] mt-1 data-[state=checked]:bg-[#88BF42] data-[state=checked]:text-white"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="authorizeContact"
                        className="text-sm text-[#696869] font-normal leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I authorise ThorSignia & its representatives to contact me with updates and notifications via Email. This will override DND/NDNC.*
                      </Label>
                    </div>
                  </div>
                  <motion.div
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading || !formData.authorizeContact}
                      className="w-full bg-[#88BF42] hover:bg-[#88BF42]/90 text-white py-6  text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Submit Request'
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full flex flex-col"
              >
                {/* Title */}
                <h2 className="text-3xl font-bold text-[#0F0326] mb-4 flex items-center gap-2">
                    <MapPin className="inline-block w-7 h-7 text-[#88BF42] mr-1" />
                    Our Office
                </h2>

                {/* Intro Paragraph */}
                <p className="text-[#696869] text-base md:text-lg mb-6 leading-relaxed">
                    We’re more than happy to connect with you! Whether you have questions, need expert guidance, or are exploring innovative ways to grow your business — our dedicated team is here to help. Reach out today and discover how our cutting-edge solutions can drive your success and transform your vision into reality.
                </p>

                {/* Why Reach Out? Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0F0326] mb-4">Why Reach Out to Us?</h3>
                    <div className="space-y-3">
                        {/* List items */}
                        <div className="flex items-center gap-3">
                            <MessageCircle className="w-6 h-6 text-[#88BF42] flex-shrink-0" />
                            <p className="text-[#696869] text-base md:text-lg">Discuss your project needs and challenges.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-[#88BF42] flex-shrink-0" />
                            <p className="text-[#696869] text-base md:text-lg">Explore strategies for business growth and innovation.</p>
                        </div>
                        <div className="flex items-center gap-3">
                             <Zap className="w-6 h-6 text-[#88BF42] flex-shrink-0" />
                            <p className="text-[#696869] text-base md:text-lg">Learn about our specific services and solutions.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Details - Vertical Flex Layout */}
                <div className="flex flex-col space-y-6 mb-8">

                  {/* Phone Item */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Phone</h3>
                      <p className="text-[#696869] text-base md:text-lg">+(91) 90080 97780</p>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Email</h3>
                      <p className="text-[#696869] text-base md:text-lg">info@thorsignia.online</p>
                    </div>
                  </div>

                  {/* Hours Item */}
                  {/* <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Hours</h3>
                      <p className="text-[#696869] text-base md:text-lg">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div> */}

                </div> {/* End Contact Details Vertical Flex Container */}

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                  <a href="https://twitter.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                  <a href="https://instagram.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                  <a href="https://facebook.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === Modified: We Are Global Section === */}
      <section className="py-12 md:py-20 bg-[#f5f8ff]"> {/* Added a subtle background color */}
          <div className="container mx-auto px-4">
              {/* Section Title */}
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="text-center mb-12"
              >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">
                      <Globe className="inline-block w-8 h-8 text-[#88BF42] mr-2 mb-1" /> {/* Added Globe icon to title */}
                      Our Global Reach
                  </h2>
                  <p className="text-[#696869] text-base md:text-lg max-w-2xl mx-auto">
                      While our office is based in Bengaluru, our impact spans across continents. We work with clients globally, bringing our innovative solutions to diverse markets and helping businesses succeed wherever they are.
                  </p>
              </motion.div>

              {/* Image Map with Locations - Full width map */}
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="mt-8 rounded-2xl shadow-xl overflow-hidden bg-white p-0 border border-gray-100 w-full"
              >
                  {/* Relative container for the map image and absolutely positioned markers */}
                  {/* Increased height and removed padding for full-width appearance */}
                  <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
                      {/* Map Image - Using the path provided by the user */}
                      <img
                          src="/assets/world.png"
                          alt="World Map showing global presence"
                          className="w-full h-full object-cover"
                      />

                      {/* Location Markers (Dots) and Labels - Accurately positioned */}
                      
                      {/* USA - More accurate position */}
                      <div className="absolute z-10" style={{ top: '38%', left: '19%' }}>
                          <div className="w-4 h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-[#0F0326] bg-white/80 px-2 py-1 rounded whitespace-nowrap">USA</span>
                      </div>

                      {/* UAE - More accurate position */}
                      <div className="absolute z-10" style={{ top: '42%', left: '60%' }}>
                          <div className="w-4 h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-[#0F0326] bg-white/80 px-2 py-1 rounded whitespace-nowrap">UAE</span>
                      </div>

                      {/* Hyderabad - More accurate position */}
                      <div className="absolute z-10" style={{ top: '49%', left: '70%' }}>
                          <div className="w-4 h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-[#0F0326] bg-white/80 px-2 py-1 rounded whitespace-nowrap">Hyderabad</span>
                      </div>

                      {/* Bangalore (Bengaluru) - More accurate position with label BELOW dot */}
                      <div className="absolute z-10" style={{ top: '50%', left: '69%' }}>
                          <div className="w-5 h-5 bg-[#88BF42] rounded-full animate-pulse"></div>
                          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-[#0F0326] bg-white/80 px-2 py-1 rounded whitespace-nowrap">Bangalore</span>
                      </div>

                      {/* Malaysia - More accurate position */}
                      <div className="absolute z-10" style={{ top: '51%', left: '76%' }}>
                          <div className="w-4 h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-[#0F0326] bg-white/80 px-2 py-1 rounded whitespace-nowrap">Malaysia</span>
                      </div>

                      {/* Singapore - More accurate position with label BELOW dot */}
                      <div className="absolute z-10" style={{ top: '53%', left: '77%' }}>
                          <div className="w-4 h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-[#0F0326] bg-white/80 px-2 py-1 rounded whitespace-nowrap">Singapore</span>
                      </div>
                  </div>

                  
              </motion.div>
          </div>
      </section>
      {/* === End: We Are Global Section === */}
      <Footer />
    </div>

  );
};

export default ContactPage;
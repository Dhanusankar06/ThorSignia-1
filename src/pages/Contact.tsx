'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Mail, Linkedin, Twitter, Instagram, Github, CheckCircle2, MapPin, Phone, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotDemo from '@/components/ChatbotDemo';
import { TextGenerateEffect } from '@/components/layout/text-generate-effect';

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
    requestType: '',
    message: '',
    authorizeContact: false
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.firstName + ' ' + formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        })
      });
      if (!response.ok) throw new Error('Failed to submit contact form.');
      setIsSubmitted(true);
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          requestType: '',
          message: '',
          authorizeContact: false
        });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f8ff]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="h-[45vh] max-h-[420px] relative overflow-hidden w-full flex flex-col justify-center items-center px-0 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E]">
          {/* SVG grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 z-0">
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
                opacity: 0.16 + Math.random() * 0.16
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.16, 0.32, 0.16],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-white to-transparent opacity-70 z-0" />
          <div className="max-w-2xl mx-auto text-center z-10 relative">
            {/* Main Heading - split color */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="block text-white">Start the Conversation..</span>
              <span className="block text-[#88BF42]">Build the Future.</span>
            </h1>
            {/* Subheading */}
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Power your business with intelligent voice, chat, and campaign automation.
            </p>
            {/* Buttons */}
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
      <section className="py-12 md:py-20 relative z-10">
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
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F0326] mb-3">Reach Out</h2>
                <p className="text-[#696869]">Ready to discuss how thorsignia can help your organization? Simply fill out this form to contact sales.</p>
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
                  <p className="text-[#696869] mb-6">Your message has been sent successfully. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={slideInLeft} className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#0F0326]">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        required
                        className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                      />
                    </motion.div>
                    
                    <motion.div variants={slideInRight} className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#0F0326]">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        required
                        className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                      />
                    </motion.div>
                  </div>

                  {/* Company Field */}
                  <motion.div variants={fadeIn} className="space-y-2">
                    <Label htmlFor="company" className="text-[#0F0326]">Company*</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="space-y-2">
                    <Label htmlFor="email" className="text-[#0F0326]">Email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0F0326]">Contact Number*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="space-y-2">
                    <Label htmlFor="message" className="text-[#0F0326]">Any Questions?*</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      required
                      className="min-h-[150px] border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start space-x-2 pt-2"
                  >
                    <Checkbox 
                      id="authorizeContact" 
                      checked={formData.authorizeContact}
                      onCheckedChange={handleCheckboxChange}
                      className="border-gray-300 text-[#88BF42] mt-1"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="authorizeContact"
                        className="text-sm text-[#696869] font-normal leading-snug"
                      >
                        I authorise ThorSignia & its representatives to contact me with updates and notifications via Email/SMS/What'sApp/Call. This will override DND/NDNC.*
                      </Label>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isLoading || !formData.authorizeContact}
                      className="w-full bg-[#88BF42] hover:bg-[#88BF42]/90 text-white py-6  text-lg font-medium"
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
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Office Address */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#0F0326] mb-6 flex items-center gap-2"><MapPin className="inline-block w-6 h-6 text-[#88BF42] mr-1" />Our Office</h2>
<p className="text-[#696869] mb-4"> <span className="text-[#88BF42]">Visit Us or Get in Touch With Our Team </span><br></br>We’re more than happy to connect with you! Whether you have questions, need expert guidance, or are exploring innovative ways to grow your business — our dedicated team is here to help. Reach out today and discover how our cutting-edge solutions can drive your success and transform your vision into reality.</p>
<div className="space-y-4">
  <div className="flex items-center gap-2">
    <MapPin className="w-5 h-5 text-[#88BF42]" />
    <div>
      <h3 className="font-normal text-[#0F0326]">Address</h3>
      <p className="text-[#696869]">HSR Layout 7th sector, Bengaluru, Karnataka</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Phone className="w-5 h-5 text-[#88BF42]"/>
    <div>
      <h3 className="font-normal text-[#0F0326]">Phone</h3>
      <p className="text-[#696869]">+(91) 90080 97780</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Mail className="w-5 h-5 text-[#88BF42]" />
    <div>
      <h3 className="font-normal text-[#0F0326]">Email</h3>
      <p className="text-[#696869]">contact@thorsignia.com</p>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <svg className="w-5 h-5 text-[#88BF42]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3m-4 4v10" /></svg>
    <div>
      <h3 className="font-normal text-[#0F0326]">Hours</h3>
      <p className="text-[#696869]">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
    </div>
  </div>
  <div className="flex items-center gap-3 mt-4">
    <a href="https://www.linkedin.com/company/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
    <a href="https://twitter.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-5 h-5 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
    <a href="https://instagram.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-5 h-5 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
    <a href="https://facebook.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="w-5 h-5 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
  </div>
</div>
              </motion.div>
              
              {/* Map */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 overflow-hidden"
              >
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7688247016406!2d77.63390781482143!3d12.920080790887566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b8bb5b0b5b%3A0x3a5c9b5b5b5b5b5b!2sThor%20Signia!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thor Signia Office Location"
                  />
                </div>
                <div className="mt-3 text-center">
                  <a 
                    href="https://maps.app.goo.gl/rxrFiU2zt523tX9y7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#88BF42] hover:text-[#0F0326] font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <MapPin className="w-4 h-4" /> Visit Thor Signia on Google Maps
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatbotDemo /> // Render ChatbotDemo
    </div>
  );
};

export default ContactPage;

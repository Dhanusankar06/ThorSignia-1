'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Mail, Linkedin, Twitter, Instagram, Github, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Hero background image with blur */}
        <div className="absolute inset-0 z-0">
          <img
            src="/download.jpeg"
            alt="Contact Us Hero"
            className="object-cover object-center w-full h-full"
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#88bf42]/30 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              Get in Touch with <span className="text-[#88BF42]">Thorsignia</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
            >
              We'd love to hear from you. Let's build something intelligent together.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#88BF42]/30 filter blur-3xl z-0"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[#88BF42]/40 filter blur-2xl z-0"
        />
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
                <h2 className="text-2xl font-bold text-[#0F0326] mb-6">Our Office</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#0F0326]">Address</h3>
                    <p className="text-[#696869]">945, 1st Floor, 5th Main Rd, Sector 7<br /> HSR Layout, Bengaluru, Karnataka 560102</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-[#0F0326]">Phone</h3>
                    <p className="text-[#696869]">+(91) 90080 97780</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-[#0F0326]">Email</h3>
                    <p className="text-[#88BF42]">contact@thorsignia.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-[#0F0326]">Hours</h3>
                    <p className="text-[#696869]">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143526147!2d-122.40058638468204!3d37.78532921975701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd61a4f48b4427!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1654234534567!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thorsignia Office Location"
                  />
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#0F0326] mb-6">Connect With Us</h2>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all"
                    >
                      <Linkedin size={20} />
                    </motion.div>
                  </Link>
                  
                  <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all"
                    >
                      <Twitter size={20} />
                    </motion.div>
                  </Link>
                  
                  <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all"
                    >
                      <Instagram size={20} />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;

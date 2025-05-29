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

import { TextGenerateEffect } from '@/components/layout/text-generate-effect';
import { WorldMap } from '@/components/ui/world-map';

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
      }, 5000); // Clear form after 5 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f8ff]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Increased height slightly for better visual balance */}
        <div className="h-[50vh] max-h-[450px] relative overflow-hidden w-full flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E]">
          {/* SVG grid pattern overlay - MADE MORE VISIBLE */}
          <div className="absolute inset-0 opacity-30 z-10"> {/* Increased opacity to 30% and Z-index to 10 */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#88bf42" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-hero-grid)" />
            </svg>
          </div>
          {/* Animated floating dots (keep z-0) */}
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
          {/* Gradient overlay (keep z-0) */}
          {/* This solid overlay was potentially hiding the grid. Keeping its z-index low */}
          <div className="absolute inset-0 bg-[#0F0326] opacity-50 z-0" /> {/* Added opacity to let gradient below show a bit */}
          <div className="max-w-2xl mx-auto text-center z-20 relative"> {/* Increased z-index to ensure text is above grid */}
            {/* Main Heading - split color */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-white"> Get in </span>
              <span className="text-[#88BF42]">Touch</span>
            </h1>
            {/* Subheading */}
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
           We'd love to hear from you. Reach out to discuss how our intelligent voice, chat, and campaign automation solutions can help your business grow.
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
                variants={pulseAnimation} // Consider removing or reducing pulse if it's distracting
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F0326] mb-3">Reach Out</h2>
                {/* Added responsive font size */}
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
                  {/* Added responsive font size */}
                  <p className="text-[#696869] text-base md:text-lg mb-6">Your message has been sent successfully. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={slideInLeft} className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#0F0326]">First Name*</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
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
                        required
                        className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                      />
                    </motion.div>
                  </div>

                  {/* Company Field */}
                  <motion.div variants={fadeIn} className="space-y-2">
                    <Label htmlFor="company" className="text-[#0F0326]">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}

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
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn} className="space-y-2">
                    <Label htmlFor="message" className="text-[#0F0326]">Any Questions?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      required
                      className="min-h-[80px] border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
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
                      {/* Label text is typically smaller, leaving it as is */}
                      <Label
                        htmlFor="authorizeContact"
                        className="text-sm text-[#696869] font-normal leading-snug"
                      >
                        I authorise ThorSignia & its representatives to contact me with updates and notifications via Email. This will override DND/NDNC.*
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

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Address - Vertical Contact Details */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn} // Keep your Framer Motion variants
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full flex flex-col" // Keep main container styles
              >
                {/* Title */}
                <h2 className="text-3xl font-bold text-[#0F0326] mb-4 flex items-center gap-2">
                    <MapPin className="inline-block w-7 h-7 text-[#88BF42] mr-1" />
                    Our Office
                </h2>

                {/* Intro Paragraph - Font size updated */}
                {/* Removed the green span and br tag as the text flows better without it */}
                <p className="text-[#696869] text-base md:text-lg mb-6 leading-relaxed">
                    We’re more than happy to connect with you! Whether you have questions, need expert guidance, or are exploring innovative ways to grow your business — our dedicated team is here to help. Reach out today and discover how our cutting-edge solutions can drive your success and transform your vision into reality.
                </p>

                {/* Why Reach Out? Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0F0326] mb-4">Why Reach Out to Us?</h3>
                    <div className="space-y-3">
                        {/* List items - Font size updated */}
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

                {/* Contact Details - Vertical Flex Layout on all screen sizes */}
                <div className="flex flex-col space-y-6 mb-8">

                  {/* Address Item - Font size updated for value text */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Address</h3>
                      <p className="text-[#696869] text-base md:text-lg">
                        945, 1st Floor, 5th Main Rd, Sector 7, HSR Layout,<br />
                        Bengaluru, Karnataka 560102
                      </p>
                    </div>
                  </div>

                  {/* Phone Item - Font size updated for value text */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Phone</h3>
                      <p className="text-[#696869] text-base md:text-lg">+(91) 90080 97780</p>
                    </div>
                  </div>

                  {/* Email Item - Font size updated for value text */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Email</h3>
                      <p className="text-[#696869] text-base md:text-lg">info@thorsignia.in</p>
                    </div>
                  </div>

                  {/* Hours Item - Font size updated for value text */}
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3m-4 4v10" /></svg>
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Hours</h3>
                      <p className="text-[#696869] text-base md:text-lg">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                </div> {/* End Contact Details Vertical Flex Container */}

                {/* Social Media Links - Adjusted margin */}
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                  <a href="https://twitter.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                  <a href="https://instagram.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                  <a href="https://facebook.com/thorsignia" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="w-6 h-6 text-[#88BF42] hover:text-[#0F0326] transition" /></a>
                </div>
              </motion.div>
               {/* Optional: Add the Google Map iframe here if you want */}
               {/* <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={fadeIn}
                   className="rounded-2xl shadow-lg overflow-hidden border border-gray-100 w-full h-80 lg:h-full" // Adjusted height classes
               >
                   <iframe
                       src="YOUR_GOOGLE_MAPS_EMBED_URL" // <-- Replace with your actual embed URL
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       allowFullScreen={true}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Office Location"
                   ></iframe>
               </motion.div> */}
            </div>

          </div>
        </div>
      </section>

      {/* === NEW: We Are Global Section === */}
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

              {/* Interactive Map */}
              <div className="dark:bg-black bg-white w-full">
      <WorldMap
        dots={[
          {
            start: { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
            end: { lat: 12.9716, lng: 77.5946, label: "" },
          },
          {
            start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
            end: { lat: 17.3850, lng: 78.4867, label: "" },
          },
          {
            start: { lat: 37.0902, lng: -95.7129, label: "USA" },
            end: { lat: 37.0902, lng: -95.7129, label: "" },
          },
          {
            start: { lat: 23.4241, lng: 53.8478, label: "UAE" },
            end: { lat: 23.4241, lng: 53.8478, label: "" },
          },
          {
            start: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
            end: { lat: 1.3521, lng: 103.8198, label: "" },
          },
          {
            start: { lat: 4.2105, lng: 101.9758, label: "Malaysia" },
            end: { lat: 4.2105, lng: 101.9758, label: "" },
          },
        ]}
      />
    </div>
          </div>
      </section>
      {/* === End: We Are Global Section === */}
<Footer />
    </div>

  );
};

export default ContactPage;
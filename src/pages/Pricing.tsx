'use client';

import React, { useState, useEffect } from 'react'; // Import useState
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CheckCircle2, CreditCard, DollarSign, Lock } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for Link
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

// Animation for payment form reveal
const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};


const PricingPage = () => {
  useEffect(() => {
    document.title = "Pricing | ThorSignia";
  }, []);
  // State to manage the selected tier for payment - Initialize with a default tier ID
  // NOTE: In a real app, this would likely come from a state passed to the page
  // or extracted from the URL (e.g., /buy/pro)
  const [selectedTierId, setSelectedTierId] = useState('pro'); // Default to 'pro' package

  // State to manage the selected payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card'); // 'card' or 'upi'

  // State to manage card payment input values
  const [cardDetails, setCardDetails] = useState({
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      zipCode: '',
      cardName: '',
  });

  // State to manage UPI input value
  const [upiId, setUpiId] = useState('');

  // --- Handlers for input changes (Controlled Components) ---
  const handleCardInputChange = (e) => {
      const { name, value } = e.target;
      setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleUpiInputChange = (e) => {
      setUpiId(e.target.value);
  };
  // ---------------------------------------------------------


  // Define your SERVICE/PACKAGE tiers (kept as source for details displayed in payment form)
  const serviceTiers = [
    {
      id: 'basic',
      title: "AI Quick Start",
      description: "Rapid setup for basic AI model deployment.",
      features: [
        "1 Standard Model Fine-tuning",
        "Basic Data Preparation (Up to 500 records)",
        "Cloud Deployment Assistance (Basic)",
        "Email Support",
        "Documentation Access"
      ],
      priceValue: "$499",
      priceFrequency: "One-Time",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-[#0F0326]",
      buttonText: "Select Package",
    },
    {
      id: 'pro',
      title: "Advanced AI Solution",
      description: "Develop and deploy a custom AI model.",
      features: [
        "Custom Model Architecture",
        "Advanced Data Pipelines & Cleaning",
        "Scalable Cloud Infrastructure Setup",
        "Prioritized Technical Support",
        "Performance Monitoring Dashboard"
      ],
      priceValue: "$1,499",
      priceFrequency: "One-Time",
      bgColor: "bg-white",
      borderColor: "border-[#88BF42]",
      textColor: "text-[#0F0326]",
      buttonText: "Select Package",
    },
    {
      id: 'enterprise',
      title: "Enterprise AI Partnership",
      description: "End-to-end AI strategy, development, and integration.",
      features: [
        "Strategic AI Consulting",
        "Multiple Custom Models",
        "Complex System Integration",
        "Dedicated Account Manager",
        "Ongoing Optimization & Maintenance",
        "SLA-backed Support"
      ],
      priceValue: "$3,999+",
      priceFrequency: "Starting From",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-[#0F0326]",
      buttonText: "Select Package",
    }
  ];

  // Find the selected tier object based on the initial state
  const selectedTier = serviceTiers.find(tier => tier.id === selectedTierId);

  // Placeholder function for payment submission (won't actually process)
  const handlePaymentSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const paymentDetails = {};
    if (selectedPaymentMethod === 'card') {
        // Get values directly from state
        paymentDetails.cardNumber = cardDetails.cardNumber;
        paymentDetails.expiryDate = cardDetails.expiryDate;
        paymentDetails.cvc = cardDetails.cvc;
        paymentDetails.zipCode = cardDetails.zipCode;
        paymentDetails.cardName = cardDetails.cardName;
    } else if (selectedPaymentMethod === 'upi') {
        // Get value directly from state
        paymentDetails.upiId = upiId;
    }

    
    alert(`Simulating payment submission for the ${selectedTier?.title || 'Selected'} package via ${selectedPaymentMethod.toUpperCase()}.\nDetails: ${JSON.stringify(paymentDetails, null, 2)}`);
    console.log("Simulating payment submission...", { selectedTierId, selectedPaymentMethod, paymentDetails });
    // You would typically redirect to a success page or show a confirmation message
    // For demo, we just log and alert.
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f8ff]">
      <Navbar />

      {/* Hero/Title Section */}
      <section className="relative w-full text-center py-20 md:py-24 bg-gradient-to-r from-[#0B0F19] to-[#171E2E] overflow-hidden">
         {/* Background Gradient/Overlay - add if needed for consistent style */}
         {/* <div className="absolute inset-0 bg-[#0F0326] opacity-40 z-0" /> */}
         {/* Example BG shapes - similar to contact/services */}
         <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#88bf42]/5 opacity-30 z-0 animate-pulse-slow"></div>
         <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#009898]/5 opacity-30 z-0 animate-pulse-slow delay-200"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-normal md:leading-tight"> {/* Increased leading for h1 */}
            <span className="block text-white">Complete Your</span>
              <span className="block text-[#88BF42]">AI Solution Purchase</span>
            </h1>
          <motion.p
            className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            You are completing the purchase for the <span className="font-semibold text-white">"{selectedTier?.title || 'Selected'}"</span> package. Please select a payment method below.
          </motion.p>
           {/* Optional CTA button here - maybe link to services overview */}
            <motion.div
               initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                 <Link to="/services" className="inline-block bg-[#88BF42] hover:bg-[#88BF42]/90 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
                   Explore AI Services
                 </Link>
            </motion.div>
        </div>
      </section>

       {/* Payment Details Section - REFACRED SECTION STYLE */}
           <motion.section
               id="payment-section"
               // CHANGED CLASS NAMES FOR SECTION BACKGROUND AND BORDER
               className="py-12 md:py-20 bg-gray-100 border-t border-gray-200"
               initial="hidden"
               animate="visible"
               variants={slideInUp}
           >
                <div className="container mx-auto px-4 max-w-3xl">
                     <motion.div
                         className="text-center mb-8"
                          variants={fadeIn}
                     >
                         {/* Header and Price Summary */}
                         <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">Enter Payment Details</h2>
                         <p className="text-[#696869] text-lg">
                             Please provide your payment information to complete your purchase of the <span className="font-semibold text-[#0F0326]">"{selectedTier?.title || 'Selected Package'}"</span> package.
                         </p>
                         
                     </motion.div>

                     {/* Payment Form Container (This part remains the same - white card) */}
                     <motion.div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" variants={fadeIn} transition={{ delay: 0.3 }}>

                         {/* Payment Method Selection (Refactored in previous response) */}
                         <div className="mb-8">
                             <h3 className="text-xl font-semibold text-[#0F0326] mb-4 border-b pb-2">Select Payment Method</h3>
                             <div className="flex rounded-md border border-gray-300 overflow-hidden p-1 bg-gray-100">
                                 <Button
                                     variant="ghost"
                                     onClick={() => setSelectedPaymentMethod('card')}
                                     className={`flex-1 py-3 text-lg font-semibold transition-colors rounded-md ${
                                         selectedPaymentMethod === 'card'
                                             ? 'bg-white text-[#0F0326] shadow-sm'
                                             : 'text-gray-700 hover:bg-gray-200'
                                     }`}
                                 >
                                     <CreditCard className="w-6 h-6 mr-2" /> Card Payment
                                 </Button>
                                 <Button
                                     variant="ghost"
                                     onClick={() => setSelectedPaymentMethod('upi')}
                                     className={`flex-1 py-3 text-lg font-semibold transition-colors rounded-md ${
                                         selectedPaymentMethod === 'upi'
                                             ? 'bg-white text-[#0F0326] shadow-sm'
                                             : 'text-gray-700 hover:bg-gray-200'
                                     }`}
                                 >
                                     <DollarSign className="w-6 h-6 mr-2" /> UPI Payment
                                 </Button>
                             </div>
                         </div>

                        <form onSubmit={handlePaymentSubmit} className="space-y-6">

                            {/* Conditional Rendering of Form Fields */}
                            {selectedPaymentMethod === 'card' && (
                                <motion.div
                                    key="card-fields"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            name="cardNumber"
                                            value={cardDetails.cardNumber}
                                            onChange={handleCardInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BF42]"
                                            placeholder="XXXX XXXX XXXX XXXX"
                                            required={selectedPaymentMethod === 'card'}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                name="expiryDate"
                                                value={cardDetails.expiryDate}
                                                onChange={handleCardInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BF42]"
                                                placeholder="MM/YY"
                                                required={selectedPaymentMethod === 'card'}
                                            />
                                        </div>
                                        <div>
                                             <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                             <input
                                                type="text"
                                                id="cvc"
                                                name="cvc"
                                                value={cardDetails.cvc}
                                                onChange={handleCardInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BF42]"
                                                placeholder="XXX"
                                                required={selectedPaymentMethod === 'card'}
                                             />
                                        </div>
                                         <div className="col-span-1">
                                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                                             <input
                                                type="text"
                                                id="zipCode"
                                                name="zipCode"
                                                value={cardDetails.zipCode}
                                                onChange={handleCardInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BF42]"
                                                placeholder="XXXXX"
                                                required={selectedPaymentMethod === 'card'}
                                             />
                                        </div>
                                    </div>
                                     <div>
                                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                                        <input
                                            type="text"
                                            id="cardName"
                                            name="cardName"
                                            value={cardDetails.cardName}
                                            onChange={handleCardInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BF42]"
                                            placeholder="Full Name"
                                            required={selectedPaymentMethod === 'card'}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {selectedPaymentMethod === 'upi' && (
                                <motion.div
                                    key="upi-fields"
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     exit={{ opacity: 0, y: 10 }}
                                     transition={{ duration: 0.3 }}
                                     className="space-y-4"
                                >
                                    <div>
                                        <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">Enter your UPI ID</label>
                                        <input
                                            type="text"
                                            id="upiId"
                                            name="upiId"
                                            value={upiId}
                                            onChange={handleUpiInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#88BF42]"
                                            placeholder="e.g., yourname@bankupi"
                                            required={selectedPaymentMethod === 'upi'}
                                        />
                                        <p className="mt-2 text-sm text-gray-600 italic">
                                            After clicking "Pay", you will typically receive a payment request on your UPI app (GPay, PhonePe, Paytm, etc.) linked to this ID.
                                            <br/>
                                        </p>
                                    </div>
                                </motion.div>
                            )}


                            {/* Security & Trust Info */}
                            <div className="text-center text-gray-600 text-sm flex items-center justify-center">
                                <Lock className="w-4 h-4 mr-2 text-[#88BF42]" />
                                Secure payment processing. Your information is encrypted.
                                {/* Add payment provider logos here (e.g., Visa, Mastercard, UPI logos) */}
                            </div>

                            {/* Pay Button */}
                            <Button type="submit" className="w-full py-6 text-lg font-semibold bg-[#88BF42] hover:bg-[#88BF42]/90 text-white transition-colors">
                                Pay with {selectedPaymentMethod === 'card' ? 'Card' : 'UPI'}
                            </Button>
                        </form>
                     </motion.div>
                     {/* Optional note */}
                      <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ delay: 0.5 }}
                            className="text-center mt-8 text-gray-600 text-base italic"
                        >
                             Problems with payment? <Link to="/contact" className="text-[#88BF42] hover:underline">Contact our support team</Link>.
                        </motion.div>
                </div>
           </motion.section>


      <Footer />
    </div>
  );
};

export default PricingPage;
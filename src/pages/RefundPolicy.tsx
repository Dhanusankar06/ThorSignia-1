import React from 'react';

import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const RefundPolicy = () => {
  return (
    <>
    <Navbar />
    <div className="bg-white">
    
      <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 bg-white"> {/* Changed py-12 to py-16, max-w-4xl to max-w-3xl, text-[#0F0326] and removed text-[#696869] from prose container, added leading-relaxed */}

       {/* <Link to="/" className="inline-flex items-center text-[#88BF42] hover:text-[#7AAD3A] mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link> */}

    
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1> 

        <p className="lead font-medium text-gray-900 mb-8 text-lg"> 
          At ThorSignia, we prioritize client satisfaction and aim to deliver high-quality services that meet your business goals. Our refund policy is designed to ensure fairness and transparency while balancing the nature of our services.
        </p>

        
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Eligibility for Refund</h2> 
        <p className="mb-4 text-lg">Refund requests will be considered only under the following circumstances:</p> 
        <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
          <li><strong>Service Not Delivered:</strong> If a service outlined in the agreement has not been initiated or delivered within the specified timeline, and no prior communication has been made about delays.</li> {/* Removed "1." */}
          <li><strong>Project Cancellation:</strong> If the project is canceled before any substantial work has been undertaken by ThorSignia.</li> 
          <li><strong>Non-Satisfactory Work:</strong> If the client is dissatisfied with the quality of work delivered, and attempts to resolve the issues have not been successful.</li> 
        </ol>

        
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Refund Timeline</h2> 
        <p className="mb-4 text-lg">All refund requests must be submitted within 7 days of the issue or delivery of the service.</p> 
        <p className="mb-8 text-lg">Refunds will be processed within 15 working days from the date of approval of the refund request.</p> 

        
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Non-Refundable Conditions</h2> 
        <p className="mb-4 text-lg">Refunds will not be issued under the following circumstances:</p> 
        <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
          <li>For services already delivered as per the agreed scope of work.</li> {/* Removed "1." */}
          <li>If the client fails to provide necessary inputs, approvals, or information required for project completion, leading to delays or issues.</li> {/* Removed "2." */}
          <li>If the client changes the scope of the project or cancels it mid-way after substantial work has been completed.</li> 
          <li>For any third-party tools, licenses, or software purchased on behalf of the client.</li> 
          <li>Refund requests made beyond the specified refund timeline.</li> 
        </ol>

        
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Process for Refund Request</h2> 
        <p className="mb-4 text-lg">To initiate a refund request, please follow these steps:</p> 
        <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
          <li>Email your request to <a href="mailto:accounts@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors" target="_blank" rel="noopener noreferrer">accounts@thorsignia.online</a> with the subject line "Refund Request."</li> 
          <li>Include your name, project details, invoice number, and a detailed explanation of the issue.</li>
          <li>Our team will review your request and may contact you for further clarification or resolution.</li> 
        </ol>

        
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Resolution and Alternatives</h2> 
        <p className="mb-4 text-lg">In case of dissatisfaction, ThorSignia is committed to providing alternative solutions, including:</p> 
        <ul className="list-disc pl-6 mb-8 space-y-2 text-lg">
          <li>Revisions or adjustments to the project at no additional cost.</li>
          <li>Credit towards future services instead of a monetary refund, upon mutual agreement.</li>
        </ul>

        
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2> 
        <p className="mb-8 text-lg">For any questions or concerns regarding our refund policy, please contact our support team at <a href="mailto:accounts@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors" target="_blank" rel="noopener noreferrer">accounts@thorsignia.online</a></p> 

        
        <p className="mt-8 text-lg">We appreciate your trust in ThorSignia and strive to deliver value-driven services. This refund policy is subject to revision as per company guidelines.</p> 

        
        <p className="text-sm italic text-gray-600 mt-8">Last updated: May 21, 2025</p> 

      </div> 
    </div> 
    <Footer />
    </>
  );
};

export default RefundPolicy;
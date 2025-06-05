import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; 
const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | ThorSignia";
  }, []);
  return (
  <>
    <Navbar />    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 bg-white "> {/* Changed text-[#0F0326] to text-gray-800, py-12 to py-16 */}
    {/* <Link to="/" className="inline-flex items-center text-[#88BF42] hover:text-[#7AAD3A] mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link> */}
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Terms and Conditions</h1> {/* Changed text-[#88bf42] to text-gray-900 */}

      
      <p className="mb-8 text-sm italic text-gray-600">Last Updated: 07 January 2025</p> 

      
      <p className="mb-8 text-lg">Welcome to ThorSignia! These Terms and Conditions ("Terms") govern your access to and use of our website, products, and services. By engaging with us, you agree to comply with these Terms. Please read them carefully.</p> 

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">1. Definitions</h2> 
      
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li><strong>"Company":</strong> ThorSignia.</li> 
        <li><strong>"Client":</strong> Any individual, organization, or entity engaging with ThorSignia for services.</li> 
        <li><strong>"Services":</strong> All services offered by ThorSignia, including but not limited to digital marketing, website development, SEO, branding, and automation.</li>
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">2. General Terms</h2> 
      
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>By using our services, you agree to these Terms and our Privacy Policy.</li>
        <li>ThorSignia reserves the right to update these Terms at any time without prior notice.</li> 
        <li>Clients must provide accurate and complete information necessary for the delivery of services.</li> 
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">3. Services</h2> 
      
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>ThorSignia commits to delivering services as outlined in the signed agreement or proposal.</li>
        <li>Timelines and deliverables will be mutually agreed upon and documented.</li> 
        <li>Any changes to the scope of work may incur additional charges and adjusted timelines.</li> 
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">4. Payment Terms</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>Payment terms will be outlined in the invoice or agreement.</li> 
        <li>Payments are due as per the agreed schedule. Late payments may attract penalties or service suspension.</li>
        <li>Any third-party tools, licenses, or software required will be billed separately.</li> 
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">5. Refund Policy</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>Refunds will be processed as per ThorSignia's Refund Policy.</li> 
        <li>No refunds will be issued for services already delivered or completed.</li>
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">6. Confidentiality</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>ThorSignia will maintain confidentiality of all client information and data shared during the course of the project.</li> 
        <li>Clients agree not to disclose ThorSignia’s proprietary methods, strategies, or processes to third parties without written consent.</li> 
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">7. Intellectual Property</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>Any materials, content, or deliverables created by ThorSignia remain the intellectual property of the company until full payment is received.</li>
        <li>Upon payment completion, clients are granted non-exclusive, royalty-free rights to use the deliverables for agreed purposes.</li> 
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">8. Limitation of Liability</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>
           ThorSignia will not be held liable for:
           <ul className="list-disc pl-6 mt-2 space-y-2">
             <li>Delays caused by client inaction or lack of communication.</li>
             <li>Third-party failures, such as hosting providers or advertising platforms.</li>
             <li>Losses caused by force majeure events (e.g., natural disasters, government actions).</li>
           </ul>
         </li>
        <li>Total liability under any claim shall not exceed the amount paid for the specific service in question.</li>                   
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">9. Termination</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
          <li>Either party may terminate the agreement by providing 30 days' written notice.</li> 
        <li>ThorSignia reserves the right to terminate services immediately in case of breach of these Terms by the client.</li> 
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">10. Governing Law</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>These Terms are governed by and construed in accordance with the laws of [Bangalore Jurisdiction].</li> 
        <li>Any disputes will be resolved under the jurisdiction of the courts in [Bangalore Location].</li>
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">11. Indemnity</h2> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li>Clients agree to indemnify ThorSignia against any claims, damages, or liabilities arising from their use of our services.</li> 
      </ol>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">12. Contact Us</h2> 
       
      <p className="mb-4 text-lg">For questions or concerns regarding these Terms, please contact us:</p> 
       
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> 
        <li><strong>Email:</strong> <a href="mailto:info@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors" target="_blank" rel="noopener noreferrer">info@thorsignia.online</a></li>
      </ol>

      
      <p className="mt-8 text-lg">By engaging with ThorSignia, you acknowledge and agree to these Terms and Conditions. Thank you for choosing us!</p> 

    </div>
    <Footer />
  </>
);

};
export default TermsAndConditions;
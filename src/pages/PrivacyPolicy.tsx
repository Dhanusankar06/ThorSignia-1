import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; 
const PrivacyPolicy = () => (
  <>
    <Navbar />
 
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 bg-white">
{/*<Link to="/" className="inline-flex items-center text-[#88BF42] hover:text-[#7AAD3A] mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>*/}

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1> 

        <p className="mb-8 text-sm italic text-gray-600">Effective Date: 07 January 2025</p> 

      {/* Intro Paragraph */}
      <p className="mb-8 text-lg">At ThorSignia, we are committed to protecting your privacy and ensuring that your personal information is handled securely. This Privacy Policy explains how we collect, use, store, and protect your information when you engage with our website, products, and services. Additionally, it includes specific terms related to payment gateways such as PhonePe, Razorpay, and PayU Money, ensuring compliance with their privacy policies.</p> {/* Changed mb-8 to mb-8, added text-lg for body text */}

      {/* Section 1: Information We Collect */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">1. Information We Collect</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* List - Changed to ordered list, added spacing between items, removed manual numbering */}
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2, text-lg */}
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other details provided voluntarily when you contact us, fill out forms, or use our services.</li> {/* Removed "1.1" */}
        <li><strong>Payment Information:</strong> When you make payments through PhonePe, Razorpay, or PayU Money, we may collect and process payment details such as transaction ID, amount, and payment status.<br />Sensitive payment information like card details or UPI PIN is processed securely by these gateways and is not stored by ThorSignia.</li> {/* Removed "1.2" */}
        <li><strong>Usage Data:</strong> Information about how you access and interact with our website, including IP addresses, browser type, and usage behavior.</li> {/* Removed "1.3" */}
        <li><strong>Third-Party Data:</strong> Information collected from third-party tools or platforms when integrated with our services.</li> {/* Removed "1.4" */}
      </ol>

      {/* Section 2: Payment Gateway Policies */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">2. Payment Gateway Policies</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* Paragraphs - Added text-lg and space-y-4 for spacing */}
      <div className="mb-8 space-y-4 text-lg"> {/* Added text-lg, kept space-y-4, mb-8 */}
        <p><strong>2.1 PhonePe:</strong> Payments made via PhonePe are governed by their privacy and security policies. PhonePe handles sensitive information like UPI PINs directly, and ThorSignia does not store this data.<br />
          {/* Link - Kept styling */}
          <a href="https://www.phonepe.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">PhonePe’s Privacy Policy</a>
        </p>
        <p><strong>2.2 Razorpay:</strong> Razorpay securely processes payment data, and we only receive transaction details such as transaction ID, payment status, and amount.<br />
          {/* Link - Kept styling */}
          <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">Razorpay’s Privacy Policy</a>
        </p>
        <p><strong>2.3 PayU Money:</strong> PayU Money handles sensitive payment information securely, and ThorSignia does not have access to your card details, UPI PIN, or other sensitive information.<br />
          {/* Link - Kept styling */}
          <a href="https://payu.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">PayU Money’s Privacy Policy</a>
        </p>
      </div>

      {/* Section 3: How We Use Your Information */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">3. How We Use Your Information</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* List - Changed to ordered list, added spacing between items, removed manual numbering */}
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2, text-lg */}
        <li>Provide, maintain, and improve our services.</li> {/* Removed "3.1" */}
        <li>Process payments and manage your account securely.</li> {/* Removed "3.2" */}
        <li>Communicate with you regarding updates, offers, or support.</li> {/* Removed "3.3" */}
        <li>Ensure compliance with legal obligations and protect against fraud or misuse.</li> {/* Removed "3.4" */}
      </ol>

      {/* Section 4: Information Sharing and Disclosure */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">4. Information Sharing and Disclosure</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* List - Changed to ordered list, added spacing between items, removed manual numbering. Note: the first item is intro text, so handle that */}
      <div className="mb-8 text-lg"> {/* Wrapped in div to handle first item separately, added text-lg, mb-8 */}
         <p className="mb-4">We do not sell or rent your personal information. However, we may share your data under the following circumstances:</p> {/* Added mb-4 */}
         <ol className="list-decimal pl-6 space-y-2"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2 */}
            <li><strong>With Payment Gateways:</strong> Payment-related data is shared with PhonePe, Razorpay, or PayU Money for secure transaction processing.</li> {/* Removed "4.1" */}
            <li><strong>For Legal Compliance:</strong> When required by law or to protect our legal rights.</li> {/* Removed "4.2" */}
            <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or sale of company assets.</li> {/* Removed "4.3" */}
         </ol>
      </div>

      {/* Section 5: Data Security */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">5. Data Security</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* List - Changed to ordered list, added spacing between items, removed manual numbering */}
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2, text-lg */}
        <li>We use advanced security measures to protect your personal information, including encryption and secure servers.</li> {/* Removed "5.1" */}
        <li>Payments processed through PhonePe, Razorpay, and PayU Money are secured by their respective encryption protocols and security standards.</li> {/* Removed "5.2" */}
      </ol>

      {/* Section 6: Your Rights */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">6. Your Rights</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* List - Changed to ordered list, added spacing between items, removed manual numbering */}
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2, text-lg */}
        <li>Access and request a copy of your personal data.</li> {/* Removed "6.1" */}
        <li>Correct inaccuracies in your information.</li> {/* Removed "6.2" */}
        <li>Request deletion of your personal data.</li> {/* Removed "6.3" */}
        <li>Opt-out of marketing communications, including targeted ads.</li> {/* Removed "6.4" */}
        <li>Withdraw consent for data processing where applicable.</li> {/* Removed "6.5" */}
      </ol>
       {/* Contact Email Link - Added text-lg, kept styling */}
      <p className="mb-8 text-lg">To exercise your rights, please contact us at <a href="mailto:accounts@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">accounts@thorsignia.online</a></p> {/* Added text-lg, mb-8 */}

      {/* Section 7: Data Retention */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">7. Data Retention</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* List - Changed to ordered list, added spacing between items, removed manual numbering */}
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2, text-lg */}
        <li>We retain your information only as long as necessary for the purposes outlined in this policy or to comply with legal requirements.</li> {/* Removed "7.1" */}
        <li>Payment transaction data is retained for financial records and legal compliance.</li> {/* Removed "7.2" */}
      </ol>

      {/* Section 8: Third-Party Tools and Platforms */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">8. Third-Party Tools and Platforms</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* List - Changed to ordered list, added spacing between items, removed manual numbering */}
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2, text-lg */}
        <li><strong>Meta Ads and Google Ads:</strong> We collect and process data to understand audience behavior, improve campaigns, and generate leads.</li> {/* Removed "8.1" */}
        <li><strong>Hotjar and Microsoft Clarity:</strong> These tools help us analyze website performance and user behavior.</li> {/* Removed "8.2" */}
        <li><strong>PhonePe, Razorpay, and PayU Money:</strong> Payment gateways handle sensitive payment data directly, ensuring secure transactions.</li> {/* Removed "8.3" */}
      </ol>

      {/* Section 9: Updates */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">9. Updates to this Privacy Policy</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* Paragraph - Added text-lg */}
      <p className="mb-8 text-lg">We may update this Privacy Policy to reflect changes in our practices or for legal reasons. The updated policy will be posted on our website with the revised effective date.</p> {/* Added text-lg, mb-8 */}

      {/* Section 10: Collection and Use of Personal Information */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">10. Collection and Use of Personal Information</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* Paragraph - Added text-lg */}
      <p className="mb-8 text-lg">When you voluntarily send us electronic mail / fillup the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.</p> {/* Added text-lg, mb-8 */}

      {/* Section 11: Contact Us */}
      {/* Heading - Changed color to black, removed border/padding */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">11. Contact Us</h2> {/* Changed text-semibold to text-bold, mt-8 to mt-12, removed border/pb */}
      {/* Intro Paragraph - Added text-lg */}
      <p className="mb-4 text-lg">If you have any questions or concerns about this Privacy Policy, please contact us at:</p> {/* Added text-lg, mb-4 */}
       {/* Contact Info List - Changed to ordered list, added spacing, removed manual numbering */}
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-lg"> {/* Changed ul to ol, list-disc to list-decimal, added space-y-2, text-lg */}
        <li><strong>Email:</strong> <a href="mailto:accounts@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">accounts@thorsignia.online</a></li> {/* Removed "11.1" */}
        <li><strong>Address:</strong> 945, 1st Floor, 5th Main, Sector 7, HSR Layout, Bangalore - 560034, Karnataka, India.</li> {/* Removed "11.2" */}
      </ol>

      {/* Closing Paragraph - Added text-lg and increased top margin */}
      <p className="mt-8 text-lg">By using our website or services, you agree to the terms of this Privacy Policy. Thank you for trusting ThorSignia!</p> {/* Changed mt-6 to mt-8, added text-lg */}

    </div>
    <Footer />
  </>
);

export default PrivacyPolicy;
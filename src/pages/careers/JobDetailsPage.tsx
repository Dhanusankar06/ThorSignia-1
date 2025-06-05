// pages/careers/JobDetailsPage.tsx
import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'; // Import back arrow icon
import { jobListings, JobListing } from '@/data/jobListings'; // Import data and type

const JobDetailsPage = () => {
  useEffect(() => {
    document.title = "Job Details | ThorSignia";
  }, []);

  const { id } = useParams<{ id: string }>(); // Get the 'id' from the URL
  const navigate = useNavigate(); // Hook for navigation

  // Find the job listing based on the id from the URL
  const job = jobListings.find(listing => listing.id === id);

  // State and Ref for the application form (moved from original modal)
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission
  const fileInputRef = useRef<HTMLInputElement>(null);

   // Clear form and error on initial load or when job changes (optional, good practice)
   useEffect(() => {
        setName('');
        setEmail('');
        setMobileNumber('');
        setResumeFile(null);
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setIsSubmitting(false);
   }, [id]); // Dependency array ensures this runs when the 'id' param changes


  // Handle file change (copied from original modal)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      if (!allowed.includes(file.type)) {
        setError('Invalid file type. Please upload a PDF, DOC, DOCX, or TXT file.');
        setResumeFile(null);
         if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }
       // Optional: Add file size limit (e.g., 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
         setError('File size exceeds 5MB limit.');
         setResumeFile(null);
         if (fileInputRef.current) {
            fileInputRef.current.value = '';
         }
         return;
      }
      setResumeFile(file);
      setError(null); // Clear previous errors on successful file select
    } else {
       // If user cancels file selection or clears input
       setResumeFile(null);
       // Don't clear error here if one was previously set for file type/size
       if (fileInputRef.current) {
            fileInputRef.current.value = '';
         }
    }
  };


  // Handle form submission (copied and adapted from original modal)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    if (!name || !email || !mobileNumber) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!resumeFile) {
      setError('Please upload your resume.');
      return;
    }

    // Basic validation example
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }
     // Basic mobile number validation (adjust regex based on expected format)
     if (!/^\d{10,}$/.test(mobileNumber)) { // Example: at least 10 digits
        setError('Please enter a valid mobile number (at least 10 digits).');
        return;
    }

    setIsSubmitting(true); // Disable button

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('job_title', job?.title || 'Unknown Job/Internship'); // Use title from found listing
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile_number', mobileNumber);
    // formData.append('company', company); // Add company if needed


    // --- Replace this simulated section with your actual fetch call ---
    // Example Fetch call (assuming your API is at /api/careers/apply)
     try {
       const response = await fetch('/api/careers/apply', {
         method: 'POST',
         body: formData
       });

       const result = await response.json();

       if (!response.ok) {
         // Handle non-2xx responses
         // Check if the API returned a specific error message
         throw new Error(result.error || 'Submission failed. Please try again.');
       }

       console.log('Submission successful:', result);
       // Clear form and show success message
       setName('');
       setEmail('');
       setMobileNumber('');
       // setCompany('');
       setResumeFile(null);
       if (fileInputRef.current) {
          fileInputRef.current.value = ''; // Reset file input visual state
       }
       setError(null); // Clear any previous errors on success
       alert(`Application submitted successfully for ${job?.title || 'this position'}!`);

       // Optional: Navigate back to the careers page after successful submission
       // navigate('/careers');

     } catch (err: any) {
       console.error('Submission error:', err);
       // Display the error message from the catch block
       setError(err.message || 'An unexpected error occurred during submission. Please try again.');
     } finally {
       setIsSubmitting(false); // Re-enable button regardless of success or failure
     }
    // --- End Simulated Section ---

    // If simulating, uncomment the lines below and comment out the fetch block above
    /*
    setTimeout(() => {
      console.log("Simulating successful submission");
      setName('');
      setEmail('');
      setMobileNumber('');
      // setCompany('');
      setResumeFile(null);
       if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset file input visual state
         }
       setError(null); // Clear errors on simulation success
      alert('Resume submitted for ' + (job?.title || 'this position') + '!');
      setIsSubmitting(false);
      // navigate('/careers'); // Optional: Navigate back after simulation
    }, 2000);
    */
  };


  // Handle case where job is not found (e.g., invalid ID in URL)
  if (!job) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 md:px-6 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Listing Not Found</h1>
                <p className="text-gray-600 mb-8">The requested job or internship listing could not be found.</p>
                {/* Use navigate for programmatic back navigation */}
                <Button onClick={() => navigate('/careers')} className="bg-[#88bf42] text-white rounded-lg border border-[#88bf42] px-6 py-3 hover:bg-[#7aac3b] hover:border-[#7aac3b]">
                   <ArrowLeft className="inline mr-2 w-4 h-4" /> Back to Careers
                </Button>
            </main>
            <Footer />
        </div>
    );
  }


  // Render the job/internship details and form
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Job/Internship Details Section */}
      <section className="py-12 bg-white flex-grow"> {/* flex-grow ensures content pushes footer down */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="mb-6">
                {/* Use navigate for programmatic back navigation */}
                <Button variant="ghost" onClick={() => navigate('/careers')} className="text-gray-600 hover:text-black px-0">
                   <ArrowLeft className="inline mr-2 w-4 h-4" /> Back to Careers
                </Button>
            </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-8 border border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{job.title}</h1>
            <p className="mb-2 text-gray-600 text-sm"><span className="font-semibold text-gray-700">Location:</span> {job.location}</p>
             {job.type && (
                <p className="mb-2 text-gray-600 text-sm"><span className="font-semibold text-gray-700">Type:</span> {job.type === 'job' ? 'Full-time' : 'Internship'}</p>
             )}
             {job.department && (
                <p className="mb-2 text-gray-600 text-sm"><span className="font-semibold text-gray-700">Department:</span> {job.department}</p>
             )}
              {job.experience && (
                <p className="mb-6 text-gray-600 text-sm"><span className="font-semibold text-gray-700">Experience:</span> {job.experience}</p>
             )}


            {/* Description with line breaks */}
             {job.description.split('\n').map((paragraph, index) => (
                <p key={index} className={`text-gray-700 leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
                    {paragraph}
                </p>
            ))}


            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mt-8">
                <h4 className="font-bold text-xl mb-3 text-gray-700">Responsibilities:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <div className="mt-8">
                <h4 className="font-bold text-xl mb-3 text-gray-700">Requirements:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  {job.requirements.map((requirement, i) => (
                    <li key={i}>{requirement}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.preferred && job.preferred.length > 0 && (
              <div className="mt-8">
                <h4 className="font-bold text-xl mb-3 text-gray-700">Preferred Skills:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  {job.preferred.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
             {job.perks && job.perks.length > 0 && (
               <div className="mt-8">
                 <h4 className="font-bold text-xl mb-3 text-gray-700">Perks:</h4>
                 <ul className="text-gray-700 list-disc list-inside space-y-2">
                   {job.perks.map((perk, i) => (
                     <li key={i}>{perk}</li>
                   ))}
                 </ul>
               </div>
             )}


            {/* Application Form Section */}
            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Apply for this Position</h3>
                 <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="applicantName" className="block mb-2 font-semibold text-black">Name:</label>
                        <input
                        id="applicantName"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#88bf42] focus:border-[#88bf42]"
                        required
                        aria-label="Applicant Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="applicantEmail" className="block mb-2 font-semibold text-black">Email:</label>
                        <input
                        id="applicantEmail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#88bf42] focus:border-[#88bf42]"
                        required
                        aria-label="Applicant Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="applicantMobile" className="block mb-2 font-semibold text-black">Mobile Number:</label>
                        <input
                        id="applicantMobile"
                        type="tel"
                        value={mobileNumber}
                        onChange={e => setMobileNumber(e.target.value)}
                        className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#88bf42] focus:border-[#88bf42]"
                        required
                        aria-label="Applicant Mobile Number"
                        />
                    </div>
                     {/* Removed company field for now */}
                    {/*
                     <div>
                         <label htmlFor="applicantCompany" className="block mb-2 font-semibold text-black">Current/Previous Company (Optional):</label>
                         <input
                             id="applicantCompany"
                             type="text"
                             value={company}
                             onChange={e => setCompany(e.target.value)}
                             className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#88bf42] focus:border-[#88bf42]"
                             aria-label="Applicant Company"
                         />
                     </div>
                     */}
                    <div>
                        <label htmlFor="applicantResume" className="block mb-2 font-semibold text-black">Upload Resume (PDF, DOC, DOCX, TXT):</label>
                        <input
                        id="applicantResume"
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#88bf42]/20 file:text-[#000] hover:file:bg-[#88bf42]/30"
                         required // Make file upload required
                        aria-label="Upload Resume"
                        />
                         {resumeFile && (
                        <div className="mt-2 text-black text-sm">Selected: <span className="font-semibold">{resumeFile.name}</span></div>
                        )}
                    </div>

                    {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

                    <Button
                         type="submit"
                        className="bg-[#88bf42] text-white rounded-lg border border-[#88bf42] w-full mt-4 py-2.5 font-semibold hover:bg-[#7aac3b] hover:border-[#7aac3b] focus:outline-none focus:ring-2 focus:ring-[#88bf42] focus:ring-opacity-50"
                        disabled={isSubmitting} // Disable button while submitting
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                 </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
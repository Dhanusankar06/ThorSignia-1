// pages/careers/index.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { jobListings, JobListing } from '@/data/jobListings'; // Import the combined data and type

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | ThorSignia";
  }, []);
  // Filter the listings into jobs and internships for display sections
  const jobs = jobListings.filter(listing => listing.type === 'job');
  const internships = jobListings.filter(listing => listing.type === 'internship');

  return (
    // Keep the transform: translateZ(0) on the main container
    <div className="min-h-screen flex flex-col" style={{ transform: 'translateZ(0)' }}>
      <Navbar />

      {/* Hero Section (Refined translateZ(0) and added will-change to dots) */}
      <section className="relative w-full">
        <div
          className="h-[45vh] max-h-[420px] relative overflow-hidden w-full flex flex-col justify-center items-center px-0 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E]"
          style={{ transform: 'translateZ(0)' }} // <-- Added transform here for the parent of layered backgrounds
        >
          {/* NEW CSS Gradient Pattern Overlay */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: `
                repeating-linear-gradient(45deg, #88bf42 0, #88bf42 1px, transparent 1px, transparent 20px),
                repeating-linear-gradient(-45deg, #88bf42 0, #88bf42 1px, transparent 1px, transparent 20px)
              `,
              backgroundSize: '20px 20px',
              opacity: '0.15',
            }}
          />
          {/* Animated floating dots (Added will-change hint) */}
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: i % 2 === 0 ? '#88bf42' : '#009898',
                opacity: 0.16 + Math.random() * 0.16,
                 zIndex: 2,
                 willChange: 'transform, opacity', // <-- Added this hint
              }}
            />
          ))}
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-[#0F0326]/70 z-0" />
          <div className="max-w-2xl mx-auto text-center z-10 relative">
            {/* Main Heading - split color */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-normal md:leading-tight">
              <span className="block text-white">Join Our</span>
              <span className="block text-[#88BF42]">Innovative Team</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
              Help shape the future of AI at <span className="text-[#88bf42]">Thor</span> <span className="text-[#88bf42]">Signia</span>. We're looking for passionate, creative minds to build, innovate, and grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work at Thor Signia (Added translateZ(0) to the GRID CONTAINER) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-black">
            Why <span className="text-[#88bf42]">Thor Signia?</span>
          </h2>
          {/* Added transform: translateZ(0) to this grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ transform: 'translateZ(0)' }}> {/* <-- Added transform here */}
            {/* Removed translateZ(0) from individual items */}
            <div className="bg-[#f8f9fa] rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
              <Lightbulb className="w-10 h-10 mb-4 text-[#88bf42]" />
              <h3 className="font-bold text-xl mb-2 text-black">Innovative Culture</h3>
              <p className="text-black">Work on cutting-edge AI projects and bring your ideas to life in a collaborative environment.</p>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
              <Users className="w-10 h-10 mb-4 text-[#88bf42]" />
              <h3 className="font-bold text-xl mb-2 text-black">Diverse Team</h3>
              <p className="text-black">Join a team of talented professionals from around the world, united by a passion for AI and impact.</p>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
              <Award className="w-10 h-10 mb-4 text-[#88bf42]" />
              <h3 className="font-bold text-xl mb-2 text-black">Growth & Learning</h3>
              <p className="text-black">Access continuous learning, mentorship, and career advancement opportunities.</p>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
              <Briefcase className="w-10 h-10 mb-4 text-[#88bf42]" />
              <h3 className="font-bold text-xl mb-2 text-black">Meaningful Work</h3>
              <p className="text-black">Make a real-world impact by solving complex challenges for global clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions and Internships Listing (Kept translateZ(0) on list items) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">

            {/* Open Positions Listing */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Open Positions</h2>
              {jobs.length === 0 ? (
                  <p className="text-center text-gray-600 py-4">No open job positions available at the moment. Check back soon!</p>
              ) : (
                  <div className="flex flex-col gap-6">
                      {jobs.map((job) => (
                      <div
                        key={job.id}
                        // Kept translateZ(0) on list items
                        className="bg-white p-6 border-l-4 border-[#88bf42] transition duration-300 hover:bg-gray-100 hover:shadow-sm flex flex-col"
                        style={{ transform: 'translateZ(0)' }}
                      >
                          {/* Content Area - Left-aligned */}
                          <div className="flex-grow mb-4">
                              {/* Title: Left-aligned */}
                              <h3 className="font-semibold text-xl text-gray-800 mb-2">{job.title}</h3>
                              {/* Details: Left-aligned */}
                              <div className="text-gray-600 text-sm space-y-1">
                                  <p><span className="font-medium text-gray-700">Location:</span> {job.location}</p>
                                  <p><span className="font-medium text-gray-700">Type:</span> {job.type === 'job' ? 'Full-time' : job.type}</p>
                                   {job.experience && (
                                      <p><span className="font-medium text-gray-700">Experience:</span> {job.experience}</p>
                                  )}
                                  {job.department && (
                                       <p><span className="font-medium text-gray-700">Department:</span> {job.department}</p>
                                  )}
                              </div>
                          </div>
                          {/* Button Area - Right-aligned */}
                          <div className="flex justify-end">
                              {/* Link to the dedicated job page */}
                              <Link to={`/careers/${job.id}`} className="inline-block">
                                  <Button className="bg-[#88bf42] text-white py-2 px-5 rounded-md font-semibold transition duration-300 hover:bg-[#7aac3b] focus:outline-none focus:ring-2 focus:ring-[#88bf42] focus:ring-opacity-50 text-sm">
                                      Apply Now <ArrowRight className="inline ml-2 w-3 h-3" />
                                  </Button>
                              </Link>
                          </div>
                      </div>
                      ))}
                  </div>
              )}
            </div>

            {/* Internships Listing */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Internships</h2>
              {internships.length === 0 ? (
                  <p className="text-center text-gray-600 py-4">No internship positions available at the moment. Check back soon!</p>
              ) : (
                  <div className="flex flex-col gap-6">
                      {internships.map((intern) => (
                      <div
                        key={intern.id}
                        // Kept translateZ(0) on list items
                        className="bg-white p-6 border-l-4 border-[#88bf42] transition duration-300 hover:bg-gray-100 hover:shadow-sm flex flex-col"
                        style={{ transform: 'translateZ(0)' }}
                       >
                           {/* Content Area - Left-aligned */}
                          <div className="flex-grow mb-4">
                              {/* Title: Left-aligned */}
                              <h3 className="font-semibold text-xl text-gray-800 mb-2">{intern.title}</h3>
                               {/* Details: Left-aligned */}
                              <div className="text-gray-600 text-sm space-y-1">
                                  <p><span className="font-medium text-gray-700">Location:</span> {intern.location}</p>
                                  <p><span className="font-medium text-gray-700">Type:</span> {intern.type === 'internship' ? 'Internship' : intern.type}</p>
                                   {intern.experience && (
                                      <p><span className="font-medium text-gray-700">Experience:</span> {intern.experience}</p>
                                  )}
                                   {intern.department && (
                                       <p><span className="font-medium text-gray-700">Department:</span> {intern.department}</p>
                                  )}
                              </div>
                          </div>
                           {/* Button Area - Right-aligned */}
                          <div className="flex justify-end">
                              {/* Link to the dedicated internship page */}
                              <Link to={`/careers/${intern.id}`} className="inline-block">
                                  <Button className="bg-[#88bf42] text-white py-2 px-5 rounded-md font-semibold transition duration-300 hover:bg-[#7aac3b] focus:outline-none focus:ring-2 focus:ring-[#88bf42] focus:ring-opacity-50 text-sm">
                                      Apply Now <ArrowRight className="inline ml-2 w-3 h-3" />
                                  </Button>
                              </Link>
                          </div>
                      </div>
                      ))}
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Life at Thor Signia (No changes needed unless images cause issues) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-black">
            Life at <span className="text-[#88bf42]">Thor</span><span className="text-[#88bf42]"> Signia</span>
          </h2>
          {/* Image grid - Ensure images are optimized (not fixable in code snippet) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="rounded-xl overflow-hidden shadow border border-gray-100">
              <img src="/assets/life-collaboration.jpg" alt="Team Collaboration" className="w-full h-56 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow border border-gray-100">
              <img src="/assets/life-celebration.jpg" alt="Office Culture" className="w-full h-56 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow border border-gray-100">
              <img src="/assets/life-office.jpg" alt="Celebrating Success" className="w-full h-56 object-cover" />
            </div>
          </div>
          <p className="text-center text-black max-w-2xl mx-auto text-lg">
            At <span className="text-[#88bf42]">Thor</span><span className="text-[#88bf42]"> Signia</span>, we believe in a healthy work-life balance, celebrating wins together, and supporting each other's growth. Our team enjoys flexible work, regular team events, and a culture of innovation.
          </p>
        </div>
      </section>

      {/* CTA: Join the Team */}
      <section className="py-16 bg-gradient-to-r from-[#10b4b7]/10 to-[#88bf42]/10 text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the <span className="text-[#88bf42]">Thor</span><span className="text-[#88bf42]"> Signia</span> Team?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              We're always looking for talented people. If you don't see a role that fits, reach out and tell us how you can make a difference at <span className="text-[#88bf42]">Thor</span><span className="text-[#88bf42]"> Signia</span>.
            </p>
             {/* Link to a general contact page */}
            <Link to="/contact" className="inline-block">
                <Button className="bg-[#88bf42] text-white rounded-lg border border-[#88bf42] px-8 py-4 hover:bg-[#7aac3b] hover:border-[#7aac3b] focus:outline-none focus:ring-2 focus:ring-[#88bf42] focus:ring-opacity-50">
                    Contact Us <ArrowRight className="inline ml-2 w-4 h-4" />
                </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
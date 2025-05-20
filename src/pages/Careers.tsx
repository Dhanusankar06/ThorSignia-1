import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Lightbulb, Award, ArrowRight } from 'lucide-react';

const openPositions = [
  {
    title: 'AI - Python Full Stack Developer',
    location: 'Bangalore (In-person)',
    type: 'Full-time, Permanent, Fresher',
    company: 'Thor Signia',
    description: `Thor Signia is a fast-growing Multinational Technology Enterprise driving digital transformation and AI innovation across six countries. With a mission to build intelligent systems that redefine industries, we are expanding our AI engineering team in India. Join us at the forefront of AI product development, where innovation meets global impact.\n\nRole Summary\nWe are hiring AI - Python Full Stack Developers who are passionate about artificial intelligence, backend development, and automation systems. In this role, you'll work on building and deploying complete AI products from scratch — integrating data pipelines, machine learning models, and user interfaces in production-ready environments. This is a high-impact opportunity to build real AI systems and contribute to a product-oriented tech culture.`,
    responsibilities: [
      'Build and integrate AI/ML models using Python (Scikit-learn, TensorFlow, PyTorch).',
      'Design and develop full-stack applications using Django or Flask for backend.',
      'Work with frontend tools (React, HTML, CSS, JS) to connect AI models with UI.',
      'Create automation systems and scripts to streamline business or technical workflows.',
      'Preprocess, clean, and manage datasets for AI pipelines.',
      'Develop APIs to deploy models in real-world applications.',
      'Collaborate with the team on architecture decisions and system design.',
      'Contribute to debugging, performance tuning, and version-controlled codebases.',
      'Participate in regular code reviews, documentation, and delivery cycles.'
    ],
    requirements: [
      'Proficient in Python with strong object-oriented programming concepts.',
      'Deep understanding of machine learning, AI algorithms, and model training.',
      'Experience with frameworks like Scikit-learn, TensorFlow, or PyTorch.',
      'Good knowledge of Django or Flask for backend development.',
      'Familiarity with automation scripts and system-level Python workflows.',
      'Frontend development (HTML, CSS, JS); React experience is a plus.',
      'Experience with Git, Postman, and API testing tools.',
      'Strong problem-solving, debugging, and logical reasoning.',
      'Good communication skills and ability to work independently.',
      'Fast learner, open to feedback, and capable of handling dynamic requirements.'
    ],
    preferred: [
      'Exposure to LangChain, Hugging Face, or transformer-based AI tools.',
      'Understanding of vector databases (like ChromaDB, Pinecone, etc.).',
      'Experience building end-to-end ML pipelines or deployment with Docker.'
    ],
    perks: [],
  }
];

const internships = [
  {
    title: 'AI Research Intern',
    location: 'Bangalore (In-person)',
    type: 'Internship, Full-time, Fresher',
    company: 'Thor Signia',
    description: `Thor Signia is a fast-growing Multinational Technology Enterprise driving digital transformation and AI innovation across six countries. As part of our mission to build intelligent systems, we offer a hands-on AI Research Internship for students and freshers passionate about AI, ML, and data science.\n\nRole Summary\nAs an AI Research Intern, you will work with our engineering team on real-world AI projects, contribute to research, and help build innovative solutions. This is a unique opportunity to gain practical experience, learn from industry experts, and make a tangible impact.`,
    responsibilities: [
      'Assist in developing and testing AI/ML models using Python.',
      'Support data collection, cleaning, and preprocessing for research projects.',
      'Contribute to literature reviews and research documentation.',
      'Participate in team meetings, brainstorming, and code reviews.',
      'Present findings and results to the team.'
    ],
    requirements: [
      'Pursuing or completed a degree in Computer Science, Engineering, or related field.',
      'Basic knowledge of Python and machine learning concepts.',
      'Familiarity with data analysis and visualization tools.',
      'Strong analytical and problem-solving skills.',
      'Good communication and teamwork abilities.'
    ],
    preferred: [
      'Experience with Jupyter notebooks, Pandas, or Scikit-learn.',
      'Interest in deep learning, NLP, or computer vision.',
      'Previous internship or project experience in AI/ML.'
    ],
    perks: ['Mentorship', 'Certificate', 'Flexible work hours', 'Opportunity for full-time offer'],
  }
];

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowModal(true);
    setResumeFile(null);
    setError(null);
    setName('');
    setEmail('');
    setMobileNumber('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      if (!allowed.includes(file.type)) {
        setError('Invalid file type. Please upload a PDF, DOC, DOCX, or TXT file.');
        setResumeFile(null);
        return;
      }
      setResumeFile(file);
      setError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !mobileNumber) {
      setError('Please fill in all fields.');
      return;
    }
    if (!resumeFile) {
      setError('Please upload your resume.');
      return;
    }
    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('job_title', selectedJob || '');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile_number', mobileNumber);

    fetch('/api/careers/apply', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setShowModal(false);
          setName('');
          setEmail('');
          setMobileNumber('');
          alert('Resume submitted for ' + selectedJob + '!');
        }
      })
      .catch(err => {
        setError('Failed to submit application. Please try again.');
      });
  };

  const closeModal = () => {
    setShowModal(false);
    setResumeFile(null);
    setError(null);
    setName('');
    setEmail('');
    setMobileNumber('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#f8f9fa] text-black">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Careers at <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span> and help shape the future of AI. We're looking for passionate, creative minds to build, innovate, and grow with us.
          </p>
        </div>
      </section>

      {/* Why Work at Thor Signia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-black">
            Why <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Open Positions */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Open Positions */}
            <div>
              <h2 className="text-3xl font-bold mb-10 text-center text-black">Open Positions</h2>
              <div className="flex flex-col gap-8">
                {openPositions.map((job, idx) => (
                  <div key={idx} className="relative bg-white rounded-xl shadow-lg flex flex-col h-full">
                    <div className="overflow-y-auto p-6 pb-20 max-h-96">
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-black">{job.title}</h3>
                        <p className="mb-1 text-black"><span className="font-semibold">Location:</span> {job.location}</p>
                        <p className="mb-1 text-black"><span className="font-semibold">Type:</span> {job.type}</p>
                        <p className="mb-2 text-black">{job.description}</p>
                        <ul className="mb-4 text-black text-sm list-disc list-inside">
                          {job.responsibilities && job.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                        {job.requirements && (
                          <div className="mb-4 text-black text-sm">
                            <span className="font-semibold">Requirements:</span>
                            <ul className="list-disc list-inside">
                              {job.requirements.map((requirement, i) => (
                                <li key={i}>{requirement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {job.preferred && (
                          <div className="mb-4 text-black text-sm">
                            <span className="font-semibold">Preferred Skills:</span>
                            <ul className="list-disc list-inside">
                              {job.preferred.map((skill, i) => (
                                <li key={i}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100">
                      <Button className="bg-[#88bf42] text-white rounded-lg border border-[#88bf42] w-full" onClick={() => handleApplyClick(job.title)}>
                        Apply <ArrowRight className="inline ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Internships */}
            <div>
              <h2 className="text-3xl font-bold mb-10 text-center text-black">Internships</h2>
              <div className="flex flex-col gap-8">
                {internships.map((intern, idx) => (
                  <div key={idx} className="relative bg-white rounded-xl shadow-lg flex flex-col h-full">
                    <div className="overflow-y-auto p-6 pb-20 max-h-96">
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-black">{intern.title}</h3>
                        <p className="mb-1 text-black"><span className="font-semibold">Location:</span> {intern.location}</p>
                        <p className="mb-1 text-black"><span className="font-semibold">Type:</span> {intern.type}</p>
                        <p className="mb-2 text-black">{intern.description}</p>
                        <ul className="mb-4 text-black text-sm list-disc list-inside">
                          {intern.responsibilities && intern.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                        {intern.requirements && (
                          <div className="mb-4 text-black text-sm">
                            <span className="font-semibold">Requirements:</span>
                            <ul className="list-disc list-inside">
                              {intern.requirements.map((requirement, i) => (
                                <li key={i}>{requirement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {intern.preferred && (
                          <div className="mb-4 text-black text-sm">
                            <span className="font-semibold">Preferred Skills:</span>
                            <ul className="list-disc list-inside">
                              {intern.preferred.map((skill, i) => (
                                <li key={i}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {intern.perks && intern.perks.length > 0 && (
                          <div className="mb-4 text-black text-sm">
                            <span className="font-semibold">Perks:</span>
                            <ul className="list-disc list-inside">
                              {intern.perks.map((perk, i) => (
                                <li key={i}>{perk}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100">
                      <Button className="bg-[#88bf42] text-white rounded-lg border border-[#88bf42] w-full" onClick={() => handleApplyClick(intern.title)}>
                        Apply <ArrowRight className="inline ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Resume Upload */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-0 w-full max-w-md max-h-[90vh] flex flex-col relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-black z-10">&times;</button>
            <div className="flex-1 overflow-y-auto p-8 pt-12">
              <h3 className="text-2xl font-bold mb-4 text-black">Apply for {selectedJob}</h3>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="block mb-2 font-semibold text-black">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="mb-4 block w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <label className="block mb-2 font-semibold text-black">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mb-4 block w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <label className="block mb-2 font-semibold text-black">Mobile Number:</label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={e => setMobileNumber(e.target.value)}
                  className="mb-4 block w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <label className="block mb-2 font-semibold text-black">Upload Resume (PDF, DOC, DOCX, TXT):</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  className="mb-4 block w-full border border-gray-300 rounded px-3 py-2"
                />
                {resumeFile && (
                  <div className="mb-2 text-black text-sm">Selected: {resumeFile.name}</div>
                )}
                {error && <div className="mb-2 text-red-600 text-sm">{error}</div>}
                <Button type="submit" className="bg-[#88bf42] text-white rounded-lg border border-[#88bf42] w-full mt-2">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Life at Thor Signia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-black">
            Life at <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="rounded-xl overflow-hidden shadow border border-gray-100">
              <img src="/assets/life-collaboration.jpg" alt="Team Collaboration" className="w-full h-56 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow border border-gray-100">
              <img src="/assets/life-office.jpg" alt="Office Culture" className="w-full h-56 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow border border-gray-100">
              <img src="/assets/life-celebration.jpg" alt="Celebrating Success" className="w-full h-56 object-cover" />
            </div>
          </div>
          <p className="text-center text-black max-w-2xl mx-auto text-lg">
            At <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span>, we believe in a healthy work-life balance, celebrating wins together, and supporting each other's growth. Our team enjoys flexible work, regular team events, and a culture of innovation.
          </p>
        </div>
      </section>

      {/* CTA: Join the Team */}
      <section className="py-16 bg-gradient-to-r from-[#10b4b7]/10 to-[#9ac857]/10 text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span> Team?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              We're always looking for talented people. If you don't see a role that fits, reach out and tell us how you can make a difference at <span className="text-[#9ac857]">Thor</span><span className="text-[#10b4b7]"> Signia</span>.
            </p>
            <Button className="bg-[#88bf42] text-white rounded-lg border border-[#88bf42] px-8 py-4" asChild>
              <a href="#apply">Join the Team</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers; 
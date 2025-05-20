'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { blogPosts, BlogPost as BlogPostType } from '@/data/blog-posts';

export default function BlogPost() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  
  // Get the slug parameter from the URL
  const params = useParams();
  const slug = params.id || params.slug; // Check both possible parameter names
  
  console.log("URL params:", params); // For debugging
  console.log("Slug value:", slug); // For debugging
  console.log("Available blog posts:", blogPosts); // For debugging
  
  // Find the blog post with matching slug
  const post = blogPosts.find((post) => post.slug === slug);

  // Table of contents sections
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'philosophy', title: 'A Philosophy Rooted in Growth, Not Just Recruitment' },
    { id: 'step-by-step', title: 'Step-by-Step: Turning Freshers into AI Professionals' },
    { id: 'foundation', title: 'Foundation First: Python, ML, and the Art of Solving Problems' },
    { id: 'mentorship', title: 'The Power of Mentorship & Continuous Feedback' },
    { id: 'metrics', title: 'Real Success Stories, Real Results' },
    { id: 'inhouse', title: 'Why In-House Beats Direct Hiring' }
  ];
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist. Slug: {slug}</p>
            <Link 
              to="/blog"
              className="px-6 py-3 bg-[#88bf42] text-white rounded-lg hover:bg-[#7aad3a] transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress((currentProgress / totalScroll) * 100);
      
      // Update active section based on scroll position
      const sections = tableOfContents.map(section => document.getElementById(section.id));
      const filteredSections = sections.filter(Boolean) as HTMLElement[];
      
      if (filteredSections.length) {
        const current = filteredSections.findIndex(section => {
          const rect = section.getBoundingClientRect();
          return rect.top > 0 && rect.top < window.innerHeight / 2;
        });
        
        if (current !== -1) {
          setActiveSection(tableOfContents[current].id);
        } else if (window.scrollY < 300) {
          setActiveSection(tableOfContents[0].id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  // Scroll to section when clicking on table of contents
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#88bf42] z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-end pb-20">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/90 mb-6">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.read}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#88bf42]/20 text-[#88bf42] text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">{post.excerpt}</p>
        </div>
      </div>

      {/* Content with Table of Contents */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Table of Contents (left side) */}
          <div className="w-full md:w-64 shrink-0">
            <div className="sticky top-24">
              <h4 className="text-lg font-semibold text-[#0f0326] mb-4">Table of Contents</h4>
              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#88bf42]/10 text-[#88bf42] font-medium'
                        : 'text-[#696869] hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content (right side) */}
          <div className="flex-1">
            <div className="prose prose-lg max-w-none">
              <section id="introduction" className="mb-8">
                <p className="text-lg text-[#696869] leading-relaxed">
                  In today's fast-evolving tech landscape, hiring experienced AI professionals can be 
                  expensive, inconsistent, and competitive. At our company, we took a bold approach: 
                  build them ourselves. Our in-house training model doesn't just prepare individuals to 
                  become AI engineers—it transforms freshers into confident global experts. 
                  Here's how we're changing the game with a structured, outcome-driven training 
                  ecosystem.
                </p>
              </section>

              <section id="philosophy" className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f0326] mb-4">
                  A Philosophy Rooted in Growth, Not Just Recruitment
                </h2>
                <p className="text-lg text-[#696869] leading-relaxed">
                  We believe talent is everywhere—it just needs the right environment to grow. That's why 
                  we don't look only for resumes with 5+ years of experience. We actively seek out 
                  smart, fresh, and early-career professionals who have the curiosity and grit to 
                  become world-class AI experts. The rest, we teach in-house. Our training philosophy is 
                  simple: Train deep, train smart, and ends with practical solutions.
                </p>
              </section>

              <section id="step-by-step" className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f0326] mb-4">
                  Step-by-Step: Turning Freshers into AI Professionals
                </h2>
                <p className="text-lg text-[#696869] leading-relaxed">
                  From day one, trainees are guided through a structured learning path that spans core AI 
                  foundations to real-world projects. The focus isn't just on knowledge but on application. 
                  We ensure that every trainee masters Python, SQL, and key ML/DL frameworks, 
                  understands problem-solving from a product-thinking lens, works on capstone projects 
                  that mirror real client demands, and receives feedback not only on code but also on 
                  communication. By the time they graduate, they've already touched live datasets, built 
                  deployable models, and presented findings in client-style reviews.
                </p>
              </section>

              <section id="foundation" className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f0326] mb-4">
                  Foundation First: Python, ML, and the Art of Solving Problems
                </h2>
                <p className="text-lg text-[#696869] leading-relaxed">
                  We don't rush into complex AI algorithms on day one. The training starts with solid 
                  groundwork in Python for clean, readable, production-grade code, mathematics & 
                  statistics for better model building and tuning, machine learning essentials like 
                  regression, classification, clustering, and data wrangling. SQL and data visualization for 
                  business-ready output. Our approach ensures the 'why' is just as strong as the 'how.'
                </p>
              </section>

              <section id="mentorship" className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f0326] mb-4">
                  The Power of Mentorship & Continuous Feedback
                </h2>
                <p className="text-lg text-[#696869] leading-relaxed">
                  Each trainee is assigned a senior AI mentor—a hands-on guide who reviews their code, 
                  project approach, and even soft skills like client interaction. Weekly feedback loops 
                  ensure no one is ever stuck, and everyone keeps growing. Code reviews, pair 
                  programming, and mock client calls form the backbone of our mentorship process.
                </p>
              </section>

              <section id="metrics" className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f0326] mb-4">
                  Real Success Stories, Real Results
                </h2>
                <p className="text-lg text-[#696869] leading-relaxed">
                  Over 85% of our AI engineers started as trainees with minimal experience. Today, they 
                  lead client projects, contribute to innovation, and continuously upskill themselves. Our 
                  retention rate exceeds 90%, far above industry standards, because we've created not 
                  just a training program but a growth ecosystem. Clients consistently rate our AI solutions 
                  4.8/5 or higher, often unaware they were built by professionals with only 2-3 years of 
                  total experience.
                </p>
              </section>

              <section id="inhouse" className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f0326] mb-4">
                  Why In-House Beats Direct Hiring
                </h2>
                <p className="text-lg text-[#696869] leading-relaxed">
                  The benefits of our grow-your-own approach extend beyond quality. We save on 
                  recruitment costs, eliminate the risk of mis-hires, ensure consistent quality standards 
                  across teams, and maintain an agile talent pipeline that can scale with demand. Most 
                  importantly, our teams share a common technical language, problem-solving approach, 
                  and company culture—creating incredibly cohesive project delivery.
                </p>
              </section>
            </div>
            
            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Back Button */}
            <div className="mt-16 text-center">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#88bf42] text-white rounded-lg hover:bg-[#7aad3a] transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Read Next Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f0326] mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-[#696869] line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                  <span className="text-[#88bf42] font-medium">Read more →</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

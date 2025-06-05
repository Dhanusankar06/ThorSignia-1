// @/pages/blog/[slug].tsx (Example path for file-based routing like Next.js Pages Router)
// or src/components/SingleBlogPostPage.tsx (If managing routes manually)

"use client"; // Indicates this is a client component, needed for hooks like useParams

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams to get URL parameters, Link for navigation
import { blogPosts } from '@/data/blog-posts'; // Import your blog data array
import BlogPostComponent from '@/components/blogpost'; // Import the component that renders a single blog post
import Navbar from '@/components/Navbar'; // Assuming Navbar exists
import Footer from '@/components/Footer'; // Assuming Footer exists

const SingleBlogPostPage = () => {
  useEffect(() => {
    document.title = "Blog Post | ThorSignia";
  }, []);
  // Get the dynamic segment from the URL.
  // The route is defined as /blog/:slug, so useParams will give us { slug: '...' }
  const { slug } = useParams<{ slug: string }>();

  // Find the corresponding blog post object in the data array using the slug
  const post = blogPosts.find(p => p.slug === slug);

  // If no blog post was found for the given slug, render a 404-like message
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar /> {/* Include Navbar */}
        {/* Use flex-grow to push the footer down */}
        <div className="flex flex-grow flex-col items-center justify-center text-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog post not found</h1>
            <p className="text-gray-600">The requested article could not be found.</p>
            {/* Link back to the main blog listing page */}
            <Link to="/blog" className="mt-6 text-blue-600 hover:underline">Back to Blog List</Link>
        </div>
        <Footer /> {/* Include Footer */}
      </div>
    );
  }

  // If the blog post data was successfully found, render the BlogPostComponent
  // and pass the retrieved post data to it.
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar /> {/* Include Navbar */}
      {/* Render the single blog post content */}
      <BlogPostComponent blogPost={post} /> {/* Pass the found blog post object */}
      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default SingleBlogPostPage;
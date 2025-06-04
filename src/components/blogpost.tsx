"use client";

import React, { useRef, useEffect, useState } from 'react';
import { BlogPost, blogPosts } from '@/data/blog-posts';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import CardHoverEffectDemo from '@/components/layout/card-hover-effect-demo';

interface BlogPostProps {
  blogPost: BlogPost;
}

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const BlogPostComponent: React.FC<BlogPostProps> = ({ blogPost }) => {
  if (!blogPost) {
    console.error("BlogPostComponent received null or undefined blogPost prop");
    return <div className="text-center py-12 text-red-600">Error: Blog post data is missing.</div>;
  }

  const relatedPosts = blogPosts.filter(post => post.slug !== blogPost.slug).slice(0, 3);
  const fixedNavbarHeight = 64;
  const extraScrollPadding = 20;
  const scrollOffset = -(fixedNavbarHeight + extraScrollPadding);
  const totalScrollOffset = fixedNavbarHeight + extraScrollPadding;

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">

      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[480px] lg:h-[520px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${blogPost.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container relative z-10 text-white text-left px-4">
          <div className="max-w-4xl">
            <h1 className="text-[60px] font-bold leading-tight mb-4 drop-shadow-xl">{blogPost.title}</h1>
            <p className="text-lg md:text-xl font-light drop-shadow-xl max-w-2xl">{blogPost.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content and TOC Side-by-Side */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">

          {/* TOC Sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-[84px]">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Table of Contents</h3>
              <ul className="space-y-2">
                {blogPost.tableOfContents.map((item, index) => {
                  const targetId = slugify(item);
                  const headingExistsInContent = blogPost.content.some(section => section.heading === item);

                  return (
                    <li key={index}>
                      <ScrollLink
                        to={targetId}
                        spy={true}
                        smooth={true}
                        offset={scrollOffset}
                        duration={500}
                        activeClass="active-toc-item"
                        className={`block py-1 px-2 rounded transition-colors duration-200 ${
                          headingExistsInContent
                            ? 'cursor-pointer text-[#696869] text-base md:text-lg hover:text-[#88BF42]'
                            : 'cursor-not-allowed text-[#696869] italic'
                        }`}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                      >
                        {item}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Blog Content */}
          <div className="md:w-3/4">
            <div id="main-content-area" className="prose max-w-none">
              {blogPost.content.map((section, sectionIndex) => {
                const sectionId = slugify(section.heading);
                const isToCHeading = blogPost.tableOfContents.includes(section.heading);

                return (
                  <React.Fragment key={sectionIndex}>
                    {isToCHeading ? (
                      <Element name={sectionId} className={`block pt-[${totalScrollOffset}px] -mt-[${totalScrollOffset}px]`}>
                        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">{section.heading}</h2>
                      </Element>
                    ) : (
                      <h2 className="text-2xl font-bold mt-8 mb-4 text-black">{section.heading}</h2>
                    )}

                    {section.paragraphs.map((paragraph, paraIndex) => (
                      <p
                        key={`${sectionIndex}-${paraIndex}`}
                        className="mb-4 text-base md:text-lg text-[#696869] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </React.Fragment>
                );
              })}

              <div className="mt-8 text-left">
                <RouterLink
                  to="/blog"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-[#88BF42] hover:bg-[#88BF42]/80"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back to Blog
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="container mx-auto px-4 pt-6 pb-12">
        <div className="flex flex-wrap gap-2">
          {blogPost.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* More Articles */}
      {relatedPosts.length > 0 && (
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">More Articles</h2>
          </div>
          <CardHoverEffectDemo items={relatedPosts} />
        </div>
      )}
    </div>
  );
};

export default BlogPostComponent;
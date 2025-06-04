// @/components/layout/CardHoverEffectDemo.tsx

"use client"; // Indicates this is a client component

import { Link } from "react-router-dom"; // For creating links to individual blog posts
import { motion, AnimatePresence } from "framer-motion"; // For the hover animation effect
import { useState } from "react"; // For managing the hover state
import { BlogPost } from "@/data/blog-posts"; // Import the BlogPost type

interface CardHoverEffectDemoProps {
  items: BlogPost[]; // Receives the array of blog posts to display
}

const CardHoverEffectDemo: React.FC<CardHoverEffectDemoProps> = ({ items }) => {
  // State to track which card is currently being hovered
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12"> {/* Container for the grid */}
      {/* Grid layout for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          // Each card is wrapped in a Link component
          // The 'group' class is essential for group-hover utilities
          <Link
            to={`/blog/${item.slug}`} // The URL path based on the blog post's slug
            key={item.slug}
            className="relative group block w-full p-2 h-full" // 'group' class added/kept here
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Framer motion component for the hover background effect */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-200 block rounded-lg" // Background element
                  layoutId="hoverBackground" // Unique ID for shared layout animation
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            {/* Card Content - Sits above the hover background */}
            {/* Added image container and image */}
            <div className="relative z-10 p-0 bg-white rounded-lg shadow-md border border-slate-100 group-hover:border-green-500 transition-colors duration-200 ease-in-out h-full flex flex-col">
                {/* Image Container - overflow-hidden crops the zoomed image */}
                <div className="w-full h-40 md:h-48 overflow-hidden rounded-t-lg"> {/* Adjust height as needed */}
                    <img
                        src={item.heroImage} // Use the hero image URL from the data
                        alt={item.title} // Alt text for accessibility
                        // Added group-hover:scale-110 for zoom on hover
                        // transition-transform makes the zoom smooth
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                </div>

                {/* Text Content (Title, Subtitle, Read More) */}
                <div className="p-4 flex flex-col flex-grow justify-between"> {/* Added padding here */}
                    <div>
                        {/* Blog Post Title */}
                        <h3 className="text-lg font-bold text-slate-800 mb-2">
                          {item.title}
                        </h3>
                        {/* Blog Post Subtitle - Limited lines */}
                        {/* 'line-clamp-3' is a Tailwind CSS utility (requires plugin) to limit text to 3 lines */}
                        <p className="text-slate-600 text-sm line-clamp-3">
                          {item.subtitle}
                        </p>
                    </div>
                     {/* "Read More" link/indicator */}
                     <div className="mt-4 text-right text-[#88BF42] font-medium group-hover:text-[#88BF42]/80 transition-colors duration-200">
                        Read More →
                     </div>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardHoverEffectDemo;
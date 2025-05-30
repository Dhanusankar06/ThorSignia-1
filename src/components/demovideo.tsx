import React, { useState, useEffect } from 'react'; // <-- Import useState and useEffect
import { motion } from 'framer-motion';
// import { Link as RouterLink } from 'react-router-dom'; // <-- Remove or comment out RouterLink
import { Play } from 'lucide-react'; // Assuming you have lucide-react or similar for the icon

// Define your animation variants (assuming they are defined elsewhere)
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Wrap your snippet in a functional component if it's not already
const ProductDemoSection = () => { // <-- Added a functional component wrapper

  // <-- Add state for modal visibility and current video URL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);
  // -->

  // <-- Functions to open and close the modal
  const handleOpenModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentVideoUrl(null); // Clear the URL when closing
    setIsModalOpen(false);
  };
  // -->

  // <-- Effect to handle closing modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]); // Re-run effect when isModalOpen changes
  // -->


  // <-- Update Demo Data - ADD actual video embed URLs here
  // IMPORTANT: Replace 'YOUR_VIDEO_EMBED_URL' with actual embed URLs
  // For YouTube embeds, use the format: https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0
  const demos = [
    { title: 'AI Voice Agent in Action', desc: 'See how our AI voice agents handle customer inquiries naturally and efficiently.', thumb: '/assets/ai-voice-demo.jpg', time: '2:45', link: '/demo/voice-ai', videoUrl: 'https://www.youtube.com/embed/KKNCiRWd_j0?si=U5-V45kP_9O30F3q&autoplay=1&mute=1&rel=0'}, // <-- Replace with actual URL
    { title: 'Lead Capture to Call Demo', desc: 'Watch our AI automatically qualify leads and initiate follow-up calls.', thumb: '/assets/lead-capture-demo.jpg', time: '3:12', link: '/demo/lead-capture', videoUrl: 'https://www.youtube.com/embed/KKNCiRWd_j0?si=U5-V45kP_9O30F3q&autoplay=1&mute=1&rel=0'}, // <-- Replace with actual URL
    { title: 'Campaign Automation Process', desc: 'Learn how our AI optimizes ad campaigns for maximum performance.', thumb: '/assets/campaign-automation-demo.jpg', time: '4:05', link: '/demo/campaign-automation', videoUrl: 'https://www.youtube.com/embed/KKNCiRWd_j0?si=U5-V45kP_9O30F3q&autoplay=1&mute=1&rel=0' }, // <-- Replace with actual URL
  ];
  // -->

  return (
    <> {/* Use a fragment to return multiple top-level elements (section + modal) */}
      {/* 5. Mini Product Demo Teasers */}
      <section className="py-16 md:py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerChildren} className="text-center mb-12 md:mb-16">
            <motion.div variants={itemVariants} className="inline-block bg-[#88BF42]/10 rounded-full px-4 md:px-6 py-1 md:py-2 mb-4">
              <span className="text-[#88BF42] text-sm md:text-base font-semibold">Product Demos</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              See Our <span className="text-[#88BF42]">AI in Action</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our product demos to see how our AI solutions work in real-world scenarios.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {demos.map((demo, index) => ( // <-- Use the updated demos array
              <motion.div
                key={`demo-${index}`}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer" // <-- Add cursor-pointer
                onClick={() => handleOpenModal(demo.videoUrl)} // <-- Add onClick handler
              >
                {/* REMOVED RouterLink, making the div clickable */}
                <div className="relative group block"> {/* Changed from RouterLink to div */}
                  <div className="h-40 md:h-48 relative overflow-hidden">
                    <img src={demo.thumb} alt={demo.title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#88BF42] flex items-center justify-center">
                      <Play className="h-7 w-7 md:h-8 md:w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                  <p className="text-gray-700 text-sm mb-3 md:mb-4">{demo.desc}</p>
                  <div className="flex items-center text-[#88BF42] mt-auto text-sm md:text-base">
                    <span className="font-medium">{demo.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* <-- Add the Video Modal (Lightbox) structure */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal} // Close modal when clicking the overlay
          role="dialog"
          aria-modal="true"
          aria-label="Video Player" // Add an accessible label
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-xl"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 z-10 text-white text-2xl font-bold leading-none bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full w-8 h-8 flex items-center justify-center transition"
              aria-label="Close video modal"
            >
              ×
            </button>

            {/* Video Player (iframe for embeds) */}
            {currentVideoUrl && (
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  src={currentVideoUrl}
                  title="Product Demo Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            )}

            {/* Optional: Add video title or description below iframe */}
            {/* <div className="p-4">
              <h3 className="text-lg font-semibold">{demos.find(d => d.videoUrl === currentVideoUrl)?.title}</h3>
            </div> */}
          </div>
        </div>
      )}
      {/* --> */}
    </> // End Fragment
  );
};

export default ProductDemoSection; // <-- Export the component
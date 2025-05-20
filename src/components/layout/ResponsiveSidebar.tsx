import React, { useState, useEffect, useRef } from 'react';

interface ResponsiveSidebarProps {
  children: React.ReactNode;
  sections: Array<{ id: string; title: string }> | undefined;
  activeSection: string;
}

const ResponsiveSidebar = ({ children, sections, activeSection }: ResponsiveSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex">
      {/* Hamburger button - visible only on mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm text-[#0f0326] p-2 rounded-full shadow-lg hover:bg-[#88bf42] hover:text-white transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Table of Contents"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
        >
          <path d="M9 3h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" />
          <polyline points="9 12 15 12 15 18" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-sm lg:bg-transparent border-r border-[#88bf42]/10 shadow-md z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:h-auto lg:shadow-none lg:backdrop-blur-none`}
      >
        <nav className="sticky top-8 p-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-[#0f0326]">Table of Contents</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-[#696869] hover:text-[#88bf42]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <ul className="space-y-2">
            <li>
              <a 
                href="#introduction"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === 'introduction' 
                  ? 'bg-[#88bf42] text-white shadow-sm' 
                  : 'text-[#696869] hover:text-[#88bf42] hover:bg-[#88bf42]/5'}`}
              >
                Introduction
              </a>
            </li>
            {sections?.map((section: { id: string; title: string }) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id 
                    ? 'bg-[#88bf42] text-white shadow-sm' 
                    : 'text-[#696869] hover:text-[#88bf42] hover:bg-[#88bf42]/5'}`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-64 p-4">
        {children}
      </main>
    </div>
  );
};

export default ResponsiveSidebar;

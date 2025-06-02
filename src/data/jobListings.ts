// data/jobListings.ts

export interface JobListing {
    id: string;
    title: string;
    location: string;
    type: 'job' | 'internship'; // Explicitly define type
    department?: string; // Make optional as not all listings might have it
    experience?: string; // Make optional
    description: string;
    responsibilities: string[];
    requirements: string[];
    preferred?: string[]; // Make optional
    perks?: string[]; // Make optional
    company?: string; // Make optional
  }
  
  export const jobListings: JobListing[] = [
    {
      id: 'ai-python-fullstack',
      title: 'AI - Python Full Stack Developer',
      location: 'Bangalore, India',
      type: 'job',
      department: 'Engineering',
      experience: '5+ years',
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
      perks: [
        'Competitive salary',
        'Health insurance',
        'Flexible work hours',
        'Learning and development opportunities'
      ],
    },
    {
      id: 'ai-research-internship', // Changed ID to be more descriptive
      title: 'AI Research Intern',
      location: 'Bangalore, India',
      type: 'internship', // Corrected type
      department: 'Research', // Added department
      experience: 'Fresher',
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
      perks: [
        'Mentorship',
        'Certificate',
        'Flexible work hours',
        'Opportunity for full-time offer'
      ],
    },
    // Add other job/internship listings here following the JobListing interface structure
  ];
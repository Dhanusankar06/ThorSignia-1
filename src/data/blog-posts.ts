export type BlogPost = {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    authorImage: string;
    date: string;
    category: string;
    tags: string[];
    read: string;
  };
  
  export const blogPosts: BlogPost[] = [
    {
      title: "The Future of Enterprise AI: Trends to Watch in 2025",
      slug: "future-of-enterprise-ai-trends-2025",
      excerpt: "Discover the emerging AI technologies that will shape enterprise operations in the coming year.",
      content: "AI is rapidly evolving, and businesses need to stay ahead of the curve. In this article, we explore the key trends that will define enterprise AI in 2025, from advanced natural language processing to autonomous decision-making systems.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=870&auto=format&fit=crop",
      author: "Dr. Amelia Chen",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      date: "June 15, 2024",
      category: "AI Trends",
      tags: ["AI", "Enterprise", "Future Tech", "Machine Learning"],
      read: "8 min read"
    },
    {
      title: "How Custom AI Solutions Are Transforming Manufacturing",
      slug: "custom-ai-manufacturing-transformation",
      excerpt: "Case studies revealing how AI is revolutionizing production lines and supply chain management.",
      content: "Manufacturing is undergoing a revolution powered by artificial intelligence. From predictive maintenance to automated quality control, AI is reshaping how products are made and distributed.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=870&auto=format&fit=crop",
      author: "Marcus Johnson",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      date: "May 28, 2024",
      category: "Manufacturing",
      tags: ["Manufacturing", "Industry 4.0", "Automation", "Supply Chain"],
      read: "6 min read"
    },
    {
      title: "Ethical Considerations in AI Development and Deployment",
      slug: "ethical-considerations-ai-development",
      excerpt: "Navigating the complex moral and social implications of artificial intelligence in business.",
      content: "As AI becomes more integrated into business operations, companies must address important ethical questions. This article explores frameworks for responsible AI development and implementation.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=870&auto=format&fit=crop",
      author: "Sophia Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      date: "May 10, 2024",
      category: "Ethics",
      tags: ["Ethics", "Responsible AI", "Governance", "Policy"],
      read: "10 min read"
    },
    {
      title: "Building a Successful Enterprise AI Strategy From Scratch",
      slug: "enterprise-ai-strategy-guide",
      excerpt: "A comprehensive guide to developing and implementing AI across your organization.",
      content: "Many companies struggle to effectively integrate AI into their operations. This step-by-step guide helps business leaders create a cohesive AI strategy that aligns with their business objectives.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
      author: "David Park",
      authorImage: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop",
      date: "April 22, 2024",
      category: "Strategy",
      tags: ["Strategy", "Digital Transformation", "Implementation", "ROI"],
      read: "12 min read"
    },
    {
      title: "Real-time Data Processing: How AI Is Enabling Faster Decision Making",
      slug: "real-time-data-processing-ai",
      excerpt: "Exploring technologies that analyze data at unprecedented speeds for competitive advantage.",
      content: "The ability to process and analyze data in real-time is transforming how businesses operate. This article examines how AI-powered real-time analytics are enabling faster, more informed decision making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
      author: "Dr. Amelia Chen",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      date: "April 5, 2024",
      category: "Data",
      tags: ["Big Data", "Analytics", "Decision Making", "Real-time"],
      read: "7 min read"
    },
    {
      title: "How to Build a High-Performing AI Development Team",
      slug: "building-ai-development-team",
      excerpt: "Strategies for recruiting, managing, and retaining top AI talent in a competitive market.",
      content: "Skilled AI professionals are in high demand. This article shares practical approaches to building and maintaining an effective AI development team, from recruitment to ongoing professional development.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop",
      author: "Marcus Johnson",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      date: "March 18, 2024",
      category: "Teams",
      tags: ["Team Building", "Talent", "Leadership", "Management"],
      read: "9 min read"
    }
  ]; 
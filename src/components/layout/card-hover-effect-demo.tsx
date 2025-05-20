import { HoverEffect } from "@/components/layout/card-hover-effect";
import { blogPosts } from "@/data/blog-posts";

export default function CardHoverEffectDemo() {
  const items = blogPosts.map(post => ({
    title: post.title,
    description: (
      <div className="space-y-4 p-4 sm:p-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl group-hover:rounded-lg group-active:rounded-lg transition-all duration-300 -mx-4 sm:mx-0 -mt-4 sm:mt-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
          />
        </div>
        <p className="text-lg font-bold text-[#0F0326] line-clamp-2 mt-4">{post.title}</p>
        <div className="flex items-center gap-2 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:translate-y-[-4px] mt-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#88bf42]/20 to-[#88bf42]/10 text-[#88bf42] backdrop-blur-sm border border-[#88bf42]/20 shadow-sm">
            {post.category}
          </span>
          <span className="text-xs text-[#696869]">{post.read}</span>
        </div>
        <div className="flex items-center justify-center pt-4 mt-6 border-t border-gray-100 group-hover:border-[#88bf42]/20 group-active:border-[#88bf42]/20 sm:pt-6 sm:mt-8">
          <div className="flex items-center gap-2 text-[#88bf42]">
            <span className="text-sm font-medium">Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    ),
    link: `/blog/${post.slug}`
  }));

  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  );
}

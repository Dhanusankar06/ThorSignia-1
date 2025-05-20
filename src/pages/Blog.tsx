"use client";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/layout/text-generate-effect";
import CardHoverEffectDemo from "@/components/layout/card-hover-effect-demo";
import { blogPosts } from "@/data/blog-posts";
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[#88bf42] blur-[100px] -translate-y-1/2"></div>
          <div className="absolute right-0 bottom-0 bg-[#0f0326] blur-[90px] w-96 h-96"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8">
          <TextGenerateEffect
            words="Insights & Innovation"
            className="text-4xl font-bold tracking-tight text-[#0f0326] sm:text-6xl text-center mb-8"
          />
          <TextGenerateEffect
            words="Explore our latest thoughts on technology, innovation, and digital transformation."
            className="mt-6 text-lg leading-8 text-[#696869] text-center max-w-3xl mx-auto"
          />
        </div>
      </div>

      {/* Blog Grid */}
      <div className="pb-16">
        <CardHoverEffectDemo />
      </div>
            <Footer />
    </div>
  );
}

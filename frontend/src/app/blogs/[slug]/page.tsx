import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mockBlogs = [
  {
    title: "Student Help Corner",
    slug: "admission-path-4u",
    content: "Expert admission counseling helps you choose the right course and college based on your interests, academic background, and career goals. We provide end-to-end guidance from application to final admission.",
    author: "Nitish Kumar",
    date: "April 13, 2026",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
  },
  {
    title: "How to Prepare for JEE Main 2026",
    slug: "jee-main-2026-preparation",
    content: "JEE Main is one of India's most competitive engineering entrance exams. Here is a complete preparation strategy to help you crack it. Focus on building a strong foundation in Physics, Chemistry, and Mathematics. Solve previous year papers and take regular mock tests.",
    author: "Admission Team",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
  },
  {
    title: "Top 10 B.Tech Colleges in Bangalore",
    slug: "top-btech-colleges-bangalore",
    content: "Bangalore is home to some of India's finest engineering colleges. Here is our curated list of the top 10 B.Tech institutions. These colleges offer excellent placements, world-class infrastructure, and highly experienced faculty.",
    author: "Admission Team",
    date: "April 5, 2026",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
  }
];

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  
  const blog = mockBlogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="bg-background text-foreground py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-500 mb-8">The article you are looking for does not exist.</p>
        <Link href="/blogs" className="text-primary hover:underline">
          &larr; Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-background text-foreground pb-24">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          
          <div className="mb-6">
            <Link href="/blogs" className="text-sm text-yellow-600 font-semibold hover:text-yellow-700 transition">
              &larr; Back to Blogs
            </Link>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold">
                {blog.author[0]}
              </div>
              <span className="font-medium text-gray-700">{blog.author}</span>
            </div>
            <span>•</span>
            <span>{blog.date}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed text-lg">
              {blog.content}
            </p>
            <p className="mt-6 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-6 leading-relaxed text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

        </div>
      </div>
    </article>
  );
}

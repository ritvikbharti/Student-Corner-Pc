'use client';
import React from 'react';
import Link from 'next/link';

export default function LatestNews() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Latest News & Blogs</h2>
        <p className="text-gray-500 mt-2">
          Insights, updates, and articles on education and admissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Student Help Corner",
            slug: "admission-path-4u",
            excerpt: "Expert admission counseling helps you choose the right course and college based on your interests, academic background, and career goals.",
            author: "Nitish Kumar",
            date: "April 13, 2026",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
          },
          {
            title: "How to Prepare for JEE Main 2026",
            slug: "jee-main-2026-preparation",
            excerpt: "JEE Main is one of India's most competitive engineering entrance exams. Here is a complete preparation strategy to help you crack it.",
            author: "Admission Team",
            date: "April 10, 2026",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
          },
          {
            title: "Top 10 B.Tech Colleges in Bangalore",
            slug: "top-btech-colleges-bangalore",
            excerpt: "Bangalore is home to some of India finest engineering colleges. Here is our curated list of the top 10 B.Tech institutions.",
            author: "Admission Team",
            date: "April 5, 2026",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
          }
        ].map((post) => (
          <div key={post.slug} 
               className="rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white overflow-hidden">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
                }}
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.author} • {post.date}</span>
                <Link href={`/blogs/${post.slug}`}
                   className="text-yellow-500 font-semibold text-sm hover:text-yellow-600">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/blogs"
           className="inline-block border border-yellow-400 text-yellow-600 font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
          View All Blogs →
        </Link>
      </div>
    </section>
  );
}

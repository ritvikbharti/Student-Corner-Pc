'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const examsData = [
  {
    name: "JEE MAIN 2026",
    slug: "jee-main-2026",
    date: "April 8, 2026",
    mode: "Online",
    category: "Engineering",
    description: "National entrance exam for NITs, IIITs and GFTIs."
  },
  {
    name: "JEE ADVANCED 2026",
    slug: "jee-advanced-2026",
    date: "May 18, 2026",
    mode: "Online",
    category: "Engineering",
    description: "Entrance exam for IITs, conducted after JEE Main."
  },
  {
    name: "NEET UG 2026",
    slug: "neet-ug-2026",
    date: "May 4, 2026",
    mode: "Offline",
    category: "Medical",
    description: "Medical entrance exam for MBBS/BDS admissions across India."
  },
  {
    name: "CAT 2026",
    slug: "cat-2026",
    date: "November 2026",
    mode: "Online",
    category: "Management",
    description: "MBA entrance exam for IIMs and top B-Schools."
  },
  {
    name: "CLAT 2026",
    slug: "clat-2026",
    date: "December 2026",
    mode: "Online",
    category: "Law",
    description: "Common Law Admission Test for NLUs across India."
  },
  {
    name: "CUET UG 2026",
    slug: "cuet-ug-2026",
    date: "May 2026",
    mode: "Online",
    category: "Engineering",
    description: "Central Universities common entrance test for UG programs."
  }
];

export default function ExamsPage() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Engineering', 'Medical', 'Management', 'Law'];
  
  const filteredExams = filter === 'All' 
    ? examsData 
    : examsData.filter(exam => exam.category === filter);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Engineering': return 'bg-yellow-400';
      case 'Medical': return 'bg-green-500';
      case 'Management': return 'bg-blue-500';
      case 'Law': return 'bg-purple-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Upcoming <span className="text-primary">Exams</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Stay updated with the latest entrance exam schedules and details.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-foreground text-white' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Exams List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExams.map((exam) => (
            <div key={exam.slug} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow">
              {/* Left Colored Strip */}
              <div className={`w-full sm:w-3 ${getCategoryColor(exam.category)}`} />
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-foreground">{exam.name}</h3>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {exam.mode}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{exam.description}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <span className="mr-2">📅</span> {exam.date}
                  </div>
                  <Link 
                    href={`/exams/${exam.slug}`} 
                    className="text-primary font-semibold hover:text-yellow-600 transition-colors text-sm flex items-center group"
                  >
                    View Details <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

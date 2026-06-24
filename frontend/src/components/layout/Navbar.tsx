import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">
            Student Help
          </span>
          <span className="text-xl font-extrabold text-yellow-400"> Corner</span>
        </a>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-yellow-500 transition">Home</a>
          <a href="/colleges" className="hover:text-yellow-500 transition">Colleges</a>
          <a href="/exams" className="hover:text-yellow-500 transition">Exams</a>
          <a href="/blogs" className="hover:text-yellow-500 transition">Blogs</a>
          <a href="/services" className="hover:text-yellow-500 transition">Services</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 
                          rounded-full px-3 py-1.5 text-sm text-gray-400 w-44">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search colleges...</span>
          </div>
          
          {/* CTA */}
          <a href="/contact"
             className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold 
                        px-5 py-2 rounded-full text-sm transition whitespace-nowrap">
            Apply for Scholarship
          </a>
        </div>
      </div>

      {/* Course shortcut bar */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex gap-6 text-xs font-bold 
                        tracking-wider text-gray-600 overflow-x-auto py-2">
          {["B.TECH", "MBBS", "MBA", "DESIGN", "LAW", "ABROAD MBBS"].map((c) => (
            <a key={c} 
               href={`/colleges/${c.toLowerCase().replace(" ", "-")}`}
               className="hover:text-yellow-500 transition whitespace-nowrap">
              {c}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

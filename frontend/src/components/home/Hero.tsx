import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: '600px' }}
    >
      {/* Background Image */}
      <img
        src="/images/hero.jpg"
        alt="Students graduating"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Advanced Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center text-center mt-12">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 hover:bg-white/20 transition cursor-default">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          #1 Admission Platform in India
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Dream College</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md">
          Explore thousands of colleges, courses, and scholarships. Get expert counseling to kickstart your career with confidence.
        </p>
        
        {/* Glassmorphism Search Bar */}
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-2 rounded-full flex flex-col sm:flex-row items-center gap-2 shadow-2xl mb-12">
          <input 
            type="text"
            placeholder="Search by college, course, or location..."
            className="w-full bg-transparent text-white placeholder-gray-300 px-6 py-3 outline-none"
          />
          <Link
            href="/colleges"
            className="w-full sm:w-auto whitespace-nowrap bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Search Now
          </Link>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl opacity-90">
          {[
            { label: 'Top Colleges', value: '500+' },
            { label: 'Courses', value: '120+' },
            { label: 'Students Guided', value: '50k+' },
            { label: 'Success Rate', value: '98%' },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
              <span className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.value}</span>
              <span className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

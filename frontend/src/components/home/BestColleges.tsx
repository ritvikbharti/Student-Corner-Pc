'use client';
import React from 'react';

export default function BestColleges() {
  const categories = [
    { name: 'B.Arch', icon: '🏛️' },
    { name: 'B.Com', icon: '📊' },
    { name: 'B.E', icon: '⚙️' },
    { name: 'B.Tech', icon: '💻' },
    { name: 'BBA', icon: '📈' },
    { name: 'BCA', icon: '⌨️' },
    { name: 'M.Tech', icon: '🔬' },
    { name: 'MBA', icon: '💼' },
    { name: 'MCA', icon: '📱' },
    { name: 'Ph.D', icon: '🎓' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Find Best <span className="text-secondary">College/Universities</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-4xl shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:border-primary">
                {category.icon}
              </div>
              <h3 className="mt-4 font-medium text-foreground group-hover:text-secondary transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

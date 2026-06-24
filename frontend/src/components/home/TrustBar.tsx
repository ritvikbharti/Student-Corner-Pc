import React from 'react';

export default function TrustBar() {
  return (
    <section className="bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "50,000+", label: "Students Counseled", icon: "🎓" },
            { number: "1,000+", label: "Partner Colleges", icon: "🏫" },
            { number: "₹18 LPA", label: "Avg Highest Package", icon: "💰" },
            { number: "98%", label: "Admission Success Rate", icon: "✅" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-extrabold text-yellow-400">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

export default function UpcomingExams() {
  const exams = [
    {
      name: "JEE MAIN 2026",
      date: "April 8, 2026",
      mode: "Online",
      desc: "National entrance exam for NITs, IIITs and top engineering colleges.",
      slug: "jee-main-2026"
    },
    {
      name: "NEET UG 2026",
      date: "May 4, 2026",
      mode: "Offline",
      desc: "Medical entrance exam for MBBS, BDS admissions across India.",
      slug: "neet-ug-2026"
    },
    {
      name: "CAT 2026",
      date: "November 2026 (TBA)",
      mode: "Online",
      desc: "MBA entrance exam for IIMs and top business schools.",
      slug: "cat-2026"
    },
    {
      name: "CLAT 2026",
      date: "December 2026 (TBA)",
      mode: "Online",
      desc: "Common Law Admission Test for NLUs across India.",
      slug: "clat-2026"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Upcoming <span className="text-secondary">Exams</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exams.map((exam, index) => {
            const dateParts = exam.date.split(' ');
            const month = dateParts[0].substring(0, 3);
            const dayOrYear = dateParts[1]?.replace(',', '') || '';

            return (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-xl flex flex-col sm:flex-row hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Date Badge */}
                <div className="bg-primary flex flex-col items-center justify-center p-4 sm:w-24 shrink-0 text-black">
                  <span className="font-bold text-xl leading-none">{dayOrYear}</span>
                  <span className="text-sm font-semibold uppercase tracking-wider">{month}</span>
                </div>
                
                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-[18px] text-gray-900">{exam.name}</h3>
                      <span className="bg-gray-100 text-gray-600 text-[11px] px-2 py-1 rounded font-medium">
                        {exam.mode}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{exam.desc}</p>
                  </div>
                  
                  <div>
                    <Link 
                      href={`/exams/${exam.slug}`} 
                      className="text-primary text-sm font-semibold hover:text-yellow-600 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

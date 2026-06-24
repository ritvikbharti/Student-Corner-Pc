import React from 'react';
import { Briefcase, Building, FileText, GraduationCap, PenTool, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="h-5 w-5 text-gray-800" />,
      title: "Admission Counseling",
      desc: "Expert guidance to choose the right college and course based on your goals."
    },
    {
      icon: <Building className="h-5 w-5 text-gray-800" />,
      title: "College Selection",
      desc: "Compare top colleges by fees, ranking, placements, and location."
    },
    {
      icon: <FileText className="h-5 w-5 text-gray-800" />,
      title: "Application Assistance",
      desc: "End-to-end help with application forms, documents, and deadlines."
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-gray-800" />,
      title: "Scholarship Guidance",
      desc: "Find and apply for scholarships tailored to your academic profile."
    },
    {
      icon: <PenTool className="h-5 w-5 text-gray-800" />,
      title: "Entrance Exam Prep",
      desc: "Resources and tips for JEE, NEET, CAT, CLAT and more."
    },
    {
      icon: <Globe className="h-5 w-5 text-gray-800" />,
      title: "Abroad Admissions",
      desc: "Expert support for MBBS and other degrees at international universities."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our <span className="text-secondary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col items-start text-left"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

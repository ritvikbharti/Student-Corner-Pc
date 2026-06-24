import React from 'react';

const services = [
  {
    icon: "🎓",
    title: "College Finder",
    description: "Your smart guide to finding the best-fit college tailored to your needs.",
    features: ["Personalized Recommendations", "500+ Colleges", "Filter by Course & Budget"],
    cta: "Discover Now",
    href: "/services"
  },
  {
    icon: "💰",
    title: "Scholarship Program",
    description: "Grab up to 100% scholarships to fund your dream education.",
    features: ["Merit-Based Scholarships", "Need-Based Aid", "Easy Application"],
    cta: "Apply Now",
    href: "/contact"
  },
  {
    icon: "📋",
    title: "Application Process",
    description: "Apply to multiple colleges through a single streamlined admission process.",
    features: ["Single Application", "Document Assistance", "Status Tracking"],
    cta: "Join Now",
    href: "/contact"
  },
  {
    icon: "🏫",
    title: "Campus Achiever",
    description: "Unlock exclusive campus opportunities and excel in your academic journey.",
    features: ["Campus Tours", "Student Communities", "Career Guidance"],
    cta: "Get Started",
    href: "/contact"
  },
  {
    icon: "🏦",
    title: "Education Loan",
    description: "Turn dreams into reality with easy and accessible education loans.",
    features: ["Low Interest Rates", "Flexible Repayment", "Quick Approval"],
    cta: "Apply Now",
    href: "/contact"
  },
  {
    icon: "🔄",
    title: "Re-admission",
    description: "Simplified re-admission services to get you back on track effortlessly.",
    features: ["Quick Re-enrollment", "Credit Transfer", "Academic Counseling"],
    cta: "Register Now",
    href: "/contact"
  }
]

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Comprehensive Admission Support
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            From college discovery to final enrollment — we guide you through 
            every step of your admission journey.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { number: "6+", label: "Services Offered" },
            { number: "10,000+", label: "Students Helped" },
            { number: "500+", label: "Partner Colleges" },
            { number: "98%", label: "Success Rate" },
          ].map((stat) => (
            <div key={stat.label} 
                 className="bg-white rounded-xl p-4 text-center border border-gray-100">
              <div className="text-2xl font-bold text-yellow-500">{stat.number}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title}
                 className="bg-white rounded-xl border border-gray-100 p-6 
                            hover:shadow-md transition">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              <ul className="space-y-1 mb-5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href={service.href}
                 className="inline-block bg-yellow-400 text-black font-semibold 
                            text-sm px-5 py-2 rounded-full hover:bg-yellow-300 transition">
                {service.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a href="/services"
             className="inline-block bg-gray-900 text-white font-bold px-8 py-3 
                        rounded-full hover:bg-gray-700 transition">
            View All Services →
          </a>
        </div>
      </div>
    </section>
  )
}

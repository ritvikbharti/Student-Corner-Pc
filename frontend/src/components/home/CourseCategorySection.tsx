import React from 'react';

const courseCategories = [
  { 
    label: "B.Tech", 
    href: "/colleges/btech",
    description: "Engineering & Technology",
    colleges: "500+ Colleges",
    icon: "💻",
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    tag: "Most Popular"
  },
  { 
    label: "MBBS", 
    href: "/colleges/mbbs",
    description: "Medicine & Surgery",
    colleges: "300+ Colleges",
    icon: "🩺",
    color: "from-red-50 to-red-100",
    border: "border-red-200",
    tag: "High Demand"
  },
  { 
    label: "MBA", 
    href: "/colleges/mba",
    description: "Business & Management",
    colleges: "400+ Colleges",
    icon: "📊",
    color: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    tag: "Top Salary"
  },
  { 
    label: "B.Arch", 
    href: "/colleges/barch",
    description: "Architecture & Design",
    colleges: "150+ Colleges",
    icon: "🏛️",
    color: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    tag: null
  },
  { 
    label: "BCA", 
    href: "/colleges/bca",
    description: "Computer Applications",
    colleges: "350+ Colleges",
    icon: "🖥️",
    color: "from-cyan-50 to-cyan-100",
    border: "border-cyan-200",
    tag: null
  },
  { 
    label: "B.Com", 
    href: "/colleges/bcom",
    description: "Commerce & Finance",
    colleges: "600+ Colleges",
    icon: "📈",
    color: "from-green-50 to-green-100",
    border: "border-green-200",
    tag: null
  },
  { 
    label: "Law (LLB)", 
    href: "/colleges/law",
    description: "Legal Studies",
    colleges: "200+ Colleges",
    icon: "⚖️",
    color: "from-yellow-50 to-yellow-100",
    border: "border-yellow-200",
    tag: null
  },
  { 
    label: "M.Tech", 
    href: "/colleges/mtech",
    description: "Advanced Engineering",
    colleges: "250+ Colleges",
    icon: "🔬",
    color: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    tag: null
  },
  { 
    label: "Design", 
    href: "/colleges/design",
    description: "Fashion & Creative Arts",
    colleges: "180+ Colleges",
    icon: "🎨",
    color: "from-pink-50 to-pink-100",
    border: "border-pink-200",
    tag: null
  },
  { 
    label: "Abroad MBBS", 
    href: "/colleges/abroad-mbbs",
    description: "International Medicine",
    colleges: "100+ Universities",
    icon: "✈️",
    color: "from-teal-50 to-teal-100",
    border: "border-teal-200",
    tag: "Low Cost"
  },
  { 
    label: "BBA", 
    href: "/colleges/bba",
    description: "Business Administration",
    colleges: "450+ Colleges",
    icon: "💼",
    color: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    tag: null
  },
  { 
    label: "MCA", 
    href: "/colleges/mca",
    description: "Computer Applications PG",
    colleges: "280+ Colleges",
    icon: "⌨️",
    color: "from-violet-50 to-violet-100",
    border: "border-violet-200",
    tag: null
  },
]

export default function CourseCategorySection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold 
                           uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Explore by Course
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Find Best{" "}
            <span className="text-red-500 underline decoration-yellow-400 
                             decoration-4 underline-offset-4">
              College/Universities
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">
            Explore 1,000+ colleges across India and abroad. 
            Filter by course, budget, and location.
          </p>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {courseCategories.map((course) => (
            <a
              key={course.label}
              href={course.href}
              className={`relative group bg-gradient-to-br ${course.color} 
                         border ${course.border} rounded-2xl p-4 flex flex-col 
                         items-center text-center gap-2 hover:shadow-lg hover:-translate-y-1 
                         transition-all duration-200 cursor-pointer`}
            >
              {/* Tag badge */}
              {course.tag && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black 
                                 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                  {course.tag}
                </span>
              )}

              {/* Icon */}
              <div className="text-3xl w-14 h-14 rounded-xl bg-white shadow-sm 
                             flex items-center justify-center group-hover:scale-110 
                             transition-transform duration-200">
                {course.icon}
              </div>

              {/* Label */}
              <span className="font-bold text-sm text-gray-900">{course.label}</span>

              {/* Description */}
              <span className="text-[11px] text-gray-500 leading-tight hidden sm:block">
                {course.description}
              </span>

              {/* College count */}
              <span className="text-[11px] font-semibold text-yellow-600 bg-white 
                              px-2 py-0.5 rounded-full border border-yellow-200">
                {course.colleges}
              </span>
            </a>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <a href="/colleges"
             className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 
                        text-white font-bold px-8 py-3 rounded-full transition text-sm">
            View All Courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

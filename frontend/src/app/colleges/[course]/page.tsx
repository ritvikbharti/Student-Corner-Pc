'use client';
import React, { use } from 'react';
import Link from 'next/link';
import { mockColleges } from '@/data/mockColleges';

// Format fees: 221935 → ₹2,21,935/year
function formatFees(amount: number): string {
  if (!amount) return 'N/A';
  return '₹' + amount.toLocaleString('en-IN') + '/year'
}

// Format package: 5000000 → ₹50 LPA  (value is stored in rupees, divide by 100000)
function formatPackage(amount: number): string {
  if (!amount) return 'N/A';
  const lpa = amount / 100000
  if (lpa >= 100) {
    return '₹' + (lpa / 100).toFixed(1) + ' Cr LPA'
  }
  return '₹' + (Number.isInteger(lpa) ? lpa : lpa.toFixed(1)) + ' LPA'
}

export default function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  const resolvedParams = use(params);
  
  // Convert course param back to readable name
  const courseParam = resolvedParams.course;
  const isCollege = !isNaN(Number(courseParam));

  if (isCollege) {
    const whatsappNumber = "919546369339";
    const foundCollege = mockColleges.find(c => c.id === courseParam);
    const collegeName = foundCollege ? foundCollege.name : `College ${courseParam}`;

    function handleApplyNow() {
      const message = encodeURIComponent(
        `Hi, I am interested in getting admission at ${collegeName}. Please guide me through the process.`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }

    return (
      <div className="bg-background text-foreground py-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-heading font-bold mb-6">{collegeName}</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Take the next step in your educational journey. Apply now via WhatsApp for personalized guidance and support.
        </p>

        <button
          onClick={handleApplyNow}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882a.75.75 0 00.921.921l6.04-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.964-1.362l-.355-.212-3.681.894.912-3.565-.231-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          Apply Now on WhatsApp
        </button>
      </div>
    );
  }

  const courseName = courseParam === 'mbbs' ? 'MBBS' : 
                     courseParam === 'btech' ? 'B.Tech' : 
                     courseParam === 'mba' ? 'MBA' :
                     courseParam === 'design' ? 'Design' :
                     courseParam === 'law' ? 'Law' :
                     courseParam === 'abroad-mbbs' ? 'Abroad MBBS' : courseParam.toUpperCase();

  const fullCourseName = courseParam === 'mbbs' ? 'Bachelor of Medicine, Bachelor of Surgery' : courseName;

  const filteredCourseColleges = mockColleges.filter(c => c.courses.some(cr => cr.toLowerCase().includes(courseName.toLowerCase()) || cr.toLowerCase() === courseName.toLowerCase() || (courseName === 'MBBS' && cr === 'Abroad MBBS')));

  return (
    <div className="bg-background text-foreground pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">{'>'}</span>
          <Link href="/colleges" className="hover:text-primary">Colleges</Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-gray-900 font-medium">{courseName}</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          {fullCourseName}
        </h1>
        <h2 className="text-xl text-secondary font-medium mt-2">
          Top {courseName} Colleges in India
        </h2>
        <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
          {courseName === 'MBBS' ? 
            "MBBS is India's premier medical undergraduate degree, spanning 5.5 years including a 1-year internship. It trains students to become licensed medical doctors with expertise in clinical medicine, surgery, and patient care."
            : `Explore top colleges and universities offering ${courseName}. Find details about eligibility, fees, placements, and more.`
          }
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center">
              <input 
                type="text" 
                placeholder="Search colleges by name, city or state..." 
                className="w-full bg-transparent focus:outline-none px-2"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-yellow-400">
                Search
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-1">Duration</p>
                <p className="font-bold text-sm">5.5 Years (incl. 1yr Internship)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-1">Eligibility</p>
                <p className="font-bold text-sm">10+2 with PCB, NEET-UG qualified</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-1">Avg Salary</p>
                <p className="font-bold text-sm">₹8–25 LPA</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-1">Colleges Listed</p>
                <p className="font-bold text-sm">
                  {mockColleges.filter(c => c.courses.some(cr => cr.toLowerCase().includes(courseName.toLowerCase()) || cr.toLowerCase() === courseName.toLowerCase() || (courseName === 'MBBS' && cr === 'Abroad MBBS'))).length}+ Colleges
                </p>
              </div>
            </div>

            {/* Colleges List Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Colleges</h3>
              <p className="text-gray-600 mb-6">Best {courseName} colleges with placement records</p>
              
              {filteredCourseColleges.length === 0 ? (
                <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">🏫</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">No colleges found</h4>
                  <p className="text-gray-500 mb-6">Try adjusting your search or check back later</p>
                  <Link href="/contact" className="bg-foreground text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
                    Request College Info
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredCourseColleges.map((college) => (
                    <div key={college.id} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="relative w-full md:w-56 md:h-40 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                        {/* Badge */}
                        <div className="absolute top-2 left-2 z-10 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow-md flex items-center gap-1">
                          ⭐ {college.rating}
                        </div>
                        {/* Image with zoom on hover */}
                        <img
                          src={college.image || 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'}
                          alt={college.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80'
                          }}
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{college.name}</h3>
                          <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                            📍 {college.location}, {college.state}
                          </p>
                          
                          {/* Course Tags */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {college.courses.map(c => (
                              <span key={c} className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4 pt-4 border-t border-gray-100">
                          <div className="mb-4 sm:mb-0 grid grid-cols-2 gap-x-8 gap-y-1 w-full sm:w-auto">
                            <div>
                              <p className="text-xs text-gray-400 uppercase font-semibold">Highest Placement</p>
                              <p className="text-base font-bold text-green-600">{formatPackage(college.highestPlacement)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 uppercase font-semibold">First Year Fees</p>
                              <p className="text-base font-bold text-gray-900">{formatFees(college.firstYearFees)}</p>
                            </div>
                          </div>
                          
                          <Link href={`/colleges/${college.id}`} className="w-full sm:w-auto text-center bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary hover:text-black hover:shadow-lg transition-all duration-300">
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Why Study */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Why Study {courseName}?</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Clinical training at top hospitals</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> NEET-based merit admission</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Diverse specialization options</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Government & private hospital opportunities</li>
              </ul>
            </div>

            {/* Top Recruiters */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Top Recruiters</h3>
              <div className="flex flex-wrap gap-2">
                {['AIIMS', 'Apollo Hospitals', 'Fortis', 'Max Healthcare', 'Medanta'].map(recruiter => (
                  <span key={recruiter} className="bg-gray-100 px-3 py-1 text-xs rounded-full text-gray-700 border border-gray-200">
                    {recruiter}
                  </span>
                ))}
              </div>
            </div>

            {/* Admission Help Card */}
            <div className="bg-gradient-to-br from-secondary to-red-900 p-6 rounded-xl shadow-md text-white text-center">
              <h3 className="text-xl font-bold mb-2">Need Admission Help?</h3>
              <p className="text-red-100 text-sm mb-6">Free counseling by experts</p>
              <Link href="/contact" className="block w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                Talk to Counselor
              </Link>
            </div>

            {/* Explore Other Courses */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Explore Other Courses</h3>
              <ul className="space-y-2">
                {['B.Tech', 'MBA', 'Design', 'Law', 'Abroad MBBS'].map(otherCourse => (
                  <li key={otherCourse}>
                    <Link 
                      href={`/colleges/${otherCourse.toLowerCase().replace('.', '').replace(' ', '-')}`}
                      className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between"
                    >
                      <span>{otherCourse}</span>
                      <span className="text-gray-400 text-xs">Explore →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

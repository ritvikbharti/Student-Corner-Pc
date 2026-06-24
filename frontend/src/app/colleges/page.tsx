'use client';
import React, { useState } from 'react';
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

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');

  // Filter logic
  const filteredColleges = mockColleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'All States' || college.state === selectedState;
    const matchesCourse = selectedCourse === 'All Courses' || college.courses.includes(selectedCourse) || (selectedCourse === 'MBBS' && college.courses.includes('Abroad MBBS'));
    
    return matchesSearch && matchesState && matchesCourse;
  });

  return (
    <div className="bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Explore <span className="text-primary">Colleges</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Find the best college that fits your needs using our comprehensive filters.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-6">Filters</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Search</h3>
                <input 
                  type="text" 
                  placeholder="Search by name or city..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" 
                />
              </div>
              
              <div>
                <h3 className="font-medium mb-2">State</h3>
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option>All States</option>
                  <option>Delhi</option>
                  <option>Gujarat</option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Tamil Nadu</option>
                  <option>Uttar Pradesh</option>
                  <option>Abroad</option>
                  <option>Russia</option>
                  <option>Georgia</option>
                  <option>Kyrgyzstan</option>
                  <option>Kazakhstan</option>
                </select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Course</h3>
                <select 
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option>All Courses</option>
                  <option>B.Tech</option>
                  <option>MBA</option>
                  <option>MBBS</option>
                  <option>Abroad MBBS</option>
                  <option>Law</option>
                  <option>Design</option>
                </select>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedState('All States');
                setSelectedCourse('All Courses');
              }}
              className="w-full mt-8 bg-gray-100 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </aside>

          {/* College List */}
          <div className="w-full lg:w-3/4 space-y-6">
            <p className="text-gray-500 mb-4">Showing {filteredColleges.length} colleges</p>
            
            {filteredColleges.length === 0 ? (
               <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center">
                 <div className="text-6xl mb-4">🏫</div>
                 <h4 className="text-xl font-bold text-gray-800 mb-2">No colleges found</h4>
                 <p className="text-gray-500">Try adjusting your search or filters.</p>
               </div>
            ) : (
              filteredColleges.map((college) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

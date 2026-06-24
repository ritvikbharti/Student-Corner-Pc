import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand */}
        <div>
          <div className="text-xl font-bold mb-3">
            <span className="text-white">Student Help </span>
            <span className="text-yellow-400">Corner</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner in navigating the college admission journey. 
            We help you find the best colleges, courses, and scholarships 
            tailored to your career goals.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link href="/colleges" className="hover:text-yellow-400 transition">Colleges</Link></li>
            <li><Link href="/exams" className="hover:text-yellow-400 transition">Exams</Link></li>
            <li><Link href="/blogs" className="hover:text-yellow-400 transition">Blogs</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400 transition">Our Services</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Popular Courses */}
        <div>
          <h3 className="font-semibold text-white mb-4">Popular Courses</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/courses/btech" className="hover:text-yellow-400 transition">B.Tech Engineering</Link></li>
            <li><Link href="/courses/mba" className="hover:text-yellow-400 transition">MBA / PGDM</Link></li>
            <li><Link href="/courses/mbbs" className="hover:text-yellow-400 transition">MBBS Medical</Link></li>
            <li><Link href="/courses/design" className="hover:text-yellow-400 transition">Design & Fashion</Link></li>
            <li><Link href="/courses/law" className="hover:text-yellow-400 transition">Law (LLB / LLM)</Link></li>
            <li><Link href="/courses/abroad-mbbs" className="hover:text-yellow-400 transition">Abroad MBBS</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-2">
              <span>📍</span>
              <span>Gumma 2, g block, greater noida</span>
            </li>
            <li className="flex gap-2">
              <span>📞</span>
              <div>
                <a href="tel:+919546369339" className="hover:text-yellow-400 block">+91 95463 69339</a>
                <a href="tel:+918077243289" className="hover:text-yellow-400 block">+91 8077243289</a>
              </div>
            </li>
            <li className="flex gap-2">
              <span>✉️</span>
              <a href="mailto:studenthelpcorner@gmail.com" className="hover:text-yellow-400">
                studenthelpcorner@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <span>
            © 2026 StudentHelpCorner. All rights reserved. | Developed by{" "}
            <a href="https://blinks-ai.com/" target="_blank" className="text-yellow-400 hover:underline">
              Blinks AI
            </a>
          </span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

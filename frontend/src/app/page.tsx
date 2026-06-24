import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import CourseCategorySection from '@/components/home/CourseCategorySection';
import ServicesPreview from '@/components/home/ServicesPreview';
import TopPlacements from '@/components/home/TopPlacements';
import UpcomingExams from '@/components/home/UpcomingExams';
import LatestNews from '@/components/home/LatestNews';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero (bg-white) */}
      <Hero />
      
      {/* 2. Trust Bar (bg-gray-900) */}
      <TrustBar />
      
      {/* 3. Course Categories (bg-white) */}
      <div className="bg-white">
        <CourseCategorySection />
      </div>

      {/* 4. Services (bg-gray-50) */}
      <div className="bg-gray-50">
        <ServicesPreview />
      </div>

      {/* 5. Top Placements (bg-white) */}
      <div className="bg-white">
        <TopPlacements />
      </div>

      {/* 6. Upcoming Exams (bg-gray-50) */}
      <div className="bg-gray-50">
        <UpcomingExams />
      </div>

      {/* 7. Blogs (bg-white) */}
      <div className="bg-white">
        <LatestNews />
      </div>
    </div>
  );
}

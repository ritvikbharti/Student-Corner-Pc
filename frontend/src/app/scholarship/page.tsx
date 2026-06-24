import React from 'react';
import ContactPage from '@/app/contact/page';

export default function ScholarshipPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="bg-yellow-50 py-12 text-center border-b border-yellow-100">
        <h1 className="text-4xl font-heading font-bold mb-4 text-yellow-800">Apply for Scholarship</h1>
        <p className="text-yellow-700 max-w-2xl mx-auto px-4">
          Get up to 100% scholarships to fund your dream education based on merit and need. Fill out the form below to apply.
        </p>
      </div>
      <ContactPage />
    </div>
  );
}

import React from 'react';

export default function TopPlacements() {
  const companies = [
    "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", 
    "Accenture", "Cognizant", "Flipkart", "Zomato", "PhonePe", "HDFC Bank"
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Top <span className="text-secondary">Placements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Scrolling Pills (CSS animation can be added later, for now a flex wrap or overflow-x-auto) */}
        <div className="flex overflow-x-auto space-x-4 pb-6 hide-scrollbar mb-8 snap-x snap-mandatory">
          <div className="flex space-x-4 px-4 flex-nowrap shrink-0">
            {companies.map((company) => (
              <div 
                key={company} 
                className="bg-white border border-gray-200 rounded-full px-5 py-2 font-bold text-[13px] text-gray-700 whitespace-nowrap shadow-sm shrink-0 snap-center"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
            <h3 className="text-[28px] font-bold text-primary mb-1">500+ Colleges</h3>
            <p className="text-[14px] text-gray-500 font-medium">Listed across India</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
            <h3 className="text-[28px] font-bold text-primary mb-1">50,000+ Students</h3>
            <p className="text-[14px] text-gray-500 font-medium">Placed successfully</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
            <h3 className="text-[28px] font-bold text-primary mb-1">₹18 LPA</h3>
            <p className="text-[14px] text-gray-500 font-medium">Average highest package</p>
          </div>
        </div>
      </div>
    </section>
  );
}

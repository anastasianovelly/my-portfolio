import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Import icon for the link

// Default data structure for safety, in case props are missing
const defaultData = {
  title: "Case Study",
  heroImage: "https://placehold.co/1200x600/cccccc/FFFFFF?text=Image+Not+Available",
  introduction: "Introduction content not provided.",
  features: [
    { title: "Feature/Challenge", description: "Details not provided." }
  ],
  timeline: [
    { phase: '?', title: "Timeline Event", date: "N/A", description: "Details not provided." }
  ],
};

// New reusable component based on the TelecomBilling example layout
// Expects a 'data' prop with the specific structure
export default function NewCaseStudyLayout(props) {
  // Use provided data or fall back to default
  const caseStudyData = props.data || defaultData;

  // Basic error handling for background image (console log)
  const handleImageError = () => {
      console.error(`Failed to load background image: ${caseStudyData.heroImage}`);
  };

  return (
    // Main container for the page
    <div className="min-h-screen bg-white">

      {/* --- Hero Section --- */}
      {/* Added relative positioning to contain the absolute positioned link */}
      <section
        className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center relative" // Removed flex items-center justify-center here, added relative
        style={{ backgroundImage: `url(${caseStudyData.heroImage})` }}
        aria-labelledby="case-study-title"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* --- Back Link Section (Moved onto Image) --- */}
        {/* Positioned absolutely within the hero section */}
        <div className="absolute top-0 left-0 p-4 md:p-6 z-20"> {/* Added z-20 to be above overlay */}
          <Link
              to="/casestudypage" // Link back to the main case studies list page
              // Updated text color for visibility on image/overlay
              className="inline-flex items-center text-white hover:text-gray-200 font-semibold transition duration-300"
          >
              <ArrowLeftIcon className="h-5 w-5 mr-1" />
              Back to Case Studies
          </Link>
        </div>

        {/* Hero Content Container - Centered */}
        {/* Used flex to center content vertically and horizontally */}
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center relative z-10">
           <h1 id="case-study-title" className="text-4xl md:text-6xl font-bold text-white mb-4"> {/* Ensured text is white */}
                {caseStudyData.title}
            </h1>
        </div>
      </section>

      {/* --- Main Content Container --- */}
      {/* Container for content below the hero */}
      <div className="container mx-auto px-4">

         {/* --- Introduction Section --- */}
         {/* Added top padding here since the back link is no longer providing it */}
        <section className="pt-12 md:pt-16">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                 {caseStudyData.introduction}
              </p>
           </div>
        </section>

      </div> {/* End Main Content Container */}


      {/* Sections below can remain outside the main container if they have full-width backgrounds */}
      {/* Or be moved inside the container above if they should be constrained */}

      {/* --- Features Section (Three Column) --- */}
      {caseStudyData.features && caseStudyData.features.length > 0 && (
        <section className="bg-gray-50 py-12 md:py-16 mt-12 md:mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {caseStudyData.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Timeline Section --- */}
      {caseStudyData.timeline && caseStudyData.timeline.length > 0 && (
        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center mb-12 md:mb-16 text-gray-800">Project Timeline</h2>
          <div className="relative max-w-2xl mx-auto border-l-4 border-blue-500 pl-8 md:pl-10 space-y-10">
            {caseStudyData.timeline.map((item, index) => (
              <div key={index} className="relative">
                 {/* Timeline Dot */}
                 <div className="absolute -left-[44px] md:-left-[52px] top-0 z-10 flex items-center justify-center w-6 h-6 mt-1">
                      <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center shadow">
                           <span className="text-white text-xs font-semibold">{item.phase}</span>
                      </div>
                 </div>
                {/* Timeline Item Content */}
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 ml-4 md:ml-0">
                   <span className="text-sm font-medium text-blue-600 block mb-1">{item.date}</span>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div> // End Root div
  );
}

import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams to get URL parameters and Link for navigation
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Optional: Icon for back link

// Updated placeholder component using the layout from EnterpriseUX example
// Assumes it's placed in src/components/ as per previous request
export default function CaseStudyDetailPlaceholder() {
    // Get the dynamic part of the URL (e.g., 'telecom-billing' from '/case-studies/telecom-billing')
    const { studyId } = useParams();

    // Capitalize the first letter and replace hyphens for display title (optional enhancement)
    const displayTitle = studyId
        ? studyId
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
        : 'Case Study';

    // Generic placeholder image - replace if you have a default image
    const placeholderHeroImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Generic tech/workspace image

    // Removed unused handleImageError function
    // const handleImageError = (e) => { ... };

    return (
        // Main container for the page, adopting structure from EnterpriseUX
        <div className="min-h-screen bg-white">

          {/* --- Hero Section (from EnterpriseUX layout) --- */}
          <section
            className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center text-white relative"
            // Using a placeholder image, replace if needed
            style={{ backgroundImage: `url(${placeholderHeroImage})` }}
            aria-labelledby="case-study-title"
            // Note: onError doesn't work directly on style background images
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Hero Content Container changed to full width */}
            <div className="w-full px-4 text-center relative z-10">
               {/* Display dynamic title */}
               <h1 id="case-study-title" className="text-4xl md:text-6xl font-bold mb-4">
                    Case Study: {displayTitle}
                </h1>
            </div>
          </section>

          {/* --- Back Link Section (from EnterpriseUX layout) --- */}
          <div className="w-full px-4 pt-8 md:pt-12"> {/* changed from "container mx-auto px-4 pt-8 md:pt-12" */}
            <Link
                to="/casestudypage" // Link back to the main case studies list page
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
                <ArrowLeftIcon className="h-5 w-5 mr-1" />
                Back to Case Studies
            </Link>
          </div>

           {/* --- Introduction Section (Placeholder Content) --- */}
           {/* Using structure from EnterpriseUX layout */}
          <section className="container mx-auto px-4 py-8 md:py-12">
             <div className="mx-auto text-center">
                {/* Using a generic title, could also use {displayTitle} */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Overview</h2>
                {/* Display placeholder text */}
                <p className="text-lg text-gray-700 leading-relaxed">
                   Detailed content for the "{displayTitle}" case study is coming soon! Check back later for insights into the challenge, solution, and outcomes.
                </p>
             </div>
          </section>

          {/* --- Other sections (Features, Timeline) are omitted in this placeholder version --- */}

        </div>
      );
}

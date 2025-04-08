import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Import icon for the link

export default function EnterpriseUX() {
    // Hardcoded data for this specific case study
    // Consider moving this to a separate file or fetching if it grows complex
    const caseStudyData = {
        title: "Enterprise UX Revamp", // Updated title to match component name better
        heroImage: "https://images.unsplash.com/photo-1726056652635-7db7a936e7be?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg", // <<< REPLACE with your actual hero image path
        introduction: "Led a comprehensive redesign for a legacy enterprise platform, focusing on improving usability, streamlining workflows, and enhancing user satisfaction for internal teams.",
        features: [
          {
            title: "Challenge",
            description: "The existing platform suffered from an outdated interface, complex navigation, and inefficient task flows, leading to user frustration and decreased productivity.",
          },
          {
            title: "Solution",
            description: "Conducted user research, redesigned key workflows, implemented a modern UI based on a new design system, and performed iterative usability testing.",
          },
          {
            title: "Outcome",
            description: "Achieved a significant improvement in task completion rates, reduced training time for new users, and received positive feedback on the enhanced user experience.",
          },
        ],
        timeline: [
          {
            phase: 1,
            title: "Discovery & Research",
            date: "Q1 2024",
            description: "Understanding project goals, user research (interviews, surveys), competitive analysis, and requirement gathering.",
          },
          {
            phase: 2,
            title: "Design & Prototyping",
            date: "Q2 2024",
            description: "Creating wireframes, high-fidelity mockups, user flows, and interactive prototypes using Figma. Iterating based on stakeholder and user feedback.",
          },
          {
            phase: 3,
            title: "Development Handoff & Support",
            date: "Q3 2024",
            description: "Preparing detailed design specifications, collaborating with developers during implementation, and conducting design QA.",
          },
          {
            phase: 4,
            title: "Post-Launch Analysis",
            date: "Q4 2024",
            description: "Monitoring usage patterns, gathering user feedback post-launch, and identifying areas for future improvement.",
          },
        ],
      };

      // Function to handle image loading errors
      const handleImageError = (e) => {
          e.target.src='https://placehold.co/1200x600/cccccc/FFFFFF?text=Image+Error'; // Provide a fallback
      };


      return (
        // Main container for the page
        <div className="min-h-screen bg-white">

          {/* --- Hero Section --- */}
          <section
            className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center text-white relative"
            style={{ backgroundImage: `url(${caseStudyData.heroImage})` }}
            aria-labelledby="case-study-title"
            onError={handleImageError} // Add error handling for background image if needed (might require different approach)
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Hero Content Container */}
            <div className="container mx-auto px-4 text-center relative z-10">
               <h1 id="case-study-title" className="text-4xl md:text-6xl font-bold mb-4">
                    {caseStudyData.title}
                </h1>
            </div>
          </section>

          {/* --- Back Link Section --- */}
          <div className="container mx-auto px-4 pt-8 md:pt-12"> {/* Added container and padding */}
            <Link
                to="/casestudypage" // Link back to the main case studies list page
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
                <ArrowLeftIcon className="h-5 w-5 mr-1" />
                Back to Case Studies
            </Link>
          </div>

           {/* --- Introduction Section --- */}
           {/* Adjusted padding slightly */}
          <section className="container mx-auto px-4 py-8 md:py-12">
             <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Introduction</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                   {caseStudyData.introduction}
                </p>
             </div>
          </section>

          {/* --- Three Column Section --- */}
          <section className="bg-gray-50 py-12 md:py-16">
            <div className="container mx-auto px-4">
              {/* Grid container: 1 column on small, 3 on medium+ screens */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {caseStudyData.features.map((feature, index) => (
                  // Grid Item (Column)
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Timeline Section --- */}
          <section className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center mb-12 md:mb-16 text-gray-800">Project Timeline</h2>

            {/* Timeline Container */}
            <div className="relative max-w-2xl mx-auto border-l-4 border-blue-500 pl-8 md:pl-10 space-y-10">

              {caseStudyData.timeline.map((item, index) => (
                // Timeline Item Container
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
        </div>
      );
  }

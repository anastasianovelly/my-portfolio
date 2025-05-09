export default function TelecomBilling() {
    const caseStudyData = {
        title: "Project Alpha Case Study",
        heroImage: "https://images.unsplash.com/photo-1726056652635-7db7a936e7be?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg", // <<< REPLACE with your actual hero image path
        introduction: "Brief overview of the project, the challenge, and the solution provided. This section sets the context for the case study.",
        features: [
          {
            title: "Challenge",
            description: "Description of the primary challenge or problem the project aimed to solve. What was the user need or business goal?",
          },
          {
            title: "Solution",
            description: "Detailing the solution developed. What technologies were used? What was the approach?",
          },
          {
            title: "Outcome",
            description: "What were the results? Mention key metrics, user feedback, or business impact achieved.",
          },
        ],
        timeline: [
          {
            phase: 1,
            title: "Discovery & Research",
            date: "Q1 2024",
            description: "Understanding project goals, user research, competitive analysis, and requirement gathering.",
          },
          {
            phase: 2,
            title: "Design & Prototyping",
            date: "Q2 2024",
            description: "Creating wireframes, mockups, user flows, and interactive prototypes. Iterating based on feedback.",
          },
          {
            phase: 3,
            title: "Development & Testing",
            date: "Q3 2024",
            description: "Building the features, front-end and back-end development, integration, and rigorous testing cycles.",
          },
          {
            phase: 4,
            title: "Launch & Iteration",
            date: "Q4 2024",
            description: "Deploying the project, monitoring performance, gathering user feedback, and planning future iterations.",
          },
        ],
      };
    
    
      return (
        // Main container for the page
        <div className="min-h-screen bg-white">
    
          {/* --- Hero Section --- */}
          {/* Uses background image, covers the area, positioned center */}
          <section
            className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center text-white relative"
            style={{ backgroundImage: `url(${caseStudyData.heroImage})` }}
            aria-labelledby="case-study-title"
          >
            {/* Optional: Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
    
            {/* Hero Content Container */}
            <div className="container mx-auto px-4 text-center relative z-10">
               <h1 id="case-study-title" className="text-4xl md:text-6xl font-bold mb-4">
                    {caseStudyData.title}
                </h1>
               {/* You could add a subtitle or tagline here */}
               {/* <p className="text-lg md:text-xl">A brief tagline about the project</p> */}
            </div>
          </section>
    
           {/* --- Introduction Section --- */}
          <section className="w-full px-4 py-12 md:py-16">
             <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg text-gray-700">
                   {caseStudyData.introduction}
                </p>
             </div>
          </section>
    
          {/* --- Three Column Section --- */}
          <section className="bg-gray-50 py-12 md:py-16">
            <div className="container mx-auto px-4">
              {/* Section Title (Optional) */}
              {/* <h2 className="text-3xl font-bold text-center mb-12">Key Aspects</h2> */}
    
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
          <section className="w-full px-4 py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center mb-12 md:mb-16">Project Timeline</h2>
    
            {/* Timeline Container: Relative positioning for the line and dots */}
            {/* Using border-l for the line, pl for offset, space-y for spacing between items */}
            <div className="relative max-w-2xl mx-auto border-l-4 border-primary pl-8 md:pl-10 space-y-10">
    
              {caseStudyData.timeline.map((item, index) => (
                // Timeline Item Container: Relative for positioning the dot
                <div key={index} className="relative">
                  {/* Timeline Dot: Absolutely positioned relative to the item container */}
                  {/* '-left-[Xpx]' positions it over the border line. Calculation: padding-left (pl-8/10 -> 32px/40px) + half dot width (w-6 -> 24px / 2 = 12px). Needs adjustment based on padding and dot size.*/}
                  {/* Added bg-white around the dot to cleanly overlap the blue line */}
                   <div className="absolute -left-[44px] md:-left-[52px] top-0 z-10 flex items-center justify-center w-6 h-6 mt-1">
                        <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center shadow">
                             <span className="text-white text-xs font-semibold">{item.phase}</span>
                        </div>
                   </div>
    
                  {/* Timeline Item Content */}
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 ml-4 md:ml-0">
                     <span className="text-sm font-medium text-primary block mb-1">{item.date}</span>
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


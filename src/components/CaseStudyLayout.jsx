import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// Default data structure for safety
const defaultData = {
  title: "Case Study",
  heroImage: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0",
  introduction: "Introduction content not provided.",
  features: [
    { title: "Feature/Challenge", description: "Details not provided." }
  ],
  timeline: [
    { phase: '1', title: "Office Inauguration Function", date: "Oct 01, 2020", description: "Started journey with new office", images: ['img1.jpg','img2.jpg','img3.jpg'] },
    { phase: '2', title: "Reached New Record", date: "Sep 16, 2020", description: "Lifetime accreditation from IAO (First Business Advisory Firm in India)" },
    { phase: '3', title: "Design Meetup", date: "Sep 12, 2020", description: "Compete head to head with friends and rivals" },
    { phase: '4', title: "New People Joined", date: "Aug 20, 2020", description: "John Smith, Designer", avatar: 'john.jpg' },
  ],
  problem: {
    title: "The Problem",
    description: "Problem description not provided.",
    keyPoints: []
  },
  solution: {
    title: "The Solution",
    description: "Solution description not provided.",
    keyPoints: []
  },
  process: {
    title: "The Process",
    description: "Process description not provided.",
    steps: [
      { title: "Research", description: "Research description" },
      { title: "Design", description: "Design description" },
      { title: "Development", description: "Development description" },
      { title: "Testing", description: "Testing description" }
    ]
  },
  team: {
    title: "The Team",
    members: [
      {
        name: "Team Member",
        role: "Role not specified",
        icon: "👤",
        description: "Team member description not provided"
      }
    ]
  },
  takeaways: {
    title: "Key Takeaways",
    points: [
      "Takeaway point not provided"
    ]
  },
};

export default function NewCaseStudyLayout({ data = {}, heroImage, ...rest }) {
  const merged = { ...defaultData, ...data };
  if (heroImage) merged.heroImage = heroImage;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${merged.heroImage})` }}
        >
          
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {merged.title}
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            {merged.introduction}
          </p>
          <div className="absolute top-0 left-0 p-4 md:px-20 z-20"> {/* Added z-20 to be above overlay */}
              <Link
                  to="/case-studies" // Updated from "/casestudypage"
                  // Updated text color for visibility on image/overlay
                  className="inline-flex items-center text-white hover:text-gray-200 font-semibold transition duration-300"
              >
                  <ArrowLeftIcon className="h-5 w-5 mr-1" />
                  Back to Case Studies
              </Link>
            </div>
        </div>
      </section>

      {/* Problem, Solution & Team Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Problem Column */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8">{merged.problem.title}</h2>
              <p className="text-gray-600 mb-8">{merged.problem.description}</p>
              {merged.problem.keyPoints?.length > 0 && (
                <ul className="space-y-4">
                  {merged.problem.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Solution Column */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8">{merged.solution.title}</h2>
              <p className="text-gray-600 mb-8">{merged.solution.description}</p>
              {merged.solution.keyPoints?.length > 0 && (
                <ul className="space-y-4">
                  {merged.solution.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{merged.team.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {merged.team.members.map((member, idx) => {
                const IconComponent = member.icon;
                return (
                  <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 mb-4 text-primary">
                      <IconComponent className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-center">{member.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-800 text-gray-100 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{merged.process.title}</h2>
          <p className="mb-12">{merged.process.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {merged.process.steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-gray-600">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaways Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{merged.takeaways.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {merged.takeaways.points.map((point, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

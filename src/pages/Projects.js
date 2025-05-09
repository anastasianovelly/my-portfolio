import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Project 1",
      category: "ux",
      description: "A comprehensive UX redesign project focusing on user experience improvements.",
      image: "https://placehold.co/600x400/2563EB/FFFFFF?text=Project+1",
      tags: ["UX Design", "Research", "Prototyping"]
    },
    {
      id: 2,
      title: "Project 2",
      category: "ui",
      description: "UI design system development for a major platform.",
      image: "https://placehold.co/600x400/10B981/FFFFFF?text=Project+2",
      tags: ["UI Design", "Design Systems", "Documentation"]
    },
    {
      id: 3,
      title: "Project 3",
      category: "ai",
      description: "AI-powered design automation tools implementation.",
      image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Project+3",
      tags: ["AI", "Automation", "Tools"]
    }
  ];

  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400/cccccc/FFFFFF?text=Image+Not+Found';
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project${projectId}`);
  };

  return (
    <div className="font-sans bg-white">
      <main className="container mx-auto px-6 py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of work spanning UX design, UI systems, and AI integration projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'ux', 'ui', 'ai'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${filter === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => filter === 'all' || project.category === filter)
            .map(project => (
              <div 
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                    View Project <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

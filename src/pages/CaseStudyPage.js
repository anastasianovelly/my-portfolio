import React from 'react';
import { Link } from 'react-router-dom'; // To link to individual case study detail pages

// Import Heroicons if needed (e.g., for links)
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Component definition
export default function CaseStudyPage() {

    // Define the case studies data here (or import from a shared location)
    // Using the same structure as before
    const caseStudies = [
        {
            id: 1,
            title: 'Telecom Billing Optimization',
            description: 'Streamlined cost recovery for a Fortune 100 telecom company, enhancing accuracy and efficiency.',
            link: '/case-studies/telecom-billing', // Route for the detail page
            imageUrl: `https://placehold.co/600x400/2563EB/FFFFFF?text=Telecom+Project`, // Placeholder image (using default blue hex)
        },
        {
            id: 2,
            title: 'AI-Powered PDF Extraction',
            description: 'Built an intuitive interface to extract and export critical tax data from complex PDF documents using AI.',
            link: '/case-studies/pdf-extraction', // Route for the detail page
            imageUrl: `https://placehold.co/600x400/10B981/FFFFFF?text=AI+Project`, // Placeholder image (using default emerald hex)
        },
        {
            id: 3,
            title: 'Enterprise UX Revamp',
            description: 'Led a comprehensive redesign for a legacy enterprise platform, improving usability and user satisfaction.',
            link: '/case-studies/enterprise-ux', // Route for the detail page
            imageUrl: `https://placehold.co/600x400/F59E0B/FFFFFF?text=Enterprise+UX`, // Placeholder image (using default amber hex)
        },
        // Added 3 more case studies below
        {
            id: 4,
            title: 'Scalable Design System for Automotive HMI',
            description: 'Developed a comprehensive design system for a next-gen automotive infotainment platform, ensuring consistency and faster development cycles.',
            link: '/case-studies/automotive-design-system', // Route for the detail page
            imageUrl: `https://placehold.co/600x400/9CA3AF/FFFFFF?text=Automotive+DS`, // Placeholder image (using gray)
        },
        {
            id: 5,
            title: 'User Research for Travel App Personalization',
            description: 'Conducted in-depth user research to inform the personalization strategy for a major online travel agency, leading to increased engagement.',
            link: '/case-studies/travel-app-research', // Route for the detail page
            imageUrl: `https://placehold.co/600x400/14B8A6/FFFFFF?text=Travel+Research`, // Placeholder image (using teal)
        },
         {
            id: 6,
            title: 'AI-Assisted UX Copywriting for Telecom Support',
            description: 'Implemented generative AI tools to assist in creating clear and empathetic UX copy for a telecom customer support portal.',
            link: '/case-studies/ai-telecom-copy', // Route for the detail page
            imageUrl: `https://placehold.co/600x400/6366F1/FFFFFF?text=AI+Copywriting`, // Placeholder image (using indigo)
        },
    ];

    // Function to handle image loading errors
    const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/600x400/cccccc/FFFFFF?text=Image+Not+Found';
    };

    // JSX returned by the component
    return (
        // Main container div for the page content
        <div className="font-sans bg-white">

            {/* Header component usage removed */}

            {/* Main content area */}
            <main className="container mx-auto px-6 py-12 md:py-20">

                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Case Studies</h1>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Explore some of the projects I've worked on, showcasing my approach to solving complex UX challenges across various industries.
                </p>

                {/* Grid for Case Study Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map over the caseStudies array to display each one */}
                    {caseStudies.map((study) => (
                        // Use Link to wrap the card, navigating to the specific case study route
                        <Link key={study.id} to={study.link} className="block group">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden transition transform group-hover:-translate-y-1 group-hover:shadow-lg h-full flex flex-col">
                                {/* Case Study Image */}
                                <img
                                    src={study.imageUrl}
                                    alt={`${study.title} Thumbnail`}
                                    className="w-full h-48 object-cover"
                                    onError={handleImageError} // Add error handler for broken images
                                />
                                {/* Case Study Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h2>
                                    {/* Use default text-gray-600 */}
                                    <p className="text-gray-600 mb-4 flex-grow">{study.description}</p>
                                    {/* Use default text-blue-600 */}
                                    {/* Link indication */}
                                    <span className="text-blue-600 font-semibold group-hover:underline inline-flex items-center mt-auto">
                                        View Case Study
                                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

            </main> {/* End main content area */}

            {/* Footer component usage removed */}

        </div> // End main container div
    );
}

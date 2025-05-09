import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation if needed

// Header and Footer imports removed as they are handled in App.js

// Import relevant Heroicons
import {
    UserCircleIcon,
    AcademicCapIcon, // For Journey/Experience
    SparklesIcon,    // For Gen AI / Innovation
    LightBulbIcon,   // For Philosophy/Approach
    BriefcaseIcon,   // For Industry Experience
    ArrowRightIcon
} from '@heroicons/react/24/outline';

// Renamed component to About
export default function About() {

    // Function to handle image loading errors
    const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/150x150/cccccc/FFFFFF?text=Photo';
    };

    return (
        // Main container div - Removed flex flex-col min-h-screen
        <div className="font-sans bg-white">

            {/* Header component usage removed */}

            {/* Main content area - Removed flex-grow */}
            <main className="w-full px-6 py-12 md:py-20">

                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">About Me</h1>

                {/* Main Content Grid (Optional: Simple single column is also fine) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Left Column (Image + Intro) */}
                    <div className="md:col-span-1 flex flex-col items-center">
                        <img
                            src="https://placehold.co/150x150/cccccc/FFFFFF?text=AN" // Placeholder image
                            alt="Anastasia Novelly Portrait Placeholder"
                            className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-6 shadow-md object-cover"
                            onError={handleImageError}
                         />
                         <h2 className="text-2xl font-semibold text-gray-800 text-center">Anastasia Novelly</h2>
                         <p className="text-lg text-blue-600 text-center">Senior UX Designer</p>
                    </div>

                    {/* Right Column (Detailed Text) */}
                    <div className="md:col-span-2">

                        {/* My Journey Section */}
                        <section className="mb-10">
                            <h3 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                                <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-600" />
                                My Journey
                            </h3>
                            <p className="text-gray-600 mb-3 leading-relaxed">
                                With 8 years dedicated to the field of User Experience, my journey has been one of continuous learning and adaptation. I've evolved from focusing on foundational UI/UX principles to specializing in complex Design Systems and exploring the transformative potential of Generative AI within design workflows.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                This path has equipped me with a deep understanding of the entire product development lifecycle, from initial research and strategy to pixel-perfect execution and iterative improvement.
                            </p>
                        </section>

                        {/* Philosophy Section */}
                        <section className="mb-10">
                            <h3 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                                <LightBulbIcon className="h-6 w-6 mr-2 text-blue-600" />
                                My Design Philosophy
                            </h3>
                            <p className="text-gray-600 mb-3 leading-relaxed">
                                I believe great design emerges from empathy and collaboration. My approach is rooted in understanding user needs through research, balanced with achieving tangible business goals. I champion data-informed decisions, iterative design processes, and advocate strongly for creating accessible and inclusive digital experiences for everyone.
                            </p>
                             <p className="text-gray-600 leading-relaxed">
                                Bridging the gap between user desirability, technical feasibility, and business viability is at the core of my practice.
                            </p>
                        </section>

                        {/* Expertise Section (Brief Recap) */}
                        <section className="mb-10">
                            <h3 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                                <SparklesIcon className="h-6 w-6 mr-2 text-blue-600" />
                                Areas of Expertise
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
                                <li><strong className="font-medium text-gray-700">Design Systems:</strong> Building and maintaining scalable systems for consistency and efficiency.</li>
                                <li><strong className="font-medium text-gray-700">UI/UX Design:</strong> Crafting intuitive interfaces and seamless user flows based on research and best practices.</li>
                                <li><strong className="font-medium text-gray-700">Generative AI Applications:</strong> Exploring and applying AI to enhance design creativity and productivity.</li>
                                <li><strong className="font-medium text-gray-700">User Research & Strategy:</strong> Defining user needs and translating them into actionable design strategies.</li>
                            </ul>
                        </section>

                         {/* Industry Insights Section */}
                        <section className="mb-10">
                            <h3 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                                <BriefcaseIcon className="h-6 w-6 mr-2 text-blue-600" />
                                Industry Insights
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                My experience spans diverse industries including <strong className="font-medium text-gray-700">Telecom, Travel,</strong> and <strong className="font-medium text-gray-700">Automotive</strong>. This has provided me with valuable insights into adapting UX principles to unique contexts – from navigating the complexity of large-scale telecom platforms and creating engaging, user-friendly travel booking experiences, to considering the specific demands of automotive interfaces.
                            </p>
                        </section>

                         {/* Optional: Beyond Work */}
                         <section className="mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beyond the Pixels</h3>
                             <p className="text-gray-600 leading-relaxed">
                                When I'm not designing, I enjoy [mention a hobby like 'exploring the beautiful trails of Hawaii', 'experimenting with photography', 'learning about sustainable living', etc. - **Please fill this in!**]. Staying curious and engaging with the world outside of tech helps fuel my creativity.
                            </p>
                        </section>

                        {/* Optional: Call to Action */}
                        <div className="mt-8">
                             <Link
                                to="/contact" // Link to your contact page route
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                             >
                                Let's Connect <ArrowRightIcon className="h-5 w-5 ml-1" />
                             </Link>
                        </div>

                    </div>
                </div>

            </main> {/* End main content area */}

            {/* Footer component usage removed */}

        </div> // End main container div
    );
}

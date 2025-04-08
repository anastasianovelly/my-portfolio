import React from 'react';
import { Link } from 'react-router-dom';

// Import Heroicons (using outline style) - Still needed for main content
import {
    RectangleStackIcon, // Replaces Layers
    SwatchIcon,         // Replaces Palette
    UserGroupIcon,      // Replaces Users
    SparklesIcon,       // Replaces BrainCircuit (for AI)
    PhoneIcon,          // Replaces Phone
    PaperAirplaneIcon,  // Replaces Plane
    WrenchScrewdriverIcon, // Replaces Car (for Automotive industry)
    EnvelopeIcon,       // Replaces Mail
    GlobeAltIcon        // Replaces Globe
} from '@heroicons/react/24/outline';

// Removed the custom colors object

export default function Homepage() {

    // Case studies data remains the same
    // Updated placeholder image URLs to use default hex codes (e.g., blue-600 -> 2563EB, emerald-500 -> 10B981, amber-500 -> F59E0B)
    const caseStudies = [
        {
            id: 1, // Added id for key prop
            title: 'Telecom Billing Optimization',
            description: 'Streamlined cost recovery for a Fortune 100 telecom company, enhancing accuracy and efficiency.',
            link: '/case-studies/telecom-billing', // Link to a separate page as per user's Header component
            imageUrl: `https://placehold.co/600x400/2563EB/FFFFFF?text=Telecom+Project`, // Placeholder image (using default blue hex)
        },
        {
            id: 2,
            title: 'AI-Powered PDF Extraction',
            description: 'Built an intuitive interface to extract and export critical tax data from complex PDF documents using AI.',
            link: '/case-studies/pdf-extraction',
            imageUrl: `https://placehold.co/600x400/10B981/FFFFFF?text=AI+Project`, // Placeholder image (using default emerald hex)
        },
        {
            id: 3,
            title: 'Enterprise UX Revamp',
            description: 'Led a comprehensive redesign for a legacy enterprise platform, improving usability and user satisfaction.',
            link: '/case-studies/enterprise-ux',
            imageUrl: `https://placehold.co/600x400/F59E0B/FFFFFF?text=Enterprise+UX`, // Placeholder image (using default amber hex)
        },
    ];

    // Function to handle image loading errors remains the same
    const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/600x400/cccccc/FFFFFF?text=Image+Not+Found';
    };

    return (
        // Main container div
        // Removed text-neutral-dark (using default text color)
        <div className="font-sans bg-white flex flex-col min-h-screen">

            {/* Main content area */}
            <main className="flex-grow">

                {/* Hero Section */}
                <section className="bg-white from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32 px-6 md:px-10 lg:px-16 text-center">
                    <div className="container mx-auto">
                        {/* Use default text-gray-900 or similar */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Anastasia Novelly</h1>
                        {/* Use default text-blue-600 */}
                        <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">Senior UX Designer</p>
                        {/* Use default text-gray-600 */}
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            With 8 years of experience, I specialize in crafting intuitive and engaging user experiences, focusing on design systems, UI/UX design, and the application of generative AI.
                        </p>
                        {/* Use default bg-blue-600 and bg-emerald-500 */}
                        <a href="#casestudies" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block mr-4 mb-4 md:mb-0">View My Work</a>
                        <a href="#contact" className="bg-emerald-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition duration-300 inline-block">Get In Touch</a>
                    </div>
                </section>

                {/* Expertise Section */}
                {/* Use default bg-gray-100 */}
                <section id="expertise" className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-gray-100">
                    <div className="container mx-auto">
                         {/* Use default text-gray-900 */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">My Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Design Systems Card */}
                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                {/* Use default text-blue-600 */}
                                <RectangleStackIcon className="h-12 w-12 text-blue-600 mb-4 inline-block" aria-hidden="true" />
                                 {/* Use default text-gray-900 */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Systems</h3>
                                 {/* Use default text-gray-600 */}
                                <p className="text-gray-600">Building scalable and consistent design systems for seamless product development.</p>
                            </div>
                            {/* UI Design Card */}
                             <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                {/* Use default text-blue-600 */}
                                <SwatchIcon className="h-12 w-12 text-blue-600 mb-4 inline-block" aria-hidden="true" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">User Interface (UI) Design</h3>
                                <p className="text-gray-600">Creating visually appealing and user-friendly interfaces that delight users.</p>
                            </div>
                            {/* UX Design Card */}
                             <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                {/* Use default text-blue-600 */}
                                <UserGroupIcon className="h-12 w-12 text-blue-600 mb-4 inline-block" aria-hidden="true" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">User Experience (UX) Design</h3>
                                <p className="text-gray-600">Designing intuitive flows and interactions based on user research and testing.</p>
                            </div>
                            {/* Generative AI Card */}
                             <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                {/* Use default text-blue-600 */}
                                <SparklesIcon className="h-12 w-12 text-blue-600 mb-4 inline-block" aria-hidden="true" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Generative AI Applications</h3>
                                <p className="text-gray-600">Leveraging AI to enhance user experiences and streamline design processes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Experience Section */}
                <section id="experience" className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Industry Experience</h2>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {/* Use default bg-gray-100 */}
                            <div className="flex items-center space-x-3 p-4 rounded-lg shadow-sm bg-gray-100">
                                {/* Use default text-emerald-500 */}
                                <PhoneIcon className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                                {/* Use default text-gray-900 */}
                                <span className="text-lg font-medium text-gray-900">Telecom</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg shadow-sm bg-gray-100">
                                {/* Use default text-emerald-500 */}
                                <PaperAirplaneIcon className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                                <span className="text-lg font-medium text-gray-900">Travel</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg shadow-sm bg-gray-100">
                                {/* Use default text-emerald-500 */}
                                <WrenchScrewdriverIcon className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                                <span className="text-lg font-medium text-gray-900">Automotive</span>
                            </div>
                        </div>
                         {/* Use default text-gray-600 */}
                        <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
                            My diverse background includes delivering impactful UX solutions across the Telecom, Travel, and Automotive sectors, understanding the unique challenges and user needs within each.
                        </p>
                    </div>
                </section>

                {/* Case Studies Section */}
                 {/* Use default bg-gray-100 */}
                <section id="casestudies" className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-gray-100">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Case Studies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {caseStudies.map((study) => (
                                <Link key={study.id} to={study.link} className="block group">
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform group-hover:-translate-y-1 group-hover:shadow-lg h-full flex flex-col">
                                        <img
                                            src={study.imageUrl}
                                            alt={`${study.title} Thumbnail`}
                                            className="w-full h-48 object-cover"
                                            onError={handleImageError}
                                        />
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                                             {/* Use default text-gray-600 */}
                                            <p className="text-gray-600 mb-4 flex-grow">{study.description}</p>
                                             {/* Use default text-blue-600 */}
                                            <span className="text-blue-600 font-medium group-hover:underline">
                                                View Case Study &rarr;
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Me Section */}
                <section id="about" className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-white">
                    <div className="container mx-auto max-w-3xl text-center">
                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Me</h2>
                         <img
                            src="https://placehold.co/150x150/cccccc/FFFFFF?text=AN"
                            alt="Anastasia Novelly Portrait Placeholder"
                            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md object-cover"
                            onError={(e) => { e.target.src='https://placehold.co/150x150/cccccc/FFFFFF?text=Photo'; }}
                         />
                          {/* Use default text-gray-600 */}
                         <p className="text-lg text-gray-600 mb-4">
                             I'm passionate about bridging the gap between user needs and business goals through thoughtful design. My approach is collaborative, data-informed, and always focused on creating meaningful and accessible digital experiences.
                         </p>
                         <p className="text-lg text-gray-600">
                             Exploring the potential of generative AI in UX is a current focus, seeking innovative ways to enhance creativity and efficiency in the design process.
                         </p>
                    </div>
                </section>

                {/* Contact Section */}
                 {/* Use default bg-blue-600 */}
                <section id="contact" className="py-16 md:py-24 px-6 md:px-10 lg:px-16 text-white bg-blue-600">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Collaborate</h2>
                        <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
                            Interested in working together or discussing a project? Feel free to reach out!
                        </p>
                        <a
                            href="mailto:anastasia.novelly.ux@example.com" // Replace with actual email
                            // Use default text-blue-600 for contrast on white bg
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
                        >
                            <EnvelopeIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                            Contact Me
                        </a>
                         <div className="mt-8 flex justify-center space-x-6">
                             {/* ESLint Fix: Changed href="#" to href="#!". Remember to replace this with your actual portfolio URL */}
                             <a href="#!" target="_blank" rel="noopener noreferrer" aria-label="Portfolio Website" className="text-white hover:opacity-80 transition duration-300">
                                 <GlobeAltIcon className="h-7 w-7" aria-hidden="true" />
                             </a>
                             {/* Add other links like LinkedIn using text or custom SVGs */}
                         </div>
                    </div>
                </section>

            </main> {/* End main content area */}

            {/* Use the imported Footer component */}
            {/* Footer styling is now controlled by the Footer component itself */}

        </div> // End main container div
    );
}

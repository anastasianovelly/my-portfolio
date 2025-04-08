// src/App.jsx
import React from 'react'; // Import React (good practice)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Assuming Header is sticky (fixed)
import Footer from './components/Footer';

// Import Page Components
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudyPage from './pages/CaseStudyPage'; // The list page

// Import Specific Case Study Page Components
import TelecomBilling from './pages/case-studies/TelecomBilling.js';
import PdfExtraction from './pages/case-studies/PdfExtraction.js';
import EnterpriseUX from './pages/case-studies/EnterpriseUX.js';
// +++ Add import for AiTelecomCopy +++
// Ensure the file exists at this path and uses the .js extension
import AiTelecomCopy from './pages/case-studies/AiTelecomCopy.js';
// You would also add imports here for AutomotiveDesignSystem.js and TravelAppResearch.js when ready

// Import the placeholder component for OTHER case studies
import CaseStudyDetailPlaceholder from './components/CaseStudyDetailPlaceholder.jsx';

function App() {
  return (
    <Router>
      {/* Wrap everything in a flex container to manage layout */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Make the main content area grow to fill available space */}
        {/* Add padding-top to account for the fixed Header's height (adjust pt-16/pt-20 as needed based on Header height) */}
        <main className="flex-grow pt-16 md:pt-8"> {/* Adjust pt value based on your header height */}
          <Routes>
            {/* Standard page routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Route for the main Case Studies LIST page */}
            <Route path="/casestudypage" element={<CaseStudyPage />} />

            {/* === Case Study Detail Routes === */}
            {/* IMPORTANT: List SPECIFIC routes BEFORE the dynamic route */}

            {/* 1. Specific routes for case studies with unique content */}
            <Route path="/case-studies/telecom-billing" element={<TelecomBilling />} />
            <Route path="/case-studies/pdf-extraction" element={<PdfExtraction />} />
            <Route path="/case-studies/enterprise-ux" element={<EnterpriseUX />} />
            {/* +++ Add the specific route for AiTelecomCopy +++ */}
            {/* This tells the router to use your AiTelecomCopy component for this exact path */}
            <Route path="/case-studies/ai-telecom-copy" element={<AiTelecomCopy />} />
            {/* Add specific routes for AutomotiveDesignSystem and TravelAppResearch here when ready */}
            {/* <Route path="/case-studies/automotive-design-system" element={<AutomotiveDesignSystem />} /> */}
            {/* <Route path="/case-studies/travel-app-research" element={<TravelAppResearch />} /> */}


            {/* 2. Dynamic route using the placeholder for any OTHER case studies */}
            {/* This will catch any /case-studies/... URL not matched above */}
            {/* It MUST come AFTER the specific routes */}
            <Route
              path="/case-studies/:studyId"
              element={<CaseStudyDetailPlaceholder />}
            />

            {/* Optional: Add a "Not Found" route at the end */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}

          </Routes>
        </main>
        <Footer /> {/* Footer will be pushed down */}
      </div>
    </Router>
  );
}

export default App;

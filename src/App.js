// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Page Components
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';

// Import Specific Case Study Page Components
import TelecomBilling from './pages/case-studies/TelecomBilling.js';
import PdfExtraction from './pages/case-studies/PdfExtraction.js';
import EnterpriseUX from './pages/case-studies/EnterpriseUX.js';
import AiTelecomCopy from './pages/case-studies/AiTelecomCopy.js';
import AutomotiveDesignSystem from './pages/case-studies/AutomotiveDesignSystem.js';
import TravelAppResearch from './pages/case-studies/TravelAppResearch.js';
import NotFound from './pages/NotFound';
import CaseStudyPage from './pages/CaseStudyPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies/telecom-billing" element={<TelecomBilling />} />
            <Route path="/case-studies/pdf-extraction" element={<PdfExtraction />} />
            <Route path="/case-studies/enterprise-ux" element={<EnterpriseUX />} />
            <Route path="/case-studies/ai-telecom-copy" element={<AiTelecomCopy />} />
            <Route path="/case-studies/automotive-design-system" element={<AutomotiveDesignSystem />} />
            <Route path="/case-studies/travel-app-research" element={<TravelAppResearch />} />
            <Route path="/case-studies" element={<CaseStudyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
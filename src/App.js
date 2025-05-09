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
import CaseStudyPage from './pages/CaseStudyPage';

// Import Specific Case Study Page Components
import TelecomBilling from './pages/case-studies/TelecomBilling.js';
import PdfExtraction from './pages/case-studies/PdfExtraction.js';
import EnterpriseUX from './pages/case-studies/EnterpriseUX.js';
import AiTelecomCopy from './pages/case-studies/AiTelecomCopy.js';
import AutomotiveDesignSystem from './pages/case-studies/AutomotiveDesignSystem.js';
import TravelAppResearch from './pages/case-studies/TravelAppResearch.js';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudyPage />} />
        <Route path="/case-studies/telecom-billing" element={<TelecomBilling />} />
        <Route path="/case-studies/pdf-extraction" element={<PdfExtraction />} />
        <Route path="/case-studies/enterprise-ux" element={<EnterpriseUX />} />
        <Route path="/case-studies/ai-telecom-copy" element={<AiTelecomCopy />} />
        <Route path="/case-studies/automotive-design-system" element={<AutomotiveDesignSystem />} />
        <Route path="/case-studies/travel-app-research" element={<TravelAppResearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/casestudypage" element={<CaseStudyPage />} />
          <Route path="/case-studies/telecom-billing" element={<TelecomBilling />} />
          <Route path="/case-studies/pdf-extraction" element={<PdfExtraction />} />
          <Route path="/case-studies/enterprise-ux" element={<EnterpriseUX />} />
          <Route path="/case-studies/ai-telecom" element={<AiTelecomCopy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

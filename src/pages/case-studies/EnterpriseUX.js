import React from 'react';
// Import the reusable layout component
import NewCaseStudyLayout from '../../components/CaseStudyLayout.jsx';

// Specific component for the Telecom Billing Optimization case study
export default function TelecomBilling() {

  // --- Define the specific data for this case study ---
  const caseStudyData = {
    title: "Telecom Billing Optimization",
    heroImage: "https://images.unsplash.com/photo-1741283380944-5c750abb4a6d?q=80&w=1920&auto=format&fit=crop",
    introduction: "Optimized cost recovery workflows for a Fortune 100 telecommunications provider by redesigning user interfaces and automating validation checks to reduce billing errors and improve revenue accuracy.",
    features: [
      {
        title: "Challenge",
        description: "Complex rate structures and manual data entry led to frequent billing discrepancies and revenue leakage across multiple service lines.",
      },
      {
        title: "Solution",
        description: "Conducted user interviews to map pain points, redesigned billing UI for clarity, and integrated automated rule-based validation to flag anomalies before submission.",
      },
      {
        title: "Outcome",
        description: "Reduced billing error rate by 60%, sped up month-end close by 40%, and received stakeholder praise for increased transparency and ease of use.",
      },
    ],
    timeline: [
      { phase: 1, title: "Discovery & Research", date: "Q3 2023", description: "Interviewed billing analysts and stakeholders, audited existing workflows, and defined key requirements." },
      { phase: 2, title: "Design & Prototyping", date: "Q4 2023", description: "Created wireframes and interactive prototypes in Figma, validating flows through user testing sessions." },
      { phase: 3, title: "Development & QA", date: "Q1 2024", description: "Collaborated with engineering to implement UI updates and validation rules, conducting design QA and bug fixes." },
      { phase: 4, title: "Launch & Evaluation", date: "Q2 2024", description: "Rolled out updates, monitored key metrics, and iterated on feedback for continuous improvement." },
    ],
  };

  // Render the reusable layout component with the telecom billing data
  return <NewCaseStudyLayout data={caseStudyData} />;
}

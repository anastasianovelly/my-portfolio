import React from 'react';
// Import the reusable layout component
import NewCaseStudyLayout from '../../components/CaseStudyLayout.jsx';

// Specific component for the AI-Powered PDF Extraction case study
export default function PdfExtraction() {
  // --- Define the specific data for this case study ---
  const caseStudyData = {
    title: "AI-Powered PDF Extraction",
    heroImage: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    introduction: "Built an intuitive interface to automatically extract, validate, and export critical tax data from multi-page PDF documents using AI-driven parsing.",
    features: [
      {
        title: "Challenge",
        description: "Manual extraction of scattered tax fields across large PDF reports was error-prone, time-intensive, and required expert review.",
      },
      {
        title: "Solution",
        description: "Designed AI-assisted workflows that highlight and extract data in-context, presenting inline editing and validation before export.",
      },
      {
        title: "Outcome",
        description: "Reduced processing time by over 70%, cut error rates in half, and improved user satisfaction scores through clearer workflows.",
      },
    ],
    timeline: [
      { phase: 1, title: "Discovery & Research", date: "Q1 2024", description: "Interviewed tax analysts, audited current workflows, and defined core pain points in document parsing." },
      { phase: 2, title: "Design & Prototyping", date: "Q2 2024", description: "Created wireframes and interactive Figma prototypes, validating AI integration with user testing." },
      { phase: 3, title: "Development Handoff", date: "Q3 2024", description: "Delivered comprehensive specs, collaborated with engineers on AI API integration and UI components." },
      { phase: 4, title: "Post-Launch Review", date: "Q4 2024", description: "Analyzed usage metrics, gathered feedback for enhancements, and planned multi-language support." },
    ],
  };

  // Render the reusable layout component with the PDF extraction data
  return <NewCaseStudyLayout data={caseStudyData} />;
}

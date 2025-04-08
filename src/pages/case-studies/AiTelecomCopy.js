import React from 'react';
// Import the reusable layout component
// Make sure this path is correct based on your file structure
import NewCaseStudyLayout from '../../components/CaseStudyLayout.jsx';

// Specific component for the AI Telecom Copy case study
export default function AiTelecomCopy() {

  // --- Define the specific data for THIS case study ---
  // Structure the data to match the 'data' prop expected by NewCaseStudyLayout
  const caseStudyData = {
    title: "AI-Assisted UX Copywriting for Telecom Support",
    // Use a relevant hero image URL
    heroImage: "https://images.unsplash.com/photo-1681583484651-281ae2defb17?q=80&w=3860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    introduction: "This project explored the application of generative AI to enhance the quality and consistency of UX copy within a major telecommunications provider's customer support portal, aiming to assist content designers and support staff.",
    // Use the 'features' array for key aspects like Challenge, Solution, etc.
    features: [
      {
        title: "Challenge",
        description: "The existing process for writing and maintaining UX copy across the large support portal was time-consuming and led to inconsistencies in tone and terminology, impacting user experience and agent efficiency.",
      },
      {
        title: "Solution",
        description: "Researched and integrated a fine-tuned generative AI model within the CMS. Designed a custom interface for generating drafts, rewriting copy, checking style consistency, and summarizing technical content.",
      },
      {
        title: "Key Outcome",
        description: "Significantly reduced drafting time for standard support responses (approx. 30%) and improved overall content consistency scores based on internal reviews.",
      },
    ],
    // Define the project timeline
    timeline: [
      { phase: 1, title: "Research & AI Model Selection", date: "Q1 2024", description: "Analyzed existing workflows, researched suitable AI models, defined requirements." },
      { phase: 2, title: "Integration & Interface Design", date: "Q2 2024", description: "Integrated the AI model, designed the CMS interface, conducted initial user testing with designers." },
      { phase: 3, title: "Fine-tuning & Guideline Development", date: "Q3 2024", description: "Fine-tuned the AI model with company data, developed user guidelines and training materials." },
      { phase: 4, title: "Pilot Rollout & Feedback", date: "Q4 2024", description: "Launched a pilot program with support teams, gathered feedback, and planned wider implementation." },
    ],
  };

  // Render the NEW layout component, passing the specific data object as the 'data' prop
  return (
    <NewCaseStudyLayout data={caseStudyData} />
  );
}

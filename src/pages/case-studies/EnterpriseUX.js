import React from 'react';
import NewCaseStudyLayout from '../../components/CaseStudyLayout.jsx';
import { 
  PencilSquareIcon, 
  CommandLineIcon,
  ServerIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function EnterpriseUX() {
  const caseStudyData = {
    title: "Generative Intelligence Platform",
    heroImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2940&auto=format&fit=crop",
    introduction: "I led the UX design of a next-generation document intelligence platform that enables users to interact with complex documents using natural language—transforming static files into dynamic, conversational assets.",
    
    problem: {
      title: "The Problem",
      description: "Professionals in regulated, document-heavy industries often struggle to extract timely, trustworthy information from dense, multi-source documentation. Legacy systems required manual cross-referencing, lacked transparency, and made document comparison and summarization error-prone and time-consuming.",
      keyPoints: []
    },
    
    solution: {
      title: "The Solution",
      description: "We designed a document AI interface powered by large language models (LLMs) that lets users:",
      keyPoints: [
        "Chat with documents to ask questions and extract insights",
        "Compare multiple documents for alignment, conflicts, and changes",
        "Summarize content with contextual, source-linked output",
        "Scale across platforms with a collapsible, modular navigation system",
        "Use a structured input model that handles full documents, excerpts, or pasted text",
        "Trust results via source-aware responses and citation display"
      ]
    },

    team: {
      title: "The Team",
      members: [
        {
          name: "UX Design",
          role: "Lead Designer",
          icon: PencilSquareIcon,
          description: "Led interaction design, input patterns, and platform-wide scalability"
        },
        {
          name: "AI/ML Engineers",
          role: "Technical Team",
          icon: CommandLineIcon,
          description: "Integrated LLMs, comparison logic, and summarization tuning"
        },
        {
          name: "Platform Architects",
          role: "Infrastructure",
          icon: ServerIcon,
          description: "Enabled input handling across PDFs, Word files, and structured text"
        },
        {
          name: "Product Managers",
          role: "Product Lead",
          icon: ClipboardDocumentListIcon,
          description: "Prioritized features for legal, compliance, and operations use cases"
        },
        {
          name: "Researchers",
          role: "UX Research",
          icon: MagnifyingGlassIcon,
          description: "Validated patterns with real users from corporate, telecom, and compliance backgrounds"
        }
      ]
    },

    process: {
      title: "The Process",
      description: "Our approach focused on creating a scalable, trustworthy document AI platform",
      steps: [
        { title: "Research", description: "Analyzed user needs across different document types" },
        { title: "Design", description: "Created modular, scalable interaction patterns" },
        { title: "Development", description: "Integrated AI capabilities with user-friendly interfaces" },
        { title: "Testing", description: "Validated with users across different industries" }
      ]
    },

    takeaways: {
      title: "Key Takeaways",
      points: [
        "Cross-platform scalability matters: Input and navigation needed to work for chat, search, and analysis use cases",
        "Trust is built through transparency: Source-linked answers were key to user confidence",
        "Modular design accelerates adoption: Patterns developed for this project now apply across the AI platform",
        "Document AI isn't one-size-fits-all: Designing for different document types required flexible but structured user input strategies"
      ]
    }
  };

  return <NewCaseStudyLayout data={caseStudyData} />;
}

import React from 'react';
import NewCaseStudyLayout from '../../components/CaseStudyLayout.jsx';
import { 
  PaintBrushIcon, 
  ChartBarIcon, 
  CogIcon, 
  ScaleIcon, 
  CommandLineIcon 
} from '@heroicons/react/24/outline';

export default function TelecomBilling() {
  const caseStudyData = {
    title: "Contracts and Applications Management",
    heroImage: "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0",
    introduction: "As a Senior UX Designer, I led the creation of an AI-enhanced platform that simplifies the way enterprise users manage, validate, and act on contracts and applications—transforming a traditionally fragmented process into a streamlined, intelligent workflow.",
    
    problem: {
      title: "The Problem",
      description: "Enterprise teams were overwhelmed by inconsistent contract data, manual review bottlenecks, and fragmented tools. Users struggled to track metadata, verify accuracy, and comply with submission requirements—especially when preparing data for ingestion into downstream systems.",
      keyPoints: []
    },
    
    solution: {
      title: "The Solution",
      description: "We designed an intuitive platform powered by AI to support enterprise contract management.",
      keyPoints: [
        "Smart contract validation with visual flags for missing or incorrect fields",
        "Searchable contract libraries using vector-based metadata filtering",
        "AI-assisted review prompts to guide users through submission",
        "Seamless integration with ingestion systems, ensuring end-to-end data integrity"
      ]
    },

    team: {
      title: "The Team",
      members: [
        {
          name: "UX Design",
          role: "Lead",
          icon: PaintBrushIcon,
          description: "Led experience strategy, user flows, validation models, and system interaction patterns"
        },
        {
          name: "Product Management",
          role: "Product Owner",
          icon: ChartBarIcon,
          description: "Defined system requirements, aligned goals with business ops"
        },
        {
          name: "Engineering",
          role: "Development Team",
          icon: CogIcon,
          description: "Built data ingestion, AI prompt infrastructure, and metadata tagging logic"
        },
        {
          name: "Legal/Compliance",
          role: "Advisors",
          icon: ScaleIcon,
          description: "Provided rules for contract validation and AML requirements"
        },
        {
          name: "AI/ML",
          role: "Technical Team",
          icon: CommandLineIcon,
          description: "Powered vector search, recommendations, and metadata classification"
        }
      ]
    },

    process: {
      title: "The Process",
      description: "Our approach focused on creating a user-centric AI-powered platform",
      steps: [
        { 
          title: "Research", 
          description: "Analyzed user pain points and current workflows" 
        },
        { 
          title: "Design", 
          description: "Created intuitive interfaces with AI integration" 
        },
        { 
          title: "Development", 
          description: "Built and integrated AI-powered features" 
        },
        { 
          title: "Testing", 
          description: "Validated with users and refined the experience" 
        }
      ]
    },

    takeaways: {
      title: "Key Takeaways",
      points: [
        "Clarity reduces risk: Clear validation UX prevents downstream compliance issues",
        "Small enhancements compound: Features like recent activity recall saved minutes per user daily",
        "Collaboration is critical: Legal, ops, and AI teams shaped a more complete user experience",
        "AI works best with trust: Visible data sources and status feedback built confidence in the system"
      ]
    }
  };

  return <NewCaseStudyLayout data={caseStudyData} />;
}


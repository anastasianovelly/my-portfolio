import React from 'react';
import NewCaseStudyLayout from '../../components/CaseStudyLayout.jsx';
import { 
  PencilSquareIcon,
  ChartBarSquareIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function AiTelecomCopy() {
  const caseStudyData = {
    title: "Connected Customer Journey",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3000&auto=format&fit=crop",
    introduction: "I led the UX design of a connected customer journey platform that uses predictive modeling, AI messaging, and behavioral insights to drive retention and deliver hyper-personalized engagement across the customer lifecycle.",
    
    problem: {
      title: "The Problem",
      description: "Customer churn was rising due to a lack of personalized communication and limited visibility into where users were dropping off in their journey. Internal teams lacked the tools to segment users effectively, understand sentiment trends, or intervene with meaningful offers in real time.",
      keyPoints: []
    },
    
    solution: {
      title: "The Solution",
      description: "We created an AI-enhanced platform that empowers customer experience teams to:",
      keyPoints: [
        "Segment customers dynamically based on historical behavior and churn risk",
        "Generate empathetic AI-driven messages for frustrated or high-risk customers",
        "Deliver personalized offers based on journey friction points, sentiment, and user intent",
        "Use an insights dashboard to visualize customer health, sentiment shifts, and engagement outcomes",
        "Monitor offer success in real time and adjust based on confidence levels and interaction feedback"
      ]
    },

    team: {
      title: "The Team",
      members: [
        {
          name: "UX Design",
          role: "Lead Designer",
          icon: PencilSquareIcon,
          description: "Designed dashboard views, messaging flows, and segmentation logic"
        },
        {
          name: "Data Science",
          role: "Analytics Team",
          icon: ChartBarSquareIcon,
          description: "Developed churn prediction models and offer optimization logic"
        },
        {
          name: "Marketing & CX",
          role: "Strategy",
          icon: ChatBubbleLeftRightIcon,
          description: "Defined messaging strategies and offer thresholds"
        },
        {
          name: "AI/NLP Engineers",
          role: "Technical Team",
          icon: CpuChipIcon,
          description: "Built sentiment detection and message generation pipelines"
        },
        {
          name: "Product Owners",
          role: "Product Lead",
          icon: ClipboardDocumentCheckIcon,
          description: "Prioritized retention goals and aligned with roadmap objectives"
        }
      ]
    },

    process: {
      title: "The Process",
      description: "Our approach focused on creating a data-driven customer engagement platform",
      steps: [
        { title: "Research", description: "Analyzed churn patterns and customer behavior" },
        { title: "Design", description: "Created personalized engagement workflows" },
        { title: "Development", description: "Integrated AI messaging and predictive models" },
        { title: "Testing", description: "Validated with CX teams and measured impact" }
      ]
    },

    takeaways: {
      title: "Key Takeaways",
      points: [
        "Personalization reduces churn: Tailored messaging and offers led to improved retention rates",
        "Transparency empowers teams: Visual dashboards gave CX and marketing teams clearer insight into what's working",
        "Empathy can be designed: Even AI-generated messages can feel human when grounded in user context",
        "Data-informed UX drives impact: Designs anchored in behavioral signals led to more relevant and timely interventions"
      ]
    }
  };

  return <NewCaseStudyLayout data={caseStudyData} />;
}

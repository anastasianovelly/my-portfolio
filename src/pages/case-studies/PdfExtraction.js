import React from 'react';
import NewCaseStudyLayout from '../../components/CaseStudyLayout.jsx';
import { 
  PencilSquareIcon, 
  CodeBracketIcon,
  ClipboardDocumentListIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function PdfExtraction() {
  const caseStudyData = {
    title: "Custom Work Order System",
    heroImage: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?q=80&w=3174&auto=format&fit=crop",
    introduction: "I led the UX design for a custom work order system that streamlined task intake, billing configuration, and operational workflows—unlocking cost recovery and reducing invoice delays for high-volume project teams.",
    
    problem: {
      title: "The Problem",
      description: "Teams were overwhelmed by manual billing tasks, inconsistent work order processes, and a backlog of unprocessed, billable work. Existing tools lacked support for incremental billing, rules-driven workflows, and flexible approval pathways—making cost recovery slow and error-prone.",
      keyPoints: []
    },
    
    solution: {
      title: "The Solution",
      description: "We designed a custom work order platform to automate and simplify key financial and operational processes:",
      keyPoints: [
        "Task and status management for clear ownership and tracking",
        "Rules-based billing configuration to support incremental and milestone-based payments",
        "User role and permission management to match how teams work across systems",
        "Feeder system integrations to connect work orders with accounts payable and contract metadata",
        "A structured interface to validate inputs and reduce rework before submission"
      ]
    },

    team: {
      title: "The Team",
      members: [
        {
          name: "UX Design",
          role: "Lead Designer",
          icon: PencilSquareIcon,
          description: "Defined workflows, data validation states, and role-specific views"
        },
        {
          name: "Engineering",
          role: "Development Team",
          icon: CodeBracketIcon,
          description: "Implemented integrations with finance and project tracking systems"
        },
        {
          name: "Product Managers",
          role: "Product Lead",
          icon: ClipboardDocumentListIcon,
          description: "Scoped requirements based on billing complexity and backlog priorities"
        },
        {
          name: "Finance & Ops",
          role: "Stakeholders",
          icon: BuildingLibraryIcon,
          description: "Helped define user needs and rules for invoice readiness"
        },
        {
          name: "Compliance",
          role: "Analysts",
          icon: ShieldCheckIcon,
          description: "Ensured auditability and rule adherence within the system"
        }
      ]
    },

    process: {
      title: "The Process",
      description: "Our approach focused on creating a scalable work order management system",
      steps: [
        { title: "Research", description: "Analyzed billing workflows and pain points" },
        { title: "Design", description: "Created role-specific interfaces and validation patterns" },
        { title: "Development", description: "Built integrations and automated workflows" },
        { title: "Testing", description: "Validated with finance teams and stakeholders" }
      ]
    },

    takeaways: {
      title: "Key Takeaways",
      points: [
        "Work order clarity improves cash flow: Clear validation and configuration led to faster billing cycles",
        "Role-aware design matters: Admins, reviewers, and submitters needed tailored UX to prevent bottlenecks",
        "Upstream integration prevents downstream pain: Pulling in contract and PO data saved time and reduced errors",
        "Incremental billing is complex, but solvable: Flexible configuration patterns made this scalable across teams"
      ]
    }
  };

  return <NewCaseStudyLayout data={caseStudyData} />;
}

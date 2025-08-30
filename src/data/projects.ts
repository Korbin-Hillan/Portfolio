import { Project } from '../types/index';

const projects: Project[] = [
  {
    title: "LinkTree Clone",
    slug: "linktree",
    image: "/images/LinkTree.png",
    description: "A sophisticated link aggregation platform featuring admin dashboard, real-time analytics, and responsive design. Built with vanilla JavaScript for optimal performance.",
    impact: "500+ daily active users",
    status: "live",
    date: "Dec 2024",
    client: "Personal Project",
    category: "Web Application",
    technologies: [
      { name: "HTML5", icon: "🌐", color: "text-orange-400" },
      { name: "CSS3", icon: "🎨", color: "text-blue-400" },
      { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
      { name: "Local Storage", icon: "💾", color: "text-green-400" }
    ],
    repo: "https://github.com/Korbin-Hillan/Linktree",
    live: "https://korbinhillanlinktree.netlify.app/"
  },
  {
    title: "Swift Expense Tracker",
    slug: "expense-tracker",
    image: "/images/Portfolio.png",
    description: "A Swift/SwiftUI expense-tracking app with categories, recurring expenses, and insightful summaries. Structured as a monorepo for modular development.",
    impact: "Personal finance clarity and streamlined tracking",
    status: "active",
    date: "2025",
    client: "Personal Project",
    category: "iOS App",
    technologies: [
      { name: "Swift", icon: "🧰", color: "text-orange-400" },
      { name: "SwiftUI", icon: "📱", color: "text-purple-400" },
      { name: "MongoDB", icon: "🍃", color: "text-green-400" }
    ],
    repo: "https://github.com/Korbin-Hillan/expense-tracker-monorepo",
    pitch: "Native iOS expense tracker built with Swift/SwiftUI, designed for fast input and clear insights.",
    problem: "Manual expense tracking is tedious and often inconsistent, making it hard to understand spending habits.",
    solution: "A lightweight iOS app with quick-add flows, categories, and summaries that make trends obvious.",
    outcomes: [
      "Modular monorepo for shared components",
      "Clean SwiftUI architecture with clear state management",
      "Expandable data layer for cloud sync"
    ]
  },
  {
    title: "Portfolio Website",
    slug: "portfolio",
    image: "/images/Portfolio.png",
    description: "A modern, performance-optimized portfolio showcasing projects with smooth animations, responsive design, and SEO optimization. Features dynamic content management.",
    impact: "98% Lighthouse Score",
    status: "live",
    date: "Jan 2025",
    client: "Personal Brand",
    category: "Portfolio Site",
    technologies: [
      { name: "Next.js", icon: "⚛️", color: "text-blue-400" },
      { name: "React", icon: "⚛️", color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400" },
      { name: "Framer Motion", icon: "🎬", color: "text-purple-400" }
    ],
    repo: "https://github.com/Korbin-Hillan/Portfolio",
    live: "https://korbinhillan.com"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export { projects };

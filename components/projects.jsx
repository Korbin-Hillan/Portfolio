"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiSwift,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Swift Expense Tracker",
      description:
        "Native iOS expense-tracking app with categories, recurring expenses, and clean summaries. Monorepo structured for modular development.",
      image: "/images/portfolio-preview.jpg",
      technologies: ["Swift", "MongoDB"],
      githubUrl: "https://github.com/Korbin-Hillan/expense-tracker-monorepo",
      liveUrl: "https://github.com/Korbin-Hillan/expense-tracker-monorepo",
      category: "iOS App",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features include dynamic content, PDF resume integration, and optimized performance.",
      image: "/images/portfolio-preview.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/Korbin-Hillan/portfolio",
      liveUrl: "https://korbinhillan.com",
      category: "Web Development",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Scalable e-commerce solution with payment processing, inventory management, and admin dashboard. Features responsive design and optimized checkout flow.",
      image: "/images/ecommerce-preview.jpg",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/Korbin-Hillan/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, data visualization, and responsive design. Integrates with multiple weather APIs.",
      image: "/images/weather-preview.jpg",
      technologies: ["React", "JavaScript", "Weather API", "Chart.js"],
      githubUrl: "https://github.com/Korbin-Hillan/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
      category: "Frontend",
      featured: false,
    },
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      React: <SiReact className="text-blue-400" />,
      "Next.js": <SiNextdotjs className="text-white" />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
      JavaScript: <SiJavascript className="text-yellow-400" />,
      "Node.js": <SiNodedotjs className="text-green-400" />,
      PostgreSQL: <SiPostgresql className="text-blue-300" />,
      MongoDB: <SiMongodb className="text-green-400" />,
      Python: <SiPython className="text-blue-400" />,
      Swift: <SiSwift className="text-orange-400" />,
    };
    return iconMap[tech] || <FaCode className="text-gray-400" />;
  };

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-800 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in
          full-stack development, modern web technologies, and problem-solving.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
          >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative overflow-hidden">
              <FaRocket className="text-6xl text-white opacity-20" />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center gap-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Other Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-300 mb-6">Want to see more of my work?</p>
        <a
          href="https://github.com/Korbin-Hillan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          <FaGithub />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

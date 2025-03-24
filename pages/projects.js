import HeaderBar from "../components/header";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import "../src/app/globals.css";

const ProjectCard = ({
  title,
  imageSrc,
  description,
  techStack,
  link,
  live,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl w-full">
      <div className="md:flex">
        <div className="relative h-64 md:w-1/2 md:h-96">
          <Image
            src={imageSrc}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          {techStack && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-4 mt-6">
            {link && (
              <Link
                href={link}
                className="flex items-center text-blue-400 hover:text-blue-300"
                target="_blank"
              >
                <span className="mr-2">View Project</span>
                <FiExternalLink />
              </Link>
            )}
            {live && (
              <Link
                href={live}
                className="flex items-center text-green-400 hover:text-green-300"
                target="_blank"
              >
                <span className="mr-2">Live Demo</span>
                <FiExternalLink />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "LinkTree",
      imageSrc: "/images/LinkTree.png",
      description:
        "A custom LinkTree clone for organizing and sharing multiple links in one place.",
      techStack: ["HTML/CSS", "JavaScript"],
      link: "https://github.com/Korbin-Hillan/Linktree",
      live: "https://korbinhillanlinktree.netlify.app/",
    },
    {
      title: "Portfolio Website",
      imageSrc: "/images/Portfolio.png",
      description:
        "My personal portfolio website built with Next.js and Tailwind CSS.",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      link: "https://github.com/Korbin-Hillan/Portfolio",
      live: "https://korbinhillan.com/",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeaderBar allLinksToHome={true} />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>

        <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}

"use client";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Korbin Hillan. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Korbin-Hillan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-blue-400 transition-colors duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/korbinhillan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin className="w-6 h-6 hover:text-blue-400 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}

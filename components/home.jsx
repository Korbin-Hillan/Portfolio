"use client";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { MdCode, MdWeb, MdMobile, MdDateRange, MdLaunch, MdBuild } from "react-icons/md";
import { FaReact, FaNodeJs, FaPython, FaExternalLinkAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
import { BiTime } from "react-icons/bi";
import { RiLiveLine } from "react-icons/ri";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FeatureCard from "./featureCard";
import { projects } from "../src/data/projects";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="min-h-screen flex flex-col items-center text-center justify-center px-6 relative z-10 pt-20">
        {/* Name & Title with enhanced animations */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-black tracking-tight mb-2 drop-shadow-lg">
            Korbin Hillan
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
            Full-Stack Developer
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-gray-300 text-xl md:text-2xl pt-4 max-w-3xl leading-relaxed font-light">
            SWE major at{" "}
            <span className="text-yellow-400 font-semibold">
              Arizona State University
            </span>
            . I craft exceptional digital experiences with modern technologies,
            focusing on{" "}
            <span className="text-blue-400 font-semibold">performance</span>,
            <span className="text-purple-400 font-semibold"> scalability</span>,
            and
            <span className="text-pink-400 font-semibold">
              {" "}
              user experience
            </span>
            .
          </p>
        </div>

        {/* Professional Stats */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-8 mt-12 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">3+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Projects Built
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">10+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Technologies
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700/50">
              <FaReact className="text-blue-400" />
              <span className="text-gray-300 text-sm">React</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700/50">
              <FaNodeJs className="text-green-400" />
              <span className="text-gray-300 text-sm">Node.js</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700/50">
              <SiTailwindcss className="text-cyan-400" />
              <span className="text-gray-300 text-sm">Tailwind</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700/50">
              <SiTypescript className="text-blue-500" />
              <span className="text-gray-300 text-sm">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Social Links with enhanced styling */}
        <div
          className={`transition-all duration-1000 delay-1100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex text-4xl pt-6 space-x-8">
            <a
              href="https://github.com/Korbin-Hillan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 p-4 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-6 backdrop-blur-sm border border-transparent hover:border-gray-600/50 shadow-lg hover:shadow-blue-500/25"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/korbinhillan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 p-4 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-6 backdrop-blur-sm border border-transparent hover:border-gray-600/50 shadow-lg hover:shadow-purple-500/25"
              aria-label="LinkedIn Profile"
            >
              <GrLinkedin />
            </a>
          </div>
        </div>

        {/* Enhanced CTAs */}
        <div
          className={`transition-all duration-1000 delay-1300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link href="/projects">
              <button className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 cursor-pointer">
                <div className="bg-gray-900 hover:bg-transparent transition-all duration-500 rounded-full px-8 py-4">
                  <span className="flex items-center gap-3 font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-white group-hover:to-white transition-all duration-500">
                    <MdWeb className="text-blue-400 group-hover:text-white transition-colors duration-500" />
                    View Projects
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </button>
            </Link>
            <Link href="#contact">
              <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-gray-500/10 cursor-pointer">
                <span className="flex items-center gap-3">
                  <MdCode className="group-hover:rotate-12 transition-transform duration-300" />
                  Let&apos;s Collaborate
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Featured Work Section */}
      <div className="container mx-auto px-6 py-20 md:py-32 relative">
        <div
          ref={statsRef}
          className={`transition-all duration-1000 ${
            statsInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20 mb-8">
              <MdWeb className="text-blue-400 text-xl" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            </div>
            
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
              Featured Work
            </h3>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="h-px w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
              <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>
            
            <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Explore a curated selection of projects that showcase my expertise in 
              <span className="text-blue-400 font-semibold"> full-stack development</span>, 
              <span className="text-purple-400 font-semibold"> modern design</span>, and 
              <span className="text-pink-400 font-semibold"> user experience</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm font-medium">Production Ready</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <RiLiveLine className="text-blue-400" />
                <span className="text-sm font-medium">Live Deployments</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MdCode className="text-purple-400" />
                <span className="text-sm font-medium">Open Source</span>
              </div>
            </div>
          </div>

          {/* Enhanced Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 max-w-8xl mx-auto mb-16">
            {projects.map((project, index) => (
              <FeatureCard
                key={project.slug}
                {...project}
                delay={index * 200}
              />
            ))}
          </div>
          
          {/* Call-to-Action Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8 md:p-12 max-w-4xl mx-auto">
              <div className="mb-6">
                <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Explore My Complete Portfolio
                </h4>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Dive deeper into my development journey with detailed case studies, 
                  technical documentation, and live project demonstrations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/projects">
                  <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer">
                    <span className="flex items-center gap-3">
                      <MdWeb className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                      View All Projects
                      <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
                
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-400">15+</span>
                    <span className="text-sm">Projects</span>
                  </div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-400">8+</span>
                    <span className="text-sm">Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

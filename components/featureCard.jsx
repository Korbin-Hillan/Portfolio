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

export default function FeatureCard({ 
  title, 
  slug, 
  image, 
  description, 
  impact,
  status,
  date,
  client,
  category,
  technologies, 
  delay = "0" 
}) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const getStatusConfig = (status) => {
    switch(status) {
      case 'live':
        return { 
          icon: <RiLiveLine className="text-green-400" />, 
          text: 'Live', 
          bg: 'bg-green-500/20', 
          border: 'border-green-400/30',
          dot: 'bg-green-400'
        };
      case 'development':
        return { 
          icon: <MdBuild className="text-yellow-400" />, 
          text: 'In Development', 
          bg: 'bg-yellow-500/20', 
          border: 'border-yellow-400/30',
          dot: 'bg-yellow-400'
        };
      default:
        return { 
          icon: <BiTime className="text-gray-400" />, 
          text: 'Completed', 
          bg: 'bg-gray-500/20', 
          border: 'border-gray-400/30',
          dot: 'bg-gray-400'
        };
    }
  };
  
  const statusConfig = getStatusConfig(status);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ${
        delay === "0"
          ? ""
          : delay === "200"
          ? "delay-200"
          : delay === "400"
          ? "delay-500"
          : ""
      } ${
        cardInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="group relative">
        <Link href={`/projects/${slug}`} className="block">
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-blue-500/10 group-hover:scale-[1.02] hover:translate-y-[-4px]">
            
            {/* Enhanced Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* Status and Category Header */}
            <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
              <div className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm ${statusConfig.bg} ${statusConfig.border} border`}>
                <div className={`w-2 h-2 rounded-full ${statusConfig.dot} animate-pulse`}></div>
                {statusConfig.icon}
                <span className="text-white text-xs font-bold">{statusConfig.text}</span>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700/50">
                <span className="text-gray-300 text-xs font-medium">{category}</span>
              </div>
            </div>
            
            {/* Enhanced Image Section */}
            <div className="relative h-64 lg:h-72 overflow-hidden">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
                  <MdWeb className="text-gray-500 text-4xl" />
                </div>
              )}
              <img 
                src={image} 
                alt={`Screenshot of ${title}`} 
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Professional Content Section */}
            <div className="relative p-8">
              {/* Project Metadata */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-blue-400" />
                  <span>{date}</span>
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="flex items-center gap-1">
                  <MdWeb className="text-purple-400" />
                  <span>{client}</span>
                </div>
              </div>
              
              {/* Title and Description */}
              <h4 className="text-white text-2xl lg:text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                {title}
              </h4>
              
              <p className="text-gray-300 text-base lg:text-lg mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {description}
              </p>
              
              {/* Impact Metric */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg px-4 py-3 mb-6 border border-blue-500/20">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-lg" />
                  <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Impact</span>
                </div>
                <p className="text-white font-bold text-lg mt-1">{impact}</p>
              </div>
              
              {/* Technology Stack */}
              <div className="space-y-3 mb-6">
                <h5 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Technology Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {technologies?.map((tech, index) => (
                    <div 
                      key={tech.name}
                      className={`group/tech flex items-center gap-2 px-3 py-2 bg-gray-700/60 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-gray-600/40 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/40 hover:text-blue-300 hover:scale-105 cursor-pointer`}
                      style={{ transitionDelay: `${index * 75}ms` }}
                    >
                      <span className="text-lg group-hover/tech:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </span>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <div className="flex items-center text-blue-400 font-bold text-lg group-hover:text-purple-400 transition-colors duration-300">
                  <span className="mr-3">Explore Project</span>
                  <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FaExternalLinkAlt className="text-blue-400 text-sm" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <MdCode className="text-purple-400 text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

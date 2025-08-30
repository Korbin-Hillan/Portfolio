"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaAward,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaJava,
} from "react-icons/fa";
import {
  MdWeb,
  MdPhoneIphone,
  MdCloud,
  MdAnalytics,
  MdSpeed,
  MdSecurity,
} from "react-icons/md";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiVercel,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGithubactions,
  SiJest,
  SiCypress,
  SiPuppeteer,
  SiEslint,
  SiPrettier,
  SiPostman,
  SiInsomnia,
  SiPrisma,
  SiFigma,
  SiVscodium,
  SiNpm,
  SiPnpm,
  SiYarn,
  SiVite,
  SiWebpack,
  SiSwift,
} from "react-icons/si";
import { BiTime, BiTrendingUp } from "react-icons/bi";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const [profileRef, profileInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React", icon: <SiReact />, level: 90, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "text-white" },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: 95,
      color: "text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 80,
      color: "text-blue-500",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      level: 85,
      color: "text-green-400",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      level: 75,
      color: "text-blue-400",
    },
    { name: "Java", icon: <FaJava />, level: 80, color: "text-red-400" },
    { name: "Python", icon: <SiPython />, level: 70, color: "text-blue-300" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 90,
      color: "text-teal-400",
    },
    { name: "Git", icon: <SiGit />, level: 85, color: "text-orange-400" },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Senior Year & Portfolio Launch",
      type: "education",
      description:
        "Completing final year at ASU, launching professional portfolio, seeking full-time opportunities",
      icon: <FaRocket />,
      color: "text-purple-400",
    },
    {
      year: "2024",
      title: "Advanced Full-Stack Development",
      type: "education",
      description:
        "Mastered modern web technologies, contributed to open-source projects, built production applications",
      icon: <FaCode />,
      color: "text-blue-400",
    },
    {
      year: "2023",
      title: "Software Engineering Focus",
      type: "education",
      description:
        "Declared Software Engineering major, developed strong foundation in algorithms and system design",
      icon: <FaGraduationCap />,
      color: "text-yellow-400",
    },
    {
      year: "2022",
      title: "Arizona State University",
      type: "education",
      description:
        "Started computer science studies, discovered passion for web development and user experience",
      icon: <FaLightbulb />,
      color: "text-green-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20 mb-8">
              <FaUsers className="text-blue-400 text-xl" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">
                About Me
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
              My Story
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="h-px w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
              <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto mb-20">
          {/* Profile Section */}
          <div
            ref={profileRef}
            className={`transition-all duration-1000 ${
              profileInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="mx-auto w-48 h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 animate-pulse">
                    <div className="w-full h-full bg-gray-900 rounded-full p-2">
                      <Image
                        src="/images/Lake_Isabella.jpeg"
                        alt="Korbin Hillan at Lake Isabella"
                        width={200}
                        height={200}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"></div>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
                  <FaMapMarkerAlt className="text-blue-400 text-xl mb-2" />
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300 text-sm">Phoenix, AZ</div>
                </div>
                <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                  <FaCalendarAlt className="text-purple-400 text-xl mb-2" />
                  <div className="text-white font-semibold">Experience</div>
                  <div className="text-gray-300 text-sm">3+ Years</div>
                </div>
                <div className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-4 border border-green-500/20">
                  <FaGraduationCap className="text-green-400 text-xl mb-2" />
                  <div className="text-white font-semibold">Education</div>
                  <div className="text-gray-300 text-sm">ASU Senior</div>
                </div>
                <div className="bg-pink-500/10 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/20">
                  <BiTrendingUp className="text-pink-400 text-xl mb-2" />
                  <div className="text-white font-semibold">Projects</div>
                  <div className="text-gray-300 text-sm">15+ Built</div>
                </div>
              </div>

              {/* Specializations */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      name: "Full-Stack Dev",
                      icon: <MdWeb />,
                      color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
                    },
                    {
                      name: "Mobile Apps",
                      icon: <MdPhoneIphone />,
                      color:
                        "bg-green-500/20 text-green-300 border-green-500/30",
                    },
                    {
                      name: "Cloud Solutions",
                      icon: <MdCloud />,
                      color:
                        "bg-purple-500/20 text-purple-300 border-purple-500/30",
                    },
                    {
                      name: "UI/UX Design",
                      icon: <MdAnalytics />,
                      color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
                    },
                    {
                      name: "Performance",
                      icon: <MdSpeed />,
                      color:
                        "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
                    },
                    {
                      name: "Security",
                      icon: <MdSecurity />,
                      color: "bg-red-500/20 text-red-300 border-red-500/30",
                    },
                  ].map((spec, index) => (
                    <div
                      key={spec.name}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-sm ${spec.color} text-sm font-medium transition-transform duration-300 hover:scale-105`}
                    >
                      {spec.icon}
                      <span>{spec.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div
            ref={bioRef}
            className={`transition-all duration-1000 delay-300 ${
              bioInView
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="space-y-8">
              {/* Main Bio */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                  Hello, I'm Korbin! 👋
                </h3>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm a passionate{" "}
                    <span className="text-blue-400 font-semibold">
                      Senior Software Engineering student
                    </span>{" "}
                    at{" "}
                    <span className="text-yellow-400 font-semibold">
                      Arizona State University
                    </span>
                    , dedicated to crafting exceptional digital experiences that
                    combine{" "}
                    <span className="text-purple-400 font-semibold">
                      cutting-edge technology
                    </span>{" "}
                    with{" "}
                    <span className="text-pink-400 font-semibold">
                      intuitive design
                    </span>
                    .
                  </p>

                  <p>
                    With over{" "}
                    <span className="text-green-400 font-semibold">
                      3 years of hands-on experience
                    </span>{" "}
                    in full-stack development, I specialize in building{" "}
                    <span className="text-blue-400 font-semibold">
                      scalable web applications
                    </span>{" "}
                    that solve real-world problems. My expertise spans modern
                    JavaScript frameworks, cloud technologies, and performance
                    optimization.
                  </p>

                  <p>
                    I'm particularly passionate about{" "}
                    <span className="text-purple-400 font-semibold">
                      open-source contributions
                    </span>
                    ,
                    <span className="text-yellow-400 font-semibold">
                      {" "}
                      mentorship
                    </span>
                    , and staying at the forefront of emerging technologies.
                    When I'm not coding, you'll find me exploring new
                    frameworks, contributing to community projects, or sharing
                    knowledge with fellow developers.
                  </p>
                </div>

                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
                    <FaAward className="text-green-400" />
                    <span className="text-green-300 font-medium">
                      Dean's List
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                    <FaCode className="text-purple-400" />
                    <span className="text-purple-300 font-medium">
                      Open Source
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
                    <BiTime className="text-blue-400" />
                    <span className="text-blue-300 font-medium">Available</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    10+
                  </div>
                  <div className="text-gray-300">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div
          ref={skillsRef}
          className={`transition-all duration-1000 mb-20 ${
            skillsInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/20 mb-8">
              <FaCode className="text-purple-400 text-xl" />
              <span className="text-purple-300 font-semibold tracking-wider uppercase text-sm">
                Skills & Technologies
              </span>
            </div>

            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 leading-tight">
              Tech Stack
            </h3>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
              <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="h-px w-32 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"></div>
              <div className="h-2 w-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
              <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
            </div>

            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              A comprehensive toolkit of modern technologies and frameworks that
              I use to{" "}
              <span className="text-purple-400 font-semibold">
                build exceptional
              </span>{" "}
              digital experiences.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12 max-w-7xl mx-auto">
            {/* Frontend Technologies */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <MdWeb className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-blue-400">
                    Frontend Development
                  </h4>
                  <p className="text-gray-400">
                    User interfaces and client-side technologies
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "React", icon: <SiReact /> },
                  { name: "Next.js", icon: <SiNextdotjs /> },
                  { name: "JavaScript", icon: <SiJavascript /> },
                  { name: "TypeScript", icon: <SiTypescript /> },
                  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                  { name: "Swift", icon: <SiSwift /> },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 transition-colors duration-200 hover:bg-gray-800/60"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl mb-2 text-gray-300">
                      {skill.icon}
                    </div>
                    <div className="text-gray-200 font-medium text-base">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <MdCloud className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-green-400">
                    Backend & Database
                  </h4>
                  <p className="text-gray-400">
                    Server-side technologies and data management
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Node.js", icon: <SiNodedotjs /> },
                  { name: "PostgreSQL", icon: <SiPostgresql /> },
                  { name: "MongoDB", icon: <SiMongodb /> },
                  { name: "Java", icon: <FaJava /> },
                  { name: "Python", icon: <SiPython /> },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 transition-colors duration-200 hover:bg-gray-800/60"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl mb-2 text-gray-300">
                      {skill.icon}
                    </div>
                    <div className="text-gray-200 font-medium text-base">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Workflow */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <SiGit className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-purple-400">
                    Development Tools
                  </h4>
                  <p className="text-gray-400">
                    Version control and productivity tools
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "Git & GitHub", icon: <SiGit /> },
                  { name: "Postman", icon: <SiPostman /> },
                  { name: "Docker", icon: <SiDocker /> },
                  { name: "AWS", icon: <SiAmazonwebservices /> },
                  { name: "Figma", icon: <SiFigma /> },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 transition-colors duration-200 hover:bg-gray-800/60"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl mb-2 text-gray-300">
                      {skill.icon}
                    </div>
                    <div className="text-gray-200 font-medium text-base">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div
          ref={timelineRef}
          className={`transition-all duration-1000 mb-20 ${
            timelineInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              My Journey
            </h3>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Key milestones in my development career
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <div className={`text-2xl font-bold ${item.color} mb-2`}>
                      {item.year}
                    </div>
                    <div className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </div>
                    <div className="text-gray-300 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl shadow-xl`}
                  >
                    {item.icon}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8 md:p-12 max-w-4xl mx-auto">
            <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Let's Build Something Amazing Together
            </h4>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              I'm always excited to collaborate on innovative projects and
              explore new opportunities. Whether it's a startup idea,
              open-source contribution, or full-time role, let's connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer">
                  <span className="flex items-center gap-3">
                    <FaRocket className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                    View My Work
                  </span>
                </button>
              </Link>

              <Link href="#contact">
                <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-gray-500/10 cursor-pointer">
                  <span className="flex items-center gap-3">
                    <FaUsers className="group-hover:scale-110 transition-transform duration-300" />
                    Get In Touch
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import HeaderBar from "../components/header";
import { FiDownload, FiPhone } from "react-icons/fi";
import Footer from "../components/footer";
import { FaMapLocationDot, FaGithub } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

import "../src/app/globals.css";

const ResumeContainer = ({ children }) => {
  return (
    <div className="flex flex-col bg-gray-800 w-11/12 md:w-9/12 lg:w-6/12 h-auto min-h-56 rounded-2xl self-center mt-4 md:mt-8 transition-colors duration-300">
      {children}
    </div>
  );
};

const ContactItem = ({
  icon,
  text,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  return (
    <div className="flex items-center">
      {icon}
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className="text-gray-300 ml-2 hover:text-blue-400 transition-colors"
          aria-label={text}
        >
          {text}
        </a>
      ) : (
        <p className="text-gray-300 ml-2">{text}</p>
      )}
    </div>
  );
};

const EducationItem = ({ degree, institution, gpa, period, courses }) => {
  return (
    <div className="mb-6">
      <h3 className="text-blue-400 font-semibold text-xl">{degree}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{institution}</span>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>
      {gpa && <p className="text-gray-300 text-sm">GPA: {gpa}</p>}
      {courses && (
        <div className="mt-2">
          <p className="text-gray-400 text-sm mb-1">Relevant Coursework:</p>
          <div className="flex flex-wrap gap-1">
            {courses.map((course, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Experience component to display work history
const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-blue-400 font-semibold text-xl">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{company}</span>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>
      <p className="text-gray-300 mb-2">{description}</p>
      {technologies && (
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// Skills component to display skill items in a clean format
const SkillItem = ({ category, skills }) => {
  return (
    <div className="mb-4">
      <h3 className="text-blue-400 font-semibold mb-2">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar allLinksToHome={true} />
      <div className="flex flex-col flex-grow px-4">
        <h1 className="self-center text-blue-500 font-extrabold text-4xl mt-24">
          Resume
        </h1>
        <div className="bg-blue-400 hover:bg-blue-500 transition-colors self-center mt-4 rounded-lg p-3 px-8 cursor-pointer">
        <Link
          href="/Korbin_Resume.pdf"
          className="flex flex-row items-center gap-2 cursor-pointer"
          aria-label="Download resume as PDF"
          download="Korbin_Resume.pdf"
        >
          <FiDownload />
          <span>View Resume</span>
        </Link>
        </div>
        <ResumeContainer>
          <h1 className="text-blue-600 text-3xl md:text-4xl pt-6 pl-5 font-bold">
            Korbin Hillan
          </h1>
          <p className="text-gray-300 pl-5 pt-4 text-xl">
            Full Stack Software Engineer
          </p>
          {/* Contact information - responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-5 mt-4">
            <ContactItem
              icon={
                <FaMapLocationDot className="text-blue-500 text-xl flex-shrink-0" />
              }
              href="https://maps.google.com/?q=Dixon,CA"
              text="Dixon, CA"
            />
            <ContactItem
              icon={
                <MdOutlineMailOutline className="text-blue-500 text-xl flex-shrink-0" />
              }
              href="mailto:khillan@asu.edu"
              text="khillan@asu.edu"
            />
            <ContactItem
              icon={<FiPhone className="text-blue-500 text-xl flex-shrink-0" />}
              href="tel:6615492337"
              text="661-549-2337"
            />
            <ContactItem
              icon={
                <FaGithub className="text-blue-500 text-xl flex-shrink-0" />
              }
              href="https://github.com/Korbin-Hillan"
              text="Github: Korbin-Hillan"
            />
            <ContactItem
              icon={
                <CiLinkedin className="text-blue-500 text-xl flex-shrink-0" />
              }
              href="https://linkedin.com/in/korbinhillan"
              text="Linkedin: korbinhillan"
            />
          </div>
          <div className="pb-6"></div>
        </ResumeContainer>
        <ResumeContainer>
          <h2 className="text-blue-600 text-2xl md:text-3xl pt-6 pl-5 font-bold">
            Professional Summary
          </h2>
          <p className="text-gray-300 px-5 pt-2 text-md pb-8">
            Detail-oriented and solutions-driven Software Engineering student
            with a strong foundation in full-stack web development,
            object-oriented programming, and database management. Proficient in
            modern technologies including HTML, CSS, JavaScript, React, and
            PostgreSQL. Experienced in developing scalable web applications,
            building RESTful APIs. Adept at problem-solving, debugging, and
            collaborating in Agile development environments. Passionate about
            building efficient, user-focused solutions and continually expanding
            technical expertise. Proven ability to learn quickly and deliver
            high-quality results in both academic and real-world projects.
          </p>
        </ResumeContainer>
        <ResumeContainer>
          <h2 className="text-blue-600 text-2xl md:text-3xl pt-6 pl-5 font-bold">
            Education
          </h2>
          <div className="px-5 py-4">
            <EducationItem
              degree="Bachelor of Science in Software Engineering"
              institution="Arizona State University"
              period="Jan 2023 - May 2026 (Expected)"
              gpa="3.2/4.0"
              courses={[
                "Data Structures & Algorithms",
                "Agile Development & Git Collaboration",
                "Database Systems",
                "Object-Oriented Programming",
              ]}
            />
            <EducationItem
              degree="Associate's in Liberal Arts Math"
              institution="Taft College"
              period="Aug 2020 - May 2024"
              gpa="3.7/4.0"
              courses={["Calculus 1,2,3", "Physics 1", "Chemistry"]}
            />
          </div>
        </ResumeContainer>
        <ResumeContainer>
          <h2 className="text-blue-600 text-2xl md:text-3xl pt-6 pl-5 font-bold">
            Projects
          </h2>
          <div className="px-5 py-4">
            <ExperienceItem
              title="Personal Portfolio Website"
              company="Personal Project"
              period="2025"
              description="Designed and developed a responsive personal portfolio website to showcase my projects and skills. Implemented modern UI components, responsive layouts, and optimized performance through code splitting and lazy loading. Deployed with CI/CD pipeline for automated testing and deployment."
              technologies={["React", "Next.js", "Tailwind CSS", "Vercel"]}
            />
            <ExperienceItem
              title="Movie Horizon  "
              company="Course Project"
              period="2025"
              description="Developed a feature-rich movie browsing platform that allows users to discover, search, and create watchlists of their favorite films. Implemented user authentication, real-time updates using websockets, and integrated with TMDB API for comprehensive movie data. Designed a responsive UI with dark mode support and accessibility features."
              technologies={[
                "React",
                "Node.js",
                "Tailwind,",
                "Typescript",
                "CI/CD Postgres",
              ]}
            />
            <ExperienceItem
              title="Memoranda Project (Team Project)"
              company="Personal Project"
              period="2025"
              description="Collaborated in an Agile Scrum environment with a team of 4 developers to enhance an open-source scheduling and note-taking application. Led the implementation of the calendar functionality and notification system. Conducted code reviews, wrote comprehensive unit tests achieving 85% code coverage, and participated in daily stand-ups and sprint planning."
              technologies={["Java", "Swing", "Junit", "Gradle", "Git/Github"]}
            />
          </div>
        </ResumeContainer>
        <ResumeContainer>
          <h2 className="text-blue-600 text-2xl md:text-3xl pt-6 pl-5 font-bold">
            Skills
          </h2>
          <div className="px-5 py-4">
            <SkillItem
              category="Programming Languages"
              skills={[
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "HTML/CSS",
              ]}
            />
            <SkillItem
              category="Frontend Technologies"
              skills={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Redux",
                "Bootstrap",
              ]}
            />
            <SkillItem
              category="Backend Technologies"
              skills={["Node.js", "Express", "RESTful APIs"]}
            />
            <SkillItem
              category="Databases"
              skills={["PostgreSQL", "MongoDB", "MySQL"]}
            />
            <SkillItem
              category="Tools & Methodologies"
              skills={["Git", "GitHub", "VS Code", "Agile/Scrum"]}
            />
          </div>
        </ResumeContainer>
      </div>
      <Footer />
    </div>
  );
}

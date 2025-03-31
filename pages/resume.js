import HeaderBar from "../components/header";
import { FiDownload, FiPhone } from "react-icons/fi";
import Footer from "../components/footer";
import { FaMapLocationDot, FaGithub } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

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
          className="text-gray-300 dark:text-gray-300 ml-2 hover:text-blue-400 transition-colors"
          aria-label={text}
        >
          {text}
        </a>
      ) : (
        <p className="text-gray-300 dark:text-gray-700 ml-2">{text}</p>
      )}
    </div>
  );
};

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen ">
      <HeaderBar allLinksToHome={true} />
      <div className="flex flex-col flex-grow px-4">
        <h1 className="self-center text-blue-500 font-extrabold text-4xl mt-24">
          Resume
        </h1>
        <div className="bg-blue-400 hover:bg-blue-500 transition-colors self-center mt-4 rounded-lg p-3 px-8 cursor-pointer">
          <a
            href="/resume.pdf"
            className="flex flex-row items-center gap-2 cursor-pointer"
            aria-label="Download resume as PDF"
          >
            <FiDownload />
            <span>View PDF</span>
          </a>
        </div>
        <ResumeContainer>
          <h1 className="text-blue-600 text-3xl md:text-4xl pt-6 pl-5 font-bold">
            Korbin Hillan
          </h1>
          <p className="text-gray-300 pl-5 pt-4 text-xl">
            Full stack software engineer
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
          <p className="text-gray-300 pl-5 px-5 pt-2 text-md pb-8">
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
        </ResumeContainer>
      </div>
      <Footer />
    </div>
  );
}

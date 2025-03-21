import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center text-center bg-gray-900 text-white justify-center px-6"
    >
      {/* Name & Title */}
      <h1 className="text-5xl text-gray-300 font-extrabold tracking-wide">
        Korbin Hillan
      </h1>
      <h2 className="text-3xl pt-5 text-blue-400 font-bold">
        Senior Software Engineer
      </h2>
      <p className="text-gray-400 text-lg pt-4 max-w-xl leading-relaxed">
        SWE Major at Arizona State University, <br />
        Building beautiful, responsive, and user-friendly web applications with
        modern technologies.
      </p>

      {/* Social Links */}
      <div className="flex text-4xl pt-10 space-x-6">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 transition transform hover:scale-110"
        >
          <GrLinkedin />
        </a>
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-8 bg-blue-500 p-3 px-12 rounded-2xl text-white flex items-center gap-2 font-semibold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg">
        <span>Let&#39;s work together</span>
        <HiArrowRight />
      </button>
    </section>
  );
}

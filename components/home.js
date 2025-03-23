import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center text-center bg-gray-900 text-white justify-center px-6 relative"
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
      <div className="flex text-4xl pt-10 space-x-6 ">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white hover:bg-blue-500/20 p-2 rounded-full transition transform hover:scale-110"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white hover:bg-blue-500/20 p-2 rounded-full transition transform hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <GrLinkedin />
        </a>
      </div>

      {/* Call-to-Action Button */}
      <Link href="#contact">
        <button className="mt-8 bg-blue-500 p-3 px-12 rounded-full text-white flex items-center gap-2 font-semibold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg">
          <span>Let&apos;s work together</span>
          <HiArrowRight />
        </button>
      </Link>
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link
          href="#about"
          className="text-gray-400 hover:text-white transition"
        >
          <FiChevronDown size={30} />
        </Link>
      </div>
    </section>
  );
}

"use client";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-10 max-w-4xl mx-auto my-8 p-4">
      {/* Contact Info Box */}
      <section className="bg-gray-800 w-96 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-blue-500 text-2xl font-bold pb-4">
          Contact Information
        </h1>
        <div className="flex items-center">
          <FaMapLocationDot className="w-12 h-12 bg-blue-800 text-blue-400 rounded-full p-2" />
          <div className="ml-4">
            <p className="text-gray-400 text-sm font-semibold">Location</p>
            <p className="text-white text-sm">Sacramento, CA</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold text-white pb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Korbin-Hillan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-10 h-10 text-white hover:text-gray-400 cursor-pointer transition duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/korbinhillan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin className="w-10 h-10 text-white hover:text-gray-400 cursor-pointer transition duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Box */}
      <section className="bg-gray-800 w-96 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-10 sm:mt-0">
        <h1 className="text-blue-500 text-2xl font-bold pb-4 text-center">
          Get in Touch
        </h1>
        <form className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-1">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-white mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
              className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

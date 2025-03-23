"use client";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub, FaCheckCircle } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear error when user types
    if (errors[id]) {
      setErrors({ ...errors, [id]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <div id="contact" className="bg-gray-900 py-20">
      <section className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold text-blue-500 ">Get in Touch</h1>
        <p className="mt-4 text-2xl text-center text-gray-300 max-w-2xl px-4">
          Have a question or want to work together? Drop me a message below.
        </p>
      </section>

      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-10 max-w-4xl mx-auto my-12 px-4">
        {/* Contact Info Box */}
        <section className="bg-gray-800 w-full lg:w-96 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10 lg:mb-0">
          <h2 className="text-blue-500 text-2xl font-bold pb-6">
            Contact Information
          </h2>

          <div className="flex items-center mb-8">
            <FaMapLocationDot className="w-12 h-12 bg-blue-800 text-blue-400 rounded-full p-2 flex-shrink-0" />
            <div className="ml-4">
              <p className="text-gray-400 text-sm font-semibold">Location</p>
              <p className="text-white">Sacramento, CA</p>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <HiOutlineMailOpen className="w-12 h-12 bg-blue-800 text-blue-400 rounded-full p-2 flex-shrink-0" />
            <div className="ml-4">
              <p className="text-gray-400 text-sm font-semibold">Email</p>
              <a
                href="mailto:khillan5223@gmail.com"
                className="text-white hover:text-blue-400 transition"
              >
                khillan5223@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white pb-4">
              Connect With Me
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Korbin-Hillan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-200"
              >
                <FaGithub className="w-6 h-6 text-white " />
              </a>
              <a
                href="https://linkedin.com/in/korbinhillan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-200"
              >
                <GrLinkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Box */}
        <section className="bg-gray-800 w-full lg:w-96 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center">
              <FaCheckCircle className="text-green-500 text-5xl mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h2>
              <p className="text-gray-300">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-blue-500 text-2xl font-bold pb-6 text-center">
                Send Message
              </h2>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-700 border ${
                      errors.name ? "border-red-500" : "border-gray-600"
                    } rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-white mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-700 border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-white mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-gray-700 border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting
                      ? "bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white font-bold py-3 px-4 rounded-full transition duration-200 flex justify-center`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

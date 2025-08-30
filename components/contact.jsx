"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaMapLocationDot,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaPhone,
  FaClock,
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMailOpen, HiArrowRight } from "react-icons/hi";
import { MdSend, MdEmail, MdLocationOn } from "react-icons/md";
import { BiLoaderAlt, BiTime, BiCalendar } from "react-icons/bi";
import { FiMessageSquare, FiUser, FiMail } from "react-icons/fi";
import { BsArrowUpRight, BsCheck2Circle } from "react-icons/bs";

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
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
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
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
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 4000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <MdEmail />,
      title: "Email Me",
      value: "khillan@asu.edu",
      href: "mailto:khillan@asu.edu",
      description: "Best for detailed inquiries and project discussions",
      color: "text-blue-400",
    },
    {
      icon: <MdLocationOn />,
      title: "Location",
      value: "Sacramento, CA",
      href: null,
      description: "Available for remote work and local meetups",
      color: "text-green-400",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/Korbin-Hillan",
      color: "hover:bg-gray-700",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/korbinhillan",
      color: "hover:bg-blue-600",
      description: "Connect professionally",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "#",
      color: "hover:bg-sky-500",
      description: "Follow my journey",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      href: "https://discord.com/users/1052433369213968454",
      color: "hover:bg-indigo-500",
      description: "Chat with me",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        {/* Enhanced Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              headerInView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20 mb-8">
              <FiMessageSquare className="text-blue-400 text-xl" />
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">
                Contact
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
              Let's Connect
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="h-px w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
              <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>

            <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Have a project in mind, a question to ask, or just want to say
              hello?
              <span className="text-blue-400 font-semibold">
                {" "}
                I'd love to hear from you
              </span>
              . Let's create something amazing together!
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div
            ref={infoRef}
            className={`lg:col-span-1 transition-all duration-1000 ${
              infoInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl h-full">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ready to bring your ideas to life? Whether it's a new project,
                  collaboration, or just a friendly chat about technology, I'm
                  here to help.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.title}
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-gray-700/30 backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center ${method.color} text-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-medium">
                          {method.value}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-200">Follow Me</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-3 rounded-xl bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 ${social.color} transition-all duration-300 hover:scale-105`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <div>
                        <div className="text-white font-medium text-sm">
                          {social.name}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {social.description}
                        </div>
                      </div>
                      <BsArrowUpRight className="ml-auto text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div
            ref={formRef}
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
              formInView
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <FaCheckCircle className="text-white text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out! I've received your message and
                    will get back to you within 24-48 hours.
                  </p>
                  <div className="flex items-center gap-2 mt-6 text-green-400">
                    <BsCheck2Circle />
                    <span className="text-sm font-medium">
                      Message delivered
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                      Send Me a Message 💌
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Fill out the form below and I'll get back to you as soon
                      as possible. All fields marked with * are required.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="name"
                          className="flex items-center gap-2 text-white font-medium mb-3"
                        >
                          <FiUser className="text-blue-400" />
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-gray-700/50 backdrop-blur-sm border-2 ${
                              errors.name
                                ? "border-red-500 focus:border-red-400"
                                : focusedField === "name"
                                ? "border-blue-500 focus:border-blue-400"
                                : "border-gray-600 hover:border-gray-500 focus:border-blue-500"
                            } rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:bg-gray-700/70`}
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                              focusedField === "name" ? "w-full" : "w-0"
                            }`}
                          ></div>
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                            <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="group">
                        <label
                          htmlFor="email"
                          className="flex items-center gap-2 text-white font-medium mb-3"
                        >
                          <FiMail className="text-blue-400" />
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-gray-700/50 backdrop-blur-sm border-2 ${
                              errors.email
                                ? "border-red-500 focus:border-red-400"
                                : focusedField === "email"
                                ? "border-blue-500 focus:border-blue-400"
                                : "border-gray-600 hover:border-gray-500 focus:border-blue-500"
                            } rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:bg-gray-700/70`}
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                              focusedField === "email" ? "w-full" : "w-0"
                            }`}
                          ></div>
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                            <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="group">
                      <label
                        htmlFor="subject"
                        className="flex items-center gap-2 text-white font-medium mb-3"
                      >
                        <FiMessageSquare className="text-blue-400" />
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          id="subject"
                          type="text"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-gray-700/50 backdrop-blur-sm border-2 ${
                            focusedField === "subject"
                              ? "border-blue-500 focus:border-blue-400"
                              : "border-gray-600 hover:border-gray-500 focus:border-blue-500"
                          } rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:bg-gray-700/70`}
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                            focusedField === "subject" ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label
                        htmlFor="message"
                        className="flex items-center gap-2 text-white font-medium mb-3"
                      >
                        <FiMessageSquare className="text-blue-400" />
                        Message *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          rows="6"
                          placeholder="Tell me about your project, idea, or just say hello..."
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-gray-700/50 backdrop-blur-sm border-2 ${
                            errors.message
                              ? "border-red-500 focus:border-red-400"
                              : focusedField === "message"
                              ? "border-blue-500 focus:border-blue-400"
                              : "border-gray-600 hover:border-gray-500 focus:border-blue-500"
                          } rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 focus:bg-gray-700/70 resize-none`}
                        ></textarea>
                        <div
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                            focusedField === "message" ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                          <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                          {errors.message}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm mt-2">
                        {formData.message.length}/500 characters
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`group relative w-full ${
                          isSubmitting
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
                        } text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                      >
                        <span className="flex items-center justify-center gap-3 text-lg">
                          {isSubmitting ? (
                            <>
                              <BiLoaderAlt className="text-2xl animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <MdSend className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                              Send Message
                              <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                        {!isSubmitting && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        )}
                      </button>
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      Your information is secure and will never be shared with
                      third parties. I typically respond within 24-48 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

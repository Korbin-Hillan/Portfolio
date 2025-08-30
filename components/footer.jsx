"use client";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaHeart,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gray-800 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-col-reverse items-center justify-between gap-2 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Korbin Hillan. All rights reserved.
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {/* Links */}
            <nav aria-label="Footer" className="md:col-span-2">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                {[
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "/projects" },
                  { name: "Resume", href: "/resume" },
                  { name: "Contact", href: "mailto:khillan@asu.edu" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {[
              {
                name: "GitHub",
                href: "https://github.com/Korbin-Hillan",
                icon: <FaGithub />,
              },
              {
                name: "LinkedIn",
                href: "https://linkedin.com/in/korbinhillan",
                icon: <FaLinkedin />,
              },
              {
                name: "Email",
                href: "mailto:khillan@asu.edu",
                icon: <MdEmail />,
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={s.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-800 bg-gray-800/40 text-gray-300 transition hover:text-white hover:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              >
                <span className="text-lg" aria-hidden>
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
}

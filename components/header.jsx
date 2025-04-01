"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// Remove these incorrect imports:
// import HeaderBar from "../components/HeaderBar";
// import Footer from "../components/Footer";

export default function Header({ allLinksToHome = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainTarget = allLinksToHome ? "/" : "#home";
  const navLinks = allLinksToHome
    ? [
        { label: "Home", href: "/#home" },
        { label: "About", href: "/#about" },
        { label: "Skills", href: "/#skills" },
        { label: "Contact", href: "/#contact" },
        { label: "Projects", href: "/projects" },
        { label: "Resume", href: "/resume" },
        { label: "Blog", href: "/blog" },
      ]
    : [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
        { label: "Projects", href: "/projects" },
        { label: "Resume", href: "/resume" },
        { label: "Blog", href: "/blog" },
      ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800/90 p-4 flex items-center backdrop-blur-md z-50 shadow-md">
      <div className="flex items-center">
        {/* Profile Image linking to the target */}
        <Link href={mainTarget}>
          <Image
            src="/images/Lake_Isabella.jpeg"
            alt="Image of me on a Rock at Lake Isabella"
            width={80}
            height={80}
            className="w-10 h-10 rounded-full object-cover border-1 border-blue-400 "
          />
        </Link>
        {/* Name linking to the target */}
        <Link
          href={mainTarget}
          className="ml-3 font-extrabold text-blue-500 text-lg hover:text-blue-400 transition"
        >
          Korbin Hillan
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Navigation Links */}
      <nav className="ml-auto hidden md:flex space-x-6 pr-4">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-gray-300 hover:text-white transition border-b-2 border-transparent hover:border-blue-400 py-1"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
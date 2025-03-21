import Image from "next/image";

export default function HeaderBar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800/40 p-4 flex items-center backdrop-blur-md z-50">
      <div className="flex items-center">
        {/* Profile Image linking to home */}
        <a href="#home">
          <Image
            src="/images/Lake_Isabella.jpeg"
            alt="Image of me on a Rock at Lake Isabella"
            width={80}
            height={80}
            className="w-10 h-10 rounded-full object-cover"
          />
        </a>
        {/* Name linking to home */}
        <a
          href="#home"
          className="ml-3 font-extrabold text-blue-500 text-lg hover:underline transition"
        >
          Korbin Hillan
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="ml-auto flex space-x-6 pr-4">
        <a href="#home" className="text-gray-300 hover:text-white transition">
          Home
        </a>
        <a href="#about" className="text-gray-300 hover:text-white transition">
          About
        </a>
        <a href="#skills" className="text-gray-300 hover:text-white transition">
          Skills
        </a>
        <a href="#resume" className="text-gray-300 hover:text-white transition">
          Resume
        </a>
      </nav>
    </header>
  );
}

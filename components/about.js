import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-gray-900 px-6 md:px-20 py-16"
    >
      {/* Title */}
      <h1 className="text-blue-500 text-4xl font-bold mb-6">About Me</h1>

      {/* Profile Image */}
      <Image
        src="/images/Lake_Isabella.jpeg"
        alt="Image of Korbin Hillan"
        width={150}
        height={150}
        className="rounded-full mb-6 shadow-lg transition transform hover:scale-105"
      />

      {/* About Section */}
      <p className="max-w-2xl text-lg text-gray-300 text-center leading-relaxed">
        Hi! I&#39;m{" "}
        <span className="text-blue-400 font-semibold">Korbin Hillan</span>, a
        senior Software Engineering student at{" "}
        <span className="text-yellow-300 font-semibold">
          Arizona State University.
        </span>{" "}
        I specialize in{" "}
        <span className="font-bold">Full-Stack Development</span>, crafting
        scalable and performant web applications. My passion lies in building
        <span className="font-bold">
          {" "}
          modern, user-friendly, and responsive
        </span>{" "}
        software solutions.
      </p>

      <p className="max-w-2xl text-lg text-gray-300 text-center leading-relaxed mt-4">
        I&#39;m proficient in{" "}
        <span className="font-semibold">
          JavaScript, React, Next.js, Django, PostgreSQL, Java, API Development,
        </span>{" "}
        and <span className="font-semibold">Cloud Computing</span>. I enjoy
        tackling complex problems and optimizing system efficiency.
      </p>

      <p className="max-w-2xl text-lg text-gray-300 text-center leading-relaxed mt-4">
        Beyond coding, I have a strong background in{" "}
        <span className="font-semibold">
          problem-solving, collaboration, and mentorship.
        </span>{" "}
        I also enjoy working on open-source projects, automating workflows, and
        exploring new technologies.
      </p>

      {/* Call-to-Action Button */}
      <a
        href="https://korbin101lee.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-blue-500 px-6 py-3 rounded-2xl text-white font-semibold flex items-center gap-2 hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
      >
        Check Out My Work
      </a>
    </section>
  );
}

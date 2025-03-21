import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center bg-gray-900 px-6 md:px-20 py-16"
    >
      {/* Title */}
      <h1 className="text-blue-400 text-4xl font-bold mb-12 text-center">
        Technical Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Frontend Development */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-white">
          <FaCode className="text-blue-400 text-3xl mb-4" />
          <h6 className="text-xl font-semibold mb-3">Frontend Development</h6>
          <ul className="space-y-2 text-gray-300">
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-white">
          <FaServer className="text-green-400 text-3xl mb-4" />
          <h6 className="text-xl font-semibold mb-3">Backend Development</h6>
          <ul className="space-y-2 text-gray-300">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Django</li>
            <li>RESTful APIs</li>
            <li>Authentication (JWT/OAuth)</li>
          </ul>
        </div>

        {/* Database */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-white">
          <FaDatabase className="text-yellow-400 text-3xl mb-4" />
          <h6 className="text-xl font-semibold mb-3">Database</h6>
          <ul className="space-y-2 text-gray-300">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>SQL & NoSQL</li>
          </ul>
        </div>

        {/* Tools & Others */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-white">
          <FaTools className="text-purple-400 text-3xl mb-4" />
          <h6 className="text-xl font-semibold mb-3">Tools & Others</h6>
          <ul className="space-y-2 text-gray-300">
            <li>Git & GitHub</li>
            <li>Docker & Kubernetes</li>
            <li>Linux & Shell Scripting</li>
            <li>CI/CD (GitHub Actions)</li>
            <li>Jest & Cypress (Testing)</li>
            <li>Agile & Scrum</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

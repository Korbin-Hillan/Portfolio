import Image from "next/image";
import Link from "next/link";
import HeaderBar from "../../../components/header";
import Footer from "../../../components/footer";
import { projects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const desc = project.description || project.pitch || "";
  const tags = (project.technologies?.map((t) => (typeof t === "string" ? t : t.name)) || project.tech || []).slice(0, 6);
  const status = project.status || "completed";
  const category = project.category;

  const statusStyles = {
    live: { bg: "bg-green-500/20", border: "border-green-400/30", dot: "bg-green-400", text: "Live" },
    development: { bg: "bg-yellow-500/20", border: "border-yellow-400/30", dot: "bg-yellow-400", text: "In Dev" },
    completed: { bg: "bg-gray-500/20", border: "border-gray-400/30", dot: "bg-gray-400", text: "Completed" },
  };
  const st = statusStyles[status] || statusStyles.completed;

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/60 overflow-hidden hover:bg-gray-900 transition-colors">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className={`absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm text-xs border text-gray-200 ${st.bg} ${st.border}`}>
          <span className={`w-2 h-2 rounded-full ${st.dot}`}></span>
          <span>{st.text}</span>
        </div>
        {category && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gray-900/70 border border-gray-700/60 text-xs text-gray-300">
            {category}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{project.title}</h2>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">{desc}</p>
        </div>
        {!!tags.length && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 text-xs border border-gray-700">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-1 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm"
          >
            Case Study
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800 text-sm"
            >
              <FaExternalLinkAlt className="opacity-80" />
              Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-100 text-sm border border-gray-700"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Projects | Korbin Hillan",
  description: "Selected work and case studies by Korbin Hillan.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <HeaderBar allLinksToHome={true} />
      <main className="container mx-auto px-6 py-28 md:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3">
            A curated selection of work across the stack. Each card links to a concise case study.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

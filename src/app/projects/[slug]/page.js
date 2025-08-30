import Image from "next/image";
import HeaderBar from "../../../../components/header";
import Footer from "../../../../components/footer";
import { projects, getProjectBySlug } from "../../../data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Case Study` ,
    description: project.description || project.pitch,
  };
}

export default function ProjectCaseStudy({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <HeaderBar allLinksToHome={true} />
        <main className="container mx-auto px-4 py-28">
          <h1 className="text-2xl">Project not found.</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <HeaderBar allLinksToHome={true} />
      <main className="container mx-auto px-4 py-28 md:py-32 max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-500">{project.title}</h1>
        <p className="text-gray-300 mt-3">{project.description || project.pitch}</p>
        {(
          (project.technologies && project.technologies.length) ||
          (project.tech && project.tech.length)
        ) && (
          <div className="flex flex-wrap gap-2 mt-4">
            {(project.technologies
              ? project.technologies.map((t) => (typeof t === 'string' ? t : t.name))
              : project.tech
            ).map((t) => (
              <span key={t} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mt-6">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Problem</h2>
            <p className="text-gray-300 mt-2">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Solution</h2>
            <p className="text-gray-300 mt-2">{project.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Impact</h2>
            <p className="text-gray-300 mt-2">{project.impact}</p>
            {project.outcomes?.length ? (
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                {project.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        <div className="flex gap-4 mt-10">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
            >
              View Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
            >
              View Code
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

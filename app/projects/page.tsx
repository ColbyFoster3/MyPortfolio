import { projects } from '../../data/projects'
import ProjectCard from '../../components/project-card';

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

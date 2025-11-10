import { projects } from '../../data/projects'
import ProjectCard from '../../components/project-card';

export default function ProjectsPage() {
  return (
    <section key="projects-page">
      <div className="flex flex-col mb-6">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p>
          Below are a handful of projects I have contributed to over the last few years. 
          Visit my <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://github.com/ColbyFoster3">Github profile</a> for more!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={`project-card-${project.title}`} {...project} />
        ))}
      </div>
    </section>
  )
}

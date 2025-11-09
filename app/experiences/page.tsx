import { experiences } from '../../data/experiences'
import ExperienceCard from '../../components/experience-card';

export default function ExperiencesPage() {
  return (
    <div key="experiences-container">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={`project-card-${experience.role}`} {...experience} />
        ))}
      </div>
    </div>
  )
}

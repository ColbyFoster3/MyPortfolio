import { ArrowUpRight } from 'lucide-react';

type Experience = {
  role: string;
  description: string;
  company?: string;
  date: string;
  technologies: string[];
  company_link: string;
};

export default function ExperienceCard({ role, description, company, technologies, company_link, date }: Experience) {
  return (

    <a
      href={company_link}
      className="group inline-block text-blue-600 font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
        <div className="rounded-2xl border p-6 shadow-sm bg-white">
            <div className="flex items-center justify-between mb-1">
                <h4>{date}</h4>
                <span className="icon transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight />
                </span>
            </div>
             <h3 className="text-xl font-semibold mb-2 text-gray-900">{role}</h3>
            <p className="text-gray-700 mb-3">{company}</p>
            <p className="text-gray-700 mb-3">{description}</p>
            <ul className="flex flex-wrap gap-2 text-sm mb-4">
                {technologies.map((technology) => (
                <li
                    key={technology}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md border border-gray-200"
                >
                    {technology}
                </li>
                ))}
            </ul>
        </div>
    </a>
  );
}

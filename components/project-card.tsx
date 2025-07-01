type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({ title, description, tech, link }: Project) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition duration-300 bg-white">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <ul className="flex flex-wrap gap-2 text-sm mb-4">
        {tech.map((t) => (
          <li
            key={t}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md border border-gray-200"
          >
            {t}
          </li>
        ))}
      </ul>
      <a
        href={link}
        className="inline-block text-blue-600 hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}

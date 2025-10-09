import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

interface ProjectsWindowProps {
  projects: Project[];
}

export const ProjectsWindow: React.FC<ProjectsWindowProps> = ({ projects }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#0831D9]">
        <h2 className="text-2xl font-bold text-[#0831D9] mb-2">My Projects</h2>
        <p className="text-gray-600">A showcase of my recent work and achievements</p>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-[#0831D9] hover:shadow-lg transition-shadow"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0831D9] mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#3A8CFF] text-white text-sm rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0831D9] hover:bg-[#0A40FF] text-white rounded-lg transition-colors font-semibold"
              >
                <span>View Project</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

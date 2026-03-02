import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
 const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      // Front-end
      'React': 'bg-blue-100 text-blue-700',
      'React.js': 'bg-blue-100 text-blue-700',
      'Redux': 'bg-purple-100 text-purple-700',
      'HTML': 'bg-orange-100 text-orange-700',
      'HTML/CSS': 'bg-orange-100 text-orange-700',
      'CSS': 'bg-blue-100 text-blue-700',
      'JavaScript': 'bg-yellow-100 text-yellow-700',
      'Tailwind CSS': 'bg-sky-100 text-sky-700',
      'Tailwind': 'bg-sky-100 text-sky-700',
      'Bootstrap': 'bg-indigo-100 text-indigo-700',
      'Tkinter': 'bg-slate-100 text-slate-700',

      // Back-end
      'PHP': 'bg-indigo-100 text-indigo-700',
      'Laravel': 'bg-red-100 text-red-700',
      'Python': 'bg-yellow-100 text-yellow-700',
      'Node.js': 'bg-emerald-100 text-emerald-700',
      'Express': 'bg-gray-200 text-gray-800',
      'API REST': 'bg-teal-100 text-teal-700',

      // Bases de données
      'MySQL': 'bg-blue-100 text-blue-800',
      'MongoDB': 'bg-green-100 text-green-700',
      'PostgreSQL': 'bg-indigo-100 text-indigo-800',
      'MariaDB': 'bg-rose-100 text-rose-700',
      'SQLite': 'bg-sky-100 text-sky-800',

      // Outils & CMS
      'Git': 'bg-orange-100 text-orange-700',
      'Figma': 'bg-pink-100 text-pink-700',
      'WordPress': 'bg-blue-100 text-blue-700',
      'WooCommerce': 'bg-purple-100 text-purple-700',
      'SEO': 'bg-orange-100 text-orange-600',
      'Agile': 'bg-emerald-100 text-emerald-700',
      'Scrum': 'bg-emerald-100 text-emerald-700',
    };
    
    // Si la technologie n'est pas dans la liste, on met un joli gris par défaut
    return colors[tech] || 'bg-gray-100 text-gray-700';
  };

  return (
    // 1. Ajout de `flex flex-col h-full` pour que la carte prenne toute la hauteur
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      
      {/* Image */}
      {/* Ajout de `shrink-0` pour empêcher l'image de s'écraser */}
      <div className="relative h-56 shrink-0 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Contenu */}
      {/* 2. Ajout de `flex flex-col flex-grow` pour occuper l'espace restant */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {project.title}
        </h3>
        
        {/* 3. Ajout de `flex-grow` pour que ce texte agisse comme un ressort et pousse les badges en bas */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        {/* 4. Ajout de `mt-auto` pour coller ce bloc tout en bas */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
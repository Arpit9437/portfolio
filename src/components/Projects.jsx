import { Github, ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  // Function to check if a URL is valid and not just "#"
  const isValidUrl = (url) => {
    return url && url !== "#";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-background-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Code size={32} className="text-primary dark:text-primary-light mb-4" />
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-4">Here are some notable projects and works that highlight my skills, expertise, and contributions in the field of computer science and software development.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} 
              className="bg-background-light dark:bg-background-dark rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 overflow-hidden border border-primary/10 dark:border-primary-light/10 hover:border-primary/30 dark:hover:border-primary-light/30 transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary dark:text-secondary-light mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} 
                      className="bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light px-3 py-1 rounded-full text-sm hover:bg-primary/20 dark:hover:bg-primary-light/20 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {isValidUrl(project.github) && (
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary-light flex items-center transition-colors duration-300">
                      <Github size={20} className="mr-1" /> Code
                    </a>
                  )}
                  {isValidUrl(project.live) && (
                    <a 
                      href={project.live}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary-light flex items-center transition-colors duration-300">
                      <ExternalLink size={20} className="mr-1" /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
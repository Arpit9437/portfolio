import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Briefcase size={32} className="text-gray-900 dark:text-gray-100 mb-4" />
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{exp.position}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {exp.year}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <GraduationCap size={40} className="text-gray-900 dark:text-gray-100 mb-4"/>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Skills
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 transform -translate-x-1/2 rounded-full" />
          
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 dark:border-blue-400 flex items-center justify-center shadow-lg">
                  <GraduationCap size={24} className="text-blue-500 dark:text-blue-400" />
                </div>
              </div>
              
              {/* Content Card */}
              <div className={`relative ml-24 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
              }`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl dark:shadow-blue-900/20 transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-1 hover:scale-105">
                  {/* Content Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div className="flex-grow mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <h4 className="text-lg font-medium">
                          {edu.school}
                        </h4>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full font-medium text-sm whitespace-nowrap shadow-inner">
                      {edu.year}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;


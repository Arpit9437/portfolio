import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-gray-900 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <GraduationCap
            size={32}
            className="text-primary dark:text-primary-light mb-4"
          />
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-2">
            Below is a summary of my education.
          </p>
        </div>

        {/* Desktop Timeline (hidden on mobile) - IMPROVED */}
        <div className="relative hidden md:block">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 h-full w-px bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2" />

          {education.map((edu, index) => (
            <div key={index} className="relative mb-28 last:mb-0">
              {/* Timeline Node - Increased size */}
              <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-accent dark:bg-accent-light rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-10">
                {/* Left Side */}
                <div
                  className={
                    index % 2 === 0
                      ? "text-right pr-12"
                      : "text-right pr-12 flex items-center justify-end"
                  }
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex items-center justify-end -mb-1">
                        <h3 className="text-xl font-bold text-secondary dark:text-secondary-light mr-5 leading-tight">
                          {edu.school}
                        </h3>
                        {/* Improved icon container */}
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-primary/20 dark:border-primary-light/20">
                          <img
                            src={edu.logo}
                            className="w-16 h-16 rounded-full object-cover"
                            alt={edu.school}
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mr-24 mt-3">
                        {edu.degree}
                      </p>
                      <p className="text-primary dark:text-primary-light text-sm font-medium mr-24 mt-2">
                        {edu.description}
                      </p>
                    </>
                  ) : (
                    <div className="text-secondary dark:text-secondary-light text-lg font-medium">
                      {edu.year}
                    </div>
                  )}
                </div>

                {/* Right Side */}
                <div
                  className={
                    index % 2 === 0
                      ? "text-left pl-12 flex items-center"
                      : "text-left pl-12"
                  }
                >
                  {index % 2 === 0 ? (
                    <div className="text-secondary dark:text-secondary-light text-lg font-medium">
                      {edu.year}
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center -mb-1">
                        {/* Improved icon container */}
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-primary/20 dark:border-primary-light/20">
                          <img
                            src={edu.logo}
                            className="w-16 h-16 rounded-full object-cover"
                            alt={edu.school}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-secondary dark:text-secondary-light ml-5 leading-tight">
                          {edu.school}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 ml-24 mt-3">
                        {edu.degree}
                      </p>
                      <p className="text-primary dark:text-primary-light text-sm font-medium ml-24 mt-2">
                        {edu.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline (visible only on mobile) */}
        <div className="relative md:hidden">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 h-full w-px bg-gray-300 dark:bg-gray-700" />

          {education.map((edu, index) => (
            <div key={index} className="relative mb-16 last:mb-0 pl-20">
              {/* Timeline Node */}
              <div className="absolute left-8 top-8 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-accent dark:bg-accent-light rounded-full" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-start mb-4">
                  {/* Icon container */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-primary/20 dark:border-primary-light/20 mr-4">
                    <img
                      src={edu.logo}
                      className="w-12 h-12 rounded-full object-cover"
                      alt={edu.school}
                    />
                  </div>
                  {/* School name */}
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-secondary dark:text-secondary-light leading-tight">
                      {edu.school}
                    </h3>
                  </div>
                </div>
                
                {/* Content with better spacing */}
                <div className="ml-20">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {edu.degree}
                  </p>
                  <div className="flex flex-col space-y-2">
                    <p className="text-primary dark:text-primary-light text-sm font-medium">
                      {edu.description}
                    </p>
                    <p className="text-secondary dark:text-secondary-light text-sm font-medium">
                      {edu.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
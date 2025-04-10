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

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="relative hidden md:block">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 h-full w-px bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2" />

          {education.map((edu, index) => (
            <div key={index} className="relative mb-24 last:mb-0">
              {/* Timeline Node */}
              <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-accent dark:bg-accent-light rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-8">
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
                        <h3 className="text-xl font-bold text-secondary dark:text-secondary-light mr-4">
                          {edu.school}
                        </h3>
                        <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-primary/20 dark:border-primary-light/20">
                          <img
                            src={edu.logo}
                            className="w-14 h-14 rounded-full object-cover"
                            alt={edu.school}
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mr-20">
                        {edu.degree}
                      </p>
                      <p className="text-primary dark:text-primary-light text-sm font-medium mr-20 mt-1">
                        {edu.description}
                      </p>
                    </>
                  ) : (
                    <div className="text-secondary dark:text-secondary-light -mt-5">
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
                    <div className="text-secondary dark:text-secondary-light -mt-5">
                      {edu.year}
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center -mb-1">
                        <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-primary/20 dark:border-primary-light/20">
                          <img
                            src={edu.logo}
                            className="w-14 h-14 rounded-full object-cover"
                            alt={edu.school}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-secondary dark:text-secondary-light ml-3">
                          {edu.school}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 ml-20">
                        {edu.degree}
                      </p>
                      <p className="text-primary dark:text-primary-light text-sm font-medium ml-20 mt-1">
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
          <div className="absolute left-6 h-full w-px bg-gray-300 dark:bg-gray-700" />

          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0 pl-16">
              {/* Timeline Node */}
              <div className="absolute left-6 top-6 transform -translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-accent dark:bg-accent-light rounded-full" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-primary/20 dark:border-primary-light/20 mr-3">
                    <img
                      src={edu.logo}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={edu.school}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-secondary dark:text-secondary-light">
                    {edu.school}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  {edu.degree}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-primary dark:text-primary-light text-sm font-medium">
                    {edu.description}
                  </p>
                  <p className="text-secondary dark:text-secondary-light text-sm">
                    {edu.year}
                  </p>
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
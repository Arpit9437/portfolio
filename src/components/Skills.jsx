import { useState } from "react";

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Git",
    "GitHub",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Bootstrap",
    "Next.js",
    "REST APIs",
  ];

  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleSkills = skills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-background-light dark:from-gray-900 dark:to-background-dark transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-4">
            Following are some of my skills and expertise.
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-primary dark:bg-primary-light w-4"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Previous page"
          >
            <span className="block w-3 h-3 border-l-2 border-b-2 border-secondary dark:border-secondary-light transform rotate-45"></span>
          </button>

          <div className="overflow-visible px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {visibleSkills.map((skill, index) => (
                <div key={index} className="pt-2 pb-6 px-2">
                  <div 
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary-light/20 h-full"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-lg">
                        {skill}
                      </span>
                      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-primary to-secondary dark:from-primary-light dark:to-secondary-light rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Next page"
          >
            <span className="block w-3 h-3 border-r-2 border-t-2 border-secondary dark:border-secondary-light transform rotate-45"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
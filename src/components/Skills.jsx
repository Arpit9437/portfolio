import { useState } from "react";

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const skillCategories = {
    "Programming Languages": [
      "C/C++",
      "Java",
      "Python",
      "SQL",
    ],
    "Frontend": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
    "Backend": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
    ],
    "Machine Learning": [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Gradio",
      "HuggingFace",
      "PyTorch",
      "LLM's",
    ],
    "Coursework": [
      "Object Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "Database Management System",
      "Artificial Intelligence",
      "Design Pattern",
      "Software Engineering",
      "Design and Analysis of Algorithms"
    ]
  };

  const allSkills = Object.values(skillCategories).flat();
  
  const displaySkills = currentCategory === "all" 
    ? allSkills 
    : skillCategories[currentCategory] || [];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-background-light dark:from-gray-900 dark:to-background-dark transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
            Skills and Coursework
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-4">
            Following are some of my skills and expertise.
          </p>
          
          {/* Category Selection Tabs - Improved Responsive Design */}
          <div className="w-full max-w-4xl mt-8 px-2">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <button
                onClick={() => setCurrentCategory("all")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 mb-2 ${
                  currentCategory === "all"
                    ? "bg-primary text-white dark:bg-primary-light dark:text-gray-900"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 mb-2 ${
                    currentCategory === category
                      ? "bg-primary text-white dark:bg-primary-light dark:text-gray-900"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-visible px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {displaySkills.map((skill, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
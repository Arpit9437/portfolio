"use client";

import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGlobe,
  FaGithub,
  FaBootstrap,
  FaTools,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiOracle,
  SiNextdotjs,
} from "react-icons/si";

const getIconForSkill = (skill) => {
  const iconMap = {
    React: (
      <FaReact className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-600" />
    ),
    JavaScript: (
      <FaJsSquare className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-yellow-500" />
    ),
    "Node.js": (
      <FaNodeJs className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-green-600" />
    ),
    Express: (
      <SiExpress className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-600" />
    ),
    Python: (
      <FaPython className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-500" />
    ),
    SQL: (
      <FaDatabase className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-orange-500" />
    ),
    HTML: (
      <FaHtml5 className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-orange-600" />
    ),
    CSS: (
      <FaCss3Alt className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-600" />
    ),
    C: (
      <SiC className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-600" />
    ),
    "C++": (
      <SiCplusplus className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-600" />
    ),
    Git: (
      <FaGitAlt className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-orange-600" />
    ),
    GitHub: (
      <FaGithub className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-purple-600" />
    ),
    MongoDB: (
      <SiMongodb className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-green-500" />
    ),
    Oracle: (
      <SiOracle className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-red-500" />
    ),
    "Tailwind CSS": (
      <SiTailwindcss className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-cyan-500" />
    ),
    Bootstrap: (
      <FaBootstrap className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-purple-500" />
    ),
    "Next.js": (
      <SiNextdotjs className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-black" />
    ),
    "REST APIs": (
      <FaGlobe className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-600" />
    ),
    Default: (
      <FaReact className="w-8 h-8 text-gray-800 dark:text-white group-hover:text-blue-600" />
    ),
  };

  return iconMap[skill] || iconMap["Default"];
};

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "C",
    "C++",
    "Git",
    "GitHub",
    "MongoDB",
    "Oracle",
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
          <FaTools className="w-12 h-12 text-primary dark:text-primary-light mb-4" />
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
          >
            <FaChevronLeft className="w-6 h-6 text-secondary dark:text-secondary-light" />
          </button>

          <div className="overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {visibleSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary-light/20"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-primary-light/10 transition-colors duration-300">
                      {getIconForSkill(skill)}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200 text-lg">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <FaChevronRight className="w-6 h-6 text-secondary dark:text-secondary-light" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;

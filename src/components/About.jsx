import { User } from "lucide-react";
import { about } from "../data/portfolioData";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-gray-900 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <User
            size={32}
            className="text-primary dark:text-primary-light mb-4"
          />
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-2">
            Get to know me better
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* About Text - Centered */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary dark:text-secondary-light mb-4">
              {about.greeting}
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
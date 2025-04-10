const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background-light to-gray-50 dark:from-background-dark dark:to-gray-800 py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Updated footer with more content */}
          <div className="flex space-x-6">
            <a 
              href="#education" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            >
              Education
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#stats" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            >
              Stats
            </a>
            <a 
              href="#skills" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
          
          <p className="text-center text-secondary dark:text-secondary-light font-medium">
            © {new Date().getFullYear()} Arpit Kaple. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
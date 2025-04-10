import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [ 'Education', 'Projects', 'Stats', 'Skills', 'Contact'];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-8xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 
            onClick={scrollToTop}
            className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary dark:from-primary-light dark:to-accent bg-clip-text text-transparent pl-2 cursor-pointer"
          >
            AK.
          </h1>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-light dark:text-text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            {/* Theme Toggle beside Contact */}
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            {/* Adding theme toggle to the mobile menu too for consistency */}
            <div className="flex items-center">
              <span className="text-gray-600 dark:text-gray-300 mr-2">Theme</span>
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
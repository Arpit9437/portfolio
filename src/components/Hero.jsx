import React, { useEffect, useState, useCallback } from 'react';
import { Github, Linkedin, Mail, Download, Moon, Sun, Terminal, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const words = ['Computer Science Undergrad', 'Full Stack Engineer', 'Machine Learning Enthusiast'];
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const scrollToNext = () => {
    // Calculate height of viewport to scroll exactly one page down
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

  const tick = useCallback(() => {
    const i = loopNum % words.length;
    const fullText = words[i];

    if (isDeleting) {
      setTypedText(fullText.substring(0, typedText.length - 1));
      setTypingSpeed(deletingSpeed);
    } else {
      setTypedText(fullText.substring(0, typedText.length + 1));
      setTypingSpeed(150);
    }

    if (!isDeleting && typedText === fullText) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [typedText, isDeleting, loopNum, words]);

  useEffect(() => {
    const timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typingSpeed, tick]);

  return (
    <section className="min-h-screen flex flex-col justify-between bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-secondary dark:text-accent hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary dark:text-secondary-light">
            Hello, I'm Arpit Kaple
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent dark:from-primary-light dark:to-accent-light bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Building the Future, One Line of Code at a Time.
          </p>

          <button
            className="px-6 py-2 bg-primary text-white rounded-full font-medium flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300 mx-auto"
            onClick={() => window.open('https://drive.google.com/file/d/1IWZHXdYQTcAI6JOlOFto-RtaxU4Qf9gB/view?usp=sharing', '_blank')}
          >
            <Download size={20} />
            Download CV
          </button>
        </div>
      </div>

      <div className="pb-15">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://github.com/Arpit9437" 
            className="transform hover:scale-110 transition-transform duration-300 text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary-light"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/arpit-kaple-740995260/" 
            className="transform hover:scale-110 transition-transform duration-300 text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary-light"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:arpitkaple13@gmail.com" 
            className="transform hover:scale-110 transition-transform duration-300 text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary-light"
            aria-label="Email Contact"
          >
            <Mail size={28} />
          </a>
        </div>
        
        {/* Scroll Down Button */}
        <div className="mt-8 mb-4 flex justify-center">
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center justify-center text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300 focus:outline-none"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <div className="animate-bounce">
              <ChevronDown size={28} className="animate-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
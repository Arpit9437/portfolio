'use client'

import React, { useEffect, useState, useCallback } from 'react';
import { Github, Linkedin, Mail, Download, Moon, Sun } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const words = ['Full Stack Developer'];
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
    <section className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Hello, I'm Arpit Kaple
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I build exceptional and accessible digital experiences for the web.
          </p>

          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300 mx-auto"
            onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
          >
            <Download size={20} />
            Download CV
          </button>
        </div>
      </div>

      <div className="pb-8">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://github.com" 
            className="transform hover:scale-110 transition-transform duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="transform hover:scale-110 transition-transform duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:example@email.com" 
            className="transform hover:scale-110 transition-transform duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="Email Contact"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


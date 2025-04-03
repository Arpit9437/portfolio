import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stats from './components/Stats';
// import About from './components/About';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    // Update document class and localStorage when dark mode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        {/* <Experience /> */}
        {/* <About /> */}
        <Education />
        <Projects />
        <Stats />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
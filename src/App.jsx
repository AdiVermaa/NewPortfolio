import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Preloader from './components/Preloader/Preloader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="app">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
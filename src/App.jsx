import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Persist theme
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setIsDark(saved === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Scroll progress bar */}
            <ScrollProgress />

            {/* Particle background */}
            <ParticleBackground />

            {/* Main content */}
            <div className="relative z-10">
              <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Timeline />
                <Certifications />
                <Contact />
              </main>

              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

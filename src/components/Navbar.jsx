import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';

const NAV_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Timeline', to: 'timeline' },
  { label: 'Certs', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? 'bg-navy-900/90 backdrop-blur-xl border-b border-white/5'
              : 'bg-transparent'
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="cursor-none">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded border border-cyan-400/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-400/10" />
                <span className="font-mono font-bold text-cyan-400 text-sm relative z-10">A</span>
              </div>
              <span className="font-display font-semibold text-white text-sm tracking-wider">
                Alex<span className="text-cyan-400">.</span>dev
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                spy
                offset={-80}
                onSetActive={() => setActive(link.to)}
                className="cursor-none"
              >
                <motion.span
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
                    active === link.to ? 'text-cyan-400' : 'text-white/50 hover:text-white/80'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {active === link.to && (
                    <span className="text-cyan-400/50 mr-1">›</span>
                  )}
                  {link.label}
                </motion.span>
              </Link>
            ))}

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 cursor-none"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            className="md:hidden text-white/60 hover:text-white transition-colors cursor-none"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-navy-800/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col py-6 px-6 gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-sm tracking-widest uppercase text-white/60 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-cyan-400/30">0{i + 1}.</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-white/5">
                <button
                  onClick={toggleTheme}
                  className="font-mono text-xs tracking-widest uppercase text-white/40 flex items-center gap-2 cursor-pointer"
                >
                  {isDark ? <Sun size={12} /> : <Moon size={12} />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

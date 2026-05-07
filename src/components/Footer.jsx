import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import { personal } from '../data/portfolio';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Timeline', to: 'timeline' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
];

const socialLinks = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: personal.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00F5FF30, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="hero" smooth duration={600} className="w-fit cursor-none">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded border border-cyan-400/30 flex items-center justify-center bg-cyan-400/5">
                  <span className="font-mono font-bold text-cyan-400 text-sm">A</span>
                </div>
                <span className="font-display font-semibold text-white/70">
                  Alex<span className="text-cyan-400">.</span>dev
                </span>
              </div>
            </Link>
            <p className="font-body text-xs text-white/25 leading-relaxed">
              Computer Engineering student crafting digital experiences at the intersection of AI, Cloud, and Web.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded border border-white/8 flex items-center justify-center text-white/25 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 cursor-none"
                  whileHover={{ y: -2 }}
                >
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="font-body text-xs text-white/35 hover:text-cyan-400 transition-colors cursor-none"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact snippet */}
          <div>
            <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase mb-4">Get In Touch</p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${personal.email}`} className="font-body text-xs text-white/35 hover:text-cyan-400 transition-colors cursor-none">
                {personal.email}
              </a>
              <p className="font-body text-xs text-white/35">{personal.location}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34D399] animate-pulse-slow" />
                <span className="font-mono text-[10px] text-emerald-400/70">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/4">
          <p className="font-mono text-[10px] text-white/20 flex items-center gap-1.5">
            Designed & Built with <Heart size={9} className="text-rose-500" fill="currentColor" /> by{' '}
            <span className="text-cyan-400/60">{personal.name}</span>
            <span className="ml-2">© {new Date().getFullYear()}</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-white/15">v1.0.0</span>
            <Link to="hero" smooth duration={800}>
              <motion.button
                className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-white/25 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 cursor-none"
                whileHover={{ y: -2 }}
                aria-label="Back to top"
              >
                <ArrowUp size={13} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

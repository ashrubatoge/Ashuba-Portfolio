import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, Mail, Download, ArrowDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';
import { personal } from '../data/portfolio';

const socialLinks = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: personal.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0,245,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24">
        {/* Left — Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Status badge */}
          <motion.div variants={item} className="flex items-center gap-2 w-fit">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399] animate-pulse-slow" />
              <span className="font-mono text-xs text-white/50 tracking-wider">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400/60 mb-3">
              &lt;Hello World /&gt;
            </p>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight">
              <span className="text-white">I'm </span>
              <span className="gradient-text-cyan">{personal.firstName}</span>
              <br />
              <span className="text-white">{personal.lastName}</span>
            </h1>
          </motion.div>

          {/* Typing tagline */}
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="font-mono text-cyan-400/40 text-lg">//</span>
            <div className="font-mono text-base sm:text-lg text-white/60">
              <TypeAnimation
                sequence={personal.taglines.flatMap((t) => [t, 2200])}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
              />
              <span className="cursor-blink text-cyan-400 ml-0.5">_</span>
            </div>
          </motion.div>

          {/* Bio excerpt */}
          <motion.p variants={item} className="text-white/40 font-body text-sm leading-relaxed max-w-md">
            Building scalable systems by day, exploring AI by night. Passionate about turning ideas into
            production-grade software with clean code and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href={personal.resumeUrl}
              download
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={14} />
              Resume
            </motion.a>
            <Link to="contact" smooth duration={600} offset={-80}>
              <motion.button
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={14} />
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex items-center gap-4 pt-2">
            <span className="font-mono text-xs text-white/20 tracking-widest">FIND ME ON</span>
            <div className="flex-1 h-px bg-white/5" />
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-white/30 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-glow-sm transition-all duration-300 cursor-none"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center items-center relative"
        >
          {/* Outer decorative rings */}
          <motion.div
            className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-cyan-400/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-60 h-60 sm:w-64 sm:h-64 rounded-full border border-gold-400/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />

          {/* Orbit dots */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <motion.div
              key={angle}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/50 shadow-[0_0_6px_#00F5FF]"
              style={{
                top: `calc(50% - 140px * ${Math.sin((angle * Math.PI) / 180)} - 3px)`,
                left: `calc(50% + 140px * ${Math.cos((angle * Math.PI) / 180)} - 3px)`,
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: angle / 300 }}
            />
          ))}

          {/* Avatar container */}
          <motion.div
            className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Gradient avatar placeholder */}
            <div className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #0D1528 0%, #162040 50%, #0D1528 100%)',
                border: '1px solid rgba(0,245,255,0.2)',
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.1) 0%, rgba(255,215,0,0.05) 100%)',
              }}
            />
            {/* Profile initials / illustration */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="font-display font-extrabold text-6xl sm:text-7xl leading-none"
                style={{
                  background: 'linear-gradient(135deg, #00F5FF 0%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personal.firstName[0]}{personal.lastName[0]}
              </span>
              <span className="font-mono text-xs text-white/20 tracking-wider mt-1">CE Student</span>
            </div>
            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{ background: 'linear-gradient(transparent, rgba(0,245,255,0.06))' }}
            />
          </motion.div>

          {/* Tech bubbles */}
          {[
            { label: 'React', x: '82%', y: '15%', delay: 0 },
            { label: 'Python', x: '-10%', y: '20%', delay: 0.5 },
            { label: 'AWS', x: '85%', y: '70%', delay: 1 },
            { label: 'ML', x: '-12%', y: '72%', delay: 1.5 },
          ].map((b) => (
            <motion.div
              key={b.label}
              className="absolute px-2.5 py-1 rounded text-[10px] font-mono font-medium text-cyan-400"
              style={{
                left: b.x, top: b.y,
                background: 'rgba(0,245,255,0.06)',
                border: '1px solid rgba(0,245,255,0.15)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + b.delay, duration: 0.4 }}
              whileHover={{ scale: 1.1, borderColor: 'rgba(0,245,255,0.5)' }}
            >
              {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Link to="about" smooth duration={600} offset={-80}>
          <div className="flex flex-col items-center gap-2 cursor-none">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/20">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={14} className="text-cyan-400/50" />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

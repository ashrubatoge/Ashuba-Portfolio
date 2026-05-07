import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolio';

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col"
    >
      {/* Project image / gradient preview */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
        {/* Project number */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-white/20 tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full border"
            style={{ borderColor: `${project.accent}40`, background: `${project.accent}10` }}>
            <Star size={9} style={{ color: project.accent }} fill={project.accent} />
            <span className="font-mono text-[9px]" style={{ color: project.accent }}>Featured</span>
          </div>
        )}
        {/* Central icon / title display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-display font-extrabold text-4xl text-white/10">
              {project.title.split('—')[0].trim().slice(0, 2).toUpperCase()}
            </div>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border cursor-none transition-all"
            style={{ borderColor: `${project.accent}50`, background: `${project.accent}15` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} style={{ color: project.accent }} />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border cursor-none transition-all"
            style={{ borderColor: `${project.accent}50`, background: `${project.accent}15` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} style={{ color: project.accent }} />
          </motion.a>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background: 'linear-gradient(transparent, rgba(5,11,24,0.8))' }} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-bold text-base text-white/90 group-hover:text-white transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-xs text-white/40 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-white/35 border border-white/6"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-white/25">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono text-white/30 hover:text-white/60 transition-colors cursor-none"
          >
            <Github size={11} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono transition-colors cursor-none"
            style={{ color: `${project.accent}80` }}
          >
            <ExternalLink size={11} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="relative py-28">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #FFD700, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="section-label mb-3">03 / Projects</p>
            <h2 className="section-title">
              Things I've<br />
              <span className="gradient-text">Built</span>
            </h2>
          </div>
          <motion.a
            href="https://github.com/alexsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-white/30 hover:text-cyan-400 transition-colors cursor-none group"
            whileHover={{ x: 4 }}
          >
            View all on GitHub
            <ExternalLink size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-white/60 group-hover:text-white/80 transition-colors">{name}</span>
        <span className="font-mono text-xs text-white/25">{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 8px ${color}50`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="relative py-28">
      {/* background accent */}
      <div className="absolute left-0 top-1/2 w-80 h-80 rounded-full blur-3xl opacity-6"
        style={{ background: 'radial-gradient(circle, #00F5FF, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">02 / Skills</p>
          <h2 className="section-title">
            Technical<br />
            <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
                  style={{
                    background: `${category.color}12`,
                    border: `1px solid ${category.color}25`,
                    color: category.color,
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-sm text-white/80"
                  >
                    {category.category}
                  </h3>
                  <p className="font-mono text-[10px] text-white/25 tracking-wider">
                    {category.items.length} technologies
                  </p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {category.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={ci * 0.1 + si * 0.08}
                    inView={inView}
                  />
                ))}
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="h-px rounded-full mt-auto"
                style={{ background: `linear-gradient(90deg, ${category.color}30, transparent)` }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: ci * 0.1 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-2 justify-center"
        >
          {[
            'React', 'Node.js', 'Python', 'C++', 'Java', 'AWS', 'Docker', 'MongoDB',
            'TensorFlow', 'Git', 'Linux', 'Express', 'MySQL', 'TypeScript', 'REST APIs',
          ].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full font-mono text-xs text-white/35 border border-white/6 hover:border-cyan-400/30 hover:text-cyan-400/70 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.04 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

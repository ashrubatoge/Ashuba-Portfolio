import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Cloud, Shield } from 'lucide-react';
import { personal, stats } from '../data/portfolio';

const passions = [
  { icon: Code2, label: 'Full Stack Dev', desc: 'React, Node, Databases', color: '#00F5FF' },
  { icon: Brain, label: 'AI & Machine Learning', desc: 'Python, TensorFlow, CV', color: '#A78BFA' },
  { icon: Cloud, label: 'Cloud Computing', desc: 'AWS, Docker, DevOps', color: '#34D399' },
  { icon: Shield, label: 'Cybersecurity', desc: 'Network Security, Ethical Hacking', color: '#F472B6' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #A78BFA, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">01 / About Me</p>
          <h2 className="section-title">
            Crafting Digital<br />
            <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio & Passions */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-cyan-400 font-bold">AS</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">{personal.name}</h3>
                  <p className="font-mono text-xs text-cyan-400/70 tracking-wider mt-0.5">{personal.title}</p>
                </div>
              </div>
              <p className="text-white/50 font-body text-sm leading-relaxed">
                {personal.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Pune, India', 'Open to Remote', 'Full-Time / Intern'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono border border-white/8 text-white/40 bg-white/3">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Passions */}
            <div className="grid grid-cols-2 gap-3">
              {passions.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="glass-card rounded-xl p-4 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}
                  >
                    <p.icon size={16} style={{ color: p.color }} />
                  </div>
                  <p className="font-display font-semibold text-sm text-white/80">{p.label}</p>
                  <p className="font-mono text-xs text-white/30 mt-0.5 leading-tight">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="gradient-border rounded-2xl p-6 text-center group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div
                    className="font-display font-extrabold text-4xl mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #00F5FF, #FFD700)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-white/30 tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Code snippet card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="px-4 py-2.5 border-b border-white/5 flex items-center gap-2">
                {['#FF5F56', '#FFBD2E', '#27C93F'].map((c, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
                <span className="font-mono text-xs text-white/20 ml-2">about.json</span>
              </div>
              <div className="p-5 font-mono text-xs leading-6">
                <pre className="text-white/40">
{`{
  `}<span className="text-cyan-400">"name"</span>: <span className="text-emerald-400">"{personal.name}"</span>{`,
  `}<span className="text-cyan-400">"role"</span>: <span className="text-emerald-400">"Full Stack + AI Developer"</span>{`,
  `}<span className="text-cyan-400">"learning"</span>: <span className="text-gold-400">["DSA", "System Design", "Rust"]</span>{`,
  `}<span className="text-cyan-400">"goal"</span>: <span className="text-emerald-400">"Build impactful products"</span>{`,
  `}<span className="text-cyan-400">"available"</span>: <span className="text-purple-400">true</span>{`
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

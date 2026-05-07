import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="relative py-28">
      <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #A78BFA, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">05 / Certifications</p>
          <h2 className="section-title">
            Credentials &<br />
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl p-5 bg-gradient-to-br ${cert.bg} border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default`}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{cert.icon}</div>

              {/* Award badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Award size={14} className="text-white/20" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-sm text-white/80 leading-tight mb-1.5">
                {cert.name}
              </h3>
              <p className="font-mono text-[10px] text-white/30 leading-tight mb-3">
                {cert.issuer}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    color: cert.color === '#0A0A23' ? '#A78BFA' : cert.color,
                    background: `${cert.color === '#0A0A23' ? '#A78BFA' : cert.color}15`,
                    border: `1px solid ${cert.color === '#0A0A23' ? '#A78BFA' : cert.color}25`,
                  }}
                >
                  {cert.year}
                </span>
                <motion.a
                  href="#"
                  className="flex items-center gap-1 font-mono text-[10px] text-white/20 hover:text-white/50 transition-colors cursor-none"
                  whileHover={{ x: 2 }}
                >
                  View <ExternalLink size={9} />
                </motion.a>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cert.color === '#0A0A23' ? '#A78BFA' : cert.color}08, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timeline } from '../data/portfolio';

const typeColors = {
  education: '#00F5FF',
  work: '#34D399',
  achievement: '#FFD700',
  cert: '#A78BFA',
};

const typeLabels = {
  education: 'Education',
  work: 'Experience',
  achievement: 'Achievement',
  cert: 'Certification',
};

export default function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="timeline" className="relative py-28">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-px h-3/4"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,245,255,0.1), transparent)' }} />

      <div ref={ref} className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">04 / Journey</p>
          <h2 className="section-title">
            Experience &<br />
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #00F5FF20, #00F5FF08, transparent)' }} />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              const color = typeColors[item.type];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="glass-card rounded-xl p-5 group">
                      {/* Type badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                          style={{
                            color, background: `${color}12`,
                            border: `1px solid ${color}25`,
                          }}
                        >
                          {typeLabels[item.type]}
                        </span>
                        <span className="font-mono text-[10px] text-white/25">{item.year}</span>
                      </div>

                      <h3 className="font-display font-bold text-base text-white/90 leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs mb-3" style={{ color: `${color}80` }}>
                        {item.org}
                      </p>
                      <p className="font-body text-xs text-white/40 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover accent */}
                      <motion.div
                        className="h-px mt-4"
                        style={{ background: `linear-gradient(${isEven ? '90deg' : '270deg'}, ${color}40, transparent)` }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        style={{ originX: isEven ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-5 w-3 h-3 rounded-full flex-shrink-0 z-10"
                    style={{
                      background: color,
                      boxShadow: `0 0 12px ${color}`,
                      border: '2px solid #050B18',
                    }}
                  />

                  {/* Icon bubble */}
                  <div
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 z-10"
                    style={{
                      marginLeft: window?.innerWidth < 768 ? '-4px' : '-14px',
                      top: '12px',
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {/* Emoji icon shown inline */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

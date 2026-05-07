import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ['Initializing system...', 'Loading modules...', 'Rendering experience...', 'Ready.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 80);

    const phaseInterval = setInterval(() => {
      setPhase((p) => Math.min(p + 1, phases.length - 1));
    }, 700);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-900"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 w-80">
        {/* Logo mark */}
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        >
          <div className="w-20 h-20 rounded-full border border-cyan-400/20 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-cyan-400/40 flex items-center justify-center">
              <span className="font-display font-bold text-2xl gradient-text">A</span>
            </div>
          </div>
          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F5FF]" />
        </motion.div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="w-full h-px bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background: 'linear-gradient(90deg, #00F5FF, #FFD700)',
                boxShadow: '0 0 8px rgba(0,245,255,0.8)',
                width: `${progress}%`,
              }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-xs text-white/30">{phases[phase]}</span>
            <span className="font-mono text-xs text-cyan-400/70">{Math.min(Math.round(progress), 100)}%</span>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-cyan-400/40"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

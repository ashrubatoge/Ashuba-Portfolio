import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { personal } from '../data/portfolio';

const contactInfo = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: MapPin, label: 'Location', value: personal.location, href: '#' },
];

const socialLinks = [
  { icon: Github, href: personal.github, label: 'GitHub', color: '#00F5FF' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: Twitter, href: personal.twitter, label: 'Twitter', color: '#1DA1F2' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', color: '#FFD700' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute left-1/4 bottom-0 w-96 h-96 rounded-full blur-3xl opacity-6"
        style={{ background: 'radial-gradient(circle, #00F5FF, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">06 / Contact</p>
          <h2 className="section-title">
            Let's Build<br />
            <span className="gradient-text">Something Together</span>
          </h2>
          <p className="mt-4 font-body text-sm text-white/35 max-w-md mx-auto">
            Got an opportunity, project idea, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info — left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass-card rounded-xl p-4 flex items-center gap-4 cursor-none group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-400/8 border border-cyan-400/15 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/40 transition-all duration-300">
                  <Icon size={16} className="text-cyan-400/70" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-white/25 tracking-wider uppercase">{label}</p>
                  <p className="font-body text-sm text-white/60 group-hover:text-white/80 transition-colors mt-0.5">{value}</p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="glass-card rounded-xl p-5">
              <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase mb-4">Social Profiles</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/8 text-white/30 hover:text-white/80 transition-all duration-300 cursor-none"
                    whileHover={{ scale: 1.1, y: -2, borderColor: `${color}50` }}
                    whileTap={{ scale: 0.9 }}
                    style={{ '--hover-color': color }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399] animate-pulse-slow" />
                <span className="font-mono text-xs text-emerald-400">Available for work</span>
              </div>
              <p className="font-body text-xs text-white/35 leading-relaxed">
                Currently seeking internship & full-time opportunities in software development, AI/ML, and cloud engineering.
              </p>
            </div>
          </motion.div>

          {/* Contact Form — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-display font-bold text-lg text-white/80 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-white/25 tracking-widest uppercase block mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Johnson"
                      required
                      className="contact-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-white/25 tracking-widest uppercase block mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      required
                      className="contact-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-white/25 tracking-widest uppercase block mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Project collaboration"
                    required
                    className="contact-input w-full px-4 py-3 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-white/25 tracking-widest uppercase block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="contact-input w-full px-4 py-3 rounded-lg text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!sending && !sent ? { scale: 1.01 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.99 } : {}}
                >
                  {sent ? (
                    <>
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Message Sent!</span>
                    </>
                  ) : sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

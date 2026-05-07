// ─────────────────────────────────────────────
// Portfolio Data — Edit this file to personalize
// ─────────────────────────────────────────────

export const personal = {
  name: 'Ashruba Toge',
  firstName: 'Ashruba',
  lastName: 'Toge',
  title: 'Computer Engineering Student',
  taglines: [
    'Full Stack Developer',
    'AI & ML Enthusiast',
    'Cloud Computing Explorer',
    'Open Source Contributor',
    'Cybersecurity Learner',
  ],
  bio: `I'm a passionate Computer Engineering student with a deep love for building things that matter. 
    From architecting scalable web applications to training ML models, I thrive at the 
    intersection of innovation and engineering. My goal: craft elegant solutions to complex problems 
    and contribute to the future of technology.`,
  email: 'ashrubatoge534@gmail.com',
  phone: '+91 9699728188',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/ashrubatoge',
  linkedin: 'https://linkedin.com/in/alexsharma',
  twitter: 'https://twitter.com/alexsharma_dev',
  resumeUrl: '/resume.pdf',
  avatarGradient: 'from-cyan-400 to-blue-600',
};

export const stats = [
  { label: 'Projects Built', value: '20+', icon: '🚀' },
  { label: 'Technologies', value: '25+', icon: '⚡' },
  { label: 'Certifications', value: '8', icon: '🏆' },
  { label: 'CGPA', value: '8.7', icon: '🎓' },
];

export const skills = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    color: '#00F5FF',
    items: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C++', level: 78 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 72 },
    ],
  },
  {
    category: 'Web Development',
    icon: '</>',
    color: '#FFD700',
    items: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Express.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Database',
    icon: '⊗',
    color: '#A78BFA',
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 78 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    color: '#34D399',
    items: [
      { name: 'AWS', level: 72 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Linux', level: 75 },
    ],
  },
  {
    category: 'AI / Machine Learning',
    icon: '◈',
    color: '#F472B6',
    items: [
      { name: 'NumPy / Pandas', level: 85 },
      { name: 'Scikit-learn', level: 78 },
      { name: 'TensorFlow', level: 68 },
      { name: 'OpenCV', level: 65 },
    ],
  },
];

export const projects = [
  {
    title: 'NeuralChat — AI Chatbot',
    description:
      'A context-aware AI chatbot powered by the OpenAI API with real-time streaming responses, conversation memory, and a sleek React frontend.',
    tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Socket.io'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accent: '#00F5FF',
    github: 'https://github.com/alexsharma',
    demo: '#',
    featured: true,
  },
  {
    title: 'CloudVault — File Storage',
    description:
      'AWS S3-based cloud file storage system with drag-and-drop uploads, file sharing, folder management, and JWT authentication.',
    tags: ['React', 'AWS S3', 'Node.js', 'Express', 'JWT'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    accent: '#34D399',
    github: 'https://github.com/alexsharma',
    demo: '#',
    featured: true,
  },
  {
    title: 'PredictIQ — ML Platform',
    description:
      'An end-to-end machine learning prediction platform with model training, evaluation dashboards, and REST API deployment.',
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'React', 'Pandas'],
    gradient: 'from-purple-500/20 to-pink-600/20',
    accent: '#A78BFA',
    github: 'https://github.com/alexsharma',
    demo: '#',
    featured: true,
  },
  {
    title: 'EduTrack — Student Management',
    description:
      'Full-stack student management system with role-based access control, attendance tracking, grade analytics, and PDF report generation.',
    tags: ['React', 'Node.js', 'MySQL', 'Chart.js', 'PDF-lib'],
    gradient: 'from-orange-500/20 to-red-600/20',
    accent: '#FB923C',
    github: 'https://github.com/alexsharma',
    demo: '#',
    featured: false,
  },
  {
    title: 'CyberShield — Network Scanner',
    description:
      'Python-based network vulnerability scanner that identifies open ports, services, and common CVEs. Features an intuitive CLI and HTML reports.',
    tags: ['Python', 'Nmap', 'Socket', 'Flask', 'SQLite'],
    gradient: 'from-rose-500/20 to-pink-600/20',
    accent: '#F472B6',
    github: 'https://github.com/alexsharma',
    demo: '#',
    featured: false,
  },
  {
    title: 'DevFolio — This Portfolio',
    description:
      'A high-performance personal portfolio built with React, Tailwind CSS, and Framer Motion featuring particle animations, glassmorphism, and dark UI.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    gradient: 'from-yellow-500/20 to-amber-600/20',
    accent: '#FFD700',
    github: 'https://github.com/alexsharma',
    demo: '#',
    featured: false,
  },
];

export const timeline = [
  {
    year: '2024 – Present',
    title: 'B.E. Computer Engineering',
    org: 'Savitribai Phule Pune University',
    description: 'Pursuing Bachelor of Engineering in Computer Engineering. CGPA: 8.7/10. Core subjects: DSA, OS, DBMS, CN, AI/ML, Cloud Computing.',
    type: 'education',
    icon: '🎓',
  },
  {
    year: 'Summer 2024',
    title: 'Full Stack Developer Intern',
    org: 'TechVentures Pvt. Ltd., Pune',
    description: 'Built 3 production React applications, integrated REST APIs, optimized database queries (40% speed improvement), and deployed on AWS EC2.',
    type: 'work',
    icon: '💼',
  },
  {
    year: 'Feb 2024',
    title: 'Smart India Hackathon — Finalist',
    org: 'Ministry of Education, India',
    description: 'Developed an AI-powered agricultural advisory system. Reached national finals among 10,000+ teams.',
    type: 'achievement',
    icon: '🏆',
  },
  {
    year: 'Dec 2023',
    title: 'AWS Cloud Practitioner Certified',
    org: 'Amazon Web Services',
    description: 'Earned foundational AWS certification covering core services, pricing, architecture, and security fundamentals.',
    type: 'cert',
    icon: '☁',
  },
  {
    year: '2022 – 2024',
    title: 'Diploma in Computer Engineering',
    org: 'Government Polytechnic, Pune',
    description: 'Graduated with 87% aggregate. Best Outgoing Student award. Led the college coding club.',
    type: 'education',
    icon: '🎓',
  },
];

export const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    icon: '☁',
    color: '#FF9900',
    bg: 'from-orange-500/15 to-yellow-500/10',
  },
  {
    name: 'Python Programming',
    issuer: 'Coursera — University of Michigan',
    year: '2023',
    icon: '🐍',
    color: '#3776AB',
    bg: 'from-blue-500/15 to-cyan-500/10',
  },
  {
    name: 'AI/ML with TensorFlow',
    issuer: 'Google Developers',
    year: '2024',
    icon: '◈',
    color: '#FF6F00',
    bg: 'from-orange-600/15 to-amber-500/10',
  },
  {
    name: 'Full Stack Web Dev',
    issuer: 'freeCodeCamp',
    year: '2023',
    icon: '</> ',
    color: '#0A0A23',
    bg: 'from-purple-500/15 to-violet-500/10',
  },
  {
    name: 'Docker & Kubernetes',
    issuer: 'KodeKloud',
    year: '2024',
    icon: '🐳',
    color: '#2496ED',
    bg: 'from-blue-600/15 to-sky-500/10',
  },
  {
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    icon: '🔒',
    color: '#1BA0D7',
    bg: 'from-cyan-600/15 to-teal-500/10',
  },
  {
    name: 'Data Science with Python',
    issuer: 'IBM — Coursera',
    year: '2024',
    icon: '📊',
    color: '#006699',
    bg: 'from-indigo-500/15 to-blue-500/10',
  },
  {
    name: 'React Developer',
    issuer: 'Meta — Coursera',
    year: '2023',
    icon: '⚛',
    color: '#61DAFB',
    bg: 'from-cyan-400/15 to-blue-400/10',
  },
];

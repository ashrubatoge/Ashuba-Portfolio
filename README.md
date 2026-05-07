# 🚀 Alex Sharma — Portfolio Website

A premium, production-ready personal portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**. Features a futuristic dark theme with glassmorphism, particle animations, custom cursor, and smooth scroll interactions.

---

## ✨ Features

- **Particle Background** — Interactive canvas with connected nodes that react to mouse movement
- **Custom Cursor** — Glowing dot + trailing ring cursor
- **Loading Screen** — Animated progress bar with phase transitions
- **Scroll Progress** — Gradient progress bar at the top
- **Dark / Light Mode** — Theme toggle with persistence
- **Glassmorphism Cards** — Frosted glass UI with subtle borders
- **Framer Motion Animations** — Staggered reveals, hover effects, micro-interactions
- **Typing Animation** — React-type-animation rotating taglines
- **Responsive** — Mobile-first, works on all screen sizes

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 + Vite | Frontend framework & bundler |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| React Type Animation | Typing effect |
| React Intersection Observer | Scroll-triggered animations |
| React Scroll | Smooth anchor navigation |

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Skills.jsx
│   │   └── Timeline.jsx
│   ├── data/
│   │   └── portfolio.js    ← ✏️ Edit this to personalize
│   ├── hooks/
│   │   └── index.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to portfolio directory
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## ✏️ Personalization

All content lives in **`src/data/portfolio.js`**. Edit this single file to update:

- `personal` — Name, bio, contact info, social links
- `stats` — Achievement numbers
- `skills` — Skill categories and proficiency levels
- `projects` — Project cards with descriptions and links
- `timeline` — Education, experience, achievements
- `certifications` — Certification cards

### Adding Your Resume
Place your resume PDF at `public/resume.pdf`.

### Adding Your Profile Photo
Replace the initials avatar in `Hero.jsx`:
```jsx
// In Hero.jsx, replace the gradient avatar div with:
<img src="/profile.jpg" alt="Alex Sharma" className="w-full h-full object-cover" />
```
Then add `profile.jpg` to the `public/` folder.

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change accent colors:
```js
colors: {
  // Change #00F5FF (cyan) to your preferred accent
  // Change #FFD700 (gold) to your secondary accent
}
```

### Fonts
Edit `index.html` Google Fonts link and `tailwind.config.js` fontFamily config.

---

## 📦 Optional: EmailJS Integration

For real email functionality in the contact form:

```bash
npm install @emailjs/browser
```

Then in `Contact.jsx`, replace the `handleSubmit` function:
```js
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID', 
    form,
    'YOUR_PUBLIC_KEY'
  );
  setSending(false);
  setSent(true);
};
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📄 License

MIT — free to use and modify for personal and commercial projects.

---

**Made with ❤️ by Alex Sharma**

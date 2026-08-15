<div align="center">
  <img src="https://img.shields.io/badge/STATUS-ONLINE-00F5D4?style=for-the-badge&logo=codeforces&logoColor=black" alt="Status" />
  <a href="https://aistudio.google.com/"><img src="https://img.shields.io/badge/BUILT_WITH-GOOGLE_AI_STUDIO-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google AI Studio" /></a>
  <img src="https://img.shields.io/badge/FRAMEWORK-REACT_18-FF006E?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/STYLING-TAILWIND-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />

  <br />
  <br />

  <h1>Ganesh Pawar — Developer Portfolio</h1>
  <p><strong>High-performance systems, brutalist cybernetic interfaces, and data analytics architectures.</strong></p>

  <br />
</div>

## 🌐 Overview

> 🤖 **This entire portfolio was architected, designed, and generated using [Google AI Studio](https://aistudio.google.com/) and Gemini models.**

A deeply interactive, performance-optimized, cyberpunk-themed developer portfolio. Built for speed, brutalist aesthetic, and maximum conversion.

This portfolio skips the generic, minimalist web designs and instead opts for a "GTA 6 / Vice City" inspired dark-mode aesthetic featuring deep neon contrasts, parallax scrolling, and an embedded terminal/CLI.

## 🚀 Core Features
*   **Interactive Terminal / CLI:** A fully functional, hidden `<TerminalModal>` triggered from the navbar, allowing users to query data via commands (`help`, `projects`, `skills`, `gta6`).
*   **Scroll-Spy Motion Design:** Custom `<IntersectionObserver>` hooks combined with Framer Motion natively trigger staggered element reveals and 3D parallax scroll mechanics.
*   **3D Tilt Cards:** Uses complex CSS perspective transforms (`perspective-1000`) to create floating depth-of-field effects on hover.
*   **Fully Responsive:** Scales flawlessly from 4K ultra-wide desktop monitors down to mobile devices, stacking grid layouts efficiently.
*   **Single Source of Truth:** All content (bio, projects, experience, skills) is dynamically hydrated from `src/data/portfolioData.ts`, making the portfolio infinitely scalable without touching UI components.

## 💻 Tech Stack
*   **Core:** React 18, TypeScript, Vite
*   **Styling:** Tailwind CSS (Custom config tokens for Neon Pink `#FF006E` & Cyan `#00F5D4`), Native CSS Modules
*   **Motion Graphics:** Framer Motion (`motion/react`), Intersection Observers
*   **Icons:** Lucide React

## 🛠️ Local Development

**1. Clone the repository:**
```bash
git clone https://github.com/pawarganesh243/Port-folio.git
cd Port-folio
```

**2. Install dependencies:**
```bash
npm install
```

**3. Boot the local telemetry server:**
```bash
npm run dev
```
The server will initialize on `http://localhost:3000`.

## 📡 Deployment
The project is optimized for deployment on Vercel or Netlify.
```bash
npm run build
```
This script will bundle the application via Vite into the `/dist` directory for production hosting.

---
<div align="center">
  <i>"Translating complex logic into elegant, scalable digital constructs."</i>
</div>

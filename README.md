# Kopi Kenangan - Ultimate Scrollytelling Experience

<div align="center">
  <h3>A High-Performance, Cinematic Web Experience</h3>
  <p>Crafted with Next.js 15, Framer Motion, and HTML5 Canvas.</p>

[View Demo](#) · [Report Bug](https://github.com/chandafa/scrollytelling-kopi-kenangan/issues) · [Request Feature](https://github.com/chandafa/scrollytelling-kopi-kenangan/issues)

</div>

---

## ☕ Overview

This project reimagines the **Kopi Kenangan** digital experience as an immersive, high-end scrollytelling journey. It leverages cutting-edge web technologies to deliver a buttery-smooth, cinematic narrative that engages users from the first scroll.

Built with a focus on **performance**, **aesthetics**, and **interactivity**, this landing page pushes the boundaries of standard web design.

## ✨ Key Features

- **🎬 240-Frame Scrollytelling**: A seamless, high-definition image sequence powered by HTML5 Canvas and `requestAnimationFrame`.
- **⚡ Zero-Lag Performance**:
  - **ImageBitmap Caching**: Zero-main-thread decoding for instant playback.
  - **GPU Acceleration**: Optimized canvas context (`alpha: false`, `desynchronized: true`).
  - **Parallel Loading**: Smart asset prefetching with real-time feedback.
- **🪄 Micro-Interactions**:
  - **Magnetic Cursor**: A custom physics-based cursor that reacts to interactive elements.
  - **Draggable Menu**: A tactile, horizontal slider for exploring the menu.
  - **Parallax Depth**: Multi-layered floating elements creating a 3D roasting atmosphere.
- **💎 Premium Polish**:
  - **Smooth Scrolling**: Integrated **Lenis** for inertial scroll feel.
  - **Text Reveal**: Character-by-character synchronized animations.
  - **Unified Loading**: A seamless "Brewing Memories" preloader.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Scrolling**: [Lenis](https://github.com/studio-freight/lenis)
- **Rendering**: HTML5 Canvas API + ImageBitmap
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chandafa/scrollytelling-kopi-kenangan.git
   cd scrollytelling-kopi-kenangan
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router
├── components/
│   ├── sections/         # Page sections (Hero, About, Menu, etc.)
│   ├── ui/               # Reusable UI components (Cursor, TextReveal)
│   ├── sequence-scroll.tsx # Core Canvas Scrollytelling Logic
│   └── loading-screen.tsx  # Global Preloader
├── lib/                  # Utilities
└── ...
```

## 👨‍💻 Author

**Candra Kirana**

- GitHub: [@chandafa](https://github.com/chandafa)
- Instagram: [@chann.ck](https://www.instagram.com/chann.ck)
- LinkedIn: [Candra Kirana](https://id.linkedin.com/in/candra-kirana-dev)

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p><i>Brewed with ❤️ by Candra Kirana</i></p>
</div>

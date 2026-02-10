# Love Temple - A Quiet Space for Two

![Love Temple Hero](public/assets/hero-illustration.png)

**Love Temple** is a private digital sanctuary for couples. This landing page is designed with a "Soft Romantic" aesthetic, focusing on intimacy, calmness, and connection.

## 🌸 Design Philosophy: "Soft Romantic"

The UI is built on a foundation of emotional resonance, avoiding the noise of typical tech products.

*   **Palette**: 
    *   Background: Warm White (`#FAF8F6`)
    *   Primary Accent: Soft Rose (`#CD848C`) highlights buttons, icons, and emphasized text.
    *   Typography: Deep Charcoal (`#3A3535`) for readability.
*   **Typography**:
    *   *Headlines*: **Crimson Pro** (Serif) - Elegant, classic, and editorial.
    *   *Body*: **Nunito** (Sans-serif) - Rounded, approachable, and modern.
*   **Atmosphere**:
    *   A continuous 3D background of floating hearts and subtle dust particles provides depth.
    *   Glassmorphism and soft shadows (`shadow-soft`) create a light, airy feel.
    *   Framer Motion animations provide gentle, staggered reveals.

## 🛠 Tech Stack

This project is built with a modern React stack optimized for performance and visual fidelity:

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll reveals, layout transitions)
*   **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmndrs.assets/react-three-fiber) (Interactive particle background)
*   **Icons**: [Lucide React](https://lucide.dev/) (Consistent, clean iconography)

## 🚀 Getting Started

1.  **Clone the repository**
    ```sh
    git clone <YOUR_REPO_URL>
    cd love-temple-landing-page
    ```

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Run Development Server**
    ```sh
    npm run dev
    ```

4.  **Build for Production**
    ```sh
    npm run build
    ```

## 📂 Project Structure

*   `src/components/landing/`: Core UI sections (Hero, Features, Testimonials, etc.)
*   `src/components/landing/ThreeCanvas.tsx`: The global 3D background logic.
*   `src/index.css`: Global design tokens, font imports, and Tailwind configuration.

## ✨ Key Features

*   **Interactive 3D Background**: Floating hearts that respond to mouse movement.
*   **Dynamic Counters**: Feature statistics (`12,847+`) animate up on scroll.
*   **Smooth Navigation**: Navbar links smoothly scroll to sections.
*   **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.

---

© 2026 Love Temple Inc. Made with ♥ for love.

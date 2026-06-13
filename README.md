# 🏦 YourBank - Premium Fintech Web Application

Welcome to **YourBank**, a premium, high-fidelity, and fully responsive digital banking web application built with **Next.js 14** and **Tailwind CSS**. This platform is designed to give users a modern, immersive, and seamless financial management experience.

---

## 🌟 Premium Features

### 🌗 Adaptive Light & Dark Mode
- A beautiful, class-based theme switcher toggles between a sleek, vibrant dark mode and a crisp, modern light mode.
- Persistent state saves the user's theme selection automatically to `localStorage` to avoid page flicker.
- Harmonious, HSL-tailored color palettes ensure high contrast and maximum readability across both themes.

### 📱 100% Fluid & Responsive Layout
- Fully optimized viewport rendering from mobile screen widths (360px) to ultra-wide desktop monitors (1440px+).
- Completely rebuilt hero sections and grid structures eliminate overlapping text and layout boundaries.
- A smooth, slide-in mobile navigation sheet (drawer) with overlay backdrop replaces generic dropdown menus.

### 🧮 Interactive Money Exchange Calculator
- A fully functional, local-state currency converter featuring instant calculations.
- Supports exchange conversions across **USD**, **EUR**, **INR**, and **BTC** with automatic decimal-precision adjustments.
- Instant currency swap functionality.

### 💳 Dynamic Dashboard & UI Mockups
- Custom-parameterized components display varied transaction list cards, dynamic benefit categories, and unique use cases.
- Replaced repeating static placeholders with realistic database-like Mockup data.

### 🔐 Secure Authentication Pages
- Stunning, modern **Login** and **Signup** pages complete with interactive fields.
- Features real-time state validation, checkbox selectors, social auth options (Google, Apple), and show/hide password toggles.

---

## 🛠️ Technology Stack

- **Core**: [React 18](https://react.dev/) & [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Hi, Fa6, Tb, Io, Bs)
- **Animations**: [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)

---

## 📂 Project Structure

```bash
banking-web/
├── public/                 # Static assets (images, patterns, icons)
│   ├── images/             # UI graphics (about, career, Logo.svg, security)
│   └── pattern/            # Absolute grid and dotted backgrounds
├── src/
│   ├── app/                # Next.js Page router
│   │   ├── about/          # About page
│   │   ├── career/         # Career & openings page
│   │   ├── security/       # Security & encryption page
│   │   ├── login/          # Secure Login form [NEW]
│   │   ├── signup/         # Secure Signup form [NEW]
│   │   ├── utils/          # Static lists and FAQ data
│   │   ├── globals.css     # Global styles & scrollbars
│   │   └── layout.jsx      # HTML container and theme state
│   └── components/         # Reusable presentation components
│       ├── Navbar.jsx      # Sticky responsive navigation and theme toggle
│       ├── Footer.jsx      # Responsive social links and info
│       ├── btn.jsx         # Parameterized brand buttons
│       ├── feature-card.jsx# Custom feature list items
│       └── ...             # Cards for products, testimonials, jobs, etc.
└── tailwind.config.js      # Color tokens & dark mode configurations
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 3. Production Build
Validate and build the static output:
```bash
npm run build
```
Start the production server:
```bash
npm run start
```

---

## 🪲 Bug Resolutions & Enhancements

1. **Typographical Corrections**:
   - Fixed `customers&abquo; needs` syntax error to `customers' needs`.
   - Corrected `Bussiness` spelling to `Business`.
   - Fixed `Top Priorit   y` typography alignment in the Security portal.
   - Resolved `'text-white` syntax quote bug inside the `btn.jsx` component.
2. **Case Sensitivity Fix**:
   - Corrected the case-sensitive 404 path bug for the logo image inside the Footer.
3. **Redesigned Hero Margin Overlaps**:
   - Replaced fragile negative-margin offsets (`-mt-32`, `-mr-24`) on the Career and About pages with fluid grid and flex layouts.
4. **SVG Color Fills**:
   - Upgraded inline SVG brand path properties to use `currentColor` to transition seamlessly between colors.

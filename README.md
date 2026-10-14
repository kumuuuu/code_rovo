# Coderovo Web

> **Your Technology Team, Beyond Borders.**  
> Official corporate web platform for Coderovo — showcasing custom software engineering, dedicated development teams, and business systems outsourcing solutions.

---

## Overview

**Coderovo Web** is a high-performance, dark-themed marketing and client-engagement web platform built on the modern Next.js App Router and React 19. Designed with the **Obsidian Kinetic** aesthetic, it features custom WebGL fluid background shaders, GPU-accelerated motion interactions, responsive typography, and dedicated sub-pages for enterprise service offerings.

---

## Key Highlights & Features

- **Obsidian Kinetic Design System**: Tailored dark-mode palette (`#0B0F19`, `#111319`) with cyan/blue accents (`#00F0FF`, `#4D8EFF`), glassmorphism card surfaces, and subtle radial light blooms.
- **Custom WebGL Global Background**: High-performance animated color-morphing gradient background rendered on an HTML5 canvas via WebGL shaders ([GlobalBackground.tsx](file:///c:/Users/User/Desktop/coderovo_web/components/ui/GlobalBackground.tsx)).
- **Concave 3D Logo Carousel**: Interactive 3D perspective carousel showcasing tech stacks, developer tools, and supported frameworks ([ConcaveLogoCarousel.tsx](file:///c:/Users/User/Desktop/coderovo_web/components/ConcaveLogoCarousel.tsx)).
- **Modular Component Architecture**: Reusable UI blocks for services, structured 5-stage process flows, engagement models, and trust & security credentials.
- **Comprehensive Service Hubs**:
  - [Custom Software Development](file:///c:/Users/User/Desktop/coderovo_web/app/services/software-development/page.tsx)
  - [Dedicated Monthly Outsourcing](file:///c:/Users/User/Desktop/coderovo_web/app/services/monthly-outsourcing/page.tsx)
  - [Project-Based Engineering](file:///c:/Users/User/Desktop/coderovo_web/app/services/project-based-services/page.tsx)
  - [Business Systems Support & Maintenance](file:///c:/Users/User/Desktop/coderovo_web/app/services/business-systems-support/page.tsx)
- **High-Conversion Contact Modal**: Dynamic inquiry dialog with service pre-selection, multi-step intake fields, and validation ([ContactModal.tsx](file:///c:/Users/User/Desktop/coderovo_web/components/ContactModal.tsx)).
- **Technical SEO & Performance**: Automated metadata generation, dynamic XML sitemap (`/sitemap.xml`), and robots configuration (`/robots.txt`).
- **Full Mobile Responsiveness**: Precision typography, fluid padding, and adaptive alignment across ultra-wide desktop monitors down to mobile displays.

---

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/turbopack`) |
| **Animations** | [Motion](https://motion.dev) (formerly Framer Motion) |
| **Graphics & Shaders** | Custom WebGL Fragment & Vertex Shaders |
| **Typography** | `Plus Jakarta Sans` & `Inter` via [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) |
| **Linting** | [ESLint 9](https://eslint.org) with Next.js Core Web Vitals config |

---

## Directory Structure

```text
coderovo_web/
├── app/
│   ├── api/
│   │   └── logos/               # Internal API for tech stack logos
│   ├── services/                # Specialized service detail routes
│   │   ├── business-systems-support/
│   │   ├── monthly-outsourcing/
│   │   ├── project-based-services/
│   │   └── software-development/
│   ├── favicon.ico
│   ├── globals.css              # Tailwind v4 directives & custom themes
│   ├── layout.tsx               # Root layout, fonts & WebGL background mount
│   ├── page.tsx                 # Main landing page composition
│   ├── robots.ts                # Dynamic robots.txt generator
│   └── sitemap.ts               # Dynamic sitemap generator
├── components/
│   ├── ui/                      # Primitive animations & background effects
│   │   ├── ActualPageLoader.tsx
│   │   ├── ConcaveCarousel.tsx
│   │   ├── CurvedWaveCarousel.tsx
│   │   ├── GlobalBackground.tsx # WebGL morphing gradient canvas
│   │   ├── PagePreloader.tsx
│   │   └── ReactiveButton.tsx
│   ├── AboutCodeRovo.tsx        # Company identity & pillars
│   ├── CallToAction.tsx         # Conversion footer section
│   ├── CaseStudies.tsx          # Real-world project showcases
│   ├── CompanyStats.tsx         # Delivery metrics and achievements
│   ├── ConcaveLogoCarousel.tsx  # 3D interactive tech wall
│   ├── ContactModal.tsx         # Inquiry & quote request modal
│   ├── EngagementModels.tsx     # Transparent cooperation structures
│   ├── Footer.tsx               # Global navigation footer
│   ├── HeroCanvas.tsx           # Interactive hero particles / canvas
│   ├── HeroSection.tsx          # Main headline & primary CTA triggers
│   ├── Navbar.tsx               # Floating glass dock navigation bar
│   ├── ProcessFlow.tsx          # 5-step delivery methodology
│   ├── SecurityTrust.tsx        # IP protection, compliance & NDA policies
│   ├── ServicesSection.tsx      # Core capability matrix
│   ├── TechStack.tsx            # Filterable language & framework directory
│   └── WhyUs.tsx                # Differentiators & strategic value
├── public/                      # Static assets, SVG icons, and images
├── DESIGN.md                    # Visual guidelines & design tokens
├── package.json                 # Project dependencies & scripts
└── tsconfig.json                # TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v20.x` or later
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/coderovo/coderovo-web.git
cd coderovo_web
npm install
```

### Development Server

Start the local development server with Turbopack:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Compile and test the optimized production build locally:

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Code Quality & Linting

Run ESLint to check for code consistency and standard conventions:

```bash
npm run lint
```

---

## Development & Git Guidelines

- **Commit Messages**: Do not use conventional commit prefixes (e.g., `feat:`, `fix:`, `chore:`). Write direct, concise, and descriptive commit messages describing the change (e.g., `"Update mobile typography and container alignment in tech stack"`).
- **Styling Standards**: Utilize Tailwind CSS classes consistent with design tokens defined in [DESIGN.md](file:///c:/Users/User/Desktop/coderovo_web/DESIGN.md). Avoid hardcoding arbitrary hex colors when utility tokens exist.
- **Component Modularity**: Maintain high cohesion and low coupling. Isolate heavy interactive widgets into standalone dynamic client components to keep initial payload sizes optimal.

---

## License

Private & Proprietary. © 2026 Coderovo Technologies. All rights reserved.

# AbvIntel North — Official Company Website

A production-ready Next.js 14 website for AbvIntel North with surgical dark minimalism design (Vercel meets Palantir aesthetic).

## Features

✓ **6 Pages** — Home, Services, Carbonocura, Work, About, Contact  
✓ **12 Custom Components** — All built from scratch, zero UI library bloat  
✓ **Framer Motion Animations** — Scroll reveals, hover effects, orbital canvas  
✓ **Dark Minimalism** — Surgical design with gold accents, no gradients, no rounded corners  
✓ **Fully Responsive** — Mobile-first, tested at 375px, 768px, 1024px, 1440px  
✓ **TypeScript Strict Mode** — Zero implicit any errors  
✓ **Tailwind CSS** — CSS variables for brand colors, no arbitrary values  
✓ **SEO Ready** — Metadata on every page, semantic HTML  

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Google Fonts** (Syne, DM Sans)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# Already installed! Just run:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /layout.tsx          ← Root layout, fonts, Navbar + Footer
  /page.tsx            ← Home page
  /globals.css         ← CSS variables, noise overlay, base styles
  /services/page.tsx   ← Services detail page
  /carbonocura/page.tsx ← Carbonocura patent page
  /work/page.tsx       ← Case studies page
  /about/page.tsx      ← About founder & company
  /contact/page.tsx    ← Contact form page

/components
  Button.tsx           ← Variants: primary, ghost, outline
  SectionLabel.tsx     ← Eyebrow labels (line + text)
  PatentPill.tsx       ← Gold-bordered badges
  RevealOnScroll.tsx   ← Framer Motion fade-up wrapper
  MarqueeTicker.tsx    ← Infinite scrolling text
  ServiceCard.tsx      ← Numbered service cards with hover animation
  WorkRow.tsx          ← Case study rows with status badges
  CarbCanvas.tsx       ← Canvas: 3 orbital rings + CO₂ pulse
  ContactForm.tsx      ← Controlled form with success state
  Modal.tsx            ← Slide-in panel for "Start a Project"
  Navbar.tsx           ← Sticky nav with scroll blur, mobile menu
  Footer.tsx           ← Minimal footer with links & patent line

/lib
  constants.ts         ← All copy strings, services, work, about data
  animations.ts        ← Shared Framer Motion variants

tailwind.config.ts     ← Brand colors as CSS variables
```

## Brand Identity

**Wordmark:** `abvintel|NORTH`  
**Tagline:** "We Build What Others Can't Imagine."

### Color Palette

```
--bg:        #080808     /* Dark background */
--surface:   #101010     /* Slightly lighter surface */
--surface2:  #161616     /* Even lighter surface */
--white:     #F2F0EC     /* Off-white text */
--gold:      #C8A96E     /* Accent color */
--muted:     #555555     /* Secondary text */
--border:    #1E1E1E     /* Primary borders */
--border2:   #2A2A2A     /* Secondary borders */
--green:     #4ADE80     /* Status color */
```

### Typography

- **Display/Headings:** Syne (weights 600, 700, 800)
- **Body:** DM Sans (weights 300, 400, 500)

## Key Components

### CarbCanvas
Interactive canvas with three orbital rings, gold nodes, connecting lines, and pulsing CO₂ center. Animates continuously.

### RevealOnScroll
Fade-up animations on scroll with staggered children support.

### ContactForm
Fully controlled form with success state, no page reload.

### Modal
Slide-in panel triggered by "Start a Project" button.

### Navbar
Sticky nav with scroll blur, mobile menu, responsive.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Static Export

To export as static HTML:

```bash
npm run build
```

Output is in `.next/static`.

## Development

- **All copy** is in `/lib/constants.ts` — no hardcoded strings
- **TypeScript strict mode** enforced
- **No external UI libraries** — everything custom
- **Semantic HTML** with ARIA labels
- **Mobile-first responsive** — all grids collapse below 768px

---

**Ready to ship.** `npm run dev` works immediately. No TODOs. Every page fully implemented.

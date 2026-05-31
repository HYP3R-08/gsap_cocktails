# GSAP Cocktails — Animated Cocktail Bar Landing Page

A motion-driven, single-page cocktail-bar website built with **React + Vite** and animated end-to-end with **GSAP**. A hands-on project for practising production-style scroll animation: timelines, pinned sections, text reveals and scroll-synchronized video.

🔗 **Live demo:** https://gsap-cocktails-nu-cyan.vercel.app/

> Featured in my portfolio as **"Velvet Pour"**.

---

## What it demonstrates

- **SplitText reveals** — headings split into characters/words for staggered entrance animations.
- **ScrollTrigger** — scroll-linked timelines and pinned sections that hold while the visual evolves.
- **GSAP timelines** — choreographed multi-step animations (`gsap.timeline`, `fromTo`, `from`).
- **Scroll-synchronized video** — a background cocktail video driven by scroll progress.
- **Responsive animation** — `useMediaQuery` (react-responsive) to tune or disable effects per breakpoint.
- **`useGSAP`** — the official `@gsap/react` hook for clean setup/cleanup inside React components.

---

## Sections

`Navbar` · `Hero` · `Cocktails` · `About` · `Art` · `Menu` · `Contact`

Content (nav links, cocktail lists, profiles) is centralised in `constants/index.js`.

---

## Tech stack

| Area | Technologies |
|------|--------------|
| Framework | React 19, Vite 7 |
| Animation | GSAP 3.13, `@gsap/react` (useGSAP), ScrollTrigger, SplitText |
| Styling | Tailwind CSS 4 |
| Responsive | react-responsive (`useMediaQuery`) |
| Tooling | ESLint, Vite |

---

## Project structure

```
src/
├─ components/   # Navbar, Hero, Cocktails, About, Art, Menu, Contact
├─ App.jsx       # registers GSAP plugins, composes the sections
├─ main.jsx      # app entry
└─ index.css     # Tailwind + global styles
constants/       # site content (nav, cocktails, profiles)
public/          # images, fonts, videos
```

---

## Author

Cristian Francesco Pennino — [GitHub](https://github.com/HYP3R-08)

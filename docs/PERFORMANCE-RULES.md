# Performance Rules

## Performance Goal

The website must feel fast, lightweight, and smooth on mobile and desktop.

Primary hosting target:
Cloudflare Pages

## Core Rules

Keep bundle size reasonable.
Avoid unnecessary libraries.
Avoid heavy animations.
Avoid unoptimized images.
Avoid blocking scripts.
Avoid backend dependencies.
Avoid server only packages.

## Image Rules

Use optimized images.
Use responsive image sizing when possible.
Use lazy loading for below the fold images.
Set width and height when practical to reduce layout shift.
Avoid huge background images.
Avoid dark heavy cinematic assets.

## Animation Rules

Use subtle animations.
Do not animate every element.
Use Framer Motion for simple reveal animations.
Use GSAP only when needed.
Use ScrollTrigger only when it adds value.
Respect reduced motion preferences.
Avoid animations that hurt mobile performance.

## CSS Rules

Use Tailwind utilities cleanly.
Avoid massive custom CSS.
Avoid duplicate styles.
Use design tokens if the project already supports them.

## React Rules

Avoid unnecessary re renders.
Avoid heavy state management.
Avoid global state unless needed.
Keep forms simple.
Keep front end only behavior lightweight.

## Routing Rules

Keep React Router compatible with static hosting.
Avoid server only routes.
Make sure Cloudflare Pages deployment works.

## Build Rules

Before finalizing work when possible:
Run the project build.
Fix TypeScript errors.
Fix broken imports.
Check for obvious console errors.
Confirm production build compatibility.

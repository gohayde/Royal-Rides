# Stack Rules

## Required Stack

Frontend:
Vite
React
TypeScript
Tailwind CSS
React Router

UI:
shadcn/ui
Radix UI
Lucide icons

Motion:
Framer Motion
GSAP
ScrollTrigger
Lenis

Hosting:
Cloudflare Pages

## Framework Rules

Use the existing Vite React project.
Do not migrate frameworks.
Do not suggest a framework migration.
Do not add Next.js.
Do not add Astro.
Do not add Remix.
Do not add Gatsby.
Do not add backend runtime code.

## TypeScript Rules

Use TypeScript cleanly.
Create simple types for data objects.
Avoid `any` unless necessary.
Keep props readable.
Keep component interfaces practical.
Do not over engineer.

## React Rules

Use functional components.
Use hooks where needed.
Keep section components focused.
Keep page composition clean.
Avoid huge single files when the project structure supports components.
Avoid unnecessary global state.

## Tailwind Rules

Use Tailwind CSS for layout and styling.
Keep classes readable.
Use consistent spacing.
Use responsive utilities.
Use design tokens or CSS variables if already configured.
Do not introduce unrelated styling systems.

## shadcn/ui And Radix Rules

Use shadcn/ui and Radix where useful:
Buttons
Cards
Accordion
Dialog
Sheet
Navigation menu
Form style primitives

Do not force shadcn/ui into every component.
Use it when it improves quality, accessibility, or speed.

## Lucide Rules

Use Lucide icons for:
Trust points
Feature cards
Process steps
FAQ support visuals
CTAs where useful

Keep icon sizes consistent.
Use accent colour carefully.

## Motion Rules

Use Framer Motion for:
Section reveals
Card hover states
Subtle hero motion
Button interaction

Use GSAP and ScrollTrigger only where a stronger scroll effect is genuinely useful.

Use Lenis only if smooth scrolling is part of the build and does not hurt performance.

Do not over animate.
Respect reduced motion.

## Cloudflare Pages Rules

Keep the app static compatible.
Avoid server only logic.
Avoid backend dependencies.
Make build output work with Cloudflare Pages.
If using React Router browser routing, handle static fallback properly.

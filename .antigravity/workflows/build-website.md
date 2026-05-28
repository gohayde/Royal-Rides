# Antigravity Workflow: Build Website

Use this workflow only when the user explicitly asks to build or update the website.

## Step 1: Read Instructions

Read these files first:
1. `AGENTS.md`
2. `docs/WEBSITE-BUILD-SPEC.md`
3. `docs/AGENT-WORKFLOW.md`
4. `docs/STACK-RULES.md`
5. `docs/DESIGN-SYSTEM.md`
6. `docs/CONTENT-RULES.md`
7. `docs/COMPONENT-RULES.md`
8. `docs/PERFORMANCE-RULES.md`
9. `docs/QA-CHECKLIST.md`

## Step 2: Inspect Repo

Inspect:
Package files
Vite config
Tailwind config
Source folder
Routing setup
Existing components
Existing pages
Existing styles
Existing assets

Do not edit before understanding the structure.

## Step 3: Confirm Stack Internally

Use:
Vite
React
TypeScript
Tailwind CSS
React Router
shadcn/ui
Radix UI
Lucide icons
Framer Motion
GSAP
ScrollTrigger
Lenis

Do not switch to:
Next.js
Astro
Remix

Do not add backend code.

## Step 4: Build From Sitemap

Build the homepage in this exact section order:

Header
Hero Section
Quick Booking Search
Trust Bar
Car Categories
Featured Cars
Doorstep Delivery and Airport Transfers
Simple Rental Process
Popular Rental Plans
Reviews
FAQ
Final CTA
Footer

## Step 5: Implement Conversion Flow

Make WhatsApp inquiry actions clear.
Make request availability actions clear.
Make fleet browsing easy.
Make mobile CTAs easy to access.
Use front end only behavior unless user requests backend.

## Step 6: Apply Design System

Use:
#DA5259 for CTAs and accents
#111827 for authority text
#F8F8F6 for clean base backgrounds
Plus Jakarta Sans for headings
Inter for body

Keep the site bright, clean, affordable, trustworthy, and family friendly.
Do not make it dark.
Do not make it look like a super luxury exotic car brand.

## Step 7: Write Specific Copy

Use specific copy for Royal Rides Car Rental.
Do not use lorem ipsum.
Do not use generic placeholder copy.
If exact copy is missing, create polished website copy based on the business details.

## Step 8: QA

Run available checks.
Check responsive layouts.
Check TypeScript.
Check imports.
Check console issues if possible.
Check Cloudflare Pages compatibility.

## Step 9: Final Summary

At the end, summarize:
Files changed
Commands run
Checks performed
Anything still needing user input

# AGENTS.md

## Master Source Of Truth

This file is the master instruction file for all coding agents working on this project.

All other agent files must point back to this file and the `/docs` folder.

Use this file for:
Codex
OpenCode
General coding agents
Google AI Studio manual prompting
Any AI agent that does not have its own dedicated instruction file

Claude Code must read `CLAUDE.md`, but `CLAUDE.md` must defer to this file.
Windsurf must read `.windsurfrules`, but `.windsurfrules` must defer to this file.
Cursor must read `.cursor/rules/project.mdc`, but that file must defer to this file.
Antigravity must read `.antigravity/rules.md` and workflows, but those files must defer to this file.

## Project Identity

Business Name: Royal Rides Car Rental  
Website Type: Affordable car rental agency website  
Location: Dubai, UAE  
Website Goal: Generate WhatsApp inquiries, booking requests, and fleet browsing.  
Primary Conversion Action: WhatsApp inquiry or request availability.  
Secondary Conversion Action: Browse cars and view categories.

Royal Rides Car Rental is a clean, affordable, trustworthy, family friendly car rental agency in Dubai. The website must feel modern, simple, easy to book, and reliable. It must not feel like a dark luxury supercar brand.

## Business Summary

Royal Rides Car Rental Dubai offers sedan, SUV, and budget car rentals with doorstep delivery, airport transfers, transparent pricing, flexible rental plans, and 24/7 support.

The site must communicate:
Reliable car rentals in Dubai
Affordable sedan, SUV, and budget car options
Easy WhatsApp booking
Transparent pricing
Flexible daily, weekly, and monthly rentals
Doorstep delivery
Airport transfers
24/7 support
Trust for families, tourists, and residents

## Target Audience

Dubai residents
Tourists visiting Dubai
Families needing practical rental cars
People looking for affordable sedans
People looking for affordable SUVs
People looking for budget cars
People who want fast WhatsApp booking
People who value clear pricing and convenience

## Required Homepage Sitemap

Build the homepage using this exact section order:

1. Header
2. Hero Section
3. Quick Booking Search
4. Trust Bar
5. Car Categories
6. Featured Cars
7. Doorstep Delivery and Airport Transfers
8. Simple Rental Process
9. Popular Rental Plans
10. Reviews
11. FAQ
12. Final CTA
13. Footer

Do not reorder the sitemap unless the user explicitly asks.

## Brand Style

The design must feel:
Clean
Affordable
Trustworthy
Family friendly
Modern
Easy to book
Bright
Simple
Practical
Polished

The design must not feel:
Dark
Overly luxury
Supercar focused
Exotic car focused
Aggressive
Generic
Template based
Overcomplicated
Corporate cold

## Colour System

Use these colours as the source of truth:

Primary CTA / Accent: #DA5259  
Text / Authority: #111827  
Background / Clean Base: #F8F8F6  

Recommended supporting colours:
White: #FFFFFF
Muted Text: #6B7280
Soft Border: #E5E7EB
Soft Card Background: #FFFFFF
Soft Accent Background: #FDEDEF
Warm Neutral: #FFF7F6

Use #DA5259 for:
Primary buttons
WhatsApp style booking CTAs
Important highlights
Small active states
Selected filters
Key icon accents

Use #111827 for:
Headings
Primary text
Navigation text
Strong trust messaging

Use #F8F8F6 for:
Main page background
Soft section backgrounds
Clean base areas

Avoid dark full page backgrounds.
Avoid black luxury gradients.
Avoid neon colours.
Avoid making the website look like a super luxury exotic car rental brand.

## Typography

Headings: Plus Jakarta Sans  
Body: Inter  

Rules:
Use Plus Jakarta Sans for all main headings and strong section titles.
Use Inter for paragraphs, forms, labels, buttons, navigation, cards, and supporting text.
Use strong but clean heading hierarchy.
Use generous line height.
Keep copy scannable.
Avoid tiny unreadable text.
Use responsive type sizes.

## Required Frontend Stack

Use:
Vite
React
TypeScript
Tailwind CSS
React Router

Do not switch to:
Next.js
Astro
Remix
Gatsby
Svelte
Vue
Angular

Do not add a backend unless the user explicitly asks.

## UI And Component Stack

Use:
shadcn/ui
Radix UI
Lucide icons

Rules:
Use shadcn/ui and Radix UI for accessible primitives where appropriate.
Use Lucide icons for lightweight consistent iconography.
Keep components clean, reusable, and specific to the website.
Do not overuse component abstractions.
Do not create a huge design system before building the actual site.
Use practical reusable sections.

## Motion And Animation Stack

Use:
Framer Motion
GSAP
ScrollTrigger
Lenis

Rules:
Use Framer Motion for normal entrance animation, cards, buttons, reveals, and small interactions.
Use GSAP and ScrollTrigger only for stronger scroll effects when needed.
Use Lenis for smooth scrolling only if it is already installed or intentionally added.
Animation must be subtle, premium, and performance friendly.
Do not animate every element.
Do not create distracting car dealership effects.
Respect reduced motion preferences.

## Hosting And Deployment

Hosting target: Cloudflare Pages

Rules:
Keep build output compatible with Cloudflare Pages.
Do not add server only dependencies.
Do not rely on Node runtime on the server.
Keep routing compatible with static deployment.
If using React Router, make sure static fallback works when deploying.

## Content Rules

Do not use generic placeholder copy like:
Lorem ipsum
Premium solutions for your business
We provide the best services
Welcome to our website
Your trusted partner

Write specific polished copy for Royal Rides Car Rental.

Copy must emphasize:
Affordable car rental in Dubai
Sedan, SUV, and budget cars
Doorstep delivery
Airport transfers
Transparent pricing
Flexible plans
Daily, weekly, and monthly rentals
24/7 support
WhatsApp booking
Residents, tourists, and families

Tone:
Clear
Trustworthy
Friendly
Simple
Conversion focused
Not hype heavy
Not ultra luxury
Not exotic car focused

## Homepage Section Requirements

### Header

Purpose:
Make navigation and booking access clear.

Required content:
Logo or text logo: Royal Rides
Navigation links matching key sections
Primary CTA: WhatsApp
Secondary action if useful: View Cars

Style:
Clean white or soft background
Sticky or fixed if suitable
Strong mobile menu
Clear CTA button
No dark luxury header

### Hero Section

Purpose:
Immediately communicate affordable Dubai car rentals and drive WhatsApp booking.

Suggested headline:
Affordable Car Rental in Dubai

Suggested subheadline:
Rent sedan, SUV, and budget cars with doorstep delivery, airport transfers, flexible plans, and 24/7 support.

Primary CTA:
WhatsApp Now

Secondary CTA:
Browse Cars

Trust points:
Daily, weekly and monthly rentals
Doorstep delivery across Dubai
Airport transfers available
Transparent pricing

Style:
Bright clean background
Use soft #F8F8F6 base
Use #DA5259 accents
Use car imagery or car cards if available
No dark cinematic supercar style

### Quick Booking Search

Purpose:
Help visitors quickly request availability.

Fields:
Pick up location
Rental date
Car type
Rental plan

CTA:
Request Availability

Behavior:
The request availability button should lead to WhatsApp or a clear booking inquiry flow.
No backend required unless user asks.
Use a front end only form or WhatsApp link generator if needed.

### Trust Bar

Purpose:
Build confidence immediately after the hero.

Trust points:
Doorstep delivery
Airport transfers
24/7 support
Transparent pricing
Flexible plans

Layout:
Four or five compact icon based trust items.
Responsive grid.
Clean cards or simple row.

### Car Categories

Purpose:
Help users choose the right vehicle type.

Required categories:
Sedan Cars
SUV Cars
Budget Cars

Each card should include:
Category name
Short benefit focused description
View Category CTA
Relevant icon or image slot

Tone:
Practical and family friendly.
Not super luxury.

### Featured Cars

Purpose:
Show example available cars and encourage browsing or WhatsApp inquiry.

Cards should include:
Car name
Category
Daily price placeholder only if real pricing is not provided
Key features
CTA: Check Availability

If exact cars are not provided, create realistic category based examples without pretending inventory is final.

Use labels like:
Example sedan
Example SUV
Budget friendly option

Do not claim exact live availability unless connected to real data.

### Doorstep Delivery and Airport Transfers

Purpose:
Sell convenience.

Must mention:
Doorstep delivery across Dubai
Airport transfers
Hotel delivery
Easy handover
Simple WhatsApp coordination

Style:
Split section with copy and visual card.
Clean and reassuring.

### Simple Rental Process

Purpose:
Make booking feel easy.

Steps:
1. Choose your car
2. Send a WhatsApp inquiry
3. Confirm rental details
4. Get delivery or pickup

Keep it simple.
Use icons.
Use short copy.

### Popular Rental Plans

Purpose:
Promote daily, weekly, and monthly rental plans.

Plans:
Daily Rentals
Weekly Rentals
Monthly Rentals

Each plan should include:
Best for who
Short benefits
CTA: Ask on WhatsApp

Do not invent exact prices unless provided.

### Reviews

Purpose:
Build trust.

If no real reviews are provided:
Use realistic testimonial style placeholders that are clearly written as website copy.
Do not claim specific review counts.
Do not use fake star ratings tied to real platforms unless provided.

Focus review themes:
Easy booking
Clean cars
Fast delivery
Good support
Good for tourists or families

### FAQ

Purpose:
Answer objections.

Required questions:
Do you offer doorstep delivery in Dubai?
Can I book through WhatsApp?
Do you offer airport transfers?
Can I rent daily, weekly, or monthly?
What car types are available?
Are prices transparent?
Do you provide 24/7 support?

Answers must be concise and specific.

### Final CTA

Purpose:
Push the user to book or ask availability.

Headline should be direct.
CTA:
WhatsApp Now
Request Availability

Tone:
Friendly, simple, urgency without pressure.

### Footer

Required:
Royal Rides Car Rental
Dubai, UAE
Quick links
Car categories
Services
WhatsApp CTA
Basic legal links if present or needed

Keep footer clean and not dark heavy.

## Implementation Rules For Future Website Build

When asked to build the website:
1. Inspect existing project files first.
2. Understand the app structure before editing.
3. Preserve existing working setup.
4. Use Vite React TypeScript Tailwind.
5. Use React Router only if needed or already present.
6. Create responsive sections from the homepage sitemap.
7. Keep components reusable but not over engineered.
8. Use clean TypeScript types.
9. Avoid any framework switch.
10. Avoid backend work unless explicitly requested.
11. Avoid deleting unrelated files.
12. Avoid rewriting unrelated files.
13. Keep mobile quality high.
14. Keep performance high.
15. Keep design visually polished.
16. Keep copy specific to Royal Rides Car Rental.

## Performance Rules

Prioritize:
Fast load
Small bundle
Optimized images
Clean CSS
Lazy loading where useful
No unnecessary libraries
No bloated animation
No heavy runtime effects
No server dependencies
Cloudflare Pages compatibility

Core Web Vitals mindset:
Fast first load
Stable layout
Responsive interaction
Clean rendering

## Accessibility Rules

Use semantic HTML.
Use accessible buttons and links.
Use visible focus states.
Use descriptive aria labels where needed.
Use readable colour contrast.
Use keyboard friendly menus.
Do not rely on colour alone for meaning.

## QA Rules

Before finalizing any website build, verify:
Page runs locally
No TypeScript errors
No obvious console errors
No broken imports
No missing routes
Mobile layout works
Tablet layout works
Desktop layout works
CTAs are visible
WhatsApp CTAs are easy to find
Copy is specific
No lorem ipsum
No dark luxury redesign
No Next.js or Astro added
Cloudflare Pages build remains compatible

## Repo Safety Rules

Do not delete unrelated files.
Do not overwrite user work unless necessary.
Do not change package manager unless clearly needed.
Do not rename project structure unnecessarily.
Do not introduce backend services.
Do not add database setup.
Do not add authentication.
Do not add payment processing.
Do not add CMS.
Do not add inventory system unless user explicitly asks.

## Final Response Rules For Future Agents

When completing future work:
Summarize exactly what changed.
List files edited.
List any commands run.
Mention any tests or build checks performed.
Mention anything that still needs user input.
Do not claim success if build or tests were not run.

# Design

## Color

Strategy: **Committed** — the coral-red accent carries the brand identity strongly across CTAs, highlights, and active states. It lives at 30–50% visual weight on accent-heavy surfaces (hero, final CTA), and ~10% on neutral content sections.

Palette (OKLCH equivalents of existing hex values):

- **Accent** `oklch(56% 0.19 18)` — primary CTA, active states, icon accents. Hex: `#DA5259`
- **Accent Strong** `oklch(52% 0.21 18)` — hover states, pressed states. Hex: `#DF3F4D`
- **Ink** `oklch(14% 0.015 240)` — headings, primary body, navigation. Hex: `#0C1324`
- **Muted** `oklch(45% 0.012 240)` — supporting copy, metadata, descriptions. Hex: `#5E6573`
- **Base** `oklch(97% 0.003 90)` — main background, soft section fills. Hex: `#F8F8F6`
- **White** `oklch(99% 0.002 90)` — cards, header, booking panels. Hex: `#FFFFFF`
- **Line** `oklch(89% 0.006 240)` — borders, dividers. Hex: `#DDE0E6`
- **Accent Soft** `oklch(95% 0.02 18)` — icon backgrounds, pill tags, CTA section tints. Hex: `#FDEDEF`
- **Warm Neutral** `oklch(98% 0.005 25)` — gradient CTA section base. Hex: `#FFF7F6`

## Typography

- **Heading font:** Plus Jakarta Sans — weights 700, 800. Used for all section titles, card titles, step titles, plan names, hero H1.
- **Body font:** Inter — weights 400, 500, 600, 700. Used for all body copy, labels, nav links, tags, metadata.

Scale (approximate):
- Hero H1: `clamp(58px, 5.48vw, 93px)` — tight tracking `-0.052em`, uppercase
- Section title: `clamp(30px, 3.2vw, 52px)` — tracking `-0.04em`
- Card title: `19–24px` — tracking `-0.03em`
- Body large: `clamp(16px, 1.3vw, 20px)`
- Body small / meta: `13–15px`
- Eyebrow label: `13px`, uppercase, tracking `0.08–0.1em`

Line lengths: body capped at 65ch on wide breakpoints via `max-width` or `width: min()` constraints.

## Elevation

Three tiers:
1. **Flat** — `border: 1px solid var(--line)` only. Used for cards in content-dense grids (fleet, reviews).
2. **Raised** — `box-shadow: 0 4–16px rgba(15,23,42,0.05–0.09)` + border. Used for delivery cards, plan cards, category cards.
3. **Floating** — `box-shadow: 0 21–55px rgba(15,23,42,0.11–0.14)`. Used for nav card, booking bar.

Hover lifts use `translateY(-2px)` + shadow intensification. Never animate `box-shadow` alone — always pair with `transform`.

## Spacing

Section vertical padding: `clamp(72px, 9vw, 128px)`.
Content container: `min(1320px, 100%)` with `padding-inline: clamp(16px, 5vw, 90px)`.
Card internal padding: `28–36px`.
Grid gaps: `18–32px` depending on card density.

## Components

### Nav Card
Floating pill navbar. White semi-transparent background, `backdrop-filter: blur(12px)`, large box-shadow. Three-column grid: logo | nav links | actions. Collapses to logo + single CTA on mobile.

### Booking Bar
Horizontal form inside the hero, absolutely positioned at the bottom. White panel with field dividers. Five columns on desktop, stacks to single column on mobile.

### Category Cards
Three-up grid. White background, rounded corners `22px`, border, hover lift. Image slot + title + description + tag pills + CTA.

### Fleet Cards
Four-up grid. Image top, metadata + specs + features in body, dual CTA at bottom (primary + secondary). Badge on image area for category.

### Plan Cards
Three-up grid. Center card is highlighted (accent border + double shadow). Popular badge floats above. Perk list with checkmarks. Primary/secondary CTA swap based on highlight state.

### Review Cards
Three-up grid. Star rating + quote + author with separator. Off-white (`--base`) background within the white section — creates subtle depth without border noise.

### FAQ
Accordion within a rounded bordered container. Question triggers expand/collapse answer. Active state turns question text to accent color.

### Trust Bar
Full-width white band between hero and categories. Icon + label + sublabel per item. Flex wrap for mobile.

### Process Steps
Four-column grid with top border accent. Red partial border left-aligned at top edge. Step number as eyebrow label. Clean and readable.

## Motion

Library: Framer Motion + GSAP + ScrollTrigger + Lenis (smooth scroll).

Principles:
- Ease: `easeOut` with `duration: 0.5–0.7s`. No bounce, no elastic.
- Scroll reveals: fade-up (`y: 20 → 0`, `opacity: 0 → 1`) with staggered children.
- Hero elements: sequential entrance on mount.
- Hover states: `180–200ms ease`. Transform + shadow only, no layout properties.
- Reduced motion: all scroll animations disabled via `prefers-reduced-motion`.

## Borders & Radius

- Nav card: `44px` radius
- Booking bar: `28px`
- Section cards (category, fleet, plan, review): `20–22px`
- Icon wraps / tags: `8–14px`
- Buttons: `11–15px`

## Imagery

- Light background car photography. No dark studio shots.
- Practical, family-friendly mood. Real Dubai context preferred.
- Car images show full vehicle, slightly angled, on clean light or white background.
- Avoid: cinematic dramatic lighting, supercar close-ups, dark moody tones.

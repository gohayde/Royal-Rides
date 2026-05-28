# Component Rules

## Component Philosophy

Build practical website components for a premium local business website.
Keep components reusable where useful.
Do not over abstract.
Do not create unnecessary architecture.
Keep the code easy for future agents to understand.

## Recommended Component Structure

When building the site, use components like:

Header
HeroSection
QuickBookingSearch
TrustBar
CarCategories
FeaturedCars
DeliveryTransfersSection
RentalProcess
RentalPlans
ReviewsSection
FAQSection
FinalCTA
Footer

Use the existing project structure if it already has a component convention.

## Data Driven Sections

Use data arrays for:
Navigation links
Trust points
Car categories
Featured cars
Rental process steps
Rental plans
Reviews
FAQ items
Footer links

Keep data near the component or in a clean data file depending on existing structure.

## Header Rules

Header must include:
Royal Rides branding
Navigation
WhatsApp CTA
Mobile menu

Mobile menu:
Accessible
Easy to tap
Clear links
Visible CTA

## Hero Rules

Hero must include:
Clear headline
Subheadline
Primary CTA
Secondary CTA
Trust points
Light visual direction

Hero must not be dark.
Hero must not look like a super luxury exotic rental brand.

## Booking Search Rules

Fields:
Pick up location
Rental date
Car type
Rental plan

CTA:
Request Availability

Behavior:
Can route to WhatsApp using query text.
Must not require backend unless user requests backend.

## Trust Bar Rules

Use icons and short labels.
Keep it compact.
Make it responsive.
Prioritize trust and convenience.

## Car Category Rules

Three cards:
Sedan Cars
SUV Cars
Budget Cars

Each card:
Title
Short description
CTA
Icon or image area

## Featured Cars Rules

Cards should be clean and scannable.

Each card:
Name or example label
Category
Feature list
CTA

Do not fake live stock.
Do not fake exact prices.

## Process Rules

Use four steps:
Choose your car
Send a WhatsApp inquiry
Confirm rental details
Get delivery or pickup

## Rental Plan Rules

Use three cards:
Daily Rentals
Weekly Rentals
Monthly Rentals

Each card:
Best for
Benefits
CTA

## FAQ Rules

Use accessible accordion behavior.
Use shadcn/ui Accordion if available.
Keep answers short.

## CTA Rules

CTAs must be clear and repeated naturally:
WhatsApp Now
Request Availability
Browse Cars
Check Availability

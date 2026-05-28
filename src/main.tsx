import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Building2,
  CalendarDays,
  Car,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Search,
  Shield,
  Clock,
  Banknote,
  Truck,
  Plane,
  CalendarCheck,
  MessageCircle,
  CheckCircle2,
  Star,
  Users,
  Fuel,
  Settings2,
} from "lucide-react";
import "./styles.css";

const bookingFields = [
  { label: "Location", value: "Dubai", icon: MapPin },
  { label: "Pick Up", value: "Airport or Hotel", icon: Building2 },
  { label: "Car Type", value: "SUV", icon: Car },
  { label: "Date", value: "21 May 2025 - 25 May 2025", icon: CalendarDays },
];

const trustItems = [
  { icon: Truck, label: "Doorstep Delivery", sub: "Across all Dubai areas" },
  { icon: Plane, label: "Airport Transfers", sub: "All major UAE airports" },
  { icon: Clock, label: "24/7 Support", sub: "Always here to help" },
  { icon: Banknote, label: "Transparent Pricing", sub: "No hidden charges" },
  { icon: CalendarCheck, label: "Flexible Plans", sub: "Daily, weekly, monthly" },
];

const categories = [
  {
    slug: "sedan",
    title: "Sedan Cars",
    desc: "Comfortable daily rentals for city drives, business trips, and simple point-to-point travel in Dubai.",
    icon: Car,
    tags: ["City drives", "Business travel", "Daily rentals"],
  },
  {
    slug: "suv",
    title: "SUV Cars",
    desc: "Spacious rental options for families, groups, airport pickups, and longer drives around the UAE.",
    icon: Users,
    tags: ["Family trips", "Airport pickup", "Group travel"],
  },
  {
    slug: "budget",
    title: "Budget Cars",
    desc: "Affordable cars for everyday use, short trips, weekly rentals, and monthly plans.",
    icon: Banknote,
    tags: ["Low cost", "Weekly plans", "Monthly rentals"],
  },
];

const featuredCars = [
  {
    name: "Toyota Corolla",
    category: "Sedan",
    badge: "Popular choice",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["AC", "Bluetooth", "USB charging", "City-ready"],
  },
  {
    name: "Nissan Sunny",
    category: "Budget",
    badge: "Best value",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["AC", "Economical", "Easy to park", "Daily rentals"],
  },
  {
    name: "Toyota Fortuner",
    category: "SUV",
    badge: "Family favourite",
    specs: [
      { icon: Users, value: "7 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["4WD option", "Large boot", "Airport ready", "Family trips"],
  },
  {
    name: "Mitsubishi Attrage",
    category: "Budget",
    badge: "Budget friendly",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["AC", "Fuel efficient", "City & highway", "Monthly plans"],
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Car",
    desc: "Browse sedans, SUVs, and budget cars. Pick what suits your trip.",
  },
  {
    num: "02",
    title: "Send a WhatsApp Inquiry",
    desc: "Message us on WhatsApp with your dates, location, and car preference.",
  },
  {
    num: "03",
    title: "Confirm Rental Details",
    desc: "We confirm availability, pricing, and any specific requirements.",
  },
  {
    num: "04",
    title: "Get Delivery or Pickup",
    desc: "We deliver to your door, hotel, or airport. Or collect from our location.",
  },
];

const plans = [
  {
    period: "Daily",
    best: "Short trips and weekend getaways",
    perks: [
      "Flexible single-day or multi-day booking",
      "Airport pickup available",
      "Quick WhatsApp confirmation",
      "All car types available",
    ],
    highlight: false,
  },
  {
    period: "Weekly",
    best: "Visitors and short-stay residents",
    perks: [
      "7-day rental with consistent rate",
      "Doorstep delivery included",
      "Swap options on request",
      "Priority WhatsApp support",
    ],
    highlight: true,
  },
  {
    period: "Monthly",
    best: "Residents and long-stay professionals",
    perks: [
      "Best value per day",
      "Full month flexible terms",
      "Renewal on WhatsApp",
      "Sedan, SUV, and budget available",
    ],
    highlight: false,
  },
];

const reviews = [
  {
    name: "Sarah M.",
    context: "Tourist, UK",
    text: "Booking was simple and the car was delivered to our hotel on time. Exactly what we needed for our Dubai trip.",
  },
  {
    name: "Ahmed K.",
    context: "Dubai resident",
    text: "I rent monthly and Royal Rides makes it hassle-free. Quick WhatsApp replies and transparent pricing every time.",
  },
  {
    name: "Priya R.",
    context: "Family traveller",
    text: "Got a clean SUV delivered to Dubai Airport. The whole process took a few WhatsApp messages. Really easy.",
  },
];

const faqs = [
  {
    q: "Do you offer doorstep delivery in Dubai?",
    a: "Yes. We deliver to your home, hotel, or any location across Dubai. Just let us know your address when you book.",
  },
  {
    q: "Can I book through WhatsApp?",
    a: "Yes. WhatsApp is our primary booking channel. Message us with your car type, dates, and pickup location and we'll confirm availability fast.",
  },
  {
    q: "Do you offer airport transfers?",
    a: "Yes. We cover all major UAE airports including Dubai International (DXB) and Al Maktoum (DWC). We coordinate pickup timing with your flight.",
  },
  {
    q: "Can I rent daily, weekly, or monthly?",
    a: "Yes. We offer daily, weekly, and monthly rental plans across all car categories. Monthly plans give the best daily rate.",
  },
  {
    q: "What car types are available?",
    a: "We offer sedan cars, SUVs, and budget cars. Each category has multiple options depending on availability.",
  },
  {
    q: "Are prices transparent?",
    a: "Yes. We share full pricing upfront via WhatsApp before you confirm. No hidden fees or surprise charges.",
  },
  {
    q: "Do you provide 24/7 support?",
    a: "Yes. Our support team is available around the clock via WhatsApp for any questions, changes, or assistance during your rental.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        {open ? <ChevronUp size={20} strokeWidth={2.2} /> : <ChevronDown size={20} strokeWidth={2.2} />}
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Royal Rides car rental hero">
        <div className="hero-bg" aria-hidden="true" />
        <header className="nav-card" aria-label="Primary navigation">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 74 34" role="img">
                <path d="M17.7 9.7h30.6l8.2 8.6h7.1c4.3 0 7.8 3.4 7.8 7.7v2.3H60.2a8.9 8.9 0 0 0-17.5 0H29.4a8.9 8.9 0 0 0-17.5 0H2.8v-6.6c0-4 3.2-7.3 7.2-7.3h2.1l5.6-4.7Zm4.2 4.2-3.1 4.6h12.3v-4.6h-9.2Zm14.2 0v4.6h13.5l-4.4-4.6h-9.1Z" />
                <circle cx="20.7" cy="29.1" r="5.4" />
                <circle cx="51.5" cy="29.1" r="5.4" />
              </svg>
            </span>
            <span>Royal Rides</span>
          </a>

          <nav className="nav-links" aria-label="Main links">
            <a className="active" href="#home">Home</a>
            <a href="#fleet">Fleet</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="call-btn" href="tel:+971000000000" aria-label="Call Royal Rides">
              <Phone size={21} strokeWidth={2.6} />
              <span>Call</span>
            </a>
            <a className="book-btn" href="https://wa.me/" aria-label="Book Royal Rides on WhatsApp">
              Book Now
            </a>
          </div>
        </header>

        <div className="hero-copy">
          <h1>
            <span>Rent Your</span>
            <span className="accent">Perfect Ride</span>
            <span>In Dubai</span>
          </h1>
          <p>
            Affordable sedans, SUVs, and family-friendly rentals with easy booking and
            fast support across Dubai.
          </p>
        </div>

        <form className="booking-bar" aria-label="Quick rental search">
          {bookingFields.map((field) => {
            const Icon = field.icon;
            return (
              <label className="booking-field" key={field.label}>
                <span className="booking-label">{field.label}</span>
                <span className="booking-value">
                  <Icon size={24} strokeWidth={2.4} />
                  <span>{field.value}</span>
                  {field.label !== "Date" && <ChevronDown className="chevron" size={21} />}
                </span>
              </label>
            );
          })}
          <button className="search-btn" type="submit" aria-label="Search available cars">
            <Search size={35} strokeWidth={2.7} />
          </button>
        </form>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────── */}
      <section className="trust-bar" aria-label="Why choose Royal Rides">
        <div className="section-inner">
          <ul className="trust-list" role="list">
            {trustItems.map(({ icon: Icon, label, sub }) => (
              <li className="trust-item" key={label}>
                <span className="trust-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2.2} />
                </span>
                <span className="trust-text">
                  <strong>{label}</strong>
                  <span>{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CAR CATEGORIES ───────────────────────────────────────── */}
      <section className="section categories-section" id="fleet" aria-label="Car categories">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Find the Right Car</h2>
            <p className="section-sub">Three simple categories. Sedans for city travel, SUVs for families, budget cars for everyday use.</p>
          </div>
          <div className="cat-grid">
            {categories.map(({ slug, title, desc, icon: Icon, tags }) => (
              <article className="cat-card" key={slug}>
                <div className="cat-icon-wrap" aria-hidden="true">
                  <Icon size={30} strokeWidth={1.9} />
                </div>
                <h3 className="cat-title">{title}</h3>
                <p className="cat-desc">{desc}</p>
                <ul className="cat-tags" aria-label="Category highlights">
                  {tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <a className="cat-cta" href="https://wa.me/" aria-label={`View ${title}`}>
                  View Category
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CARS ────────────────────────────────────────── */}
      <section className="section fleet-section" aria-label="Featured rental cars">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Popular Rental Cars</h2>
            <p className="section-sub">A snapshot of cars we frequently rent out. Ask us for current availability via WhatsApp.</p>
          </div>
          <div className="fleet-grid">
            {featuredCars.map(({ name, category, badge, specs, features }) => (
              <article className="fleet-card" key={name}>
                <div className="fleet-card-top">
                  <div className="fleet-img-slot" aria-label={`${name} image`}>
                    <Car size={52} strokeWidth={1.4} />
                  </div>
                </div>
                <div className="fleet-card-body">
                  <div className="fleet-meta">
                    <span className="fleet-badge">{badge}</span>
                    <span className="fleet-cat">{category}</span>
                  </div>
                  <h3 className="fleet-name">{name}</h3>
                  <ul className="fleet-specs" aria-label="Car specs">
                    {specs.map(({ icon: Icon, value }) => (
                      <li key={value}>
                        <Icon size={15} strokeWidth={2} />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="fleet-features" aria-label="Car features">
                    {features.map((f) => (
                      <li key={f}>
                        <CheckCircle2 size={14} strokeWidth={2.2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a className="fleet-cta" href="https://wa.me/" aria-label={`Check availability for ${name}`}>
                    Check Availability
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY & AIRPORT ───────────────────────────────────── */}
      <section className="section delivery-section" aria-label="Doorstep delivery and airport transfers">
        <div className="section-inner delivery-inner">
          <div className="delivery-copy">
            <span className="eyebrow">Delivery and Transfers</span>
            <h2 className="section-title">We Come to You</h2>
            <p className="delivery-body">
              No need to travel to a rental office. Royal Rides delivers your car directly to your door, hotel, or airport terminal across Dubai.
            </p>
            <ul className="delivery-list" role="list">
              {[
                { icon: Truck, text: "Doorstep delivery across all Dubai areas" },
                { icon: Plane, text: "Dubai International (DXB) and Al Maktoum (DWC) airports" },
                { icon: Building2, text: "Hotel and serviced apartment delivery" },
                { icon: MessageCircle, text: "Coordinate everything on WhatsApp" },
              ].map(({ icon: Icon, text }) => (
                <li key={text}>
                  <span className="delivery-icon" aria-hidden="true"><Icon size={18} strokeWidth={2} /></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <a className="primary-btn" href="https://wa.me/" aria-label="Book delivery on WhatsApp">
              <MessageCircle size={20} strokeWidth={2.2} />
              WhatsApp Us
            </a>
          </div>
          <div className="delivery-cards" aria-hidden="true">
            <div className="delivery-card dc-main">
              <div className="dc-icon"><Truck size={28} strokeWidth={1.9} /></div>
              <strong>Doorstep Delivery</strong>
              <span>We bring your rental directly to you, anywhere in Dubai.</span>
            </div>
            <div className="delivery-card dc-alt">
              <div className="dc-icon"><Plane size={28} strokeWidth={1.9} /></div>
              <strong>Airport Transfers</strong>
              <span>Ready at arrivals when your flight lands.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RENTAL PROCESS ───────────────────────────────────────── */}
      <section className="section process-section" aria-label="How to rent a car from Royal Rides">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-sub">Four simple steps from browsing to getting your keys.</p>
          </div>
          <ol className="process-list" role="list">
            {steps.map(({ num, title, desc }) => (
              <li className="process-step" key={num}>
                <span className="step-num" aria-hidden="true">{num}</span>
                <div className="step-body">
                  <h3 className="step-title">{title}</h3>
                  <p className="step-desc">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── RENTAL PLANS ─────────────────────────────────────────── */}
      <section className="section plans-section" aria-label="Rental plans">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Rental Plans</h2>
            <p className="section-sub">Daily, weekly, or monthly. Pick a plan that fits your schedule.</p>
          </div>
          <div className="plans-grid">
            {plans.map(({ period, best, perks, highlight }) => (
              <article className={`plan-card${highlight ? " plan-highlight" : ""}`} key={period}>
                {highlight && <span className="plan-popular-badge">Most Popular</span>}
                <h3 className="plan-period">{period} Rental</h3>
                <p className="plan-best">Best for: {best}</p>
                <ul className="plan-perks" role="list">
                  {perks.map((p) => (
                    <li key={p}>
                      <CheckCircle2 size={16} strokeWidth={2.2} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a className={`plan-cta${highlight ? " plan-cta-primary" : ""}`} href="https://wa.me/" aria-label={`WhatsApp about ${period} rental`}>
                  <MessageCircle size={18} strokeWidth={2.2} />
                  WhatsApp Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────── */}
      <section className="section reviews-section" aria-label="Customer reviews">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">What Customers Say</h2>
            <p className="section-sub">Real feedback from people who've rented with Royal Rides.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map(({ name, context, text }) => (
              <article className="review-card" key={name}>
                <div className="review-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} strokeWidth={0} fill="#DA5259" aria-hidden="true" />
                  ))}
                </div>
                <p className="review-text">"{text}"</p>
                <div className="review-author">
                  <strong>{name}</strong>
                  <span>{context}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section faq-section" aria-label="Frequently asked questions">
        <div className="section-inner faq-inner">
          <div className="section-header faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub">Quick answers about booking, delivery, and rentals.</p>
          </div>
          <div className="faq-list" role="list">
            {faqs.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section final-cta-section" aria-label="Book a rental car">
        <div className="section-inner final-cta-inner">
          <div className="final-cta-copy">
            <h2 className="final-cta-title">Ready to Rent in Dubai?</h2>
            <p className="final-cta-sub">Message us on WhatsApp and we'll get you sorted. Sedan, SUV, or budget. Daily, weekly, or monthly. We'll handle the rest.</p>
            <div className="final-cta-actions">
              <a className="primary-btn" href="https://wa.me/" aria-label="WhatsApp Royal Rides">
                <MessageCircle size={20} strokeWidth={2.2} />
                WhatsApp Now
              </a>
              <a className="secondary-btn" href="#fleet" aria-label="Browse rental cars">
                Browse Cars
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="section-inner footer-inner">
          <div className="footer-brand">
            <a className="brand footer-brand-link" href="/">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 74 34" role="img" aria-label="Royal Rides logo">
                  <path d="M17.7 9.7h30.6l8.2 8.6h7.1c4.3 0 7.8 3.4 7.8 7.7v2.3H60.2a8.9 8.9 0 0 0-17.5 0H29.4a8.9 8.9 0 0 0-17.5 0H2.8v-6.6c0-4 3.2-7.3 7.2-7.3h2.1l5.6-4.7Zm4.2 4.2-3.1 4.6h12.3v-4.6h-9.2Zm14.2 0v4.6h13.5l-4.4-4.6h-9.1Z" />
                  <circle cx="20.7" cy="29.1" r="5.4" />
                  <circle cx="51.5" cy="29.1" r="5.4" />
                </svg>
              </span>
              <span>Royal Rides</span>
            </a>
            <p className="footer-tagline">Affordable car rental in Dubai. Sedan, SUV, and budget cars with doorstep delivery and 24/7 support.</p>
            <a className="footer-wa" href="https://wa.me/" aria-label="WhatsApp Royal Rides">
              <MessageCircle size={18} strokeWidth={2.2} />
              WhatsApp Us
            </a>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#fleet">Fleet</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Car Types</h4>
              <a href="#fleet">Sedan Cars</a>
              <a href="#fleet">SUV Cars</a>
              <a href="#fleet">Budget Cars</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">Doorstep Delivery</a>
              <a href="#services">Airport Transfers</a>
              <a href="#services">Daily Rentals</a>
              <a href="#services">Weekly Rentals</a>
              <a href="#services">Monthly Rentals</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="section-inner footer-bottom-inner">
            <span>Dubai, UAE</span>
            <span>© {new Date().getFullYear()} Royal Rides Car Rental. All rights reserved.</span>
            <span className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </span>
          </div>
        </div>
      </footer>

    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

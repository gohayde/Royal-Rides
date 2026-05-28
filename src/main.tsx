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
  { label: "Pickup Location", value: "City, airport, hotel, or address", icon: MapPin },
  { label: "Pickup Date", value: "Select pickup date", icon: CalendarDays },
  { label: "Drop Off Date", value: "Select return date", icon: CalendarDays },
  { label: "Car Type", value: "Budget, sedan, or SUV", icon: Car },
];

const trustItems = [
  { icon: Truck, label: "Doorstep Delivery", sub: "Delivery listed on available cars" },
  { icon: Plane, label: "Airport Transfers", sub: "Pickup and drop off support" },
  { icon: Shield, label: "Insurance Included", sub: "Listed on vehicle rental cards" },
  { icon: Banknote, label: "Flexible Plans", sub: "Daily, weekly, and monthly" },
  { icon: CalendarCheck, label: "Min. Documents", sub: "Simple document requirements" },
];

const categories = [
  {
    slug: "sedan",
    title: "Sedan Cars",
    desc: "Comfortable cars for daily drives, business trips, and city travel in Dubai.",
    icon: Car,
    image: "/assets/categories/Sedan.png",
    tags: ["City drives", "Business travel", "Daily rentals"],
    cta: "View Sedans",
  },
  {
    slug: "suv",
    title: "SUV Cars",
    desc: "Spacious options for families, airport runs, and longer drives around Dubai.",
    icon: Users,
    image: "/assets/categories/SUV.png",
    tags: ["Family trips", "Airport pickup", "Group travel"],
    cta: "View SUVs",
  },
  {
    slug: "budget",
    title: "Budget Cars",
    desc: "Affordable rental cars for simple, reliable daily transport in Dubai.",
    icon: Banknote,
    image: "/assets/categories/Budget.png",
    tags: ["Low cost", "Weekly plans", "Monthly rentals"],
    cta: "View Budget Cars",
  },
];

const featuredCars = [
  {
    name: "Hyundai Accent 2025",
    category: "Sedan Car",
    badge: "Popular choice",
    image: "https://ik.imagekit.io/mpgev0ilfv/Hyundai_Accent_2023_21405_21405_1806002100-1_small.jpg_v=2.7?updatedAt=1737124510134",
    perDay: "AED 120",
    perWeek: "AED 700",
    perMonth: "AED 1,900",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "AC"],
  },
  {
    name: "Hyundai Elantra 2024",
    category: "Sedan Car",
    badge: "Popular choice",
    image: "https://ik.imagekit.io/mpgev0ilfv/Hyundai-Elantra-2024_33270_27680256424-1_small.jpg_v=2.7?updatedAt=1737123253557",
    perDay: "AED 150",
    perWeek: "AED 910",
    perMonth: "AED 2,500",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "Bluetooth"],
  },
  {
    name: "Mazda 3 2024",
    category: "Sedan Car",
    badge: "City favourite",
    image: "https://ik.imagekit.io/mpgev0ilfv/Mazda_3-Sedan_2024_29444_29444_2320958168-1_small.jpg_v=2.7?updatedAt=1737124512734",
    perDay: "AED 170",
    perWeek: "AED 1,050",
    perMonth: "AED 2,700",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "City-ready"],
  },
  {
    name: "Nissan Sunny 2023",
    category: "Budget Sedan",
    badge: "Affordable pick",
    image: "https://ik.imagekit.io/mpgev0ilfv/Nissan_Sunny_2023_21215_21215_17950356406-1_small.jpg_v=2.7?updatedAt=1737124507529",
    perDay: "AED 200",
    perWeek: "AED 1,200",
    perMonth: "AED 3,200",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "Comfort ride"],
  },
  {
    name: "KIA K5 2024",
    category: "Sedan Car",
    badge: "Business ready",
    image: "https://ik.imagekit.io/mpgev0ilfv/Kia_K5_2024_30340_30340_24268528171-1_small.jpg_v=2.7?updatedAt=1737124063429",
    perDay: "AED 180",
    perWeek: "AED 1,050",
    perMonth: "AED 3,495",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "Bluetooth"],
  },
  {
    name: "MG ZS 2024",
    category: "SUV Car",
    badge: "Family pick",
    image: "https://ik.imagekit.io/mpgev0ilfv/MG-ZS-2024_34101_28683585848-8_small.jpg_v=2.7?updatedAt=1737123672990",
    perDay: "AED 150",
    perWeek: "AED 910",
    perMonth: "AED 2,500",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "Spacious"],
  },
  {
    name: "KIA Sportage 2024",
    category: "SUV Car",
    badge: "Top SUV",
    image: "https://ik.imagekit.io/mpgev0ilfv/Kia-Sportage-2024_26910_24048896465-6_26910__small.jpg_v=2.7?updatedAt=1737124511221",
    perDay: "AED 180",
    perWeek: "AED 1,120",
    perMonth: "AED 4,000",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "Airport ready"],
  },
  {
    name: "Hyundai Creta 2023",
    category: "SUV Car",
    badge: "Popular SUV",
    image: "https://ik.imagekit.io/mpgev0ilfv/Hyundai_Creta-5-Seater_2023_20327_20327_12837474624-1_small.jpg_v=2.7?updatedAt=1737123674497",
    perDay: "AED 170",
    perWeek: "AED 1,050",
    perMonth: "AED 3,300",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "Comfortable"],
  },
  {
    name: "Mitsubishi ASX 2022",
    category: "SUV Car",
    badge: "Affordable SUV",
    image: "https://ik.imagekit.io/mpgev0ilfv/Mitsubishi_ASX_2022_11576_11576_3745728660-2_small.jpg_v=2.7?updatedAt=1737124064862",
    perDay: "AED 160",
    perWeek: "AED 980",
    perMonth: "AED 2,800",
    specs: [
      { icon: Users, value: "5 seats" },
      { icon: Fuel, value: "Petrol" },
      { icon: Settings2, value: "Automatic" },
    ],
    features: ["Insurance included", "Free delivery", "Min. documents", "Economical"],
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Car",
    desc: "Browse budget cars, sedans, and SUVs based on your trip and budget.",
  },
  {
    num: "02",
    title: "Send Your Dates",
    desc: "Share your pickup location, pickup date, return date, and preferred car type.",
  },
  {
    num: "03",
    title: "Confirm Availability",
    desc: "The team confirms car availability, rental plan, documents, and delivery options.",
  },
  {
    num: "04",
    title: "Start Your Rental",
    desc: "Complete the booking steps and receive the car at the agreed location.",
  },
];

const plans = [
  {
    period: "Daily",
    best: "Short errands, quick trips, and one-day travel needs",
    perks: [
      "Single-day or multi-day booking",
      "Airport pickup available",
      "Quick WhatsApp confirmation",
      "Budget, sedan, and SUV options",
    ],
    highlight: false,
  },
  {
    period: "Weekly",
    best: "Tourists, short-stay visitors, and temporary work schedules",
    perks: [
      "7-day rental with consistent rate",
      "Doorstep delivery listed on cars",
      "Confirm terms via WhatsApp",
      "All car categories available",
    ],
    highlight: true,
  },
  {
    period: "Monthly",
    best: "Residents, business use, and longer stays in Dubai",
    perks: [
      "Best value per day",
      "Flexible monthly terms",
      "Renewal via WhatsApp",
      "Sedan, SUV, and budget cars",
    ],
    highlight: false,
  },
];

const reviews = [
  {
    name: "Junaid Ghani",
    context: "Royal Rides customer",
    text: "Our rent a car experience with Royal Rides Car Rental Dubai was very good. New model cars and driver service appreciated.",
  },
  {
    name: "Yasir Arafat",
    context: "Royal Rides customer",
    text: "Very good experience with Royal Rides Car Rental Dubai. New model cars, good service, and easy to deal with.",
  },
  {
    name: "Dubai Resident",
    context: "Monthly rental customer",
    text: "Renting monthly with Royal Rides is straightforward. Quick replies via WhatsApp and clear rental terms every time.",
  },
];

const faqs = [
  {
    q: "What types of cars can I rent from Royal Rides?",
    a: "Royal Rides offers budget cars, sedan cars, and SUV cars for rental in Dubai. The fleet includes models from KIA, Hyundai, Mazda, MG, Nissan, and more.",
  },
  {
    q: "Can I rent a car daily, weekly, or monthly?",
    a: "Yes. The listed cars include daily, weekly, and monthly rental pricing options. Monthly plans typically offer the best value per day.",
  },
  {
    q: "How do I check if a car is available?",
    a: "Send your preferred car, pickup location, pickup date, and return date through WhatsApp at +971 56 361 9373 or use the booking form above.",
  },
  {
    q: "Do you offer doorstep delivery?",
    a: "Free delivery is mentioned on the listed vehicle cards. Confirm availability and your delivery location with the team before booking.",
  },
  {
    q: "Are airport transfers available?",
    a: "Airport transfer support is available. Message Royal Rides on WhatsApp to confirm timing, pickup location, and availability for your flight.",
  },
  {
    q: "Is insurance included?",
    a: "Insurance included is listed on the vehicle rental cards. Ask the team to confirm the exact rental terms for your specific booking.",
  },
  {
    q: "What documents are required to rent a car?",
    a: "The website mentions minimum documents required. Contact Royal Rides directly at +971 56 361 9373 for the exact documents needed for your rental.",
  },
  {
    q: "How can I contact Royal Rides?",
    a: "Call or WhatsApp Royal Rides at +971 56 361 9373. You can also email royalridescarrental@gmail.com. The team is available from 09:00 to 22:00, Monday to Sunday.",
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
            <a href="#fleet">Cars</a>
            <a href="#plans">Rental Plans</a>
            <a href="#delivery">Airport Transfers</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="call-btn" href="tel:+971563619373" aria-label="Call Royal Rides">
              <Phone size={21} strokeWidth={2.6} />
              <span>Call</span>
            </a>
            <a className="book-btn" href="https://wa.me/971563619373" aria-label="Book Royal Rides on WhatsApp">
              Book Now
            </a>
          </div>
        </header>

        <div className="hero-copy">
          <span className="hero-eyebrow">Car rental in Dubai</span>
          <h1>
            <span>Affordable</span>
            <span className="accent">Car Rental</span>
            <span>in Dubai</span>
          </h1>
          <p>
            Choose from budget cars, sedans, and SUVs with daily, weekly, and monthly
            rental options. Simple booking via WhatsApp.
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
            <span className="eyebrow">Choose your car type</span>
            <h2 className="section-title">What Type of Car Are You Looking For?</h2>
            <p className="section-sub">Pick a category and check cars that fit your trip, budget, and rental duration.</p>
          </div>
          <div className="cat-grid">
            {categories.map(({ slug, title, desc, image, tags, cta }) => (
              <article className="cat-card" key={slug}>
                <div className="cat-img-wrap">
                  <img src={image} alt={`${title} rental in Dubai`} loading="lazy" />
                </div>
                <h3 className="cat-title">{title}</h3>
                <p className="cat-desc">{desc}</p>
                <ul className="cat-tags" aria-label="Category highlights">
                  {tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <a className="cat-cta" href="https://wa.me/971563619373" aria-label={`View ${title}`}>
                  {cta}
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
            <span className="eyebrow">Featured rentals</span>
            <h2 className="section-title">Find Your Best Car Here</h2>
            <p className="section-sub">Browse popular cars available for daily, weekly, and monthly rental in Dubai.</p>
          </div>
          <div className="fleet-grid">
            {featuredCars.map(({ name, category, badge, image, perDay, perWeek, perMonth, specs, features }) => (
              <article className="fleet-card" key={name}>
                <div className="fleet-card-top">
                  <div className="fleet-img-slot" aria-label={`${name} rental car in Dubai`}>
                    <img src={image} alt={`${name} rental car Dubai`} loading="lazy" />
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
                  <div className="fleet-pricing" aria-label="Rental pricing">
                    <span><strong>{perDay}</strong> / day</span>
                    <span><strong>{perWeek}</strong> / week</span>
                    <span><strong>{perMonth}</strong> / month</span>
                  </div>
                  <ul className="fleet-features" aria-label="Car features">
                    {features.map((f) => (
                      <li key={f}>
                        <CheckCircle2 size={14} strokeWidth={2.2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="fleet-actions">
                    <a className="fleet-cta" href="https://wa.me/971563619373" aria-label={`WhatsApp about ${name}`}>
                      WhatsApp
                    </a>
                    <a className="fleet-cta-secondary" href="tel:+971563619373" aria-label={`Call about ${name}`}>
                      Call Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY & AIRPORT ───────────────────────────────────── */}
      <section className="section delivery-section" id="delivery" aria-label="Doorstep delivery and airport transfers">
        <div className="section-inner delivery-inner">
          <div className="delivery-copy">
            <span className="eyebrow">Easy pickup and delivery</span>
            <h2 className="section-title">Car Rental Made Simple Across Dubai</h2>
            <p className="delivery-body">
              Need the car at your hotel, home, office, or airport? Message Royal Rides to check delivery and pickup options for your booking.
            </p>
            <ul className="delivery-list" role="list">
              {[
                { icon: Truck, text: "Request delivery to your preferred Dubai location" },
                { icon: Plane, text: "Airport pickup or drop off support available" },
                { icon: Building2, text: "Hotel and serviced apartment delivery on request" },
                { icon: MessageCircle, text: "Confirm everything directly via WhatsApp" },
              ].map(({ icon: Icon, text }) => (
                <li key={text}>
                  <span className="delivery-icon" aria-hidden="true"><Icon size={18} strokeWidth={2} /></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <a className="primary-btn" href="https://wa.me/971563619373" aria-label="Ask about delivery on WhatsApp">
              <MessageCircle size={20} strokeWidth={2.2} />
              Ask on WhatsApp
            </a>
          </div>
          <div className="delivery-cards" aria-hidden="true">
            <div className="delivery-card dc-main">
              <div className="dc-icon"><Truck size={28} strokeWidth={1.9} /></div>
              <strong>Doorstep Delivery</strong>
              <span>Request car delivery to your Dubai location, subject to availability.</span>
            </div>
            <div className="delivery-card dc-alt">
              <div className="dc-icon"><Plane size={28} strokeWidth={1.9} /></div>
              <strong>Airport Transfer Support</strong>
              <span>Arrange airport pickup or drop off for a smoother arrival.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RENTAL PROCESS ───────────────────────────────────────── */}
      <section className="section process-section" aria-label="How to rent a car from Royal Rides">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">A Simple Way to Rent Your Car</h2>
            <p className="section-sub">Choose your car, share your details, confirm availability, and get ready for your rental.</p>
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
      <section className="section plans-section" id="plans" aria-label="Rental plans">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Rental plans</span>
            <h2 className="section-title">Daily, Weekly, and Monthly Car Rentals</h2>
            <p className="section-sub">Pick a rental duration that fits your stay, routine, or business travel needs in Dubai.</p>
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
                <a className={`plan-cta${highlight ? " plan-cta-primary" : ""}`} href="https://wa.me/971563619373" aria-label={`WhatsApp about ${period} rental`}>
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
            <p className="section-sub">Feedback shared by customers who have rented with Royal Rides Car Rental Dubai.</p>
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
            <p className="section-sub">Quick answers before you book your rental car in Dubai.</p>
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
            <h2 className="final-cta-title">Need a Rental Car in Dubai?</h2>
            <p className="final-cta-sub">Message Royal Rides with your dates, pickup location, and preferred car type. The team will help you check availability and rental options.</p>
            <p className="final-cta-trust">Budget cars, sedans, and SUVs available with daily, weekly, and monthly plans.</p>
            <div className="final-cta-actions">
              <a className="primary-btn" href="https://wa.me/971563619373" aria-label="WhatsApp Royal Rides">
                <MessageCircle size={20} strokeWidth={2.2} />
                WhatsApp Now
              </a>
              <a className="secondary-btn" href="tel:+971563619373" aria-label="Call Royal Rides">
                Call Now
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
            <p className="footer-tagline">Affordable car rental in Dubai with budget cars, sedans, SUVs, and flexible daily, weekly, and monthly rental options.</p>
            <a className="footer-wa" href="https://wa.me/971563619373" aria-label="WhatsApp Royal Rides">
              <MessageCircle size={18} strokeWidth={2.2} />
              WhatsApp Now
            </a>
            <a className="footer-phone" href="tel:+971563619373" aria-label="Call Royal Rides">
              <Phone size={18} strokeWidth={2.2} />
              +971 56 361 9373
            </a>
            <a className="footer-email" href="mailto:royalridescarrental@gmail.com" aria-label="Email Royal Rides">
              royalridescarrental@gmail.com
            </a>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#fleet">Cars</a>
              <a href="#plans">Rental Plans</a>
              <a href="#delivery">Airport Transfers</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="footer-col">
              <h4>Car Types</h4>
              <a href="#fleet">Sedan Car Rental</a>
              <a href="#fleet">SUV Car Rental</a>
              <a href="#fleet">Budget Car Rental</a>
            </div>
            <div className="footer-col">
              <h4>Rental Plans</h4>
              <a href="#plans">Daily Car Rental</a>
              <a href="#plans">Weekly Car Rental</a>
              <a href="#plans">Monthly Car Rental</a>
              <a href="#delivery">Doorstep Delivery</a>
              <a href="#delivery">Airport Transfers</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="section-inner footer-bottom-inner">
            <span>Al Karama, Dubai, UAE · Mon–Sun 09:00–22:00</span>
            <span>© {new Date().getFullYear()} Royal Rides Car Rental Dubai. All rights reserved.</span>
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

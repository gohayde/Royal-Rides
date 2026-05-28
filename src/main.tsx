import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  Building2,
  CalendarDays,
  Car,
  ChevronDown,
  MapPin,
  Phone,
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
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

/* ── Easing curves ──────────────────────────────────────────── */
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

/* ── Reduced-motion aware scroll reveal hook ────────────────── */
function useScrollReveal(selector: string) {
  const prefersReduced = useReducedMotion();
  useEffect(() => {
    if (prefersReduced) return;
    const elements = gsap.utils.toArray<Element>(selector);
    if (!elements.length) return;
    const triggers = elements.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      )
    );
    return () => {
      triggers.forEach((t) => (t.scrollTrigger?.kill(), t.kill()));
    };
  }, [selector, prefersReduced]);
}

/* ── Staggered grid reveal hook ─────────────────────────────── */
function useStaggerReveal(containerSelector: string, childSelector: string, stagger = 0.09) {
  const prefersReduced = useReducedMotion();
  useEffect(() => {
    if (prefersReduced) return;
    const containers = gsap.utils.toArray<Element>(containerSelector);
    if (!containers.length) return;
    const anims: gsap.core.Tween[] = [];
    containers.forEach((container) => {
      const children = container.querySelectorAll(childSelector);
      if (!children.length) return;
      const tween = gsap.fromTo(
        children,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
      anims.push(tween);
    });
    return () => {
      anims.forEach((a) => (a.scrollTrigger?.kill(), a.kill()));
    };
  }, [containerSelector, childSelector, stagger, prefersReduced]);
}

const WA = "https://wa.me/971563619373";
const TEL = "tel:+971563619373";
const PHONE = "+971 56 361 9373";

const trustItems = [
  { icon: Truck, label: "Doorstep Delivery", sub: "Across Dubai", color: "accent" },
  { icon: Plane, label: "Airport Transfers", sub: "Pickup and drop off", color: "amber" },
  { icon: Shield, label: "Insurance Included", sub: "On listed vehicles", color: "accent" },
  { icon: Banknote, label: "Flexible Plans", sub: "Daily, weekly, monthly", color: "amber" },
  { icon: CalendarCheck, label: "Min. Documents", sub: "Simple requirements", color: "accent" },
];

const categories = [
  {
    slug: "sedan",
    title: "Sedan Cars",
    desc: "Comfortable cars for daily drives, business trips, and city travel in Dubai.",
    image: "/assets/categories/Sedan.png",
    tags: ["City drives", "Business travel", "Daily rentals"],
    cta: "View Sedans",
  },
  {
    slug: "suv",
    title: "SUV Cars",
    desc: "Spacious options for families, airport runs, and longer drives around Dubai.",
    image: "/assets/categories/SUV.png",
    tags: ["Family trips", "Airport pickup", "Group travel"],
    cta: "View SUVs",
  },
  {
    slug: "budget",
    title: "Budget Cars",
    desc: "Affordable rental cars for simple, reliable daily transport in Dubai.",
    image: "/assets/categories/Budget.png",
    tags: ["Low cost", "Weekly plans", "Monthly rentals"],
    cta: "View Budget Cars",
  },
];

const featuredCars = [
  {
    name: "Hyundai Accent 2025",
    category: "Sedan",
    badge: "Popular choice",
    image: "https://ik.imagekit.io/mpgev0ilfv/Hyundai_Accent_2023_21405_21405_1806002100-1_small.jpg_v=2.7?updatedAt=1737124510134",
    perDay: "AED 120",
    perWeek: "AED 700",
    perMonth: "AED 1,900",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "AC"],
  },
  {
    name: "KIA Sportage 2024",
    category: "SUV",
    badge: "Top SUV",
    image: "https://ik.imagekit.io/mpgev0ilfv/Kia-Sportage-2024_26910_24048896465-6_26910__small.jpg_v=2.7?updatedAt=1737124511221",
    perDay: "AED 180",
    perWeek: "AED 1,120",
    perMonth: "AED 4,000",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "Airport ready"],
  },
  {
    name: "Hyundai Elantra 2024",
    category: "Sedan",
    badge: "Popular choice",
    image: "https://ik.imagekit.io/mpgev0ilfv/Hyundai-Elantra-2024_33270_27680256424-1_small.jpg_v=2.7?updatedAt=1737123253557",
    perDay: "AED 150",
    perWeek: "AED 910",
    perMonth: "AED 2,500",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "Bluetooth"],
  },
  {
    name: "Mazda 3 2024",
    category: "Sedan",
    badge: "City favourite",
    image: "https://ik.imagekit.io/mpgev0ilfv/Mazda_3-Sedan_2024_29444_29444_2320958168-1_small.jpg_v=2.7?updatedAt=1737124512734",
    perDay: "AED 170",
    perWeek: "AED 1,050",
    perMonth: "AED 2,700",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "City-ready"],
  },
  {
    name: "MG ZS 2024",
    category: "SUV",
    badge: "Family pick",
    image: "https://ik.imagekit.io/mpgev0ilfv/MG-ZS-2024_34101_28683585848-8_small.jpg_v=2.7?updatedAt=1737123672990",
    perDay: "AED 150",
    perWeek: "AED 910",
    perMonth: "AED 2,500",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "Spacious"],
  },
  {
    name: "KIA K5 2024",
    category: "Sedan",
    badge: "Business ready",
    image: "https://ik.imagekit.io/mpgev0ilfv/Kia_K5_2024_30340_30340_24268528171-1_small.jpg_v=2.7?updatedAt=1737124063429",
    perDay: "AED 180",
    perWeek: "AED 1,050",
    perMonth: "AED 3,495",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "Bluetooth"],
  },
  {
    name: "Nissan Sunny 2023",
    category: "Budget",
    badge: "Affordable pick",
    image: "https://ik.imagekit.io/mpgev0ilfv/Nissan_Sunny_2023_21215_21215_17950356406-1_small.jpg_v=2.7?updatedAt=1737124507529",
    perDay: "AED 100",
    perWeek: "AED 600",
    perMonth: "AED 1,600",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "Comfort ride"],
  },
  {
    name: "Hyundai Creta 2023",
    category: "SUV",
    badge: "Popular SUV",
    image: "https://ik.imagekit.io/mpgev0ilfv/Hyundai_Creta-5-Seater_2023_20327_20327_12837474624-1_small.jpg_v=2.7?updatedAt=1737123674497",
    perDay: "AED 170",
    perWeek: "AED 1,050",
    perMonth: "AED 3,300",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "Comfortable"],
  },
  {
    name: "Mitsubishi ASX 2022",
    category: "SUV",
    badge: "Affordable SUV",
    image: "https://ik.imagekit.io/mpgev0ilfv/Mitsubishi_ASX_2022_11576_11576_3745728660-2_small.jpg_v=2.7?updatedAt=1737124064862",
    perDay: "AED 160",
    perWeek: "AED 980",
    perMonth: "AED 2,800",
    specs: [{ icon: Users, value: "5 seats" }, { icon: Fuel, value: "Petrol" }, { icon: Settings2, value: "Auto" }],
    features: ["Insurance included", "Free delivery", "Min. documents", "Economical"],
  },
];

const TABS = ["All", "Sedan", "SUV", "Budget"] as const;
type Tab = typeof TABS[number];

const steps = [
  { num: "01", title: "Choose Your Car", desc: "Browse budget cars, sedans, and SUVs based on your trip and budget." },
  { num: "02", title: "Send Your Dates", desc: "Share your pickup location, pickup date, return date, and preferred car type." },
  { num: "03", title: "Confirm Availability", desc: "The team confirms car availability, rental plan, documents, and delivery options." },
  { num: "04", title: "Start Your Rental", desc: "Complete the booking steps and receive the car at the agreed location." },
];

const plans = [
  {
    period: "Daily",
    best: "Short errands, quick trips, and one-day travel needs",
    perks: ["Single-day or multi-day booking", "Airport pickup available", "Quick WhatsApp confirmation", "Budget, sedan, and SUV options"],
    highlight: false,
  },
  {
    period: "Weekly",
    best: "Tourists, short-stay visitors, and temporary work schedules",
    perks: ["7-day rental with consistent rate", "Doorstep delivery on listed cars", "Confirm terms via WhatsApp", "All car categories available"],
    highlight: true,
  },
  {
    period: "Monthly",
    best: "Residents, business use, and longer stays in Dubai",
    perks: ["Best value per day", "Flexible monthly terms", "Renewal via WhatsApp", "Sedan, SUV, and budget cars"],
    highlight: false,
  },
];

const reviews = [
  {
    name: "Junaid G.",
    context: "Sedan rental, Dubai",
    text: "Our rent a car experience with Royal Rides was very good. New model cars and the service was appreciated.",
  },
  {
    name: "Yasir A.",
    context: "SUV rental, Dubai Marina",
    text: "Very good experience with Royal Rides. New model cars, good service, and easy to deal with every step.",
  },
  {
    name: "Monthly customer",
    context: "Long-term rental, Al Karama",
    text: "Renting monthly with Royal Rides is straightforward. Quick replies on WhatsApp and clear rental terms every time.",
  },
];

const faqs = [
  { q: "What types of cars can I rent?", a: "Royal Rides offers budget cars, sedan cars, and SUV cars for rental in Dubai. The fleet includes models from KIA, Hyundai, Mazda, MG, Nissan, and more." },
  { q: "Can I rent daily, weekly, or monthly?", a: "Yes. Listed cars include daily, weekly, and monthly rental pricing. Monthly plans typically offer the best value per day." },
  { q: "How do I check if a car is available?", a: "Send your preferred car, pickup location, pickup date, and return date through WhatsApp at +971 56 361 9373 or use the booking form above." },
  { q: "Do you offer doorstep delivery?", a: "Free delivery is listed on vehicle cards. Confirm availability and your delivery location with the team before booking." },
  { q: "Are airport transfers available?", a: "Airport transfer support is available. Message Royal Rides on WhatsApp to confirm timing, pickup location, and availability for your flight." },
  { q: "Is insurance included?", a: "Insurance included is listed on vehicle rental cards. Ask the team to confirm exact rental terms for your specific booking." },
  { q: "What documents are required?", a: "Contact Royal Rides at +971 56 361 9373 for the exact documents needed for your rental. Requirements are minimal." },
  { q: "How can I contact Royal Rides?", a: "Call or WhatsApp Royal Rides at +971 56 361 9373. Email: royalridescarrental@gmail.com. Available Mon–Sun, 09:00–22:00." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT_QUART }}
          style={{ display: "flex", flexShrink: 0 }}
        >
          <ChevronDown size={20} strokeWidth={2.2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
            style={{ overflow: "hidden" }}
          >
            <p className="faq-a">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BookingForm() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [carType, setCarType] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [
      "Hi Royal Rides, I'd like to check availability.",
      location ? `Pickup location: ${location}` : "",
      pickupDate ? `Pickup date: ${pickupDate}` : "",
      returnDate ? `Return date: ${returnDate}` : "",
      carType ? `Car type: ${carType}` : "",
    ].filter(Boolean);
    const msg = encodeURIComponent(parts.join("\n"));
    window.open(`https://wa.me/971563619373?text=${msg}`, "_blank");
  }

  return (
    <form className="booking-bar" onSubmit={handleSubmit} aria-label="Quick rental inquiry">
      <div className="booking-field">
        <label className="booking-label" htmlFor="bb-location">
          <MapPin size={15} strokeWidth={2.4} aria-hidden="true" />
          Pickup Location
        </label>
        <input
          id="bb-location"
          className="booking-input"
          type="text"
          placeholder="City, hotel, airport…"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="booking-field">
        <label className="booking-label" htmlFor="bb-pickup">
          <CalendarDays size={15} strokeWidth={2.4} aria-hidden="true" />
          Pickup Date
        </label>
        <input
          id="bb-pickup"
          className="booking-input"
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </div>
      <div className="booking-field">
        <label className="booking-label" htmlFor="bb-return">
          <CalendarDays size={15} strokeWidth={2.4} aria-hidden="true" />
          Return Date
        </label>
        <input
          id="bb-return"
          className="booking-input"
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <div className="booking-field">
        <label className="booking-label" htmlFor="bb-type">
          <Car size={15} strokeWidth={2.4} aria-hidden="true" />
          Car Type
        </label>
        <select id="bb-type" className="booking-input booking-select" value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="">Any type</option>
          <option value="Budget car">Budget car</option>
          <option value="Sedan car">Sedan car</option>
          <option value="SUV">SUV</option>
        </select>
      </div>
      <button className="search-btn" type="submit" aria-label="Send inquiry on WhatsApp">
        <MessageCircle size={28} strokeWidth={2.4} />
        <span>Check on WhatsApp</span>
      </button>
    </form>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="mobile-menu-panel">
        <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <X size={24} strokeWidth={2.2} />
        </button>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#home" onClick={onClose}>Home</a>
          <a href="#fleet" onClick={onClose}>Cars</a>
          <a href="#plans" onClick={onClose}>Rental Plans</a>
          <a href="#delivery" onClick={onClose}>Airport Transfers</a>
          <a href="#contact" onClick={onClose}>Contact</a>
        </nav>
        <div className="mobile-menu-actions">
          <a className="primary-btn" href={WA} onClick={onClose}>
            <MessageCircle size={18} strokeWidth={2.2} />
            WhatsApp Now
          </a>
          <a className="secondary-btn" href={TEL} onClick={onClose}>
            <Phone size={18} strokeWidth={2.2} />
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

function FleetSection() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const prefersReduced = useReducedMotion();
  const visible = activeTab === "All" ? featuredCars : featuredCars.filter((c) => c.category === activeTab);
  const hero = visible.slice(0, 2);
  const grid = visible.slice(2);

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.06, ease: EASE_OUT_QUART as [number, number, number, number] },
    }),
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <section className="section fleet-section" id="fleet" aria-label="Featured rental cars">
      <div className="section-inner">
        <div className="fleet-header-row reveal-section">
          <div className="section-header">
            <span className="eyebrow">Featured rentals</span>
            <h2 className="section-title">Find Your Best Car Here</h2>
            <p className="section-sub">Browse popular cars for daily, weekly, and monthly rental in Dubai.</p>
          </div>
          <div className="fleet-tabs" role="tablist" aria-label="Filter by car type">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={activeTab === t}
                className={`fleet-tab${activeTab === t ? " fleet-tab-active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab}>
            {hero.length > 0 && (
              <div className="fleet-hero-row">
                {hero.map(({ name, category, badge, image, perDay, perWeek, perMonth, specs, features }, i) => (
                  <motion.article
                    className="fleet-card fleet-card-hero"
                    key={name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="fleet-hero-img">
                      <img src={image} alt={`${name} rental car Dubai`} loading="lazy" />
                      <div className="fleet-hero-badges">
                        <span className="fleet-badge">{badge}</span>
                        <span className="fleet-cat-pill">{category}</span>
                      </div>
                    </div>
                    <div className="fleet-card-body">
                      <h3 className="fleet-name">{name}</h3>
                      <ul className="fleet-specs" aria-label="Car specs">
                        {specs.map(({ icon: Icon, value }) => (
                          <li key={value}><Icon size={14} strokeWidth={2} /><span>{value}</span></li>
                        ))}
                      </ul>
                      <div className="fleet-pricing-row" aria-label="Rental pricing">
                        <div className="fleet-price-cell">
                          <span className="fleet-price-val">{perDay}</span>
                          <span className="fleet-price-label">per day</span>
                        </div>
                        <div className="fleet-price-cell">
                          <span className="fleet-price-val">{perWeek}</span>
                          <span className="fleet-price-label">per week</span>
                        </div>
                        <div className="fleet-price-cell">
                          <span className="fleet-price-val">{perMonth}</span>
                          <span className="fleet-price-label">per month</span>
                        </div>
                      </div>
                      <ul className="fleet-features" aria-label="Car features">
                        {features.map((f) => (
                          <li key={f}><CheckCircle2 size={14} strokeWidth={2.2} />{f}</li>
                        ))}
                      </ul>
                      <div className="fleet-actions">
                        <a className="fleet-cta" href={WA} aria-label={`WhatsApp about ${name}`}>
                          <MessageCircle size={16} strokeWidth={2.2} />
                          WhatsApp
                        </a>
                        <a className="fleet-cta-secondary" href={TEL} aria-label={`Call about ${name}`}>Call Now</a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {grid.length > 0 && (
              <div className="fleet-grid">
                {grid.map(({ name, category, badge, image, perDay, specs, features }, i) => (
                  <motion.article
                    className="fleet-card"
                    key={name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="fleet-img-slot">
                      <img src={image} alt={`${name} rental car Dubai`} loading="lazy" />
                      <span className="fleet-badge fleet-badge-overlay">{badge}</span>
                    </div>
                    <div className="fleet-card-body">
                      <div className="fleet-meta">
                        <span className="fleet-cat" data-cat={category}>{category}</span>
                        <span className="fleet-price-inline">{perDay}<em>/day</em></span>
                      </div>
                      <h3 className="fleet-name">{name}</h3>
                      <ul className="fleet-specs" aria-label="Car specs">
                        {specs.map(({ icon: Icon, value }) => (
                          <li key={value}><Icon size={13} strokeWidth={2} /><span>{value}</span></li>
                        ))}
                      </ul>
                      <div className="fleet-actions">
                        <a className="fleet-cta" href={WA} aria-label={`WhatsApp about ${name}`}>
                          <MessageCircle size={15} strokeWidth={2.2} />
                          WhatsApp
                        </a>
                        <a className="fleet-cta-secondary" href={TEL} aria-label={`Call about ${name}`}>Call</a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {visible.length === 0 && (
              <motion.p
                className="fleet-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                No cars in this category yet. <a href={WA}>Ask on WhatsApp.</a>
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  /* ── Lenis smooth scroll ──────────────────────────────────── */
  useEffect(() => {
    if (prefersReduced) return;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    const id = requestAnimationFrame(raf);
    gsap.ticker.lagSmoothing(0);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, [prefersReduced]);

  /* ── GSAP scroll reveals ──────────────────────────────────── */
  useScrollReveal(".reveal-section");
  useStaggerReveal(".cat-grid", ".cat-card");
  useStaggerReveal(".delivery-cards", ".delivery-card");
  useStaggerReveal(".process-list", ".process-step");
  useStaggerReveal(".plans-grid", ".plan-card");
  useStaggerReveal(".reviews-grid", ".review-card");
  useStaggerReveal(".trust-list", ".trust-item");
  useStaggerReveal(".faq-list", ".faq-item");

  /* ── Hero entrance variants ───────────────────────────────── */
  const heroCopyVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const heroLine = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT_EXPO } },
  };
  const heroFade = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_QUART } },
  };
  const trustListVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
  };
  const trustItem = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT_QUART } },
  };

  return (
    <main className="site-shell" id="home">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Royal Rides car rental">
        <div className="hero-bg" aria-hidden="true" />
        <motion.header
          className="nav-card"
          aria-label="Primary navigation"
          initial={{ opacity: 0, y: prefersReduced ? 0 : -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
        >
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
            <a href="#delivery">Transfers</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="call-btn" href={TEL} aria-label="Call Royal Rides">
              <Phone size={20} strokeWidth={2.5} />
              <span>Call</span>
            </a>
            <a className="book-btn" href={WA} aria-label="WhatsApp Royal Rides">
              <MessageCircle size={18} strokeWidth={2.4} />
              WhatsApp
            </a>
            <button className="hamburger-btn" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu" aria-expanded={menuOpen}>
              <Menu size={22} strokeWidth={2.2} />
            </button>
          </div>
        </motion.header>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <motion.div
          className="hero-copy"
          variants={heroCopyVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-eyebrow" variants={heroLine}>Car rental in Dubai</motion.span>
          <h1>
            <motion.span variants={heroLine}>Affordable</motion.span>
            <motion.span className="accent" variants={heroLine}>Car Rental</motion.span>
            <motion.span variants={heroLine}>in Dubai</motion.span>
          </h1>
          <motion.p variants={heroFade}>
            Budget cars, sedans, and SUVs with doorstep delivery, airport transfers, and flexible daily, weekly, and monthly plans.
          </motion.p>
          <motion.div className="hero-actions" variants={heroFade}>
            <a className="book-btn hero-wa-btn" href={WA} aria-label="WhatsApp Royal Rides now">
              <MessageCircle size={20} strokeWidth={2.3} />
              WhatsApp Now
            </a>
            <a className="secondary-btn hero-browse-btn" href="#fleet">
              Browse Cars
              <ArrowRight size={17} strokeWidth={2.3} />
            </a>
          </motion.div>
          <motion.ul className="hero-trust" aria-label="Trust points" variants={trustListVariants}>
            {["Daily, weekly & monthly rentals", "Doorstep delivery across Dubai", "Airport transfers available", "Transparent pricing"].map((t) => (
              <motion.li key={t} variants={trustItem}>
                <CheckCircle2 size={15} strokeWidth={2.3} aria-hidden="true" />
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: EASE_OUT_EXPO }}
        >
          <BookingForm />
        </motion.div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────── */}
      <section className="trust-bar" aria-label="Why choose Royal Rides">
        <div className="section-inner">
          <ul className="trust-list" role="list">
            {trustItems.map(({ icon: Icon, label, sub, color }) => (
              <li className="trust-item" key={label}>
                <span className={`trust-icon trust-icon--${color}`} aria-hidden="true"><Icon size={22} strokeWidth={2.2} /></span>
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
      <section className="section categories-section" aria-label="Car categories">
        <div className="section-inner">
          <div className="section-header reveal-section">
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
                <div className="cat-body">
                  <h3 className="cat-title">{title}</h3>
                  <p className="cat-desc">{desc}</p>
                  <ul className="cat-tags" aria-label="Category highlights">
                    {tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <a className="cat-cta" href={WA} aria-label={`View ${title}`}>
                    {cta}
                    <ArrowRight size={14} strokeWidth={2.3} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CARS ────────────────────────────────────────── */}
      <FleetSection />

      {/* ── DELIVERY & AIRPORT ───────────────────────────────────── */}
      <section className="section delivery-section" id="delivery" aria-label="Doorstep delivery and airport transfers">
        <div className="section-inner delivery-inner">
          <div className="delivery-copy reveal-section">
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
            <a className="primary-btn" href={WA} aria-label="Ask about delivery on WhatsApp">
              <MessageCircle size={20} strokeWidth={2.2} />
              Ask on WhatsApp
            </a>
          </div>
          <div className="delivery-cards">
            <div className="delivery-card delivery-card-accent">
              <div className="dc-icon"><Truck size={28} strokeWidth={1.9} /></div>
              <strong>Doorstep Delivery</strong>
              <span>Request car delivery to your Dubai location, subject to availability.</span>
            </div>
            <div className="delivery-card">
              <div className="dc-icon"><Plane size={28} strokeWidth={1.9} /></div>
              <strong>Airport Transfer Support</strong>
              <span>Arrange airport pickup or drop off for a smoother arrival.</span>
            </div>
            <div className="delivery-card delivery-card-hours">
              <div className="dc-icon"><Clock size={28} strokeWidth={1.9} /></div>
              <strong>Available Mon–Sun</strong>
              <span>Team available 09:00–22:00. Most bookings confirmed within 10 minutes on WhatsApp.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RENTAL PROCESS ───────────────────────────────────────── */}
      <section className="section process-section" aria-label="How to rent a car from Royal Rides">
        <div className="section-inner">
          <div className="section-header centered reveal-section">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">Four Steps to Your Rental</h2>
            <p className="section-sub">Choose your car, share your details, confirm availability, and get ready to drive.</p>
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
          <div className="section-header centered reveal-section">
            <span className="eyebrow">Rental plans</span>
            <h2 className="section-title">Daily, Weekly, and Monthly Rentals</h2>
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
                    <li key={p}><CheckCircle2 size={16} strokeWidth={2.2} />{p}</li>
                  ))}
                </ul>
                <a className={`plan-cta${highlight ? " plan-cta-primary" : ""}`} href={WA} aria-label={`WhatsApp about ${period} rental`}>
                  <MessageCircle size={17} strokeWidth={2.2} />
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
          <div className="section-header reveal-section">
            <span className="eyebrow">What customers say</span>
            <h2 className="section-title">Feedback from Royal Rides Customers</h2>
            <p className="section-sub">Shared by customers who have rented with Royal Rides Car Rental Dubai.</p>
          </div>
          <div className="reviews-layout">
            <div className="reviews-stat-block reveal-section">
              <div className="reviews-big-rating">5.0</div>
              <div className="reviews-stars-row" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={22} strokeWidth={0} fill="currentColor" aria-hidden="true" />)}
              </div>
              <p className="reviews-stat-label">Customer rating</p>
              <a className="primary-btn reviews-cta" href={WA}>
                <MessageCircle size={18} strokeWidth={2.2} />
                Book Now
              </a>
            </div>
            <div className="reviews-grid">
              {reviews.map(({ name, context, text }) => (
                <article className="review-card" key={name}>
                  <div className="review-stars" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} strokeWidth={0} fill="currentColor" aria-hidden="true" />)}
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
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section faq-section" aria-label="Frequently asked questions">
        <div className="section-inner faq-inner">
          <div className="section-header faq-header reveal-section">
            <span className="eyebrow">Questions answered</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub">Quick answers before you book your rental car in Dubai.</p>
          </div>
          <div className="faq-list" role="list">
            {faqs.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section final-cta-section" id="contact" aria-label="Book a rental car">
        <div className="section-inner">
          <div className="final-cta-inner">
            <div className="final-cta-copy reveal-section">
              <span className="eyebrow">Ready to book?</span>
              <h2 className="final-cta-title">Need a Rental Car in Dubai?</h2>
              <p className="final-cta-sub">Send your dates, pickup location, and preferred car type on WhatsApp. Most bookings are confirmed within 10 minutes.</p>
              <div className="final-cta-contact-row">
                <a href={TEL} className="final-cta-contact-item">
                  <Phone size={17} strokeWidth={2.3} />
                  {PHONE}
                </a>
                <span className="final-cta-contact-sep" aria-hidden="true">·</span>
                <span className="final-cta-contact-item">
                  <Clock size={17} strokeWidth={2.3} />
                  Mon–Sun 09:00–22:00
                </span>
              </div>
              <div className="final-cta-actions">
                <a className="primary-btn final-wa-btn" href={WA} aria-label="WhatsApp Royal Rides">
                  <MessageCircle size={20} strokeWidth={2.2} />
                  WhatsApp Now
                </a>
                <a className="secondary-btn" href={TEL} aria-label="Call Royal Rides">
                  <Phone size={18} strokeWidth={2.2} />
                  Call Now
                </a>
              </div>
            </div>
            <div className="final-cta-aside" aria-hidden="true">
              <div className="final-cta-badge">
                <span className="final-badge-num">10 min</span>
                <span className="final-badge-label">avg. response time</span>
              </div>
              <div className="final-cta-badge">
                <span className="final-badge-num">24/7</span>
                <span className="final-badge-label">WhatsApp support</span>
              </div>
              <div className="final-cta-badge">
                <span className="final-badge-num">3</span>
                <span className="final-badge-label">car categories</span>
              </div>
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
            <a className="footer-wa" href={WA} aria-label="WhatsApp Royal Rides">
              <MessageCircle size={17} strokeWidth={2.2} />
              WhatsApp Now
            </a>
            <a className="footer-phone" href={TEL} aria-label="Call Royal Rides">
              <Phone size={16} strokeWidth={2.2} />
              {PHONE}
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

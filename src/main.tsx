import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Building2,
  CalendarDays,
  Car,
  ChevronDown,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import "./styles.css";

const bookingFields = [
  { label: "Location", value: "Dubai", icon: MapPin },
  { label: "Pick Up", value: "Airport or Hotel", icon: Building2 },
  { label: "Car Type", value: "SUV", icon: Car },
  { label: "Date", value: "21 May 2025 - 25 May 2025", icon: CalendarDays },
];

function App() {
  return (
    <main className="site-shell">
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
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

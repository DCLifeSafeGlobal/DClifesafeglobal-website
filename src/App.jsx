import os, zipfile, pathlib, textwrap, json

base = pathlib.Path("/mnt/data/dclifesafe-global-multipage")
src = base / "src"
components = src / "components"
pages = src / "pages"
public = base / "public"

for p in [src, components, pages, public]:
    p.mkdir(parents=True, exist_ok=True)

package_json = {
  "name": "dclifesafe-global",
  "private": True,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.28.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.378.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}

index_html = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DC LifeSafe Global</title>
    <meta name="description" content="DC LifeSafe Global — Medicine beyond the trail." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""

vite_config = """import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
"""

main_jsx = """import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
"""

app_jsx = """import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Wellness from "./pages/Wellness.jsx";
import Training from "./pages/Training.jsx";
import Outdoor from "./pages/Outdoor.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/training" element={<Training />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
"""

scrolltotop = """import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
"""

layout = """import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
"""

header = """import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/wellness", label: "Wellness" },
  { to: "/training", label: "Training" },
  { to: "/outdoor", label: "Outdoor" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <img src="/logo_principal.png" alt="DC LifeSafe Global" className="brand-logo" />
        </NavLink>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${open ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
"""

footer = """import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/wellness", label: "Wellness" },
  { to: "/training", label: "Training" },
  { to: "/outdoor", label: "Outdoor" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <nav className="footer-nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="footer-link">
              {link.label}
            </NavLink>
          ))}
        </nav>
        <p className="footer-copy">© 2026 DC LifeSafe Global | All rights reserved.</p>
      </div>
    </footer>
  );
}
"""

shared_sections = """
export function PageIntro({ title, subtitle }) {
  return (
    <section className="page-intro section">
      <div className="container text-center">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export function HeroBanner({ image, overlay = false, children, className = "" }) {
  return (
    <section className={`hero-banner ${className}`}>
      <div className="container">
        <div className="hero-frame">
          <img src={image} alt="" className="hero-image" />
          {overlay ? <div className="hero-overlay-content">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function CardGrid({ children, columns = 3 }) {
  return <div className={`card-grid columns-${columns}`}>{children}</div>;
}

export function InfoCard({ icon, title, text, button }) {
  return (
    <article className="info-card">
      {icon ? <img src={icon} alt="" className="info-card-icon" /> : null}
      <h3>{title}</h3>
      <p>{text}</p>
      {button ? <button className={button.secondary ? "btn btn-outline" : "btn"}>{button.label}</button> : null}
    </article>
  );
}

export function CTASection({ image, title, text, buttonLabel, buttonClass = "" }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <img src={image} alt="" className="cta-image" />
          <div className="cta-content">
            <h3>{title}</h3>
            <p>{text}</p>
            <button className={`btn ${buttonClass}`.trim()}>{buttonLabel}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
"""

home = """import React from "react";
import { Link } from "react-router-dom";
import { Shield, HeartPulse, Compass, ClipboardList } from "lucide-react";

export default function Home() {
  const pillars = [
    { icon: Shield, title: "Expert Training" },
    { icon: HeartPulse, title: "Emotional Resilience" },
    { icon: Compass, title: "Outdoor Leadership" },
    { icon: ClipboardList, title: "Real-World Preparedness" },
  ];

  return (
    <>
      <section className="section hero-home-simple">
        <div className="container text-center">
          <h1 className="hero-title">Medicine beyond the trail</h1>
          <p className="hero-subtitle">
            Training, wellness, and outdoor experiences designed to build skill,
            resilience, and real-world confidence.
          </p>
          <div className="hero-actions">
            <Link to="/wellness" className="btn">Explore Wellness</Link>
            <Link to="/training" className="btn btn-outline">View Training</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="feature-card">
              <h2>Wellness</h2>
              <img src="/card_home_wellness.jpg" alt="Wellness" className="feature-thumb" />
              <p>
                Emotional regulation and resilience tools to manage daily life through the
                Surfviving approach.
              </p>
              <Link to="/wellness" className="btn">Discover Surfviving</Link>
            </article>

            <article className="feature-card">
              <h2>Training</h2>
              <img src="/card_home_training.jpg" alt="Training" className="feature-thumb" />
              <p>
                BLS, ACLS, wilderness medicine, and practical training for real-world emergencies.
              </p>
              <Link to="/training" className="btn">View Training Courses</Link>
            </article>

            <article className="feature-card">
              <h2>Outdoor</h2>
              <img src="/card_home_outdoor.jpg" alt="Outdoor" className="feature-thumb" />
              <p>
                Expeditions and nature-based experiences built around leadership, health, and purpose.
              </p>
              <Link to="/outdoor" className="btn">Explore Adventures</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container text-center">
          <h2 className="section-title">Why DC LifeSafe Global?</h2>
          <p className="section-subtitle">
            Building confidence through skill, wellness, and outdoor discovery.
          </p>

          <div className="icon-row">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="icon-item">
                  <div className="icon-circle">
                    <Icon size={38} />
                  </div>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
"""

wellness = """import React from "react";

export default function Wellness() {
  return (
    <>
      <section className="hero-banner-page">
        <div className="container">
          <div className="page-hero-card">
            <img src="/hero_wellness.jpg" alt="Wellness" className="page-hero-image" />
            <div className="page-hero-overlay left">
              <img src="/logo_surfviving.png" alt="Surfviving" className="surfviving-hero-logo" />
              <h1>Ride the Emotional Wave</h1>
              <p>
                A wellness program that empowers you to manage stress, regulate emotions,
                and build resilience using ocean-inspired tools and practical methods.
              </p>
              <button className="btn">Request a Free Consultation</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Emotional Regulation Tools</h2>
          <p className="section-subtitle narrow">
            Master emotional regulation and turn daily challenges into opportunities for growth.
          </p>

          <div className="soft-panel three-tools">
            <div className="tool-card">
              <img src="/icon_calm.png" alt="" />
              <h3>Calm the Mind</h3>
              <p>Learn breathing, mindfulness, and grounding techniques.</p>
            </div>
            <div className="tool-card">
              <img src="/icon_wave.png" alt="" />
              <h3>Ride the Emotional Wave</h3>
              <p>Use surf-inspired metaphors to navigate emotional balance.</p>
            </div>
            <div className="tool-card">
              <img src="/icon_resilience.png" alt="" />
              <h3>Build Resilience</h3>
              <p>Strengthen resilience and navigate stress with confidence.</p>
            </div>
          </div>

          <div className="card-grid columns-2 mt-large">
            <article className="resource-card">
              <img src="/card_workshop.jpg" alt="Workshops" className="resource-thumb" />
              <div className="resource-content">
                <h3>Workshops & Private Sessions</h3>
                <p>
                  Join in-person workshops or book a private session tailored to your needs.
                </p>
                <button className="btn">View Upcoming Workshops</button>
              </div>
            </article>

            <article className="resource-card">
              <img src="/card_resources.jpg" alt="Resources" className="resource-thumb" />
              <div className="resource-content">
                <h3>Worksheets & Resources</h3>
                <p>
                  Access helpful worksheets, e-books, and emotional well-being resources.
                </p>
                <button className="btn">Download Resources</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <img src="/hero_wellness_bottom.jpg" alt="" className="cta-image" />
            <div className="cta-content center">
              <h3>Start Your Wellness Journey</h3>
              <p>
                Ride the emotional wave with expert guidance and support from DC LifeSafe Global.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"""

training = """import React from "react";
import { CalendarDays, CheckCircle2 } from "lucide-react";

export default function Training() {
  const programs = [
    {
      icon: "/icon_bls.png",
      title: "BLS\\nBasic Life Support",
      text: "Essential life-saving skills for healthcare providers and community members.",
    },
    {
      icon: "/icon_acls.png",
      title: "ACLS\\nAdvanced Cardiac Life Support",
      text: "Advanced training for managing cardiovascular emergencies with confidence.",
    },
    {
      icon: "/icon_wilderness.png",
      title: "Wilderness & Outdoor\\nMedicine",
      text: "Training for remote environments and adventure professionals where help is far away.",
    },
    {
      icon: "/icon_group.png",
      title: "Private & Group\\nWorkshops",
      text: "Customized training for teams, organizations, and communities.",
    },
  ];

  return (
    <>
      <section className="hero-training">
        <div className="container hero-training-grid">
          <div className="training-copy">
            <div className="eyebrow">Training today<br />confidence tomorrow</div>
            <h1>
              Real Skills.<br />
              Real Situations.<br />
              <span>Real Impact.</span>
            </h1>
            <p>
              Professional medical training designed to prepare you for real-world emergencies
              and everyday heroes.
            </p>
            <div className="hero-actions">
              <button className="btn">View Courses</button>
              <button className="btn btn-outline">Request Group Training</button>
            </div>
          </div>
          <img src="/hero_training.jpg" alt="Training" className="hero-training-image" />
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="eyebrow center">Our Training Programs</div>
          <h2 className="section-title">Build Skills. Save Lives.</h2>

          <div className="card-grid columns-4 mt-medium">
            {programs.map((item) => (
              <article className="program-card" key={item.title}>
                <img src={item.icon} alt="" className="program-icon" />
                <h3>{item.title.split("\\n").map((part, idx) => <React.Fragment key={idx}>{part}<br /></React.Fragment>)}</h3>
                <p>{item.text}</p>
                <button className="text-link">Learn More →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="training-bottom-grid">
            <div className="training-benefits">
              <h3>Why Train with<br />DC LifeSafe Global?</h3>
              <ul>
                <li><CheckCircle2 size={18} /> Real-world focused curriculum</li>
                <li><CheckCircle2 size={18} /> Experienced instructors</li>
                <li><CheckCircle2 size={18} /> Small class sizes</li>
                <li><CheckCircle2 size={18} /> Hands-on, practical learning</li>
                <li><CheckCircle2 size={18} /> Confidence for life</li>
              </ul>
            </div>

            <div className="training-bag-panel">
              <img src="/training_gear.jpg" alt="Training gear" />
            </div>

            <aside className="upcoming-card">
              <h4><CalendarDays size={20} /> Upcoming Courses</h4>
              <div className="course-item">
                <strong>BLS Provider</strong>
                <span>Upcoming date placeholder</span>
                <small>Denver, Colorado</small>
              </div>
              <div className="course-item">
                <strong>ACLS Provider</strong>
                <span>Upcoming date placeholder</span>
                <small>Denver, Colorado</small>
              </div>
              <button className="text-link">View All Courses →</button>
            </aside>
          </div>

          <div className="bottom-action-bar">
            <div>
              <strong>Better Training Today</strong>
              <span>Stronger Communities Tomorrow</span>
            </div>
            <button className="btn btn-danger">Get Started Today</button>
          </div>
        </div>
      </section>
    </>
  );
}
"""

outdoor = """import React from "react";

export default function Outdoor() {
  const cards = [
    {
      icon: "/icon_adventure.png",
      title: "Adventure Expeditions",
      text: "Embark on guided trips to Peru, the US Rockies, and more.",
      button: "Learn More",
    },
    {
      icon: "/icon_wilderness.png",
      title: "Wilderness Medicine",
      text: "Learn survival medicine and rescue skills in remote environments.",
      button: "View Courses",
      secondary: True,
    },
    {
      icon: "/icon_guided.png",
      title: "Guided Experiences",
      text: "Join like-minded groups for therapeutic and restorative hikes.",
      button: "See Upcoming",
      secondary: True,
    },
    {
      icon: "/icon_nature.png",
      title: "Nature-Based Wellness",
      text: "Find balance with outdoor wellness retreats and nature immersion.",
      button: "Explore Wellness",
    },
  ];

  return (
    <>
      <section className="hero-banner-page">
        <div className="container">
          <div className="page-hero-card">
            <img src="/hero_outdoor.jpg" alt="Outdoor" className="page-hero-image" />
            <div className="page-hero-badge">
              <img src="/logo_outdoor.png" alt="Outdoor badge" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h1 className="section-title">Explore the great outdoors</h1>
          <p className="section-subtitle">
            Health-focused expeditions and nature-based experiences.
          </p>

          <div className="card-grid columns-4 mt-medium">
            {cards.map((card) => (
              <article className="program-card" key={card.title}>
                <img src={card.icon} alt="" className="program-icon" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className={card.secondary ? "btn btn-outline small" : "btn small"}>
                  {card.button}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <img src="/cta_outdoor.jpg" alt="" className="cta-image" />
            <div className="cta-content left white">
              <h3>Ready for your next adventure?</h3>
              <p>Join us on an upcoming expedition or guided journey.</p>
              <button className="btn btn-orange">View Upcoming Trips</button>
            </div>
          </div>

          <div className="partner-row">
            <span>Adventure Travel Trade Association</span>
            <span>SOLO | Medler Trails Medicine School</span>
          </div>
        </div>
      </section>
    </>
  );
}
""".replace("True", "true")

about = """import React from "react";

export default function About() {
  const items = [
    {
      icon: "/icon_calm.png",
      title: "Wellness",
      text: "Enhance emotional and mental resilience through the Surfviving program.",
      button: "Learn More",
    },
    {
      icon: "/icon_wilderness.png",
      title: "Training",
      text: "Get certified in CPR, ACLS, and life-saving skills for real-world emergencies.",
      button: "View Courses",
      secondary: true,
    },
    {
      icon: "/icon_guided.png",
      title: "Guided Experiences",
      text: "Join like-minded groups for therapeutic and restorative hikes.",
      button: "See Upcoming",
      secondary: true,
    },
    {
      icon: "/icon_nature.png",
      title: "Nature-Based Wellness",
      text: "Find balance with outdoor retreats and nature immersion.",
      button: "Explore Adventures",
    },
  ];

  return (
    <>
      <section className="hero-banner-page">
        <div className="container">
          <div className="page-hero-card">
            <img src="/hero_about.jpg" alt="About" className="page-hero-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h1 className="section-title">About DC LifeSafe Global</h1>
          <p className="section-subtitle">
            A holistic approach to health, wellness, and adventure.
          </p>

          <div className="card-grid columns-4 mt-medium">
            {items.map((card) => (
              <article className="program-card" key={card.title}>
                <img src={card.icon} alt="" className="program-icon" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className={card.secondary ? "btn btn-outline small" : "btn small"}>
                  {card.button}
                </button>
              </article>
            ))}
          </div>

          <div className="mission-block">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle narrow">
              Empowering people to be confident, resilient, and prepared through life-saving
              training, wellness programs, and outdoor experiences.
            </p>
          </div>

          <div className="story-banner">
            <img src="/story_about.jpg" alt="Our story" />
            <div className="story-overlay">
              <h3>Our Story: Bridging Medicine, Training, and Outdoor Experience</h3>
              <p>
                Founded by Daniel Caceres Prieto, DC LifeSafe Global brings together training,
                wellness, and outdoor experiences through a practical, human-centered approach.
              </p>
            </div>
          </div>

          <div className="center-cta">
            <h2 className="section-title small-gap">Connect with DC LifeSafe Global</h2>
            <button className="btn">Get in Touch</button>
          </div>
        </div>
      </section>
    </>
  );
}
"""

contact = """import React from "react";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="hero-banner-page">
        <div className="container">
          <div className="page-hero-card">
            <img src="/hero_contact.jpg" alt="Contact" className="page-hero-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h1 className="section-title">Contact DC LifeSafe Global</h1>
          <p className="section-subtitle">
            Get in touch to learn more, schedule a training, or start your journey.
          </p>

          <div className="contact-grid">
            <div className="contact-panel">
              <div className="contact-split">
                <div>
                  <div className="contact-icon-circle"><Mail size={28} /></div>
                  <h3>Contact Information</h3>
                  <p>720.527.9516</p>
                  <p>info@dclifesafeglobal.com</p>
                  <p>Denver, Colorado</p>
                </div>
                <div>
                  <div className="contact-icon-circle"><MessageCircle size={28} /></div>
                  <h3>Send Us a Message</h3>
                  <p>Use the form below to request more information or schedule a consultation.</p>
                </div>
              </div>
            </div>

            <form className="form-card">
              <h3>Send a Message</h3>
              <label>Your Name</label>
              <input type="text" placeholder="Your Name" />
              <label>Your Email</label>
              <input type="email" placeholder="Your Email" />
              <label>Select Subject</label>
              <select>
                <option>Select Subject</option>
                <option>Training</option>
                <option>Wellness</option>
                <option>Outdoor</option>
                <option>General Inquiry</option>
              </select>
              <label>Message</label>
              <textarea rows="4" />
              <button type="button" className="btn full">Send Message</button>
            </form>
          </div>

          <div className="why-block">
            <h2 className="section-title">Why Choose DC LifeSafe Global?</h2>
            <div className="icon-row four-large">
              <div className="icon-text-item">
                <img src="/icon_shield.png" alt="" />
                <div>
                  <strong>Expert Training</strong>
                  <span>Led by experienced certified instructors</span>
                </div>
              </div>
              <div className="icon-text-item">
                <img src="/icon_accreditation.png" alt="" />
                <div>
                  <strong>Accredited Certifications</strong>
                </div>
              </div>
              <div className="icon-text-item">
                <img src="/icon_holistic.png" alt="" />
                <div>
                  <strong>Holistic Approach</strong>
                </div>
              </div>
              <div className="icon-text-item">
                <img src="/icon_experience.png" alt="" />
                <div>
                  <strong>Proven Experience</strong>
                  <span>Emergency and wilderness background</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-banner">
            <img src="/hero_contact_bottom.jpg" alt="" className="cta-image" />
            <div className="cta-content center white">
              <h3>Your Safety and Well-Being are Our Priority</h3>
              <p>Contact us today and let’s make safety part of your lifestyle.</p>
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"""

index_css = """
:root {
  --bg: #f4f0f3;
  --surface: #ffffff;
  --text: #17263f;
  --muted: #5a6270;
  --line: #e6e1e6;
  --primary: #295f78;
  --primary-dark: #18385d;
  --accent: #d27c28;
  --danger: #d03a3a;
  --shadow: 0 10px 28px rgba(20, 25, 40, 0.08);
  --radius: 22px;
  --radius-sm: 14px;
}

* { box-sizing: border-box; }

html, body, #root {
  margin: 0;
  min-height: 100%;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: "Segoe UI", Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button, input, select, textarea {
  font: inherit;
}

.site-shell {
  min-height: 100vh;
}

.container {
  width: min(1220px, calc(100% - 40px));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.96);
  border-bottom: 1px solid rgba(0,0,0,0.04);
  backdrop-filter: blur(10px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 94px;
  gap: 20px;
}

.brand-logo {
  height: 72px;
  width: auto;
  object-fit: contain;
}

.nav {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-link {
  font-size: 1.05rem;
  color: #2f3441;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
}

.nav-link.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.mobile-toggle {
  display: none;
  border: none;
  background: transparent;
  color: var(--text);
}

.footer {
  padding: 38px 0 48px;
}

.footer-inner {
  text-align: center;
  color: var(--muted);
}

.footer-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 18px;
}

.footer-link {
  color: #525967;
}

.footer-copy {
  margin: 0;
  color: #7c8290;
}

.section {
  padding: 38px 0 34px;
}

.text-center {
  text-align: center;
}

.hero-home-simple {
  padding-top: 54px;
  padding-bottom: 16px;
}

.hero-title,
.section-title,
.page-title {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.06;
  color: #12243f;
}

.hero-title {
  font-size: clamp(2.7rem, 4vw, 4.4rem);
  margin: 0 0 18px;
}

.hero-subtitle,
.section-subtitle,
.page-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.6;
  color: var(--muted);
  max-width: 820px;
  margin: 0 auto;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 26px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(180deg, #357c94, var(--primary));
  color: #fff;
  box-shadow: var(--shadow);
  cursor: pointer;
}

.btn:hover { filter: brightness(1.03); }

.btn-outline {
  background: #fff;
  color: #2b3341;
  border: 1px solid #d7dce4;
  box-shadow: none;
}

.btn-orange {
  background: linear-gradient(180deg, #f29b37, #df7e18);
}

.btn-danger {
  background: linear-gradient(180deg, #e63c3c, #c1272d);
}

.btn.small {
  min-height: 46px;
  padding: 0 20px;
}

.btn.full {
  width: 100%;
}

.feature-card,
.program-card,
.info-card,
.resource-card,
.contact-panel,
.form-card,
.upcoming-card {
  background: var(--surface);
  border: 1px solid rgba(20,25,40,0.04);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card-grid {
  display: grid;
  gap: 18px;
}

.columns-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.columns-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.columns-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.feature-card {
  padding: 0 0 24px;
  overflow: hidden;
  text-align: center;
}

.feature-card h2 {
  font-family: Georgia, serif;
  font-size: 2rem;
  margin: 0;
  padding: 22px 20px 14px;
}

.feature-thumb {
  width: 100%;
  aspect-ratio: 1.2 / 0.86;
  object-fit: cover;
  display: block;
}

.feature-card p {
  color: #404755;
  line-height: 1.7;
  padding: 18px 24px 0;
  min-height: 118px;
}

.feature-card .btn {
  margin-top: 10px;
}

.soft-section {
  margin-top: 12px;
}

.icon-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 24px;
  margin-top: 34px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  color: #23334d;
}

.icon-circle {
  width: 82px;
  height: 82px;
  border-radius: 999px;
  background: #f6f8fb;
  border: 1px solid #e7eaf0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-banner-page {
  padding-top: 26px;
  padding-bottom: 14px;
}

.page-hero-card,
.hero-frame,
.cta-banner,
.story-banner {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}

.page-hero-image,
.hero-image,
.cta-image,
.story-banner img {
  width: 100%;
  height: auto;
  display: block;
}

.page-hero-overlay,
.hero-overlay-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
}

.page-hero-overlay.left {
  justify-content: center;
  align-items: flex-start;
  width: min(54%, 680px);
  padding: 50px;
  text-align: left;
}

.page-hero-overlay h1 {
  font-family: Georgia, serif;
  font-size: clamp(2.5rem, 3.4vw, 4.3rem);
  line-height: 1.08;
  margin: 18px 0 16px;
  color: #102541;
}

.page-hero-overlay p {
  font-size: 1.28rem;
  line-height: 1.7;
  color: #36404c;
  margin: 0 0 22px;
}

.surfviving-hero-logo {
  width: min(460px, 90%);
}

.soft-panel {
  background: rgba(210, 234, 238, 0.35);
  border-radius: 16px;
  padding: 30px;
  margin-top: 32px;
}

.three-tools {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 22px;
}

.tool-card {
  text-align: center;
}

.tool-card img {
  width: 86px;
  height: 86px;
  object-fit: contain;
  margin: 0 auto 14px;
}

.tool-card h3 {
  font-size: 1.7rem;
  font-family: Georgia, serif;
  margin: 0 0 10px;
}

.tool-card p,
.program-card p,
.resource-content p,
.training-copy p,
.course-item span,
.course-item small,
.contact-panel p,
.form-card label,
.icon-text-item span {
  color: #4d5561;
  line-height: 1.65;
}

.resource-card {
  overflow: hidden;
}

.resource-thumb {
  width: 100%;
  aspect-ratio: 1.35 / 0.7;
  object-fit: cover;
}

.resource-content {
  padding: 22px 24px 28px;
  text-align: left;
}

.resource-content h3,
.program-card h3,
.training-benefits h3,
.cta-content h3,
.story-overlay h3,
.form-card h3,
.contact-panel h3 {
  font-family: Georgia, serif;
  margin: 0 0 12px;
  color: #152844;
}

.resource-content h3 { font-size: 2rem; }
.program-card h3 { font-size: 1.95rem; line-height: 1.2; }
.contact-panel h3, .form-card h3 { font-size: 1.85rem; }

.mt-large { margin-top: 34px; }
.mt-medium { margin-top: 22px; }

.hero-training {
  background: linear-gradient(180deg, #ffffff, #f6f7fb);
  padding: 22px 0 30px;
}

.hero-training-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: stretch;
  gap: 0;
  overflow: hidden;
  border-radius: 8px;
}

.training-copy {
  background: linear-gradient(90deg, rgba(255,255,255,0.98), rgba(255,255,255,0.82));
  padding: 40px 40px 34px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1rem;
  font-weight: 700;
  color: #33598b;
  margin-bottom: 18px;
}

.eyebrow.center { text-align: center; }

.training-copy h1 {
  font-family: Georgia, serif;
  font-size: clamp(2.4rem, 4vw, 4.6rem);
  line-height: 1.04;
  margin: 0 0 18px;
}

.training-copy h1 span {
  color: #b3212b;
}

.hero-training-image {
  width: 100%;
  height: 100%;
  min-height: 520px;
  object-fit: cover;
}

.program-card {
  padding: 30px 22px 26px;
  text-align: center;
}

.program-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 18px;
  object-fit: contain;
}

.text-link {
  background: none;
  border: none;
  color: #183a63;
  font-weight: 700;
  cursor: pointer;
}

.training-bottom-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.15fr 0.72fr;
  gap: 18px;
  align-items: stretch;
}

.training-benefits {
  background: #f0f4f9;
  border-radius: var(--radius);
  padding: 36px 30px;
}

.training-benefits ul {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  display: grid;
  gap: 14px;
}

.training-benefits li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #2d3746;
}

.training-bag-panel {
  background: #eef2f8;
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.training-bag-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upcoming-card {
  padding: 26px 24px;
}

.upcoming-card h4 {
  margin: 0 0 24px;
  font-size: 1.45rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #20395e;
}

.course-item {
  margin-bottom: 24px;
  display: grid;
  gap: 6px;
}

.bottom-action-bar {
  margin-top: 18px;
  background: linear-gradient(90deg, #072f63, #0a2951);
  color: #fff;
  border-radius: 16px;
  padding: 26px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.bottom-action-bar strong {
  display: block;
  font-size: 1.6rem;
}

.bottom-action-bar span {
  display: block;
  margin-top: 6px;
  color: rgba(255,255,255,0.88);
}

.page-hero-badge {
  position: absolute;
  right: 12%;
  top: 12%;
  width: min(38%, 420px);
}

.partner-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #8b91a1;
  margin-top: 18px;
  font-size: 1.2rem;
}

.mission-block {
  margin-top: 46px;
}

.story-banner {
  margin-top: 28px;
  border-radius: 14px;
}

.story-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(8,19,35,0.68), rgba(8,19,35,0.28));
  color: #fff;
  padding: 40px 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

.story-overlay h3,
.story-overlay p {
  max-width: 720px;
}

.story-overlay h3 {
  color: #fff;
  font-size: 2.3rem;
}

.story-overlay p {
  color: rgba(255,255,255,0.92);
  font-size: 1.3rem;
  line-height: 1.7;
}

.center-cta {
  padding-top: 30px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 0.96fr;
  gap: 20px;
  margin-top: 26px;
}

.contact-panel {
  padding: 28px;
  background: linear-gradient(180deg, rgba(225,236,245,0.65), rgba(250,250,252,0.9));
}

.contact-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  text-align: center;
}

.contact-icon-circle {
  width: 76px;
  height: 76px;
  border-radius: 999px;
  border: 8px solid #c9d5e2;
  margin: 0 auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #315986;
  background: white;
}

.form-card {
  padding: 28px;
  text-align: left;
}

.form-card label {
  display: block;
  font-size: 1rem;
  margin-bottom: 6px;
  margin-top: 14px;
}

.form-card input,
.form-card select,
.form-card textarea {
  width: 100%;
  border: 1px solid #d9dde5;
  border-radius: 10px;
  padding: 14px 14px;
  background: #fff;
}

.why-block {
  margin-top: 46px;
}

.icon-row.four-large {
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 20px;
}

.icon-text-item {
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
}

.icon-text-item img {
  width: 74px;
  height: 74px;
  object-fit: contain;
}

.cta-banner {
  margin-top: 26px;
  min-height: 240px;
}

.cta-image {
  width: 100%;
  min-height: 240px;
  object-fit: cover;
}

.cta-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 34px 46px;
  text-align: center;
}

.cta-content.left {
  align-items: flex-start;
  text-align: left;
  width: min(46%, 520px);
}

.cta-content.center {
  align-items: center;
}

.cta-content.white,
.cta-content.white h3,
.cta-content.white p {
  color: #fff;
}

.cta-content h3 {
  font-size: clamp(2rem, 3vw, 3.2rem);
}

.page-intro {
  padding-top: 30px;
}

.page-title,
.section-title {
  font-size: clamp(2.4rem, 4vw, 4rem);
  margin: 0 0 16px;
}

.section-title.small-gap {
  margin-bottom: 18px;
}

.section-subtitle.narrow {
  max-width: 760px;
}

.site-main {
  padding-bottom: 16px;
}

@media (max-width: 1100px) {
  .columns-4,
  .icon-row.four-large {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .columns-3 {
    grid-template-columns: 1fr;
  }

  .training-bottom-grid,
  .contact-grid,
  .columns-2,
  .hero-training-grid {
    grid-template-columns: 1fr;
  }

  .page-hero-overlay.left,
  .cta-content.left {
    width: 100%;
  }

  .page-hero-badge {
    width: min(46%, 380px);
    right: 6%;
  }
}

@media (max-width: 820px) {
  .header-inner {
    min-height: 84px;
  }

  .brand-logo {
    height: 60px;
  }

  .mobile-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 84px;
    background: white;
    border-bottom: 1px solid #ece8ec;
    box-shadow: 0 12px 28px rgba(14,18,28,0.08);
    padding: 16px 20px 20px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .nav.nav-open {
    display: flex;
  }

  .icon-row,
  .three-tools,
  .columns-4,
  .icon-row.four-large,
  .contact-split {
    grid-template-columns: 1fr;
  }

  .page-hero-overlay.left {
    position: relative;
    inset: auto;
    width: 100%;
    padding: 28px 10px 0;
    text-align: left;
  }

  .page-hero-badge {
    width: 42%;
    right: 4%;
    top: 6%;
  }

  .page-hero-card {
    background: white;
    border-radius: 18px;
  }

  .story-overlay,
  .cta-content {
    padding: 24px;
  }

  .partner-row {
    flex-direction: column;
  }

  .bottom-action-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
"""

files = {
    base / "package.json": json.dumps(package_json, indent=2),
    base / "vite.config.js": vite_config,
    base / "index.html": index_html,
    src / "main.jsx": main_jsx,
    src / "App.jsx": app_jsx,
    components / "ScrollToTop.jsx": scrolltotop,
    components / "Layout.jsx": layout,
    components / "Header.jsx": header,
    components / "Footer.jsx": footer,
    pages / "Home.jsx": home,
    pages / "Wellness.jsx": wellness,
    pages / "Training.jsx": training,
    pages / "Outdoor.jsx": outdoor,
    pages / "About.jsx": about,
    pages / "Contact.jsx": contact,
    src / "index.css": index_css,
    public / "README_IMAGES.txt": """Place your real images here with these exact names:

logo_principal.png
logo_surfviving.png
logo_outdoor.png
hero_home.jpg
hero_wellness.jpg
hero_training.jpg
hero_outdoor.jpg
hero_about.jpg
hero_contact.jpg
hero_contact_bottom.jpg
hero_wellness_bottom.jpg
card_home_wellness.jpg
card_home_training.jpg
card_home_outdoor.jpg
card_workshop.jpg
card_resources.jpg
cta_outdoor.jpg
story_about.jpg
training_gear.jpg
icon_calm.png
icon_wave.png
icon_resilience.png
icon_bls.png
icon_acls.png
icon_wilderness.png
icon_group.png
icon_adventure.png
icon_guided.png
icon_nature.png
icon_shield.png
icon_accreditation.png
icon_holistic.png
icon_experience.png

You can temporarily keep your current files and rename them to match these names.
"""
}

for path, content in files.items():
    path.write_text(content, encoding="utf-8")

zip_path = "/mnt/data/dclifesafe-global-multipage.zip"
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for root, dirs, filenames in os.walk(base):
        for f in filenames:
            full = os.path.join(root, f)
            rel = os.path.relpath(full, base)
            z.write(full, rel)

zip_path

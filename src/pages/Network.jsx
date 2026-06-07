import React from "react";
import {
  MapPin,
  Globe,
  Instagram,
  Mountain,
  Leaf,
  Snowflake,
  ShieldCheck,
} from "lucide-react";

const partners = [
  {
    name: "DC LifeSafe Global",
    location: "Colorado, USA",
    logo: "/logo_dclifesafeglobal_expeditions.png",
    image: "/card_global_expedition_network.png",
    accent: "orange",
    website: "https://www.dclifesafeglobal.com",
    instagram: "https://www.instagram.com/dclifesafeglobal",
    services: [
      "Wilderness Medicine",
      "Training & Education",
      "Expedition Leadership",
      "Resilience & Wellbeing",
      "Photography & Storytelling",
    ],
  },
  {
    name: "Viajeros Perú",
    location: "Ancón, Lima, Peru",
    logo: "/logo_viajerosperu.png",
    image: "/hero_viajerosperu.png",
    accent: "orange",
    website: "https://viajerosperu.pe",
    instagram: "https://www.instagram.com/viajerosperu",
    services: [
      "Trekking & Hiking",
      "Cultural Immersion",
      "Adventure Travel",
      "Multi-region Expeditions",
      "Logistics & Support",
    ],
  },
  {
    name: "T Viajes",
    location: "La Merced, Chanchamayo, Peru",
    logo: "/logo_tviajes.jpg",
    image: "/hero_tviajes.png",
    accent: "green",
    website: "",
    instagram: "https://www.instagram.com/tviajesperu",
    services: [
      "Central Jungle Expeditions",
      "Ecotourism & Nature",
      "Indigenous Communities",
      "Oxapampa – Villa Rica",
      "Sustainable Experiences",
    ],
  },
  {
    name: "ANTS Travel Smart",
    location: "Antarctica / International Operations",
    logo: "/logo_antstravelsmart.jpeg",
    image: "/hero_antstravelsmart.png",
    accent: "blue",
    website: "https://antstravelsmart.com",
    instagram: "https://www.instagram.com/antstravelsmart",
    services: [
      "Antarctica Expeditions",
      "International Travel",
      "Custom Programs",
      "Polar Logistics & Support",
      "Safety & Experience",
    ],
  },
];

export default function Network() {
  return (
    <>
      <section
        className="network-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.75)), url('/hero_global_expedition_network.png')",
        }}
      >
        <div className="container network-hero-content">
          <p className="network-kicker">Global Alliance</p>
          <h1>Global Expedition Network</h1>
          <div className="network-line" />
          <p>
            Trusted expedition organizations operating across mountains,
            rainforests, polar environments, and wilderness regions.
          </p>
        </div>
      </section>

      <section className="section network-section">
        <div className="container">
          <div className="network-grid">
            {partners.map((partner) => (
              <article className="network-card" key={partner.name}>
                <div
                  className="network-card-image"
                  style={{ backgroundImage: `url(${partner.image})` }}
                />

                <div className="network-card-body">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="network-logo"
                  />

                  <h2>{partner.name}</h2>

                  <p className="network-location">
                    <MapPin size={17} />
                    {partner.location}
                  </p>

                  <div className={`network-divider ${partner.accent}`} />

                  <ul className="network-services">
                    {partner.services.map((service) => (
                      <li key={service}>
                        <ShieldCheck size={16} />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="network-actions">
                    {partner.website && (
                      <a
                        className={`network-button ${partner.accent}`}
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Globe size={16} />
                        Website
                      </a>
                    )}

                    {partner.instagram && (
                      <a
                        className={`network-button outline ${partner.accent}`}
                        href={partner.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Instagram size={16} />
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section network-mission">
        <div className="container network-mission-inner">
          <div>
            <p className="network-kicker">One Mission</p>
            <h2>Explore. Learn. Protect. Inspire.</h2>
            <p>
              Together, we create safe, meaningful, and transformative
              experiences in some of the world’s most extraordinary places.
            </p>
          </div>

          <div className="network-values">
            <div>
              <Mountain size={34} />
              <strong>Explore</strong>
              <span>New places with purpose</span>
            </div>

            <div>
              <Globe size={34} />
              <strong>Learn</strong>
              <span>Expand knowledge and skills</span>
            </div>

            <div>
              <Snowflake size={34} />
              <strong>Protect</strong>
              <span>Prioritize safety and responsibility</span>
            </div>

            <div>
              <Leaf size={34} />
              <strong>Inspire</strong>
              <span>Empower people and communities</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
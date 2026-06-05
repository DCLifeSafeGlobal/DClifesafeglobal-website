import React from "react";
import { MapPin, Globe, Instagram, Mountain, BookOpen, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "../components/LanguageContext.jsx";

export default function Network() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const partners = [
    {
      name: "DC LifeSafe Global",
      location: "Colorado, USA",
      logo: "/logo_principal.png",
      image: "/network_dc_lifesafe.jpg",
      color: "orange",
      services: [
        "Wilderness Medicine",
        "Training & Education",
        "Expedition Leadership",
        "Resilience & Wellbeing",
        "Photography & Storytelling",
      ],
      website: "https://www.dclifesafeglobal.com",
      instagram: "",
    },
    {
      name: "Viajeros Perú",
      location: "Ancón, Lima, Perú",
      logo: "/network_viajeros_logo.png",
      image: "/network_viajeros.jpg",
      color: "orange",
      services: [
        "Trekking & Hiking",
        "Cultural Immersion",
        "Adventure Travel",
        "Multi-region Expeditions",
        "Logistics & Support",
      ],
      website: "#",
      instagram: "@viajerosperu",
    },
    {
      name: "T Viajes",
      location: "La Merced, Chanchamayo, Junín, Perú",
      logo: "/network_tviajes_logo.png",
      image: "/network_tviajes.jpg",
      color: "green",
      services: [
        "Central Jungle Expeditions",
        "Ecotourism & Nature",
        "Indigenous Communities",
        "Oxapampa – Villa Rica",
        "Sustainable Experiences",
      ],
      website: "#",
      instagram: "@tviajesperu",
    },
    {
      name: "ANTS Travel Smart",
      location: "Antarctica / International Operations",
      logo: "/network_ants_logo.png",
      image: "/network_ants.jpg",
      color: "blue",
      services: [
        "Antarctica Expeditions",
        "International Travel",
        "Custom Programs",
        "Polar Logistics & Support",
        "Safety & Experience",
      ],
      website: "#",
      instagram: "@antstravelsmart",
    },
  ];

  return (
    <div className="network-page">
      <section className="network-hero">
        <div className="network-overlay">
          <div className="container text-center">
            <h1>
              {isEs ? "Red Global de Expediciones" : "Global Expedition Network"}
            </h1>

            <p>
              {isEs
                ? "Organizaciones aliadas que operan en montañas, selvas, regiones polares y destinos de aventura en las Américas y el mundo."
                : "Trusted expedition organizations operating across mountains, rainforests, polar environments, and wilderness regions throughout the Americas and beyond."}
            </p>
          </div>

          <div className="container network-grid">
            {partners.map((partner) => (
              <article className={`network-card ${partner.color}`} key={partner.name}>
                <img src={partner.image} alt={partner.name} className="network-card-image" />

                <div className="network-card-body">
                  <img src={partner.logo} alt={partner.name} className="network-logo" />

                  <div className="network-location">
                    <MapPin size={18} />
                    <span>{partner.location}</span>
                  </div>

                  <ul>
                    {partner.services.map((service) => (
                      <li key={service}>
                        <ShieldCheck size={17} />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <a className="network-button" href={partner.website}>
                    {partner.website === "#"
                      ? isEs
                        ? "Próximamente"
                        : "Coming Soon"
                      : isEs
                      ? "Visitar web"
                      : "Visit Website"}
                  </a>

                  {partner.instagram && (
                    <div className="network-instagram">
                      <Instagram size={20} />
                      {partner.instagram}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="network-mission">
        <div className="container network-mission-grid">
          <div>
            <h2>{isEs ? "Una misión" : "One Mission"}</h2>
            <h3>
              {isEs
                ? "Explorar. Aprender. Proteger. Inspirar."
                : "Explore. Learn. Protect. Inspire."}
            </h3>
            <p>
              {isEs
                ? "Juntos creamos experiencias seguras, significativas y transformadoras en algunos de los lugares más extraordinarios del mundo."
                : "Together, we create safe, meaningful, and transformative experiences in the world’s most extraordinary places."}
            </p>
          </div>

          <div className="network-values">
            <div>
              <Mountain />
              <strong>{isEs ? "Explorar" : "Explore"}</strong>
              <span>{isEs ? "Lugares con propósito" : "New places with purpose"}</span>
            </div>

            <div>
              <BookOpen />
              <strong>{isEs ? "Aprender" : "Learn"}</strong>
              <span>{isEs ? "Conocimiento y habilidades" : "Knowledge & skills"}</span>
            </div>

            <div>
              <ShieldCheck />
              <strong>{isEs ? "Proteger" : "Protect"}</strong>
              <span>{isEs ? "Seguridad y responsabilidad" : "Safety & responsibility"}</span>
            </div>

            <div>
              <Users />
              <strong>{isEs ? "Inspirar" : "Inspire"}</strong>
              <span>{isEs ? "Personas y comunidades" : "People & communities"}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
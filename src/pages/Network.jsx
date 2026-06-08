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
import { useLanguage } from "../components/LanguageContext.jsx";

export default function Network() {
  const { language } = useLanguage();
  const isES = language === "es";

  const partners = [
    {
      name: "DC LifeSafe Global",
      location: isES ? "Colorado, EE. UU." : "Colorado, USA",
      logo: "/logo_dclifesafeglobal_expeditions.png",
      image: "/card_dclifesafeglobal.png",
      accent: "orange",
      website: "https://www.dclifesafeglobal.com",
      instagram: "https://www.instagram.com/dclifesafeglobal",
      services: isES
        ? [
            "Medicina wilderness",
            "Entrenamiento y educación",
            "Liderazgo expedicionario",
            "Resiliencia y bienestar",
            "Fotografía y narrativa visual",
          ]
        : [
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
      services: isES
        ? [
            "Trekking y hiking",
            "Inmersión cultural",
            "Viajes de aventura",
            "Expediciones multirregión",
            "Logística y soporte",
          ]
        : [
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
      services: isES
        ? [
            "Expediciones en la selva central",
            "Ecoturismo y naturaleza",
            "Comunidades indígenas",
            "Oxapampa – Villa Rica",
            "Experiencias sostenibles",
          ]
        : [
            "Central Jungle Expeditions",
            "Ecotourism & Nature",
            "Indigenous Communities",
            "Oxapampa – Villa Rica",
            "Sustainable Experiences",
          ],
    },
    {
      name: "ANTS Travel Smart",
      location: isES
        ? "Antártida / Operaciones internacionales"
        : "Antarctica / International Operations",
      logo: "/logo_antstravelsmart.jpeg",
      image: "/hero_antstravelsmart.png",
      accent: "blue",
      website: "https://antstravelsmart.com",
      instagram: "https://www.instagram.com/antstravelsmart",
      services: isES
        ? [
            "Expediciones antárticas",
            "Viajes internacionales",
            "Programas personalizados",
            "Logística y soporte polar",
            "Seguridad y experiencia",
          ]
        : [
            "Antarctica Expeditions",
            "International Travel",
            "Custom Programs",
            "Polar Logistics & Support",
            "Safety & Experience",
          ],
    },
  ];

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
          <p className="network-kicker">
            {isES ? "Alianza Global" : "Global Alliance"}
          </p>

          <h1>
            {isES ? "Red Global de Expediciones" : "Global Expedition Network"}
          </h1>

          <div className="network-line" />

          <p>
            {isES
              ? "Organizaciones confiables de expedición operando en montañas, selvas, ambientes polares y regiones wilderness."
              : "Trusted expedition organizations operating across mountains, rainforests, polar environments, and wilderness regions."}
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
            <p className="network-kicker">
              {isES ? "Una misión" : "One Mission"}
            </p>

            <h2>
              {isES
                ? "Explorar. Aprender. Proteger. Inspirar."
                : "Explore. Learn. Protect. Inspire."}
            </h2>

            <p>
              {isES
                ? "Juntos, creamos experiencias seguras, significativas y transformadoras en algunos de los lugares más extraordinarios del mundo."
                : "Together, we create safe, meaningful, and transformative experiences in some of the world’s most extraordinary places."}
            </p>
          </div>

          <div className="network-values">
            <div>
              <Mountain size={34} />
              <strong>{isES ? "Explorar" : "Explore"}</strong>
              <span>
                {isES ? "Nuevos lugares con propósito" : "New places with purpose"}
              </span>
            </div>

            <div>
              <Globe size={34} />
              <strong>{isES ? "Aprender" : "Learn"}</strong>
              <span>
                {isES
                  ? "Expandir conocimientos y habilidades"
                  : "Expand knowledge and skills"}
              </span>
            </div>

            <div>
              <Snowflake size={34} />
              <strong>{isES ? "Proteger" : "Protect"}</strong>
              <span>
                {isES
                  ? "Priorizar seguridad y responsabilidad"
                  : "Prioritize safety and responsibility"}
              </span>
            </div>

            <div>
              <Leaf size={34} />
              <strong>{isES ? "Inspirar" : "Inspire"}</strong>
              <span>
                {isES
                  ? "Empoderar personas y comunidades"
                  : "Empower people and communities"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
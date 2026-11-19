import React from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../components/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

export default function Outdoor() {

  const { language } = useLanguage();

  const es = language === "es";
  const prefix = es ? "/es" : "";

  const t =
    translations[language]?.outdoorPage ||
    translations.en.outdoorPage;

  // ==========================================
  // PREVENTION & OUTDOOR PHILOSOPHY
  // ==========================================

  const prevention = {
    en: {
      label: "Our Approach to Outdoor Safety",

      title: "Every Adventure Begins with Preparation.",

      intro:
        "Before reaching the trail, preparation has already begun.",

      text1:
        "Checking the weather, understanding the terrain, carrying appropriate equipment, and knowing our own limits are essential parts of responsible outdoor exploration.",

      text2:
        "When traveling in groups, prevention also means maintaining communication, establishing clear responsibilities, watching out for one another, and preparing for unexpected situations.",

      text3:
        "We believe that prevention is not about avoiding adventure. It is about understanding risks, making informed decisions, and exploring with greater confidence and responsibility.",

      quote:
        "A successful adventure is not always about reaching the summit. Sometimes, knowing when to turn back is the most important decision.",

      closing:
        "Prevention Begins at Home.",

      button:
        "Learn About Our Philosophy",
    },

    es: {
      label: "Nuestro enfoque de seguridad outdoor",

      title: "Toda aventura comienza con la preparación.",

      intro:
        "La preparación comienza mucho antes de llegar al sendero.",

      text1:
        "Revisar las condiciones meteorológicas, conocer el terreno, llevar el equipo adecuado y reconocer nuestros propios límites son aspectos esenciales de una exploración responsable.",

      text2:
        "Cuando realizamos actividades en grupo, la prevención también implica mantener una comunicación adecuada, establecer responsabilidades claras, cuidarnos mutuamente y prepararnos para situaciones inesperadas.",

      text3:
        "Creemos que prevenir no significa renunciar a la aventura. Significa comprender los riesgos, tomar decisiones informadas y explorar con mayor confianza y responsabilidad.",

      quote:
        "Una aventura exitosa no siempre consiste en alcanzar la cima. A veces, saber cuándo regresar es la decisión más importante.",

      closing:
        "La prevención comienza en casa.",

      button:
        "Conoce nuestra filosofía",
    },
  };

  const p = prevention[es ? "es" : "en"];

  // ==========================================
  // ORIGINAL OUTDOOR PROGRAMS
  // ==========================================

  const cards = [
    {
      icon: "/icon_adventure.png",
      title: t.expeditionTitle,
      text: t.expeditionText,
      button: t.requestTrip,
      link:
        "mailto:info@dclifesafeglobal.com?subject=Adventure%20Expedition%20Inquiry",
    },

    {
      icon: "/icon_wilderness.png",
      title: t.wildernessTitle,
      text: t.wildernessText,
      button: t.requestCourse,
      link:
        "mailto:info@dclifesafeglobal.com?subject=Wilderness%20Medicine%20Inquiry",
      secondary: true,
    },

    {
      icon: "/icon_guided.png",
      title: t.guidedTitle,
      text: t.guidedText,
      button: t.askOutdoor,
      link:
        "mailto:info@dclifesafeglobal.com?subject=Guided%20Outdoor%20Experience%20Inquiry",
      secondary: true,
    },

    {
      icon: "/icon_nature.png",
      title: t.wellnessTitle,
      text: t.wellnessText,
      button: t.exploreWellness,
      link: `${prefix}/wellness`,
      internal: true,
    },
  ];

  // ==========================================
  // EXPEDITION OPPORTUNITIES
  // ==========================================

  const trips = [
    {
      title: t.peruAdventure,

      partner:
        es
          ? "Operado por Viajeros Perú / ANTS Travel Smart"
          : "Operated by Viajeros Peru / ANTS Travel Smart",

      text:
        es
          ? "Machu Picchu, Valle Sagrado, Montaña de Siete Colores, lago Titicaca, cañón del Colca y Arequipa."
          : "Machu Picchu, Sacred Valley, Rainbow Mountain, Lake Titicaca, Colca Canyon, and Arequipa.",

      link:
        "mailto:info@dclifesafeglobal.com?subject=Peru%20Adventure%20Trip%20Inquiry",
    },

    {
      title: t.antarctica,

      partner:
        es
          ? "Coordinado con ANTS Travel Smart"
          : "Coordinated with ANTS Travel Smart",

      text:
        es
          ? "Planificación de expediciones polares, viajes fotográficos, observación de fauna y coordinación logística de aventuras guiadas."
          : "Polar expedition planning, photography travel, wildlife encounters, and guided adventure logistics.",

      link:
        "mailto:info@dclifesafeglobal.com?subject=Antarctica%20Expedition%20Inquiry",
    },

    {
      title: t.coloradoWellness,

      partner: "DC LifeSafe Global",

      text:
        es
          ? "Futuras caminatas guiadas de bienestar, sesiones de preparación outdoor y experiencias de reflexión en entornos de montaña."
          : "Future guided wellness walks, outdoor preparedness sessions, and mountain-based reflection experiences.",

      link:
        "mailto:info@dclifesafeglobal.com?subject=Colorado%20Outdoor%20Wellness%20Inquiry",
    },
  ];

  // ==========================================
  // SHARED STYLES
  // ==========================================

  const paragraphStyle = {
    color: "#43546a",
    lineHeight: 1.85,
    fontSize: "16px",
  };

  // ==========================================
  // OUTDOOR PAGE
  // ==========================================

  return (
    <>

      {/* ======================================
          ORIGINAL HERO
      ====================================== */}

      <section className="hero-banner-page">
        <div className="container">

          <div className="page-hero-card outdoor-hero-card">

            <img
              src="/hero_outdoor.png"
              alt={
                es
                  ? "Experiencias outdoor de DC LifeSafe Global"
                  : "DC LifeSafe Global Outdoor Experiences"
              }
              className="page-hero-image"
            />

            <div className="page-hero-badge outdoor-badge-clean">
              <img
                src="/logo_outdoor.png"
                alt="DC LifeSafe Global Outdoor"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ======================================
          OUTDOOR PROGRAMS
      ====================================== */}

      <section className="section">
        <div className="container text-center">

          <h1 className="section-title">
            {t.heroTitle}
          </h1>

          <p className="section-subtitle">
            {t.heroText}
          </p>

          <div className="card-grid columns-4 mt-medium">

            {cards.map((card) => (

              <article
                className="program-card"
                key={card.title}
              >

                <img
                  src={card.icon}
                  alt=""
                  className="program-icon"
                />

                <h3>{card.title}</h3>

                <p>{card.text}</p>

                {card.internal ? (

                  <Link
                    className={
                      card.secondary
                        ? "btn btn-outline small"
                        : "btn small"
                    }
                    to={card.link}
                  >
                    {card.button}
                  </Link>

                ) : (

                  <a
                    className={
                      card.secondary
                        ? "btn btn-outline small"
                        : "btn small"
                    }
                    href={card.link}
                  >
                    {card.button}
                  </a>

                )}

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ======================================
          OUR APPROACH TO OUTDOOR SAFETY
      ====================================== */}

      <section className="section">
        <div className="container">

          <div
            style={{
              background: "#eef5f8",
              border: "1px solid #dce8ee",
              borderRadius: "20px",
              padding: "clamp(28px, 5vw, 55px)",
              textAlign: "center",
            }}
          >

            <p
              style={{
                color: "#24748d",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1.4px",
                marginBottom: "12px",
              }}
            >
              {p.label}
            </p>

            <h2 className="section-title">
              {p.title}
            </h2>

            <div
              style={{
                maxWidth: "830px",
                margin: "0 auto",
              }}
            >

              <p
                style={{
                  ...paragraphStyle,
                  fontWeight: 600,
                }}
              >
                {p.intro}
              </p>

              <p style={paragraphStyle}>
                {p.text1}
              </p>

              <p style={paragraphStyle}>
                {p.text2}
              </p>

              <p style={paragraphStyle}>
                {p.text3}
              </p>

              <blockquote
                style={{
                  color: "#10294a",
                  fontSize: "clamp(18px, 2.5vw, 23px)",
                  fontWeight: 700,
                  lineHeight: 1.65,
                  maxWidth: "760px",
                  margin: "35px auto 20px",
                  padding: "0 15px",
                  fontStyle: "italic",
                  border: "none",
                }}
              >
                {p.quote}
              </blockquote>

              <p
                style={{
                  color: "#24748d",
                  fontWeight: 700,
                  fontSize: "18px",
                  marginBottom: "28px",
                }}
              >
                {p.closing}
              </p>

              <Link
                to={`${prefix}/about`}
                className="btn"
              >
                {p.button}
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================
          EXPEDITION OPPORTUNITIES
      ====================================== */}

      <section className="section">
        <div className="container text-center">

          <div className="eyebrow center">
            {es
              ? "Próximos viajes y futuras expediciones"
              : "Upcoming & Future Trips"}
          </div>

          <h2 className="section-title">
            {t.opportunitiesTitle}
          </h2>

          <p className="section-subtitle narrow">
            {t.opportunitiesText}
          </p>

          <div className="card-grid columns-3 mt-large">

            {trips.map((trip) => (

              <article
                className="program-card"
                key={trip.title}
              >

                <h3>{trip.title}</h3>

                <p>
                  <strong>{trip.partner}</strong>
                </p>

                <p>{trip.text}</p>

                <a
                  className="btn small"
                  href={trip.link}
                >
                  {es
                    ? "Solicitar información"
                    : "Request Info"}
                </a>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ======================================
          ORIGINAL OUTDOOR CTA
      ====================================== */}

      <section className="section">
        <div className="container">

          <div className="cta-banner">

            <img
              src="/cta_outdoor.png"
              alt=""
              className="cta-image"
            />

            <div className="cta-content left outdoor-cta-dark">

              <h3>{t.readyTitle}</h3>

              <p>{t.readyText}</p>

              <a
                className="btn btn-orange"
                href="mailto:info@dclifesafeglobal.com?subject=Upcoming%20Trip%20Inquiry"
              >
                {t.upcomingTrips}
              </a>

            </div>

          </div>

          <div className="partner-row">
            <span>DC LifeSafe Global</span>
            <span>Viajeros Peru</span>
            <span>ANTS Travel Smart</span>
          </div>

        </div>
      </section>

    </>
  );
}

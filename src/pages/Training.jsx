import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, CheckCircle2 } from "lucide-react";

import { useLanguage } from "../components/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

// =====================================================
// DC LIFESAFE GLOBAL
// TRAINING PAGE
// Medicine Beyond the Trail.
// Prevention Begins at Home.
// =====================================================

// OFFICIAL COURSES AND CONFIRMED PRICES

const scheduledCourses = [
  {
    id: "bls",
    title: "BLS Provider",
    fullName: "Basic Life Support",
    poster: "/Training/BLS/BLS.jpg",
    priceEn: "Initial $75 · Renewal $65",
    priceEs: "Inicial $75 · Renovación $65",
    certification: "American Heart Association (AHA)",
  },
  {
    id: "acls",
    title: "ACLS Provider",
    fullName: "Advanced Cardiovascular Life Support",
    poster: "/Training/ACLS/ACLS.jpg",
    priceEn: "Initial $225 · Renewal $185",
    priceEs: "Inicial $225 · Renovación $185",
    certification: "American Heart Association (AHA)",
  },
  {
    id: "wfa",
    title: "Wilderness First Aid",
    fullName: "WFA",
    poster: "/Training/WFA/WFA.jpg",
    priceEn: "$350 per person",
    priceEs: "$350 por persona",
    certification: "Survival Med",
  },
  {
    id: "wfr",
    title: "Wilderness First Responder",
    fullName: "WFR",
    poster: "/Training/WFR/WFR.jpg",
    priceEn: "$1,000 per person",
    priceEs: "$1,000 por persona",
    certification: "Survival Med",
  },
];

// =====================================================
// AUTOMATIC PROPOSED TRAINING DATES
//
// These are inquiry opportunities, NOT confirmed classes.
// Dates are generated from the visitor's local date.
// =====================================================

function dateAtNoon(year, month, day) {
  return new Date(year, month, day, 12, 0, 0);
}

function nextProposedDates(courseId, total = 4) {
  const now = new Date();

  const start = dateAtNoon(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const dates = [];

  // Reference Saturday for alternating ACLS sessions.
  const anchor = Date.UTC(2026, 10, 21) / 86400000;

  for (
    let offset = 1;
    offset <= 125 && dates.length < total;
    offset++
  ) {
    const date = dateAtNoon(
      start.getFullYear(),
      start.getMonth(),
      start.getDate() + offset
    );

    const weekday = date.getDay();
    const day = date.getDate();

    const dayNumber =
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      ) / 86400000;

    const matches =
      (courseId === "bls" &&
        (weekday === 2 || weekday === 6)) ||

      (courseId === "acls" &&
        weekday === 6 &&
        (dayNumber - anchor) % 14 === 0) ||

      (courseId === "wfa" &&
        weekday === 0) ||

      (courseId === "wfr" &&
        (day === 1 || day === 15));

    if (matches) {
      dates.push(date);
    }
  }

  return dates;
}

// =====================================================
// TRAINING INQUIRY EMAIL
// =====================================================

function trainingInquiryLink(course, date, es) {
  const dateText = date.toLocaleDateString(
    es ? "es-US" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const subject = es
    ? `Solicitud de capacitación - ${course.title} - ${dateText}`
    : `Training Request - ${course.title} - ${dateText}`;

  const body = es
    ? [
        "Hola DC LifeSafe Global,",
        "",
        `Me interesa solicitar capacitación en ${course.title}.`,
        "",
        `Fecha preferida: ${dateText}`,
        "(Fecha propuesta, pendiente de confirmación)",
        "",
        "Nombre completo:",
        "Número de participantes:",
        "Ciudad / Estado:",
        "Idioma preferido:",
        "Preguntas adicionales:",
        "",
        "Entiendo que la fecha y ubicación deben confirmarse.",
        "",
        "Gracias.",
      ].join("\n")
    : [
        "Hello DC LifeSafe Global,",
        "",
        `I am interested in ${course.title} training.`,
        "",
        `Preferred date: ${dateText}`,
        "(Proposed date, subject to confirmation)",
        "",
        "Full Name:",
        "Number of Participants:",
        "City / State:",
        "Preferred Language:",
        "Additional Questions:",
        "",
        "I understand that the date and location require confirmation.",
        "",
        "Thank you.",
      ].join("\n");

  return (
    "mailto:info@dclifesafeglobal.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body)
  );
}

// =====================================================
// MAIN TRAINING PAGE
// =====================================================

export default function Training() {
  const { language } = useLanguage();

  const es = language === "es";
  const prefix = es ? "/es" : "";

  const t =
    translations[language]?.trainingPage ||
    translations.en.trainingPage;

  // =====================================================
  // ORIGINAL TRAINING PROGRAMS
  // =====================================================

  const programs = [
    {
      icon: "/icon_bls.png",
      title: "BLS",
      subtitle: t.blsTitle,
      text: t.blsText,
      link: `${prefix}/training/bls`,
      internal: true,
    },
    {
      icon: "/icon_acls.png",
      title: "ACLS",
      subtitle: t.aclsTitle,
      text: t.aclsText,
      link: `${prefix}/training/acls`,
      internal: true,
    },
    {
      icon: "/icon_wilderness.png",
      title: t.wildernessTitle,
      subtitle: "",
      text: t.wildernessText,
      link: `${prefix}/training/wfa`,
      internal: true,
    },
    {
      icon: "/icon_group.png",
      title: t.privateTitle,
      subtitle: "",
      text: t.privateText,
      link:
        "mailto:info@dclifesafeglobal.com?subject=Private%20Workshop%20Inquiry",
      internal: false,
    },
  ];

  // =====================================================
  // SHARED STYLES
  // =====================================================

  const posterGridStyle = {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
    gap: "24px",
    marginTop: "30px",
    alignItems: "stretch",
  };

  const posterCardStyle = {
    background: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 6px 24px rgba(15, 35, 60, 0.09)",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e5eaf0",
  };

  const courseLinkStyle = {
    display: "block",
    padding: "14px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#ffffff",
    background: "#0c355c",
    textAlign: "center",
    fontWeight: 600,
    marginTop: "auto",
  };

  const paragraphStyle = {
    color: "#43546a",
    lineHeight: 1.85,
    fontSize: "16px",
  };

  // =====================================================
  // PAGE CONTENT
  // =====================================================

  return (
    <>

      {/* =====================================
          ORIGINAL TRAINING HERO
      ===================================== */}

      <section className="hero-training">
        <div className="container hero-training-grid">

          <div className="training-copy">

            <div className="eyebrow">
              {t.betterTraining}
              <br />
              {t.strongerTomorrow}
            </div>

            <h1>{t.heroTitle}</h1>

            <p>{t.heroText}</p>

            <div className="hero-buttons">

              <a
                className="btn btn-outline"
                href="mailto:info@dclifesafeglobal.com?subject=Private%20Session%20Inquiry"
              >
                {t.requestPrivate}
              </a>

              <a
                className="btn btn-dark"
                href="mailto:info@dclifesafeglobal.com?subject=Group%20Training%20Inquiry"
              >
                {t.requestGroup}
              </a>

            </div>

          </div>

          <img
            src="/hero_training.png"
            alt="DC LifeSafe Global Training"
            className="hero-training-image"
          />

        </div>
      </section>

      {/* =====================================
          BUILD SKILLS. SAVE LIVES.
      ===================================== */}

      <section className="section">

        <div className="container text-center">

          <div className="eyebrow center">
            {t.sectionTitle}
          </div>

          <h2 className="section-title">
            {t.sectionTitle}
          </h2>

          <div className="card-grid columns-4 mt-medium">

            {programs.map((item) => (

              <article
                className="program-card"
                key={item.title}
              >

                <img
                  src={item.icon}
                  alt=""
                  className="program-icon"
                />

                <h3>
                  {item.title}

                  {item.subtitle && (
                    <>
                      <br />
                      {item.subtitle}
                    </>
                  )}
                </h3>

                <p>{item.text}</p>

                {item.internal ? (
                  <Link
                    className="text-link"
                    to={item.link}
                  >
                    {t.learnMore} →
                  </Link>
                ) : (
                  <a
                    className="text-link"
                    href={item.link}
                  >
                    {t.learnMore} →
                  </a>
                )}

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          TRAINING COURSES & CERTIFICATIONS
      ===================================== */}

      <section
        className="section"
        id="upcoming-training-classes"
        style={{
          background: "#f5f7fa",
        }}
      >

        <div className="container">

          <div className="text-center">

            <div className="eyebrow center">
              DC LifeSafe Global
            </div>

            <h2 className="section-title">
              {es
                ? "Cursos y certificaciones"
                : "Training Courses & Certifications"}
            </h2>

            <p
              style={{
                maxWidth: "720px",
                margin: "12px auto 0",
                color: "#526173",
                lineHeight: 1.7,
              }}
            >
              {es
                ? "Explora nuestros cursos de soporte vital y medicina en zonas agrestes. Tarifas confirmadas, horarios flexibles y clases en inglés y español."
                : "Explore our life support and wilderness medicine courses. Confirmed tuition, flexible scheduling, and classes in English and Spanish."}
            </p>

          </div>

          {/* FOUR OFFICIAL COURSE FLYERS */}

          <div style={posterGridStyle}>

            {scheduledCourses.map((course) => (

              <article
                key={course.id}
                style={posterCardStyle}
              >

                <Link
                  to={`${prefix}/training/${course.id}`}
                  aria-label={
                    es
                      ? `Ver curso ${course.title}`
                      : `View ${course.title} course`
                  }
                  style={{
                    display: "block",
                    padding: "16px",
                    background: "#eaf0f5",
                    textAlign: "center",
                  }}
                >

                  <img
                    src={course.poster}
                    alt={`${course.title} - DC LifeSafe Global`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      maxWidth: "360px",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                      borderRadius: "6px",
                    }}
                  />

                </Link>

                <div
                  style={{
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    gap: "12px",
                  }}
                >

                  <span
                    style={{
                      color: "#24748d",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {course.certification}
                  </span>

                  <h3
                    style={{
                      color: "#10294a",
                      margin: 0,
                      fontSize: "22px",
                      lineHeight: 1.3,
                    }}
                  >
                    {course.title}
                  </h3>

                  <p
                    style={{
                      color: "#5a6778",
                      margin: 0,
                    }}
                  >
                    {course.fullName}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#253c56",
                    }}
                  >

                    <CalendarDays
                      size={19}
                      style={{
                        flexShrink: 0,
                      }}
                    />

                    <span>
                      {es
                        ? "Horarios flexibles · Inglés y español"
                        : "Flexible Scheduling · English & Spanish"}
                    </span>

                  </div>

                  <p
                    style={{
                      fontWeight: 700,
                      color: "#a71919",
                      margin: "4px 0 10px",
                    }}
                  >
                    {es
                      ? course.priceEs
                      : course.priceEn}
                  </p>

                  <Link
                    to={`${prefix}/training/${course.id}`}
                    style={courseLinkStyle}
                  >
                    {es
                      ? "Ver detalles del curso"
                      : "View Course Details"}
                  </Link>

                </div>

              </article>

            ))}

          </div>

          <p
            style={{
              fontSize: "14px",
              color: "#637083",
              textAlign: "center",
              marginTop: "24px",
              lineHeight: 1.6,
            }}
          >
            {es
              ? "Las fechas, horarios, instalaciones y plazas disponibles deben confirmarse antes de la inscripción."
              : "Course dates, schedules, facilities, and seat availability require confirmation before enrollment."}
          </p>

        </div>

      </section>

      {/* =====================================
          UPCOMING TRAINING OPPORTUNITIES
      ===================================== */}

      <section
        className="section"
        id="upcoming-training-opportunities"
      >

        <div className="container">

          <div className="text-center">

            <div className="eyebrow center">
              {es
                ? "Horarios flexibles · Inglés y español"
                : "Flexible Scheduling · English & Spanish"}
            </div>

            <h2 className="section-title">
              {es
                ? "Próximas oportunidades de capacitación"
                : "Upcoming Training Opportunities"}
            </h2>

            <p className="section-subtitle narrow">
              {es
                ? "Selecciona una fecha propuesta para solicitar información. La realización del curso, el lugar y las plazas se confirman individualmente."
                : "Choose a proposed date to request information. Course operation, venue, and availability are confirmed individually."}
            </p>

          </div>

          <div style={posterGridStyle}>

            {scheduledCourses.map((course) => (

              <article
                key={course.id}
                style={{
                  ...posterCardStyle,
                  padding: "22px",
                  gap: "12px",
                }}
              >

                <h3
                  style={{
                    margin: 0,
                    color: "#10294a",
                    fontSize: "21px",
                  }}
                >
                  {course.title}
                </h3>

                <p
                  style={{
                    ...paragraphStyle,
                    margin: 0,
                    fontSize: "14px",
                  }}
                >
                  {course.id === "wfr"
                    ? (
                      es
                        ? "Dos oportunidades mensuales para consultar el inicio online. Las prácticas presenciales se coordinan por separado."
                        : "Two monthly online-start inquiry opportunities. In-person practicals are arranged separately."
                    )
                    : course.id === "bls"
                      ? (
                        es
                          ? "Martes y sábados propuestos"
                          : "Proposed Tuesdays & Saturdays"
                      )
                      : course.id === "acls"
                        ? (
                          es
                            ? "Sábados alternos propuestos"
                            : "Proposed Alternate Saturdays"
                        )
                        : (
                          es
                            ? "Domingos propuestos"
                            : "Proposed Sundays"
                        )}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "6px",
                  }}
                >

                  {nextProposedDates(course.id).map((date) => (

                    <a
                      key={`${course.id}-${date.getTime()}`}
                      href={trainingInquiryLink(
                        course,
                        date,
                        es
                      )}
                      className="btn btn-outline"
                      style={{
                        textAlign: "center",
                        whiteSpace: "normal",
                      }}
                    >

                      {date.toLocaleDateString(
                        es ? "es-US" : "en-US",
                        {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}

                      {" — "}

                      {es
                        ? "Solicitar información"
                        : "Request Information"}

                    </a>

                  ))}

                </div>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#637083",
                    margin: "auto 0 0",
                  }}
                >
                  {es
                    ? "Fecha tentativa. No constituye una reserva ni una sesión confirmada."
                    : "Proposed only. Not a reserved seat or confirmed session."}
                </p>

              </article>

            ))}

          </div>

          <p
            style={{
              textAlign: "center",
              margin: "30px auto 0",
              maxWidth: "780px",
              lineHeight: 1.8,
              color: "#43546a",
            }}
          >
            {es
              ? "¿No encuentras una fecha adecuada? Podemos coordinar horarios flexibles para clases individuales y grupales, según disponibilidad."
              : "Need another date? We can discuss flexible scheduling for individuals and groups, subject to availability."}
          </p>

          <div
            style={{
              textAlign: "center",
              marginTop: "18px",
            }}
          >

            <a
              className="btn"
              href="mailto:info@dclifesafeglobal.com?subject=Flexible%20Training%20Date%20Inquiry"
            >
              {es
                ? "Solicitar otra fecha"
                : "Request Another Date"}
            </a>

          </div>

        </div>

      </section>

      {/* =====================================
          PREVENTION & TRAINING PHILOSOPHY
      ===================================== */}

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
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {es
                ? "Nuestro enfoque de capacitación"
                : "Our Approach to Training"}
            </p>

            <h2 className="section-title">
              {es
                ? "La preparación comienza antes de una emergencia."
                : "Preparedness Starts Before the Emergency."}
            </h2>

            <div
              style={{
                maxWidth: "830px",
                margin: "0 auto",
              }}
            >

              <p style={paragraphStyle}>
                {es
                  ? "Aprender a responder ante una emergencia puede salvar vidas. Reconocer riesgos y prevenir situaciones evitables también forma parte de una buena preparación."
                  : "Learning how to respond to an emergency can save lives. Recognizing risks and preventing avoidable situations are also part of being prepared."}
              </p>

              <p style={paragraphStyle}>
                {es
                  ? "En DC LifeSafe Global creemos que la capacitación debe ir más allá de memorizar procedimientos. Buscamos que los participantes comprendan lo que hacen, desarrollen habilidades prácticas y aprendan a tomar decisiones informadas."
                  : "At DC LifeSafe Global, we believe training should go beyond memorizing procedures. We encourage participants to understand what they are doing, develop practical skills, and make informed decisions."}
              </p>

              <p style={paragraphStyle}>
                {es
                  ? "En WFA y WFR fomentamos escenarios prácticos, trabajo en equipo e improvisación responsable con los recursos disponibles. Las actividades pueden realizarse en aula o campo. Las evaluaciones remotas se ofrecen únicamente cuando están permitidas por el programa de certificación."
                  : "For WFA and WFR, we emphasize practical scenarios, teamwork, and safe improvisation with available resources. Activities may take place in a classroom or in the field. Remote skills assessments are offered only when permitted by the certification program."}
              </p>

              <p
                style={{
                  color: "#10294a",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  lineHeight: 1.7,
                  marginTop: "30px",
                }}
              >
                {es
                  ? "El conocimiento empodera. La preparación protege. La compasión conecta."
                  : "Knowledge Empowers. Preparation Protects. Compassion Connects."}
              </p>

              <Link
                to={`${prefix}/about`}
                className="btn"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                }}
              >
                {es
                  ? "Conoce nuestra filosofía"
                  : "Learn About Our Philosophy"}
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          ORIGINAL BENEFITS & TRAINING GEAR
      ===================================== */}

      <section className="section">

        <div className="container">

          <div className="training-bottom-grid">

            {/* BENEFITS */}

            <div className="training-benefits">

              <h3>{t.whyTitle}</h3>

              <ul>

                <li>
                  <CheckCircle2 size={18} />
                  {t.why1}
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  {t.why2}
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  {t.why3}
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  {t.why4}
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  {t.why5}
                </li>

              </ul>

            </div>

            {/* TRAINING EQUIPMENT */}

            <div className="training-bag-panel">

              <img
                src="/training_gear.png"
                alt={
                  es
                    ? "Equipo de capacitación de DC LifeSafe Global"
                    : "DC LifeSafe Global Training Equipment"
                }
              />

            </div>

            {/* AVAILABLE COURSES */}

            <aside className="upcoming-card">

              <h4>
                <CalendarDays size={20} />

                {es
                  ? "Cursos disponibles"
                  : "Available Courses"}
              </h4>

              {scheduledCourses.map((course) => (

                <div
                  className="course-item"
                  key={course.id}
                >

                  <strong>
                    {course.title}
                  </strong>

                  <span>
                    {es
                      ? "Solicita una fecha flexible"
                      : "Request a Flexible Date"}
                  </span>

                  <small>
                    {course.certification}
                  </small>

                  <Link
                    to={`${prefix}/training/${course.id}`}
                    className="text-link"
                    style={{
                      display: "inline-block",
                      marginTop: "8px",
                    }}
                  >
                    {es
                      ? "Ver curso"
                      : "View Course"} →
                  </Link>

                </div>

              ))}

            </aside>

          </div>

          {/* =====================================
              ORIGINAL BOTTOM ACTION BAR
          ===================================== */}

          <div className="bottom-action-bar">

            <div>

              <strong>
                {t.betterTraining}
              </strong>

              <span>
                {t.strongerTomorrow}
              </span>

            </div>

            <a
              className="btn btn-danger"
              href="mailto:info@dclifesafeglobal.com?subject=Training%20Inquiry"
            >
              {t.getStarted}
            </a>

          </div>

        </div>

      </section>

    </>
  );
}

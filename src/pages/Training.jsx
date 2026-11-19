import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
  Mail,
} from "lucide-react";

import { useLanguage } from "../components/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

// =====================================================
// DC LIFESAFE GLOBAL
// TRAINING PAGE
//
// Medicine Beyond the Trail.
// Prevention Begins at Home.
//
// Flexible & Personalized Training
// Bilingual: English / Spanish
// =====================================================


// =====================================================
// OFFICIAL COURSES & PRICES
// =====================================================

const scheduledCourses = [
  {
    id: "bls",
    title: "BLS Provider",
    fullName: "Basic Life Support",
    fullNameEs: "Soporte Vital Básico",
    poster: "/Training/BLS/BLS.jpg",
    priceEn: "Initial $75 · Renewal $65",
    priceEs: "Inicial $75 · Renovación $65",
    certification: "American Heart Association (AHA)",
  },
  {
    id: "acls",
    title: "ACLS Provider",
    fullName: "Advanced Cardiovascular Life Support",
    fullNameEs: "Soporte Vital Cardiovascular Avanzado",
    poster: "/Training/ACLS/ACLS.jpg",
    priceEn: "Initial $225 · Renewal $185",
    priceEs: "Inicial $225 · Renovación $185",
    certification: "American Heart Association (AHA)",
  },
  {
    id: "wfa",
    title: "Wilderness First Aid",
    fullName: "Wilderness First Aid (WFA)",
    fullNameEs: "Primeros Auxilios en Zonas Agrestes",
    poster: "/Training/WFA/WFA.jpg",
    priceEn: "$350 per person",
    priceEs: "$350 por persona",
    certification: "Survival Med",
  },
  {
    id: "wfr",
    title: "Wilderness First Responder",
    fullName: "Wilderness First Responder (WFR)",
    fullNameEs: "Primer Respondiente en Zonas Agrestes",
    poster: "/Training/WFR/WFR.jpg",
    priceEn: "$1,000 per person",
    priceEs: "$1,000 por persona",
    certification: "Survival Med",
  },
];


// =====================================================
// DATE UTILITIES
// =====================================================

// Noon avoids daylight-saving issues when working
// with calendar dates.

function dateAtNoon(year, month, day) {
  return new Date(year, month, day, 12, 0, 0);
}


// =====================================================
// ROLLING FOUR-MONTH CALENDAR
//
// Current month + next three months.
//
// All dates are proposed opportunities.
// They are NOT confirmed classes.
// =====================================================

function getVisibleMonths() {
  const today = new Date();

  return Array.from({ length: 4 }, (_, index) =>
    dateAtNoon(
      today.getFullYear(),
      today.getMonth() + index,
      1
    )
  );
}


// =====================================================
// PROPOSED COURSE DATES
// =====================================================

function getProposedDates(courseId, selectedMonth) {
  const today = new Date();

  const todayDate = dateAtNoon(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const year = selectedMonth.getFullYear();
  const month = selectedMonth.getMonth();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const dates = [];

  // Alternating ACLS Saturdays.
  // Reference: November 21, 2026.
  const aclsAnchor =
    Date.UTC(2026, 10, 21) / 86400000;

  for (let day = 1; day <= daysInMonth; day++) {
    const date = dateAtNoon(year, month, day);

    // Do not show past dates.
    if (date <= todayDate) continue;

    const weekday = date.getDay();

    const dayNumber =
      Date.UTC(year, month, day) / 86400000;

    let matches = false;

    switch (courseId) {
      case "bls":
        // Tuesdays and Saturdays
        matches =
          weekday === 2 || weekday === 6;
        break;

      case "acls":
        // Alternating Saturdays
        matches =
          weekday === 6 &&
          (dayNumber - aclsAnchor) % 14 === 0;
        break;

      case "wfa":
        // Sundays
        matches = weekday === 0;
        break;

      case "wfr":
        // Online-start inquiry opportunities
        matches = day === 1 || day === 15;
        break;

      default:
        matches = false;
    }

    if (matches) {
      dates.push(date);
    }
  }

  return dates;
}


// =====================================================
// DATE FORMATTING
// =====================================================

function formatDate(date, es, includeYear = true) {
  return date.toLocaleDateString(
    es ? "es-US" : "en-US",
    {
      weekday: "short",
      month: "short",
      day: "numeric",
      ...(includeYear ? { year: "numeric" } : {}),
    }
  );
}

function formatMonth(date, es) {
  const result = date.toLocaleDateString(
    es ? "es-US" : "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );

  return result.charAt(0).toUpperCase() + result.slice(1);
}


// =====================================================
// EMAIL UTILITIES
// =====================================================

function createMailto(subject, body) {
  return (
    "mailto:info@dclifesafeglobal.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body)
  );
}


// =====================================================
// INQUIRY FOR A PROPOSED DATE
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
    ? `Consulta de capacitación - ${course.title} - ${dateText}`
    : `Training Inquiry - ${course.title} - ${dateText}`;

  const body = es
    ? [
        "Hola DC LifeSafe Global,",
        "",
        `Me interesa el curso ${course.title}.`,
        "",
        `Fecha propuesta seleccionada: ${dateText}`,
        "",
        "Nombre completo:",
        "Número de participantes:",
        "Ciudad / Estado:",
        "Horario preferido:",
        "Idioma preferido: Español / Inglés",
        "Modalidad preferida:",
        "Certificación inicial o renovación (si corresponde):",
        "Comentarios adicionales:",
        "",
        "Entiendo que esta fecha está sujeta a confirmación.",
        "",
        "Gracias.",
      ].join("\n")
    : [
        "Hello DC LifeSafe Global,",
        "",
        `I am interested in ${course.title}.`,
        "",
        `Selected proposed date: ${dateText}`,
        "",
        "Full Name:",
        "Number of Participants:",
        "City / State:",
        "Preferred Time:",
        "Preferred Language: English / Spanish",
        "Preferred Training Format:",
        "Initial or Renewal (if applicable):",
        "Additional Questions:",
        "",
        "I understand this date is subject to confirmation.",
        "",
        "Thank you.",
      ].join("\n");

  return createMailto(subject, body);
}


// =====================================================
// PERSONALIZED TRAINING INQUIRY
// =====================================================

function personalizedTrainingLink(course, es) {
  const courseName = course
    ? course.title
    : es
      ? "Capacitación personalizada"
      : "Personalized Training";

  const subject = es
    ? `Solicitud de capacitación personalizada - ${courseName}`
    : `Personalized Training Request - ${courseName}`;

  const body = es
    ? [
        "Hola DC LifeSafe Global,",
        "",
        "Me interesa solicitar una capacitación personalizada.",
        "",
        `Curso: ${course ? course.title : ""}`,
        "",
        "Nombre completo:",
        "Número de participantes:",
        "Fecha preferida:",
        "Horario preferido:",
        "  Mañana / Tarde / Noche / Fin de semana",
        "",
        "Modalidad preferida:",
        "  Individual / Grupal / A domicilio / Lugar de trabajo",
        "",
        "Ciudad / Estado / Código postal:",
        "Idioma preferido: Español / Inglés",
        "Certificación inicial o renovación (si corresponde):",
        "",
        "Comentarios o necesidades especiales:",
        "",
        "Entiendo que la disponibilidad y ubicación deben confirmarse.",
        "",
        "Gracias.",
      ].join("\n")
    : [
        "Hello DC LifeSafe Global,",
        "",
        "I would like to request personalized training.",
        "",
        `Course: ${course ? course.title : ""}`,
        "",
        "Full Name:",
        "Number of Participants:",
        "Preferred Date:",
        "Preferred Time:",
        "  Morning / Afternoon / Evening / Weekend",
        "",
        "Preferred Training Format:",
        "  Private / Group / At Home / Workplace",
        "",
        "City / State / ZIP Code:",
        "Preferred Language: English / Spanish",
        "Initial or Renewal (if applicable):",
        "",
        "Additional Questions or Special Requirements:",
        "",
        "I understand that availability and location require confirmation.",
        "",
        "Thank you.",
      ].join("\n");

  return createMailto(subject, body);
}


// =====================================================
// PRIVATE OR GROUP TRAINING INQUIRY
// =====================================================

function specificTrainingLink(type, es) {
  const isPrivate = type === "private";

  const subject = es
    ? isPrivate
      ? "Solicitud de capacitación privada"
      : "Solicitud de capacitación grupal"
    : isPrivate
      ? "Private Training Inquiry"
      : "Group Training Inquiry";

  const body = es
    ? [
        "Hola DC LifeSafe Global,",
        "",
        isPrivate
          ? "Me interesa solicitar una capacitación privada."
          : "Me interesa solicitar una capacitación grupal.",
        "",
        "Nombre completo:",
        "Organización (si corresponde):",
        "Curso solicitado:",
        "Número de participantes:",
        "Fecha preferida:",
        "Horario preferido:",
        "Ciudad / Estado / Código postal:",
        "Modalidad o lugar preferido:",
        "Idioma preferido: Español / Inglés",
        "",
        "Comentarios adicionales:",
        "",
        "Gracias.",
      ].join("\n")
    : [
        "Hello DC LifeSafe Global,",
        "",
        isPrivate
          ? "I am interested in private training."
          : "I am interested in group training.",
        "",
        "Full Name:",
        "Organization (if applicable):",
        "Requested Course:",
        "Number of Participants:",
        "Preferred Date:",
        "Preferred Time:",
        "City / State / ZIP Code:",
        "Preferred Format or Location:",
        "Preferred Language: English / Spanish",
        "",
        "Additional Questions:",
        "",
        "Thank you.",
      ].join("\n");

  return createMailto(subject, body);
}


// =====================================================
// MAIN TRAINING COMPONENT
// =====================================================

export default function Training() {
  const { language } = useLanguage();

  const es = language === "es";
  const prefix = es ? "/es" : "";

  const t =
    translations[language]?.trainingPage ||
    translations.en.trainingPage;

  const [selectedMonthIndex, setSelectedMonthIndex] =
    useState(0);

  const visibleMonths = getVisibleMonths();

  const selectedMonth =
    visibleMonths[selectedMonthIndex] ||
    visibleMonths[0];


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
      link: specificTrainingLink("group", es),
      internal: false,
    },
  ];


  // =====================================================
  // SHARED STYLES
  // =====================================================

  const cardGridStyle = {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
    gap: "24px",
    marginTop: "30px",
    alignItems: "stretch",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 6px 24px rgba(15, 35, 60, 0.09)",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e5eaf0",
  };

  const buttonStyle = {
    display: "block",
    padding: "14px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#ffffff",
    background: "#0c355c",
    textAlign: "center",
    fontWeight: 600,
    lineHeight: 1.4,
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: "#ffffff",
    color: "#0c355c",
    border: "2px solid #0c355c",
  };

  const paragraphStyle = {
    color: "#43546a",
    lineHeight: 1.85,
    fontSize: "16px",
  };


  // =====================================================
  // PAGE
  // =====================================================

  return (
    <>

      {/* =====================================
          TRAINING HERO
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
                href={specificTrainingLink("private", es)}
              >
                {es
                  ? "Solicitar capacitación privada"
                  : "Request Private Training"}
              </a>

              <a
                className="btn btn-dark"
                href={specificTrainingLink("group", es)}
              >
                {es
                  ? "Solicitar capacitación grupal"
                  : "Request Group Training"}
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
          TRAINING PROGRAMS
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
                maxWidth: "750px",
                margin: "12px auto 0",
                color: "#526173",
                lineHeight: 1.8,
              }}
            >
              {es
                ? "Explora nuestros cursos de soporte vital y medicina en zonas agrestes. Tarifas confirmadas, programación flexible y clases disponibles en inglés y español."
                : "Explore our life support and wilderness medicine courses. Confirmed tuition, flexible scheduling, and classes available in English and Spanish."}
            </p>

          </div>


          {/* FOUR OFFICIAL COURSE FLYERS */}

          <div style={cardGridStyle}>

            {scheduledCourses.map((course) => (

              <article
                key={course.id}
                style={cardStyle}
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
                    {es
                      ? course.fullNameEs
                      : course.fullName}
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
                    style={{
                      ...buttonStyle,
                      marginTop: "auto",
                    }}
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
              lineHeight: 1.7,
            }}
          >
            {es
              ? "Las fechas, horarios, instalaciones y plazas disponibles deben confirmarse antes de la inscripción."
              : "Course dates, schedules, facilities, and seat availability require confirmation before enrollment."}
          </p>

        </div>

      </section>


      {/* =====================================
          FOUR-MONTH TRAINING CALENDAR
      ===================================== */}

      <section
        className="section"
        id="upcoming-training-opportunities"
      >

        <div className="container">

          <div className="text-center">

            <div className="eyebrow center">
              {es
                ? "Programación flexible · Inglés y español"
                : "Flexible Scheduling · English & Spanish"}
            </div>

            <h2 className="section-title">
              {es
                ? "Próximas oportunidades de capacitación"
                : "Upcoming Training Opportunities"}
            </h2>

            <p className="section-subtitle narrow">
              {es
                ? "Selecciona un mes y una fecha propuesta para solicitar información. También puedes elegir cualquier otra fecha que se adapte a tus necesidades."
                : "Select a month and a proposed date to request information. You may also choose any other date that works for you."}
            </p>

          </div>


          {/* MONTH SELECTOR */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "35px",
              marginBottom: "12px",
            }}
            role="group"
            aria-label={
              es
                ? "Seleccionar mes"
                : "Select month"
            }
          >

            {visibleMonths.map((month, index) => {

              const selected =
                selectedMonthIndex === index;

              return (
                <button
                  key={`${month.getFullYear()}-${month.getMonth()}`}
                  type="button"
                  onClick={() => setSelectedMonthIndex(index)}
                  aria-pressed={selected}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    border: selected
                      ? "2px solid #0c355c"
                      : "1px solid #d6e0e8",
                    background: selected
                      ? "#0c355c"
                      : "#ffffff",
                    color: selected
                      ? "#ffffff"
                      : "#0c355c",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  {formatMonth(month, es)}
                </button>
              );
            })}

          </div>


          {/* CALENDAR CARDS */}

          <div style={cardGridStyle}>

            {scheduledCourses.map((course) => {

              const dates = getProposedDates(
                course.id,
                selectedMonth
              );

              return (
                <article
                  key={course.id}
                  style={{
                    ...cardStyle,
                    padding: "22px",
                    gap: "14px",
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
                          ? "Dos oportunidades mensuales para consultar el inicio online. Las 35 horas prácticas se coordinan por separado."
                          : "Two monthly online-start inquiry opportunities. The 35 practical training hours are arranged separately."
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

                  <p
                    style={{
                      color: "#24748d",
                      fontSize: "14px",
                      fontWeight: 700,
                      margin: "4px 0",
                    }}
                  >
                    {formatMonth(selectedMonth, es)}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >

                    {dates.length > 0 ? (

                      dates.map((date) => (

                        <a
                          key={`${course.id}-${date.getTime()}`}
                          href={trainingInquiryLink(
                            course,
                            date,
                            es
                          )}
                          style={{
                            ...secondaryButtonStyle,
                            padding: "12px",
                            fontSize: "14px",
                          }}
                        >

                          {formatDate(date, es)}

                          <br />

                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: 500,
                            }}
                          >
                            {es
                              ? "Solicitar información"
                              : "Request Information"}
                          </span>

                        </a>

                      ))

                    ) : (

                      <p
                        style={{
                          color: "#637083",
                          fontSize: "14px",
                          lineHeight: 1.7,
                        }}
                      >
                        {es
                          ? "No quedan fechas propuestas para este mes. Puedes solicitar una fecha personalizada."
                          : "No proposed dates remain this month. You may request a personalized date."}
                      </p>

                    )}

                  </div>


                  {/* CUSTOM DATE BUTTON */}

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "18px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >

                    <p
                      style={{
                        fontSize: "14px",
                        color: "#43546a",
                        lineHeight: 1.6,
                        marginBottom: "12px",
                      }}
                    >
                      {es
                        ? "¿Prefieres otra fecha u horario?"
                        : "Prefer another date or time?"}
                    </p>

                    <a
                      href={personalizedTrainingLink(
                        course,
                        es
                      )}
                      style={{
                        ...buttonStyle,
                        fontSize: "14px",
                      }}
                    >
                      {es
                        ? "Solicita la fecha que prefieras"
                        : "Request Your Preferred Date"}
                    </a>

                  </div>

                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: 1.6,
                      color: "#637083",
                      margin: 0,
                    }}
                  >
                    {es
                      ? "Fechas propuestas sujetas a confirmación. No constituyen reservas."
                      : "Proposed dates are subject to confirmation and do not constitute reservations."}
                  </p>

                </article>
              );
            })}

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
              ? "¿Necesitas programar tu capacitación fuera de estos cuatro meses? También puedes solicitar cualquier otra fecha."
              : "Need to schedule training beyond these four months? You can request any other preferred date."}
          </p>

        </div>

      </section>


      {/* =====================================
          FLEXIBLE & PERSONALIZED TRAINING
      ===================================== */}

      <section
        className="section"
        style={{
          background: "#f5f8fb",
        }}
      >

        <div className="container">

          <div className="text-center">

            <div className="eyebrow center">
              {es
                ? "Capacitación personalizada"
                : "Personalized Training"}
            </div>

            <h2 className="section-title">
              {es
                ? "Capacitación que se adapta a tus horarios"
                : "Training That Fits Your Schedule"}
            </h2>

            <p
              style={{
                ...paragraphStyle,
                maxWidth: "820px",
                margin: "0 auto 20px",
              }}
            >
              {es
                ? "Tus horarios laborales no deberían impedirte aprender habilidades que pueden salvar vidas."
                : "Your work schedule shouldn't prevent you from learning lifesaving skills."}
            </p>

            <p
              style={{
                ...paragraphStyle,
                maxWidth: "850px",
                margin: "0 auto",
              }}
            >
              {es
                ? "En DC LifeSafe Global ofrecemos opciones de capacitación flexibles y personalizadas para profesionales sanitarios, personas con turnos rotativos, familias, grupos y organizaciones."
                : "At DC LifeSafe Global, we offer flexible and personalized training options for healthcare professionals, individuals working rotating shifts, families, groups, and organizations."}
            </p>

          </div>


          {/* FLEXIBLE TRAINING OPTIONS */}

          <div
            style={{
              ...cardGridStyle,
              marginTop: "40px",
            }}
          >

            {[
              {
                icon: <Clock3 size={28} />,
                titleEn: "Flexible Hours",
                titleEs: "Horarios flexibles",
                textEn:
                  "Daytime, afternoon, evening, night, and weekend sessions may be requested.",
                textEs:
                  "Puedes solicitar sesiones durante el día, la tarde, la noche o los fines de semana.",
              },
              {
                icon: <Users size={28} />,
                titleEn: "Private & Group Training",
                titleEs: "Capacitación privada y grupal",
                textEn:
                  "Individual sessions and training for families, healthcare teams, companies, and organizations.",
                textEs:
                  "Sesiones individuales y capacitación para familias, equipos sanitarios, empresas y organizaciones.",
              },
              {
                icon: <MapPin size={28} />,
                titleEn: "On-Site Training",
                titleEs: "Capacitación a domicilio",
                textEn:
                  "Request training at your home, workplace, or another suitable location.",
                textEs:
                  "Solicita capacitación en tu domicilio, lugar de trabajo u otra ubicación apropiada.",
              },
              {
                icon: <CalendarDays size={28} />,
                titleEn: "Choose Your Date",
                titleEs: "Elige tu fecha",
                textEn:
                  "Select a proposed date or request another day and time that works better for you.",
                textEs:
                  "Selecciona una fecha propuesta o solicita otro día y horario que se adapte mejor a tus necesidades.",
              },
            ].map((option) => (

              <article
                key={option.titleEn}
                style={{
                  ...cardStyle,
                  padding: "28px 24px",
                  textAlign: "center",
                  gap: "14px",
                }}
              >

                <div
                  style={{
                    color: "#24748d",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {option.icon}
                </div>

                <h3
                  style={{
                    color: "#10294a",
                    fontSize: "20px",
                    margin: 0,
                  }}
                >
                  {es
                    ? option.titleEs
                    : option.titleEn}
                </h3>

                <p
                  style={{
                    color: "#526173",
                    lineHeight: 1.8,
                    margin: 0,
                    fontSize: "15px",
                  }}
                >
                  {es
                    ? option.textEs
                    : option.textEn}
                </p>

              </article>

            ))}

          </div>


          {/* PERSONALIZED TRAINING CTA */}

          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >

            <a
              href={personalizedTrainingLink(null, es)}
              style={{
                ...buttonStyle,
                display: "inline-block",
                padding: "16px 30px",
              }}
            >
              {es
                ? "Solicitar capacitación personalizada"
                : "Request Personalized Training"}
            </a>

            <p
              style={{
                color: "#637083",
                lineHeight: 1.7,
                fontSize: "13px",
                margin: "18px auto 0",
                maxWidth: "800px",
              }}
            >
              {es
                ? "Todas las solicitudes están sujetas a disponibilidad del instructor, instalaciones adecuadas, requisitos del curso y ubicación. Los posibles gastos adicionales se comunicarán antes de confirmar la inscripción."
                : "All requests are subject to instructor availability, suitable facilities, course requirements, and location. Any additional expenses will be communicated before enrollment is confirmed."}
            </p>

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
          TRAINING BENEFITS & EQUIPMENT
      ===================================== */}

      <section className="section">

        <div className="container">

          <div className="training-bottom-grid">

            {/* BENEFITS */}

            <div className="training-benefits">

              <h3>{t.whyTitle}</h3>

              <ul>

                {[
                  t.why1,
                  t.why2,
                  t.why3,
                  t.why4,
                  t.why5,
                ].map((benefit, index) => (

                  <li key={index}>
                    <CheckCircle2 size={18} />
                    {benefit}
                  </li>

                ))}

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
              BOTTOM ACTION BAR
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
              href={personalizedTrainingLink(null, es)}
            >
              <Mail size={17} />

              {es
                ? "Solicitar información"
                : "Request Information"}
            </a>

          </div>

        </div>

      </section>

    </>
  );
}

import React from "react";

import { useLanguage } from "../components/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

// ==========================================
// DC LIFESAFE GLOBAL
// OFFICIAL SOCIAL MEDIA
// ==========================================

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1EBUVtp5ed/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/facebook.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dc_lifesafe_global/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/instagram.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/dclifesafeglobal/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/linkedin.svg",
  },
];

export default function Contact() {

  const { language } = useLanguage();

  const es = language === "es";

  const t =
    translations[language]?.contactPage ||
    translations.en.contactPage;

  // ==========================================
  // ORIGINAL ICON STYLES
  // ==========================================

  const bigIcon = {
    width: "58px",
    height: "58px",
    objectFit: "contain",
    transform: "scale(1.7)",
    transformOrigin: "center",
  };

  const mediumIcon = {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    transform: "scale(1.55)",
    transformOrigin: "center",
  };

  const shieldIcon = {
    width: "26px",
    height: "26px",
    objectFit: "contain",
    transform: "scale(1.25)",
    transformOrigin: "center",
  };

  // ==========================================
  // SOCIAL MEDIA STYLES
  // ==========================================

  const socialContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "22px",
    marginTop: "25px",
    marginBottom: "20px",
  };

  const socialButtonStyle = {
    width: "58px",
    height: "58px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff",
    border: "1px solid #dce5ed",
    borderRadius: "50%",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
    textDecoration: "none",
    transition: "transform 0.2s ease",
  };

  const socialIconStyle = {
    width: "27px",
    height: "27px",
    display: "block",
    objectFit: "contain",
  };

  // ==========================================
  // CONTACT FORM
  // ==========================================

  function handleSubmit(event) {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "General Inquiry";
    const message = formData.get("message") || "";

    const mailSubject = es
      ? `Mensaje web: ${subject}`
      : `Website message: ${subject}`;

    const mailBody = es
      ? `
Hola DC LifeSafe Global,

Me gustaría más información.

Nombre: ${name}
Email: ${email}
Asunto: ${subject}

Mensaje:
${message}
`
      : `
Hello DC LifeSafe Global,

I would like more information.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`;

    window.location.href =
      `mailto:info@dclifesafeglobal.com?subject=${encodeURIComponent(
        mailSubject
      )}&body=${encodeURIComponent(mailBody)}`;

  }

  return (

    <section className="section">

      <div className="container">

        {/* ======================================
            CONTACT HEADER
        ====================================== */}

        <div className="text-center">

          <h1 className="section-title">
            {t.title}
          </h1>

          <p className="section-subtitle narrow">
            {t.subtitle}
          </p>

        </div>

        {/* ======================================
            CONTACT GRID
        ====================================== */}

        <div className="contact-grid">

          {/* ======================================
              LEFT CONTACT PANEL
          ====================================== */}

          <div className="contact-panel contact-panel-enhanced">

            <div className="contact-left-block">

              <div className="contact-info-header">

                <div className="contact-icon-circle">

                  <img
                    src="/icon_contact_info.png"
                    alt={es ? "Información de contacto" : "Contact information"}
                    style={mediumIcon}
                  />

                </div>

                <div>

                  <h3>
                    {t.contactInfo}
                  </h3>

                </div>

              </div>

              {/* CONTACT INFORMATION */}

              <div className="contact-info-list">

                {/* PHONE */}

                <div className="contact-info-item">

                  <div className="contact-icon-circle">

                    <img
                      src="/icon_phone.png"
                      alt={es ? "Teléfono" : "Phone"}
                      style={bigIcon}
                    />

                  </div>

                  <div className="contact-info-copy">

                    <strong>
                      720.527.9516
                    </strong>

                    <span>
                      {t.hours}
                    </span>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="contact-info-item">

                  <div className="contact-icon-circle">

                    <img
                      src="/icon_email.png"
                      alt="Email"
                      style={bigIcon}
                    />

                  </div>

                  <div className="contact-info-copy">

                    <strong>
                      info@dclifesafeglobal.com
                    </strong>

                    <span>
                      {t.emailReply}
                    </span>

                  </div>

                </div>

                {/* LOCATION */}

                <div className="contact-info-item">

                  <div className="contact-icon-circle">

                    <img
                      src="/icon_location.png"
                      alt={es ? "Ubicación" : "Location"}
                      style={bigIcon}
                    />

                  </div>

                  <div className="contact-info-copy">

                    <strong>
                      {t.location}
                    </strong>

                    <span>
                      {t.locationText}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <div className="contact-divider" />

            {/* ======================================
                SEND US A MESSAGE
            ====================================== */}

            <div className="contact-left-block">

              <div className="contact-info-header">

                <div className="contact-icon-circle">

                  <img
                    src="/icon_message.png"
                    alt={es ? "Envíanos un mensaje" : "Send us a message"}
                    style={mediumIcon}
                  />

                </div>

                <div>

                  <h3>
                    {t.sendMessage}
                  </h3>

                </div>

              </div>

              <p className="contact-left-description">
                {t.sendMessageText}
              </p>

              {/* QUICK CONTACT ACTIONS */}

              <div className="contact-quick-actions">

                <a
                  className="btn"
                  href="tel:+17205279516"
                >
                  {t.callNow}
                </a>

                <a
                  className="btn btn-outline"
                  href="mailto:info@dclifesafeglobal.com"
                >
                  {t.emailUs}
                </a>

              </div>

              {/* PRIVACY NOTE */}

              <div className="contact-trust-note">

                <img
                  src="/icon_shield_a.png"
                  alt={es ? "Privacidad" : "Privacy"}
                  style={shieldIcon}
                />

                <span>
                  {t.safetyText}
                </span>

              </div>

            </div>

          </div>

          {/* ======================================
              CONTACT FORM
          ====================================== */}

          <form
            className="form-card"
            onSubmit={handleSubmit}
          >

            <h3>
              {t.formTitle}
            </h3>

            <label htmlFor="name">
              {t.yourName}
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder={t.yourName}
            />

            <label htmlFor="email">
              {t.yourEmail}
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.yourEmail}
            />

            <label htmlFor="subject">
              {t.selectSubject}
            </label>

            <select
              id="subject"
              name="subject"
              defaultValue=""
            >

              <option value="" disabled>
                {t.selectSubject}
              </option>

              <option>
                {es ? "Consulta general" : "General Inquiry"}
              </option>

              <option>
                Wellness / Surfviving
              </option>

              <option>
                {es ? "Cursos de entrenamiento" : "Training Courses"}
              </option>

              <option>
                {es ? "Experiencias outdoor" : "Outdoor Experiences"}
              </option>

              <option>
                {es ? "Entrenamiento privado" : "Private Group Training"}
              </option>

              <option>
                {es ? "Alianzas" : "Partnerships"}
              </option>

              <option>
                {es ? "Otro" : "Other"}
              </option>

            </select>

            <label htmlFor="message">
              {t.yourMessage}
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder={t.yourMessage}
            />

            <button
              className="btn full"
              type="submit"
            >
              {t.sendBtn}
            </button>

          </form>

        </div>

        {/* ======================================
            SOCIAL MEDIA SECTION
        ====================================== */}

        <section
          className="text-center"
          style={{
            marginTop: "65px",
            padding: "45px 25px",
            background: "#f4f7fa",
            borderRadius: "18px",
          }}
        >

          <h2
            className="section-title"
            style={{
              marginBottom: "15px",
            }}
          >
            {es
              ? "Síguenos en nuestras redes sociales"
              : "Follow Us on Social Media"}
          </h2>

          <p
            style={{
              color: "#43546a",
              lineHeight: 1.8,
              maxWidth: "720px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            {es
              ? "Te invitamos a formar parte de nuestra comunidad. Compartimos recursos educativos, consejos de prevención, iniciativas de bienestar, experiencias al aire libre y novedades sobre nuestros proyectos."
              : "We invite you to join our community. We share educational resources, prevention tips, wellness initiatives, outdoor experiences, and updates about our projects."}
          </p>

          {/* SOCIAL ICONS */}

          <div style={socialContainerStyle}>

            {socialLinks.map((social) => (

              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                style={socialButtonStyle}
              >

                <img
                  src={social.icon}
                  alt=""
                  style={socialIconStyle}
                />

              </a>

            ))}

          </div>

          <p
            style={{
              color: "#24748d",
              fontWeight: 600,
              fontSize: "16px",
              marginTop: "15px",
            }}
          >
            {es
              ? "Sigamos conectados. Sigamos aprendiendo. Crezcamos juntos."
              : "Stay connected. Keep learning. Let's grow together."}
          </p>

        </section>

      </div>

    </section>

  );

}

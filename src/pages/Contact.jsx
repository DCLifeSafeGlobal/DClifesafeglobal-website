import React from "react";

import { useLanguage } from "../components/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

export default function Contact() {

  const { language } = useLanguage();

  const t =
    translations[language]?.contactPage ||
    translations.en.contactPage;

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

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "General Inquiry";
    const message = formData.get("message") || "";

    const mailSubject =
      language === "es"
        ? `Mensaje web: ${subject}`
        : `Website message: ${subject}`;

    const mailBody =
      language === "es"
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

        <div className="text-center">

          <h1 className="section-title">
            {t.title}
          </h1>

          <p className="section-subtitle narrow">
            {t.subtitle}
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-panel contact-panel-enhanced">

            <div className="contact-left-block">

              <div className="contact-info-header">

                <div className="contact-icon-circle">

                  <img
                    src="/icon_contact_info.png"
                    alt="Contact information"
                    style={mediumIcon}
                  />

                </div>

                <div>

                  <h3>
                    {t.contactInfo}
                  </h3>

                </div>

              </div>

              <div className="contact-info-list">

                <div className="contact-info-item">

                  <div className="contact-icon-circle">

                    <img
                      src="/icon_phone.png"
                      alt="Phone"
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

                <div className="contact-info-item">

                  <div className="contact-icon-circle">

                    <img
                      src="/icon_location.png"
                      alt="Location"
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

            <div className="contact-left-block">

              <div className="contact-info-header">

                <div className="contact-icon-circle">

                  <img
                    src="/icon_message.png"
                    alt="Send us a message"
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

              <div className="contact-trust-note">

                <img
                  src="/icon_shield_a.png"
                  alt="Privacy"
                  style={shieldIcon}
                />

                <span>
                  {t.safetyText}
                </span>

              </div>

            </div>

          </div>

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
                {language === "es"
                  ? "Consulta general"
                  : "General Inquiry"}
              </option>

              <option>
                Wellness / Surfviving
              </option>

              <option>
                {language === "es"
                  ? "Cursos de entrenamiento"
                  : "Training Courses"}
              </option>

              <option>
                {language === "es"
                  ? "Experiencias outdoor"
                  : "Outdoor Experiences"}
              </option>

              <option>
                {language === "es"
                  ? "Entrenamiento privado"
                  : "Private Group Training"}
              </option>

              <option>
                {language === "es"
                  ? "Alianzas"
                  : "Partnerships"}
              </option>

              <option>
                Other
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

      </div>

    </section>
  );
}
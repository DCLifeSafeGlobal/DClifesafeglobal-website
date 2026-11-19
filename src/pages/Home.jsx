import React from 'react';
import { Link } from 'react-router-dom';

import {
  Shield,
  HeartPulse,
  Compass,
  Users,
} from 'lucide-react';

import NewsletterForm from '../components/NewsletterForm.jsx';
import NewsletterFormES from '../components/NewsletterFormES.jsx';

import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

// =====================================================
// DC LIFESAFE GLOBAL
// HOME PAGE
// Medicine Beyond the Trail.
// Prevention Begins at Home.
// =====================================================

export default function Home() {

  const { language } = useLanguage();

  const lang = language === 'es' ? 'es' : 'en';

  const prefix = lang === 'es' ? '/es' : '';

  const t =
    translations[lang]?.home ||
    translations.en.home;

  // =====================================================
  // BILINGUAL INSTITUTIONAL CONTENT
  // =====================================================

  const institutionalContent = {

    en: {

      heroTitle:
        'Medicine Beyond the Trail.',

      heroPrinciple:
        'Prevention Begins at Home.',

      heroText:
        'We believe that healthier and safer lives begin with prevention, education, and preparation.',

      heroDescription:
        'Through practical training, emotional wellness, and meaningful outdoor experiences, we help people build knowledge, confidence, and resilience for everyday life and unexpected challenges.',

      principleLabel:
        'Our Guiding Principle',

      principleTitle:
        'Prevention Begins at Home.',

      principleText1:
        'Prevention is more than avoiding emergencies. It is about the decisions we make every day to protect our health, understand risks, and care for ourselves and others.',

      principleText2:
        'From healthy habits to wilderness preparedness, we believe that knowledge, awareness, and preparation help us make better decisions.',

      principleText3:
        'Learning how to respond to emergencies matters. Learning how to prevent them whenever possible matters just as much.',

      principleButton:
        'Learn More About Us',

      pillarsTitle:
        'Why DC LifeSafe Global?',

      pillarsSubtitle:
        'Combining practical education, emotional wellness, prevention, and human connection to help people live healthier, safer, and more prepared lives.',

      practicalEducation:
        'Practical Education',

      emotionalWellness:
        'Emotional Wellness',

      preventionPreparedness:
        'Prevention & Preparedness',

      humanConnection:
        'Human Connection',

      philosophy:
        'Knowledge Empowers. Preparation Protects. Compassion Connects.',

      learningCenterTitle:
        'Learning Center',

      learningCenterText:
        'Free educational resources, quick-reference guides, worksheets, algorithms, and practical learning materials for wellness, emergency care, and wilderness medicine.',

      learningCenterBtn:
        'Explore Learning Center',

      genTitle:
        'Global Expedition Network',

      genText:
        'International partnerships, expedition support, wilderness leadership, cultural exploration, and collaborative adventure initiatives across diverse environments.',

      genBtn:
        'Explore GEN',

      booksTitle:
        'Books & Publications',

      booksText:
        'Discover stories and resources that inspire emotional resilience, personal growth, learning, and exploration. From SURFVIVING™ to The Adventures of Myles, each publication encourages discovery, reflection, and meaningful adventures.',

      booksBtn:
        'Explore Our Books',

    },

    es: {

      heroTitle:
        'Medicina más allá del sendero.',

      heroPrinciple:
        'La prevención comienza en casa.',

      heroText:
        'Creemos que una vida más saludable y segura comienza con la prevención, la educación y la preparación.',

      heroDescription:
        'A través de la capacitación práctica, el bienestar emocional y las experiencias significativas en la naturaleza, ayudamos a las personas a desarrollar conocimientos, confianza y resiliencia para enfrentar los desafíos cotidianos y las situaciones inesperadas.',

      principleLabel:
        'Nuestro principio fundamental',

      principleTitle:
        'La prevención comienza en casa.',

      principleText1:
        'La prevención es mucho más que evitar emergencias. Se trata de las decisiones que tomamos cada día para proteger nuestra salud, comprender los riesgos y cuidar de nosotros mismos y de los demás.',

      principleText2:
        'Desde los hábitos saludables hasta la preparación para actividades en zonas agrestes, creemos que el conocimiento, la conciencia y la preparación nos ayudan a tomar mejores decisiones.',

      principleText3:
        'Aprender a responder ante emergencias es importante. Aprender a prevenirlas siempre que sea posible es igualmente esencial.',

      principleButton:
        'Conoce más sobre nosotros',

      pillarsTitle:
        '¿Por qué DC LifeSafe Global?',

      pillarsSubtitle:
        'Integramos educación práctica, bienestar emocional, prevención y conexión humana para ayudar a las personas a vivir de manera más saludable, segura y preparada.',

      practicalEducation:
        'Educación práctica',

      emotionalWellness:
        'Bienestar emocional',

      preventionPreparedness:
        'Prevención y preparación',

      humanConnection:
        'Conexión humana',

      philosophy:
        'El conocimiento empodera. La preparación protege. La compasión conecta.',

      learningCenterTitle:
        'Centro de Aprendizaje',

      learningCenterText:
        'Recursos educativos gratuitos, guías rápidas, hojas de trabajo, algoritmos y materiales prácticos para bienestar, atención de emergencias y medicina en zonas agrestes.',

      learningCenterBtn:
        'Explorar Centro de Aprendizaje',

      genTitle:
        'Red Global de Expediciones',

      genText:
        'Alianzas internacionales, apoyo a expediciones, liderazgo outdoor, exploración cultural e iniciativas colaborativas de aventura en diversos entornos.',

      genBtn:
        'Explorar GEN',

      booksTitle:
        'Libros y Publicaciones',

      booksText:
        'Descubre historias y recursos que inspiran resiliencia emocional, crecimiento personal, aprendizaje y exploración. Desde SURFVIVING™ hasta Las Aventuras de Myles, cada publicación invita al descubrimiento, la reflexión y las aventuras con propósito.',

      booksBtn:
        'Explorar Nuestros Libros',

    },

  };

  const c = institutionalContent[lang];

  // =====================================================
  // SHARED STYLES
  // =====================================================

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonStyle = {
    marginTop: 'auto',
    alignSelf: 'center',
  };

  const paragraphStyle = {
    color: '#43546a',
    lineHeight: 1.8,
    fontSize: '16px',
  };

  // =====================================================
  // BOOKS & PUBLICATIONS
  // ORIGINAL BILINGUAL IMAGES
  // =====================================================

  const booksHomeImage =
    lang === 'es'
      ? '/Books/Home/Books-card-SP.png'
      : '/Books/Home/Books-card-EN.png';

  // =====================================================
  // INSTITUTIONAL PILLARS
  // =====================================================

  const pillars = [

    {
      icon: Shield,
      title: c.practicalEducation,
    },

    {
      icon: HeartPulse,
      title: c.emotionalWellness,
    },

    {
      icon: Compass,
      title: c.preventionPreparedness,
    },

    {
      icon: Users,
      title: c.humanConnection,
    },

  ];

  // =====================================================
  // HOME PAGE
  // =====================================================

  return (

    <>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="section hero-home-simple">

        <div className="container text-center">

          <h1 className="hero-title">

            {c.heroTitle}

          </h1>

          <p
            style={{
              color: '#24748d',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              marginTop: '12px',
              marginBottom: '22px',
            }}
          >

            {c.heroPrinciple}

          </p>

          <p
            className="hero-subtitle"
            style={{
              maxWidth: '800px',
              margin: '0 auto 15px',
              fontWeight: 600,
              lineHeight: 1.7,
            }}
          >

            {c.heroText}

          </p>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >

            {c.heroDescription}

          </p>

        </div>

      </section>


      {/* =====================================================
          MAIN SERVICES
          SIX ORIGINAL CARDS
      ===================================================== */}

      <section className="section">

        <div className="container">

          <div className="card-grid home-feature-grid">


            {/* WELLNESS */}

            <article
              className="feature-card home-feature-card"
              style={cardStyle}
            >

              <h2>
                {t.wellness}
              </h2>

              <img
                src="/card_home_wellness.png"
                alt={t.wellness}
                className="feature-thumb"
                loading="lazy"
              />

              <p>
                {t.wellnessText}
              </p>

              <Link
                to={`${prefix}/wellness`}
                className="btn"
                style={buttonStyle}
              >

                {t.wellnessBtn}

              </Link>

            </article>


            {/* TRAINING */}

            <article
              className="feature-card home-feature-card"
              style={cardStyle}
            >

              <h2>
                {t.training}
              </h2>

              <img
                src="/card_home_training.png"
                alt={t.training}
                className="feature-thumb"
                loading="lazy"
              />

              <p>
                {t.trainingText}
              </p>

              <Link
                to={`${prefix}/training`}
                className="btn"
                style={buttonStyle}
              >

                {t.trainingBtn}

              </Link>

            </article>


            {/* OUTDOOR */}

            <article
              className="feature-card home-feature-card"
              style={cardStyle}
            >

              <h2>
                {t.outdoor}
              </h2>

              <img
                src="/card_home_outdoor.png"
                alt={t.outdoor}
                className="feature-thumb"
                loading="lazy"
              />

              <p>
                {t.outdoorText}
              </p>

              <Link
                to={`${prefix}/outdoor`}
                className="btn"
                style={buttonStyle}
              >

                {t.outdoorBtn}

              </Link>

            </article>


            {/* EXPEDITION VISUALS */}

            <article
              className="feature-card home-feature-card"
              style={cardStyle}
            >

              <h2>
                {t.visuals}
              </h2>

              <img
                src="/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg"
                alt={t.visuals}
                className="feature-thumb"
                loading="lazy"
              />

              <p>
                {t.visualsText}
              </p>

              <Link
                to={`${prefix}/visuals`}
                className="btn"
                style={buttonStyle}
              >

                {t.visualsBtn}

              </Link>

            </article>


            {/* LEARNING CENTER */}

            <article
              className="feature-card home-feature-card learning-center-home-card"
              style={cardStyle}
            >

              <h2>
                {c.learningCenterTitle}
              </h2>

              <img
                src="/learning-center/learning-center-home-card.png"
                alt={c.learningCenterTitle}
                className="feature-thumb"
                loading="lazy"
              />

              <p>
                {c.learningCenterText}
              </p>

              <Link
                to={`${prefix}/learning-center`}
                className="btn"
                style={buttonStyle}
              >

                {c.learningCenterBtn}

              </Link>

            </article>


            {/* GLOBAL EXPEDITION NETWORK */}

            <article
              className="feature-card home-feature-card gen-card"
              style={cardStyle}
            >

              <h2>
                {c.genTitle}
              </h2>

              <img
                src="/hero_global_expedition_network.png"
                alt={c.genTitle}
                className="feature-thumb"
                loading="lazy"
              />

              <p>
                {c.genText}
              </p>

              <Link
                to={`${prefix}/network`}
                className="btn"
                style={buttonStyle}
              >

                {c.genBtn}

              </Link>

            </article>


          </div>

        </div>

      </section>


      {/* =====================================================
          OUR GUIDING PRINCIPLE
          PREVENTION BEGINS AT HOME
      ===================================================== */}

      <section className="section">

        <div className="container">

          <div
            style={{
              background: '#eef5f8',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 60px)',
              textAlign: 'center',
              border: '1px solid #dce8ee',
            }}
          >

            <p
              style={{
                color: '#24748d',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontSize: '14px',
                marginBottom: '12px',
              }}
            >

              {c.principleLabel}

            </p>

            <h2 className="section-title">

              {c.principleTitle}

            </h2>

            <div
              style={{
                maxWidth: '820px',
                margin: '0 auto',
              }}
            >

              <p style={paragraphStyle}>

                {c.principleText1}

              </p>

              <p style={paragraphStyle}>

                {c.principleText2}

              </p>

              <p
                style={{
                  ...paragraphStyle,
                  fontWeight: 700,
                  color: '#10294a',
                  marginBottom: '28px',
                }}
              >

                {c.principleText3}

              </p>

            </div>

            <Link
              to={`${prefix}/about`}
              className="btn"
            >

              {c.principleButton}

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKS & PUBLICATIONS
          ORIGINAL DESIGN AND IMAGES
      ===================================================== */}

      <section className="section home-books-section">

        <div className="container">

          <div className="home-books-panel">

            <div className="home-books-intro">

              <h2 className="section-title">

                {c.booksTitle}

              </h2>

              <p className="home-books-description">

                {c.booksText}

              </p>

            </div>


            {/* ORIGINAL BILINGUAL BOOK IMAGE */}

            <div className="home-books-featured-image">

              <img
                src={booksHomeImage}
                alt={
                  lang === 'es'
                    ? 'SURFVIVING y Las Aventuras de Myles — Libros y Publicaciones'
                    : 'SURFVIVING and The Adventures of Myles — Books & Publications'
                }
                loading="lazy"
                decoding="async"
              />

            </div>


            {/* BOOKS BUTTON */}

            <div className="home-books-action">

              <Link
                to={`${prefix}/books`}
                className="btn"
              >

                {c.booksBtn}

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY DC LIFESAFE GLOBAL?
          INSTITUTIONAL PILLARS
      ===================================================== */}

      <section className="section soft-section">

        <div className="container text-center">

          <h2 className="section-title">

            {c.pillarsTitle}

          </h2>

          <p
            className="section-subtitle"
            style={{
              maxWidth: '850px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.8,
            }}
          >

            {c.pillarsSubtitle}

          </p>


          {/* FOUR INSTITUTIONAL PILLARS */}

          <div className="icon-row">

            {pillars.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="icon-item"
                >

                  <div className="icon-circle">

                    <Icon
                      size={38}
                      aria-hidden="true"
                    />

                  </div>

                  <span>

                    {item.title}

                  </span>

                </div>

              );

            })}

          </div>


          {/* INSTITUTIONAL PHILOSOPHY */}

          <p
            style={{
              color: '#10294a',
              fontWeight: 700,
              fontSize: 'clamp(17px, 2vw, 21px)',
              lineHeight: 1.7,
              maxWidth: '850px',
              margin: '38px auto 0',
            }}
          >

            {c.philosophy}

          </p>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
          ORIGINAL COMPONENTS
      ===================================================== */}

      <section
        id="newsletter"
        className="section"
      >

        <div className="container">

          {lang === 'es'
            ? <NewsletterFormES />
            : <NewsletterForm />
          }

        </div>

      </section>

    </>

  );

}

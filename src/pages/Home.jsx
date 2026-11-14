import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  HeartPulse,
  Compass,
  ClipboardList,
} from 'lucide-react';

import NewsletterForm from '../components/NewsletterForm.jsx';
import NewsletterFormES from '../components/NewsletterFormES.jsx';
import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Home() {
  const { language } = useLanguage();

  const lang = language === 'es' ? 'es' : 'en';

  const t =
    translations[language]?.home ||
    translations.en.home;

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonStyle = {
    marginTop: 'auto',
    alignSelf: 'center',
  };

  const learningCenterTitle =
    lang === 'en'
      ? 'Learning Center'
      : 'Centro de Aprendizaje';

  const learningCenterText =
    lang === 'en'
      ? 'Free educational resources, quick-reference guides, worksheets, algorithms, and practical learning materials for wellness, emergency care, and wilderness medicine.'
      : 'Recursos educativos gratuitos, guías rápidas, hojas de trabajo, algoritmos y materiales prácticos para bienestar, atención de emergencias y medicina wilderness.';

  const learningCenterBtn =
    lang === 'en'
      ? 'Explore Learning Center'
      : 'Explorar Centro de Aprendizaje';

  const genTitle =
    lang === 'en'
      ? 'Global Expedition Network'
      : 'Red Global de Expediciones';

  const genText =
    lang === 'en'
      ? 'International partnerships, expedition support, wilderness leadership, cultural exploration, and collaborative adventure initiatives across diverse environments.'
      : 'Alianzas internacionales, apoyo expedicionario, liderazgo outdoor, exploración cultural e iniciativas colaborativas de aventura en diversos entornos.';

  const genBtn =
    lang === 'en'
      ? 'Explore GEN'
      : 'Explorar GEN';

  // =====================================================
  // Books & Publications
  // =====================================================

  const booksTitle =
    lang === 'en'
      ? 'Books & Publications'
      : 'Libros y Publicaciones';

  const booksText =
    lang === 'en'
      ? 'Discover stories and resources that inspire emotional resilience, personal growth, learning, and exploration. From SURFVIVING™ to The Adventures of Myles, each publication encourages discovery, reflection, and meaningful adventures.'
      : 'Descubre historias y recursos que inspiran resiliencia emocional, crecimiento personal, aprendizaje y exploración. Desde SURFVIVING™ hasta Las Aventuras de Myles, cada publicación invita al descubrimiento, la reflexión y las aventuras con propósito.';

  const booksBtn =
    lang === 'en'
      ? 'Explore Our Books'
      : 'Explorar Nuestros Libros';

  const featuredBooks = [
    {
      id: 'surfviving',
      title: 'SURFVIVING™',
      cover:
        lang === 'en'
          ? '/Books/Covers/Surfviving-eng.jpg'
          : '/Books/Covers/Surfviving-sp.jpg',
    },
    {
      id: 'myles-camping',
      title:
        lang === 'en'
          ? 'The Adventures of Myles: Going Camping!'
          : 'Las Aventuras de Myles: ¡De Campamento!',
      cover:
        lang === 'en'
          ? '/Books/Covers/Myles-Camping-Adventure-EN.png'
          : '/Books/Covers/Myles-Camping-Adventure-SP.png',
    },
    {
      id: 'myles-mountain',
      title:
        lang === 'en'
          ? 'The Adventures of Myles: Mt. St. Amelie'
          : 'Las Aventuras de Myles: Mt. St. Amelie',
      cover:
        lang === 'en'
          ? '/Books/Covers/Myles-Mountain-Adventure-EN.jpg'
          : '/Books/Covers/Myles-Mountain-Adventure-SP.png',
    },
  ];

  const pillars = [
    {
      icon: Shield,
      title: t.expertTraining,
    },
    {
      icon: HeartPulse,
      title: t.emotionalResilience,
    },
    {
      icon: Compass,
      title: t.outdoorLeadership,
    },
    {
      icon: ClipboardList,
      title: t.realWorldPreparedness,
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className='section hero-home-simple'>
        <div className='container text-center'>
          <h1 className='hero-title'>
            {t.heroTitle}
          </h1>

          <p className='hero-subtitle'>
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN SERVICES
          ===================================================== */}

      <section className='section'>
        <div className='container'>
          <div className='card-grid home-feature-grid'>

            {/* Wellness */}

            <article
              className='feature-card home-feature-card'
              style={cardStyle}
            >
              <h2>{t.wellness}</h2>

              <img
                src='/card_home_wellness.png'
                alt={t.wellness}
                className='feature-thumb'
                loading='lazy'
              />

              <p>{t.wellnessText}</p>

              <Link
                to='/wellness'
                className='btn'
                style={buttonStyle}
              >
                {t.wellnessBtn}
              </Link>
            </article>

            {/* Training */}

            <article
              className='feature-card home-feature-card'
              style={cardStyle}
            >
              <h2>{t.training}</h2>

              <img
                src='/card_home_training.png'
                alt={t.training}
                className='feature-thumb'
                loading='lazy'
              />

              <p>{t.trainingText}</p>

              <Link
                to='/training'
                className='btn'
                style={buttonStyle}
              >
                {t.trainingBtn}
              </Link>
            </article>

            {/* Learning Center */}

            <article
              className='feature-card home-feature-card learning-center-home-card'
              style={cardStyle}
            >
              <h2>{learningCenterTitle}</h2>

              <img
                src='/learning-center/learning-center-home-card.png'
                alt={learningCenterTitle}
                className='feature-thumb'
                loading='lazy'
              />

              <p>{learningCenterText}</p>

              <Link
                to='/learning-center'
                className='btn'
                style={buttonStyle}
              >
                {learningCenterBtn}
              </Link>
            </article>

            {/* Outdoor */}

            <article
              className='feature-card home-feature-card'
              style={cardStyle}
            >
              <h2>{t.outdoor}</h2>

              <img
                src='/card_home_outdoor.png'
                alt={t.outdoor}
                className='feature-thumb'
                loading='lazy'
              />

              <p>{t.outdoorText}</p>

              <Link
                to='/outdoor'
                className='btn'
                style={buttonStyle}
              >
                {t.outdoorBtn}
              </Link>
            </article>

            {/* Expedition Visuals */}

            <article
              className='feature-card home-feature-card'
              style={cardStyle}
            >
              <h2>{t.visuals}</h2>

              <img
                src='/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg'
                alt={t.visuals}
                className='feature-thumb'
                loading='lazy'
              />

              <p>{t.visualsText}</p>

              <Link
                to='/visuals'
                className='btn'
                style={buttonStyle}
              >
                {t.visualsBtn}
              </Link>
            </article>

            {/* Global Expedition Network */}

            <article
              className='feature-card home-feature-card gen-card'
              style={cardStyle}
            >
              <h2>{genTitle}</h2>

              <img
                src='/hero_global_expedition_network.png'
                alt={genTitle}
                className='feature-thumb'
                loading='lazy'
              />

              <p>{genText}</p>

              <Link
                to='/network'
                className='btn'
                style={buttonStyle}
              >
                {genBtn}
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKS & PUBLICATIONS
          ===================================================== */}

      <section className='section home-books-section'>
        <div className='container'>

          <div className='home-books-panel'>

            <div className='home-books-intro'>
              <h2 className='section-title'>
                {booksTitle}
              </h2>

              <p className='home-books-description'>
                {booksText}
              </p>
            </div>

            <div className='home-books-covers'>
              {featuredBooks.map((book) => (
                <div
                  key={book.id}
                  className='home-books-cover-item'
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    loading='lazy'
                    decoding='async'
                  />
                </div>
              ))}
            </div>

            <div className='home-books-action'>
              <Link
                to='/books'
                className='btn'
              >
                {booksBtn}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE DC LIFESAFE GLOBAL
          ===================================================== */}

      <section className='section soft-section'>
        <div className='container text-center'>
          <h2 className='section-title'>
            {t.why}
          </h2>

          <p className='section-subtitle'>
            {t.whySub}
          </p>

          <div className='icon-row'>
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className='icon-item'
                >
                  <div className='icon-circle'>
                    <Icon size={38} />
                  </div>

                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
          ===================================================== */}

      <section
        id='newsletter'
        className='section'
      >
        <div className='container'>
          {language === 'en'
            ? <NewsletterForm />
            : <NewsletterFormES />}
        </div>
      </section>
    </>
  );
}

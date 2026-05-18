import React from 'react';

import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function About() {

  const { language } = useLanguage();

  const t =
    translations[language]?.aboutPage ||
    translations.en.aboutPage;

  const items = [
    {
      icon: '/icon_calm.png',
      title: t.wellnessTitle,
      text: t.wellnessText,
      button:
        language === 'es'
          ? 'Aprender más'
          : 'Learn More',
      link: '/wellness',
    },

    {
      icon: '/icon_wilderness.png',
      title: t.trainingTitle,
      text: t.trainingText,
      button:
        language === 'es'
          ? 'Ver entrenamiento'
          : 'View Training',
      link: '/training',
    },

    {
      icon: '/icon_guided.png',
      title: t.guidedTitle,
      text: t.guidedText,
      button:
        language === 'es'
          ? 'Explorar outdoor'
          : 'Explore Outdoor',
      link: '/outdoor',
    },

    {
      icon: '/icon_nature.png',
      title: t.natureTitle,
      text: t.natureText,
      button:
        language === 'es'
          ? 'Explorar aventuras'
          : 'Explore Adventures',
      link: '/outdoor',
    },
  ];

  return (
    <>
      <section className='hero-banner-page'>

        <div className='container'>

          <div className='page-hero-card'>

            <img
              src='/hero_about.png'
              alt='About'
              className='page-hero-image'
            />

          </div>

        </div>

      </section>

      <section className='section'>

        <div className='container text-center'>

          <h1 className='section-title'>
            {t.heroTitle}
          </h1>

          <p className='section-subtitle'>
            {t.heroSubtitle}
          </p>

          <div className='card-grid columns-4 mt-medium'>

            {items.map((card) => (

              <article
                className='program-card'
                key={card.title}
              >

                <img
                  src={card.icon}
                  alt=''
                  className='program-icon'
                />

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.text}
                </p>

                <a
                  href={card.link}
                  className='btn small'
                >
                  {card.button}
                </a>

              </article>

            ))}

          </div>

          <div className='mission-block'>

            <h2 className='section-title'>
              {t.missionTitle}
            </h2>

            <p className='section-subtitle narrow'>
              {t.missionText1}
            </p>

            <p className='section-subtitle narrow'>
              {t.missionText2}
            </p>

            <p className='section-subtitle narrow'>
              {t.missionText3}
            </p>

          </div>

          <div className='center-cta'>

            <h2 className='section-title small-gap'>

              {language === 'es'
                ? 'Conecta con DC LifeSafe Global'
                : 'Connect with DC LifeSafe Global'}

            </h2>

            <a
              href='mailto:info@dclifesafeglobal.com'
              className='btn'
            >

              {language === 'es'
                ? 'Contáctanos'
                : 'Get in Touch'}

            </a>

          </div>

        </div>

      </section>
    </>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Wellness() {
  const { language } = useLanguage();

  const t =
    translations[language]?.wellnessPage ||
    translations.en.wellnessPage;

  const isSpanish = language === 'es';

  return (
    <>
      {/* =====================================
          WELLNESS HERO
          ===================================== */}

      <section className='hero-banner-page'>
        <div className='container'>
          <div className='page-hero-card wellness-hero-card'>

            <img
              src='/hero_wellness.png'
              alt={t.altWellness}
              className='page-hero-image'
            />

            <div className='page-hero-overlay left wellness-hero-overlay'>

              <img
                src='/logo_surfviving.png'
                alt='SURFVIVING™'
                className='surfviving-hero-logo'
              />

              <h1>{t.heroTitle}</h1>

              <p>{t.heroText}</p>

              {/* Hero action buttons */}
              <div
                className='wellness-hero-actions'
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '18px'
                }}
              >
                <a
                  className='btn'
                  href={
                    'mailto:info@dclifesafeglobal.com' +
                    '?subject=' +
                    encodeURIComponent(
                      isSpanish
                        ? 'Solicitud de consulta gratuita'
                        : 'Free Consultation Request'
                    ) +
                    '&body=' +
                    encodeURIComponent(
                      isSpanish
                        ? 'Hola DC LifeSafe Global,\n\n' +
                          'Me gustaría solicitar información sobre una consulta gratuita.\n\n' +
                          'Nombre:\nTeléfono:\nCorreo electrónico:\n' +
                          '¿Qué información necesitas?:\n'
                        : 'Hello DC LifeSafe Global,\n\n' +
                          'I would like to request a free consultation.\n\n' +
                          'Name:\nPhone:\nEmail:\n' +
                          'What are you looking for?:\n'
                    )
                  }
                >
                  {t.consultationBtn}
                </a>

                <Link
                  className='btn'
                  to='/surfviving'
                  style={{
                    background: 'transparent',
                    border: '2px solid currentColor',
                    color: 'inherit'
                  }}
                >
                  {isSpanish
                    ? 'Descubre SURFVIVING™'
                    : 'Discover SURFVIVING™'}
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          EMOTIONAL REGULATION TOOLS
          ===================================== */}

      <section className='section'>
        <div className='container text-center'>

          <h2 className='section-title'>
            {t.toolsTitle}
          </h2>

          <p className='section-subtitle narrow'>
            {t.toolsSubtitle}
          </p>

          <div className='soft-panel three-tools'>

            <div className='tool-card'>
              <img src='/icon_calm.png' alt='' />

              <h3>{t.calmTitle}</h3>

              <p>{t.calmText}</p>
            </div>

            <div className='tool-card'>
              <img src='/icon_wave.png' alt='' />

              <h3>{t.waveTitle}</h3>

              <p>{t.waveText}</p>
            </div>

            <div className='tool-card'>
              <img src='/icon_resilience.png' alt='' />

              <h3>{t.resilienceTitle}</h3>

              <p>{t.resilienceText}</p>
            </div>

          </div>

          {/* =====================================
              WORKSHOPS AND RESOURCES
              ===================================== */}

          <div className='card-grid columns-2 mt-large'>

            <article className='resource-card'>
              <img
                src='/card_workshop.png'
                alt={t.workshopsTitle}
                className='resource-thumb'
              />

              <div className='resource-content'>

                <h3>{t.workshopsTitle}</h3>

                <p>{t.workshopsText}</p>

                <Link className='btn' to='/workshops'>
                  {t.workshopsBtn}
                </Link>

              </div>
            </article>

            <article className='resource-card'>
              <img
                src='/card_resources.png'
                alt={t.resourcesTitle}
                className='resource-thumb'
              />

              <div className='resource-content'>

                <h3>{t.resourcesTitle}</h3>

                <p>{t.resourcesText}</p>

                <Link className='btn' to='/learning-center'>
                  {t.resourcesBtn}
                </Link>

              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================
          BOTTOM CTA BANNER
          ===================================== */}

      <section className='section'>
        <div className='container'>

          <div className='cta-banner'>

            <img
              src='/hero_wellness_bottom.png'
              alt=''
              className='cta-image'
            />

            <div className='cta-content center'>

              <h3>{t.ctaTitle}</h3>

              <p>{t.ctaText}</p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

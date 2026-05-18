import React from 'react';
import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Wellness() {
  const { language } = useLanguage();
  const t = translations[language]?.wellnessPage || translations.en.wellnessPage;

  return (
    <>
      <section className='hero-banner-page'>
        <div className='container'>
          <div className='page-hero-card'>
            <img
              src='/hero_wellness.png'
              alt={t.altWellness}
              className='page-hero-image'
            />

            <div className='page-hero-overlay left'>
              <img
                src='/logo_surfviving.png'
                alt='Surfviving'
                className='surfviving-hero-logo'
              />

              <h1>{t.heroTitle}</h1>

              <p>{t.heroText}</p>

              <a
                className='btn'
                href='mailto:info@dclifesafeglobal.com?subject=Free%20Consultation%20Request&body=Hello%20DC%20LifeSafe%20Global%2C%0A%0AI%20would%20like%20to%20request%20a%20free%20consultation.%0A%0AName%3A%20%0APhone%3A%20%0AEmail%3A%20%0AWhat%20are%20you%20looking%20for%3F%0A'
              >
                {t.consultationBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container text-center'>
          <h2 className='section-title'>{t.toolsTitle}</h2>

          <p className='section-subtitle narrow'>{t.toolsSubtitle}</p>

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

                <a className='btn' href='/workshops'>
                  {t.workshopsBtn}
                </a>
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

                <a className='btn' href='/resources'>
                  {t.resourcesBtn}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

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

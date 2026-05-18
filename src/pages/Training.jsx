import React from 'react';
import { CalendarDays, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Training() {
  const { language } = useLanguage();

  const t =
    translations[language]?.trainingPage ||
    translations.en.trainingPage;

  const programs = [
    {
      icon: '/icon_bls.png',
      title: 'BLS',
      subtitle: t.blsTitle,
      text: t.blsText,
      link: 'mailto:info@dclifesafeglobal.com?subject=BLS%20Course%20Inquiry',
    },

    {
      icon: '/icon_acls.png',
      title: 'ACLS',
      subtitle: t.aclsTitle,
      text: t.aclsText,
      link: 'mailto:info@dclifesafeglobal.com?subject=ACLS%20Course%20Inquiry',
    },

    {
      icon: '/icon_wilderness.png',
      title: t.wildernessTitle,
      subtitle: '',
      text: t.wildernessText,
      link: 'mailto:info@dclifesafeglobal.com?subject=Wilderness%20Medicine%20Inquiry',
    },

    {
      icon: '/icon_group.png',
      title: t.privateTitle,
      subtitle: '',
      text: t.privateText,
      link: 'mailto:info@dclifesafeglobal.com?subject=Private%20Workshop%20Inquiry',
    },
  ];

  return (
    <>
      <section className='hero-training'>
        <div className='container hero-training-grid'>

          <div className='training-copy'>

            <div className='eyebrow'>
              {t.betterTraining}
              <br />
              {t.strongerTomorrow}
            </div>

            <h1>
              {t.heroTitle}
            </h1>

            <p>
              {t.heroText}
            </p>

            <div className='hero-buttons'>

              <a
                className='btn btn-outline'
                href='mailto:info@dclifesafeglobal.com?subject=Private%20Session%20Inquiry'
              >
                {t.requestPrivate}
              </a>

              <a
                className='btn btn-dark'
                href='mailto:info@dclifesafeglobal.com?subject=Group%20Training%20Inquiry'
              >
                {t.requestGroup}
              </a>

            </div>
          </div>

          <img
            src='/hero_training.png'
            alt='Training'
            className='hero-training-image'
          />

        </div>
      </section>

      <section className='section'>
        <div className='container text-center'>

          <div className='eyebrow center'>
            {t.sectionTitle}
          </div>

          <h2 className='section-title'>
            {t.sectionTitle}
          </h2>

          <div className='card-grid columns-4 mt-medium'>

            {programs.map((item) => (
              <article className='program-card' key={item.title}>

                <img
                  src={item.icon}
                  alt=''
                  className='program-icon'
                />

                <h3>
                  {item.title}
                  <br />
                  {item.subtitle}
                </h3>

                <p>{item.text}</p>

                <a
                  className='text-link'
                  href={item.link}
                >
                  {t.learnMore} →
                </a>

              </article>
            ))}

          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>

          <div className='training-bottom-grid'>

            <div className='training-benefits'>

              <h3>
                {t.whyTitle}
              </h3>

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

            <div className='training-bag-panel'>
              <img
                src='/training_gear.png'
                alt='Training gear'
              />
            </div>

            <aside className='upcoming-card'>

              <h4>
                <CalendarDays size={20} />
                {t.upcomingCourses}
              </h4>

              <div className='course-item'>
                <strong>BLS Provider</strong>
                <span>Coming soon</span>
                <small>Denver, Colorado</small>
              </div>

              <div className='course-item'>
                <strong>ACLS Provider</strong>
                <span>Coming soon</span>
                <small>Denver, Colorado</small>
              </div>

              <div className='course-item'>
                <strong>Wilderness Medicine</strong>
                <span>Coming soon</span>
                <small>Colorado & Outdoor Settings</small>
              </div>

            </aside>

          </div>

          <div className='bottom-action-bar'>

            <div>
              <strong>{t.betterTraining}</strong>
              <span>{t.strongerTomorrow}</span>
            </div>

            <a
              className='btn btn-danger'
              href='mailto:info@dclifesafeglobal.com?subject=Training%20Inquiry'
            >
              {t.getStarted}
            </a>

          </div>

        </div>
      </section>
    </>
  );
}

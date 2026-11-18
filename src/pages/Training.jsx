
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  CheckCircle2
} from 'lucide-react';

import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

const scheduledCourses = [
  {
    id: 'bls',
    title: 'BLS Provider',
    fullName: 'Basic Life Support',
    poster: '/training/bls.jpg',
    datesEn: 'Nov 28 · Dec 12 & 19, 2026',
    datesEs: '28 nov. · 12 y 19 dic. de 2026',
    priceEn: 'Initial $75 · Renewal $65',
    priceEs: 'Inicial $75 · Renovación $65',
    certification: 'American Heart Association'
  },
  {
    id: 'acls',
    title: 'ACLS Provider',
    fullName: 'Advanced Cardiovascular Life Support',
    poster: '/training/acls.jpg',
    datesEn: 'December 19, 2026',
    datesEs: '19 de diciembre de 2026',
    priceEn: 'Initial $225 · Renewal $185',
    priceEs: 'Inicial $225 · Renovación $185',
    certification: 'American Heart Association'
  },
  {
    id: 'wfa',
    title: 'Wilderness First Aid',
    fullName: 'WFA',
    poster: '/training/wfa.jpg',
    datesEn: 'January 9, 2027',
    datesEs: '9 de enero de 2027',
    priceEn: '$350 · Early Registration $300',
    priceEs: '$350 · Inscripción anticipada $300',
    certification: 'Survival Med'
  },
  {
    id: 'wfr',
    title: 'Wilderness First Responder',
    fullName: 'WFR',
    poster: '/training/wfr.jpg',
    datesEn: 'Online Jan 11 · Practicals Feb 15–19, 2027',
    datesEs: 'Online 11 ene. · Prácticas 15–19 feb. de 2027',
    priceEn: '$1,000 · Early Registration $900',
    priceEs: '$1,000 · Inscripción anticipada $900',
    certification: 'Survival Med'
  }
];

export default function Training() {
  const { language } = useLanguage();

  const t =
    translations[language]?.trainingPage ||
    translations.en.trainingPage;

  const es = language === 'es';
  const prefix = es ? '/es' : '';

  const programs = [
    {
      icon: '/icon_bls.png',
      title: 'BLS',
      subtitle: t.blsTitle,
      text: t.blsText,
      link: `${prefix}/training/bls`,
      internal: true
    },
    {
      icon: '/icon_acls.png',
      title: 'ACLS',
      subtitle: t.aclsTitle,
      text: t.aclsText,
      link: `${prefix}/training/acls`,
      internal: true
    },
    {
      icon: '/icon_wilderness.png',
      title: t.wildernessTitle,
      subtitle: '',
      text: t.wildernessText,
      link: `${prefix}/training/wfa`,
      internal: true
    },
    {
      icon: '/icon_group.png',
      title: t.privateTitle,
      subtitle: '',
      text: t.privateText,
      link:
        'mailto:info@dclifesafeglobal.com?subject=Private%20Workshop%20Inquiry',
      internal: false
    }
  ];

  const posterGridStyle = {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
    gap: '24px',
    marginTop: '30px',
    alignItems: 'stretch'
  };

  const posterCardStyle = {
    background: '#ffffff',
    borderRadius: '18px',
    overflow: 'hidden',
    boxShadow: '0 6px 24px rgba(15, 35, 60, 0.09)',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e5eaf0'
  };

  const courseLinkStyle = {
    display: 'block',
    padding: '14px 20px',
    borderRadius: '10px',
    textDecoration: 'none',
    color: '#ffffff',
    background: '#0c355c',
    textAlign: 'center',
    fontWeight: 600,
    marginTop: 'auto'
  };

  return (
    <>
      {/* Existing Training Hero */}
      <section className='hero-training'>
        <div className='container hero-training-grid'>
          <div className='training-copy'>
            <div className='eyebrow'>
              {t.betterTraining}
              <br />
              {t.strongerTomorrow}
            </div>

            <h1>{t.heroTitle}</h1>

            <p>{t.heroText}</p>

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
            alt='DC LifeSafe Global Training'
            className='hero-training-image'
          />
        </div>
      </section>

      {/* Existing Program Categories */}
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
              <article
                className='program-card'
                key={item.title}
              >
                <img
                  src={item.icon}
                  alt=''
                  className='program-icon'
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
                    className='text-link'
                    to={item.link}
                  >
                    {t.learnMore} →
                  </Link>
                ) : (
                  <a
                    className='text-link'
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

      {/* New Scheduled Certification Courses */}
      <section
        className='section'
        id='upcoming-training-classes'
        style={{ background: '#f5f7fa' }}
      >
        <div className='container'>
          <div className='text-center'>
            <div className='eyebrow center'>
              DC LifeSafe Global
            </div>

            <h2 className='section-title'>
              {es
                ? 'Próximos cursos y certificaciones'
                : 'Upcoming Classes & Certifications'}
            </h2>

            <p
              style={{
                maxWidth: '720px',
                margin: '12px auto 0',
                color: '#526173',
                lineHeight: 1.7
              }}
            >
              {es
                ? 'Explora nuestros próximos cursos de soporte vital y medicina en entornos remotos. Consulta fechas, tarifas e información de inscripción.'
                : 'Explore our upcoming life support and wilderness medicine training. View schedules, tuition, and registration information.'}
            </p>
          </div>

          <div style={posterGridStyle}>
            {scheduledCourses.map((course) => (
              <article
                key={course.id}
                style={posterCardStyle}
              >
                <div
                  style={{
                    padding: '16px',
                    background: '#eaf0f5',
                    textAlign: 'center'
                  }}
                >
                  <img
                    src={course.poster}
                    alt={`${course.title} official course flyer`}
                    loading='lazy'
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                    style={{
                      width: '100%',
                      maxWidth: '360px',
                      height: 'auto',
                      display: 'block',
                      margin: '0 auto',
                      borderRadius: '6px'
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    gap: '12px'
                  }}
                >
                  <span
                    style={{
                      color: '#24748d',
                      fontSize: '13px',
                      fontWeight: 700
                    }}
                  >
                    {course.certification}
                  </span>

                  <h3
                    style={{
                      color: '#10294a',
                      margin: 0,
                      fontSize: '22px',
                      lineHeight: 1.3
                    }}
                  >
                    {course.title}
                  </h3>

                  <p
                    style={{
                      color: '#5a6778',
                      margin: 0
                    }}
                  >
                    {course.fullName}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      color: '#253c56'
                    }}
                  >
                    <CalendarDays
                      size={19}
                      style={{ flexShrink: 0 }}
                    />
                    <span>
                      {es
                        ? course.datesEs
                        : course.datesEn}
                    </span>
                  </div>

                  <p
                    style={{
                      fontWeight: 700,
                      color: '#a71919',
                      margin: '4px 0 10px'
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
                      ? 'Ver detalles del curso'
                      : 'View Course Details'}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p
            style={{
              fontSize: '14px',
              color: '#637083',
              textAlign: 'center',
              marginTop: '24px'
            }}
          >
            {es
              ? 'Las fechas, horarios y disponibilidad de plazas deben confirmarse antes de la inscripción.'
              : 'Dates, times, and seat availability are subject to confirmation before registration.'}
          </p>
        </div>
      </section>

      {/* Existing Benefits and Training Gear */}
      <section className='section'>
        <div className='container'>
          <div className='training-bottom-grid'>
            <div className='training-benefits'>
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

            <div className='training-bag-panel'>
              <img
                src='/training_gear.png'
                alt='Training gear'
              />
            </div>

            {/* Updated Upcoming Courses */}
            <aside className='upcoming-card'>
              <h4>
                <CalendarDays size={20} />
                {t.upcomingCourses}
              </h4>

              {scheduledCourses.map((course) => (
                <div
                  className='course-item'
                  key={course.id}
                >
                  <strong>{course.title}</strong>

                  <span>
                    {es
                      ? course.datesEs
                      : course.datesEn}
                  </span>

                  <small>
                    {course.certification}
                  </small>

                  <Link
                    to={`${prefix}/training/${course.id}`}
                    className='text-link'
                    style={{
                      display: 'inline-block',
                      marginTop: '8px'
                    }}
                  >
                    {es ? 'Ver curso' : 'View Course'} →
                  </Link>
                </div>
              ))}
            </aside>
          </div>

          {/* Existing Bottom Action */}
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

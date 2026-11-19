import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, CheckCircle2, Clock3, MapPin, Users, Mail } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

// DC LifeSafe Global — bilingual training catalog and inquiry calendar.
// All listed dates are suggestions for inquiries, never confirmed sessions.
const courses = [
  { id: 'bls', name: 'BLS Provider', en: 'Basic Life Support', es: 'Soporte Vital Básico',
    imageEn: '/Training/BLS/BLS.jpg', imageEs: '/Training/BLS/BLS-Sp.jpg',
    priceEn: 'Initial $75 · Renewal $65', priceEs: 'Inicial $75 · Renovación $65',
    issuer: 'American Heart Association (AHA)', schedule: 'bls' },
  { id: 'acls', name: 'ACLS Provider', en: 'Advanced Cardiovascular Life Support', es: 'Soporte Vital Cardiovascular Avanzado',
    imageEn: '/Training/ACLS/ACLS.jpg', imageEs: '/Training/ACLS/ACLS-Sp.jpg',
    priceEn: 'Initial $225 · Renewal $185', priceEs: 'Inicial $225 · Renovación $185',
    issuer: 'American Heart Association (AHA)', schedule: 'acls' },
  { id: 'wfa', name: 'Wilderness First Aid (WFA)', en: 'Wilderness First Aid', es: 'Primeros Auxilios en Zonas Agrestes',
    imageEn: '/Training/WFA/WFA.jpg', imageEs: '/Training/WFA/WFA-Sp.jpg',
    priceEn: '$350 per person', priceEs: '$350 por persona', issuer: 'Survival Med', schedule: 'wfa' },
  { id: 'wafa', name: 'Wilderness Advanced First Aid (WAFA)', en: 'Wilderness Advanced First Aid', es: 'Primeros Auxilios Avanzados en Zonas Agrestes',
    imageEn: '/Training/WAFA/WAFA.jpg', imageEs: '/Training/WAFA/WAFA-Sp.jpg',
    priceEn: '$500 per person', priceEs: '$500 por persona', issuer: 'Survival Med', schedule: null },
  { id: 'wfr', name: 'Wilderness First Responder (WFR)', en: 'Wilderness First Responder', es: 'Primer Respondiente en Zonas Agrestes',
    imageEn: '/Training/WFR/WFR.jpg', imageEs: '/Training/WFR/WFR-Sp.jpg',
    priceEn: '$1,000 per person', priceEs: '$1,000 por persona', issuer: 'Survival Med', schedule: 'wfr' },
  { id: 'wfr-recert', name: 'WFR Recertification', en: 'Wilderness First Responder Recertification', es: 'Recertificación de Wilderness First Responder',
    imageEn: '/Training/WFR/WFR Recert.jpg', imageEs: '/Training/WFR/WFR-Recert-Sp.jpg',
    priceEn: 'Contact us for tuition', priceEs: 'Consulta el precio', issuer: 'Survival Med', schedule: null }
];

const atNoon = (year, month, day) => new Date(year, month, day, 12, 0, 0);

function visibleMonths() {
  const now = new Date();
  return Array.from({ length: 4 }, (_, i) => atNoon(now.getFullYear(), now.getMonth() + i, 1));
}

function proposedDates(id, month) {
  const now = new Date();
  const today = atNoon(now.getFullYear(), now.getMonth(), now.getDate());
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const days = new Date(year, monthIndex + 1, 0).getDate();
  const anchor = Date.UTC(2026, 10, 21) / 86400000;
  const results = [];
  for (let day = 1; day <= days; day += 1) {
    const date = atNoon(year, monthIndex, day);
    if (date <= today) continue;
    const weekday = date.getDay();
    const absoluteDay = Date.UTC(year, monthIndex, day) / 86400000;
    const matches =
      (id === 'bls' && (weekday === 2 || weekday === 6)) ||
      (id === 'acls' && weekday === 6 && (absoluteDay - anchor) % 14 === 0) ||
      (id === 'wfa' && weekday === 0) ||
      (id === 'wfr' && (day === 1 || day === 15));
    if (matches) results.push(date);
  }
  return results;
}

const formatMonth = (date, es) => new Intl.DateTimeFormat(es ? 'es-US' : 'en-US', {
  month: 'long', year: 'numeric'
}).format(date).replace(/^./, (c) => c.toUpperCase());
const formatDay = (date, es) => new Intl.DateTimeFormat(es ? 'es-US' : 'en-US', {
  weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
}).format(date);

function mailto(subject, lines) {
  return `mailto:info@dclifesafeglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

function inquiry(course, es, { date = null, type = 'personalized' } = {}) {
  const courseLabel = course?.name || (es ? 'Capacitación personalizada' : 'Personalized training');
  const dateLabel = date ? formatDay(date, es) : '';
  const subject = es
    ? `${type === 'group' ? 'Capacitación grupal' : type === 'private' ? 'Capacitación privada' : 'Solicitud de capacitación'} — ${courseLabel}${dateLabel ? ` — ${dateLabel}` : ''}`
    : `${type === 'group' ? 'Group Training' : type === 'private' ? 'Private Training' : 'Training Inquiry'} — ${courseLabel}${dateLabel ? ` — ${dateLabel}` : ''}`;
  const lines = es ? [
    'Hola DC LifeSafe Global:', '',
    `Curso de interés: ${course?.name || ''}`,
    `Fecha propuesta seleccionada: ${dateLabel}`,
    'Otra fecha de preferencia:', 'Horario de preferencia (mañana / tarde / noche / fin de semana):',
    'Nombre completo:', 'Número de participantes:', 'Organización (opcional):',
    'Ciudad, estado y código postal:',
    'Lugar solicitado (centro de capacitación / domicilio / lugar de trabajo / campo):',
    'Idioma (español / inglés):', 'Certificación inicial o renovación (si corresponde):',
    'Comentarios:', '',
    'Entiendo que la fecha, el lugar, los requisitos y posibles gastos adicionales están sujetos a confirmación.'
  ] : [
    'Hello DC LifeSafe Global,', '',
    `Course of interest: ${course?.name || ''}`,
    `Selected proposed date: ${dateLabel}`,
    'Other preferred date:', 'Preferred time (morning / afternoon / evening / night / weekend):',
    'Full name:', 'Number of participants:', 'Organization (optional):',
    'City, state and ZIP code:',
    'Requested location (training center / home / workplace / field):',
    'Language (English / Spanish):', 'Initial or renewal (if applicable):',
    'Comments:', '',
    'I understand that dates, locations, course requirements and possible additional expenses are subject to confirmation.'
  ];
  return mailto(subject, lines);
}

const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 275px), 1fr))', gap: 24, marginTop: 30 };
const card = { background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 6px 24px rgba(15,35,60,.09)', display: 'flex', flexDirection: 'column', border: '1px solid #e5eaf0' };
const primary = { display: 'block', textAlign: 'center', padding: '13px 16px', borderRadius: 12, background: 'linear-gradient(180deg, #357c94 0%, #295f78 100%)', color: '#fff', border: '2px solid transparent', fontWeight: 600, textDecoration: 'none', lineHeight: 1.5 };
const secondary = { ...primary, color: '#295f78', background: '#fff', border: '2px solid #295f78' };

export default function Training() {
  const { language } = useLanguage();
  const es = language === 'es';
  const prefix = es ? '/es' : '';
  const t = translations[language]?.trainingPage || translations.en.trainingPage;
  const [monthIndex, setMonthIndex] = useState(0);
  const months = visibleMonths();
  const selectedMonth = months[monthIndex] || months[0];


  return (
    <>
      <section className="hero-training">
        <div className="container hero-training-grid">
          <div className="training-copy">
            <div className="eyebrow">{t.betterTraining}<br />{t.strongerTomorrow}</div>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-buttons">
              <a className="btn btn-outline" href={inquiry(null, es, { type: 'private' })}>
                {es ? 'Solicitar capacitación privada' : 'Request Private Training'}
              </a>
              <a className="btn btn-dark" href={inquiry(null, es, { type: 'group' })}>
                {es ? 'Solicitar capacitación grupal' : 'Request Group Training'}
              </a>
            </div>
          </div>
          <img src="/hero_training.png" alt="DC LifeSafe Global Training" className="hero-training-image" />
        </div>
      </section>

      <section className="section" style={{ background: '#f5f7fa' }} id="training-courses">
        <div className="container">
          <div className="text-center">
            <div className="eyebrow center">DC LifeSafe Global</div>
            <h2 className="section-title">{es ? 'Cursos y certificaciones' : 'Training Courses & Certifications'}</h2>
            <p style={{ maxWidth: 780, margin: '12px auto', lineHeight: 1.8, color: '#526173' }}>
              {es ? 'Seis cursos de soporte vital y medicina en zonas agrestes, con clases en inglés y español y opciones de capacitación personalizada.' : 'Six life support and wilderness medicine courses, with classes in English and Spanish and personalized training options.'}
            </p>
          </div>
          {[
            {
              key: 'aha',
              title: es
                ? 'Certificaciones de la American Heart Association (AHA)'
                : 'American Heart Association (AHA) Certifications',
              description: es
                ? 'Cursos de soporte vital con certificación AHA.'
                : 'Life support courses with AHA certification.',
              items: courses.filter((course) => course.issuer === 'American Heart Association (AHA)')
            },
            {
              key: 'wilderness',
              title: es ? 'Cursos de Medicina en Zonas Agrestes' : 'Wilderness Medicine Courses',
              description: es
                ? 'Capacitación en medicina de zonas agrestes mediante Survival Med.'
                : 'Wilderness medicine training through Survival Med.',
              items: courses.filter((course) => course.issuer === 'Survival Med')
            }
          ].map((group) => (
            <div key={group.key} style={{ marginTop: 44 }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#10294a', fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 8 }}>
                  {group.title}
                </h3>
                <p style={{ color: '#526173', lineHeight: 1.7, margin: 0 }}>
                  {group.description}
                </p>
              </div>
              <div style={{ ...grid, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', maxWidth: 950, marginLeft: 'auto', marginRight: 'auto' }} className="training-course-group-grid">
                {group.items.map((course) => (
                  <article key={course.id} style={card}>
                    <Link to={`${prefix}/training/${course.id}`} style={{ display: 'block', padding: 16, background: '#eaf0f5' }}>
                      <img
                        src={es ? course.imageEs : course.imageEn}
                        alt={`${course.name} — ${es ? 'afiche en español' : 'English flyer'}`}
                        loading="lazy"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 6 }}
                      />
                    </Link>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 12, padding: 22 }}>
                      <p style={{ margin: 0, color: '#53657a' }}>{es ? course.es : course.en}</p>
                      <p style={{ margin: 0, color: '#35465c' }}>
                        <CalendarDays size={17} style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        {es ? 'Horarios flexibles · Inglés y español' : 'Flexible scheduling · English & Spanish'}
                      </p>
                      <strong style={{ color: '#a71919', marginBottom: 8 }}>{es ? course.priceEs : course.priceEn}</strong>
                      <Link to={`${prefix}/training/${course.id}`} style={{ ...primary, marginTop: 'auto' }}>
                        {es ? 'Ver detalles del curso' : 'View Course Details'}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
          <p style={{ textAlign: 'center', fontSize: 13, color: '#657488', marginTop: 22, lineHeight: 1.7 }}>
            {es ? 'Las fechas, instalaciones, disponibilidad y modalidades de certificación deben confirmarse antes de la inscripción.' : 'Dates, facilities, availability and certification formats must be confirmed before enrollment.'}
          </p>
        </div>
      </section>

      <section className="section" id="upcoming-training-opportunities">
        <div className="container">
          <div className="text-center">
            <div className="eyebrow center">{es ? 'Programación flexible · Inglés y español' : 'Flexible Scheduling · English & Spanish'}</div>
            <h2 className="section-title">{es ? 'Próximas oportunidades de capacitación' : 'Upcoming Training Opportunities'}</h2>
            <p style={{ maxWidth: 800, margin: '0 auto', lineHeight: 1.8, color: '#526173' }}>
              {es ? 'Selecciona un mes y una fecha propuesta, o solicita cualquier otra fecha u horario. Son oportunidades de consulta, no sesiones confirmadas.' : 'Select a month and a proposed date, or request any other date or time. These are inquiry opportunities, not confirmed sessions.'}
            </p>
          </div>
          <div role="group" aria-label={es ? 'Seleccionar mes' : 'Select month'} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            {months.map((month, i) => (
              <button key={`${month.getFullYear()}-${month.getMonth()}`} type="button" onClick={() => setMonthIndex(i)} aria-pressed={monthIndex === i}
                style={{ padding: '12px 18px', borderRadius: 10, cursor: 'pointer', fontWeight: 600, border: monthIndex === i ? '2px solid #295f78' : '2px solid #295f78', background: monthIndex === i ? 'linear-gradient(180deg, #357c94 0%, #295f78 100%)' : '#fff', color: monthIndex === i ? '#fff' : '#295f78' }}>
                {formatMonth(month, es)}
              </button>
            ))}
          </div>
          <div style={grid}>
            {courses.map((course) => {
              const dates = course.schedule ? proposedDates(course.schedule, selectedMonth) : [];
              const noRegular = !course.schedule;
              return (
                <article key={course.id} style={{ ...card, padding: 22, gap: 12 }}>
                  <h3 style={{ margin: 0, color: '#10294a', fontSize: 20 }}>{course.name}</h3>
                  <p style={{ margin: 0, color: '#53657a', fontSize: 14, lineHeight: 1.7 }}>
                    {noRegular
                      ? (es ? 'Programación personalizada bajo solicitud.' : 'Personalized scheduling by request.')
                      : course.id === 'bls' ? (es ? 'Martes y sábados propuestos' : 'Proposed Tuesdays and Saturdays')
                      : course.id === 'acls' ? (es ? 'Sábados alternos propuestos' : 'Proposed alternate Saturdays')
                      : course.id === 'wfa' ? (es ? 'Domingos propuestos' : 'Proposed Sundays')
                      : (es ? 'Consultas de inicio online los días 1 y 15. Las 35 horas prácticas se coordinan por separado.' : 'Online-start inquiries on the 1st and 15th. The 35 practical hours are arranged separately.')}
                  </p>
                  {!noRegular && <strong style={{ color: '#24748d', fontSize: 14 }}>{formatMonth(selectedMonth, es)}</strong>}
                  {dates.length ? dates.map((date) => (
                    <a key={date.getTime()} href={inquiry(course, es, { date })} style={{ ...secondary, fontSize: 13, padding: '10px 8px' }}>
                      {formatDay(date, es)}<br />{es ? 'Solicitar información' : 'Request Information'}
                    </a>
                  )) : (
                    <p style={{ fontSize: 14, color: '#637083', lineHeight: 1.7 }}>
                      {noRegular ? (es ? 'Elige la fecha que mejor te convenga.' : 'Choose a date that works for you.') : (es ? 'No quedan fechas propuestas este mes.' : 'No proposed dates remain this month.')}
                    </p>
                  )}
                  <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid #e5eaf0' }}>
                    <p style={{ marginTop: 0, color: '#35465c', fontSize: 14 }}>{es ? '¿Prefieres otra fecha u horario?' : 'Prefer another date or time?'}</p>
                    <a href={inquiry(course, es)} style={{ ...primary, fontSize: 13 }}>
                      {es ? 'Solicita la fecha que prefieras' : 'Request Your Preferred Date'}
                    </a>
                  </div>
                  <small style={{ color: '#657488', lineHeight: 1.6 }}>
                    {es ? 'Solicitudes sujetas a confirmación; no son reservas.' : 'Requests are subject to confirmation; no seats are reserved.'}
                  </small>
                </article>
              );
            })}
          </div>
          <p style={{ textAlign: 'center', color: '#43546a', marginTop: 30, lineHeight: 1.8 }}>
            {es ? '¿Necesitas una fecha fuera de estos cuatro meses? También puedes solicitarla.' : 'Need a date beyond these four months? You can request it, too.'}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f8fb' }}>
        <div className="container">
          <div className="text-center">
            <div className="eyebrow center">{es ? 'Capacitación personalizada' : 'Personalized Training'}</div>
            <h2 className="section-title">{es ? 'Capacitación que se adapta a tus horarios' : 'Training That Fits Your Schedule'}</h2>
            <p style={{ maxWidth: 810, margin: '0 auto', lineHeight: 1.8, color: '#43546a' }}>
              {es ? 'Tus horarios laborales no deberían impedirte aprender habilidades que pueden salvar vidas. Puedes consultar por sesiones diurnas, nocturnas, de fin de semana o a domicilio, según el curso y la ubicación.' : "Your work schedule shouldn't prevent you from learning lifesaving skills. Ask about daytime, evening, night, weekend or at-home sessions, depending on the course and location."}
            </p>
          </div>
          <div style={grid}>
            {[
              { icon: <Clock3 size={27} />, en: 'Flexible Hours', es: 'Horarios flexibles', descEn: 'Daytime, evening, night and weekend options by request.', descEs: 'Opciones de día, tarde, noche y fin de semana a solicitud.' },
              { icon: <Users size={27} />, en: 'Private & Group Training', es: 'Capacitación privada y grupal', descEn: 'For individuals, families, healthcare teams, employers and organizations.', descEs: 'Para personas, familias, equipos de salud, empresas y organizaciones.' },
              { icon: <MapPin size={27} />, en: 'On-Site Training', es: 'Capacitación a domicilio', descEn: 'Ask about a session at home, at work or at another suitable location.', descEs: 'Consulta por sesiones en tu domicilio, trabajo u otra ubicación apropiada.' },
              { icon: <CalendarDays size={27} />, en: 'Choose Your Date', es: 'Elige tu fecha', descEn: 'Request a date even if it is not listed in the calendar.', descEs: 'Solicita una fecha aunque no figure en el calendario.' }
            ].map((item) => (
              <article key={item.en} style={{ ...card, padding: 24, alignItems: 'center', textAlign: 'center', gap: 13 }}>
                <span style={{ color: '#24748d' }}>{item.icon}</span>
                <h3 style={{ margin: 0, color: '#10294a' }}>{es ? item.es : item.en}</h3>
                <p style={{ margin: 0, color: '#526173', lineHeight: 1.8 }}>{es ? item.descEs : item.descEn}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <a href={inquiry(null, es)} style={{ ...primary, display: 'inline-block', padding: '16px 28px' }}>
              {es ? 'Solicitar capacitación personalizada' : 'Request Personalized Training'}
            </a>
            <p style={{ maxWidth: 780, margin: '18px auto 0', color: '#637083', fontSize: 13, lineHeight: 1.7 }}>
              {es ? 'Todas las modalidades están sujetas a requisitos de certificación, seguridad del lugar y disponibilidad del instructor. Cualquier costo adicional se acordará antes de inscribirse.' : 'All formats depend on certification requirements, location safety and instructor availability. Additional expenses will be disclosed before enrollment.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ background: '#eef5f8', border: '1px solid #dce8ee', borderRadius: 20, padding: 'clamp(28px, 5vw, 55px)', textAlign: 'center' }}>
            <div className="eyebrow center">{es ? 'Nuestro enfoque de capacitación' : 'Our Approach to Training'}</div>
            <h2 className="section-title">{es ? 'La preparación comienza antes de una emergencia.' : 'Preparedness Starts Before the Emergency.'}</h2>
            <div style={{ maxWidth: 830, margin: '0 auto', color: '#43546a', lineHeight: 1.85 }}>
              <p>{es ? 'Capacitarse significa reconocer riesgos, prevenir situaciones evitables y tomar decisiones informadas, además de responder ante una emergencia.' : 'Training means recognizing risks, preventing avoidable situations and making informed decisions, as well as responding to emergencies.'}</p>
              <p>{es ? 'En los cursos de Wilderness Medicine fomentamos escenarios prácticos en aula y entornos naturales apropiados, trabajo en equipo e improvisación segura con recursos disponibles. Las evaluaciones remotas se ofrecen solo si el programa de certificación las autoriza.' : 'In Wilderness Medicine courses we emphasize practical scenarios in the classroom and suitable outdoor settings, teamwork and safe improvisation with available resources. Remote skills assessments are offered only when authorized by the certification program.'}</p>
              <p style={{ color: '#10294a', fontWeight: 700, fontSize: 20 }}>{es ? 'El conocimiento empodera. La preparación protege. La compasión conecta.' : 'Knowledge Empowers. Preparation Protects. Compassion Connects.'}</p>
              <Link to={`${prefix}/about`} className="btn">{es ? 'Conoce nuestra filosofía' : 'Learn About Our Philosophy'}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="training-bottom-grid">
            <div className="training-benefits">
              <h3>{t.whyTitle}</h3>
              <ul>{[t.why1, t.why2, t.why3, t.why4, t.why5].map((benefit, i) => (
                <li key={i}><CheckCircle2 size={18} />{benefit}</li>
              ))}</ul>
            </div>
            <div className="training-bag-panel">
              <img src="/training_gear.png" alt={es ? 'Equipo de capacitación de DC LifeSafe Global' : 'DC LifeSafe Global training equipment'} />
            </div>
            <aside className="upcoming-card">
              <h4><CalendarDays size={20} />{es ? 'Cursos disponibles' : 'Available Courses'}</h4>
              {courses.map((course) => (
                <div className="course-item" key={course.id}>
                  <strong>{course.name}</strong>
                  <span>{es ? 'Horarios personalizados a solicitud' : 'Personalized dates on request'}</span>
                  <small>{course.issuer}</small>
                  <Link className="text-link" to={`${prefix}/training/${course.id}`}>
                    {es ? 'Ver curso' : 'View Course'} →
                  </Link>
                </div>
              ))}
            </aside>
          </div>
          <div className="bottom-action-bar">
            <div><strong>{t.betterTraining}</strong><span>{t.strongerTomorrow}</span></div>
            <a className="btn" href={inquiry(null, es)}><Mail size={17} /> {es ? 'Solicitar información' : 'Request Information'}</a>
          </div>
        </div>
      </section>
    </>
  );
}

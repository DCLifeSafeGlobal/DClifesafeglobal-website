
import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  Link,
  useLocation
} from 'react-router-dom';

import SEO from './components/SEO.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import Wellness from './pages/Wellness.jsx';
import Training from './pages/Training.jsx';
import Outdoor from './pages/Outdoor.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Resources from './pages/Resources.jsx';
import Workshops from './pages/Workshops.jsx';
import SurfvivingPage from './pages/SurfvivingPage.jsx';

// Books & Publications
import Books from './pages/Books.jsx';

// Learning Center
import Surfviving from './pages/learning-center/Surfviving.jsx';
import BLS from './pages/learning-center/BLS.jsx';
import ACLS from './pages/learning-center/ACLS.jsx';
import Wilderness from './pages/learning-center/wilderness.jsx';

// Expedition Visuals
import ExpeditionVisuals from './pages/ExpeditionVisuals.jsx';
import AmsterdamVisual from './pages/AmsterdamVisual.jsx';
import WildlifeVisuals from './pages/WildlifeVisuals.jsx';
import BarcelonaVisual from './pages/BarcelonaVisual.jsx';
import WashingtonStateVisual from './pages/WashingtonStateVisual.jsx';
import RedRocksVisual from './pages/RedRocksVisual.jsx';
import BaselVisual from './pages/BaselVisual.jsx';

// Global Expedition Network
import Network from './pages/Network.jsx';

// Course information
const courseData = {
  bls: {
    title: 'BLS Provider Training',
    fullName: 'Basic Life Support',
    provider: 'American Heart Association (AHA)',
    dates: [
      'November 28, 2026',
      'December 12, 2026',
      'December 19, 2026'
    ],
    datesEs: [
      '28 de noviembre de 2026',
      '12 de diciembre de 2026',
      '19 de diciembre de 2026'
    ],
    prices: [
      { en: 'Initial', es: 'Inicial', amount: '$75' },
      { en: 'Renewal', es: 'Renovación', amount: '$65' }
    ],
    certification: 'AHA BLS Provider eCard',
    resource: '/learning-center/bls'
  },

  acls: {
    title: 'ACLS Provider Training',
    fullName: 'Advanced Cardiovascular Life Support',
    provider: 'American Heart Association (AHA)',
    dates: ['December 19, 2026'],
    datesEs: ['19 de diciembre de 2026'],
    prices: [
      { en: 'Initial', es: 'Inicial', amount: '$225' },
      { en: 'Renewal', es: 'Renovación', amount: '$185' }
    ],
    certification: 'AHA ACLS Provider eCard',
    resource: '/learning-center/acls'
  },

  wfa: {
    title: 'Wilderness First Aid (WFA)',
    fullName: 'Wilderness First Aid',
    provider: 'Survival Med',
    dates: ['January 9, 2027 | 8:30 AM - 5:30 PM'],
    datesEs: ['9 de enero de 2027 | 8:30 AM - 5:30 PM'],
    prices: [
      { en: 'Regular', es: 'Regular', amount: '$350' },
      {
        en: 'Early Registration',
        es: 'Inscripción anticipada',
        amount: '$300'
      }
    ],
    certification: '2-year Wilderness First Aid certification',
    resource: '/learning-center/wilderness'
  },

  wfr: {
    title: 'Wilderness First Responder (WFR)',
    fullName: 'Wilderness First Responder',
    provider: 'Survival Med',
    dates: [
      'Online starts: January 11, 2027',
      'In-person: February 15-19, 2027'
    ],
    datesEs: [
      'Inicio online: 11 de enero de 2027',
      'Prácticas presenciales: 15-19 de febrero de 2027'
    ],
    prices: [
      { en: 'Regular', es: 'Regular', amount: '$1,000' },
      {
        en: 'Early Registration',
        es: 'Inscripción anticipada',
        amount: '$900'
      }
    ],
    certification: '2-year Wilderness First Responder certification',
    resource: '/learning-center/wilderness'
  }
};

// Temporary self-contained course pages.
// These will move to a dedicated file in a later step.
function CourseDetail({ courseId }) {
  const location = useLocation();
  const spanish =
    location.pathname === '/es' ||
    location.pathname.startsWith('/es/');

  const course = courseData[courseId];
  if (!course) return null;

  const prefix = spanish ? '/es' : '';

  const emailSubject = spanish
    ? `Consulta sobre ${course.title}`
    : `Course Information: ${course.title}`;

  const emailBody = spanish
    ? `Hola DC LifeSafe Global,\n\nQuisiera recibir información sobre el curso ${course.title}.\n\nNombre:\nFecha de interés:\n\nGracias.`
    : `Hello DC LifeSafe Global,\n\nI would like more information about ${course.title}.\n\nName:\nPreferred date:\n\nThank you.`;

  const emailLink =
    'mailto:info@dclifesafeglobal.com' +
    '?subject=' + encodeURIComponent(emailSubject) +
    '&body=' + encodeURIComponent(emailBody);

  const boxStyle = {
    background: '#ffffff',
    borderRadius: '18px',
    padding: '24px',
    marginBottom: '20px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.06)'
  };

  const buttonStyle = {
    display: 'block',
    padding: '15px 20px',
    textAlign: 'center',
    background: '#0d294c',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 600
  };

  return (
    <main
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '50px 20px 80px'
      }}
    >
      <Link
        to={`${prefix}/training`}
        style={{
          color: '#17466e',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        {spanish ? '← Volver a cursos' : '← Back to Training'}
      </Link>

      <header style={{ margin: '35px 0' }}>
        <p style={{
          color: '#317b94',
          fontWeight: 700
        }}>
          DC LifeSafe Global
        </p>

        <h1 style={{
          color: '#10294a',
          fontSize: 'clamp(30px, 5vw, 45px)',
          lineHeight: 1.2
        }}>
          {course.title}
        </h1>

        <p style={{
          color: '#45556b',
          fontSize: '19px'
        }}>
          {course.fullName}
        </p>

        <p style={{ color: '#45556b' }}>
          {course.provider}
        </p>
      </header>

      <section style={boxStyle}>
        <h2>
          {spanish ? 'Próximas fechas' : 'Upcoming Dates'}
        </h2>

        <ul>
          {(spanish ? course.datesEs : course.dates).map(
            (date, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {date}
              </li>
            )
          )}
        </ul>
      </section>

      <section style={boxStyle}>
        <h2>
          {spanish ? 'Costo del curso' : 'Course Tuition'}
        </h2>

        {course.prices.map((price, index) => (
          <p key={index}>
            <strong>{spanish ? price.es : price.en}:</strong>{' '}
            {price.amount}
          </p>
        ))}
      </section>

      <section style={boxStyle}>
        <h2>
          {spanish ? 'Certificación' : 'Certification'}
        </h2>

        <p>{course.certification}</p>

        <p>
          {spanish
            ? 'Consulta los requisitos y detalles de certificación antes de inscribirte.'
            : 'Please confirm certification requirements and course details before enrolling.'}
        </p>
      </section>

      <section style={boxStyle}>
        <h2>
          {spanish
            ? 'Recursos educativos gratuitos'
            : 'Free Learning Resources'}
        </h2>

        <p>
          {spanish
            ? 'Explora los materiales educativos relacionados con este curso en nuestro Learning Center.'
            : 'Explore educational materials related to this course in our Learning Center.'}
        </p>

        <Link
          to={`${prefix}${course.resource}`}
          style={buttonStyle}
        >
          {spanish
            ? 'Explorar recursos gratuitos'
            : 'Explore Free Learning Resources'}
        </Link>
      </section>

      <section style={boxStyle}>
        <h2>
          {spanish
            ? 'Información e inscripción'
            : 'Information & Registration'}
        </h2>

        <p>
          {spanish
            ? 'Contáctanos para consultar disponibilidad, requisitos e inscripción.'
            : 'Contact us for availability, requirements, and registration information.'}
        </p>

        <a href={emailLink} style={buttonStyle}>
          {spanish
            ? 'Solicitar información'
            : 'Request Course Information'}
        </a>

        <p style={{
          textAlign: 'center',
          marginTop: '16px'
        }}>
          info@dclifesafeglobal.com
        </p>
      </section>
    </main>
  );
}

const pageRoutes = [
  { path: '/', element: <Home /> },
  { path: '/wellness', element: <Wellness /> },
  { path: '/surfviving', element: <SurfvivingPage /> },
  { path: '/training', element: <Training /> },

  // Individual certification courses
  {
    path: '/training/bls',
    element: <CourseDetail courseId='bls' />
  },
  {
    path: '/training/acls',
    element: <CourseDetail courseId='acls' />
  },
  {
    path: '/training/wfa',
    element: <CourseDetail courseId='wfa' />
  },
  {
    path: '/training/wfr',
    element: <CourseDetail courseId='wfr' />
  },

  { path: '/outdoor', element: <Outdoor /> },
  { path: '/books', element: <Books /> },

  { path: '/learning-center', element: <Resources /> },
  {
    path: '/learning-center/surfviving',
    element: <Surfviving />
  },
  { path: '/learning-center/bls', element: <BLS /> },
  { path: '/learning-center/acls', element: <ACLS /> },
  {
    path: '/learning-center/wilderness',
    element: <Wilderness />
  },

  { path: '/workshops', element: <Workshops /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },

  { path: '/visuals', element: <ExpeditionVisuals /> },
  {
    path: '/visuals/amsterdam',
    element: <AmsterdamVisual />
  },
  {
    path: '/visuals/barcelona',
    element: <BarcelonaVisual />
  },
  {
    path: '/visuals/wildlife',
    element: <WildlifeVisuals />
  },
  {
    path: '/visuals/washington-state',
    element: <WashingtonStateVisual />
  },
  {
    path: '/visuals/red-rocks-colorado',
    element: <RedRocksVisual />
  },
  {
    path: '/visuals/basel',
    element: <BaselVisual />
  },

  { path: '/network', element: <Network /> }
];

export default function App() {
  return (
    <>
      <SEO />
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {pageRoutes.map(({ path, element }) => (
            <React.Fragment key={path}>
              <Route path={path} element={element} />
              <Route
                path={path === '/' ? '/es' : `/es${path}`}
                element={element}
              />
            </React.Fragment>
          ))}

          <Route
            path='/resources'
            element={
              <Navigate to='/learning-center' replace />
            }
          />

          <Route
            path='/es/resources'
            element={
              <Navigate to='/es/learning-center' replace />
            }
          />

          <Route
            path='/expeditions'
            element={<Navigate to='/visuals' replace />}
          />

          <Route
            path='/es/expeditions'
            element={<Navigate to='/es/visuals' replace />}
          />
        </Route>
      </Routes>
    </>
  );
}

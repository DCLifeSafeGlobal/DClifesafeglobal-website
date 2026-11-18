
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

// ==========================================
// DC LIFESAFE GLOBAL
// INDIVIDUAL TRAINING COURSE INFORMATION
// ==========================================

const courseData = {
  bls: {
    title: 'BLS Provider Training',
    fullName: 'Basic Life Support',
    provider: 'American Heart Association (AHA)',
    poster: '/Training/BLS/BLS Nov - Dec 26.jpg',

    description: {
      en: 'Basic Life Support training prepares healthcare professionals and other eligible responders to recognize life-threatening emergencies and deliver high-quality CPR, use an AED, and respond effectively as part of a resuscitation team.',
      es: 'La capacitación en soporte vital básico prepara a profesionales de salud y otros participantes elegibles para reconocer emergencias potencialmente mortales, realizar RCP de alta calidad, utilizar un DEA y responder eficazmente como parte de un equipo de reanimación.'
    },

    dates: {
      en: [
        'Saturday, November 28, 2026',
        'Saturday, December 12, 2026',
        'Saturday, December 19, 2026'
      ],
      es: [
        'Sábado 28 de noviembre de 2026',
        'Sábado 12 de diciembre de 2026',
        'Sábado 19 de diciembre de 2026'
      ]
    },

    prices: [
      {
        en: 'Initial Certification',
        es: 'Certificación inicial',
        amount: '$75'
      },
      {
        en: 'Renewal',
        es: 'Renovación',
        amount: '$65'
      }
    ],

    objectives: {
      en: [
        'High-quality adult, child, and infant CPR',
        'Automated External Defibrillator (AED) use',
        'Recognition of cardiac arrest',
        'Response to choking emergencies',
        'Effective team-based resuscitation',
        'Practical skills assessment'
      ],
      es: [
        'RCP de alta calidad en adultos, niños y lactantes',
        'Uso del desfibrilador externo automático (DEA)',
        'Reconocimiento del paro cardíaco',
        'Respuesta ante emergencias por atragantamiento',
        'Reanimación efectiva en equipo',
        'Evaluación de habilidades prácticas'
      ]
    },

    format: {
      en: 'Instructor-led training with hands-on practice and skills evaluation. Course details and duration will be confirmed before enrollment.',
      es: 'Capacitación dirigida por instructor, con práctica presencial y evaluación de habilidades. Los detalles y la duración se confirmarán antes de la inscripción.'
    },

    certification: {
      en: 'AHA BLS Provider eCard, valid for two years, upon successful completion of all course requirements.',
      es: 'Credencial electrónica AHA BLS Provider (eCard), válida por dos años, al completar satisfactoriamente todos los requisitos del curso.'
    },

    included: {
      en: [
        'Instructor-led course training',
        'Hands-on CPR and AED skills practice',
        'Skills assessment',
        'AHA Provider eCard upon successful completion'
      ],
      es: [
        'Capacitación dirigida por instructor',
        'Práctica de RCP y uso de DEA',
        'Evaluación de habilidades',
        'Credencial AHA Provider al completar el curso satisfactoriamente'
      ]
    },

    materials: {
      en: 'The current official AHA BLS Provider Manual is required and is not included in the advertised tuition. Official training materials are sold separately. Students must have access to the required manual.',
      es: 'El manual oficial vigente de AHA BLS Provider es obligatorio y no está incluido en el precio anunciado. Los materiales oficiales se venden por separado. Los participantes deben tener acceso al manual requerido.'
    },

    location: {
      en: 'Aurora / Denver Metropolitan Area, Colorado. Exact training location will be confirmed before enrollment.',
      es: 'Aurora / área metropolitana de Denver, Colorado. La ubicación exacta se confirmará antes de la inscripción.'
    },

    resource: '/learning-center/bls'
  },

  acls: {
    title: 'ACLS Provider Training',
    fullName: 'Advanced Cardiovascular Life Support',
    provider: 'American Heart Association (AHA)',
    poster: '/Training/ACLS/ACLS 12-19-26.jpg',

    description: {
      en: 'Advanced Cardiovascular Life Support training develops the knowledge and practical skills needed to participate in the management of adult cardiovascular emergencies, using current AHA algorithms and high-performance team principles.',
      es: 'La capacitación en soporte vital cardiovascular avanzado desarrolla los conocimientos y habilidades prácticas necesarios para participar en el manejo de emergencias cardiovasculares del adulto, utilizando los algoritmos vigentes de la AHA y los principios de trabajo en equipos de alto rendimiento.'
    },

    dates: {
      en: ['Saturday, December 19, 2026'],
      es: ['Sábado 19 de diciembre de 2026']
    },

    prices: [
      {
        en: 'Initial Certification',
        es: 'Certificación inicial',
        amount: '$225'
      },
      {
        en: 'Renewal',
        es: 'Renovación',
        amount: '$185'
      }
    ],

    objectives: {
      en: [
        'Adult cardiac arrest management',
        'Recognition and management of cardiac rhythms',
        'ACLS algorithms and clinical decision-making',
        'Airway management and effective ventilation',
        'Acute coronary syndromes and stroke recognition',
        'Resuscitation pharmacology',
        'Team communication and leadership'
      ],
      es: [
        'Manejo del paro cardíaco en adultos',
        'Reconocimiento y manejo de ritmos cardíacos',
        'Algoritmos ACLS y toma de decisiones clínicas',
        'Manejo de la vía aérea y ventilación efectiva',
        'Reconocimiento de síndromes coronarios agudos y ACV',
        'Farmacología de la reanimación',
        'Comunicación y liderazgo de equipos'
      ]
    },

    format: {
      en: 'Instructor-led training with case-based learning, resuscitation scenarios, and skills evaluation. Preparation requirements and course duration will be confirmed before enrollment.',
      es: 'Capacitación dirigida por instructor, con aprendizaje basado en casos, escenarios de reanimación y evaluación de habilidades. Los requisitos de preparación y la duración se confirmarán antes de la inscripción.'
    },

    certification: {
      en: 'AHA ACLS Provider eCard, valid for two years, upon successful completion of all course requirements.',
      es: 'Credencial electrónica AHA ACLS Provider (eCard), válida por dos años, al completar satisfactoriamente todos los requisitos del curso.'
    },

    included: {
      en: [
        'Instructor-led ACLS training',
        'Case-based resuscitation practice',
        'Skills and course assessments',
        'AHA Provider eCard upon successful completion'
      ],
      es: [
        'Capacitación ACLS dirigida por instructor',
        'Práctica de reanimación basada en casos',
        'Evaluaciones de habilidades y del curso',
        'Credencial AHA Provider al completar el curso satisfactoriamente'
      ]
    },

    materials: {
      en: 'The current official AHA ACLS Provider Manual is required and is not included in the advertised tuition. Official training materials are sold separately. Students must have access to the required manual and complete applicable preparation requirements.',
      es: 'El manual oficial vigente de AHA ACLS Provider es obligatorio y no está incluido en el precio anunciado. Los materiales oficiales se venden por separado. Los participantes deben tener acceso al manual requerido y completar los requisitos de preparación correspondientes.'
    },

    location: {
      en: 'Aurora / Denver Metropolitan Area, Colorado. Exact training location will be confirmed before enrollment.',
      es: 'Aurora / área metropolitana de Denver, Colorado. La ubicación exacta se confirmará antes de la inscripción.'
    },

    resource: '/learning-center/acls'
  },

  wfa: {
    title: 'Wilderness First Aid (WFA)',
    fullName: 'Wilderness First Aid',
    provider: 'Survival Med',
    poster: '/Training/WFA/WFA 1-9-27.jpg',

    description: {
      en: 'Wilderness First Aid prepares participants to recognize, assess, and respond to medical emergencies and injuries in outdoor and remote environments where immediate professional medical assistance may not be available.',
      es: 'Wilderness First Aid prepara a los participantes para reconocer, evaluar y responder ante emergencias médicas y lesiones en entornos naturales o remotos, donde la asistencia médica profesional inmediata puede no estar disponible.'
    },

    dates: {
      en: [
        'In-person training: Saturday, January 9, 2027',
        'Time: 8:30 AM – 5:30 PM'
      ],
      es: [
        'Capacitación presencial: sábado 9 de enero de 2027',
        'Horario: 8:30 AM – 5:30 PM'
      ]
    },

    prices: [
      {
        en: 'Regular Tuition',
        es: 'Tarifa regular',
        amount: '$350'
      },
      {
        en: 'Early Registration',
        es: 'Inscripción anticipada',
        amount: '$300'
      }
    ],

    objectives: {
      en: [
        'Wilderness patient assessment',
        'Bleeding control and wound management',
        'Musculoskeletal injury assessment',
        'Environmental emergency recognition',
        'Basic stabilization and first aid',
        'Emergency response and evacuation considerations'
      ],
      es: [
        'Evaluación de pacientes en entornos remotos',
        'Control de hemorragias y manejo de heridas',
        'Evaluación de lesiones musculoesqueléticas',
        'Reconocimiento de emergencias ambientales',
        'Estabilización básica y primeros auxilios',
        'Respuesta ante emergencias y consideraciones de evacuación'
      ]
    },

    format: {
      en: 'Hybrid learning format combining self-paced online study with one day of instructor-led, in-person practical skills training.',
      es: 'Modalidad híbrida que combina estudio online a ritmo propio con una jornada presencial de entrenamiento práctico dirigido por instructor.'
    },

    certification: {
      en: 'Survival Med Wilderness First Aid certification, valid for two years, upon successful completion of course requirements.',
      es: 'Certificación Wilderness First Aid de Survival Med, válida por dos años, al completar satisfactoriamente los requisitos del curso.'
    },

    included: {
      en: [
        'Self-paced online learning component',
        'One day of hands-on practical training',
        'Instructor-led scenarios and skills practice',
        'Certification upon successful completion'
      ],
      es: [
        'Componente de aprendizaje online a ritmo propio',
        'Una jornada de capacitación práctica presencial',
        'Escenarios y ejercicios dirigidos por instructor',
        'Certificación al completar el curso satisfactoriamente'
      ]
    },

    materials: {
      en: 'Online learning access and practical training are included in the course offering. Any additional equipment or preparation requirements will be communicated before enrollment.',
      es: 'El acceso al aprendizaje online y la capacitación práctica están incluidos en la oferta del curso. Cualquier equipo adicional o requisito de preparación se comunicará antes de la inscripción.'
    },

    location: {
      en: 'Colorado, USA. The exact practical training location will be confirmed before enrollment.',
      es: 'Colorado, Estados Unidos. La ubicación exacta de la capacitación práctica se confirmará antes de la inscripción.'
    },

    resource: '/learning-center/wilderness'
  },

  wfr: {
    title: 'Wilderness First Responder (WFR)',
    fullName: 'Hybrid WFR Initial Certification',
    provider: 'Survival Med',
    poster: '/Training/WFR/WFR 1-11-27.jpg',

    description: {
      en: 'The Hybrid Wilderness First Responder program is a comprehensive 70-hour wilderness medicine course designed to develop practical skills in patient assessment, emergency response, stabilization, decision-making, and medical care in remote environments.',
      es: 'El programa híbrido Wilderness First Responder es un curso integral de medicina en entornos remotos de 70 horas, diseñado para desarrollar habilidades prácticas de evaluación de pacientes, respuesta ante emergencias, estabilización, toma de decisiones y atención médica en lugares alejados.'
    },

    dates: {
      en: [
        'Scheduled online start: January 11, 2027',
        'Scheduled in-person practicals: February 15–19, 2027',
        'Private or flexible schedules may be arranged'
      ],
      es: [
        'Inicio online programado: 11 de enero de 2027',
        'Prácticas presenciales programadas: 15–19 de febrero de 2027',
        'Posibilidad de coordinar horarios privados o flexibles'
      ]
    },

    prices: [
      {
        en: 'Regular Tuition',
        es: 'Tarifa regular',
        amount: '$1,000'
      },
      {
        en: 'Early Registration',
        es: 'Inscripción anticipada',
        amount: '$900'
      }
    ],

    objectives: {
      en: [
        'Comprehensive wilderness patient assessment',
        'Medical decision-making in remote environments',
        'Bleeding control and injury stabilization',
        'Management of environmental emergencies',
        'Patient monitoring and ongoing assessment',
        'Emergency scenarios and team-based response',
        'Evacuation planning and remote medical care'
      ],
      es: [
        'Evaluación integral de pacientes en entornos remotos',
        'Toma de decisiones médicas en lugares alejados',
        'Control de hemorragias y estabilización de lesiones',
        'Manejo de emergencias ambientales',
        'Monitoreo y reevaluación continua del paciente',
        'Simulaciones de emergencia y trabajo en equipo',
        'Planificación de evacuaciones y atención médica remota'
      ]
    },

    format: {
      en: '70 total training hours: 35 hours of self-paced online education through Survival Med, followed by 35 hours of instructor-led, hands-on practical training. Private practical schedules may be arranged by mutual agreement and program requirements.',
      es: 'Un total de 70 horas: 35 horas de educación online a ritmo propio mediante Survival Med, seguidas de 35 horas de capacitación práctica presencial dirigida por instructor. Los horarios privados pueden coordinarse de común acuerdo y conforme a los requisitos del programa.'
    },

    certification: {
      en: 'Survival Med Wilderness First Responder certification, valid for two years, upon successful completion of all course requirements.',
      es: 'Certificación Wilderness First Responder de Survival Med, válida por dos años, al completar satisfactoriamente todos los requisitos del curso.'
    },

    included: {
      en: [
        'Enrollment in the Survival Med online WFR program',
        'Access to 35 hours of self-paced online coursework',
        '35 hours of instructor-led practical training',
        'Hands-on assessments and realistic scenarios',
        'WFR certification upon successful completion'
      ],
      es: [
        'Inscripción al programa online WFR de Survival Med',
        'Acceso a 35 horas de aprendizaje online a ritmo propio',
        '35 horas de capacitación práctica dirigida por instructor',
        'Evaluaciones prácticas y escenarios realistas',
        'Certificación WFR al completar el programa satisfactoriamente'
      ]
    },

    materials: {
      en: 'Online program enrollment and instructor-led practical training are included in the base tuition. Any additional preparation or equipment requirements will be provided before enrollment.',
      es: 'La inscripción al programa online y la capacitación práctica dirigida por instructor están incluidas en la matrícula base. Los requisitos adicionales de preparación o equipo se comunicarán antes de la inscripción.'
    },

    location: {
      en: 'Based in the Denver/Aurora metropolitan area, Colorado. Practical training may be arranged at a mutually agreed suitable location within Colorado, depending on instructor availability and training requirements.',
      es: 'Con base en el área metropolitana de Denver/Aurora, Colorado. La capacitación práctica puede coordinarse en una ubicación adecuada acordada dentro de Colorado, según la disponibilidad del instructor y los requisitos de formación.'
    },

    travel: {
      en: 'The $1,000 regular tuition represents the base course price. Additional transportation, travel, facility rental, or logistical expenses may apply to specially arranged locations. All additional charges will be discussed and agreed upon before enrollment.',
      es: 'La matrícula regular de $1,000 representa el precio base del curso. Pueden aplicarse gastos adicionales de transporte, desplazamiento, alquiler de instalaciones u otros gastos logísticos en ubicaciones especiales. Todos los cargos adicionales se comunicarán y acordarán antes de la inscripción.'
    },

    resource: '/learning-center/wilderness'
  }
};

// ==========================================
// SHARED COURSE PAGE DESIGN
// ==========================================

const styles = {
  page: {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '40px 20px 80px'
  },

  card: {
    background: '#ffffff',
    border: '1px solid #e6ebf1',
    borderRadius: '18px',
    padding: 'clamp(20px, 3vw, 32px)',
    boxShadow: '0 5px 22px rgba(12, 37, 68, 0.05)'
  },

  heading: {
    color: '#10294a',
    marginTop: 0,
    marginBottom: '18px',
    fontSize: 'clamp(22px, 3vw, 28px)'
  },

  button: {
    display: 'block',
    textAlign: 'center',
    padding: '15px 20px',
    background: '#0b355e',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 600,
    lineHeight: 1.4
  },

  secondaryButton: {
    display: 'block',
    textAlign: 'center',
    padding: '15px 20px',
    background: '#ffffff',
    color: '#0b355e',
    border: '2px solid #0b355e',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 600,
    lineHeight: 1.4
  },

  list: {
    paddingLeft: '24px',
    lineHeight: 1.9,
    color: '#35465c'
  }
};

// ==========================================
// INDIVIDUAL COURSE DETAIL COMPONENT
// ==========================================

function CourseDetail({ courseId }) {
  const location = useLocation();

  const es =
    location.pathname === '/es' ||
    location.pathname.startsWith('/es/');

  const lang = es ? 'es' : 'en';
  const prefix = es ? '/es' : '';

  const course = courseData[courseId];

  if (!course) return null;

  const subject = es
    ? `Consulta e inscripción - ${course.title}`
    : `Course Registration Inquiry - ${course.title}`;

  const body = es
    ? [
        'Hola DC LifeSafe Global,',
        '',
        `Estoy interesado(a) en ${course.title}.`,
        '',
        'Nombre completo:',
        'Ciudad / Estado:',
        'Fecha de interés:',
        'Certificación inicial o renovación (si corresponde):',
        '¿Curso programado o privado?:',
        'Preguntas adicionales:',
        '',
        'Gracias.'
      ].join('\n')
    : [
        'Hello DC LifeSafe Global,',
        '',
        `I am interested in ${course.title}.`,
        '',
        'Full Name:',
        'City / State:',
        'Preferred Course Date:',
        'Initial or Renewal (if applicable):',
        'Scheduled Course or Private Training:',
        'Additional Questions:',
        '',
        'Thank you.'
      ].join('\n');

  const emailLink =
    'mailto:info@dclifesafeglobal.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  const notes = {
    en: {
      back: 'Back to Training',
      dates: 'Upcoming Course Dates',
      format: 'Course Format & Duration',
      objectives: 'What You Will Learn',
      tuition: 'Course Tuition',
      included: 'What Is Included',
      materials: 'Required Materials & Preparation',
      certification: 'Certification',
      location: 'Training Location',
      expenses: 'Additional Travel & Logistical Expenses',
      resources: 'Free Learning Resources',
      resourcesText:
        'Explore related educational resources, guides, and learning materials in the DC LifeSafe Global Learning Center.',
      resourcesButton: 'Explore Free Learning Resources',
      registration: 'Information & Registration',
      registrationText:
        'Contact us to confirm course availability, preparation requirements, and registration details. Enrollment is confirmed individually.',
      registrationButton: 'Request Course Information',
      questions: 'Frequently Asked Questions',
      q1: 'Is certification included?',
      a1: 'The course includes the certification indicated above, issued after successful completion of all required components and assessments.',
      q2: 'Can I request a private or group session?',
      a2: 'Private and group training requests can be discussed based on instructor availability, appropriate facilities, and program requirements.',
      q3: 'How do I register?',
      a3: 'Select Request Course Information and provide your preferred date and contact details. We will review availability and enrollment instructions with you.',
      disclaimer:
        'Dates, location, tuition promotions, and seat availability are subject to confirmation. Early registration offers are subject to availability.',
      instructor: 'Instructor',
      contact: 'Contact',
      image: 'Official course flyer'
    },
    es: {
      back: 'Volver a Training',
      dates: 'Próximas fechas del curso',
      format: 'Modalidad y duración',
      objectives: 'Qué aprenderás',
      tuition: 'Costo del curso',
      included: 'Qué incluye la matrícula',
      materials: 'Materiales y preparación requerida',
      certification: 'Certificación',
      location: 'Ubicación del curso',
      expenses: 'Gastos adicionales de traslado y logística',
      resources: 'Recursos educativos gratuitos',
      resourcesText:
        'Explora recursos educativos, guías y materiales relacionados en el Learning Center de DC LifeSafe Global.',
      resourcesButton: 'Explorar recursos gratuitos',
      registration: 'Información e inscripción',
      registrationText:
        'Contáctanos para confirmar disponibilidad, requisitos de preparación y detalles de inscripción. La matrícula se confirma individualmente.',
      registrationButton: 'Solicitar información del curso',
      questions: 'Preguntas frecuentes',
      q1: '¿La certificación está incluida?',
      a1: 'El curso incluye la certificación indicada anteriormente, emitida al completar satisfactoriamente todos los componentes y evaluaciones requeridos.',
      q2: '¿Puedo solicitar una clase privada o grupal?',
      a2: 'Las solicitudes de formación privada o grupal pueden coordinarse según disponibilidad del instructor, instalaciones adecuadas y requisitos del programa.',
      q3: '¿Cómo puedo inscribirme?',
      a3: 'Selecciona Solicitar información del curso e indica la fecha de tu interés y tus datos de contacto. Revisaremos la disponibilidad y los pasos de inscripción.',
      disclaimer:
        'Las fechas, ubicación, promociones y disponibilidad de plazas deben confirmarse. Las tarifas anticipadas están sujetas a disponibilidad.',
      instructor: 'Instructor',
      contact: 'Contacto',
      image: 'Afiche oficial del curso'
    }
  }[lang];

  const sectionGap = {
    display: 'grid',
    gap: '22px'
  };

  return (
    <main style={styles.page}>

      {/* BACK TO TRAINING */}

      <Link
        to={`${prefix}/training`}
        style={{
          display: 'inline-block',
          color: '#205f82',
          textDecoration: 'none',
          fontWeight: 600,
          marginBottom: '28px'
        }}
      >
        ← {notes.back}
      </Link>

      {/* COURSE HEADER */}

      <header style={{ marginBottom: '36px' }}>

        <p
          style={{
            color: '#24748d',
            fontWeight: 700,
            letterSpacing: '1px'
          }}
        >
          DC LifeSafe Global
        </p>

        <h1
          style={{
            color: '#10294a',
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.2,
            margin: '12px 0'
          }}
        >
          {course.title}
        </h1>

        <p
          style={{
            color: '#53657a',
            fontSize: '20px',
            marginBottom: '8px'
          }}
        >
          {course.fullName}
        </p>

        <p
          style={{
            color: '#24748d',
            fontWeight: 600
          }}
        >
          {course.provider}
        </p>

      </header>

      {/* COURSE FLYER AND INTRO */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '30px',
          alignItems: 'start',
          marginBottom: '30px'
        }}
      >

        <div style={styles.card}>
          <img
            src={course.poster}
            alt={`${notes.image} - ${course.title}`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '10px'
            }}
          />
        </div>

        <div style={sectionGap}>

          <section style={styles.card}>
            <h2 style={styles.heading}>
              {course.title}
            </h2>

            <p
              style={{
                color: '#35465c',
                lineHeight: 1.8,
                fontSize: '17px'
              }}
            >
              {course.description[lang]}
            </p>
          </section>

          <section style={styles.card}>
            <h2 style={styles.heading}>
              {notes.dates}
            </h2>

            <ul style={styles.list}>
              {course.dates[lang].map((date, index) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          </section>

          <section style={styles.card}>
            <h2 style={styles.heading}>
              {notes.tuition}
            </h2>

            {course.prices.map((price, index) => (
              <p
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid #e8edf2'
                }}
              >
                <span style={{ color: '#35465c' }}>
                  {price[lang]}
                </span>

                <strong
                  style={{
                    fontSize: '24px',
                    color: '#a71919'
                  }}
                >
                  {price.amount}
                </strong>
              </p>
            ))}

            <p
              style={{
                color: '#657488',
                fontSize: '13px',
                marginTop: '15px',
                lineHeight: 1.6
              }}
            >
              {notes.disclaimer}
            </p>

            <a
              href={emailLink}
              style={{
                ...styles.button,
                marginTop: '20px'
              }}
            >
              {notes.registrationButton}
            </a>
          </section>

        </div>
      </div>

      {/* DETAILED COURSE INFORMATION */}

      <div style={sectionGap}>

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.format}
          </h2>

          <p style={{ lineHeight: 1.8, color: '#35465c' }}>
            {course.format[lang]}
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.objectives}
          </h2>

          <ul style={styles.list}>
            {course.objectives[lang].map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </section>

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.included}
          </h2>

          <ul style={styles.list}>
            {course.included[lang].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.materials}
          </h2>

          <p style={{ lineHeight: 1.8, color: '#35465c' }}>
            {course.materials[lang]}
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.certification}
          </h2>

          <p style={{ lineHeight: 1.8, color: '#35465c' }}>
            {course.certification[lang]}
          </p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.location}
          </h2>

          <p style={{ lineHeight: 1.8, color: '#35465c' }}>
            {course.location[lang]}
          </p>
        </section>

        {/* WFR ADDITIONAL EXPENSES */}

        {course.travel && (
          <section style={styles.card}>
            <h2 style={styles.heading}>
              {notes.expenses}
            </h2>

            <p
              style={{
                lineHeight: 1.8,
                color: '#35465c'
              }}
            >
              {course.travel[lang]}
            </p>
          </section>
        )}

        {/* INSTRUCTOR INFORMATION */}

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.instructor}
          </h2>

          <p
            style={{
              fontWeight: 700,
              fontSize: '19px',
              color: '#10294a'
            }}
          >
            Daniel Caceres Prieto, MD
          </p>

          <p style={{ color: '#53657a', lineHeight: 1.8 }}>
            {courseId === 'bls' || courseId === 'acls'
              ? 'AHA BLS, Heartsaver & ACLS Instructor'
              : 'Survival Med Authorized Wilderness Medicine Instructor'}
          </p>

          {(courseId === 'wfa' || courseId === 'wfr') && (
            <p style={{ color: '#53657a' }}>
              Instructor ID: EPL9777
            </p>
          )}
        </section>

        {/* FREE LEARNING RESOURCES */}

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.resources}
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: '#35465c',
              marginBottom: '22px'
            }}
          >
            {notes.resourcesText}
          </p>

          <Link
            to={`${prefix}${course.resource}`}
            style={styles.secondaryButton}
          >
            {notes.resourcesButton}
          </Link>

          <p
            style={{
              color: '#657488',
              fontSize: '13px',
              marginTop: '16px',
              lineHeight: 1.6
            }}
          >
            {es
              ? 'Los materiales gratuitos son educativos y no sustituyen la capacitación certificada ni los manuales oficiales requeridos.'
              : 'Free educational materials do not replace certified training or required official course manuals.'}
          </p>
        </section>

        {/* FAQ */}

        <section style={styles.card}>
          <h2 style={styles.heading}>
            {notes.questions}
          </h2>

          {[
            [notes.q1, notes.a1],
            [notes.q2, notes.a2],
            [notes.q3, notes.a3]
          ].map(([question, answer], index) => (
            <details
              key={index}
              style={{
                borderBottom: '1px solid #e6ebf1',
                padding: '16px 0'
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  color: '#10294a',
                  lineHeight: 1.5
                }}
              >
                {question}
              </summary>

              <p
                style={{
                  lineHeight: 1.8,
                  color: '#53657a',
                  paddingTop: '12px'
                }}
              >
                {answer}
              </p>
            </details>
          ))}
        </section>

        {/* REGISTRATION */}

        <section
          style={{
            ...styles.card,
            background: '#f1f6fa'
          }}
        >
          <h2 style={styles.heading}>
            {notes.registration}
          </h2>

          <p
            style={{
              color: '#35465c',
              lineHeight: 1.8
            }}
          >
            {notes.registrationText}
          </p>

          <a
            href={emailLink}
            style={{
              ...styles.button,
              marginTop: '22px'
            }}
          >
            {notes.registrationButton}
          </a>

          <p
            style={{
              textAlign: 'center',
              marginTop: '16px',
              color: '#35465c'
            }}
          >
            info@dclifesafeglobal.com
          </p>
        </section>

      </div>
    </main>
  );
}

// ==========================================
// ALL WEBSITE ROUTES
// ==========================================

const pageRoutes = [
  { path: '/', element: <Home /> },
  { path: '/wellness', element: <Wellness /> },
  { path: '/surfviving', element: <SurfvivingPage /> },
  { path: '/training', element: <Training /> },

  // Individual training courses
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

  // Learning Center
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

  // Expedition Visuals
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

  // Global Expedition Network
  { path: '/network', element: <Network /> }
];

// ==========================================
// MAIN APP
// ==========================================

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
              <Navigate
                to='/learning-center'
                replace
              />
            }
          />

          <Route
            path='/es/resources'
            element={
              <Navigate
                to='/es/learning-center'
                replace
              />
            }
          />

          <Route
            path='/expeditions'
            element={
              <Navigate
                to='/visuals'
                replace
              />
            }
          />

          <Route
            path='/es/expeditions'
            element={
              <Navigate
                to='/es/visuals'
                replace
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

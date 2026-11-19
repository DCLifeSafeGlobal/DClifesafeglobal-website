
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
// OFFICIAL TRAINING COURSE INFORMATION
// ==========================================

const courseData = {

  // ========================================
  // BASIC LIFE SUPPORT
  // ========================================

  bls: {
    title: 'BLS Provider Training',
    titleEs: 'BLS Provider — Soporte Vital Básico',
    fullName: 'Basic Life Support',
    fullNameEs: 'Soporte Vital Básico',
    provider: 'American Heart Association (AHA)',

    poster: '/Training/BLS/BLS.jpg',
    posterEs: '/Training/BLS/BLS-Sp.jpg',

    description: {
      en: 'Basic Life Support training prepares healthcare professionals and other eligible responders to recognize life-threatening emergencies, deliver high-quality CPR, use an AED, and respond effectively as part of a resuscitation team.',

      es: 'La capacitación en soporte vital básico prepara a profesionales de salud y otros participantes elegibles para reconocer emergencias potencialmente mortales, realizar RCP de alta calidad, utilizar un DEA y responder eficazmente como parte de un equipo de reanimación.'
    },

    dates: {
      en: [
        'Flexible scheduling available',
        'Proposed sessions: Tuesdays and Saturdays',
        'Individual and group training available',
        'Classes available in English and Spanish',
        'Dates and locations require confirmation'
      ],

      es: [
        'Horarios flexibles disponibles',
        'Sesiones propuestas: martes y sábados',
        'Capacitación individual y grupal disponible',
        'Clases disponibles en inglés y español',
        'Fechas y ubicaciones sujetas a confirmación'
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
      en: 'Instructor-led training with hands-on CPR and AED practice, realistic emergency scenarios, and skills evaluation. Individual and group sessions may be coordinated according to instructor and facility availability. Daytime, evening, weekend, private, group, and suitable on-site training arrangements may be requested, subject to availability and course requirements.',

      es: 'Capacitación dirigida por instructor, con práctica de RCP y DEA, escenarios realistas de emergencia y evaluación de habilidades. Las sesiones individuales y grupales pueden coordinarse según disponibilidad del instructor y de las instalaciones. Se pueden solicitar horarios diurnos, vespertinos o nocturnos, fines de semana, sesiones privadas, grupales o en instalaciones del participante, según disponibilidad y requisitos del curso.'
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

      es: 'Aurora / área metropolitana de Denver, Colorado. La ubicación exacta de la capacitación se confirmará antes de la inscripción.'
    },

    resource: '/learning-center/bls'
  },

  // ========================================
  // ADVANCED CARDIOVASCULAR LIFE SUPPORT
  // ========================================

  acls: {
    title: 'ACLS Provider Training',
    titleEs: 'ACLS Provider — Soporte Vital Cardiovascular Avanzado',
    fullName: 'Advanced Cardiovascular Life Support',
    fullNameEs: 'Soporte Vital Cardiovascular Avanzado',
    provider: 'American Heart Association (AHA)',

    poster: '/Training/ACLS/ACLS.jpg',
    posterEs: '/Training/ACLS/ACLS-Sp.jpg',

    description: {
      en: 'Advanced Cardiovascular Life Support training develops the knowledge and practical skills needed to participate in the management of adult cardiovascular emergencies, using current AHA algorithms and high-performance team principles.',

      es: 'La capacitación en soporte vital cardiovascular avanzado desarrolla los conocimientos y habilidades prácticas necesarios para participar en el manejo de emergencias cardiovasculares del adulto, utilizando los algoritmos vigentes de la AHA y los principios de trabajo en equipos de alto rendimiento.'
    },

    dates: {
      en: [
        'Flexible scheduling available',
        'Proposed sessions: Alternate Saturdays',
        'Individual and group training available',
        'Classes available in English and Spanish',
        'Dates and locations require confirmation'
      ],

      es: [
        'Horarios flexibles disponibles',
        'Sesiones propuestas: sábados alternos',
        'Capacitación individual y grupal disponible',
        'Clases disponibles en inglés y español',
        'Fechas y ubicaciones sujetas a confirmación'
      ]
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
      en: 'Instructor-led training with case-based learning, resuscitation scenarios, practical skills assessment, and high-performance team exercises. Individual and group sessions may be coordinated according to instructor and facility availability. Daytime, evening, weekend, private, group, and suitable on-site training arrangements may be requested, subject to availability and course requirements.',

      es: 'Capacitación dirigida por instructor, con aprendizaje basado en casos, escenarios de reanimación, evaluación de habilidades prácticas y ejercicios de equipos de alto rendimiento. Las sesiones individuales y grupales pueden coordinarse según disponibilidad del instructor y de las instalaciones. Se pueden solicitar horarios diurnos, vespertinos o nocturnos, fines de semana, sesiones privadas, grupales o en instalaciones del participante, según disponibilidad y requisitos del curso.'
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

      es: 'Aurora / área metropolitana de Denver, Colorado. La ubicación exacta de la capacitación se confirmará antes de la inscripción.'
    },

    resource: '/learning-center/acls'
  },

  // ========================================
  // WILDERNESS FIRST AID
  // ========================================

  wfa: {
    title: 'Wilderness First Aid (WFA)',
    titleEs: 'Wilderness First Aid (WFA) — Primeros Auxilios en Zonas Agrestes',
    fullName: 'Wilderness First Aid',
    fullNameEs: 'Primeros Auxilios en Zonas Agrestes',
    provider: 'Survival Med',

    poster: '/Training/WFA/WFA.jpg',
    posterEs: '/Training/WFA/WFA-Sp.jpg',

    description: {
      en: 'Wilderness First Aid prepares participants to recognize, assess, and respond to medical emergencies and injuries in outdoor and remote environments where immediate professional medical assistance may not be available.',

      es: 'Wilderness First Aid prepara a los participantes para reconocer, evaluar y responder ante emergencias médicas y lesiones en entornos naturales o remotos, donde la asistencia médica profesional inmediata puede no estar disponible.'
    },

    dates: {
      en: [
        'Flexible scheduling available',
        'Proposed sessions: Sundays',
        'Individual and group training available',
        'Classes available in English and Spanish',
        'Practical training locations and dates require confirmation'
      ],

      es: [
        'Horarios flexibles disponibles',
        'Sesiones propuestas: domingos',
        'Capacitación individual y grupal disponible',
        'Clases disponibles en inglés y español',
        'Fechas y lugares de prácticas sujetos a confirmación'
      ]
    },

    prices: [
      {
        en: 'Course Tuition',
        es: 'Costo del curso',
        amount: '$350'
      }
    ],

    objectives: {
      en: [
        'Wilderness patient assessment',
        'Bleeding control and wound management',
        'Musculoskeletal injury assessment',
        'Environmental emergency recognition',
        'Basic stabilization and first aid',
        'Emergency response and evacuation considerations',
        'Risk awareness and prevention in outdoor environments'
      ],

      es: [
        'Evaluación de pacientes en entornos remotos',
        'Control de hemorragias y manejo de heridas',
        'Evaluación de lesiones musculoesqueléticas',
        'Reconocimiento de emergencias ambientales',
        'Estabilización básica y primeros auxilios',
        'Respuesta ante emergencias y consideraciones de evacuación',
        'Identificación de riesgos y prevención en entornos naturales'
      ]
    },

    format: {
      en: 'Hybrid training combining self-paced online education with instructor-led practical skills training. Practical activities may include classroom-based exercises, suitable outdoor scenarios, teamwork, and safe improvisation with available resources. Remote practical assessments may be offered only when authorized by Survival Med for the applicable certification format. Daytime, evening, weekend, private, group, and suitable on-site training arrangements may be requested, subject to availability and course requirements.',

      es: 'Capacitación híbrida que combina educación online a ritmo propio con prácticas dirigidas por instructor. Las actividades pueden incluir ejercicios en aula, escenarios apropiados al aire libre, trabajo en equipo e improvisación segura con los recursos disponibles. Las evaluaciones prácticas remotas solo podrán ofrecerse cuando Survival Med las autorice para la modalidad de certificación correspondiente. Se pueden solicitar horarios diurnos, vespertinos o nocturnos, fines de semana, sesiones privadas, grupales o en instalaciones del participante, según disponibilidad y requisitos del curso.'
    },

    certification: {
      en: 'Survival Med Wilderness First Aid certification, valid for two years, upon successful completion of all applicable course requirements.',

      es: 'Certificación Wilderness First Aid de Survival Med, válida por dos años, al completar satisfactoriamente todos los requisitos correspondientes.'
    },

    included: {
      en: [
        'Self-paced online learning component',
        'Instructor-led practical skills training',
        'Scenario-based learning and skills practice',
        'Certification upon successful completion'
      ],

      es: [
        'Componente de aprendizaje online a ritmo propio',
        'Capacitación práctica dirigida por instructor',
        'Aprendizaje mediante escenarios y ejercicios prácticos',
        'Certificación al completar satisfactoriamente el programa'
      ]
    },

    materials: {
      en: 'Online learning access and instructor-led practical training are included in the course offering. Any additional equipment or preparation requirements will be communicated before enrollment.',

      es: 'El acceso al aprendizaje online y la capacitación práctica dirigida por instructor están incluidos en el curso. Los requisitos adicionales de preparación o equipo se comunicarán antes de la inscripción.'
    },

    location: {
      en: 'Colorado, USA. Practical training may take place in a suitable classroom or outdoor setting, depending on weather, safety conditions, instructor availability, and applicable certification requirements.',

      es: 'Colorado, Estados Unidos. Las prácticas podrán realizarse en un aula adecuada o en un entorno natural apropiado, según las condiciones meteorológicas, la seguridad, la disponibilidad del instructor y los requisitos de certificación.'
    },

    resource: '/learning-center/wilderness'
  },

  // ========================================
  // WILDERNESS FIRST RESPONDER
  // ========================================

  wfr: {
    title: 'Wilderness First Responder (WFR)',
    titleEs: 'Wilderness First Responder (WFR) — Primer Respondiente en Zonas Agrestes',
    fullName: 'Hybrid WFR Initial Certification',
    fullNameEs: 'Certificación inicial WFR — Modalidad híbrida',
    provider: 'Survival Med',

    poster: '/Training/WFR/WFR.jpg',
    posterEs: '/Training/WFR/WFR-Sp.jpg',

    description: {
      en: 'The Hybrid Wilderness First Responder program is a comprehensive 70-hour wilderness medicine course designed to develop practical skills in patient assessment, emergency response, stabilization, decision-making, and medical care in remote environments.',

      es: 'El programa híbrido Wilderness First Responder es un curso integral de medicina en entornos remotos de 70 horas, diseñado para desarrollar habilidades prácticas de evaluación de pacientes, respuesta ante emergencias, estabilización, toma de decisiones y atención médica en lugares alejados.'
    },

    dates: {
      en: [
        'Flexible scheduling available',
        'Two proposed online-start inquiry opportunities per month',
        'Online coursework and practical dates coordinated individually',
        'Classes available in English and Spanish',
        'Practical training locations and schedules require confirmation'
      ],

      es: [
        'Horarios flexibles disponibles',
        'Dos oportunidades mensuales propuestas para consultar el inicio online',
        'El componente online y las prácticas se coordinan individualmente',
        'Clases disponibles en inglés y español',
        'Fechas y lugares de prácticas sujetos a confirmación'
      ]
    },

    prices: [
      {
        en: 'Initial Certification',
        es: 'Certificación inicial',
        amount: '$1,000'
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
        'Evacuation planning and remote medical care',
        'Risk prevention and expedition preparedness'
      ],

      es: [
        'Evaluación integral de pacientes en entornos remotos',
        'Toma de decisiones médicas en lugares alejados',
        'Control de hemorragias y estabilización de lesiones',
        'Manejo de emergencias ambientales',
        'Monitoreo y reevaluación continua del paciente',
        'Simulaciones de emergencia y trabajo en equipo',
        'Planificación de evacuaciones y atención médica remota',
        'Prevención de riesgos y preparación para expediciones'
      ]
    },

    format: {
      en: '70 total training hours: 35 hours of self-paced online education through Survival Med, followed by 35 hours of instructor-led practical training. Practical sessions may combine suitable classroom and outdoor scenarios, teamwork, patient assessment, and safe improvisation with available resources. Remote practical assessments are offered only when permitted by the applicable Survival Med certification program. Daytime, evening, weekend, private, group, and suitable on-site training arrangements may be requested, subject to availability and course requirements.',

      es: 'Un total de 70 horas de capacitación: 35 horas de educación online a ritmo propio mediante Survival Med, seguidas de 35 horas de prácticas dirigidas por instructor. Las sesiones pueden combinar escenarios apropiados en aula y al aire libre, trabajo en equipo, evaluación de pacientes e improvisación segura con los recursos disponibles. Las evaluaciones prácticas remotas solo se ofrecen cuando lo permite el programa de certificación de Survival Med correspondiente. Se pueden solicitar horarios diurnos, vespertinos o nocturnos, fines de semana, sesiones privadas, grupales o en instalaciones del participante, según disponibilidad y requisitos del curso.'
    },

    certification: {
      en: 'Survival Med Wilderness First Responder certification, valid for two years, upon successful completion of all applicable course requirements.',

      es: 'Certificación Wilderness First Responder de Survival Med, válida por dos años, al completar satisfactoriamente todos los requisitos correspondientes.'
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
        'Certificación WFR al completar satisfactoriamente el programa'
      ]
    },

    materials: {
      en: 'Online program enrollment and instructor-led practical training are included in the base tuition. Any additional preparation or equipment requirements will be provided before enrollment.',

      es: 'La inscripción al programa online y la capacitación práctica dirigida por instructor están incluidas en la matrícula base. Los requisitos adicionales de preparación o equipo se comunicarán antes de la inscripción.'
    },

    location: {
      en: 'Based in the Denver/Aurora Metropolitan Area, Colorado. Practical training may be arranged at a mutually agreed suitable classroom or outdoor location within Colorado, depending on safety conditions, instructor availability, and program requirements.',

      es: 'Con base en el área metropolitana de Denver/Aurora, Colorado. Las prácticas pueden coordinarse en un aula o entorno natural adecuado dentro de Colorado, según las condiciones de seguridad, la disponibilidad del instructor y los requisitos del programa.'
    },

    travel: {
      en: 'The $1,000 regular tuition represents the base course price. Additional transportation, travel, facility rental, or logistical expenses may apply to specially arranged locations. All additional charges will be discussed and agreed upon before enrollment.',

      es: 'La matrícula regular de $1,000 representa el precio base del curso. Pueden aplicarse gastos adicionales de transporte, desplazamiento, alquiler de instalaciones u otros gastos logísticos en ubicaciones especiales. Todos los cargos adicionales se comunicarán y acordarán antes de la inscripción.'
    },

    resource: '/learning-center/wilderness'
  },

  // ========================================
  // WILDERNESS ADVANCED FIRST AID
  // ========================================

  wafa: {
    title: 'Wilderness Advanced First Aid (WAFA)',
    titleEs: 'Wilderness Advanced First Aid (WAFA) — Primeros Auxilios Avanzados en Zonas Agrestes',
    fullName: 'Wilderness Advanced First Aid',
    fullNameEs: 'Primeros Auxilios Avanzados en Zonas Agrestes',
    provider: 'Survival Med',
    poster: '/Training/WAFA/WAFA.jpg',
    posterEs: '/Training/WAFA/WAFA-Sp.jpg',
    description: {
      en: 'Wilderness Advanced First Aid develops patient assessment, first aid, and decision-making skills for more complex situations in outdoor and remote settings.',
      es: 'Wilderness Advanced First Aid desarrolla habilidades de evaluación de pacientes, primeros auxilios y toma de decisiones para situaciones de mayor complejidad en entornos naturales y remotos.'
    },
    dates: {
      en: ['Flexible dates by request', 'Daytime, evening, and weekend inquiries welcome', 'English and Spanish training inquiries', 'Field or classroom practical arrangements are subject to course requirements and confirmation'],
      es: ['Fechas flexibles a solicitud', 'Consultas para horarios diurnos, nocturnos y fines de semana', 'Solicitudes de capacitación en inglés y español', 'Las prácticas en campo o aula están sujetas a requisitos del programa y confirmación']
    },
    prices: [{ en: 'Course Tuition', es: 'Costo del curso', amount: '$500' }],
    objectives: {
      en: ['Structured patient assessment', 'Management of common wilderness injuries', 'Medical and environmental emergency recognition', 'Monitoring and reassessment', 'Team communication and evacuation decisions', 'Practical scenarios with available resources'],
      es: ['Evaluación estructurada del paciente', 'Manejo de lesiones frecuentes en zonas agrestes', 'Reconocimiento de emergencias médicas y ambientales', 'Monitoreo y reevaluación', 'Comunicación en equipo y decisiones de evacuación', 'Escenarios prácticos con recursos disponibles']
    },
    format: {
      en: 'Course instruction and practical assessment will follow the applicable Survival Med WAFA curriculum. Classroom, field, and remote components are arranged only when permitted under the selected certification format. Exact hours and schedule are confirmed before enrollment.',
      es: 'La enseñanza y evaluación práctica seguirán el programa WAFA aplicable de Survival Med. Los componentes en aula, campo o remotos se coordinarán únicamente cuando los permita la modalidad de certificación elegida. Las horas y el horario exactos se confirmarán antes de la inscripción.'
    },
    certification: {
      en: 'Survival Med WAFA certification upon successful completion of all applicable program requirements and assessments.',
      es: 'Certificación WAFA de Survival Med al completar satisfactoriamente los requisitos y evaluaciones correspondientes.'
    },
    included: {
      en: ['Instruction in the applicable WAFA curriculum', 'Practical scenario-based exercises', 'Skills assessments as required', 'Certification upon successful completion'],
      es: ['Formación según el programa WAFA correspondiente', 'Ejercicios prácticos basados en escenarios', 'Evaluaciones de habilidades requeridas', 'Certificación al completar satisfactoriamente el curso']
    },
    materials: {
      en: 'Required learning materials, equipment, course format, and practical arrangements will be confirmed before enrollment.',
      es: 'Los materiales de aprendizaje, equipos, modalidad y prácticas requeridos se confirmarán antes de la inscripción.'
    },
    location: {
      en: 'Colorado, USA. On-site or appropriate field locations may be discussed, subject to safety, instructor availability, and certification requirements.',
      es: 'Colorado, Estados Unidos. Se pueden considerar instalaciones del participante o entornos naturales adecuados, según seguridad, disponibilidad del instructor y requisitos de certificación.'
    },
    resource: '/learning-center/wilderness'
  },

  // ========================================
  // WFR RECERTIFICATION
  // ========================================

  'wfr-recert': {
    title: 'Wilderness First Responder Recertification',
    titleEs: 'Wilderness First Responder — Recertificación WFR',
    fullName: 'WFR Recertification',
    fullNameEs: 'Recertificación de Primer Respondiente en Zonas Agrestes',
    provider: 'Survival Med',
    poster: '/Training/WFR/WFR Recert.jpg',
    posterEs: '/Training/WFR/WFR-Recert-Sp.jpg',
    description: {
      en: 'WFR recertification provides an opportunity for eligible responders to refresh wilderness medical assessment, emergency response, and practical decision-making skills.',
      es: 'La recertificación WFR permite a participantes elegibles actualizar sus habilidades de evaluación médica, respuesta ante emergencias y toma de decisiones prácticas en zonas agrestes.'
    },
    dates: {
      en: ['Flexible scheduling by request', 'Eligibility and prior certification must be verified', 'Practical assessment format subject to Survival Med requirements', 'English and Spanish inquiries welcome'],
      es: ['Programación flexible a solicitud', 'Es necesario verificar la elegibilidad y certificación previa', 'La modalidad de evaluación práctica depende de los requisitos de Survival Med', 'Consultas disponibles en inglés y español']
    },
    prices: [{ en: 'Tuition — request a quote', es: 'Matrícula — solicitar cotización', amount: 'Contact us' }],
    objectives: {
      en: ['Refresh structured patient assessment', 'Revisit injury stabilization and environmental emergencies', 'Practice team-based scenarios', 'Review evacuation decisions', 'Demonstrate required skills for recertification'],
      es: ['Actualizar la evaluación estructurada del paciente', 'Repasar estabilización de lesiones y emergencias ambientales', 'Practicar escenarios en equipo', 'Revisar decisiones de evacuación', 'Demostrar las habilidades exigidas para recertificación']
    },
    format: {
      en: 'Recertification format, required hours, prerequisites, and assessment options will be confirmed against the current Survival Med program before registration. Remote assessment is available only when explicitly permitted for this certification pathway.',
      es: 'La modalidad de recertificación, horas requeridas, requisitos previos y opciones de evaluación se confirmarán conforme al programa vigente de Survival Med antes de la inscripción. La evaluación remota se ofrecerá únicamente si está expresamente permitida para esta modalidad.'
    },
    certification: {
      en: 'Survival Med WFR recertification upon verified eligibility and successful completion of the applicable requirements.',
      es: 'Recertificación WFR de Survival Med, previa verificación de elegibilidad y cumplimiento satisfactorio de los requisitos aplicables.'
    },
    included: {
      en: ['Review and practice of required skills', 'Relevant scenario-based assessments', 'Certification processing upon successful completion, subject to eligibility'],
      es: ['Revisión y práctica de habilidades requeridas', 'Evaluaciones pertinentes mediante escenarios', 'Tramitación de certificación al completar satisfactoriamente los requisitos, sujeto a elegibilidad']
    },
    materials: {
      en: 'Participants should provide details of their current or previous WFR certification. Required materials and any additional preparation will be communicated before enrollment.',
      es: 'Los participantes deberán proporcionar información de su certificación WFR vigente o anterior. Los materiales y la preparación adicional se comunicarán antes de la inscripción.'
    },
    location: {
      en: 'Colorado, USA. Appropriate practical locations and remote options, where authorized, will be confirmed individually.',
      es: 'Colorado, Estados Unidos. Las ubicaciones prácticas adecuadas y opciones remotas, cuando estén autorizadas, se confirmarán individualmente.'
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

  const courseTitle = es ? course.titleEs : course.title;
  const courseFullName = es ? course.fullNameEs : course.fullName;

  const subject = es
    ? `Consulta e inscripción - ${courseTitle}`
    : `Course Registration Inquiry - ${courseTitle}`;

  const body = es
    ? [
        'Hola DC LifeSafe Global,',
        '',
        `Estoy interesado(a) en ${courseTitle}.`,
        '',
        'Nombre completo:',
        'Ciudad / Estado:',
        'Fecha de interés:',
        'Certificación inicial o renovación (si corresponde):',
        'Horario preferido (mañana, tarde, noche o fin de semana):',
        'Tipo de capacitación (programada, privada o grupal):',
        'Número de participantes:',
        'Lugar preferido (centro de capacitación, domicilio, trabajo u otro):',
        'Código postal / Ciudad:',
        'Idioma preferido (español o inglés):',
        'Preguntas adicionales:',
        '',
        'Gracias.'
      ].join('\n')
    : [
        'Hello DC LifeSafe Global,',
        '',
        `I am interested in ${courseTitle}.`,
        '',
        'Full Name:',
        'City / State:',
        'Preferred Course Date:',
        'Initial or Renewal (if applicable):',
        'Preferred Time (daytime, evening, night, or weekend):',
        'Training Type (scheduled, private, or group):',
        'Number of Participants:',
        'Preferred Setting (training center, home, workplace, or other):',
        'ZIP Code / City:',
        'Preferred Language (English or Spanish):',
        'Additional Questions:',
        '',
        'Thank you.'
      ].join('\n');

  const emailLink =
    'mailto:info@dclifesafeglobal.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  const personalizedSubject = es
    ? `Capacitación personalizada - ${courseTitle}`
    : `Personalized Training Request - ${courseTitle}`;

  const personalizedEmailLink =
    'mailto:info@dclifesafeglobal.com' +
    '?subject=' + encodeURIComponent(personalizedSubject) +
    '&body=' + encodeURIComponent(body);

  const notes = {
    en: {
      back: 'Back to Training',
      dates: 'Scheduling & Proposed Training Opportunities',
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
      personalizedTitle: 'Training That Fits Your Schedule',
      personalizedText: 'Rotating shifts, long workdays, or a busy calendar? Request daytime, evening, night, or weekend training, including private, group, and suitable on-site sessions at home or at work.',
      personalizedButton: 'Request Your Preferred Date & Time',
      personalizedNote: 'Requests are subject to instructor availability, location, safety, suitable facilities, and all certification requirements. Additional travel or facility expenses may apply by agreement.',
      questions: 'Frequently Asked Questions',
      q1: 'Is certification included?',
      a1: 'The course includes the certification indicated above, issued after successful completion of all required components and assessments.',
      q2: 'Can I request a private or group session?',
      a2: 'Yes. You can request a private or group class, an evening or night session, or training at your home or workplace. Requests depend on instructor availability, suitable space, location, safety, and course requirements.',
      q3: 'How do I register?',
      a3: 'Select Request Course Information, enter your preferred date, time, location, participant count, and contact details. Your request is not a booking; we will confirm options with you.',
      disclaimer:
        'Proposed dates, training locations, and seat availability must be confirmed before enrollment. Listed tuition reflects current regular course prices. Special-location expenses, if applicable, will be discussed in advance.',
      instructor: 'Instructor',
      contact: 'Contact',
      image: 'Official course flyer'
    },
    es: {
      back: 'Volver a Capacitación',
      dates: 'Horarios y oportunidades propuestas',
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
      personalizedTitle: 'Capacitación que se adapta a tus horarios',
      personalizedText: '¿Trabajas por turnos o tienes poca disponibilidad? Puedes solicitar capacitación diurna, vespertina, nocturna o de fin de semana, en sesiones privadas, grupales y, cuando sea adecuado, a domicilio o en tu lugar de trabajo.',
      personalizedButton: 'Solicitar fecha y horario personalizados',
      personalizedNote: 'Las solicitudes están sujetas a disponibilidad del instructor, ubicación, seguridad, instalaciones adecuadas y requisitos de certificación. Los gastos adicionales de traslado o instalaciones, si corresponden, se acuerdan previamente.',
      questions: 'Preguntas frecuentes',
      q1: '¿La certificación está incluida?',
      a1: 'El curso incluye la certificación indicada anteriormente, emitida al completar satisfactoriamente todos los componentes y evaluaciones requeridos.',
      q2: '¿Puedo solicitar una clase privada o grupal?',
      a2: 'Sí. Puedes solicitar sesiones privadas o grupales, horarios vespertinos o nocturnos, o capacitación en tu domicilio o lugar de trabajo. Dependen de la disponibilidad del instructor, las condiciones del espacio, la ubicación, la seguridad y los requisitos del curso.',
      q3: '¿Cómo puedo inscribirme?',
      a3: 'Selecciona Solicitar información del curso e indica fecha, horario, ubicación, número de participantes y datos de contacto. La solicitud no equivale a una reserva; confirmaremos las opciones contigo.',
      disclaimer:
        'Las fechas propuestas, ubicaciones y plazas deben confirmarse antes de la inscripción. Los precios publicados corresponden a las tarifas regulares vigentes. Cualquier gasto adicional por una ubicación especial se informará previamente.',
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
          {courseTitle}
        </h1>

        <p
          style={{
            color: '#53657a',
            fontSize: '20px',
            marginBottom: '8px'
          }}
        >
          {courseFullName}
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
            src={es ? (course.posterEs || course.poster) : course.poster}
            alt={`${notes.image} - ${courseTitle}`}
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
              {courseTitle}
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

        {/* FLEXIBLE & PERSONALIZED TRAINING */}

        <section
          style={{
            ...styles.card,
            background: '#eef5f8',
            border: '1px solid #dce8ee'
          }}
        >
          <h2 style={styles.heading}>{notes.personalizedTitle}</h2>
          <p style={{ color: '#35465c', lineHeight: 1.8 }}>
            {notes.personalizedText}
          </p>
          <a
            href={personalizedEmailLink}
            style={{ ...styles.button, marginTop: '20px' }}
          >
            {notes.personalizedButton}
          </a>
          <p
            style={{
              color: '#657488',
              fontSize: '13px',
              lineHeight: 1.65,
              marginTop: '15px'
            }}
          >
            {notes.personalizedNote}
          </p>
        </section>

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

  { path: '/training/wafa', element: <CourseDetail courseId='wafa' /> },
  { path: '/training/wfr-recert', element: <CourseDetail courseId='wfr-recert' /> },

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

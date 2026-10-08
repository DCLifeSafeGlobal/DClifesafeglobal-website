import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../components/LanguageContext.jsx';

/* =========================================================
   ENGLISH RESOURCES
========================================================= */

const sectionsEN = [
  {
    title: 'Foundations',
    description:
      'Core concepts in resuscitation science, systematic assessment, team performance, ECG interpretation, and patient monitoring.',
    items: [
      [
        'Science of Resuscitation',
        '/learning-center/ACLS/acls-01-science-of-resuscitation.png',
      ],
      [
        'High Performance Teams — In Hospital',
        '/learning-center/ACLS/acls-02-high-performance-teams-in-hospital.png',
      ],
      [
        'High Performance Teams — Out of Hospital',
        '/learning-center/ACLS/acls-03-high-performance-teams-out-of-hospital.png',
      ],
      [
        'Systematic Approach',
        '/learning-center/ACLS/acls-04-systematic-approach.png',
      ],
      [
        'EKG Basics',
        '/learning-center/ACLS/acls-05-ekg-basics.png',
      ],
      [
        'Cardiac Monitor Waves',
        '/learning-center/ACLS/acls-06-cardiac-monitor-waves.png',
      ],
      [
        'Capnography Waveforms',
        '/learning-center/ACLS/acls-24-capnography-waveforms-a-crucial-assessment-guide.png',
      ],
    ],
  },

  {
    title: 'Airway & Vascular Access',
    description:
      'Visual references for airway management, advanced airway techniques, and intraosseous access.',
    items: [
      [
        'Airway Management',
        '/learning-center/ACLS/acls-07-airway-management.png',
      ],
      [
        'Advanced Airway Management',
        '/learning-center/ACLS/acls-08-advanced-airway-management.png',
      ],
      [
        'Intraosseous Access',
        '/learning-center/ACLS/acls-09-io-access.png',
      ],
    ],
  },

  {
    title: 'Core ACLS Algorithms',
    description:
      'Quick-reference visual guides for bradycardia, tachycardia, cardiac arrest, and post–cardiac arrest care.',
    items: [
      [
        'Bradycardia Algorithm',
        '/learning-center/ACLS/acls-10-bradycardia-algorithm.png',
      ],
      [
        'Tachycardia Algorithm',
        '/learning-center/ACLS/acls-11-tachycardia-algorithm.png',
      ],
      [
        'Cardiac Arrest Algorithm',
        '/learning-center/ACLS/acls-12-cardiac-arrest-algorithm.png',
      ],
      [
        'Post–Cardiac Arrest Care',
        '/learning-center/ACLS/acls-13-post-cardiac-arrest-care.png',
      ],
    ],
  },

  {
    title: 'Acute Coronary Syndromes',
    description:
      'Educational resources for recognizing and managing STEMI, NSTEMI, unstable angina, and other acute coronary syndromes.',
    items: [
      [
        'STEMI Recognition',
        '/learning-center/ACLS/acls-14-acs-stemi-recognition.png',
      ],
      [
        'STEMI vs. NSTEMI',
        '/learning-center/ACLS/acls-15-stemi-vs-nstemi.png',
      ],
      [
        'STEMI Management',
        '/learning-center/ACLS/acls-16-acs-stemi-management.png',
      ],
      [
        'NSTEMI / Unstable Angina',
        '/learning-center/ACLS/acls-17-acs-nstemi-unstable-angina.png',
      ],
    ],
  },

  {
    title: 'Stroke',
    description:
      'Visual resources covering acute stroke recognition, assessment, reperfusion, and the stroke chain of survival.',
    items: [
      [
        'Acute Stroke Assessment',
        '/learning-center/ACLS/acls-18-acute-stroke-assessment.png',
      ],
      [
        'Stroke Treatment & Reperfusion',
        '/learning-center/ACLS/acls-19-stroke-treatment-and-reperfusion.png',
      ],
      [
        'Stroke Chain of Survival',
        '/learning-center/ACLS/acls-20-stroke-chain-of-survival.png',
      ],
    ],
  },

  {
    title: 'Medications',
    description:
      'Quick-reference educational material covering medications commonly encountered in ACLS.',
    items: [
      [
        'ACLS Medication Quick Reference',
        '/learning-center/ACLS/acls-21-medication-quick-reference.png',
      ],
    ],
  },

  {
    title: 'Team Support',
    description:
      'Resources addressing communication, coping with death, post-event debriefing, and team wellbeing.',
    items: [
      [
        'Coping With Death',
        '/learning-center/ACLS/acls-22-coping-with-death.png',
      ],
      [
        'Post-Event Debrief',
        '/learning-center/ACLS/acls-23-coping-with-death-debrief.png',
      ],
    ],
  },
];

/* =========================================================
   SPANISH RESOURCES
========================================================= */

const sectionsES = [
  {
    title: 'Fundamentos',
    description:
      'Conceptos esenciales sobre ciencia de la reanimación, evaluación sistemática, trabajo en equipo, ECG y monitorización del paciente.',
    items: [
      [
        'Ciencia de la reanimación',
        '/learning-center/ACLS/spanish/ACLS-1-ciencia-de-la-reanimacion.png',
      ],
      [
        'Equipos intrahospitalarios efectivos',
        '/learning-center/ACLS/spanish/ACLS-2-equipos-intrahospitalarios-efectivos.png',
      ],
      [
        'Equipos de alto rendimiento fuera del hospital',
        '/learning-center/ACLS/spanish/ACLS-3-equipos-de-alto-rendimiento-fuera-del-hospital.png',
      ],
      [
        'Enfoque sistemático',
        '/learning-center/ACLS/spanish/ACLS-4-enfoque-sistematico.png',
      ],
      [
        'Fundamentos del ECG',
        '/learning-center/ACLS/spanish/ACLS-22-fundamentos-del-ecg.png',
      ],
      [
        'Diagnóstico y acción cardíaca',
        '/learning-center/ACLS/spanish/ACLS-21-diagnostico-y-accion-cardiaca.png',
      ],
    ],
  },

  {
    title: 'Vía aérea y acceso vascular',
    description:
      'Referencias visuales sobre manejo de la vía aérea, técnicas avanzadas y acceso intraóseo.',
    items: [
      [
        'Manejo de la vía aérea',
        '/learning-center/ACLS/spanish/ACLS-5-manejo-de-la-via-aerea.png',
      ],
      [
        'Manejo avanzado de la vía aérea',
        '/learning-center/ACLS/spanish/ACLS-6-curso-avanzado-de-manejo-de-la-via-aerea.png',
      ],
      [
        'Acceso intraóseo',
        '/learning-center/ACLS/spanish/ACLS-18-acceso-intraoseo.png',
      ],
    ],
  },

  {
    title: 'Algoritmos principales de ACLS',
    description:
      'Guías visuales de referencia rápida para bradicardia, taquicardia, paro cardíaco y cuidados posteriores al paro.',
    items: [
      [
        'Algoritmo de bradicardia',
        '/learning-center/ACLS/spanish/ACLS-7-algoritmo-de-bradicardia.png',
      ],
      [
        'Algoritmo de taquicardia',
        '/learning-center/ACLS/spanish/ACLS-8-algoritmo-de-taquicardia.png',
      ],
      [
        'Algoritmo de paro cardíaco',
        '/learning-center/ACLS/spanish/ACLS-9-algoritmo-de-paro-cardiaco.png',
      ],
      [
        'Cuidados posteriores al paro cardíaco',
        '/learning-center/ACLS/spanish/ACLS-11-cuidado-post-paro-cardiaco.png',
      ],
    ],
  },

  {
    title: 'Síndromes coronarios agudos',
    description:
      'Recursos educativos para el reconocimiento y manejo del IAM con y sin elevación del ST, angina inestable y otros síndromes coronarios agudos.',
    items: [
      [
        'Reconocimiento del infarto agudo de miocardio con elevación del ST',
        '/learning-center/ACLS/spanish/ACLS-12-sindromes-coronarios-agudos-IAM-ST.png',
      ],
      [
        'STEMI y NSTEMI: conozca la diferencia',
        '/learning-center/ACLS/spanish/ACLS-13-STEMI-NSTEMI-conozca-la-diferencia.png',
      ],
      [
        'Síndromes coronarios agudos: IAM con elevación del ST',
        '/learning-center/ACLS/spanish/ACLS-13-sindromes-coronarios-agudos-IAM-ST-ANGINA.png',
      ],
      [
        'IAM sin elevación del ST y angina inestable',
        '/learning-center/ACLS/spanish/ACLS-14-sindromes-coronarios-agudos-IAM-ST-angina-inestable.png',
      ],
    ],
  },

  {
    title: 'Ictus',
    description:
      'Recursos visuales sobre reconocimiento, evaluación, reperfusión y cadena de supervivencia del ictus.',
    items: [
      [
        'Cadena de supervivencia del ictus',
        '/learning-center/ACLS/spanish/ACLS-15-cadena-de-supervivencia-ictus.png',
      ],
      [
        'Evaluación del ictus agudo',
        '/learning-center/ACLS/spanish/ACLS-16-evaluacion-del-ictus-agudo.png',
      ],
      [
        'Tratamiento del ictus y reperfusión',
        '/learning-center/ACLS/spanish/ACLS-17-tratamiento-del-ictus-y-reperfusion.png',
      ],
    ],
  },

  {
    title: 'Medicamentos',
    description:
      'Material educativo de referencia rápida sobre medicamentos utilizados en el contexto de ACLS.',
    items: [
      [
        'Medicamentos para ACLS en detalle',
        '/learning-center/ACLS/spanish/ACLS-23-medicamentos-para-ACLS-en-detalle.png',
      ],
    ],
  },

  {
    title: 'Apoyo al equipo y a la familia',
    description:
      'Recursos sobre comunicación, afrontamiento de la muerte, debriefing posterior al evento y bienestar del equipo.',
    items: [
      [
        'Afrontar la muerte y comunicación con la familia',
        '/learning-center/ACLS/spanish/ACLS-19-afrontar-la-muerte-comunicacion-familiar.png',
      ],
      [
        'Debriefing y bienestar después del evento',
        '/learning-center/ACLS/spanish/ACLS-20-afrontar-la-muerte-debriefing-y-bienestar.png',
      ],
    ],
  },
];

/* =========================================================
   PAGE TEXT
========================================================= */

const pageText = {
  en: {
    eyebrow: 'DC LifeSafe Global Learning Center',
    title: 'Advanced Cardiac Life Support (ACLS)',
    subtitle:
      'Free educational resources for advanced cardiovascular life support, resuscitation, emergency cardiovascular care, and clinical review.',
    introTitle: 'Advanced Resuscitation Education',
    introText:
      'Explore original visual guides designed to reinforce ACLS concepts, systematic assessment, clinical decision-making, emergency algorithms, and team-based resuscitation.',
    openResource: 'Open Resource',
    imageUnavailable: 'Image unavailable',
    backButton: 'Back to Learning Center',
    disclaimer:
      'These materials are intended for education and review. They do not replace formal ACLS certification, professional medical advice, organizational protocols, or current clinical guidelines.',
  },

  es: {
    eyebrow: 'Centro de Aprendizaje de DC LifeSafe Global',
    title: 'Soporte Vital Cardiovascular Avanzado (ACLS)',
    subtitle:
      'Recursos educativos gratuitos sobre soporte vital cardiovascular avanzado, reanimación, atención cardiovascular de emergencia y repaso clínico.',
    introTitle: 'Educación avanzada en reanimación',
    introText:
      'Explora guías visuales originales diseñadas para reforzar conceptos de ACLS, evaluación sistemática, toma de decisiones clínicas, algoritmos de emergencia y reanimación basada en equipos.',
    openResource: 'Abrir Recurso',
    imageUnavailable: 'Imagen no disponible',
    backButton: 'Volver al Centro de Aprendizaje',
    disclaimer:
      'Estos materiales tienen fines educativos y de repaso. No reemplazan la certificación formal en ACLS, el asesoramiento médico profesional, los protocolos institucionales ni las guías clínicas vigentes.',
  },
};

/* =========================================================
   ACLS PAGE
========================================================= */

export default function ACLS() {
  const { language } = useLanguage();

  const currentLanguage = language === 'es' ? 'es' : 'en';
  const isSpanish = currentLanguage === 'es';

  const sections = isSpanish ? sectionsES : sectionsEN;
  const t = pageText[currentLanguage];

  const handleImageError = (event) => {
    const image = event.currentTarget;

    image.style.display = 'none';

    const fallback = image.parentElement?.querySelector(
      '.resource-image-fallback'
    );

    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <main className='resources-page acls-page'>
      <section className='section'>
        <div className='container'>
          <div className='text-center'>
            <p className='page-eyebrow'>{t.eyebrow}</p>

            <h1 className='section-title'>{t.title}</h1>

            <p className='section-subtitle narrow'>{t.subtitle}</p>
          </div>

          <div className='resources-intro'>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
          </div>

          {sections.map((section) => (
            <section className='resource-category' key={section.title}>
              <div className='text-center'>
                <h2>{section.title}</h2>

                <p className='section-subtitle narrow'>
                  {section.description}
                </p>
              </div>

              <div className='resource-grid'>
                {section.items.map(([title, image]) => (
                  <article className='resource-card' key={title}>
                    <a
                      href={image}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`${t.openResource}: ${title}`}
                    >
                      <img
                        src={image}
                        alt={title}
                        className='resource-preview'
                        loading='lazy'
                        onError={handleImageError}
                      />

                      <div
                        className='resource-image-fallback'
                        style={{ display: 'none' }}
                      >
                        <span>{t.imageUnavailable}</span>
                      </div>
                    </a>

                    <div className='resource-content'>
                      <h3>{title}</h3>

                      <a
                        className='btn'
                        href={image}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {t.openResource}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className='learning-center-footer text-center'>
            <p className='resource-disclaimer'>{t.disclaimer}</p>

            <Link
              to='/learning-center'
              className='btn btn-outline acls-back-button'
            >
              {t.backButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import { useLanguage } from '../components/LanguageContext.jsx';

/* =========================================================
   ENGLISH RESOURCES
========================================================= */

const sectionsEN = [
  {
    title: 'Foundations',
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
    items: [
      [
        'ACLS Medication Quick Reference',
        '/learning-center/ACLS/acls-21-medication-quick-reference.png',
      ],
    ],
  },

  {
    title: 'Team Support',
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
    items: [
      [
        'Medicamentos para ACLS en detalle',
        '/learning-center/ACLS/spanish/ACLS-23-medicamentos-para-ACLS-en-detalle.png',
      ],
    ],
  },

  {
    title: 'Apoyo al equipo y a la familia',
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
   ACLS PAGE
========================================================= */

export default function ACLS() {
  const { language } = useLanguage();

  const isSpanish = language === 'es';
  const sections = isSpanish ? sectionsES : sectionsEN;

  const pageTitle = isSpanish
    ? 'Soporte Vital Cardiovascular Avanzado (ACLS)'
    : 'Advanced Cardiac Life Support (ACLS)';

  const pageDescription = isSpanish
    ? 'Una colección integral de guías visuales y referencias rápidas de ACLS, diseñada para profesionales de la salud, instructores, estudiantes y personal de respuesta a emergencias.'
    : 'A comprehensive collection of ACLS quick-reference guides designed for healthcare professionals, instructors, students, and emergency responders.';

  const buttonText = isSpanish ? 'Abrir referencia' : 'Open Reference';

  const imageUnavailableText = isSpanish
    ? 'Imagen no disponible'
    : 'Image unavailable';

  return (
    <section className="section resources-page">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title">{pageTitle}</h1>

          <p className="section-subtitle narrow">
            {pageDescription}
          </p>
        </div>

        {sections.map((section) => (
          <div className="resource-category" key={section.title}>
            <h2>{section.title}</h2>

            <div className="resource-grid">
              {section.items.map(([title, image]) => (
                <article className="resource-card" key={title}>
                  <a
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${buttonText}: ${title}`}
                  >
                    <img
                      src={image}
                      alt={title}
                      className="resource-preview"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';

                        const fallback =
                          event.currentTarget.parentElement.querySelector(
                            '.resource-image-fallback'
                          );

                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />

                    <div
                      className="resource-image-fallback"
                      style={{ display: 'none' }}
                    >
                      {imageUnavailableText}
                    </div>
                  </a>

                  <div className="resource-content">
                    <h3>{title}</h3>

                    <a
                      href={image}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {buttonText}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

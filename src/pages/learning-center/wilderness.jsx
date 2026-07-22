import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../components/LanguageContext.jsx';

const resourceGroups = [
  {
    id: 'wilderness-foundations',

    title: {
      en: 'Wilderness & Expedition Medicine Foundations',
      es: 'Fundamentos de Medicina Wilderness y Expedicionaria',
    },

    description: {
      en: 'Core concepts for wilderness medicine, expedition preparation, teamwork, safety, training, and risk management.',
      es: 'Conceptos fundamentales de medicina wilderness, preparación expedicionaria, trabajo en equipo, seguridad, entrenamiento y gestión de riesgos.',
    },

    resources: [
      {
        id: 1,

        title: {
          en: 'Introduction to Wilderness Medicine',
          es: 'Introducción a la Medicina en Áreas Remotas',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-01-introduction-to-wilderness-medicine.png',
          es: '/learning-center/wilderness/spanish/wilderness-01-introduccion-a-la-medicina-en-areas-remotas.png',
        },
      },

      {
        id: 2,

        title: {
          en: 'Wilderness Medicine Safety Guide',
          es: 'Evaluación y Seguridad en Áreas Remotas',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-02-wilderness-medicine-safey-guide.png',
          es: '/learning-center/wilderness/spanish/wilderness-02-evaluacion-y-seguridad-en-areas-remotas.png',
        },
      },

      {
        id: 3,

        title: {
          en: 'Expedition Medicine: Care for Adventure',
          es: 'Entrenamiento Vital',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-03-expedition-medicine-care-for-adventure.png',
          es: '/learning-center/wilderness/spanish/wilderness-03-entrenamiento-vital.png',
        },
      },

      {
        id: 4,

        title: {
          en: 'Expedition Medicine: Preparing for the Wild',
          es: 'Medicina de Expedición: Preparación y Acción',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-04-expedition-medicine-preparing-for-the-wild.png',
          es: '/learning-center/wilderness/spanish/wilderness-04-medicina-de-expedicion-preparacion-y-accion.png',
        },
      },

      {
        id: 5,

        title: {
          en: 'Expedition Medicine: Teamwork, Safety & Decision-Making',
          es: 'Medicina de Expedición en Equipo',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-05-expedition-medicine-teamwork-safety-decision-making.png',
          es: '/learning-center/wilderness/spanish/wilderness-05-medicina-de-expedicion-en-equipo.png',
        },
      },

      {
        id: 6,

        title: {
          en: 'Expedition Medicine & Risk Management',
          es: 'Protocolos de Gestión de Riesgos',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-06-expedition-medicine-and-risk-management-guide.png',
          es: '/learning-center/wilderness/spanish/wilderness-06-protocolos-de-gestion-de-riesgos.png',
        },
      },

      {
        id: 7,

        title: {
          en: 'Continuous Learning in Expedition Medicine',
          es: 'Aprendizaje Continuo en Medicina de Expedición',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-07-expedition-medicine-continuous-learning-journey.png',
          es: '/learning-center/wilderness/spanish/wilderness-07-aprendizaje-continuo-en-medicina-de-expedicion.png',
        },
      },

      {
        id: 8,

        title: {
          en: 'Risk Management in Expedition Medicine',
          es: 'Evaluación y Gestión de Riesgos',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-08-expedition-medicine-risk-management-in-expedition-medicine.png',
          es: '/learning-center/wilderness/spanish/wilderness-08-evaluacion-y-gestion-de-riesgos.png',
        },
      },
    ],
  },

  {
    id: 'environmental-and-trauma',

    title: {
      en: 'Environmental Emergencies & Trauma',
      es: 'Emergencias Ambientales y Trauma',
    },

    description: {
      en: 'Visual guides covering hypothermia, altitude illness, dehydration, heat illness, bleeding, spine injuries, burns, HACE, and HAPE.',
      es: 'Guías visuales sobre hipotermia, enfermedades de altitud, deshidratación, enfermedades por calor, hemorragias, lesiones de columna, quemaduras, HACE y HAPE.',
    },

    resources: [
      {
        id: 9,

        title: {
          en: 'Hypothermia: Recognize, Protect & Respond',
          es: 'Rescate y Prevención de la Hipotermia',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-09-expedition-medicine-hypothermia-recognize-protect-respond.png',
          es: '/learning-center/wilderness/spanish/wilderness-09-medicina-de-expedicion-rescate-y-prevencion-de-la-hipotermia.png',
        },
      },

      {
        id: 10,

        title: {
          en: 'Altitude Illness',
          es: 'Enfermedad de Altura',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-10-altitud-illness.png',
          es: '/learning-center/wilderness/spanish/wilderness-10-expedition-medicine-enfermedad-de-altura.png',
        },
      },

      {
        id: 11,

        title: {
          en: 'Dehydration & Heat Illness',
          es: 'Deshidratación y Enfermedad por Calor',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-11-dehydration-and-heat-illness.png',
          es: '/learning-center/wilderness/spanish/wilderness-11-deshidratacion-enfermedad-por-calor.png',
        },
      },

      {
        id: 12,

        title: {
          en: 'Bleeding Control',
          es: 'Control de Hemorragias en la Montaña',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-12-bleeding-control.png',
          es: '/learning-center/wilderness/spanish/wilderness-12-control-de-hemorragias-en-la-montana.png',
        },
      },

      {
        id: 13,

        title: {
          en: 'Altitude Illness Recognition',
          es: 'Enfermedades de Altura',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-13-altitude-illness.png',
          es: '/learning-center/wilderness/spanish/wilderness-13-enfermedades-de-altura.png',
        },
      },

      {
        id: 14,

        title: {
          en: 'Spinal Injuries Awareness',
          es: 'Lesión de Columna en Entornos Remotos',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-14-spinal-injuries-awareness.png',
          es: '/learning-center/wilderness/spanish/wilderness-14-lesion-de-columna-en-entorno-remotos.png',
        },
      },

      {
        id: 15,

        title: {
          en: 'Burn Injuries',
          es: 'Quemaduras',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-15-burn-injuries.png',
          es: '/learning-center/wilderness/spanish/wilderness-15-quemaduras.png',
        },
      },

      {
        id: 16,

        title: {
          en: 'HACE: High-Altitude Cerebral Edema',
          es: 'HACE: Edema Cerebral de Gran Altitud',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-16-HACE.png',
          es: '/learning-center/wilderness/spanish/wilderness-16-HACE.png',
        },
      },

      {
        id: 17,

        title: {
          en: 'HAPE: High-Altitude Pulmonary Edema',
          es: 'HAPE: Edema Pulmonar de Gran Altitud',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-17-HAPE.png',
          es: '/learning-center/wilderness/spanish/wilderness-17-HAPE.png',
        },
      },
    ],
  },
];

const pageText = {
  en: {
    eyebrow: 'DC LifeSafe Global Learning Center',

    title: 'Wilderness Medicine',

    subtitle:
      'Free educational resources for wilderness medicine, expedition safety, environmental emergencies, trauma care, and remote medical response.',

    introTitle: 'Medicine Beyond the Trail',

    introText:
      'Explore original visual guides designed to strengthen preparation, decision-making, risk management, and patient care when definitive medical assistance may be delayed.',

    openResource: 'Open Resource',

    imageUnavailable: 'Image unavailable',

    backButton: 'Back to Learning Center',

    disclaimer:
      'These materials are intended for education and review. They do not replace formal certification, professional medical advice, organizational protocols, or current clinical guidelines.',
  },

  es: {
    eyebrow: 'Centro de Aprendizaje de DC LifeSafe Global',

    title: 'Medicina Wilderness',

    subtitle:
      'Recursos educativos gratuitos sobre medicina wilderness, seguridad expedicionaria, emergencias ambientales, trauma y respuesta médica en ambientes remotos.',

    introTitle: 'Medicina más allá del sendero',

    introText:
      'Explora guías visuales originales diseñadas para fortalecer la preparación, la toma de decisiones, la gestión de riesgos y el cuidado del paciente cuando la atención médica definitiva puede demorarse.',

    openResource: 'Abrir Recurso',

    imageUnavailable: 'Imagen no disponible',

    backButton: 'Volver al Centro de Aprendizaje',

    disclaimer:
      'Estos materiales tienen fines educativos y de repaso. No reemplazan certificaciones formales, asesoramiento médico profesional, protocolos institucionales ni guías clínicas vigentes.',
  },
};

export default function Wilderness() {
  const { language } = useLanguage();

  const currentLanguage = language === 'es' ? 'es' : 'en';

  const t = pageText[currentLanguage];

  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none';

    const fallback =
      event.currentTarget.parentElement.querySelector(
        '.resource-image-fallback'
      );

    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <main className='resources-page wilderness-page'>
      <section className='section'>
        <div className='container'>
          <div className='text-center'>
            <p className='page-eyebrow'>
              {t.eyebrow}
            </p>

            <h1 className='section-title'>
              {t.title}
            </h1>

            <p className='section-subtitle narrow'>
              {t.subtitle}
            </p>
          </div>

          <div className='resources-intro'>
            <h2>{t.introTitle}</h2>

            <p>{t.introText}</p>
          </div>

          {resourceGroups.map((group) => (
            <section
              className='resource-category'
              key={group.id}
            >
              <div className='text-center'>
                <h2>
                  {group.title[currentLanguage]}
                </h2>

                <p className='section-subtitle narrow wilderness-category-description'>
                  {group.description[currentLanguage]}
                </p>
              </div>

              <div className='resource-grid'>
                {group.resources.map((resource) => {
                  const imagePath =
                    resource.image[currentLanguage];

                  const resourceTitle =
                    resource.title[currentLanguage];

                  return (
                    <article
                      className='resource-card'
                      key={resource.id}
                    >
                      <a
                        href={imagePath}
                        target='_blank'
                        rel='noreferrer'
                        aria-label={`${t.openResource}: ${resourceTitle}`}
                      >
                        <img
                          src={imagePath}
                          alt={resourceTitle}
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
                        <h3>{resourceTitle}</h3>

                        <a
                          className='btn'
                          href={imagePath}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {t.openResource}
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

          <div className='learning-center-footer text-center'>
            <p className='resource-disclaimer'>
              {t.disclaimer}
            </p>

            <Link
              to='/learning-center'
              className='btn btn-outline wilderness-back-button'
            >
              {t.backButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

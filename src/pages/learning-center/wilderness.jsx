import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../components/LanguageContext.jsx';

const resourceGroups = [
  {
    id: 'foundations',

    title: {
      en: 'Foundations & Patient Assessment',
      es: 'Fundamentos y evaluación del paciente',
    },

    description: {
      en: 'Core principles for scene safety, patient evaluation, documentation, and decision-making in remote environments.',
      es: 'Principios esenciales de seguridad de la escena, evaluación del paciente, documentación y toma de decisiones en entornos remotos.',
    },

    resources: [
      {
        id: 1,

        title: {
          en: 'Introduction to Wilderness Medicine',
          es: 'Introducción a la Medicina Wilderness',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-01-introduction-to-wilderness-medicine.png',
          es: '/learning-center/wilderness/spanish/wilderness-01-introduction-to-wilderness-medicine.png',
        },
      },

      {
        id: 2,

        title: {
          en: 'Scene Safety & Initial Assessment',
          es: 'Seguridad de la escena y evaluación inicial',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-02-scene-safety-and-initial-assessment.png',
          es: '/learning-center/wilderness/spanish/wilderness-02-scene-safety-and-initial-assessment.png',
        },
      },

      {
        id: 3,

        title: {
          en: 'Wilderness Patient Assessment',
          es: 'Evaluación del paciente en ambientes remotos',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-03-patient-assessment.png',
          es: '/learning-center/wilderness/spanish/wilderness-03-patient-assessment.png',
        },
      },

      {
        id: 4,

        title: {
          en: 'SOAP Notes & Documentation',
          es: 'Notas SOAP y documentación',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-04-soap-notes-and-documentation.png',
          es: '/learning-center/wilderness/spanish/wilderness-04-soap-notes-and-documentation.png',
        },
      },
    ],
  },

  {
    id: 'trauma',

    title: {
      en: 'Trauma & Injury Management',
      es: 'Trauma y manejo de lesiones',
    },

    description: {
      en: 'Practical reference materials for bleeding, wounds, burns, musculoskeletal injuries, and patient stabilization.',
      es: 'Materiales prácticos sobre hemorragias, heridas, quemaduras, lesiones musculoesqueléticas y estabilización del paciente.',
    },

    resources: [
      {
        id: 5,

        title: {
          en: 'Bleeding Control in the Wilderness',
          es: 'Control de hemorragias en la montaña',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-05-bleeding-control.png',
          es: '/learning-center/wilderness/spanish/wilderness-05-bleeding-control.png',
        },
      },

      {
        id: 6,

        title: {
          en: 'Wound Management',
          es: 'Manejo de heridas',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-06-wound-management.png',
          es: '/learning-center/wilderness/spanish/wilderness-06-wound-management.png',
        },
      },

      {
        id: 7,

        title: {
          en: 'Burns in Remote Environments',
          es: 'Quemaduras en ambientes remotos',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-07-burns.png',
          es: '/learning-center/wilderness/spanish/wilderness-07-burns.png',
        },
      },

      {
        id: 8,

        title: {
          en: 'Fractures, Sprains & Splinting',
          es: 'Fracturas, esguinces e inmovilización',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-08-fractures-sprains-and-splinting.png',
          es: '/learning-center/wilderness/spanish/wilderness-08-fractures-sprains-and-splinting.png',
        },
      },

      {
        id: 9,

        title: {
          en: 'Spine Injury Assessment',
          es: 'Evaluación de lesiones de columna',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-09-spine-injury-assessment.png',
          es: '/learning-center/wilderness/spanish/wilderness-09-spine-injury-assessment.png',
        },
      },

      {
        id: 10,

        title: {
          en: 'Head Injuries & Concussion',
          es: 'Traumatismo craneal y conmoción cerebral',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-10-head-injuries-and-concussion.png',
          es: '/learning-center/wilderness/spanish/wilderness-10-head-injuries-and-concussion.png',
        },
      },
    ],
  },

  {
    id: 'environmental',

    title: {
      en: 'Environmental Emergencies',
      es: 'Emergencias ambientales',
    },

    description: {
      en: 'Recognition, prevention, and initial response for altitude, temperature, lightning, and water-related emergencies.',
      es: 'Reconocimiento, prevención y respuesta inicial ante emergencias de altitud, temperatura, rayos y ambientes acuáticos.',
    },

    resources: [
      {
        id: 11,

        title: {
          en: 'Heat-Related Illness',
          es: 'Enfermedades relacionadas con el calor',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-11-heat-related-illness.png',
          es: '/learning-center/wilderness/spanish/wilderness-11-heat-related-illness.png',
        },
      },

      {
        id: 12,

        title: {
          en: 'Hypothermia',
          es: 'Hipotermia',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-12-hypothermia.png',
          es: '/learning-center/wilderness/spanish/wilderness-12-hypothermia.png',
        },
      },

      {
        id: 13,

        title: {
          en: 'Frostbite & Cold Injuries',
          es: 'Congelamiento y lesiones por frío',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-13-frostbite-and-cold-injuries.png',
          es: '/learning-center/wilderness/spanish/wilderness-13-frostbite-and-cold-injuries.png',
        },
      },

      {
        id: 14,

        title: {
          en: 'Lightning Injuries',
          es: 'Lesiones por rayos',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-14-lightning-injuries.png',
          es: '/learning-center/wilderness/spanish/wilderness-14-lightning-injuries.png',
        },
      },

      {
        id: 15,

        title: {
          en: 'Altitude Illness',
          es: 'Enfermedades de altitud',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-15-altitude-illness.png',
          es: '/learning-center/wilderness/spanish/wilderness-15-altitude-illness.png',
        },
      },

      {
        id: 16,

        title: {
          en: 'HAPE: High-Altitude Pulmonary Edema',
          es: 'HAPE: edema pulmonar de gran altitud',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-16-hape.png',
          es: '/learning-center/wilderness/spanish/wilderness-16-hape.png',
        },
      },

      {
        id: 17,

        title: {
          en: 'HACE: High-Altitude Cerebral Edema',
          es: 'HACE: edema cerebral de gran altitud',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-17-hace.png',
          es: '/learning-center/wilderness/spanish/wilderness-17-hace.png',
        },
      },

      {
        id: 18,

        title: {
          en: 'Drowning & Submersion Emergencies',
          es: 'Ahogamiento y emergencias por inmersión',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-18-drowning-and-submersion.png',
          es: '/learning-center/wilderness/spanish/wilderness-18-drowning-and-submersion.png',
        },
      },
    ],
  },

  {
    id: 'medical',

    title: {
      en: 'Medical Emergencies',
      es: 'Emergencias médicas',
    },

    description: {
      en: 'Field-oriented guidance for common medical conditions that may occur during outdoor and expedition activities.',
      es: 'Orientación práctica para condiciones médicas frecuentes durante actividades outdoor y expediciones.',
    },

    resources: [
      {
        id: 19,

        title: {
          en: 'Altered Mental Status',
          es: 'Alteración del estado mental',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-19-altered-mental-status.png',
          es: '/learning-center/wilderness/spanish/wilderness-19-altered-mental-status.png',
        },
      },

      {
        id: 20,

        title: {
          en: 'Chest Pain & Cardiac Emergencies',
          es: 'Dolor torácico y emergencias cardíacas',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-20-chest-pain-and-cardiac-emergencies.png',
          es: '/learning-center/wilderness/spanish/wilderness-20-chest-pain-and-cardiac-emergencies.png',
        },
      },

      {
        id: 21,

        title: {
          en: 'Stroke Recognition',
          es: 'Reconocimiento del accidente cerebrovascular',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-21-stroke-recognition.png',
          es: '/learning-center/wilderness/spanish/wilderness-21-stroke-recognition.png',
        },
      },

      {
        id: 22,

        title: {
          en: 'Seizures',
          es: 'Convulsiones',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-22-seizures.png',
          es: '/learning-center/wilderness/spanish/wilderness-22-seizures.png',
        },
      },

      {
        id: 23,

        title: {
          en: 'Asthma & Breathing Emergencies',
          es: 'Asma y emergencias respiratorias',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-23-asthma-and-breathing-emergencies.png',
          es: '/learning-center/wilderness/spanish/wilderness-23-asthma-and-breathing-emergencies.png',
        },
      },

      {
        id: 24,

        title: {
          en: 'Anaphylaxis',
          es: 'Anafilaxia',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-24-anaphylaxis.png',
          es: '/learning-center/wilderness/spanish/wilderness-24-anaphylaxis.png',
        },
      },

      {
        id: 25,

        title: {
          en: 'Diabetic Emergencies',
          es: 'Emergencias diabéticas',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-25-diabetic-emergencies.png',
          es: '/learning-center/wilderness/spanish/wilderness-25-diabetic-emergencies.png',
        },
      },
    ],
  },

  {
    id: 'expedition',

    title: {
      en: 'Expedition Preparedness & Rescue',
      es: 'Preparación expedicionaria y rescate',
    },

    description: {
      en: 'Planning tools for medical kits, navigation, communication, evacuation, and response in isolated environments.',
      es: 'Herramientas de planificación para botiquines, navegación, comunicación, evacuación y respuesta en ambientes aislados.',
    },

    resources: [
      {
        id: 26,

        title: {
          en: 'Wilderness Medical Kits',
          es: 'Botiquines para ambientes remotos',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-26-medical-kits.png',
          es: '/learning-center/wilderness/spanish/wilderness-26-medical-kits.png',
        },
      },

      {
        id: 27,

        title: {
          en: 'Water Treatment & Hydration',
          es: 'Tratamiento del agua e hidratación',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-27-water-treatment-and-hydration.png',
          es: '/learning-center/wilderness/spanish/wilderness-27-water-treatment-and-hydration.png',
        },
      },

      {
        id: 28,

        title: {
          en: 'Navigation & Communication',
          es: 'Navegación y comunicación',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-28-navigation-and-communication.png',
          es: '/learning-center/wilderness/spanish/wilderness-28-navigation-and-communication.png',
        },
      },

      {
        id: 29,

        title: {
          en: 'Patient Packaging & Evacuation',
          es: 'Empaquetamiento y evacuación del paciente',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-29-patient-packaging-and-evacuation.png',
          es: '/learning-center/wilderness/spanish/wilderness-29-patient-packaging-and-evacuation.png',
        },
      },

      {
        id: 30,

        title: {
          en: 'Search & Rescue Foundations',
          es: 'Fundamentos de búsqueda y rescate',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-30-search-and-rescue-foundations.png',
          es: '/learning-center/wilderness/spanish/wilderness-30-search-and-rescue-foundations.png',
        },
      },

      {
        id: 31,

        title: {
          en: 'Outdoor Leadership & Decision-Making',
          es: 'Liderazgo outdoor y toma de decisiones',
        },

        image: {
          en: '/learning-center/wilderness/ENG/wilderness-31-outdoor-leadership-and-decision-making.png',
          es: '/learning-center/wilderness/spanish/wilderness-31-outdoor-leadership-and-decision-making.png',
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
      'Free educational resources for patient assessment, outdoor emergencies, environmental medicine, expedition preparedness, and remote medical response.',

    introTitle: 'Medicine Beyond the Trail',

    introText:
      'Explore original visual guides designed to strengthen preparation, decision-making, and patient care when definitive medical assistance may be delayed.',

    openResource: 'Open Resource',

    backButton: 'Back to Learning Center',

    disclaimer:
      'These materials are intended for education and review. They do not replace formal certification, professional medical advice, organizational protocols, or current clinical guidelines.',
  },

  es: {
    eyebrow: 'Centro de Aprendizaje de DC LifeSafe Global',

    title: 'Medicina Wilderness',

    subtitle:
      'Recursos educativos gratuitos sobre evaluación del paciente, emergencias outdoor, medicina ambiental, preparación expedicionaria y respuesta médica en ambientes remotos.',

    introTitle: 'Medicina más allá del sendero',

    introText:
      'Explora guías visuales originales diseñadas para fortalecer la preparación, la toma de decisiones y el cuidado del paciente cuando la atención médica definitiva puede demorarse.',

    openResource: 'Abrir recurso',

    backButton: 'Volver al Centro de Aprendizaje',

    disclaimer:
      'Estos materiales tienen fines educativos y de repaso. No reemplazan certificaciones formales, asesoramiento médico profesional, protocolos institucionales ni guías clínicas vigentes.',
  },
};

export default function Wilderness() {
  const { language } = useLanguage();

  const currentLanguage = language === 'es' ? 'es' : 'en';

  const t = pageText[currentLanguage];

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

                  return (
                    <article
                      className='resource-card'
                      key={resource.id}
                    >
                      <a
                        href={imagePath}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          src={imagePath}
                          alt={resource.title[currentLanguage]}
                          className='resource-preview'
                          loading='lazy'
                        />
                      </a>

                      <div className='resource-content'>
                        <h3>
                          {resource.title[currentLanguage]}
                        </h3>

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
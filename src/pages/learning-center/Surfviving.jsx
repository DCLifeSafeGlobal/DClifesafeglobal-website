import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../components/LanguageContext.jsx';

const resourceGroups = [
  {
    id: 'surfviving',
    title: {
      en: 'Surfviving™ Series',
      es: 'Serie Surfviving™',
    },
    description: {
      en: 'Original tools for learning how to recognize, navigate, and ride emotional waves.',
      es: 'Herramientas originales para aprender a reconocer, comprender y navegar las olas emocionales.',
    },
    items: [
      {
        title: {
          en: 'Surfviving: Riding the Emotional Wave',
          es: 'Surfviving: Navegando la ola emocional',
        },
        image: '/surfviving-riding-the-emotional-wave.png',
      },
      {
        title: {
          en: 'Control the Wave',
          es: 'Controla la ola',
        },
        image: '/control-the-wave.png',
      },
      {
        title: {
          en: 'On the Wave',
          es: 'Sobre la ola',
        },
        image: '/on-the-wave.png',
      },
      {
        title: {
          en: 'Surfviving Worksheet',
          es: 'Hoja de trabajo Surfviving',
        },
        image: '/surfviving-worksheet.png',
      },
      {
        title: {
          en: 'Surfviving Worksheet 2',
          es: 'Hoja de trabajo Surfviving 2',
        },
        image: '/surfviving-worksheet-2.png',
      },
      {
        title: {
          en: 'Wellness Tips',
          es: 'Consejos de bienestar',
        },
        image: '/wellness-tips.png',
      },
    ],
  },

  {
    id: 'emotional-regulation',
    title: {
      en: 'Emotional Regulation',
      es: 'Regulación emocional',
    },
    description: {
      en: 'Practical tools for recognizing emotional triggers, managing reactions, and developing healthier responses.',
      es: 'Herramientas prácticas para reconocer desencadenantes emocionales, manejar reacciones y desarrollar respuestas más saludables.',
    },
    items: [
      {
        title: {
          en: 'Anger Management',
          es: 'Manejo del enojo',
        },
        image: '/anger-management.png',
      },
      {
        title: {
          en: 'STOP Skill',
          es: 'Habilidad STOP',
        },
        image: '/stop-skill.png',
      },
      {
        title: {
          en: 'Coping Skills',
          es: 'Habilidades de afrontamiento',
        },
        image: '/coping-skills.png',
      },
      {
        title: {
          en: 'DBT Distress Tolerance',
          es: 'Tolerancia al malestar DBT',
        },
        image: '/dbt-distress-tolerance.png',
      },
    ],
  },

  {
    id: 'thought-processing',
    title: {
      en: 'Thought Processing',
      es: 'Procesamiento de pensamientos',
    },
    description: {
      en: 'Resources for examining difficult thoughts and understanding the relationship between thoughts and emotions.',
      es: 'Recursos para examinar pensamientos difíciles y comprender la relación entre los pensamientos y las emociones.',
    },
    items: [
      {
        title: {
          en: 'Disturbing Thoughts',
          es: 'Pensamientos perturbadores',
        },
        image: '/disturbing-thoughts.png',
      },
      {
        title: {
          en: 'Disturbing Thoughts 1',
          es: 'Pensamientos perturbadores 1',
        },
        image: '/disturbing-thoughts-1.png',
      },
      {
        title: {
          en: 'Disturbing Thoughts 2',
          es: 'Pensamientos perturbadores 2',
        },
        image: '/disturbing-thoughts-2.png',
      },
      {
        title: {
          en: 'Thoughts and Emotions',
          es: 'Pensamientos y emociones',
        },
        image: '/thoughts-and-emotions.png',
      },
    ],
  },

  {
    id: 'awareness-reflection',
    title: {
      en: 'Awareness & Reflection',
      es: 'Conciencia y reflexión',
    },
    description: {
      en: 'Guided exercises for emotional awareness, connection, self-reflection, and personal insight.',
      es: 'Ejercicios guiados para desarrollar conciencia emocional, conexión, reflexión personal y autoconocimiento.',
    },
    items: [
      {
        title: {
          en: 'Emotional Awareness',
          es: 'Conciencia emocional',
        },
        image: '/emotional-awarness.png',
      },
      {
        title: {
          en: 'Emotional Awareness Prompts',
          es: 'Preguntas de conciencia emocional',
        },
        image: '/Emotional-awareness-prompts.png',
      },
      {
        title: {
          en: 'Connection Ladder',
          es: 'Escalera de conexión',
        },
        image: '/connection-ladder.png',
      },
      {
        title: {
          en: 'Discharge Reflection',
          es: 'Reflexión de alta',
        },
        image: '/Discharge-reflection.png',
      },
    ],
  },

  {
    id: 'growth-recovery',
    title: {
      en: 'Growth & Recovery',
      es: 'Crecimiento y recuperación',
    },
    description: {
      en: 'Worksheets that support goal setting, consistency, recovery planning, and continued personal growth.',
      es: 'Hojas de trabajo que apoyan el establecimiento de metas, la constancia, la planificación de la recuperación y el crecimiento personal.',
    },
    items: [
      {
        title: {
          en: 'Goal Setting',
          es: 'Establecimiento de metas',
        },
        image: '/goal-setting.png',
      },
      {
        title: {
          en: 'Goal Setting 1',
          es: 'Establecimiento de metas 1',
        },
        image: '/goal-setting-1.png',
      },
      {
        title: {
          en: 'Goal Setting 2',
          es: 'Establecimiento de metas 2',
        },
        image: '/goal-setting-2.png',
      },
      {
        title: {
          en: 'Goal Setting 3',
          es: 'Establecimiento de metas 3',
        },
        image: '/goal-setting-3.png',
      },
      {
        title: {
          en: 'Goal Setting 4',
          es: 'Establecimiento de metas 4',
        },
        image: '/goal-setting-4.png',
      },
      {
        title: {
          en: 'Goal Setting Worksheet',
          es: 'Hoja de trabajo para establecer metas',
        },
        image: '/goal-setting-worksheet.png',
      },
      {
        title: {
          en: 'Relapse Prevention',
          es: 'Prevención de recaídas',
        },
        image: '/relapse-prevention.png',
      },
      {
        title: {
          en: 'Consistency, Persistence & Structure',
          es: 'Constancia, persistencia y estructura',
        },
        image: '/consistency-persistance-structure.png',
      },
    ],
  },
];

const pageText = {
  en: {
    eyebrow: 'DC LifeSafe Global Wellness',
    title: 'Surfviving™ Learning Resources',
    subtitle:
      'Free emotional regulation worksheets, reflection exercises, and practical tools designed to help you recognize and navigate life’s emotional waves.',
    introTitle: 'Learn to Ride the Emotional Wave',
    introText:
      'Surfviving™ is an educational wellness approach built around a simple idea: you do not have to control every wave—you can learn how to ride it.',
    openResource: 'Open Resource',
    back: 'Back to Learning Center',
    disclaimer:
      'These resources are provided for educational purposes and do not replace professional medical or mental health care.',
  },

  es: {
    eyebrow: 'Bienestar de DC LifeSafe Global',
    title: 'Recursos de Aprendizaje Surfviving™',
    subtitle:
      'Hojas de trabajo gratuitas sobre regulación emocional, ejercicios de reflexión y herramientas prácticas para reconocer y navegar las olas emocionales de la vida.',
    introTitle: 'Aprende a navegar la ola emocional',
    introText:
      'Surfviving™ es un enfoque educativo de bienestar basado en una idea sencilla: no tienes que controlar cada ola; puedes aprender a navegarla.',
    openResource: 'Abrir recurso',
    back: 'Volver al Centro de Aprendizaje',
    disclaimer:
      'Estos recursos tienen fines educativos y no reemplazan la atención médica o de salud mental profesional.',
  },
};

export default function Surfviving() {
  const { language } = useLanguage();
  const currentLanguage = language === 'es' ? 'es' : 'en';
  const t = pageText[currentLanguage];

  return (
    <main className='surfviving-page'>
      <section className='section resources-page'>
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

          {resourceGroups.map((group) => (
            <section
              className='resource-category'
              id={group.id}
              key={group.id}
            >
              <div className='resource-category-heading'>
                <h2>{group.title[currentLanguage]}</h2>
                <p>{group.description[currentLanguage]}</p>
              </div>

              <div className='resource-grid'>
                {group.items.map((item) => (
                  <article
                    className='resource-card'
                    key={`${group.id}-${item.image}`}
                  >
                    <a
                      href={item.image}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${t.openResource}: ${
                        item.title[currentLanguage]
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title[currentLanguage]}
                        className='resource-preview'
                        loading='lazy'
                      />
                    </a>

                    <div className='resource-content'>
                      <h3>{item.title[currentLanguage]}</h3>

                      <a
                        className='btn'
                        href={item.image}
                        target='_blank'
                        rel='noopener noreferrer'
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

            <Link className='btn btn-outline' to='/learning-center'>
              {t.back}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

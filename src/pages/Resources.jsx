import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.jsx';

const programs = [
  {
    id: 'surfviving',
    image: '/learning-center/surfviving-card.png',
    title: {
      en: 'Surfviving™',
      es: 'Surfviving™',
    },
    category: {
      en: 'Emotional Wellness & Resilience',
      es: 'Bienestar emocional y resiliencia',
    },
    description: {
      en: 'Explore emotional regulation tools, reflection exercises, coping skills, and original Surfviving™ learning resources.',
      es: 'Explora herramientas de regulación emocional, ejercicios de reflexión, habilidades de afrontamiento y recursos originales de Surfviving™.',
    },
    button: {
      en: 'Explore Surfviving',
      es: 'Explorar Surfviving',
    },
    path: '/learning-center/surfviving',
    available: true,
  },

  {
    id: 'bls',
    image: '/learning-center/bls-card.png',
    title: {
      en: 'BLS: Basic Life Support',
      es: 'BLS: Soporte Vital Básico',
    },
    category: {
      en: 'CPR, AED & Emergency Response',
      es: 'CPR, AED y respuesta a emergencias',
    },
    description: {
      en: 'Access BLS quick-reference guides covering CPR, AED use, choking, pediatric emergencies, team dynamics, and responder support.',
      es: 'Accede a guías rápidas de BLS sobre CPR, uso del AED, atragantamiento, emergencias pediátricas, trabajo en equipo y apoyo al respondedor.',
    },
    button: {
      en: 'Explore BLS',
      es: 'Explorar BLS',
    },
    path: '/learning-center/bls',
    available: true,
  },

  {
    id: 'acls',
    image: '/learning-center/acls-card.png',
    title: {
      en: 'ACLS: Advanced Cardiac Life Support',
      es: 'ACLS: Soporte Vital Cardiovascular Avanzado',
    },
    category: {
      en: 'Advanced Cardiovascular Emergency Care',
      es: 'Atención cardiovascular avanzada',
    },
    description: {
      en: 'Review ACLS algorithms, airway management, cardiac arrest, ACS, stroke, pharmacology, and high-performance team resources.',
      es: 'Revisa algoritmos ACLS, manejo de vía aérea, paro cardíaco, síndrome coronario agudo, stroke, farmacología y recursos para equipos de alto rendimiento.',
    },
    button: {
      en: 'Explore ACLS',
      es: 'Explorar ACLS',
    },
    path: '/learning-center/acls',
    available: true,
  },

 {
  id: 'wilderness',
  image: '/learning-center/wilderness-card.png',

  title: {
    en: 'Wilderness Medicine',
    es: 'Medicina Wilderness',
  },

  category: {
    en: 'Remote & Outdoor Medical Education',
    es: 'Educación médica outdoor y remota',
  },

  description: {
    en: 'Explore educational resources covering wilderness medicine, expedition safety, environmental emergencies, patient assessment, rescue, and remote medical care.',
    es: 'Explora recursos educativos sobre medicina wilderness, seguridad expedicionaria, emergencias ambientales, evaluación del paciente, rescate y atención médica en ambientes remotos.',
  },

  button: {
    en: 'Explore Wilderness Medicine',
    es: 'Explorar Medicina Wilderness',
  },

  path: '/learning-center/wilderness',
  available: true,
},
];

const pageText = {
  en: {
    eyebrow: 'Education by DC LifeSafe Global',
    title: 'Learning Center',
    subtitle:
      'Explore practical learning resources for emotional wellness, medical education, emergency preparedness, and outdoor leadership.',
    introTitle: 'Knowledge for Real-World Challenges',
    introText:
      'Our Learning Center brings together original wellness tools and practical medical reference materials designed to support learning, preparation, and confidence.',
    disclaimer:
      'These resources are provided for educational purposes and do not replace formal certification courses, professional medical advice, or current clinical protocols.',
  },

  es: {
    eyebrow: 'Educación de DC LifeSafe Global',
    title: 'Centro de Aprendizaje',
    subtitle:
      'Explora recursos prácticos de bienestar emocional, educación médica, preparación para emergencias y liderazgo outdoor.',
    introTitle: 'Conocimiento para desafíos reales',
    introText:
      'Nuestro Centro de Aprendizaje reúne herramientas originales de bienestar y materiales médicos prácticos diseñados para fortalecer el aprendizaje, la preparación y la confianza.',
    disclaimer:
      'Estos recursos tienen fines educativos y no reemplazan cursos formales de certificación, asesoramiento médico profesional ni protocolos clínicos vigentes.',
  },
};

export default function Resources() {
  const { language } = useLanguage();
  const currentLanguage = language === 'es' ? 'es' : 'en';
  const t = pageText[currentLanguage];

  return (
    <main className='learning-center-page'>
      <section className='section'>
        <div className='container'>
          <div className='text-center'>
            <p className='page-eyebrow'>{t.eyebrow}</p>

            <h1 className='section-title'>{t.title}</h1>

            <p className='section-subtitle narrow'>
              {t.subtitle}
            </p>
          </div>

          <div className='resources-intro'>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
          </div>

          <div className='learning-center-grid'>
            {programs.map((program) => (
              <article
                className={`learning-center-card ${
                  !program.available ? 'coming-soon-card' : ''
                }`}
                key={program.id}
              >
                <img
                  src={program.image}
                  alt={program.title[currentLanguage]}
                  className='learning-center-card-image'
                  loading='lazy'
                />

                <div className='learning-center-card-content'>
                  <p className='learning-center-category'>
                    {program.category[currentLanguage]}
                  </p>

                  <h2>{program.title[currentLanguage]}</h2>

                  <p className='learning-center-description'>
                    {program.description[currentLanguage]}
                  </p>

                  {program.available ? (
                    <Link className='btn' to={program.path}>
                      {program.button[currentLanguage]}
                    </Link>
                  ) : (
                    <span className='btn btn-outline disabled-link'>
                      {program.button[currentLanguage]}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className='learning-center-footer text-center'>
            <p className='resource-disclaimer'>
              {t.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

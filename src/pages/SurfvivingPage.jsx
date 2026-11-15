
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.jsx';

export default function SurfvivingPage() {
  const { language } = useLanguage();
  const es = language === 'es';

  const content = {
    en: {
      tagline: 'Ride the Emotional Wave',
      introTitle: "Learning to Navigate Life's Ocean",
      intro: 'Life is not always calm. Some waves arrive unexpectedly, while others take time to understand. SURFVIVING™ is an invitation to reflect on how we live, learn, adapt, and continue our journey.',

      approachLabel: 'THE PHILOSOPHY',
      approachTitle: 'The Approach',
      approachSubtitle: "Life has always reminded me of the ocean.",
      approachParagraphs: [
        'Some days, the water is calm. Other days, the waves arrive unexpectedly, challenging our balance, our confidence, and sometimes even our understanding of ourselves.',
        'We cannot control every wave that comes our way. And perhaps we were never meant to.',
        'But we can learn.',
        'We can learn to recognize what is happening around us and within us. We can prepare, adapt, make decisions, and understand when it is time to move forward, when to rest, and when to ask for help.',
        'Learning does not mean we will never fall. Even experienced surfers lose their balance.',
        'What matters is not pretending that every wave will be easy, but understanding that each experience is part of a much larger journey.'
      ],
      approachQuote: 'SURFVIVING™ is not about controlling the ocean. It is about learning to navigate life within it.',

      cpsTitle: 'Learning Is a Journey',
      cpsIntro: 'From our earliest steps to the challenges we face throughout life, learning takes time. Three principles help describe that journey.',
      cps: [
        {
          letter: 'C',
          title: 'Consistency',
          text: 'Returning to practice and maintaining continuity, even when life brings interruptions.'
        },
        {
          letter: 'P',
          title: 'Persistence',
          text: 'Continuing when possible, while also recognizing when to rest, recover, or accept help.'
        },
        {
          letter: 'S',
          title: 'Structure',
          text: 'Creating flexible habits and references that support learning without making life rigid.'
        }
      ],
      cpsClosing: 'Falling does not erase what we have learned. Beginning again does not mean starting from zero.',

      bookLabel: 'BOOKS & PUBLICATIONS',
      bookTitle: 'The Book',
      bookName: 'SURFVIVING™ — Ride the Emotional Wave',
      bookDescription: 'A personal and reflective journey through emotions, human experiences, learning, relationships, and the changing circumstances of life. More than a collection of techniques, the book invites readers to discover their own meaning within the metaphor of the ocean.',
      bookButton: 'Explore Books & Publications',
      bookCaption: 'English edition',

      wellnessLabel: 'PRACTICAL APPLICATION',
      wellnessTitle: 'Emotional Wellness',
      wellnessDescription: 'Explore educational tools for emotional awareness, coping, reflection, resilience, and self-compassion. These resources accompany the SURFVIVING™ philosophy without replacing the personal experience at its heart.',
      wellnessButton: 'Explore Wellness',

      resourcesLabel: 'CONTINUE LEARNING',
      resourcesTitle: 'Learning Resources',
      resourcesDescription: 'Discover educational materials, reflection exercises, and practical resources inspired by the SURFVIVING™ approach.',
      resourcesButton: 'Explore Resources',

      programsLabel: 'EDUCATION & CONNECTION',
      programsTitle: 'Programs & Workshops',
      programsDescription: 'SURFVIVING™ also provides a foundation for educational conversations, group activities, and workshops focused on emotional wellness and everyday life.',
      programsButton: 'Explore Workshops',
      futureTitle: 'Future Directions',
      futureDescription: 'Potential future adaptations may explore the experiences of teenagers, healthcare workers, people navigating grief, and those learning through outdoor experiences.',
      futureStatus: 'In development',

      closingTitle: 'The Journey Continues',
      closingText: 'Not every experience needs to become a lesson immediately. Sometimes we need time, space, rest, or someone beside us. The ocean continues to change, and so do we.',
      disclaimer: 'SURFVIVING™ provides educational and reflective resources. It is not a substitute for medical or mental health care.'
    },

    es: {
      tagline: 'Surfeando la Ola Emocional',
      introTitle: 'Aprendiendo a navegar el océano de la vida',
      intro: 'La vida no siempre está en calma. Algunas olas llegan inesperadamente, mientras que otras necesitan tiempo para comprenderse. SURFVIVING™ es una invitación a reflexionar sobre cómo vivimos, aprendemos, nos adaptamos y continuamos nuestro camino.',

      approachLabel: 'LA FILOSOFÍA',
      approachTitle: 'El enfoque',
      approachSubtitle: 'La vida siempre me ha recordado al océano.',
      approachParagraphs: [
        'Hay días en los que el mar está tranquilo. Otros, las olas llegan inesperadamente y ponen a prueba nuestro equilibrio, nuestra confianza y, algunas veces, incluso la manera en que nos comprendemos a nosotros mismos.',
        'No podemos controlar todas las olas que encontramos en nuestro camino. Y quizás nunca se trató de hacerlo.',
        'Pero podemos aprender.',
        'Podemos aprender a reconocer lo que sucede a nuestro alrededor y dentro de nosotros. Podemos prepararnos, adaptarnos, tomar decisiones y comprender cuándo es momento de avanzar, cuándo necesitamos descansar y cuándo debemos pedir ayuda.',
        'Aprender no significa que nunca volveremos a caer. Incluso los surfistas experimentados pierden el equilibrio.',
        'Lo importante no es pretender que todas las olas serán fáciles, sino comprender que cada experiencia forma parte de un recorrido mucho más grande.'
      ],
      approachQuote: 'SURFVIVING™ no se trata de controlar el océano. Se trata de aprender a navegar la vida dentro de él.',

      cpsTitle: 'Aprender es un recorrido',
      cpsIntro: 'Desde nuestros primeros pasos hasta los desafíos que enfrentamos a lo largo de la vida, aprender requiere tiempo. Tres principios ayudan a describir ese recorrido.',
      cps: [
        {
          letter: 'C',
          title: 'Consistencia',
          text: 'Regresar a la práctica y mantener cierta continuidad, incluso cuando aparecen interrupciones.'
        },
        {
          letter: 'P',
          title: 'Persistencia',
          text: 'Continuar cuando es posible, reconociendo también cuándo descansar, recuperarnos o aceptar ayuda.'
        },
        {
          letter: 'S',
          title: 'Estructura',
          text: 'Desarrollar hábitos y referencias flexibles que faciliten el aprendizaje sin convertir la vida en algo rígido.'
        }
      ],
      cpsClosing: 'Una caída no borra lo aprendido. Volver a comenzar no significa regresar a cero.',

      bookLabel: 'LIBROS Y PUBLICACIONES',
      bookTitle: 'El libro',
      bookName: 'SURFVIVING™ — Surfeando la Ola Emocional',
      bookDescription: 'Un recorrido personal y reflexivo por las emociones, las experiencias humanas, el aprendizaje, las relaciones y las circunstancias cambiantes de la vida. Más que una colección de técnicas, el libro invita al lector a encontrar su propio significado dentro de la metáfora del océano.',
      bookButton: 'Explorar libros y publicaciones',
      bookCaption: 'Edición en español',

      wellnessLabel: 'APLICACIÓN PRÁCTICA',
      wellnessTitle: 'Bienestar emocional',
      wellnessDescription: 'Explora herramientas educativas de conciencia emocional, afrontamiento, reflexión, resiliencia y autocompasión. Estos recursos acompañan la filosofía de SURFVIVING™ sin reemplazar la experiencia humana que le da sentido.',
      wellnessButton: 'Explorar bienestar',

      resourcesLabel: 'CONTINÚA APRENDIENDO',
      resourcesTitle: 'Recursos educativos',
      resourcesDescription: 'Descubre materiales educativos, ejercicios de reflexión y recursos prácticos inspirados en el enfoque SURFVIVING™.',
      resourcesButton: 'Explorar recursos',

      programsLabel: 'EDUCACIÓN Y CONEXIÓN',
      programsTitle: 'Programas y talleres',
      programsDescription: 'SURFVIVING™ también sirve como base para conversaciones educativas, actividades grupales y talleres enfocados en el bienestar emocional y la vida cotidiana.',
      programsButton: 'Explorar talleres',
      futureTitle: 'Proyectos futuros',
      futureDescription: 'Entre las posibles adaptaciones futuras se encuentran propuestas para adolescentes, profesionales sanitarios, personas que atraviesan procesos de duelo y experiencias de aprendizaje al aire libre.',
      futureStatus: 'En desarrollo',

      closingTitle: 'El camino continúa',
      closingText: 'No todas las experiencias necesitan convertirse inmediatamente en una enseñanza. A veces necesitamos tiempo, espacio, descanso o alguien que nos acompañe. El océano continúa cambiando, y nosotros también.',
      disclaimer: 'SURFVIVING™ ofrece recursos educativos y de reflexión. No sustituye la atención médica ni psicológica.'
    }
  };

  const t = es ? content.es : content.en;

  return (
    <main className='surfviving-page'>

      {/* HERO */}
      <section className='surfviving-main-hero'>
        <img
          src='/Surfviving/Surfviving-header.png'
          alt={es ? 'Ola oceánica al atardecer' : 'Ocean wave at sunset'}
          className='surfviving-main-hero-image'
        />
        <div className='surfviving-main-hero-content'>
          <h1>SURFVIVING™</h1>
          <p className='surfviving-main-tagline'>{t.tagline}</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className='section'>
        <div className='container text-center'>
          <h2 className='section-title'>{t.introTitle}</h2>
          <p className='section-subtitle narrow'>{t.intro}</p>
        </div>
      </section>

      {/* THE APPROACH */}
      <section id='the-approach' className='section surfviving-approach-section'>
        <div className='container surfviving-reading-container'>
          <p className='surfviving-eyebrow'>{t.approachLabel}</p>
          <h2 className='section-title'>{t.approachTitle}</h2>
          <h3 className='surfviving-approach-subtitle'>
            {t.approachSubtitle}
          </h3>

          <div className='surfviving-prose'>
            {t.approachParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <blockquote className='surfviving-philosophy-quote'>
            {t.approachQuote}
          </blockquote>
        </div>
      </section>

      {/* CPS */}
      <section className='section surfviving-cps-section'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-title'>{t.cpsTitle}</h2>
            <p className='section-subtitle narrow'>{t.cpsIntro}</p>
          </div>

          <div className='surfviving-cps-grid'>
            {t.cps.map((item) => (
              <article className='surfviving-cps-card' key={item.letter}>
                <span className='surfviving-cps-letter'>{item.letter}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className='surfviving-cps-closing'>{t.cpsClosing}</p>
        </div>
      </section>

      {/* THE BOOK */}
      <section id='the-book' className='section surfviving-book-section'>
        <div className='container surfviving-feature-grid'>
          <div className='surfviving-book-image-wrap'>
            <img
              src={
                es
                  ? '/Books/Covers/Surfviving-sp.jpg'
                  : '/Books/Covers/Surfviving-eng.jpg'
              }
              alt={t.bookName}
              className='surfviving-book-cover'
              loading='lazy'
            />
            <p className='surfviving-image-caption'>{t.bookCaption}</p>
          </div>

          <div className='surfviving-feature-copy'>
            <p className='surfviving-eyebrow'>{t.bookLabel}</p>
            <h2 className='section-title'>{t.bookTitle}</h2>
            <h3>{t.bookName}</h3>
            <p>{t.bookDescription}</p>
            <Link className='btn' to='/books'>
              {t.bookButton}
            </Link>
          </div>
        </div>
      </section>

      {/* WELLNESS */}
      <section className='section surfviving-feature-section'>
        <div className='container surfviving-feature-grid'>
          <div className='surfviving-feature-copy'>
            <p className='surfviving-eyebrow'>{t.wellnessLabel}</p>
            <h2 className='section-title'>{t.wellnessTitle}</h2>
            <p>{t.wellnessDescription}</p>
            <Link className='btn' to='/wellness'>
              {t.wellnessButton}
            </Link>
          </div>

          <Link to='/wellness' className='surfviving-feature-image-link'>
            <img
              src='/hero_wellness.png'
              alt={t.wellnessTitle}
              className='surfviving-feature-image'
              loading='lazy'
            />
          </Link>
        </div>
      </section>

      {/* LEARNING RESOURCES */}
      <section className='section surfviving-feature-section surfviving-resources-section'>
        <div className='container surfviving-feature-grid'>
          <Link
            to='/learning-center/surfviving'
            className='surfviving-feature-image-link'
          >
            <img
              src='/Surfviving/Surfviving-header.png'
              alt={t.resourcesTitle}
              className='surfviving-feature-image'
              loading='lazy'
            />
          </Link>

          <div className='surfviving-feature-copy'>
            <p className='surfviving-eyebrow'>{t.resourcesLabel}</p>
            <h2 className='section-title'>{t.resourcesTitle}</h2>
            <p>{t.resourcesDescription}</p>
            <Link className='btn' to='/learning-center/surfviving'>
              {t.resourcesButton}
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className='section surfviving-programs-section'>
        <div className='container text-center'>
          <p className='surfviving-eyebrow'>{t.programsLabel}</p>
          <h2 className='section-title'>{t.programsTitle}</h2>
          <p className='section-subtitle narrow'>{t.programsDescription}</p>

          <Link className='btn' to='/workshops'>
            {t.programsButton}
          </Link>

          <div className='surfviving-future-panel'>
            <h3>{t.futureTitle}</h3>
            <p>{t.futureDescription}</p>
            <span className='surfviving-future-status'>
              {t.futureStatus}
            </span>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className='section surfviving-closing-section'>
        <div className='container surfviving-reading-container text-center'>
          <h2 className='section-title'>{t.closingTitle}</h2>
          <p>{t.closingText}</p>
        </div>
      </section>

      <div className='container'>
        <p className='surfviving-disclaimer'>{t.disclaimer}</p>
      </div>

    </main>
  );
}

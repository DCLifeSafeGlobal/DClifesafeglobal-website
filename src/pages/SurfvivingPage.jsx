import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.jsx';

export default function SurfvivingPage() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <main className='surfviving-page'>

      {/* HERO */}
      <section className='surfviving-main-hero'>
        <img
          src='/Surfviving/Surfviving-header.png'
          alt={
            isSpanish
              ? 'Ola oceánica al atardecer'
              : 'Ocean wave at sunset'
          }
          className='surfviving-main-hero-image'
        />

        <div className='surfviving-main-hero-content'>
          <h1>SURFVIVING™</h1>

          <p className='surfviving-main-tagline'>
            {isSpanish
              ? 'Surfeando la Ola Emocional'
              : 'Ride the Emotional Wave'}
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className='section'>
        <div className='container text-center'>
          <h2 className='section-title'>
            {isSpanish
              ? 'Aprender a navegar las olas emocionales de la vida'
              : "Learning to Navigate Life’s Emotional Waves"}
          </h2>

          <p className='section-subtitle narrow'>
            {isSpanish
              ? 'SURFVIVING™ utiliza la metáfora del océano para comprender las emociones, afrontar los desafíos y desarrollar resiliencia y autocompasión.'
              : 'SURFVIVING™ uses the metaphor of the ocean to understand emotions, navigate challenges, and develop resilience and self-compassion.'}
          </p>
        </div>
      </section>

      {/* NAVIGATION CARDS */}
      <section className='section'>
        <div className='container'>
          <div className='card-grid columns-2'>

            <article className='resource-card'>
              <div className='resource-content'>
                <h3>
                  {isSpanish ? 'El enfoque' : 'The Approach'}
                </h3>

                <p>
                  {isSpanish
                    ? 'Conoce la filosofía y el origen de SURFVIVING™.'
                    : 'Discover the philosophy and origins of SURFVIVING™.'}
                </p>
              </div>
            </article>

            <article className='resource-card'>
              <div className='resource-content'>
                <h3>
                  {isSpanish ? 'El libro' : 'The Book'}
                </h3>

                <p>
                  {isSpanish
                    ? 'Explora SURFVIVING™ y sus ediciones.'
                    : 'Explore SURFVIVING™ and its editions.'}
                </p>

                <Link className='btn' to='/books'>
                  {isSpanish ? 'Ver el libro' : 'Explore the Book'}
                </Link>
              </div>
            </article>

            <article className='resource-card'>
              <div className='resource-content'>
                <h3>
                  {isSpanish
                    ? 'Bienestar emocional'
                    : 'Emotional Wellness'}
                </h3>

                <p>
                  {isSpanish
                    ? 'Herramientas para comprender y regular las emociones.'
                    : 'Tools for understanding and regulating emotions.'}
                </p>

                <Link className='btn' to='/wellness'>
                  {isSpanish ? 'Explorar bienestar' : 'Explore Wellness'}
                </Link>
              </div>
            </article>

            <article className='resource-card'>
              <div className='resource-content'>
                <h3>
                  {isSpanish
                    ? 'Recursos educativos'
                    : 'Learning Resources'}
                </h3>

                <p>
                  {isSpanish
                    ? 'Materiales y ejercicios para continuar aprendiendo.'
                    : 'Educational materials and exercises to continue learning.'}
                </p>

                <Link
                  className='btn'
                  to='/learning-center/surfviving'
                >
                  {isSpanish ? 'Ver recursos' : 'Explore Resources'}
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>

    </main>
  );
}

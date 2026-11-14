import React from 'react';
import { useLanguage } from '../components/LanguageContext.jsx';
import './Books.css';

// =====================================================
// DC LifeSafe Global
// Books & Publications
//
// Book covers:
// public/Books/Covers/
//
// Categories are preserved for future catalog expansion.
// =====================================================

const books = [
  {
    id: 'surfviving',
    category: 'wellness',

    title: 'SURFVIVING™',

    subtitle: {
      en: 'Ride the Emotional Wave',
      es: 'Surfeando la Ola Emocional',
    },

    description: {
      en: 'A journey through emotional resilience, self-awareness, and personal growth using the metaphor of ocean waves.',
      es: 'Un recorrido por la resiliencia emocional, el autoconocimiento y el crecimiento personal utilizando la metáfora de las olas del océano.',
    },

    covers: {
      en: '/Books/Covers/Surfviving-eng.jpg',
      es: '/Books/Covers/Surfviving-sp.jpg',
    },
  },

  {
    id: 'myles-camping',
    category: 'children',

    title: {
      en: 'The Adventures of Myles: Going Camping!',
      es: 'Las Aventuras de Myles: ¡De Campamento!',
    },

    description: {
      en: 'Join Myles on an outdoor adventure filled with friendship, discovery, teamwork, and safety.',
      es: 'Acompaña a Myles en una aventura al aire libre llena de amistad, descubrimientos, trabajo en equipo y seguridad.',
    },

    covers: {
      en: '/Books/Covers/Myles-Camping-Adventure-EN.png',
      es: '/Books/Covers/Myles-Camping-Adventure-SP.png',
    },
  },

  {
    id: 'myles-mountain',
    category: 'children',

    title: {
      en: 'The Adventures of Myles: Mt. St. Amelie',
      es: 'Las Aventuras de Myles: Mt. St. Amelie',
    },

    subtitle: {
      en: 'The Mountain That Taught Us When to Turn Back',
      es: 'La montaña que nos enseñó cuándo regresar',
    },

    description: {
      en: 'Myles and his friends discover that courage also means recognizing when it is time to turn back.',
      es: 'Myles y sus amigos descubren que ser valiente también significa reconocer cuándo es momento de regresar.',
    },

    covers: {
      en: '/Books/Covers/Myles-Mountain-Adventure-EN.jpg',
      es: '/Books/Covers/Myles-Mountain-Adventure-SP.png',
    },
  },

  {
    id: 'myles-coloring',
    category: 'activities',

    title: {
      en: 'The Adventures of Myles: My First Adventure Coloring Book',
      es: 'Las Aventuras de Myles: Mi Primer Libro para Colorear',
    },

    description: {
      en: 'A coloring adventure for children ages 4–8, featuring Myles and his friends. Currently in development.',
      es: 'Una aventura para colorear dirigida a niños de 4 a 8 años, protagonizada por Myles y sus amigos. Actualmente en desarrollo.',
    },

    covers: {
      en: '/Books/Covers/Myles-Mountain-Adventure-Coloring-Book-EN.png',
      es: '/Books/Covers/Myles-Mountain-Adventure-Coloring-Book-SP.png',
    },
  },
];

export default function Books() {
  const { language } = useLanguage();

  const lang = language === 'es' ? 'es' : 'en';

  const pageTitle =
    lang === 'es'
      ? 'Libros y Publicaciones'
      : 'Books & Publications';

  const pageSubtitle =
    lang === 'es'
      ? 'Historias y recursos para aprender, crecer, explorar y descubrir.'
      : 'Stories and resources to learn, grow, explore, and discover.';

  return (
    <>
      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <section className="section hero-home-simple books-hero">
        <div className="container text-center">

          <h1 className="hero-title">
            {pageTitle}
          </h1>

          <p className="hero-subtitle">
            {pageSubtitle}
          </p>

        </div>
      </section>

      {/* =====================================================
          BOOK CATALOG
          ===================================================== */}

      <section className="section books-catalog-section">
        <div className="container">

          <div className="books-grid">

            {books.map((book) => {
              const bookTitle =
                typeof book.title === 'string'
                  ? book.title
                  : book.title[lang];

              return (
                <article
                  className={`books-card books-card-${book.category}`}
                  key={book.id}
                >

                  {/* Book cover */}

                  <div className="books-cover">

                    <img
                      src={book.covers[lang]}
                      alt={bookTitle}
                      loading="lazy"
                      decoding="async"
                    />

                  </div>

                  {/* Book information */}

                  <div className="books-card-content">

                    <h2 className="books-card-title">
                      {bookTitle}
                    </h2>

                    {book.subtitle && (
                      <p className="books-subtitle">
                        {book.subtitle[lang]}
                      </p>
                    )}

                    <p className="books-description">
                      {book.description[lang]}
                    </p>

                    <span className="books-status">
                      {lang === 'es'
                        ? 'Próximamente'
                        : 'Coming Soon'}
                    </span>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>
    </>
  );
}

import React from 'react';

const items = [
  {
    icon: '/icon_calm.png',
    title: 'Wellness',
    text: 'Enhance emotional and mental resilience through the Surfviving wellness approach.',
    button: 'Learn More',
    link: '/wellness',
    secondary: false,
  },
  {
    icon: '/icon_wilderness.png',
    title: 'Training',
    text: 'Get certified in CPR, ACLS, and life-saving skills for real-world emergencies.',
    button: 'View Training',
    link: '/training',
    secondary: true,
  },
  {
    icon: '/icon_guided.png',
    title: 'Guided Experiences',
    text: 'Join like-minded groups for restorative outdoor experiences and future guided adventures.',
    button: 'Explore Outdoor',
    link: '/outdoor',
    secondary: true,
  },
  {
    icon: '/icon_nature.png',
    title: 'Nature-Based Wellness',
    text: 'Find balance through outdoor wellness, mindful movement, and nature immersion.',
    button: 'Explore Adventures',
    link: '/outdoor',
    secondary: false,
  },
];

export default function About() {
  return (
    <>
      <section className='hero-banner-page'>
        <div className='container'>
          <div className='page-hero-card'>
            <img
              src='/hero_about.png'
              alt='About'
              className='page-hero-image'
            />
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container text-center'>
          <h1 className='section-title'>About DC LifeSafe Global</h1>

          <p className='section-subtitle'>
            A holistic approach to health, wellness, training, and outdoor experience.
          </p>

          <div className='card-grid columns-4 mt-medium'>
            {items.map((card) => (
              <article className='program-card' key={card.title}>
                <img src={card.icon} alt='' className='program-icon' />

                <h3>{card.title}</h3>

                <p>{card.text}</p>

                <a
                  href={card.link}
                  className={card.secondary ? 'btn btn-outline small' : 'btn small'}
                >
                  {card.button}
                </a>
              </article>
            ))}
          </div>

          <div className='mission-block'>
            <h2 className='section-title'>Our Mission</h2>

            <p className='section-subtitle narrow'>
              DC LifeSafe Global was created to bridge medicine, wellness,
              preparedness, and outdoor experience into one human-centered vision.
              Our mission is to help individuals and communities become more
              confident, resilient, emotionally aware, and prepared for both
              everyday challenges and unexpected emergencies.
            </p>

            <p className='section-subtitle narrow'>
              Inspired by real-world healthcare experience, international travel,
              outdoor exploration, and the belief that growth happens through
              challenge, DC LifeSafe Global combines practical training,
              emotional wellness, and meaningful adventure to support healthier,
              stronger, and more connected lives.
            </p>
          </div>

          <div className='story-banner'>
            <img src='/story_about.png' alt='Our story' />

            <div className='story-overlay'>
              <h3>
                Our Story: Bridging Medicine, Wellness, and Outdoor Experience
              </h3>

              <p>
                DC LifeSafe Global brings together medical knowledge, wellness education, training, and
                outdoor experiences through a practical and human-centered
                approach inspired by resilience, preparedness, and meaningful
                connection.
              </p>
            </div>
          </div>

          <div className='center-cta'>
            <h2 className='section-title small-gap'>
              Connect with DC LifeSafe Global
            </h2>

            <a
              href='mailto:info@dclifesafeglobal.com'
              className='btn'
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

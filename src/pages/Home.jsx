import React from 'react';

import { Link } from 'react-router-dom';

import {
  Shield,
  HeartPulse,
  Compass,
  ClipboardList
} from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Expert Training'
  },

  {
    icon: HeartPulse,
    title: 'Emotional Resilience'
  },

  {
    icon: Compass,
    title: 'Outdoor Leadership'
  },

  {
    icon: ClipboardList,
    title: 'Real-World Preparedness'
  }
];

export default function Home() {

  return (

    <>

      <section className='section hero-home-simple'>

        <div className='container text-center'>

          <h1 className='hero-title'>
            Medicine beyond the trail
          </h1>

          <p className='hero-subtitle'>
            Training, wellness, and outdoor experiences
            designed to build skill, resilience, and
            real-world confidence.
          </p>

          <div className='hero-actions'>

            <Link
              to='/wellness'
              className='btn'
            >
              Explore Wellness
            </Link>

           <Link
  to='/training'
  className='btn'
  style={{
    marginTop: 'auto',
    alignSelf: 'center'
  }}
              View Training
            </Link>

            <Link
              to='/contact'
              className='btn btn-outline'
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      <section className='section'>

        <div className='container'>
          
<div className='card-grid columns-4 home-feature-grid'>

           <article
  className='feature-card home-feature-card'
  style={{
    display: 'flex',
    flexDirection: 'column'
  }}
>

              <h2>
                Wellness
              </h2>

              <img
                src='/card_home_wellness.png'
                alt='Wellness'
                className='feature-thumb'
                loading='lazy'
              />

              <p>
                Emotional regulation and resilience
                tools to manage daily life through
                the Surfviving approach.
              </p>

              <Link
                to='/wellness'
                className='btn'
              >
                Discover Surfviving
              </Link>

            </article>

            <article className='feature-card'>

              <h2>
                Training
              </h2>

              <img
                src='/card_home_training.png'
                alt='Training'
                className='feature-thumb'
                loading='lazy'
              />

              <p>
                BLS, ACLS, wilderness medicine,
                and practical training for
                real-world emergencies.
              </p>

              <Link
                to='/training'
                className='btn'
              >
                View Training Courses
              </Link>

            </article>

            <article className='feature-card'>

              <h2>
                Outdoor
              </h2>

              <img
                src='/card_home_outdoor.png'
                alt='Outdoor'
                className='feature-thumb'
                loading='lazy'
              />

              <p>
                Expeditions and nature-based
                experiences built around leadership,
                health, and purpose.
              </p>

              <Link
                to='/outdoor'
                className='btn'
              >
                Explore Adventures
              </Link>

            </article>

            <article className='feature-card'>

              <h2>
                Expedition Visuals
              </h2>

              <img
                src='/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg'
                alt='Expedition Visuals'
                className='feature-thumb'
                loading='lazy'
              />

              <p>
                Visual storytelling from expeditions,
                wildlife, cities, landscapes,
                and human journeys around the world.
              </p>

              <Link
                to='/visuals'
                className='btn'
              >
                Explore Visuals
              </Link>

            </article>

          </div>

        </div>

      </section>

      <section className='section soft-section'>

        <div className='container text-center'>

          <h2 className='section-title'>
            Why DC LifeSafe Global?
          </h2>

          <p className='section-subtitle'>
            Building confidence through skill,
            wellness, and outdoor discovery.
          </p>

          <div className='icon-row'>

            {pillars.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className='icon-item'
                >

                  <div className='icon-circle'>
                    <Icon size={38} />
                  </div>

                  <span>
                    {item.title}
                  </span>

                </div>

              );

            })}

          </div>

        </div>

      </section>

    </>

  );

}

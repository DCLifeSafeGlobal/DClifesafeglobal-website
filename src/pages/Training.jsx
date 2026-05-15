import React from 'react';
import { CalendarDays, CheckCircle2 } from 'lucide-react';

const programs = [
  {
    icon: '/icon_bls.png',
    title: 'BLS',
    subtitle: 'Basic Life Support',
    text: 'Essential life-saving skills for healthcare providers and community members.',
    link: 'mailto:info@dclifesafeglobal.com?subject=BLS%20Course%20Inquiry',
  },
  {
    icon: '/icon_acls.png',
    title: 'ACLS',
    subtitle: 'Advanced Cardiac Life Support',
    text: 'Advanced training for managing cardiovascular emergencies with confidence.',
    link: 'mailto:info@dclifesafeglobal.com?subject=ACLS%20Course%20Inquiry',
  },
  {
    icon: '/icon_wilderness.png',
    title: 'Wilderness & Outdoor',
    subtitle: 'Medicine',
    text: 'Training for remote environments and adventure professionals where help is far away.',
    link: 'mailto:info@dclifesafeglobal.com?subject=Wilderness%20Medicine%20Inquiry',
  },
  {
    icon: '/icon_group.png',
    title: 'Private & Group',
    subtitle: 'Workshops',
    text: 'Customized training for teams, organizations, and communities.',
    link: 'mailto:info@dclifesafeglobal.com?subject=Private%20Workshop%20Inquiry',
  },
];

export default function Training() {
  return (
    <>
      <section className='hero-training'>
        <div className='container hero-training-grid'>

          <div className='training-copy'>

            <div className='eyebrow'>
              Training today
              <br />
              confidence tomorrow
            </div>

            <h1>
              Real Skills.
              <br />
              Real Situations.
              <br />
              <span>Real Impact.</span>
            </h1>

            <p>
              Professional medical training designed to prepare you for real-world
              emergencies and everyday heroes.
            </p>

            <div className='hero-buttons'>

              <a
                className='btn btn-outline'
                href='mailto:info@dclifesafeglobal.com?subject=Private%20Session%20Inquiry'
              >
                Request Private Session
              </a>

              <a
                className='btn btn-dark'
                href='mailto:info@dclifesafeglobal.com?subject=Group%20Training%20Inquiry'
              >
                Request Group Training
              </a>

            </div>
          </div>

          <img
            src='/hero_training.png'
            alt='Training'
            className='hero-training-image'
          />

        </div>
      </section>

      <section className='section'>
        <div className='container text-center'>

          <div className='eyebrow center'>
            Our Training Programs
          </div>

          <h2 className='section-title'>
            Build Skills. Save Lives.
          </h2>

          <div className='card-grid columns-4 mt-medium'>

            {programs.map((item) => (
              <article className='program-card' key={item.title}>

                <img
                  src={item.icon}
                  alt=''
                  className='program-icon'
                />

                <h3>
                  {item.title}
                  <br />
                  {item.subtitle}
                </h3>

                <p>{item.text}</p>

                <a
                  className='text-link'
                  href={item.link}
                >
                  Learn More →
                </a>

              </article>
            ))}

          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>

          <div className='training-bottom-grid'>

            <div className='training-benefits'>

              <h3>
                Why Train with
                <br />
                DC LifeSafe Global?
              </h3>

              <ul>

                <li>
                  <CheckCircle2 size={18} />
                  Real-world focused curriculum
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Experienced instructors
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Small class sizes
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Hands-on, practical learning
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Confidence for life
                </li>

              </ul>

            </div>

            <div className='training-bag-panel'>
              <img
                src='/training_gear.png'
                alt='Training gear'
              />
            </div>

            <aside className='upcoming-card'>

              <h4>
                <CalendarDays size={20} />
                Upcoming Courses
              </h4>

              <div className='course-item'>
                <strong>BLS Provider</strong>
                <span>Coming soon</span>
                <small>Denver, Colorado</small>
              </div>

              <div className='course-item'>
                <strong>ACLS Provider</strong>
                <span>Coming soon</span>
                <small>Denver, Colorado</small>
              </div>

              <div className='course-item'>
                <strong>Wilderness Medicine</strong>
                <span>Coming soon</span>
                <small>Colorado & Outdoor Settings</small>
              </div>

            </aside>

          </div>

          <div className='bottom-action-bar'>

            <div>
              <strong>Better Training Today</strong>
              <span>Stronger Communities Tomorrow</span>
            </div>

            <a
              className='btn btn-danger'
              href='mailto:info@dclifesafeglobal.com?subject=Training%20Inquiry'
            >
              Get Started Today
            </a>

          </div>

        </div>
      </section>
    </>
  );
}

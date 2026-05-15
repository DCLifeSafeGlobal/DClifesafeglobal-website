import React from 'react';

export default function Wellness() {
  return (
    <>

      <section className='hero-banner-page'>
        <div className='container'>

          <div className='page-hero-card'>

            <img
              src='/hero_wellness.png'
              alt='Wellness'
              className='page-hero-image'
            />

            <div className='page-hero-overlay left'>

              <img
                src='/logo_surfviving.png'
                alt='Surfviving'
                className='surfviving-hero-logo'
              />

              <h1>Ride the Emotional Wave</h1>

              <p>
                A wellness program that empowers you to manage stress,
                regulate emotions, and build resilience using
                ocean-inspired tools and practical methods.
              </p>

              <a
                className='btn'
                href='mailto:info@dclifesafeglobal.com?subject=Free%20Consultation%20Request&body=Hello%20DC%20LifeSafe%20Global%2C%0A%0AI%20would%20like%20to%20request%20a%20free%20consultation.%0A%0AName%3A%20%0APhone%3A%20%0AEmail%3A%20%0AWhat%20are%20you%20looking%20for%3F%0A'
              >
                Request a Free Consultation
              </a>

            </div>

          </div>

        </div>
      </section>

      <section className='section'>
        <div className='container text-center'>

          <h2 className='section-title'>
            Emotional Regulation Tools
          </h2>

          <p className='section-subtitle narrow'>
            Master emotional regulation and turn daily challenges
            into opportunities for growth.
          </p>

          <div className='soft-panel three-tools'>

            <div className='tool-card'>
              <img src='/icon_calm.png' alt='' />

              <h3>Calm the Mind</h3>

              <p>
                Learn breathing, mindfulness,
                and grounding techniques.
              </p>
            </div>

            <div className='tool-card'>
              <img src='/icon_wave.png' alt='' />

              <h3>Ride the Emotional Wave</h3>

              <p>
                Use surf-inspired metaphors to
                navigate emotional balance.
              </p>
            </div>

            <div className='tool-card'>
              <img src='/icon_resilience.png' alt='' />

              <h3>Build Resilience</h3>

              <p>
                Strengthen resilience and navigate
                stress with confidence.
              </p>
            </div>

          </div>

          <div className='card-grid columns-2 mt-large'>

            <article className='resource-card'>

              <img
                src='/card_workshop.png'
                alt='Workshops'
                className='resource-thumb'
              />

              <div className='resource-content'>

                <h3>Workshops & Private Sessions</h3>

                <p>
                  Join in-person workshops or book
                  a private session tailored to your needs.
                </p>

                <a className='btn' href='/workshops'>
  View Upcoming Workshops
</a>
              </div>

            </article>

            <article className='resource-card'>

              <img
                src='/card_resources.png'
                alt='Resources'
                className='resource-thumb'
              />

              <div className='resource-content'>

                <h3>Worksheets & Resources</h3>

                <p>
                  Access helpful worksheets,
                  emotional wellness tools,
                  and downloadable Surfviving resources.
                </p>

                <a className='btn' href='/resources'>
                  Download Resources
                </a>

              </div>

            </article>

          </div>

        </div>
      </section>

      <section className='section'>
        <div className='container'>

          <div className='cta-banner'>

            <img
              src='/hero_wellness_bottom.png'
              alt=''
              className='cta-image'
            />

            <div className='cta-content center'>

              <h3>Start Your Wellness Journey</h3>

              <p>
                Ride the emotional wave with expert guidance
                and support from DC LifeSafe Global.
              </p>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}

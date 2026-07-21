import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Foundations & Initial Assessment',
    items: [
      [
        'The Science of BLS',
        '/learning-center/BLS/bls-01-science-of-bls.png',
      ],
      [
        'Scene Safety & Initial Assessment',
        '/learning-center/BLS/bls-02-scene-safety-and-initial-assessment.png',
      ],
      [
        'Pulse & Breathing Check',
        '/learning-center/BLS/bls-03-pulse-and-breathing-check.png',
      ],
      [
        'Sudden Cardiac Arrest vs Heart Attack',
        '/learning-center/BLS/bls-04-sudden-cardiac-arrest-vs-heart-attack.png',
      ],
      [
        'Agonal Breathing Recognition',
        '/learning-center/BLS/bls-05-agonal-breathing-recognition.png',
      ],
      [
        'Respiratory Distress Recognition',
        '/learning-center/BLS/bls-06-respiratory-distress-recognition.png',
      ],
      [
        'Stroke Recognition: FAST / BEFAST',
        '/learning-center/BLS/bls-07-stroke-recognition-fast-befast.png',
      ],
      [
        'Opioid-Associated Emergency',
        '/learning-center/BLS/bls-08-opioid-associated-emergency.png',
      ],
    ],
  },

  {
    title: 'Chain of Survival & BLS Sequence',
    items: [
      [
        'Chain of Survival',
        '/learning-center/BLS/bls-09-chain-of-survival.png',
      ],
      [
        'Pediatric Chain of Survival',
        '/learning-center/BLS/bls-10-pediatric-chain-of-survival.png',
      ],
      [
        'C-A-B Sequence',
        '/learning-center/BLS/bls-11-cab-sequence.png',
      ],
      [
        'BLS Quick Reference Sheet',
        '/learning-center/BLS/bls-12-bls-quick-reference-sheet.png',
      ],
      [
        'BLS Key Takeaways',
        '/learning-center/BLS/bls-13-bls-key-takeaways.png',
      ],
    ],
  },

  {
    title: 'Adult CPR',
    items: [
      [
        'High-Quality CPR',
        '/learning-center/BLS/bls-14-high-quality-cpr.png',
      ],
      [
        'Hands-Only CPR',
        '/learning-center/BLS/bls-15-hands-only-cpr.png',
      ],
      [
        'One-Rescuer vs Two-Rescuer CPR',
        '/learning-center/BLS/bls-16-one-rescuer-vs-two-rescuer-cpr.png',
      ],
      [
        'Two-Rescuer CPR',
        '/learning-center/BLS/bls-17-two-rescuer-cpr.png',
      ],
      [
        'Compression Fraction & Quality Metrics',
        '/learning-center/BLS/bls-18-compression-fraction-and-quality-metrics.png',
      ],
      [
        'Compression Rotation & Fatigue Prevention',
        '/learning-center/BLS/bls-19-compression-rotation-and-fatigue-prevention.png',
      ],
    ],
  },

  {
    title: 'Pediatric CPR',
    items: [
      [
        'Adult vs Pediatric BLS Comparison',
        '/learning-center/BLS/bls-20-adult-vs-pediatric-bls-comparison.png',
      ],
      [
        'Infant vs Child CPR Comparison',
        '/learning-center/BLS/bls-21-infant-vs-child-cpr-comparison.png',
      ],
      [
        'Infant CPR: Less Than One Year',
        '/learning-center/BLS/bls-22-infant-cpr-less-than-one-year.png',
      ],
      [
        'Pediatric High-Quality CPR',
        '/learning-center/BLS/bls-23-pediatric-high-quality-cpr.png',
      ],
      [
        'Pediatric Ventilation Basics',
        '/learning-center/BLS/bls-24-pediatric-ventilation-basics.png',
      ],
    ],
  },

  {
    title: 'Breathing & Ventilation',
    items: [
      [
        'Rescue Breathing',
        '/learning-center/BLS/bls-25-rescue-breathing.png',
      ],
      [
        'Bag-Mask Ventilation Basics',
        '/learning-center/BLS/bls-26-bag-mask-ventilation-basics.png',
      ],
    ],
  },

  {
    title: 'AED & Cardiac Rhythms',
    items: [
      [
        'AED Basics',
        '/learning-center/BLS/bls-27-aed-basics.png',
      ],
      [
        'How to Use an AED',
        '/learning-center/BLS/bls-28-how-to-use-an-aed.png',
      ],
      [
        'AED Safety Considerations',
        '/learning-center/BLS/bls-29-aed-safety-considerations.png',
      ],
      [
        'Pediatric AED Use',
        '/learning-center/BLS/bls-30-pediatric-aed-use.png',
      ],
      [
        'Shockable vs Non-Shockable Rhythms',
        '/learning-center/BLS/bls-31-shockable-vs-non-shockable-rhythms.png',
      ],
    ],
  },

  {
    title: 'Choking & Recovery',
    items: [
      [
        'Choking: Responsive Adult',
        '/learning-center/BLS/bls-32-choking-responsive-adult.png',
      ],
      [
        'Recovery Position',
        '/learning-center/BLS/bls-33-recovery-position.png',
      ],
    ],
  },

  {
    title: 'Team Performance & Emotional Support',
    items: [
      [
        'BLS Team Dynamics',
        '/learning-center/BLS/bls-34-bls-team-dynamics.png',
      ],
      [
        'Communication During Resuscitation',
        '/learning-center/BLS/bls-35-communication-during-resuscitation.png',
      ],
      [
        'Family Presence During Resuscitation',
        '/learning-center/BLS/bls-36-family-presence-during-resuscitationbls-36-family-presence-during-resuscitation.png',
      ],
      [
        'The Emotional Impact of CPR',
        '/learning-center/BLS/bls-37-emotional-impact-of-cpr.png',
      ],
    ],
  },

  {
    title: 'Additional BLS Resources',
    items: [
      [
        'Child CPR: One Year to Puberty',
        '/learning-center/BLS/bls-38-child-cpr-one-to-puberty.png',
      ],
      [
        'Adult Cardiac Arrest Algorithm',
        '/learning-center/BLS/bls-39-adult-cardiac-arrest-algorithm.png',
      ],
      [
        'Common CPR Mistakes',
        '/learning-center/BLS/bls-40-common-cpr-mistakes.png',
      ],
      [
        'CPR Compression Depth & Rate',
        '/learning-center/BLS/bls-41-cpr-compression-depth-and-rate.png',
      ],
      [
        'Choking: Unresponsive Adult',
        '/learning-center/BLS/bls-42-choking-unresponsive-adult.png',
      ],
      [
        'CPR Sequence Flowchart',
        '/learning-center/BLS/bls-43-cpr-sequence-flowchart.png',
      ],
      [
        'CPR Feedback Devices',
        '/learning-center/BLS/bls-44-cpr-feedback-devices.png',
      ],
      [
        'Cardiac Monitor Basics for BLS Providers',
        '/learning-center/BLS/bls-45-cardiac-monitor-basics-for-bls-providers.png',
      ],
      [
        'Provider Wellness & Debriefing',
        '/learning-center/BLS/bls-46-provider-wellness-and-debriefing.png',
      ],
      [
        'Communication During Resuscitation: Special Topics',
        '/learning-center/BLS/bls-47-communication-during-resuscitation-special-topics.png',
      ],
    ],
  },
];

export default function BLS() {
  return (
    <main className='bls-page'>
      <section className='section resources-page'>
        <div className='container'>
          <div className='text-center'>
            <h1 className='section-title'>BLS Learning Center</h1>

            <p className='section-subtitle narrow'>
              Free downloadable Basic Life Support reference guides,
              quick-reference sheets, and educational resources.
            </p>
          </div>

          {sections.map((section) => (
            <section
              className='resource-category'
              key={section.title}
            >
              <h2>{section.title}</h2>

              <div className='resource-grid'>
                {section.items.map(([title, image]) => (
                  <article
                    className='resource-card'
                    key={image}
                  >
                    <a
                      href={image}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Open ${title}`}
                    >
                      <img
                        src={image}
                        alt={title}
                        className='resource-preview'
                        loading='lazy'
                      />
                    </a>

                    <div className='resource-content'>
                      <h3>{title}</h3>

                      <a
                        className='btn'
                        href={image}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Open Resource
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className='learning-center-footer text-center'>
            <Link
              className='btn btn-outline'
              to='/learning-center'
            >
              Back to Learning Center
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

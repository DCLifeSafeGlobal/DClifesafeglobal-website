import React from 'react';

const sections = [
  {
    title: 'Foundations',
    items: [
      ['Science of Resuscitation', '/learning-center/ACLS/acls-01-science-of-resuscitation.png'],
      ['High Performance Teams (In Hospital)', '/learning-center/ACLS/acls-02-high-performance-teams-in-hospital.png'],
      ['High Performance Teams (Out of Hospital)', '/learning-center/ACLS/acls-03-high-performance-teams-out-of-hospital.png'],
      ['Systematic Approach', '/learning-center/ACLS/acls-04-systematic-approach.png'],
      ['EKG Basics', '/learning-center/ACLS/acls-05-ekg-basics.png'],
      ['Cardiac Monitor Waves', '/learning-center/ACLS/acls-06-cardiac-monitor-waves.png'],
      ['Capnography Waveforms A Crucial Assesstmenet Guide', '/learning-center/ACLS/acls-24-capnography-waveforms-a-crucial-assessment-guide.png'],
    ],
  },

  {
    title: 'Airway & Vascular Access',
    items: [
      ['Airway Management', '/learning-center/ACLS/acls-07-airway-management.png'],
      ['Advanced Airway Management', '/learning-center/ACLS/acls-08-advanced-airway-management.png'],
      ['Intraosseous Access', '/learning-center/ACLS/acls-09-io-access.png'],
    ],
  },

  {
    title: 'Core ACLS Algorithms',
    items: [
      ['Bradycardia Algorithm', '/learning-center/ACLS/acls-10-bradycardia-algorithm.png'],
      ['Tachycardia Algorithm', '/learning-center/ACLS/acls-11-tachycardia-algorithm.png'],
      ['Cardiac Arrest Algorithm', '/learning-center/ACLS/acls-12-cardiac-arrest-algorithm.png'],
      ['Post Cardiac Arrest Care', '/learning-center/ACLS/acls-13-post-cardiac-arrest-care.png'],
    ],
  },

  {
    title: 'Acute Coronary Syndromes',
    items: [
      ['STEMI Recognition', '/learning-center/ACLS/acls-14-acs-stemi-recognition.png'],
      ['STEMI vs NSTEMI', '/learning-center/ACLS/acls-15-stemi-vs-nstemi.png'],
      ['STEMI Management', '/learning-center/ACLS/acls-16-acs-stemi-management.png'],
      ['NSTEMI / Unstable Angina', '/learning-center/ACLS/acls-17-acs-nstemi-unstable-angina.png'],
    ],
  },

  {
    title: 'Stroke',
    items: [
      ['Acute Stroke Assessment', '/learning-center/ACLS/acls-18-acute-stroke-assessment.png'],
      ['Stroke Treatment & Reperfusion', '/learning-center/ACLS/acls-19-stroke-treatment-and-reperfusion.png'],
      ['Stroke Chain of Survival', '/learning-center/ACLS/acls-20-stroke-chain-of-survival.png'],
    ],
  },

  {
    title: 'Medications',
    items: [
      ['ACLS Medication Quick Reference', '/learning-center/ACLS/acls-21-medication-quick-reference.png'],
    ],
  },

  {
    title: 'Team Support',
    items: [
      ['Coping with Death', '/learning-center/ACLS/acls-22-coping-with-death.png'],
      ['Post Event Debrief', '/learning-center/ACLS/acls-23-coping-with-death-debrief.png'],
    ],
  },
];

export default function ACLS() {
  return (
    <section className="section resources-page">
      <div className="container">

        <div className="text-center">
          <h1 className="section-title">Advanced Cardiac Life Support (ACLS)</h1>

          <p className="section-subtitle narrow">
            A comprehensive collection of ACLS quick-reference guides designed
            for healthcare professionals, instructors, students, and emergency
            responders.
          </p>
        </div>

        {sections.map((section) => (
          <div className="resource-category" key={section.title}>

            <h2>{section.title}</h2>

            <div className="resource-grid">

              {section.items.map(([title, image]) => (
                <article className="resource-card" key={title}>

                  <a href={image} target="_blank" rel="noreferrer">

                    <img
                      src={image}
                      alt={title}
                      className="resource-preview"
                    />

                  </a>

                  <div className="resource-content">

                    <h3>{title}</h3>

                    <a
                      href={image}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Reference
                    </a>

                  </div>

                </article>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

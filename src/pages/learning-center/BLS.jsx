import React from 'react';

const resources = [
  ['The Science of BLS', '/learning-center/BLS/bls-01-the-science-of-bls.png'],
  ['Pediatric Chain of Survival', '/learning-center/BLS/bls-02-pediatric-chain-of-survival.png'],
  ['Chain of Survival', '/learning-center/BLS/bls-03-chain-of-survival.png'],
  ['Adult vs Pediatric BLS Comparison', '/learning-center/BLS/bls-04-adult-vs-pediatric-bls-comparison.png'],
  ['Infant vs Child CPR Comparison', '/learning-center/BLS/bls-05-infant-vs-child-cpr-comparison.png'],
  ['Infant CPR (<1 Year)', '/learning-center/BLS/bls-06-infant-cpr-less-than-one-year.png'],
  ['Child CPR (1 to Puberty)', '/learning-center/BLS/bls-07-child-cpr-one-to-puberty.png'],
  ['Pediatric High-Quality CPR', '/learning-center/BLS/bls-08-pediatric-high-quality-cpr.png'],
  ['Pediatric Ventilation Basics', '/learning-center/BLS/bls-09-pediatric-ventilation-basics.png'],
  ['Bag-Mask Ventilation', '/learning-center/BLS/bls-10-bag-mask-ventilation-basics.png'],
  ['Respiratory Distress Recognition', '/learning-center/BLS/bls-11-respiratory-distress-recognition.png'],
  ['Agonal Breathing Recognition', '/learning-center/BLS/bls-12-agonal-breathing-recognition.png'],
  ['Pulse & Breathing Check', '/learning-center/BLS/bls-13-pulse-and-breathing-check.png'],
  ['AED Basics', '/learning-center/BLS/bls-14-automated-external-defibrillator-basics.png'],
  ['How to Use an AED', '/learning-center/BLS/bls-15-how-to-use-an-aed.png'],
  ['AED Safety Considerations', '/learning-center/BLS/bls-16-aed-safety-considerations.png'],
  ['Pediatric AED Use', '/learning-center/BLS/bls-17-pediatric-aed-use.png'],
  ['Shockable vs Non-Shockable Rhythms', '/learning-center/BLS/bls-18-shockable-vs-non-shockable-rhythms.png'],
  ['Cardiac Monitor Basics', '/learning-center/BLS/bls-19-cardiac-monitor-basics-for-bls-providers.png'],
  ['Adult Cardiac Arrest Algorithm', '/learning-center/BLS/bls-20-adult-cardiac-arrest-algorithm.png'],
  ['CPR Compression Depth & Rate', '/learning-center/BLS/bls-21-cpr-compression-depth-and-rate.png'],
  ['Compression Rotation & Fatigue Prevention', '/learning-center/BLS/bls-22-compression-rotation-fatigue-prevention.png'],
  ['High-Quality CPR', '/learning-center/BLS/bls-23-high-quality-cpr.png'],
  ['Hands-Only CPR', '/learning-center/BLS/bls-24-hands-only-cpr.png'],
  ['One-Rescuer vs Two-Rescuer CPR', '/learning-center/BLS/bls-25-one-rescuer-vs-two-rescuer-cpr.png'],
  ['Two-Rescuer CPR', '/learning-center/BLS/bls-26-two-rescuer-cpr.png'],
  ['BLS Team Dynamics', '/learning-center/BLS/bls-27-bls-team-dynamics.png'],
  ['Communication During Resuscitation', '/learning-center/BLS/bls-28-communication-during-resuscitation.png'],
  ['Family Presence During Resuscitation', '/learning-center/BLS/bls-29-family-presence-during-resuscitation.png'],
  ['Provider Wellness & Debriefing', '/learning-center/BLS/bls-30-provider-wellness-and-debriefing.png'],
  ['Emotional Impact of CPR', '/learning-center/BLS/bls-31-emotional-impact-of-cpr.png'],
  ['Choking - Responsive Adult', '/learning-center/BLS/bls-32-choking-responsive-adult.png'],
  ['Choking - Unresponsive Adult', '/learning-center/BLS/bls-33-choking-unresponsive-adult.png'],
  ['Recovery Position', '/learning-center/BLS/bls-34-recovery-position.png'],
  ['Stroke Recognition (FAST/BEFAST)', '/learning-center/BLS/bls-35-stroke-recognition-fast-befast.png'],
  ['Scene Safety & Initial Assessment', '/learning-center/BLS/bls-36-scene-safety-and-initial-assessment.png'],
  ['Common CPR Mistakes', '/learning-center/BLS/bls-37-common-cpr-mistakes.png'],
  ['CPR Sequence Flowchart', '/learning-center/BLS/bls-38-cpr-sequence-flowchart.png'],
  ['CPR Feedback Devices', '/learning-center/BLS/bls-39-cpr-feedback-devices.png'],
  ['BLS Key Takeaways', '/learning-center/BLS/bls-40-bls-key-takeaways.png'],
];

export default function BLS() {
  return (
    <section className="section resources-page">
      <div className="container">

        <div className="text-center">
          <h1 className="section-title">BLS Learning Center</h1>

          <p className="section-subtitle narrow">
            Free downloadable Basic Life Support reference guides,
            quick-reference sheets, and educational resources.
          </p>
        </div>

        <div className="resource-grid">
          {resources.map(([title, image]) => (
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
                  className="btn"
                  href={image}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Resource
                </a>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

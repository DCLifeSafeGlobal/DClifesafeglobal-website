import React from "react";

const resources = [
  {
    title: "Anger Management",
    image: "/anger-management.png",
  },
  {
    title: "Control the Wave",
    image: "/control-the-wave.png",
  },
  {
    title: "DBT Distress Tolerance",
    image: "/dbt-skill-distress-tolerance.png",
  },
  {
    title: "Disturbing Thoughts 1",
    image: "/disturbing-thoughts-1.png",
  },
  {
    title: "Disturbing Thoughts 2",
    image: "/disturbing-thoughts-2.png",
  },
  {
    title: "Disturbing Thoughts",
    image: "/disturbing-thoughts.png",
  },
  {
    title: "Emotional Awareness",
    image: "/emotional-awareness.png",
  },
  {
    title: "Emotional Awareness Prompts",
    image: "/emotional-awareness-prompts.png",
  },
  {
    title: "Connection Ladder",
    image: "/connection-ladder.png",
  },
  {
    title: "Coping Skills",
    image: "/coping-skills.png",
  },
  {
    title: "Consistency Persistence Structure",
    image: "/consistency-persistance-structure.png",
  },
  {
    title: "Goal Setting 1",
    image: "/goal-setting-1.png",
  },
  {
    title: "Goal Setting 2",
    image: "/goal-setting-2.png",
  },
  {
    title: "Goal Setting 3",
    image: "/goal-setting-3.png",
  },
  {
    title: "Goal Setting 4",
    image: "/goal-setting-4.png",
  },
  {
    title: "Goal Setting Worksheet",
    image: "/goal-setting-worksheet.png",
  },
  {
    title: "On the Wave",
    image: "/on-the-wave.png",
  },
  {
    title: "Relapse Prevention",
    image: "/relapse-prevention.png",
  },
  {
    title: "STOP Skill",
    image: "/stop-skill.png",
  },
  {
    title: "Surfviving Riding the Emotional Wave",
    image: "/surfviving-riding-the-emotional-wave.png",
  },
  {
    title: "Surfviving Worksheet",
    image: "/surfviving-worksheet.png",
  },
  {
    title: "Surfviving Worksheet 2",
    image: "/surfviving-worksheet-2.png",
  },
  {
    title: "Thoughts and Emotions",
    image: "/thoughts-and-emotions.png",
  },
  {
    title: "Wellness Tips",
    image: "/wellness-tips.png",
  },
];

export default function Resources() {
  return (
    <section className="section resources-page">
      <div className="container">

        <div className="text-center">
          <h1 className="section-title">Wellness Resources</h1>

          <p className="section-subtitle narrow">
            Download wellness worksheets and emotional regulation tools.
          </p>
        </div>

        <div className="resources-grid">

          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.image}
              target="_blank"
              rel="noreferrer"
              className="resource-download-card"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="resource-preview"
              />

              <div className="resource-download-content">
                <h3>{resource.title}</h3>

                <span className="btn small">
                  Open Resource
                </span>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

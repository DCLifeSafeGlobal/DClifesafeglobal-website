import React from "react";

const groups = [
  {
    category: "Emotional Regulation",
    items: [
      ["Anger Management", "/anger-management.png"],
      ["Control the Wave", "/control-the-wave.png"],
      ["On the Wave", "/on-the-wave.png"],
      ["STOP Skill", "/stop-skill.png"],
      ["Coping Skills", "/coping-skills.png"],
      ["DBT Distress Tolerance", "/dbt-distress-tolerance.png"],
    ],
  },

  {
    category: "Thought Processing",
    items: [
      ["Disturbing Thoughts", "/disturbing-thoughts.png"],
      ["Disturbing Thoughts 1", "/disturbing-thoughts-1.png"],
      ["Disturbing Thoughts 2", "/disturbing-thoughts-2.png"],
      ["Thoughts and Emotions", "/thoughts-and-emotions.png"],
    ],
  },

  {
    category: "Awareness & Reflection",
    items: [
      ["Emotional Awareness", "/emotional-awarness.png"],
      ["Emotional Awareness Prompts", "/Emotional-awareness-prompts.png"],
      ["Connection Ladder", "/connection-ladder.png"],
      ["Discharge Reflection", "/Discharge-reflection.png"],
    ],
  },

  {
    category: "Growth & Recovery",
    items: [
      ["Goal Setting", "/goal-setting.png"],
      ["Goal Setting 1", "/goal-setting-1.png"],
      ["Goal Setting 2", "/goal-setting-2.png"],
      ["Goal Setting 3", "/goal-setting-3.png"],
      ["Goal Setting 4", "/goal-setting-4.png"],
      ["Goal Setting Worksheet", "/goal-setting-worksheet.png"],
      ["Relapse Prevention", "/relapse-prevention.png"],
      ["Consistency Persistence Structure", "/consistency-persistance-structure.png"],
    ],
  },

  {
    category: "Surfviving Series",
    items: [
      ["Surfviving Worksheet", "/surfviving-worksheet.png"],
      ["Surfviving Worksheet 2", "/surfviving-worksheet-2.png"],
      ["Surfviving Riding the Emotional Wave", "/surfviving-riding-the-emotional-wave.png"],
      ["Wellness Tips", "/wellness-tips.png"],
    ],
  },
];

export default function Resources() {
  return (
    <section className="section resources-page">
      <div className="container">

        <div className="text-center">
          <h1 className="section-title">Wellness Resources</h1>

          <p className="section-subtitle narrow">
            Download wellness worksheets, emotional regulation tools, and Surfviving resources.
          </p>
        </div>

        <div className="resources-intro">
          <h2>Free Downloadable Wellness Tools</h2>

          <p>
            Educational worksheets for emotional awareness, coping skills,
            reflection, resilience, and personal growth.
          </p>
        </div>

        {groups.map((group) => (
          <div className="resource-category" key={group.category}>

            <h2>{group.category}</h2>

            <div className="resource-grid">

              {group.items.map(([title, image]) => (
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
        ))}

      </div>
    </section>
  );
}

import React from "react";

const workshops = [
  {
    title: "Surfviving Emotional Regulation Workshop",
    status: "Coming Soon",
    description:
      "A guided workshop focused on emotional regulation, stress management, coping skills, and resilience using the Surfviving wave framework.",
  },
  {
    title: "Outdoor Wellness Walks",
    status: "Coming Soon",
    description:
      "Nature-based wellness experiences combining movement, reflection, grounding, and emotional reset practices.",
  },
  {
    title: "Healthcare Burnout & Resilience",
    status: "Private Sessions Available",
    description:
      "A professional wellness session designed for healthcare workers, caregivers, and teams experiencing stress or emotional fatigue.",
  },
];

export default function Workshops() {
  return (
    <section className="section resources-page">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title">Workshops & Private Sessions</h1>
          <p className="section-subtitle narrow">
            Guided wellness workshops, private sessions, and future group experiences focused on resilience, emotional regulation, and real-world recovery.
          </p>
        </div>

        <div className="resources-intro">
          <h2>Upcoming Wellness Experiences</h2>
          <p>
            Workshops are currently being developed. Private wellness sessions and group inquiries are available by request.
          </p>
        </div>

        <div className="resource-grid">
          {workshops.map((item) => (
            <article className="resource-card" key={item.title}>
              <div className="resource-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>{item.status}</strong></p>
                <a
                  className="btn"
                  href="mailto:info@dclifesafeglobal.com?subject=Workshop%20or%20Private%20Session%20Inquiry&body=Hello%20DC%20LifeSafe%20Global%2C%0A%0AI%20am%20interested%20in%20a%20workshop%20or%20private%20session.%0A%0AName%3A%20%0AEmail%3A%20%0APhone%3A%20%0AInterested%20in%3A%20%0AMessage%3A%20%0A"
                >
                  Request Information
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Outdoor() {
  const cards = [
    {
      icon: "/icon_adventure.png",
      title: "Adventure Expeditions",
      text: "Explore Peru, Antarctica, the US Rockies, and future global expedition opportunities.",
      button: "Request Trip Info",
      link: "mailto:info@dclifesafeglobal.com?subject=Adventure%20Expedition%20Inquiry",
    },
    {
      icon: "/icon_wilderness.png",
      title: "Wilderness Medicine",
      text: "Learn outdoor safety, wilderness medicine, and preparedness skills for remote environments.",
      button: "Request Course Info",
      link: "mailto:info@dclifesafeglobal.com?subject=Wilderness%20Medicine%20Inquiry",
      secondary: true,
    },
    {
      icon: "/icon_guided.png",
      title: "Guided Experiences",
      text: "Join future guided hikes, outdoor reflection groups, and restorative nature-based experiences.",
      button: "Ask About Dates",
      link: "mailto:info@dclifesafeglobal.com?subject=Guided%20Outdoor%20Experience%20Inquiry",
      secondary: true,
    },
    {
      icon: "/icon_nature.png",
      title: "Nature-Based Wellness",
      text: "Find balance through outdoor wellness, mindful movement, and nature immersion.",
      button: "Explore Wellness",
      link: "/wellness",
    },
  ];

  const trips = [
    {
      title: "Peru Adventure",
      partner: "Operated by Viajeros Peru / ANTS Travel Smart",
      text: "Machu Picchu, Sacred Valley, Rainbow Mountain, Lake Titicaca, Colca Canyon, and Arequipa.",
      link: "mailto:info@dclifesafeglobal.com?subject=Peru%20Adventure%20Trip%20Inquiry",
    },
    {
      title: "Antarctica Expeditions",
      partner: "Coordinated with ANTS Travel Smart",
      text: "Polar expedition planning, photography travel, wildlife encounters, and guided adventure logistics.",
      link: "mailto:info@dclifesafeglobal.com?subject=Antarctica%20Expedition%20Inquiry",
    },
    {
      title: "Colorado Outdoor Wellness",
      partner: "DC LifeSafe Global",
      text: "Future guided wellness walks, outdoor preparedness sessions, and mountain-based reflection experiences.",
      link: "mailto:info@dclifesafeglobal.com?subject=Colorado%20Outdoor%20Wellness%20Inquiry",
    },
  ];

  return (
    <>
      <section className="hero-banner-page">
        <div className="container">
          <div className="page-hero-card outdoor-hero-card">
            <img
              src="/hero_outdoor.png"
              alt="Outdoor"
              className="page-hero-image"
            />

            <div className="page-hero-badge outdoor-badge-clean">
              <img src="/logo_outdoor.png" alt="Outdoor badge" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h1 className="section-title">Explore the Great Outdoors</h1>

          <p className="section-subtitle">
            Health-focused expeditions, wilderness training, guided outdoor
            experiences, and nature-based wellness.
          </p>

          <div className="card-grid columns-4 mt-medium">
            {cards.map((card) => (
              <article className="program-card" key={card.title}>
                <img src={card.icon} alt="" className="program-icon" />

                <h3>{card.title}</h3>

                <p>{card.text}</p>

                <a
                  className={card.secondary ? "btn btn-outline small" : "btn small"}
                  href={card.link}
                >
                  {card.button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="eyebrow center">Upcoming & Future Trips</div>

          <h2 className="section-title">Expedition Opportunities</h2>

          <p className="section-subtitle narrow">
            Trip options are coordinated through trusted partners and developed
            with a focus on safety, preparation, cultural respect, and meaningful
            outdoor experience.
          </p>

          <div className="card-grid columns-3 mt-large">
            {trips.map((trip) => (
              <article className="program-card" key={trip.title}>
                <h3>{trip.title}</h3>

                <p>
                  <strong>{trip.partner}</strong>
                </p>

                <p>{trip.text}</p>

                <a className="btn small" href={trip.link}>
                  Request Info
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <img src="/cta_outdoor.png" alt="" className="cta-image" />

            <div className="cta-content left outdoor-cta-dark">
              <h3>Ready for your next adventure?</h3>

              <p>
                Ask about Peru, Antarctica, Colorado outdoor wellness, or future
                guided expedition opportunities.
              </p>

              <a
                className="btn btn-orange"
                href="mailto:info@dclifesafeglobal.com?subject=Upcoming%20Trip%20Inquiry"
              >
                View Upcoming Trips
              </a>
            </div>
          </div>

          <div className="partner-row">
            <span>DC LifeSafe Global</span>
            <span>Viajeros Peru</span>
            <span>ANTS Travel Smart</span>
          </div>
        </div>
      </section>
    </>
  );
}

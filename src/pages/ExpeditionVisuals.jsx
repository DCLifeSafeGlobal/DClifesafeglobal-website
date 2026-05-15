import React from "react";

const expeditions = [
  {
    title: "USA",
    subtitle: "Colorado",
    image: "/dcp_visuals/colorado/dcp_redrocks_valley_view.png",
  },
  {
    title: "Netherlands",
    subtitle: "Amsterdam",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg",
    link: "/visuals/amsterdam",
  },
  {
    title: "Wildlife",
    subtitle: "Nature Encounters",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_heron_reflection.jpg",
  },
  {
    title: "Urban Journey",
    subtitle: "Cities & Culture",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_bridge_bicycles.jpg",
  },
];

const collections = [
  {
    title: "North America",
    image: "/dcp_visuals/colorado/dcp_redrocks_deer_meadow.png",
  },
  {
    title: "Architecture",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_dutch_corner_wide.jpg",
  },
  {
    title: "Waterways",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_houseboat_garden.jpg",
  },
  {
    title: "Nature",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_red_hollyhock.jpg",
  },
];

const journalPosts = [
  {
    title: "Canals at Sunset",
    date: "Amsterdam",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_queen_boat_sunflare.jpg",
  },
  {
    title: "Bridge Reflections",
    date: "Amsterdam",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_underbridge_reflections.jpg",
  },
  {
    title: "Red Rocks Morning",
    date: "Colorado",
    image: "/dcp_visuals/colorado/dcp_redrocks_sunflower_macro.png",
  },
];

export default function ExpeditionVisuals() {
  return (
    <div className="visuals-page">

      <section
        className="visuals-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.58)), url('/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg')",
        }}
      >
        <div className="visuals-hero-content">

          <img
            src="/logo_dcp_visuals.png"
            alt="DCP Expedition Visuals"
            className="visuals-logo"
          />

          <h1>Medicine Beyond the Trail.</h1>

          <p>
            Visual storytelling from expeditions, wildlife, cities,
            landscapes, and human journeys captured through lived experience.
          </p>

          <a href="#expeditions" className="visuals-btn">
            Explore Expeditions
          </a>

        </div>
      </section>

      <section className="visuals-section" id="expeditions">

        <div className="visuals-section-header">
          <span>EXPEDITIONS</span>
          <h2>Stories from around the world.</h2>
        </div>

        <div className="visuals-grid">

          {expeditions.map((item) => (
            item.link ? (
              <a
                href={item.link}
                className="visuals-card tall"
                key={item.title}
                style={{ textDecoration: "none" }}
              >
                <img src={item.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>

              </a>
            ) : (
              <article className="visuals-card tall" key={item.title}>

                <img src={item.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>

              </article>
            )
          ))}

        </div>

      </section>

      <section className="visuals-section">

        <div className="visuals-section-header">
          <span>COLLECTIONS</span>
          <h2>Curated visual archives.</h2>
        </div>

        <div className="visuals-grid">

          {collections.map((item) => (
            <article className="visuals-card" key={item.title}>

              <img src={item.image} alt={item.title} />

              <div>
                <h3>{item.title}</h3>
              </div>

            </article>
          ))}

        </div>

      </section>

      <section className="visuals-section">

        <div className="visuals-section-header">
          <span>JOURNAL</span>
          <h2>Field notes & stories.</h2>
        </div>

        <div className="visuals-journal-grid">

          {journalPosts.map((post) => (
            <article className="visuals-journal-card" key={post.title}>

              <img src={post.image} alt={post.title} />

              <div>
                <span>{post.date}</span>
                <h3>{post.title}</h3>
              </div>

            </article>
          ))}

        </div>

      </section>

      <section
        className="visuals-bottom"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/dcp_visuals/colorado/dcp_redrocks_valley_view.png')",
        }}
      >
        <div>

          <h2>Visuals with purpose.</h2>

          <p>
            DCP Expedition Visuals documents the intersection between
            medicine, resilience, exploration, wildlife, movement,
            and human experience.
          </p>

        </div>
      </section>

    </div>
  );
}

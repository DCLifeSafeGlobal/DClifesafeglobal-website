import React from "react";

const featuredImages = [
  {
    src: "/dcp_visuals/colorado/colorado_redrocks_landscape_01.jpg",
    alt: "Colorado landscape",
  },
  {
    src: "/dcp_visuals/colorado/colorado_deer_01.jpg",
    alt: "Colorado deer",
  },
  {
    src: "/dcp_visuals/colorado/colorado_sunflower_bee_01.jpg",
    alt: "Sunflower bee",
  },
  {
    src: "/dcp_visuals/colorado/colorado_rockformation_animalhead.jpg",
    alt: "Rock formation",
  },
];

const collections = [
  {
    title: "Expeditions & Trails",
    text: "Mountains, hiking routes, remote terrain, and expedition environments captured through lived exploration.",
  },
  {
    title: "Nature & Wildlife",
    text: "Wildlife encounters, natural interactions, and quiet moments observed across outdoor environments.",
  },
  {
    title: "Geological Forms",
    text: "Rock textures, erosion patterns, natural formations, and the visual language of geological time.",
  },
  {
    title: "Botanical Details",
    text: "Macro photography, pollination, flowers, and seasonal botanical landscapes.",
  },
];

export default function ExpeditionVisuals() {
  return (
    <>
      <section className="dcp-hero-section">
        <div className="dcp-hero-overlay">
          <div className="dcp-hero-content">
            <img
              src="/logo_dcp_visuals.png"
              alt="DCP Expedition Visuals"
              className="dcp-logo"
            />

            <h1>DCP Expedition Visuals</h1>

            <p>
              Photography as lived experience — where the lens becomes a bridge
              between place, presence, and memory.
            </p>

            <a href="#collections" className="btn">
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      <section className="section dcp-intro-section">
        <div className="container text-center">
          <h2 className="section-title">
            A Curated Visual Archive
          </h2>

          <p className="section-subtitle narrow">
            Landscapes, wildlife, geological formations, trails, and natural
            moments documented across expeditions and journeys.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dcp-feature-grid">
            {featuredImages.map((image) => (
              <div className="dcp-feature-card" key={image.src}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="collections">
        <div className="container text-center">
          <h2 className="section-title">
            Featured Collections
          </h2>

          <div className="card-grid columns-4 mt-medium">
            {collections.map((collection) => (
              <article className="program-card" key={collection.title}>
                <h3>{collection.title}</h3>

                <p>{collection.text}</p>

                <button className="btn small">
                  Explore
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dcp-quote-section">
        <div className="dcp-quote-overlay">
          <blockquote>
            “Not every journey is measured in distance.”
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">
            About the Project
          </h2>

          <p className="section-subtitle narrow">
            DCP Expedition Visuals was created as an evolving archive of
            exploration, observation, and lived experience.
          </p>

          <p className="section-subtitle narrow">
            Rather than focusing only on destinations, the project documents the
            meaningful moments encountered during movement through nature,
            unfamiliar places, and expedition environments.
          </p>

          <p className="section-subtitle narrow">
            Each image reflects presence, curiosity, resilience, solitude, and
            connection with the natural world.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">
            Future Collections
          </h2>

          <div className="dcp-country-grid">
            <span>Colorado</span>
            <span>Peru</span>
            <span>Bolivia</span>
            <span>Spain</span>
            <span>Hawaii</span>
            <span>Panama</span>
            <span>Tennessee</span>
            <span>Pacific Northwest</span>
          </div>
        </div>
      </section>
    </>
  );
}

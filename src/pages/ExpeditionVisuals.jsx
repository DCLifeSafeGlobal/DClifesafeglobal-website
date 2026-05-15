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
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg",
  },
  {
    title: "Wildlife",
    subtitle: "Nature Encounters",
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_zebra_close.jpg",
  },
  {
    title: "Urban Journey",
    subtitle: "Cities & Culture",
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_bridge_bicycles.jpg",
  },
];

const collections = [
  {
    title: "North America",
    image: "/dcp_visuals/colorado/dcp_redrocks_deer_meadow.png",
  },
  {
    title: "Europe",
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_riverboat_skyline.jpg",
  },
  {
    title: "Architecture",
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_dutch_corner_wide.jpg",
  },
  {
    title: "Waterways",
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_houseboat_garden.jpg",
  },
];

const journalPosts = [
  {
    title: "Canals of Amsterdam",
    date: "Netherlands",
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_queen_boat_sunflare.jpg",
  },
  {
    title: "Reflections Below the Bridge",
    date: "Amsterdam",
    image: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_underbridge_reflections.jpg",
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
            Visual storytelling from expeditions, wildlife, cities, landscapes,
            and human journeys captured through lived experience.
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
            <article className="visuals-card tall" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
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

      {/* NUEVA GALERÍA AMSTERDAM */}

<section className="visuals-section">
  <div className="visuals-section-header">
    <span>AMSTERDAM</span>
    <h2>Visual documentary archive.</h2>
  </div>

  <div className="visuals-masonry">
    {amsterdamImages.map((image) => (
      <article className="visuals-masonry-item" key={image.src}>
        <img src={image.src} alt={image.alt} />
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
            DCP Expedition Visuals documents the intersection between medicine,
            resilience, exploration, wildlife, movement, and human experience.
          </p>
        </div>
      </section>
    </div>
  );
}

const amsterdamImages = [
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_canal_bicycles.jpg",
    alt: "Amsterdam canal bicycles",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_church_twilight.jpg",
    alt: "Amsterdam church twilight",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_city_street_evening.jpg",
    alt: "Amsterdam city street evening",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_hidden_alley.jpg",
    alt: "Amsterdam hidden alley",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_monument_square.jpg",
    alt: "Amsterdam monument square",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_bike_bridge_sunrise.jpg",
    alt: "Amsterdam bike bridge sunrise",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_duck_reflection.jpg",
    alt: "Amsterdam duck reflection",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_flag_minimal.jpg",
    alt: "Amsterdam flag minimal",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_heron_reflection.jpg",
    alt: "Amsterdam heron reflection",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_heron_silhouette.jpg",
    alt: "Amsterdam heron silhouette",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_red_hollyhock.jpg",
    alt: "Amsterdam red hollyhock",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/amsterdam_river_paddleboard.jpg",
    alt: "Amsterdam river paddleboard",
  },
];


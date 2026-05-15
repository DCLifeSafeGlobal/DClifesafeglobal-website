import React from "react";

const featuredImages = [
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg",
    alt: "Amsterdam canal panorama",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_riverboat_skyline.jpg",
    alt: "Amsterdam riverboat skyline",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_rijksmuseum_front.jpg",
    alt: "Rijksmuseum Amsterdam",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_bridge_bicycles.jpg",
    alt: "Amsterdam bridge and bicycles",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_houseboat_garden.jpg",
    alt: "Amsterdam houseboat garden",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_queen_boat_sunflare.jpg",
    alt: "Amsterdam boat with sunflare",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_underbridge_reflections.jpg",
    alt: "Amsterdam underbridge reflections",
  },
  {
    src: "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_wooden_bull_sculpture.jpg",
    alt: "Amsterdam wooden bull sculpture",
  },
];

export default function ExpeditionVisuals() {
  return (
    <div className="expedition-page">
      <section className="expedition-hero">
        <div className="hero-overlay">
          <h1>DCP Expedition Visuals</h1>

          <p>
            Photography as lived experience — where the lens becomes a bridge
            between place, presence, and memory.
          </p>
        </div>
      </section>

      <section className="expedition-intro">
        <div className="container">
          <h2>Amsterdam, Netherlands</h2>

          <p>
            A curated visual exploration of Amsterdam through canals,
            architecture, movement, urban nature, and cinematic European
            atmosphere.
          </p>
        </div>
      </section>

      <section className="expedition-gallery">
        <div className="gallery-grid">
          {featuredImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

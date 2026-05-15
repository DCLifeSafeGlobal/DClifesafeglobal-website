import React from "react";

const featuredImages = [
  {
    src: "/dcp_visuals/colorado/dcp_redrocks_valley_view.png",
    alt: "Red Rocks valley view",
  },
  {
    src: "/dcp_visuals/colorado/dcp_redrocks_deer_meadow.png",
    alt: "Red Rocks deer meadow",
  },
  {
    src: "/dcp_visuals/colorado/dcp_redrocks_sunflower_macro.png",
    alt: "Red Rocks sunflower macro",
  },
  {
    src: "/dcp_visuals/colorado/dcp_redrocks_stone_animalhead_01.png",
    alt: "Red Rocks stone animal head",
  },
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
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        color: "#111111",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "70vh",
          backgroundImage:
            "url('/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            padding: "20px",
            maxWidth: "900px",
          }}
        >
          <img
            src="/logo_dcp_visuals.png"
            alt="DCP Expedition Visuals"
            style={{
              width: "140px",
              marginBottom: "24px",
            }}
          />

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: "700",
              marginBottom: "20px",
              letterSpacing: "1px",
            }}
          >
            DCP Expedition Visuals
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              opacity: 0.95,
            }}
          >
            Photography as lived experience — where the lens becomes a bridge
            between place, presence, and memory.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          padding: "80px 20px 50px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.4rem",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Amsterdam, Netherlands
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.9",
            color: "#555",
            fontSize: "1.05rem",
          }}
        >
          A curated visual exploration of Amsterdam through canals,
          architecture, movement, urban nature, reflections, and cinematic
          European atmosphere — integrated into the broader DCP Expedition
          Visuals archive.
        </p>
      </section>

      {/* GALLERY */}
      <section
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "20px 20px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "22px",
          }}
        >
          {featuredImages.map((image, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "20px",
                backgroundColor: "#f7f7f7",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from "react";

const amsterdamPath =
  "/dcp_visuals/netherlands/amsterdam";

const barcelonaPath =
  "/dcp_visuals/spain/barcelona";

export default function WildlifeVisuals() {

  const images = [

    `${amsterdamPath}/amsterdam_heron_reflection.jpg`,

    `${amsterdamPath}/amsterdam_duck_reflection.jpg`,

    `${amsterdamPath}/dcp_amsterdam_zebra_close.jpg`,

    `${amsterdamPath}/dcp_amsterdam_zebra.jpg`,

    `${barcelonaPath}/barcelona_bird_closeup.jpg`,

  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "120px 6vw 80px",
      }}
    >

      <div style={{ marginBottom: "60px" }}>

        <p
          style={{
            color: "#d4af37",
            letterSpacing: "4px",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Wildlife
        </p>

        <h1
          style={{
            color: "#fff",
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "18px",
          }}
        >
          Wildlife Visual Archive
        </h1>

        <p
          style={{
            color: "#aaa",
            maxWidth: "700px",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          Encounters with wildlife documented through
          DCP Expedition Visuals — reflections of
          movement, stillness, coexistence, and
          natural presence across different regions
          of the world.
        </p>

      </div>

      <div
        style={{
          columns: "3 320px",
          columnGap: "18px",
        }}
      >

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            alt="Wildlife"
            loading="lazy"
            style={{
              width: "100%",
              marginBottom: "18px",
              borderRadius: "16px",
              display: "block",
              breakInside: "avoid",
            }}
          />

        ))}

      </div>

    </div>
  );
}


const wildlifeImages = [
  {
    src: "/dcp_visuals/Wildlife/wildlife-american-avocet-shorebird-pond-20230619.jpg",
    title: "American Avocet",
    location: "Pond Wetland",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-american-avocets-pond-20230619.jpg",
    title: "American Avocets",
    location: "Pond Wetland",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-black-crowned-night-heron-marsh-20230606.jpg",
    title: "Black-crowned Night Heron",
    location: "Marsh Habitat",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-canada-geese-golden-light-20230628.jpg",
    title: "Canada Geese in Golden Light",
    location: "Lake Wetland",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-canada-goose-family-lake-20230628.jpg",
    title: "Canada Goose Family",
    location: "Lake Shore",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-garter-snake-aurora-20230602.jpg",
    title: "Garter Snake",
    location: "Aurora, Colorado",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-raptor-tree-silhouette-20230628.jpg",
    title: "Raptor Tree Silhouette",
    location: "Colorado",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-red-eared-slider-turtle-pond-20230619.jpg",
    title: "Red-eared Slider Turtle",
    location: "Pond Habitat",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-squirrels-tree-aurora-20230620.jpg",
    title: "Squirrels in Tree",
    location: "Aurora, Colorado",
    date: "2023",
  },
  {
    src: "/dcp_visuals/Wildlife/wildlife-twelve-spotted-skimmer-dragonfly-aurora-20230603.jpg",
    title: "Twelve-spotted Skimmer Dragonfly",
    location: "Aurora, Colorado",
    date: "2023",
  },
];

export default function WildlifeVisuals() {
  return (
    <main className="visuals-page">
      <section className="visuals-archive-hero">
        <p className="visuals-kicker">WILDLIFE</p>
        <h1>Wildlife Visual Archive</h1>
        <p>
          Encounters with wildlife documented through DCP Expedition Visuals —
          reflections of movement, stillness, coexistence, and natural presence
          across different regions of the world.
        </p>
      </section>

      <section className="visuals-gallery">
        {wildlifeImages.map((image, index) => (
          <div className="visuals-card" key={index}>
            <img src={image.src} alt={image.title} />
            <div className="visuals-card-content">
              <h3>{image.title}</h3>
              <p>{image.location}</p>
              <span>{image.date}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

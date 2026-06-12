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

  "/dcp_visuals/Wildlife/wildlife-american-avocet-shorebird-pond-20230619.jpg",
  "/dcp_visuals/Wildlife/wildlife-american-avocets-pond-20230619.jpg",
  "/dcp_visuals/Wildlife/wildlife-black-crowned-night-heron-marsh-20230606.jpg",
  "/dcp_visuals/Wildlife/wildlife-canada-geese-golden-light-20230628.jpg",
  "/dcp_visuals/Wildlife/wildlife-canada-goose-family-lake-20230628.jpg",
  "/dcp_visuals/Wildlife/wildlife-garter-snake-aurora-20230602.jpg",
  "/dcp_visuals/Wildlife/wildlife-raptor-tree-silhouette-20230628.jpg",
  "/dcp_visuals/Wildlife/wildlife-red-eared-slider-turtle-pond-20230619.jpg",
  "/dcp_visuals/Wildlife/wildlife-squirrels-tree-aurora-20230620.jpg",
  "/dcp_visuals/Wildlife/wildlife-twelve-spotted-skimmer-dragonfly-aurora-20230603.jpg",
const wildlifePath = "/dcp_visuals/Wildlife";

 {wildlifePath}/wildlife-american-avocet-shorebird-pond-20230619.jpg`,
  `${wildlifePath}/wildlife-american-avocets-pond-20230619.jpg`,
  `${wildlifePath}/wildlife-black-crowned-night-heron-marsh-20230606.jpg`,

  `${wildlifePath}/wildlife-bobcat-close-urban-walkway-20250927.jpg`,
  `${wildlifePath}/wildlife-bobcat-urban-walkway-20250927.jpg`,
  `${wildlifePath}/wildlife-alligator-overhead-20250531.jpg`,
  `${wildlifePath}/wildlife-bighorn-sheep-rocks-20250531.jpg`,
  `${wildlifePath}/wildlife-monarch-butterfly-close-20240811.jpg`,
  `${wildlifePath}/wildlife-red-fox-rocks-realistic-20240930.jpg`,
  `${wildlifePath}/wildlife-white-storks-nest-rooftop-20240618.jpg`,
  `${wildlifePath}/wildlife-canada-goose-reflection-20240518.jpg`,
  `${wildlifePath}/wildlife-bald-eagle-branches-20241123.jpg`,
  `${wildlifePath}/wildlife-bald-eagle-close-branches-20241123.jpg`,
  `${wildlifePath}/wildlife-mule-deer-bucks-pine-forest-20240812.jpg`,
  `${wildlifePath}/wildlife-sarus-crane-wetland-20240629.jpg`,
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


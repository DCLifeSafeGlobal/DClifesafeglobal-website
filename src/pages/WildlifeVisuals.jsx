import React from "react";

const amsterdamPath =
  "/dcp_visuals/netherlands/amsterdam";

const barcelonaPath =
  "/dcp_visuals/spain/barcelona";

const wildlifePath =
  "/dcp_visuals/Wildlife";

export default function WildlifeVisuals() {

  const images = [

    // Originales

    `${amsterdamPath}/amsterdam_heron_reflection.jpg`,
    `${amsterdamPath}/amsterdam_duck_reflection.jpg`,
    `${amsterdamPath}/dcp_amsterdam_zebra_close.jpg`,
    `${amsterdamPath}/dcp_amsterdam_zebra.jpg`,
    `${barcelonaPath}/barcelona_bird_closeup.jpg`,

    // Wildlife Set 1

    `${wildlifePath}/wildlife-american-avocet-shorebird-pond-20230619.jpg`,
    `${wildlifePath}/wildlife-american-avocets-pond-20230619.jpg`,
    `${wildlifePath}/wildlife-black-crowned-night-heron-marsh-20230606.jpg`,
    `${wildlifePath}/wildlife-canada-geese-golden-light-20230628.jpg`,
    `${wildlifePath}/wildlife-canada-goose-family-lake-20230628.jpg`,
    `${wildlifePath}/wildlife-garter-snake-aurora-20230602.jpg`,
    `${wildlifePath}/wildlife-raptor-tree-silhouette-20230628.jpg`,
    `${wildlifePath}/wildlife-red-eared-slider-turtle-pond-20230619.jpg`,
    `${wildlifePath}/wildlife-squirrels-tree-aurora-20230620.jpg`,
    `${wildlifePath}/wildlife-twelve-spotted-skimmer-dragonfly-aurora-20230603.jpg`,

    // Wildlife Set 2

    `${wildlifePath}/wildlife-bobcat-close-urban-walkway-20250927.jpg`,
    `${wildlifePath}/wildlife-bobcat-urban-walkway-20250927.jpg`,
    `${wildlifePath}/wildlife-alligator-overhead-20250531.jpg`,
    `${wildlifePath}/wildlife-bighorn-sheep-rocks-20250531.jpg`,
    `${wildlifePath}/wildlife-black-vulture-concrete-portrait-20250427.jpg`,
    `${wildlifePath}/wildlife-blue-jay-forest-wall-20250425.jpg`,
    `${wildlifePath}/wildlife-kangaroo-close-portrait-20250531.jpg`,
    `${wildlifePath}/wildlife-lioness-log-portrait-20250531.jpg`,
    `${wildlifePath}/wildlife-asian-elephant-habitat-20240629.jpg`,
    `${wildlifePath}/wildlife-bald-eagle-branches-20241123.jpg`,
    `${wildlifePath}/wildlife-bald-eagle-close-branches-20241123.jpg`,
    `${wildlifePath}/wildlife-golden-mantled-ground-squirrel-forest-20240810.jpg`,
    `${wildlifePath}/wildlife-grasshopper-green-leaves-20240811.jpg`,
    `${wildlifePath}/wildlife-ground-squirrel-close-portrait-20240810.jpg`,
    `${wildlifePath}/wildlife-male-lion-rock-den-20240629.jpg`,
    `${wildlifePath}/wildlife-male-lion-yawning-rock-den-20240629.jpg`,
    `${wildlifePath}/wildlife-monarch-butterfly-close-20240811.jpg`,
    `${wildlifePath}/wildlife-monarch-butterfly-plant-20240811.jpg`,
    `${wildlifePath}/wildlife-mule-deer-bucks-pine-forest-20240812.jpg`,
    `${wildlifePath}/wildlife-mule-deer-forest-portrait-20240812.jpg`,
    `${wildlifePath}/wildlife-mule-deer-resting-shade-20240812.jpg`,
    `${wildlifePath}/wildlife-red-fox-rocks-realistic-20240930.jpg`,
    `${wildlifePath}/wildlife-sarus-crane-wetland-20240629.jpg`,
    `${wildlifePath}/wildlife-stellers-jay-blue-20240810.jpg`,
    `${wildlifePath}/wildlife-white-pelicans-water-20250422.jpg`,
    `${wildlifePath}/wildlife-wild-turkey-roadside-20250410.jpg`,
    `${wildlifePath}/wildlife-yellow-grasshopper-log-macro-20240811.jpg`,
    `${wildlifePath}/wildlife-brown-slug-path-macro-20240620.jpg`,
    `${wildlifePath}/wildlife-cattle-riverbank-20240623.jpg`,
    `${wildlifePath}/wildlife-cows-riverbank-close-20240623.jpg`,

    // Wildlife Set 3

    `${wildlifePath}/wildlife-canada-goose-reflection-20240518.jpg`,
    `${wildlifePath}/wildlife-american-robin-grass-20240424.jpg`,
    `${wildlifePath}/wildlife-bald-eagle-closeup-20231218.jpg`,
    `${wildlifePath}/wildlife-bald-eagle-tree-perch-20231111.jpg`,
    `${wildlifePath}/wildlife-black-crowned-night-heron-water-20240518.jpg`,
    `${wildlifePath}/wildlife-canada-goose-goslings-grass-20240512.jpg`,
    `${wildlifePath}/wildlife-songbird-rock-water-20240609.jpg`,
    `${wildlifePath}/wildlife-white-horse-pasture-20240609.jpg`,
    `${wildlifePath}/wildlife-albino-ball-python-closeup-20240527.jpg`,
    `${wildlifePath}/wildlife-black-billed-magpie-grass-20240522.jpg`,
    `${wildlifePath}/wildlife-garter-snake-gravel-close-20240519.jpg`,
    `${wildlifePath}/wildlife-jumping-spider-macro-20240531.jpg`,
    `${wildlifePath}/wildlife-mallard-white-duck-lake-20240608.jpg`,
    `${wildlifePath}/wildlife-white-duck-lake-20240608.jpg`,
    `${wildlifePath}/wildlife-fox-squirrel-patio-20240427.jpg`,
    `${wildlifePath}/wildlife-fox-squirrels-mating-behavior-20240427.jpg`,
    `${wildlifePath}/wildlife-raptor-flight-blue-sky-20240102.jpg`,
    `${wildlifePath}/wildlife-toad-water-edge-20230729.jpg`,
    `${wildlifePath}/wildlife-turtle-surface-water-20240517.jpg`,
    `${wildlifePath}/wildlife-white-storks-nest-rooftop-20240618.jpg`,
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
          Encounters with wildlife documented through DCP Expedition Visuals —
          reflections of movement, stillness, coexistence, and natural presence across different regions of the world.
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
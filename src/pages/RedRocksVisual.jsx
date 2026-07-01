import React from "react";

const redRocksPath =
  "/dcp_visuals/usa/colorado/colorado_springs/redrocks";

export default function RedRocksVisual() {
  
  const images = [
  `${redRocksPath}/dcp_redrocks_valley_view.png`,
  `${redRocksPath}/dcp_redrocks_deer_meadow.png`,
  `${redRocksPath}/dcp_redrocks_formation_panorama.png`,
  `${redRocksPath}/dcp_redrocks_lizard_macro.png`,
  `${redRocksPath}/dcp_redrocks_stone_animalhead_01.png`,
  `${redRocksPath}/dcp_redrocks_stone_animalhead_02.png`,
  `${redRocksPath}/dcp_redrocks_sunflower_macro.png`,

  `${redRocksPath}/colorado-red-rocks-view-mountains-2.png`,
  `${redRocksPath}/colorado-red-rocks-bird.png`,
  `${redRocksPath}/colorado-red-rocks-view-rock-2.png`,
  `${redRocksPath}/colorado-red-rocks-view-rock.png`,
  `${redRocksPath}/colorado-red-rocks-view-mountains.png`,
  `${redRocksPath}/colorado-red-rocks-sunflower-macro.png`,

  `${redRocksPath}/colorado-red-rocks-garden-of-the-gods-pikes-peak-panorama-20230722.jpg`,
  `${redRocksPath}/colorado-red-rocks-garden-of-the-gods-red-ridge-20230722.jpg`,
  `${redRocksPath}/colorado-red-rocks-road-tunnel-natural-arch-20240812.jpg`,
  `${redRocksPath}/colorado-red-rocks-stone-formations-cloudy-sky-20240812.jpg`,
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
          USA / Colorado
        </p>

        <h1
          style={{
            color: "#fff",
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "18px",
          }}
        >
          Red Rocks Visual Archive
        </h1>

        <p
          style={{
            color: "#aaa",
            maxWidth: "760px",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          Red Rocks, Colorado — landscapes, wildlife, textures, light, and quiet
          outdoor moments captured through DCP Expedition Visuals.
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
            alt="Red Rocks Colorado"
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

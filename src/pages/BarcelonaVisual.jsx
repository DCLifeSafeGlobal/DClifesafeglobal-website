import React from "react";

export default function BarcelonaVisual() {
  const barcelonaPath = "/dcp_visuals/spain/barcelona";

  const images = [
    `${barcelonaPath}/barcelona_bird_closeup.jpg`,
    `${barcelonaPath}/barcelona_city_fountain_square.jpg`,
    `${barcelonaPath}/barcelona_cuartel_del_bruch.jpg`,
    `${barcelonaPath}/barcelona_sagrada_familia_apostle_detail.jpg`,
    `${barcelonaPath}/barcelona_sagrada_familia_column_figures.jpg`,
    `${barcelonaPath}/barcelona_sagrada_familia_facade_detail.jpg`,
    `${barcelonaPath}/barcelona_sagrada_familia_garden_wide.jpg`,
    `${barcelonaPath}/barcelona_sagrada_familia_main_vertical.jpg`,
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
          Spain • Barcelona
        </p>

        <h1
          style={{
            color: "#fff",
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "18px",
          }}
        >
          Barcelona Visual Archive
        </h1>

        <p
          style={{
            color: "#aaa",
            maxWidth: "720px",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          Architectural textures, sacred geometry, urban memory, rain, stone,
          and movement documented through DCP Expedition Visuals.
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
            alt="Barcelona"
            style={{
              width: "100%",
              marginBottom: "18px",
              borderRadius: "18px",
              display: "block",
              breakInside: "avoid",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
}
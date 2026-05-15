import React from "react";

export default function BarcelonaVisuals() {

  const images = [

    "/dcp_visuals/spain/barcelona/barcelona_bruch_castle.jpg",

    "/dcp_visuals/spain/barcelona/sagrada_familia_main.jpg",

    "/dcp_visuals/spain/barcelona/sagrada_familia_park.jpg",

    "/dcp_visuals/spain/barcelona/sagrada_familia_lake.jpg",

    "/dcp_visuals/spain/barcelona/sagrada_familia_detail_1.jpg",

    "/dcp_visuals/spain/barcelona/sagrada_familia_detail_2.jpg",

    "/dcp_visuals/spain/barcelona/barcelona_rain_street.jpg"

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
          Architectural textures, rain-soaked streets, sacred geometry,
          and urban stillness documented through DCP Expedition Visuals
          across Barcelona, Spain.
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

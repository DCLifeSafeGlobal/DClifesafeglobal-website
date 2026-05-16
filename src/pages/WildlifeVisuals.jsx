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
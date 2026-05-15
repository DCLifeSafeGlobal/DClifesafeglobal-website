import React from "react";

const images = [
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_bike_bridge_sunrise.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_bicycles.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_church_twilight.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_city_street_evening.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_hidden_alley.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_monument_square.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_flag_minimal.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_heron_reflection.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_heron_silhouette.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_red_hollyhock.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_river_paddleboard.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_duck_reflection.jpg",
];

export default function AmsterdamVisual() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "120px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            color: "#c8a96b",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Netherlands
        </span>

        <h1
          style={{
            color: "white",
            fontSize: "48px",
            marginTop: "10px",
            marginBottom: "50px",
          }}
        >
          Amsterdam Visual Archive
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "18px",
              }}
            >
              <img
                src={image}
                alt="Amsterdam"
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
      </div>
    </div>
  );
}

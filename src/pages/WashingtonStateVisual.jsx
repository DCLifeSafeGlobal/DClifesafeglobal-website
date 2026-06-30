import React from "react";

const washingtonPath = "/dcp_visuals/usa/washington_state";

export default function WashingtonStateVisual() {
  const images = [
    `${washingtonPath}/washington-state-seattle-waterfront-oysters-on-ice-20230527.jpg`,
    `${washingtonPath}/washington-state-seattle-waterfront-seafood-bread-20230527.jpg`,
    `${washingtonPath}/washington-state-bellingham-waterfront-stone-tower-wide-20230527.jpg`,
    `${washingtonPath}/washington-state-bellingham-railroad-tracks-coast-20230527.jpg`,
    `${washingtonPath}/washington-state-seattle-great-wheel-blue-sky-20230528.jpg`,
    `${washingtonPath}/washington-state-seattle-space-needle-skyline-close-20230528.jpg`,
    `${washingtonPath}/washington-state-seattle-waterfront-skyline-golden-hour-20230528.jpg`,
    `${washingtonPath}/washington-state-fremont-troll-under-bridge-20230122.jpg`,
    `${washingtonPath}/washington-state-everett-cascades-industrial-view-20230216.jpg`,
    `${washingtonPath}/washington-state-american-robin-branches-20230306.jpg`,
    `${washingtonPath}/washington-state-gray-squirrel-garden-20230322.jpg`,
    `${washingtonPath}/washington-state-pink-magnolia-rain-drops-20230409.jpg`,
    `${washingtonPath}/washington-state-uw-cherry-blossoms-rainy-quad-20230409.jpg`,
    `${washingtonPath}/washington-state-uw-suzzallo-library-spring-rain-20230409.jpg`,
    `${washingtonPath}/washington-state-white-cherry-blossoms-macro-20230409.jpg`,
    `${washingtonPath}/washington-state-uw-gothic-architecture-quad-20230409.jpg`,
    `${washingtonPath}/washington-state-pink-camellia-rain-drops-20230409.jpg`,
    `${washingtonPath}/washington-state-red-ranunculus-rain-drops-20230409.jpg`,
    `${washingtonPath}/washington-state-bellingham-bay-workboat-20230409.jpg`,
    `${washingtonPath}/washington-state-bellingham-waterfront-stone-tower-20230527.jpg`,
    `${washingtonPath}/washington-state-bellingham-waterfront-stone-tower-vertical-20230527.jpg`,
    `${washingtonPath}/washington-state-edmonds-sunset-pier-mood-20221016.jpg`,
    `${washingtonPath}/washington-state-fall-red-trees-20221029.jpg`,
    `${washingtonPath}/washington-state-red-maple-leaf-20221029.jpg`,
    `${washingtonPath}/washington-state-coffee-tasting-cafe-hagen-20221107.jpg`,
    `${washingtonPath}/washington-state-river-reflections-sunset-20221120.jpg`,
    `${washingtonPath}/washington-state-first-snow-autumn-street-20221129.jpg`,
    `${washingtonPath}/washington-state-space-needle-night-rain-20221210.jpg`,
    `${washingtonPath}/washington-state-icy-berries-macro-20221223.jpg`,
    `${washingtonPath}/washington-state-lake-sammamish-winter-view-20230102.jpg`,
    `${washingtonPath}/washington-state-lakeside-tree-bench-sunset-20230122.jpg`,
    `${washingtonPath}/washington-state-moody-lakeside-tree-silhouette-20230122.jpg`,
    `${washingtonPath}/washington-state-yellow-caterpillar-20220829.jpg`,
    `${washingtonPath}/washington-state-kayaking-dog-river-20220831.jpg`,
    `${washingtonPath}/washington-state-half-moon-20220903.jpg`,
    `${washingtonPath}/washington-state-seahawks-broncos-game-20220912.jpg`,
    `${washingtonPath}/washington-state-lake-metal-art-20220925.jpg`,
    `${washingtonPath}/washington-state-sunny-bay-panorama-20221002.jpg`,
    `${washingtonPath}/washington-state-deer-f150-20221002.jpg`,
    `${washingtonPath}/washington-state-forest-trail-20221008.jpg`,
    `${washingtonPath}/washington-state-seattle-space-needle-waterfront-20221009.jpg`,
    `${washingtonPath}/washington-state-seattle-skyline-elliott-bay-20221009.jpg`,
    `${washingtonPath}/washington-state-cargo-ship-puget-sound-20221016.jpg`,
    `${washingtonPath}/washington-state-puget-sound-sunset-20221016.jpg`,
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
          USA / Washington State
        </p>

        <h1
          style={{
            color: "#fff",
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "18px",
          }}
        >
          Washington State Visual Archive
        </h1>

        <p
          style={{
            color: "#aaa",
            maxWidth: "760px",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          Visual memories from Seattle, Bellingham, Puget Sound, forests,
          waterfronts, wildlife, rain, architecture, and the quiet mood of the
          Pacific Northwest.
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
            alt="Washington State"
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
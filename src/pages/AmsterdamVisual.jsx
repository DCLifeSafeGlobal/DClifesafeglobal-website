import React from "react";


const images = [

  "/dcp_visuals/netherlands/amsterdam/amsterdam_bike_bridge_sunrise.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_canal_bicycles.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_church_twilight.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_city_street_evening.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_hidden_alley.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_monument_square.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_duck_reflection.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_flag_minimal.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_heron_reflection.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_heron_silhouette.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_red_hollyhock.jpg",
  "/dcp_visuals/netherlands/amsterdam/amsterdam_river_paddleboard.jpg",

  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_bike_rows_canal.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_biker_alley.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_black_cargo_bike.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_brick_street_corner.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_bridge_bicycles.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_bike_lifestyle.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_bridge_architecture.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_bridge_boat.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_cafe_walk.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_cruise_yellow_boat.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_opera_bridge.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_ship_closeup.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_classic_facades_red_car.jpg",

  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_concertgebouw_lawn.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_corner_tower_architecture.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_dutch_corner_vertical.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_dutch_corner_wide.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_golden_angel_rooftop.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_green_courtyard_house.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_green_park_house.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_historic_boat.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_historic_intersection.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_historic_red_door_garden.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_houseboat_garden.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_modern_red_facade_path.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_park_bike_path.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_park_central_building.jpg",

  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_park_playground_bridge.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_park_white_sculpture.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_pyramid_house_bicycles.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_pyramid_house_sunflare.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_queen_boat_sunflare.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_railway_tree_shadow.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_red_microcar.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_rijksmuseum_front.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_riverboat_skyline.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_station_church_tramlines.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_taproom_detail.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_tram_citylight.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_underbridge_reflections.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_urban_star_reflection.jpg",

  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_van_gogh_museum.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_wabo_boat_harbor.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_wall_art_car.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_wall_art_sea_creatures.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_wonder_lounge_street.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_wooden_bull_sculpture.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_zebra_close.jpg",
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

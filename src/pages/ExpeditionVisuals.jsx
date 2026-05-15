import React from "react";

const heroSlides = [
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg",
  "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_riverboat_skyline.jpg",
  "/dcp_visuals/colorado/dcp_redrocks_valley_view.png",
];

const expeditions = [
  {
    title: "USA",
    subtitle: "Colorado",
    image: "/dcp_visuals/colorado/dcp_redrocks_valley_view.png",
  },
  {
    title: "Netherlands",
    subtitle: "Amsterdam",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg",
  },
  {
    title: "Wildlife",
    subtitle: "Expedition Nature",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_zebra_close.jpg",
  },
  {
    title: "Architecture",
    subtitle: "European Streets",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_dutch_corner_wide.jpg",
  },
];

const collections = [
  {
    title: "North America",
    image: "/dcp_visuals/colorado/dcp_redrocks_deer_meadow.png",
  },
  {
    title: "Europe",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_riverboat_skyline.jpg",
  },
  {
    title: "Wildlife",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_zebra_close.jpg",
  },
  {
    title: "Urban Journey",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_bridge_bicycles.jpg",
  },
];

const journalPosts = [
  {
    title: "Canals of Amsterdam",
    date: "May 2026",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_queen_boat_sunflare.jpg",
  },
  {
    title: "Reflections Below the Bridge",
    date: "May 2026",
    image:
      "/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_underbridge_reflections.jpg",
  },
  {
    title: "Red Rocks Morning",
    date: "Colorado",
    image: "/dcp_visuals/colorado/dcp_redrocks_sunflower_macro.png",
  },
];

export default function ExpeditionVisuals() {
  return (
    <div
      style={{
        backgroundColor: "#050505",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "92vh",
          backgroundImage: `url(${heroSlides[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.55))",
          }}
        />

        {/* NAVBAR */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 60px",
          }}
        >
          <img
            src="/logo_dcp_visuals.png"
            alt="DCP Expedition Visuals"
            style={{
              width: "180px",
              objectFit: "contain",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "28px",
              fontSize: "0.9rem",
              letterSpacing: "1px",
            }}
          >
            <span>HOME</span>
            <span>EXPEDITIONS</span>
            <span>COLLECTIONS</span>
            <span>JOURNAL</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "700px",
            paddingLeft: "80px",
            paddingTop: "120px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: "1.05",
              fontWeight: "500",
              marginBottom: "24px",
            }}
          >
            Medicine
            <br />
            Beyond the Trail.
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.9",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "520px",
              marginBottom: "35px",
            }}
          >
            Visual storytelling from expeditions, wildlife, cities, landscapes,
            and human journeys captured through lived experience.
          </p>

          <button
            style={{
              backgroundColor: "#c8a96b",
              color: "#000",
              border: "none",
              padding: "14px 26px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            EXPLORE EXPEDITIONS
          </button>
        </div>
      </section>

      {/* EXPEDITIONS */}
      <section
        style={{
          padding: "80px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "35px",
          }}
        >
          <div>
            <p
              style={{
                color: "#c8a96b",
                letterSpacing: "2px",
                fontSize: "0.8rem",
                marginBottom: "12px",
              }}
            >
              EXPEDITIONS
            </p>

            <h2
              style={{
                fontSize: "2.7rem",
                fontWeight: "500",
              }}
            >
              Stories from
              <br />
              around the world.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {expeditions.map((item) => (
            <div
              key={item.title}
              style={{
                position: "relative",
                height: "420px",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.3rem",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: "8px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        style={{
          padding: "0 60px 80px",
        }}
      >
        <p
          style={{
            color: "#c8a96b",
            letterSpacing: "2px",
            fontSize: "0.8rem",
            marginBottom: "16px",
          }}
        >
          COLLECTIONS
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {collections.map((item) => (
            <div
              key={item.title}
              style={{
                position: "relative",
                height: "240px",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "18px",
                  left: "18px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                {item.title.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section
        style={{
          padding: "0 60px 80px",
        }}
      >
        <p
          style={{
            color: "#c8a96b",
            letterSpacing: "2px",
            fontSize: "0.8rem",
            marginBottom: "12px",
          }}
        >
          JOURNAL
        </p>

        <h2
          style={{
            fontSize: "2.4rem",
            marginBottom: "30px",
            fontWeight: "500",
          }}
        >
          Field notes & stories.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "22px",
          }}
        >
          {journalPosts.map((post) => (
            <div
              key={post.title}
              style={{
                backgroundColor: "#101010",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    color: "#c8a96b",
                    fontSize: "0.8rem",
                    marginBottom: "10px",
                  }}
                >
                  {post.date}
                </p>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.3rem",
                  }}
                >
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER IMAGE */}
      <section
        style={{
          position: "relative",
          height: "420px",
          backgroundImage:
            "url('/dcp_visuals/colorado/dcp_redrocks_valley_view.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "18px",
              fontWeight: "500",
            }}
          >
            Visuals with purpose.
          </h2>

          <p
            style={{
              maxWidth: "700px",
              lineHeight: "1.9",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            DCP Expedition Visuals documents the intersection between medicine,
            resilience, exploration, wildlife, movement, and human experience.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import "./ExpeditionVisuals.css";

const redRocksPath =
  "/dcp_visuals/usa/colorado/colorado_springs/redrocks";

const amsterdamPath =
  "/dcp_visuals/netherlands/amsterdam";

const barcelonaPath =
  "/dcp_visuals/spain/barcelona";

const expeditions = [
  {
    title: "USA",
    subtitle: "Colorado",
    image:
      `${redRocksPath}/dcp_redrocks_valley_view.png`,
  },

  {
    title: "Netherlands",
    subtitle: "Amsterdam",
    image:
      `${amsterdamPath}/dcp_amsterdam_canal_panorama.jpg`,
    link: "/visuals/amsterdam",
  },

  {
    title: "Spain",
    subtitle: "Barcelona",
    image:
      `${barcelonaPath}/barcelona_sagrada_familia_main_vertical.jpg`,
    link: "/visuals/barcelona",
  },

  {
    title: "Wildlife",
    subtitle: "Nature Encounters",
    image:
      `${amsterdamPath}/amsterdam_heron_reflection.jpg`,
    link: "/visuals/wildlife",
  },

  {
    title: "Urban Journey",
    subtitle: "Cities & Culture",
    image:
      `${amsterdamPath}/dcp_amsterdam_bridge_bicycles.jpg`,
  },
];

const collections = [
  {
    title: "North America",
    image:
      `${redRocksPath}/dcp_redrocks_deer_meadow.png`,
  },

  {
    title: "Architecture",
    image:
      `${barcelonaPath}/barcelona_sagrada_familia_facade_detail.jpg`,
  },

  {
    title: "Waterways",
    image:
      `${amsterdamPath}/dcp_amsterdam_houseboat_garden.jpg`,
  },

  {
    title: "Nature",
    image:
      `${barcelonaPath}/barcelona_bird_closeup.jpg`,
  },
];

const journalPosts = [
  {
    title: "Canals at Sunset",
    date: "Amsterdam",
    image:
      `${amsterdamPath}/dcp_amsterdam_queen_boat_sunflare.jpg`,
  },

  {
    title: "Barcelona Rain",
    date: "Spain",
    image:
      `${barcelonaPath}/barcelona_city_fountain_square.jpg`,
  },

  {
    title: "Red Rocks Morning",
    date: "Colorado",
    image:
      `${redRocksPath}/dcp_redrocks_sunflower_macro.png`,
  },
];

export default function ExpeditionVisuals() {

  return (

    <div className="visuals-page">

      <section
        className="visuals-hero"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.58)),
            url('${barcelonaPath}/barcelona_sagrada_familia_garden_wide.jpg')`,
        }}
      >

        <div className="visuals-hero-content">

          <img
            src="/logo_dcp_visuals.png"
            alt="DCP Expedition Visuals"
            className="visuals-logo"
          />

          <h1>
            Medicine Beyond the Trail.
          </h1>

          <p>
            Visual storytelling from expeditions,
            wildlife, cities, landscapes, and
            human journeys captured through
            lived experience.
          </p>

          <a
            href="#expeditions"
            className="visuals-btn"
          >
            Explore Expeditions
          </a>

        </div>

      </section>

      <section
        className="visuals-section"
        id="expeditions"
      >

        <div className="visuals-section-header">

          <span>
            EXPEDITIONS
          </span>

          <h2>
            Stories from around the world.
          </h2>

        </div>

        <div className="visuals-grid">

          {expeditions.map((item) =>

            item.link ? (

              <a
                href={item.link}
                className="visuals-card"
                key={item.title}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.subtitle}
                  </p>

                </div>

              </a>

            ) : (

              <article
                className="visuals-card"
                key={item.title}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.subtitle}
                  </p>

                </div>

              </article>

            )

          )}

        </div>

      </section>

      <section className="visuals-section">

        <div className="visuals-section-header">

          <span>
            COLLECTIONS
          </span>

          <h2>
            Curated visual archives.
          </h2>

        </div>

        <div className="visuals-grid">

          {collections.map((item) => (

            <article
              className="visuals-card"
              key={item.title}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div>

                <h3>
                  {item.title}
                </h3>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section className="visuals-section">

        <div className="visuals-section-header">

          <span>
            JOURNAL
          </span>

          <h2>
            Field notes & stories.
          </h2>

        </div>

        <div className="visuals-journal-grid">

          {journalPosts.map((post) => (

            <article
              className="visuals-journal-card"
              key={post.title}
            >

              <img
                src={post.image}
                alt={post.title}
              />

              <div>

                <span>
                  {post.date}
                </span>

                <h3>
                  {post.title}
                </h3>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section
        className="visuals-bottom"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
            url('${redRocksPath}/dcp_redrocks_valley_view.png')`,
        }}
      >

        <div>

          <h2>
            Visuals with purpose.
          </h2>

          <p>
            DCP Expedition Visuals documents
            the intersection between medicine,
            resilience, exploration, wildlife,
            movement, and human experience.
          </p>

        </div>

      </section>

    </div>

  );
}
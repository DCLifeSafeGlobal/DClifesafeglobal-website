import React from "react";
import "./ExpeditionVisuals.css";

import { useLanguage } from "../components/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

const redRocksPath =
  "/dcp_visuals/usa/colorado/colorado_springs/redrocks";

const amsterdamPath =
  "/dcp_visuals/netherlands/amsterdam";

const barcelonaPath =
  "/dcp_visuals/spain/barcelona";

export default function ExpeditionVisuals() {

  const { language } = useLanguage();

  const t =
    translations[language]?.visualsPage ||
    translations.en.visualsPage;

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
  


{
  title: "Washington State",
  subtitle: "Pacific Northwest",
  image:
    "/dcp_visuals/usa/washington_state/washington-state-seattle-skyline-elliott-bay-20221009.jpg",
  link: "/visuals/washington-state",
},


];

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
            {t.heroTitle}
          </h1>

          <p>
            {t.heroText}
          </p>

       <a
  href="#expeditions"
  className="visuals-hero-btn"
>
  {t.exploreBtn}
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
            {t.storiesTitle}
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
            {t.archivesTitle}
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
            {t.journalTitle}
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
            {t.footerTitle}
          </h2>

          <p>
            {t.footerText}
          </p>

        </div>

      </section>

    </div>

  );
}

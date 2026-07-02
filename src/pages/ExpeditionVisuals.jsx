import React from "react";
import "./ExpeditionVisuals.css";

import { useLanguage } from "../components/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

const redRocksPath = "/dcp_visuals/usa/colorado/colorado_springs/redrocks";
const amsterdamPath = "/dcp_visuals/netherlands/amsterdam";
const barcelonaPath = "/dcp_visuals/spain/barcelona";
const washingtonPath = "/dcp_visuals/usa/washington_state";

export default function ExpeditionVisuals() {
  const { language } = useLanguage();

  const t =
    translations[language]?.visualsPage ||
    translations.en.visualsPage;

  const expeditions = [

    {
  title: "Red Rocks",
  subtitle: "Colorado",
  image:
    `${redRocksPath}/dcp_redrocks_valley_view.png`,
  link: "/visuals/red-rocks-colorado",
},

{
  title: "Switzerland",
  subtitle: "Basel",
  image:
    "/dcp_visuals/switzerland/basel/basel-switzerland-22-rhine-river-panorama.jpg",
  link: "/visuals/basel",
},

    
    {
      title: "Washington State",
      subtitle: "Pacific Northwest",
      image: `${washingtonPath}/washington-state-seattle-skyline-elliott-bay-20221009.jpg`,
      link: "/visuals/washington-state",
    },
    {
      title: "Netherlands",
      subtitle: "Amsterdam",
      image: `${amsterdamPath}/dcp_amsterdam_canal_panorama.jpg`,
      link: "/visuals/amsterdam",
    },
    {
      title: "Spain",
      subtitle: "Barcelona",
      image: `${barcelonaPath}/barcelona_sagrada_familia_main_vertical.jpg`,
      link: "/visuals/barcelona",
    },
    {
      title: "Wildlife",
      subtitle: "Nature Encounters",
      image: `${amsterdamPath}/amsterdam_heron_reflection.jpg`,
      link: "/visuals/wildlife",
    },
  

{
  title: "Boppard to Koblenz",
  subtitle: "Rhine Bike Ride, Germany",
  image:
    "/dcp_visuals/germany/boppard_koblenz_bike_ride/boppard-koblenz-bike-ride-01-rhine-river-barge-panorama.jpg",
  link: "/visuals/boppard-koblenz-bike-ride",
},
  ];
  
  return (
    <div className="visuals-page">
      <section
        className="visuals-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.58)), url('${barcelonaPath}/barcelona_sagrada_familia_garden_wide.jpg')`,
        }}
      >
        <div className="visuals-hero-content">
          <img
            src="/logo_dcp_visuals.png"
            alt="DCP Expedition Visuals"
            className="visuals-logo"
          />

          <h1>{t.heroTitle}</h1>

          <p>{t.heroText}</p>
        </div>
      </section>

      <section className="visuals-section" id="expeditions">
        <div className="visuals-section-header">
          <span>EXPEDITIONS</span>
          <h2>{t.storiesTitle}</h2>
        </div>

        <div className="visuals-grid">
          {expeditions.map((item) =>
            item.link ? (
              <a
                href={item.link}
                className="visuals-card"
                key={item.title}
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </a>
            ) : (
              <article
                className="visuals-card"
                key={item.title}
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <section
        className="visuals-bottom"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${redRocksPath}/dcp_redrocks_valley_view.png')`,
        }}
      >
        <div>
          <h2>{t.footerTitle}</h2>
          <p>{t.footerText}</p>
        </div>
      </section>
    </div>
  );
}

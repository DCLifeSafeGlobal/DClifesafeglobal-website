import React, { useMemo, useState } from "react";
import { Stethoscope } from "lucide-react";

export default function App() {
  const corporateLogo = "/Logo_principal.png";
  const surfvivingLogo = "/Logo_Surfviving.png";
  const outdoorLogo = "/Outdoor_logo.png";

  const heroHome =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80";

  const [language, setLanguage] = useState("en");

  const t = useMemo(
    () => ({
      title:
        language === "en"
          ? "Medicine beyond the trail"
          : "Medicina más allá del camino",
      button: language === "en" ? "Contact Us" : "Contáctanos",
      wellness: language === "en" ? "Wellness" : "Bienestar",
      training: language === "en" ? "Training" : "Entrenamiento",
      outdoor: language === "en" ? "Outdoor" : "Outdoor",
      phoneLabel: language === "en" ? "Phone" : "Teléfono",
      emailLabel: language === "en" ? "Email" : "Correo",
    }),
    [language]
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <img
          src={corporateLogo}
          alt="DC LifeSafe Global"
          style={{ height: 60 }}
        />

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setLanguage("en")}>EN</button>
          <button onClick={() => setLanguage("es")}>ES</button>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <h1>{t.title}</h1>
        <img
          src={heroHome}
          alt="Mountains"
          style={{
            width: "100%",
            maxWidth: "100%",
            borderRadius: 20,
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 180 }}>
          <img
            src={surfvivingLogo}
            alt="Surfviving"
            style={{ height: 60, display: "block", marginBottom: 8 }}
          />
          <h3>{t.wellness}</h3>
        </div>

        <div style={{ minWidth: 180 }}>
          <div style={{ marginBottom: 8 }}>
            <Stethoscope size={40} />
          </div>
          <h3>{t.training}</h3>
        </div>

        <div style={{ minWidth: 180 }}>
          <img
            src={outdoorLogo}
            alt="Outdoor"
            style={{ height: 60, display: "block", marginBottom: 8 }}
          />
          <h3>{t.outdoor}</h3>
        </div>
      </div>

      <div style={{ marginTop: 60 }}>
        <h2>{t.button}</h2>
        <p>
          <strong>{t.phoneLabel}:</strong> 720.527.9516
        </p>
        <p>
          <strong>{t.emailLabel}:</strong> info@dclifesafeglobal.com
        </p>
      </div>
    </div>
  );
}

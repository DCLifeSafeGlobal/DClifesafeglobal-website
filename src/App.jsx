import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  HeartPulse,
  Mountain,
  Phone,
  Mail,
  MapPin,
  Waves,
  Stethoscope,
  Compass,
  CheckCircle2,
  Globe,
  Menu,
  X,
  LifeBuoy,
  ClipboardList,
  Activity,
  ArrowRight,
  Users
} from "lucide-react";

export default function App() {

  const corporateLogo = "/Logo_principal.png";
const surfvivingLogo = "/Logo_Surfviving.png";
const outdoorLogo = "/Outdoor_logo.png";

  const heroHome = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80";

  const [language, setLanguage] = useState("en");

  const t = useMemo(() => ({
    title: language === "en" ? "Medicine beyond the trail" : "Medicina más allá del camino",
    button: language === "en" ? "Contact Us" : "Contáctanos"
  }), [language]);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src={corporateLogo} style={{ height: 60 }} />

        <div>
          <button onClick={() => setLanguage("en")}>EN</button>
          <button onClick={() => setLanguage("es")}>ES</button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ marginTop: 40 }}>
        <h1>{t.title}</h1>
        <img src={heroHome} style={{ width: "100%", borderRadius: 20 }} />
      </div>

      {/* SECTIONS */}
      <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
        
        <div>
          <img src={surfvivingLogo} style={{ height: 60 }} />
          <h3>Wellness</h3>
        </div>

        <div>
          <Stethoscope />
          <h3>Training</h3>
        </div>

        <div>
          <Mountain />
          <h3>Outdoor</h3>
        </div>

      </div>

      {/* CONTACT */}
      <div style={{ marginTop: 60 }}>
        <h2>{t.button}</h2>
        <p>720.527.9516</p>
        <p>info@dclifesafeglobal.com</p>
      </div>

    </div>
  );
}

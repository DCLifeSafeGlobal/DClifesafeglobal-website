import React from "react";
import { useLanguage } from "./LanguageContext.jsx";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      type="button"
      aria-label="Change language"
    >
      {language === "en" ? "🇪🇸 Español" : "🇺🇸 English"}
    </button>
  );
}

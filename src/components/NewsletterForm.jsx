import { useEffect } from "react";

export default function NewsletterForm() {
  useEffect(() => {
    const container = document.getElementById("kit-form-en");
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "0e9f0f2615");
    script.src = "https://dc-lifesafe-global.kit.com/0e9f0f2615/index.js";

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="newsletter-section">
      <div id="kit-form-en"></div>
    </section>
  );
}

import { useEffect } from "react";

export default function NewsletterFormES() {
  useEffect(() => {
    const container = document.getElementById("kit-form-es");
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "6a3f7c7d1a");
    script.src = "https://dc-lifesafe-global.kit.com/6a3f7c7d1a/index.js";

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="newsletter-section">
      <div id="kit-form-es"></div>
    </section>
  );
}

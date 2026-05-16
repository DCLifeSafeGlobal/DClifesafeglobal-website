import { useEffect } from "react";

export default function NewsletterForm() {
  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.setAttribute("data-uid", "0e9f0f2615");
    script.src = "https://dc-lifesafe-global.kit.com/0e9f0f2615/index.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="newsletter-section">
      <div className="newsletter-container"></div>
    </section>
  );
}

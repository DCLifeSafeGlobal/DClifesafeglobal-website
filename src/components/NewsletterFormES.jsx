import { useEffect } from "react";

export default function NewsletterFormES() {
  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.setAttribute("data-uid", "6a3f7c7d1a");
    script.src =
      "https://dc-lifesafe-global.kit.com/6a3f7c7d1a/index.js";

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

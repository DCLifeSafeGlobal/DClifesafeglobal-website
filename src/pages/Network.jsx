/* =========================
   Global Expedition Network
========================= */

.network-hero {
  min-height: 560px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: #ffffff;
}

.network-hero-content {
  text-align: left;
  max-width: 980px;
}

.network-kicker {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #f28c28;
  font-weight: 800;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.network-hero h1 {
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
  color: #ffffff;
}

.network-line {
  width: 130px;
  height: 3px;
  background: #f28c28;
  margin: 0 0 1.5rem;
}

.network-hero p {
  font-size: clamp(1.05rem, 2vw, 1.45rem);
  line-height: 1.6;
  max-width: 900px;
}

.network-section {
  background: #071018;
}

.network-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.network-card {
  background: linear-gradient(180deg, #132330, #071018);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 16px;
  overflow: hidden;
  color: #ffffff;
  box-shadow: 0 20px 45px rgba(0,0,0,0.28);
}

.network-card-image {
  height: 210px;
  background-size: cover;
  background-position: center;
}

.network-card-body {
  padding: 1.4rem;
}

.network-logo {
  width: 170px;
  height: 100px;
  object-fit: contain;
  object-position: left center;
  margin-bottom: 0.8rem;
  background: rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 0.45rem;
}

.network-card h2 {
  color: #ffffff;
  font-size: 1.45rem;
  margin-bottom: 0.6rem;
}

.network-location {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: rgba(255,255,255,0.82);
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
}

.network-divider {
  height: 3px;
  width: 100%;
  margin: 1rem 0;
  border-radius: 999px;
}

.network-divider.orange { background: #f28c28; }
.network-divider.green { background: #6dbd45; }
.network-divider.blue { background: #5ca9e6; }

.network-services {
  list-style: none;
  padding: 0;
  margin: 0 0 1.4rem;
  display: grid;
  gap: 0.55rem;
}

.network-services li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.88);
  font-size: 0.95rem;
}

.network-actions {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.network-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
}

.network-button.orange { background: #f28c28; }
.network-button.green { background: #6dbd45; }
.network-button.blue { background: #5ca9e6; }

.network-button.outline {
  background: transparent;
  border: 1px solid currentColor;
}

.network-mission {
  background: linear-gradient(135deg, #0a1720, #102a3a);
  color: #ffffff;
}

.network-mission-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  align-items: center;
}

.network-mission h2 {
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.network-mission p {
  color: rgba(255,255,255,0.82);
  font-size: 1.05rem;
  line-height: 1.7;
}

.network-values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.network-values div {
  border-left: 1px solid rgba(255,255,255,0.18);
  padding: 1.2rem;
  text-align: center;
}

.network-values svg {
  color: #f28c28;
  margin-bottom: 0.8rem;
}

.network-values strong {
  display: block;
  color: #f28c28;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.network-values span {
  display: block;
  color: rgba(255,255,255,0.78);
  font-size: 0.9rem;
  line-height: 1.45;
}

@media (max-width: 1100px) {
  .network-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .network-mission-inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .network-hero {
    min-height: 480px;
    padding: 4rem 0;
  }

  .network-grid {
    grid-template-columns: 1fr;
  }

  .network-card-image {
    height: 220px;
  }

  .network-logo {
    width: 180px;
    height: 110px;
  }

  .network-values {
    grid-template-columns: 1fr;
  }

  .network-values div {
    border-left: none;
    border-top: 1px solid rgba(255,255,255,0.18);
  }
}

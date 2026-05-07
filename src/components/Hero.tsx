import type { Category } from "../types";
import { products } from "../data";

interface HeroProps {
  onExplore: () => void;
  onWatches: () => void;
}

// Pick 3 real product images for the hero cards
const heroItems = [
  { product: products[0], label: "Chronograph" },
  { product: products[8], label: "Silk Drape" },
  { product: products[16], label: "Wide Leg" },
];

export default function Hero({ onExplore, onWatches }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">New Collection 2026</p>
        <h1 className="hero-title">
          Dressed<br />
          <em>for the moment</em>
        </h1>
        <p className="hero-sub">
          Curated fashion for the discerning eye — timepieces, dresses, trousers &amp; tops crafted with intention.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onExplore}>Explore Collection</button>
          <button className="btn-ghost" onClick={onWatches}>View Watches</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orb" />
        {heroItems.map(({ product, label }, i) => (
          <div key={product.id} className={`hero-card hc${i + 1}`}>
            <div className="hc-inner" style={{ background: product.color }}>
              <img src={product.image} alt={label} className="hc-img" />
              <span className="hc-label">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

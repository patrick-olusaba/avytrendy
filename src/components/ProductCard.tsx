import { useState } from "react";
import type { Product } from "../types";
import { categoryIcon } from "../data";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? "star filled" : "star"}>★</span>
      ))}
      <span className="rating-num">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const [wished, setWished] = useState(false);

  return (
    <article className="product-card" onClick={() => onSelect(product)}>
      <div className="product-visual" style={{ background: product.color }}>
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-icon-fallback" style={{ color: product.accent }}>
          {categoryIcon(product.category)}
        </div>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={`wishlist-btn ${wished ? "active" : ""}`}
          aria-label="Add to wishlist"
          onClick={(e) => { e.stopPropagation(); setWished((w) => !w); }}
        >
          {wished ? "♥" : "♡"}
        </button>
        <div className="product-card-hover">
          <span>View Details</span>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <Stars rating={product.rating} />
        <div className="product-bottom">
          <div className="product-price-row">
            <span className="product-price">KES {(product.price * 130).toLocaleString()}</span>
            {product.originalPrice && (
              <span className="product-original">KES {(product.originalPrice * 130).toLocaleString()}</span>
            )}
          </div>
          <div className="product-sizes-preview">
            {product.sizes.slice(0, 4).map((s) => (
              <span key={s} className="size-dot">{s}</span>
            ))}
            {product.sizes.length > 4 && <span className="size-dot more">+{product.sizes.length - 4}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

import { useState } from "react";
import type { Product } from "../types";
import { categoryIcon } from "../data";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

function Stars({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="modal-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? "star filled" : "star"}>★</span>
      ))}
      <span className="modal-rating-text">{rating.toFixed(1)} · {reviews.toLocaleString()} reviews</span>
    </div>
  );
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [sizeError, setSizeError] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) { setSizeError(true); setTimeout(() => setSizeError(false), 1500); return; }
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose(); }, 900);
  };

  return (
    <div className="overlay modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn modal-close" onClick={onClose}>✕</button>

        <div className="modal-visual" style={{ background: product.color }}>
          <img
            src={product.image}
            alt={product.name}
            className="modal-image"
          />
          <div className="modal-icon-fallback" style={{ color: product.accent }}>
            {categoryIcon(product.category)}
          </div>
          {product.badge && <span className="product-badge modal-badge">{product.badge}</span>}
        </div>

        <div className="modal-info">
          <p className="product-category">{product.category}</p>
          <h2 className="modal-name">{product.name}</h2>
          <Stars rating={product.rating} reviews={product.reviews} />

          <div className="modal-price-row">
            <span className="modal-price">KES {(product.price * 130).toLocaleString()}</span>
            {product.originalPrice && (
              <span className="product-original">KES {(product.originalPrice * 130).toLocaleString()}</span>
            )}
          </div>

          <p className="modal-description">{product.description}</p>

          <div className={`size-selector ${sizeError ? "shake" : ""}`}>
            <div className="size-label-row">
              <span className="size-label">Select Size</span>
              {sizeError && <span className="size-error">Please choose a size</span>}
            </div>
            <div className="size-options">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <ul className="modal-details">
            {product.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>

          <button className={`btn-primary full ${added ? "added" : ""}`} onClick={handleAdd}>
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

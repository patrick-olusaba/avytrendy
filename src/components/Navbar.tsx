import { useState } from "react";
import type { Category } from "../types";
import { categories } from "../data";

interface NavbarProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  cartCount: number;
  onCartOpen: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Navbar({
  activeCategory, onCategoryChange, cartCount, onCartOpen, searchQuery, onSearchChange,
}: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="logo-mark">◈</span>
          <span className="logo-text">AVYTRENDY</span>
        </div>

        <nav className="nav-links">
          {categories.slice(1).map((c) => (
            <button
              key={c.key}
              className={`nav-link ${activeCategory === c.key ? "active" : ""}`}
              onClick={() => onCategoryChange(c.key)}
            >
              {c.label}
            </button>
          ))}
        </nav>

        <div className={`nav-search ${searchOpen ? "open" : ""}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search pieces…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => { if (!searchQuery) setSearchOpen(false); }}
          />
          <span className="search-icon">⌕</span>
          {searchQuery && (
            <button className="search-clear" onClick={() => { onSearchChange(""); setSearchOpen(false); }}>✕</button>
          )}
        </div>

        <button className="cart-btn" onClick={onCartOpen}>
          <span className="cart-icon">◫</span>
          <span className="cart-label">Cart</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}

import type { Product, Category } from "../types";
import { categories } from "../data";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  activeCategory: Category;
  searchQuery: string;
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ products, activeCategory, searchQuery, onSelectProduct }: ProductGridProps) {
  const label = categories.find((c) => c.key === activeCategory)?.label;

  return (
    <main className="products-section">
      <div className="section-header">
        <div>
          <h2>{searchQuery ? `Results for "${searchQuery}"` : label}</h2>
          {searchQuery && <p className="search-hint">in {label}</p>}
        </div>
        <span className="product-count">{products.length} {products.length === 1 ? "piece" : "pieces"}</span>
      </div>

      {products.length === 0 ? (
        <div className="no-results">
          <span className="no-results-icon">◌</span>
          <p>No pieces found for "{searchQuery}"</p>
          <span className="no-results-hint">Try a different search or browse all categories</span>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      )}
    </main>
  );
}

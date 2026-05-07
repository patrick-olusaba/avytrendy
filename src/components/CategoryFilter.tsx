import type { Category } from "../types";
import { categories } from "../data";

interface CategoryFilterProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <section className="categories">
      <div className="cat-inner">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`cat-pill ${active === c.key ? "active" : ""}`}
            onClick={() => onChange(c.key)}
          >
            <span className="cat-icon">{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

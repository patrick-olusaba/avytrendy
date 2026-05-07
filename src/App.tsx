import { useState, useEffect } from "react";
import "./App.css";
import type { Category, Product, CartItem } from "./types";
import { products } from "./data";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import ProductModal from "./components/ProductModal";
import Checkout from "./components/Checkout";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState("");

  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) =>
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const addToCart = (product: Product, size: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.selectedSize === size);
      if (existing)
        return prev.map((i) =>
          i.id === product.id && i.selectedSize === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
    setNotification(`${product.name} (${size}) added to bag`);
    setTimeout(() => setNotification(""), 2500);
  };

  const removeFromCart = (id: number, size: string) => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.selectedSize === size)));
  };

  const updateQty = (id: number, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => i.id === id && i.selectedSize === size ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i)
        .filter((i) => i.quantity > 0)
    );
  };

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const anyOverlay = cartOpen || checkoutOpen || !!selectedProduct;

  useEffect(() => {
    document.body.style.overflow = anyOverlay ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [anyOverlay]);

  return (
    <div className="app">
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Hero
        onExplore={() => setActiveCategory("all")}
        onWatches={() => setActiveCategory("watches")}
      />

      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <ProductGrid
        products={filtered}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onSelectProduct={setSelectedProduct}
      />

      <Toast message={notification} />

      {cartOpen && (
        <CartSidebar
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
          onCheckout={() => setCheckoutOpen(true)}
        />
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {checkoutOpen && (
        <Checkout
          cart={cart}
          onClose={() => setCheckoutOpen(false)}
          onComplete={() => { setCart([]); }}
        />
      )}

      <Footer />
    </div>
  );
}

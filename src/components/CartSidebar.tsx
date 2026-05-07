import type { CartItem } from "../types";
import { categoryIcon } from "../data";

interface CartSidebarProps {
  cart: CartItem[];
  onClose: () => void;
  onRemove: (id: number, size: string) => void;
  onUpdateQty: (id: number, size: string, delta: number) => void;
  onCheckout: () => void;
}

export default function CartSidebar({ cart, onClose, onRemove, onUpdateQty, onCheckout }: CartSidebarProps) {
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = () => {
    onClose();
    onCheckout();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <aside className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Bag <span className="cart-header-count">{cart.reduce((s,i)=>s+i.quantity,0)}</span></h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="empty-icon">◫</span>
            <p>Your bag is empty</p>
            <button className="btn-primary" onClick={onClose}>Start Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="cart-item">
                  <div className="cart-item-visual" style={{ background: item.color }}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <span className="cart-item-icon" style={{ color: item.accent }}>
                      {categoryIcon(item.category)}
                    </span>
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-size">Size: {item.selectedSize}</p>
                    <p className="cart-item-price">KES {(item.price * 130).toLocaleString()}</p>
                    <div className="qty-control">
                      <button onClick={() => onUpdateQty(item.id, item.selectedSize, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, item.selectedSize, 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item.id, item.selectedSize)}>✕</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <div className="cart-total-row">
                  <span>Subtotal</span>
                  <span>KES {(cartTotal * 130).toLocaleString()}</span>
                </div>
                <div className="cart-total-row cart-shipping-note">
                  <span>Shipping</span>
                  <span>calculated at checkout</span>
                </div>
              </div>
              <button className="btn-primary full checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout →
              </button>
              <button className="btn-ghost full" onClick={onClose}>Continue Shopping</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

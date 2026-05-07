import { useState } from "react";
import type { CartItem, CheckoutData } from "../types";
import { categoryIcon } from "../data";

interface CheckoutProps {
  cart: CartItem[];
  onClose: () => void;
  onComplete: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

const STEP_LABELS = ["Bag", "Details", "Delivery", "Payment"];

const DELIVERY_OPTIONS = [
  { id: "standard" as const, label: "Standard", days: "3–5 business days", price: 0 },
  { id: "express" as const, label: "Express", days: "1–2 business days", price: 850 },
  { id: "sameday" as const, label: "Same Day", days: "Today by 8pm (Nairobi)", price: 1500 },
];

const EMPTY_DATA: CheckoutData = {
  email: "", firstName: "", lastName: "", phone: "",
  address: "", city: "", county: "", postalCode: "",
  delivery: "standard",
  cardNumber: "", cardName: "", cardExpiry: "", cardCvv: "",
};

function formatCard(v: string) {
  return v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 4);
  return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
}
function maskCard(n: string) {
  const d = n.replace(/\s/g, "");
  if (d.length < 4) return "•••• •••• •••• ••••";
  const last4 = d.slice(-4);
  return `•••• •••• •••• ${last4}`;
}

export default function Checkout({ cart, onClose, onComplete }: CheckoutProps) {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<CheckoutData>(EMPTY_DATA);
  const [orderNum] = useState(() => `LM-${Date.now().toString(36).toUpperCase().slice(-6)}`);

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const delivery = DELIVERY_OPTIONS.find((d) => d.id === data.delivery)!;
  const total = subtotal * 130 + delivery.price;

  const set = (field: keyof CheckoutData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const next = () => {
    if (step < 4) setStep((s) => (s + 1) as Step);
    else { onComplete(); }
  };
  const back = () => { if (step > 1) setStep((s) => (s - 1) as Step); };

  const canAdvance = () => {
    if (step === 1) return cart.length > 0;
    if (step === 2) return data.email && data.firstName && data.lastName && data.phone;
    if (step === 3) return data.address && data.city && data.county;
    if (step === 4) return data.cardNumber.replace(/\s/g, "").length === 16 && data.cardName && data.cardExpiry.length === 5 && data.cardCvv.length >= 3;
    return true;
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="checkout-header">
          <div className="checkout-logo">
            <span className="logo-mark">◈</span>
            <span className="logo-text">AVYTRENDY</span>
          </div>
          <div className="checkout-steps">
            {STEP_LABELS.map((label, i) => {
              const n = (i + 1) as Step;
              return (
                <div key={label} className={`checkout-step ${step >= n ? "active" : ""} ${step === n ? "current" : ""}`}>
                  <div className="step-circle">{step > n ? "✓" : n}</div>
                  <span className="step-label">{label}</span>
                  {i < STEP_LABELS.length - 1 && <div className={`step-line ${step > n ? "filled" : ""}`} />}
                </div>
              );
            })}
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="checkout-body">
          {/* Left: Order summary */}
          <aside className="checkout-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="summary-item">
                  <div className="summary-item-img" style={{ background: item.color }}>
                    <img src={item.image} alt={item.name} className="summary-img" />
                    <span className="summary-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-info">
                    <p className="summary-item-name">{item.name}</p>
                    <p className="summary-item-meta">Size: {item.selectedSize}</p>
                  </div>
                  <p className="summary-item-price">KES {(item.price * 130 * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>KES {(subtotal * 130).toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery ({delivery.label})</span>
                <span>{delivery.price === 0 ? "Free" : `KES ${delivery.price.toLocaleString()}`}</span>
              </div>
              <div className="summary-row summary-total-row">
                <span>Total</span>
                <span>KES {total.toLocaleString()}</span>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="checkout-form-area">
            {step === 1 && (
              <div className="checkout-step-content">
                <h2 className="form-title">Review Your Bag</h2>
                <div className="bag-review">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="bag-review-item">
                      <div className="bag-review-img" style={{ background: item.color }}>
                        <img src={item.image} alt={item.name} className="bag-review-image" />
                      </div>
                      <div className="bag-review-info">
                        <p className="bag-review-name">{item.name}</p>
                        <p className="bag-review-meta">{item.category} · Size {item.selectedSize}</p>
                        <p className="bag-review-price">KES {(item.price * 130).toLocaleString()} × {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="checkout-step-content">
                <h2 className="form-title">Contact Details</h2>
                <div className="form-grid">
                  <div className="form-field full">
                    <label>Email Address</label>
                    <input type="email" placeholder="your@email.com" value={data.email} onChange={(e) => set("email", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <label>First Name</label>
                    <input type="text" placeholder="Amara" value={data.firstName} onChange={(e) => set("firstName", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <label>Last Name</label>
                    <input type="text" placeholder="Ochieng" value={data.lastName} onChange={(e) => set("lastName", e.target.value)} />
                  </div>
                  <div className="form-field full">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+254 700 000 000" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="checkout-step-content">
                <h2 className="form-title">Delivery</h2>
                <div className="form-grid">
                  <div className="form-field full">
                    <label>Street Address</label>
                    <input type="text" placeholder="123 Ngong Road" value={data.address} onChange={(e) => set("address", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <label>City</label>
                    <input type="text" placeholder="Nairobi" value={data.city} onChange={(e) => set("city", e.target.value)} />
                  </div>
                  <div className="form-field">
                    <label>County</label>
                    <input type="text" placeholder="Nairobi County" value={data.county} onChange={(e) => set("county", e.target.value)} />
                  </div>
                  <div className="form-field full">
                    <label>Postal Code</label>
                    <input type="text" placeholder="00100" value={data.postalCode} onChange={(e) => set("postalCode", e.target.value)} />
                  </div>
                </div>
                <div className="delivery-options">
                  <p className="form-section-label">Delivery Method</p>
                  {DELIVERY_OPTIONS.map((opt) => (
                    <label key={opt.id} className={`delivery-option ${data.delivery === opt.id ? "selected" : ""}`}>
                      <input type="radio" name="delivery" value={opt.id} checked={data.delivery === opt.id} onChange={() => set("delivery", opt.id)} />
                      <div className="delivery-option-info">
                        <span className="delivery-name">{opt.label}</span>
                        <span className="delivery-days">{opt.days}</span>
                      </div>
                      <span className="delivery-price">{opt.price === 0 ? "Free" : `KES ${opt.price.toLocaleString()}`}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="checkout-step-content">
                <h2 className="form-title">Payment</h2>
                <div className="card-visual">
                  <div className="card-chip">
                    <div className="chip-lines" />
                  </div>
                  <p className="card-number-display">{maskCard(data.cardNumber)}</p>
                  <div className="card-bottom">
                    <div>
                      <p className="card-field-label">Card Holder</p>
                      <p className="card-field-value">{data.cardName || "YOUR NAME"}</p>
                    </div>
                    <div>
                      <p className="card-field-label">Expires</p>
                      <p className="card-field-value">{data.cardExpiry || "MM/YY"}</p>
                    </div>
                  </div>
                  <div className="card-logo">◈ AVYTRENDY</div>
                </div>
                <div className="form-grid">
                  <div className="form-field full">
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={data.cardNumber}
                      onChange={(e) => set("cardNumber", formatCard(e.target.value))}
                    />
                  </div>
                  <div className="form-field full">
                    <label>Name on Card</label>
                    <input type="text" placeholder="AMARA OCHIENG" value={data.cardName} onChange={(e) => set("cardName", e.target.value.toUpperCase())} />
                  </div>
                  <div className="form-field">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" value={data.cardExpiry} onChange={(e) => set("cardExpiry", formatExpiry(e.target.value))} />
                  </div>
                  <div className="form-field">
                    <label>CVV</label>
                    <input type="text" placeholder="•••" maxLength={4} value={data.cardCvv} onChange={(e) => set("cardCvv", e.target.value.replace(/\D/g, "").slice(0, 4))} />
                  </div>
                </div>
                <p className="payment-note">🔒 Your payment is secured with 256-bit SSL encryption</p>
              </div>
            )}

            {step === 5 && (
              <div className="checkout-step-content confirmation">
                <div className="confirm-icon">✓</div>
                <h2 className="confirm-title">Order Confirmed!</h2>
                <p className="confirm-order">Order #{orderNum}</p>
                <p className="confirm-text">
                  Thank you, {data.firstName}! Your order has been placed and we'll send a confirmation to <strong>{data.email}</strong>.
                </p>
                <p className="confirm-delivery">
                  Expected delivery: <strong>{delivery.label}</strong> · {delivery.days}
                </p>
                <button className="btn-primary" style={{ marginTop: "2rem" }} onClick={onClose}>Continue Shopping</button>
              </div>
            )}

            {step < 5 && (
              <div className="checkout-nav">
                {step > 1 && (
                  <button className="btn-ghost" onClick={back}>← Back</button>
                )}
                <button
                  className="btn-primary checkout-next"
                  disabled={!canAdvance()}
                  onClick={step === 4 ? () => { setStep(5 as Step); } : next}
                >
                  {step === 4 ? `Pay KES ${total.toLocaleString()}` : step === 1 ? "Continue to Details →" : "Continue →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

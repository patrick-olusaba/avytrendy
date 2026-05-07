import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="logo-mark">◈</span>
              <span className="logo-text">AVYTRENDY</span>
            </div>
            <p className="footer-tagline">Crafted with intention.<br />Worn with confidence.</p>
            <div className="footer-social">
              {["IG", "TW", "FB", "PT"].map((s) => (
                <a key={s} href="#" aria-label={s}>{s}</a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              {["Watches", "Dresses", "Trousers", "Blouses & Tops", "New Arrivals", "Sale"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              {["About Us", "Shipping & Returns", "Size Guide", "Contact", "Privacy Policy", "Terms"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Stay in the loop</h4>
            <p>New arrivals, exclusive offers and style notes — delivered to your inbox.</p>
            {subscribed ? (
              <p style={{ color: "var(--gold)", fontSize: "0.85rem" }}>✓ You're on the list.</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Avytrendy Fashion. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

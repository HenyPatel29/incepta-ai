import { Link, useLocation } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-box">
          <h2>INCEPTA</h2>
          <p>
            Crafting timeless luxury jewellery with elegance and modern design.
            Discover premium collections made for every special moment.
          </p>
        </div>

        {/* Collections */}
        <div className="footer-box">
          <h3>Collections</h3>

          <Link to="/rings" onClick={scrollToTop}>Rings</Link>
          <Link to="/earrings" onClick={scrollToTop}>Earrings</Link>
          <Link to="/bracelets" onClick={scrollToTop}>Bracelets</Link>
          <Link to="/pendants" onClick={scrollToTop}>Pendants</Link>
          <Link to="/necklaces" onClick={scrollToTop}>Necklaces</Link>
        </div>

        {/* Customer Care */}
        <div className="footer-box">
          <h3>Customer Care</h3>

          <Link to="/about" onClick={scrollToTop}>About Us</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          <Link to="/shipping" onClick={scrollToTop}>Shipping & Delivery</Link>
          <Link to="/returns" onClick={scrollToTop}>Returns</Link>
          <Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link>
        </div>

        {/* Contact */}
<div className="footer-box">
  <h3>Contact</h3>

  <a
    href="https://www.google.com/maps?q=Aaron+Spectra+210,+Rajpath+Rangoli+Rd,+Bodakdev,+Ahmedabad"
    target="_blank"
    rel="noopener noreferrer"
  >
    📍 Aaron Spectra 210, Rajpath Rangoli Rd, Bodakdev, Ahmedabad
  </a>

  <a href="tel:+918718871800">
    📞 +91 8718-8718-00
  </a>

  <a href="mailto:contact@inceptajewels.com">
    ✉ contact@inceptajewels.com
  </a>

  <p>🕒 Mon – Sat : 10AM – 7PM</p>
</div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Incepta Jewels. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;




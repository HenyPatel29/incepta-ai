import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ toggleAssistant }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      {/* ✅ LOGO CLICK GOES TO HOME */}
      <Link to="/" className="logo" onClick={closeMenu}>
        INCEPTA
      </Link>

      {/* Hamburger Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <nav className={menuOpen ? "nav active" : "nav"}>
        <Link to="/rings" onClick={closeMenu}>Rings</Link>
        <Link to="/earrings" onClick={closeMenu}>Earrings</Link>
        <Link to="/bracelets" onClick={closeMenu}>Bracelets</Link>
        <Link to="/pendants" onClick={closeMenu}>Pendants</Link>
        <Link to="/necklaces" onClick={closeMenu}>Necklaces</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </nav>

      <button className="ai-btn" onClick={toggleAssistant}>
        AI Assistant
      </button>

    </header>
  );
}

export default Navbar;
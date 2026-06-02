import { Link } from "react-router-dom";

function Navbar({ toggleAssistant }) {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        INCEPTA
      </Link>

      <nav>
        <Link to="/rings">Rings</Link>
        <Link to="/earrings">Earrings</Link>
        <Link to="/bracelets">Bracelets</Link>
        <Link to="/pendants">Pendants</Link>
        <Link to="/necklaces">Necklaces</Link>
        <Link to="/about">About</Link>
      </nav>

      <button onClick={toggleAssistant}>
        AI Assistant
      </button>

    </header>
  );
}

export default Navbar;
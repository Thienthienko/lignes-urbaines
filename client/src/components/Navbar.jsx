import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div>
      <nav className="navBar">
        <div className={`menu ${menuOpen ? "open" : "closed"}`}>
          <Link to="/" onClick={toggleMenu}>
            <h2>Accueil</h2>
          </Link>
          <Link to="/apropos" onClick={toggleMenu}>
            <h2>A propos</h2>
          </Link>
          <Link to="/creations" onClick={toggleMenu}>
            <h2>Créations</h2>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <h2>Contact</h2>
          </Link>
        </div>
        <div className="Hamburger">
          <Hamburger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

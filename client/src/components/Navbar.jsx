import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.png";
import "../App.css";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setHamburgerOpen(!hamburgerOpen);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };

  return (
    <div>
      <nav className="navBar">
        <ul>
          <Link
            to="/"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            <img src={Logo} alt="Logo" width="20%" />
          </Link>
          <Link
            to="/"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            <li>Accueil</li>
          </Link>
          <Link
            to="/apropos"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            <li>A propos</li>
          </Link>
          <Link
            to="/creations"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            <li>Créations</li>
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

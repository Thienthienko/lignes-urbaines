import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "./contexts/UserContext";

import Logo from "../assets/images/logo.png";
import "../App.css";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    logout(false);
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1000);
  };
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/apropos"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            A propos
          </Link>
        </li>
        <li>
          <Link
            to="/creations"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            Créations
          </Link>
        </li>
        <li>
          <Link
            to="/medias"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            Médias
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            Contact
          </Link>
        </li>
        {user ? (
          <li>
            <button
              type="button"
              onClick={handleLogout}
              onKeyDown={handleKeyDown}
              tabIndex="0"
            >
              Déconnexion
            </button>
          </li>
        ) : (
          <li>
            <Link
              to="/inscription"
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              tabIndex="0"
            >
              Inscription
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "./contexts/UserContext";

import Profil from "../assets/images/profil.png";
import Logo from "../assets/images/logo.png";
import Logout from "../assets/images/logout.png";
import Admin from "../assets/images/admin.png";
import "../App.css";

function Navbar() {
  const notifySuccess = (text) => toast.success(text);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
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
    notifySuccess(`Puissons-nous, nous retrouver`);
  };

  return (
    <nav className="navBar">
      <div className="navBarContent">
        <Link
          to="/"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          tabIndex="0"
        >
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
        >
          <span className="hamburgerIcon">{hamburgerOpen ? "✕" : "☰"}</span>
        </button>
      </div>
      <ul className={`navLinks ${hamburgerOpen ? "open" : ""}`}>
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

        {user !== "" ? (
          <>
            <li>
              <Link to="/admin" onKeyDown={handleKeyDown}>
                <img className="logo" src={Admin} alt="profil" />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout} onKeyDown={handleKeyDown}>
                <img className="logo" src={Logout} alt="profil" />
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/inscription"
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
            >
              <img className="logo" src={Profil} alt="profil" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

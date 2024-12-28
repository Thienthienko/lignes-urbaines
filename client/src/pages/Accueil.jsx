import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Accueil() {
  return (
    <div className="homeImg">
      <img src={Logo} alt="Lignes Urbaines" />
      <ul className="homeList">
        <li>
          <Link className="homeButton" to="/creations">
            CRÉATIONS
          </Link>
        </li>
        <li>
          <Link className="homeButton" to="/jeuneballet">
            JEUNE BALLET
          </Link>
        </li>
        <li>
          <Link className="homeButton" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Accueil;

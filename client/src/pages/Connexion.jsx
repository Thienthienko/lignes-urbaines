import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUserContext } from "../components/contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";

function Connexion() {
  // Toastify
  const notifySuccess = (text) => toast.success(text);
  const notifyError = (text) => toast.error(text);

  // Navigation
  const navigate = useNavigate();

  // useContext
  const { login } = useUserContext();

  // Info utilisateur
  const [loginInfos, setLoginInfos] = useState({
    pseudo: "",
    password: "",
  });

  // Mise à jour des infos utilisateur
  const handleLoginInfos = (e) => {
    setLoginInfos({ ...loginInfos, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginInfos.pseudo.trim() === "" || loginInfos.password.trim() === "") {
      console.error("Pseudo et mot de passe doivent être renseignés");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginInfos),
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        console.info("API response:", responseData);

        if (responseData.user) {
          login(responseData.user);

          if (loginInfos.pseudo === "admin") {
            navigate("/admin");
            notifySuccess(`Bienvenue`);
          } else {
            navigate("/");
            notifySuccess(`Bienvenue`);
          }
        } else {
          console.error("Utilisateur introuvable");
          notifyError("Utilisateur introuvable");
        }
      } else {
        console.info("Login failed with status:", response.status);
        console.error("Identifiants invalides");
        notifyError("Identifiants invalides");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="globalContainer">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin} className="connexionForm">
        <div className="row formRow">
          <div className="firstNameInput">
            <input
              type="text"
              placeholder="Pseudo"
              name="pseudo"
              value={loginInfos.pseudo}
              onChange={handleLoginInfos}
            />
          </div>
        </div>
        <div className="row formRow">
          <div className="emailInput">
            <input
              value={loginInfos.password}
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              onChange={handleLoginInfos}
            />
          </div>
        </div>
        <div className="buttonBloc">
          <button className="buttonCreationBlack" type="submit">
            <p>Se Connecter</p>
          </button>
        </div>
      </form>
      <Link to="/inscription">
        <p>Pas de compte ?</p>
      </Link>
    </div>
  );
}

export default Connexion;

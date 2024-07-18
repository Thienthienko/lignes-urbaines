import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../components/contexts/UserContext";

function Connexion() {
  const navigate = useNavigate();
  const { login } = useUserContext();
  const [loginInfos, setLoginInfos] = useState({
    pseudo: "",
    password: "",
  });

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
          } else {
            navigate("/");
          }
        } else {
          console.error("Utilisateur introuvable");
        }
      } else {
        console.info("Login failed with status:", response.status);
        console.error("Identifiants invalides");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="globalContainer">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
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
        <div className="submitButton">
          <button type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  );
}

export default Connexion;

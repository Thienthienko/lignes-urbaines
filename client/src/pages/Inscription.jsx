import { useState } from "react";
import { Form, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validation from "./inscriptionValidation";

const URL = import.meta.env.VITE_API_URL;

function Inscription() {
  // Toastify
  const notifySuccess = (text) => toast.success(text);
  const notifyError = (text) => toast.error(text);

  // Formulaire
  const [values, setValues] = useState({
    pseudo: "",
    email: "",
    password: "",
    role: "",
  });

  // Navigation
  const navigate = useNavigate();

  // Gestion des erreurs
  const [errors, setErrors] = useState({});

  // Mise à jour des valeurs
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`${URL}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pseudo: values.pseudo,
            email: values.email,
            password: values.password,
            role: values.role,
          }),
        });
        if (response.status === 200) {
          throw new Error("Erreur lors de l'inscription");
        }
        const userData = await response.json();

        // Vérifiez le rôle de l'utilisateur
        if (userData.role === "admin") {
          navigate("/admin");
          notifySuccess(`Bienvenue !`);
        } else {
          navigate("/connexion");
          notifySuccess("Inscription réussie !");
        }
      } catch (err) {
        console.error("Erreur lors de la requête d'inscription:", err);
        notifyError("Une erreur est survenue lors de l'inscription");
      }
    }
  };

  return (
    <div className="globalContainer">
      <h2>Inscription</h2>
      <Form method="post" onSubmit={handleSubmit} className="inscriptionForm">
        <div className="row formRow">
          <div className="firstNameInput">
            <input
              type="text"
              placeholder="Ton pseudo"
              name="pseudo"
              value={values.pseudo}
              onChange={handleInput}
            />
            <p>{errors.pseudo !== undefined && <span>{errors.pseudo}</span>}</p>
          </div>
        </div>
        <div className="row formRow">
          <div className="emailInput">
            <input
              type="email"
              placeholder="ton.mail@gmail.com"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
            {errors.email !== undefined && <span>{errors.email}</span>}
          </div>
        </div>
        <div className="row formRow">
          <div className="emailInput">
            <input
              type="password"
              placeholder="●●●●●●●●"
              name="password"
              value={values.password}
              onChange={handleInput}
            />
            {errors.password !== undefined && <span>{errors.password}</span>}
          </div>
        </div>
        <div className="buttonBloc">
          <button className="buttonCreationBlack" type="submit">
            <p>S'inscrire</p>
          </button>
        </div>
      </Form>
      <Link to="/connexion">
        <p>Déjà un compte ? </p>
      </Link>
    </div>
  );
}

export default Inscription;

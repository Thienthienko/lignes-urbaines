import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

function AdminPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    description: "",
    dancer_name: "",
    img: "",
  });

  const handleInputCreate = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitCreate = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${URL}/api/creations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          dancer_name: values.dancer_name,
          img: values.img,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Erreur lors de la création de la nouvelle fiche de création"
        );
      }

      navigate("/creations");
    } catch (err) {
      console.error(
        "Erreur lors de la requête de la création de la nouvelle fiche de création:",
        err
      );
    }
  };

  return (
    <div className="globalContainer">
      <h2>Admin</h2>
      <div className="creationsMediasForm">
        <div className="creationsForm">
          <h3>Formulaire Créations</h3>
          <form method="post" onSubmit={handleSubmitCreate}>
            <h4>Titre</h4>
            <input
              type="text"
              placeholder="Titre"
              name="title"
              value={values.title}
              onChange={handleInputCreate}
            />
            <h4>Description</h4>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={handleInputCreate}
            />
            <h4>Dancer Name</h4>
            <input
              type="text"
              placeholder="Dancer Name"
              name="dancer_name"
              value={values.dancer_name}
              onChange={handleInputCreate}
            />
            <input
              type="text"
              placeholder="img"
              name="img"
              value={values.img}
              onChange={handleInputCreate}
            />
            <button type="submit">
              <p>Sauvegarder</p>
            </button>
          </form>
        </div>
        <div className="mediasForm">
          <h3>Formulaire Médias</h3>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

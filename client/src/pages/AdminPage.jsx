import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

function AdminPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    description: "",
    dancer: "",
  });
  const [image, setImage] = useState(null);

  const handleInputCreate = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmitCreate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("dancer", values.dancer);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(`${URL}/api/creations`, {
        method: "POST",
        body: formData,
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
          <form
            method="post"
            onSubmit={handleSubmitCreate}
            encType="multipart/form-data"
          >
            <h4>Titre</h4>
            <input
              type="text"
              placeholder="Titre"
              name="title"
              value={values.title}
              onChange={handleInputCreate}
              required
            />
            <h4>Description</h4>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={handleInputCreate}
              required
            />
            <h4>Dancer Name</h4>
            <input
              type="text"
              placeholder="Dancer Name"
              name="dancer"
              value={values.dancer}
              onChange={handleInputCreate}
              required
            />
            <h4>Image</h4>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              required
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

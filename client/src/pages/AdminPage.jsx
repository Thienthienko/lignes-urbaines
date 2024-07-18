import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

function AdminPage() {
  const navigate = useNavigate();

  // State pour le formulaire de Créations
  const [creationValues, setCreationValues] = useState({
    title: "",
    description: "",
    dancer: "",
  });
  const [creationImage, setCreationImage] = useState(null);

  const handleInputCreate = (event) => {
    setCreationValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChangeCreate = (event) => {
    setCreationImage(event.target.files[0]);
  };

  const handleSubmitCreate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", creationValues.title);
    formData.append("description", creationValues.description);
    formData.append("dancer", creationValues.dancer);
    if (creationImage) {
      formData.append("image", creationImage);
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

  // State pour le formulaire de Médias
  const [mediaValues, setMediaValues] = useState({
    title: "",
    image: null,
  });

  const handleInputMedia = (event) => {
    setMediaValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChangeMedia = (event) => {
    setMediaValues((prev) => ({
      ...prev,
      image: event.target.files[0],
    }));
  };

  const handleSubmitMedia = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", mediaValues.title);
    if (mediaValues.image) {
      formData.append("image", mediaValues.image);
    }

    try {
      const response = await fetch(`${URL}/api/medias`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création du nouveau média");
      }

      // Naviguer vers la page des médias après soumission réussie
      navigate("/medias");
    } catch (err) {
      console.error(
        "Erreur lors de la requête de création du nouveau média:",
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
              value={creationValues.title}
              onChange={handleInputCreate}
              required
            />
            <h4>Description</h4>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={creationValues.description}
              onChange={handleInputCreate}
              required
            />
            <h4>Dancer Name</h4>
            <input
              type="text"
              placeholder="Dancer Name"
              name="dancer"
              value={creationValues.dancer}
              onChange={handleInputCreate}
              required
            />
            <h4>Image</h4>
            <input
              type="file"
              name="image"
              onChange={handleFileChangeCreate}
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
          <form
            method="post"
            onSubmit={handleSubmitMedia}
            encType="multipart/form-data"
          >
            <h4>Titre</h4>
            <input
              type="text"
              placeholder="Titre"
              name="title"
              value={mediaValues.title}
              onChange={handleInputMedia}
              required
            />
            <h4>Image</h4>
            <input
              type="file"
              name="image"
              onChange={handleFileChangeMedia}
              accept="image/*"
              required
            />
            <button type="submit">
              <p>Sauvegarder</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

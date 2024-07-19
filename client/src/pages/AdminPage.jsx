import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = import.meta.env.VITE_API_URL;

function AdminPage() {
  // Toastify
  const notifySuccess = (text) => toast.success(text);
  const notifyError = (text) => toast.error(text);

  // Navigation
  const navigate = useNavigate();

  // Formulaire de Créations
  const [creationValues, setCreationValues] = useState({
    title: "",
    description: "",
    dancer: "",
  });
  const [creationImage, setCreationImage] = useState(null);

  // Mise à jour des valeurs
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

    // Préparation des données contenants textes et images
    const formData = new FormData();
    formData.append("title", creationValues.title);
    formData.append("description", creationValues.description);
    formData.append("dancer", creationValues.dancer);
    if (creationImage !== null) {
      formData.append("image", creationImage);
    }

    try {
      const response = await fetch(`${URL}/api/creations`, {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        throw new Error(
          "Erreur lors de la création de la nouvelle fiche de création"
        );
      }
      // Naviguer vers la page des créations après soumission réussie
      navigate("/creations");
      notifySuccess("Ajout de créations réussi");
    } catch (err) {
      console.error(
        "Erreur lors de la requête de la création de la nouvelle fiche de création:",
        err
      );
    }
  };

  // Formulaire de Médias
  const [mediaValues, setMediaValues] = useState({
    title: "",
    image: null,
  });

  // Mise à jour des valeurs
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

    // Préparation des données contenants textes et images
    const formData = new FormData();
    formData.append("title", mediaValues.title);
    if (mediaValues.image !== null) {
      formData.append("image", mediaValues.image);
    }

    try {
      const response = await fetch(`${URL}/api/medias`, {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        throw new Error("Erreur lors de la création du nouveau média");
      }

      // Naviguer vers la page des médias après soumission réussie
      navigate("/medias");
      notifySuccess("Ajout de médias réussi");
    } catch (err) {
      console.error(
        "Erreur lors de la requête de création du nouveau média:",
        err
      );
      notifyError("Média non importé");
    }
  };

  return (
    <div className="globalContainer">
      <h2>Admin</h2>
      <div className="creationsMediasForm">
        <div className="creationsForm">
          <h3>Formulaire Créations</h3>
          <form
            className="createForm"
            method="post"
            onSubmit={handleSubmitCreate}
            encType="multipart/form-data"
          >
            <h4>Titre</h4>
            <input
              type="text"
              name="title"
              value={creationValues.title}
              onChange={handleInputCreate}
              required
            />
            <h4>Description</h4>
            <textarea
              className="textAreaInput"
              type="text"
              name="description"
              value={creationValues.description}
              onChange={handleInputCreate}
              required
            />
            <h4>Interprètes</h4>
            <input
              type="text"
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
            <div className="buttonBloc">
              <button className="buttonCreation" type="submit">
                <p>Sauvegarder</p>
              </button>
            </div>
          </form>
        </div>
        <div className="mediasForm">
          <h3>Formulaire Médias</h3>
          <form
            className="leftMediasForm"
            method="post"
            onSubmit={handleSubmitMedia}
            encType="multipart/form-data"
          >
            <h4>Titre</h4>
            <input
              type="text"
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
            <div className="buttonBloc">
              <button className="buttonCreation" type="submit">
                <p>Sauvegarder</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

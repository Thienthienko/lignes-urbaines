import { useEffect, useState } from "react";
import { useUserContext } from "../components/contexts/UserContext";

const URL = import.meta.env.VITE_API_URL;

function Creations() {
  const [creations, setCreations] = useState([]);
  const { user } = useUserContext();

  // Récupération des données
  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch(`${URL}/api/creations`);
        const data = await response.json();
        setCreations(data);
      } catch (err) {
        console.error("Error fetching creations:", err);
      }
    };

    fetchCreations();
  }, []);

  // Envoi d'une requête Delete à l'API et mise à jour de l'état pour supprimer l'élément supprimé
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${URL}/api/creations/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.status === 200) {
        console.info("L'opération a réussie", id);

        setCreations((prevCreations) =>
          prevCreations.filter((creation) => creation.id !== id)
        );
      } else {
        console.info("L'opération a échouée");
      }
    } catch (err) {
      console.error(err);
      console.info("Une erreur s'est produite");
    }
  };

  return (
    <div className="globalContainer">
      <h2>Créations</h2>
      <div className="principalBloc">
        <div className="creationsBloc">
          {creations.map((creation) => (
            <section key={creation.id} className="creationsSection">
              <div className="principalSection">
                <img
                  className="principalSectionImg"
                  src={`/img/${creation.img}`}
                  alt=""
                />
              </div>
              <div className="secondSection">
                <p className="creationTextTitre">{creation.title}</p>
                <p className="creationTextDesc">{creation.description}</p>
                <p className="creationTextDancer">{creation.dancer}</p>
                {user && (
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => handleDelete(creation.id)}
                  >
                    Supprimer
                  </button>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Creations;

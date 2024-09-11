// import { useEffect, useState } from "react";
// import { useUserContext } from "../components/contexts/UserContext";
import IkoCreation from "../assets/images/ikoImg.jpg";
import ProfilCreation from "../assets/images/profilbis2.jpg";
import YensCreation from "../assets/images/130yen2.jpg";
import HunimalCreation from "../assets/images/hunimal.jpg";
// const URL = import.meta.env.VITE_API_URL;

function Creations() {
  // const [creations, setCreations] = useState([]);
  // const { user } = useUserContext();

  // // Récupération des données
  // useEffect(() => {
  //   const fetchCreations = async () => {
  //     try {
  //       const response = await fetch(`${URL}/api/creations`);
  //       const data = await response.json();
  //       setCreations(data);
  //     } catch (err) {
  //       console.error("Error fetching creations:", err);
  //     }
  //   };

  //   fetchCreations();
  // }, []);

  // // Envoi d'une requête Delete à l'API et mise à jour de l'état pour supprimer l'élément supprimé
  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(`${URL}/api/creations/delete`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ id }),
  //     });

  //     if (response.status === 200) {
  //       console.info("L'opération a réussie", id);

  //       setCreations((prevCreations) =>
  //         prevCreations.filter((creation) => creation.id !== id)
  //       );
  //     } else {
  //       console.info("L'opération a échouée");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     console.info("Une erreur s'est produite");
  //   }
  // };
  return (
    <div className="globalContainer">
      <h2>CRÉATIONS</h2>
      <div className="principalBloc">
        <div className="creationsBloc">
          <section className="creationsSection">
            <div className="principalSection">
              <img className="principalSectionImg" src={IkoCreation} alt="" />
            </div>
            <div className="secondSection">
              <p className="creationTextTitre">IKO</p>
              <p className="creationTextDesc">
                ‘‘Surmonter’’ paraît être le maître mot du Parkour. La peur, la
                fatigue, la lassitude,chaque étape vers l’apprentissage de cette
                discipline implique de franchir des obstacles. Comment puiser de
                cet art, qui s’extirpe de l’encombrant, une proposition nouvelle
                au spectacle vivant ? IKŌ est un spectacle à la croisée de deux
                mondes : celui du Parkour et de l’art chorégraphique.
              </p>
              <p className="creationTextDancer">
                Eva YANAMI, Lukas MILESIN, Laurène D’ORAZIO, Younes EL HAJJAMI,
                Théophile ORVELIN
              </p>
              {/* {user && (
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => handleDelete(creation.id)}
                  >
                    Supprimer
                  </button>
                )} */}
            </div>
          </section>
          <section className="creationsSection">
            <div className="principalSection">
              <img
                className="principalSectionImg"
                src={ProfilCreation}
                alt=""
              />
            </div>
            <div className="secondSection">
              <p className="creationTextTitre">Profil Bis</p>
              <p className="creationTextDesc">
                Lignes Urbaines propose une présentation du travail abordé
                durant sa résidence de création pour le spectacle PROFIL BIS à
                la Ferme du Vinatier, suivi d'un temps d'échange avec les
                personnes présentes.
              </p>
              <p className="creationTextDancer">
                Marion BLANCHOT, Julia DERRIEN, Romaine GIRY, Lea COLANTONIO,
                Carla BOUCA, Sacha NEEL
              </p>
              {/* {user && (
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => handleDelete(creation.id)}
                  >
                    Supprimer
                  </button>
                )} */}
            </div>
          </section>
          <section className="creationsSection">
            <div className="principalSection">
              <img className="principalSectionImg" src={YensCreation} alt="" />
            </div>
            <div className="secondSection">
              <p className="creationTextTitre">130 Yens</p>
              <p className="creationTextDesc">
                Le prix du métro japonais, d’une première bouffée d’air nippon,
                d’une première gifle d’un ailleurs pour Marion Blanchot.
                Associant danse moderne et hip-hop, la chorégraphe partage
                l’expérience d’un voyage mémorable entre humour et réflexion,
                fascination et consternation.
              </p>
              <p className="creationTextDancer">
                Marion BLANCHOT, Eddy DJEBARAT, Élodie MONCHAMP, Angel SINANT,
                Sarah ZIMMERMANN
              </p>
              {/* {user && (
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => handleDelete(creation.id)}
                  >
                    Supprimer
                  </button>
                )} */}
            </div>
          </section>
          <section className="creationsSection">
            <div className="principalSection">
              <img
                className="principalSectionImg"
                src={HunimalCreation}
                alt=""
              />
            </div>
            <div className="secondSection">
              <p className="creationTextTitre">Hunimal</p>
              <p className="creationTextDesc">
                Fondée en 2014 par la jeune danseuse Marion Blanchot, la
                compagnie vise à mettre en avant le métissage des danses
                contemporaine et Hip Hop. Hunimal est une création pour sept
                danseurs qui traite des similitudes comportementales entre
                l’humain et l’animal.
              </p>
              <p className="creationTextDancer">
                Marion BLANCHOT, Alexandre LADOUR, Lucien MONCHERIT, Elodie
                MONCHAMP, Julie JURADO, Camille DUCATEL, Milène MEY
              </p>
              {/* {user && (
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={() => handleDelete(creation.id)}
                  >
                    Supprimer
                  </button>
                )} */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Creations;

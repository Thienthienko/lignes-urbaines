import AfficheJb from "../assets/images/jeuneballetaffiche.jpg";

function JeuneBallet() {
  return (
    <div className="globalContainer">
      <h2>JEUNE BALLET</h2>

      <div className="principalBloc">
        <section className="marionLea">
          <div className="marionApropos animate__animated animate__bounceIn">
            <div className="divInfo ">
              <img className="afficheJb" src={AfficheJb} alt="" />
            </div>
            <div className="divInfoText">
              <h3>SAISON 2025</h3>
              <h4>Formation chorégraphique complémentaire</h4>
              <p>
                Le Jeune Ballet de la compagnie Lignes Urbaines est une
                formation en danse contemporaine visant à développer chez le
                jeune danseur qui se destine à une carrière professionnelle sa
                propre identité artistique.
              </p>
              <p>
                Le travail, effectué tant sur le plan technique que sur le plan
                de l’interprétation, permet à chaque jeune danseur de répondre
                de manière optimale aux exigences qu’il va rencontrer lors des
                auditions pour entrer dans le monde professionnel.
              </p>
            </div>
          </div>
        </section>
        <h4>Calendrier</h4>
        <div className="containerMois">
          <div className="blocMois">
            <div className="divInfoTextLuMois">
              <ul className="mois">
                Janvier 2025
                <li>Dimanche 05 janvier</li>
                <li>Dimanche 12 janvier</li>
                <li>Dimanche 26 janvier</li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                Février 2025
                <li>Dimanche 02 février</li>
                <li>Dimanche 16 février</li>
                <li>Dimanche 23 février</li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                Mars 2025
                <li>Dimanche 16 mars</li>
                <li>Dimanche 30 mars</li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                Avril 2025
                <li>Dimanche 13 avril</li>
                <li>Dimanche 27 avril</li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                Mai 2025
                <li>Dimanche 11 mai</li>
                <li>Dimanche 25 mai</li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                Juin 2025
                <li>Dimanche 01 juin</li>
                <li>Dimanche 15 juin</li>
                <li>Dimanche 29 juin</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="luApropos">
          <div className="divInfoTextLu">
            <h4>Journée Type</h4>
            <ul>
              <li>
                9h00 - 10h30 : (Ouvert aux open) Cours technique ou préparation
                physique
              </li>
              <li>
                10h30 - 12h00 : (Ouvert aux open) Cours technique (Contemporain,
                Floorwork, Moderne Urbain, Breakin basic)
              </li>
              <li>
                13h00 - 16h00 : Travail de création : Création originale (Cher
                Training)
              </li>
            </ul>
          </div>
        </div>
        <div className="luApropos">
          <div className="divInfoTextLu">
            <h4>Tarifs</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JeuneBallet;

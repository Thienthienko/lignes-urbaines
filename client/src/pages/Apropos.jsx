import MarionImg from "../assets/images/marion.jpg";
import LeaImg from "../assets/images/lea.jpg";
import "animate.css";

function Apropos() {
  return (
    <div className="globalContainer">
      <h2>LA COMPAGNIE</h2>
      <div className="principalBloc">
        <div className="luApropos animate__animated animate__bounceIn">
          <div className="divInfoTextLu">
            <p>
              Fondée en novembre 2014 par Marion Blanchot, Lignes Urbaines est
              dans un premier temps une compagnie de danse visant à promouvoir
              le métissage des cultures à travers l’audace et le questionnement
              des acquis. L'intention est désormais de s’ouvrir à la
              collaboration interdisciplinaire, et de faire du lien humain une
              ressource principale.
            </p>
            <p>
              Créations chorégraphiques, projets audiovisuels, transmission
              pédagogique, sensibilisation à travers la rencontre entre la danse
              et le reste.
            </p>
            <p>
              " J'aimerais mettre en relief le langage des cultures ainsi que
              leur capacité à être expérimentées de manière variée et
              personnelle, dans le respect de leur authenticité et de leur
              essence. Aller à la croisée des chemins, à la recherche d’un
              propos combiné, un double point de vue perpétuel qui ouvre le
              champ des possibles au-delà des codes inconsciemment instaurés.
              Permettre un échange qui puisse porter les valeurs profondes de
              ces arts qui méritent un regard élargi, tout en restant fidèle à
              leur quintessence."
            </p>
            <p>
              Lignes Urbaines se veut donc un point de passage, un esprit de
              respect et une curiosité furieuse.
            </p>
          </div>
        </div>
        <div className="marionApropos animate__animated animate__bounceIn">
          <div className="divInfo ">
            <img src={MarionImg} alt="Marion" />
          </div>
          <div className="divInfoText">
            <h3>Marion BLANCHOT</h3>
            <h4>DIRECTRICE ARTISTIQUE</h4>
            <p>
              Issue de formation moderne et contemporaine, Marion trouve
              rapidement son influence dans la culture hip-hop lors
              d’entrainements underground. Elle se forme alors aux danses
              urbaines à Paris, Berlin, Tokyo ou encore Séoul. En 2014 elle
              lance l’enseignement de ce qu’elle baptise alors le « moderne
              urbain » : la croisée entre danse contemporaine et les influences
              urbaines, qu’elles soient techniques, méthologiques ou encore
              musicales.
            </p>
          </div>
        </div>
        <div className="leaApropos animate__animated animate__bounceIn">
          <div className="divInfo">
            <img src={LeaImg} alt="Lea" />
          </div>
          <div className="divInfoText">
            <h3>Léa DE SAINT JEAN</h3>
            <h4>ADMINISTRATRICE</h4>
            <p>
              Professeur de street jazz, Léa pratique la danse hip hop depuis
              ses 12 ans et l’enseigne depuis 2014 afin de partager et
              transmettre ses savoirs à ses élèves. Elle se forme à travers des
              cours et des stages de street jazz, LA style, new style,
              dancehall, break dance à Lyon. Elle a aussi fait partie d’un crew
              de danse hip hop avec lequel elle est allée au World of Danse à
              Paris en 2018. Elle réalise des projets de danse hip hop avec ses
              élèves comme des représentations pour la Fête de la musique, la
              Fête des Mousselines, le Sanda Profight, ou encore des clips
              vidéos…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;

import MarionImg from "../assets/images/marion.jpg";
import LeaImg from "../assets/images/lea.jpg";
import "animate.css";

function Apropos() {
  return (
    <div className="globalContainer">
      <h2>La Compagnie</h2>
      <div className="principalBloc">
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

import MarionImg from "../assets/images/marion.jpg";

function Apropos() {
  return (
    <div className="globalContainer">
      <h2>Apropos</h2>
      <div className="principalBloc">
        <div className="marionApropos">
          <div className="divInfo">
            <img src={MarionImg} alt="Marion" />
          </div>
          <div className="divInfoText">
            <h3>Marion Blanchot</h3>
            <h4>DIRECTRICE ARTISTIQUE</h4>
            <p>
              Issue de formation moderne et contemporaine, Marion trouve
              rapidement son influence dans la culture hip-hop lors
              d’entrainements underground. Elle se forme alors aux danses
              urbaines à Paris, Berlin, Tokyo ou encore Séoul. En 2014 elle
              lance l’enseignement de ce qu’elle baptise alors le « moderne
              urbain » : la croisée entre danse contemporaine et les influences
              urbaines, qu’elles soient techniques, méthologiques ou encore
              musicales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;

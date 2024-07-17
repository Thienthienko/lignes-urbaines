import IkoImg from "../assets/images/iko.jpg";

function Creations() {
  return (
    <div className="globalContainer">
      <h2>Créations</h2>
      <div className="principalBloc">
        <div className="marionApropos">
          <div className="divInfo">
            <img src={IkoImg} alt="iko" />
          </div>
          <div className="divInfo">
            <p>Spetacle Iko</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creations;

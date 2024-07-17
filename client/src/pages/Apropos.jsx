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
          <div className="divInfo">
            <p>Marion Blanchot</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;

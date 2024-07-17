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
            <p>Title : Spetacle Iko</p>
            <p>
              Description : Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Consectetur dicta, ullam, inventore laudantium eius modi
              fuga veniam velit neque amet aliquam architecto perferendis harum
              explicabo quae. Inventore eum quas quidem.
            </p>
            <p>Image : </p>
            <p>Interprètes : Laurène, Lukas, Yous, Eva</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creations;

import AfficheJb from "../assets/images/jeuneballetaffiche.jpg";

function JeuneBallet() {
  return (
    <div className="globalContainer">
      <h2>Jeune Ballet</h2>

      <div className="principalBloc">
        <img className="afficheJb" src={AfficheJb} alt="" />
      </div>
    </div>
  );
}

export default JeuneBallet;

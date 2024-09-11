import videoBg from "../assets/images/videoBg.mp4";

function Accueil() {
  return (
    <div className="mainAccueil">
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted />
      <div className="contentAccueil">
        <h1>Compagnies Lignes Urbaines</h1>
      </div>
    </div>
  );
}

export default Accueil;

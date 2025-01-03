import MarionImg from "../assets/images/marion.jpg";
import Footer from "../components/Footer";
import "animate.css";
import Navbar from "../components/Navbar";

function Apropos() {
  return (
    <div>
      <Navbar />
      <div className="page-Container">
        <h2 className="animate__animated animate__pulse">
          LA <span>COMPAGNIE</span>
        </h2>
        <div className="page-Container -block">
          <div className="luApropos">
            <div className="divInfoTextLu">
              <p>
                Fondée en novembre <b>2014</b> par <b>Marion Blanchot</b>,
                Lignes Urbaines est dans un premier temps une compagnie de danse
                visant à <b>promouvoir le métissage des cultures</b> à travers
                l’audace et le questionnement des acquis.
              </p>
              <p>
                L'intention est désormais de s’ouvrir à la{" "}
                <b>collaboration interdisciplinaire,</b> et de faire du lien
                humain une ressource principale.
              </p>
              <p>
                Créations chorégraphiques, projets audiovisuels, transmission
                pédagogique, sensibilisation à travers la rencontre entre la
                danse et le reste.
              </p>
              <p>
                <span>"</span> J'aimerais mettre en relief le langage des
                cultures ainsi que leur capacité à être expérimentées de manière
                variée et personnelle, dans le respect de leur{" "}
                <b>authenticité</b> et de leur <b>essence</b>. Aller à la
                croisée des chemins, à la recherche d’un propos combiné, un
                double point de vue perpétuel qui ouvre le champ des possibles
                au-delà des codes inconsciemment instaurés. Permettre un échange
                qui puisse porter les valeurs profondes de ces arts qui méritent
                un regard élargi, tout en restant fidèle à leur{" "}
                <b>quintessence</b>.<span>"</span>
              </p>
              <p>
                Lignes Urbaines se veut donc un point de passage, un{" "}
                <b>esprit de respect</b> et une <b>curiosité furieuse</b>.
              </p>
            </div>
          </div>
          <section className="marionLea">
            <div className="marionApropos animate__animated animate__pulse">
              <div className="divInfo ">
                <img src={MarionImg} alt="Marion" />
              </div>
              <div className="divInfoText">
                <h3>Marion BLANCHOT</h3>
                <h4>
                  <em>DIRECTRICE ARTISTIQUE</em>
                </h4>
                <hr className="custom-line" />
                <p>
                  Issue de formation moderne et contemporaine, Marion trouve
                  rapidement son influence dans la culture hip-hop lors
                  d’entrainements underground. Elle se forme alors aux danses
                  urbaines à Paris, Berlin, Tokyo ou encore Séoul. En 2014 elle
                  lance l’enseignement de ce qu’elle baptise alors le « moderne
                  urbain » : la croisée entre danse contemporaine et les
                  influences urbaines, qu’elles soient techniques,
                  méthodologiques ou encore musicales.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="wrapperFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Apropos;

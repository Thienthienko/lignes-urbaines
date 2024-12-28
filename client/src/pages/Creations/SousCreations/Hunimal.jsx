import CreationHunimal from "../../../assets/images/hunimal.jpg";
import Footer from "../../../components/Footer";

function Hunimal() {
  return (
    <div className="page-Container">
      <h2>HUNIMAL</h2>
      <div className="containerIko">
        <img className="creationIkoImg" src={CreationHunimal} alt="" />
        <div className="luApropos">
          <div className="divInfoTextLu">
            <p>
              De nos jours, à l’heure où les avancées technologique, médicale ou
              encore sociétale ne cessent de s’accroître, on constate que l’être
              humain conserve certains codes primitifs, relatifs au comportement
              animal, resté inchangé depuis des siècles. L’évolution aurait elle
              ses limites ? Ou bien s’articule-t-elle perpétuellement autour
              d’un même schéma ?
            </p>
            <p>
              Le projet Hunimal est une création chorégraphique composée de
              quatre tableaux traitant les similitudes comportementales entre
              l’humain et l’animal au sein du groupe. Sept danseurs de style
              moderne et hip-hop se retrouvent autour d’une écriture
              chorégraphique métissée.
            </p>
            <p>
              <ul>
                La pièce connaît aujourd'hui deux projets annexes :
                <li>
                  <b>HUNIMAL BD :</b> en compagnie d'un dessinateur en live :
                  KIERAN
                </li>
                <li>
                  <b>HUNIMAL JUNIOR :</b> adapté pour médiation auprès des
                  enfants
                </li>
              </ul>
            </p>

            <ul>
              <li>
                <b>DURÉE PRÉVISIONNELLE :</b> 30MIN (ADAPTABLE)
              </li>
              <li>
                <b>DATE DE CRÉATION :</b> NOVEMBRE 2014{" "}
              </li>
              <li>
                <b>SOUTIENS :</b> CENTRE CHORÉGRAPHIQUE PÔLE PIK, BIZARRE-LA
                MACHINERIE
              </li>
            </ul>
            <p>
              <b>DISTRIBUTIONS :</b>
              <ul>
                <li>CAMILLE DUCATEL : Interprète</li>
                <li>ALEXANDRE LADOUR : Interprète</li>
                <li>JULIE JURADO : Interprète</li>
                <li>MYLÈNE MEY : Interprète</li>
                <li>LUCIEN MONTCHÉRY : Interprète</li>
                <li>SARAH ZIMMERMANN : Interprète</li>
                <li>MARION BLANCHOT : Chorégraphe/interprète</li>
                <li>ÉLODIE MONCHAMP : Remplaçante</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hunimal;

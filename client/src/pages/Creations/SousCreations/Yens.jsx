import CreationYen from "../../../assets/images/130yen.png";
import Footer from "../../../components/Footer";

function Yens() {
  return (
    <div className="page-Container">
      <h2>
        130 <span>Yens</span>
      </h2>
      <div className="containerIko">
        <img className="creationIkoImg" src={CreationYen} alt="" />
        <div className="luApropos">
          <div className="divInfoTextLu">
            <p>
              "C'est ce qu'il fallu pour prendre mon premier métro japonais.
              Prendre ma première bouffée d'air nippone, ma première gifle d'un
              ailleurs. Pas un bruit dans la rame et le tumulte dans ma tronche.
              Un homme dort sur le siège voisin et relâche la tête sur l'épaule
              d'une inconnue qui n'ose bouger de peur de le froisser. Ce pays
              allait avoir raison de mes fantasmes."
            </p>
            <p>
              Cinq danseurs aux énergies métissées présentent leur vision
              occidentale du pays du soleil levant : Le Japon. La jeune
              chorégraphe Marion Blanchot souhaite partager l'expérience d'un
              voyage qui lui a été cher, au travers d'une pièce chorégraphique
              matérialisant les souvenirs d'une française saisie par la culture
              nippone.
            </p>
            <p>
              Quelles apparences ont été les plus mémorables ? Quelles
              impressions ont laissé leur trace ? Entre humour et réflexion,
              fascination et consternation, inspirés par l'univers manga, nos
              danseurs dressent ici le portrait des aspects prégnants d'une
              société étonnante et singulière.
            </p>
            <ul>
              <li>
                <b>DURÉE PRÉVISIONNELLE :</b> 50MIN (ADAPTABLE)
              </li>
              <li>
                <b>DATE DE CRÉATION :</b> MARS 2016{" "}
              </li>
              <li>
                <b>SOUTIENS :</b> CENTRE CHORÉGRAPHIQUE PÔLE PIK, CENTRE
                NATIONAL CHORÉGRAPHIQUE DE CRÉTEIL, CIE KÄFIG
              </li>
            </ul>
            <p>
              <b>DISTRIBUTIONS :</b>
              <ul>
                <li>FREDDY MADODÉ : Interprète</li>
                <li>ÉLODIE MONCHAMP : Interprète</li>
                <li>ANGEL SINANT : Interprète</li>
                <li>SARAH ZIMMERMANN : Interprète</li>
                <li>MARION BLANCHOT : Chorégraphe/interprète</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Yens;

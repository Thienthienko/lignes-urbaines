import Footer from "../../../components/Footer";
import CreationIko from "../../../assets/images/creaIko.jpeg";
import VideoIko from "../../../assets/images/videoIko.mp4";

function Iko() {
  return (
    <div className="page-Container">
      <h2 className="animate__animated animate__pulse">
        <span>IKŌ</span>
      </h2>
      <div className="containerIko">
        <img className="creationIkoImg" src={CreationIko} alt="" />
        <div className="luApropos">
          <div className="divInfoTextLu">
            <p>
              «J’avais peur dans le sens habituel de ne pas vouloir tomber et de
              me blesser, mais cela allait beaucoup plus loin que des coudes
              éraflés et des chevilles foulées. Ma vraie peur, la peur qui
              m’empêchait de sauter sur un banc ou d’essayer de me frayer un
              chemin sur une rampe, était la peur de ce que les autres
              penseraient de moi. Plus encore, que penserais-je de moi ? J’avais
              cultivé par inadvertance une façade impeccable de l’âge adulte.
              Les adultes ne sont pas supposés sauter sur des choses en public.
              Toute déviation du « normal » est suspecte. Ma peur de paraître
              stupide avait pris le pas sur mon désir de bouger, mais tout cela
              a changé lorsque j’ai rencontré le Parkour. » Julie Angel, auteure
              de l’ouvrage Breaking the jump.
            </p>
            <p>
              "Surmonter" paraît être le maître mot du Parkour. La peur, la
              fatigue, la lassitude, chaque étape vers l’apprentissage de cette
              technicité implique de franchir, trouver les solutions les plus
              efficientes, s’extraire du trouble parasite que nous adjure
              parfois l’esthétique. C’est ce qui m’a interpellée dans le
              Parkour.
            </p>
            <p>
              Marion imagine un spectacle à la croisée de deux mondes : celui du
              Parkour et de l’art chorégraphique. À travers un univers très
              influencé par la street culture, elle souhaite trouver le chemin
              juste pour rassembler les outils propres au Parkour et la
              technicité de l’art chorégraphique, en mettant en lumière une
              pratique encore peu représentée au plateau.
            </p>
            <p>
              Comment puiser justement de cet art qui s’extirpe de l’encombrant,
              qui trouve sa beauté dans le caractère absolu du mouvement, et
              supposer une proposition nouvelle au spectacle vivant ?
            </p>
            <p>
              En japonais, IKŌ a de nombreux homonymes et donc de nombreuses
              significations. Vestiges, idée, repos, acte de bravoure, belle
              senteur, pouvoir, influence... Celles qui attirent notre attention
              restent les notions de l’ultérieur, de l’intention, de la
              migration et de la transition. On souhaite ici mettre en scène
              dans le mouvement et l’espace l’idée d’un cloisonnement qui
              devient un moyen.
            </p>
            <div className="blocVideoInfo">
              <div className="videoIko">
                <video src={VideoIko} autoPlay loop muted />
              </div>
              <div className="infoNextVideo">
                <ul>
                  <li>
                    <b>DURÉE PRÉVISIONNELLE :</b> 50MIN (ADAPTABLE)
                  </li>
                  <li>
                    <b>DATE DE CRÉATION :</b> HIVER 2023{" "}
                  </li>
                  <li>
                    <b>SOUTIENS :</b> DRAC RHÔNE-ALPES, CAISSE DES DÉPÔTS
                    RÉGIONALE, LA MACHINERIE - BIZARRE!, LES STUDIOS DYPTIK,
                    KIMÉO, LA FRATERNELLE MAISON DU PEUPLE, PÔLE EN SCENES
                  </li>
                </ul>
                <p>
                  <b>DISTRIBUTIONS :</b>
                  <ul>
                    <li>EVA YAMANI : Traceuse interprète</li>
                    <li>LUKAS MILESI : Traceur Interprète</li>
                    <li>LAURÈNE D'ORAZIO : Danseuse interprète</li>
                    <li>YOUNES EL HAJJAMI : Danseur interprète</li>
                    <li>THÉOPHILE ORVELIN : Traceur interprète</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Iko;

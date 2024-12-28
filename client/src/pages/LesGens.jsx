import LeaImg from "../assets/images/leaLesGens.jpg";
import LaureneImg from "../assets/images/laureneLesGens.jpg";
import JuliaImg from "../assets/images/juliaLesGens.jpg";
import RomaneImg from "../assets/images/romaneLesGens.jpg";
import LeaCImg from "../assets/images/leaCLesGens.jpg";
import AlexandreImg from "../assets/images/alexandreLesGens.jpg";
import JulieJImg from "../assets/images/julieJLesGens.jpg";
import FreddyMImg from "../assets/images/freddyMLesGens.jpg";
import MyleneMImg from "../assets/images/myleneMLesGens.jpg";
import ElodieMImg from "../assets/images/elodieMLesGens.jpg";
import LucienMImg from "../assets/images/lucienMLesGens.jpg";
import LukasMImg from "../assets/images/lukasMLesGens.jpg";
import CarlaMImg from "../assets/images/carlaLesGens.jpg";
import SachaNImg from "../assets/images/sachaNLesGens.jpg";
import JeromeOImg from "../assets/images/jeromeOLesGens.jpg";
import EvaYImg from "../assets/images/evaYLesGens.jpg";
import SarahZImg from "../assets/images/sarahZLesGens.jpg";
import CamilleDImg from "../assets/images/camilleDLesGens.jpg";
import Footer from "../components/Footer";
import "animate.css";
import Navbar from "../components/Navbar";

function LesGens() {
  return (
    <div>
      <Navbar />
      <div className="page-Container">
        <h2 className="animate__animated animate__pulse">
          LES <span>GENS</span>
        </h2>
        <div className="boxLesGens">
          <div className="imgLesGens">
            <img src={LeaImg} alt="Lea" />
            <h4>LÉA DE SAINT JEAN</h4>
            <h5>Administratrice</h5>
          </div>
          <div className="imgLesGens">
            <img src={JuliaImg} alt="Julia" />
            <h4>JULIA DERRIEN</h4>
            <h5>Danseuse interprète - Profil Bis</h5>
          </div>
          <div className="imgLesGens">
            <img src={RomaneImg} alt="Romane" />
            <h4>ROMANE GIRY</h4>
            <h5>Danseuse interprète - Profil Bis</h5>
          </div>
          <div className="imgLesGens">
            <img src={LeaCImg} alt="Lea" />
            <h4>LÉA GENET COLANTONIO</h4>
            <h5>Danseuse interprète - Profil Bis</h5>
          </div>
          <div className="imgLesGens">
            <img src={AlexandreImg} alt="Alexandre" />
            <h4>ALEXANDRE LADOUR</h4>
            <h5>Danseur interprète - Hunimal</h5>
          </div>
          <div className="imgLesGens">
            <img src={JulieJImg} alt="Julie" />
            <h4>JULIE JURADO</h4>
            <h5>Danseuse interprète - Hunimal</h5>
          </div>
          <div className="imgLesGens">
            <img src={FreddyMImg} alt="Freddy" />
            <h4>FREDDY MADODÉ</h4>
            <h5>Danseur interprète - 130 Yens</h5>
          </div>
          <div className="imgLesGens">
            <img src={MyleneMImg} alt="Mylene" />
            <h4>MYLÈNE MEY</h4>
            <h5>Danseuse interprète - Hunimal</h5>
          </div>
          <div className="imgLesGens">
            <img src={ElodieMImg} alt="Elodie" />
            <h4>ÉLODIE MONCHAMP</h4>
            <h5>Danseuse interprète - Hunimal - 130 Yens</h5>
          </div>
          <div className="imgLesGens">
            <img src={LucienMImg} alt="Lucien" />
            <h4>LUCIEN MONTCHÉRY</h4>
            <h5>Danseur interprète - Hunimal</h5>
          </div>
          <div className="imgLesGens">
            <img src={LaureneImg} alt="Lea" />
            <h4>LAURÈNE D'ORAZIO</h4>
            <h5>Danseuse interprète - IKO</h5>
          </div>
          <div className="imgLesGens">
            <img src={LukasMImg} alt="Lukas" />
            <h4>LUKAS MILESI</h4>
            <h5>Traceur interprète - IKO</h5>
          </div>
          <div className="imgLesGens">
            <img src={CarlaMImg} alt="Carla" />
            <h4>CARLA MUNIER</h4>
            <h5>Danseuse interprète - Profil Bis</h5>
          </div>
          <div className="imgLesGens">
            <img src={SachaNImg} alt="Sacha" />
            <h4>SACHA NÉEL</h4>
            <h5>Danseuse interprète - Profil Bis</h5>
          </div>
          <div className="imgLesGens">
            <img src={JeromeOImg} alt="Jérome" />
            <h4>JÉROME OUSSOU</h4>
            <h5>Danseur interprète - 130 Yens</h5>
          </div>
          <div className="imgLesGens">
            <img src={EvaYImg} alt="Eva" />
            <h4>EVA YAMANI</h4>
            <h5>Traceuse interprète - IKO</h5>
          </div>
          <div className="imgLesGens">
            <img src={SarahZImg} alt="Sarah" />
            <h4>SARAH ZIMMERMANN</h4>
            <h5>Danseuse interprète - Hunimal - 130 Yens</h5>
          </div>
          <div className="imgLesGens">
            <img src={CamilleDImg} alt="Camille" />
            <h4>CAMILLE DUCATEL</h4>
            <h5>Danseuse interprète - Hunimal</h5>
          </div>
        </div>
        <div className="wrapperFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LesGens;

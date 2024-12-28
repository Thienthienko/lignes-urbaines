import Footer from "../components/Footer";
import profilBisMedia1 from "../assets/images/profilBisMedia1.jpg";
import profilBisMedia2 from "../assets/images/profilBisMedia2.jpg";
import ikigaiMedia1 from "../assets/images/ikigaiMedia1.jpg";
import ikigaiMedia2 from "../assets/images/ikigaiMedia2.jpg";
import Navbar from "../components/Navbar";

function Medias() {
  return (
    <div>
      <Navbar />
      <div className="page-Container">
        <h2>
          <span>GALLERIE</span>
        </h2>

        <div className="mediasFlexContainer">
          {/* Grande Image */}
          <img src={profilBisMedia1} alt="Profil Bis" />

          {/* Groupe de Petites Images */}
          <div className="mediaGroup">
            <img src={profilBisMedia2} alt="Profil Bis" />
            <img src={ikigaiMedia1} alt="Ikigai Battle" />
          </div>

          {/* Autres Médias */}
          <img src={ikigaiMedia2} alt="Ikigai Battle" />

          {/* Une autre Grande Image */}
          <img src={profilBisMedia1} alt="Profil Bis" />

          {/* Un autre Groupe de Petites Images */}
          <div className="mediaGroup">
            <img src={profilBisMedia2} alt="Profil Bis" />
            <img src={ikigaiMedia1} alt="Ikigai Battle" />
          </div>
        </div>

        <div className="wrapperFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Medias;

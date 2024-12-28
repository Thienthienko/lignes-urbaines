import Footer from "../components/Footer";
import AfficheIkigai from "../assets/images/ikigai.jpg";
import Navbar from "../components/Navbar";

function Ikigai() {
  return (
    <div>
      <Navbar />
      <div className="page-Container">
        <h2 className="animate__animated animate__pulse">
          BATTLE <span>IKIGAÏ</span>
        </h2>
        <div className="page-Container -block">
          <img src={AfficheIkigai} alt="" />
        </div>
        <div className="wrapperFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Ikigai;

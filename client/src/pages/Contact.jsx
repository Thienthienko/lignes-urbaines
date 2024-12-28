import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="page-Container">
        <h2 className="animate__animated animate__pulse">
          <span>CONTACT</span>
        </h2>
        <div>
          <div className="page-Container -block">
            <div className="leftRightContainer">
              <div className="leftBloc">
                <h3>Une demande ? Un projet ?</h3>
                <h4>Nous serons ravi d'en parler avec vous.</h4>
                <hr className="custom-lineWhite" />
                <p>+33 6 14 83 89 97</p>
                <p>
                  Vous pouvez nous envoyer un mail sur l'adresse
                  <b>compagnies.lignes.urbaines@gmail.com</b>
                </p>
                <p>140 cours Emile Zola 69100 Villeurbanne</p>
                <div className="iconContact">
                  <a
                    href="https://www.instagram.com/compagnie.lignes.urbaines/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Instagram} alt="Logo Instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Compagnie-Lignes-Urbaines-100063450177191/?paipv=0&eav=AfYHFFuKfZ8iH9A4JQPa9Z_IYp4oLPIsn5VPmgS9VRaHF3fzXfQE9_DdD8iQmHP5Y7k&_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Facebook} alt="Logo Facebook" />
                  </a>
                </div>
              </div>
              <div className="rightBloc">
                <form>
                  <div className="row formRow">
                    <div className="firstNameInput">
                      <input
                        type="text"
                        className="form-control formInput"
                        placeholder="Prénom"
                      />
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="lastNameInput">
                      <input
                        type="text"
                        className="form-control formInput"
                        placeholder="Nom"
                      />
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="emailInput">
                      <input
                        type="text"
                        className="form-control formInput"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="row formRow">
                      <div className="messageInput">
                        <textarea
                          rows={3}
                          className="form-control formInput"
                          placeholder="Message*"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submitButton">
                    <button type="submit">Envoyer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

// import { useEffect, useState } from "react";
// import { useUserContext } from "../components/contexts/UserContext";
import { Link } from "react-router-dom";
import IkoCreation from "../../assets/images/ikoImg.jpg";
import ProfilCreation from "../../assets/images/profilbis2.jpg";
import YensCreation from "../../assets/images/130yen2.jpg";
import HunimalCreation from "../../assets/images/hunimal.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Creations() {
  return (
    <div>
      <Navbar />
      <div className="page-Container">
        <h2 className="animate__animated animate__pulse">
          LES <span>CRÉATIONS</span>
        </h2>
        <div className="principalBloc">
          <div className="creationsBloc">
            <section className="creationsSection">
              <div className="principalSection">
                <img className="principalSectionImg" src={IkoCreation} alt="" />
              </div>
              <div className="secondSection">
                <p className="creationTextTitre">IKO</p>

                <p className="creationTextDesc">
                  ‘‘Surmonter’’ paraît être le maître mot du Parkour. La peur,
                  la fatigue, la lassitude,chaque étape vers l’apprentissage de
                  cette discipline implique de franchir des obstacles. Comment
                  puiser de cet art, qui s’extirpe de l’encombrant, une
                  proposition nouvelle au spectacle vivant ? IKŌ est un
                  spectacle à la croisée de deux mondes : celui du Parkour et de
                  l’art chorégraphique.
                </p>
                <p className="creationTextDancer">
                  <em>
                    Eva YANAMI, Lukas MILESIN, Laurène D’ORAZIO, Younes EL
                    HAJJAMI, Théophile ORVELIN
                  </em>
                </p>
                <hr className="custom-line" />
                <Link className="moreAbout" to="/iko">
                  En savoir plus
                </Link>
              </div>
            </section>
            <section className="creationsSection">
              <div className="principalSection">
                <img
                  className="principalSectionImg"
                  src={ProfilCreation}
                  alt=""
                />
              </div>
              <div className="secondSection">
                <p className="creationTextTitre">Profil Bis</p>
                <p className="creationTextDesc">
                  Lignes Urbaines propose une présentation du travail abordé
                  durant sa résidence de création pour le spectacle PROFIL BIS à
                  la Ferme du Vinatier, suivi d'un temps d'échange avec les
                  personnes présentes.
                </p>

                <p className="creationTextDancer">
                  <em>
                    Marion BLANCHOT, Julia DERRIEN, Romaine GIRY, Lea
                    COLANTONIO, Carla BOUCA, Sacha NEEL
                  </em>
                </p>

                <hr className="custom-line" />
                <Link className="moreAbout" to="/profilbis">
                  En savoir plus
                </Link>
              </div>
            </section>
            <section className="creationsSection">
              <div className="principalSection">
                <img
                  className="principalSectionImg"
                  src={YensCreation}
                  alt=""
                />
              </div>
              <div className="secondSection">
                <p className="creationTextTitre">130 Yens</p>
                <p className="creationTextDesc">
                  Le prix du métro japonais, d’une première bouffée d’air
                  nippon, d’une première gifle d’un ailleurs pour Marion
                  Blanchot. Associant danse moderne et hip-hop, la chorégraphe
                  partage l’expérience d’un voyage mémorable entre humour et
                  réflexion, fascination et consternation.
                </p>
                <p className="creationTextDancer">
                  <em>
                    Marion BLANCHOT, Eddy DJEBARAT, Élodie MONCHAMP, Angel
                    SINANT, Sarah ZIMMERMANN
                  </em>
                </p>
                <hr className="custom-line" />
                <Link className="moreAbout" to="/yens">
                  En savoir plus
                </Link>
              </div>
            </section>
            <section className="creationsSection">
              <div className="principalSection">
                <img
                  className="principalSectionImg"
                  src={HunimalCreation}
                  alt=""
                />
              </div>
              <div className="secondSection">
                <p className="creationTextTitre">Hunimal</p>
                <p className="creationTextDesc">
                  Fondée en 2014 par la jeune danseuse Marion Blanchot, la
                  compagnie vise à mettre en avant le métissage des danses
                  contemporaine et Hip Hop. Hunimal est une création pour sept
                  danseurs qui traite des similitudes comportementales entre
                  l’humain et l’animal.
                </p>
                <p className="creationTextDancer">
                  <em>
                    Marion BLANCHOT, Alexandre LADOUR, Lucien MONCHERIT, Elodie
                    MONCHAMP, Julie JURADO, Camille DUCATEL, Milène MEY
                  </em>
                </p>
                <hr className="custom-line" />

                <Link className="moreAbout" to="/hunimal">
                  En savoir plus
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div className="wrapperFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Creations;

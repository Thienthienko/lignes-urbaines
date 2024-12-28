import AfficheJb from "../assets/images/jeuneballetaffiche.jpg";
import Footer from "../components/Footer";
// import JbBanner from "../assets/images/Fond-hello-asso.jpg";
import Navbar from "../components/Navbar";
import HelloAsso from "../assets/images/helloasso.svg";

function JeuneBallet() {
  return (
    <div>
      <Navbar />
      <div className="page-Container">
        <h2 className="animate__animated animate__pulse">
          JEUNE <span>BALLET</span>
        </h2>

        <div className="page-Container -block">
          {/* <img src={JbBanner} alt="Affiche du Jeune Ballet" /> */}
          <section className="marionLea">
            <div className="marionApropos">
              <div className="divInfo ">
                <img className="afficheJb" src={AfficheJb} alt="" />
              </div>
              <div className="divInfoText">
                <h3>SAISON 2025</h3>
                <h4>FORMATION CHORÉGRAPHIQUE COMPLÉMENTAIRE</h4>
                <hr className="custom-line" />
                <p>
                  Le Jeune Ballet de la compagnie Lignes Urbaines est une
                  formation en danse contemporaine visant à développer chez le
                  jeune danseur qui se destine à une carrière professionnelle sa
                  propre identité artistique.
                </p>
                <p>
                  Le travail, effectué tant sur le plan technique que sur le
                  plan de l’interprétation, permet à chaque jeune danseur de
                  répondre de manière optimale aux exigences qu’il va rencontrer
                  lors des auditions pour entrer dans le monde professionnel.
                </p>
              </div>
            </div>
          </section>
          <h3>TARIFS</h3>
          <section>
            <div className="containerPriceCard">
              <h4>
                JEUNE <span>BALLET</span>
              </h4>
              <div className="priceCards">
                <div className="priceCard">
                  <div className="headPriceCard">
                    <h4>Tarif plein</h4>
                  </div>
                  <div className="priceContent">
                    <div className="priceBlock">
                      <h5>
                        <span className="euro">600 €</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="priceCard">
                  <div className="headPriceCard">
                    <h4>Tarif solidarité</h4>
                  </div>
                  <div className="priceContent">
                    <div className="priceBlock">
                      <h5>
                        <span className="euro">550 €</span>
                      </h5>
                      <ul className="solidaire">
                        <li>RSA, AHH</li>
                        <hr className="custom-line2" />

                        <li>Étudiants</li>
                        <hr className="custom-line2" />

                        <li>ARE, intermitence</li>
                        <hr className="custom-line2" />

                        <li>Revenus inférieur à 1500 €</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h4>
                COURS <span>OPEN</span>
              </h4>
              <div className="priceCards">
                <div className="priceCard">
                  <div className="headPriceCard">
                    <h4>Carte à l'unité</h4>
                  </div>
                  <div className="priceContent">
                    <div className="priceBlock">
                      <h5>
                        <span className="euro">14 €</span>
                      </h5>
                    </div>
                    <a
                      className="priceButton"
                      href="https://www.helloasso.com/associations/lignes-urbaines/evenements/cours-open-lignes-urbaines"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Commander sur HelloAsso pour les cours Open de Lignes Urbaines"
                    >
                      <img
                        src={HelloAsso}
                        alt="Commander sur HelloAsso"
                        className="helloAssoImage"
                      />
                    </a>
                  </div>
                </div>
                <div className="priceCard">
                  <div className="headPriceCard">
                    <h4>Carte 10 cours</h4>
                  </div>
                  <div className="priceContent">
                    <div className="priceBlock">
                      <h5>
                        <span className="euro">120 €</span>
                      </h5>
                    </div>
                    <a
                      className="priceButton"
                      href="https://www.helloasso.com/associations/lignes-urbaines/evenements/cours-open-lignes-urbaines"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Commander sur HelloAsso pour les cours Open de Lignes Urbaines"
                    >
                      <img
                        src={HelloAsso}
                        alt="Commander sur HelloAsso"
                        className="helloAssoImage"
                      />
                    </a>
                  </div>
                </div>
                <div className="priceCard">
                  <div className="headPriceCard">
                    <h4>Carte 15 cours</h4>
                  </div>
                  <div className="priceContent">
                    <div className="priceBlock">
                      <h5>
                        <span className="euro">165 €</span>
                      </h5>
                    </div>
                    <a
                      className="priceButton"
                      href="https://www.helloasso.com/associations/lignes-urbaines/evenements/cours-open-lignes-urbaines"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Commander sur HelloAsso pour les cours Open de Lignes Urbaines"
                    >
                      <img
                        src={HelloAsso}
                        alt="Commander sur HelloAsso"
                        className="helloAssoImage"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <h3>CALENDRIER</h3>

          <div className="blocMois">
            <div className="divInfoTextLuMois">
              <ul className="mois">
                <div className="moisBack">
                  <b>JANVIER 2025</b>
                </div>
                <li>
                  Dim. <b>05</b> janvier
                </li>
                <li>
                  Dim. <b>12</b> janvier
                </li>
                <li>
                  Dim. <b>26</b> janvier
                </li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                <div className="moisBack">
                  <b>FÉVRIER 2025</b>
                </div>
                <li>
                  Dim. <b>02</b> février
                </li>
                <li>
                  Dim. <b>16</b> février
                </li>
                <li>
                  Dim. <b>23</b> février
                </li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                <div className="moisBack">
                  <b>MARS 2025</b>
                </div>
                <li>
                  Dim. <b>16</b> mars
                </li>
                <li>
                  Dim. <b>30</b> mars
                </li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                <div className="moisBack">
                  <b>AVRIL 2025</b>
                </div>
                <li>
                  Dim. <b>13</b> avril
                </li>
                <li>
                  Dim. <b>27</b> avril
                </li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                <div className="moisBack">
                  <b>MAI 2025</b>
                </div>
                <li>
                  Dim. <b>11</b> mai
                </li>
                <li>
                  Dim. <b>25</b> mai
                </li>
              </ul>
            </div>
            <div className="divInfoTextLuMois">
              <ul className="mois">
                <div className="moisBack">
                  <b>JUIN 2025</b>
                </div>
                <li>
                  Dim. <b>01</b> juin
                </li>
                <li>
                  Dim. <b>15</b> juin
                </li>
                <li>
                  Dim. <b>29</b> juin
                </li>
              </ul>
            </div>
          </div>

          {/* <h3>JOURNÉE TYPE</h3>
          <div className="journeeType">
            <div className="journee">
              <div className="horaire">
                <p>9H00</p>
                <p>-</p>
                <p>10H30</p>
              </div>
              <div className="infoJour">
                <p>
                  <b>COURS TECHNIQUE OU PRÉPARATION PHYSIQUE</b>
                </p>
                <p>
                  <em>(Ouvert aux open)</em>
                </p>
              </div>
            </div>

            <div className="journee">
              <div className="horaire">
                <p>10h30</p>
                <p>-</p>
                <p>12h00</p>
              </div>
              <div className="infoJour">
                <p>
                  <b>COURS TECHNIQUE</b>
                </p>
                <ul className="listeLigne">
                  <li>Contemporain,</li>
                  <li>Floorwork,</li>
                  <li>Moderne Urbain,</li>
                  <li>Breakin basic</li>
                </ul>
                <p>
                  <em>(Ouvert aux open)</em>
                </p>
              </div>
            </div>

            <div className="journee">
              <div className="horaire">
                <p>13h00</p>
                <p>-</p>
                <p>16h00 </p>
              </div>
              <div className="infoJour">
                <p>
                  <b>TRAVAIL DE CRÉATION</b>
                </p>
                <p>
                  Création originale : <b>Cher Training</b>
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="wrapperFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default JeuneBallet;

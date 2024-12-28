import CreationProfil from "../../../assets/images/profilbis.jpg";
import Footer from "../../../components/Footer";

function ProfilBis() {
  return (
    <div className="page-Container">
      <h2 className="animate__animated animate__pulse">
        Profils <span>Bis</span>
      </h2>
      <div className="containerIko">
        <img className="creationIkoImg" src={CreationProfil} alt="" />
        <div className="luApropos">
          <div className="divInfoTextLu">
            <p>
              "Cinq danseuses sortent des studios pour aller entrer dans les
              cercles. Cinq meufs qui veulent rester pieds nus vont apprendre la
              rue."
            </p>
            <p>
              Profil Bis raconte le parcours de cinq danseuses issues d'un cycle
              académique, évoluant désormais au sein d'une culture urbaine. De
              la petite fille qui rêve de s'égarer dans un monde meilleur au
              sien, à la femme accomplie qui se nourrit des contrastes que la
              vie lui offre, le circuit qui les rassemble est des plus
              intéressant voire surprenant.
            </p>
            <p>
              Éduquées au sein des studios par une hiérarchie bien définie,
              comment ces cinq danseuses aux profils variés ont-elles vécu la
              découverte d'un système rebelle et spontané que représente le
              hip-hop?
            </p>
            <p>
              Quelles difficultés ont-elles rencontré durant leur initiation à
              des codes différents de leurs automatismes? Malgré leur curiosité
              et leur passion, ont-elles leur place au sein d'un milieu dans
              lequel elles n'ont pas grandi?
            </p>
            <p>
              A travers et au delà des clichés, nous vivrons la volonté de
              s'évader de sa propre culture et la confrontation à une réalité
              plus complexe que nos idéaux.
            </p>
            <p>
              Un adapté de rue a été mis en place, en adéquation avec la culture
              hip-hop urbaine, afin d'y ajouter une dimension d'espace large et
              libre, des connexions artistiques variées, ainsi qu'un échange
              avec le public ouvert à la collaboration.
            </p>
            <ul>
              <li>
                <b>DURÉE PRÉVISIONNELLE :</b> 50MIN (ADAPTABLE)
              </li>
              <li>
                <b>DATE DE CRÉATION :</b> JANVIER 2018{" "}
              </li>
              <li>
                <b>SOUTIENS :</b> POLE EN SCENES, FESTIVAL KARAVEL, STUDIOS
                DYPTIK, SCENE DÉCOUVERTE LE CROISEUR, CENTRE CULTUREL JEAN
                MOULIN, MJC LAENNEC-MERMOZ, MJC JEAN COCTEAU, FERME DU VINATIER
              </li>
            </ul>
            <p>
              <b>DISTRIBUTIONS :</b>
              <ul>
                <li>JULIA DERRIEN : Interprète</li>
                <li>LÉA GENET : Interprète</li>
                <li>ROMANE GIRY : Interprète</li>
                <li>CARLA MUNIER : Interprète</li>
                <li>SACHA NÉEL : Interprète</li>
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

export default ProfilBis;

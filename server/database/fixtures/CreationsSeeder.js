const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

const creations = [
  {
    title: "Profil Bis",
    description:
      "Lignes Urbaines propose une présentation du travail abordé durant sa résidence de création pour le spectacle PROFIL BIS à la Ferme du Vinatier, suivi d'un temps d'échange avec les personnes présentes.",
    img: "profilbis2.jpg",
    dancer:
      "Marion BLANCHOT, Julia DERRIEN, Romaine GIRY, Lea COLANTONIO, Carla BOUCA, Sacha NEEL",
  },
  {
    title: "Hunimal",
    description:
      "Fondée en 2014 par la jeune danseuse Marion Blanchot, la compagnie vise à mettre en avant le métissage des danses contemporaine et Hip Hop. Hunimal est une création pour sept danseurs qui traite des similitudes comportementales entre l’humain et l’animal.",
    img: "hunimal.jpg",
    dancer:
      "Marion BLANCHOT, Alexandre LADOUR, Lucien MONCHERIT, Elodie MONCHAMP, Julie JURADO, Camille DUCATEL, Milène MEY, ",
  },
  {
    title: "130 Yens",
    description:
      "Le prix du métro japonais, d’une première bouffée d’air nippon, d’une première gifle d’un ailleurs pour Marion Blanchot. Associant danse moderne et hip-hop, la chorégraphe partage l’expérience d’un voyage mémorable entre humour et réflexion, fascination et consternation.",
    img: "130yen2.jpg",
    dancer:
      "Marion BLANCHOT, Eddy DJEBARAT, Élodie MONCHAMP, Angel SINANT, Sarah ZIMMERMANN",
  },
];

class CreationsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "creations", dependencies: [UserSeeder] });
  }

  run() {
    creations.forEach((creation) => {
      const values = {
        title: creation.title,
        description: creation.description,
        img: creation.img,
        dancer: creation.dancer,
      };
      this.insert(values);
    });
  }
}

module.exports = CreationsSeeder;

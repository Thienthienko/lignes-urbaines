const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

const creations = [
  {
    title: "First Creation",
    description: "Description of the first creation.",
    img: "ikigai.jpg",
    dancer: "Dancer One",
  },
  {
    title: "Second Creation",
    description: "Description of the second creation.",
    img: "profilbis.jpg",
    dancer: "Dancer Two",
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

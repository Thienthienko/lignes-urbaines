const path = require("path");
const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

const creations = [
  {
    title: "First Creation",
    description: "Description of the first creation.",
    img: path.join(__dirname, "../../public/assets/images/ikigai.jpg"),
    dancer_name: "Dancer One",
  },
  {
    title: "Second Creation",
    description: "Description of the second creation.",
    img: path.join(__dirname, "../../public/assets/images/profilbis.jpg"),
    dancer_name: "Dancer Two",
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
        dancer_name: creation.dancer_name,
      };
      this.insert(values);
    });
  }
}

module.exports = CreationsSeeder;

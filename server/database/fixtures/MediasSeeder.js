const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

const medias = [
  {
    title: "Laurène",
    img: "laurene.jpg",
  },
  {
    title: "Eva",
    img: "eva.jpg",
  },
];

class MediasSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "medias", dependencies: [UserSeeder] });
  }

  run() {
    medias.forEach((media) => {
      const values = {
        title: media.title,
        img: media.img,
      };
      this.insert(values);
    });
  }
}

module.exports = MediasSeeder;

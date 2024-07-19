const argon2 = require("argon2");
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;
  try {
    // Hashage du mdp avant création du User
    const hashedPassword = await argon2.hash(user.password);
    // Remplace le mdp par le Hashpassword
    user.password = hashedPassword;
    // Creation du user avec le mdp hashé
    const insertId = await tables.user.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Error in add function:", err);
    res.status(500).json();
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};

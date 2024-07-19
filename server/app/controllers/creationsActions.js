const path = require("path");
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const creations = await tables.creations.readAll();
    res.json(creations);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const creation = await tables.creations.read(req.params.id);
    if (creation == null) {
      res.sendStatus(404);
    } else {
      res.json(creation);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { title, description, dancer } = req.body;
  const img = req.file ? path.basename(req.file.path) : null; // Utilise seulement le nom de fichier
  try {
    const newCreation = {
      title,
      description,
      img,
      dancer,
    };
    const insertId = await tables.creations.create(newCreation);
    res.status(201).json({ insertId }); // Répond avec l'ID de la création créée
  } catch (err) {
    console.error("Erreur dans la fonction add :", err);
    res.status(500).json();
    next(err);
  }
};

const edit = async (req, res, next) => {
  const creation = req.body;
  try {
    const result = await tables.creations.update(req.params.id, creation);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error("Error in edit function:", err);
    res.status(500).json();
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.body;
  try {
    const deletedCreations = await tables.creations.delete(id);
    res.status(200).json({ deletedCreations });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};

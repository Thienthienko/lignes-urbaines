const path = require("path");
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const medias = await tables.medias.readAll();
    res.json(medias);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const media = await tables.medias.read(req.params.id);
    if (media == null) {
      res.sendStatus(404);
    } else {
      res.json(media);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { title, description, dancer } = req.body;
  const img = req.file ? path.basename(req.file.path) : null; // Utilise seulement le nom de fichier
  try {
    const newmedia = {
      title,
      description,
      img,
      dancer,
    };
    const insertId = await tables.medias.create(newmedia);
    res.status(201).json({ insertId }); // Répond avec l'ID de la création créée
  } catch (err) {
    console.error("Erreur dans la fonction add :", err);
    res.status(500).json();
    next(err);
  }
};

const edit = async (req, res, next) => {
  const media = req.body;
  try {
    const result = await tables.medias.update(req.params.id, media);
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
  try {
    const result = await tables.medias.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error("Error in delete function:", err);
    res.status(500).json();
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

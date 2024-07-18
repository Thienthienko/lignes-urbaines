// Import access to database tables
const path = require("path");
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all medias from the database
    const medias = await tables.medias.readAll();

    // Respond with the medias in JSON format
    res.json(medias);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific media from the database based on the provided ID
    const media = await tables.medias.read(req.params.id);

    // If the media is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the media in JSON format
    if (media == null) {
      res.sendStatus(404);
    } else {
      res.json(media);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
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
    // Update the specified media
    const result = await tables.medias.update(req.params.id, media);

    if (result.affectedRows === 0) {
      res.sendStatus(404); // If no rows were updated, the media was not found
    } else {
      res.sendStatus(204); // No content to send back, but the request was successful
    }
  } catch (err) {
    console.error("Error in edit function:", err);
    res.status(500).json();
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    // Delete the specified media
    const result = await tables.medias.delete(req.params.id);

    if (result.affectedRows === 0) {
      res.sendStatus(404); // If no rows were deleted, the media was not found
    } else {
      res.sendStatus(204); // No content to send back, but the request was successful
    }
  } catch (err) {
    console.error("Error in delete function:", err);
    res.status(500).json();
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};

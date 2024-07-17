// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all creations from the database
    const creations = await tables.creations.readAll();

    // Respond with the creations in JSON format
    res.json(creations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific creation from the database based on the provided ID
    const creation = await tables.creations.read(req.params.id);

    // If the creation is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the creation in JSON format
    if (creation == null) {
      res.sendStatus(404);
    } else {
      res.json(creation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  const creation = req.body;
  try {
    // Create a new creation
    const insertId = await tables.creations.create(creation);

    res.status(201).json({ insertId }); // Respond with the created creation's ID
  } catch (err) {
    console.error("Error in add function:", err);
    res.status(500).json();
    next(err);
  }
};

const edit = async (req, res, next) => {
  const creation = req.body;
  try {
    // Update the specified creation
    const result = await tables.creations.update(req.params.id, creation);

    if (result.affectedRows === 0) {
      res.sendStatus(404); // If no rows were updated, the creation was not found
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
    // Delete the specified creation
    const result = await tables.creations.delete(req.params.id);

    if (result.affectedRows === 0) {
      res.sendStatus(404); // If no rows were deleted, the creation was not found
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

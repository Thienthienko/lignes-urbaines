const express = require("express");

const upload = require("../../../multerConfig");

const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../../../controllers/creationsActions");

const router = express.Router();

router.get("/", browse);
router.get("/:id", read);
router.post("/", upload.single("image"), add);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;
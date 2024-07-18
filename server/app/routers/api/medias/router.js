const express = require("express");

const upload = require("../../../multerConfig");

const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../../../controllers/mediasActions");

const router = express.Router();

router.get("/", browse);
router.get("/:id", read);
router.post("/", upload.single("image"), add);
router.put("/:id", edit);
router.delete("/delete", destroy);

module.exports = router;

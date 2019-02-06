const router = require("express").Router();
const noteController = require("../../controller/notesControl");

router.route("/")
  .get(noteController.getAllNotes);

router.route("/:id")
  .get(noteController.getSingleNote);

module.exports = router;
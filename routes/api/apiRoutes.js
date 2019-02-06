const router = require("express").Router();
const noteController = require("../../controller/notesControl");

router.route("/")
  .get(noteController.getAllNotes)
  .post(noteController.postNote);

router.route("/:id")
  .get(noteController.getSingleNote)
  .delete(noteController.deleteNote);

module.exports = router;
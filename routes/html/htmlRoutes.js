const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res){
  console.log("HI");
  res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

module.exports = router;
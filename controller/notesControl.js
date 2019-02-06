const db = require("../db/connection");

module.exports = {
  getAllNotes: function(req, res){
    db.query("SELECT * FROM note_db.notes", function(err, data){
      if(err){
        console.log(err);
        throw err;
      }
      res.json(data);
    })
  },
  getSingleNote: function(req, res){
    db.query("SELECT * FROM note_db.notes WHERE id=?",[req.params.id], function(err, data){
      if(err){
        console.log(err);
        throw err;
      }
      res.json(data);
    })
  }
}
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
  },
  postNote: function(req, res){
    console.log(req.body);
    db.query("INSERT INTO notes SET ?",req.body, function(err, data){
      if(err){
        console.log(err);
        throw err;
      }
      res.json(true);
    })
  },
  deleteNote: function(req, res){
    console.log(req.body);
    db.query("DELETE FROM note_db.notes WHERE id=?",[req.params.id], function(err, data){
      if(err){
        console.log(err);
        throw err;
      }
      res.json(true);
    })
  }
}
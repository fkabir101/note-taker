const db = require("../db/connection");

module.exports = {
  // function to get all notes
  getAllNotes: function(req, res){
    db.query("SELECT * FROM notes", function(err, data){
      if(err){
        console.log(err);
        throw err;
      }
      res.json(data);
    })
  },
  // function to get single note
  getSingleNote: function(req, res){
    db.query("SELECT * FROM notes WHERE id=?",[req.params.id], function(err, data){
      if(err){
        console.log(err);
        throw err;
      }
      res.json(data);
    })
  },
  // function to post
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
  // function to delete
  deleteNote: function(req, res){
    console.log(req.body);
    db.query("DELETE FROM notes WHERE id=?",[req.params.id], function(err, data){
      if(err){
        console.log(err);
        throw err;
      }
      res.json(true);
    })
  }
}
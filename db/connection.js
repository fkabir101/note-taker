const mysql = require("mysql");
require("dotenv").config();

let connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.dbPassword,
    database: "note_db"
  });
}
module.exports = connection;
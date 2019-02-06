const mysql = require("mysql");
//require("dotenv").config();

//let connection;
var connection;

// Sets up db to connect locally or on JAWSDB if deployed
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nightmare10",
    //password: process.env.dbPassword,
    database: "notes_db"
  });
}
module.exports = connection;
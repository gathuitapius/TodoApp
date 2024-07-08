// import mysql from "mysql2";
const mysql = require("mysql2")
const con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "todo_db"
    }
)
con.connect(function(err) {
  if (err)
    {
        console.log(err);
    }else{
        console.log("Connected!");
    }
});


module.exports = con;
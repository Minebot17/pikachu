const express = require("express");
const jsonParser = express.json();
const app = express();
const mysql = require("mysql2");
const apiRouter = require("./routes/apiRouter.js");

global.connection = mysql.createConnection({
  host: "141.8.192.151",
  user: "f0386668_pikachu",
  database: "f0386668_pikachu",
  password: "123456789"
}).promise();

connection.connect()
  .then(res=>{console.log(`Connected to DB`)})
  .catch(err=>{console.log(`Connect to DB error: ${err}`)})

app.use("/api", apiRouter);
app.use("/", express.static(__dirname + "/build"));
app.use("/", function(req, resp){
    resp.redirect("/");
});

/*connection.query("SELECT TOP(5) * FROM posts ORDER BY rating;",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей
});*/

app.listen(3000);

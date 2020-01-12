const express = require("express");

const lentRouter = require("./routes/lentRouter.js");
const authRouter = require("./routes/authRouter.js");

const jsonParser = express.json();
const app = express();
const mysql = require("mysql2");
  
global.connection = mysql.createConnection({
  host: "141.8.192.151",
  user: "f0386668_pikachu",
  database: "f0386668_pikachu",
  password: "123456789"
}).promise();

connection.connect().then(res=>{console.log(`true`)}).catch(err=>{console.log(`err: ${err}`)})
 

app.use("/test", function(request, response){
  response.sendFile(__dirname + "/test.html");
});
app.use("/auth", authRouter);
app.use("/", lentRouter);


app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

/*connection.query("SELECT TOP(5) * FROM posts ORDER BY rating;",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей 
});*/
 
app.listen(3000);
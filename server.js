const express = require("express");
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
//const firstRouter = require("./routes/authRouter.js");

const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "141.8.192.151",
  user: "f0386668_pikachu",
  database: "f0386668_pikachu",
  password: "123456789"
});

 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 
app.get("/", function(request, response){
    connection.query("SELECT * FROM posts ORDER BY rating;",
  		function(err, results, fields) {
    		//console.log(err);
    		//console.log(results); // собственно данные
    		//console.log(fields); // мета-данные полей 
    		console.log(`jsssooonnn: ${results}`);
    		// отправляем ответ
    		response.send(results);
		}
	);
	/*console.log(`jsssooonnn: ${result}`);
    // отправляем ответ
    response.send(res);*/
});

//app.use("/users", firstRouter);;

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
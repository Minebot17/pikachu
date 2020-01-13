exports.login = function (request, response){
  if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    


    connection.query("SELECT * FROM users WHERE (login = ? OR email = ?);",[request.body.login, request.body.login])
  		.then(([rows, fields]) =>{
        console.log(`ress: "${rows}"`);
        if(rows == ""){
          console.log("not login");
          response.send("Пользователя с таким именем не существует");
        }
        if(rows[0].password == request.body.password){
          response.send(true);
        }
        else 
          response.send("Неверный пароль");
      })
      .catch(err=>{
         console.log(`err: ${err}`);
         response.send(err);
      })
};

exports.register = function(request, response){
  emailRegexp = /.*@.*/;

  if(!request.body) return response.sendStatus(400);

    if(emailRegexp.test(request.body.email)){
      console.log(request.body);
      console.log((new Date()).toISOString());
        connection.query(`INSERT INTO users(login, password, email, rating, dateRegistration) VALUES (?, ?, ?, 0, '${(new Date()).toISOString()}');`, 
        [request.body.login, request.body.password, request.body.email])
        .then(([rows, fields]) =>{
          console.log(`ress: ${rows}`);
          // отправляем ответ
          response.send(rows);
        })
        .catch(err=>{
           console.log(`err: ${err}`);
          response.send("Пользователь с таким именем уже существует");
        })
    }
    else response.send("Email не действителен");
};